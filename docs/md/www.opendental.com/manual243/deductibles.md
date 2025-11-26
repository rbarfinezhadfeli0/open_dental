Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Deductibles

In [Edit Benefits](benefitinfo.html) window, at the top right, is an area to enter Deductibles (if different).

Sometimes the deductibles for specific [Insurance Plan](insplan.html) Categories differ from the general deductible. Below are some common scenarios and how to set them up.

When the General Deductible does not apply to diagnostic or preventive care, enter 0.00 for both Diagnostic and Routine Preventive deductibles. This is the default.

![](images/benefitinfoDeductibleNoGeneral.gif)

When the General Deductible applies to diagnostic care but not preventive care, leave Diagnostic blank and enter 0.00 for Routine Preventive.

![](images/benefitinfoDeduct0Prev.gif)

When the General Deductible applies to all care, leave all *Deductibles (if different)* fields blank

![](images/benefitinfoDeductGeneral.gif)

When the diagnostic deductible is different than the general deductible and preventive work has no deductible, enter the deductible for Diagnostic and 0.00 as the deductible for Routine Preventive.

![](images/benefitinfoDeductDiag.gif)

Note: Any category deductible that varies from the general deductible only limits the amount of deductible that can be paid towards that category. Deductibles can also be added as an [Other Benefit](otherbenefits.html). Any deductible entered in *Deductibles (if different)* or in Other Benefits still applies toward the general deductible.

## Deductible Logic

If a deductible is owed:

* In the [Treatment Plan Module](treatmentplan.html), the deductible is applied to the first procedure in the Active Treatment Plan that requires a deductible. If the deductible amount exceeds the patient portion, the remaining deductible is applied to the next eligible procedure.
* If an eligible procedure is set complete, the deductible is applied, even if it was not originally applied in the Treatment Plan. The *Deductible Remaining* in the Treatment Plan is automatically recalculated.