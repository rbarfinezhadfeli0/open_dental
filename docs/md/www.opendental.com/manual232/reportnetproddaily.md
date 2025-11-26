Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Net Production Detail Daily Report

The Net Production Detail Daily Report (Provider Payroll Transactional Report) is a true daily report that lists net production by transaction in a specified date range.

In [Standard Reports](reportsstandard.html), in the *Daily* section, click **Net Production Detail Daily**.

![](images/reportNetProdDetail.png)

This report is useful for offices that use accrual accounting. The estimated write-off is reported on the date of service and any variance in that write-off is reported on the insurance payment date as the change from estimate to actual.

Note:

* This report uses custom logic created to facilitate provider compensation and may not apply to all offices.
* This report is hidden by default. To show this report see [Report Setup: Display Settings](reportdisplaysettings.html).
* To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters and Report Options

Set the report filters and options before running the report.

**Providers:** Select the providers to include, or check **All** to include all providers, including providers marken *Hidden on Reports*, that have activity (i.e., production) for the reporting period.

**Clinics:** Select the clinics to include in the report, or check **All (includes hidden)** to include all clinics.

**Today's Date**: Automatically populated with the current date for reference. If **Today** is selected as the Report Type, this will be the reporting period.

**Pay Period Date Range:** Select the date range of the report. The default is based on the current Pay Period (see: [Time Card Setup](timecardsetup.html)), if one is set up. Otherwise, it defaults to one week prior to today's date.

* **This Period**: Reset dates to match current pay period.
* **Right**/**Left** arrows: Move back or forward one pay period at a time.
* Click the calendar icons to manually select a date range outside of preset pay periods or type dates manually. Offices without pay periods must use these options to change date ranges. **This Period** and **Arrow** buttons are only functional with pay periods.

**Report Types**: Determine which transaction dates are included in the reporting period.

* **Date Range**: Run the report for a specified date range. Set the reporting period using the From/To dates in the Pay Period Date Range section.
* **Today**: Run the report for today's date only. The Pay Period Date Range section will be grayed out and the report will be set to only run for the current date. Only transactions with today's date are included.

## Report Preview

After setting report options and filters, click **OK** to generate a print preview of the report. Below is an example of the report and explanation of the report columns.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportProvPayrollTransactional.gif)

* **Type**: There are three types that will appear.
  + **Procedure Completed**: Date the procedure was originally completed. This is the *Date* or the *Original Date Comp* if the Date was changed at any time. *UCR* is gross production without capitation. *OrigEstWO*, *EstVsActualWO*, and *Adjustment* are zero by default. Procedures billed to multiple insurance carriers (e.g., primary and secondary claims) will have a row for each insurance claim. This may cause the gross production values to differ from the [Production and Income Reports](reportprodinc.html).
  + **Prod Adjustment**: Date is based on the date the adjustment was created (i.e., *Date Entry*). Bad debt types are not included. *OrigEstWO*, *Adjustment*, and *NPR* are zero by default.
  + **Claim Received**: Date is based on DateSuppReceived column in the database. This date is set automatically when a [Claim Procedure](claimprocedure.html) is first set to received or supplemental. This date cannot be cleared or updated. *UCR*, *OrigEstWO*, and *Adjustment* are zero by default.
* **Date**: Entry date or
* **UCR**: Gross production by day. Does not take capitation write-offs into account. Procedures attached to multiple claims will have UCR listed for each Procedure Completed row; this will affect the UCR total.
* **OrigEstWO**: Original write-off estimate amount for the procedure's claim, based on the [Claim Snapshot](claimsnapshot.html).
* **EstVsActualWO**: The difference between the actual write-off and estimated write-off. Calculated by the Claim Snapshot write-off minus the write-off in the Claim Procedure once marked received .
* **NPR**: Net production: UCR - OrigEstWO + EstVsActWO + Adjustment = NPR.