Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API PaySplits

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [PaySplit Database Schema.](SchemaRedirect%EF%B9%96paysplit.html)

## PaySplits GET

Version Added: 22.4.16

Get a list of paysplits.

**Parameters:**

**PatNum:** (Optional after version 24.4.24) Get all PaySplits for a single patient.
**PayNum:** (Optional after version 24.4.24) Get all PaySplits for a single payment.
**ProcNum:** (Added in version 24.4.24) Optional. Get all PaySplits attached to a specific procedure.

**Example Requests:**
 GET /paysplits
 GET /paysplits?PayNum=8567
 GET /paysplits?PatNum=407&ProcNum=8

**Example Response:**

[
 {
 "SplitNum": 116,
 "SplitAmt": 140,
 "PatNum": 407,
 "PayNum": 8567,
 "ProvNum": 1,
 "PayPlanNum": 0,
 "DatePay": "2023-01-27",
 "ProcNum": 9,
 "DateEntry": "2023-01-27",
 "UnearnedType": 0,
 "unearnedType": "",
 "ClinicNum": 1,
 "SecDateTEdit": "2023-01-27",
 "AdjNum": 0,
 "PayPlanChargeNum": 0,
 "PayPlanDebitType": "Unknown"
 },
 {
 "SplitNum": 115,
 "SplitAmt": 140,
 "PatNum": 407,
 "PayNum": 8567,
 "ProvNum": 1,
 "PayPlanNum": 0,
 "DatePay": "2023-01-27",
 "ProcNum": 8,
 "DateEntry": "2023-01-27",
 "UnearnedType": 0,
 "unearnedType": "",
 "ClinicNum": 1,
 "SecDateTEdit": "2023-01-27",
 "AdjNum": 0,
 "PayPlanChargeNum": 0,
 "PayPlanDebitType": "Unknown"
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## PaySplits PUT (update)

Version Added: 25.2.9

Rarely used. Updates a paysplit.

**SplitNum:** Required in the URL.

**ProvNum:** FK to provider.ProvNum. This field can always be updated when the AllowPrepayProvider preference is enabled. Without this preference, **ProvNum** can only be updated for paysplits that do not have an UnearnedType.
**ClinicNum:** FK to clinic.ClinicNum.

**Example Request:**
 PUT /paysplits/1425

{
 "ProvNum": 5,
 "ClinicNum": 2
 }

**Example Response:**
 {
 "SplitNum": 1425,
 "SplitAmt": 25.0,
 "PatNum": 22,
 "PayNum": 263,
 "ProvNum": 5,
 "PayPlanNum": 3,
 "DatePay": "2024-03-13",
 "ProcNum": 115,
 "DateEntry": "2024-03-13",
 "UnearnedType": 0,
 "unearnedType": "",
 "ClinicNum": 2,
 "SecDateTEdit": "2025-04-08 14:07:59",
 "AdjNum": 0,
 "PayPlanChargeNum": 43,
 "PayPlanDebitType": "Principal"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)