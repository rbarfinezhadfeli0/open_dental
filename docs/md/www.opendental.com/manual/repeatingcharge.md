Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Repeating Charge

Set a procedure to automatically post a charge to a patient's account periodically.

In the [Account Module](account.html), the Repeat Charges grid displays all repeating procedures for the selected patient.

![](images/repeatingChargeGrid.gif)

Setup Requirements:

* In [Show Features](showfeatures.html), enable *Repeating Charges*. Once enabled, the Repeating Charge button is available in the Account Module toolbar.
* Set the default [Preferences](preferences.html) for *Repeating Charges*.

To post repeating procedures to patient accounts automatically or with the Repeating Charges tool, see [Repeating Charges](repeatingcharges.html).

In the Account Module toolbar, click **Repeating Charge** to add a new repeating procedure or double-click an existing charge to edit.

![](images/repeatingChargeEdit.png)

When adding new charges, the [Procedure Codes - Fee Schedules](procedurecodes.html) window is opened. Select a procedure with a treatment area of Mouth or None. Once a procedure is selected, enter the repeating charge details on the Edit Repeat Charge window.

**Calculate Charge Amount (optional)**: Calculates the monthly Charge Amount.

* **Total Amount**: Enter the procedure fee.
* **Number of Charges**: Enter the number of times the procedure will be charged to the patient.

Click **Calculate** to automatically fill in the Charge Amount.

**Charge Amount**: Enter the amount the patient will be charged. To edit the charge amount for existing repeating charges on all patients at once or just patients in a [Super Family](superfamily.html) see the [Database Maintenance Tool](databasemaintenancetools.html) for *Repeat Charge*.

**Frequency**: Click the dropdown to choose the interval at which charges are posted. Charge dates are calculated based on the Date Start.

* Monthly: Post a repeating charge once a month.
* Quarterly: Post a repeating charge once every three months.
* Annually: Post a repeating charge once a year.

**Date Start/Date Stop**: Enter the dates the first and last procedure will be posted.

* If the *Repeating charges run automatically* preference is disabled, this is the day of the month the Repeating Charges Tool needs to be run. Choose a standard day (e.g., the same day as [Billing](billing.html)) to include these procedures on patient statements.

Note: For example, if a Start Date is set to 7/22/2024, End Date is set to 06/22/2025, and the Frequency is monthly, this results in charges on 08/22, 9/22, 10/22, etc. and the final charge on 6/22.

**Creates Claim**: Check to automatically create claims for the procedure when charges are posted from the [Repeating Charges Tool](repeatingcharges.html). The patient must have insurance and the procedure cannot be marked *Do Not Bill to Ins*. The *Date of Service* will be the procedure posted date and the claim status is set to *Waiting to Send*. If the patient has a secondary insurance plan, a secondary claim will also be created with a status of *Hold until Pri Received*.

**Use Unearned**: Check to automatically allocate an [Unearned / Prepayment](unearnedprepayment.html) to the procedure as it is posted.

Note: If both Create Claim and Use Unearned options are checked, the unearned amount allocated to the procedure will be the estimated patient portion which may be less than the amount specified in the repeating charge.

**Unearned Types**: Select a specific unearned income type to be allocated to the repeating procedure. Any unearned payment on a family member matching the selected unearned income type will be used. To allocate any prepayment regardless of unearned type, select All. Additional unearned types can be added in [Definitions: PaySplit Unearned Types](definitionspaysplitunearned.html).

**Enabled**: Set the status of the repeat charge (e.g., enabled or disabled).

* Checked: The repeating charge is enabled. The charge is posted to the patient's account monthly. Defaults to checked when adding a new charge.
* Unchecked: The repeating charge is disabled. The charge is still shown in the patient's Repeat Charges grid but will not post to the account, even if it is before the *Stop Date*.

**Note**: (optional) Enter a note that appears in the Repeat Charges grid. Compatible with [Right-Click Options](rightclicktextboxes.html).

**Copy note to procedure billing note**: Check to also add the note to the [Procedure - Misc Tab](proceduremisc.html), Billing Note.

**Manual**: Click to add the procedure to the account immediately. The procedure will be completed with today's date, for the amount of the repeating charge, and with the patient's primary provider and assigned clinic. Any unearned income will be allocated to the procedure (if enabled) but will not automatically create a claim or be marked as *(unsent)*. If a repeating charge is manually posted on a different day than listed in the *Date Start* field, the repeating charge tool will post a duplicate procedure for the month.

**Delete**: Disable and remove the repeating procedure from the Repeat Charges grid.

Click **Save** to keep changes.

## Recurring Charges

An additional, optional feature to set up for use with Repeating Charges is [CC Recurring Charges](recurringcharges.html). This can be set up to pay the repeating charge balance using the patient's payment information on file. [Authorize Recurring Charges](recurringchargesauthorize.html) for the repeating charge amount. To only process a recurring charge if the repeating procedure is posted, add the procedure code used on the repeating charge to the *Authorized Procedures* on the recurring charge.

If utilizing both Recurring Charges and Repeating Charges, ensure automated repeating charges are scheduled to run prior to automated Recurring Charges in Preferences. If posting charges manually, ensure Repeating Charges are posted prior to running Recurring Charges.