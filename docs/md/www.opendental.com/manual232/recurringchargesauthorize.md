Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Authorize Recurring Charges

Set up a recurring payment to a patient's credit/debit card or checking/savings account for regularly due charges (e.g., payment plans, repeating charges).

In [Credit Card Manage](creditcardsmanage.html), double-click a payment account.

![](images/creditCardEdit.PNG)

Authorize the recurring charge amount and frequency for select patients. On the scheduled payment date, the patient's payment method will be added to the Recurring Charges tool to be processed. Run the tool manually to process the payments or set payments to process automatically at a specific time each day.

Note:

* Recurring payments are allocated to outstanding charges within the family using first in/first out logic (FIFO).
* Multiple cards can be setup for recurring charges in a family, but this may cause unexpected behavior when the family balance becomes $0.00.
* When using a single card, adjust Charge Frequency below as required for multiple charges in a single month. Also see Charge Logic below.

To run the tool and for set up requirements, see [CC Recurring Charges](recurringcharges.html).

To set up a recurring payment, enter the Authorize Recurring Charges details then select the Charge Frequency.

**Authorized Recurring Charges**:

* **Payment Plan**: (optional) Attach the recurring charge to a [Patient Payment Plan](paymentplanpatient.html) or [Dynamic Payment Plan](paymentplandynamic.html). Use the dropdown to select from a list of plans the patient is a guarantor of. The payment will be applied to the payment plan ([Payment to a Payment Plan](paymentplanpayment.html)). If no payment plan is selected, a payment will be processed for the patient's balance up to the charge amount entered and may include payplan charges if due.

  Note: If the attached payment plan is deleted or closed, the recurring charge is cleared.
* **Payment Type Override**: Assign a Payment Type to this patient's recurring charge transactions. This overrides the default payment type, *Pay type for CC* in [Preferences](preferences.html).
* **Charge Amount**: (required) Enter the scheduled payment amount. For payment plans, this is typically the same as the periodic pay plan debit amount. To remove the amount, click **Clear**.
* **Date Start**: (required) Enter the date the recurring charge is scheduled to start. Click **Today** to insert today's date.
* **Date Stop**: Enter the final payment date. To charge the patient indefinitely, leave blank. The patient will then be charged for any outstanding balance due up to the authorized charge amount. If a payment plan is selected, the recurring charge will automatically end when the payment plan is paid in full.
* **Note**: Enter notes specific to the charge. Notes are only visible in this window.
* **Run charge even if no family balance present**: (optional) Check to process the recurring charge for the charge amount even if the family does not have a balance. If the family has a credit or no balance, the payment will post to the account as an [Unearned / Prepayment](unearnedprepayment.html). Only displays when the preference, *Allow recurring charge to run even if no family balance present*, is enabled.
* **Is Recurring Active**: The card is currently active for recurring charges. When unchecked, the card is not active for recurring charges. The setting can be manually changed or automatically changed via the preference *Automatically inactivate declined cards*.
* **Next Charge Date**: Date of the first scheduled recurring charge associated with the current charge frequency. If charge frequency is changed, the date will update.
* **Previous Start Date**: Only appears if *Date Start* has been changed. The Date Start entered prior to the current Date Start (e.g., if the date start has been changed once this is the original date start, if three dates have been used this is the second date start entered).

**Charge Frequency**:

* **Fixed day(s) of month**: (default) Click **Add Day** to select one or more days of the month to schedule the payment. The payment will be processed on the day(s) indicated, with the first charge scheduled the month entered in the Date Start field and the last payment in the month entered in the Date End field. Click **Clear** to remove the selection(s).
  + If a selected day falls on the end of the month (e.g., 31) and a month does not include that day (e.g., February, September), charges will be added on the day prior (e.g., February 28, September 30).
* **Fixed week day**: Check to select a fixed week day to schedule the payment. Use the dropdown menu to select which day of the week and how often (e.g., every Monday or fifth Saturday).

Click **OK** to save.

To exit the Credit Card Edit window without saving changes, click **Cancel**. To remove the payment information from the patient's account, click **Delete**.

## Editing Recurring Charges

To edit recurring charges, double-click the credit card and update any of the information as needed (e.g., charge amount, frequency, etc). Click **OK** to save. If the card has already been charged for the current month, update the *Date Start* to the next expected charge date to prevent additional charges for the current month.

To use the same credit card for multiple recurring charges (e.g., multiple patients or payment plans):

1. From the Credit Card Manage window, highlight an existing credit card.
2. Click **Reuse Existing Card**.
3. Optional: If the card needs to be moved to a different patient, from Credit Card Manage, select the card and click **Move To Patient**. Select the patient to which the card should be attached.
4. On the new copy of the credit card, enter the Authorized Recurring Charges details and select the new Charge Frequency.
5. Click **OK** to save.

## Charge Logic

If a single card is being used for multiple recurring charges, the card will need to be added to Credit Card Manage of any patients to which the charge is being applied. For payment plans, the card must be added to the payment plan guarantor.

To charge the same patient on different intervals (e.g., fixed day of the month and every other Friday) on the same credit card, the card will need to be added twice. The two saved cards will be charged independently of one another (i.e., the actual charge date for one card instance will not affect the actual charge date of the other card instances).

If *Run charge even if no family balance present* is checked:

* And a payment plan is selected, the recurring charge will not be processed if the patient does not have a payplan debit due.
* 'Recurring Charge' is added below the transaction details of the payment note when the card is processed

If *Run charge even if no family balance present* is unchecked, the recurring charge amount will be reduced if the family balance or payplan debit is less than the charge amount. The balance owed is charged instead.

If the payplan debit is less than the charge amount and the family has a balance due, the entire charge amount will be processed. The portion of the payment that exceeds the payplan debit will post to the account as unearned/prepayment.