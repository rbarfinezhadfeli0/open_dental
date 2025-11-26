Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Select Procedure

The Select Procedure window is used throughout the Account Module to associate procedures to charges.

In the [Edit Adjustment](adjustments.html) window, click **Attach**.

![](images/allocateUnearnedSelectProcedureWindow.png)

Alternatively, when attaching a procedure to a [Paysplit](paysplit.html), click **Attach**.

This window shows users outstanding charges along with a financial breakdown. Use this information when creating paysplits or adjustments to prevent procedures from being overpaid.

## Credit Filter

![](images/selectProcFilter.png)

There are three options to filter the procedures.

* **Only allocated credits**: Show all procedures that do not have enough attached credits (e.g., paysplits, adjustments) to cover the full cost of the procedure (i.e., procedures that have attached paysplits that only cover part of the cost).
* **Include all credits**: Show all procedures that are not paid off using first in/first out logic. This logic applies when credits in a payment are not explicitly attached/allocated to procedures. Selected by default when the Adjustments preference in [Allocations Setup](allocationssetup.html) is set to Manual.
* **Exclude all credits**: Show all procedures on this patient's account regardless of attached credits.

## Procedures

![](images/selectProcProcedures.png)

Shows all procedures for the patient matching the criteria of the selected credit filter.

* **Date**: [Procedure](procedureedit.html) date.
* **Prov**: Treating provider.
* **Code**: Procedure code.* **Tooth**: Tooth attached to the procedure.
  * **Description**: Procedure code description. *(TP)* denotes a treatment planned procedure. Treatment planned procedures only show when attaching to a paysplit and the Allocations Setup, *Allow prepayments to allocate to treatment planned procedures* is checked.
* **Amt Orig/Amt:** Procedure fee. (e.g., billed fee or capitation fee)
* **Amt End**: Remaining procedure balance after all paysplits, adjustments, write-offs, and estimates have been applied (including the current adjustment or paysplit). This column will be hidden when the *Exclude all credits* filter is selected.

## Breakdown

![](images/selectProcBreakdown.png)

Highlight a procedure to see the financial breakdown.

* **Amt Original**: Procedure fee. (e.g., billed fee or capitation fee)
* **Positive Adjs**: Total of positive adjustments attached to the procedure.
* **Negative Adjs**: Total of negative adjustments attached to the procedure.
* **PayPlan Credits**: Total of Payment Plan Credit attached to the procedure. See: [Payment Plan Procedures and Credits](paymentplantxcredits.html).
* **PaySplits**: Total of patient payments attached to the procedure.
* **Ins Payments**: Total of insurance payments attached to the procedure.
* **WriteOffs**: Received write-offs attached to the procedure.
* **Ins Ests**: Outstanding insurance estimate for claims created with the procedure.
* **WriteOff Ests**: Outstanding write-off estimate for claims created with the procedure.
* **Current Splits**: Total of other payment splits currently attached to the same payment.
* **Amt End**: Remaining procedure balance after all paysplits, adjustments, write-offs, and estimates have been applied.

## Select Account Entries

The Select Account Entries window is nearly identical to the Select Procedure window. Multiple procedures can be selected from this window, unlike the Select Procedure window. When selecting multiple procedures, the Breakdown will reflect totals for all selected procedures.

In the Account Module, click the [Payment](payment.html) dropdown and **Allocate Unearned**. If the family has an [Unearned / Prepayment](unearnedprepayment.html) balance, the Select Account Entries will open instead, with a list of completed procedures and positive adjustments with a remaining balance. Select one or more production items and click **OK** or double-click a single item to [Allocate Unearned Income](unearnedallocate.html).