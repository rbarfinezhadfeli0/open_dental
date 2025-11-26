Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Credit Card Manage

The Credit Card Manage window, lists saved credit/debit cards and checking/savings accounts for a patient.

In the [Account Module](account.html), Main tab, click **Credit Card Manage**.

![](images/creditCardManage.PNG)

[Credit/Debit Card](paymentpatientcreditcard.html) and account entries are automatically added here when a user processes an [XCharge (OpenEdge)](xcharge.html), [Edge Express](edgeexpress.html), [PayConnect Window](payconnectpaymentwindow.html), or [PaySimple](paysimple.html) transaction and select *Save Token*.

Columns:

* **Card Number**: Securely displays cards on file.
* **Clinic**: Only shows if clinics is enabled. Displays the clinic assigned to the credit card token.
* **Start Date**: Date the recurring charge is scheduled to start.
* **Stop Date**: Date the recurring charge is scheduled to stop.
* **Amount**: Scheduled payment amount.
* **Charge Frequency**: Day(s) of the month/week the recurring charge is run.
* **Pay Plan**: X indicates the recurring charge is attached to a payment plan.
* **Recurring Active**: X indicates the card is active for recurring charges.

When multiple payment processing programs are enabled, each account in the list indicates the program to be used to charge the card. The first 12 digits of each account are masked with X for cards and \* for bank accounts.

* **XCharge**: When X, indicates the card token is saved in XCharge.
* **EdgeExpress**: When X, indicates the card token is saved in EdgeExpress.
* **PayConnect**: When X, indicates the card token is saved in PayConnect.
* **PaySimple**: When X, indicates the card token is saved in PaySimple.
* **ACH**: When X, indicates the checking or savings account token is saved in PaySimple.
* **XWeb**: When X, indicates the card token is saved in XWeb.

**Add New Card**: Add payment information without processing a payment. Click add and enter the card or bank account information. If multiple credit card processing programs are enabled, select the program from the list when prompted and then enter the payment information.

* [XCharge Add Card](xchargeaddcard.html)
* [Edge Express Add Card](edgeexpressaddcard.html)
* [PayConnect Add Card](payconnectaddcard.html)
* [PaySimple Add Card](paysimpleaddcard.html)

A token for the payment information saves under the selected processing program. When clinics are enabled, the token also saves to the clinic the logged-on user has selected under [Clinics](clinics.html) in the [Main Menu](mainmenu.html).

Double-click an added card or account to [Authorize Recurring Charges](recurringchargesauthorize.html).

**Reuse Existing Card**: Creates another entry (token) for an existing credit card that has an authorized recurring charge without re-entering the credit card number. Select an existing card with recurring charges and click to create an additional entry (token) without re-entering card details. The Credit Card Edit window opens immediately to authorize recurring charges. Click OK to save a copy of the card. If the selected card does not have recurring charges set up, a new entry is not be made. Instead, any changes update the existing card.

**Move To Patient**: Move a card or bank account to a different patient. Clear any recurring charges from the card first. Highlight the card or account, then click to select a new patient.

**Up/Down**: To reorder the list, highlight a card or bank account, then click the Up/Down arrows. The order of cards and accounts in the list determines the order in the Credit Card dropdown on the [Payment](payment.html) window.