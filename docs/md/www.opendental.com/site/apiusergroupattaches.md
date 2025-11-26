Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API UserGroupAttaches

See [API Specification](apispecification.html)

See [User Edit](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7securityusers.html) for more information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [UserGroupAttach Database Schema.](SchemaRedirect%EF%B9%96usergroupattach.html)

## UserGroupAttaches GET

Version Added: 23.3.7

Gets a list of usergroupattaches.

**Parameters**: All optional.

**UserNum**: FK to userod.UserNum.
**UserGroupNum**: FK to usergroup.UserGroupNum.

**Example Requests:**
 GET /usergroupattaches
 GET /usergroupattaches?UserNum=5
 GET /usergroupattaches?UserGroupNum=10

**Example Response:**
 [
 {
 "UserGroupAttachNum": 3,
 "UserNum": 5,
 "UserGroupNum": 5
 },
 }
 "UserGroupAttachNum": 14,
 "UserNum": 5,
 "UserGroupNum": 10
 },
 {
 "UserGroupAttachNum": 23,
 "UserNum": 5,
 "UserGroupNum": 11
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)