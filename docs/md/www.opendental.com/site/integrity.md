Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Database Integrity

See [Programming Resources](programmingresources.html)

Our Database Integrity feature ensures that if any outside party directly makes changes to a database, it will trigger warnings.

## Warnings

Small warnings show up at the upper left of various windows throughout Open Dental if the database was modified.

![](images/integrityWarning.png)

Clicking on the warning will display the following window.

![](images/databaseIntegrity.png)

## Removing Warnings

Offices will want to know how to get rid of these warnings. There are two steps:

1. Stop using the software that is making the changes. This will prevent new warnings, but will not remove existing warnings.

2. Update to a slightly newer version (the third "build" number). This will remove older warnings up to a certain date, but will not prevent new warnings.

There is no tool to remove the warnings. Both of the steps above must be taken. The first step is the most effective because it can be done immediately. The second step might take a week or two, depending on our release cycle. The warnings should not be annoying, and should not interfere with efficiency or usage of Open Dental.

## Technical explanation

On certain tables in the database, we choose columns that we need to protect. We hash all the column values and store that hash in a column in that table called SecurityHash. In certain places throughout the program, we display warnings and popups if the hashes don't match. We only look for SecurityHash matches as of a certain hard-coded date. Each build has a slightly newer hard-coded date so that only fairly recent changes are ever considered. At any time, we can change which columns we protect so that we can be responsive.

## Guidelines for Companies

You are not allowed to send queries to the database that would alter data in any way. You are instead required to use our [API](apispecification.html).

**Transition Timeline:**
 We need to give you time to transition to the API. Here's a rough idea of how that transition will work. Version 21.4 has been released and will show small innocuous warnings. The warnings are mild enough that customers shouldn't be concerned and they shouldn't call anyone. Every three to four months, as new versions are released, users will see more notifications in more places. They might eventually start to see some popups as well, but not too soon. So it will be a gradual process that should give you plenty of time. Eventually, the popups will become much more frequent and aggressive, and the warnings will use harsher language with words like "unsafe" and "dangerous".

## Specific Companies

For more details and a list of companies, see [Third-Party Vendors](vendorsthirdparty.html).