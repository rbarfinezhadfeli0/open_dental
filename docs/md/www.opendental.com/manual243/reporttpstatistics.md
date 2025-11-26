Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Treatment Plan Presentation Statistics Report

Find metrics by user regarding Treatment Plan Presentation by running the Treatment Plan Presentation Statistics report.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Presented TreatPlan Statistics**.

![](images/reportTPStatistics.png)

This report shows various metrics about [Saved Treatment Plans](../manual/treatmentplanedit.html), by treatment plan presenter, including:

* Total number of treatment plans saved in a date range.
* Total number of procedures in Saved Treatment Plans.
* Total number of procedures that currently have a status of scheduled or completed.
* Gross and net totals for presented plans and procedures.

Note:

* To assign presenters to treatment plans, see [Edit Treatment Plan](treatmentplanedit.html).
* To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set report filters before running the report.

**Calendars:** Select the date range for the report. Only Saved Treatment Plans with a date within the date range are included. The default is last month.

* Select the start date in the left calendar.
* Select the end date in the right calendar.

**Users**: Select the users (or presenters) to include in the report. Check **All** to include all users, including those marked as *Is Hidden*.

**Clinics:** Select clinics to include in the report. Check **All (includes hidden)** to include all clinics, including those marked as *Is Hidden*.

* Filters by clinic assigned to procedure.
* If user is restricted to specific clinics, only accessible clinics are listed.

**Calculated Production**: Select an option to determine how production is calculated when running report. The selected option also determines the available columns on the generated report. See Report Preview below for more information.

* **Gross Production**: Select to run the report calculated by gross production only.
* **Net Production**: Select to run the report calculated by net production (gross production - estimated or actual write-offs - discounts + adjustments).

**Order Presented**: Production for procedures on multiple treatment plans is only counted once. Select how production is attributed.

* **First Presented**: Attribute production to the user or presenter on the treatment plan saved first.
* **Last Presented**: Attribute production to the user or presenter on the treatment plan saved last.

**User Displayed**: Select how the report presenter is determined.

* **Presenter**: The *presenter* associated with the treatment plan.
* **Entry User**: The *entry user* associated with the treatment plan.

## Report Preview

Click **OK** to generate a print preview of the report. The following are examples of the reports and explanations of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

**Gross Production Example**

![](images/reportTPStatisticsPrinted.png)

**Net Production Example**

![](images/reportTPStatisticsPrintedNet.png)

* **Presenter**: The treatment plan presenter. Determined by the selections on the prior report window.
* **# of Plans**: The number of Saved Treatment Plans with a date in the date range for the user.
* **# of Procs**: The total number of treatment planned procedures in Saved Treatment Plans. Excludes deleted procedures that are still listed in a Saved Treatment Plan.
* **# of ProcsSched**: The total number of procedures in Saved Treatment Plans that are attached to a scheduled appointment for treatment plans in the date range.
* **# of ProcsComp**: The total number of completed procedures attached to Saved Treatment Plans in the date range.
* The following columns only appear when *Gross Production* is selected:

+ **GrossTPAmt**: The total gross amount for all treatment planned and completed procedures in Saved Treatment Plans in the date range. Excludes deleted procedures that are still listed in a Saved Treatment Plan.
+ **GrossSchedAmt**: The total gross amount for all treatment planned procedures in Saved Treatment Plans in the date range, that are attached to an appointment with a status of *Scheduled*.
+ **GrossCompAmt**: The total gross amount for all completed procedures in Saved Treatment Plans in the date range.

* The following columns appear when *Net Production* is selected:

+ **NetTPAmt**: The total net amount for all treatment planned and completed procedures in Saved Treatment Plans in the date range. Excludes deleted procedures that are still listed in a Saved Treatment Plan.
+ **NetSchedAmt**: The total net amount for all treatment planned procedures in Saved Treatment Plans in the date range, that are attached to an appointment with a status of *Scheduled*.
+ **NetCompAmt**: The total net amount for all completed procedures in Saved Treatment Plans in the date range.