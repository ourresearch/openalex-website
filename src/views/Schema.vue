<template>
  <v-container fluid class="page">
    <v-container class="mb-12">
      <h2 class="text-h3">Schema</h2>
      <p>
        OpenAlex is built to be a drop-in replacement for <a
          href="https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/">Microsoft Academic Graph
        (MAG)</a>&mdash;that means the schema is backwards-compatible with
        <a href="https://docs.microsoft.com/en-us/academic-services/graph/reference-data-schema">MAG's schema</a>,
        allowing MAG users to switch over to OpenAlex with little fuss.. However, although the schemas are <em>compatible</em>
        they're not <em>identical.</em> There are three important categories of data in the schema below:
      </p>
      <ul>
        <li>
          <strong>❄️ Frozen:</strong> These columns are currently live and updated regularly using MAG data. However,
          after December 31st, when
          <a href="https://www.microsoft.com/en-us/research/project/academic/articles/microsoft-academic-to-expand-horizons-with-community-driven-approach/">MAG
            is retired,</a> they will <em>no longer be updated at all.</em> Although they will remain in the dataset for
          compatibility, their data will grow increasingly stale.
        </li>
        <li>
          <strong>🔥 New:</strong> These columns are not in MAG. They are currently live and updated regularly using our
          data, and will continue to be updated indefinitely.
        </li>
        <li>

          <strong>Ongoing:</strong> These columns are currently live and updated regularly using MAG data. AFter
          December 31st, they will continue to be updated indefinitely, but the data will come from us.
        </li>
      </ul>
    </v-container>


    <!--    BEGIN PASTED, AUTO-GENERATED CONTENT -->
    <div class='container-fluid' style='text-align: center;'>


      <a id='layout1'/>
      <div class='svgContainer'>
        <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%' height='1550'
             viewBox='0 0 1584 1550'>


          <defs>
            <radialGradient id='layoutBgB' cx='100%' cy='100%' r='100%'>
              <stop offset='0%' stop-color='#dfdfdf'/>
              <stop offset='100%' stop-color='#f2f2f2'/>
            </radialGradient>
            <pattern id="layoutBgA" width="60" height="34.64" patternUnits="userSpaceOnUse">
              <rect width="100%" height="100%" fill="#f5f5f5"/>
              <path class='bgPattern' d='M 0 17.32 L 10 0 L 30 0 L 40 17.326 L 30 34.64 L 10 34.64 Z'/>
              <path class='bgPattern' d='M 40 17.32 L 60 17.32 Z'/>
            </pattern>
            <!-- https://norbat.de/svg-pattern-3d-webmuster/ -->
            <linearGradient id='groupUnderTitleLine' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stop-color='#999999' stop-opacity='0.7'/>
              <stop offset='100%' stop-color='#999999' stop-opacity='0'/>
            </linearGradient>
            <radialGradient id='calloutGradient' cx='25%' cy='20%' r='80%' fx='10%' fy='10%'>
              <stop offset='0%' stop-color='#ffffff'/>
              <stop offset='100%' stop-color='#f8f6d1'/>
            </radialGradient>
            <filter id="shadow" width="120%" height="120%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#333" flood-opacity="0.2"/>
            </filter>
            <!--
  <filter id='shadow2' width='120%' height='120%'>
    <feOffset result='offOut' in='SourceGraphic' dx='0' dy='0' />
    <feColorMatrix result='matrixOut' in='offOut'
                   values='0.5 0 0 0 0 0 0.5 0 0 0 0 0 0.5 0 0 0 0 0 0.5 0' />
    <feGaussianBlur result='blurOut' in='matrixOut' stdDeviation='3' />
    <feBlend in='SourceGraphic' in2='blurOut' />
  </filter>
  -->
            <filter id='fkShadow' height='130%'>
              <feGaussianBlur in='SourceAlpha' stdDeviation='1.5'/> <!-- stdDeviation is how much to blur -->
              <feOffset dx='1.2' dy='1.2' result='offsetblur'/> <!-- how much to offset -->
              <feMerge>
                <feMergeNode/> <!-- this contains the offset blurred image -->
                <feMergeNode in='SourceGraphic'/> <!-- this contains the element that the filter is applied to -->
              </feMerge>
            </filter>
            <radialGradient id='legendGradient' cx='5%' cy='5%' r='100%'>
              <stop offset='0%' stop-color='#e4eeff' stop-opacity='1'/>
              <stop offset='100%' stop-color='#c3d2ea' stop-opacity='1'/>
            </radialGradient>
            <symbol id='calloutArrowDown'>
              <path d='M 0,0 L 8,12 L 16,0 z' style='fill:#f8f6d1;stroke:none; filter: url(#shadow);'/>
              <path d='M 0,0 L 8,12 L 16,0' style='stroke:#bebdbd; stroke-width:0.5;'/>
            </symbol>
            <symbol id='calloutArrowUp'>
              <path d='M 0,16 L 8,4 L 16,16 z' style='fill:#ffffff; stroke:none; filter: url(#shadow);'/>
              <path d='M 0,16 L 8,4 L 16,16' style='stroke:#bebdbd; stroke-width:0.5;'/>
            </symbol>
            <symbol id='pk' width="13" height="13">
              <g transform='scale(0.99)'>
                <path style='fill:#f0d938;stroke:#906b25;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;'
                      d='M 9.3678877,3.5695485 C 9.1030218,3.2729386 9.0796382,2.7628519 9.3396185,2.4517097 9.5449651,2.1956495 9.9040386,2.0980533 10.199638,2.2169415 10.533525,2.3415459 10.775153,2.706942 10.750675,3.0842709 10.737029,3.3980003 10.541153,3.699122 10.258248,3.8066067 9.966649,3.9250429 9.6169668,3.8418805 9.4008073,3.6062324 9.3894892,3.5943518 9.3785264,3.582104 9.3678886,3.5695487 z M 11.226617,6.9916004 C 11.888137,6.3548946 12.293488,5.4172188 12.311087,4.442353 12.378144,2.7379364 11.248678,1.0541269 9.7322318,0.44767357 8.3887112,-0.1280313 6.7865012,0.26822889 5.8918395,1.4007929 5.080823,2.3839145 4.9336815,3.8452096 5.3635544,5.101615 L 4.3670905,5.315913 C 4.0664984,5.3682645 4.0967703,5.6316724 4.2574957,5.8208829 L 4.9124,6.5655244 4.1543436,7.2512357 3.2136002,7.2163506 3.1674775,8.5586827 2.0406832,8.5086512 1.5965306,8.9299953 1.5471661,10.179833 0.75616674,10.195223 0.2112857,10.758575 0.15354288,11.735988 0.07199052,12.765553 c 0.36440953,0.238225 0.79006967,0.195492 1.44938278,-0.02675 L 6.3033562,8.1282037 6.8217102,8.6765688 C 6.9985465,8.8799427 7.3003699,8.7497574 7.358381,8.5016252 L 7.4938877,7.5084164 c 0.8537488,0.3985387 1.8303125,0.4711541 2.6851793,0.1427713 0.393927,-0.1407258 0.746858,-0.3701772 1.04755,-0.6595873 z'/>
                <path d='M 6.8014948,6.3102123 0.15369063,13.024481 0.21560535,12.141962 6.0062342,6.2683782 z'
                      style='fill:#ffe5a5;fill-opacity:1;stroke:#906b25;stroke-width:0.06912433;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:3.00300009'/>
              </g>
            </symbol>
            <symbol id='idx1' width="13" height="13">
              <g transform='scale(0.99)'>
                <rect width='4' height='4' x='7' y='1' style='fill:#ffff3f;stroke:#b48333;stroke-width:0.6;' ry='0.83'/>
                <rect width='4' height='4' x='1' y='7' style='fill:#ffff3f;stroke:#b48333;stroke-width:0.6;'
                      ry='0.832'/>
                <rect width='4' height='4' x='7' y='7' style='fill:#ffff3f;stroke:#b48333;stroke-width:0.6;'
                      ry='0.832'/>
              </g>
            </symbol>
            <symbol id='idx2' width="13" height="13">
              <g transform='scale(0.99)'>
                <rect width='4' height='3' x='6' y='1' style='fill:#7fc8e9;stroke:#2f6f8c;stroke-width:0.6;' ry='0.83'/>
                <rect width='7' height='3' x='3' y='6' style='fill:#7fc8e9;stroke:#2f6f8c;stroke-width:0.6;'
                      ry='0.832'/>
              </g>
            </symbol>
            <symbol id='unq' width="13" height="13">
              <g transform='scale(0.99)'>
                <rect
                    style='fill:none;stroke:#7e4d31;stroke-width:0.71934468;stroke-linecap:round;stroke-linejoin:round;'
                    width='2.29' height='8.43' x='7.48' y='-0.76' ry='1.14'
                    transform='matrix(0.701,0.713,-0.727,0.685,0,0)'/>
                <path
                    style='fill:white;stroke:#858585;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;'
                    d='m 26.04,8.64 a 4.13,4.13 0 1 1 -8.26,0 4.13,4.13 0 1 1 8.26,0 z'
                    transform='matrix(1.025,0,0,0.987,-14.690,-3.862)'/>
                <text x='5.8' y='7.4' style='font-size:7px;fill:#8a8a8a;'>U</text>
              </g>
            </symbol>
            <symbol id='idx' width="13" height="13">
              <g transform='scale(0.99)'>
                <rect
                    style='fill:none;stroke:#7e4d31;stroke-width:0.71934468;stroke-linecap:round;stroke-linejoin:round;'
                    width='2.29' height='8.43' x='7.48' y='-0.76' ry='1.14'
                    transform='matrix(0.701,0.713,-0.727,0.685,0,0)'/>
                <path
                    style='fill:white;stroke:#858585;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;'
                    d='m 26.04,8.64 a 4.13,4.13 0 1 1 -8.26,0 4.13,4.13 0 1 1 8.26,0 z'
                    transform='matrix(1.025,0,0,0.987,-14.690,-3.862)'/>
              </g>
            </symbol>
            <symbol id='fk' width="13" height="13">
              <g transform='scale(0.87)'>
                <path
                    style='fill:#6a88cd;stroke:#5a72a8;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;'
                    d='M 12.48,0.33 7.07,0.89 9.067,2.974 0.329,11.731 1.073,12.597 9.811,3.841 11.77,5.78 z'/>
              </g>
            </symbol>
            <symbol id='ref' width="13" height="13">
              <g transform='scale(0.87)'>
                <path
                    style='fill:#f0d938;stroke:#906b25;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;'
                    d='M 0.10,12.70 5.31,12.15 3.40,10.06 11.82,1.32 11.11,0.45 2.68,9.19 0.80,7.24 z'/>
              </g>
            </symbol>
            <symbol id='flag0' width="13" height="13">
              <g transform='scale(0.92)'>
                <path
                    style='fill:#b7d0f6;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;'
                    d='M 0.12,12.67 0.16,7.22 C 2.59,7.22 4.13,8.78 9.22,4.22 5.68,4.98 2.53,4.50 0.09,1.80 z'/>
              </g>
            </symbol>
            <symbol id='flag1' width="13" height="13">
              <g transform='scale(0.92)'>
                <path
                    style='fill:#f4a393;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;'
                    d='M 0.12,12.67 0.16,7.22 C 2.59,7.22 4.13,8.78 9.22,4.22 5.68,4.98 2.53,4.50 0.09,1.80 z'/>
              </g>
            </symbol>
            <symbol id='flag2' width="13" height="13">
              <g transform='scale(0.92)'>
                <path
                    style='fill:#77ec8b;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;'
                    d='M 0.12,12.67 0.16,7.22 C 2.59,7.22 4.13,8.78 9.22,4.22 5.68,4.98 2.53,4.50 0.09,1.80 z'/>
              </g>
            </symbol>
            <symbol id='nn' width="3" height="3">
              <path
                  style='stroke:#9b3e50;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;'
                  d='M 0,0 3,3 M 0,3 3,0 z'/>
            </symbol>
            <symbol id='virtual' width="13" height="13">
              <circle cx='6' cy='6.5' r='5.5' fill='#a3dda3' stroke='#4c6a4c' stroke-width='0.5'/>
              <path
                  style='stroke:#ffffff;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;'
                  d='M 3,4 6,10 9,4'/>
            </symbol>
            <symbol id='view' width="13" height="13">
              <g transform='scale(0.99)'>
                <line x1='12' y1='6' x2='19' y2='0' stroke='black' stroke-width='0.5'/>
                <line x1='0' y1='6' x2='7' y2='0' stroke='black' stroke-width='0.5'/>
                <circle cx='3' cy='6' r='3' fill='#f9ebbc' stroke='black' stroke-width='0.5'/>
                <circle cx='10' cy='6' r='3' fill='#f9ebbc' stroke='black' stroke-width='0.5'/>
              </g>
            </symbol>

          </defs>

          <defs>
            <marker id='arrow0u' viewBox='0 0 16.00 16.00' refX='8.00' refY='8.00' markerWidth='16.00'
                    markerHeight='16.00' orient='auto'>
              <path d='M 0.00,8.00 L 16.00,8.00 z'/>
              <circle cx='13.33' cy='8.00' r='2.67' style='fill:#5e554d;'/>
              <text x='5.33' y='8.00' style='font-size:9px;fill:#5e554d;'>Z</text>
            </marker>
            <marker id='arrow1u' viewBox='0 0 16.00 16.00' refX='8.00' refY='8.00' markerWidth='16.00'
                    markerHeight='16.00' orient='auto'>
              <path d='M 0.00,8.00 L 16.00,8.00 z'/>
              <circle cx='13.33' cy='8.00' r='2.67' style='fill:#5e554d;'/>
              <text x='5.33' y='8.00' style='font-size:9px;fill:#5e554d;'>1</text>
            </marker>
            <marker id='arrow0' viewBox='0 0 16.00 16.00' refX='8.00' refY='8.00' markerWidth='16.00'
                    markerHeight='16.00' orient='auto'>
              <path d='M 0.00,8.00 L 16.00,8.00 z'/>
              <circle cx='13.33' cy='8.00' r='2.67' style='fill:#5e554d;'/>
            </marker>
            <marker id='arrow1' viewBox='0 0 16.00 16.00' refX='8.00' refY='8.00' markerWidth='16.00'
                    markerHeight='16.00' orient='auto'>
              <path d='M 0.00,8.00 L 16.00,8.00 z'/>
              <circle cx='13.33' cy='8.00' r='2.67' style='fill:#5e554d;'/>
            </marker>
            <marker id='foot0u' viewBox='0 0 16.00 16.00' refX='8.00' refY='8.00' markerWidth='16.00'
                    markerHeight='16.00' orient='auto'>
              <path d='M 0.00,8.00 L 16.00,8.00 z'/>
              <circle cx='2.67' cy='8.00' r='2.67' style='fill:#5e554d;'/>
              <text x='5.33' y='8.00' style='font-size:9px;fill:#5e554d;'>Z</text>
            </marker>
            <marker id='foot0' viewBox='0 0 16.00 16.00' refX='8.00' refY='8.00' markerWidth='16.00'
                    markerHeight='16.00' orient='auto'>
              <path d='M 0.00,8.00 L 16.00,8.00 z'/>
              <circle cx='2.67' cy='8.00' r='2.67' style='fill:#5e554d;'/>
            </marker>
            <marker id='foot1u' viewBox='0 0 16.00 16.00' refX='8.00' refY='8.00' markerWidth='16.00'
                    markerHeight='16.00' orient='auto'>
              <path d='M 0.00,8.00 L 16.00,8.00 z'/>
              <circle cx='2.67' cy='8.00' r='2.67' style='fill:#5e554d;'/>
              <text x='5.33' y='8.00' style='font-size:9px;fill:#5e554d;'>1</text>
            </marker>
            <marker id='foot1' viewBox='0 0 16.00 16.00' refX='8.00' refY='8.00' markerWidth='16.00'
                    markerHeight='16.00' orient='auto'>
              <path d='M 0.00,8.00 L 16.00,8.00 z'/>
              <circle cx='2.67' cy='8.00' r='2.67' style='fill:#5e554d;'/>
              <text x='5.33' y='8.00' style='font-size:9px;fill:#5e554d;'>P</text>
            </marker>
            <marker id='line_arrow' viewBox='0 0 16.00 8.00' refX='8.00' refY='4.00' markerWidth='16.00'
                    markerHeight='8.00' orient='auto'>
              <path d='M 8.000,4.000 L 16.000,4.000 L 8.000,0.000 L 16.000,4.000 L 8.000,8.000'/>
            </marker>
            <marker id='line_straight' viewBox='0 0 16.00 8.00' refX='8.00' refY='4.00' markerWidth='16.00'
                    markerHeight='8.00' orient='auto'>
              <path d='M 0.00,4.00 L 16.00,4.00 z'/>
            </marker>
            <linearGradient id='tbg_B3801A' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stop-color='#FFF8EA'/>
              <stop offset='40%' stop-color='#E2D9C9'/>
              <stop offset='100%' stop-color='#FFF7E7'/>
            </linearGradient>
            <linearGradient id='tbg_8066CC' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stop-color='#EFEAFF'/>
              <stop offset='40%' stop-color='#CFC9E2'/>
              <stop offset='100%' stop-color='#EDE7FF'/>
            </linearGradient>
            <linearGradient id='tbg_F4BECB' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stop-color='#FFEAEE'/>
              <stop offset='40%' stop-color='#E2C9CE'/>
              <stop offset='100%' stop-color='#FFE7EC'/>
            </linearGradient>
            <linearGradient id='tbg_4D66CC' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stop-color='#EAEEFF'/>
              <stop offset='40%' stop-color='#C9CDE2'/>
              <stop offset='100%' stop-color='#E7EBFF'/>
            </linearGradient>
            <linearGradient id='tbg_F4BEEE' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stop-color='#FFEAFC'/>
              <stop offset='40%' stop-color='#E2C9DF'/>
              <stop offset='100%' stop-color='#FFE7FC'/>
            </linearGradient>
            <linearGradient id='tbg_C4E0F9' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stop-color='#EAF5FF'/>
              <stop offset='40%' stop-color='#C9D6E2'/>
              <stop offset='100%' stop-color='#E7F3FF'/>
            </linearGradient>
            <linearGradient id='tbg_3986C1' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stop-color='#EAF5FF'/>
              <stop offset='40%' stop-color='#C9D7E2'/>
              <stop offset='100%' stop-color='#E7F4FF'/>
            </linearGradient>
            <linearGradient id='tbg_C7F4BE' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stop-color='#EDFFEA'/>
              <stop offset='40%' stop-color='#CDE2C9'/>
              <stop offset='100%' stop-color='#EBFFE7'/>
            </linearGradient>
          </defs>

          <!-- == Shape Colors == -->
          <!-- == Desktop == -->
          <rect x='1' y='1' width='1582' height='1548' rx='8' ry='8'
                style='fill:#eee;'/>

          <!-- == Legend == -->
          <!--          <g transform='translate(10,10)'>-->
          <!--            <rect x='10' y='10' width='420' height='70' rx='6' ry='6'-->
          <!--                  style='fill:url(#legendGradient);filter:url(#shadow);'/>-->
          <!--            <text x='20' y='25' class='legendTitle'>Redshift</text>-->
          <!--            <text x='20' y='53' class='legendSubTitle'>-->
          <!--              <tspan>Read table and column comments as mouse-over tooltips.</tspan>-->
          <!--            </text>-->
          <!--            <text x='20' y='67' class='legendSubTitle'>-->
          <!--              <tspan>Zoom ~ Ctrl + mouse wheel, panning ~ drag + right-mouse button.</tspan>-->
          <!--            </text>-->
          <!--          </g>-->

          <g transform='translate(0,110)'>
            <!-- == Group 'Conferences' == -->
            <rect class='grp' style='fill:#E7E1FC;stroke:#A89EC7' x='624' y='989' width='448' height='386'/>
            <text x='636' y='1005'>Conferences</text>
            <rect style='fill:url(#groupUnderTitleLine); stroke-width:2;' x='636' y='1009' width='424' height='2'/>

            <!-- == Group 'Authors and Affiliations' == -->
            <rect class='grp' style='fill:#FCF3E1;stroke:#C7B99E' x='880' y='445' width='672' height='530'/>
            <text x='892' y='461'>Authors and Affiliations</text>
            <rect style='fill:url(#groupUnderTitleLine); stroke-width:2;' x='892' y='465' width='648' height='2'/>

            <!-- == Group 'Fields of Study' == -->
            <rect class='grp' style='fill:#E1E6FC;stroke:#9EA6C7' x='416' y='45' width='656' height='386'/>
            <text x='428' y='61'>Fields of Study</text>
            <rect style='fill:url(#groupUnderTitleLine); stroke-width:2;' x='428' y='65' width='632' height='2'/>

            <!-- == Fk 'AuthorExtendedAttributes_Fk_AuthorExtendedAttributes_Authors' == -->
            <path id='AuthorExtendedAttributes_Fk_AuthorExtendedAttributes_Authors'
                  onmouseover="hghl(['AuthorExtendedAttributes_Fk_AuthorExtendedAttributes_Authors','AuthorExtendedAttributes.AuthorId','Authors.AuthorId'])"
                  onmouseout="uhghl(['AuthorExtendedAttributes_Fk_AuthorExtendedAttributes_Authors','AuthorExtendedAttributes.AuthorId','Authors.AuthorId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 1328,496L 1312,496'>
              <title>Fk Fk_AuthorExtendedAttributes_Authors
                AuthorExtendedAttributes ref Authors ( AuthorId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 1328,496L 1312,496'><title>Fk Fk_AuthorExtendedAttributes_Authors
              AuthorExtendedAttributes ref Authors ( AuthorId )</title></path>
            <!-- == Fk 'Authors_Fk_Authors_Affiliations' == -->
            <path id='Authors_Fk_Authors_Affiliations'
                  onmouseover="hghl(['Authors_Fk_Authors_Affiliations','Authors.LastKnownAffiliationId','Affiliations.AffiliationId'])"
                  onmouseout="uhghl(['Authors_Fk_Authors_Affiliations','Authors.LastKnownAffiliationId','Affiliations.AffiliationId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 1104,672L 1072,672'>
              <title>Fk Fk_Authors_Affiliations
                Authors ref Affiliations ( LastKnownAffiliationId -&gt; AffiliationId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 1104,672L 1072,672'><title>Fk Fk_Authors_Affiliations
              Authors ref Affiliations ( LastKnownAffiliationId -&gt; AffiliationId )</title></path>
            <!-- == Fk 'ConferenceInstances_Fk_ConferenceInstances_ConferenceSeries' == -->
            <path id='ConferenceInstances_Fk_ConferenceInstances_ConferenceSeries'
                  onmouseover="hghl(['ConferenceInstances_Fk_ConferenceInstances_ConferenceSeries','ConferenceInstances.ConferenceSeriesId','ConferenceSeries.ConferenceSeriesId'])"
                  onmouseout="uhghl(['ConferenceInstances_Fk_ConferenceInstances_ConferenceSeries','ConferenceInstances.ConferenceSeriesId','ConferenceSeries.ConferenceSeriesId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 832,1072L 816,1072'>
              <title>Fk Fk_ConferenceInstances_ConferenceSeries
                ConferenceInstances ref ConferenceSeries ( ConferenceSeriesId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 832,1072L 816,1072'><title>Fk Fk_ConferenceInstances_ConferenceSeries
              ConferenceInstances ref ConferenceSeries ( ConferenceSeriesId )</title></path>
            <!-- == Fk 'FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy' == -->
            <path id='FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy'
                  onmouseover="hghl(['FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy','FieldOfStudyChildren.FieldOfStudyId','FieldsOfStudy.FieldOfStudyId'])"
                  onmouseout="uhghl(['FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy','FieldOfStudyChildren.FieldOfStudyId','FieldsOfStudy.FieldOfStudyId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 816,192L 784,192'>
              <title>Fk Fk_FieldOfStudyChildren_FieldsOfStudy
                FieldOfStudyChildren ref FieldsOfStudy ( FieldOfStudyId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 816,192L 784,192'><title>Fk Fk_FieldOfStudyChildren_FieldsOfStudy
              FieldOfStudyChildren ref FieldsOfStudy ( FieldOfStudyId )</title></path>
            <!-- == Fk 'FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy_0' == -->
            <path id='FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy_0'
                  onmouseover="hghl(['FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy_0','FieldOfStudyChildren.ChildFieldOfStudyId','FieldsOfStudy.FieldOfStudyId'])"
                  onmouseout="uhghl(['FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy_0','FieldOfStudyChildren.ChildFieldOfStudyId','FieldsOfStudy.FieldOfStudyId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 816,208L 784,208'>
              <title>Fk Fk_FieldOfStudyChildren_FieldsOfStudy_0
                FieldOfStudyChildren ref FieldsOfStudy ( ChildFieldOfStudyId -&gt; FieldOfStudyId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 816,208L 784,208'><title>Fk Fk_FieldOfStudyChildren_FieldsOfStudy_0
              FieldOfStudyChildren ref FieldsOfStudy ( ChildFieldOfStudyId -&gt; FieldOfStudyId )</title></path>
            <!-- == Fk 'FieldOfStudyExtendedAttributes_Fk_FieldOfStudyExtendedAttributes_FieldsOfStudy' == -->
            <path id='FieldOfStudyExtendedAttributes_Fk_FieldOfStudyExtendedAttributes_FieldsOfStudy'
                  onmouseover="hghl(['FieldOfStudyExtendedAttributes_Fk_FieldOfStudyExtendedAttributes_FieldsOfStudy','FieldOfStudyExtendedAttributes.FieldOfStudyId','FieldsOfStudy.FieldOfStudyId'])"
                  onmouseout="uhghl(['FieldOfStudyExtendedAttributes_Fk_FieldOfStudyExtendedAttributes_FieldsOfStudy','FieldOfStudyExtendedAttributes.FieldOfStudyId','FieldsOfStudy.FieldOfStudyId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 816,128L 784,128'>
              <title>Fk Fk_FieldOfStudyExtendedAttributes_FieldsOfStudy
                FieldOfStudyExtendedAttributes ref FieldsOfStudy ( FieldOfStudyId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 816,128L 784,128'><title>Fk Fk_FieldOfStudyExtendedAttributes_FieldsOfStudy
              FieldOfStudyExtendedAttributes ref FieldsOfStudy ( FieldOfStudyId )</title></path>
            <!-- == Fk 'PaperAbstractsInvertedIndex_Fk_PaperAbstractsInvertedIndex_Papers' == -->
            <path id='PaperAbstractsInvertedIndex_Fk_PaperAbstractsInvertedIndex_Papers'
                  onmouseover="hghl(['PaperAbstractsInvertedIndex_Fk_PaperAbstractsInvertedIndex_Papers','PaperAbstractsInvertedIndex.PaperId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperAbstractsInvertedIndex_Fk_PaperAbstractsInvertedIndex_Papers','PaperAbstractsInvertedIndex.PaperId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 512,1264L 512,1072'>
              <title>Fk Fk_PaperAbstractsInvertedIndex_Papers
                PaperAbstractsInvertedIndex ref Papers ( PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 512,1264L 512,1072'><title>Fk Fk_PaperAbstractsInvertedIndex_Papers
              PaperAbstractsInvertedIndex ref Papers ( PaperId )</title></path>
            <!-- == Fk 'PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Papers' == -->
            <path id='PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Papers'
                  onmouseover="hghl(['PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Papers','PaperAuthorAffiliations.PaperId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Papers','PaperAuthorAffiliations.PaperId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 880,496L 544,496'>
              <title>Fk Fk_PaperAuthorAffiliations_Papers
                PaperAuthorAffiliations ref Papers ( PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 880,496L 544,496'><title>Fk Fk_PaperAuthorAffiliations_Papers
              PaperAuthorAffiliations ref Papers ( PaperId )</title></path>
            <!-- == Fk 'PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Authors' == -->
            <path id='PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Authors'
                  onmouseover="hghl(['PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Authors','PaperAuthorAffiliations.AuthorId','Authors.AuthorId'])"
                  onmouseout="uhghl(['PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Authors','PaperAuthorAffiliations.AuthorId','Authors.AuthorId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 1088,496L 1104,496'>
              <title>Fk Fk_PaperAuthorAffiliations_Authors
                PaperAuthorAffiliations ref Authors ( AuthorId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 1088,496L 1104,496'><title>Fk Fk_PaperAuthorAffiliations_Authors
              PaperAuthorAffiliations ref Authors ( AuthorId )</title></path>
            <!-- == Fk 'PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Affiliations' == -->
            <path id='PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Affiliations'
                  onmouseover="hghl(['PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Affiliations','PaperAuthorAffiliations.AffiliationId','Affiliations.AffiliationId'])"
                  onmouseout="uhghl(['PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Affiliations','PaperAuthorAffiliations.AffiliationId','Affiliations.AffiliationId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 928,624L 928,640'>
              <title>Fk Fk_PaperAuthorAffiliations_Affiliations
                PaperAuthorAffiliations ref Affiliations ( AffiliationId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 928,624L 928,640'><title>Fk Fk_PaperAuthorAffiliations_Affiliations
              PaperAuthorAffiliations ref Affiliations ( AffiliationId )</title></path>
            <!-- == Fk 'PaperCitationContexts_Fk_PaperCitationContexts_Papers' == -->
            <path id='PaperCitationContexts_Fk_PaperCitationContexts_Papers'
                  onmouseover="hghl(['PaperCitationContexts_Fk_PaperCitationContexts_Papers','PaperCitationContexts.PaperId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperCitationContexts_Fk_PaperCitationContexts_Papers','PaperCitationContexts.PaperId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 384,1120L 384,1072'>
              <title>Fk Fk_PaperCitationContexts_Papers
                PaperCitationContexts ref Papers ( PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 384,1120L 384,1072'><title>Fk Fk_PaperCitationContexts_Papers
              PaperCitationContexts ref Papers ( PaperId )</title></path>
            <!-- == Fk 'PaperCitationContexts_Fk_PaperCitationContexts_Papers_0' == -->
            <path id='PaperCitationContexts_Fk_PaperCitationContexts_Papers_0'
                  onmouseover="hghl(['PaperCitationContexts_Fk_PaperCitationContexts_Papers_0','PaperCitationContexts.PaperReferenceId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperCitationContexts_Fk_PaperCitationContexts_Papers_0','PaperCitationContexts.PaperReferenceId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 400,1120L 400,1072'>
              <title>Fk Fk_PaperCitationContexts_Papers_0
                PaperCitationContexts ref Papers ( PaperReferenceId -&gt; PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 400,1120L 400,1072'><title>Fk Fk_PaperCitationContexts_Papers_0
              PaperCitationContexts ref Papers ( PaperReferenceId -&gt; PaperId )</title></path>
            <!-- == Fk 'PaperExtendedAttributes_Fk_PaperExtendedAttributes_Papers' == -->
            <path id='PaperExtendedAttributes_Fk_PaperExtendedAttributes_Papers'
                  onmouseover="hghl(['PaperExtendedAttributes_Fk_PaperExtendedAttributes_Papers','PaperExtendedAttributes.PaperId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperExtendedAttributes_Fk_PaperExtendedAttributes_Papers','PaperExtendedAttributes.PaperId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 240,480L 352,480'>
              <title>Fk Fk_PaperExtendedAttributes_Papers
                PaperExtendedAttributes ref Papers ( PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 240,480L 352,480'><title>Fk Fk_PaperExtendedAttributes_Papers
              PaperExtendedAttributes ref Papers ( PaperId )</title></path>
            <!-- == Fk 'PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_Papers' == -->
            <path id='PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_Papers'
                  onmouseover="hghl(['PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_Papers','PaperFieldsOfStudy.PaperId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_Papers','PaperFieldsOfStudy.PaperId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 448,352L 448,464'>
              <title>Fk Fk_PaperFieldsOfStudy_Papers
                PaperFieldsOfStudy ref Papers ( PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 448,352L 448,464'><title>Fk Fk_PaperFieldsOfStudy_Papers
              PaperFieldsOfStudy ref Papers ( PaperId )</title></path>
            <!-- == Fk 'PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_FieldsOfStudy' == -->
            <path id='PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_FieldsOfStudy'
                  onmouseover="hghl(['PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_FieldsOfStudy','PaperFieldsOfStudy.FieldOfStudyId','FieldsOfStudy.FieldOfStudyId'])"
                  onmouseout="uhghl(['PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_FieldsOfStudy','PaperFieldsOfStudy.FieldOfStudyId','FieldsOfStudy.FieldOfStudyId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 592,256L 608,256'>
              <title>Fk Fk_PaperFieldsOfStudy_FieldsOfStudy
                PaperFieldsOfStudy ref FieldsOfStudy ( FieldOfStudyId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 592,256L 608,256'><title>Fk Fk_PaperFieldsOfStudy_FieldsOfStudy
              PaperFieldsOfStudy ref FieldsOfStudy ( FieldOfStudyId )</title></path>
            <!-- == Fk 'PaperMeSH_Fk_PaperMeSH_Papers' == -->
            <path id='PaperMeSH_Fk_PaperMeSH_Papers'
                  onmouseover="hghl(['PaperMeSH_Fk_PaperMeSH_Papers','PaperMeSH.PaperId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperMeSH_Fk_PaperMeSH_Papers','PaperMeSH.PaperId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 240,784L 352,784'>
              <title>Fk Fk_PaperMeSH_Papers
                PaperMeSH ref Papers ( PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 240,784L 352,784'><title>Fk Fk_PaperMeSH_Papers
              PaperMeSH ref Papers ( PaperId )</title></path>
            <!-- == Fk 'PaperRecommendations_Fk_PaperRecommendations_Papers' == -->
            <path id='PaperRecommendations_Fk_PaperRecommendations_Papers'
                  onmouseover="hghl(['PaperRecommendations_Fk_PaperRecommendations_Papers','PaperRecommendations.PaperId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperRecommendations_Fk_PaperRecommendations_Papers','PaperRecommendations.PaperId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 240,528L 352,528'>
              <title>Fk Fk_PaperRecommendations_Papers
                PaperRecommendations ref Papers ( PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 240,528L 352,528'><title>Fk Fk_PaperRecommendations_Papers
              PaperRecommendations ref Papers ( PaperId )</title></path>
            <!-- == Fk 'PaperRecommendations_Fk_PaperRecommendations_Papers_0' == -->
            <path id='PaperRecommendations_Fk_PaperRecommendations_Papers_0'
                  onmouseover="hghl(['PaperRecommendations_Fk_PaperRecommendations_Papers_0','PaperRecommendations.RecommendedPaperId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperRecommendations_Fk_PaperRecommendations_Papers_0','PaperRecommendations.RecommendedPaperId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 240,544L 352,544'>
              <title>Fk Fk_PaperRecommendations_Papers_0
                PaperRecommendations ref Papers ( RecommendedPaperId -&gt; PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 240,544L 352,544'><title>Fk Fk_PaperRecommendations_Papers_0
              PaperRecommendations ref Papers ( RecommendedPaperId -&gt; PaperId )</title></path>
            <!-- == Fk 'PaperReferences_Fk_PaperReferences_Papers' == -->
            <path id='PaperReferences_Fk_PaperReferences_Papers'
                  onmouseover="hghl(['PaperReferences_Fk_PaperReferences_Papers','PaperReferences.PaperId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperReferences_Fk_PaperReferences_Papers','PaperReferences.PaperId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 240,944L 352,944'>
              <title>Fk Fk_PaperReferences_Papers
                PaperReferences ref Papers ( PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 240,944L 352,944'><title>Fk Fk_PaperReferences_Papers
              PaperReferences ref Papers ( PaperId )</title></path>
            <!-- == Fk 'PaperReferences_Fk_PaperReferences_Papers_0' == -->
            <path id='PaperReferences_Fk_PaperReferences_Papers_0'
                  onmouseover="hghl(['PaperReferences_Fk_PaperReferences_Papers_0','PaperReferences.PaperReferenceId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperReferences_Fk_PaperReferences_Papers_0','PaperReferences.PaperReferenceId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 240,960L 352,960'>
              <title>Fk Fk_PaperReferences_Papers_0
                PaperReferences ref Papers ( PaperReferenceId -&gt; PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 240,960L 352,960'><title>Fk Fk_PaperReferences_Papers_0
              PaperReferences ref Papers ( PaperReferenceId -&gt; PaperId )</title></path>
            <!-- == Fk 'PaperResources_Fk_PaperResources_Papers' == -->
            <path id='PaperResources_Fk_PaperResources_Papers'
                  onmouseover="hghl(['PaperResources_Fk_PaperResources_Papers','PaperResources.PaperId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperResources_Fk_PaperResources_Papers','PaperResources.PaperId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 240,640L 352,640'>
              <title>Fk Fk_PaperResources_Papers
                PaperResources ref Papers ( PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 240,640L 352,640'><title>Fk Fk_PaperResources_Papers
              PaperResources ref Papers ( PaperId )</title></path>
            <!-- == Fk 'PaperUrls_Fk_PaperUrls_Papers' == -->
            <path id='PaperUrls_Fk_PaperUrls_Papers'
                  onmouseover="hghl(['PaperUrls_Fk_PaperUrls_Papers','PaperUrls.PaperId','Papers.PaperId'])"
                  onmouseout="uhghl(['PaperUrls_Fk_PaperUrls_Papers','PaperUrls.PaperId','Papers.PaperId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 240,1040L 352,1040'>
              <title>Fk Fk_PaperUrls_Papers
                PaperUrls ref Papers ( PaperId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 240,1040L 352,1040'><title>Fk Fk_PaperUrls_Papers
              PaperUrls ref Papers ( PaperId )</title></path>
            <!-- == Fk 'Papers_Fk_Papers_Journals' == -->
            <path id='Papers_Fk_Papers_Journals'
                  onmouseover="hghl(['Papers_Fk_Papers_Journals','Papers.JournalId','Journals.JournalId'])"
                  onmouseout="uhghl(['Papers_Fk_Papers_Journals','Papers.JournalId','Journals.JournalId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 544,560L 640,560'>
              <title>Fk Fk_Papers_Journals
                Papers ref Journals ( JournalId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 544,560L 640,560'><title>Fk Fk_Papers_Journals
              Papers ref Journals ( JournalId )</title></path>
            <!-- == Fk 'Papers_Fk_Papers_ConferenceSeries' == -->
            <path id='Papers_Fk_Papers_ConferenceSeries'
                  onmouseover="hghl(['Papers_Fk_Papers_ConferenceSeries','Papers.ConferenceSeriesId','ConferenceSeries.ConferenceSeriesId'])"
                  onmouseout="uhghl(['Papers_Fk_Papers_ConferenceSeries','Papers.ConferenceSeriesId','ConferenceSeries.ConferenceSeriesId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 544,1056L 624,1056'>
              <title>Fk Fk_Papers_ConferenceSeries
                Papers ref ConferenceSeries ( ConferenceSeriesId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 544,1056L 624,1056'><title>Fk Fk_Papers_ConferenceSeries
              Papers ref ConferenceSeries ( ConferenceSeriesId )</title></path>
            <!-- == Fk 'Papers_Fk_Papers_ConferenceInstances' == -->
            <path id='Papers_Fk_Papers_ConferenceInstances'
                  onmouseover="hghl(['Papers_Fk_Papers_ConferenceInstances','Papers.ConferenceInstanceId','ConferenceInstances.ConferenceInstanceId'])"
                  onmouseout="uhghl(['Papers_Fk_Papers_ConferenceInstances','Papers.ConferenceInstanceId','ConferenceInstances.ConferenceInstanceId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 544,1024L 832,1024'>
              <title>Fk Fk_Papers_ConferenceInstances
                Papers ref ConferenceInstances ( ConferenceInstanceId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 544,1024L 832,1024'><title>Fk Fk_Papers_ConferenceInstances
              Papers ref ConferenceInstances ( ConferenceInstanceId )</title></path>
            <!-- == Fk 'RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy' == -->
            <path id='RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy'
                  onmouseover="hghl(['RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy','RelatedFieldOfStudy.FieldOfStudyId1','FieldsOfStudy.FieldOfStudyId'])"
                  onmouseout="uhghl(['RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy','RelatedFieldOfStudy.FieldOfStudyId1','FieldsOfStudy.FieldOfStudyId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 816,288L 784,288'>
              <title>Fk Fk_RelatedFieldOfStudy_FieldsOfStudy
                RelatedFieldOfStudy ref FieldsOfStudy ( FieldOfStudyId1 -&gt; FieldOfStudyId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 816,288L 784,288'><title>Fk Fk_RelatedFieldOfStudy_FieldsOfStudy
              RelatedFieldOfStudy ref FieldsOfStudy ( FieldOfStudyId1 -&gt; FieldOfStudyId )</title></path>
            <!-- == Fk 'RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy_0' == -->
            <path id='RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy_0'
                  onmouseover="hghl(['RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy_0','RelatedFieldOfStudy.FieldOfStudyId2','FieldsOfStudy.FieldOfStudyId'])"
                  onmouseout="uhghl(['RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy_0','RelatedFieldOfStudy.FieldOfStudyId2','FieldsOfStudy.FieldOfStudyId'])"
                  transform='translate(8,0)' class='unhighlight' d='M 816,304L 784,304'>
              <title>Fk Fk_RelatedFieldOfStudy_FieldsOfStudy_0
                RelatedFieldOfStudy ref FieldsOfStudy ( FieldOfStudyId2 -&gt; FieldOfStudyId )</title>
            </path>
            <path transform='translate(8,0)' marker-start='url(#foot0)' marker-end='url(#arrow0)' class='virtual'
                  d='M 816,304L 784,304'><title>Fk Fk_RelatedFieldOfStudy_FieldsOfStudy_0
              RelatedFieldOfStudy ref FieldsOfStudy ( FieldOfStudyId2 -&gt; FieldOfStudyId )</title></path>
            <!-- == Table 'Affiliations' == -->
            <rect id='depict_Affiliations' class='entity' style='stroke:#C9BFAD' x='912' y='648' width='160'
                  height='304'/>
            <rect class='entity' x='912' y='648' width='160' height='28' style='stroke:#C9BFAD; fill:#A18E6A'/>
            <a xlink:href='#Affiliations'>
              <text x='954' y='667' class='white'>Affiliations</text>
              <title>Table Affiliations
                Base table for affiliations/institutions (mag/Affiliations.txt)</title></a>
            <use id='idx1' x='914' y='684' xlink:href='#idx1'><title>Distribution ( AffiliationId ) Sorting (
              AffiliationId ) </title></use>
            <a xlink:href='#Affiliations_AffiliationId'>
              <text id='Affiliations.AffiliationId' x='931' y='695'
                    onmouseover="hghl(['Authors_Fk_Authors_Affiliations','Authors.LastKnownAffiliationId','PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Affiliations','PaperAuthorAffiliations.AffiliationId'])"
                    onmouseout="uhghl(['Authors_Fk_Authors_Affiliations','Authors.LastKnownAffiliationId','PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Affiliations','PaperAuthorAffiliations.AffiliationId'])">
                AffiliationId
              </text>
              <title>AffiliationId
                bigint
                PRIMARY KEY</title></a>
            <a xlink:href='#Affiliations.AffiliationId'>
              <use id='ref' x='1060' y='684' xlink:href='#ref'/>
              <title>Referred by Authors ( LastKnownAffiliationId -&gt; AffiliationId )
                Referred by PaperAuthorAffiliations ( AffiliationId ) </title></a>
            <a xlink:href='#Affiliations_Rank'>
              <text id='Affiliations.Rank' x='931' y='711'>
                Rank ❄️
              </text>
              <title>Rank
                integer
                FROZEN; no new ranks are being added.</title></a>
            <text x='1069' y='708' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Affiliations_NormalizedName'>
              <text id='Affiliations.NormalizedName' x='931' y='727'>NormalizedName</text>
              <title>NormalizedName
                varchar
                UPDATED; slightly different normalization algorithm</title></a>
            <text x='1069' y='724' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Affiliations_DisplayName'>
              <text id='Affiliations.DisplayName' x='931' y='743'>DisplayName</text>
              <title>DisplayName
                varchar</title></a>
            <text x='1069' y='740' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Affiliations_GridId'>
              <text id='Affiliations.GridId' x='931' y='759'>GridId</text>
              <title>GridId
                varchar
                FROZEN; ror_id is the new standard identifier for organizations</title></a>
            <text x='1069' y='756' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Affiliations_RorId'>
              <text id='Affiliations.RorId' x='931' y='775'>RorId 🔥</text>
              <title>RorId
                varchar
                NEW; ROR for this organization, see https://ror.org, https://ror.org/:ror_id</title></a>
            <text x='1069' y='772' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Affiliations_OfficialPage'>
              <text id='Affiliations.OfficialPage' x='931' y='791'>OfficialPage</text>
              <title>OfficialPage
                varchar</title></a>
            <text x='1069' y='788' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Affiliations_WikiPage'>
              <text id='Affiliations.WikiPage' x='931' y='807'>WikiPage</text>
              <title>WikiPage
                varchar</title></a>
            <text x='1069' y='804' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Affiliations_PaperCount'>
              <text id='Affiliations.PaperCount' x='931' y='823'>PaperCount</text>
              <title>PaperCount
                bigint</title></a>
            <text x='1069' y='820' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Affiliations_PaperFamilyCount'>
              <text id='Affiliations.PaperFamilyCount' x='931' y='839'>PaperFamilyCount ❄️</text>
              <title>PaperFamilyCount
                bigint
                FROZEN; same value as &quot;paper_count.</title></a>
            <text x='1069' y='836' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Affiliations_CitationCount'>
              <text id='Affiliations.CitationCount' x='931' y='855'>CitationCount</text>
              <title>CitationCount
                bigint</title></a>
            <text x='1069' y='852' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Affiliations_Iso3166Code'>
              <text id='Affiliations.Iso3166Code' x='931' y='871'>Iso3166Code</text>
              <title>Iso3166Code
                varchar
                Two-letter country codes, see https://en.wikipedia.org/wiki/ISO_3166-2</title></a>
            <text x='1069' y='868' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Affiliations_Latitude'>
              <text id='Affiliations.Latitude' x='931' y='887'>Latitude</text>
              <title>Latitude
                real</title></a>
            <text x='1069' y='884' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Affiliations_Longitude'>
              <text id='Affiliations.Longitude' x='931' y='903'>Longitude</text>
              <title>Longitude
                real</title></a>
            <text x='1069' y='900' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Affiliations_CreatedDate'>
              <text id='Affiliations.CreatedDate' x='931' y='919'>CreatedDate</text>
              <title>CreatedDate
                varchar</title></a>
            <text x='1069' y='916' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Affiliations_UpdatedDate'>
              <text id='Affiliations.UpdatedDate' x='931' y='935'>UpdatedDate 🔥</text>
              <title>UpdatedDate
                timestamp
                NEW; set values updated from new ror data</title></a>
            <text x='1069' y='932' text-anchor='end' class='colType'>d</text>
            <!-- == Table 'AuthorExtendedAttributes' == -->
            <rect id='depict_AuthorExtendedAttributes' class='entity' style='stroke:#C9BFAD' x='1344' y='472'
                  width='192' height='96'/>
            <rect class='entity' x='1344' y='472' width='192' height='28' style='stroke:#C9BFAD; fill:#A18E6A'/>
            <a xlink:href='#AuthorExtendedAttributes'>
              <text x='1354' y='491' class='white'>AuthorExtendedAttributes</text>
              <title>Table AuthorExtendedAttributes
                Additional author name representations (mag/AuthorExtendedAttributes.txt)</title></a>
            <use id='idx1' x='1346' y='508' xlink:href='#idx1'><title>Distribution ( AuthorId ) Sorting ( AuthorId
              ) </title></use>
            <a xlink:href='#AuthorExtendedAttributes_AuthorId'>
              <text id='AuthorExtendedAttributes.AuthorId' x='1363' y='519'
                    onmouseover="hghl(['AuthorExtendedAttributes_Fk_AuthorExtendedAttributes_Authors','Authors.AuthorId'])"
                    onmouseout="uhghl(['AuthorExtendedAttributes_Fk_AuthorExtendedAttributes_Authors','Authors.AuthorId'])">
                AuthorId
              </text>
              <title>AuthorId
                bigint
                FOREIGN KEY REFERENCES Authors.AuthorId</title></a>
            <a xlink:href='#AuthorExtendedAttributes.AuthorId'>
              <use id='fk' x='1524' y='508' xlink:href='#fk'/>
              <title>References Authors ( AuthorId ) </title></a>
            <a xlink:href='#AuthorExtendedAttributes_AttributeType'>
              <text id='AuthorExtendedAttributes.AttributeType' x='1363' y='535'>AttributeType</text>
              <title>AttributeType
                integer
                Possible values: 1=Alternative name</title></a>
            <text x='1533' y='532' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#AuthorExtendedAttributes_AttributeValue'>
              <text id='AuthorExtendedAttributes.AttributeValue' x='1363' y='551'>AttributeValue</text>
              <title>AttributeValue
                varchar</title></a>
            <text x='1533' y='548' text-anchor='end' class='colType'>t</text>
            <!-- == Table 'Authors' == -->
            <rect id='depict_Authors' class='entity' style='stroke:#C9BFAD' x='1120' y='472' width='192' height='224'/>
            <rect class='entity' x='1120' y='472' width='192' height='28' style='stroke:#C9BFAD; fill:#A18E6A'/>
            <a xlink:href='#Authors'>
              <text x='1188' y='491' class='white'>Authors</text>
              <title>Table Authors
                Base table for authors (mag/Authors.txt)</title></a>
            <use id='idx1' x='1122' y='508' xlink:href='#idx1'><title>Distribution ( AuthorId ) Sorting ( AuthorId
              ) </title></use>
            <a xlink:href='#Authors_AuthorId'>
              <text id='Authors.AuthorId' x='1139' y='519'
                    onmouseover="hghl(['AuthorExtendedAttributes_Fk_AuthorExtendedAttributes_Authors','AuthorExtendedAttributes.AuthorId','PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Authors','PaperAuthorAffiliations.AuthorId'])"
                    onmouseout="uhghl(['AuthorExtendedAttributes_Fk_AuthorExtendedAttributes_Authors','AuthorExtendedAttributes.AuthorId','PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Authors','PaperAuthorAffiliations.AuthorId'])">
                AuthorId
              </text>
              <title>AuthorId
                bigint
                PRIMARY KEY</title></a>
            <a xlink:href='#Authors.AuthorId'>
              <use id='ref' x='1300' y='508' xlink:href='#ref'/>
              <title>Referred by AuthorExtendedAttributes ( AuthorId )
                Referred by PaperAuthorAffiliations ( AuthorId ) </title></a>
            <a xlink:href='#Authors_Rank'>
              <text id='Authors.Rank' x='1139' y='535'>Rank ❄️</text>
              <title>Rank
                integer
                FROZEN; no new ranks are being added</title></a>
            <text x='1309' y='532' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Authors_NormalizedName'>
              <text id='Authors.NormalizedName' x='1139' y='551'>NormalizedName</text>
              <title>NormalizedName
                varchar
                UPDATED; slightly different normalization algorithm</title></a>
            <text x='1309' y='548' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Authors_DisplayName'>
              <text id='Authors.DisplayName' x='1139' y='567'>DisplayName</text>
              <title>DisplayName
                varchar</title></a>
            <text x='1309' y='564' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Authors_Orcid'>
              <text id='Authors.Orcid' x='1139' y='583'>Orcid 🔥</text>
              <title>Orcid
                varchar
                NEW; ORCID identifier for this author</title></a>
            <text x='1309' y='580' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Authors_LastKnownAffiliationId'>
              <text id='Authors.LastKnownAffiliationId' x='1139' y='599'
                    onmouseover="hghl(['Authors_Fk_Authors_Affiliations','Affiliations.AffiliationId'])"
                    onmouseout="uhghl(['Authors_Fk_Authors_Affiliations','Affiliations.AffiliationId'])">
                LastKnownAffiliationId
              </text>
              <title>LastKnownAffiliationId
                integer</title></a>
            <a xlink:href='#Authors.LastKnownAffiliationId'>
              <use id='fk' x='1300' y='588' xlink:href='#fk'/>
              <title>References Affiliations ( LastKnownAffiliationId -&gt; AffiliationId ) </title></a>
            <a xlink:href='#Authors_PaperCount'>
              <text id='Authors.PaperCount' x='1139' y='615'>PaperCount</text>
              <title>PaperCount
                bigint</title></a>
            <text x='1309' y='612' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Authors_PaperFamilyCount'>
              <text id='Authors.PaperFamilyCount' x='1139' y='631'>PaperFamilyCount ❄️</text>
              <title>PaperFamilyCount
                bigint
                FROZEN; same value as &quot;paper_count</title></a>
            <text x='1309' y='628' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Authors_CitationCount'>
              <text id='Authors.CitationCount' x='1139' y='647'>CitationCount</text>
              <title>CitationCount
                bigint</title></a>
            <text x='1309' y='644' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Authors_CreatedDate'>
              <text id='Authors.CreatedDate' x='1139' y='663'>CreatedDate</text>
              <title>CreatedDate
                varchar</title></a>
            <text x='1309' y='660' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Authors_UpdatedDate'>
              <text id='Authors.UpdatedDate' x='1139' y='679'>UpdatedDate 🔥</text>
              <title>UpdatedDate
                timestamp
                NEW; set when changes are made going forward</title></a>
            <text x='1309' y='676' text-anchor='end' class='colType'>d</text>
            <!-- == Table 'ConferenceInstances' == -->
            <rect id='depict_ConferenceInstances' class='entity' style='stroke:#B4ADC9' x='848' y='1016' width='208'
                  height='336'/>
            <rect class='entity' x='848' y='1016' width='208' height='28' style='stroke:#B4ADC9; fill:#786AA1'/>
            <a xlink:href='#ConferenceInstances'>
              <text x='883' y='1035' class='white'>ConferenceInstances ❄️</text>
              <title>Table ConferenceInstances
                FROZEN; Base table for Conference Instances (mag/ConferenceInstances.txt)</title></a>
            <use id='idx1' x='850' y='1052' xlink:href='#idx1'><title>Distribution ( ConferenceInstanceId ) Sorting (
              ConferenceInstanceId ) </title></use>
            <a xlink:href='#ConferenceInstances_ConferenceInstanceId'>
              <text id='ConferenceInstances.ConferenceInstanceId' x='867' y='1063'
                    onmouseover="hghl(['Papers_Fk_Papers_ConferenceInstances','Papers.ConferenceInstanceId'])"
                    onmouseout="uhghl(['Papers_Fk_Papers_ConferenceInstances','Papers.ConferenceInstanceId'])">
                ConferenceInstanceId
              </text>
              <title>ConferenceInstanceId
                bigint
                PRIMARY KEY</title></a>
            <a xlink:href='#ConferenceInstances.ConferenceInstanceId'>
              <use id='ref' x='1044' y='1052' xlink:href='#ref'/>
              <title>Referred by Papers ( ConferenceInstanceId ) </title></a>
            <a xlink:href='#ConferenceInstances_NormalizedName'>
              <text id='ConferenceInstances.NormalizedName' x='867' y='1079'>NormalizedName</text>
              <title>NormalizedName
                varchar
                UPDATED; slightly different normalization algorithm</title></a>
            <text x='1053' y='1076' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#ConferenceInstances_DisplayName'>
              <text id='ConferenceInstances.DisplayName' x='867' y='1095'>DisplayName</text>
              <title>DisplayName
                varchar</title></a>
            <text x='1053' y='1092' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#ConferenceInstances_ConferenceSeriesId'>
              <text id='ConferenceInstances.ConferenceSeriesId' x='867' y='1111'
                    onmouseover="hghl(['ConferenceInstances_Fk_ConferenceInstances_ConferenceSeries','ConferenceSeries.ConferenceSeriesId'])"
                    onmouseout="uhghl(['ConferenceInstances_Fk_ConferenceInstances_ConferenceSeries','ConferenceSeries.ConferenceSeriesId'])">
                ConferenceSeriesId
              </text>
              <title>ConferenceSeriesId
                bigint
                FOREIGN KEY REFERENCES ConferenceSeries.ConferenceSeriesId</title></a>
            <a xlink:href='#ConferenceInstances.ConferenceSeriesId'>
              <use id='fk' x='1044' y='1100' xlink:href='#fk'/>
              <title>References ConferenceSeries ( ConferenceSeriesId ) </title></a>
            <a xlink:href='#ConferenceInstances_Location'>
              <text id='ConferenceInstances.Location' x='867' y='1127'>Location</text>
              <title>Location
                varchar</title></a>
            <text x='1053' y='1124' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#ConferenceInstances_OfficialUrl'>
              <text id='ConferenceInstances.OfficialUrl' x='867' y='1143'>OfficialUrl</text>
              <title>OfficialUrl
                varchar</title></a>
            <text x='1053' y='1140' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#ConferenceInstances_StartDate'>
              <text id='ConferenceInstances.StartDate' x='867' y='1159'>StartDate</text>
              <title>StartDate
                varchar</title></a>
            <text x='1053' y='1156' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#ConferenceInstances_EndDate'>
              <text id='ConferenceInstances.EndDate' x='867' y='1175'>EndDate</text>
              <title>EndDate
                varchar</title></a>
            <text x='1053' y='1172' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#ConferenceInstances_AbstractRegistrationDate'>
              <text id='ConferenceInstances.AbstractRegistrationDate' x='867' y='1191'>AbstractRegistrationDate</text>
              <title>AbstractRegistrationDate
                varchar</title></a>
            <text x='1053' y='1188' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#ConferenceInstances_SubmissionDeadlineDate'>
              <text id='ConferenceInstances.SubmissionDeadlineDate' x='867' y='1207'>SubmissionDeadlineDate</text>
              <title>SubmissionDeadlineDate
                varchar</title></a>
            <text x='1053' y='1204' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#ConferenceInstances_NotificationDueDate'>
              <text id='ConferenceInstances.NotificationDueDate' x='867' y='1223'>NotificationDueDate</text>
              <title>NotificationDueDate
                varchar</title></a>
            <text x='1053' y='1220' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#ConferenceInstances_FinalVersionDueDate'>
              <text id='ConferenceInstances.FinalVersionDueDate' x='867' y='1239'>FinalVersionDueDate</text>
              <title>FinalVersionDueDate
                varchar</title></a>
            <text x='1053' y='1236' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#ConferenceInstances_PaperCount'>
              <text id='ConferenceInstances.PaperCount' x='867' y='1255'>PaperCount</text>
              <title>PaperCount
                bigint</title></a>
            <text x='1053' y='1252' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#ConferenceInstances_PaperFamilyCount'>
              <text id='ConferenceInstances.PaperFamilyCount' x='867' y='1271'>PaperFamilyCount ❄️</text>
              <title>PaperFamilyCount
                bigint
                FROZEN; same value as &quot;paper_count</title></a>
            <text x='1053' y='1268' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#ConferenceInstances_CitationCount'>
              <text id='ConferenceInstances.CitationCount' x='867' y='1287'>CitationCount</text>
              <title>CitationCount
                bigint</title></a>
            <text x='1053' y='1284' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#ConferenceInstances_Latitude'>
              <text id='ConferenceInstances.Latitude' x='867' y='1303'>Latitude</text>
              <title>Latitude
                real</title></a>
            <text x='1053' y='1300' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#ConferenceInstances_Longitude'>
              <text id='ConferenceInstances.Longitude' x='867' y='1319'>Longitude</text>
              <title>Longitude
                real</title></a>
            <text x='1053' y='1316' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#ConferenceInstances_CreatedDate'>
              <text id='ConferenceInstances.CreatedDate' x='867' y='1335'>CreatedDate</text>
              <title>CreatedDate
                varchar</title></a>
            <text x='1053' y='1332' text-anchor='end' class='colType'>t</text>
            <!-- == Table 'ConferenceSeries' == -->
            <rect id='depict_ConferenceSeries' class='entity' style='stroke:#B4ADC9' x='640' y='1048' width='176'
                  height='176'/>
            <rect class='entity' x='640' y='1048' width='176' height='28' style='stroke:#B4ADC9; fill:#786AA1'/>
            <a xlink:href='#ConferenceSeries'>
              <text x='669' y='1067' class='white'>ConferenceSeries ❄️</text>
              <title>Table ConferenceSeries
                FROZEN; Base table for Conference Series (mag/ConferenceSeries.txt)</title></a>
            <use id='idx1' x='642' y='1084' xlink:href='#idx1'><title>Distribution ( ConferenceSeriesId ) Sorting (
              ConferenceSeriesId ) </title></use>
            <a xlink:href='#ConferenceSeries_ConferenceSeriesId'>
              <text id='ConferenceSeries.ConferenceSeriesId' x='659' y='1095'
                    onmouseover="hghl(['Papers_Fk_Papers_ConferenceSeries','Papers.ConferenceSeriesId','ConferenceInstances_Fk_ConferenceInstances_ConferenceSeries','ConferenceInstances.ConferenceSeriesId'])"
                    onmouseout="uhghl(['Papers_Fk_Papers_ConferenceSeries','Papers.ConferenceSeriesId','ConferenceInstances_Fk_ConferenceInstances_ConferenceSeries','ConferenceInstances.ConferenceSeriesId'])">
                ConferenceSeriesId
              </text>
              <title>ConferenceSeriesId
                bigint
                PRIMARY KEY</title></a>
            <a xlink:href='#ConferenceSeries.ConferenceSeriesId'>
              <use id='ref' x='804' y='1084' xlink:href='#ref'/>
              <title>Referred by Papers ( ConferenceSeriesId )
                Referred by ConferenceInstances ( ConferenceSeriesId ) </title></a>
            <a xlink:href='#ConferenceSeries_Rank'>
              <text id='ConferenceSeries.Rank' x='659' y='1111'>Rank ❄️</text>
              <title>Rank
                integer
                FROZEN; no new ranks are being added</title></a>
            <text x='813' y='1108' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#ConferenceSeries_NormalizedName'>
              <text id='ConferenceSeries.NormalizedName' x='659' y='1127'>NormalizedName</text>
              <title>NormalizedName
                varchar
                UPDATED; slightly different normalization algorithm</title></a>
            <text x='813' y='1124' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#ConferenceSeries_DisplayName'>
              <text id='ConferenceSeries.DisplayName' x='659' y='1143'>DisplayName</text>
              <title>DisplayName
                varchar</title></a>
            <text x='813' y='1140' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#ConferenceSeries_PaperCount'>
              <text id='ConferenceSeries.PaperCount' x='659' y='1159'>PaperCount</text>
              <title>PaperCount
                bigint</title></a>
            <text x='813' y='1156' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#ConferenceSeries_PaperFamilyCount'>
              <text id='ConferenceSeries.PaperFamilyCount' x='659' y='1175'>PaperFamilyCount ❄️</text>
              <title>PaperFamilyCount
                bigint
                FROZEN; same value as &quot;paper_count</title></a>
            <text x='813' y='1172' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#ConferenceSeries_CitationCount'>
              <text id='ConferenceSeries.CitationCount' x='659' y='1191'>CitationCount</text>
              <title>CitationCount
                bigint</title></a>
            <text x='813' y='1188' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#ConferenceSeries_CreatedDate'>
              <text id='ConferenceSeries.CreatedDate' x='659' y='1207'>CreatedDate</text>
              <title>CreatedDate
                varchar</title></a>
            <text x='813' y='1204' text-anchor='end' class='colType'>t</text>
            <!-- == Table 'EntityRelatedEntities' == -->
            <rect id='depict_EntityRelatedEntities' class='entity' style='stroke:#C9ADB3' x='144' y='136' width='160'
                  height='144'/>
            <rect class='entity' x='144' y='136' width='160' height='28' style='stroke:#C9ADB3; fill:#A16A76'/>
            <a xlink:href='#EntityRelatedEntities'>
              <text x='153' y='155' class='white'>EntityRelatedEntities</text>
              <title>Table EntityRelatedEntities
                Relationship between papers, authors, fields of study. (advanced/EntityRelatedEntities.txt)</title></a>
            <use id='idx1' x='146' y='172' xlink:href='#idx1'><title>Distribution ( EntityId ) Sorting ( EntityId
              ) </title></use>
            <a xlink:href='#EntityRelatedEntities_EntityId'>
              <text id='EntityRelatedEntities.EntityId' x='163' y='183'>EntityId</text>
              <title>EntityId
                bigint</title></a>
            <text x='301' y='180' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#EntityRelatedEntities_EntityType'>
              <text id='EntityRelatedEntities.EntityType' x='163' y='199'>EntityType</text>
              <title>EntityType
                varchar
                Possible values: af (Affiliation), j (Journal), c (Conference)</title></a>
            <text x='301' y='196' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#EntityRelatedEntities_RelatedEntityId'>
              <text id='EntityRelatedEntities.RelatedEntityId' x='163' y='215'>RelatedEntityId</text>
              <title>RelatedEntityId
                bigint</title></a>
            <text x='301' y='212' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#EntityRelatedEntities_RelatedEntityType'>
              <text id='EntityRelatedEntities.RelatedEntityType' x='163' y='231'>RelatedEntityType</text>
              <title>RelatedEntityType
                varchar
                Possible values: af (Affiliation), j (Journal), c (Conference)</title></a>
            <text x='301' y='228' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#EntityRelatedEntities_RelatedType'>
              <text id='EntityRelatedEntities.RelatedType' x='163' y='247'>RelatedType</text>
              <title>RelatedType
                integer
                Possible values: 0 (same paper), 1 (common coauthors), 2 (co-cited), 3 (common field of study), 4 (same
                venue), 5 (A cites B), 6 (B cites A)</title></a>
            <text x='301' y='244' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#EntityRelatedEntities_Score'>
              <text id='EntityRelatedEntities.Score' x='163' y='263'>Score</text>
              <title>Score
                real
                Confidence range between 0 and 1. Larger number representing higher confidence.</title></a>
            <text x='301' y='260' text-anchor='end' class='colType'>#</text>
            <!-- == Table 'FieldOfStudyChildren' == -->
            <rect id='depict_FieldOfStudyChildren' class='entity' style='stroke:#ADB2C9' x='832' y='184' width='176'
                  height='80'/>
            <rect class='entity' x='832' y='184' width='176' height='28' style='stroke:#ADB2C9; fill:#6A74A1'/>
            <a xlink:href='#FieldOfStudyChildren'>
              <text x='849' y='203' class='white'>FieldOfStudyChildren</text>
              <title>Table FieldOfStudyChildren
                Relationship between Fields of Study (advanced/FieldOfStudyChildren.txt)</title></a>
            <use id='idx1' x='834' y='220' xlink:href='#idx1'><title>Distribution ( FieldOfStudyId ) Sorting (
              FieldOfStudyId ) </title></use>
            <a xlink:href='#FieldOfStudyChildren_FieldOfStudyId'>
              <text id='FieldOfStudyChildren.FieldOfStudyId' x='851' y='231'
                    onmouseover="hghl(['FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy','FieldsOfStudy.FieldOfStudyId'])"
                    onmouseout="uhghl(['FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy','FieldsOfStudy.FieldOfStudyId'])">
                FieldOfStudyId
              </text>
              <title>FieldOfStudyId
                bigint
                FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId</title></a>
            <a xlink:href='#FieldOfStudyChildren.FieldOfStudyId'>
              <use id='fk' x='996' y='220' xlink:href='#fk'/>
              <title>References FieldsOfStudy ( FieldOfStudyId ) </title></a>
            <a xlink:href='#FieldOfStudyChildren_ChildFieldOfStudyId'>
              <text id='FieldOfStudyChildren.ChildFieldOfStudyId' x='851' y='247'
                    onmouseover="hghl(['FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy_0','FieldsOfStudy.FieldOfStudyId'])"
                    onmouseout="uhghl(['FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy_0','FieldsOfStudy.FieldOfStudyId'])">
                ChildFieldOfStudyId
              </text>
              <title>ChildFieldOfStudyId
                bigint
                FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId</title></a>
            <a xlink:href='#FieldOfStudyChildren.ChildFieldOfStudyId'>
              <use id='fk' x='996' y='236' xlink:href='#fk'/>
              <title>References FieldsOfStudy ( ChildFieldOfStudyId -&gt; FieldOfStudyId ) </title></a>

            <!-- == Table 'FieldOfStudyExtendedAttributes' == -->
            <rect id='depict_FieldOfStudyExtendedAttributes' class='entity' style='stroke:#ADB2C9' x='832' y='72'
                  width='224' height='96'/>
            <rect class='entity' x='832' y='72' width='224' height='28' style='stroke:#ADB2C9; fill:#6A74A1'/>
            <a xlink:href='#FieldOfStudyExtendedAttributes'>
              <text x='838' y='91' class='white'>FieldOfStudyExtendedAttributes</text>
              <title>Table FieldOfStudyExtendedAttributes
                Other identifiers for Fields of Study (advanced/FieldOfStudyExtendedAttributes.txt)</title></a>
            <use id='idx1' x='834' y='108' xlink:href='#idx1'><title>Distribution ( FieldOfStudyId ) Sorting (
              FieldOfStudyId ) </title></use>
            <a xlink:href='#FieldOfStudyExtendedAttributes_FieldOfStudyId'>
              <text id='FieldOfStudyExtendedAttributes.FieldOfStudyId' x='851' y='119'
                    onmouseover="hghl(['FieldOfStudyExtendedAttributes_Fk_FieldOfStudyExtendedAttributes_FieldsOfStudy','FieldsOfStudy.FieldOfStudyId'])"
                    onmouseout="uhghl(['FieldOfStudyExtendedAttributes_Fk_FieldOfStudyExtendedAttributes_FieldsOfStudy','FieldsOfStudy.FieldOfStudyId'])">
                FieldOfStudyId
              </text>
              <title>FieldOfStudyId
                bigint
                FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId</title></a>
            <a xlink:href='#FieldOfStudyExtendedAttributes.FieldOfStudyId'>
              <use id='fk' x='1044' y='108' xlink:href='#fk'/>
              <title>References FieldsOfStudy ( FieldOfStudyId ) </title></a>
            <a xlink:href='#FieldOfStudyExtendedAttributes_AttributeType'>
              <text id='FieldOfStudyExtendedAttributes.AttributeType' x='851' y='135'>AttributeType</text>
              <title>AttributeType
                bigint
                Possible values: 1 (AUI from UMLS
                https://www.nlm.nih.gov/research/umls/licensedcontent/umlsarchives04.html#2018AA), 2 (source url), 3
                (CUI from UMLS https://www.nlm.nih.gov/research/umls/licensedcontent/umlsknowledgesources.html)</title>
            </a>
            <text x='1053' y='132' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#FieldOfStudyExtendedAttributes_AttributeValue'>
              <text id='FieldOfStudyExtendedAttributes.AttributeValue' x='851' y='151'>AttributeValue</text>
              <title>AttributeValue
                varchar</title></a>
            <text x='1053' y='148' text-anchor='end' class='colType'>t</text>
            <!-- == Table 'FieldsOfStudy' == -->
            <rect id='depict_FieldsOfStudy' class='entity' style='stroke:#ADB2C9' x='624' y='104' width='160'
                  height='208'/>
            <rect class='entity' x='624' y='104' width='160' height='28' style='stroke:#ADB2C9; fill:#6A74A1'/>
            <a xlink:href='#FieldsOfStudy'>
              <text x='657' y='123' class='white'>FieldsOfStudy</text>
              <title>Table FieldsOfStudy
                Base table for Fields of Study (advanced/FieldsOfStudy.txt)</title></a>
            <use id='idx1' x='626' y='140' xlink:href='#idx1'><title>Distribution ( FieldOfStudyId ) Sorting (
              FieldOfStudyId ) </title></use>
            <a xlink:href='#FieldsOfStudy_FieldOfStudyId'>
              <text id='FieldsOfStudy.FieldOfStudyId' x='643' y='151'
                    onmouseover="hghl(['FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy','FieldOfStudyChildren.FieldOfStudyId','FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy_0','FieldOfStudyChildren.ChildFieldOfStudyId','RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy','RelatedFieldOfStudy.FieldOfStudyId1','RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy_0','RelatedFieldOfStudy.FieldOfStudyId2','FieldOfStudyExtendedAttributes_Fk_FieldOfStudyExtendedAttributes_FieldsOfStudy','FieldOfStudyExtendedAttributes.FieldOfStudyId','PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_FieldsOfStudy','PaperFieldsOfStudy.FieldOfStudyId'])"
                    onmouseout="uhghl(['FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy','FieldOfStudyChildren.FieldOfStudyId','FieldOfStudyChildren_Fk_FieldOfStudyChildren_FieldsOfStudy_0','FieldOfStudyChildren.ChildFieldOfStudyId','RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy','RelatedFieldOfStudy.FieldOfStudyId1','RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy_0','RelatedFieldOfStudy.FieldOfStudyId2','FieldOfStudyExtendedAttributes_Fk_FieldOfStudyExtendedAttributes_FieldsOfStudy','FieldOfStudyExtendedAttributes.FieldOfStudyId','PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_FieldsOfStudy','PaperFieldsOfStudy.FieldOfStudyId'])">
                FieldOfStudyId
              </text>
              <title>FieldOfStudyId
                bigint
                PRIMARY KEY</title></a>
            <a xlink:href='#FieldsOfStudy.FieldOfStudyId'>
              <use id='ref' x='772' y='140' xlink:href='#ref'/>
              <title>Referred by FieldOfStudyChildren ( FieldOfStudyId )
                Referred by FieldOfStudyChildren ( ChildFieldOfStudyId -&gt; FieldOfStudyId )
                Referred by RelatedFieldOfStudy ( FieldOfStudyId1 -&gt; FieldOfStudyId )
                Referred by RelatedFieldOfStudy ( FieldOfStudyId2 -&gt; FieldOfStudyId )
                Referred by FieldOfStudyExtendedAttributes ( FieldOfStudyId )
                Referred by PaperFieldsOfStudy ( FieldOfStudyId ) </title></a>
            <a xlink:href='#FieldsOfStudy_Rank'>
              <text id='FieldsOfStudy.Rank' x='643' y='167'>Rank ❄️</text>
              <title>Rank
                varchar
                FROZEN; no new ranks are being added.</title></a>
            <text x='781' y='164' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#FieldsOfStudy_NormalizedName'>
              <text id='FieldsOfStudy.NormalizedName' x='643' y='183'>NormalizedName</text>
              <title>NormalizedName
                varchar
                UPDATED; slightly different normalization algorithm</title></a>
            <text x='781' y='180' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#FieldsOfStudy_DisplayName'>
              <text id='FieldsOfStudy.DisplayName' x='643' y='199'>DisplayName</text>
              <title>DisplayName
                varchar</title></a>
            <text x='781' y='196' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#FieldsOfStudy_MainType'>
              <text id='FieldsOfStudy.MainType' x='643' y='215'>MainType</text>
              <title>MainType
                varchar</title></a>
            <text x='781' y='212' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#FieldsOfStudy_Level'>
              <text id='FieldsOfStudy.Level' x='643' y='231'>Level</text>
              <title>Level
                integer
                Possible values: 0-5</title></a>
            <text x='781' y='228' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#FieldsOfStudy_PaperCount'>
              <text id='FieldsOfStudy.PaperCount' x='643' y='247'>PaperCount</text>
              <title>PaperCount
                bigint</title></a>
            <text x='781' y='244' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#FieldsOfStudy_PaperFamilyCount'>
              <text id='FieldsOfStudy.PaperFamilyCount' x='643' y='263'>PaperFamilyCount ❄️</text>
              <title>PaperFamilyCount
                bigint
                FROZEN; same value as &quot;paper_count.</title></a>
            <text x='781' y='260' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#FieldsOfStudy_CitationCount'>
              <text id='FieldsOfStudy.CitationCount' x='643' y='279'>CitationCount</text>
              <title>CitationCount
                bigint</title></a>
            <text x='781' y='276' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#FieldsOfStudy_CreatedDate'>
              <text id='FieldsOfStudy.CreatedDate' x='643' y='295'>CreatedDate</text>
              <title>CreatedDate
                varchar</title></a>
            <text x='781' y='292' text-anchor='end' class='colType'>t</text>
            <!-- == Table 'Journals' == -->
            <rect id='depict_Journals' class='entity' style='stroke:#C9ADC5' x='656' y='552' width='160' height='288'/>
            <rect class='entity' x='656' y='552' width='160' height='28' style='stroke:#C9ADC5; fill:#A16A9B'/>
            <a xlink:href='#Journals'>
              <text x='706' y='571' class='white'>Journals</text>
              <title>Table Journals
                Base table for Journals (mag/Journals.txt)</title></a>
            <use id='idx1' x='658' y='588' xlink:href='#idx1'><title>Distribution ( JournalId ) Sorting ( JournalId
              ) </title></use>
            <a xlink:href='#Journals_JournalId'>
              <text id='Journals.JournalId' x='675' y='599'
                    onmouseover="hghl(['Papers_Fk_Papers_Journals','Papers.JournalId'])"
                    onmouseout="uhghl(['Papers_Fk_Papers_Journals','Papers.JournalId'])">JournalId
              </text>
              <title>JournalId
                bigint
                PRIMARY KEY</title></a>
            <a xlink:href='#Journals.JournalId'>
              <use id='ref' x='804' y='588' xlink:href='#ref'/>
              <title>Referred by Papers ( JournalId ) </title></a>
            <a xlink:href='#Journals_Rank'>
              <text id='Journals.Rank' x='675' y='615'>Rank ❄️</text>
              <title>Rank
                integer
                FROZEN; no new ranks are being added</title></a>
            <text x='813' y='612' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Journals_NormalizedName'>
              <text id='Journals.NormalizedName' x='675' y='631'>NormalizedName</text>
              <title>NormalizedName
                varchar
                UPDATED; slightly different normalization algorithm</title></a>
            <text x='813' y='628' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Journals_DisplayName'>
              <text id='Journals.DisplayName' x='675' y='647'>DisplayName</text>
              <title>DisplayName
                varchar</title></a>
            <text x='813' y='644' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Journals_Issn'>
              <text id='Journals.Issn' x='675' y='663'>Issn</text>
              <title>Issn
                varchar
                UPDATED; the ISSN-L for the journal (see
                https://en.wikipedia.org/wiki/International_Standard_Serial_Number#Linking_ISSN)</title></a>
            <text x='813' y='660' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Journals_Issns'>
              <text id='Journals.Issns' x='675' y='679'>Issns 🔥</text>
              <title>Issns
                varchar
                NEW; JSON list of all ISSNs for this journal (example: &apos;[&quot;1469-5073&quot;,&quot;0016-6723&quot;]&apos;
                )</title></a>
            <text x='813' y='676' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Journals_IsOa'>
              <text id='Journals.IsOa' x='675' y='695'>IsOa 🔥</text>
              <title>IsOa
                boolean
                NEW; TRUE when the journal is 100% OA</title></a>
            <text x='813' y='692' text-anchor='end' class='colType'>b</text>
            <a xlink:href='#Journals_IsInDoaj'>
              <text id='Journals.IsInDoaj' x='675' y='711'>IsInDoaj 🔥</text>
              <title>IsInDoaj
                boolean
                NEW; TRUE when the journal is in DOAJ (see https://doaj.org/)</title></a>
            <text x='813' y='708' text-anchor='end' class='colType'>b</text>
            <a xlink:href='#Journals_Publisher'>
              <text id='Journals.Publisher' x='675' y='727'>Publisher</text>
              <title>Publisher
                varchar</title></a>
            <text x='813' y='724' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Journals_Webpage'>
              <text id='Journals.Webpage' x='675' y='743'>Webpage</text>
              <title>Webpage
                varchar</title></a>
            <text x='813' y='740' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Journals_PaperCount'>
              <text id='Journals.PaperCount' x='675' y='759'>PaperCount</text>
              <title>PaperCount
                bigint</title></a>
            <text x='813' y='756' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Journals_PaperFamilyCount'>
              <text id='Journals.PaperFamilyCount' x='675' y='775'>PaperFamilyCount ❄️</text>
              <title>PaperFamilyCount
                bigint
                FROZEN; same value as &quot;paper_count</title></a>
            <text x='813' y='772' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Journals_CitationCount'>
              <text id='Journals.CitationCount' x='675' y='791'>CitationCount</text>
              <title>CitationCount
                bigint</title></a>
            <text x='813' y='788' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Journals_CreatedDate'>
              <text id='Journals.CreatedDate' x='675' y='807'>CreatedDate</text>
              <title>CreatedDate
                varchar</title></a>
            <text x='813' y='804' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Journals_UpdatedDate'>
              <text id='Journals.UpdatedDate' x='675' y='823'>UpdatedDate 🔥</text>
              <title>UpdatedDate
                timestamp
                NEW; set when changes are made going forward</title></a>
            <text x='813' y='820' text-anchor='end' class='colType'>d</text>
            <!-- == Table 'PaperAbstractsInvertedIndex' == -->
            <rect id='depict_PaperAbstractsInvertedIndex' class='entity' style='stroke:#ADBBC9' x='336' y='1272'
                  width='208' height='80'/>
            <rect class='entity' x='336' y='1272' width='208' height='28' style='stroke:#ADBBC9; fill:#6A87A1'/>
            <a xlink:href='#PaperAbstractsInvertedIndex'>
              <text x='345' y='1291' class='white'>PaperAbstractsInvertedIndex</text>
              <title>Table PaperAbstractsInvertedIndex
                Inverted abstracts (nlp/PaperAbstractsInvertedIndex.txt.</title></a>
            <use id='idx1' x='338' y='1308' xlink:href='#idx1'><title>Distribution ( PaperId ) Sorting ( PaperId
              ) </title></use>
            <a xlink:href='#PaperAbstractsInvertedIndex_PaperId'>
              <text id='PaperAbstractsInvertedIndex.PaperId' x='355' y='1319'
                    onmouseover="hghl(['PaperAbstractsInvertedIndex_Fk_PaperAbstractsInvertedIndex_Papers','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperAbstractsInvertedIndex_Fk_PaperAbstractsInvertedIndex_Papers','Papers.PaperId'])">
                PaperId
              </text>
              <title>PaperId
                bigint
                FOREIGN KEY REFERENCES papers.papers_id</title></a>
            <a xlink:href='#PaperAbstractsInvertedIndex.PaperId'>
              <use id='fk' x='532' y='1308' xlink:href='#fk'/>
              <title>References Papers ( PaperId ) </title></a>
            <a xlink:href='#PaperAbstractsInvertedIndex_IndexedAbstract'>
              <text id='PaperAbstractsInvertedIndex.IndexedAbstract' x='355' y='1335'>IndexedAbstract</text>
              <title>IndexedAbstract
                varchar
                Inverted index, see https://en.wikipedia.org/wiki/Inverted_index</title></a>
            <text x='541' y='1332' text-anchor='end' class='colType'>t</text>
            <!-- == Table 'PaperAuthorAffiliations' == -->
            <rect id='depict_PaperAuthorAffiliations' class='entity' style='stroke:#C9BFAD' x='896' y='472' width='192'
                  height='144'/>
            <rect class='entity' x='896' y='472' width='192' height='28' style='stroke:#C9BFAD; fill:#A18E6A'/>
            <a xlink:href='#PaperAuthorAffiliations'>
              <text x='914' y='491' class='white'>PaperAuthorAffiliations</text>
              <title>Table PaperAuthorAffiliations
                Links between papers, authors, and affiliations/institutions. NOTE: It is possible to have multiple rows
                with same (PaperId, AuthorId, AffiliationId) when an author is associated with multiple affiliations.
                (mag/PaperAuthorAffiliations.txt)</title></a>
            <use id='idx1' x='898' y='508' xlink:href='#idx1'><title>Distribution ( PaperId ) Sorting ( PaperId
              ) </title></use>
            <a xlink:href='#PaperAuthorAffiliations_PaperId'>
              <text id='PaperAuthorAffiliations.PaperId' x='915' y='519'
                    onmouseover="hghl(['PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Papers','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Papers','Papers.PaperId'])">
                PaperId
              </text>
              <title>PaperId
                bigint
                FOREIGN KEY REFERENCES Papers.PaperId</title></a>
            <a xlink:href='#PaperAuthorAffiliations.PaperId'>
              <use id='fk' x='1076' y='508' xlink:href='#fk'/>
              <title>References Papers ( PaperId ) </title></a>
            <a xlink:href='#PaperAuthorAffiliations_AuthorId'>
              <text id='PaperAuthorAffiliations.AuthorId' x='915' y='535'
                    onmouseover="hghl(['PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Authors','Authors.AuthorId'])"
                    onmouseout="uhghl(['PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Authors','Authors.AuthorId'])">
                AuthorId
              </text>
              <title>AuthorId
                bigint
                FOREIGN KEY REFERENCES Authors.AuthorId</title></a>
            <a xlink:href='#PaperAuthorAffiliations.AuthorId'>
              <use id='fk' x='1076' y='524' xlink:href='#fk'/>
              <title>References Authors ( AuthorId ) </title></a>
            <a xlink:href='#PaperAuthorAffiliations_AffiliationId'>
              <text id='PaperAuthorAffiliations.AffiliationId' x='915' y='551'
                    onmouseover="hghl(['PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Affiliations','Affiliations.AffiliationId'])"
                    onmouseout="uhghl(['PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Affiliations','Affiliations.AffiliationId'])">
                AffiliationId
              </text>
              <title>AffiliationId
                bigint
                FOREIGN KEY REFERENCES Affiliations.AffiliationId</title></a>
            <a xlink:href='#PaperAuthorAffiliations.AffiliationId'>
              <use id='fk' x='1076' y='540' xlink:href='#fk'/>
              <title>References Affiliations ( AffiliationId ) </title></a>
            <a xlink:href='#PaperAuthorAffiliations_AuthorSequenceNumber'>
              <text id='PaperAuthorAffiliations.AuthorSequenceNumber' x='915' y='567'>AuthorSequenceNumber</text>
              <title>AuthorSequenceNumber
                integer
                1-based author sequence number. 1: the 1st author listed on paper, 2: the 2nd author listed on paper,
                etc.</title></a>
            <text x='1085' y='564' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#PaperAuthorAffiliations_OriginalAuthor'>
              <text id='PaperAuthorAffiliations.OriginalAuthor' x='915' y='583'>OriginalAuthor</text>
              <title>OriginalAuthor
                varchar</title></a>
            <text x='1085' y='580' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperAuthorAffiliations_OriginalAffiliation'>
              <text id='PaperAuthorAffiliations.OriginalAffiliation' x='915' y='599'>OriginalAffiliation</text>
              <title>OriginalAffiliation
                varchar</title></a>
            <text x='1085' y='596' text-anchor='end' class='colType'>t</text>
            <!-- == Table 'PaperCitationContexts' == -->
            <rect id='depict_PaperCitationContexts' class='entity' style='stroke:#ADBBC9' x='336' y='1128' width='160'
                  height='96'/>
            <rect class='entity' x='336' y='1128' width='160' height='28' style='stroke:#ADBBC9; fill:#6A87A1'/>
            <a xlink:href='#PaperCitationContexts'>
              <text x='341' y='1147' class='white'>PaperCitationContexts ❄️</text>
              <title>Table PaperCitationContexts
                FROZEN; citation contexts (nlp/PaperCitationContexts.txt)</title></a>
            <use id='idx1' x='338' y='1164' xlink:href='#idx1'><title>Distribution ( PaperId ) Sorting ( PaperId
              ) </title></use>
            <a xlink:href='#PaperCitationContexts_PaperId'>
              <text id='PaperCitationContexts.PaperId' x='355' y='1175'
                    onmouseover="hghl(['PaperCitationContexts_Fk_PaperCitationContexts_Papers','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperCitationContexts_Fk_PaperCitationContexts_Papers','Papers.PaperId'])">
                PaperId
              </text>
              <title>PaperId
                bigint
                FOREIGN KEY REFERENCES papers.papers_id</title></a>
            <a xlink:href='#PaperCitationContexts.PaperId'>
              <use id='fk' x='484' y='1164' xlink:href='#fk'/>
              <title>References Papers ( PaperId ) </title></a>
            <a xlink:href='#PaperCitationContexts_PaperReferenceId'>
              <text id='PaperCitationContexts.PaperReferenceId' x='355' y='1191'
                    onmouseover="hghl(['PaperCitationContexts_Fk_PaperCitationContexts_Papers_0','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperCitationContexts_Fk_PaperCitationContexts_Papers_0','Papers.PaperId'])">
                PaperReferenceId
              </text>
              <title>PaperReferenceId
                bigint
                FOREIGN KEY REFERENCES papers.papers_id</title></a>
            <a xlink:href='#PaperCitationContexts.PaperReferenceId'>
              <use id='fk' x='484' y='1180' xlink:href='#fk'/>
              <title>References Papers ( PaperReferenceId -&gt; PaperId ) </title></a>
            <a xlink:href='#PaperCitationContexts_CitationContext'>
              <text id='PaperCitationContexts.CitationContext' x='355' y='1207'>CitationContext</text>
              <title>CitationContext
                varchar</title></a>
            <text x='493' y='1204' text-anchor='end' class='colType'>t</text>
            <!-- == Table 'PaperExtendedAttributes' == -->
            <rect id='depict_PaperExtendedAttributes' class='entity' style='stroke:#ADBBC9' x='64' y='392' width='176'
                  height='96'/>
            <rect class='entity' x='64' y='392' width='176' height='28' style='stroke:#ADBBC9; fill:#6A87A1'/>
            <a xlink:href='#PaperExtendedAttributes'>
              <text x='69' y='411' class='white'>PaperExtendedAttributes</text>
              <title>Table PaperExtendedAttributes
                Extra paper identifiers (mag/PaperExtendedAttributes.txt)</title></a>
            <use id='idx1' x='66' y='428' xlink:href='#idx1'><title>Distribution ( PaperId ) Sorting ( PaperId
              ) </title></use>
            <a xlink:href='#PaperExtendedAttributes_PaperId'>
              <text id='PaperExtendedAttributes.PaperId' x='83' y='439'
                    onmouseover="hghl(['PaperExtendedAttributes_Fk_PaperExtendedAttributes_Papers','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperExtendedAttributes_Fk_PaperExtendedAttributes_Papers','Papers.PaperId'])">
                PaperId
              </text>
              <title>PaperId
                bigint
                FOREIGN KEY REFERENCES Papers.PaperId</title></a>
            <a xlink:href='#PaperExtendedAttributes.PaperId'>
              <use id='fk' x='228' y='428' xlink:href='#fk'/>
              <title>References Papers ( PaperId ) </title></a>
            <a xlink:href='#PaperExtendedAttributes_AttributeType'>
              <text id='PaperExtendedAttributes.AttributeType' x='83' y='455'>AttributeType</text>
              <title>AttributeType
                integer
                Possible values: 1=PatentId, 2=PubMedId, 3=PmcId, 4=Alternative Title</title></a>
            <text x='237' y='452' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#PaperExtendedAttributes_AttributeValue'>
              <text id='PaperExtendedAttributes.AttributeValue' x='83' y='471'>AttributeValue</text>
              <title>AttributeValue
                varchar</title></a>
            <text x='237' y='468' text-anchor='end' class='colType'>t</text>
            <!-- == Table 'PaperFieldsOfStudy' == -->
            <rect id='depict_PaperFieldsOfStudy' class='entity' style='stroke:#ADB2C9' x='432' y='232' width='160'
                  height='112'/>
            <rect class='entity' x='432' y='232' width='160' height='28' style='stroke:#ADB2C9; fill:#6A74A1'/>
            <a xlink:href='#PaperFieldsOfStudy'>
              <text x='447' y='251' class='white'>PaperFieldsOfStudy</text>
              <title>Table PaperFieldsOfStudy
                Linking table from papers to fields, with score (advanced/PaperFieldsOfStudy.txt)</title></a>
            <use id='idx1' x='434' y='268' xlink:href='#idx1'><title>Distribution ( PaperId ) Sorting ( PaperId
              ) </title></use>
            <a xlink:href='#PaperFieldsOfStudy_PaperId'>
              <text id='PaperFieldsOfStudy.PaperId' x='451' y='279'
                    onmouseover="hghl(['PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_Papers','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_Papers','Papers.PaperId'])">PaperId
              </text>
              <title>PaperId
                bigint
                FOREIGN KEY REFERENCES Papers.PaperId</title></a>
            <a xlink:href='#PaperFieldsOfStudy.PaperId'>
              <use id='fk' x='580' y='268' xlink:href='#fk'/>
              <title>References Papers ( PaperId ) </title></a>
            <a xlink:href='#PaperFieldsOfStudy_FieldOfStudyId'>
              <text id='PaperFieldsOfStudy.FieldOfStudyId' x='451' y='295'
                    onmouseover="hghl(['PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_FieldsOfStudy','FieldsOfStudy.FieldOfStudyId'])"
                    onmouseout="uhghl(['PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_FieldsOfStudy','FieldsOfStudy.FieldOfStudyId'])">
                FieldOfStudyId
              </text>
              <title>FieldOfStudyId
                bigint
                FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId</title></a>
            <a xlink:href='#PaperFieldsOfStudy.FieldOfStudyId'>
              <use id='fk' x='580' y='284' xlink:href='#fk'/>
              <title>References FieldsOfStudy ( FieldOfStudyId ) </title></a>
            <a xlink:href='#PaperFieldsOfStudy_Score'>
              <text id='PaperFieldsOfStudy.Score' x='451' y='311'>Score</text>
              <title>Score
                real
                Confidence range between 0 and 1. Bigger number representing higher confidence.</title></a>
            <text x='589' y='308' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#PaperFieldsOfStudy_AlgorithmVersion'>
              <text id='PaperFieldsOfStudy.AlgorithmVersion' x='451' y='327'>AlgorithmVersion 🔥</text>
              <title>AlgorithmVersion
                integer
                NEW; version of algorithm to assign fields. Possible values: 1=old MAG (FROZEN), 2=OpenAlex</title></a>
            <text x='589' y='324' text-anchor='end' class='colType'>#</text>
            <!-- == Table 'PaperMeSH' == -->
            <rect id='depict_PaperMeSH' class='entity' style='stroke:#ADBCC9' x='96' y='760' width='144' height='144'/>
            <rect class='entity' x='96' y='760' width='144' height='28' style='stroke:#ADBCC9; fill:#6A89A1'/>
            <a xlink:href='#PaperMeSH'>
              <text x='129' y='779' class='white'>PaperMeSH</text>
              <title>Table PaperMeSH
                MeSH headings assigned to the paper by PubMed (advanced/PaperMeSH.txt)</title></a>
            <use id='idx1' x='98' y='796' xlink:href='#idx1'><title>Distribution ( PaperId ) Sorting ( PaperId
              ) </title></use>
            <a xlink:href='#PaperMeSH_PaperId'>
              <text id='PaperMeSH.PaperId' x='115' y='807'
                    onmouseover="hghl(['PaperMeSH_Fk_PaperMeSH_Papers','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperMeSH_Fk_PaperMeSH_Papers','Papers.PaperId'])">PaperId
              </text>
              <title>PaperId
                bigint
                FOREIGN KEY REFERENCES Papers.PaperId</title></a>
            <a xlink:href='#PaperMeSH.PaperId'>
              <use id='fk' x='228' y='796' xlink:href='#fk'/>
              <title>References Papers ( PaperId ) </title></a>
            <a xlink:href='#PaperMeSH_DescriptorUI'>
              <text id='PaperMeSH.DescriptorUI' x='115' y='823'>DescriptorUI</text>
              <title>DescriptorUI
                varchar
                see https://en.wikipedia.org/wiki/Medical_Subject_Headings</title></a>
            <text x='237' y='820' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperMeSH_DescriptorName'>
              <text id='PaperMeSH.DescriptorName' x='115' y='839'>DescriptorName</text>
              <title>DescriptorName
                varchar
                see https://en.wikipedia.org/wiki/Medical_Subject_Headings</title></a>
            <text x='237' y='836' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperMeSH_QualifierUI'>
              <text id='PaperMeSH.QualifierUI' x='115' y='855'>QualifierUI</text>
              <title>QualifierUI
                varchar
                see https://en.wikipedia.org/wiki/Medical_Subject_Headings</title></a>
            <text x='237' y='852' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperMeSH_QualifierName'>
              <text id='PaperMeSH.QualifierName' x='115' y='871'>QualifierName</text>
              <title>QualifierName
                varchar
                see https://en.wikipedia.org/wiki/Medical_Subject_Headings</title></a>
            <text x='237' y='868' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperMeSH_IsMajorTopic'>
              <text id='PaperMeSH.IsMajorTopic' x='115' y='887'>IsMajorTopic</text>
              <title>IsMajorTopic
                boolean
                see https://en.wikipedia.org/wiki/Medical_Subject_Headings</title></a>
            <text x='237' y='884' text-anchor='end' class='colType'>b</text>
            <!-- == Table 'PaperRecommendations' == -->
            <rect id='depict_PaperRecommendations' class='entity' style='stroke:#ADBBC9' x='48' y='504' width='192'
                  height='96'/>
            <rect class='entity' x='48' y='504' width='192' height='28' style='stroke:#ADBBC9; fill:#6A87A1'/>
            <a xlink:href='#PaperRecommendations'>
              <text x='64' y='523' class='white'>PaperRecommendations</text>
              <title>Table PaperRecommendations
                Paper recommendations with score (advanced/PaperRecommendations.txt)</title></a>
            <use id='idx1' x='50' y='540' xlink:href='#idx1'><title>Distribution ( PaperId ) Sorting ( PaperId
              ) </title></use>
            <a xlink:href='#PaperRecommendations_PaperId'>
              <text id='PaperRecommendations.PaperId' x='67' y='551'
                    onmouseover="hghl(['PaperRecommendations_Fk_PaperRecommendations_Papers','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperRecommendations_Fk_PaperRecommendations_Papers','Papers.PaperId'])">PaperId
              </text>
              <title>PaperId
                bigint
                FOREIGN KEY REFERENCES Papers.PaperId</title></a>
            <a xlink:href='#PaperRecommendations.PaperId'>
              <use id='fk' x='228' y='540' xlink:href='#fk'/>
              <title>References Papers ( PaperId ) </title></a>
            <a xlink:href='#PaperRecommendations_RecommendedPaperId'>
              <text id='PaperRecommendations.RecommendedPaperId' x='67' y='567'
                    onmouseover="hghl(['PaperRecommendations_Fk_PaperRecommendations_Papers_0','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperRecommendations_Fk_PaperRecommendations_Papers_0','Papers.PaperId'])">
                RecommendedPaperId
              </text>
              <title>RecommendedPaperId
                bigint
                FOREIGN KEY REFERENCES Papers.PaperId</title></a>
            <a xlink:href='#PaperRecommendations.RecommendedPaperId'>
              <use id='fk' x='228' y='556' xlink:href='#fk'/>
              <title>References Papers ( RecommendedPaperId -&gt; PaperId ) </title></a>
            <a xlink:href='#PaperRecommendations_Score'>
              <text id='PaperRecommendations.Score' x='67' y='583'>Score</text>
              <title>Score
                real
                Confidence range between 0 and 1. Bigger number representing higher confidence.</title></a>
            <text x='237' y='580' text-anchor='end' class='colType'>#</text>
            <!-- == Table 'PaperReferences' == -->
            <rect id='depict_PaperReferences' class='entity' style='stroke:#ADBBC9' x='80' y='920' width='160'
                  height='80'/>
            <rect class='entity' x='80' y='920' width='160' height='28' style='stroke:#ADBBC9; fill:#6A87A1'/>
            <a xlink:href='#PaperReferences'>
              <text x='103' y='939' class='white'>PaperReferences</text>
              <title>Table PaperReferences
                Paper references and, in reverse, citations (mag/PaperReferences.txt)</title></a>
            <use id='idx1' x='82' y='956' xlink:href='#idx1'><title>Distribution ( PaperId ) Sorting ( PaperId
              ) </title></use>
            <a xlink:href='#PaperReferences_PaperId'>
              <text id='PaperReferences.PaperId' x='99' y='967'
                    onmouseover="hghl(['PaperReferences_Fk_PaperReferences_Papers','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperReferences_Fk_PaperReferences_Papers','Papers.PaperId'])">PaperId
              </text>
              <title>PaperId
                bigint
                FOREIGN KEY REFERENCES Papers.PaperId</title></a>
            <a xlink:href='#PaperReferences.PaperId'>
              <use id='fk' x='228' y='956' xlink:href='#fk'/>
              <title>References Papers ( PaperId ) </title></a>
            <a xlink:href='#PaperReferences_PaperReferenceId'>
              <text id='PaperReferences.PaperReferenceId' x='99' y='983'
                    onmouseover="hghl(['PaperReferences_Fk_PaperReferences_Papers_0','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperReferences_Fk_PaperReferences_Papers_0','Papers.PaperId'])">
                PaperReferenceId
              </text>
              <title>PaperReferenceId
                bigint
                FOREIGN KEY REFERENCES Papers.PaperId</title></a>
            <a xlink:href='#PaperReferences.PaperReferenceId'>
              <use id='fk' x='228' y='972' xlink:href='#fk'/>
              <title>References Papers ( PaperReferenceId -&gt; PaperId ) </title></a>

            <!-- == Table 'PaperResources' == -->
            <rect id='depict_PaperResources' class='entity' style='stroke:#ADBCC9' x='80' y='616' width='160'
                  height='128'/>
            <rect class='entity' x='80' y='616' width='160' height='28' style='stroke:#ADBCC9; fill:#6A89A1'/>
            <a xlink:href='#PaperResources'>
              <text x='107' y='635' class='white'>PaperResources ❄️</text>
              <title>Table PaperResources
                FROZEN; no longer updated. Data and code urls associated with papers (mag/PaperResources.txt)</title>
            </a>
            <use id='idx1' x='82' y='652' xlink:href='#idx1'><title>Distribution ( PaperId ) Sorting ( PaperId
              ) </title></use>
            <a xlink:href='#PaperResources_PaperId'>
              <text id='PaperResources.PaperId' x='99' y='663'
                    onmouseover="hghl(['PaperResources_Fk_PaperResources_Papers','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperResources_Fk_PaperResources_Papers','Papers.PaperId'])">PaperId
              </text>
              <title>PaperId
                bigint
                FOREIGN KEY REFERENCES papers.papers_id</title></a>
            <a xlink:href='#PaperResources.PaperId'>
              <use id='fk' x='228' y='652' xlink:href='#fk'/>
              <title>References Papers ( PaperId ) </title></a>
            <a xlink:href='#PaperResources_ResourceType'>
              <text id='PaperResources.ResourceType' x='99' y='679'>ResourceType</text>
              <title>ResourceType
                integer
                Bit flags: 1=Project, 2=Data, 4=Code</title></a>
            <text x='237' y='676' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#PaperResources_ResourceUrl'>
              <text id='PaperResources.ResourceUrl' x='99' y='695'>ResourceUrl</text>
              <title>ResourceUrl
                varchar
                Url of resource</title></a>
            <text x='237' y='692' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperResources_SourceUrl'>
              <text id='PaperResources.SourceUrl' x='99' y='711'>SourceUrl</text>
              <title>SourceUrl
                varchar
                List of urls associated with the project, used to derive resource_url</title></a>
            <text x='237' y='708' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperResources_RelationshipType'>
              <text id='PaperResources.RelationshipType' x='99' y='727'>RelationshipType</text>
              <title>RelationshipType
                integer
                Bit flags: 1=Own, 2=Cite</title></a>
            <text x='237' y='724' text-anchor='end' class='colType'>#</text>
            <!-- == Table 'PaperUrls' == -->
            <rect id='depict_PaperUrls' class='entity' style='stroke:#ADBBC9' x='64' y='1016' width='176' height='224'/>
            <rect class='entity' x='64' y='1016' width='176' height='28' style='stroke:#ADBBC9; fill:#6A87A1'/>
            <a xlink:href='#PaperUrls'>
              <text x='118' y='1035' class='white'>PaperUrls</text>
              <title>Table PaperUrls
                Urls for the paper (mag/PaperUrls.txt)</title></a>
            <use id='idx1' x='66' y='1052' xlink:href='#idx1'><title>Distribution ( PaperId ) Sorting ( PaperId
              ) </title></use>
            <a xlink:href='#PaperUrls_PaperId'>
              <text id='PaperUrls.PaperId' x='83' y='1063'
                    onmouseover="hghl(['PaperUrls_Fk_PaperUrls_Papers','Papers.PaperId'])"
                    onmouseout="uhghl(['PaperUrls_Fk_PaperUrls_Papers','Papers.PaperId'])">PaperId
              </text>
              <title>PaperId
                bigint
                FOREIGN KEY REFERENCES Papers.PaperId</title></a>
            <a xlink:href='#PaperUrls.PaperId'>
              <use id='fk' x='228' y='1052' xlink:href='#fk'/>
              <title>References Papers ( PaperId ) </title></a>
            <a xlink:href='#PaperUrls_SourceType'>
              <text id='PaperUrls.SourceType' x='83' y='1079'>SourceType</text>
              <title>SourceType
                integer
                Possible values: 1=Html, 2=Text, 3=Pdf, 4=Doc, 5=Ppt, 6=Xls, 8=Rtf, 12=Xml, 13=Rss, 20=Swf, 27=Ics,
                31=Pub, 33=Ods, 34=Odp, 35=Odt, 36=Zip, 40=Mp3, 0/999/NULL=unknown</title></a>
            <text x='237' y='1076' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#PaperUrls_SourceUrl'>
              <text id='PaperUrls.SourceUrl' x='83' y='1095'>SourceUrl</text>
              <title>SourceUrl
                varchar</title></a>
            <text x='237' y='1092' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperUrls_LanguageCode'>
              <text id='PaperUrls.LanguageCode' x='83' y='1111'>LanguageCode</text>
              <title>LanguageCode
                varchar</title></a>
            <text x='237' y='1108' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperUrls_UrlForLandingPage'>
              <text id='PaperUrls.UrlForLandingPage' x='83' y='1127'>UrlForLandingPage 🔥</text>
              <title>UrlForLandingPage
                varchar
                NEW; URL for the landing page, when article is free to read</title></a>
            <text x='237' y='1124' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperUrls_UrlForPdf'>
              <text id='PaperUrls.UrlForPdf' x='83' y='1143'>UrlForPdf 🔥</text>
              <title>UrlForPdf
                varchar
                NEW; URL for the PDF, when article is free to read</title></a>
            <text x='237' y='1140' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperUrls_HostType'>
              <text id='PaperUrls.HostType' x='83' y='1159'>HostType 🔥</text>
              <title>HostType
                varchar
                NEW; host type of the free-to-read URL, Possible values: publisher, repository</title></a>
            <text x='237' y='1156' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperUrls_Version'>
              <text id='PaperUrls.Version' x='83' y='1175'>Version 🔥</text>
              <title>Version
                varchar
                NEW; version of the free-to-read URL Possible values: submittedVersion, acceptedVersion,
                publishedVersion</title></a>
            <text x='237' y='1172' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperUrls_License'>
              <text id='PaperUrls.License' x='83' y='1191'>License 🔥</text>
              <title>License
                varchar
                NEW; license of the free-to-read URL (example: cc0, cc-by, publisher-specific)</title></a>
            <text x='237' y='1188' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperUrls_RepositoryInstitution'>
              <text id='PaperUrls.RepositoryInstitution' x='83' y='1207'>RepositoryInstitution 🔥</text>
              <title>RepositoryInstitution
                varchar
                NEW; name of repository host of URL</title></a>
            <text x='237' y='1204' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#PaperUrls_OaiPmhId'>
              <text id='PaperUrls.OaiPmhId' x='83' y='1223'>OaiPmhId 🔥</text>
              <title>OaiPmhId
                varchar
                NEW; OAH-PMH id of the repository record</title></a>
            <text x='237' y='1220' text-anchor='end' class='colType'>t</text>
            <!-- == Table 'Papers' == -->
            <rect id='depict_Papers' class='entity' style='stroke:#B1C9AD' x='368' y='472' width='176' height='592'/>
            <rect class='entity' x='368' y='472' width='176' height='28' style='stroke:#B1C9AD; fill:#73A16A'/>
            <a xlink:href='#Papers'>
              <text x='431' y='491' class='white'>Papers</text>
              <title>Table Papers
                Main data for papers (mag/Papers.txt)</title></a>
            <use id='idx1' x='370' y='508' xlink:href='#idx1'><title>Distribution ( PaperId ) Sorting ( PaperId
              ) </title></use>
            <a xlink:href='#Papers_PaperId'>
              <text id='Papers.PaperId' x='387' y='519'
                    onmouseover="hghl(['PaperUrls_Fk_PaperUrls_Papers','PaperUrls.PaperId','PaperResources_Fk_PaperResources_Papers','PaperResources.PaperId','PaperReferences_Fk_PaperReferences_Papers','PaperReferences.PaperId','PaperReferences_Fk_PaperReferences_Papers_0','PaperReferences.PaperReferenceId','PaperRecommendations_Fk_PaperRecommendations_Papers','PaperRecommendations.PaperId','PaperRecommendations_Fk_PaperRecommendations_Papers_0','PaperRecommendations.RecommendedPaperId','PaperMeSH_Fk_PaperMeSH_Papers','PaperMeSH.PaperId','PaperExtendedAttributes_Fk_PaperExtendedAttributes_Papers','PaperExtendedAttributes.PaperId','PaperCitationContexts_Fk_PaperCitationContexts_Papers','PaperCitationContexts.PaperId','PaperCitationContexts_Fk_PaperCitationContexts_Papers_0','PaperCitationContexts.PaperReferenceId','PaperAbstractsInvertedIndex_Fk_PaperAbstractsInvertedIndex_Papers','PaperAbstractsInvertedIndex.PaperId','PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_Papers','PaperFieldsOfStudy.PaperId','PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Papers','PaperAuthorAffiliations.PaperId'])"
                    onmouseout="uhghl(['PaperUrls_Fk_PaperUrls_Papers','PaperUrls.PaperId','PaperResources_Fk_PaperResources_Papers','PaperResources.PaperId','PaperReferences_Fk_PaperReferences_Papers','PaperReferences.PaperId','PaperReferences_Fk_PaperReferences_Papers_0','PaperReferences.PaperReferenceId','PaperRecommendations_Fk_PaperRecommendations_Papers','PaperRecommendations.PaperId','PaperRecommendations_Fk_PaperRecommendations_Papers_0','PaperRecommendations.RecommendedPaperId','PaperMeSH_Fk_PaperMeSH_Papers','PaperMeSH.PaperId','PaperExtendedAttributes_Fk_PaperExtendedAttributes_Papers','PaperExtendedAttributes.PaperId','PaperCitationContexts_Fk_PaperCitationContexts_Papers','PaperCitationContexts.PaperId','PaperCitationContexts_Fk_PaperCitationContexts_Papers_0','PaperCitationContexts.PaperReferenceId','PaperAbstractsInvertedIndex_Fk_PaperAbstractsInvertedIndex_Papers','PaperAbstractsInvertedIndex.PaperId','PaperFieldsOfStudy_Fk_PaperFieldsOfStudy_Papers','PaperFieldsOfStudy.PaperId','PaperAuthorAffiliations_Fk_PaperAuthorAffiliations_Papers','PaperAuthorAffiliations.PaperId'])">
                PaperId
              </text>
              <title>PaperId
                bigint
                PRIMARY KEY</title></a>
            <a xlink:href='#Papers.PaperId'>
              <use id='ref' x='532' y='508' xlink:href='#ref'/>
              <title>Referred by PaperUrls ( PaperId )
                Referred by PaperResources ( PaperId )
                Referred by PaperReferences ( PaperId )
                Referred by PaperReferences ( PaperReferenceId -&gt; PaperId )
                Referred by PaperRecommendations ( PaperId )
                Referred by PaperRecommendations ( RecommendedPaperId -&gt; PaperId )
                Referred by PaperMeSH ( PaperId )
                Referred by PaperExtendedAttributes ( PaperId )
                Referred by PaperCitationContexts ( PaperId )
                Referred by PaperCitationContexts ( PaperReferenceId -&gt; PaperId )
                Referred by PaperAbstractsInvertedIndex ( PaperId )
                Referred by PaperFieldsOfStudy ( PaperId )
                Referred by PaperAuthorAffiliations ( PaperId ) </title></a>
            <a xlink:href='#Papers_Rank'>
              <text id='Papers.Rank' x='387' y='535'>Rank ❄️</text>
              <title>Rank
                integer
                FROZEN; no new ranks are being added</title></a>
            <text x='541' y='532' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Papers_Doi'>
              <text id='Papers.Doi' x='387' y='551'>Doi</text>
              <title>Doi
                varchar
                Doi values are upper-cased per DOI standard at
                https://www.doi.org/doi_handbook/2_Numbering.html#2.4</title></a>
            <text x='541' y='548' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_DocType'>
              <text id='Papers.DocType' x='387' y='567'>DocType️</text>
              <title>DocType
                varchar
                Possible values: Book, BookChapter, Conference, Dataset, Journal, Patent, Repository, Thesis, NULL :
                unknown. Patent is FROZEN; no new Patents are being added.</title></a>
            <text x='541' y='564' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_Genre'>
              <text id='Papers.Genre' x='387' y='583'>Genre 🔥</text>
              <title>Genre
                varchar
                NEW; Crossref ontology for work type such as &quot;journal-article, posted-content, dataset, or
                book-chapter</title></a>
            <text x='541' y='580' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_IsParatext'>
              <text id='Papers.IsParatext' x='387' y='599'>IsParatext 🔥</text>
              <title>IsParatext
                boolean
                NEW; indicates front-matter. See
                https://support.unpaywall.org/support/solutions/articles/44001894783</title></a>
            <text x='541' y='596' text-anchor='end' class='colType'>b</text>
            <a xlink:href='#Papers_PaperTitle'>
              <text id='Papers.PaperTitle' x='387' y='615'>PaperTitle</text>
              <title>PaperTitle
                varchar
                UPDATED; slightly different normalization algorithm</title></a>
            <text x='541' y='612' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_OriginalTitle'>
              <text id='Papers.OriginalTitle' x='387' y='631'>OriginalTitle</text>
              <title>OriginalTitle
                varchar</title></a>
            <text x='541' y='628' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_BookTitle'>
              <text id='Papers.BookTitle' x='387' y='647'>BookTitle</text>
              <title>BookTitle
                varchar</title></a>
            <text x='541' y='644' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_Year'>
              <text id='Papers.Year' x='387' y='663'>Year</text>
              <title>Year
                integer</title></a>
            <text x='541' y='660' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Papers_Date'>
              <text id='Papers.Date' x='387' y='679'>Date</text>
              <title>Date
                varchar</title></a>
            <text x='541' y='676' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_OnlineDate'>
              <text id='Papers.OnlineDate' x='387' y='695'>OnlineDate</text>
              <title>OnlineDate
                varchar</title></a>
            <text x='541' y='692' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_Publisher'>
              <text id='Papers.Publisher' x='387' y='711'>Publisher</text>
              <title>Publisher
                varchar</title></a>
            <text x='541' y='708' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_JournalId'>
              <text id='Papers.JournalId' x='387' y='727'
                    onmouseover="hghl(['Papers_Fk_Papers_Journals','Journals.JournalId'])"
                    onmouseout="uhghl(['Papers_Fk_Papers_Journals','Journals.JournalId'])">JournalId
              </text>
              <title>JournalId
                bigint
                FOREIGN KEY references journals.journal_id</title></a>
            <a xlink:href='#Papers.JournalId'>
              <use id='fk' x='532' y='716' xlink:href='#fk'/>
              <title>References Journals ( JournalId ) </title></a>
            <a xlink:href='#Papers_ConferenceSeriesId'>
              <text id='Papers.ConferenceSeriesId' x='387' y='743'
                    onmouseover="hghl(['Papers_Fk_Papers_ConferenceSeries','ConferenceSeries.ConferenceSeriesId'])"
                    onmouseout="uhghl(['Papers_Fk_Papers_ConferenceSeries','ConferenceSeries.ConferenceSeriesId'])">
                ConferenceSeriesId ❄️
              </text>
              <title>ConferenceSeriesId
                bigint
                FROZEN; no longer updated, no new Conference Series are being added. FOREIGN KEY references
                conference_series.conference_series_id.</title></a>
            <a xlink:href='#Papers.ConferenceSeriesId'>
              <use id='fk' x='532' y='732' xlink:href='#fk'/>
              <title>References ConferenceSeries ( ConferenceSeriesId ) </title></a>
            <a xlink:href='#Papers_ConferenceInstanceId'>
              <text id='Papers.ConferenceInstanceId' x='387' y='759'
                    onmouseover="hghl(['Papers_Fk_Papers_ConferenceInstances','ConferenceInstances.ConferenceInstanceId'])"
                    onmouseout="uhghl(['Papers_Fk_Papers_ConferenceInstances','ConferenceInstances.ConferenceInstanceId'])">
                ConferenceInstanceId ❄️
              </text>
              <title>ConferenceInstanceId
                bigint
                FROZEN; no longer updated, no new Conference Instances are being added. FOREIGN KEY references
                conference_instances.conference_instance_id.</title></a>
            <a xlink:href='#Papers.ConferenceInstanceId'>
              <use id='fk' x='532' y='748' xlink:href='#fk'/>
              <title>References ConferenceInstances ( ConferenceInstanceId ) </title></a>
            <a xlink:href='#Papers_Volume'>
              <text id='Papers.Volume' x='387' y='775'>Volume</text>
              <title>Volume
                varchar</title></a>
            <text x='541' y='772' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_Issue'>
              <text id='Papers.Issue' x='387' y='791'>Issue</text>
              <title>Issue
                varchar</title></a>
            <text x='541' y='788' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_FirstPage'>
              <text id='Papers.FirstPage' x='387' y='807'>FirstPage</text>
              <title>FirstPage
                varchar</title></a>
            <text x='541' y='804' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_LastPage'>
              <text id='Papers.LastPage' x='387' y='823'>LastPage</text>
              <title>LastPage
                varchar</title></a>
            <text x='541' y='820' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_ReferenceCount'>
              <text id='Papers.ReferenceCount' x='387' y='839'>ReferenceCount</text>
              <title>ReferenceCount
                bigint</title></a>
            <text x='541' y='836' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Papers_CitationCount'>
              <text id='Papers.CitationCount' x='387' y='855'>CitationCount</text>
              <title>CitationCount
                bigint</title></a>
            <text x='541' y='852' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Papers_EstimatedCitation'>
              <text id='Papers.EstimatedCitation' x='387' y='871'>EstimatedCitation</text>
              <title>EstimatedCitation
                bigint
                UPDATED; new algorithm</title></a>
            <text x='541' y='868' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Papers_OriginalVenue'>
              <text id='Papers.OriginalVenue' x='387' y='887'>OriginalVenue</text>
              <title>OriginalVenue
                varchar</title></a>
            <text x='541' y='884' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_FamilyId'>
              <text id='Papers.FamilyId' x='387' y='903'>FamilyId ❄️</text>
              <title>FamilyId
                bigint
                FROZEN; no longer updated.</title></a>
            <text x='541' y='900' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Papers_FamilyRank'>
              <text id='Papers.FamilyRank' x='387' y='919'>FamilyRank ❄️</text>
              <title>FamilyRank
                bigint
                FROZEN; no longer updated.</title></a>
            <text x='541' y='916' text-anchor='end' class='colType'>#</text>
            <a xlink:href='#Papers_DocSubTypes'>
              <text id='Papers.DocSubTypes' x='387' y='935'>DocSubTypes</text>
              <title>DocSubTypes
                varchar
                Possible values: Retracted Publication, Retraction Notice</title></a>
            <text x='541' y='932' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_OaStatus'>
              <text id='Papers.OaStatus' x='387' y='951'>OaStatus 🔥</text>
              <title>OaStatus
                varchar
                NEW; Possible values: closed, green, gold, hybrid, bronze (see
                https://en.wikipedia.org/wiki/Open_access#Colour_naming_system)</title></a>
            <text x='541' y='948' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_BestUrl'>
              <text id='Papers.BestUrl' x='387' y='967'>BestUrl 🔥</text>
              <title>BestUrl
                varchar
                NEW; An url for the paper (see paper_urls table for more)</title></a>
            <text x='541' y='964' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_BestFreeUrl'>
              <text id='Papers.BestFreeUrl' x='387' y='983'>BestFreeUrl 🔥</text>
              <title>BestFreeUrl
                varchar
                NEW; Url of best legal free-to-read copy when it exists (see
                https://support.unpaywall.org/support/solutions/articles/44001943223)</title></a>
            <text x='541' y='980' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_BestFreeVersion'>
              <text id='Papers.BestFreeVersion' x='387' y='999'>BestFreeVersion 🔥</text>
              <title>BestFreeVersion
                varchar
                NEW; Possible values: submittedVersion, acceptedVersion, publishedVersion</title></a>
            <text x='541' y='996' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_DoiLower'>
              <text id='Papers.DoiLower' x='387' y='1015'>DoiLower 🔥</text>
              <title>DoiLower
                varchar
                NEW; lowercase doi for convenience linking to Unpaywall</title></a>
            <text x='541' y='1012' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_CreatedDate'>
              <text id='Papers.CreatedDate' x='387' y='1031'>CreatedDate</text>
              <title>CreatedDate
                varchar</title></a>
            <text x='541' y='1028' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#Papers_UpdatedDate'>
              <text id='Papers.UpdatedDate' x='387' y='1047'>UpdatedDate 🔥</text>
              <title>UpdatedDate
                timestamp
                NEW; set when changes are made going forward</title></a>
            <text x='541' y='1044' text-anchor='end' class='colType'>d</text>
            <!-- == Table 'RelatedFieldOfStudy' == -->
            <rect id='depict_RelatedFieldOfStudy' class='entity' style='stroke:#ADB2C9' x='832' y='280' width='144'
                  height='128'/>
            <rect class='entity' x='832' y='280' width='144' height='28' style='stroke:#ADB2C9; fill:#6A74A1'/>
            <a xlink:href='#RelatedFieldOfStudy'>
              <text x='835' y='299' class='white'>RelatedFieldOfStudy</text>
              <title>Table RelatedFieldOfStudy
                Relationships between fields of study (advanced/RelatedFieldOfStudy.txt)</title></a>
            <use id='idx1' x='834' y='316' xlink:href='#idx1'><title>Distribution ( FieldOfStudyId1 ) Sorting (
              FieldOfStudyId1 ) </title></use>
            <a xlink:href='#RelatedFieldOfStudy_FieldOfStudyId1'>
              <text id='RelatedFieldOfStudy.FieldOfStudyId1' x='851' y='327'
                    onmouseover="hghl(['RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy','FieldsOfStudy.FieldOfStudyId'])"
                    onmouseout="uhghl(['RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy','FieldsOfStudy.FieldOfStudyId'])">
                FieldOfStudyId1
              </text>
              <title>FieldOfStudyId1
                bigint
                FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId</title></a>
            <a xlink:href='#RelatedFieldOfStudy.FieldOfStudyId1'>
              <use id='fk' x='964' y='316' xlink:href='#fk'/>
              <title>References FieldsOfStudy ( FieldOfStudyId1 -&gt; FieldOfStudyId ) </title></a>
            <a xlink:href='#RelatedFieldOfStudy_Type1'>
              <text id='RelatedFieldOfStudy.Type1' x='851' y='343'>Type1</text>
              <title>Type1
                varchar
                Possible values: general, disease, disease_cause, medical_treatment, symptom</title></a>
            <text x='973' y='340' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#RelatedFieldOfStudy_FieldOfStudyId2'>
              <text id='RelatedFieldOfStudy.FieldOfStudyId2' x='851' y='359'
                    onmouseover="hghl(['RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy_0','FieldsOfStudy.FieldOfStudyId'])"
                    onmouseout="uhghl(['RelatedFieldOfStudy_Fk_RelatedFieldOfStudy_FieldsOfStudy_0','FieldsOfStudy.FieldOfStudyId'])">
                FieldOfStudyId2
              </text>
              <title>FieldOfStudyId2
                bigint
                FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId</title></a>
            <a xlink:href='#RelatedFieldOfStudy.FieldOfStudyId2'>
              <use id='fk' x='964' y='348' xlink:href='#fk'/>
              <title>References FieldsOfStudy ( FieldOfStudyId2 -&gt; FieldOfStudyId ) </title></a>
            <a xlink:href='#RelatedFieldOfStudy_Type2'>
              <text id='RelatedFieldOfStudy.Type2' x='851' y='375'>Type2</text>
              <title>Type2
                varchar
                Possible values: general, disease, disease_cause, medical_treatment, symptom</title></a>
            <text x='973' y='372' text-anchor='end' class='colType'>t</text>
            <a xlink:href='#RelatedFieldOfStudy_Rank'>
              <text id='RelatedFieldOfStudy.Rank' x='851' y='391'>Rank ❄️</text>
              <title>Rank
                real
                FROZEN; no new ranks are being added.</title></a>
            <text x='973' y='388' text-anchor='end' class='colType'>#</text>
          </g>
        </svg>
      </div>
    </div>
    <div class='container pt-2'>

      <div class='card'>
        <div class='card-body'>
<!--          <h5 class='card-title'>Tables</h5>-->
          <h2 class="text-h3">Tables</h2>
          <ul>
            <li><a href='#Affiliations'>Affiliations</a></li>
            <li><a href='#AuthorExtendedAttributes'>AuthorExtendedAttributes</a></li>
            <li><a href='#Authors'>Authors</a></li>
            <li><a href='#ConferenceInstances'>ConferenceInstances</a></li>
            <li><a href='#ConferenceSeries'>ConferenceSeries</a></li>
            <li><a href='#EntityRelatedEntities'>EntityRelatedEntities</a></li>
            <li><a href='#FieldOfStudyChildren'>FieldOfStudyChildren</a></li>
            <li><a href='#FieldOfStudyExtendedAttributes'>FieldOfStudyExtendedAttributes</a></li>
            <li><a href='#FieldsOfStudy'>FieldsOfStudy</a></li>
            <li><a href='#Journals'>Journals</a></li>
            <li><a href='#PaperAbstractsInvertedIndex'>PaperAbstractsInvertedIndex</a></li>
            <li><a href='#PaperAuthorAffiliations'>PaperAuthorAffiliations</a></li>
            <li><a href='#PaperCitationContexts'>PaperCitationContexts</a></li>
            <li><a href='#PaperExtendedAttributes'>PaperExtendedAttributes</a></li>
            <li><a href='#PaperFieldsOfStudy'>PaperFieldsOfStudy</a></li>
            <li><a href='#PaperMeSH'>PaperMeSH</a></li>
            <li><a href='#PaperRecommendations'>PaperRecommendations</a></li>
            <li><a href='#PaperReferences'>PaperReferences</a></li>
            <li><a href='#PaperResources'>PaperResources</a></li>
            <li><a href='#Papers'>Papers</a></li>
            <li><a href='#PaperUrls'>PaperUrls</a></li>
            <li><a href='#RelatedFieldOfStudy'>RelatedFieldOfStudy</a></li>
          </ul>
        </div>
      </div>
      <br><br><br>
      <div class='card'>
        <div class='card-body'><a id='Affiliations'
                                  onclick="window.scrollTo(712, 656);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Affiliations').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5
            class='card-title'>Table Affiliations</h5></a>
          <p class="text-muted">Base table for affiliations&#47;institutions &#40;mag&#47;Affiliations&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
              </td>
              <td><a id='Affiliations_AffiliationId'>AffiliationId</a></td>
              <td> bigint</td>
              <td> PRIMARY KEY</td>
            </tr>
            <tr>
              <td>❄️</td>
              <td><a id='Affiliations_Rank'>Rank</a></td>
              <td> integer encode az64</td>
              <td> FROZEN&#59; no new ranks are being added&#46;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Affiliations_NormalizedName'>NormalizedName</a></td>
              <td> varchar encode lzo</td>
              <td> UPDATED&#59; slightly different normalization algorithm</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Affiliations_DisplayName'>DisplayName</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>❄️</td>
              <td><a id='Affiliations_GridId'>GridId</a></td>
              <td> varchar encode lzo</td>
              <td> FROZEN&#59; ror&#95;id is the new standard identifier for organizations</td>
            </tr>
            <tr>
              <td>🔥</td>
              <td><a id='Affiliations_RorId'>RorId</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; ROR for this organization&#44; see https&#58;&#47;&#47;ror&#46;org&#44; https&#58;&#47;&#47;ror&#46;org&#47;&#58;ror&#95;id</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Affiliations_OfficialPage'>OfficialPage</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Affiliations_WikiPage'>WikiPage</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Affiliations_PaperCount'>PaperCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>❄️</td>
              <td><a id='Affiliations_PaperFamilyCount'>PaperFamilyCount </a></td>
              <td> bigint encode az64</td>
              <td> FROZEN&#59; same value as &quot;paper&#95;count&#46;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Affiliations_CitationCount'>CitationCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Affiliations_Iso3166Code'>Iso3166Code</a></td>
              <td> varchar encode lzo</td>
              <td> Two&#45;letter country codes&#44; see https&#58;&#47;&#47;en&#46;wikipedia&#46;org&#47;wiki&#47;ISO&#95;3166&#45;2</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Affiliations_Latitude'>Latitude</a></td>
              <td> real</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Affiliations_Longitude'>Longitude</a></td>
              <td> real</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Affiliations_CreatedDate'>CreatedDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Affiliations_UpdatedDate'>UpdatedDate</a></td>
              <td> timestamp encode az64</td>
              <td> NEW&#59; set values updated from new ror data</td>
            </tr>
            <tr>
              <th colspan='4'>Referring Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_Authors_Affiliations</td>
              <td> (AffiliationId) &#8592; <a href='#outs&#46;Authors'
                                              onclick="window.scrollTo(920, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Authors').classList.add('palpable'); return false;">Authors</a>(LastKnownAffiliationId)
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperAuthorAffiliations_Affiliations</td>
              <td> (AffiliationId) &#8592; <a href='#outs&#46;PaperAuthorAffiliations'
                                              onclick="window.scrollTo(696, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperAuthorAffiliations').classList.add('palpable'); return false;">PaperAuthorAffiliations</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='AuthorExtendedAttributes'
                                  onclick="window.scrollTo(1144, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_AuthorExtendedAttributes').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table AuthorExtendedAttributes</h5></a>
          <p class="text-muted">Additional author name representations &#40;mag&#47;AuthorExtendedAttributes&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='AuthorExtendedAttributes_AuthorId'>AuthorId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES Authors&#46;AuthorId</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='AuthorExtendedAttributes_AttributeType'>AttributeType</a></td>
              <td> integer encode az64</td>
              <td> Possible values&#58; 1&#61;Alternative name</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='AuthorExtendedAttributes_AttributeValue'>AttributeValue</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <th colspan='4'>Indexes</th>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_AuthorExtendedAttributes_Authors</td>
              <td> (AuthorId) &#8594; <a href='#outs&#46;Authors'
                                         onclick="window.scrollTo(920, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Authors').classList.add('palpable'); return false;">Authors</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='Authors'
                                  onclick="window.scrollTo(920, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Authors').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table Authors</h5></a>
          <p class="text-muted">Base table for authors &#40;mag&#47;Authors&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
              </td>
              <td><a id='Authors_AuthorId'>AuthorId</a></td>
              <td> bigint</td>
              <td> PRIMARY KEY</td>
            </tr>
            <tr>
              <td>❄️</td>
              <td><a id='Authors_Rank'>Rank</a></td>
              <td> integer encode az64</td>
              <td> FROZEN&#59; no new ranks are being added</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Authors_NormalizedName'>NormalizedName</a></td>
              <td> varchar encode lzo</td>
              <td> UPDATED&#59; slightly different normalization algorithm</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Authors_DisplayName'>DisplayName</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Authors_Orcid'>Orcid</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; ORCID identifier for this author</td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='Authors_LastKnownAffiliationId'>LastKnownAffiliationId</a></td>
              <td> integer encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Authors_PaperCount'>PaperCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>❄️</td>
              <td><a id='Authors_PaperFamilyCount'>PaperFamilyCount</a></td>
              <td> bigint encode az64</td>
              <td> FROZEN&#59; same value as &quot;paper&#95;count</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Authors_CitationCount'>CitationCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Authors_CreatedDate'>CreatedDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Authors_UpdatedDate'>UpdatedDate</a></td>
              <td> timestamp encode az64</td>
              <td> NEW&#59; set when changes are made going forward</td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_Authors_Affiliations</td>
              <td> (LastKnownAffiliationId) &#8594; <a href='#outs&#46;Affiliations'
                                                       onclick="window.scrollTo(712, 656);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Affiliations').classList.add('palpable'); return false;">Affiliations</a>(AffiliationId)
              </td>
              <td></td>
            </tr>
            <tr>
              <th colspan='4'>Referring Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_AuthorExtendedAttributes_Authors</td>
              <td> (AuthorId) &#8592; <a href='#outs&#46;AuthorExtendedAttributes'
                                         onclick="window.scrollTo(1144, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_AuthorExtendedAttributes').classList.add('palpable'); return false;">AuthorExtendedAttributes</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperAuthorAffiliations_Authors</td>
              <td> (AuthorId) &#8592; <a href='#outs&#46;PaperAuthorAffiliations'
                                         onclick="window.scrollTo(696, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperAuthorAffiliations').classList.add('palpable'); return false;">PaperAuthorAffiliations</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='ConferenceInstances'
                                  onclick="window.scrollTo(648, 1024);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_ConferenceInstances').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table ConferenceInstances</h5></a>
          <p class="text-muted">❄️ FROZEN&#59; Base table for Conference Instances &#40;mag&#47;ConferenceInstances&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
              </td>
              <td><a id='ConferenceInstances_ConferenceInstanceId'>ConferenceInstanceId</a></td>
              <td> bigint</td>
              <td> PRIMARY KEY</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_NormalizedName'>NormalizedName</a></td>
              <td> varchar encode lzo</td>
              <td> UPDATED&#59; slightly different normalization algorithm</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_DisplayName'>DisplayName</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='ConferenceInstances_ConferenceSeriesId'>ConferenceSeriesId</a></td>
              <td> bigint encode az64</td>
              <td> FOREIGN KEY REFERENCES ConferenceSeries&#46;ConferenceSeriesId</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_Location'>Location</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_OfficialUrl'>OfficialUrl</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_StartDate'>StartDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_EndDate'>EndDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_AbstractRegistrationDate'>AbstractRegistrationDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_SubmissionDeadlineDate'>SubmissionDeadlineDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_NotificationDueDate'>NotificationDueDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_FinalVersionDueDate'>FinalVersionDueDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_PaperCount'>PaperCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>❄️</td>
              <td><a id='ConferenceInstances_PaperFamilyCount'>PaperFamilyCount</a></td>
              <td> bigint encode az64</td>
              <td> FROZEN&#59; same value as &quot;paper&#95;count</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_CitationCount'>CitationCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_Latitude'>Latitude</a></td>
              <td> real</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_Longitude'>Longitude</a></td>
              <td> real</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceInstances_CreatedDate'>CreatedDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_ConferenceInstances_ConferenceSeries</td>
              <td> (ConferenceSeriesId) &#8594; <a href='#outs&#46;ConferenceSeries'
                                                   onclick="window.scrollTo(440, 1056);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_ConferenceSeries').classList.add('palpable'); return false;">ConferenceSeries</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <th colspan='4'>Referring Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_Papers_ConferenceInstances</td>
              <td> (ConferenceInstanceId) &#8592; <a href='#outs&#46;Papers'
                                                     onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='ConferenceSeries'
                                  onclick="window.scrollTo(440, 1056);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_ConferenceSeries').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table ConferenceSeries</h5></a>
          <p class="text-muted">❄️ FROZEN&#59; Base table for Conference Series
            &#40;mag&#47;ConferenceSeries&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
              </td>
              <td><a id='ConferenceSeries_ConferenceSeriesId'>ConferenceSeriesId</a></td>
              <td> bigint</td>
              <td> PRIMARY KEY</td>
            </tr>
            <tr>
              <td>❄️</td>
              <td><a id='ConferenceSeries_Rank'>Rank</a></td>
              <td> integer encode az64</td>
              <td> FROZEN&#59; no new ranks are being added</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceSeries_NormalizedName'>NormalizedName</a></td>
              <td> varchar encode lzo</td>
              <td> UPDATED&#59; slightly different normalization algorithm</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceSeries_DisplayName'>DisplayName</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceSeries_PaperCount'>PaperCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>❄️&nbsp;</td>
              <td><a id='ConferenceSeries_PaperFamilyCount'>PaperFamilyCount</a></td>
              <td> bigint encode az64</td>
              <td> FROZEN&#59; same value as &quot;paper&#95;count</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceSeries_CitationCount'>CitationCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='ConferenceSeries_CreatedDate'>CreatedDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <th colspan='4'>Referring Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_Papers_ConferenceSeries</td>
              <td> (ConferenceSeriesId) &#8592; <a href='#outs&#46;Papers'
                                                   onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_ConferenceInstances_ConferenceSeries</td>
              <td> (ConferenceSeriesId) &#8592; <a href='#outs&#46;ConferenceInstances'
                                                   onclick="window.scrollTo(648, 1024);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_ConferenceInstances').classList.add('palpable'); return false;">ConferenceInstances</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='EntityRelatedEntities'
                                  onclick="window.scrollTo(60, 144);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_EntityRelatedEntities').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table EntityRelatedEntities</h5></a>
          <p class="text-muted">Relationship between papers&#44; authors&#44; fields of study&#46; &#40;advanced&#47;EntityRelatedEntities&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>&nbsp;</td>
              <td><a id='EntityRelatedEntities_EntityId'>EntityId</a></td>
              <td> bigint</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='EntityRelatedEntities_EntityType'>EntityType</a></td>
              <td> varchar encode lzo</td>
              <td> Possible values&#58; af &#40;Affiliation&#41;&#44; j &#40;Journal&#41;&#44; c &#40;Conference&#41;
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='EntityRelatedEntities_RelatedEntityId'>RelatedEntityId</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='EntityRelatedEntities_RelatedEntityType'>RelatedEntityType</a></td>
              <td> varchar encode lzo</td>
              <td> Possible values&#58; af &#40;Affiliation&#41;&#44; j &#40;Journal&#41;&#44; c &#40;Conference&#41;
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='EntityRelatedEntities_RelatedType'>RelatedType</a></td>
              <td> integer encode az64</td>
              <td> Possible values&#58; 0 &#40;same paper&#41;&#44; 1 &#40;common coauthors&#41;&#44; 2 &#40;co&#45;cited&#41;&#44;
                3 &#40;common field of study&#41;&#44; 4 &#40;same venue&#41;&#44; 5 &#40;A cites B&#41;&#44; 6 &#40;B
                cites A&#41;
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='EntityRelatedEntities_Score'>Score</a></td>
              <td> real</td>
              <td> Confidence range between 0 and 1&#46; Larger number representing higher confidence&#46;</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='FieldOfStudyChildren'
                                  onclick="window.scrollTo(632, 192);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_FieldOfStudyChildren').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table FieldOfStudyChildren</h5></a>
          <p class="text-muted">Relationship between Fields of Study
            &#40;advanced&#47;FieldOfStudyChildren&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='FieldOfStudyChildren_FieldOfStudyId'>FieldOfStudyId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES FieldsOfStudy&#46;FieldOfStudyId</td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='FieldOfStudyChildren_ChildFieldOfStudyId'>ChildFieldOfStudyId</a></td>
              <td> bigint encode az64</td>
              <td> FOREIGN KEY REFERENCES FieldsOfStudy&#46;FieldOfStudyId</td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_FieldOfStudyChildren_FieldsOfStudy</td>
              <td> (FieldOfStudyId) &#8594; <a href='#outs&#46;FieldsOfStudy'
                                               onclick="window.scrollTo(424, 112);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_FieldsOfStudy').classList.add('palpable'); return false;">FieldsOfStudy</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_FieldOfStudyChildren_FieldsOfStudy_0</td>
              <td> (ChildFieldOfStudyId) &#8594; <a href='#outs&#46;FieldsOfStudy'
                                                    onclick="window.scrollTo(424, 112);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_FieldsOfStudy').classList.add('palpable'); return false;">FieldsOfStudy</a>(FieldOfStudyId)
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='FieldOfStudyExtendedAttributes'
                                  onclick="window.scrollTo(632, 80);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_FieldOfStudyExtendedAttributes').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table
          FieldOfStudyExtendedAttributes</h5></a>
          <p class="text-muted">Other identifiers for Fields of Study &#40;advanced&#47;FieldOfStudyExtendedAttributes&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='FieldOfStudyExtendedAttributes_FieldOfStudyId'>FieldOfStudyId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES FieldsOfStudy&#46;FieldOfStudyId</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='FieldOfStudyExtendedAttributes_AttributeType'>AttributeType</a></td>
              <td> bigint encode az64</td>
              <td> Possible values&#58; 1 &#40;AUI from UMLS https&#58;&#47;&#47;www&#46;nlm&#46;nih&#46;gov&#47;research&#47;umls&#47;licensedcontent&#47;umlsarchives04&#46;html&#35;2018AA&#41;&#44;
                2 &#40;source url&#41;&#44; 3 &#40;CUI from UMLS https&#58;&#47;&#47;www&#46;nlm&#46;nih&#46;gov&#47;research&#47;umls&#47;licensedcontent&#47;umlsknowledgesources&#46;html&#41;
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='FieldOfStudyExtendedAttributes_AttributeValue'>AttributeValue</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_FieldOfStudyExtendedAttributes_FieldsOfStudy</td>
              <td> (FieldOfStudyId) &#8594; <a href='#outs&#46;FieldsOfStudy'
                                               onclick="window.scrollTo(424, 112);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_FieldsOfStudy').classList.add('palpable'); return false;">FieldsOfStudy</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='FieldsOfStudy'
                                  onclick="window.scrollTo(424, 112);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_FieldsOfStudy').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table FieldsOfStudy</h5></a>
          <p class="text-muted">Base table for Fields of Study &#40;advanced&#47;FieldsOfStudy&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
              </td>
              <td><a id='FieldsOfStudy_FieldOfStudyId'>FieldOfStudyId</a></td>
              <td> bigint</td>
              <td> PRIMARY KEY</td>
            </tr>
            <tr>
              <td>❄️&nbsp;</td>
              <td><a id='FieldsOfStudy_Rank'>Rank</a></td>
              <td> varchar encode lzo</td>
              <td> FROZEN&#59; no new ranks are being added&#46;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='FieldsOfStudy_NormalizedName'>NormalizedName</a></td>
              <td> varchar encode lzo</td>
              <td> UPDATED&#59; slightly different normalization algorithm</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='FieldsOfStudy_DisplayName'>DisplayName</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='FieldsOfStudy_MainType'>MainType</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='FieldsOfStudy_Level'>Level</a></td>
              <td> integer encode az64</td>
              <td> Possible values&#58; 0&#45;5</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='FieldsOfStudy_PaperCount'>PaperCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>❄️&nbsp;</td>
              <td><a id='FieldsOfStudy_PaperFamilyCount'>PaperFamilyCount</a></td>
              <td> bigint encode az64</td>
              <td> FROZEN&#59; same value as &quot;paper&#95;count&#46;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='FieldsOfStudy_CitationCount'>CitationCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='FieldsOfStudy_CreatedDate'>CreatedDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <th colspan='4'>Referring Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_FieldOfStudyChildren_FieldsOfStudy</td>
              <td> (FieldOfStudyId) &#8592; <a href='#outs&#46;FieldOfStudyChildren'
                                               onclick="window.scrollTo(632, 192);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_FieldOfStudyChildren').classList.add('palpable'); return false;">FieldOfStudyChildren</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_FieldOfStudyChildren_FieldsOfStudy_0</td>
              <td> (FieldOfStudyId) &#8592; <a href='#outs&#46;FieldOfStudyChildren'
                                               onclick="window.scrollTo(632, 192);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_FieldOfStudyChildren').classList.add('palpable'); return false;">FieldOfStudyChildren</a>(ChildFieldOfStudyId)
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_RelatedFieldOfStudy_FieldsOfStudy</td>
              <td> (FieldOfStudyId) &#8592; <a href='#outs&#46;RelatedFieldOfStudy'
                                               onclick="window.scrollTo(632, 288);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_RelatedFieldOfStudy').classList.add('palpable'); return false;">RelatedFieldOfStudy</a>(FieldOfStudyId1)
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_RelatedFieldOfStudy_FieldsOfStudy_0</td>
              <td> (FieldOfStudyId) &#8592; <a href='#outs&#46;RelatedFieldOfStudy'
                                               onclick="window.scrollTo(632, 288);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_RelatedFieldOfStudy').classList.add('palpable'); return false;">RelatedFieldOfStudy</a>(FieldOfStudyId2)
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_FieldOfStudyExtendedAttributes_FieldsOfStudy</td>
              <td> (FieldOfStudyId) &#8592; <a href='#outs&#46;FieldOfStudyExtendedAttributes'
                                               onclick="window.scrollTo(632, 80);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_FieldOfStudyExtendedAttributes').classList.add('palpable'); return false;">FieldOfStudyExtendedAttributes</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperFieldsOfStudy_FieldsOfStudy</td>
              <td> (FieldOfStudyId) &#8592; <a href='#outs&#46;PaperFieldsOfStudy'
                                               onclick="window.scrollTo(232, 240);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperFieldsOfStudy').classList.add('palpable'); return false;">PaperFieldsOfStudy</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='Journals'
                                  onclick="window.scrollTo(456, 560);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Journals').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table Journals</h5></a>
          <p class="text-muted">Base table for Journals &#40;mag&#47;Journals&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
              </td>
              <td><a id='Journals_JournalId'>JournalId</a></td>
              <td> bigint</td>
              <td> PRIMARY KEY</td>
            </tr>
            <tr>
              <td>❄️&nbsp;</td>
              <td><a id='Journals_Rank'>Rank</a></td>
              <td> integer encode az64</td>
              <td> FROZEN&#59; no new ranks are being added</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Journals_NormalizedName'>NormalizedName</a></td>
              <td> varchar encode lzo</td>
              <td> UPDATED&#59; slightly different normalization algorithm</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Journals_DisplayName'>DisplayName</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Journals_Issn'>Issn</a></td>
              <td> varchar encode lzo</td>
              <td> UPDATED&#59; the ISSN&#45;L for the journal &#40;see https&#58;&#47;&#47;en&#46;wikipedia&#46;org&#47;wiki&#47;International&#95;Standard&#95;Serial&#95;Number&#35;Linking&#95;ISSN&#41;</td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Journals_Issns'>Issns</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; JSON list of all ISSNs for this journal &#40;example&#58; &#39;&#91;&quot;1469&#45;5073&quot;&#44;&quot;0016&#45;6723&quot;&#93;&#39;
                &#41;
              </td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Journals_IsOa'>IsOa</a></td>
              <td> boolean</td>
              <td> NEW&#59; TRUE when the journal is 100&#37; OA</td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Journals_IsInDoaj'>IsInDoaj</a></td>
              <td> boolean</td>
              <td> NEW&#59; TRUE when the journal is in DOAJ &#40;see https&#58;&#47;&#47;doaj&#46;org&#47;&#41;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Journals_Publisher'>Publisher</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Journals_Webpage'>Webpage</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Journals_PaperCount'>PaperCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>❄️&nbsp;</td>
              <td><a id='Journals_PaperFamilyCount'>PaperFamilyCount</a></td>
              <td> bigint encode az64</td>
              <td> FROZEN&#59; same value as &quot;paper&#95;count</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Journals_CitationCount'>CitationCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Journals_CreatedDate'>CreatedDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Journals_UpdatedDate'>UpdatedDate</a></td>
              <td> timestamp encode az64</td>
              <td> NEW&#59; set when changes are made going forward</td>
            </tr>
            <tr>
              <th colspan='4'>Referring Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_Papers_Journals</td>
              <td> (JournalId) &#8592; <a href='#outs&#46;Papers'
                                          onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='PaperAbstractsInvertedIndex'
                                  onclick="window.scrollTo(136, 1280);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperAbstractsInvertedIndex').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table PaperAbstractsInvertedIndex</h5>
        </a>
          <p class="text-muted">Inverted abstracts &#40;nlp&#47;PaperAbstractsInvertedIndex&#46;txt&#46;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperAbstractsInvertedIndex_PaperId'>PaperId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES papers&#46;papers&#95;id</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperAbstractsInvertedIndex_IndexedAbstract'>IndexedAbstract</a></td>
              <td> varchar encode lzo</td>
              <td> Inverted index&#44; see
                https&#58;&#47;&#47;en&#46;wikipedia&#46;org&#47;wiki&#47;Inverted&#95;index
              </td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperAbstractsInvertedIndex_Papers</td>
              <td> (PaperId) &#8594; <a href='#outs&#46;Papers'
                                        onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='PaperAuthorAffiliations'
                                  onclick="window.scrollTo(696, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperAuthorAffiliations').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table PaperAuthorAffiliations</h5></a>
          <p class="text-muted">Links between papers&#44; authors&#44; and affiliations&#47;institutions&#46; NOTE&#58;
            It is possible to have multiple rows with same &#40;PaperId&#44; AuthorId&#44; AffiliationId&#41; when an
            author is associated with multiple affiliations&#46; &#40;mag&#47;PaperAuthorAffiliations&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperAuthorAffiliations_PaperId'>PaperId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES Papers&#46;PaperId</td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperAuthorAffiliations_AuthorId'>AuthorId</a></td>
              <td> bigint encode az64</td>
              <td> FOREIGN KEY REFERENCES Authors&#46;AuthorId</td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperAuthorAffiliations_AffiliationId'>AffiliationId</a></td>
              <td> bigint encode az64</td>
              <td> FOREIGN KEY REFERENCES Affiliations&#46;AffiliationId</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperAuthorAffiliations_AuthorSequenceNumber'>AuthorSequenceNumber</a></td>
              <td> integer encode az64</td>
              <td> 1&#45;based author sequence number&#46; 1&#58; the 1st author listed on paper&#44; 2&#58; the 2nd
                author listed on paper&#44; etc&#46;
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperAuthorAffiliations_OriginalAuthor'>OriginalAuthor</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperAuthorAffiliations_OriginalAffiliation'>OriginalAffiliation</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperAuthorAffiliations_Papers</td>
              <td> (PaperId) &#8594; <a href='#outs&#46;Papers'
                                        onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperAuthorAffiliations_Authors</td>
              <td> (AuthorId) &#8594; <a href='#outs&#46;Authors'
                                         onclick="window.scrollTo(920, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Authors').classList.add('palpable'); return false;">Authors</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperAuthorAffiliations_Affiliations</td>
              <td> (AffiliationId) &#8594; <a href='#outs&#46;Affiliations'
                                              onclick="window.scrollTo(712, 656);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Affiliations').classList.add('palpable'); return false;">Affiliations</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='PaperCitationContexts'
                                  onclick="window.scrollTo(136, 1136);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperCitationContexts').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table PaperCitationContexts</h5></a>
          <p class="text-muted">❄️ FROZEN&#59; citation contexts &#40;nlp&#47;PaperCitationContexts&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperCitationContexts_PaperId'>PaperId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES papers&#46;papers&#95;id</td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperCitationContexts_PaperReferenceId'>PaperReferenceId</a></td>
              <td> bigint encode az64</td>
              <td> FOREIGN KEY REFERENCES papers&#46;papers&#95;id</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperCitationContexts_CitationContext'>CitationContext</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperCitationContexts_Papers</td>
              <td> (PaperId) &#8594; <a href='#outs&#46;Papers'
                                        onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperCitationContexts_Papers_0</td>
              <td> (PaperReferenceId) &#8594; <a href='#outs&#46;Papers'
                                                 onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>(PaperId)
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='PaperExtendedAttributes'
                                  onclick="window.scrollTo(60, 400);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperExtendedAttributes').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table PaperExtendedAttributes</h5></a>
          <p class="text-muted">Extra paper identifiers &#40;mag&#47;PaperExtendedAttributes&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperExtendedAttributes_PaperId'>PaperId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES Papers&#46;PaperId</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperExtendedAttributes_AttributeType'>AttributeType</a></td>
              <td> integer encode az64</td>
              <td> Possible values&#58; 1&#61;PatentId&#44; 2&#61;PubMedId&#44; 3&#61;PmcId&#44; 4&#61;Alternative
                Title
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperExtendedAttributes_AttributeValue'>AttributeValue</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperExtendedAttributes_Papers</td>
              <td> (PaperId) &#8594; <a href='#outs&#46;Papers'
                                        onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='PaperFieldsOfStudy'
                                  onclick="window.scrollTo(232, 240);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperFieldsOfStudy').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table PaperFieldsOfStudy</h5></a>
          <p class="text-muted">Linking table from papers to fields&#44; with score &#40;advanced&#47;PaperFieldsOfStudy&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperFieldsOfStudy_PaperId'>PaperId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES Papers&#46;PaperId</td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperFieldsOfStudy_FieldOfStudyId'>FieldOfStudyId</a></td>
              <td> bigint encode az64</td>
              <td> FOREIGN KEY REFERENCES FieldsOfStudy&#46;FieldOfStudyId</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperFieldsOfStudy_Score'>Score</a></td>
              <td> real</td>
              <td> Confidence range between 0 and 1&#46; Bigger number representing higher confidence&#46;</td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='PaperFieldsOfStudy_AlgorithmVersion'>AlgorithmVersion</a></td>
              <td> integer encode az64</td>
              <td> NEW&#59; version of algorithm to assign fields&#46; Possible values&#58; 1&#61;old MAG &#40;FROZEN&#41;&#44;
                2&#61;OpenAlex
              </td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperFieldsOfStudy_Papers</td>
              <td> (PaperId) &#8594; <a href='#outs&#46;Papers'
                                        onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperFieldsOfStudy_FieldsOfStudy</td>
              <td> (FieldOfStudyId) &#8594; <a href='#outs&#46;FieldsOfStudy'
                                               onclick="window.scrollTo(424, 112);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_FieldsOfStudy').classList.add('palpable'); return false;">FieldsOfStudy</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='PaperMeSH'
                                  onclick="window.scrollTo(60, 768);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperMeSH').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table PaperMeSH</h5></a>
          <p class="text-muted">MeSH headings assigned to the paper by PubMed
            &#40;advanced&#47;PaperMeSH&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperMeSH_PaperId'>PaperId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES Papers&#46;PaperId</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperMeSH_DescriptorUI'>DescriptorUI</a></td>
              <td> varchar encode lzo</td>
              <td> see https&#58;&#47;&#47;en&#46;wikipedia&#46;org&#47;wiki&#47;Medical&#95;Subject&#95;Headings</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperMeSH_DescriptorName'>DescriptorName</a></td>
              <td> varchar encode lzo</td>
              <td> see https&#58;&#47;&#47;en&#46;wikipedia&#46;org&#47;wiki&#47;Medical&#95;Subject&#95;Headings</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperMeSH_QualifierUI'>QualifierUI</a></td>
              <td> varchar encode lzo</td>
              <td> see https&#58;&#47;&#47;en&#46;wikipedia&#46;org&#47;wiki&#47;Medical&#95;Subject&#95;Headings</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperMeSH_QualifierName'>QualifierName</a></td>
              <td> varchar encode lzo</td>
              <td> see https&#58;&#47;&#47;en&#46;wikipedia&#46;org&#47;wiki&#47;Medical&#95;Subject&#95;Headings</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperMeSH_IsMajorTopic'>IsMajorTopic</a></td>
              <td> boolean</td>
              <td> see https&#58;&#47;&#47;en&#46;wikipedia&#46;org&#47;wiki&#47;Medical&#95;Subject&#95;Headings</td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperMeSH_Papers</td>
              <td> (PaperId) &#8594; <a href='#outs&#46;Papers'
                                        onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='PaperRecommendations'
                                  onclick="window.scrollTo(60, 512);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperRecommendations').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table PaperRecommendations</h5></a>
          <p class="text-muted">Paper recommendations with score &#40;advanced&#47;PaperRecommendations&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperRecommendations_PaperId'>PaperId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES Papers&#46;PaperId</td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperRecommendations_RecommendedPaperId'>RecommendedPaperId</a></td>
              <td> bigint encode az64</td>
              <td> FOREIGN KEY REFERENCES Papers&#46;PaperId</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperRecommendations_Score'>Score</a></td>
              <td> real</td>
              <td> Confidence range between 0 and 1&#46; Bigger number representing higher confidence&#46;</td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperRecommendations_Papers</td>
              <td> (PaperId) &#8594; <a href='#outs&#46;Papers'
                                        onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperRecommendations_Papers_0</td>
              <td> (RecommendedPaperId) &#8594; <a href='#outs&#46;Papers'
                                                   onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>(PaperId)
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='PaperReferences'
                                  onclick="window.scrollTo(60, 928);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperReferences').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table PaperReferences</h5></a>
          <p class="text-muted">Paper references and&#44; in reverse&#44; citations &#40;mag&#47;PaperReferences&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperReferences_PaperId'>PaperId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES Papers&#46;PaperId</td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperReferences_PaperReferenceId'>PaperReferenceId</a></td>
              <td> bigint encode az64</td>
              <td> FOREIGN KEY REFERENCES Papers&#46;PaperId</td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperReferences_Papers</td>
              <td> (PaperId) &#8594; <a href='#outs&#46;Papers'
                                        onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperReferences_Papers_0</td>
              <td> (PaperReferenceId) &#8594; <a href='#outs&#46;Papers'
                                                 onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>(PaperId)
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='PaperResources'
                                  onclick="window.scrollTo(60, 624);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperResources').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table PaperResources</h5></a>
          <p class="text-muted">❄️ FROZEN&#59; no longer updated&#46; Data and code urls associated with papers &#40;mag&#47;PaperResources&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperResources_PaperId'>PaperId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES papers&#46;papers&#95;id</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperResources_ResourceType'>ResourceType</a></td>
              <td> integer encode az64</td>
              <td> Bit flags&#58; 1&#61;Project&#44; 2&#61;Data&#44; 4&#61;Code</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperResources_ResourceUrl'>ResourceUrl</a></td>
              <td> varchar encode lzo</td>
              <td> Url of resource</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperResources_SourceUrl'>SourceUrl</a></td>
              <td> varchar encode lzo</td>
              <td> List of urls associated with the project&#44; used to derive resource&#95;url</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperResources_RelationshipType'>RelationshipType</a></td>
              <td> integer encode az64</td>
              <td> Bit flags&#58; 1&#61;Own&#44; 2&#61;Cite</td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperResources_Papers</td>
              <td> (PaperId) &#8594; <a href='#outs&#46;Papers'
                                        onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='PaperUrls'
                                  onclick="window.scrollTo(60, 1024);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperUrls').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table PaperUrls</h5></a>
          <p class="text-muted">Urls for the paper &#40;mag&#47;PaperUrls&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='PaperUrls_PaperId'>PaperId</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES Papers&#46;PaperId</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperUrls_SourceType'>SourceType</a></td>
              <td> integer encode az64</td>
              <td> Possible values&#58; 1&#61;Html&#44; 2&#61;Text&#44; 3&#61;Pdf&#44; 4&#61;Doc&#44; 5&#61;Ppt&#44; 6&#61;Xls&#44;
                8&#61;Rtf&#44; 12&#61;Xml&#44; 13&#61;Rss&#44; 20&#61;Swf&#44; 27&#61;Ics&#44; 31&#61;Pub&#44; 33&#61;Ods&#44;
                34&#61;Odp&#44; 35&#61;Odt&#44; 36&#61;Zip&#44; 40&#61;Mp3&#44; 0&#47;999&#47;NULL&#61;unknown
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperUrls_SourceUrl'>SourceUrl</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='PaperUrls_LanguageCode'>LanguageCode</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='PaperUrls_UrlForLandingPage'>UrlForLandingPage</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; URL for the landing page&#44; when article is free to read</td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='PaperUrls_UrlForPdf'>UrlForPdf</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; URL for the PDF&#44; when article is free to read</td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='PaperUrls_HostType'>HostType</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; host type of the free&#45;to&#45;read URL&#44; Possible values&#58; publisher&#44;
                repository
              </td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='PaperUrls_Version'>Version</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; version of the free&#45;to&#45;read URL Possible values&#58; submittedVersion&#44;
                acceptedVersion&#44; publishedVersion
              </td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='PaperUrls_License'>License</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; license of the free&#45;to&#45;read URL &#40;example&#58; cc0&#44; cc&#45;by&#44; publisher&#45;specific&#41;</td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='PaperUrls_RepositoryInstitution'>RepositoryInstitution</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; name of repository host of URL</td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='PaperUrls_OaiPmhId'>OaiPmhId</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; OAH&#45;PMH id of the repository record</td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperUrls_Papers</td>
              <td> (PaperId) &#8594; <a href='#outs&#46;Papers'
                                        onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;">Papers</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='Papers'
                                  onclick="window.scrollTo(168, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Papers').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table Papers</h5></a>
          <p class="text-muted">Main data for papers &#40;mag&#47;Papers&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
              </td>
              <td><a id='Papers_PaperId'>PaperId</a></td>
              <td> bigint</td>
              <td> PRIMARY KEY</td>
            </tr>
            <tr>
              <td>❄️&nbsp;</td>
              <td><a id='Papers_Rank'>Rank</a></td>
              <td> integer encode az64</td>
              <td> FROZEN&#59; no new ranks are being added</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_Doi'>Doi</a></td>
              <td> varchar encode lzo</td>
              <td> Doi values are upper&#45;cased per DOI standard at https&#58;&#47;&#47;www&#46;doi&#46;org&#47;doi&#95;handbook&#47;2&#95;Numbering&#46;html&#35;2&#46;4</td>
            </tr>
            <tr>
              <td>❄️&nbsp;</td>
              <td><a id='Papers_DocType'>DocType</a></td>
              <td> varchar encode lzo</td>
              <td> Possible values&#58; Book&#44; BookChapter&#44; Conference&#44; Dataset&#44; Journal&#44; Patent&#44;
                Repository&#44; Thesis&#44; NULL &#58; unknown&#46; Patent is FROZEN&#59; no new Patents are being added&#46;
              </td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Papers_Genre'>Genre</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; Crossref ontology for work type such as &quot;journal&#45;article&#44; posted&#45;content&#44;
                dataset&#44; or book&#45;chapter
              </td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Papers_IsParatext'>IsParatext</a></td>
              <td> boolean</td>
              <td> NEW&#59; indicates front&#45;matter&#46; See https&#58;&#47;&#47;support&#46;unpaywall&#46;org&#47;support&#47;solutions&#47;articles&#47;44001894783</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_PaperTitle'>PaperTitle</a></td>
              <td> varchar encode lzo</td>
              <td> UPDATED&#59; slightly different normalization algorithm</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_OriginalTitle'>OriginalTitle</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_BookTitle'>BookTitle</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_Year'>Year</a></td>
              <td> integer encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_Date'>Date</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_OnlineDate'>OnlineDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_Publisher'>Publisher</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='Papers_JournalId'>JournalId</a></td>
              <td> bigint encode az64</td>
              <td> FOREIGN KEY references journals&#46;journal&#95;id</td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                ❄️
              </td>
              <td><a id='Papers_ConferenceSeriesId'>ConferenceSeriesId</a></td>
              <td> bigint encode az64</td>
              <td> FROZEN&#59; no longer updated&#44; no new Conference Series are being added&#46; FOREIGN KEY
                references conference&#95;series&#46;conference&#95;series&#95;id&#46;
              </td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                ❄️
              </td>
              <td><a id='Papers_ConferenceInstanceId'>ConferenceInstanceId</a></td>
              <td> bigint encode az64</td>
              <td> FROZEN&#59; no longer updated&#44; no new Conference Instances are being added&#46; FOREIGN KEY
                references conference&#95;instances&#46;conference&#95;instance&#95;id&#46;
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_Volume'>Volume</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_Issue'>Issue</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_FirstPage'>FirstPage</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_LastPage'>LastPage</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_ReferenceCount'>ReferenceCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_CitationCount'>CitationCount</a></td>
              <td> bigint encode az64</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_EstimatedCitation'>EstimatedCitation</a></td>
              <td> bigint encode az64</td>
              <td> UPDATED&#59; new algorithm</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_OriginalVenue'>OriginalVenue</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>❄️&nbsp;</td>
              <td><a id='Papers_FamilyId'>FamilyId</a></td>
              <td> bigint encode az64</td>
              <td> FROZEN&#59; no longer updated&#46;</td>
            </tr>
            <tr>
              <td>❄️&nbsp;</td>
              <td><a id='Papers_FamilyRank'>FamilyRank</a></td>
              <td> bigint encode az64</td>
              <td> FROZEN&#59; no longer updated&#46;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_DocSubTypes'>DocSubTypes</a></td>
              <td> varchar encode lzo</td>
              <td> Possible values&#58; Retracted Publication&#44; Retraction Notice</td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Papers_OaStatus'>OaStatus</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; Possible values&#58; closed&#44; green&#44; gold&#44; hybrid&#44; bronze &#40;see https&#58;&#47;&#47;en&#46;wikipedia&#46;org&#47;wiki&#47;Open&#95;access&#35;Colour&#95;naming&#95;system&#41;</td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Papers_BestUrl'>BestUrl</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; An url for the paper &#40;see paper&#95;urls table for more&#41;</td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Papers_BestFreeUrl'>BestFreeUrl</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; Url of best legal free&#45;to&#45;read copy when it exists &#40;see https&#58;&#47;&#47;support&#46;unpaywall&#46;org&#47;support&#47;solutions&#47;articles&#47;44001943223&#41;</td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Papers_BestFreeVersion'>BestFreeVersion</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; Possible values&#58; submittedVersion&#44; acceptedVersion&#44; publishedVersion</td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Papers_DoiLower'>DoiLower</a></td>
              <td> varchar encode lzo</td>
              <td> NEW&#59; lowercase doi for convenience linking to Unpaywall</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='Papers_CreatedDate'>CreatedDate</a></td>
              <td> varchar encode lzo</td>
              <td></td>
            </tr>
            <tr>
              <td>🔥&nbsp;</td>
              <td><a id='Papers_UpdatedDate'>UpdatedDate</a></td>
              <td> timestamp encode az64</td>
              <td> NEW&#59; set when changes are made going forward</td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_Papers_Journals</td>
              <td> (JournalId) &#8594; <a href='#outs&#46;Journals'
                                          onclick="window.scrollTo(456, 560);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_Journals').classList.add('palpable'); return false;">Journals</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_Papers_ConferenceSeries</td>
              <td> (ConferenceSeriesId) &#8594; <a href='#outs&#46;ConferenceSeries'
                                                   onclick="window.scrollTo(440, 1056);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_ConferenceSeries').classList.add('palpable'); return false;">ConferenceSeries</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_Papers_ConferenceInstances</td>
              <td> (ConferenceInstanceId) &#8594; <a href='#outs&#46;ConferenceInstances'
                                                     onclick="window.scrollTo(648, 1024);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_ConferenceInstances').classList.add('palpable'); return false;">ConferenceInstances</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <th colspan='4'>Referring Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperUrls_Papers</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperUrls'
                                        onclick="window.scrollTo(60, 1024);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperUrls').classList.add('palpable'); return false;">PaperUrls</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperResources_Papers</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperResources'
                                        onclick="window.scrollTo(60, 624);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperResources').classList.add('palpable'); return false;">PaperResources</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperReferences_Papers</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperReferences'
                                        onclick="window.scrollTo(60, 928);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperReferences').classList.add('palpable'); return false;">PaperReferences</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperReferences_Papers_0</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperReferences'
                                        onclick="window.scrollTo(60, 928);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperReferences').classList.add('palpable'); return false;">PaperReferences</a>(PaperReferenceId)
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperRecommendations_Papers</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperRecommendations'
                                        onclick="window.scrollTo(60, 512);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperRecommendations').classList.add('palpable'); return false;">PaperRecommendations</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperRecommendations_Papers_0</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperRecommendations'
                                        onclick="window.scrollTo(60, 512);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperRecommendations').classList.add('palpable'); return false;">PaperRecommendations</a>(RecommendedPaperId)
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperMeSH_Papers</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperMeSH'
                                        onclick="window.scrollTo(60, 768);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperMeSH').classList.add('palpable'); return false;">PaperMeSH</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperExtendedAttributes_Papers</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperExtendedAttributes'
                                        onclick="window.scrollTo(60, 400);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperExtendedAttributes').classList.add('palpable'); return false;">PaperExtendedAttributes</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperCitationContexts_Papers</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperCitationContexts'
                                        onclick="window.scrollTo(136, 1136);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperCitationContexts').classList.add('palpable'); return false;">PaperCitationContexts</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperCitationContexts_Papers_0</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperCitationContexts'
                                        onclick="window.scrollTo(136, 1136);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperCitationContexts').classList.add('palpable'); return false;">PaperCitationContexts</a>(PaperReferenceId)
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperAbstractsInvertedIndex_Papers</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperAbstractsInvertedIndex'
                                        onclick="window.scrollTo(136, 1280);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperAbstractsInvertedIndex').classList.add('palpable'); return false;">PaperAbstractsInvertedIndex</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperFieldsOfStudy_Papers</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperFieldsOfStudy'
                                        onclick="window.scrollTo(232, 240);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperFieldsOfStudy').classList.add('palpable'); return false;">PaperFieldsOfStudy</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#ref'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_PaperAuthorAffiliations_Papers</td>
              <td> (PaperId) &#8592; <a href='#outs&#46;PaperAuthorAffiliations'
                                        onclick="window.scrollTo(696, 480);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_PaperAuthorAffiliations').classList.add('palpable'); return false;">PaperAuthorAffiliations</a>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br><br>
      <div class='card'>
        <div class='card-body'><a id='RelatedFieldOfStudy'
                                  onclick="window.scrollTo(632, 288);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_RelatedFieldOfStudy').classList.add('palpable'); return false;"
                                  style='cursor:pointer;'><h5 class='card-title'>Table RelatedFieldOfStudy</h5></a>
          <p class="text-muted">Relationships between fields of study
            &#40;advanced&#47;RelatedFieldOfStudy&#46;txt&#41;</p>
          <table class='table table-sm small' style='table-layout: fixed; word-wrap: break-word;'>
            <thead>
            <tr>
              <th style='width:5%'>Idx</th>
              <th style='width:20%'>Field Name</th>
              <th style='width:23%'>Data Type</th>
              <th style='width:52%'>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='RelatedFieldOfStudy_FieldOfStudyId1'>FieldOfStudyId1</a></td>
              <td> bigint</td>
              <td> FOREIGN KEY REFERENCES FieldsOfStudy&#46;FieldOfStudyId</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='RelatedFieldOfStudy_Type1'>Type1</a></td>
              <td> varchar encode lzo</td>
              <td> Possible values&#58; general&#44; disease&#44; disease&#95;cause&#44; medical&#95;treatment&#44;
                symptom
              </td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
              </td>
              <td><a id='RelatedFieldOfStudy_FieldOfStudyId2'>FieldOfStudyId2</a></td>
              <td> bigint encode az64</td>
              <td> FOREIGN KEY REFERENCES FieldsOfStudy&#46;FieldOfStudyId</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><a id='RelatedFieldOfStudy_Type2'>Type2</a></td>
              <td> varchar encode lzo</td>
              <td> Possible values&#58; general&#44; disease&#44; disease&#95;cause&#44; medical&#95;treatment&#44;
                symptom
              </td>
            </tr>
            <tr>
              <td>❄️&nbsp;</td>
              <td><a id='RelatedFieldOfStudy_Rank'>Rank</a></td>
              <td> real</td>
              <td> FROZEN&#59; no new ranks are being added&#46;</td>
            </tr>
            <tr>
              <th colspan='4'>Foreign Keys</th>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_RelatedFieldOfStudy_FieldsOfStudy</td>
              <td> (FieldOfStudyId1) &#8594; <a href='#outs&#46;FieldsOfStudy'
                                                onclick="window.scrollTo(424, 112);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_FieldsOfStudy').classList.add('palpable'); return false;">FieldsOfStudy</a>(FieldOfStudyId)
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <svg width='14' height='14'>
                  <use xlink:href='#fk'/>
                </svg>
                <svg width='14' height='14'>
                  <use xlink:href='#virtual'/>
                </svg>
              </td>
              <td>Fk_RelatedFieldOfStudy_FieldsOfStudy_0</td>
              <td> (FieldOfStudyId2) &#8594; <a href='#outs&#46;FieldsOfStudy'
                                                onclick="window.scrollTo(424, 112);var nodes = document.getElementsByClassName('palpable');for (var i = 0; i < nodes.length; i++) { nodes[i].classList.remove('palpable');}; document.getElementById('depict_FieldsOfStudy').classList.add('palpable'); return false;">FieldsOfStudy</a>(FieldOfStudyId)
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <!--    END PASTED, AUTO-GENERATED CONTENT -->
  </v-container>
</template>


<script>

export default {
  name: "Schema",
  metaInfo: {title: "Schema"},
  methods: {}
}
</script>


<style scoped lang="scss">
h2 {
}

// deal with all the pasted markup
.card {
  padding-top: 100px;
}

h5 {
  font-size: 30px;
}

th[colspan="4"] {
  padding-top: 50px;
  //font-size: 20px;
  //font-weight: normal;
  text-align: left;
}

tr td:nth-child(2) a {
  color: #333;
  cursor: default;
}


table {
  border-collapse: collapse;
  border-bottom: 1px solid #ddd;
  width: 100%;
  margin-bottom: 100px;



  thead {
    tr {
      th {
        text-align: left;
      }
    }
  }

  tr {
    td {
      padding: 5px 10px 5px 0;
      border-top: 1px solid #ddd;
    }
  }
}


</style>

<style lang="scss">
text {
  fill: #000000;
  font-family: Trebuchet MS, 'Trebuchet MS', Dialog;
  font-size: 14.083333015441895px;
}

a text:hover {
  text-decoration: underline;
  //fill: #0d196f;
  //text-shadow: 0px 0px 6px #d0ce00;
  //font-size: 13px;
  //font-weight: bold;
}

//text.highlight      { fill:#0d196f; text-shadow: 0px 0px 4px #eac533; font-size:13px; font-weight: bold;}
text.white {
  fill: #ffffff;
}

text.colType {
  fill: #b3b3b3;
}

text.relName {
  fill: #9c9a9a;
}

text.legendTitle {
  fill: #d65c68;
  font-weight: bold;
}

text.legendSubTitle {
  fill: #717171;
  font-size: 11px;
}

path {
  stroke: #928c7e;
  stroke-width: 1.25;
  fill: none;
}

path.virtual {
  stroke: #a364b5;
}

path.logo {
  fill: #fbeac0;
  fill-opacity: 1;
  stroke-width: 0.3;
  stroke: #222222;
}

path.dotted {
  stroke-dasharray: 4, 2;
}

path.unhighlight {
  stroke-width: 10;
  opacity: 0;
}

path.highlight {
  stroke-width: 3;
  stroke: #0054c5;
  opacity: 0.8;
}

path.line {
  stroke-width: 10;
  stroke-linecap: round;
  stroke-linejoin: round;
}

rect.entity {
  fill: #ffffff;
  stroke: #777;
  stroke-width: 0;
  shape-rendering: crispEdges;
  filter: url(#shadow);
}

line.delim {
  stroke-width: 1;
  shape-rendering: crispEdges;
}

text.callout {
  fill: #000000;
  font-family: Trebuchet MS, 'Trebuchet MS', Dialog;
  font-size: 14.625px;
}

rect.callout {
  fill: url(#calloutGradient);
  stroke: #bebdbd;
  stroke-width: 0.5;
}

rect.shape {
  stroke: #bebdbd;
  stroke-width: 0.5;
}

rect.grp {
  stroke: #a1a1a1;
  stroke-width: 3;
  opacity: 0.35;
}

path.bgPattern {
  fill: none;
  stroke-width: 0.6;
  stroke: #e5e9ed;
}

rect.palpable {
  fill: #fffbe5;
}
</style>



