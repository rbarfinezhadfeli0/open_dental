Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Insurance Payment Plans Past Due Report

Track Insurance Payment Plans with overdue payments using the Ins Pay Plans Past Due report.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Ins Pay Plans Past Due**.

![](images/reportInsPayPlanPast.gif)

The Insurance Payment Plans Past Due Report lists patients with [Insurance Payment Plans](paymentplanins.html) that have balances overdue. This report is especially useful for orthodontic offices. Insurance payment plan past due amounts do not show in the patient's payment plans grid.

Note: To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set report criteria and filters to update the results.

**Days past due**: Enter the number of the insurance payment is overdue to filter the report. Payment plans with at least one payment overdue the number of days entered or greater will be included.

**Provs**: Select the providers to include. Ctrl + click to select multiple providers. Check **All** to include all listed providers.

**Clinics**: Select clinics to include in the report. Ctrl + click to select multiple clinics or check **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by clinic assigned to the Insurance Payment Plan.
* If user is restricted to specific clinics, only accessible clinics will list. When checking **All (includes hidden)**, results will include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.

## Ins Pay Plans Past Due

The Ins Pay Plans Past Due grid will update immediately when filter criteria is changed. Click **Print** to immediately print the report results. Click **Export** to save the results as a .txt or .xls file file.

Click a column title to sort results in ascending or descending order. Below is a description of the report columns:

* **Patient**: Name of the patient with an outstanding insurance payment plan.
* **DateLastPmt**: The date of the last received insurance plan payment. *01/01/0001* indicates a payments has never been made.
* **#Overdue**: Number of insurance plan payments that are overdue.
* **AmtOverdue**: Dollar amount of total overdue payments.
* **CarrierName/Phone**: Name and phone number of the insurance carrier attached to the overdue payment plan.