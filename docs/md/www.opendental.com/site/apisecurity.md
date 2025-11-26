Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API SecurityPerms

See [API Specification](apispecification.html)

## SecurityPerms GET

Version Added: 22.2

Gets all [API Permissions](apipermissions.html) for a single dental office. Uses the Customer's API Key specified in the API request header.

**Example Request:**
 GET /securityperms

**Example Response:**

 [
 {
 "Permission": "ApiReadAll",
 "HasPermission": "true"
 },
 {
 "Permission": "ApiAllOthers",
 "HasPermission": "true"
 },
 {
 "Permission": "ApiComm",
 "HasPermission": "true"
 },
 {
 "Permission": "ApiDocuments",
 "HasPermission": "false"
 },
 {
 "Permission": "ApiQueries",
 "HasPermission": "true"
 },
 etc...
 ]

200 OK