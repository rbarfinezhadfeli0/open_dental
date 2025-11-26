Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Insurance Aging Report

The Insurance Aging Report is useful for viewing a breakdown of insurance and patient portion estimates by age of account.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Insurance Aging Report**.

![](images/reportInsAging.png)

Offices that want to ensure they are getting paid by insurance companies and want to follow up on older claims should use the [Outstanding Insurance Claims Report](reportoutins.html) instead.

This report is based on the guarantor's billing type, primary provider, and clinic. [Aging](aging.html) is automatically recalculated when the report is generated.

Note:

* To control user access to reports, see [Report Setup: Security Permissions](reportsecurity.html).
* Determine default settings for the report with *Wrap columns when printing* and*Show PatNum* in [Report Setup: Misc Settings](reportmiscsettings.html).

## Filters

Set the report criteria and filters before running the report.

**As Of Date**: Enter the *as of* date for the report. Defaults to the date of the most recent aging calculation (usually today). If changed to a historical date, totals reflect all transactions up to the date entered except for estimated write-offs.

**Age of Account**: Select which patients to include based on aging balance.

* **Any Balance**: Include patients with any balance due.
* **Over 30 Days**: Include all patients with any balances that are over 30 days due.
* **Over 60 Days**: Include all patients with any balances that are over 60 days due.
* **Over 90 Days**: Include all patients with any balances that are over 90 days due.

**Group By**: Select how to group calculation amounts.

* **Family**: Group by family, listed by guarantor. Only shows guarantor and family totals, even if insurance plans differ.
* **Individual**: Group by individual patient.

**Only show patients with outstanding claims**:

* Checked: Limit report to patients with outstanding claims and enable insurance breakdown options below. Results are grouped by both carrier name and group name.
* Unchecked: Display all patients, regardless of whether they have outstanding claims.

**Filter**: Insurance breakdown options. Only available when *Only show patients with outstanding claims* is checked.

* **Carrier Name like**: Type an insurance carrier name to limit the report results.
* **Group Name like**: Type an insurance plan group name to limit report results.

**Billing Types**: Highlight the billing types to include or check **All** to include all billing types.

**Providers**: Highlight the primary providers to include or check *All* to include all providers, including those marked *Hidden on Reports*.

* When Group By is set to Family, filters by guarantor's primary provider.
* When Group By is set to individual, filters by patient's primary provider.
* To exclude hidden providers from the report, manually select visible providers from the list.

**Clinics**: **Clinics**: Select clinics to include in the report. Check **All (includes hidden)** to include all clinics, including those marked hidden.

* When Group By is set to Family, filters by the guarantor's assigned clinic. When Group By is set to Individual, filters by the patient's assigned clinic.
* If user is restricted to specific clinics, only accessible clinics are listed. When checking **All (includes hidden)**, results include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or patients not assigned to a clinic.

## Report Preview

Click **OK** to generate the report. The resulting report changes depending on if *Only show patients with outstanding claims* is checked. Below are example reports and explanation of report columns.

Report, run by individual, with *Only show patients with outstanding claims* unchecked:

![](images/ReportInsAgingPrintDetailed.png)

Report, run by family, with *Only show patients with outstanding claims* checked:

![](images/ReportInsAgingPrint.PNG)

The columns vary depending on the report criteria.

* **Guarantor or Patient**:
  + When grouping by *Family* the last name and first name of the guarantor of a family. Subsequent columns for the row reflect family balances.
  + When grouping by *Individual* the last name and first name of an individual patient. Subsequent columns reflect individual patient balances.
* The following columns only appear on the report when *Only show patients with outstanding claims* is checked:

+ **Carrier**: Insurance carrier associated with the outstanding insurance estimate.
+ **Group Name**: Group name of the insurance plan associated with the outstanding insurance estimate.

* **Ins Pay 0-30 Days**: The estimated insurance balance that is 30 days past due.
* **Ins Pay 31-60 Days**: The estimated insurance balance that is 31-60 days past due.
* **Ins Pay 61-90 Days**: The estimated insurance balance that is 61-90 days past due.
* **Ins Pay > 90 Days**: The estimated insurance balance that is greater than 90 days past due.
* **Ins Est Total**: The total of any outstanding insurance estimates. This includes [Claim Procedures ( claimprocs )](claimprocedure.html) with a status of *Not Received* and [Pending Supplemental Insurance Overpayments/Underpayments](https://www.opendental.com/manual243/claimpendingsupplemental).
* The following columns only appear when *Only show patients with outstanding claims* is unchecked:

+ **Pat Est 0-30 Days**: The patient estimated balance up to 30 days past due.
+ **Pat Est 31-60 Days**: The patient estimated balance 31-60 days past due.
+ **Pat Est 61-90 Days**: The patient estimated balance 61-90 days past due.
+ **Pat Est > 90 Days**: The patient estimated balance greater than 90 days past due.
+ **Pat Est Bal Total**: The total patient estimated balance.
+ **W/O Change**: The difference between the original write-off estimate and the current write-off estimate (if changed) for unreceived claims.
+ **Pat Est Amount Due**: The total amount estimated to be owed by patient after insurance estimates and changes in write-offs. This is based on the total account balances and not only outstanding claims (i.e. Pat Est Amount Due = Total Account Balance - Ins Pay Total - Write-offs).

## Report Logic

Insurance payment estimate (*Ins Pay*) columns are based on the [Claim Snapshot](claimsnapshot.html) and include estimated write-offs. If any change is made that affects the estimated write-off, this is reflected in the *W/O Change* column only.

Patient estimated balances (*Pat Est*) columns are based on the Total Account Balance, this amount is not on the report, minus insurance payment estimates from the Claim Snapshot (e.g., Pat Est >90 = Total Account Balance - Ins Pay Est >90)

This report does not exclude accounts with negative balances.