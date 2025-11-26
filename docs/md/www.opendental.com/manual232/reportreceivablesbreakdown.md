Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Receivables Breakdown Report

The Receivables Breakdown Report allows offices to see changes in accounts receivable throughout a calendar month.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Receivables Breakdown**.

![](images/reportReceivablesBreakdown.gif)

This report is a breakdown, by date, of outstanding patient balances.

Note:

* If the *Pay Plan charge logic* [Preference](preferences.html) is set to *Age Credits and Debits*, this report will take into account payment plan amounts due. Otherwise it will not.
* To make the totals on this report match the Aging of A/R report total, see the bottom of this page.
* To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

**Providers**: Select the treating providers to include.

* Practice is the default option. It includes all providers and unearned paysplits.
* Provider selection is only an option if the logged-on user has the *Production and Income, View All Providers* permission. Select one or more providers to view.
* If all providers are selected manually, unearned paysplits are not included. To include unearned in the Ending A/R, select *Practice* instead.

**Show Insurance Write-offs**: Select when write-offs should be applied. See [Show Insurance Writeoffs](writeoffstoproduction.html) for more details.

* Use insurance payment date: Apply write-offs on the date the insurance claim is received.
* Use procedure date: Apply write-offs on the day the procedure is completed.

**Up to the following date**: Select the end date for the report. The start date is always the first day of the same month (e.g., if the end date of August 26 is selected, the start date will be August 1).

## Report Preview

After setting report filters, click **OK** to generate a print preview of the report. Below is an example of the report and descriptions of each column of the report.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportReceivablesPrint.png)

* **Production**: Total amount of completed procedures.
* The following columns only appear when the *Pay Plan charge logic* Preference is set to *Age Credits and Debits*.

+ **PayPlanCredit**: Credits applied to patient accounts to offset payment plan charges.
+ **Prod-PPCred**: Production after PayPlanCredits are subtracted.
+ **PayPlanCharges**: Payment plan debits.

* **Adjustments**: Total combined positive and negative [Adjustments](adjustments.html).
  + Adjustments attached to procedures are counted on the report as of *(procedure date)* noted on the Adjustment. If adjustments are not attached to procedures, they are counted on the report as of the *Adjustment Date*.
* **Write-off**: PPO and capitation insurance write-offs.
* **Payment**: Amount received from patient payments.
* **InsPayment**: Amount received from insurance payments. Determined amounts entered for *Insurance Paid*  on [Claim Procedures ( claimprocs )](claimprocedure.html). May include unfinalized payments.
* **Daily A/R**: Net change in account receivables.
* **Ending A/R**: Total account receivables.

## Matching Receivables Breakdown and Aging of A/R Totals

To get the [Aging of Accounts Receivable (A/R) Report](reportaging.html) Total to match the Receivables Breakdown, Ending A/R Total, run each report for all providers and select the options below.

Note: Reports will not match if you have payment plans.

Receivables Breakdown Report:

* Provider: Practice
* Show Insurance Write-offs: Select Using insurance payment date.
* Dates: Same as Aging of A/R Report.

Aging of A/R Report:

* Date: Same as Receivables Breakdown report.
* Age of Account: Any Balance
* Negative Balances:- Check Include negative balances. - Do NOT check Only show negative balances.
* Exclusions: Do NOT check any of the exclusions.
* Billing Types: All
* Providers: All

The reports will not match if run for specific providers, even if there are no payment plans. The Aging of A/R report includes all entries associated with any patient who has the selected provider as their primary provider at the time of the work. The Receivable Breakdown includes ONLY the entries where the selected provider was the provider on the procedure/claim/adjustment/write-off. These totals will be very different.