Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Net Production Detail Daily Report

The Net Production Detail Daily Report (Provider Payroll Transactional Report) is a true daily report that lists net production by transaction in a specified date range.

In [Standard Reports](reportsstandard.html), in the Daily section, click **Net Production Detail Daily**.

![](images/reportNetProdDetail.png)

This report is useful for offices that use accrual accounting. The estimated write-off is reported on the date of service and any variance in that write-off is reported on the insurance payment date as the change from estimate to actual.

Note:

* This report uses custom logic created to facilitate provider compensation and may not apply to all offices.
* This report is hidden by default. To show this report see [Report Setup: Display Settings](reportdisplaysettings.html).
* To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters and Report Options

Set the report filters and options before running the report.

**Providers**: Select the providers to include, or check **All** to include all providers, including providers marked *Hidden on Reports*, that have activity (i.e., production) for the reporting period.

* To exclude hidden providers from the report, manually select visible providers from the list.

**Clinics**: Only available if Clinics are enabled in [Show Features](showfeatures.html). Select the clinics to include in the report, or check **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by clinic attached to the production.
* If user is restricted to specific clinics, only accessible clinics are listed. When checking **All (includes hidden)**, results include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or production not assigned to a clinic.

**Today's Date**: Automatically populated with the current date for reference. If **Today** is selected as the Report Type, this is the reporting period.

**Pay Period Date Range**: Select the date range of the report. The default is based on the current Pay Period (see: [Time Card Setup](timecardsetup.html)), if one is set up. Otherwise, it defaults to one week prior to today's date.

* **This Period**: Reset dates to match current pay period.
* **Right**/**Left** arrows: Move back or forward one pay period at a time.
* Click the calendar icons or type a date to manually set the date range outside of preset pay periods. Offices without pay periods must use these options to change date ranges. **This Period** and **Arrow** buttons are only functional with pay periods.

**Report Types**: Determine which transaction dates are included in the reporting period.

* **Date Range**: Run the report for a specified date range. Set the reporting period using the From/To dates in the Pay Period Date Range section.
* **Today**: Run the report for today's date only. The Pay Period Date Range section is grayed out and the report is set to run only for the current date. Only transactions with today's date are included.

## Report Preview

After setting report options and filters, click **OK** to generate a print preview of the report. Below is an example of the report and explanation of the report columns.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportProvPayrollTransactional.png)

* **Type**: There are three types included in the report.
  + **Procedure Completed**: Date the procedure was originally completed. This is the *Date* or the *Original Date Comp* if the Date was changed at any time. *UCR* is gross production without capitation. *OrigEstWO*, *EstVsActualWO*, and *Adjustment* are zero by default. Procedures billed to multiple insurance carriers (e.g., primary and secondary claims) have a row for each insurance claim. This may cause the gross production values to differ from the [Production and Income Reports](reportprodinc.html).
  + **Prod Adjustment**: Date is based on the date the adjustment was created (i.e., *Date Entry*). Bad debt types are not included. *OrigEstWO*, *Adjustment*, and *NPR* are zero by default.
  + **Claim Received**: Date is based on DateSuppReceived column in the database. This date is set automatically when a [Claim Procedure](claimprocedure.html) is first set to received or supplemental. This date cannot be cleared or updated. *UCR*, *OrigEstWO*, and *Adjustment* are zero by default.
* **UCR**: Gross production by day. Does not take capitation write-offs into account. Procedures attached to multiple claims have UCR listed for each *Procedure Completed* row; this affects the UCR total.
* **OrigEstWO**: Original write-off estimate amount for the procedure's claim, based on the [Claim Snapshot](claimsnapshot.html).
* **EstVsActualWO**: The difference between the actual write-off and estimated write-off. Calculated by the Claim Snapshot write-off minus the write-off in the Claim Procedure once marked received .
* **NPR**: Net production amount: UCR - OrigEstWO + EstVsActWO + Adjustment = NPR.