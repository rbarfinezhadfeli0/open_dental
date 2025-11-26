Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Net Unearned Income Report

This Unearned Income Report shows families with patients that have unearned income payments collected and no unallocated procedures.

In [Unearned Income Reports](reportunearnedincome.html), click the **Net Unearned Income** tab.

![](images/reportNetUnearnedIncome.png)

Patients on this report have a net unearned income balance. Patients need to have treatment scheduled to allocate the payment, a refund should be issued, or payment may need to be allocated to an existing adjustment (e.g., Billing Charge or Finance Charge).

Note: To determine user access to these reports, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set report criteria before running the report.

**Exclude families with a net $0.00 unearned income balance**: Determines if patients where the net unearned income balance is $0.00 are included in the report.

* Checked: Remove patients with no current unearned income from the report.
* Unchecked: Do not exclude patients with a net $0.00 unearned income balance.

**Unearned Types**: Select the unearned types to include. Check **All** to include all unearned types. Unearned types can be set up in [Definitions: PaySplit Unearned Types](definitionspaysplitunearned.html).

**Providers**: Select to providers to include in the report. Filters by patient's primary provider. Ctrl + click to select multiple or check **All** to include all providers, including those marked *Hidden on Reports*.

**Clinics**: Select clinics to include in the report. Ctrl + click to select multiple clinics or check **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by patient's assigned clinic.
* If user is restricted to specific clinics, only accessible clinics will list. When checking **All (includes hidden)**, results will include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.

## Report Preview

Click **OK** to generate the report. Below is an example of the report and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportNetUnearnedIncomeResults.png)

* **Patient**: First name and last name of patient attached to unearned income.
* **Guarantor**: First name and last name of family guarantor of the associated patient.
* **Unearned Amt**: Unearend income total associated with the patient. If filtered by type, this is the total of the selected Unearned Types only.
* **Fam Bal**: Total outstanding family balance. This includes all outstanding insurance estimates and patient portions.