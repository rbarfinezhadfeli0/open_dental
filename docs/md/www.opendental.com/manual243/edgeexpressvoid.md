Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EdgeExpress Void

In the [Payment](payment.html) window, click **Global Payments Integrated** ([Edge Express](edgeexpress.html)). Select *Void* from the list of transaction types.

![](images/edgeExpressVoid.png)

Voiding [Edge Express](edgeexpress.html) credit card transactions removes the original transaction from the patient's bank the same day. Transactions may only be voided before they are batched. If a transaction has been batched, process a [Credit Card Return](paymentreturn.html) instead. Returns require a few days to process.

## Void an EdgeExpress Transaction

1. Locate the original transaction to be voided. Copy the *Transaction ID* from the Payment Note, then identify the payment amount and the clinic, provider, and procedure or unearned type allocation.
2. In the patient's account, click **Payment**.
   * Alternatively, if voiding a payment, right-click the original payment, choose **Refund**, and go to Step 5.
3. Enter an amount matching the original transaction.
   * If voiding a payment, enter the amount as negative (e.g., -25).
   * If voiding a refund, enter the amount as a positive (e.g., 25).
4. Click **OK** to open the [Payment](payment.html) window.
   * **Clinics**: If using [Clinics](clinics.html), select the clinic of the original payment.
   * **Current Payment Splits**: Allocate the void's payment split ([Paysplit](paysplit.html)) to the production or unearned type of the original payment. See [Paysplit Revise](paysplitsedit.html).
5. After verifying the paysplits, click **Global Payments Integrated**. The original card is not required and the card selection in the Credit Card dropdown is ignored.
   * If using right-click, Refund, paysplits are added automatically to match the original payment.
6. In the EdgeExpress Transaction Types window, Select *Void* and enter the *Transaction ID*.
7. Click **OK** to process the void. The payment window immediately closes if the void was successful, and the transaction details are automatically added to the payment note. If the void is unsuccessful, the payment window remains open and the note field contains the response, date and time information, and Notes field from EdgeExpress.

Note: It is recommended to run the [Income Transfer Manager](incometransfermanager.html) after the payment window has closed. This is to ensure the void is properly allocated.