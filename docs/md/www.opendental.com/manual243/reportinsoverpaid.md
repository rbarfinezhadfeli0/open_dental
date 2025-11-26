Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Insurance Overpaid Report

The Insurance Overpaid Report finds situations where the insurance payment, plus any write-off, exceeds the procedure fee.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Insurance Overpaid**.

![](images/reportInsuranceOverpaid.PNG)

The purpose of this report is to identify situations where it may be necessary to adjust procedure fees to account for what insurance companies are paying. To resolve overpayments on procedures one by one, use the [Procedures Overpaid Report](reportproceduresoverpaid.html) instead.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set the report criteria and filters before running the report.

**Calendar**: Set the date range to run the report. Select the start date on the left calendar and the end date on the right calendar. Filters by procedure date.

**Clinics**: Only available when Clinics are enabled in [Show Features](showfeatures.html). Select clinics to include in the report. Check **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by clinic assigned to procedure.
* If user is restricted to specific clinics, only accessible clinics are listed. When checking **All (includes hidden)**, results include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or procedures not assigned to a clinic.

Filter Options:

* **Filter results by procedure**: Group the report by procedure.
* **Filter results by patient and date**: Group the report by patient and date. Patients are only included if their total fees for all procedures completed on the same date were overpaid.

## Report Preview

Click **OK** to generate a print preview of the report. The following is an example of the report and explanation of the report columns. For a description of toolbar buttons, [Complex Report System](reportcomplex.html).

![](images/reportInsuranceOverpaid2.PNG)

* **Pat Name**: Patient last name and first name.
* **Date**: [Procedure](procedureedit.html) date (i.e., date completed).
* **Fee**: When *Filter results by procedure* is selected, this is the individual procedure fee. When *Filter results by patient and date* is selected, this is the total fees billed for the date.
* **InsPaid+W/O**: Total of all finalized insurance payments and write-offs.

Totals for the *Fee* and *InsPaid+W/O* columns are included in bold on the last page of the report.

## Troubleshooting

To handle the items on this list, find the original EOBs to verify payment information.

**Fixing Incorrect Payment Amounts**: If the incorrect payment amount was entered, it can only be corrected once any deposit slip and finalized insurance payment are deleted. Once deleted, the payment can be fixed and refinalized and deposit slip recreated. Alternatively, to prevent a change in historical data, a negative supplemental payment can be added with notes that it is a correction and not a refund.

**Fixing Incorrect Write-offs**: If write-off amounts were entered too high, add supplemental payments for the necessary procedures and correct the write-offs by adding negative write-off amounts (e.g., if a write-off entered was $10 too high, create a supplemental payment with a -10 write-off).

**Sending a Refund**: If insurance truly did overpay, they must be notified so that a refund can be arranged. See [Insurance Refunds](insurancerefunds.html) for detailed instructions on creating insurance refunds in Open Dental.