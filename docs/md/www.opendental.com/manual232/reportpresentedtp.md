Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Presented Treatment Production Report

The Presented Treatment Production Report totals the production from completed procedures that are attached to saved treatment plans.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Presented TreatPlan Production**.

![](images/reportPresentedTP.png)

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters and Report Options

Set criteria before generating the report

**Calendars:** Select the date range for the report. Set the start date in the left calendar and the end date in the right calendar. Only production for procedures set complete within the date range will be included. The default is the last calendar month.

Report Type: Select an option to change the generated report data.

* **Detailed**: Select to show production by individual procedure.
* **Total**: Select to how total production for each user or presenter.

Order Presented: Production for procedures on multiple treatment plans will only be counted once. Select to whom production for these procedures should be attributed.

* **First Presented**: Attribute production to the user or presenter on the treatment plan saved originally.
* **Last Presented**: Attribute production to the user or presenter on the treatment plan saved most recently.

User Displayed: Select how the presenter will be determined.

* **Presenter**: The *presenter* associated with the treatment plan.
* **Entry User**: The *user entry* associated with the treatment plan.

**Users**: Select the users include. Ctrl + click to select multiple users or check **All** to include all listed users.

* When *User Displayed* is set to Presenter, filters by the user assigned as Presenter on the [Saved Treatment Plan](treatmentplanedit.html).
* When *User Displayed* is set to Entry User, filters by the user assigned as User Entry on the saved treatment plan (i.e., the logged-on user who created the saved treatment plan).

**Clinics:** Select the clinics to include. Ctrl + click to select multiple clinics or check **All (Includes hidden)** to include all clinics, including those marked hidden. Filters by clinics assigned to completed procedure.

## Report Preview

After setting the report criteria, click **OK** to generate a print preview of the report. The layout of the resulting report will depending on the selected *Report Type*. Below are examples of the resulting report descriptions of the report columns.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

**Report Type: Detailed Report**

![](images/reportPresentedTPPrinted.png)

**Report Type: Totals Report**

![](images/reportPresentedTPPrintedTotal.png)

Some columns may change depending on the selected *Report Type*.

* **Presenter**: Entry user or presenter of the saved treatment plan.
* **# of Procs**: Only appears when Report Type of *Totals Report* is selected. Total number of procedures completed in the report date range attached to a saved treatment plan for the Presenter.
* The following fields Only appears when Report Type of *Detailed Report* is selected:
  + **Date Presented**: Date of the saved treatment plan.
  + **Date Completed**: Date of the completed procedure.
  + **Descript**: Procedure description.
* **GrossProd**: Gross production fee (i.e., fee billed to account).
* **Write-offs**: Insurance write-offs. Only counted if an insurance claim has been created. Reflects write-off entered in [Claim Procedure (claimproc)](claimprocedure.html).
* **Adjustments**: Procedure [Adjustments](adjustments.html).
* **NetProduction**: Net production = GrossProd - Write-offs - Adjustments.

Production columns are totaled on the last page of the report, below the grid, in bold.