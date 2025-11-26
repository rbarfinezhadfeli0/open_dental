Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Report Setup: Report Server

A report server can be useful to large offices to prevent lockups and slowness in a live database.

In the [Main Menu](mainmenu.html), click Setup, **Reports**. Select the **Report Server** tab

![](images/reportServer.png)

Alternatively, in the [Standard Reports](reportsstandard.html) window, click [Setup](reportssetup.html) and select the Report Server tab.

Note:

* The Report Server tab is not available for Open Dental Cloud users.
* Always keep the report server database up-to-date so reports are run on current data.

The Report Server runs most standard reports and some other features:

Reports

* Active Patients
* Aging of Accounts Receivable (A/R)
* Daily Adjustments
* Appointments
* Birthdays
* Broken Appointments
* Capitation Utilization
* Claims Not Sent
* Custom Aging
* Discount Plans
* Finance Charge
* FQHC Dental Sealant Measure
* Graphic Reports
* Insurance Plans
* Incomplete Procedure Notes
* Insurance Aging
* Insurance Overpaid
* New Patients
* Patient Portion Uncollected
* Payment Plans
* Payment Plans Overcharged
* Daily Payments
* PPO Write-offs
* Prescriptions
* Presented Treatment Production
* Daily Procedures
* Procedure Codes - Fee Schedules
* Procedures Overpaid
* Production and Income
* Monthly Production Goal
* Receivables Breakdown
* Referral Analysis
* Routing Slips
* Treatment Plan Presentation Statistics
* Unfinalized Insurance Payments
* Daily Write-offs

Other Features

* User Queries
* Task Search
* Wiki Search

## Setting up the Report Server

To set up a report server, see [One-Way Replication](replicationoneway.html).

**Use separate reporting server**: Check to enable the connection settings.

The report server can be set up using a Direct or Middle Tier connection. Choose the radio button for the preferred connection method to enable options.

* **Direct Connection**: Select to connect via a direct connection.
  + **Server Name**: The name of the computer acting as the report server.
  + **Database**: The database to connect to.
  + **MySQL User**: The username for the MySQL user. Default user is *root*. See [MySQL Security](securitymysql.html) for additional information.
  + **MySQL Password**: The MySQL user password (if MySQL users and password are set up).
* **Middle Tier, URI**: Select to connect via [Middle Tier](middletier.html).
  + **URI**: Enter the Middle Tier URI.

**(only if using MariaDB SkySQL) PEM path**: If using a cloud-managed database system, enter the PEM filepath. File must be accessible from all workstations.