Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Sales Tax

See [Adjustments](adjustments.html).

Sales tax can be manually or automatically applied to completed procedures. Sales tax displays as an adjustment in the [Account Module](account.html).

![](images/salesTaxExample.png)

## Set up Requirements

Before using the sales tax feature, the following needs to be set up:

* Create a positive sales tax adjustment type in [Definitions: Adj Types](definitionsadjtypes.html).
* Set the adjustment type, tax percentage, default provider, and automation in [Preferences](preferences.html).
* If *Automate Sales Tax* is enabled, set which procedures are taxed in each [Procedure Code](procedurecodeedit.html).

## About Sales Tax

* If the sales tax provider is different than the procedures' provider, the sales tax adjustment shows as a separate charge in the [Payment](payment.html) window, Outstanding Charges grid, even though the adjustment is attached to the procedure.
* If the procedure fee changes, delete the sales tax adjustment and re-complete the procedure or manually edit the adjustment amount.
* Enable *Auto Tax* on a [Procedure Code](procedurecodeedit.html) and enable the preference, *Automate Sales Tax*, to post sales tax automatically.
* Sales tax must be added manually to completed [Repeating Charge](repeatingcharge.html) procedures and procedures attached to an [Ortho Case](orthocase.html).
* Sales tax adjustments may be manually added to procedures that already have sales tax applied. Verify the procedure is not already taxed before applying.
* Procedures being billed to [PPO Percentage](planppo.html) or [PPO Fixed Benefit](planppofixed.html)  insurance plan types: sales tax amount is calculated based on the billed fee less any estimated write-off (i.e., insurance fee).

## Manual Sales Tax

In the Account Module, highlight one or more completed procedures. In the toolbar, click the Adjustment dropdown, then **Apply Sales Tax**.

![](images/toolbarSalesTax.png)

A sales tax adjustment is immediately created and attached to each procedure. The adjustment is directly attached to the procedure.

## Automate Sales Tax

A sales tax adjustment is automatically added to a patient's account when a procedure is set complete. The adjustment is directly attached to the procedure.

Ensure procedures are marked as taxable in the [Procedure Code](procedurecodeedit.html) window.

Taxable procedures display on the Treatment Plan. There are two options:

* Display tax amount on the procedure description. This happens automatically if the Tax Est column has not been added to the treatment plan. The taxable amount calculates into the patient portion.
* Display tax amount in a separate column. Add the Tax Est column in [Display Fields](displayfields.html).