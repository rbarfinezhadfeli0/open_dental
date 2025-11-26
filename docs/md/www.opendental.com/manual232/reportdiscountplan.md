Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Discount Plans Report

Run the Discount Plans to get a list of patients currently assigned to a discount plan.

In [Standard Reports](reportsstandard.html), in the *Lists* section, click **Discount Plans**.

![](images/reportdiscountplan.gif)

This report is a list of all [Discount Plans](discountplans.html) in use, with the associated fee schedule, adjustment type, and effective and term dates of patients using the plan.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filter

To filter the report to a specific discount plan, enter it in the box. To include all plans leave blank. Any discount plans containing matching text in their name will be included in the report (e.g., if *Discount* is entered, *Discount Plan 1* and *In-House Discount Plan* will be included)

Click **OK** to generate the report.

## Report Preview

Below is an example of the report and explanation of the report columns.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportdiscountplanprint.gif)

* **Description**: Discount plan description (i.e., name)
* **FeeSched**: Fee schedule assigned to the discount plan.
* **AdjType**: Adjustment type assigned to the discount plan.
* **DateEffective**: Patient's effective start date for the discount plan
* **DateTerm**: Patient's end date for the discount plan. Patients with a DateTerm in the past will still be included in the report. Drop the discount plan to remove the patient from the report if they are no longer active on the discount plan. See: [Discount Plan](discountplan.html) for instructions.
* **Patient**: Patient assigned the discount plan.

The number of patients is totaled at the bottom of the last page of the report.