Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

PayConnect Window

Use the PayConnect Payment window to take payments, add new cards, void a transaction, or process a return.

In the [Payment](payment.html) window, click **PayConnect**.

![](images/payConnect20Payment.png)

Alternatively, when finalizing an insurance payment, in the Edit Insurance Payment window, click **PayConnect**.

PayConnect is an integrated [Credit Card Payment](paymentpatientcreditcard.html) program that can be used to process credit and debit card transactions. Options vary depending on if the practice/clinic has set up PayConnect 1.0 or PayConnect 2.0. See [PayConnect Setup](payconnectsetup.html) for additional information.

Website: <http://www.dentalxchange.com>. Only available to U.S. customers.

## Pay Connect 2.0

If using PayConnect 2.0, the interface shown at the top of this page appears.

**Transaction Type**: Choose the type of transaction to process.

* Sale: A standard credit card charge.
* Auth: Add a new card. See [PayConnect Add Card](payconnectaddcard.html).
* Void: Reverse a sale soon after (same day) it was made. See [PayConnect Void](payconnectvoid.html).
* Return: Reverse a sale one or more days after it was made. See [Credit Card Return](paymentreturn.html).

**Processing Method**: Only appears when a terminal is enabled. If no terminal is enabled, Web Service is used as the processing method. Choose the method to enter and process payment information.

* Web Service: Select to enter payment details manually through the PayConnect WebService. If adding a new card, the [PayConnect Add Card](payconnectaddcard.html) interface is displayed on the right.
* Terminal: Select to process a payment using a credit card terminal.

**Terminal for Transaction**: Enabled only when using Terminal as the processing method. Select the credit card terminal device to use for this transaction (i.e., used to process a physical credit card).

**Amount**: The transaction amount. For web service transactions with an existing card or terminal transactions, the amount in the payment window is automatically updated if this is changed. For web service transactions with a new card, click **Refresh** to update the amount before entering card information.

**Reference Number**: Unique identifier for a transaction. Used for [Credit Card Returns](paymentreturn.html) and [PayConnect Voids](payconnectvoid.html).

**Save Card**: Securely store the credit card number and expiration date as a token for future use. If the preference, *Automatically store credit card tokens*, is enabled this box is checked by default.

**Signature Box**: Patient may sign the transaction (optional) and the signature is stored with PayConnect.

Click **Save** to process payment.

## Pay Connect 1.0

If using PayConnect 1.0, the interface shown below appears when processing a payment.

![](images/payconnect.gif)

**Transaction Type**:

* Sale: A standard credit card charge.
* Auth: Add a new card. See [PayConnect Add Card](payconnectaddcard.html).
* Void: Reverse a sale soon after (same day) it was made. See [PayConnect Void](payconnectvoid.html).
* Return: Reverse a sale one or more days after it was made. See [Credit Card Return](paymentreturn.html).

**Card Number**: Place the cursor in the field then process using the terminal or type the credit card number.

**Security Code**: Enter the security code from the back of the credit card. When the card is processed using the terminal or selecting a card on file from the Payment window, the security code auto-populates.

**Expiration (MMYY)**: Enter the credit card expiration date. When the card is processed using the terminal or selecting a card on file from the Payment window, the expiration date auto-populates.

**Zip Code**: Enter the zipcode of the cardholder's billing address. When the card is processed using the terminal, the zip code auto-populates. When using a card on file, the zip code stored in [Credit Card Manage](creditcardsmanage.html) auto-populates this field.

**Name On Card**: Auto-populates with the selected patient's name or, when the card is processed using the terminal or selecting a card on file from the Payment window, the cardholder's name.

**Amount**: The transaction amount entered in the payment window. To edit, cancel the transaction and enter the correct amount in the payment window.

**Save Token**: Securely store the credit card number and expiration date as a token for future use.

* When the Default Processing Method is set to *Web Service*, *Automatically store credit card tokens* can be enabled in [Preferences](preferences.html) to check this box by default.
* When the Default Processing Method is set to *Terminal*, tokens can only be saved from [Credit Card Manage](creditcardsmanage.html).

**Force Duplicate**: Determines if a transaction on the same card, for the same amount, on the same day may be approved. Check to allow a duplicate transaction, uncheck to decline duplicates. Set the default in [PayConnect Setup](payconnectsetup.html).

**Signature Box**: Patient may sign the transaction (optional) and the signature is stored with PayConnect. See [Electronic Signatures](electronicsignatures.html) for signature capture options.

## Receipts

Merchant receipts are automatically printed after any transaction is processed through PayConnect, using the *Receipts* printer defined in [Printer Setup](printersetup.html).

## EMV Transactions

Credit cards with computer chips (EMV transactions) are supported for PayConnect but credit card tokens are only saved for PayConnect 2.0 transactions. For PayConnect 1.0, tokens are not saved.

## Troubleshooting

When processing a payment on a terminal through Open Dental:

* The payment window does include an option for *Terminal*. Ensure *Terminal* is selected for payments.
* The terminal screen displays *DentalXChange Welcome*. Press F4 to ensure the terminal is in DentalXChange mode.