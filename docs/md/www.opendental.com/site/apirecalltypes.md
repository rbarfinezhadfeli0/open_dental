Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API RecallTypes

See [API Specification](apispecification.html)

See [Recall Types](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7recalltypes.html) for additional information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [RecallType Database Schema.](SchemaRedirect%EF%B9%96RecallType.html)

## RecallTypes GET (single)

Version Added: 24.1.44

Gets a single recalltype.

**RecallTypeNum:** Required in URL.

**Example Request:**
 GET /recalltypes/7

**Example Response:**
 {
 "RecallTypeNum": 7,
 "Description": "Exam",
 "DefaultInterval": "6m1d",
 "TimePattern": "",
 "Procedures": "D0120",
 "AppendToSpecial": "true"
 }

200 OK
 404 NotFound (with explanation)

## RecallTypes GET (multiple)

Version Added: 24.1.44

Gets a list of all recalltypes.

**Example Request:**
 GET /recalltypes

**Example Response:**
 [
 {
 "RecallTypeNum": 1,
 "Description": "Prophy",
 "DefaultInterval": "6m1d",
 "TimePattern": "/XXXX/",
 "Procedures": "D1110",
 "AppendToSpecial": "false"
 },
 {
 "RecallTypeNum": 2,
 "Description": "Child Prophy",
 "DefaultInterval": "",
 "TimePattern": "XXX",
 "Procedures": "D1120,D1208",
 "AppendToSpecial": "false"
 },
 etc...
 ]

200 OK