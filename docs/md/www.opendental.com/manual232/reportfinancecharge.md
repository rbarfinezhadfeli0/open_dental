Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Finance Charge Report

The Finance Charge Report lists all Finance Charges applied on a selected date.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Finance Charges**.

![](images/reportFinanceCharge.png)

This report lists all [Finance Charges](financecharges.html) applied on a selected date. The report does not include Billing Charges.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

**Providers**: Select the providers to include in the report, or check **All** to include all providers in the report, including those marked *Hidden on Reports*. Filters by provider attached to Finance Charge [Adjustment](adjustments.html).

**Billing Types**: Select the [Billing Types](definitionsbillingtypes.html) to include in the report, or check **All** to include all billing types, including those marked hidden.

**Date Range**: Enter the a date range to run the report. The date range defaults to the last date finance charges were applied.

* **From**: Type the desired start date to run the report.
* **To**: The the desired end date to run the report. Finance charges dated this date will be included.

## Report Preview

Click **OK**, to generate a print preview of the report. Below is an example of the report and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportFinanceChgPrint.png)

If multiple finance charges exist in the date range for the same patient, they will each be listed separately. Charges are displayed alphabetically by patient.

**PatNum**: Unique Patient Number assigned to the patient in [Edit Patient Information](patientedit.html).

**Patient Name**: Patient's last and first name.

**Preferred Name**: Patient's preferred name (e.g., nickname).

**Amount**: Amount of individual finance charge. Total of all finance charges listed on the report is included on the last page of the report in bold.