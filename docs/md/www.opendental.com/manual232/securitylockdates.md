Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Security Lock Dates

Global lock dates prevent editing of old items and are, additionally, the only way to prevent backdating of new items.

In the [Global Security Settings](securitysettings.html) window, near the bottom, is the Global Lock Date section.

![](images/securityGlobalLock.gif)

See the full list of [Permissions](permissions.html) to identify which permissions are affected by global lock dates.

Click **Change** to open the Lock Date window shown below.

![](images/securityLockDate.png)

**Date**: Enter a specific date (e.g., 12/31/2021) to lock this date and all prior dates. This is frequently used to close out each year.

**Days**: Enter a number to lock items after a set number of days. Changes will only be allowed before the set amount of days. Entering 1 allows changes for the current day only.

**Lock includes administrators**: Check to apply the limitation to users with the ["Security Admin" Permission](permissionssecurityadmin.html). Uncheck to allow users with the Security Admin permission to bypass the global lock date.

Note:

* If setting global lock dates, we recommend showing write-offs in reports using insurance payment date. See [Show Insurance Writeoffs](writeoffstoproduction.html).
* [Procedure Codes](procedurecodeedit.html) and [Sheets](sheetproperties.html), have the option to bypass this global lock. Check *Bypass Global Lock Date* for each sheet or procedure code.

## User Group Lock Dates

There are also date and day limitations for individual [User Groups](securityusergroups.html). These limitations show in the main [Security](security.html) window, at the right as (if date/days newer than...).

The limitations for User Groups are based on the date the item was entered, not necessarily the date that shows in the patient account. This means that backdating is allowed because the entry date is tracked. Use global locks above to prevent backdating of new items.

Note: If both user group and global lock dates are set, the more restrictive lock date will apply.