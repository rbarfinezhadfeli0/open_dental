Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Medications

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [Medication Database Schema.](SchemaRedirect%EF%B9%96medication.html)

## Medications GET

Version Added: 21.3

Gets the list of medications that can be assigned to patients.

Rarely used. Usually just use MedicationPats GET and POST.

**Example Request:**
 GET /medications

**Example Response:**
 [
 {
 "MedicationNum": 12,
 "MedName": "Glucophage",
 "GenericNum": 124,
 "genericName": "Metformin",
 "Notes": "Antidiabetic agent",
 "DateTStamp": "2016-12-01"
 },
 etc...
 ]

**Example Response:**
 201 Created
 400 BadRequest (Missing or Invalid fields)

## Medications POST

Version Added: 21.3

Creates a new medication.

Rarely used. Usually just use MedicationPats GET and POST.

**MedName:** Required.

**genericName:** Optional. If not provided this will be the same as MedName.
**Notes:** Optional.

**Example Requests:**
 POST /medications

{
 "MedName": "Metformin"
 }

{
 "MedName": "Glucophage",
 "genericName": "Metformin",
 "Notes": "Antidiabetic agent"
 }

**Example Response:**
 201 Created
 400 BadRequest (Missing or Invalid fields)
 404 Not Found "No Medication with that genericName was found"