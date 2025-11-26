Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API QuickPasteCats

See [API Specification](apispecification.html)

QuickPasteCats are used to organize Quick Paste Notes of a similar type, for more information see [Quick Paste Category](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7quickpastecategory.html).

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [QuickPasteCat Database Schema.](SchemaRedirect%EF%B9%96quickpastecat.html)

## QuickPasteCats GET (single)

Version Added: 22.3.26

Gets a QuickPasteCat corresponding to a passed in QuickPasteCatNum.

**Example Request:**
 GET /quickpastecats/2

**Example Response:**
 {
 "QuickPasteCatNum": 2,
 "Description": "Medical Summary",
 "ItemOrder": 1,
 "DefaultForTypes": "MedicalSummary"
 }

200 OK
 404 NotFound

## QuickPasteCats GET (multiple)

Version Added: 22.3.26

Gets a list of QuickPasteCats.

**Example Request:**
 GET /quickpastecats
 GET /quickpastecats?Limit=20&Offset=50

**Example Response:**
 [
 {
 "QuickPasteCatNum": 1,
 "Description": "Medical Urgent",
 "ItemOrder": 0,
 "DefaultForTypes": ""
 },
 {
 "QuickPasteCatNum": 2,
 "Description": "Medical Summary",
 "ItemOrder": 1,
 "DefaultForTypes": "MedicalSummary"
 },
 {
 "QuickPasteCatNum": 3,
 "Description": "Notes",
 "ItemOrder": 2,
 "DefaultForTypes": "ServiceNotes,PatAddressNote,FinancialNotes,AutoNote"
 },
 etc...
 ]

200 OK
 400 BadRequest