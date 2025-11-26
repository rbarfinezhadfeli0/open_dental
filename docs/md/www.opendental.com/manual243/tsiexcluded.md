Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

TSI Excluded Accounts

Accounts that have specifically been excluded from TSI Collections will list in the Excluded Accounts tab.

In [TSI Collections](tsicollections.html), click the **Excluded Accounts** tab.

![](images/tsiARmgrExcluded.png)

The Excluded Accounts tab lists accounts that have been marked as excluded from collections by right-clicking on a guarantor. This will give the account a *CE* billing type from [Definitions: Billing Types](definitionsbillingtypes.html).

Note: If multiple CE billing types have been created, only guarantors assigned the first in the list will be included in the Excluded Accounts tab.

**Clinics**: Only available when clinics is turned on. Defaults to the clinic selected in the main menu. Click to change clinics.

**Account Filters**: Change the filter criteria as needed. To save criteria as the default for the next time you run the report, click **Save as Default**.

* **Providers**: Filter by guarantor's primary provider. Click the dropdown to change.
* **Account Age**: Filter by account age.
* **Minimum Balance**: Only show guarantors who have a balance over a specific amount (e.g. only show accounts with a balance over $25).
* **Days Since Last Payment**: Only include guarantors who have not made a payment in a specific amount of days (e.g. only show guarantors who have not made a payment in the last 90 days).
* **Exclude if insurance pending**: Check to hide guarantors with outstanding insurance claims.
* **Exclude if unsent procedures**: Check to hide guarantors with unsent procedures posted within the last six months.
* **Exclude bad addresses (no zipcode)**: Check this box to hide guarantors with no zip code.
* **Show PatNums**: Show patient numbers next to guarantor name. Defaults to the setting in [Report Setup: Misc Settings](reportmiscsettings.html) for *Show PatNum*.

Excluded accounts can be sent back to the Unsent list by right-clicking and selecting **Mark Unsent**.

**Guarantors (Excluded) - Not Sent to TSI**: Add or remove columns in [Display Fields](displayfields.html), *A/R Manager Excluded Grid*.

* **Guarantor**: The account guarantor.
* **Prov**: The guarantor's primary provider.
* **Billing Type**: The guarantor's current billing type.
* **0-30**: The balance that is 0 - 30 days overdue.
* **31-6- Days**: The balance that is 31 - 60 days overdue.
* **61-90 Days**: The balance that is 61 - 90 days overdue.
* **>90 Days**: The balance that is more than 90 days overdue.
* **Total**: The total balance due.
* **-Ins Est**: Any pending insurance payment estimates.
* **=Patient**: The estimated patient portion due.
* **PayPlayDue**: Payment plan due amounts.
* **Date Last Pay**: The date of the last payment of any family member on the account.
* **Date Time Suspended**: If the account is currently *suspended* with Transworld, the date and time when it was suspended.

**Count**: Total number of guarantor accounts in list.

**Total**: Total sum of accounts for each column.

**tsi OCP**: Click to launch the TSI Online Client Portal.

Right-click on a guarantor, then select Go To to jump to their Open Dental account.

**Export**: Click to export the grid to excel.

**Print:** Click to print the grid.

Click **Run Aging** to manually run and update aging.