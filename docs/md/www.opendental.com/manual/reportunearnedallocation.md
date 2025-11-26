Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Unearned Allocation Report

Use the Unearned Allocation report to help find families that may have income that should have been allocated to procedures and was missed.

In [Unearned Income Reports](reportunearnedincome.html), click **Unearned Allocation**.

![](images/reportUnearnedAllocation.png)

This report shows all families where one or more patients have an [Unearned / Prepayment](unearnedprepayment.html) payment split attached to them with subsequent completed procedures that have a remaining patient portion due.

Note:

* To determine user access to these reports, see [Report Setup: Security Permissions](reportsecurity.html).
* This report is only available for [MySQL 5.6](mysql56update.html) and [MariaDB](mariadb.html) users. MySQL 5.5 or lower users who would like to run this report, please contact Open Dental Support to upgrade.

## Filters

Set the report criteria before running the report.

**Show provider column**: Check to show the *Prov* column on the report.

**Exclude families with a net $0.00 unearned income balance**: Determines if families where the net unearned income balance is $0.00 are included in the report.

* Checked: Remove families with no current unearned income from the report.
* Unchecked: Do not exclude families with a net $0.00 unearned income balance.

**Unearned Types**: Select the [Unearned Types](definitionspaysplitunearned.html) to include. Check **All** to include all unearned types. .

**Providers**: Select the providers to include in the report. Ctrl + click to select multiple. Check  **All** to include all providers, including those marked *Hidden on Reports*.

* Filters by guarantor's primary provider.
* To exclude hidden providers from the report, manually select visible providers from the list.

**Clinics**: Select clinic to include in the report. Ctrl + click to select multiple. Check **All (Includes hidden)** to select all clinics, including those that are hidden, and include patients not assigned to a clinic.

* Filters by guarantor's assigned clinic.

## Report Preview

Click **OK** to generate the report. Below is an example of the report and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

Patients on this report may need to have their Unearned / Prepayments allocated to the listed procedures.

![](images/reportUnearnedAllocationResult.png)

* **Guar**: Last name and first name of family guarantor.
* **FamBal**: Total family balance due.
* **FamUnearned**: Total family unearned income amount.
* **FamRemAmt**: Family estimated balance remaining amount (family total - family insurance estimates).
* **Prov**: Only shows when *Show provider column* box is checked. Abbreviation of provider attached to unallocated income. Blank indicates no provider is assigned.
* **Pat**: Last name and first name of patient associated to procedure.
* **Code**: Procedure code with remaining patient portion due.
* **Date**: Procedure date (i.e., date completed).
* **Fee**: Procedure fee.
* **RemAmt**: Patient estimated balance remaining amount (patient total - patient insurance estimates).