Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Discount Plans Report

Run the Discount Plans to get a list of patients currently assigned to a discount plan.

In [Standard Reports](reportsstandard.html), in the Lists section, click **Discount Plans**.

![](images/reportdiscountplan.png)

This report is a list of all [Discount Plans](discountplans.html) in use, with the associated fee schedule, adjustment type, and effective and term dates of patients using the plan.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filter

To filter the report to a specific discount plan, enter the discount plan description. To include all plans leave the text box blank. Any discount plans containing matching text in their name are included in the report (e.g., if *Discount* is entered, *Discount Plan 1* and *In-House Discount Plan* are included)

Click **OK** to generate the report.

## Report Preview

The following is an example of the report and descriptions of each report column.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportdiscountplanprint.png)

* **Description**: Discount plan description (i.e., name)
* **FeeSched**: Fee schedule assigned to the discount plan.
* **AdjType**: Adjustment type assigned to the discount plan.
* **DateEffective**: Patient's effective start date for the discount plan
* **DateTerm**: Patient's end date for the discount plan. Patients with a DateTerm in the past are still included in the report. Drop the [Discount Plan Subscriber Edit](discountplan.html) from the patient. Once the discount plan is dropped, the patient is no longer included in the report.
* **Patient**: Last name and first name of the patient assigned the discount plan.

The number of patients is totaled at the end of the last page of the report.