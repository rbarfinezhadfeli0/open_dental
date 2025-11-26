Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

UB04 Claim Form

Below is an explanation of how each field on the printed UB04 [Claim Form](claimforms.html) is populated for medical claims.

Some fields require [Medical Insurance](medicalins.html) features to be enabled. If the *Where Entered* column for a field is N/A, information is not automatically populated from the database.

Note: Requirements for e-claims are different than requirements for paper claims. Printing a claim does not represent what is sent for an e-claim. Likewise, information sent for an e-claim does not necessarily print on a paper claim.

| # | Field Name on Form | Where Entered |
| --- | --- | --- |
| 1 |  | Billing [Provider](providerseditwindow.html) name and practice or clinic Pay To [Address](claimsaddresses.html) (if any). If there is no Pay To address, the Billing Address is used if *Use On Claims* is checked or the Physical Treating Address is used. |
| 2 |  | N/A |
| 3a | Pat Ctrl # | [Edit Patient Information](patientedit.html), ChartNumber |
| 3b | Med Rec # | N/A |
| 4 | Type of Bill | [Edit Claim - Medical Tab](claimmedical.html), Type of Bill |
| 5 | Fed Tax No | Billing Provider SSN or TIN |
| 6 | Statement Covers Period From Through | [Edit Claim](claimedit.html), Date of Service |
| 7 |  | Edit Insurance Plan, Other Ins Info tab, Insurance Filing Code. Shows *XOVER* when filinf code is set to Medicare Part B. |
| 8 | Patient Name |  |
| 8a |  | N/A |
| 8b |  | Edit Patient Information, First Name, Middle Initial, Last Name |
| 9 a-c | Patient Address | Edit Patient Information, Address, City, State, Zip |
| 9d |  | N/A |
| 10 | Birthdate | Edit Patient Information, Birthdate |
| 11 | Sex | Edit Patient Information, Gender |
| 12 | Date | Edit Claim, Date of Service |
| 13 | HR | N/A |
| 14 | Type | Edit Claim - Medical tab, Admission Type |
| 15 | SRC | Edit Claim - Medical tab, Admission Source |
| 16 | DHR | N/A |
| 17 | Stat | Edit Claim - Medical tab, Patient Status |
| 18 - 28 | Condition Codes | Edit Claim - Medical tab, Conditions Codes. |
| 29 | Acdt State | [Edit Claim - General Tab](claimtabgeneral.html), Accident State |
| 30 |  | N/A |
| 31 | Code / Occurrence Date | Edit Claim - General tab, Accident Related and Accident State |
| 32 | Code / Occurrence Date | N/A |
| 33 | Code / Occurrence Date | N/A |
| 34 | Code / Occurrence Date | N/A |
| 35 | Code / Occurrence Date | N/A |
| 36 | Code / Occurrence Date | N/A |
| 37 |  | N/A |
| 38 |  | N/A |
| 39 a-d | Code / Value Codes Amount | Edit Claim - Medical tab, Value Codes (39) |
| 40 a-d | Code / Value Codes Amount | Edit Claim - Medical tab, Value Codes (40) |
| 41 a-d | Code / Value Codes Amount | Edit Claim - Medical tab, Value Codes (41) |
| 42 | Rev. Cd. | Procedure Info - Medical tab, Revenue Code. Up to 10. |
| 43 | Description | [Procedure Code](procedurecodeedit.html), Description. Up to 10 codes. |
| 44 | HCPS / Rate / HIPPS Code | Procedure - Medical tab, Mods. Mods are appended to the Procedure Code. Up to 10. |
| 45 | Serv. Date | [Procedure Info](procedureedit.html), Date |
| 46 | Serv. Units | Procedure Info - Medical tab, Unit Quantity |
| 47 | Total Charges | [Edit Claim Procedure](claimprocedure.html), Fee Billed to Ins |
| 48 | Non-Covered Charges | N/A |
| 49 |  | N/A |
| 42 Totals |  | Total number of procedures on the claim. |
|  | Page \_ of \_ | *Page 1 of 1* by default. |
|  | Creation Date | Edit Claim, Date of Service |
| 47 Totals |  | Total of amounts in the #47 column for all rows. Total claim billed amount. |
| 48 Totals |  | N/A |
| 50 a-c | Payer Name | [Edit Insurance Plan](insplan.html), Carrier. Information is only shown on one row. The row used depends on the Insurance Plan Order. |
| 51 a-c | Health Plan ID | N/A |
| 52 a-c | Rel. Info | Edit Insurance Plan, Release of Information. When checked, shows as *X* on the claim form. Information is only shown on one row. The row used depends on the Insurance Plan Order. |
| 53 a-c | Asg. Ben. | Edit Insurance Plan, Assignment of Benefits. When checked, shows as X on the claim form. |
| 54 a-c | Prior Payments | Ins Pay amount from other other claims. Information is only shown on one row. The row used depends on the Insurance Plan Order. |
| 55 a-c | Est. Amount Due | Calculated by Total Charges - Prior Payments |
| 56 a-c | NPI | Billing Dentist NPI |
| 57 a-c | Other Prv ID | Edit Provider, Supplemental IDs, Supplemental Provider Identifiers. Only the ID Number matching the carrier's Payor ID is used. Information is only shown on one row. The row used depends on the Insurance Plan Order. |
| 58 a-c | Insured's Name | Edit Insurance Plan, Subscriber Name. Information is only shown on one row. The row used depends on the Insurance Plan Order. |
| 59 a-c | P. Rel | Edit Insurance Plan, Relationship to Subscriber |
| 60 a-c | Insured's Unique ID | Edit Insurance Plan, Subscriber ID. Information is only shown on one row. The row used depends on the Insurance Plan Order. |
| 61 a-c | Group Name | Edit Insurance Plan, Group Name. Up to three medical insurance plans. |
| 62 a-c | Insurance Group No. | Edit Insurance Plan, Group Num. Information is only shown on one row. The row used depends on the Insurance Plan Order. |
| 63 a-c | Treatment Authorization Codes | Edit Claim, Predeterm Benefits |
| 64 a-c | Document Control Number | N/A |
| 65 a-c | Employer Name | Edit Insurance Plan, Employer. Information is only shown on one row. The row used depends on the Insurance Plan Order. |
| 66 | Dx | Edit Procedure, Diagnosis Code. Up to 4. |
| 68 |  | N/A |
| 69 | Admit Dx | N/A |
| 70 | Patient Reason Dx | N/A |
| 71 | PPS Code | N/A |
| 72 | ECI | N/A |
| 73 |  | N/A |
| 74 | Principal Procedure Code / Date | N/A |
| 74a | Other Procedure Code / Date | N/A |
| 74b | Other Procedure Code / Date | N/A |
| 74c | Other Procedure Code / Date | N/A |
| 74d | Other Procedure Code / Date | N/A |
| 74e | Other Procedure Code / Date | N/A |
| 75 |  | N/A |
| 76 | Attending NPI / Qual / Last / First | N/A |
| 77 | Operating NPI / Qual / Last / First | Treating Provider, National Provider ID, Last Name, First Name |
| 78 | Other NPI / Qual / Last / First | N/A |
| 79 | Other NPI / Qual / Last / First | N/A |
| 80 | Remarks | Edit Claim - General, Claim Note |
| 81 a-d | CC | N/A |