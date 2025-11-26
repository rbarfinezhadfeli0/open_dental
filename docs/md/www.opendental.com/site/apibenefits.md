Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Benefits

See [API Specification](apispecification.html)

Benefits are complex, see [Benefits](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7benefitinfo.html) for additional information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [Benefit Database Schema.](SchemaRedirect%EF%B9%96benefit.html)

## Benefits GET (single)

Version Added: 25.3.7

Gets a single benefit.

**BenefitNum:** Required in URL.

**Example Request:**
 GET /benefits/14

**Example Response:**
 {
 "BenefitNum": 14,
 "PlanNum": 85
 "PatPlanNum": 0,
 "CovCatNum": 0,
 "BenefitType": "Limitations",
 "Percent": -1,
 "MonetaryAmt": -1.0,
 "TimePeriod": "None",
 "QuantityQualifier": "Months",
 "Quantity": 6,
 "CodeNum": 0,
 "procCode": "",
 "CoverageLevel": "None",
 "SecDateTEntry": "2025-07-10 13:32:40",
 "SecDateTEdit": "2025-07-10 13:32:40",
 "CodeGroupNum": 31,
 "TreatArea": "None"
 }

200 OK
 404 NotFound (with explanation)

## Benefits GET (multiple)

Version Added: 22.3.27

Gets all benefits for a given Insurance Plan or Patient Plan. Empty **Percent** and **MonetaryAmt** values are indicated by -1 .

**PlanNum:** (Optional after version 23.2.62) FK to InsPlan.PlanNum.
**PatPlanNum:** (Optional after version 23.2.62) FK to PatPlan.PatPlanNum.

**Example Requests:**
 GET /benefits?PlanNum=12
 GET /benefits?PatPlanNum=30

**Example Response:**
 [
 {
 "BenefitNum": 236,
 "PlanNum": 12,
 "PatPlanNum": 0,
 "CovCatNum": 3,
 "BenefitType": "CoInsurance",
 "Percent": 30,
 "MonetaryAmt": -1.0,
 "TimePeriod": "None",
 "QuantityQualifier": "Visits",
 "Quantity": 2,
 "CodeNum": 0,
 "procCode": "",
 "CoverageLevel": "None",
 "SecDateTEntry": "2021-06-21 10:03:08",
 "SecDateTEdit": "2021-06-21 10:03:08",
 "CodeGroupNum": 0,
 "TreatArea": "None"
 },
 {
 "BenefitNum": 243,
 "PlanNum": 12,
 "PatPlanNum": 0,
 "CovCatNum": 0,
 "BenefitType": "WaitingPeriod",
 "Percent": -1,
 "MonetaryAmt": -1.0,
 "TimePeriod": "ServiceYear",
 "QuantityQualifier": "Months",
 "Quantity": 3,
 "CodeNum": 150,
 "procCode": "D0486",
 "CoverageLevel": "Family",
 "SecDateTEntry": "2021-06-21 10:03:08",
 "SecDateTEdit": "2021-06-21 10:03:08",
 "CodeGroupNum": 0,
 "TreatArea": "None"
 },
 {
 "BenefitNum": 245,
 "PlanNum": 12,
 "PatPlanNum": 0,
 "CovCatNum": 12,
 "BenefitType": "Limitations",
 "Percent": -1,
 "MonetaryAmt": 1000.0,
 "TimePeriod": "Lifetime",
 "QuantityQualifier": "None",
 "Quantity": 0,
 "CodeNum": 0,
 "procCode": "",
 "CoverageLevel": "Individual",
 "SecDateTEntry": "2021-06-21 10:03:08",
 "SecDateTEdit": "2021-06-21 10:03:08",
 "CodeGroupNum": 0,
 "TreatArea": "None"
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## Benefits POST (create)

Version Added: 22.3.17

Creates a new benefit for a given Insurance Plan or Patient Plan.

**PlanNum:** This or **PatPlanNum** is required. FK to InsPlan.PlanNum.
**PatPlanNum:** This or **PlanNum** is required. FK to PatPlan.PlanNum.
**BenefitType:** Required. Either "ActiveCoverage", "CoInsurance", "Deductible", "CoPayment", "Exclusions", "Limitations", or "WaitingPeriod".
**CoverageLevel:** Required. Either "None", "Individual", or "Family".

**CovCatNum:** Optional. FK to covcat.CovCatNum.
**Percent:** Optional. Only allowed if **BenefitType** is "CoInsurance". Must be a value between 0 and 100. Default -1 (Indicating empty).
**MonetaryAmt:** Optional. Only used if **BenefitType** is "CoPayment", "Limitations", or "Deductible". Default -1.0 (Indicating empty).
**TimePeriod:** Optional. Either "None", "ServiceYear", "CalendarYear", "Lifetime", "Years", or "NumberInLast12Months". Default "CalendarYear" when the insplan.MonthRenew is 0, "ServiceYear" when insplan.MonthRenew is greater than 0, or "None" for some limitation benefits.
**QuantityQualifier:** Optional. Either "None", "NumberOfServices", "AgeLimit", "Visits", "Years", or "Months". Default "None". Must be "Months" or "Years" if **BenefitType** is "WaitingPeriod".
**Quantity:** Optional. Must be a value between 0 and 100. Default 0. Must be a value greater than 0 if **QuantityQualifier** is "AgeLimit".
**CodeNum:** Optional. FK to procedurecode.CodeNum. Only allowed if **CovCatNum** is 0. Will be used over **procCode** if both are specified. Default 0.
**procCode:** Optional. FK to procedurecode.ProcCode. Only allowed if **CovCatNum** is 0. Default empty string.
**CodeGroupNum:** Optional. (Added in version 23.2.62) FK to codegroup.CodeGroupNum. The group of procedure codes that apply to this benefit.
**TreatArea:** Optional. (Added in version 25.3.7) Either "None", "Surf", "Tooth", "Mouth", "Quad", "Sextant", "Arch", or "ToothRange". Only allowed if benefit is a [Frequency Limitation](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7insfrequencylimitations.html). Default "None".

**Example Requests:**
 POST /benefits

Frequency Limitation (Every # Years)
 {
 "PlanNum": 12,
 "CoverageLevel": "None",
 "BenefitType": "Limitations",
 "TimePeriod": "None",
 "QuantityQualifier": "Years",
 "Quantity": 2,
 "CodeGroupNum": 3,
 "TreatArea": "Quad"
 }

Frequency Limitation (Every # Months)
 {
 "PlanNum": 18,
 "CoverageLevel": "None",
 "BenefitType": "Limitations",
 "TimePeriod": "None",
 "QuantityQualifier": "Months",
 "Quantity": 9,
 "CodeGroupNum": 14,
 "TreatArea": "None"
 }

Frequency Limitation (# Per Benefit Year)
*\*TimePeriod will be* "ServiceYear" *when the insplan.MonthRenew is greater than 0.*
 {
 "PlanNum": 82,
 "CoverageLevel": "None",
 "BenefitType": "Limitations",
 "TimePeriod": "CalendarYear",
 "QuantityQualifier": "NumberOfServices",
 "Quantity": 4,
 "CodeGroupNum": 28,
 "TreatArea": "None"
 }

Frequency Limitation (# in Last 12 Months)
{
 "PlanNum": 74,
 "CoverageLevel": "None",
 "BenefitType": "Limitations",
 "TimePeriod": "NumberInLast12Months",
 "QuantityQualifier": "NumberOfServices",
 "Quantity": 2,
 "CodeGroupNum": 41,
 "TreatArea": "None"
 }

Age Limit
{
 "PlanNum": 56,
 "CoverageLevel": "None",
 "BenefitType": "Limitations",
 "TimePeriod": "None",
 "QuantityQualifier": "AgeLimit",
 "Quantity": 18,
 "CodeGroupNum": 5
 }

**Example Response:**
Frequency Limitation (Every # Years)
 {
 "BenefitNum": 236,
 "PlanNum": 12,
 "PatPlanNum": 0,
 "CovCatNum": 0,
 "BenefitType": "Limitations",
 "Percent": -1,
 "MonetaryAmt": -1.0,
 "TimePeriod": "None",
 "QuantityQualifier": "Years",
 "Quantity": 2,
 "CodeNum": 0,
 "procCode": "",
 "CoverageLevel": "None",
 "SecDateTEntry": "2021-06-21 10:03:08",
 "SecDateTEdit": "2021-06-21 10:03:08",
 "CodeGroupNum": 3,
 "TreatArea": "Quad"
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## Benefits PUT (update)

Version Added: 22.4.7

Updates an existing benefit.

**BenefitNum:** Required in URL.

**CovCatNum:** Optional. FK to covcat.CovCatNum.
**BenefitType:** Optional. Either "ActiveCoverage", "CoInsurance", "Deductible", "CoPayment", "Exclusions", "Limitations", or "WaitingPeriod".
**Percent:** Optional. Only allowed if **BenefitType** is "CoInsurance". Must be a value between 0 and 100. Use -1 to indicate empty.
**MonetaryAmt:** Optional. Only used if **BenefitType** is "CoPayment", "Limitations", or "Deductible". Use -1 to indicate empty.
**TimePeriod:** Optional. Either "None", "ServiceYear", "CalendarYear", "Lifetime", "Years", or "NumberInLast12Months".
**QuantityQualifier:** Optional. Either "None", "NumberOfServices", "AgeLimit", "Visits", "Years", or "Months". Must be "Months" or "Years" if **BenefitType** is "WaitingPeriod".
**Quantity:** Optional. Must be a value between 0 and 100. Must be a value greater than 0 if **QuantityQualifier** is "AgeLimit".
**CodeNum:** Optional. FK to procedurecode.CodeNum. Only allowed if **CovCatNum** is 0. Will be used over **procCode** if both are specified.
**procCode:** Optional. FK to procedurecode.ProcCode. Only allowed if **CovCatNum** is 0.
**CoverageLevel:** Optional. Either "None", "Individual", or "Family".
**CodeGroupNum:** Optional. (Added in version 25.3.7) FK to codegroup.CodeGroupNum. The group of procedure codes that apply to this benefit. Cannot be changed for a Frequency Limitation or an Age Limit benefit that already specifies a CodeGroupNum.
**TreatArea:** Optional. (Added in version 25.3.7) Either "None", "Surf", "Tooth", "Mouth", "Quad", "Sextant", "Arch", or "ToothRange". Only allowed if benefit is a [Frequency Limitation](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7insfrequencylimitations.html).

**Example Requests:**
 PUT /benefits/75
 PUT /benefits/323

{
 "Percent": 70,
 "QuantityQualifier": "Visits",
 "Quantity": 2
 }

 or

 {
 "CovCatNum": 0,
 "BenefitType": "ActiveCoverage",
 "Percent": -1,
 "MonetaryAmt": 499.99,
 "TimePeriod": "ServiceYear",
 "QuantityQualifier": "AgeLimit",
 "Quantity": 13,
 "CodeNum": 156,
 "procCode": "D1110",
 "CoverageLevel": "Individual"
 }

 or

{
 "Quantity":18
 }

**Example Responses:**
 {
 "BenefitNum": 75,
 "PlanNum": 10,
 "PatPlanNum": 0,
 "CovCatNum": 0,
 "BenefitType": "ActiveCoverage",
 "Percent": -1,
 "MonetaryAmt": 499.99,
 "TimePeriod": "ServiceYear",
 "QuantityQualifier": "AgeLimit",
 "Quantity": 13,
 "CodeNum": 156,
 "procCode": "D0999",
 "CoverageLevel": "Individual",
 "SecDateTEntry": "2021-05-25 13:27:52",
 "SecDateTEdit": "2021-05-25 13:27:52",
 "CodeGroupNum": 0,
 "TreatArea": "None"
 }

 or

{
 "BenefitNum": 323,
 "PlanNum": 25,
 "PatPlanNum": 0,
 "CovCatNum": 0,
 "BenefitType": "Limitations",
 "Percent": -1,
 "MonetaryAmt": -1.0,
 "TimePeriod": "None",
 "QuantityQualifier": "AgeLimit",
 "Quantity": 18,
 "CodeNum": 0,
 "procCode": "",
 "CoverageLevel": "None",
 "SecDateTEntry": "2024-02-13 14:45:19",
 "SecDateTEdit": "2024-02-13 14:45:19",
 "CodeGroupNum": 1,
 "TreatArea": "None"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## Benefits DELETE

Version Added: 22.4.7

Deletes an existing benefit by BenefitNum.

**BenefitNum:** Required in URL.

**Example Request:**
 DELETE /benefits/75

**Example Response:**
 200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)