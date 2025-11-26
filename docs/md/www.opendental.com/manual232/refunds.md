Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Refund

Easily create refunds for various scenarios from the Account Module.

In the [Account Module](account.html), right-click an existing payment. In the dropdown, click **Refund**.

![](images/refundPatient.png)

Alternatively, users can create a negative [Payment](payment.html) to process a refund.

There are few scenarios when processing a refund for a patient. The process varies depending on whether work was done, not done, overpaid, or returned.

Also see,

* ![](images/youtubeLogo.png) See our video: [QuickTip: Patient Refunds](https://youtu.be/fbEG5iZcRcM)
* [CareCredit Refund](carecreditrefund.html)
* [Patient Portal Refunds](patientportaltransactions.html)
* [Account Module](account.html), Right-click options

We typically recommend using a payment type of *Patient Refund* ([Definitions: Payment Types](definitionspaymenttypes.html)), so refunds can be excluded from the payment reports and deposits as needed.

Users may want to consider performing an [Income Transfer](incometransfer.html) to ensure all payments, including refunds are allocated properly.

## Patient Overpayment

When a procedure has been overpaid by the patient, do the following:

1. Right-click the original payment, and select **Refund**.
   * Alternatively, users can click **Payment** from the Account Module and enter the refund manually as a negative amount (e.g. -100).
   * If creating a partial refund, adjust the total payment (i.e. refund) amount.
2. Verify the [Paysplit](paysplit.html) information.
   * The paysplits should generally match the original payment being refunded, unless the payment has since been transferred. If the payment was transferred, ensure the paysplits are attached to the production, provider, or unearned type where the income is currently being applied or allocated.
   * If creating a partial refund, edit the payment splits (i.e., remove or change any paysplits as needed) to match the total payment amount.
3. Verify or enter any payment information (Check #, Notes, Payment Type, etc). For card payments, see [Credit Card Return](paymentreturn.html). ACH transactions cannot be refunded.
4. Click **OK** to finalize the refund.

![](images/refundPatOverpay.png)

## Work Not Performed

When a procedure was set complete but the work was not actually performed on the patient, do the following:

1. Credit the fee of the procedure to be refunded back to the account. (Skip if refunding an [Unearned / Prepayment](unearnedprepayment.html))
   1. Highlight the procedure.
   2. Click **Adjustment**.
   3. Enter the amount and select a subtraction adjustment type.
   4. Click **OK** to credit the account.
2. Create the refund payment.
   * If refunding a full payment that has not been transferred:
     1. Right-click the original payment.
     2. Click **Refund**.
     3. The payment window will open with a negative payment matching the same amount of the original payment with negative paysplits.html matching the original payment will automatically be created. Verify the paysplits.
   * If refunding a partial payment (e.g., payment was split to multiple procedures) or a payment that was transferred:
     1. Click Payment.
     2. Enter the refund as a negative amount (e.g., -100).
     3. Create paysplits that match the original payment to be refunded (e.g., if the payment was originally attached to a specific procedure, attach the paysplit being refunded to the same procedure) or if the payment was transferred create paysplits to refund where the income is currently being allocated.
3. Process the refund using the original payment method. Verify the payment type, enter the check number or for card payments, see Credit Card Return. ACH transactions cannot be refunded.
4. Click **OK** to finalize the refund.

## Product or Service Return

If a patient purchased a service or product and is now returning it or would like to be refunded, follow these steps to refund the payment and zero out any charge.

1. Credit the fee of the procedure to be refunded back to the account.
   1. Highlight the procedure.
   2. Click **Adjustment**.
   3. Enter the amount and select a subtraction adjustment type.
   4. Click **OK** to credit the account.
       The return can be left as a credit on the patient's account or if the patient has other balances outstanding, the credit can be transferred using the [Income Transfer Manager](incometransfermanager.html) or a manual [Income Transfer](incometransfer.html). To refund the patient:
2. To refund the patient:
   * If refunding a full payment that has not been transferred:
     1. Right-click the original payment
     2. Click **Refund**.
     3. The payment window will open with a negative payment matching the same amount of the original payment with negative paysplits.html matching the original payment will automatically be created. Verify the paysplits.
   * If refunding a partial payment (e.g., payment was split to multiple procedures) or a payment that was transferred:
     1. Click Payment.
     2. Enter the refund as a negative amount (e.g., -100).
     3. Create paysplits that match the original payment to be refunded (e.g., if the payment was originally attached to a specific procedure, attach the paysplit being refunded to the same procedure) or if the payment was transferred create paysplits to refund where the income is currently being allocated.
3. Process the refund using the original payment method. Verify the payment type, enter the check number or for card payments, see Credit Card Return. ACH transactions cannot be refunded.
4. Click **OK** to finalize the refund.

## Warranty Credit

If a procedure needs to be warrantied (e.g., patient paid for a filling that fell out and it needs to be redone). The patient is not going to be refunded any money, but the procedure is being redone at no charge, follow the steps below:

If the procedure is being redone by the same provider or payment does not need to be transferred to the new procedure:

1. Chart the warranty procedure.
2. Add a subtraction adjustment to the new procedure.

1. Click **Adjustment**.
2. Enter the amount and select a subtraction adjustment type.
3. Click **OK** to credit the account.

If the procedure is being redone by a different provider and payment should be transferred to the new provider

1. Chart the warranty procedure.
2. Add a subtraction adjustment to the original procedure.
   1. Click **Adjustment**.
   2. Enter the amount and select a subtraction adjustment type.
   3. Click **OK** to credit the account.
3. Complete an [Income Transfer](incometransfer.html) to reallocate payment to the new procedure.
   1. Click **Payment**.
   2. Enter $0 as the payment amount.
   3. Check None (Income Transfer) as the payment type.
   4. Click **Add Split**.
      1. Attach the paysplit to the original procedure.
      2. Enter a negative amount equal to *Patient Paid* on the original procedure.
      3. Click **OK** to save the paysplit.
   ![](images/refundPatWarrantyTransfer.png)5. Click **Add Split** again to create a positive paysplit towards the new procedure.
      1. Attach the paysplit to the new procedure.
      2. Enter a positive amount matching the other paysplit that was created (e.g., if the other paysplit was -50, enter 50)
   6. Click **OK** to save the positive paysplit and go back to the payment window. *Current Payment Splits* should total 0.00.
4. Click **OK** to complete the income transfer.

![](images/refundPatWarrantyTransferOK.png)

If the original procedure had insurance income, this cannot be transferred using an income transfer. An insurance claim will need to be created for the new procedure in order to allocate the insurance income. See [Insurance Refunds](insurancerefunds.html): Allocate to a different claim.