Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Batch Insurance Payment

Easily manage and enter batch insurance payments from the Batch Insurance Payments window.

In the [Manage Module](manage.html), click **Batch Ins**.

![](images/claimpaymentBatch.png)

This window is for entering a large batch of claims on a single EOB. For a smaller batch or single claim, see [Finalize Insurance Payment](claimpayfinalize.html)

Large batch insurance payment entry is useful when there are many claims on a single EOB or when multiple users enter payments at the same time. There are two different ways to enter large batch payments.

* In the [Manage Module](manage.html), Batch Ins, create the payment, then receive and attach claims.
* In the [Account Module](account.html), receive the claims (see [Receive Claim](claimreceive.html)). Then in the Manage Module click Batch Ins to create the payment and attach the claims.

Supplemental payment amounts can only be received in the Account Module. See [Supplemental Insurance Payments](claimpaymentsupplemental.html). Once received, it can be attached to a batch payment.

## Batch Insurance Payments

**Filters**: Click **Refresh** to update the Insurance Payments (EOBs) grid after setting filter criteria

![](images/batchInsFilter.png)

* **From/To Date**: Filters by Payment Date.
* **Clinic**: Filters by Clinic assigned to payment. If a user is restricted to specific clinics, only accessible clinics are listed.
* **Payment Group**: Filters by Claim Payment Group. This option is only visible when [Definitions: Claim Payment Groups](definitionsclaimpaymentgroups.html) are in use.

**Insurance Payments (EOBs)** Grid: Insurance payments that match the filter criteria are listed here.

![](images/batchInsEOBGrid.png)

* Date: Payment Date.
* Type: Payment Type. ([Definitions: Insurance Payment Types](inspaytypes.html))
* Amount: Payment Amount.
* Partial: X indicates *Total Payments* of attached claims do not match the payment *Amount*
* Carrier: Insurance Carrier Name.
* PayGroup: Claim Payment Group. Column is hidden if [Definitions: Claim Payment Groups](definitionsclaimpaymentgroups.html) are not in use.
* Clinic: Clinic assigned to the payment.
* Note: Payment note.
* Scanned: X indicates an EOB has been scanned or attached. See [Scan EOB](claimpaymenteobscan.html).

**Add**: Click to open [Edit Insurance Payment](editinspayment.html) and enter payment details for a new Batch Insurance Payment. See Creating a Payment and Attaching Claims below.

## Creating a Payment and Attaching Claims

To create a new Batch Insurance Payment and attach claims, follow the steps below:

1. In the Batch Insurance Payments window, click **Add**.
2. Enter payment details into [Edit Insurance Payment](editinspayment.html).
3. If processing a virtual credit card payment, click the button for the credit card processor and follow the prompts to process payment.
4. Click **Save**.
5. From the [Insurance Payment (EOB)](inspayeob.html) window, search for and select a claim to attach to the payment.
   * If the claim is already received (e.g., supplemental payment), click **Attach** and proceed to Step 6.
   * If the claim has not yet been received:
     1. Double-click the [Claim](claimedit.html) to open.
     2. [Receive Claim](claimreceive.html) **By Procedure** or **As Total**.
     3. Enter payment amounts and click **Save** on the Enter Payment window.
     4. Click **Save** on the Edit Claim window. The claim is automatically attached to the batch insurance payment.
6. Repeat step 5 as needed to attach additional claims to payment.
7. Click **Scan EOB** to upload or [Scan an EOB](claimpaymenteobscan.html).

If Amount and Total Payments match when exiting the Insurance Payment window, the payment is locked. The payment must be deleted and re-entered to make changes or see Correct a Batch Payment below.

If *Amount* and *Total Payments* don't match, then exiting marks the batch payment as *Partial*. Double-click a partial batch payment from the Batch Insurance Payments window to continue attaching claims.

![](images/claimBatchDone.png)

Batch insurance payments can be accessed from the Batch Insurance Payments window or viewed by claim via the Account Module (Edit Claim window).

## Correct a Batch Payment

1. In the Manage Module, click **Batch Ins**.
2. Find the check to edit, and double-click to open it.
3. Click **Edit** in the Payment Details area.
4. Change the amount of the check by a penny and click **Save**. This causes a mismatch between the paid amounts and check amount. When prompted, click **OK** to continue.
5. Re-open the payment. Detach/attach claims as needed.
   * Double-click claims to open [Edit Claim](claimedit.html) and edit payment information as needed.
6. Once claims have been edited, reattach them to the payment.
7. Edit the payment amount so the check total matches the paid amounts.
8. Close the check to finalize again.

## Questions & Answers

**What if I cannot enter (receive) all of the claims that make up my bulk check/payments and I need to leave for the day?**

Do not finalize the payment until you finish receiving all the claims. This way all claim payments have the same payment date.

**We have multiple people entering payments. How can we make sure the payments balance?**

Assign payment groups to each payment. This groups payments together. Then run the [Daily Payments Report](reportdailypayments.html) by payment group.