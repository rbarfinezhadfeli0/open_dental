Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

API UserGroups

See [API Specification](../site/apispecification.html)

See [User Edit](securityusers.html) for more information.

## UserGroups GET

Version Added: 23.2.21

Gets a list of user groups, which can include CEMT user groups. See [User Groups](https://opendental.com/manual/securityusergroups.html).

**includeCEMT:** Optional. Either "true" or "false". Set to "true" to return usergroups that are designated as CEMT as well as those that are not. Default "false".

**Example Request:**
 GET /usergroups
 GET /usergroups?includeCEMT=true

**Example Response:**
 [
 {
 "UserGroupNum": 1,
 "Description": "Admin",
 "UserGroupNumCEMT": 0
 },
 {
 "UserGroupNum": 3,
 "Description": "Security",
 "UserGroupNumCEMT": 3
 },
 {
 "UserGroupNum": 4,
 "Description": "HR",
 "UserGroupNumCEMT": 0
 },
 etc...
 ]

200 OK
 400 Bad Request (with explanation)