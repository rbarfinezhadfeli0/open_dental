Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API SheetDefs

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [SheetDef Database Schema.](SchemaRedirect%EF%B9%96sheetdef.html)

## SheetDefs GET (single)

Version Added: 25.1.20

Gets a single SheetDef.

**SheetDefNum:** Required in URL.

**Example Request:**
 GET /sheetdefs/1

**Example Response:**
 {
 "SheetDefNum": 1,
 "Description": "Excuse Letter",
 "SheetType": "PatientLetter"
 }

200 OK
 404 NotFound

## SheetDefs GET (multiple)

Version Added: 23.2.5.0

Gets a list of SheetDefs.

**SheetType:** Optional. (Added in version 25.1.20). Filter by SheetTypeEnum. See [Database Schema](../OpenDentalDocumentation25-1.xml) for options.

**Example Requests:**
 GET /sheetdefs
 GET /sheetdefs?SheetType=PatientForm

**Example Response:**
 [
 {
 "SheetDefNum": 1,
 "Description": "Excuse Letter",
 "SheetType": "PatientLetter"
 },
 {
 "SheetDefNum": 2,
 "Description": "Screening",
 "SheetType": "Screening"
 },
 {
 "SheetDefNum": 3,
 "Description": "Registration Form",
 "SheetType": "PatientForm"
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)