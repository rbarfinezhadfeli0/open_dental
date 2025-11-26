Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Dynamic Payment Plan

A Dynamic Payment Plan is an open-ended repayment agreement.

In the [Account Module](account.html) Payment Plans grid, they show with the Type *DPP*.

![](images/paymentPlanDynamicGrid.png)

Note:

* The grid can also include [Patient Payment Plans](paymentplanpatient.html), [Installment Plans](installmentplan.html) and [Insurance Payment Plans](paymentplanins.html).
* If production on a dynamic payment plan has been overcharged, the plan will turn yellow. Run the [Dynamic Payment Plans Overcharged Report](reportdynamicpayplanovercharged.html) to find any overcharged production.
* Dynamic Payment Plans are only functional with an Insurance Payment Plan for the same procedures if set up correctly. See *Setting up a Dynamic Payment Plan for use with an Insurance Payment Plan* at the bottom of this page.
* The [Open Dental Service](opendentalservice.html) is required to use Dynamic Payment Plans. This service updates plans as needed daily. To set a time for Dynamic Payment Plans to update, see [Preferences](preferences.html), *Dynamic Pay Plan run time*.

To create a new Dynamic Payment Plan, in the Account Module, click Payment Plan, Dynamic Payment Plan.

![](images/paymentPlanDynamic.png)

Alternatively, double-click an existing dynamic payment plan to edit.

Related Links:

* [Payment to a Payment Plan](paymentplanpayment.html)
* [Payment Plan Examples](paymentplanscenarios.html)
* [Payment Plans Report](reportpaymentplan.html)
* [Payment Plan Q and A](paymentplanpatientfaq.html)

See General Setup at the bottom of this page for instructions on setting up a Dynamic Payment Plan.

## Category / Patient / Guarantor

![](images/paymentPlanDynamicPatientInfo.png)

**Category**: Assign a category to the payment plan (e.g., Ortho, Implant). Useful to distinguish one payment plan from another when families have many plans. Customize the category options in [Definitions: Payment Plan Categories](definitionspaymentplancategories.html).

**Patient**: The person who was treated. Click **Go To** to switch to their account. Patients can have multiple payment plans, and each plan can have a different guarantor.

**Guarantor**: The person who will make the payments. Defaults to the currently selected patient. The guarantor does not have to be in the same family as the patient. It also can differ from the account's guarantor. Click **Change** to select a different guarantor. Click **Go To** to switch to their account.

## Lock Options

![](images/paymentPlanDynamicLock.png)

**Full Lock**: Check to lock current terms of the payment plan. Prevents further changes to the repayment schedule or the production (e.g., adding procedures and adjustments or changing the production Amount Override). Plans that are locked cannot be edited. Users must create a new plan to add treatment instead. Adding an APR interest rate requires the plan be locked.

**Unlock**: Option is available when opening an existing plan and Full Lock is unchecked. Click to unlock the *Terms* section in order to make edits.

## Terms

![](images/paymentPlanDynamicTerms.png)

**Date of Agreement**: Defaults to today's date. Can be changed to a past date. If the *Allow future dated transactions* preference is enabled, can also be changed to a future date.

**Total Principal Amount**: The total amount of the payment plan, excluding interest. Calculates based on the attached production.

**Date of First Payment**: Defaults to one month from today's date.

**Down Payment**: The amount of the down payment. Immediately due when the payment plan is created regardless of the Handle Treatment Planned setting.

**APR**: The percentage of interest to charge on the principal balance of completed procedures. If entered, additional options are available to delay interest charges. Enter only one. If both fields are left blank, interest is charged to all scheduled payments. Payment plan must be locked before saving.

* **No interest for the first [ ] payments**: The number of payments before interest is applied.
* **Interest start date**: The date of the first interest charge.

Interest is automatically calculated using the following method:

1. Subtracts the down payment from the payment plan balance.
2. Calculates the number of payments, or the payment amount, based on the new balance (balance minus down payment).

The amortization schedule can be based on a total number of payments or a specific payment amount. Enter only one.

* **Payment Amount**: Enter the payment amount. Number of payments will be calculated automatically.
* **Number of Payments**: Enter the number of payments. Payment amount will calculate automatically.

**Charge Frequency**: Select the frequency of which charges are applied to the payment plan. The options below are calculated based off the Date of First Payment.

* **Weekly**
* **Every other week**
* **Specific day of the month**
* **Monthly**
* **Quarterly**

**Handle Treatment Planned**: Determine whether treatment planned procedures should be included in the total now, or as the work is completed. If toggling this setting, click Create Schedule to see changes.

* **Await procedure completion**: Do not include treatment planned procedures in the Amortization Schedule until the work is completed. When selected, treatment planned work will not display on printed payment plans. The patient may need to re-sign the payment plan each time work is completed.
* **Procedure as complete**: Include treatment planned procedures in the Amortization Schedule. The total for treatment planned work will display as a credit on the patient's account until the work is completed.

## Term Buttons

![](images/paymentPlanDynamicTermButtons.png)

**Create Schedule**: Create the Amortization Schedule based on the terms. A description of the terms will show in the Note field. Production must be attached first. When editing the terms on existing plans, click Create Schedule to view the changes.

**Cancel**: Cancel changes made to the Terms on existing payment plans. Click the Unlock button to enable. Only appears for existing Dynamic Payment Plans.

**Save**: Save changes made to the Terms on existing payment plans. Only appears for existing Dynamic Payment Plans. Click the Unlock button to enable.

**Templates**: Open [Payment Plan Templates](payplantemplates.html) to quickly set terms.

## Loan Information

![](images/paymentPlanDynamicCalculations.png)

Once the schedule is created or, updated and saved, the calculations below are automatic.

**Total Cost of Loan**: Total Amount plus interest and any added charges.

**Accumulated Due**: The total amount that has been due up to the current date.

**Paid so far**: The total amount that has been paid towards the payment plan to date.

**Principal paid so far**: The total amount that has been paid towards the principal to date.

**Tx Completed Amt**: The total fee amount for charges that have come due.

**Total Tx Amt**: The total fee amount for all production that is attached to the payment plan. Will not display until after plan has been saved by clicking OK.

## Note

![](images/paymentPlanDynamicNote.png)

A detailed note of the terms shows for future reference. Any changes made to the terms will be added to the note. Other notes can be added as needed.

If the [Preference](preferences.html),  *Pay Plans use Sheets* is checked, additional Terms and Conditions are displayed when viewing or signing the repayment agreement. Customize the default message in Preferences. Updating the terms will also update any replacement fields used in the default message.

## Schedule Tab

![](images/paymentPlanDynamicSchedule.png)

**Amortization Schedule**: The amortization schedule is generated based on the terms. Principal and interest are calculated automatically. Due dates are based on the *Date of First Payment* and selected *Charge Frequency*.

* A horizontal bold line indicates today's date and separates past items from future items.
* Line items in black represent charges that have posted to the account. Gray line items are projected future charges. Charges are actually posted to the account using the [Open Dental Service](opendentalservice.html) daily at the time determined in Preferences.
* Gray items can change if production is added or removed, or additional payments are made.
* Payments attached to this payment plan show as green credits and affect the running balance. If extra payments show here, but should not, uncheck the *Attached to Payment Plan* box on the [Payment](payment.html) window for each payment.

**Ungrouped**: Determine how Pay Plan Charges and payments are displayed in the Amoritization Scheduled.

* Unchecked (default): Individual Pay Plan Charge and payments are grouped into a single line item.
* Checked: Pay Plan Charges show procedure information and are split by procedure amount. Individual payment splits are listed.

![](images/dynamicPayPlanSchedUngrouped.png)

**Hide past activity**: When checked, only future dated line items show in the Amortization Schedule and past activity is hidden. When unchecked, all activity shows. Totals are not affected by this setting. To set the default setting for the checkbox, see Preferences, *Payment Plans exclude past activity by default*.

**Current Totals**: Automatically calculated based on current and past charges, accumulated payments, and the running balance.

## Production Tab

![](images/paymentPlanDynamicProduction.png)

**Attached Production**: Displays the procedures and adjustments attached to the payment plan.

* **Amount**: Default amount charged for the attached production item.
* **Amount Override**: Enter a new amount to override the default for the attached production item. Leave blank or enter zero to use the default amount.
* Production is sorted by the date added then ordered by Ortho Case procedures, completed procedures, positive adjustments, and treatment planned procedures.

Note: Additional insurance payments or adjustments applied towards any of the attached production items after the plan was created will automatically update future pay plan charges if the Amount Override is blank or Full lock is unchecked.

**Delete**: Delete the selected production item from the attached production list.

**Print**: Print the list of attached production (as shown), including the production total.

**Show Attached P&I**: View Pay Plan Charges and paysplits associated with the attached production.

![](images/dynamicPayPlanAttachedPI.png)

**Add**: Attach production to the payment plan. Opens the Select Production window.

![](images/paymentPlanDynamicSelectProduction.png)

Select from a list of adjustments, completed procedures, and treatment planned procedures to attach to the payment plan. Only positive adjustments not attached to procedures are listed.

* **Amount Original**: Amount of the production item prior to any payments, adjustments, or insurance estimates.
* **Amount End**: Amount owed on the production item after any payments, adjustments, and insurance estimates have been applied.

Note:

* Production items can only be attached to a single payment plan.
* To show automated sales tax amounts for newly treatment planned procedures, Update Fees in the [Treatment Plan Module](treatmentplan.html).

## Saving, Closing Plan, and More

![](images/paymentPlanDynamicButtons.png)

**Delete**: Delete the entire plan. Also, clears any [Authorized Recurring Charges](recurringchargesauthorize.html) attached to the plan. Payments cannot be attached.

**Close Plan**: Click to close a Payment Plan that is no longer being paid on (i.e., paid off or patient stopped making payments).

* Remaining production items that did not have a posted Pay Plan Charge are removed from the Payment Plan. The production amount is subtracted from the total principal and the Pay Plan Credits are removed from the account.
* Any [Payment Plan Prepayments](hiddensplits.html) are transferred to the Close Out Charge. If there is income left over, it will be transferred to [Unearned Income](unearnedprepayment.html). Use the income transfer manager to allocate the excess to other outstanding charges.
* [Authorize Recurring Charges](recurringchargesauthorize.html) attached to this Payment Plan are cleared.
* Interest charges for future-dated debits are removed. It does not affect historical debits.

**Print**: Click to print a copy of the payment plan Amortization Schedule and Terms or Payment Plan sheet.

**Sign & Print**: Displays instead of **Print** when the preference *Pay Plans use sheets for printing* is enabled and the payment plan sheet contains a signature box. See [Sign and Print Payment Plan](paymentplanprint.html).

**eClipboard**: Send the Payment Plan to eClipboard. See [eClipboard: Payment Plans](eclipboardpaymentplans.html).

**OK**: Click to close the window and save changes.

**Cancel**: Click to close the window without saving changes.

## General Setup

To set up a Dynamic Payment Plan, follow the steps below:

1. Verify the *Date of Agreement*. This is generally today, but a past date can be entered.
2. Optional: Enter the *Down Payment*. The down payment will be due today when the scheduled is created, regardless of the *Date of First Payment* or *Date of Agreement*.
3. Attach Production. Total Principal Amount will calculate automatically.
   1. Click the **Production** tab.
   2. Click **Add**.
   3. Select the procedure(s) or adjustment(s) to be paid by the payment plan.
      * Unattached negative adjustments cannot be attached to a Dynamic Payment plan. Attach the [Adjustment](adjustments.html) to a procedure being paid by the payment plan instead.
   4. Click **OK**.
   5. Repeat the steps to add any additional procedures.
4. Optional: Input the *APR* and interest terms.
5. Input the *Number of Payments* or *Payment Amt*.
6. Select the **Charge Frequency**.
7. If treatment planned procedures are included in *Attached Production*, select an option for **Handle Treatment Planned**.
8. Click **Create Schedule** to create the Amortization Schedule.
9. Verify the Payment Plan information.
10. Print or send the payment plan to the eClipboard for patient signature.
11. Optional: To prevent changes (e.g., adding additional production, changing repayment terms, etc) to the payment plan once it is saved, enable **Full Lock**. Dynamic Payment Plans with APR must have Full Lock enabled.

## Edit an Existing Plan

Double-click into an existing plan.

Click **Unlock** to edit the Terms. Dynamic Payment Plans with *Full Lock* enabled cannot be edited.

**Editing Amortization Schedule and Charges**

Double-click an unpaid, posted Pay Plan Charge to edit.

![](images/dynamicPayPlanEditCharge.png)

* **Date Entry**: Read only. Date and time stamp when the Pay Plan Charge was originally created.
* **Date Edit**: Read only. Date and time stamp when the Pay Plan Charge was most recently edited.
* **Date**: Defaults to the date the charge posted, but can be changed. This is that date displayed in the Amortization Schedule grid.
* **Note**: Displays in the Description column of the Amortization Schedule.
* **Principal**: Pay Plan Charge amount not including interest. If the Principal amount is reduced, any excess is shifted to the next charge. Charge totals for each date are not increased, so the overall Amortization Schedule may be affected, and the end date of the Payment Plan may be moved out.
* **Interest**: Automatically calculated based on Terms and Principal.
* **Provider**: Provider assigned to production
* **Clinic**: Clinic assigned to production.

Click **Delete** to remove the charge from its current date.

* The charge turns gray to indicate it is scheduled to be posted.
  + If other charges have been billed to the Payment Plan, the deleted charge will be moved to the end of the Amortization Schedule. The end date for the payment plan may change.
  + If this is the only charge billed for the Payment Plan, the charge is still scheduled for the original date listed.
* Alternatively, Pay Plan Charges can be deleted by right-clicking from the Amortization Schedule or from the Patient Account Grid by right-clicking the PayPln: Debit (option only available when the Pay Plan charge logic is set to Age Credits and Debits in Preferences).

If a grouped charge with multiple production items is selected, the Pay Plan Charge Selection window opens instead.

![](images/dynamicPayPlanChargeSelect.png)

Click **Zero out charges** to reduce the principal on all listed charges to zero. The charges are moved to the next charge date and subsequent charges rescheduled. To edit a specific charge, select it and click **OK** to open the Edit Payment Plan Charges window for the selected charge.

**Update Amortization Schedule**

After editing production or changing any terms, the Amortization Schedule must be updated. Click **Create Schedule** to update the Amortization Schedule. Any current charges that have been billed are not changed, but future charges are updated to match the current terms.

Once changes have been made to the Dynamic Payment Plan Terms or the Amortization Schedule, click **Save** to save changes. Click **OK** to exit the Dynamic Payment Plan window.

## View or Reopen Closed Payment Plans

Payment plans that have been closed are still available to view or to reopen if needed. Only open Payment Plans can be edited; changing historical information is not recommended.

To show closed Payment Plans in the Payment Plan grid:

1. In the Account Module, click the Show tab.
2. Check the box for **Show Completed Pay Plans**. This affects all workstations.

All closed plans for the patient list in the Payment Plan grid in a light text color.

![](images/paymentPlanClosed.gif)

To reopen a closed Payment Plan:

1. Double-click the closed plan to open the Payment Plan window.
2. In the lower right, click Reopen.

![](images/paymentplanReOpen.png)

Only past activity shows in the amortization schedule. To reinstate the payment plan, a new amortization schedule will need to be created.

## Account Module Patient Account Tab

Credits, debits, and payments for patient payment plans can optionally show as line items in the patient's Account Module and affect balances and aging depending on the *Pay Plan charge logic*  preference.

If the *Pay Plan charge logic* is set to an option that display Pay Plan Credits as line items in the account grid, treatment planned procedures are treated differently depending on the selected *Handle Treatment Planned* setting of the Payment Plan.

* If set to *Await procedure completion*: Pay Plan Credits are initially posted as $0. When procedures are set complete, the credit is updated to match the Attached Production amount, and the Pay Plan Charge date remains unchanged.
* If set to *Procedure as complete*: Pay Plan Credits are posted for the full amount of the Attached Production.

## Setting up a Dynamic Payment Plan for use with an Insurance Payment Plan

In order for a Dynamic Payment Plan to function properly with an ongoing [Insurance Payment Plan](paymentplanins.html), it must be set up a specific way. Follow the steps below to set up a Payment Plan for use with an Insurance Payment Plan.

1. Create the Dynamic Payment Plan:

1. Attach production to the plan for the correct procedures. Ensure the amount (i.e., patient portion) is correct.
2. Set all other plan terms, schedule, and verify any other information.
3. In the Production tab, enter the *Amount Override* for the expected patient portion for all procedures being paid by the Insurance Payment Plan.

2. Create the [Insurance Payment Plan](paymentplanins.html) at the time of receiving first insurance payment.
   * Be sure to input the correct *Tx Completed Amount* (this should be the expected total payment from insurance).

If the patient portion changes, update the *Amount Override* in the Production tab of the Dynamic Payment Plan for plans not set to Full Lock. If the plan is set to Full Lock, this cannot be updated.