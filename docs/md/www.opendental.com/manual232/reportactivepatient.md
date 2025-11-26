Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Active Patients Report

The Active Patient report lists all active patients that have had a completed procedure within a specific date range.

In [Standard Reports](reportsstandard.html), in the Lists section, click **Active Patients**.

![](images/reportActivePatient.png)

Note:

* To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).
* To get a list of inactive patients try the following [Query Examples](https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx):
  + Query example 285: Lists patients with status of *Inactive* or *Archived* and includes date last seen.
  + Query example 49: Lists patients not seen since a specified date. Includes contact information.

## Filters

Set the report criteria and filters before running the report.

**Calendar:** Choose a date range. The left calendar shows the start date; the right calendar shows the end date. Calendar automatically defaults to Today's date.

**Billing Types:** Check **All** to include all billing types or uncheck the box to select specific types.

**Patient Status**: Check **All** to include all patient status types or uncheck the box to select specific types.

**Providers:** Check **All** to include all providers or uncheck the box to select specific providers. Filters by patient's primary or secondary provider.

**Clinics**: Select clinics to include in the report. Ctrl + click to select multiple clinics or check **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by patient's assigned clinic.
* If user is restricted to specific clinics, only accessible clinics will list. When checking **All (includes hidden)**, results will include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or patients not assigned to a clinic.

## Report Preview

Click **OK** to generate a print preview the report. Below is an example of the report and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportActivePreview.png)

If using clinics, patients will be grouped into their assigned clinic. The list is sorted by provider and then by patient name.

* **Name**: Patient's last name, preferred name, and first name.
* **Provider**: Patient's primary provider assigned in [Edit Patient Information](patientedit.html).
* **Address**, **Address 2**, **City**, **State**, and **Zip**: Patient's address information from Edit Patient Information.
* **Carrier**: Patient's primary insurance carrier.

Total patient count is included on the last page of the report in bold.