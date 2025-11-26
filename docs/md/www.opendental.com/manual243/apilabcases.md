Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

API LabCases

See [API Specification](../site/apispecification.html)

See [Lab Case](labcaseedit.html) for more information.

## LabCases GET (single)

Version Added: 24.2.28

Gets a single labcase.

**LabCaseNum:** Required in URL.

**Example Request:**
 GET /labcases/1

**Example Response:**
 {
 "LabCaseNum": 1,
 "PatNum": 33,
 "LaboratoryNum": 1,
 "AptNum": 6994,
 "PlannedAptNum": 0,
 "DateTimeDue": "0001-01-01 00:00:00",
 "DateTimeCreated": "0001-01-01 00:00:00",
 "DateTimeSent": "2000-01-01 00:00:00",
 "DateTimeRecd": "2000-01-01 00:00:00",
 "DateTimeChecked": "0001-01-01 00:00:00",
 "ProvNum": 1,
 "Instructions": "",
 "LabFee": 0.0,
 "DateTStamp": "2022-09-30 14:23:12",
 "InvoiceNum": ""
 }

200 OK
 404 NotFound (with explanation)

## LabCases GET (multiple)

Version Added: 24.2.28

Gets a list of labcases.

**Parameters:** All optional.

**PatNum:**  FK to patient.PatNum.
**LaboratoryNum:**  FK to laboratory.LaboratoryNum. The lab that the case gets sent to.
**AptNum:**  FK to appointment.AptNum.
**PlannedAptNum:**  FK to appointment.AptNum.
**ProvNum :**  FK to provider.ProvNum.

**Example Requests:**
 GET /labcases
 GET /labcases?PatNum=1
 GET /labcases?LaboratoryNum=5
 GET /labcases?AptNum=143
 GET /labcases?PlannedAptNum=357
 GET /labcases?AptNum=143&ProvNum=3

**Example Responses:**
 [
 {
 "LabCaseNum": 226,
 "PatNum": 33,
 "LaboratoryNum": 1,
 "AptNum": 143,
 "PlannedAptNum": 0,
 "DateTimeDue": "0001-01-01 00:00:00",
 "DateTimeCreated": "2022-09-30 14:23:12",
 "DateTimeSent": "2022-10-03 14:24:12",
 "DateTimeRecd": "2022-10-04 14:24:12",
 "DateTimeChecked": "2022-10-05 14:24:12",
 "ProvNum": 3,
 "Instructions": "Repair clasps on Max partial",
 "LabFee": 0.0,
 "DateTStamp": "2022-10-05 14:24:12",
 "InvoiceNum": ""
 },
 {
 "LabCaseNum": 227,
 "PatNum": 33,
 "LaboratoryNum": 1,
 "AptNum": 143,
 "PlannedAptNum": 0,
 "DateTimeDue": "0001-01-01 00:00:00",
 "DateTimeCreated": "2022-09-30 14:24:12",
 "DateTimeSent": "2022-09-30 14:24:12",
 "DateTimeRecd": "2022-10-03 14:24:12",
 "DateTimeChecked": "2022-10-04 14:24:12",
 "ProvNum": 3,
 "Instructions": "",
 "LabFee": 0.0,
 "DateTStamp": "2022-10-04 14:24:12",
 "InvoiceNum": ""
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)