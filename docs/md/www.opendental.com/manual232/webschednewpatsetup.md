Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Web Sched New Patient

In the [eServices Setup](eservicessetup.html) window, click **New Patient**.

![](images/webschedNewPatientAppts.png)

Web Sched New Patient allows new patients to schedule their appointment online. The office can determine which type of appointments a new patient can schedule, what hours are available, what operatories are available, and other appointment criteria.

To begin using Web Sched New Patient, first [Sign Up](eservicessignup.html) for the service. After enabling and setting up Web Sched New Patient, see [Web Sched Advanced](webschedadvanced.html) to create the Web Sched New Patient URL.

For additional information:

* ![](images/YouTube_PlayButton_15px.png) See our webinar: [Web Sched New Patient](https://youtu.be/ag3lDGTYS0g).
* [Web Sched New Patient: What Patient Sees](webschednewpatsees.html)
* [Web Sched Troubleshooting](webschedtroubleshooting.html)
* To set up Web Sched for existing patients see: [Web Sched Existing Patient](webschedexistingpatsetup.html)

## Appointment Types

Web Sched New Pat Appt Types must be created prior to offering Web Sched New Patient. Web Sched New Patient Appointment Types determine the reasons patients can select for their appointment, the procedures for the appointment, the appointment length, and the time pattern.

![](images/webSchedNewPatApptTypes.png)

**Edit**: Click to open [Definitions: Web Sched New Patient Appt Types](definitionswebschednewpatappttypes.html). Add or edit appointment types as needed.

## Operatories Considered

Lists the operatories considered for available time slots. Only operatories associated with *New Pat Appt Types* are considered.

![](images/webSchedNewPatOpsConsidered.png)

**Edit**: Click to open [Operatory Setup](operatories.html). Add or edit operatories as needed.

## Available Times for Patients

This area offers a preview of up to one month of open time slots for a location, based on the current settings.

![](images/webSchedNewPatAvailableTimes.png)

* **Date**: Enter the first date to preview. Click **Today** to insert today's date.
* **Reason**: Select the Reason / Appointment Type to preview.
* **Clinic**: Select the location to preview.

Click **Refresh** to view openings.

## Appointment Message

The Appointment Message is intended to provide useful information to patients and will display when the appointment is being created. Click in the message to customize it.

![](images/webSchedNewPatApptMessage.png)

## Allowed Blockout Types

By default, Web Sched New Patient does not consider [Blockouts](blockouts.html) as available time. However, scheduling can be allowed on top of specific blockout types.

![](images/webSchedNewPatAllowedBlockouts.png)

* **Generally Allowed**: Lists blockouts that are allowed to be scheduled over. Click **Edit** to add blockout types.
* **Restricted to Reasons**: Lists blockouts that have been restricted to a [Web Sched New Patient Appointment Type](definitionswebschednewpatappttypes.html). Click **Edit** to add blockouts. When restricted, the selected appointment types can only be scheduled over the associated blockouts.

## Other Settings

Additional settings can determine the functionality of Web Sched New Patient.

![](images/webSchedNewPatOtherSettings.png)

* **Allow patients to select provider**: When checked, all [Providers](providers.html), unless marked hidden or not a person, will be listed for patients to choose from, regardless of Operatories Considered or provider availability. Patients may not be able to schedule with all providers listed. When unchecked, patients are not shown a provider list and will only be shown available appointments for Operatories Considered. To add provider descriptions and photo that will be visible to the patient, see the [Provider](providerseditwindow.html), Web Sched tab.
* **Prevent double booking**: Check to block double booking of all Web Sched New Patient appointments. Uncheck to use [Appointment Rules](appointmentrules.html) to block double booking of specfic procedures.
* **Force United States phone number format**: Determines the required phone number format. Check to force the United States format of 1- digits (XXX-XXX-XXXX). Uncheck to allow the patient to use any phone format.
* **Minimum number of days out an appointment can be scheduled (empty is 0)**: Enter the number of days in the future to search for the first available openings. Leave blank to include all available openings. For example, when 5 is entered, the first available opening offered to a new patient will be five days in the future. When left blank, an opening in the next 30 minutes could be offered.
* **Confirm Status**: Select the [Confirmation Status](confirmationstatus.html) to apply to all appointments scheduled using Web Sched New Patient. The default is *Created from Web Sched*.
* **Insurance Rules**: Click to open the [Web Sched Carrier Rule](webschedcarrierrule.html) window. Determine if patients are allowed to enter insurance information when scheduling their appointment and what insurance carriers are allowed.
* **Notification Settings**: Click to open [Web Sched Notify Setup](webschedverify.html). Determines if a notification is sent to the patient informing them the appointment was successfully scheduled.

## Web Sched New Patient Logic

Below are additional details and information that affect Web Sched New Patient appointment openings, provider assignment, and appointment details.

**New Patients**: Before allowing a patient to schedule a new patient appointment, Web Sched verifies that a record for the patient doesn't already exist.

1. First it checks for a matching last name, first name, and birthdate. If no match, patient can schedule.
2. If a match exists, Web Sched compares the entered email address to the email address of all family members for whom a record exists. If no match, patient can schedule.
3. If a match exists, Web Sched compares the entered phone number to the phone number for all family members for whom a record exists. If no match, patient can schedule. If a match exists, patient cannot schedule.

**Providers / Operatories**: Providers are assigned based on the operatory the appointment is scheduled in. It is important to assign a default provider to the operatory and/or assign the operatory to the provider's schedule time block. Providers cannot be marked as *Not a Person* in the Provider Edit window.

When there are multiple operatories with openings at the same time, an appointment will be scheduled in the operatory on the farthest left of the schedule.

When a provider's schedule is not assigned to a specific operatory, Web Scheduling will consider all Web Sched operatories where they are a primary provider as open for scheduling. This can result in appointments being created in operatories that appear to be closed.

**Available Appointments**:

* Openings are available as far as [Schedule Setup](schedule.html) allows.
* The provider's Schedule Setup affects available openings. (Patients can't schedule appointments 2 months in the future if there is no schedule set 2 months out).
* The appointment schedule's time increment affects appointment start/end.

## Patient Requirements

In order to schedule a new patient appointment using Web Sched New Patient, patients must meet the following requirements:

* A patient record cannot already exist; patient must be new.
* Patient must be 18 years of age or older, or a parent/legal guardian must confirm they are scheduling on a minor's behalf.

Existing patients can instead schedule appointments using [Web Sched Existing Patient](webschedexistingpatsetup.html).

## In Open Dental

* Scheduled appointments instantly show up in the [Appointments Module](appointments.html).
* [Alerts](alerts.html) are created to notify staff a new patient appointment has been scheduled.
* Use the [Web Sched Appointments Report](webschedapptreport.html) to view and track appointments scheduled using Web Sched.