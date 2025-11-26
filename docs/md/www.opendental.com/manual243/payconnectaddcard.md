Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

PayConnect Add Card

When using PayConnect, add patient credit or debit cards to store on file.

In [Credit Card Manage](creditcardsmanage.html), click **Add New Card**.

![](images/payConnect20AddCard.png)

Adding cards is only allowed when *Prevent saving new cards* is disabled in [PayConnect Setup](payconnectsetup.html).

When adding new cards:

* A temporary $1.00 authorization hold may show on the patient's card statement.
* A token is created for the card, masking the first 12 digits of the card number.
* After the card has been successfully added, it appears in the Credit Card Manage list and is an available payment option in the [Payment](payment.html) window.

Alternatively, new cards can be added when processing a payment through [PayConnect Window](payconnectpaymentwindow.html) and *Save Token* or *Save Card* is checked.

## PayConnect 2.0

If adding a new card using PayConnect 2.0 from Credit Card Manage, the window at the top of this page appears. For PayConnect 2.0 web service transactions with a new card, the add card interface is displayed in the transaction window as shown in the following screenshot.

![](images/payConnect20TransactionAddCard.png)

**Swiper**: Click to use a card swiper to enter credit card details, instead of entering manually.

**Name on Card / Card Number / CVV / MM / YYYY / ZIP**: Enter credit card details manually.

Click **Process** to add card information.

## PayConnect 1.0

![](images/payconnectAddCard.gif)

For PayConnect 1.0 users, the interface shown in the screenshot at the top of this page appears when adding a new card.

Enter the details for the credit or debit card:

* **Transaction Type**: Automatically defaults to *Auth*. This cannot be changed when adding a card.
* **Card Number / Security Code / Expiration / Zip / Name on Card**: Enter credit card details.
* **Save Token**: Automatically checked. Allows the card to be saved.
* **Force Duplicate**: Automatically checked.
* **Signature**: (Optional) Patient may sign the authorization and the signature will be stored with PayConnect.

Click **OK** to add card information.