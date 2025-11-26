Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Planned Appointment Tracker

The Planned Appointment Tracker lists Planned Appointments that have been created but not scheduled.

In [Appointment Lists](appointmentlists.html), click **Planned Tracker**.

![](images/nextApptTracker.png)

If a patient does not schedule a planned appointment, or if the scheduled appointment is deleted, this system tracks the appointment so they don't slip through the cracks. This tool is useful for keeping production levels as high as possible. Regularly review this list to fill the schedule with quality procedures.

To make this process work, every patient who needs treatment of any kind must have a [Planned Appointment](apptplanned.html) created before they leave the office.

Note: This feature is not for scheduling recall appointments. Use the [Recall List](recalllist.html) instead.

**Setup**: Click to define the default date range used to filter appointments.
![](images/plannedApptTrackerSetup.png)

* **Days Past**: Number of days prior to the current date used to calculate the *From* date.
* **Days Future**: Number of days after the current date used to calculate the default *To* date.

Filter or sort the list by specific criteria. Click **Refresh** after making changes to update the list. Only appointments for active patients (i.e., Status of *Patient*) are displayed in the grid.

* **Order by**: Choose how to sort the appointments in the list.
  + Status: Groups the list by the appointment's Unscheduled Status then sorts by date.
  + Alphabetical: Sorts the list alphabetically and groups by patient name. If a patient has multiple planned appointments, they are sorted by date.
  + Date: Sorts and groups the list by the planned appointment date (i.e., the date the planned appointment was created).
* **Provider**: Only view appointments for a specific [Provider](providers.html).
* **Clinic**: Only view appointments for a specific [Clinic](clinics.html).
* **Site**: Only view appointments for a specific [Site](sites.html).
* **Code Range**: Only view planned appointments for specific procedures. Enter a single procedure code or range of codes.
* **From / To**: Only planned appointments created within this date range are listed. To change the date range, type a date in the box or click the down arrow to choose dates from a calendar. Click the down arrow again to close the calendar.
  + Click **All Dates** to clear the current date range.
  + Leaving the dates blank includes all planned appointments, regardless of date created.

Double-click a row to open the [Planned Appointment](apptplanned.html) to view more information or make changes.

Right-click Options:

* *Select Patient*: Select the patient the planned appointment is associated to.
* *See Chart*: Open the patient's Chart Module.
* *Send to Pinboard*: Schedule the planned appointment by sending it to the [Pinboard](apptpinboard.html). Alternatively, double-click the appointment to open it and send it to the Pinboard.

Once scheduled, planned appointments are no longer listed in the tracker. They are still listed in the Chart Module, Planned Appts tab until they are marked done or deleted.