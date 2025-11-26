Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Edge Express

Use Edge Express to process payments directly in Open Dental.

In the [Payment](payment.html) window, in the [Credit Card Payment](paymentpatientcreditcard.html) area, click **Global Payments Integrated**.

![](images/edgeExpressTransactionTypes.png)

Alternatively, in [Edit Insurance Payment](editinspayment.html), click Global Payments Integrated to process a Virtual Credit Card Payment.

Website: <https://www.globalpaymentsintegrated.com>.

## EdgeExpress Transaction Types

Select the Card Entry Method, then choose a Transaction Type.

**Transaction Types**: Refer to the OpenEdge user manual for details on each type.

* Purchase: A standard credit card charge. See [Credit Card Payment](paymentpatientcreditcard.html).
* Return: Credits the amount of the transaction to the card. See [Credit Card Return](paymentreturn.html).
* Debit Purchase: Only available for terminal transactions. Process a payment to a debit card. Requires debit PIN to be entered on terminal. Otherwise, use *Purchase*.
* Debit Return: Only available for terminal transactions. Process a refund to a debit card. Requires the card to be present at the terminal. Otherwise, use *Return*.
* Force: Not used.
* Pre-Authorization: Not used.
* Void: Reverse a sale the same day it was made.

**Card Entry Method**:

* Terminal: Use the terminal to process payment with a physical card.
* Web Service: Manually type in the credit card number and expiration date.

**Save Token**: Securely store a patient credit card number and expiration date in [Credit Card Manage](creditcardsmanage.html) as a token for future use. Set the default in Preferences, *Automatically store credit card tokens*.

**Prompt for Signature**: Prompt patients for a signature on the credit card terminal before completing the transaction. Terminal must support electronic signature capabilities.

**Print Receipt**: Automatically print a receipt to the default receipt printer once the transaction is complete.

Click **OK** to continue the transaction.

## Additional Resources

Related Links:

* [Edge Express Add Card](edgeexpressaddcard.html)
* [EdgeExpress Setup](edgeexpresssetup.html)