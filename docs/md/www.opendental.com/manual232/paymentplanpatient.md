Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Payment Plan

A Payment Plan is a static patient repayment agreement.

In the [Account Module](account.html) Payment Plans grid, they show with the Type *PP*.

![](images/paymentPlanPatientgrid.png)

Note: The grid can also include [Installment Plans](installmentplan.html), [Dynamic Payment Plans](paymentplandynamic.html), and [Insurance Payment Plans](paymentplanins.html).

To create a new Payment Plan, in the Account Module, click Payment Plan, Patient Payment Plan.

![](images/paymentPlanPatient.png)

To set when Payment Plan payments will be due, see [Preferences](preferences.html), *Days in advance to bill Payment Plan amounts due*.

See [Dynamic Payment Plan](paymentplandynamic.html) to create an open-ended repayment agreement.

Related Links:

* ![](images/youtubeLogo.png) See our Webinar: [Payment Plans](https://youtu.be/8flwhPdxhhY)
* [Payment to a Payment Plan](paymentplanpayment.html)
* [Payment Plan Examples](paymentplanscenarios.html)
* [Payment Plans Report](reportpaymentplan.html)
* [Payment Plan Q and A](paymentplanpatientfaq.html)

See General Setup steps at the bottom of this page for instructions on setting up a Patient Payment Plan. Find details about the Payment Plans grid (shown above) in the Patient Payment Plans in the Account Module section of this page.

## Patient Information

![](images/paymentPlanPatientInfo.png)

**Category**: Assign a category to this Payment Plan (e.g. Ortho, Implant). Useful to distinguish one Payment Plan from another when families have many plans. Customize the category options in [Definitions: Payment Plan Categories](definitionspaymentplancategories.html).

**Patient**: The person who was treated. Click **Go To** to switch to their account. Patients can have multiple Payment Plans, and each plan can have a different guarantor.

**Guarantor**: The person who will make the payments. Defaults to the currently selected patient. The guarantor does not have to be in the same family as the patient. It also can differ from the account's guarantor. Click **Change** to select a different guarantor. Click **Go To** to switch to their account.

## Provider Information

![](images/paymentPlanPatientProviderInfo.png)

**Provider**: Defaults to the patient's primary provider. Click the dropdown or **[...]** to change. If using clinics and providers are restricted to clinics, only providers available for the selected clinic are available.

**Clinic**: If using clinics, defaults to the patient's clinic. Click the dropdown to change.

## Term Options

![](images/paymentPlanPatientTerms.png)

**Date of Agreement**: Defaults to today's date.

**Total Amount**: The total amount of the Payment Plan, excluding interest. It defaults to the patient's current balance.

**Date of First Payment**: Defaults to one month from today's date.

**Down Payment**: The amount of the down payment. Immediately due when the Payment Plan is created.

**APR**: The percentage of interest to charge. If entered, additional options are available to delay interest charges. If both fields are left blank, interest is charged to all scheduled payments.

* **No interest for the first [ ] payments**: The number of payments before interest is applied.
* **Interest start date**: The date of the first interest charge.

Interest is automatically calculated using the following method:

1. Subtracts the down payment from the Payment Plan balance.
2. Calculates the number of payments, or the payment amount, based on the new balance (balance minus down payment).

The Amortization Schedule can be based on a total number of payments or a specific payment amount. Enter only one.

* **Number of Payments**: Enter the number of payments. Payment amount will calculate automatically.
* **Payment Amount**: Enter the payment amount. Number of payments will calculate automatically.

## Term Buttons

![](images/paymentPlanPatientTermButtons.png)

**Recalculate**: Recalculate payments and interest (optional) when a patient prepays, pays on principal, or overpays. See [Payment Plan Recalculate](paymentplanrecalculate.html).

Note: Payment plan adjustments will not be recalculated. Manually edit any plan adjustments in the patient account, Amortization Schedule, and in the Payment Plan Procedures and Credits window.

**More Options**: Select how often payments will be due based on the Date of First Payment. The default frequency is Monthly, however other options include every other week, specific day of a month (e.g. first Tuesday, etc.), or quarterly.

![](images/paymentPlanPatientMoreOptions.png)

**Create Schedule**: Create the Amortization Schedule based on the terms. A description of the terms will show in the Note field.

## Attaching Production

![](images/paymentPlanPatientProduction.png)

**View Tx Credits**: Attach production to the Payment Plan. Opens the [Payment Plan Procedures and Credits](paymentplantxcredits.html) window.

## Payment Plan Summary

![](images/paymentPlanPatientCalculations.png)

Once the schedule is created or updated, calculations are automatic.

**Total Cost of Loan**: Total credits (not associated to procedures) and production amount attached to the Payment Plan plus interest.

**Accumulated Due**: Total amount that has been due up to the current date.

**Paid so far**: Total amount that has been paid towards the Payment Plan to date.

**Principal paid so far**: Total amount that has been paid towards the principal to date.

Note: Paid amounts only reflect the correct total if paysplits are attached to the Payment Plan Charges.

**Tx Completed Amt**: Total credits and completed procedure amount attached to the Payment Plan, excluding interest.

**Total Tx Amt**: Total credits, completed and treatment planned procedure amount attached to the Payment Plan, excluding interest.

## Amortization Schedule

![](images/paymentPlanPatientSchedule.png)

The Amortization Schedule is generated based on the terms. Principal and interest are calculated automatically. Due dates are based on the Date of First Payment and the frequency selected from More Options. Double-click a row to edit.

* A horizontal bold line indicates today's date and separates past items from future items.
* The amount currently due is bold.
* Payments attached to this plan show in the Payment column and affect the running balance. If extra payments show here, but shouldn't, uncheck the Attached to Payment Plan box on the [Edit Payment Split](paysplit.html) window for each payment.
* Double-click an existing charge in the Amortization Schedule to edit. See Edit Pay Pan Charge section below for details.

**Exclude past activity**: When checked, only future dated line items show in the Amortization Schedule and past activity is hidden. When unchecked, all activity shows. Totals are not affected by this setting. To set the default setting for the checkbox, set the preference *Payment Plans exclude past activity by default*.

**Current Totals**: Automatically calculated based on current and past charges, accumulated payments, and the running balance.

## Note

![](images/paymentPlanPatientNote.png)

A detailed note of the terms shows for future reference. Any changes made to the terms will be added to the note. Other notes can be added as needed.

If *Pay Plans use Sheets for printing* is checked, additional Terms and Conditions are displayed when viewing or signing the repayment agreement. Customize the *Payment Plan Terms and Conditions* message in Preferences. Updating the terms updates any replacement fields used in the default message.

## Buttons

![](images/paymentPlanPatientButtons.png)

**Delete**: Delete the entire plan. Also, clears any [Authorized Recurring Charges](recurringchargesauthorize.html) attached to the plan. Payments cannot be attached.

**Close Plan**: Click to close a Payment Plan that is no longer being paid on (i.e., paid off or patient stopped making payments). See Close a Payment Plan section below for details.

**Add**: Add a new Payment Plan Charge to the Amortization Schedule. See Edit Payment Plan Charge section below for additional details.

**Add Adjustment**: Add a negative Payment Plan adjustment to discount a portion of the Payment Plan balance (e.g., courtesy discount). The Negative Pay Plan Adjustment window will open. Enter the amount to adjust off the Payment Plan.

![](images/paymentPlanPatientAdjustment.png)

Pay plan adjustments automatically reduce the *Total Amount*, apply credits to future due amounts, and reduce the *Total Tx Amt* (via a credit in the Payment Plan and Procedures and Credits window). To also include an adjustment in the Patient Account ledger with today's date, check **Also make line item in Account Module**, this is not recommended when using the preference *Pay Plan Charge Logic, Do Not Age (Legacy)*. Check box is only available if the logged-on user has the *Adjustment Create* permission.

* The amount of the adjustment cannot be more than the remaining Payment Plan balance due.
* Enter payments to the Payment Plan before adding Payment Plan Adjustments; otherwise, the suggested paysplits to Payment Plan Charges may not be available.
* To edit or delete a Payment Plan Adjustment, change the line item in the patient account, the Amortization Schedule, and in the Payment Plan Procedures and Credits window.
* Set the *Payment Plan adj type* in Preferences.
* If *Also make line item in Account Module* was checked, see [Adjustment](adjustments.html) to attach the adjustment to a procedure.

**eClipboard**: Send the Payment Plan to eClipboard. See [eClipboard: Payment Plans](eclipboardpaymentplans.html).

**Clear Schedule**: Erases the current Amortization Schedule, including adjustments (e.g., if terms have been changed and the schedule needs to be replaced).

**Print**: Click to print a copy of the payment plan Amortization Schedule and Terms or Payment Plan sheet.

**Sign & Print**: Displays instead of **Print** when the preference *Pay Plans use sheets for printing* is enabled and the Payment Plan sheet contains a signature box. See [Sign and Print Payment Plan](paymentplanprint.html).

Click **OK** to save changes, or **Cancel** to close without saving.

## Close a Payment Plan

Click **Close** when a payment plan has been paid off or patient has stopped making payments to close out the payment plan.

Closing out a plan does the following:

* Removes interest from future-dated charges.
* Clears the [Recurring Charges](recurringchargesauthorize.html) for this Payment Plan.
* Automatically removes [Payment Plan Procedures and Credits](paymentplantxcredits.html) for treatment planned procedures, reducing *Total Cost of Loan*.
* Replaces future-dated charges with a single Close Out Charge for the remaining principal balance.

The [Account Module](account.html), Show Tab setting *Show Complete Pay Plans*, determines whether closed Payment Plans are visible in the Payment Plans grid.

* If the setting is enabled, and the *Pay Plan charge logic* is set to Age Debits and Credits, closed plans are hidden from the grid, whether there is a positive or negative remaining balance.
* If the setting is disabled, and the *Pay Plan charge logic* is set to anything other than Age Debits and Credits, closed plans are hidden when the payment plan balance is 0. Closed plans with a positive or negative balance are hidden from the grid once the balance is 0.

To close multiple payment plans at once use the [Close Payment Plans](paymentplanclose.html) tool.

## Edit Pay Plan Charge

Click **Add** to create an additional Pay Plan Charge on the Amortization Schedule or double-click an existing charge from the Amortization Schedule grid to edit.

![](images/paymentPlanPatientEditCharge.PNG)

* **Date Entry**: Read only. Date and time stamp when the Pay Plan Charge was originally created.
* **Date Edit**: Read only. Date and time stamp when the Pay Plan Charge was most recently edited.
* **Date**: Defaults to the date entry, but can be changed. This is that date displayed in the Amortization Schedule grid.
* **Note**: Displays in the Description column of the Amortization Schedule.
* **Principal**: Pay Plan Charge amount not including interest.
* **Interest**: Read only. This is automatically calculated based on Terms and Principal.
* **Provider**: Read only. Provider assigned to Payment Plan.
* **Clinic**: Read only. Clinic assigned to Payment Plan.

Click **Delete** to remove a charge from the Amortization Schedule. This recalculates the *Total Amount*.

Click **OK** to save changes. If adding a new charges or changing Principal amount, the *Total Amount* is recalculated.

## General Setup

To set up a Patient Payment Plan, follow the steps below:

1. Verify the *Date of Agreement*.
2. Optional: Enter the *Down Payment*. The down payment will be due today when the scheduled is created, regardless of the *Date of First Payment* or *Date of Agreement*.
3. Input the *Total Amount*.
4. Input the *APR* and interest terms.
5. Input the *Number of Payments* or *Payment Amt*.
6. Click **More Options** and choose the payment frequency.
7. Click **Create Schedule** to create the Amortization Schedule.

* To edit any line items (e.g., Down Payment), double-click a row to edit the date, principal amount, or note. If editing the principal, ensure the *Tx Credits* and *Total Amount* match. See next steps for attaching *Tx Credits*. *Total Cost of Loan* and *Total Amount* will adjust automatically when making changes to the principal.

8. Attach Treatment Credits (Tx Credits). This is required to ensure a credit for the Payment Plan is applied to the patient's account. Failure to attach Tx Credits may cause patients to be overcharged until a Payment Plan is closed. See [Payment Plan Procedures and Credits](paymentplantxcredits.html).

1. Click **View Tx Credits**.
2. Select any procedures to be paid by the Payment Plan.
3. Optional: Adjust credit amount as needed.
4. Click **Add**.
5. Click **OK** on the popup.
6. Repeat steps to add any additional procedures.
7. Click **OK** to close the Procedures and Credits window once the *Total Credits* attached matches the *Total Amount* of the Payment Plan.

9. Verify the Payment Plan information.
10. Print or send the Payment Plan to the eClipboard for patient signature.

## Editing an Existing Payment Plan

To edit individual Payment Plan Charges, double-click the charge from the Amortization Schedule. The Payment Plan Charge interest field is read-only. If APR is included in the plan terms, charges cannot be added or edited; however, users with the *Pay Plan Charge Date Edit* [Permissions](permissions.html) may edit the charge due dates.

To delete a Payment Plan Charge, double-click the charge from the Amortization Schedule and click Delete or, right-click the posted PayPln: Debit from the Patient Account and select Delete Charge. The right-click option is only available when the *Pay Plan charge logic* preference is set to *Age Credits and Debits*. Payments cannot be attached to the charge. If a charge is deleted, update the [Payment Plan Procedures and Credits](paymentplantxcredits.html) and use [Payment Plan Recalculate](paymentplanrecalculate.html).

To edit patient Payment Plans with overcharged production, see [Payment Plan Q and A](paymentplanpatientfaq.html).

## View or Reopen Closed Payment Plans

Payment plans that have been closed are still available to view or to reopen if needed. Only open Payment Plans can be edited; changing historical information is not recommended.

To show closed Payment Plans in the Payment Plan grid:

1. In the Account Module, click the Show tab.
2. Check the box for **Show Completed Pay Plans**. This affects all workstations.

All closed plans for the patient list in the Payment Plan grid in a light text color.

![](images/payPlanPatientClosed.png)

To reopen a closed Payment Plan:

1. Double-click the closed plan to open the Payment Plan window.
2. In the lower right, click Reopen.

![](images/paymentplanReOpen.png)

Only past activity shows in the Amortization Schedule. To reinstate the Payment Plan, a new Amortization Schedule must be created.

## Patient Payment Plans in the Account Module

**Payment Plans Grid**

A summary of all Payment Plans (including Patient, Dynamic and Insurance Payment Plans) and Installment Plans associated with is shown at the top of the Account Module. Plans associated with the patient are those the patient is assigned as the guarantor or patient.

![](images/paymentPlanPatientgrid.png)

* Date: Date of Agreement.
* Guarantor: Name of guarantor assigned to the Payment Plan.
* Patient: Name of patient associated with the Payment Plan.
* Type: Type of Payment Plan. *PP* indicates Patient Payment Plan.
* Category: Assigned category of Payment Plan.
* Principal: Total principal of Payment Plan (i.e., Total Cost - Interest).
* Total Cost: Total cost of loan (i.e., Principal + Interest).
* Paid: Total amount of Payment Plan paid to date. Includes principal and interest.
* PrincPaid: Total amount of principal paid to date.
* Balance: Total remaining unpaid PayPlanCharges, regardless if currently due. Includes principal and interest.
* DueNow: Total of all PayPlanCharges currently due. Includes principal and interest.
* eClipboard: Shows an *X* if the Payment Plan has been sent to an eClipboard device.

**Patient Account Grid**

PayPlan Credits, PayPlan Debits, and payments attached to payment plans can optionally show as line items in patient accounts and affect balances and aging. This is determined by *Pay Plan charge logic* in [Preferences](preferences.html). See more information in Payment Plan Q and A.

![](images/paymentPlanPatientAccountGrid.png)