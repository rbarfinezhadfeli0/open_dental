Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Credit Card Payment

Open Dental has integrated with a few credit card processing companies to allow practices to take credit card payments directly through the payment window.

In the [Payment](payment.html) window, at the upper right, is the Credit Card area.

![](images/paymentPatientCreditCard.png)

Once a credit card [Program Link](programlinks.html) is enabled, only the enabled Program Links are displayed in the Payment window.

If you are a payment processing company interested in direct integration with Open Dental, please see [Direct Credit Card Integration with Open Dental](../site/creditcardintegration.html).

## Integrated Options

Prior to using an integrated payment method, the practice must first sign up with the merchant and enable the program link.

More than one credit card processing program may be enabled in Open Dental and clinics may set up different credentials when using different merchant accounts.

[EdgeExpress](edgeexpress.html): Global Payments Integrated

* Supports EMV transactions.
* Supports online patient payments through the Payment Portal.
* Supports Recurring Charges.
* Available internationally, including Canada.

[PayConnect by DentalXChange](payconnectpaymentwindow.html)

* Supports EMV transactions.
* Supports online patient payments through the Payment Portal.
* Supports Recurring Charges.

[PaySimple](paysimple.html)

* Supports swiped credit card transactions plus ACH and direct debit payments from a patient's checking or savings account.
* Supports online patient payments through the Payment Portal.
* Supports Recurring Charges.
* Available only in the United States.

Note: [XCharge (OpenEdge)](xcharge.html) was a previous option available through Global Payments Integrated. Existing XCharge installations can still be used, though Global Payments Integrated no longer supports XCharge. Users should contact Global Payments Integrated to switch to EdgeExpress, their updated payment processing option.

## Credit Card / ACH Payments

To process a card payment:

1. Enter the payment details in the [Payment](payment.html) window then select a card from the **Credit Card** dropdown.
   * To directly withdraw from a patient's checking or savings account (ACH payment), select the PaySimple ACH account instead. Or select *New Card* to enter new account information.
2. Click the merchant's button to initiate the credit card processor.
   * If multiple card processing programs are enabled, and a card or account is selected, use the program listed next to the number to process the payment. Otherwise, if *New Card* is selected, there is a prompt to enter new card or account information.
   * [XCharge (OpenEdge)](xcharge.html): Select Purchase as the transaction type. For new cards, check Save Token to safely store the card on file and click **OK** to enter the new card information. Click **Process** or **F12** to charge the card.

     Note:
     + If a card terminal is attached, swipe the card after clicking **F12 Process**.
     + If the patient has insufficient funds, XCharge takes a partial payment up to the amount available. This is also true for Recurring Charges.
   * [Edge Express](edgeexpress.html): Select *Purchase* as the transaction type and select the card entry method. For new cards, check Save Token to safely store the card on file, then enter the card information and click **Make Payment** to charge the card.
   * [PayConnect Window](payconnectpaymentwindow.html): Select Sale as the transaction type. For new cards, enter the card information and check Save Token to safely store the card on file then click **OK** to charge the card.
   * [PaySimple](paysimple.html): Select Sale as the transaction type for credit/debit or click the ACH tab for a direct withdrawal. For new accounts, enter the card or bank account information and uncheck One-Time Payment to safely store the card or bank account on file then click **OK** to charge the card or account.

     Note: After an ACH payment has been processed, the payment status is marked as Posted (pending) in the Payment Note. Once the transaction is settled with the bank, the payment amount and status needs to be manually updated if declined. For users with an active registration key (are on support) and [eConnector](econnector.html), when the transaction is settled, the status in the payment note is automatically updated to Settled if approved or Failed if declined. The note is also appended with the declined payment response from PaySimple.
3. Apply to Recurring Charge: For patients with [Authorized Recurring Charges](recurringchargesauthorize.html), check to apply this payment to their [Recurring Charge](recurringcharges.html). The Recurring Charge Month window opens. Select whether to apply the payment to last month's recurring charge, or this month's. If the charge frequency is set for multiple days, select the specific recurring charge date this payment is for instead.
   * If checked, the Credit Card dropdown menu is disabled.
4. After the card or account has been processed, the [Credit Card Transaction Details](paymenttransdetails.html) are automatically added to the payment note. The note indicates successful or declined transactions.
   * For PayConnect 2.0 users, surcharge information is also added to a Surcharge field in the Payment window.
   * If payment is declined, the payment amount and paysplits are updated to $0. If there were any [Unearned / Prepayment](unearnedprepayment.html) paysplits, the unearned type is changed to None.
5. Click **Print Receipt** or **E-mail Receipt** on the payment window to manually send a receipt generated from the credit card processor.
   * Receipts for EdgeExpress, XCharge, and PaySimple can be set to automatically print after a successful transaction. To set the default behavior see, [EdgeExpress Setup](edgeexpresssetup.html), [XCharge Setup](xchargesetup.html), or [PaySimple Setup](paysimplesetup.html). PayConnect transactions always automatically print a merchant receipt.
   * To print a receipt that shows patient account information, see [Receipt](receipt.html).
6. Click **Save** to post the payment to the patient account.

Note:

* When an ACH transaction is declined, the payment amount does not get updated automatically and must be manually changed. Run the [Daily Payments Report](reportdailypayments.html) and filter by the ACH payment type then reconcile the transactions with PaySimple reports to find the accounts with declined payments.
* Clicking Cancel after a successful transaction automatically voids the payment.
* Optionally, disable the merchant buttons on a payment after a successful transaction. Enable the *Disable merchant buttons for completed payments* preference. This prevents users from processing multiple transactions within a single payment. The credit card, CareCredit, and XWeb/PayConnect Portal, Return and Void buttons are not disabled after a successful transaction.

In addition to patient payments, insurance payments can be taken via credit card.

* To take an insurance payment for single or small batch claims, see [Finalize Insurance Payment](claimpayfinalize.html).
* To take an insurance payment for a large batch claim, see [Batch Insurance Payment](claimpaymentbatch.html).

## Safely Storing Credit Card Information

XCharge, PayConnect, and PaySimple use tokens to safely encrypt and store credit/debit card numbers and expiration dates or checking and savings account information with PaySimple. Storing tokens is optional. When a token is saved, the card or bank account is displayed as a masked number on the [Credit Card Manage](creditcardsmanage.html) window.

Storing Tokens:

* The card number and expiration date are stored so they do not need to be re-entered each time the card is used.
* An entry for the card is added to the Credit Card Manage list in the patient's [Account Module](account.html).
* Tokens are stored to the credit card processing program that was used to add the card or bank information. The same program is required to process future transactions for that token with the exception of XCharge and EdgeExpress. For example, a credit card added using PayConnect creates a unique token to PayConnect and any transactions for that token need to be processed using PayConnect. However, a credit card added through XCharge or EdgeExpress may be charged using either processor since both are from the same parent company.
* If clinics are enabled, tokens are also stored to the clinic the logged-on user has selected under Clinics in the Main Menu.
* Tokens must be stored to use [CC Recurring Charges](recurringcharges.html).

If the office requires the card to be present for all transactions, it may be preferable to not store tokens. To set the default storage option, see Preferences, *Automatically store credit card tokens*. Users can also choose to save/not save a token when processing a single transaction (Save Token/One-Time Payment checkbox).

## PCI Compliance

The credit card processor may offer to enroll the office in Payment Card Industry (PCI) compliance tools/assistance or charge the office non-compliance fees if the office does not complete the annual PCI DSS Self-Assessment Questionnaire (SAQ). PCI Compliance is required by the credit card industry for all merchants. Compliance is very difficult and time consuming to achieve. Many merchants may determine that the cost of the non-compliance fees are less than the cost of compliance. For more information: <https://www.pcisecuritystandards.org/merchants/>.