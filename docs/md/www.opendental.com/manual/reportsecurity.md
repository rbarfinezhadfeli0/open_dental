Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Report Setup: Security Permissions

Determine which User Groups have access to specific reports.

In the [Main Menu](mainmenu.html), click Setup, Reports.

![](images/reportSecurityPermissions.png)

Alternatively, from the [Standard Reports](reportsstandard.html) window, click [Setup](reportssetup.html). Select the **Security Permissions** tab.

All available Standard Reports are listed, grouped by category. If a report has been renamed in [Report Setup: Display Settings](reportdisplaysettings.html), this is the name displayed in the list. The internal (default) name is shown in the bottom-right corner for reference when highlighting a report.

**User Group:** Select a [User Group](securityusergroups.html) to view report permissions or make changes.

**Set All**: Set all reports to allowed. Allowed column is set to *X* for all reports.

**Set None**: Remove access to all reports. Allowed column is set blank for all reports.

**Allowed:** Click the Allowed column to toggle access for individual reports.

* X: User group allowed access to report.
* Blank: User group denied access to report.

Click **Save** to keep changes.

## Additional Information

**Locked Reports**

![](images/reportLocked.png)

If a user is assigned to multiple user groups, they have access to a report if any of the assigned user groups are marked as Allowed. In the Standard Reports list, *[Locked]* appears next to any report name the logged-on user does not have access to.

**Other Security Permissions**

There are two [Security Permissions](permissions.html) (Setup, Security) that control whether or not a user can access financial reports for other providers:

* *Production and Income, View All Providers*: User can access Production and Income reports for all providers. If a provider does not have this permission, they can still view their own reports, but only when they are logged on.
* *Daily - View All Providers*: User can access the Daily Payments, Daily Procedures, Daily Adjustments and Daily Write-offs reports for all providers. If a provider does not have this permission, they can still view their own reports, but only when they are logged on.
* A provider without the above permissions can also view reports for a second provider that has the same first and last name (e.g., one provider in Open Dental represents patients with private insurance, and the second provider represents Medicare patients, but they are the same physical provider). This is a unique case.