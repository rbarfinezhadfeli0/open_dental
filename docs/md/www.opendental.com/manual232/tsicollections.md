Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

TSI Collections

Transworld Systems Inc. (TSI) offers billing and collection services to dental practices.

In the [Manage Module](manage.html), click **tsi Collections**.

![](images/tsiARmgrUnsent.png)

A TSI interface is integrated with Open Dental so you can manage past due accounts from Open Dental.

* Send past due accounts to TSI.
* Manage accounts, suspend, or cancel collections.
* Accept payments directly through Transworld.

![](images/youtubeLogo.png) See our Webinar: [Using the Integrated TSI Collections Interface](https://youtu.be/0TOVhlGXTGE).

Related Links:

* [TSI Setup](tsisetup.html)
* [TSI Sent Accounts](tsisent.html)
* [TSI Excluded Accounts](tsiexcluded.html)
* [TSI Payments](tsipayment.html)
* [TSI History](tsihistory.html)
* Webinar: [TSI Collections Setup](https://youtu.be/3hnlT7dWUxI)
* Website: [www.tsico.com](https://www.tsico.com/)

Basic Workflow:

1. Set up TSI integration in Open Dental.
2. Use Open Dental's Accounts Receivable Manager to identify overdue accounts and send them to TSI.
3. Once sent, TSI will manage all billing and collection activity for the account. Any transactions entered in Open Dental (e.g., payments, charges) will be sent to TSI on a regular basis using the OpenDentalService.

## Send Past Due Accounts to TSI

1. Highlight the guarantors to send to TSI. Click **All** to select all guarantors. Click **None** to deselect all guarantors.
2. Under **Account Placement**, select the type of TSI account to send to.
   * Accelerator: Use for accounts less than 180 days old.
   * Profit Recovery: Use for accounts less than 365 days old.
   * Professional Collections: Use for accounts older than 6 months.
3. Click **Send to TSI**.
   * The *C* billing type will automatically be assigned to the sent accounts.
   * TSI will begin managing billing and collection activity.

Note:

* If a user selects the wrong Service Type for an account, a warning popup message will appear asking to select the correct type.
* A warning will popup if the guarantor has outstanding claims on their family's account. Users can continue and send the account, or cancel.

## Unsent Accounts Tab

Open Dental aging will run and all guarantors who have a balance based on the account filter criteria, and have not yet been sent to TSI, will list on the Unsent Accounts tab. Accounts highlighted in red indicate the guarantor is missing information required by TSI. Hover over an account to see what information is missing.

**Clinics**: Only available when clinics is turned on. Filter by guarantor's clinic. Defaults to the clinic selected in the main menu. Click the dropdown to change.

**Account Filters**: Change the filter criteria as needed. To save criteria as the default for the next time you run the report, click **Save as Default**.

* **Providers**: Filter by guarantor's primary provider. Click the dropdown to change.
* **Billing Types**: Filter by guarantor's billing type. Click the dropdown to change.
* **Account Age**: Filter by account age.
* **Minimum Balance**: Only show guarantors who have a balance over a specific amount (e.g. only show accounts with a balance over $25).
* **Days Since Last Payment**: Only include guarantors who have not made a payment in a specific amount of days (e.g. only show guarantors who have not made a payment in the last 90 days).
* **Exclude if insurance pending**: Check to hide guarantors with outstanding insurance claims.
* **Exclude if unsent procedures**: Check to hide guarantors with unsent procedures posted within the last six months.
* **Exclude bad addresses (no zipcode)**: Check this box to hide guarantors with no zip code.
* **Show PatNums**: Show patient numbers next to guarantor name. Defaults to the setting in [Report Setup: Misc Settings](reportmiscsettings.html) for *Show PatNum*.

TSI *C* Billing Type:

* All family members associated with accounts sent to TSI will be assigned the *C* billing type as an identifier.
* There should only be one *C* billing type. If there are multiple, the *C* billing type listed first will be assigned.
* TSI will send statements on your behalf for patients with the *C* billing type. Exclude this billing type when running billing so the patient does not receive duplicate statements.
* Do not manually assign the *C* billing type to any patient. Manual assignment will not initiate TSI account management. Thus, the account could fall through the cracks.
* Do not manually change a patient's billing type from the *C* billing type to another. Manual changes will not stop TSI account management, but will stop account syncing that could result in double, yet different statements.

**Guarantors - Not Sent to TSI**: Add or remove columns in [Display Fields](displayfields.html), *A/R Manager Unsent Grid*.

* **Guarantor**: The account guarantor.
* **Clinic**: The guarantor's clinic.
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
* **LastPaid**: The date of the last payment of any family member on the account.
* **Date Time Suspended**: If the account is currently *suspended* with Transworld, the date and time when it was suspended.
* **Last Proc**: Date of last completed procedure for the family.
* **Date Bal Began**: Date the patient balance began.
* **Days Bal Began**: Number of days ago the patient balance began.

**Guarantor Count**: Total number of guarantor accounts in list.

**Total**: Total sum of accounts for each column.

**Export**: Click to export the grid to excel.

**Print:** Click to print the grid.

**tsi OCP**: Click to launch the TSI Online Client Portal.

Right-click on a guarantor, then select Go To to jump to their Open Dental account. Click **Run Aging** to manually run and update aging.