Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Insurance Refunds

If insurance overpays on a [Claim](claimedit.html), they may either request a refund check or allocate the overpayment to another claim.

## Refund via check

1. In the [Account Module](account.html), double-click on the claim.
2. Highlight the procedure to be refunded
3. Click [Supplemental](claimpaymentsupplemental.html) at the upper right.
4. Enter the refund amount as a negative amount for Ins Pay (e.g. -10), then click **Save**.
![](images/insRefundEnterPay.png)5. In the [Claim](claimedit.html), click **This Claim Only**.
6. Enter any needed check information and enter the payment amount as a negative (e.g. -10).

   ![](images/insRefundClaimCheck.png)
7. Complete the rest of the payment as normal. See [Finalize Insurance Payment](claimpayfinalize.html).

   Note:
   * Offices may wish to create a new [Insurance Payment Type](inspaytypes.html) for Insurance Refund checks to avoid incorrect totals if using [Deposit Slips](depositslip.html).
   * If a payment is being refunded due to eligibilty, additional supplemental payments may be needed to adjust off write-offs as well.

This corrects the patient account balance making the patient responsible for the previous overpayment. If the patient is not responsible for the balance, enter a subtraction [Adjustment](adjustments.html) to remove the amount from the account balance.

![](images/refundInsuranceClaim.png)

## Allocate to a different claim

There are times when instead of having an office send a refund check back to the carrier, the carrier deducts the overpayment from another claim payment. This may be on a future claim from the same patient or an entirely different patient, but the process is still the same.

A negative supplemental payment is entered into the overpaid claim (as described above), but instead of finalizing a negative payment, the payment is batched together with the positive payment.

1. Double-click the claim that was overpaid and needs to be refunded.
2. Follow steps 1-4 from Refund via Check above to enter the overpayment as a negative supplemental payment.
3. Create a Batch Insurance check from the Manage Module using the **Batch Ins** button.
4. Attach the refunded claim to the bulk payment.
5. Receive all other claims on the EOB and attach them to the payment. (See:[Batch Insurance Payment](claimpaymentbatch.html) for detailed instructions.)
6. Once all claims on the EOB are received, the total payments of the attached claims should match the amount of the payment. The payment is already finalized.

   ![](images/insRefBatchFinalize.png)