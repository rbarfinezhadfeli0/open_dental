Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Credit Card Transaction Details

[Credit Card](paymentpatientcreditcard.html) transaction details are added to the Note field of the [Payment](payment.html) window when an [XCharge (OpenEdge)](xcharge.html), [Edge Express](edgeexpress.html), [PayConnect Window](payconnectpaymentwindow.html), or [PaySimple](paysimple.html) transaction is attempted or completed.

Payments made by patients through the online [Payment Portal](portalpaymentsbypatient.html) are indicated with an additional line in the Transaction Details.

## XCharge Transaction Details

Each transaction type may return different transaction details and the information displayed comes directly from XCharge. A copy of the details are also stored here: **C:\Program Files (x86)\X-Charge, XResult.txt** for individual transactions and RecurringChargeResult.txt for all the transactions in the last batch of recurring charges run. Every time a transaction is completed the .txt file will be overwritten with the new transaction details.

RESULT=SUCCESS

TYPE=Purchase

APPROVALCODE=101883

AVSRESULT=Y

SWIPED=F

CONTACTLESS=F

CLERK=Tanya R

XCTRANSACTIONID=85548250673

ACCOUNT=XXXXXXXXXXX1014

EXPIRATION=1220

ACCOUNTTYPE=American Express

XCACCOUNTIDUPDATED=F

AMOUNT=109.00

APPROVEDAMOUNT=109.00

* **Result**: Transaction result (e.g., success, partial, etc.).
* **Type**: Transaction type (e.g., purchase, return, void, etc.).
* **Approval Code**: Code associated with the approved transaction. Consists of numbers and/or letters. For voids, the approval code will always be 000000.
* **AVS RESULT**: Address verification service (AVS) is a service provided by the payment merchant that determines the match or partial match of the card holders address information.
* **Swiped**: Indicates whether the card was keyed-in or swiped.
  + F = False. The card was keyed-in.
  + T = True. The card was swiped.
* **Contactless**: Indicates whether the Tap to Pay option was used.
  + F = False. The Tap to Pay option was not used.
  + T = True. The Tap to Pay option was used.
* **Clerk**: User who was logged in when the payment was taken. R at the end of the user's name indicates the card was charged using [CC Recurring Charges](recurringcharges.html).
* **XCTransactionID**: XCharge alias assigned to each credit card. **Account**: Last 4 digits of the credit card used during the transaction. The first 8 (for AMEX) or 12 digits are masked for security purposes.
* **Expiration**: Expiration date of the credit card used during the transaction (MMYY).
* **Account Type**: Credit card brand (e.g., American Express, Discover, MasterCard, Visa, etc.).
* **XC Account ID Updated**: Indicates if the bank sent an updated expiration date, allowing expired credit cards to be charged. See [XCharge (OpenEdge)](xcharge.html), Decline Minimizer.
* + F = False. A new credit card expiration date was not received.
  + T = True. A new credit card expiration date was received.
* **Amount**: Requested purchase amount that was entered into the Payment window.
* **Approved Amount**: Amount that was charged to the card. This may be different than the Amount if the card holder did not have enough funds to process the entire amount (e.g., partial).

## XCharge Transaction Details - Declined Payments

Declined credit card payments display less transaction details.

RESULT=Transaction not completed

DESCRIPTION=001 Decline

* **Result**: For declined cards this will typically display *Transaction not completed*.
* **Description**: Reason code for the decline. Refer to the XCharge user manual for code definitions.

## PayConnect Transaction Details

When processing a payment using PayConnect, users will receive a transaction details similar to what appears below will populate in the Note section of the Payment window:

Transaction Type: SALE

Status: Approved

Amount: 15.00

Card Type: VISA

Auth Code: XXXX

Ref Number: XXXXX

* **Transaction Type**: Transaction type (e.g., sale, return, void, etc.).
* **Status**: Transaction result (e.g., approved, declined, etc.).
* **Amount**: Transaction amount.
* **Card Type**: Credit card brand (e.g., American Express, Discover, MasterCard, Visa, etc.).
* **Auth Code**: Code associated to the approved transaction consists of numbers and letters. For voids, the approval code will always be 000000.
* **Ref Number**: Transaction ID, the same as Transaction # on PayConnect receipts.
* **Surcharge Fee Amount**: For PayConnect 2.0 surcharge accounts only, surcharge fee for the transaction.

## PaySimple Transaction Details

When processing a payment using PaySimple, users will receive a transaction details similar to what appears below will populate in the Note section of the Payment window:

Transaction Type: SALE

Status: Authorized

Auth Code: Approved

Amount: 10.00

PaySimple Account ID: XXXXXXX

PaySimple Transaction Number: XXXXXXX

* **Transaction Type**: Transaction type (e.g., sale, return, void, etc.)
* **Status**: Transaction result (e.g., approved, declined, etc.).
* **Amount**: Transaction amount.
* **Pay Simple Account ID**: Identifier assigned to the credit card/ACH account by PaySimple.
* **PaySimple Transaction Number**: Unique identifier for this transaction.

## Edge Express Transaction Details

When processing a payment using Edge Express, users will receive a transaction details similar to what appears below will populate in the Note section of the Payment window:

Amount: 10.00

Card Number: 346173XXXXXX0028

Transaction ID: 0000000XXXXX

Response: Approval

Processed: 08/02/2022 10:22 AM

* **Amount**: Transaction amount.
* **Card Number**: Credit card number. The first 6 digits and last 4 digits are unmasked.
* **Transaction ID**: Unique identifier for this transaction.
* **Response**: Transaction result (e.g., approved, declined, etc.).
* **Processed**: Date and time the transaction was processed.