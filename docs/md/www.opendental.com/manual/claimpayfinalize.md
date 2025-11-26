Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Finalize Insurance Payment

Finalize a insurance payment on a claim after receiving an EOB.

In the [Edit Claim](claimedit.html) window, in the middle, is the Insurance Payments area.

![](images/claimPaymentFinalize.png)

![](images/youtubeLogo.png) See our Webinar: [Claim Payments](https://youtu.be/eiMgxXTqkn8).

**Batch**: Click to finalize a bulk insurance payment attached to multiple claims. See Finalizing a Bulk Insurance Payment below for detailed steps.

**This Claim Only**: Click to finalize payment for a single claim. See Finalizing a Single Claim below for detailed steps.

Enable *Warn users to finalize payments for received claims* in [Preferences](preferences.html) to warn users there are unfinalized payments when saving a [Received Claim](claimreceive.html).

## Finalizing a Single Claim

To finalize insurance claim payment for a single claim, follow the steps below:

1. [Receive Claim](claimreceive.html) payment.
2. From the received claim, click **This Claim Only**.
3. Enter payment details into [Edit Insurance Payment](editinspayment.html).
4. If processing a virtual credit card payment, click the button for the credit card processor and follow the prompts to process payment.
5. Click **Save**.
6. *Optional*: [Scan EOB](claimpaymenteobscan.html) to attach it to the payment.
7. Click **Save** on the [Insurance Payment (EOB)](inspayeob.html) window to finish finalizing payment.

## Finalizing a Bulk Insurance Payment

To finalize bulk insurance payment attached to multiple claims follow the steps below:

1. Receive claim payment for all claims on the EOB.
2. After receiving the last claim on the EOB, click **Batch** from the [Claim](claimedit.html).
3. Enter payment details into Edit Insurance Payment.
4. If processing a virtual credit card payment, click the button for the credit card processor and follow the prompts to process payment.
5. Click **Save**.
6. From the Insurance Payment (EOB) window, verify the claims in the Attached to this Payment grid match the claims on the EOB.
   * All claims that have not been attached to a payment appear here. Claims that are not part of the EOB currently being finalized should be detached. See Troubleshooting below for additional details.
   * The *Amount* and *Total Payments* should match if the correct claims are attached.
7. Verify Payment Details.
8. *Optional*: Scan the EOB to attach it to the payment.
9. Click **Save** to finish finalizing payment.

Alternatively, batch insurance payments can be finalized from the [Manage Module](manage.html) using the [Batch Insurance Payment](claimpaymentbatch.html) feature. If  *Finalize claim payments in Batch Insurance window only* is enabled in [Preferences](preferences.html), all insurance payments must be finalized from the Manage Module using the Batch Insurance Payment feature.

## Troubleshooting

**When trying to finalize a $0 payment I get a warning.**

![](images/zeroDollarClaimPay.png)

If the preference, *Show claims received after days (blank to disable)*, is blank, users cannot finalize any $0 payments. Enter a number into this preference in order to finalize $0 insurance payments. Insurance payments can be finalized for the number of days entered into the preference.

After that time, the preference must be increased (not recommended) or a $0 supplemental payment can be added to finalize if needing to scan an EOB.

This warning does not appear when finalizing payment using using the **Batch** button from a claim if there are other unfinalized payments, and $0 payments are not included in the batch. To finalize a bulk EOB with $0 payments, use the Batch Insurance Payment feature from the Manage Module instead.

**When entering a batch insurance payment, the default amount is too big and does not match the EOB amount.**

This occurs when other claims have been received, but not finalized. All received claims not finalized are automatically included in the total amount calculation, and users see the claims listed in the Attached to this Payment grid.

1. For this payment, manually change the amount to match the EOB. Click **Save** on the Edit Insurance Payment window.
2. Click **OK** on the warning.

   ![](images/insPayFinalizeWarning.png)
3. Manually detach claims not tied to this payment by selecting claim(s) and clicking **Detach**.

   ![](images/insPayFinalizeDetach.png)
4. Once only the correct claims are attached, click **Save** to finish finalizing the payment.

Note: Users should go back to detached claims and ensure payment is finalized. Run the [Unfinalized Insurance Payment Report](reportunfinalizedinsurancepayments.html) to find received claims not attached to an insurance payment.

If payment is always finalized immediately after receiving claims, the amounts and claims when clicking Batch are always accurate, reducing data entry.

Insurance payments that haven't been finalized are indicated with a note in the account module:

![](images/claimNotFinalized.png)

**What if I cannot receive all of the claims that make up my bulk check/payment and I need to leave for the day?**

Do not finalize the payment until all claims have been recieved. This way all claim payments have the same payment date.

**I have a bulk payment but the carrier is taking back money from a previous claim. How do I enter the claim?**

See [Insurance Refunds](insurancerefunds.html).