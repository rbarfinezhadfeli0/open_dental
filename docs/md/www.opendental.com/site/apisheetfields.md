Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API SheetFields

See [API Specification](apispecification.html)

[SheetFields Database Schema](../OpenDentalDocumentation25-2.xml#sheetfield)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [SheetField Database Schema.](SchemaRedirect%EF%B9%96sheetfield.html)

## SheetFields GET (single)

Version Added: 22.1

Gets a SheetField.

**SheetFieldNum:** Required.

**Example Request:**

GET /sheetfields/1049

**Example Response:**
 {
 "SheetFieldNum": 1049,
 "SheetNum": 24,
 "FieldType": "InputField",
 "FieldName": "prov.nameFormal",
 "FieldValue": "John D. Smith",
 "IsRequired": "true",
 "ReportableName": "",
 "DateTimeSig": "0001-01-01 00:00:00"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## SheetFields GET (multiple)

Version Added: 22.1

Gets all SheetFields.

**SheetNum:** Optional after version 25.2.3.

**Example Requests:**

GET /sheetfields
 GET /sheetfields?SheetNum=24
 GET /sheetfields?SheetNum=24&Offset=200

**Example Response:**
 [
 {
 "SheetFieldNum": 1049,
 "SheetNum": 24,
 "FieldType": "InputField",
 "FieldName": "prov.nameFormal",
 "FieldValue": "John D. Smith",
 "IsRequired": "true",
 "ReportableName": "",
 "DateTimeSig": "0001-01-01 00:00:00"
 },
 {
 "SheetFieldNum": 3068,
 "SheetNum": 24,
 "FieldType": "SigBoxPractice",
 "FieldName": "",
 "FieldValue": "1FFFFFFFB59486...",
 "IsRequired": "false",
 "ReportableName": "",
 "DateTimeSig": "2023-07-17 13:38:27"
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## SheetFields PUT

Version Added: 25.2

Updates a sheetfield. Only SheetFields of FieldType "OutputText", "InputField", and "CheckBox" are supported.

**SheetFieldNum:** Required in the URL.

**FieldValue:** Optional. OutputText is pulled from the database to be printed on the sheet. InputField is blank box that the user is supposed to fill in. CheckBox is a clickable area on the screen. It's a form of input, so treated similarly to an InputField.

**Example Request:**

PUT /sheetfields/1049
 {
 "FieldValue": "John D. Smith"
 }

**Example Response:**
 {
 "SheetFieldNum": 1049,
 "SheetNum": 24,
 "FieldType": "InputField",
 "FieldName": "prov.nameFormal",
 "FieldValue": "John D. Smith",
 "IsRequired": "true",
 "ReportableName": "",
 "DateTimeSig": "0001-01-01 00:00:00"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)