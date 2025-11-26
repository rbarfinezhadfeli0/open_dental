Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Credit Card Return

Refunds can be issued on [Credit Card Payment](paymentpatientcreditcard.html).

Refunds cannot be performed directly to a patient's checking or savings account via an ACH transaction. Instead process a check or debit refund. When issuing a Refund, the credit is posted as a negative payment to the patient account.

Refund steps in Open Dental vary depending on the reason a refund is given. First follow steps for an Open Dental [Refund](refunds.html) before entering the refund for the credit card processor.

When processing a credit card refund, the [Credit Card Transaction Details](paymenttransdetails.html) will be automatically added to the payment note. Payments allocated to procedures for multiple family members will post to each patient account.

If multiple card processing programs are enabled, and a card or account is selected, use the program listed next to the number to process the payment. Otherwise, the user will be prompted to enter new card or account information.

## XCharge

1. Click the [XCharge (OpenEdge)](xcharge.html) button to initiate the credit card processor.
2. Select *Return* as the transaction type.
   * If this card is already stored in the [Credit Card Manage](creditcardsmanage.html) window, it immediately processes the return. No additional steps are needed.
   * If the card is not saved to the patient's Credit Card Manage, it must be added to process the return. Proceed to Step 3 to add the card. Alternatively, if the payment was made from another patient's account and the card is saved there, the return can be initiated from that account instead.
3. Check *Save Token* to safely store the card on file then click OK to enter the new card information.
4. Click Process or F12.

## EdgeExpress

1. Click the **Global Payments Integrated** button to initiate the [Edge Express](edgeexpress.html) credit card processor.
2. Select the Card Entry Method.
3. Select *Return* as the transaction type.
4. Enter the *Transaction ID* from the original payment.
5. Click OK.

## PayConnect

1. Click the [PayConnect](payconnectpaymentwindow.html) button to initiate the credit card processor.
2. Select *Return* as the transaction type if using PayConnect 1.0, otherwise select *Refund*.
3. For PayConnect 2.0 users, select the Processing Method.
4. PayConnect 1.0 users, for cards not saved to Credit Card Manage, enter the card information and check *Save Token* to safely store the card on file.
   * Alternatively, if the payment was made from another patient's account and the card is saved there, the return can be initiated from that account instead.
5. Enter the *Reference Number* or *Transaction ID* from the original payment.
6. Ensure the amount in the PayConnect window is entered as a positive.
7. Click OK.

## PaySimple

Note: PaySimple does not allow partial refunds. The amount must match the entirety of the original payment.

1. Click the [PaySimple](paysimple.html) button to initiate the credit card processor.
2. Select *Return* as the transaction type.
3. For cards or accounts not saved to Credit Card Manage enter the card information and uncheck *One-Time Payment* to safely store the card on file.
   * Alternatively, if the payment was made from another patient's account and the card is saved there, the return can be initiated from that account instead.
4. Enter the *Transaction ID* in the Ref Number field.
5. Click OK.