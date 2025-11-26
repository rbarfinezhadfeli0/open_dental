Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Coordination of Benefits ( COB )

Coordination of benefits (COB) are the rules for how insurance pays when a patient has coverage under more than one plan.

On the [Secondary Insurance](inssecondary.html) plan, in the [Edit Insurance Plan](insplan.html) window, Other Ins tab, select a Coordination of Benefits rule.

![](images/insPlanEditCOB.png)

Set the default Coordination of Benefits rule in [Preferences](preferences.html). There are many different ways to calculate COB, made even more complicated by various State laws. Non-duplication rules can vary, depending on the carrier.

Open Dental has the following different COB Rule options.

**Basic**: Secondary pays the lesser of:

1. The amount that it would have paid in the absence of any other coverage.
2. The secondary allowed amount minus what primary paid.

For example, on a $100 procedure, primary might pay $80 (80% of its allowed fee).

* If the secondary allowed amount was $110, secondary would pay the lesser of $88 or ($110 - $80), so $30.
* If the secondary allowed amount was $90, secondary would pay the lesser of $72 or ($90 - $80), so $10.
* As a second example, on a $100 procedure, primary might pay $50 (50% of its allowed fee).
* If the secondary allowed amount was $110, secondary would pay the lesser of $55 or ($110 - $50), so $55.
* If the secondary allowed amount was $90, secondary would pay the lesser of $45 or ($90 - $50), so $40.

**Standard**: Secondary pays the lesser of:

1. The amount that it would have paid in the absence of any other coverage.
2. The patient's portion under the primary plan.

For example, on a $100 procedure, primary might pay $80 (80% of its allowed fee).

* If the secondary allowed amount was $110, secondary would pay the lesser of $88 or $20, so $20.
* If the secondary allowed amount was $90, secondary would pay the lesser of $72 or $20, so $20.
* As a second example, on a $100 procedure, primary might pay $50 (50% of its allowed fee).
* If the secondary allowed amount was $110, secondary would pay the lesser of $55 or $50, so $50.
* If the secondary allowed amount was $90, secondary would pay the lesser of $45 or $50, so $45.

**Carve Out**: (Non-Duplication) Secondary reduces what they pay by what primary paid.

Calculation used: Secondary InsEst = (Secondary Allowed - Secondary Deductible) \* Secondary Percentage - PaidOther

Example with deductible: On a $1500 procedure, primary might pay $750 (50% of its allowed fee).

* If secondary allowed amount was $1200, secondary deductible was $50 and secondary percentage was 80%, then secondary would pay: $170
* 170 = (1200 - 50) \* .8 - 750

Example without deductible (Non-Duplication: On a $100 procedure, primary might pay $80 (80% of its allowed fee).

* If secondary allowed amount was $110, secondary would pay $88 - $80 = $8.
* If secondary allowed amount was $90, secondary would pay $72 - $80 = $0.
* As a second example, on a $100 procedure, primary might pay $50 (50% of its allowed fee).
* If secondary allowed amount was $110, secondary would pay $55 - $50 = $5.
* If secondary allowed amount was $90, secondary would pay $45 - $50 = $0.

**Secondary Medicaid:** Secondary reduces what they pay by what primary pays. The estimated patient portion becomes a write-off for the primary insurance. Only use this rule when allowed to bill Medicaid as secondary.

Calculations used: Pri Ins Write-Off = ProcFee - Pri Ins Pay Est (or Pri Ins Pay) - Sec Ins Est (or Sec Ins Pay)
 Secondary Ins Est = (Secondary Allowed - Secondary Deductible) \* Secondary Percentage - PaidOther

Examples: On a $100 procedure, primary insurance might allow $70, pay $35, and write off $30. Secondary insurance might allow $20, pay $0, and write off $35. The patient pays $0.

On a $100 procedure, primary insurance might allow $40, pay $20 and write off $60. Secondary insurance might allow $30, pay $10 and write off $10. The patient pays $0.