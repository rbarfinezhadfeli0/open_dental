Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Paysplit

Payment Splits (paysplits) allow income to be allocated to clinics, production, providers, or unearned income types.

In the [Payment](payment.html) window, click **Add**, or double-click an existing paysplit to edit.

![](images/paySplit.png)

To change paysplit settings, see [Allocations Setup](allocationssetup.html).

**Entry Date**: The date the paysplit is created. This date cannot be changed.

**Payment Date**: The payment date as entered on the Payment window.

**Amount**: The portion of the total payment to allocate to this paysplit.

**Unearned Type**: Used to designate this split as as [Unearned / Prepayment](unearnedprepayment.html) (e.g. prepayments). If there is no procedure attached to the paysplit, defaults to the type set in Preferences, *Default unearned type for unallocated paysplits*. Customize types in [Definitions: PaySplit Unearned Types](definitionspaysplitunearned.html).

**Clinic**: The clinic to allocate the income from this paysplit to. Defaults to the clinic assigned to the payment. Set the *Default Clinic for patient payments* in Preferences.

**Provider**: The provider to allocate the income from this paysplit to. Click the dropdown to change the provider and select by abbreviation or **[...]** to select by name. If none the paysplit will be marked as a prepayment. When providers are restricted to clinics, only providers available for the selected clinic are options.

Note: If a procedure or adjustment is attached to a new paysplit, the Clinic and Provider are inherited from the procedure or adjustment and overrides the preference, *Patient payments use*.

**Patient**: The patient this paysplit applies to. All family members are listed. To select a patient that is not in the family, check the **Is from another family** box, then select the patient.

**Edit Anyway**: This button only shows when opening an existing paysplit that is attached to a procedure and the *Paysplit* setting in Allocations Setup is set to *Rigorous*. Click to enable the Clinic, Provider, and Patient fields so they can be edited. The *Setup* security permission is required.

Note: To ensure income is allocated correctly, the Clinic and Provider should always be the same as the attached production item.

**Procedure**: Information for the procedure currently attached to the paysplit. See Procedure section below for additional information and how to attach or detach procedures.

**Adjustment**: Information for the adjustment currently attached to the paysplit. See Adjustment section below for additional information and how to attach or detach adjustments.

Note: A procedure or adjustment may be attached to a paysplit, but not both. To attach both, instead link the adjustment directly to the procedure (see Adjustment) then create a payment split and attach it to the procedure.

**Attached to Payment Plan**: Check this box to attach this as a [Payment to a Payment Plan](paymentplanpayment.html).

**OK**: Save changes made to this window. If the paysplit amount exceeds the procedure's remaining balance, clicking **OK** will prompt the user with an overpaid procedure warning.

**Cancel**: Close the window without saving any changes.

## Procedure

Attach or detach a procedure from a paysplit.

![](images/paysplitProcedure.png)

**Attach** Click to view the [Select Procedure](selectprocedure.html) window. Highlight a procedure to attach to the payment, then click **OK**. Treatment planned procedures only show when *Allow prepayments to allocate to treatment planned procedures* is enabled in Allocations Setup.

**Detach**: Click to clear the procedure currently attached to the paysplit.

Procedure information: After a procedure is attached to the paysplit, information for the attached procedure will show.

* **Date**: Date of the [Procedure](procedureedit.html). For completed procedures this is the date completed. For treatment planned (TP) procedures this is normally the date the procedure was treatment planned, but it can be changed.
* **Provider**: Treating provider.
* **Treatment Area**: Treatment area displayed will vary depending the procedure (e.g., Tooth, Surface, etc). Shows the treatment area attached to the procedure.
* **Description**: Procedure code description.

Payment Breakdown Information: Payment and estimate information for the attached procedure. Only attached items (e.g., payments, adjustments, etc) are counted in the payment breakdown. Shown for informational purposes so users can enter correct paysplit information.

* **Fee**: Billed fee or capitation fee.
* **Writeoffs**: Write-offs or estimated write-offs of created claims.
* **Ins Paid**: Total insurance payments attached to the procedure.
* **Ins Est**: Outstanding insurance estimate of created claims.
* **Adjustments**: Total of adjustments attached to procedure.
* **Patient Paid**: Total patient payments attached to procedure
* **This Payment Split**: Amount being applied from the current paysplit.
* **Remaining**: Remaining procedure balance after all payplits (including the current paysplit), estimates, write-offs, and adjustments have been applied. A number in parentheses indicates a credit (i.e., an overpaid procedure).

## Adjustment

Attach or detach an adjustment from a paysplit.

![](images/paySplitAdj.png)

**Attach**: Click to open the Adjust Select window (see below). Highlight an adjustment from a list of positive and negative adjustments that are not linked to a procedure. Click **OK** to attach the selected adjustment to the paysplit. The Attach option is only available if there is no other procedure or adjustment currently attached to the payment split.

**Detach**: Click to clear the adjustment currently attached to the paysplit.

A summary of the currently attached adjustment is displayed.

* **Date**: Adjustment date.
* **Provider**: Provider assigned to the adjustment.
* **Adjust Amount**: Adjustment fee.
* **Paid Previously**: Total payments split to this adjustment (not including the current payment split).
* **This Payment Split**: Amount paid on this paysplit.
* **Remaining**: Remaining adjustment balance after all paysplits have been applied (including the current payment split).

![](images/paySplitAdjSelect.png)

Highlight an adjustment to view a breakdown on the right.

* **Amt Original**: Adjustment fee.
* **Already Used**: Total payments split to the adjustment (not including the current payment split).
* **Amt Available**: Adjustment balance after previous payments have been applied.
* **Current Split**: Amount paid on this paysplit.
* **Amt End**: Remaining adjustment balance after all paysplits have applied (including the current payment split).