Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

PayConnect Window

Use the PayConnect Payment window to take payments, add new cards, void a transaction, or process a return.

In the [Payment](payment.html) window, click **PayConnect**.

![](images/payconnect.gif)

Alternatively, when finalizing an insurance payment, in the Edit Insurance Payment window, click **PayConnect**.

PayConnect is an integrated [Credit Card Payment](paymentpatientcreditcard.html) program that can be used to process credit and debit card transactions. Options vary depending on if the practice/clinic has set up PayConnect 1.0 or PayConnect 2.0. See [PayConnect Setup](payconnectsetup.html) for additional information.

Website: <http://www.dentalxchange.com>. Only available to U.S. customers.

## Pay Connect 1.0

If using PayConnect 1.0, the interface shown at the top of this page appears.

**Transaction Type**:

* Sale: A standard credit card charge.
* Auth: Add a new card. See [PayConnect Add Card](payconnectaddcard.html).
* Void: Reverse a sale soon after (same day) it was made. See [PayConnect Void](payconnectvoid.html).
* Return: Reverse a sale one or more days after it was made. See [Credit Card Return](paymentreturn.html).

**Card Number**: Place the cursor in the field then process using the terminal or type the credit card number.

**Security Code**: Enter the security code from the back of the credit card. When the card is processed using the terminal the security code auto-populates.

**Expiration (MMYY)**: Enter the credit card expiration date. When the card is processed using the terminal, the expiration date auto-populates.

**Zip Code**: Enter the zipcode of the cardholder's billing address. When the card is processed using the terminal, the zip code auto-populates. When using a card on file, the zip code stored in [Credit Card Manage](creditcardsmanage.html) auto-populates this field.

**Name On Card**: Auto-populates with the selected patient's name or, when the card is processed using the terminal, the cardholder's name.

**Amount**: The transaction amount entered in the payment window. To edit, cancel the transaction and enter the correct amount in the payment window.

**Save Token**: Securely store the credit card number and expiration date as a token for future use.

* When the Default Processing Method is set to *Web Service*, *Automatically store credit card tokens* can be enabled in [Preferences](preferences.html) to check this box by default.
* When the Default Processing Method is set to *Terminal*, tokens can only be saved from [Credit Card Manage](creditcardsmanage.html).

**Force Duplicate**: Determines if a transaction on the same card, for the same amount, on the same day may be approved. Check to allow a duplicate transaction, uncheck to decline duplicates. Set the default in [PayConnect Setup](payconnectsetup.html).

**Signature Box**: Patient may sign the transaction (optional) and the signature is stored with PayConnect. See [Electronic Signatures](electronicsignatures.html) for signature capture options.

## Pay Connect 2.0

If using PayConnect 2.0, the interface shown below appears when processing a payment.

![](images/payConnect20Payment.png)

**Transaction Type**: Choose the type of transaction to process.

* Sale: A standard credit card charge.
* Auth: Add a new card. See [PayConnect Add Card](payconnectaddcard.html).
* Void: Reverse a sale soon after (same day) it was made. See [PayConnect Void](payconnectvoid.html).
* Return: Reverse a sale one or more days after it was made. See [Credit Card Return](paymentreturn.html).

**Processing Method**: Choose the method to enter and process payment information.

* Web Service: Select to enter payment details manually through the PayConnect WebService. If using a card on file, click OK to process payment. If adding a new card, click OK to launch the [PayConnect Add Card](payconnectaddcard.html) interface.
* Terminal: Select to process a payment using a credit card terminal.

**Terminal for Transaction**: Select the credit card terminal device to use for this transaction (i.e., used to process a physical credit card).

**Amount**: The transaction amount entered in the payment window. To edit, cancel the transaction and enter the correct amount in the payment window.

**Reference Number**: Unique identifier for a transaction. Used for [Credit Card Return](paymentreturn.html).

**Save Card**: Securely store the credit card number and expiration date as a token for future use. If the preference, *Automatically store credit card tokens*, is enabled this box is checked by default.

**Force Duplicate**: Determines if a transaction on the same card, for the same amount, on the same day may be approved. Check to allow a duplicate transaction, uncheck to decline duplicates. Set the default in PayConnect Setup.

**Signature Box**: Patient may sign the transaction (optional) and the signature is stored with PayConnect.

## Receipts

Merchant receipts are automatically printed after any transaction is processed through PayConnect, using the *Receipts* printer defined in [Printer Setup](printersetup.html).

## EMV Transactions

Credit cards with computer chips (EMV transactions) are supported for PayConnect but credit card tokens are only saved for PayConnect 2.0 transactions. For PayConnect 1.0, tokens are not saved.

## Troubleshooting

When processing a payment on a terminal through Open Dental:

* The payment window does include an option for *Terminal*. Ensure *Terminal* is selected for payments.
* The terminal screen displays *DentalXChange Welcome*. Press F4 to ensure the terminal is in DentalXChange mode.