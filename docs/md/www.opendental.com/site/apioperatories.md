Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Operatories

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [Operatory Database Schema.](SchemaRedirect%EF%B9%96operatory.html)

## Operatories GET (single)

Version Added: 24.1.10

Gets a single operatory.

**OperatoryNum:** Required in URL.

**Example Request:**
 GET /operatories/1

**Example Response:**
 {
 "OperatoryNum": 1,
 "OpName": "Dr. Brian Albert",
 "Abbrev": "OP-1",
 "ItemOrder": 0,
 "IsHidden": "false",
 "ProvDentist": 1,
 "ProvHygienist": 0,
 "IsHygiene": "false",
 "ClinicNum": 2,
 "SetProspective": "false",
 "IsWebSched": "false"
 "OperatoryType": 0,
 "operatoryType": ""
 }

200 OK
 404 NotFound (with explanation)

## Operatories GET (multiple)

Version Added: 21.1

Gets a list of all operatories.

**ClinicNum**: Optional.

**Example Requests:**
 GET /operatories
 GET /operatories?ClinicNum=2

**Example Response:**
 [
 {
 "OperatoryNum": 1,
 "OpName": "Dr. Brian Albert",
 "Abbrev": "OP-1",
 "ItemOrder": 0,
 "IsHidden": "false",
 "ProvDentist": 1,
 "ProvHygienist": 0,
 "IsHygiene": "false",
 "ClinicNum": 0,
 "SetProspective": "false",
 "IsWebSched": "false"
 "OperatoryType": 0,
 "operatoryType": ""
 },
 {
 "OperatoryNum": 2,
 "OpName": "Dr. Sarah Lexington",
 "Abbrev": "OP-2",
 "ItemOrder": 1,
 "IsHidden": "false",
 "ProvDentist": 3,
 "ProvHygienist": 0,
 "IsHygiene": "false",
 "ClinicNum": 0,
 "SetProspective": "false",
 "IsWebSched": "false"
 "OperatoryType": 0,
 "operatoryType": ""
 }
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)