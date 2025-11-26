Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

TSI Payments

When a payment is made to an account that is managed by [TSI Collections](tsicollections.html) services, enter the [Payment](payment.html) in Open Dental as normal.

* Payments may be made to TSI, who then sends the payment to to be entered by the office.
* If a guarantor pays the office directly, payment can also be entered. The information is sent to TSI using the [Open Dental Service](opendentalservice.html) at the regular *sync* time.

Note:

* It is recommended to create a [Payment Type](definitionspaymenttypes.html) and [Adjustment Type](definitionsadjtypes.html) specific to TSI.
* Positive and negative adjustment information is sent to TSI using the *OpenDentalService* at regular sync time.

## Payments made by TSI

When a patient pays TSI, TSI sends an invoice with payment to the office after collecting their portion.

1. Go to the patient's [Account](account.html).
2. If the patient's balance was adjusted off using the *Exclude Negative Adj Type* set in TSI Setup, the balance must be adjusted back onto the account using the Exclude Positive Adj Type.
   1. Click Adjustment.
   2. There is a prompt to confirm if the adjustment is being applied by the office. Click **Yes**.
   3. Enter an adjustment amount that matches the payment amount.
   4. Select the *Exclude Positive Adj Type* from the Addition adjustments list.
   5. Click **Save** to create the adjustment.
3. Click **Payment.** There is a prompt to determine if the payment was received from TSI or the patient
![](images/tsiGuarantorMsgNo.png)4. Select **No** to indicate the payment was made by TSI. This prevents a message about the payment from being sent to TSI.
5. Enter the payment amount and complete the payment as usual.
6. In the patient's account, click **Adjustment**. There is a prompt to determine if the adjustment is being applied by the office or is a result of payment from TSI.
![](images/tsiGuarantorMsgAdjNo.png)7. Click **No** to indicate the adjustment is being added as a result of payment received from TSI. This prevents a message about the adjustment from being sent to TSI.
8. Add a subtraction adjustment reflecting the portion of the payment kept by TSI. The adjustment type used must not be excluded in [TSI Setup](tsisetup.html). Complete the adjustment as usual.

## Payments made by Patient (directly to office)

When a patient pays the office, a message is automatically sent to TSI. TSI then sends an invoice to the office.

**Enter the Payment**:

1. Go to the patient's account.
2. If the patient's balance was adjusted off using the *Exclude Negative Adj Type* set in TSI Setup, the balance must be adjusted back onto the account using the Exclude Positive Adj Type.
   1. Click Adjustment.
   2. There is a prompt to confirm if the adjustment is being applied by the office. Click **Yes**.
   3. Enter an adjustment amount that matches the payment amount.
   4. Select the *Exclude Positive Adj Type* from the Addition adjustments list.
   5. Click **Save** to create the adjustment.
3. Click **Payment**. There is a prompt to determine if the payment was received from TSI or the patient.
![](images/tsiGuarantorMsg.png)4. Click **Yes** to indicate the payment was received from the patient (or guarantor). This sends a message to TSI about the payment.
5. Enter the full payment amount and complete the payment as usual.

**Process TSI Invoice**:

After message of the payment is sent to TSI, they send an invoice with information about TSI's portion of the payment. Follow the steps below after receiving the invoice:

1. Go to the patient's account.
2. Click **Payment** to enter TSI's portion. There is a prompt to determine if the payment was received from TSI or the patient.
3. Click No to indicate the payment is from TSI.
4. Enter the portion sent to TSI as a negative amount. (e.g., -100.00) Complete the payment as usual.
5. In the patient's account, click Adjustments. There is a prompt to confirm if the adjustment is being applied by the office:
![](images/tsiGuarantorMsgAdj.png)6. Click **No** to indicate the adjustment is being added as a result of a payment. This prevents a message about the adjustment from being sent to TSI..
7. Add a subtraction adjustment reflecting the portion of the payment kept by TSI. The adjustment type used must not be excluded in TSI Setup. Complete the adjustment as usual.