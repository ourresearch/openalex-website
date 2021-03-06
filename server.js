const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

let app = express();


// this was helpful for configs:
// https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
app.use(serveStatic(__dirname + "/dist"));


const entityTypes = {
    "W": "works",
    "I": "institutions",
    "V": "venues",
    "A": "authors",
    "C": "concepts",
};


// match these:
// /w123.json
// /w123
// /W123
//
// // miss me with these:
// /w123.html
// /123
// /u123
const openAlexIdRegex = /^\/([wWiIvVaAcC]\d+)(\.json)?$/;

function requestPrefersJson(req) {
    var acceptTypes = {}

    for (const acceptPair of (req.headers.accept ?? "").split(",").map(a => a.split(";"))) {
        const acceptType = acceptPair[0];
        const acceptQuality = parseFloat((acceptPair[1] ?? "").split("q=")[1] ?? "1");
        acceptTypes[acceptType] = isNaN(acceptQuality) ? 1 : acceptQuality;
    }

    const maxQuality = Math.max.apply(null, Object.values(acceptTypes));
    const typesWithMaxQuality = Object.entries(acceptTypes).filter(e => e[1] >= maxQuality).map(e => e[0]);
    return typesWithMaxQuality.some(t => t.toLowerCase().includes("json"));
}

// if we want to always redirect to https, use this:
// https://medium.com/@seunghunsunmoonlee/how-to-enforce-https-redirect-http-to-https-on-heroku-deployed-apps-a87a653ba61e
// not going to implement for now because it's not essential and we're short on time.
app.get('*', function (req, res) {

    const pathIdMatches = req.path.match(openAlexIdRegex)

    // this is actually a PID that we need to resolve, not a page on this site.
    // we can resolve it to the API, or the web UI
    if (pathIdMatches) {
        const pathEndsInDotJson = !!pathIdMatches[2]
        const preferJson = requestPrefersJson(req);
        const subdomain = (pathEndsInDotJson || preferJson) ? "api" : "explore"

        const id = pathIdMatches[1]
        const idFirstLetter = id.substr(0, 1).toUpperCase()
        const entityType = entityTypes[idFirstLetter];

        const redirectUrl = `https://${subdomain}.openalex.org/${entityType}/${id}`
        res.redirect(301, redirectUrl);

    // the actually do want a webpage on openalex.org, so let's load up the Vue site
    } else {
        res.sendfile('./dist/index.html');
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port ' + port)
});