Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API RxPats

See [API Specification](apispecification.html)

See [Rx / Prescription](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7rx.html) for more information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [RxPat Database Schema.](SchemaRedirect%EF%B9%96rxpat.html)

## RxPats GET (single)

Version Added: 24.2.35

Gets a single rxpat.

**RxNum:** Required in URL.

**Example Request:**
 GET /rxpats/13

**Example Response:**
 {
 "RxNum": 13,
 "PatNum": 125,
 "RxDate": "2024-09-26",
 "Drug": "Amoxicillin 500 mg",
 "Sig": "Take 4 caps 1 hour prior to dental appointment.",
 "Disp": "4",
 "Refills": "0",
 "ProvNum": 13,
 "Notes": "",
 "PharmacyNum": 2,
 "IsControlled": "false",
 "DateTStamp": "2024-09-26 14:43:42",
 "SendStatus": "Unsent",
 "IsErxOld": "false",
 "ErxPharmacyInfo": "",
 "IsProcRequired": "false",
 "ProcNum": 0,
 "DaysOfSupply": 0.0,
 "PatientInstruction": "Take all 4 caps 1 hour prior to dental appointment.",
 "ClinicNum": 3
 }

200 OK
 404 NotFound (with explanation)

## RxPats GET (multiple)

Version Added: 24.2.35

Gets a list of rxpats.

**PatNum:** Optional. FK to patient.PatNum.

**Example Requests:**
 GET /rxpats
 GET /rxpats?PatNum=458

**Example Response:**
 [
 {
 "RxNum": 60,
 "PatNum": 458,
 "RxDate": "2024-09-26",
 "Drug": "Amoxicillin 500 mg",
 "Sig": "Take 2 tablets prior to dental appointment.",
 "Disp": "2",
 "Refills": "0",
 "ProvNum": 13,
 "Notes": "",
 "PharmacyNum": 12,
 "IsControlled": "false",
 "DateTStamp": "2024-09-26 14:43:42",
 "SendStatus": "Unsent",
 "IsErxOld": "false",
 "ErxPharmacyInfo": "",
 "IsProcRequired": "false",
 "ProcNum": 0,
 "DaysOfSupply": 0.0,
 "PatientInstruction": "Take 2 tablets prior to dental appointment.",
 "ClinicNum": 10
 },
 {
 "RxNum": 62,
 "PatNum": 458,
 "RxDate": "2024-09-26",
 "Drug": "Percocet 5",
 "Sig": "Take 1 tablet every 4 hours as needed for pain.",
 "Disp": "24",
 "Refills": "0",
 "ProvNum": 13,
 "Notes": "",
 "PharmacyNum": 12,
 "IsControlled": "true",
 "DateTStamp": "2024-09-26 14:44:12",
 "SendStatus": "Unsent",
 "IsErxOld": "false",
 "ErxPharmacyInfo": "",
 "IsProcRequired": "true",
 "ProcNum": 1587,
 "DaysOfSupply": 7.0,
 "PatientInstruction": "Take 1 tablet every 4 hours as needed for pain.",
 "ClinicNum": 10
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)