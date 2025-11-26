Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Scheduled Processes

Some processes can be automatically performed at a designated time.

In the [Main Menu](mainmenu.html), click Setup, Advanced Setup, **Scheduled Processes**.

![](images/scheduledProcesses.png)

Typically Scheduled Processes should be scheduled for after hours to avoid disruption of normal program function as these tasks can be server intensive. The [Open Dental Service](opendentalservice.html) is required to run Scheduled Processes.

Click **Add** to create a new scheduled action, or double-click an existing action from the grid to edit.
![](images/scheduledProcessesEdit.png)

* **Scheduled Action**: Select Process to run from the dropdown.
  + *Recall Sync*: Recalculate due dates for all patients based on current [Recall Types](recalltypes.html).
  + *Ins Batch Verify*: Verify patient eligibility through [Electronic Eligibility and Benefits](ebenefits.html). Batch is defined by who is currently in the [Insurance Verification List](insverifylist.html) with a *Pat* type, based on the criteria set in [Insurance Verification Setup](insverifylistsetup.html). [Carriers](carriers.html) must have *Is trusted for real-time eligibility* checked.
  + *Statements*: Generate and send electronic or emailed statements.
* **Frequency to Run**: Select how frequently this process will run. *Daily* is the only available option at this time.
* **Time to Run**: Enter a time of day when this process will run. Entries will be validated based on local language/cultural settings in Windows. For English-US users, acceptable time formats for entry include: 9:00 PM, 9:00 pm, 21:00.
* **Delete**: Click to remove this scheduled process.

## Ins Batch Verify

**Ins Verify Batch Preferences**: These preferences only affect the Ins Batch Verify action. Changes to these preferences are immediately saved. Changes to preferences trigger a generic [Alert](alerts.html).

* **Create Adjustments**: Check to allow [Adjustments to Insurance Benefits](adjinsbenefits.html).
* **Check Deductible**: Check to verify deductible values.
* **Check Annual Max**: Check to verify annual max values.
* **Change Ins History**: Check to allow updates to [Insurance History](inshistory.html).
* **Change Effective Dates**: Check to allow updates to the insurance effective dates.

When verifying patient eligibility and insurance information, Open Dental will use the 271 file from the carrier. Patients whose insurance information matches the 271 will be removed from the Insurance Verification list. When benefits and eligibility are successfully verified, the Last Verified date is determined by the preferences *Always reverify service year insurance benefits* and *Always reverify service year patient eligibility*. See [Insurance Verification Setup](insverifylistsetup.html) for more information.

Patients who do not match the 271 will remain on the Insurance Verification List and the Status column will be updated. Patients still remaining in the Insurance Verification list after the scheduled process will need to have their insurance information verified manually.

When compared to the 271, Open Dental considers the following:

* Group Number.
  + Leading zeros are not considered (e.g. 123 will match with 00123)
  + Dashes or hyphens are considered (e.g. 123-567 will not match 123567). If a dash or hyphen in a group number causes the verification to fail, this will require manual verification.
* Annual Max
* Deductibles
  + Family and individual
* Populates the effective date if available.
* Creates [Adjustments to Insurance Benefits](adjinsbenefits.html) if available.
* Validates policy effective dates.
* Creates or updates [Insurance History](inshistory.html).

## Statements

Statements can be generated and sent electronically to a third party or emailed. Statements sent by mail must be created manually via the [Billing List](billinglist.html).

Consider the following before enabling Statements as a Scheduled Process:

* Aging is calculated before statements are run.
* Superfamily statements are not considered.
* This process should be scheduled after *Pay Plan run time*, *Repeating charges run time*, and *Recurring charges run time*. These are all set in [Preferences](preferences.html).
* The Billing List must be cleared before the scheduled Time to Run.
* The Billing Options set for the Billing List are used when creating statements.

Information on how many statements were sent, failed, errors are logged in a text file: **C:\Program Files (x86)\Open Dental\OpenDentalService\Logger\ScheduledProcess\Statements\**

* When logging is set to *Information*, the text file is created but only shows *Starting Statement process, Running statements for ClinicNum#, and No ebills to be sent.*
* When logging is set to *Verbose*, the text file is created with a count of sent statement and include information on skipped patients and errors.
* To change the logging type, see [Service Manager](servicemanager.html).

Similarly, failed statements can be found in the Billing List when *Unsent* is checked. Successful statements can be found in the Billing List when *Sent* is checked.

If sending statements via email, an email with the statement attached as a PDF can be found in the account. When clinics are enabled, emails are sent from the clinic email address. If no email address is entered for the clinic, the practice email is used.