Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Dynamic Payment Plans Overcharged Report

Use the Dynamic Payment Plans Overcharged Report to find and fix overcharged production on Dynamic Payment Plans.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Dynamic Payment Plans Overcharged**.

![](images/reportDynamicPayplanOvercharged.PNG)

A [Dynamic Payment Plan](paymentplandynamic.html) is considered overcharged if the sum of the payment plan debits (before interest) exceeds the sum of the production attached to the plan. Overcharged plans will turn yellow in the Payment Plans grid of the Account Module.

Note:

* Adjustments, payments, and write-offs must be allocated to procedures in order for this report to pull data correctly.
* Payment plan debits (PayPln: Debit) are the charges created by the payment plan for the principal balance.
* To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Change the filters to update report results.

**From / To**: Filters by the start date of dynamic pay plans. Defaults to a month from the current date.

**Providers**: Click the dropdown to select providers. Ctrl + click to choose multiple providers or click **All** to include all listed providers. Filters by provider associated with the overcharged production.

**Clinics**: Select the clinics to include in the report. Ctrl + click to select multiple clinics or click **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by clinic associated with the overcharged production.
* If user is restricted to specific clinics, only accessible clinics will list. When checking **All (includes hidden)**, results will include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.

**Patient**: Lists the name of the selected account currently filtering the report. The currently selected patient is entered automatically when opening the report. If no patient is selected, the report returns results for all patients that meet the other filter criteria.

* **Current**: Click to filter the report by the currently selected patient.
* **Find**: Click to open [Select Patient](patientselect.html) and find a specific patient to filter the report.
* **All**: Click to include all patients. Clears any current patient filter.

## Overcharged Production

Click **Refresh** to update the Overcharged Prodcution grid. Right-click any item in the grid and select to **Go To Account** to launch the [Account Module](account.html) for the selected patient. Below is a description of each column included in the grid:

* **Start Date**: Date of the first payment plan charge.
* **Patient**: Patient with the payment plan.
* **Guarantor**: Guarantor of the payment plan.
* **Provider**: Abbreviation of the provider associated to the overcharged production.
* **Clinic**: Abbreviation of the clinic associated to the overcharged production.
* **Description**: Lists the overcharged production (adjustment or procedure).
* **Overridden**: An 'X' indicates the production item has an override, meaning the procedure or adjustment value in the Amount Attached field was changed from the default.
* **Pat Portion**: The remaining balance of the production item after insurance payments, estimates, write-offs, and adjustments (outside of the payment plan) have been applied.
* **Pat Paid Outside Plan**: The total amount paid by the patient. Sums all patient payments attached to the production item (outside of payment plan).
* **Pat Portion On Plan**: The remaining balance of the production item after all patient and insurance payments, write-offs, and adjustments have been applied (Pat Portion - Pat Paid Outside Plan). If the production has an override, the override amount is displayed instead.
* **Plan Debits**: The total debits on the payment plan associated to the production item.
* **Overcharged**: The amount overcharged for this production item (Plan Debits - Pat Portion On Plan).
* **Pat Paid On Plan**: The total amount of payment plan payments made towards the production item.
* **Pat Overpaid**: The amount overpaid on the production item by the patient (Pat Paid On Plan - Pat Portion On Plan) if, the total payment amount is greater than the patient portion on plan. Otherwise, displays $0.00.

Click **Print** to launch a print preview of the report. The print preview includes the same data columns as the Overcharged Production grid listed above. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

## Fixing Overcharged Production

To fix the overcharged production items in the list, select one or more items in the grid and click **Fix**. If nothing is selected, clicking Fix will correct all listed production. A negative charge and negative payment plan debit will be added for each item selected.

The negative charge is added to the Amortization Schedule for the total amount overcharged on the production item.

![](images/reportDynamicPayplanOverchargedAmSched.png)

The negative payment plan debit is added to the Patient Account if the Pay Plan charge logic, *Age Credits and Debits*, is set in [Preferences](preferences.html). This is to offset the pay plan debits that overcharged the production item.

![](images/reportDynamicPayplanOverchargedFix.png)

The total cost of the loan is reduced to reflect the updated total tx amount (attached production). If the patient has been actively making payments to the payment plan, it may become overpaid after fixing the production. Run the [Income Transfer Manager](incometransfermanager.html) to re-allocate the income from the overpaid charges to other charges or to [Unearned Income](unearnedprepayment.html) to be allocated later.