Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Provider Payroll Production and Income Report

The Provider Payroll report is a Production and Income Report that can be used to determine a provider's net production and income

In [Standard Reports](reportsstandard.html), click **Provider Payroll Summary** or **Provider Payroll Detail**.

![](images/reportProviderPayroll.png)

Some offices use this [Production and Income Report](reportprodinc.html) to determine how much to pay their providers when the providers earn a certain percentage of net income. The calculations for determining production and income in this report were custom created for a specific use and may not apply to your office.

If you want to use this report:

* Make sure the calculations that determine the values in the report apply to your office. See the column descriptions below.
* Allocate all income (Insurance, Patient Payments).

Note: To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

The Provider Payroll report can list total production per day (Summary) or per patient (Patient Detail). The report types are hidden by default. To show these reports, see [Report Setup: Display Settings](reportdisplaysettings.html).

## Report Filters and Options

**Providers:** Select the providers to include, or check **All** to include all providers, including hidden providers, that have activity (i.e., production or income) in the reporting period. Unearned will include pay splits with an unearned type (not associated to a provider, such as prepayments). Typically, this report is run for one provider at a time.

**Clinics**: Select clinics to include in the report. Ctrl + click to select multiple clinics or check **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by clinic assigned to the procedure (i.e., place of service).
* If user is restricted to specific clinics, only accessible clinics will list. When checking **All (includes hidden)**, results will include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.

**Today's Date**: Automatically populated with the current date for reference.

**Date Range:** Select the date range of the report. The default is based on the current Pay Period (see: [Time Card Setup](timecardsetup.html)), if one is set up. Otherwise, it defaults to one week prior to today's date.

* **This Period**: Reset dates to match current pay period.
* **Right**/**Left** arrows: Move back or forward one pay period at a time.
* Click the calendar icons to manually select a date range outside of preset pay periods or type dates manually. Offices without pay periods must use these options to change date ranges. **This Period** and **Arrow** buttons are only functional with pay periods.

**Report Type**: Select the report type. This will affect the report detail and columns presented.

* **Summary**: Lists the total production per day in the date range for all selected providers.
* **Patient Detail**: Lists production for each individual patient in the date range for all selected providers.

## Report Preview

After setting report criteria, click **OK** to generate a print preview of the report. The screenshot below is an example of the *Summary* Report Type. Columns will vary depending on the report type selected. Descriptions of report columns are below. See the Examples section below for additional information on the different report types.

For a description of Toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportProvPayroll.gif)

* **Date**: The date that corresponds to the numbers calculated in each column.
* **Day**: The day of the week that corresponds to the date in the same row. Only shows on *Summary* report type.
* **Patient**: The name of the patient associated to all procedures, adjustments, and claim procedures. This is the actual patient on the paysplit. Only shows on *Patient Detail* report type. Patients will appear once for each day they have activity in the reporting period.
* **UCR Production**: Gross production based on completed procedures that were set complete within the date range. Does not include capitation write-offs. Calculated by ProcFee x (UnitQty+BaseUnits).
  + Production will appear on the report based on the date the procedure was originally set complete. If the procedure date was changed, this may cause production to show on a different day than other reports. See [Procedure Edit](procedureedit.html) (Date section) for more information.
* **Est Write-off**: The total amount estimated write-off based on the [Claim Snapshot](claimsnapshot.html).
* **Prod Adj**: The sum all of adjustments that were created or edited within the date range. Excludes Bad Debt type adjustments.
* **Change in Write-off**: The difference between the estimated write-off amount and the actual write-off (estimated minus actual).
* **Net Prod(NPR)**: The sum of gross production, estimated write-off, adjustments, and change in write-off columns.
* **Pat Inc Alloc**: The sum of payments entered within the date range that are attached to a particular procedure.
* **Pat Inc Unalloc**: The sum of payments entered within the date range that are not attached to a particular procedure.
* **Ins Income**: The sum of all received claim payments that were marked received or supplemental within the date range.
* **Ins Not Final**: The sum of all received insurance payments not yet attached to a finalized claim payment, that were marked received or supplemental within the date range.
* **Net Income**: The sum of the allocated patient income (*Pat Inc Alloc*) and the insurance income (*Ins Income*) columns.

Each column is totaled at the end of the report.

## Examples

**Summary Report Type**

![](images/providerPayrollSummary.png)

The *Summary* Report Type includes the *Day* column and excludes the *Patient* column. Information is summed by date. Column totals are listed at the end of the report.

**Patient Detail Report Type**

![](images/providerPayrollPatDetail.png)

The *Patient Detail* Report Type includes the *Patient* column and excludes the *Day* column. Information is summed by patient and date. A patient will show up on the report multiple times if they have production or income across multiples days of the reporting period. Column totals are listed at the end of the report.