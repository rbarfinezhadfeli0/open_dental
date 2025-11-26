Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Daily Adjustments Report

Use the Daily Adjustments Report to see adjustments for a date range, filtered by provider, clinic, or adjustment type.

In [Standard Reports](reportsstandard.html), in the *Daily* section, click **Adjustments**.

![](images/reportDailyAdj.png)

Also see: [Adjustment](adjustments.html)

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set the report criteria and filters before running the report.

**Calendar**: In the first calendar select the start date. In the second calendar select the end date. Both dates default to the current date, but any date range can be deleted.

**Providers**: Select the providers attached to adjustments to include. Check **All** to include all listed providers.

* Filters by provider attached to the adjustment.
* Users without the *Daily - View All Providers* permission will only see the provider associated with their [User](securityusers.html) in the Providers list and the All checkbox will be disabled.
* Users must have the *Daily - View All Providers* to access the full provider list and utilize the All checkbox.

**Adjustment Types:** Highlight the [Adjustment Types](definitionsadjtypes.html) to include in the report. Select one or multiple types, or check **All** to include all adjustment types, including those marked hidden in Definitions.

**Clinics**: Only available when Clinics are enabled in [Show Features](showfeatures.html). Select clinics to include in the report.

* Filters by clinic attached to adjustment.
* If user is restricted to specific clinics, only accessible clinics are listed. When checking **All (includes hidden)**, results include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or adjustments not assigned to a clinic.

## Report Preview

Click **OK** to generate a print preview of the report. Below is an example of the report and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportDailyAdjPrint.png)

* **Date**: Adjustment Date.
* **Patient Name**: Patient attached to the adjustment.
* **Prov**: Provider assigned to the adjustment.
* **Clinic**: Clinic assigned to the adjustment.
* **Adjustment Type**: See [Definitions: Adj Types](definitionsadjtypes.html).
* **Note**: Any text from the Note field of the [Edit Adjustment](adjustments.html)  window.
* **Amount**: Adjustment amount. Subtraction adjustment types are displayed as a negative number. Addition adjustment types are displayed as a positive. The total is listed on the last page of the report in bold.