Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API CodeGroups

See [API Specification](apispecification.html)

A codegroup is used in Benefit Frequencies. For more information, see [Code Groups](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7codegroups.html) and [Frequency Limitations](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7insfrequencylimitations.html).

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [CodeGroup Database Schema.](SchemaRedirect%EF%B9%96codegroup.html)

## CodeGroups GET (single)

Version Added: 25.3.10

Gets a single codegroup.

**CodeGroupNum:** Required in URL.

**Example Request:**
 GET /codegroups/9

**Example Response:**
 {
 "CodeGroupNum": 9,
 "GroupName": "SRP",
 "ProcCodes": "D4341,D4342",
 "ItemOrder": 6,
 "CodeGroupFixed": "SRP",
 "IsHidden": "false",
 "ShowInAgeLimit": "false",
 "ShowInFrequency": "true",
 "ShowInOther": "false"
 }

200 OK
 404 NotFound (with explanation)

## CodeGroups GET (multiple)

Version Added: 23.2.62

Gets a list of codegroups.

**Example Request:**
 GET /codegroups

**Example Response:**
 [
 {
 "CodeGroupNum": 1,
 "GroupName": "Fluoride",
 "ProcCodes": "D1206",
 "ItemOrder": 0,
 "CodeGroupFixed": "Fluoride",
 "IsHidden": "false",
 "ShowInAgeLimit": "true",
 "ShowInFrequency": "true",
 "ShowInOther": "true"
 },
 {
 "CodeGroupNum": 2,
 "GroupName": "Sealant",
 "ProcCodes": "D1351",
 "ItemOrder": 1,
 "CodeGroupFixed": "Sealant",
 "IsHidden": "false",
 "ShowInAgeLimit": "true",
 "ShowInFrequency": "true",
 "ShowInOther": "false"
 },
 etc...
 ]

200 OK

## CodeGroups POST (create)

Version Added: 24.1.29

Creates a codegroup.

**GroupName:** Required. Name of the codegroup.

**ProcCodes:** Optional. Comma delimited list of procedure codes.
**CodeGroupFixed:** Optional. Either "None", "BW", "PanoFMX", "Exam", "Perio", "Prophy", "SRP", "FMDebride", "Fluoride", or "Sealant". Default "None".
**IsHidden:** Optional. Either "true" or "false". If true, this codegroup will be hidden. Cannot be set "true" if **ShowInAgeLimit**, **ShowInFrequency**, or **ShowInOther** are "true". Default "false".
**ShowInAgeLimit:** Optional. Either "true" or "false". If true, this codegroup will show in Age Limitations grid in the Edit Benefits window. Default "false".
**ShowInFrequency:** (Added in version 25.3.10) Optional. Either "true" or "false". If true, this codegroup will show in the Frequency Limitations grid in the Edit Benefits window. Default "false".
**ShowInOther:** (Added in version 25.3.10) Optional. Either "true" or "false". If true, this codegroup will show in the Other Benefits grid in the Edit Benefits window. Default "false".

**Example Request:**
 POST /codegroups

{
 "GroupName": "Perio Maintenance",
 "ProcCodes": "D4910",
 "CodeGroupFixed": "Perio",
 "IsHidden": "false",
 "ShowInAgeLimit": "true"
 }

**Example Response:**
 {
 "CodeGroupNum": 23,
 "GroupName": "Perio Maintenance",
 "ProcCodes": "D4910",
 "ItemOrder": 1,
 "CodeGroupFixed": "Perio",
 "IsHidden": "false",
 "ShowInAgeLimit": "true",
 "ShowInFrequency": "false",
 "ShowInOther": "false"
 }

201 Created
 400 BadRequest (with explanation)

## CodeGroups PUT (update)

Version Added: 24.1.29

Updates a codegroup.

**CodeGroupNum:** Required in the URL.

**GroupName:** Name of the codegroup.
**ProcCodes:** Comma delimited list of procedure codes. Overwrites existing value.
**CodeGroupFixed:** Either "None", "BW", "PanoFMX", "Exam", "Perio", "Prophy", "SRP", "FMDebride", "Fluoride", or "Sealant".
**IsHidden:** Either "true" or "false". If true, this codegroup will be hidden.
**ShowInAgeLimit:** Either "true" or "false". If true, this codegroup will show in the Age Limitations grid in the Edit Benefits window.
**ShowInFrequency:** (Added in version 25.3.10) Either "true" or "false". If true, this codegroup will show in the Frequency Limitations grid in the Edit Benefits window.
**ShowInOther:** (Added in version 25.3.10) Either "true" or "false". If true, this codegroup will show in the Other Benefits grid in the Edit Benefits window.

**Example Request:**
 PUT /codegroups/23

{
 "IsHidden": "true",
 "ShowInAgeLimit": "false"
 }

**Example Response:**
 {
 "CodeGroupNum": 23,
 "GroupName": "Perio Maintenance",
 "ProcCodes": "D4910",
 "ItemOrder": 9,
 "CodeGroupFixed": "Perio",
 "IsHidden": "true",
 "ShowInAgeLimit": "false",
 "ShowInFrequency": "false",
 "ShowInOther": "false"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)