Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Payment Plan Procedures and Credits

Associate procedures to an Old Payment Plan in order to determine the Pay Plan Credit applied to a patient's account balance.

In an [Old Payment Plan](paymentplanpatient.html), click **View Tx Credits**.

Old Payment Plans, formerly Patient Payment Plans, are a deprecated feature. Additional Old Payment Plans cannot be created. Existing Old Payment Plans can still be edited and payments can be attached to these plans. See [Payment Plan](paymentplandynamic.html) to create new patient repayment plans.

![](images/payplanProceduresCredits.png)

The total amount of credits attached determines the amount subtracted from the patient balance (PayPln: Credit). See Attaching Payment Plan Credits section for instructions on attaching Pay Plan Credits.

**Print**: Print a list of the procedures and credits that currently show in the Available Procedures/Payment Plan Credits grid.

**Hide Unattached Procedures**: Only show procedures that are already credited to this plan.

**Show procedures that have not been explicitly paid off**: Only show procedures with an estimated patient portion after insurance estimates, write-offs, and explicitly attached adjustments and payments are applied. Unallocated credits (i.e., adjustments, insurance payments, or patient payments) are not included in the *Rem Before* amounts. Alternatively, run the [Income Transfer Manager](incometransfermanager.html) to allocate income prior to attaching treatment credits.

**Available Procedures**: Procedures with a *Rem Before* amount other than $0 are listed in yellow. Any treatment credits attached to other Old Payment Plans are considered in the *Rem Before* amount.

![](images/payPlanCreditAvailProcs.png)

* Date: The procedure date.
* Provider: Abbreviation of the provider assigend to the procedure.
* Stat: The status of the procedure. C = complete. TP = treatment planned.
* Code: Procedure code.
* Fee: Procedure amount (i.e., fee billed to account before write-offs, adjustments, etc).
* Rem Before: The estimated patient portion after insurance estimates, write-offs, adjustments, and payments. This includes adjustments or payments not explicitly attached to the procedure but are applied using first in/first out logic (FIFO). FIFO logic is not applied to treatment planned procedures.

  Note:
  + For treatment planned procedures, Rem Before includes [Discount Plan Subscriber Edit](discountplan.html) adjustments but not [TP Procedure Discounts](treatmentplandiscounts.html). Manually enter the correct amount after TP procedure discounts when adding Tx Credits for these procedures.
  + To ensure the *Rem Before* amounts are as accurate as possible, run the Income Transfer Manager before creating Payment Plan Credits. Any unallocated income and adjustments (including insurance payments entered using the As Total option) is transfered to procedures, updating the *Rem Before* amounts.

**Payment Plan Credits**: View all credits (blue) attached to this plan.

![](images/payPlanCreditAttached.png)

* Credit Date: The date the credit appears on the account.
* Amount: The total amount of credit applied. Typically the Rem Before and Amount match.
* Rem After: If attached to a procedure, the remaining amount due on the procedure after the credit is applied. If the Credit and Rem Before are the same, this should be zero.
* Note: The note entered with the credit information.

Payment Plan adjustments show as credits on the date they are created and include an adjustment note.

![](images/payplanTxCreditsAdj.png)

**Credit Information**: Add, update, or remove credits in the Payment Plan Credit area. Credits can be attached to available procedures or unallocated (not recommended). If unallocated, Payment Plan payments are not split to specific adjustments or procedures.

![](images/PayPlanCreditInfo.png)

Note:

* Positive adjustments must be attached to procedures (e.g., finance charges or sales tax) in order to include them in the Payment Plan principal balance.
* Payments can only be made to payplan charges when credits are attached to procedures if Paysplits is set to *Rigorous* in [Allocations Setup](allocationssetup.html).

* **Code**: If the credit is attached to a procedure code, the code is shown. Otherwise *Unattached* is shown to indicate unallocated.
* **Date**: This date determines when the credit is applied to the account. If attached to a completed procedure, it defaults to the completed procedure date. If attached to a treatment planned procedure, it shows None but will automatically update once set complete. If left blank, it defaults to today's date.

  Note: Backdating Payment Plan Credits or changing Payment Plan Credits in the past changes historical aging.
* **Amt**: The total credit amount to apply.
* **Note**: If attached to a procedure, defaults to the procedure code and a shorthand description. If credits show in the patient's account grid this note shows in the Description column for PayPlan: Credit line items.

To add a credit for a procedure, highlight the procedure first. The credit fields populate with the procedure information. Modify if needed, then click **Add**. A procedure can only be attached to one Payment Plan. It cannot be attached to both an Old Payment Plan and Payment Plan.

**Add**: Click to add Tx credits for the selected procedure(s). The button is **Update** instead if selecting a procedure with attached Tx Credits.

**Update**: Select an existing Tx Credit row and type any changes into Credit Information fields. Click to apply changes to the selected Tx Credit.

**Delete**: Select existing Tx Credit rows and click to delete.

**Clear**: Click to deselect all rows currently selected in the grid.

Note: Updating a Payment Plan Adjustment does not automatically update the Amortization Schedule or the patient account. Manually update the adjustment in these places.

## Attaching Treatment Credits

To attach the total *Rem Before* balance of a procedure:

1. From the [Old Payment Plan](paymentplanpatient.html) window, click **View Tx Credits**.
2. Select procedure(s) from the *Available Procedures* area. Click + drag or Ctrl + click to select multiple procedures.
3. Click **Add**.
4. Repeat for any additional procedures.
5. Click **OK** to save Tx Credits to the Payment Plan.

![](images/payPlanTxCreditTotal.png)

To attach treatment credit for a partial balance:

1. From the Old Payment Plan window, click **View Tx Credits**.
2. Select the procedure from the *Available Procedures* area.
3. Enter the Tx Credit to be applied to the procedure in the **Amt** field of the *Credit Information* area.
4. Click **Add**.
5. Repeat for any additional procedures.
6. Click **OK** to save Tx Credits to the Payment Plan.

![](images/payPlanTxCreditPartial.png)

To attach an unallocated credit:

1. From the Old Payment Plan window, click **View Tx Credits**.
2. Click **Clear** to ensure no rows are selected.
3. Enter the Tx Credit amount in the **Amt** field of the *Credit Information* area.
4. Click **Add**.

* If *Rigorous* Paysplits are enabled in [Allocations Setup](allocationssetup.html), users receive a warning. Unallocated Tx Credits are not allowed with this preference. Follow the steps above to attach to a procedure instead.

5. If Tx Credits need to be attached to procedures, follow steps above to do so.
6. Click **OK** to save Tx Credits to the Payment Plan.

![](images/payPlanTxCreditUnattached.png)

A warning displays if a procedure's provider is different than the payment plan's provider. If the user proceeds (clicks **Yes**) the Payment Plan provider is assigned to the pay. Future payment splits, however, will be allocated to the procedure provider when the Paysplits Allocations preference is set to something other than *Rigorous*. Income transfers may also be incorrect. See [Payment Plan Q and A](paymentplanpatientfaq.html).

## Reversals / Detaching Treatment Credits

Reversals can be made manually by detaching treatment credits.

To detach treatment credits:

1. From the Old Payment Plan window, click **View Tx Credits**.
2. Select an existing *Payment Plan Credit* row.
3. Update or delete the Tx Credit.
   * To update the Tx Credit: Type an updated *Amt* and click **Update**.
   * To delete the Tx Credit: Click **Delete**.
4. Repeat steps to update or delete any additional Tx credits.
   * Users may also wish to attach new Tx Credits to ensure the *Total Amount* of the Payment Plan still matches the *Total Credits Attached*. See steps above for attaching Treatment Credits.
5. Click **OK** to close the Payment Plan Procedures and Credits window.