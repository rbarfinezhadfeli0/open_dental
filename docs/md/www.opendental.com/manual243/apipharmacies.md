Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

API Pharmacies

See [API Specification](../site/apispecification.html)

See [Pharmacies](pharmacies.html) for more information.

## Pharmacies GET (single)

Version Added: 24.2.35

Gets a single pharmacy

**PharmacyNum :** Required in URL.

**Example Request:**
 GET /pharmacies/13

**Example Response:**
 {
 "PharmacyNum": 13,
 "StoreName": "Salem Local Pharmacy",
 "Phone": "(503)555-5489",
 "Fax": "(503)555-5489",
 "Address": "409 W North St Unit 1",
 "Address2": "",
 "City": "Salem",
 "State": "OR",
 "Zip": "97301",
 "Note": "",
 "DateTStamp": "2011-12-07 10:53:32"
 }

200 OK
 404 NotFound (with explanation)

## Pharmacies GET (multiple)

Version Added: 24.2.35

Gets a list of all pharmacies.

**Example Request:**
 GET /pharmacies

**Example Response:**
 [
 {
 "PharmacyNum": 1,
 "StoreName": "Cost+",
 "Phone": "",
 "Fax": "",
 "Address": "",
 "Address2": "",
 "City": "",
 "State": "",
 "Zip": "",
 "Note": "Online pharmacy",
 "DateTStamp": "2011-12-07 10:53:32"
 },
 {
 "PharmacyNum": 2,
 "StoreName": "Safemart Pharmacy",
 "Phone": "(503)555-4445",
 "Fax": "(503)555-4445",
 "Address": "4866 Main St",
 "Address2": "",
 "City": "Stayton",
 "State": "OR",
 "Zip": "97383",
 "Note": "",
 "DateTStamp": "2011-12-07 10:57:18"
 },
 etc...
 ]

200 OK