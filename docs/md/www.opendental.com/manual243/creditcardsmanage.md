Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Credit Card Manage

The Credit Card Manage window lists saved credit/debit cards and checking/savings accounts for a patient.

In the [Account Module](account.html), Main tab, click **Credit Card Manage**.

![](images/creditCardManage.PNG)

[Credit/Debit Card](paymentpatientcreditcard.html) and account entries are automatically added here when a user processes an [XCharge (OpenEdge)](xcharge.html), [Edge Express](edgeexpress.html), [PayConnect Window](payconnectpaymentwindow.html), or [PaySimple](paysimple.html) transaction and select *Save Token*.

Columns:

* **Card Number**: Securely displays card or account saved on. The first 12 digits of each entry are masked with X for cards and \* for bank accounts.
* **Clinic**: Only shows if the Clinics feature is enabled in [Show Features](showfeatures.html). Displays the clinic assigned to the credit card token.
* **Start Date**: Date the recurring charge is scheduled to start.
* **Stop Date**: Date the recurring charge is scheduled to stop.
* **Amount**: Scheduled payment amount.
* **Charge Frequency**: Day(s) of the month/week the [Recurring Charge](recurringchargesauthorize.html) is scheduled to run.
* **Pay Plan**: X indicates the recurring charge is attached to a [Payment Plan](paymentplandynamic.html) or [Old Payment Plan](paymentplanpatient.html).
* **Recurring Active**: X indicates recurring charges are active for the card.

Depending on the integrated [Credit Card](paymentpatientcreditcard.html) used to save a card token, there are different columns. If using multiple card processors, transactions can only be processed using the card processor for which the token is saved.

* **XCharge**: X indicates the card token is saved in XCharge.
* **EdgeExpress**: X indicates the card token is saved in EdgeExpress.
* **PayConnect**: X indicates the card token is saved in PayConnect.
* **PaySimple**: X indicates the card token is saved in PaySimple.
* **ACH**: X indicates a checking or savings account token is saved in PaySimple.

**Add New Card**: Add payment information without processing a payment. Click and enter the card or bank account information. If multiple credit card processing programs are enabled, select the program from the list when prompted, and then enter the payment information.

* [XCharge Add Card](xchargeaddcard.html)
* [Edge Express Add Card](edgeexpressaddcard.html)
* [PayConnect Add Card](payconnectaddcard.html)
* [PaySimple Add Card](paysimpleaddcard.html)

A token for the payment information is saved under the selected processing program. When clinics are enabled, the token also saves to the clinic the logged-on user has selected in the [Clinics](clinics.html) dropdown in the [Main Menu](mainmenu.html).

Double-click an added card or account to [Authorize Recurring Charges](recurringchargesauthorize.html).

**Reuse Existing Card**: Creates another entry (token) for an existing credit card that has an authorized recurring charge without re-entering the credit card number. Select an existing card with recurring charges and click to create an additional entry (token) without re-entering card details. The Credit Card Edit window opens immediately to authorize recurring charges. Click **Save** to create a copy of the card. If the selected card does not have recurring charges set up, a new entry is not made. Instead, any changes update the existing card.

**Move To Patient**: Move a card or bank account to a different patient. Clear any recurring charges from the card first. Highlight the card or account, then click to select a new patient.

**Up/Down**: To reorder the list, highlight a card or bank account, then click the Up/Down arrows. The order of cards and accounts in the list determines the order in the Credit Card dropdown on the [Payment](payment.html) window.