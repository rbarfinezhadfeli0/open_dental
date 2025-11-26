Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

API Laboratories

See [API Specification](../site/apispecification.html)

See [Laboratories](laboratories.html) for more information.

## Laboratories GET (single)

Version Added: 24.2.33

Gets a single laboratory.

**LaboratoryNum:** Required in URL.

**Example Request:**
 GET /laboratories/1

**Example Response:**
 {
 "LaboratoryNum": 1,
 "Description": "Go Smiles Lab",
 "Phone": "(503)240-1910",
 "Notes": "",
 "Slip": 0,
 "Address": "231 Hoyt Rd",
 "City": "Glendale",
 "State": "OR",
 "Zip": "91124",
 "Email": "",
 "WirelessPhone": "",
 "IsHidden": "false"
 }

200 OK
 404 NotFound (with explanation)

## Laboratories GET (multiple)

Version Added: 24.2.33

Gets a list of laboratories.

**Example Request:**
 GET /laboratories

**Example Responses:**
 [
 {
 "LaboratoryNum": 1,
 "Description": "Go Smiles Lab",
 "Phone": "(503)240-1910",
 "Notes": "",
 "Slip": 0,
 "Address": "231 Hoyt Rd",
 "City": "Glendale",
 "State": "OR",
 "Zip": "91124",
 "Email": "",
 "WirelessPhone": "",
 "IsHidden": "false"
 },
 {
 "LaboratoryNum": 2,
 "Description": "Lab",
 "Phone": "(503)555-1810",
 "Notes": "",
 "Slip": 0,
 "Address": "",
 "City": "",
 "State": "",
 "Zip": "",
 "Email": "",
 "WirelessPhone": "",
 "IsHidden": "false"
 },
 etc...
 ]

200 OK