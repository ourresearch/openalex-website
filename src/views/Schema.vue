<template>
  <v-container class="about mt-12 pt-12">
    <DIV class="text-h2 mb-6">Schema</DIV>
    <div class="mt-6">
      <h2 class="text-h4" id="affiliations">Affiliations</h2>
      <p><strong>Path</strong> <code>mag/Affiliations.txt</code></p>
      

      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>AffiliationId</td>
          <td>long</td>
          <td>PRIMARY KEY</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Rank</td>
          <td>uint</td>
          <td>See <a href="resources-faq#what-is-the-rank-value-on-entities" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>NormalizedName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>DisplayName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>GridId</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>OfficialPage</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td>WikiPage</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td>PaperCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td>PaperFamilyCount</td>
          <td>long</td>
          <td>See <a href="resources-faq#papercount-vs-paperfamilycount" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>10</td>
          <td>CitationCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>11</td>
          <td>Iso3166Code</td>
          <td>string</td>
          <td>Two-letter codes (alpha-2) defined in <a href="https://www.iso.org/iso-3166-country-codes.html"
                                                       data-linktype="external">ISO_3166 Code (ISO.org)</a> and <a
              href="https://en.wikipedia.org/wiki/ISO_3166-2" data-linktype="external">ISO 3166-2 (Wiki)</a>. Example:
            US
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td>Latitude</td>
          <td>float?</td>
          <td></td>
        </tr>
        <tr>
          <td>13</td>
          <td>Longitude</td>
          <td>float?</td>
          <td></td>
        </tr>
        <tr>
          <td>14</td>
          <td>CreatedDate</td>
          <td>DateTime</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="authorextendedattributes">AuthorExtendedAttributes</h2>
      <p><strong>Path</strong> <code>mag/AuthorExtendedAttributes.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>AuthorId</td>
          <td>long</td>
          <td>FOREIGN KEY REFERENCES Authors.AuthorId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>AttributeType</td>
          <td>int</td>
          <td>1: Alternative Name</td>
        </tr>
        <tr>
          <td>3</td>
          <td>AttributeValue</td>
          <td>string</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="authors">Authors</h2>
      <p><strong>Path</strong> <code>mag/Authors.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>AuthorId</td>
          <td>long</td>
          <td>PRIMARY KEY</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Rank</td>
          <td>uint</td>
          <td>See <a href="resources-faq#what-is-the-rank-value-on-entities" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>NormalizedName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>DisplayName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>LastKnownAffiliationId</td>
          <td>long?</td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>PaperCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td>PaperFamilyCount</td>
          <td>long</td>
          <td>See <a href="resources-faq#papercount-vs-paperfamilycount" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>8</td>
          <td>CitationCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td>CreatedDate</td>
          <td>DateTime</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="conference-instances">Conference Instances</h2>
      <p><strong>Path</strong> <code>mag/ConferenceInstances.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>ConferenceInstanceId</td>
          <td>long</td>
          <td>PRIMARY KEY</td>
        </tr>
        <tr>
          <td>2</td>
          <td>NormalizedName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>DisplayName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>ConferenceSeriesId</td>
          <td>long</td>
          <td>FOREIGN KEY REFERENCES ConferenceSeries.ConferenceSeriesId</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Location</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>OfficialUrl</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td>StartDate</td>
          <td>DateTime?</td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td>EndDate</td>
          <td>DateTime?</td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td>AbstractRegistrationDate</td>
          <td>DateTime?</td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td>SubmissionDeadlineDate</td>
          <td>DateTime?</td>
          <td></td>
        </tr>
        <tr>
          <td>11</td>
          <td>NotificationDueDate</td>
          <td>DateTime?</td>
          <td></td>
        </tr>
        <tr>
          <td>12</td>
          <td>FinalVersionDueDate</td>
          <td>DateTime?</td>
          <td></td>
        </tr>
        <tr>
          <td>13</td>
          <td>PaperCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>14</td>
          <td>PaperFamilyCount</td>
          <td>long</td>
          <td>See <a href="resources-faq#papercount-vs-paperfamilycount" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>15</td>
          <td>CitationCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>16</td>
          <td>Latitude</td>
          <td>float?</td>
          <td></td>
        </tr>
        <tr>
          <td>17</td>
          <td>Longitude</td>
          <td>float?</td>
          <td></td>
        </tr>
        <tr>
          <td>18</td>
          <td>CreatedDate</td>
          <td>DateTime</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="conference-series">Conference Series</h2>
      <p><strong>Path</strong> <code>mag/ConferenceSeries.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>ConferenceSeriesId</td>
          <td>long</td>
          <td>PRIMARY KEY</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Rank</td>
          <td>uint</td>
          <td>See <a href="resources-faq#what-is-the-rank-value-on-entities" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>NormalizedName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>DisplayName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>PaperCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>PaperFamilyCount</td>
          <td>long</td>
          <td>See <a href="resources-faq#papercount-vs-paperfamilycount" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>7</td>
          <td>CitationCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td>CreatedDate</td>
          <td>DateTime</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="entity-related-entities">Entity Related Entities</h2>
      <p><strong>Path</strong> <code>advanced/EntityRelatedEntities.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>EntityId</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>EntityType</td>
          <td>string</td>
          <td>af: Affiliation <br> j: Journal <br> c: Conference</td>
        </tr>
        <tr>
          <td>3</td>
          <td>RelatedEntityId</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>RelatedEntityType</td>
          <td>string</td>
          <td>af: Affiliation <br> j: Journal <br> c: Conference</td>
        </tr>
        <tr>
          <td>5</td>
          <td>RelatedType</td>
          <td>int</td>
          <td>0: Two entities are similar if they appear on the same paper <br> 1: Two entities are similar if they have
            common coauthors <br> 2: Two entities are similar if they are co-cited by others <br> 3: Two entities are
            similar if they have common fields of study <br> 4: Two entities are similar if they appear in the same
            venue <br> 5: Entity A is similar to entity B if A cites B <br> 6: Entity A is similar to entity B if A is
            cited by B
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Score</td>
          <td>float</td>
          <td>Confidence range between 0 and 1. Larger number representing higher confidence.</td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="field-of-study-children">Field of Study Children</h2>
      <p><strong>Path</strong> <code>advanced/FieldOfStudyChildren.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>FieldOfStudyId</td>
          <td>long</td>
          <td>PRIMARY KEY <br> FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>ChildFieldOfStudyId</td>
          <td>long</td>
          <td>PRIMARY KEY <br> FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId</td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="field-of-study-extended-attributes">Field of Study Extended Attributes</h2>
      <p><strong>Path</strong> <code>advanced/FieldOfStudyExtendedAttributes.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>FieldOfStudyId</td>
          <td>long</td>
          <td>FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>AttributeType</td>
          <td>int</td>
          <td>1: AUI: Atom Unique Identifier defined in <a
              href="https://www.nlm.nih.gov/research/umls/new_users/glossary.html#a" data-linktype="external">Unified
            Medical Language System (UMLS)</a>, version <a
              href="https://www.nlm.nih.gov/research/umls/licensedcontent/umlsarchives04.html#2018AA"
              data-linktype="external">2018AA</a>. <br> 2: SourceUrl <br> 3: CUI: Concept Unique Identifier defined in
            <a href="https://www.nlm.nih.gov/research/umls/new_users/glossary.html#c" data-linktype="external">Unified
              Medical Language System (UMLS)</a>, version <a
                href="https://www.nlm.nih.gov/research/umls/licensedcontent/umlsknowledgesources.html"
                data-linktype="external">2020AB</a>.
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>AttributeValue</td>
          <td>string</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="fields-of-study">Fields of Study</h2>
      <p><strong>Path</strong> <code>advanced/FieldsOfStudy.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>FieldOfStudyId</td>
          <td>long</td>
          <td>PRIMARY KEY</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Rank</td>
          <td>uint</td>
          <td>See <a href="resources-faq#what-is-the-rank-value-on-entities" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>NormalizedName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>DisplayName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>MainType</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Level</td>
          <td>Int</td>
          <td>0 - 5</td>
        </tr>
        <tr>
          <td>7</td>
          <td>PaperCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td>PaperFamilyCount</td>
          <td>long</td>
          <td>See <a href="resources-faq#papercount-vs-paperfamilycount" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>9</td>
          <td>CitationCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td>CreatedDate</td>
          <td>DateTime</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="journals">Journals</h2>
      <p><strong>Path</strong> <code>mag/Journals.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>JournalId</td>
          <td>long</td>
          <td>PRIMARY KEY</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Rank</td>
          <td>uint</td>
          <td>See <a href="resources-faq#what-is-the-rank-value-on-entities" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>NormalizedName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>DisplayName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Issn</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Publisher</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td>Webpage</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td>PaperCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td>PaperFamilyCount</td>
          <td>long</td>
          <td>See <a href="resources-faq#papercount-vs-paperfamilycount" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>10</td>
          <td>CitationCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>11</td>
          <td>CreatedDate</td>
          <td>DateTime</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="paper-abstracts-inverted-index">Paper Abstracts Inverted Index</h2>
      <p><strong>Path</strong> <code>nlp/PaperAbstractsInvertedIndex.txt.{*}</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>PaperId</td>
          <td>long</td>
          <td>PRIMARY KEY <br> FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>IndexedAbstract</td>
          <td>string</td>
          <td>See <a href="resources-faq#what-format-are-paper-abstracts-published-in"
                     data-linktype="relative-path">FAQ</a> for format
          </td>
        </tr>
        </tbody>
      </table>
      <div class="NOTE">
        <p>Note</p>
        <p>Paper Abstracts Inverted Index is split to multiple files. Use
          <code>nlp/PaperAbstractsInvertedIndex.txt.{*}</code> as the path for the combined file.</p>
      </div>
      <h2 class="text-h4" id="paper-author-affiliations">Paper Author Affiliations</h2>
      <p><strong>Path</strong> <code>mag/PaperAuthorAffiliations.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>PaperId</td>
          <td>long</td>
          <td>FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>AuthorId</td>
          <td>long</td>
          <td>FOREIGN KEY REFERENCES Authors.AuthorId</td>
        </tr>
        <tr>
          <td>3</td>
          <td>AffiliationId</td>
          <td>long?</td>
          <td>FOREIGN KEY REFERENCES Affiliations.AffiliationId</td>
        </tr>
        <tr>
          <td>4</td>
          <td>AuthorSequenceNumber</td>
          <td>uint</td>
          <td>1-based author sequence number. 1: the 1st author listed on paper, 2: the 2nd author listed on paper,
            etc.
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>OriginalAuthor</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>OriginalAffiliation</td>
          <td>string</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <div class="NOTE">
        <p>Note</p>
        <p>It is possible to have multiple rows with same (PaperId, AuthorId, AffiliationId) when an author is
          associated with multiple affiliations.</p>
      </div>
      <h2 class="text-h4" id="paper-citation-contexts">Paper Citation Contexts</h2>
      <p><strong>Path</strong> <code>nlp/PaperCitationContexts.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>PaperId</td>
          <td>long</td>
          <td>FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>PaperReferenceId</td>
          <td>long</td>
          <td>FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        <tr>
          <td>3</td>
          <td>CitationContext</td>
          <td>string</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="paper-extended-attributes">Paper Extended Attributes</h2>
      <p><strong>Path</strong> <code>mag/PaperExtendedAttributes.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>PaperId</td>
          <td>long</td>
          <td>FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>AttributeType</td>
          <td>int</td>
          <td>1: PatentId <br> 2: PubMedId <br> 3: PmcId <br> 4: Alternative Title</td>
        </tr>
        <tr>
          <td>3</td>
          <td>AttributeValue</td>
          <td>string</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="paper-fields-of-study">Paper Fields of Study</h2>
      <p><strong>Path</strong> <code>advanced/PaperFieldsOfStudy.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>PaperId</td>
          <td>long</td>
          <td>PRIMARY KEY <br> FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>FieldOfStudyId</td>
          <td>long</td>
          <td>PRIMARY KEY <br> FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Score</td>
          <td>float</td>
          <td>Confidence range between 0 and 1. Bigger number representing higher confidence.</td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="paper-mesh">Paper MeSH</h2>
      <p><strong>Path</strong> <code>advanced/PaperMeSH.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>PaperId</td>
          <td>long</td>
          <td>FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>DescriptorUI</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>DescriptorName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>QualifierUI</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>QualifierName</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>IsMajorTopic</td>
          <td>boolean</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <p>Please see <a href="https://www.nlm.nih.gov/mesh/mbinfo.html" data-linktype="external">Medical Subject Headings
        documentation</a> for descriptor and qualifier definitions.</p>
      <h2 class="text-h4" id="paper-recommendations">Paper Recommendations</h2>
      <p><strong>Path</strong> <code>advanced/PaperRecommendations.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>PaperId</td>
          <td>long</td>
          <td>PRIMARY KEY <br> FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>RecommendedPaperId</td>
          <td>long</td>
          <td>PRIMARY KEY <br> FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Score</td>
          <td>float</td>
          <td>Confidence range between 0 and 1. Bigger number representing higher confidence.</td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="paper-references">Paper References</h2>
      <p><strong>Path</strong> <code>mag/PaperReferences.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>PaperId</td>
          <td>long</td>
          <td>PRIMARY KEY <br> FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>PaperReferenceId</td>
          <td>long</td>
          <td>PRIMARY KEY <br> FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="paper-resources">Paper Resources</h2>
      <p><strong>Path</strong> <code>mag/PaperResources.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>PaperId</td>
          <td>long</td>
          <td>FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>ResourceType</td>
          <td>int</td>
          <td>Bit flags. 1 = Project, 2 = Data, 4 = Code</td>
        </tr>
        <tr>
          <td>3</td>
          <td>ResourceUrl</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>SourceUrl</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>RelationshipType</td>
          <td>int</td>
          <td>Bit flags. 1 = Own, 2 = Cite</td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="paper-urls">Paper Urls</h2>
      <p><strong>Path</strong> <code>mag/PaperUrls.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>PaperId</td>
          <td>long</td>
          <td>PRIMARY KEY <br> FOREIGN KEY REFERENCES Papers.PaperId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>SourceType</td>
          <td>int?</td>
          <td>1 = Html, 2 = Text, 3 = Pdf, 4 = Doc, 5 = Ppt, 6 = Xls, 8 = Rtf, 12 = Xml, 13 = Rss, 20 = Swf, 27 = Ics,
            31 = Pub, 33 = Ods, 34 = Odp, 35 = Odt, 36 = Zip, 40 = Mp3, 0/999/NULL = unknown
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>SourceUrl</td>
          <td>string</td>
          <td>PRIMARY KEY</td>
        </tr>
        <tr>
          <td>4</td>
          <td>LanguageCode</td>
          <td>string</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="papers">Papers</h2>
      <p><strong>Path</strong> <code>mag/Papers.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>PaperId</td>
          <td>long</td>
          <td>PRIMARY KEY</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Rank</td>
          <td>uint</td>
          <td>See <a href="resources-faq#what-is-the-rank-value-on-entities" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Doi</td>
          <td>string</td>
          <td>Doi values are upper-cased per <a href="https://www.doi.org/doi_handbook/2_Numbering.html#2.4"
                                                data-linktype="external">DOI standard</a></td>
        </tr>
        <tr>
          <td>4</td>
          <td>DocType</td>
          <td>string</td>
          <td>Book, BookChapter, Conference, Dataset, Journal, Patent, Repository, Thesis, NULL : unknown</td>
        </tr>
        <tr>
          <td>5</td>
          <td>PaperTitle</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>OriginalTitle</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td>BookTitle</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td>Year</td>
          <td>int?</td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td>Date</td>
          <td>DateTime?</td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td>OnlineDate</td>
          <td>DateTime?</td>
          <td></td>
        </tr>
        <tr>
          <td>11</td>
          <td>Publisher</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>12</td>
          <td>JournalId</td>
          <td>long?</td>
          <td>FOREIGN KEY REFERENCES Journals.JournalId</td>
        </tr>
        <tr>
          <td>13</td>
          <td>ConferenceSeriesId</td>
          <td>long?</td>
          <td>FOREIGN KEY REFERENCES ConferenceSeries.ConferenceSeriesId</td>
        </tr>
        <tr>
          <td>14</td>
          <td>ConferenceInstanceId</td>
          <td>long?</td>
          <td>FOREIGN KEY REFERENCES ConferenceInstances.ConferenceInstanceId</td>
        </tr>
        <tr>
          <td>15</td>
          <td>Volume</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>16</td>
          <td>Issue</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>17</td>
          <td>FirstPage</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>18</td>
          <td>LastPage</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>19</td>
          <td>ReferenceCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>20</td>
          <td>CitationCount</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>21</td>
          <td>EstimatedCitation</td>
          <td>long</td>
          <td></td>
        </tr>
        <tr>
          <td>22</td>
          <td>OriginalVenue</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>23</td>
          <td>FamilyId</td>
          <td>long?</td>
          <td>See <a href="resources-faq#what-is-familyid-in-papers" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>24</td>
          <td>FamilyRank</td>
          <td>uint?</td>
          <td>See <a href="resources-faq#rank-vs-familyrank-in-papers" data-linktype="relative-path">FAQ</a></td>
        </tr>
        <tr>
          <td>25</td>
          <td>DocSubTypes</td>
          <td>string</td>
          <td>&quot;Retracted Publication&quot;, &quot;Retraction Notice&quot;</td>
        </tr>
        <tr>
          <td>26</td>
          <td>CreatedDate</td>
          <td>DateTime</td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <h2 class="text-h4" id="related-field-of-study">Related Field of Study</h2>
      <p><strong>Path</strong> <code>advanced/RelatedFieldOfStudy.txt</code></p>
      
      <table>
        <thead>
        <tr>
          <th>Column #</th>
          <th>Name</th>
          <th>Type</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>FieldOfStudyId1</td>
          <td>long</td>
          <td>FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Type1</td>
          <td>string</td>
          <td>general, disease, disease_cause, medical_treatment, symptom</td>
        </tr>
        <tr>
          <td>3</td>
          <td>FieldOfStudyId2</td>
          <td>long</td>
          <td>FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Type2</td>
          <td>string</td>
          <td>general, disease, disease_cause, medical_treatment, symptom</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Rank</td>
          <td>float</td>
          <td>Confidence. Bigger number representing higher confidence.</td>
        </tr>
        </tbody>
      </table>

    </div>


  </v-container>
</template>

<script>
export default {
  name: "Schema.vue"
}
</script>

<style scoped lang="scss">
h2 {
  margin-top: 100px;
}
table {
  border-collapse: collapse;
  border-bottom: 1px solid #ddd;
  thead {
    tr {
      th {
        text-align: left;
      }
    }
  }

  tr {
    td {
      padding: 5px 30px 5px 0;
      border-top: 1px solid #ddd;
    }
  }
}


</style>