Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

API LabTurnarounds

See [API Specification](../site/apispecification.html)

See [Laboratories](laboratories.html) for more information.

## LabTurnarounds GET (single)

Version Added: 24.2.29

Gets a single labturnaround.

**LabTurnaroundNum:** Required in URL.

**Example Request:**
 GET /labturnarounds/23

**Example Response:**
 {
 "LabTurnaroundNum": 23,
 "LaboratoryNum": 7,
 "Description": "Implant",
 "DaysPublished": 3,
 "DaysActual": 4
 }

200 OK
 404 NotFound (with explanation)

## LabTurnarounds GET (multiple)

Version Added: 24.2.29

Gets a list of labturnarounds.

**LaboratoryNum:**  Optional. FK to laboratory.LaboratoryNum.

**Example Requests:**
 GET /labturnarounds
 GET /labturnarounds?LaboratoryNum=7

**Example Response:**
 [
 {
 "LabTurnaroundNum": 23,
 "LaboratoryNum": 7,
 "Description": "Implant",
 "DaysPublished": 3,
 "DaysActual": 4
 },
 {
 "LabTurnaroundNum": 24,
 "LaboratoryNum": 7,
 "Description": "Repair",
 "DaysPublished": 1,
 "DaysActual": 2
 },
 etc...
 ]

200 OK
 404 NotFound (with explanation)