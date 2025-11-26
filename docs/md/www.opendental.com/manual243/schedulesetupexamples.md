Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Schedule Setup Examples

Performing [Schedule Setup](schedule.html) varies on the office workflow.

There are two recommended options for setting up schedules.

* Each Provider is Assigned Their Own Operatory
* Providers Move Between Operatories

See below for details on each option and how they affect the [Appointments Module](appointments.html) and [Pinboard](apptpinboard.html), Appointment Search.

## Each Provider is Assigned Their Own Operatory

When each provider remains in their operatory, perform the setup as follows.

**Schedule**: Do not assign providers to operatories. Instead, set the provider's available time and select *not specified.*
![](images/scheduleExample1.png)

**Operatories**: Assign each provider to their corresponding operatory.
![](images/scheduleOperatoryExample1.png)

**Appointments Module**: The Appointments Module displays the provider in each operatory with their corresponding provider color.

* To view provider time bars on the left, select each provider under *View Provider Bars* in the [Appointment View Edit](appointmentvieweditwindow.html).

![](images/scheduleApptExample1.png)

**Appointment Search**:

* When the *Search Behavior* preference is set to *Provider Time*, the Appointment Search only considers available blocks of time for the provider (i.e., colored blocks). In the example below, three blocks of provider time are open on the schedule, so the appointment can be scheduled in when *Appointments allow overlap* is enabled.
![](images/scheduleSearchExampleProvTime1.png)* When the *Search Behavior* preference is set to *Provider Time Operatory*, the Appointment Search considers both available provider time and available operatory time. In the example below, the provider is set as the primary provider on the Hygiene operatory and there are three blocks of time available for the appointment to be scheduled.
![](images/scheduleSearchExampleOpTime2.png)

## Providers Move Between Operatories

When providers share operatories during the day, or alternate operatories by day, perform the setup as follows.

**Schedule**: Assign providers to operatories for specified times.
![](images/scheduleExample2.png)

**Operatories**: Do not assign providers to operatories. Leave each provider as *None*.

![](images/scheduleOperatoryExample2.png)

**Appointments Module**: The Appointments Module displays the operatory headers in gray. Each operatory includes the provider time for the provider scheduled.

* To view provider time bars on the left, select each provider under *View Provider Bars* in the [Appointment View Edit](appointmentvieweditwindow.html).

![](images/scheduleApptExample2.png)

**Appointment Search**:

* When the *Search Behavior* preference is set to *Provider Time*, the Appointment Search only considers available blocks of time for the provider (i.e., colored blocks). In the example below, three blocks of provider time are open on the schedule, so the appointment can be scheduled in when *Appointments allow overlap* is enabled.
  ![](images/scheduleSearchExampleProvTime2.png)
* When the *Search Behavior* preference is set to *Provider Time Operatory*, the Appointment Search considers available operatory for the scheduled provider only. It ignores provider time bars, as displayed in the example below.
![](images/scheduleSearchExampleOpTime3.png)

## Notes or Overflow Operatories

Some practices keep an additional operatory on the schedule for note keeping or overflow appointments. Do not assign or schedule a provider to these operatories. This ensures the Appointment Search excludes these additional operatories from displaying as available time.