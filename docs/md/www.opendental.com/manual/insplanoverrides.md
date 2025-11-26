Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Insurance Plans Overrides

Override the default Do Not Bill to Ins flag of a procedure on an insurance plan-level.

In a [Procedure Code](procedurecodeedit.html), at the left, click **InsPlans Overrides**.

![](images/insPlanOverrides.png)

The purpose of this window is to override the default setting of the *Do Not Bill to Ins* checkbox on the [Procedure - Financial Tab](procedurefinancial.html) on an insurance plan level.

Each line entry refers to an individual plan. The number of plan subscribers is indicated under the Subs column. If an override is present, the type is indicated in the NoBillIns Override column.

To narrow or sort the list of plans, enter filter criteria. Matching entries list and information is typed.

* **Employer**: Filter by employer name.
* **Group Num**: Filter by group number.
* **Carrier**: Filter by carrier name.
* **Group Name**: Filter by group name.
* **Ins Plan ID**: Filter by the insurance plan ID number (visible on the Edit [Insurance Plan](insplan.html) window).
* **Order By**: Select the sort order of the list.
  + Employer: Sort by employer name.
  + Carrier: Sort by carrier name.

**Get All**: The first 200 results that match filter criteria display. Click to view all results that match.

**Show Hidden**: Include/exclude plans that have been marked Hidden on the Edit [Insurance Plan](insplan.html) window

**Overrides**: Highlight insurance plans and use the buttons below to enable or delete insurance plan overrides.

* **Bill to Insurance**: Defaults the procedure to have the *Do Not Bill to Ins* box unchecked.
* **Don't Bill**: Defaults the procedure to have the *Do Not Bill to Ins* box checked.
* **Delete**: Delete any existing insurance plan overrides. The insurance plan uses the setting assigned in the [Procedure Code](procedurecodeedit.html) window.