Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Authorize Recurring Charges

Set up a recurring payment to a patient's credit/debit card or checking/savings account for regularly due charges (e.g., payment plans, repeating charges).

In [Credit Card Manage](creditcardsmanage.html), double-click a payment account.

![](images/creditCardEdit.PNG)

Authorize the recurring charge amount and frequency for select patients. On the scheduled payment date, the patient's payment method is added to the Recurring Charges tool to be processed. Run the tool manually to process the payments or set payments to process automatically at a specific time each day.

Note:

* Recurring payments are allocated to outstanding charges within the family using first in/first out logic (FIFO).
* Multiple cards can be set up for recurring charges in a family, but this may cause unexpected behavior when the family balance becomes $0.00.
* When using a single card, adjust Charge Frequency below as required for multiple charges in a single month. Also see Charge Logic below.

To run the tool and for set up requirements, see [CC Recurring Charges](recurringcharges.html).

To set up a recurring payment, in the Edit Credit Card window, enter the Authorize Recurring Charges details then select the Charge Frequency.

**Authorized Recurring Charges**:

* **Payment Plan**: (optional) Attach the recurring charge to a [Payment Plan](paymentplandynamic.html) or [Old Payment Plan](paymentplanpatient.html). Use the dropdown to select from a list of plans the patient is a guarantor of. The payment is applied to the payment plan ([Payment to a Payment Plan](paymentplanpayment.html)). If no payment plan is selected, payment is processed for the patient's balance up to the charge amount entered and may include PayPlan Charges if due.

  Note: If the attached payment plan is deleted or closed, the recurring charge is cleared.
* **Payment Type Override**: Assign a Payment Type to this patient's recurring charge transactions. This overrides the default payment type, *Pay type for CC* in [Preferences](preferences.html).
* **Charge Amount**: (required) Enter the scheduled payment amount. For payment plans, this is typically the same as the periodic Pay Plan Charge Due. To remove the amount, click **Clear**.
* **Date Start**: (required) Enter the date the recurring charge is scheduled to start. Click **Today** to insert today's date.
* **Date Stop**: Enter the final payment date. To charge the patient indefinitely, leave blank. The patient will then be charged for any outstanding balance due up to the authorized charge amount. If a payment plan is selected, recurring charges automatically end when the payment plan is paid in full.
* **Note**: Enter notes specific to the charge. Notes are only visible in this window. This text box supports [Right Click Text Box](rightclicktextboxes.html).
* **Run charge even if no family balance present**: (optional) Check to process the recurring charge for the full charge amount even if it exceeds the family balance. If the family has a credit or no balance, payment is posted to the account as [Unearned / Prepayment](unearnedprepayment.html). Only displays when the preference, *Allow recurring charge to run even if no family balance present*, is enabled.
* **Is Recurring Active**: The card is currently active for recurring charges. When unchecked, the card is not active for recurring charges. The setting can be manually changed or automatically changed via the preference *Automatically inactivate declined cards*.
* **Next Charge Date**: Date of the first scheduled recurring charge associated with the current charge frequency. If charge frequency is changed, the date is updated.
* **Previous Start Date**: Only appears if *Date Start* has been changed. The Date Start entered prior to the current Date Start (e.g., if the date start has been changed once, this is the original date start; if three dates have been used, this is the second date start entered).

**Charge Frequency**:

* **Fixed day(s) of month**: (default) Click **Add Day** to select one or more specific days of the month to schedule payment. Payment is processed on the date(s) indicated (e.g., 1st and 16th). The first payment is scheduled on or after the Date Start. The last payment is processed on or before the Date End. Click **Clear** to remove the selected date(s).
* **Fixed week day**: Check to select a specific day of the week to schedule the payment. Use the dropdown menu to select which day of the week and how often (e.g., every Monday or fifth Saturday).

**Authorized Procedures**: Lists procedures that allow a recurring charge to be processed.

* Click **Add** to choose a procedure code to authorize.
* Highlight a procedure and click **Remove** to delete the procedure from the list.

Note: If a date does not exist in the month (e.g., 31st or fifth Monday) for the selected charge frequency, recurring charges occur on the last calendar day of the month (e.g., 30th) instead.

Click **Save** to keep changes.

To exit the Credit Card Edit window without saving changes, click **Cancel**. To remove the payment information from the patient's account, click **Delete**.

## Editing Recurring Charges

To edit recurring charges, double-click the credit card and update any of the information as needed (e.g., charge amount, frequency, etc). Click **Save** to keep changes. If the card has already been charged for the current month, update the *Date Start* to the next expected charge date to prevent additional charges for the current month.

To use the same credit card for multiple recurring charges (e.g., multiple patients or payment plans):

1. From the Credit Card Manage window, highlight an existing credit card.
2. Click **Reuse Existing Card**.
3. Optional: If the card needs to be moved to a different patient, from Credit Card Manage, select the card and click **Move To Patient**. Select the patient to which the card should be attached.
4. On the new copy of the credit card, enter the Authorized Recurring Charges details and select the new Charge Frequency.
5. Click **Save** to keep changes.

## Charge Logic

**Using Authorized Procedures**
 A recurring charge is only processed when an authorized procedure is set complete and there is a family balance. Charges are still scheduled based on the Charge Frequency.

Payment is allocated using the selected Paysplits setting set in [Allocations Setup](allocationssetup.html).

**Using a Single Card for Multiple Recurring Charges**
 If a single card is being used for multiple recurring charges, the card must be added to Credit Card Manage for any patients to which the charge is being applied. For payment plans, the card must be added to the payment plan guarantor.

To charge the same patient at different intervals (e.g., fixed day of the month and every other Friday) on the same credit card, the card must be added twice. The saved cards are charged independently of one another (i.e., the actual charge date for one card entry does not affect the actual charge date of the other card entries).

**If *Run charge even if no family balance present* is Enabled**
 If a payment plan is linked to the recurring charge, the recurring charge is not processed if the patient does not have a PayPlan Charge Due.

If using Authorized Procedures, the recurring charge is only billed up to the procedure amount.

'Recurring Charge' is added below the transaction details of the payment note when the card is processed.

**If *Run charge even if no family balance present* is Disabled**
 The recurring charge amount may be reduced, depending on the balance owed.

If the family balance owed is less than the recurring charge amount, the charge is reduced to the balance owed.

If the recurring charge is linked to a payment plan and the PayPlan Charge Due is less than the charge amount, the charge amount is reduced if there is no additional family balance.

If the recurring charge is linked to a payment plan and the PayPlan Charge Due is less than the charge amount and the family has a balance due, the entire charge amount is processed (up to the family balance). The portion of the payment that exceeds the PayPlan Charge Due is posted to the account as unearned/prepayment.

If using Authorized Procedures, the recurring charge is reduced if it exceeds the family balance, even if the amount for the authorized procedure is more.