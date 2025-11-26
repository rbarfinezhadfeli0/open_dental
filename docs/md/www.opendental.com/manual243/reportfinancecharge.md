Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Finance Charge Report

The Finance Charge Report lists all Finance Charges applied on a selected date.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Finance Charges**.

![](images/reportFinanceCharge.png)

This report lists all [Finance Charges](financecharges.html) applied on a selected date. The report does not include Billing Charges.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set the report criteria before running the report.

**Providers**: Highlight the providers to include in the report. Check **All** to include all providers in the report, including those marked *Hidden on Reports*. Filters by provider attached to Finance Charge [Adjustment](adjustments.html).

* To exclude hidden providers from the report, manually select visible providers from the list.

**Billing Types**: Select the [Billing Types](definitionsbillingtypes.html) to include in the report. Check **All** to include all billing types, including those marked hidden.

**Date Range**: Filter the report by the finance charge adjustment date. The default range is the most recent date finance charges were applied.

## Report Preview

Click **OK**, to generate a print preview of the report. The following is an example of the report and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportFinanceChgPrint.png)

If multiple finance charges exist in the date range for the same patient, they are each listed separately. Charges are displayed alphabetically by patient.

**PatNum**: Unique Patient Number assigned to the patient in [Edit Patient Information](patientedit.html).

**Patient Name**: Patient's last and first name.

**Preferred Name**: Patient's preferred name (e.g., nickname).

**Amount**: Amount of individual finance charge. Total of all finance charges listed on the report is included on the last page of the report in bold.