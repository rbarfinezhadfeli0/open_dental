Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Etrans

See [API Specification](apispecification.html)

## Etrans POST

Version Added: Plan to add to 21.2

Creates one Etrans of the type ERA 835.

**Example Request:**
 POST /etrans

{
 "DateTimeTrans": "2021-05-26 08:16:46",
 "HqClearinghouseNum": 3,
 "MessageText": "ISA\*00\* 00\* \*30\*330989922…",
 "UserNum": 4
 }

**Example Response:**
 201 Created
 (no "location" Header or object because we don't support GET single inssubs)