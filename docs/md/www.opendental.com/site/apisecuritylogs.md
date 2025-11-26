Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API SecurityLogs

See [API Specification](apispecification.html)

See [Audit Trail](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7audittrail.html) for additional information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [SecurityLog Database Schema.](SchemaRedirect%EF%B9%96securitylog.html)

## SecurityLogs GET

Version Added: 23.1.33

Gets all securitylogs for the API developer making the request.

**PermType:** Optional. Filter responses by permission type. See [Audit Trail Permissions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7audittrailpermissions.html) for additional information.

**Example Requests:**
 GET /securitylogs
 GET /securitylogs?PermType=PatientEdit

**Example Response:**
 [
 {
 "SecurityLogNum": 21855,
 "PermType": "PatientCreate",
 "UserNum": 0,
 "LogDateTime": "7/6/2023 11:48:55 AM",
 "LogText": "Created by API Test Developer through API. ",
 "PatNum": 95,
 "CompName": "JUSTINE",
 "LogSource": "API"
 },
 {
 "SecurityLogNum": 21853,
 "PermType": "PatientEdit",
 "UserNum": 0,
 "LogDateTime": "7/6/2023 11:47:47 AM",
 "LogText": "Updated by API Test Developer through API. ",
 "PatNum": 86,
 "CompName": "JUSTINE",
 "LogSource": "API"
 },
 {
 "SecurityLogNum": 21845,
 "PermType": "PatientEdit",
 "UserNum": 0,
 "LogDateTime": "7/6/2023 11:42:49 AM",
 "LogText": "Updated by API Test Developer through API. ",
 "PatNum": 86,
 "CompName": "JUSTINE",
 "LogSource": "API"
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)