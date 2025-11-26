Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Web Sched Existing Patient

In the [eServices Setup](eservicessetup.html) window, click **Existing Patient**.

![](images/webschedExistingPatient.png)

Web Sched Existing Patient allows current patients to schedule their appointment online. The office can determine which type of appointments a patient can schedule, what hours are available, what operatories are available, and other appointment criteria. Provider schedules must be created prior to utilizing Web Sched Existing Patient (see ).

To begin using Web Sched Existing Patient, first [Sign Up](eservicessignup.html) for the service. After enabling and setting up Web Sched Existing Patient, see [Web Sched Advanced](webschedadvanced.html) to create the Web Sched Existing Patient URL.

For additional information:

* ![](images/YouTube_PlayButton_15px.png) See our webinar: [Web Sched Existing Patient](https://youtu.be/ag3lDGTYS0g).
* [Web Sched Existing Patient: What Patient Sees](webschedexistingpatientsees.html)
* [Web Sched Troubleshooting](webschedtroubleshooting.html)
* To set up Web Sched for new patients, see: [Web Sched New Patient](webschednewpatsetup.html)

## Appointment Types

Web Sched Existing Pat Appt Types must be created prior to utilizing Web Sched Existing Patient. Web Sched Existing Patient Appointment Types determine the reasons patients can select for their appointment, the procedures for the appointment, the appointment length, and the time pattern.

![](images/webSchedExistingPatApptTypes.png)

**Edit**: Click to open [Definitions: Web Sched Existing Appt Types](definitionswebschedexistingpatappttypes.html). Add or edit appointment types as needed.

Note: Do not add an appointment type for recall procedures. Instead, use the *Recall display name* field below. When in use, Open Dental will include a recall option for patient's to select from. This allows Open Dental to update patient recall information.

## Operatories Considered

Lists the operatories considered for available time slots. Only operatories associated with *Existing Pat Appt Types* are considered.

![](images/webSchedExistingPatOpsConsidered.png)

**Edit**: Open [Operatory Setup](operatories.html). Add or edit operatories as needed.

## Available Times for Patients

This area offers a preview of up to one month of open time slots for a location, based on the current settings.

![](images/webSchedExistingPatAvailableTimes.png)

* **Date**: Enter the first date to preview or click Today to insert today's date.
* **Reason**: Select the Reason / Appointment Type to preview.
* **Clinic**: Select the location to preview.

Click **Refresh** to view openings.

## Appointment Message

The Appointment Message is intended to provide useful information to patients and will display when the appointment is being created. Click in the message to customize it.

![](images/WebSchedExistingPatApptMessage.png)

## Allowed Blockout Types

By default, Web Sched Existing Patient does not consider [Blockouts](blockouts.html) as available time. However, scheduling can be allowed on top of specific blockout types.

![](images/webSchedExistingPatAllowedBlockouts.png)

* **Generally Allowed**: Lists blockouts that are allowed to be scheduled over. Click Edit to add blockout types.
* **Restricted to Reasons**: Lists blockouts that have been restricted to a [Web Sched Existing Patient Appointment Type](definitionswebschedexistingpatappttypes.html). Click Edit to add blockouts. When restricted, the selected appointment types can only be scheduled over the associated blockouts.

## Other Settings

Additional settings can determine the functionality of Web Sched Existing Patient.

![](images/webSchedExistingPatOtherSettings.png)

* **Allow patients to select provider**: When checked, all [Providers](providers.html), unless marked hidden or not a person, will be listed for patients to choose from, regardless of Operatories Considered or provider availability. Patients may not be able to schedule with all providers listed. When unchecked, patients are not shown a provider list and will only be shown available appointments for Operatories Considered. To add provider descriptions and photo that will be visible to the patient, see the [Provider](providerseditwindow.html), Web Sched tab.
* **Prevent double booking**: Check to block double booking of appointments, even if [Appointment Rules](appointmentrules.html) would permit it.
* **Allow disabled recalls**: Check to allow patients to schedule a recall appointment via Web Sched, even if their recall is set to *disabled*. Useful for patients who have been set to *inactive* but want to return to the office.
* **Minimum number of days out an appointment can be scheduled (empty is 0)**: Enter the number of days in the future to search for the first available openings. Leave blank to include all available openings. For example, when 5 is entered, the first available opening offered to a patient will be five days in the future. When left blank, an opening in the next 30 minutes could be offered.
* **Confirm Status**: Select the [Confirmation Status](confirmationstatus.html) to apply to all appointments scheduled using Web Sched Existing Patient. The default is *Created from Web Sched*.
* **Recall display name**: Enter the term that patients will see when scheduling their recall appointment. When selected from Web Sched, a patient can schedule their recall appointment as of their due date onward. This prevents a patient from scheduling a recall appointment before they are due. When using this option, patient recall information is updated in Open Dental. The default is *Teeth Cleaning*. Leave blank to disable recall appointments for existing patients.
* **Insurance Rules**: Click to open the [Web Sched Carrier Rule](webschedcarrierrule.html) window. Determine if patients are allowed to enter insurance information when scheduling their appointment and what insurance carriers are allowed.
* **Notification Settings**: Click to open [Web Sched Notify Setup](webschedverify.html). Determines if a notification is sent to the patient informing them the appointment was successfully scheduled.

## Web Sched Existing Patient Logic

**Providers / Operatories**: When there are multiple operatories with openings at the same time, an appointment will be scheduled in the operatory on the farthest left of the schedule.

When a provider's schedule is not assigned to a specific operatory, Web Scheduling will consider all Web Sched operatories where they are a primary provider as open for scheduling. This can result in appointments being created in operatories that appear to be closed.

## In Open Dental

* Scheduled appointments instantly show up in the [Appointments Module](appointments.html).
* Alerts are created to notify staff an existing patient appointment has been scheduled. See [Alerts](alerts.html).
* Use the [Web Sched Appointments Report](webschedapptreport.html) to view and track appointments scheduled using Web Sched.