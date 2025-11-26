Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Fields that Trigger New Plan

New plans can be created from an existing insurance plan.

In an [Insurance Plan](insplan.html), select **Create new Plan if needed**.

![](images/triggersPlanCreate.gif)

To create a new plan, ensure the radio button above is selected, and at least one of the following field values must change. This is useful when a plan changes for a single subscriber, but not all other subscribers on the plan. Only plans with more than one subscriber are changed.

The following fields are listed in order as shown on the insurance plan. (Top to bottom, each tab, then subscriber information.)

When *Create new Plan if needed* is selected, a new plan is assigned to the currently selected subscriber (and any dependents). Historical claims are updated to reflect the new plan information. If the subscriber has a new insurance plan and historical claims should not be changed, the current plan should be dropped and a new plan added instead.

**Field = Db Column Name**

Medical Insurance = IsMedical

Employer = EmployerNum

Carrier Information = CarrierNum

Group Name = GroupName

Group Number = GroupNum

Plan Type = PlanType

Manual Blue Book fee schedule

Use Alternate Code = UseAltCode

Don't Substitute Codes = CodeSubstNone

Claims show for UCR fee, not billed fee = ClaimsUseUCR

Hidden = IsHidden

Fee Schedule = FeeSched

Claim Form = ClaimFormNum

Patient Co-Pay Amounts = CopayFeeSched

Carrier Allowed Amounts = AllowedFeeSched

COB Rule = CobRule

Filing Code = FilingCode

File Code Subtypes = FilingCodeSubtype

Claim show base units = ShowBaseUnits

Ortho Claim Type = OrthoType

Ortho Auto Proc = OrthoAutoProc

Ortho Auto Fee = OrthoAutoFeeBilled

Auto Proc Period = OrthoAutoProcFreq

Wait 30 days before creating first automatic claim = OrthoAutoClaimDayWait

Plan Note = PlanNote

Trojan ID = TrojanID

Benefit Year (Benefit Info window) = MonthRenew

Don't Verify checkbox = HideFromVerifyList

**Canadian Customers only:**

Div. No. = DivisionNo

Dentaide Card Sequence = DentaideCardSequence

Plan Flag = CanadianPlanFlag