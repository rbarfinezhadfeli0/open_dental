Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

CEMT Reports

In the [Central Enterprise Management Tool ( CEMT )](central.html), select connections to run the report against. Click Reports, Production and Income.

![](images/centralPandIreport.png)

Select the report criteria. See [Production and Income Reports](reportprodinc.html) for a description of each field.

**Report Type**: All report types are run for all providers and all clinics for the date range.

* **Daily**: Report groups by database, then by clinic. Date defaults to today's date.
* **Monthly**: Report groups by database, then by clinic. Date range defaults to the current month.
* **Annual**: Report groups by database, then by clinic, then by month. Date range defaults to one year.
* **Provider**: Report groups by database, then by clinic, then by provider. Date range defaults to today's date.

**Show Insurance Write-offs:** Select when to apply insurance write-offs to production amounts. See [Show Insurance Writeoffs](writeoffstoproduction.html) for more details. Set the default in Report Setup - Misc Settings.

* **Using insurance payment date**: Apply the write-off when the insurance payment is entered.
* **Using procedure date**: Apply the write-off on the date of service.

**Include Unearned:** Select this box to include unearned income. An additional column is added for Unearned Income on Monthly, Annual and Provider reports, and the report uses a landscape orientation.

Note: This should either always be selected when running Production and Income, or never selected.

The report groups results by database connection, then by clinic.