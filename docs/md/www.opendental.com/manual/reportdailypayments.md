Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Daily Payments Report

Run the Daily Payments Report to see a breakdown of payments in a date range.

In [Standard Reports](reportsstandard.html), in the *Daily* section, click **Payments**.

![](images/reportDailyPayments.png)

The Daily Payments report is a list of all [Patient Payments](payment.html) and [Claim Payments](claimpayfinalize.html).

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set the report criteria and filters before running the report.

**Calendar:** In the first calendar select the start date. In the second calendar select the end date.

**Providers:** Select providers with attached payments to include. Ctrl + click to select multiple providers, or check **All** to include all providers, including those marked *Hidden on Reports*.

* For patient payments, filters by provider attached to [Payment Split](paysplit.html).
* For insurance payments, filters by [Claimproc Provider](claimprocedureprovider.html).
* Users without the *Daily - View All Providers* permission only see the provider associated with their [User](securityusers.html) in the Providers list and the All checkbox is disabled. Users must have the *Daily - View All Providers* to access the full provider list and utilize the All checkbox.
* Check **Include Unearned** to include payments with an unearned type (e.g., prepayments, see [Unearned / Prepayment](unearnedprepayment.html)). This should either always be selected when running the daily payment report or never selected.
* To exclude hidden providers from the report, manually select visible providers from the list.

**Clinics:** Select clinics with attached payments to include in the report. Ctrl + click to select multiple clinics or check **All (Includes hidden)** to include all clinics, including those marked hidden.

* For patient payments, filters by clinic attached to payment split. *Unassigned* refers to paysplits not assigned to a clinic.
* For insurance payments, filters by clinic attached to [Claim Procedure (claimproc)](claimprocedure.html). *Unassigned* refers to claimprocs not assigned to a clinic.
* If a user is restricted to specific clinics, only accessible clinics are listed When checking **All (includes hidden)**, results include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or unassigned payments.

**Group By:** Select how payments are grouped. Payments are always split by clinic if paysplits exist for multiple clinics.

* **Check**: Group by payment. Patient payments are listed by the name of the Paid By patient. For bulk insurance checks, Open Dental chooses one patient name to display.
* **Patient**: Bulk insurance payments are split by each patient on the payment. Patient payments are only listed the Paid By patient.
* **Show splits by provider separately**: Check to split payments by provider. Uncheck to group payments; *Prov* column lists all providers attached to a payment.

**Include hidden treatment planned prepayments**: Determines whether treatment planned prepayments (i.e., hidden splits) are included on the report. The default for this setting can be set in [Report Setup: Misc Settings](reportmiscsettings.html).

* Checked: Include treatment planned prepayments in the report.
* Unchecked: Do not include treatment planned prepayments in the report.

**Show online patient payments separately**: Determines if [Online Payments](portalonlinepayments.html) are grouped separately from other Patient Payments.

* Checked: Payments processed using [Patient Portal](portalpaymentsbypatient.html) or CareCredit *Lookup* or *Apply* are grouped into an *Online Patient Payments* category before being sorted by Payment Type.
* Unchecked: Payments are grouped into *Patient Payments*, regardless of processing method.

**Show CareCredit fees**: Check to display a column or additional row and totals for CareCredit merchant fees.

**Show PayConnect fees**: Check to display a column or additional row and totals for PayConnect merchant fees.

**All insurance payment types:** Uncheck to only select certain insurance payment types. Ctrl + click to select multiple items. When checked, includes all [Insurance Payment Types](inspaytypes.html).

**All patient payment types:** Uncheck to select only specific [Patient Payment Types](definitionspaymenttypes.html) to include. When checked, hidden payment types and income transfers are included in the report.

Note: Income transfers list as a patient payment type. When running the report for specific providers, it is possible not all splits for an income transfer show. To see the full income transfer, all providers associated with the transaction must be selected.

**All Claim Payment Groups:** Applies to insurance payments only. Uncheck to select only specific [Claim Payment Groups](definitionsclaimpaymentgroups.html). When checked, includes all Claim Payment Groups, including those marked hidden. See [Finalizing Insurance Payments](claimpayfinalize.html) to assign claim payment groups.

## Report Preview

Click **OK** to generate the report. Below is an example of the report and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html)

![](images/reportDailyPaymentsPaper.png)

The Daily Payments report groups insurance payments and patient payments separately. Within those groups, payments are further grouped by Payment Type (e.g., check, credit card, etc).

* **Date**: Payment date.
* **Paying Patient**: Paid by field from Patient Payments. This may differ from the patient account the payment is applied to. Patient attached to insurance claim for insurance payments. When running report grouped by Check, bulk insurance checks show only one patient name. An asterisk (\*), when displayed, indicates a bulk check.
* **Provider**: Provider(s) assigned to the payment.
* **Clinic**: Only shows when Clinics [feature is enabled](showfeatures.html). Clinic assigned to the payment. If a payment includes payment splits assigned to different clinics, the payment is split between the clinics (i.e., the full payment total is not be listed on a single line even when *Group By Check* is selected)
* **Check#**: Check # field from a patient or insurance payment.
* **Amount**: Payment split total assigned to the clinic and provider combination. This may differ from the actual payment amount.
* **CareCredit Fee**: Only shows for Patient Payments when *Show CareCredit fees* is checked. Surcharge Fee associated with a CareCredit payment.
* **PayConnect Fee**: Only shows for Patient Payments when *Show PayConnect fees* is checked. Surcharge Fee associated with a PayConnect payment.

Note: CareCredit Fees and PayConnect Fees are displayed on their own row, separate from the payment details.

Payment amounts are totaled at the end of the report and separately for insurance payments and patient payments. Each payment type includes subtotals below the grid. Below is additional information on how some totals are calculated.

* **Total PayConnect Fees**: Total of all amounts in the PayConnect Fee column for the Patient Payments section. Shown at the end of the section.
* **Total CareCredit Fees**: Total of all amounts in the CareCredit Fee column for the Patient Payments section. Shown at the end of the section.
* **Total Patient Payments After Fees**: Net amount of patient payments after subtracting merchant fees. Calculated as Total Patient Payments - (Total CareCredit Fees + Total PayConnect Fees).
* **Total All PayConnect Fees**: Total of all amounts in the PayConnect Fee column. Shown at the end of the report.
* **Total All CareCredit Fees**: Total of all amounts in the CareCredit Fee column. Shown at the end of the report.
* **Total All Payments After Fees**: Net amount of all payments after subtracting merchant fees. Calculated as Total All Payments - (Total All CareCredit Fees + Total All PayConnect Fees).