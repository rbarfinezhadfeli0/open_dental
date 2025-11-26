Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Edge Express

In the [Payment](payment.html) window, in the [Credit Card Payment](paymentpatientcreditcard.html) area, click **Global Payments Integrated**.

![](images/edgeExpressTransactionTypes.png)

## EdgeExpress Transaction Types

Select the transaction to process, then the card entry method.

**Card Entry Method**:

* Terminal: Use the terminal to swipe the patient's card.
* Web Service: Type in the patient's card number and expiration date.

**Transaction Types**: Refer to the OpenEdge user manual for details on each type.

* Purchase: A standard credit card charge. See [Credit Card Payment](paymentpatientcreditcard.html).
* Return: Credits the amount of the transaction to the card. See [Credit Card Return](paymentreturn.html).
* Void: Reverse a sale the same day it was made.

**Save Token**: Securely store the credit card number and expiration date as a token for future use. Set the default in Preferences, *Automatically store credit card tokens*.

**Prompt for Signature**: Prompt patients for a signature on the credit card terminal before completing the transaction. Terminal must support electronic signature capabilities.

**Print Receipt**: Automatically print a receipt to the default receipt printer when the transaction is completed.

Click **OK** to continue the transaction.

## Additional Resources

Related Links:

* [Edge Express Add Card](edgeexpressaddcard.html)
* [EdgeExpress Setup](edgeexpresssetup.html)