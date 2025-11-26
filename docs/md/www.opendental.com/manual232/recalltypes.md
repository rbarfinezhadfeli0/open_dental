Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Recall Types

Set recall appointment length, due date, and procedures in Recall Types.

In the [Main Menu](mainmenu.html), click Setup, Appointments, Recall Types.

![](images/recallTypes.gif)

Every patient is assigned an exam and prophy recall, but can be set to perio as needed. Other custom types may be added. Each type is given an appointment length, recall interval, and procedures to be scheduled. Assign procedures that trigger the recall appointment, so every time these procedures are set complete, the patient's next recall appointment due date is generated. The patient will then appear in the [Recall List](recalllist.html) and when scheduled, the appointment will automatically treatment plan and attach the recall types' procedures.

Note: To reset all Recall Types back to default, use the Recall Types option in [Procedure Code Tools](procedurecodetools.html).

A patient's recall type(s), along with due dates, scheduled dates, and recall status shows in the upper right of the [Family Module](family.html), [Recall](recall.html) grid. There, users may also customize the patient's recall interval, change the prophy recall to perio, delete/disable a patient's recall type, or add custom types from the Recall grid.

## Add / Edit Recall Types

The default recall types are Prophy, Child Prophy, and Perio and these Special Types are required for recall to function. To add or edit recall types, from the Recall Types window, double-click an existing type to edit or click **Add** to create a new type. Update the information and settings in the Edit Recall Type window.

![](images/recallTypeEdit.gif)

**Description**: Enter the identifying name.

**Special Type**: Select whether this recall type is Prophy, Child Prophy, or Perio. Only one of each type may be assigned to a recall. For custom recall types select None. The web sched feature only sends notifications for recalls assigned a special type.

* Prophy and Perio: Primary recall types and are mutually exclusive. The triggers for Prophy and Perio cross over and act as triggers for both types.
* Child Prophy: Only used to determine when, based on age, child procedures are attached to the recall appointment. Patients are still set to Prophy or Perio for recall but if the patient meets the age criteria, child recall procedures are attached.

**Age Limit**: (Special Type: ChildProphy only) Enter the age limit that determines child procedures versus adult procedures. For example, if 12 is the age limit, patients 11 and under will have the Child Prophy procedures attached to their appointment instead of the Prophy procedures.

![](images/recallChildProphy.gif)

**Append to Special**: Determines whether this recall type is automatically scheduled with special type recalls.

* Checked: Automatically include this recall type when scheduling a special type recall, if it is also due. For example, to automatically add 4BW to a Prophy recall that is due, check the box for the 4BW recall type.
* Unchecked: Do not include this recall type with special type recalls when they are both due. For example, a recall type for a follow-up endo exam might have this box unchecked so it is not automatically added to a Prophy recall that is due.

**Procedures that trigger this recall type**: Click **Add** to select the procedures that trigger the recall. To delete a procedure, select a procedure and click **Remove**. When a patient has one of these procedures completed, the next recall appointment due date is triggered.

**Default Interval**: Determines the length of time between each recall appointment and calculates the recall due date. A common prophy interval is 6 months plus 1 day so that six month recalls are not accidentally scheduled too early.

**Time Pattern**: Create the time pattern for providers and assistants to determine the length of the appointment. Use slashes / for assistant time and X for provider time. Each character equals the time increment set in the Appointment module (see [Appointment View Setup](appointmentviewsetup.html)). For example, if time increment is 10 minutes, //XX/ = 20 minutes of non-provider time, 20 minutes of provider time, 10 minutes non-provider time (50 minutes total appointment time).

Note: If no **Time Pattern** is set, a default appointment length of three time blocks will be applied when scheduling this recall type.

**Procedures on Appointment**: Click **Add** to select procedures that will be attached to scheduled recall appointments. To delete a procedure, select a procedure and click **Remove**.

**Restrict to Specific Blockouts**: Click **[...]** to restrict this Recall Type to specific blockouts when scheduling via [Web Sched Recall](webschedrecallsetup.html).

When finished, click **Synch** to apply the changes to patients with the recall type, or with a trigger procedure completed. For patients with manual edits to their recall interval, the Synch will not change the manual edits but their due date may be recalculated. If the updates are not synched, new or changed recall types will only affect new completed procedures.