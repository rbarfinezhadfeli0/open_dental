Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

API PayPlanCharges

See [API Specification](../site/apispecification.html)

## PayPlanCharges GET

Version Added: In dev for 23.3.1

Gets all payplancharges for a specified payment plan.

**PayPlanNum:** Required.

**Example Request:**
 GET /payplancharges?PayPlanNum=23

**Example Response:**
 [
 {
 "PayPlanChargeNum": 42,
 "PayPlanNum": 23,
 "Guarantor": 30,
 "PatNum": 30,
 "ChargeDate": "2023-09-20",
 "Principal": 25.0,
 "Interest": 0.0,
 "Note": "Down Payment",
 "ProvNum": 2,
 "ClinicNum": 0,
 "ChargeType": "Debit",
 "ProcNum": 0,
 "SecDateTEntry": "2023-09-20 09:24:16",
 "SecDateTEdit": "2023-09-20 09:24:16",
 "StatementNum": 0,
 "FKey": 134,
 "LinkType": "Procedure",
 "IsOffset": "false"
 },
 {
 "PayPlanChargeNum": 43,
 "PayPlanNum": 23,
 "Guarantor": 30,
 "PatNum": 30,
 "ChargeDate": "2023-10-20",
 "Principal": 40.96,
 "Interest": 0.12,
 "Note": "",
 "ProvNum": 2,
 "ClinicNum": 0,
 "ChargeType": "Debit",
 "ProcNum": 0,
 "SecDateTEntry": "2023-10-20 08:58:27",
 "SecDateTEdit": "2023-10-20 08:58:27",
 "StatementNum": 0,
 "FKey": 134,
 "LinkType": "Procedure",
 "IsOffset": "false"
 },
 {
 "PayPlanChargeNum": 44,
 "PayPlanNum": 23,
 "Guarantor": 30,
 "PatNum": 30,
 "ChargeDate": "2023-10-23",
 "Principal": 8.04,
 "Interest": 0.0,
 "Note": "Close Out Charge",
 "ProvNum": 2,
 "ClinicNum": 0,
 "ChargeType": "Debit",
 "ProcNum": 0,
 "SecDateTEntry": "2023-10-23 15:38:30",
 "SecDateTEdit": "2023-10-23 15:38:30",
 "StatementNum": 0,
 "FKey": 134,
 "LinkType": "Procedure",
 "IsOffset": "false"
 }
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)