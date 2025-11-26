Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Payment Plans Report

Run the Payment Plans report to view a list of payment plans by guarantor that can be filtered.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Payment Plans**.
![](images/reportPaymentPlan.png)

This report is often used with the [Aging of Accounts Receivable (A/R) Report](reportaging.html) to determine which patients owe the office money.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

**Date Range:** To limit the report to plans created in a date range:

* Check the **Limit to Plans Created in a Date Range** box. This is the default selection and enables the Date Start and Date End fields.
* In the Date Start field, click the dropdown to select the start date.
* In the Date End field, click the dropdown to select the end date.

  Unchecking **Limit to Plans Created in Date Range** shows all plans meeting the remaining criteria, regardless of date.

**Payment Plan Types:** Select which types of payment plans to include:

* Insurance: Select to view only [Insurance Payment Plans](paymentplanins.html).
* Patient: Select to view only [Payment Plans](paymentplandynamic.html) and [Old Payment Plans](paymentplanpatient.html)
* Both: Select to view all payment plan types.

**Hide Completed Payment Plans:** Check to exclude closed payment plans from the report.

**Show Family Balance:** Check to include Fam Balance column in the report. Shows payment plan guarantor's family balance.

**Providers**: Filter the report by provider. Check **All** to include all providers, including those that are hidden.

* For Old Payment Plans and Insurance Payments Plans, filters the report by the attached provider.
* For Payment Plans, this filters by the providers on Pay Plan Charges. If Pay Plan Charges are linked to multiple providers, the Payment Plan is included when filtering for any provider with a Pay Plan Charge already created in the database (i.e., a posted or manually edited charge).
* To exclude hidden providers from the report, manually select visible providers from the list.

**Clinics:** Select the clinics to include. Check **All** to include all clinics, including those that are hidden. The report is grouped by clinic.

* For Old Payment Plans and Insurance Payments Plans, filters the report by the clinic attached to the plan.
* For Payment Plans, this filters by clinic attached to any Pay Plan Charges created in the database. If Pay Plan Charges are attached to multiple clinics, the Payment Plan is included when filtering for any of these clinics. If no Pay Plan Charges have been created in the database, a clinic is determined at random, from the clinics on attached production, to appear on the report.

## Report Preview

Click **OK** to generate a print preview of the report. The following is an example of the report and explanation of the report columns.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportPaymentPlanPrint.png)

If using Clinics, the report is grouped by clinic with totals for each clinic at the end of the report.

* Old Payment Plans and Insurance Payment Plans, are grouped by the clinic attached to the plan.
* Payment Plans may be grouped with any clinic attached to Pay Plan Charges already created in the database. If running the report for multiple clinics, the plan is only listed for one clinic.

Report columns:

* **Provider**: Last name of the provider.
  + For Old Payment Plans and Insurance Payment Plans, this is the provider attached to the plan.
  + For Payment Plans, this may be any provider attached to Pay Plan Charges already created in the database.
* **Guarantor**: For Payment Plans and Old Payment Plans, the guarantor of the payment plan. This may differ from the family guarantor. For Insurance Payment Plans, the patient associated with the payment plan.
* **Ins**: X indicates Insurance Payment Plan.
* **Princ**: The total principal amount of the payment plan.
* **Accum Int**: Accumulated interest for the plan.
* **Paid**: The total amount paid on the plan.
* **Balance**: The current payment plan balance (Princ + Accum Int - Paid).
* **Due Now**: The amount that is due now on the payment plan.
* **Bal Not Due**: The total payment plan balance that is not yet due (is due in the future). (Balance - Due Now). Only shows when the *Pay plan charge logic*  is set to *Age Credits and Debits* in [Preferences](preferences.html).
* **Fam Balance**: Only appears when *Show Family Balance* is checked. The total family balance for the payment plan guarantor.