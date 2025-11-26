Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Report Setup: Report Server

A report server can be useful to large offices to prevent lockups and slowness in a live database.

In the [Main Menu](mainmenu.html), click Setup, **Reports**. Select the **Report Server** tab

![](images/reportServer.png)

Alternatively, in the [Standard Reports](reportsstandard.html) window, click [Setup](reportssetup.html). Select the **Report Server** tab.

Note:

* The Report Server tab is not available for Open Dental Cloud users.
* Always keep the report server database up-to-date so reports are run on current data.

Currently the report server can run the following:

Reports:

* Production and Income
* Daily Adjustments
* Birthdays
* Capitation Utilization
* Finance Charge
* Insurance Plans
* Prescriptions
* Receivables Breakdown
* Referral Analysis
* Daily Write-offs
* Graphic Reports

Other Features:

* User Queries
* Task Search
* Audit Trail
* Wiki Search

## Setting up the Report Server

To set up a report server, see [One-Way Replication](replicationoneway.html).

**Use separate reporting server**: Check to enable the connection settings.

**Direct Connection**: Select to connect via a direct connection.

* **Server Name**: The name of the computer acting as the report server.
* **Database**: The database to connect to.
* **MySQL User**: Default user is root. See [MySQL Security](securitymysql.html).
* **MySQL Password**: The user password (if you have set up MySQL users and password).

**Middle Tier, URI**: Select to connect via [Middle Tier](middletier.html).

* **URI**: Enter the Middle Tier URI.