Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Procedures Not Billed to Insurance Report

The Procedures Not Billed to Insurance report generates a list of procedures with an outstanding insurance estimate that haven't been attached to a claim.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Procedures Not Billed to Ins**.

![](images/reportProcsNotBilledtoIns.png)

Alternatively, in the [Send Claims](claimsend.html) window, click **Procs Not Billed**.

All procedures on this list should either be billed to insurance or marked *Do Not Bill to Ins* in the [Procedure Info window](procedureedit.html). Procedures only appear if the procedure has a fee and the patient has an active insurance plan.

This report can remain open while working in other windows.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Select the report criteria, then click **Refresh** to update the list.

![](images/procNotBilledFilters.png)

**Show Procedures Completed Before Insurance Added:** Check this box to include procedures that were completed before the patient's insurance was added. If unchecked, procedures set complete prior to insurance being added are excluded from the report.

**From / To Dates:** Defaults to today's date. Type a date or click the dropdown to and select a date to from the calendar. Click the arrow again or **Refresh** to close the calendar.

**Clinics**: Select clinics to include in the report. Ctrl + click to select multiple clinics or check **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by Clinic assigned to procedure.
* If user is restricted to specific Clinics, only accessible Clinics are available in the list. When checking **All (includes hidden)**, results include all Clinics user has access to, including those marked hidden, and anything unassigned to a Clinic; results do not include Clinics user is restricted from.

**Procedure Codes**: Type procedure codes and choose a checkbox to filter out specific procedures.

* **Only**: Exclusively show the entered procedure codes.
* **Exclude**: Omit the entered procedure codes.

**Include Medical Procedures:** Check to include unsent procedures for patients who have medical insurance. If unchecked, unsent procedures for insurance plans marked *Medical*  are excluded.

**Automatically Group Procedures**: When checked, if selected procedures include same patient with different clinics or places of service, separate claims are created for each Clinic/place of service when clicking **New Claims**. When unchecked, users are blocked from creating claims when patient procedures have different clinic/place of service; users must select the procedures from the same clinic/place of service only to create claims.

**Show Procedures in Progress**: Check to view procedures with a status of *Complete (In Process)*. These procedures must be [Grouped for Multiple Visits](procsmultipleappts.html).

Click **Refresh** to update report results after changing filter criteria.

## Procedure Not Billed Grid

The report results list each procedure matching the filter criteria that is marked unsent. Descriptions of each column in the grid are below. Right-click a row and select **Go To Account** to open the selected patient's account.

![](images/procsNotBilledReport.png)

* **Patient Name**: Last name and first name of patient associated to the unsent procedure. If *Show PatNum: Aging, OutstandingIns, ProcsNotBilled* is enabled in [Report Setup: Misc Settings](reportmiscsettings.html), also includes Patient Number.
* **Stat**: Procedure status.
  + C: Complete.
  + C/P: Complete (In Process).
  + Other procedure statuses (e.g., treatment planned) are not reflected in this list.
* **Procedure Date**: Date completed. See: [Edit Procedure](procedureedit.html)
* **Procedure Description**: Description from [Edit Procedure Code](procedurecodeedit.html).
* **Clinic**: Clinic assigned to the procedure (i.e., treating clinic).
* **Amount**: Patient billed fee. This may differ from the UCR fee, depending on insurance plan setup.

## Create Claims

To create claims from the Procedures Not Billed to Insurance Report:

1. Highlight the procedures to create a claim for. Ctrl + click to select multiple procedures or click **Select All** to highlight all procedures in the list.
2. Click **New Claims**.
   ![](images/claimcreatebatchMsg.gif)
3. A message indicates the number of claims that may be created. Click **OK** to proceed.
4. If there are any issues creating claims, an error appears. Click **OK** to proceed. Claims without errors are created.
![](images/procsNotBilledError.png)5. Another message indicates the number of claims created. Click **OK** to close the message.
![](images/claimCreateBatchMsg2.png)

Procedures that had claims created are now removed from the list and are *Waiting to Send*. Any unselected procedures or those with errors, remain in the list.

Send claims from patient accounts or the [Send Claims](claimsend.html) window.

## Print Report

Click **Print** to launch a print preview of the report results. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html). The data columns on the print preview are the same as the report grid listed above.

![](images/reportProcsNotBilledIns.png)