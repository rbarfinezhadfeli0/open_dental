Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

API Statements

See [API Specification](../site/apispecification.html)

See [Statement Window](statementwindow.html) for more information.

## Statements GET (single)

Version Added: 24.2.23

Gets a single statement.

**StatementNum:** Required in URL.

**Example Request:**
 GET /statements/1

**Example Response:**
 {
 "StatementNum": 1,
 "PatNum": 1430,
 "DateSent": "2003-12-05",
 "DateRangeFrom": "0001-01-01",
 "DateRangeTo": "2004-02-01",
 "Note": "",
 "NoteBold": "",
 "Mode\_": "Mail",
 "HidePayment": "false",
 "SinglePatient": "false",
 "Intermingled": "false",
 "IsSent": "false",
 "DocNum": 354,
 "DateTStamp": "2024-07-26 10:58:28",
 "IsReceipt": "false",
 "IsInvoice": "false",
 "IsInvoiceCopy": "false",
 "SuperFamily": 0,
 "IsBalValid": "false",
 "InsEst": 0.0,
 "BalTotal": 0.0,
 "StatementType": "NotSet",
 }

200 OK
 404 NotFound (with explanation)

## Statements GET (multiple)

Version Added: 24.2.23

Gets a list of statements.

**PatNum:**  Optional. Filter by patient.PatNum. Typically the guarantor.

**Example Requests:**
 GET /statements
 GET /statements?PatNum=1430

**Example Response:**
 [
 {
 "StatementNum": 1,
 "PatNum": 1430,
 "DateSent": "2003-12-05",
 "DateRangeFrom": "0001-01-01",
 "DateRangeTo": "2004-02-01",
 "Note": "",
 "NoteBold": "",
 "Mode\_": "Mail",
 "HidePayment": "false",
 "SinglePatient": "false",
 "Intermingled": "false",
 "IsSent": "false",
 "DocNum": 354,
 "DateTStamp": "2024-07-26 10:58:28",
 "IsReceipt": "false",
 "IsInvoice": "false",
 "IsInvoiceCopy": "false",
 "SuperFamily": 0,
 "IsBalValid": "false",
 "InsEst": 0.0,
 "BalTotal": 0.0,
 "StatementType": "NotSet",
 },
 {
 "StatementNum": 2,
 "PatNum": 1430,
 "DateSent": "2024-02-08",
 "DateRangeFrom": "2024-01-01",
 "DateRangeTo": "2024-03-31",
 "Note": "",
 "NoteBold": "",
 "Mode\_": "Mail",
 "HidePayment": "false",
 "SinglePatient": "false",
 "Intermingled": "false",
 "IsSent": "true",
 "DocNum": 355,
 "DateTStamp": "2022-09-30 14:20:24",
 "IsReceipt": "false",
 "IsInvoice": "false",
 "IsInvoiceCopy": "false",
 "SuperFamily": 0,
 "IsBalValid": "false",
 "InsEst": 0.0,
 "BalTotal": 0.0,
 "StatementType": "NotSet",
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)