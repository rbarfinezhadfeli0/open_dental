Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Commlog

The Commlog is a general purpose log of all communications with a patient.

In the [Main Toolbar](toolbar.html), click **Commlog**.

![](images/commlog.png)

Alternatively:

* In the [Edit Appointment](aptedit.html) window, click **Comm**.
* In the [Recall List](recalllist.html), click **Comm**.
* In the [Add Family](familyadd.html) window, click **Comm**.

A log of all Commlog entries show in the [Account Module](account.html), [Chart Module](chart.html), [Edit Appointment](aptedit.html), and [Recall List](recalllist.html).

In some cases, the Commlog window may open automatically to prompt an entry after an action:

* Breaking an appointment. See: [Break Appointment](apptbreak.html).
* Changing status on the [Recall List](recalllist.html).

**Patient**: Patient associated with the commlog.

**Date/Time Created**: System-generated date and time the commlog was created. This field is read-only. This field is blank for Commlogs created prior to version 22.2.1.

**Date / Time**: Date and time of the commlog. Defaults to the Date/Time Created, but can be edited. This is the date/time that affects the commlog's placement in the Chart Progress Notes area and Account Communications Log area.

**Types**: The options that show are those listed in [Definitions: Commlog Types](definitionscommlogtypes.html). In some areas of Open Dental, a Commlog's default type is set based on where the Commlog is created. Below are the default Commlog types and associated usage types available in Open Dental. Type does not affect sorting of Commlogs. These can be edited in Definitions.

* ApptRelated: Attached to APPT usage type by default.
* Insurance: No default usage type.
* Financial: No default usage type.
* Recall: Attached to RECALL usage type by default.
* Misc: Attached to MISC usage type by default.
* FHIR: Attached to FHIR usage type by default.

**Mode**: The method of communication. Modes are not customizable.

* None
* Email
* Mail
* Phone
* In Person
* Text
* Email and Text
* Phone and Text

**Sent or Received**: Direction of communication. These options are not customizable.

* Neither
* Sent
* Received

Note: Enterprise users can default Commlogs to not set a default type, mode, and sent/received status. See: *Commlog fields blank by default* in [Enterprise Setup](enterprisesetup.html).

**Edit Auto Note**: This button only appears if an Auto Note has been used. Click to complete Auto Note that may have been left unfinished.

**Auto Note**: Add [Auto Notes](autonotes.html) to the Commlog note text.

**Clear**: Remove contents of Commlog note.

**Note**: The Commlog text.

**Signature Box**: Enter an [Electronic Signature](electronicsignatures.html). Saved signatures are cleared if changes are made to a Commlog.

In some cases, a Commlog entry is automatically created after an action:

* Sending individual text messages.
* Sending text messages or printing postcards from the [Confirmation List](confirmationlist.html).

**Delete**: Delete the entire Commlog.

Click **OK** to create a new Commlog or save changes.

## Automatically Save Commlogs

New Commlogs in progress can be set to auto save on a 10 second timer, if a change was made in that time. Auto Save is only available for newly created Commlogs.

* The date and time in the window header shows when the Commlog was last saved.
* Enable the *Commlogs Auto Save* preference. With or without the preference, Commlogs in progress are automatically saved when Open Dental shuts down unexpectedly (e.g., during an update).

## Automatic Commlogs

Some Commlog entries are automatically created by the OpenDentalService, eConnector, FHIR, etc. and, have no user associated. These Commlogs will show as one line of text. Double-click the Commlog to view the entire message.

Automated Commlogs can be hidden from these areas using the *Show Automated Commlogs* preference:

* [Account Module](account.html), Show tab
* Chart Module, [Show Chart Views](showtabchart.html)
* [Edit Appointment](aptedit.html), Commlogs and Buttons

The preference to hide Automated Commlogs is saved per user.

## Navigation

Commlogs can include links to outside sources or other places within the program. Right-click a Commlog from the Progress Notes or Account Module to open a link.

* **File Explorer**: Opens a folder in the File Explorer.
  + UNC paths must end in a file or a backslash. For example **\\Server\OpenDentalExports** won't work, but **\\Server\OpenDentalExports\** or **\\Server\OpenDentalExports\File.txt** will.
  + If a folder name contains punctuation or special characters, the folder may not open.
* **PatNum**: Select the patient in Open Dental. Enter the patnum immediately after the colon. (e.g. *patnum:234*)
* **TaskNum**: Open the task in a new window. Enter the task number immediately after the colon. (e.g. *tasknum:789*)
* **Web**: Open a URL in the computer's default web browser.
* **Wiki**: Open the corresponding wiki page. Enter the page name in two brackets (e.g. *[[page name]]*)

![](images/commlogNavigate.png)