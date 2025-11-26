Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

PPO Writeoffs Report

Use the PPO Write-offs report to compare write-offs by claim or carrier.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **PPO Write-offs**.
![](images/reportPPOWriteoffs.png)

This report lists standard fees, PPO fees, and write-off amounts.

Note:

* To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).
* Write-offs are only tracked for insurance plans that use the *PPO Percentage* or *PPO Fixed Benefit* plan type. [PPO Insurance Plan](planppo.html)

## Filters and Options

Set the report options and filters before running the report.

**Calendar:** In the left calendar select the start date. In the right calendar select the end date. The date range defaults to the last calendar month.

Group Results: Select an option to determine how results are grouped.

* **Individual Claims**: List fees and write-offs by claim. Includes patient name.
* **Group by Carrier**: List total fees and write-offs by carrier.

**Enter a few letters of the carrier to limit results**: To filter or limit the results by a specific carrier, type a carrier name here.

**Show Insurance Write-offs:** Determines the date write-offs are applied. See [Show Insurance Write-offs](writeoffstoproduction.html) for more details.

* Using insurance payment date: Apply write-offs on the date the insurance claim is received.
* Using procedure date: Apply write-offs on the day the procedure is completed.
* Using initial claim date for write-off estimates, insurance pay date for write-off adjustments: Apply write-off estimates on the day of the insurance claim and apply changes to write-off estimates on the day the insurance payment is entered. Shows write-off information on the claim date only. Includes additional columns on the report. See below for details.

## Report Preview

Click **OK** to generate a print preview of the report. The following are examples of the report and explanations of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

Example of report when *Individual Claims* is selected:

![](images/reportPPOWriteoffClaim.png)

Procedures billed to multiple PPO insurance plans are shown on separate rows. The *StandFee* for the procedures are included in all the rows for additional claim(s).

The following columns only appear when *Individual Claims* is selected:

* **Date**: Write-off date. Differs depending on the selected *Show Insurance Write-offs* behavior.
* **Patient**: Last name and first name of patient associated to the claim.
* **Provider**: Lists a provider associated with at least one [Claim Procedures ( claimprocs )](claimprocedure.html) on the claim.

Example of report when *Group by Carrier* is selected:

![](images/reportPPOWriteoffCarrier.png)

The following columns appear regardless of the selected grouping behavior:

* **Carrier**: Insurance carrier associated to the write-off.
* **Stand Fee**: Standard fee (e.g., office fee, UCR fee, etc.). This total may not match [Production and Income Reports](reportprodinc.html) as procedures billed to multiple PPO insurance plan types are accounted for in this total for each PPO claim sent.
* **Write-off**: Write-off or estimated write-off. Column does not show when *Using initial claim date for write-off estimates, insurance pay date for write-off adjustments is selected*; Alternate columns are displayed instead.
* The following columns appear when *Using initial claim date for write-off estimates, insurance pay date for write-off adjustments* is selected:

+ **Write-off Estimate**: Write-off estimate in the [Claim Snapshot](claimsnapshot.html). Appears on the report on the initial claim date.
+ **Write-off Adjustment**: Write-off adjustments from the insurance payment date (i.e., any change to the original write-off estimate).

* **PPO Fee**: The Fee Billed - Write-offs.