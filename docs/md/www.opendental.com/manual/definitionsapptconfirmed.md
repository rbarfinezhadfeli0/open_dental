Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Definitions: Appt Confirmed

Determine available appointment confirmation statuses and customize with *Appt Confirm* definitions.

In the [Main Menu](mainmenu.html), click Setup, [Definitions](definitions.html), Appt Confirmed.

![](images/definitionsApptConfirmed.png)

[Confirmation Status](confirmationstatus.html) options and colors can be customized. The status listed first is the default for all new appointments.

The following default status options apply to eServices. To set defaults for each action, see [Automated Messaging Advanced Settings](automatedmessagingadvanced.html).

* eConfirmSent: The status typically applied when an eConfirmation is sent.
* eConfirmCallBack: The status typically applied when patient requests a call back on an eConfirmation.
* eConfirmFailure: The status applied when there is an eConfirmation delivery failure.
* Created from Web Sched: The status typically applied when an appointment is scheduled using [Web Sched Recall](webschedrecallsetup.html) or [Web Sched New Patient](webschednewpatsetup.html).

Double-click an existing item to edit or click **Add** to create a new item. The Edit Definition window opens.

![](images/apptconfirmedDef.png)

* **Hidden**: Check to hide this status.
* **Name**: Enter a description for the status.
* **Abbrev**: Enter the abbreviation of the status. Displays in the [Appointments Module](appointments.html) Confirmation Status pick list.
* **Color**: Click the color box to associate a color with this status. Displays when the *Confirmed Color* row is added to an [Appointment View](appointmentvieweditwindow.html).
* **eConfirmations**: Set whether this status should affect the sending of eConfirmations or the automatic update of confirmation status.
  + **Send**: When checked, appointments with this status are sent [eConfirmations](../site/ereminders.html).
  + **Change Status**: When checked, the appointments with this status will have their status updated if an eConfirmation is sent.
* **eReminders**: Set whether this status should affect the sending of eReminders.
  + **Send**: When checked, appointments with this status are sent [eReminders](../site/ereminders.html).
* **Arrivals**: Set whether this status should affect the sending of [Arrivals](arrivalssetup.html).
  + **Send**: When checked, appointments with this status are sent arrival messages.
  + **Send response**: When checked, appointments with this status will have their status updated if an arrival is responded to.
* **Automated Thank-You**:
  + **Send**: When checked, appointments with this status are sent [Automated Thank-Yous](autothankyousetup.html).
* **eClipboard**: Set whether this status should affect patients using eClipboard.
  + **Change on check-in**: When checked, appointments with this status are changed when checking in via eClipboard.
  + **Enable BYOD**: When checked, appointments with this status can be sent a BYOD link.
* **General Messages**: Set whether this status should affect patients being sent General Messages.
  + **Send**: When checked, appointments with this status are sent general messages.

The options associated with eServices are disabled for statuses set as *Waiting Room* triggers in [Preferences](preferences.html).

Click **Save** to exit the window and keep changes.