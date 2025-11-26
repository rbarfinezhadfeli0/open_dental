Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API InsPlans

See [API Specification](apispecification.html)

See [Insurance Plans](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7insplanlist.html) for more information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [InsPlan Database Schema.](SchemaRedirect%EF%B9%96insplan.html)

## InsPlans GET (single)

Version Added: 24.2.11

Gets a single insplan.

**PlanNum:** Required in URL.

**Example Request:**
 GET /insplans/6

**Example Response:**
 {
 "PlanNum": 6,
 "GroupName": "United States Post Office",
 "GroupNum": "PB181863",
 "PlanNote": "Mostly covered.",
 "FeeSched": 54,
 "PlanType": "p",
 "ClaimFormNum": 1,
 "ClaimsUseUCR": "false",
 "CopayFeeSched": 0,
 "EmployerNum": 23,
 "CarrierNum": 10,
 "IsMedical": "false",
 "FilingCode": 4,
 "ShowBaseUnits": "false",
 "CodeSubstNone": "true",
 "IsHidden": "false",
 "MonthRenew": 0,
 "FilingCodeSubtype": 0,
 "CobRule": "Standard",
 "SecUserNumEntry": 0,
 "SecDateEntry": "2023-01-21",
 "SecDateTEdit": "2023-01-21 06:47:00",
 "BillingType": 40,
 "ExclusionFeeRule": "PracticeDefault",
 "ManualFeeSchedNum": 0,
 "IsBlueBookEnabled": "false",
 "InsPlansZeroWriteOffsOnAnnualMaxOverride": "Default",
 "InsPlansZeroWriteOffsOnFreqOrAgingOverride": "Default"
 }

200 OK
 404 NotFound (with explanation)

## InsPlans GET (multiple)

Version Added: 22.3.30

Gets a list of insplans.

**Parameters:** All optional.

**PlanType:**  (Added in version 24.2.11) Must be one of the following: "percentage" (Percentage), "p" (PPO Percentage), "f" (Flat Copay), or "c" (Capitation). Percentage PlanTypes are stored as blank in the database.
**CarrierNum:**  (Added in version 24.2.11) FK to carrier.CarrierNum.

**Example Request:**
 GET /insplans
 GET /insplans?PlanType=p
 GET /insplans?CarrierNum=10

**Example Response:**
 [
 {
 "PlanNum": 6,
 "GroupName": "United States Post Office",
 "GroupNum": "PB181863",
 "PlanNote": "Mostly covered.",
 "FeeSched": 54,
 "PlanType": "p",
 "ClaimFormNum": 1,
 "ClaimsUseUCR": "true",
 "CopayFeeSched": 0,
 "EmployerNum": 23,
 "CarrierNum": 10,
 "IsMedical": "false",
 "FilingCode": 0,
 "ShowBaseUnits": "false",
 "CodeSubstNone": "true",
 "IsHidden": "false",
 "MonthRenew": 0,
 "FilingCodeSubtype": 0,
 "CobRule": "Basic",
 "SecUserNumEntry": 0,
 "SecDateEntry": "2023-01-21",
 "SecDateTEdit": "2023-01-21 06:47:00",
 "BillingType": 313,
 "ExclusionFeeRule": "UseUcrFee",
 "ManualFeeSchedNum": 0,
 "IsBlueBookEnabled": "false",
 "InsPlansZeroWriteOffsOnAnnualMaxOverride": "Default",
 "InsPlansZeroWriteOffsOnFreqOrAgingOverride": "Default"
 },
 {
 "PlanNum": 14,
 "GroupName": "REI",
 "GroupNum": "G189614",
 "PlanNote": "",
 "FeeSched": 0,
 "PlanType": "c",
 "ClaimFormNum": 1,
 "ClaimsUseUCR": "false",
 "CopayFeeSched": 56,
 "EmployerNum": 23,
 "CarrierNum": 10,
 "IsMedical": "false",
 "FilingCode": 23,
 "ShowBaseUnits": "true",
 "CodeSubstNone": "false",
 "IsHidden": "true",
 "MonthRenew": 6,
 "FilingCodeSubtype": 41,
 "CobRule": "Standard",
 "SecUserNumEntry": 34,
 "SecDateEntry": "2023-12-07",
 "SecDateTEdit": "2023-12-04 09:15:00",
 "BillingType": 315,
 "ExclusionFeeRule": "DoNothing",
 "ManualFeeSchedNum": 0,
 "IsBlueBookEnabled": "false",
 "InsPlansZeroWriteOffsOnAnnualMaxOverride": "No",
 "InsPlansZeroWriteOffsOnFreqOrAgingOverride": "No"
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)

## InsPlans POST

Version Added: 22.4.24

Creates a new insplan.

**CarrierNum:** Required. FK to carrier.CarrierNum.

**GroupName:** Optional. Typically the same as the employer. Used to identify difference in plans.
**GroupNum:** Optional. The Plan Number in Canada.
**PlanNote:** Optional. Note for this plan. Same for all subscribers.
**FeeSched:** Optional. FK to feesched.FeeSchedNum. Default 0.
**PlanType:** Optional. Must be one of the following: "" (Percentage), "p" (PPO Percentage), "f" (Flat Copay), or "c" (Capitation). Default is "" (Percentage).
**ClaimFormNum:** (Added in version 25.2.24) Optional. FK to claimform.ClaimFormNum. Defaults to the DefaultClaimForm preference.
**ClaimsUseUCR:** (Added in version 25.1.20) Optional. Either "true" or "false". Default is "true" if the preference InsDefaultShowUCRonClaims is enabled and the PlanType is "" (Percentage), otherwise "false".
**CopayFeeSched:** (Added in version 23.3.17) Optional. FK to feesched.FeeSchedNum when FeeSchedType is CoPay. Typically only used for capitation or copay plans. Default 0.
**EmployerNum:** Optional. FK to employer.EmployerNum. Default 0.
**IsMedical:** (Added in version 24.4.34) Optional. Either "true" or "false". Default "false".
**FilingCode:** (Added in version 25.1.20) Optional. FK to insfilingcode.InsFilingCodeNum. Default 0.
**ShowBaseUnits:** (Added in version 25.1.20) Optional. Either "true" or "false". Default "false".
**CodeSubstNone:** (Added in version 22.4.31) Optional. Either "true" or "false". Set "true" if this Insurance Plan should ignore any Substitution Codes. Default "false".
**IsHidden:** (Added in version 22.4.31) Optional. Either "true" or "false". Default "false".
**MonthRenew:** Optional. The month, 1-12, when the insurance plan renews. It will renew on the first of the month. Default 0 to indicate calendar year.
**FilingCodeSubtype:** (Added in version 25.1.20) Optional. FK to insfilingcodesubtype.InsFilingCodeSubtypeNum. Default 0.
**CobRule:** (Added in version 25.1.20) Optional. Either "Basic", "Standard", "CarveOut" or "SecondaryMedicaid". Defaults to the InsDefaultCobRule preference.
**BillingType:** (Added in version 25.1.20) Optional. FK to definition.DefNum where definition.Category=4. Default 0.
**ExclusionFeeRule:** (Added in version 25.1.20) Optional. Either "PracticeDefault", "DoNothing" or "UseUcrFee". Default is "PracticeDefault".
**ManualFeeSchedNum:** (Added in version 25.2.24) Optional. FK to feesched.FeeSchedNum when feesched.FeeSchedType is ManualBlueBook. Only allowed if the AllowedFeeSchedsAutomate preference is set to "BlueBook" and if **IsBlueBookEnabled** is "true". Default 0 to indicate "None".
**IsBlueBookEnabled:** Optional. Determines if the plan utilizes BlueBook or not. Cannot be set to true if **PlanType** is set to anything other than "" (Percentage). Defaults to true if AllowedFeeSchedsAutomate is set to BlueBook, otherwise defaults to false.
**InsPlansZeroWriteOffsOnAnnualMaxOverride:** (Added in version 25.1.20) Optional. Either "Default", "Yes" or "No". Default is "Default".
**InsPlansZeroWriteOffsOnFreqOrAgingOverride:** (Added in version 25.1.20) Optional. Either "Default", "Yes" or "No". Default is "Default".

**Example Requests:**
 POST /insplans

{
 "CarrierNum": 10
 }

or

{
 "GroupName": "Walmart",
 "GroupNum": "W4875",
 "PlanNote": "Copayments",
 "FeeSched": 56,
 "PlanType": "f",
 "ClaimsUseUCR": "false",
 "CopayFeeSched": 172,
 "EmployerNum": 23,
 "CarrierNum": 10,
 "IsMedical": "false",
 "ShowBaseUnits": "true",
 "CodeSubstNone": "false",
 "IsHidden": "false",
 "MonthRenew": 12,
 "CobRule": "Basic",
 "BillingType": 313,
 "ExclusionFeeRule": "DoNothing",
 "IsBlueBookEnabled": "false"
 }

**Example Response:**
 {
 "PlanNum": 16,
 "GroupName": "Walmart",
 "GroupNum": "W4875",
 "PlanNote": "Copayments",
 "FeeSched": 56,
 "PlanType": "f",
 "ClaimFormNum": 1,
 "ClaimsUseUCR": "false",
 "CopayFeeSched": 172,
 "EmployerNum": 23,
 "CarrierNum": 10,
 "IsMedical": "false",
 "FilingCode": 0,
 "ShowBaseUnits": "true",
 "CodeSubstNone": "false",
 "IsHidden": "false",
 "MonthRenew": 12,
 "FilingCodeSubtype": 0,
 "CobRule": "Basic",
 "SecUserNumEntry": 0,
 "SecDateEntry": "2023-01-21",
 "SecDateTEdit": "2023-01-21 06:47:00",
 "BillingType": 313,
 "ExclusionFeeRule": "DoNothing",
 "ManualFeeSchedNum": 0,
 "IsBlueBookEnabled": "false",
 "InsPlansZeroWriteOffsOnAnnualMaxOverride": "Default",
 "InsPlansZeroWriteOffsOnFreqOrAgingOverride": "Default"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## InsPlans PUT

Version Added: 22.3.30

Updates an insplan.

**PlanNum:** Required in the URL.

**GroupName:** Optional. Typically the same as the employer. Used to identify difference in plans.
**GroupNum:** Optional. The Plan Number in Canada.
**PlanNote:** Optional. Note for this plan. Same for all subscribers.
**FeeSched:** Optional. FK to feesched.FeeSchedNum.
**PlanType:** Optional. Must be one of the following: "" (Percentage), "p" (PPO Percentage), "f" (Flat Copay), or "c" (Capitation).
**ClaimFormNum:** (Added in version 25.2.24) Optional. FK to claimform.ClaimFormNum.
**ClaimsUseUCR:** (Added in version 25.1.20) Optional. Either "true" or "false".
**CopayFeeSched:** (Added in version 23.3.17) Optional. FK to feesched.FeeSchedNum when FeeSchedType is CoPay. Typically only used for capitation or copay plans.
**EmployerNum:** (Added in version 22.4.24) Optional. FK to employer.EmployerNum.
**CarrierNum:** (Added in version 22.4.24) Optional. FK to carrier.CarrierNum.
**IsMedical:** (Added in version 24.4.34) Optional. Either "true" or "false".
**FilingCode:** (Added in version 25.1.20) Optional. FK to insfilingcode.InsFilingCodeNum.
**ShowBaseUnits:** (Added in version 25.1.20) Optional. Either "true" or "false".
**CodeSubstNone:** (Added in version 22.4.31) Optional. Either "true" or "false". Set "true" if this Insurance Plan should ignore any Substitution Codes.
**IsHidden:** (Added in version 22.4.31) Optional. Either "true" or "false".
**MonthRenew:** Optional. The month, 1-12, when the insurance plan renews. It will renew on the first of the month. Use 0 to indicate calendar year.
**FilingCodeSubtype:** (Added in version 25.1.20) Optional. FK to insfilingcodesubtype.InsFilingCodeSubtypeNum.
**CobRule:** (Added in version 25.1.20) Optional. Either "Basic", "Standard", "CarveOut" or "SecondaryMedicaid".
**BillingType:** (Added in version 25.1.20) Optional. FK to definition.DefNum where definition.Category=4.
**ExclusionFeeRule:** (Added in version 25.1.20) Optional. Either "PracticeDefault", "DoNothing" or "UseUcrFee".
**ManualFeeSchedNum:** (Added in version 25.2.24) Optional. FK to feesched.FeeSchedNum when feesched.FeeSchedType is ManualBlueBook. Only allowed if the AllowedFeeSchedsAutomate preference is set to "BlueBook" and if **IsBlueBookEnabled** is "true". Use 0 to indicate "None".
**IsBlueBookEnabled:** (Added in version 22.4.24) Optional. Determines if the plan utilizes BlueBook or not. Cannot be set to true if **PlanType** is set to anything other than "" (Percentage).
**InsPlansZeroWriteOffsOnAnnualMaxOverride:** (Added in version 25.1.20) Optional. Either "Default", "Yes" or "No".
**InsPlansZeroWriteOffsOnFreqOrAgingOverride:** (Added in version 25.1.20) Optional. Either "Default", "Yes" or "No".

**Example Requests:**
 PUT /insplans/15

{
 "FeeSched": 0,
 "PlanType": "",
 "MonthRenew": 0
 }

or

{
 "GroupName": "Pixar",
 "GroupNum": "Y4845",
 "PlanNote": "Copayments",
 "FeeSched": 56,
 "PlanType": "f",
 "ClaimsUseUCR": "false",
 "CopayFeeSched": 172,
 "EmployerNum": 12,
 "CarrierNum": 8,
 "IsMedical": "false",
 "FilingCode": 21,
 "CodeSubstNone": "false",
 "IsHidden": "false",
 "MonthRenew": 12
 "FilingCodeSubtype": 3,
 "CobRule": "CarveOut",
 "BillingType": 314,
 "ExclusionFeeRule": "PracticeDefault",
 "IsBlueBookEnabled": "false",
 "InsPlansZeroWriteOffsOnAnnualMaxOverride": "No",
 "InsPlansZeroWriteOffsOnFreqOrAgingOverride": "Yes"
 }

**Example Response:**
 {
 "PlanNum": 15,
 "GroupName": "Pixar",
 "GroupNum": "Y4845",
 "PlanNote": "Copayments",
 "FeeSched": 56,
 "PlanType": "f",
 "ClaimFormNum": 1,
 "ClaimsUseUCR": "false",
 "CopayFeeSched": 172,
 "EmployerNum": 12,
 "CarrierNum": 8,
 "IsMedical": "false",
 "FilingCode": 21,
 "ShowBaseUnits": "false",
 "CodeSubstNone": "false",
 "IsHidden": "false",
 "MonthRenew": 12
 "FilingCodeSubtype": 3,
 "CobRule": "CarveOut",
 "SecUserNumEntry": 0,
 "SecDateEntry": "2023-01-21",
 "SecDateTEdit": "2023-01-21 06:47:00",
 "BillingType": 314,
 "ExclusionFeeRule": "PracticeDefault",
 "ManualFeeSchedNum": 0,
 "IsBlueBookEnabled": "false",
 "InsPlansZeroWriteOffsOnAnnualMaxOverride": "No",
 "InsPlansZeroWriteOffsOnFreqOrAgingOverride": "Yes"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)