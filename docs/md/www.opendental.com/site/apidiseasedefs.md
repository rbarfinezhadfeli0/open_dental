Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API DiseaseDefs

See [API Specification](apispecification.html)

See [Problem List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7problemmaster.html) for more information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [DiseaseDef Database Schema.](SchemaRedirect%EF%B9%96diseasedef.html)

## DiseaseDefs GET (single)

Version Added: 24.1.44

Get a single DiseaseDef (Problem) that can be assigned to a patient.

**DiseaseDefNum:** Required in the URL.

**Example Request:**
 GET /diseasedefs/58

**Example Response:**
 {
 "DiseaseDefNum": 58,
 "DiseaseName": "Severe Back Pain",
 "IsHidden": "true",
 "DateTStamp": "2021-02-07 12:27:28",
 "ICD9Code": "",
 "ICD10Code": "",
 "SnomedCode": ""
 }

200 OK
 404 NotFound (with explanation)

## DiseaseDefs GET (multiple)

Version Added: 21.3

Gets a list of all DiseaseDefs (Problems) that can be assigned to patients.

**Example Requests:**
 GET /diseasedefs
 GET /diseasedefs?Offset=200

**Example Response:**
 [
 {
 "DiseaseDefNum": 58,
 "DiseaseName": "Severe Back Pain",
 "IsHidden": "true",
 "DateTStamp": "2021-02-07 12:27:28",
 "ICD9Code": "",
 "ICD10Code": "",
 "SnomedCode": ""
 },
 {
 "DiseaseDefNum": 59,
 "DiseaseName": "Unspecified Essential Hypertension",
 "IsHidden": "false",
 "DateTStamp": "2021-09-07 14:00:10",
 "ICD9Code": "401.9",
 "ICD10Code": "",
 "SnomedCode": ""
 },
 etc...
 ]

## DiseaseDefs POST

Version Added: 21.3

Inserts a single DiseaseDef using a unique **DiseaseName.**

**Example Request:**
 POST /diseasedefs

{
 "DiseaseName": "Shingles"
 }

**Example Responses:**
 201 Created
 400 BadRequest "DiseaseName is required" or "A DiseaseDef with that name already exists".