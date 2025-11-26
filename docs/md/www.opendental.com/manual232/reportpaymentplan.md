Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Payment Plans Report

Run the Payment Plans report to view a list of Payment Plans by guarantor that can be filtered.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Payment Plans**.
![](images/reportPaymentPlan.png)

This report is often used with the [Aging of Accounts Receivable (A/R) Report](reportaging.html) to determine which patients owe the office money.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

**Date Range:** To limit the report to plans created in a date range:

* **Check the Limit to Plans Created in a Date Range** box. This is the default selection and enables the Date Start and Date End fields.
* In the Date Start field, click the dropdown to select the start date.
* In the Date End field, click the dropdown to select the end date.

  Unchecking **Limit to Plans Created in Date Range** shows all plans meeting the remaining criteria, regardless of date.

**Payment Plan Types:** Select which types of Payment Plans to include:

* Insurance: Select to view only [Insurance Payment Plans](paymentplanins.html).
* Patient: Select to view only [Patient Payment Plans](paymentplanpatient.html) and [Dynamic Payment Plans](paymentplandynamic.html)
* Both: Select to view all Payment Plan types.

**Hide Completed Payment Plans:** Check to exclude closed Payment Plans from the report.

**Show Family Balance:** Check to include Fam Balance column in the report. Shows Payment Plan guarantor's family balance.

**Providers:** Highlight the providers to include. Click All to select all providers.

**Clinics:** Select the clinics to include. Click **All** to select all clinics, including those that are hidden. The report is grouped by clinic.

## Report Preview

After setting the report filters, click **OK** to launch a print preview of the report results. Below is an example of the report and descriptions of each column of the report.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportPaymentPlanPrint.png)

* **Provider**: Last name of the provider attached to the Payment Plan.
* **Guarantor**: For Dyanmic and Patient Payment Plans, the guarantor of the payment plan. This may differ from the family guarantor. For Insurance Payment Plans, the patient associated with the payment plan.
* **Ins**: X indicates Insurance Payment Plan.
* **Princ**: The total principal amount.
* **Accum Int**: Accumulated interest for the plan.
* **Paid**: The total amount paid on the plan.
* **Balance**: The current Payment Plan balance (Princ + Accum Int - Paid).
* **Due Now**: The amount that is due now.
* **Balance Not Due**: The total Payment Plan balance that is not yet due (is due in the future). (Balance - Due Now). Only shows when the *Pay plan charge logic* [Preference](preferences.html) is set to *Age Credits and Debits*.
* **Fam Balance**: Only appears when *Show Family Balance* is checked. The total family balance for the Payment Plan guarantor.