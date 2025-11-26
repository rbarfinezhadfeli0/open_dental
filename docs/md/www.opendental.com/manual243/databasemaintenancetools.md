Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Database Maintenance Tools Tab

Each database maintenance tool addresses a specific issue.

In the [Database Maintenance](databasemaintenance.html) tool, click the Tools tab.

![](images/databaseMaintenanceTools.png)

**Update in progress on computer**: Click **Clear** to manually clear the Update in Progress preference. This should be used when an update is complete but workstations are not able to log in due to the *Update in progress* error.

**Active TP's**: Creates active treatments plans for patients that have treatment planned procedures but no active treatment plan.

**Appt Procs**: Fixes procedure descriptions on appointments that are not correctly showing tooth numbers. Also updates procedure code text colors, and previous date information for existing appointments, if there are [Proc Appt Colors](apptviewproccolors.html) for the appointment box.

**Balance Families**: This tool is password protected and may only be run by the Open Dental [Conversions Team](conversions.html). It is used to allocate patient income to production via an [Income Transfer](incometransfermanager.html) or by recreating patient payment splits. This tool is typically run as part of the final conversion process but may be run after the fact. Contact [Support](../contact.html) if this is needed for a database. See [Conversions: Family Balancer](convincometransfer.html), Family Balancer Options.

**Balance Family**: This tool is password protected and may only be run by the Open Dental Conversions Team. It offers the same income allocation options as Balance Families (see above) but instead of running for all patients, it runs only for the currently selected patient and their family members. See Conversions: Income Transfers, Family Balancer Options.

**Clean Attachments**: Removes attachments that are not linked to an email message.

**Email Attaches**: Renames and moves email attachments that are in the base EmailAttachments folder into the intended location in the In and Out subfolders. Resolves file not found errors when trying to view attachments.

**Email Duplicates**: Removes duplicate emails from the database.

**Etrans**: Clears etrans messages (electronic transactions) older than one year. An automatic backup is created first. It can only be run by users with the *Security Admin* permission.

**InnoDb**: Converts all tables in the database to the selected storage engine (MyISAM or InnoDb). All users are initially set up as MyISAM. Users only switch to InnoDb if they have special needs, such as increased performance. Users must thoroughly research database methods before making change.

Note: InnoDb is not an option for Open Dental Cloud users.

**Ins Pay Fix**: Fixes insurance payments that have been received but not finalized (attached to insurance checks/payments). One check is created for each claim. The claim payment date is the date the claim was received.

**Insurance Plan Type Category Percentage**: This tool only appears for users with the ["Security Admin" Permission](permissionssecurityadmin.html). Changes all PPO Percentage insurance plans to the Category Percentage plan type. This tool is password protected. Contact Open Dental Support for help with this tool.

**Insurance Plan Type PPO Percentage**: This tool only appears for users with the Security Admin permission. Changes all Category Percentage insurance plans to the PPO Percentage plan type. This tool is password protected. Contact Open Dental Support for help with this tool.

**Optimize**: Backup, optimize, and repair SQL commands on each individual table. Only use if corruption is suspected or for extremely large databases.

**Ortho Duplicates**: Deletes duplicate cell entries within the [Ortho Chart](orthochart.html). Run this when there is a noticeable time delay when loading or saving a patient's Ortho Chart.

**Patient Missing**: Used when database corruption has caused patients to go missing. When possible, missing patients can be re-added.

**Pay Plan Payments**: Detaches patient payments that have been applied to [Insurance Payment Plans](paymentplanins.html), and insurance payments attached to [Old Payment Plans](paymentplanpatient.html).

**Raw Emails**: Useful when using the Email Inbox and backup size has grown too large. Large size is often due to the *emailmessage* table. Run the tool to look through all inbound emails, safely remove raw message content that is no longer needed, then optimize the *emailmessage* table.

**Recalc Estimates**: Identifies patients with at least one estimate that belongs to a dropped insurance plan. For each such patient, estimates are recalculated using their current plan information and deletes estimates associated with dropped plans.

**Redundant Indexes**: Removes redundant and unnecessary indexes from all tables in the database. The tool requires a password. The password is *abracadabra*.

**Remove Nulls**: Removes extra, hidden characters that may be causing errors or problems and replace with empty strings.

**Repeat Charge**: Option only visible if the logged-on user has the *Repeating Charge Tool* permission. Updates the [Repeating Charge](repeatingcharge.html) amount for all patients or, just patients within a [Super Family](superfamily.html) at once. Only updates repeating charges with the same procedure code, current charge amount, and repeat charge status (enabled or disabled). Highlight the row and click Fix to open the Multi Repeat Charge tool.

![](images/multiRepeatChargeEdit.png)

Enter the information for the current repeating charges that need the charge amount updated.

* **Procedure Code**: Enter the procedure code of existing repeating charges to update.
* **Current Charge Amount**: Enter the charge amount of existing repeating charges to update.
* **New Charge Amount**: Enter the new charge amount to update to.
* **Super Family Head**: To only update repeating charges for a specific Super Family, enter the PatNum of the Super Family Head. Leave blank to update all patients.
* **Repeat Charge Status**: Select whether to update repeating charges with a status of Enabled, Disabled, or Both.
* **Start Date**: To only update repeating charges on and after a specific start date, enter the date. Leave blank to update all repeating charges regardless of the date.

Click **Run** to update the repeating charges. When the tool finishes, a confirmation message displays, indicating the number of repeating charges that were updated. A log file is also saved to the desktop with more information.

Note: If the [Repeating Charges](repeatingcharges.html) tool already ran for the day, running the tool again on the same day after the update does not post duplicate charges for the affected patients.

**Spec Char**: Only use this tool if there is trouble syncing appointments with the Mobile Sync App or if an invalid character error is received while using the Middle Tier. It permanently removes unsupported Unicode characters from appointment notes, procedure descriptions, patient address notes, patient address fields, adjustment notes, payment notes, and definition names. This also removes characters from non-English languages. To continue, the password is *fix*.

**Tokens**: Checks the database for any X-Charge tokens that are attached to the wrong credit card number. A second window displays listing all credit cards for the user to determine which ones to check.

**Wiki Search**: Resolves wiki pages that don't display when their terms are searched for.