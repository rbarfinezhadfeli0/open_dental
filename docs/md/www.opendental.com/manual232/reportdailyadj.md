Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Daily Adjustments Report

The Daily Adjustments Report lists adjustments for a date range and can be filtered by provider, clinic, or adjustment type.

In [Standard Reports](reportsstandard.html), in the *Daily* section, click **Adjustments**.

![](images/reportDailyAdj.png)

Also see: [Adjustment](adjustments.html)

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set the report criteria and filters before running the report.

**Calendar:** In the first calendar select the start date. In the second calendar select the end date. Since this is a daily report, you typically only run a single date, but you can also include as large of a date range as you wish.

**Providers**: Select the providers to include. Ctrl + click to select multiple providers. Check **All** to include all listed providers.

* Filters by provider attached to the adjustment.
* Users without the *Daily - View All Providers* permission will only see the provider associated with their [User](securityusers.html) in the Providers list and the All checkbox will be disabled.
* Users must have the *Daily - View All Providers* to access the full provider list and utilize the All checkbox.

**Adjustment Types:** Highlight the [Adjustment Types](definitionsadjtypes.html) to include in the report. Select one or multiple types, or check **All** to include all adjustment types, including those marked hidden in Definitions.

**Clinics**: Select clinics to include in the report. Ctrl + click to select multiple clinics or check **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by clinic attached to adjustment.
* If user is restricted to specific clinics, only accessible clinics will list. When checking **All (includes hidden)**, results will include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or adjustments not assigned to a clinic.

## Report Preview

Click **OK** to generate a print preview the report. Below is an example of the report and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportDailyAdjPrint.gif)

* **Date**: Adjustment Date
* **Patient Name**: Patient attached to the adjustment.
* **Prov**: Provider assigned to the adjustment.
* **Clinic**: Clinic assigned to the adjustment.
* **Adjustment Type**: See [Definitions: Adj Types](definitionsadjtypes.html).
* **Note**: Any text from the Note field of the [Edit Adjustment](adjustments.html)  window.
* **Amount**: Adjustment amount. Subtraction adjustment types display as a negative number; Addition adjustment types display as a positive. The Amount total is listed on the last page of the report in bold.