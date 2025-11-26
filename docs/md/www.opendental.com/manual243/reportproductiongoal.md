Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Monthly Production Goal Report

The Monthly Production Goal report compares production goals with actual production.

In [Standard Reports](reportsstandard.html), in the Production and Income section, click **Monthly Production Goal**.

![](images/reportProductionGoal.png)

Production goals can be set from the [Edit Provider](providerseditwindow.html) window.

## Report Filters

Set the report filters and criteria before running the report.

**Providers**: Select the providers to include on the report, or check **All** to include all providers, including those marked *Hidden on Reports*.

* Users without the *Daily - View All Providers* permission will only see the provider associated with their [User](securityusers.html) in the Providers list and the All checkbox will be disabled. Users must have the *Daily - View All Providers* to access the full provider list and utilize the All checkbox.
* To exclude hidden providers from the report, manually select visible providers from the list.

**Clinics**: Select clinics to include in the report. Ctrl + click to select multiple clinics or check **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by clinic assigned to production.
* If user is restricted to specific clinics, only accessible clinics will list. When checking **All (includes hidden)**, results will include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or production not assigned to a clinic.

**Date Range**: Select the date range criteria.

* **Arrows**: Click to move forward or back one month from the currently entered date range.
* **This Month**: Click to enter the current calendar month into the From / To date range boxes.
* **From / To**: Type a specific date range to run the report.

**Show Insurance Write-offs:**

* **Using insurance payment date**: Write-offs are calculated based on date of insurance payment.
* **Using procedure date**: Write-offs are calculated based on date of procedure.
* **Using initial claim date for write-off estimates, ins pay date for write-off adjustments:**  Apply write-off estimates on the day of the insurance claim and changes to write-offs estimates on the insurance payment date. See below for descriptions of each write-off column.

## Report

After setting report criteria, click **OK** to generate the report. Below is an example of the report and explanation of the report columns.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportProductionGoalPrint.gif)

* **Production**: Total amount of completed procedures, before write-offs or adjustments.
* **Prod Goal**: The total goal of the selected providers. Providers must be on the [Schedule](schedule.html) for goal to calculate and have an *Hourly Production Goal* entered in [Edit Provider](providerseditwindow.html).
  + If using Clinics, the provider must be the default provider for an [Operatory](operatories.html) assigned to the Clinic. If the provider is not the default, they must be set as a provider override for an Operatory assigned to the Clinic in [Schedule Edit](scheduleeditdaywindow.html)
* **Scheduled**: Production in scheduled appointments. Procedures must be attached to appointments to calculate.
* **Adjust**: Completed adjustments and discounts attached to scheduled treatment planned procedures.
* **Write-offs**: Amount of total insurance write-offs. Appears when *Using insurance payment date* or *Using procedure date* is selected.
* The following columns display when *Use initial claim date for write-off estimates, ins pay date for write-off adjustments* is selected:
  + **Write-off Est**: The write-off estimate amount in the [Claim Snapshot](claimsnapshot.html).
  + **Write-off Adj**: The change in write-off amounts. Write-off estimate amount (Write-off Est column) minus the actual write-off amount.
* **Total Prod**: Total production. Production + Sched + Adjustments - Write-offs or Production + Sched + Adj - Write-off Est + Write-off Adj.

Note:

* While write-offs are displayed as a negative amount in the grid, that is only for visual emphasis. This does not result in negative amounts being subtracted in the production totals using the equations defined above.
* Occasionally, this report may change if a patients Treatment Plan has not been viewed. Once viewed, the report will refresh with the new discount information.