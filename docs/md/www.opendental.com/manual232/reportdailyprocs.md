Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Daily Procedures Report

In [Standard Reports](reportsstandard.html), in the *Daily* section, click **Procedures**.

![](images/reportDailyProcsDlg.gif)

The Daily Procedures Report lists all completed procedures within a date range. This report can be used to track quantity and production of a specific procedure, to generate a list of patients that had a specific procedure performed, or to track overall production.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set the report criteria and filters before running the report.

**Calendar**: Select the date range to include in the report. Select the starting date in the left calendar; select the end date in the right calendar.

**Providers**: Select the providers to include. Ctrl + click to select multiple providers. Check **All** to include all providers, including those marked *Hidden on Reports*.

* Filters by treating provider (i.e., provider assigned to [Procedure](procedureedit.html)).
* Users without the *Daily - View All Providers* permission will only see the provider associated with their [User](securityusers.html) in the Providers list and the All checkbox will be disabled.
* Users must have the *Daily - View All Providers* to access the full provider list and utilize the All checkbox.

**Type**: Choose which type of report to run.

* **Individual Procedures**: Lists all patients, procedures and production, ordered by date.
* **Grouped by Procedure Code**: Groups procedure codes together and removes patient names to show quantity and fees only.

**Only for procedure codes similar to**: Filter the report to only include certain procedure codes.

* Enter a complete procedure code (e.g., D1234) to limit the report to a single procedure code.
* Enter a partial procedure code (e.g., D12) to include all similar codes (e.g., D1234, D1245, etc)

**Clinics**: Select specific clinics, or check **All (includes hidden)** to include all patients, including those marked hidden.

* Filters by clinic assigned to procedure.
* If user is restricted to specific clinics, only accessible clinics will list. When checking **All (includes hidden)**, results will include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or procedures not assigned to a clinic.

## Report Preview

Click **OK** to generate a print preview the report. The resulting report will change depending on the selected *Type*. Below are examples of the report results and descriptions of each column on the report.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

**Report Type: Individual Procedures**

![](images/reportDailyProcs.gif)

* **Date**: Date procedure was set complete.
* **Patient Name**: Patient procedure was set complete for.
* **Code**: Procedure code.
* **Tooth**: Tooth number, if applicable.
* **Description**: Description of the procedure code.
* **Provider**: Provider assigned to the procedure (i.e., treating provider).
* **Clinic**: Only show when Clinics feature is enabled (see [Show Features](showfeatures.html)). Clinic assigned to the procedure. This may differ from the patient's assigned clinic.
* **Fee**: Procedure amount (i.e., fee billed to the patient's account).

**Report Type: Grouped by Procedure Code**

![](images/reportDailyProcsGrouped.gif)

* **Category**: The procedure code category assigned to the procedure. See [Procedure Code Edit](procedurecodeedit.html).
* **Code**: Procedure code.
* **Description**: Description of the procedure code.
* **Quantity**: Number of these procedure codes set complete for the selected date range.
* **Average Fee**: The average (Total Fees divided by Quantity) of the fee billed for the procedure code.
* **Total Fees**: The total of the fees billed for the procedure code.