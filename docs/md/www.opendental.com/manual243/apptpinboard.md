Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Pinboard

The pinboard is a useful tool for moving or scheduling appointments.

In the [Appointments Module](appointments.html), on the right under the calendar, is the Pinboard area.

![](images/apptPinboard.png)

To schedule an appointment, simply send appointments to the Pinboard, select a different day or week, then drag the appointment to the new date/time. There are several ways to send appointments to the Pinboard:

* Drag an existing appointment from the appointment schedule to the Pinboard.
* When viewing [Patient Appointments](apptspatient.html), click **Copy to Pinboard**. Or, double-click a Planned Appointment in the Appointments for Patient grid and click **Pinboard**.
* From the [Recall List](recalllist.html), click **Sched Family** or Sched Patient.
* From a [Planned Appointment](apptplanned.html), click Copy To Pinboard.

Multiple appointments can be on the Pinboard at one time. Appointments are displayed on the Pinboard for the instance of Open Dental they were added only. If a user logs off and a new user logs on, appointments remain on the Pinboard. Appointments are cleared from the Pinboard when Open Dental is closed.

**Clear**: Click to empty the Pinboard and return any existing appointments to their originally scheduled time.

**Advanced**: Open the Advanced Appointment Search window. See Advanced Search section below for more information.

**Search**: Click to open the Openings in View search dialogue. See Openings in View section below for more information.

## Openings in View

If the schedule is booked out for more than a few days, manually searching for a slot can be time-consuming. Instead, easily search for available openings.

Schedules must be set up for the search to work, as search results show openings for scheduled providers in the selected Appointment View.

Place the appointment on the Pinboard and click **Search**.
![](images/apptSearch.gif)

**Openings in View**: The first available time slots are listed for each of the next ten available dates. Click a date to quickly display the selected date on the schedule. See Search Behavior at the bottom of this page for additional information on which openings are considered.

**More**: Click to see the next ten results. Click on any date to jump to it in the schedule.

Date / Time Restrictions: Enter criteria to limit the available openings considered.

* **After** (Date): Click the dropdown to select a date from a calendar.
* **Before / After** (Time): Enter the time restriction to search. Entering both a before time and an after time searches for openings between the two times. For example, enter Before 4:00 pm and After 12:00 pm to return openings from 1:00 pm to 3:00 pm, if available.

**Providers** (List): Providers currently considered in search results. By default, lists the provider currently assigned to the appointment. If scheduling a Recall appointment, the provider listed by default is the patient's preferred provider in the [Edit Patient Information](patientedit.html) window. If a secondary provider is assigned, they are listed. If no secondary provider is assigned, the primary provider is listed.

**Providers...**: Click to select specific providers to include in search. Ctrl + click to select multiple providers.

Search by: Click a button to update the Providers list.

* **Providers**: Click to update Providers list to all providers not marked secondary (i.e., Dentists) with Time Bars in the selected [Appointment View](appointmentvieweditwindow.html).
* **Hygienists**: Click to update Providers list to all providers marked secondary (i.e., Hygienists) with Time Bars in the selected [Appointment View](appointmentvieweditwindow.html).

**Search**: Click to update *Openings in View* based on the selected search criteria.

* If the selected appointment is attached to an [Appointment Type](appointmenttypes.html) that is only allowed on certain Blockout Types, the search is restricted by Blockout automatically.
* Blockout types with the usage type *Block appointments scheduling* are not considered.

Once a suitable date is found, drag the appointment off the Pinboard and to the preferred appointment time slot.

**Close**: Click to close the *Openings in View* dialogue.

## Advanced Appointment Search

To search for an available appointment based on additional qualifiers, place an appointment on the Pinboard and click **Advanced**.

![](images/apptAdvancedSearch.png)

**Search Results**: Lists up to 15 available appointment dates meeting the search filters. There may be additional openings on a specific date; only the first available time slot is listed for each date. Click a row to move the appointment schedule to the selected date.

Filters: Set criteria to search for available appointment dates.

* **From / To** (Date): Click the dropdown to select a date from the calendar or type a date to search.
* **Starting before**: Enter a time restriction to search for openings before the entered time.
* **Starting after**: Enter a time restriction to search for openings after the entered time.
To search for openings within a time range:

1. Enter the preferred **Starting after** time. This should be the earliest time the patient wants the appointment to begin (e.g., 7 am).
2. Enter the preferred **Starting before** time. This should be the latest time the patient wants the appointment to begin (e.g., 3 pm).
3. Select a date range to search.
4. Set additional search filters and click **Search** to get results.

* **Providers**: Click the dropdown or **[...]** to select providers to include in search.
* **Blockout**: Select the [Blockout Types](definitionsblockouts.html) to search. Blockout types with the usage *Block appointments scheduling* are not in the dropdown list. If Blockouts are selected, search results are limited to only availability within the selected Blockouts.
* **Clinic**: Select the clinic to search. Selectable clinics are restricted based on the current user restrictions, if any.
* **Appt View**: Only available when the clinic is set to *Unassigned*. Select an Appointment View to search.

Quick Search: Click a button to quickly select providers.

* **Providers**: Click to select all [Providers](providers.html) not marked *Secondary Provider*.
* **Hygienists**: Click to select all Hygienists (i.e., providers marked *Secondary Provider (Hyg)* in [Edit Provider](providerseditwindow.html)).

**More**: Click to see the next 15 available dates.

**Search**: Click to update search results after changing filters. At least one provider or Blockout Type must be selected to search.

Once a date is selected, exit the Advanced Appointment Search and click and drag an appointment from the Pinboard to schedule it.

## Search Behavior

The *Search Behavior* set in [Preferences](preferences.html) affects which openings appear in the list.

* If set to ProviderTime: The search considers the provider's scheduled availability ([Schedule Setup](schedule.html)) and available provider time (indicated by the time bar at the left of the appointment schedule). Blockouts are not considered.
* If set to ProviderTimeOperatory: The search considers the provider's scheduled availability, available provider time, already scheduled appointments, and *Block appointments scheduling* blockouts in the provider's scheduled operatory.

The way a schedule is set up may affect Search behavior. See [Schedule Setup Examples](schedulesetupexamples.html) for details.

If a user is restricted to a clinic, search results only include openings for clinics the user has access to.