Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Medicaid or Flat Co-Pay Insurance Plan

Set up this [Insurance Plan Type](insplantypes.html) when the plan pays a flat fee instead of a percentage. Insurance coverage will be 100%.

![](images/planMedicaid.gif)

Write-offs are not tracked. To track write-offs, see [HMO / DMO Insurance Plan with Co-pays](planhmosupplemental.html).

On the [Insurance Plan](insplan.html), select these options.

* **Plan Type**: *Medicaid or Flat Co-Pay*. This will clear all percentages, maximums and deductibles, but a warning message will show first.
* **Fee Schedule**: The carrier's fee schedule.
* **Patient Co-pay Amounts**: The copay fee schedule for the carrier.

If insurance does not cover a procedure for some reason, and the office does not expect the patient to pay, enter the procedure fee as a write-off when [receiving the claim](claimreceive.html).

If a patient is required to pay a copay for procedures

1. Create a *copay* [Fee Schedule](feeschedules.html) for the carrier.
2. For each procedure code, enter the patient's copay amount. There can be just a few fees with the rest blank. If you only have the insurance copay fee schedule, not the patient copay amounts, use this equation to obtain the fee:

   Carrier Fee - Insurance Copay = Patient Copay