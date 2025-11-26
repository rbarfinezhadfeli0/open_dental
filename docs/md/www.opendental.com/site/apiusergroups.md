Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API UserGroups

See [API Specification](apispecification.html)

See [User Edit](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7securityusers.html) for more information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [UserGroup Database Schema.](SchemaRedirect%EF%B9%96usergroup.html)

## UserGroups GET

Version Added: 23.2.21

Gets a list of user groups, which can include CEMT user groups. See [User Group](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7securityusergroups.html).

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