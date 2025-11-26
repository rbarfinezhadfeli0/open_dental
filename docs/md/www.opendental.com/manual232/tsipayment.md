Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

TSI Payments

When a payment is made to an account that is managed by [TSI Collections](tsicollections.html) services, you will enter the [Payment](payment.html) in Open Dental as normal.

* Payments may be made to TSI, who will then send the payment to you for you to enter.
* If a guarantor pays you directly, you can also enter the payment. The information will be sent to TSI using the OpenDentalService at the regular *sync* time.

Note:

* It is recommended to create a payment type and adjustment type specific to TSI.
* Positive and negative adjustment information is sent to TSI using the *OpenDentalService* at regular sync time.

## Payments made by TSI

When a patient pays TSI, TSI will send the payment to the office after collecting their portion.

1. Go to the patient's account.
2. Click *Payment*. You will get the following message:
   ![](images/tsiGuarantorMsgNo.png)
3. Select *No*. This will prevent a message about the payment from being sent to TSI.
4. Enter the amount and complete the payment as usual.
5. In the patient's account, click *Adjustments*. You will get the following message:
   ![](images/tsiGuarantorMsgAdjNo.png)
6. Select *No*. This will prevent a message about the adjustment from being sent to TSI.
7. Add a *negative adjustment* reflecting the portion of the payment kept by TSI. The adjustment type used must not be excluded in [TSI Setup](tsisetup.html). Complete the adjustment as usual.

## Payments made by Patient (directly to office)

When a patient pays the office, a message is automatically sent to TSI so they have a record of the payment. The office will send the agreed portion of the payment to TSI.

1. Go to the patient's account.
2. Click *Payment.*You will get the following message:
   ![](images/tsiGuarantorMsg.png)
3. Select Yes. This will send a message to TSI about the payment.
4. Enter the full payment amount and complete the payment as usual.

## If TSI Sends an Invoice

When a payment is made directly to an office by a patient, TSI will send an invoice to inform the office of TSI's portion. When this occurs, continue with the following:

1. Click Payment again to enter TSI's portion.
2. When prompted with the message above, select No.
3. Enter the portion sent to TSI as a negative amount. (e.g. -100.00) Complete the payment as usual.
4. In the patient's account, click Adjustments. You will get the following message:
   ![](images/tsiGuarantorMsgAdj.png)
5. Select No. This will not send a message to TSI about the adjustment.
6. Add a negative adjustment reflecting the portion of the payment kept by TSI. The adjustment type used must not be excluded in TSI Setup. Complete the adjustment as usual.