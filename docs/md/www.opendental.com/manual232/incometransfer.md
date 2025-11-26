Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Income Transfer

Create a $0 payment to transfer all or specific unallocated income and negative adjustments to outstanding charges.

In the [Payment Window](payment.html), at the top, check **None (Income Transfer)**.

![](images/paymentTypeNone.png)

After creating the $0 payment, check the *Payment Type, None (Income Transfer)*. When checked, the Pay/Add Partials buttons are replaced with Transfer.

Alternatively, use the [Income Transfer Manager](incometransfermanager.html) to transfer all unallocated credits, including unallocated claim payments. To transfer [Unearned Income / Prepayments](unearnedprepayment.html), see [Allocate Unearned Income](unearnedallocate.html).

Note:

* To view this window automatically after receiving a claim payment, enable *Show provider income transfer window after entering insurance payment* in [Preferences](preferences.html).
* Income transfers require the *PaymentCreate* [Permission](permissions.html).
* An [Audit Trail](audittrail.html) entry is logged for income transfers.

An income transfer must include offsetting negative and positive payment splits (paysplits) equal to $0. Follow the steps below to create a manual income transfer.

First, add the negative paysplit to subtract the income source from a patient's clinic and treating provider, or charge:

1. Click **Add Split** to create a new payment split.
2. On the [Edit Payment Split](paysplit.html) window, enter a negative amount less than or equal to the income source.
   * Less than, to transfer a partial amount (e.g. for an overpayment).
   * Equal to, to transfer the entire amount.
3. Select the Patient with the income source to transfer (defaults to guarantor). Check **Is from another family** to select a patient not in the family list.
4. Select where to subtract the income from. The income (i.e., a payment) must exist where it is being subtracted from to create a valid transfer.
   * Select a **Clinic** and **Provider** (and Unearned Type, if applicable).
   * Select an Unearned Type
   * Procedure tab: Click **Attach** to select a completed or treatment planned procedure (TP). The Clinic/Provider is inherited from the procedure.
   * Adjustment tab: Click **Attach** to select an adjustment. The Clinic/Provider is inherited from the adjustment.
   * Payment Plan: Select the Clinic and Provider assigned to the payment plan, and check **Attached to Payment Plan**. If the family has multiple payment plans, choose the correct plan from the Select Payment Plan window.
   * See [Allocate Unearned Income](unearnedallocate.html) to allocate unearned income instead.
5. Click **OK** to save the negative paysplit.

![](images/incomeTxfrNegSplit.png)

Next, add the positive paysplit to add the income to a different clinic/provider or charge:

1. Click **Add Split** to create a new payment split.
2. Enter a positive amount, less than or equal to the negative split.
   * Less than, if adding the income to multiple charges.
   * Equal to, if adding all of the income to one charge.
3. Select the Patient to transfer the income to.
4. Attach the income to a procedure, adjustment, payment plan, or unearned type (one per paysplit).
   * Alternatively, if not transferring to a charge, select a clinic/provider combination to add the income to. A charge must exist for the selected combination to complete a valid transfer.
5. Click **OK** to save the positive paysplit.

![](images/incomeTxfrPosSplit.png)

Create additional positive paysplits until the subtracted income is completely allocated. The total added splits must be zero to complete the transfer.

Once all splits have been created and the Current Payment Splits Total equals 0.00, click **OK** on the Payment window to post the income transfer as a line item to each affected patient's account.

![](images/incomeTxfrSplits.png)

Note: If income is transferred but not allocated to production, the next time a transfer is completed through the Income Transfer Manager, the income will be allocated to a production source, if available.

## Transfer Family Balances

To transfer all unallocated credits to any outstanding charges within the family, follow the instructions below. This method does not transfer unallocated insurance payments, use the Income Transfer Manager instead.

With **None (Income Transfer)** as the Payment Type checked, the Outstanding Charges grid groups all charges for the family by clinic and provider. Use the Group By dropdown to group charges by Provider or select None to show all charges with a balance.

![](images/incomeTransferFamilyCharges.png)

* The Amt End is the sum of all insurance estimates, write-offs, payments, and charges for the clinic/provider combination.
* A negative Amt End indicates an over allocation of payments and/or positive adjustments for the clinic and provider.
* A positive Amt End is the total amount owed to the clinic and provider.

Click **Transfer**. Positive and negative paysplits are created for each credit that is allocated to an outstanding charge.

Note:

* When the [Allocations Setup](allocationssetup.html) *Paysplit* setting is set to *Rigorous*, transfers that include paysplits without an adjustment, procedure, or unearned type are not allowed. Use the Income Transfer Manager instead.
* If you receive a warning message and/or the income transfer cannot be completed, see [Income Transfer Manager](incometransfermanager.html) for troubleshooting steps.

![](images/incomeTransferCurrentPaySplits.png)

Click **OK** on the Payment window to complete the transfer. The account balance of each family member included in the transfer increases or decreases by the transfer amount.

![](images/incomeTransferFamBal.png)

## Completed Transfers

Income transfers show as blank payment items with a Txfr code on the Patient Account. Only one, zero credit line item shows if income is transferred from procedure to procedure under the same patient and clinic/provider combination. If income is transferred between multiple patients, and clinics/providers, a Txfr shows for the total negative amount transferred from each patient/clinic/provider combination, and for the total positive amount transferred to each combination.

![](images/incomeTransferTxfrLine.png)

Transfers also show on reports affecting income allocation only; they do not increase or decrease the total practice income.

## Detaching Payment from a Treatment Planned Prepayment

If payment was allocated to a treatment planned procedure that is no longer to be completed, the payment must be detached from the procedure before the procedure can be deleted.

1. In the Hidden Splits tab, double-click the Treatment Plan Prepayment.
2. Double-click the payment split for the procedure that is no longer to be completed.
3. Click **Detach**. The payment split is still attached as a Treatment Plan Prepayment and to the same provider, but is no longer connected to the procedure.
4. If another procedure is being done in the original procedure's place, click **Attach**:
   1. Select the new procedure.
   2. Click **OK**.
5. Click **OK**.
6. Repeat the steps for any additional procedures on the payment.
7. Click **OK** to close the Payment window.

The treatment planned procedures that are no longer to be completed can now be deleted.