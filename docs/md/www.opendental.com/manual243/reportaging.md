Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Aging of Accounts Receivable (A/R) Report

Run the Aging of A/R Report to see all accounts receivable.

In [Standard Reports](reportsstandard.html), in the *Monthly* section, click **Aging of A/R**.

![](images/reportAging.png)

The Aging of A/R report lists accounts with balances owed. The report can also be run to include accounts with credits. The report is based on the guarantor's billing type, primary provider, and clinic. [Aging](aging.html) is automatically recalculated when the report is generated.

![](images/youtubeLogo.png) Watch the Webinar: [Aging of Accounts Receivable (A/R)](https://youtu.be/KeMsPTn8wmI)

Note:

* If the pay plan logic is *Age Credits and Debits* in Preferences, payment plan due amounts are included in the A/R balance.
* To control user access to reports, see [Report Setup: Security Permissions](reportsecurity.html).
* To set other report defaults, see [Report Setup: Misc Settings](reportmiscsettings.html) (i.e., *Wrap columns when printing* and *Show PatNum*).

## Filters

Set the report criteria and filters before running the report.

**As Of Date**: Enter the *as of* date for the report. Defaults to the date of the most recent aging calculation (usually today). If changed to a historical date, totals reflect all transactions up to the date entered except for estimated write-offs. Write-offs are calculated as of the current date.

**Age of Account**: Select which patients to include based on aging balance.

* **Any Balance**: Include patients with any balance due.
* **Over 30 Days**: Include all patients with balances that are over 30 days due.
* **Over 60 Days**: Include all patients with balances that are over 60 days due.
* **Over 90 Days**: Include all patients with balances that are over 90 days due.

**Group By**: Select how to group calculation amounts.

* **Family**: Group by family, listed by guarantor name.
  + When grouped by family, the report includes patients with negative balances and insurance estimates by default.
* **Individual**: Group by individual patient.
  + When grouped by individual, patients with negative balances and insurance estimates can be manually included. This is required to see an itemized family breakdown (see below).

**Exclude Patients With**: These options exclude selected patients in the report results. Check to enable; uncheck to disable. When grouping by *Family* this is based on the Guarantor only.

* **Inactive status**: Do not include patients who are marked Inactive on the Edit Patient Information window.
* **Archived status**: Do not include patients who are marked Archived on the Edit Patient Information window.
* **Bad addresses (no zip code)**: Do not include patients who have no zip code entered on the Edit Patient Information window.

**Include Patients With**: Include patients that meet the selected criteria. Check to enable; uncheck to disable. When grouping by *Family* this is based on the total family balance.

* **No selection**: Only include patients with positive balances.
* **Negative balances**: Includes patients with negative (i.e., credit) balances.
* **Insurance estimates and no balance**: Include patients with a balance of zero, but also have an insurance estimate.

**Only Patients With**: Include only patients who match selected criteria. Check to enable; uncheck to disable. When grouping by *Family* this is based on the total family balance.

* **Negative balances**: Only show patients who have a negative balance (i.e., credit).
* **Insurance estimates and no balance**: Only show patients with a balance of zero, but also have an insurance estimate.

**Age write-off estimates**: Check to subtract original write-off estimate amounts from aging category totals. Write-off estimates are aged by procedure date. See Report Logic section below for additional information.

**Show last payment date (landscape)**: Include date of last payment for patients. This prints the report in landscape orientation.

**Exclude income transfers**: When checked, [Income Transfers](incometransfer.html) (existing income that has been re-allocated) are not aged by the transfer date but instead by the original payment date. Option is only available when Group By is set to *Family*.

Note:

* Aging categories on the report may not match other areas of the program when checked.
* This option is only available for users on [MySQL 5.6](mysql56update.html) or [MariaDB](mariadb.html). If using MySQL 5.5, a warning indicates the database must be upgraded.

**Billing Types**: Highlight the [Billing Types](definitionsbillingtypes.html) to include or check **All** to include all billing types, including those marked hidden.

**Providers**: Highlight the providers to include. Check **All** to include all providers, including those marked *Hidden on Reports*.

* When *Group By* is set to *Family*, filters by guarantor's Primary Provider.
* When *Group By* is set to *Individual*, filters by patient's Primary Provider.
* To exclude hidden providers from the report, manually select visible providers from the list.

**Clinics**: Only available when Clinics are enabled in [Show Features](showfeatures.html). Highlight clinics to include in the report. Check **All (includes hidden)** to include all clinics, including those marked hidden.

* When *Group By* is set to *Family*, filters by guarantor's assigned clinic.
* When *Group By* is set to *Individual*, filters by patient's assigned clinic.
* If user is restricted to specific clinics, only accessible clinics are listed. When checking **All (includes hidden)**, results include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or patients/guarantors not assigned to a clinic

**Generate Query**: Click to generate the raw query text of the Aging report.

The red text *Future dated transactions are allowed* only appears if one or more of the following [Preferences](preferences.html) are enabled: *Allow future dated payments*, *Allow future payments*, *All future dated transactions*. Aging may look inaccurate if any of these preferences are allowed.

## Report Preview

Click **OK** to generate a print preview of the report. The following is an example of the report and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportAgingPrint.png)

Below is a description of each column in the report. The columns vary depending on the report criteria. See Report Logic section below for additional information on how column totals are calculated.

* **Guarantor** or **Patient**
  + When grouping by *Family*, the guarantor of any families who meet filter criteria is listed. Subsequent columns are reflective of family balances.
  + When grouping by *Patient*, the name of any patient who meets filter criteria. Subsequent columns are reflective of patient balance.
  + Enable *Show PatNum: Aging, OutstandingIns, ProcsNotBilled* in [Report Setup: Misc Settings](reportmiscsettings.html) to include Patient Number.
* **0-30 Days**: The balance that is 30 days past due.
* **31-60 Days**: The balance that is 31-60 days past due.
* **61-90 Days**: The balance that is 61-90 days past due.
* **> 90 Days**: The balance that is greater than 90 days past due.
* **Total**: The total amount owed by the individual or guarantor, before insurance.
* **-W/O Est**: The insurance write-off estimate amount based on the procedures attached to the claim. Only shows if *Age write-off estimates* is unchecked and there are still unreceived write-off estimates as of the report date.
* **-W/O Change**: The difference between the original write-off estimate and the current write-off estimate for unreceived claims. Only shows if *Age write-off estimates* is checked and if the original write-off estimate changed.
  + If there are no changes in the original write-off estimate for any accounts on the report, this column is hidden when *Age write-off estimates* is checked.
* **-Ins Est**: The total estimated insurance payment amount. This is the sum of all claims for the individual or family.
* **Patient**: The estimated patient portion.
  + When *Age write-off estimates* is unchecked this is calculated by Total - Ins Est - W/O Est.
  + When *Age write-off estimates* is checked this calculated by Total - Ins Est - W/O Change.
* **Last Pay Date**: The date of the last received patient payment. Only shows when *Show last payment date* is checked.

Note:

* Negative balances (i.e., credits) are not reflected in aging categories (0-30, 31-60, etc.) These balances are reflected in the Total and Patient amounts.
* If the preference *Transactions attached to a procedure offset each other before aging* is enabled, negative adjustments are reflected in balances as of the procedure date, even when the adjustment date is after the *As of* date.

## Report Logic

If *Age write-off estimates* is checked:

* Totals throughout the *0-30 Days*, *31-60 Days*, *61- 90 Days*, *> 90 Days* and *Total* columns are reduced by the total outstanding write-off aged for that age period (e.g., *0-30 Days* = *Total 0-30 Balance* - *0-30 Days Estimated Write-off* or *0-30 Days* = *0-30 Days Patient Estimated Balance* + *0-30 Days Estimated Insurance Payment Pending*).
* The aging and total columns do not consider changes to the original write-offs.
* Original write-off estimates come from the [Claim Snapshot](claimsnapshot.html). If any change is made to the original write-off, this is reflected in the *W/O Change* and *Patient* columns.

If *Age write-off estimates* is unchecked, age columns and *Total* are based on the billed fee (e.g., UCR fee) and do not subtract write-offs.

To match the totals of the Aging of A/R Report and Receivables Breakdown Report: See [Receivables Breakdown Report](reportreceivablesbreakdown.html).

## Examples

**After a Conversion**: Generate an Aging of A/R report to compare the total account balance in the old software with the beginning total account balance in Open Dental.

![](images/agingARExample1.png)

* Run the Aging of A/R report on the date of conversion. Enter the conversion date as the **As of Date**.
* In *Age of Account*, choose **Any Balance**.
* In the *Include Patients With* section, check **Negative balances**.
* Ensure all **Billing Types** and **Providers** are checked.
* If using clinics, choose the **Clinics** to include on the report.
  + Report can be run once for all clinics or separately for each clinic.
  + If some clinics have been hidden, checking **All (includes hidden)**, includes patients attached to hidden clinics. Running the report for each clinic separately may exclude some A/R if it is attached to patients assigned a hidden clinic.
* If payment plans were converted, users need to account for payment plan due balances in the A/R. If pay plan logic is Age Credits and Debits, these amounts are reflected in the A/R balance. If not, run the [Payment Plans Report](reportpaymentplan.html) instead.

**Collections**: Make the list smaller for sending accounts to collections (e.g., for non-payment).

![](images/agingARExample2.png)

* Filter the report by *Age of Account* (e.g., Over 90 Days).
* If a Billing Type is assigned to patients who have already been sent to collections, filter the report by Billing Type
  + Uncheck **All** under *Billing Types* and select the desired billing type(s) (e.g., Bad Debt).

**Families with positive balances**: Create a list of all families with at least one family member with a balance due.

![](images/agingARExample3.png)

* *Age of Account:* Choose **Any Balance**.
* *Billing Types*: Check **All**.
* *Providers*: Check **All**.
* *Group By*: Choose **Family**.
* If using clinics, check **All (includes hidden)** to run for guarantors assigned to all clinics, including those that have been hidden, or choose the specific clinic to run.

**Total practice account balance**: Create a list of all account balances regardless if they are negative or not.

![](images/agingARExample4.png)

* *Age of Account*: Choose **Any Balance**.
* *Include Patients With*: Check **Negative balances**.
* *Billing Types*: Check **All**
* *Providers*: Check **All**
* *Group By*:
  + To see balances by individual patient, choose **Individual**.
  + To see total family balances, listed by guarantor, choose **Family**.

**Accounts with credits**: Create a list of all accounts with a negative balance (i.e., credit)

![](images/agingARExample5.png)

* *Age of Account*: Choose **Any Balance**.
* *Only Patients With*: Check **Negative Balances**.
* *Billing Types*: Check **All**.
* *Providers*: Check **All**.
* If using clinics, check **All (includes hidden)** to run for guarantors assigned to all clinics, including those that are hidden, or choose the specific clinic to run.

## Questions and Answers

**Question: I am comparing my Aging of A/R total from two dates. I expect the differences to be equal to the Production and Income amounts for the period, but they differ. Why?**

Answer: If Line Item Payment Plans are not turned on, payment plans are not part of individual account balances and therefore not part of the practice balance, which is the A/R. Every time you create a payment plan you are making a loan and reducing your A/R. Likewise, payments attached to a payment plan do not change your A/R, but do affect production and income.

AR1 - AR2 =

(ProdT2 - ProdT1) - (IncomeT2 - IncomeT1) + (PayPlanPaymentsT2 - PayPlanPaymentsT1) - Change of TP completed amounts of all payment plans.

**Question: I am using clinics. When I run reports, the Aging of A/R report shows payment assigned to one clinic, but the Production and Income (P & I) report shows the same payment assigned to a different clinic. Why?**

Answer: Each report determines the clinic differently. The Aging of A/R report determines clinic based on the guarantor's assigned clinic (the person technically 'owns' the debt). The P & I report determines clinic based on the clinic assigned to the procedure (place of service).

**Question: I want to know how long insurance estimates have been outstanding. How can I find this out?**

Answer: Run the [Insurance Aging Report](reportinsaging.html).