Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

eService Activity Log

The eService Activity Log tracks actions that have been done in various eServices.

In the [Main Menu](mainmenu.html), click [Reports](reports.html), eService Activity Log.

![](images/eServiceActivityLog.png)

Filters: Use the filters to narrow down the activity log results.

* **From / To**: Enter the date range to view results.
* **Clinics**: Select one or more clinics to view results from.
* **eService Type**: Select the type of eService to view results from. Options include:
  + Appointment Confirmations
  + Arrivals
  + eClipboard
  + Integrated Texting
  + ODTouch
  + Patient Portal
  + Web Sched ASAP
  + Web Sched Existing Patient
  + Web Sched General
  + Web Sched New Patient
  + Web Sched Recall
  + Web Forms
* **eService Action**: Select which eService Action to view. Only actions available in the dropdown are tracked by the eService Activity Log. See eService Actions below for details.
* **PatNum**: Filter results by patient number.
* **Log Guid**: Filter by a unique ID associated with a specific patient and their actions. Log Guid can be used when a patnum is not available (e.g., a new patient using Web Sched).
* **Group by LogGuid**: Check to group actions created by the same Log Guid together.

Once filters are selected, click **Refresh** to update the results.

## eService Actions

Most actions are self-explanatory. Below are a few that need additional explanation.

| Action | Details |
| --- | --- |
| Patient Portal - Patient Allowed Submission of Duplicate Payment | The patient opted to allow the duplicate payment made via Patient Portal (PayConnect users only) |
| Patient Portal - Patient Notified of Possible Duplicate Payment | The patient is warned when attempting to make a duplicate payment via Patient Portal (PayConnect users only) |
| Patient Portal - Patient Rejected Submission of Duplicate Payment | The patient opted to decline the duplicate payment made via Patient Portal (PayConnect user only) |
| Web Sched - Patient Was Sent 2FA Code | When using Web Sched, the patient was sent two-factor authentication (via email or text) |