Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Audit Trail

The audit trail is a log of actions taken by users.

In the [Main Menu](mainmenu.html), click Tools, Audit Trail.

![](images/audittrail.png)

For the Audit Trail to contain complete information, [Users](securityusers.html) must be setup and security [Permissions](permissions.html) assigned to [User Groups](securityusergroups.html).

Filtering Options:

* **From/To date**: Show logs for a a specific date range.
* **Permission**: Show logs for a specific permission. See [Audit Trail Permissions](audittrailpermissions.html).
* **User**: Show logs made by a specific logged-on user.
* **LogSource**: Show logs by a specific automated process (e.g., eServices, HL7, etc).
* **Patient**: Only show entries for a single patient.
  + **Current**: Show entries for the currently selected patient (the patient that was selected before Audit Trail was opened).
  + **Find**: [Select a Patient](patientselect.html).
  + **All**: Eliminate patient as a filter so that all entries show.
* **Limit Rows**: By default, up to 500 log entries are listed at a time. Manually change the number or change the default in [Miscellaneous Setup](miscsetup.html).
* **Previous From Date / To Date**: Search by the date a permission was last edited. If blank, all edits will show.

Click **Refresh** to update results after altering filters.

Click **Print** to print the Audit Trail to the default printer.

Only users with the *Audit Trail* permission can view the main audit trail. There are also several smaller audit trails that don't require the permission:

* Appointment Audit Trail (a log of when an appointment was created, moved, edited). See [Edit Appointment](aptedit.html).
* Chart Audit Trail (a log of changes made in a patient's Chart). See [Show Chart Views](showtabchart.html).
* Insurance Audit Trail (a log of changes to the insurance plan). See [Insurance Plan](insplan.html).
* Task level Audit Trail (a log of changes made to a task, if using the Task system). See [Task Window](taskswindow.html).

If using a [Report Server](reportserver.html), the Audit Trail can be set to run on the report server rather than the local machine. See *Audit Trail uses Reporting Server* in [Miscellaneous Setup](miscsetup.html).

## Audit Trail Results

Actions are listed by date/time, with the most recent change at the end of the list. Some actions may result in two log entries, one with details, and one with the last date edited.

Log Result Colums:

* Date/Time: When the action occurred (date and time).
* Patient: The patient who was accessed or affected, if any.
* User: The logged in user when the action was performed, if any. If this shows as an unknown user, then it is typically triggered by an automated service from within the program. For example, automated eConfirmations change the confirmation status of an appointment and an unknown user is logged.
* Permission: The name of the tracked security permission. Not all permissions are tracked.
* Computer: The workstation where the action was taken, if any. For some Remote Desktop Protocol (RDP) users both the computer being remote connected from and the computer being remote connected to may be recorded.
* Log Text: Additional information about the action taken, if any.
* Log Source: Automated process that triggered the creation of the Audit Trail entry if any.
* Last Edit: Date and time of last edit if any. If this is blank, there is no data to display. This can happen when the item doesn't track dates or when an item is new and has no previous modifications.

## Audit Trail Integrity

Open Dental checks to verify the integrity of the audit trail data.

* Black log entries indicate trusted entries; meaning Open Dental has checked and no changes have been made to the log entry since it was created.
* Red log entries indicate non-trusted entries, meaning this log entry failed the check to prove the entry is unchanged. This means the entry was changed outside of Open Dental to something different than the original entry. Some red entries are made by an Open Dental conversion. Other red entries are not made by Open Dental, and it is possible they are malicious or not legitimate.

Audit Trail entries are never changed within Open Dental and should never be changed outside of Open Dental.