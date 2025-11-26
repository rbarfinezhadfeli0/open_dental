Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Payment Plans Overcharged Report

Use the Payment Plans Overcharged Report to find and fix overcharged production on Payment Plans.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Payment Plans Overcharged**.

![](images/reportDynamicPayplanOvercharged.PNG)

A [Payment Plan](paymentplandynamic.html) is considered overcharged if the sum of the Pay Plan Charges Due (before interest) exceeds the sum of the production attached to the plan. Overcharged plans turn yellow in the Payment Plans grid of the Account Module.

Note:

* Adjustments, payments, and write-offs must be allocated to procedures in order for this report to pull data correctly.
* Payment plan charges due (PayPln: Charge Due) are the charges created by the Payment Plan for the principal balance.
* To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Select filters to affect the Payment Plans listed in the grid.

**From / To**: Enter a date range to filter Payment Plans by the plan Start Date. Defaults to one month prior to the current date.

**Providers**: Click the dropdown to select providers. Click **All** to include all listed providers. Filters by provider associated with the overcharged production.

**Clinics**: Only available when Clinics are enabled in [Show Features](showfeatures.html). Select the clinics to include in the report. Select **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by clinic associated with the overcharged production.
* If user is restricted to specific clinics, only accessible clinics are listed. When checking **All (includes hidden)**, results include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.

**Patient**: Lists the name of the selected account currently filtering the report. The currently selected patient is entered automatically when opening the report. If no patient is selected, the report returns results for all patients that meet the other filter criteria.

* **Current**: Click to filter the report by the currently selected patient. Inputs the patient's name.
* **Find**: Click to open [Select Patient](patientselect.html) and find a specific patient to filter the report.
* **All**: Click to include all patients. Clears any current patient filter.

## Overcharged Production

Click **Refresh** to update the Overcharged Production grid. Right-click any item in the grid and select **Go To Account** to launch the [Account Module](account.html) for the patient associated with the selected Payment Plan. The following is a description of each column included in the grid:

* **Start Date**: Date of the first payment plan charge.
* **Patient**: Patient attached to the Payment Plan.
* **Guarantor**: Guarantor of the Payment Plan.
* **Provider**: Abbreviation of the provider associated with the overcharged production.
* **Clinic**: Abbreviation of the clinic associated to the overcharged production.
* **Description**: Lists the overcharged production (adjustment or procedure).
* **Overridden**: An 'X' indicates the production item has an override, meaning the procedure or adjustment value in the Amount Attached field was changed from the default.
* **Pat Portion**: The remaining balance of the production item after insurance payments, estimates, write-offs, and adjustments (outside of the Payment Plan) have been applied.
* **Pat Paid Outside Plan**: The total amount paid by the patient. Sums all patient payments attached to the production item (outside of Payment Plan).
* **Pat Portion On Plan**: The remaining balance of the production item after all patient and insurance payments, write-offs, and adjustments have been applied (Pat Portion - Pat Paid Outside Plan). If the production has an override, the override amount is displayed instead.
* **Plan Debits**: The total Charges Due on the Payment Plan associated with the production item.
* **Overcharged**: The amount overcharged for this production item (Plan Debits - Pat Portion On Plan).
* **Pat Paid On Plan**: The total amount of payment plan payments made towards the production item.
* **Pat Overpaid**: The amount overpaid on the production item by the patient (Pat Paid On Plan - Pat Portion On Plan) if, the total payment amount is greater than the patient portion on plan. Otherwise, $0.00 is displayed.

Click **Print** to launch a print preview of the report. The print preview includes the same data columns as the preceding Overcharged Production grid. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

## Fixing Overcharged Production

To fix the overcharged production items in the list, select one or more items in the grid and click **Fix**. If nothing is selected, clicking **Fix** corrects all listed production. A negative charge and negative payment plan debit are added for each item selected.

The negative charge is added to the Payment Plan Amortization Schedule for the total amount overcharged on the production item.

![](images/reportDynamicPayplanOverchargedAmSched.png)

The negative Pay Plan Charge Due is added to the Patient Account if the *Pay Plan charge logic* is set to *Age Credits and Debits* in [Preferences](preferences.html). This is to offset the Pay Plan Charges Due that overcharged the production item.

![](images/reportDynamicPayplanOverchargedFix.png)

The total cost of the loan is reduced to reflect the updated total tx amount (attached production). If the patient has been actively making payments to the Payment Plan, it may become overpaid after fixing the production. Run the [Income Transfer Manager](incometransfermanager.html) to re-allocate the income from the overpaid charges to other charges or to [Unearned / Prepayment](unearnedprepayment.html) to be allocated later.