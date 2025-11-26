Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Statements

See [API Specification](apispecification.html)

See [Statement Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7statementwindow.html) for more information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [Statement Database Schema.](SchemaRedirect%EF%B9%96statement.html)

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
 "StatementType": "NotSet"
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
 "StatementType": "NotSet"
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
 "StatementType": "NotSet"
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## Statements POST

Version Added: 25.3.26

Creates a statement displayed in the Account Module ledger. Does not impact billing.

**PatNum:** Required. FK to patient.PatNum.

**DateSent:** Optional. Date the statement was sent in "yyyy-MM-dd" format. Default today.
**Note:** Optional. Note for the statement. Default empty string.
**DocNum:** Optional. FK to document.DocNum. Default 0. See [API Documents](apidocuments.html) for more information.

**Example Request:**
 POST /statements
 {
 "PatNum": 295,
 "DateSent": "2025-10-20",
 "Note": "Statement generated for John Doe on October 20th, 2025.",
 "DocNum": 457
 }

**Example Response:**
{
 "StatementNum": 92,
 "PatNum": 295,
 "DateSent": "2025-10-20",
 "DateRangeFrom": "0001-01-01",
 "DateRangeTo": "2200-01-01",
 "Note": "Statement generated for John Doe on October 20th, 2025.",
 "NoteBold": "",
 "Mode\_": "API",
 "HidePayment": "true",
 "SinglePatient": "false",
 "Intermingled": "true",
 "IsSent": "true",
 "DocNum": 457,
 "DateTStamp": "2025-10-21 13:31:49",
 "IsReceipt": "false",
 "IsInvoice": "false",
 "IsInvoiceCopy": "false",
 "SuperFamily": 0,
 "IsBalValid": "false",
 "InsEst": 0.0,
 "BalTotal": 0.0,
 "StatementType": "NotSet"
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)