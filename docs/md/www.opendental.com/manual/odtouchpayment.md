Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

ODTouch: Payment

The ODTouch Take Payment eRouting action, allows users to process a patient payment from the app.

From the [ODTouch: eRouting](odtoucherouting.html), tap **Take Payment**.

![](images/odtouchPayment.png)

The eRouting action can only be used by [XCharge (OpenEdge)](xcharge.html), [Edge Express](edgeexpress.html), or [PayConnect 1.0](payconnectsetup.html) users.

**Last Statement Balance**: The patient estimated balance as of the last [Statement](statement.html) on the account.

**Payments Since Last Statement**: The total of all payments made to the patient's account since the last statement date.

## Statements and Payments

A list of payments and statements for the patient is listed.

![](images/odtouchStatement.png)

Select a statement or payment to see additional details.

* Tap **Open Statement** to see a full PDF of the associated statement.

## Make Payment

To make a payment:

1. Tap the caret menu at the top of screen for additional options.
2. Tap **Make Payment**.
![](images/odtouchMakePayment.png)3. Payment Options are displayed on screen. Enter payment details.
   * Enter an optional **Note** that will display in the [Payment](payment.html) Note area.
   * Enter the payment **Amount**. *Reference the Last Statement Balance* and *Payments Since Last Statement* to determine the amount.
   * Choose the credit card to use in the **Select Card** area.
     + If a credit card is already saved to ODTouch, the last four digits of the card are displayed. Tap here to choose a different card. Select a different saved card or *Add New Card...* to process the transaction with a different credit card.
     + If Select Card is set to *Add New Card*, card information is added in the next step.
   * Check **Save New Card** to save card information to ODTouch for later use if adding a new card.
4. Tap **Make Payment** to process the transaction.
   * If a saved card was selected, the transaction is immediately processed.
   * If *Add New Card* was selected, the payment processor's interface is opened. Add card details here. The transaction is processed after details are saved.

## Manage Cards

Credit cards can be added or deleted from ODTouch as needed.

Open the caret menu at the top of screen for additional options and tap **Manage Cards**.

![](images/odtouchManageCards.png)

* Any card information saved from ODTouch for the patient is listed.
* Tap **Add Card** to add a new credit card to the patient's account. Cards can only be added if using XCharge. Enter a new card during a transaction and check *Save New Card* to save card details when using another processor.
* Select an existing card and tap **Delete** to remove the card from ODTouch. Follow the prompt to delete the card.

.