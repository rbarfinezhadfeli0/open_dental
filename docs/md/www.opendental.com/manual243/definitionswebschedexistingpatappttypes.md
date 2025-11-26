Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Definitions: Web Sched Existing Appt Types

In the [Main Menu](mainmenu.html), click Setup, [Definitions](definitions.html), Web Sched Existing Appt Types.

![](images/definitionsWebSchedExistingPatApptTypes.png)

The Web Sched Existing Appt Types definition determines the list of available *Reasons for Appointment* options patients select from when scheduling an appointment using the [Web Sched Existing Patient](webschedexistingpatsetup.html) feature.

Create [Appointment Types](appointmenttypes.html) first to determine the length and procedures for certain types of appointments. Then assign the Appointment Type to the Web Sched Existing Appt Type. When a patient schedules an appointment online and selects one of these types from the list of appointment reasons, an appointment is created with the procedures and for the length designated in the associated Appointment Type.

Double-click an existing item to edit or click **Add** to create a new item. The following Edit Definition window will open.

![](images/definitionEditWebSchedExistingApptType.png)

* **Name**: Enter the appointment reason description. The reason text is also added to the [Appointment](aptedit.html) note.
* **Appointment Type**: Click **[...]** to assign an Appointment Type. Each reason can be assigned to one Appointment Type.
* **Restrict to Specific Blockouts**: Click **[...]** to restrict this Appointment Type to only be scheduled on a specific [Blockout](definitionsblockouts.html). Multiple appointment types can be restricted to the same blockout.

**Delete**: Click to remove a reason not in use.

Click **Save** to keep changes to save.

Note: Do not create Web Sched Existing Patient Appointment Types for recall appointments. Instead, use the built-in recall option. *Recall display name* field in Web Sched Existing Patient setup.