Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Patient Portion Uncollected Report

The Patient Portion Uncollected Report shows the uncollected patient balance of procedures completed in a date range.

In [Standard Reports](reportsstandard.html), in the *Daily* section, click **Patient Portion Uncollected**.

![](images/reportDailyPatPortUncollected.gif)

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

This report is non-modal so users can review accounts while the window is open.

## Filters

Change report criteria filters to update report results.

**From / To**: Select the start and end dates to run the report for. Only procedures completed in the selected date range will appear on the report.

**Clinics**: Select clinics to include in the report. Ctrl + click to select multiple clinics or check **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by clinic assigned to the procedure (e.g., treating clinic).
* If user is restricted to specific clinics, only accessible clinics will list. When checking **All (includes hidden)**, results will include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.

## Report Results

Click **Refresh** to update the report grid based on the selected filters. The grid displays individual procedures with an uncollected patient portion meeting the filter criteria. Right-click a row and select **See Account** to open the [Account Module](account.html) for the selected patient. The report window can stay open in the background. Descriptions of each column in the grid are below.

* **Date**: The procedure completed date.
* **Patient Name**: The last name and first name of patient associated to the procedure.
* **Procedure**: The abbreviation of the completed procedure.
* **Fee**: The procedure fee (multiplied by Base Units and [Unit Quantity](proceduremedical.html) if entered) i.e., billed fee.
* **Patient**: The total amount the patient owes after the insurance estimate or payment and write-off. Insurance estimates are only included for claims that have been created.
* **Adjustment**: The total amount of adjustments attached to the procedure. Parentheses indicate a negative adjustment total (e.g., discount).
* **Patient Paid**: The total amount of patient payments attached to the procedure.

+ This does not include any amount applied as treatment credits from a [Patient Payment Plan](paymentplanpatient.html) or [Dynamic Payment Plan](paymentplandynamic.html).

* **Uncollected**: The remaining procedure balance after any partial patient payments, insurance estimates/payments, insurance write-offs, and adjustments.

Right-click a patient and click *See Account* to open the Account Module for the selected patient.

## Print Preview

Click **Print** to generate a print preview of the report. The print preview includes PatNum (unique Patient Number assigned in [Edit Patient Information](patientedit.html)) in addition to the same data columns as the report results grid listed above. Dollar amount columns (e.g., Fee, Adjustment, etc) are also totaled in bold on the last page of the report below each corresponding column.

From the print preview window, users can print or export the report. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportDailyPatPortUncollectedPrint.png)

## Questions and Answers

**The uncollected amount for a procedure does not reflect the insurance estimate/payment and write-off. Why?**

Procedures on sent and received claims reflect insurance estimates/payments and write-offs. Procedures on claims with any other status do not.

**The account balance is at zero but the report is still showing an uncollected patient portion. Why?**

Procedures must have payments specifically allocated to them or they will still show on the report.