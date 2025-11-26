Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Appointment Types

Use Appointment Types to customize appointment background colors, time patterns, and procedures.

In the [Main Menu](mainmenu.html), click Setup, Appointments, Appointment Types.

![](images/appointmentTypes.png)

To assign Appointment Types to appointments:

* On the [Edit Appointment](aptedit.html) window, select the appointment type.
* Enable the prompt to select an Appointment Type when creating new appointments.
* For Web Sched New Patient, associate Appointment Types to [Definitions: Web Sched New Patient Appt Types](definitionswebschednewpatappttypes.html).

The Setup Appointment Types window displays Appointment Type settings and the list of current Appointment Types.

* **New appointments prompt for Appointment Type**: Determines if an Appointment Type can be selected immediately when creating appointments.
  + Checked: When creating a new appointment, a prompt appears for the user to select the Appointment Type.
  + Unchecked: No prompt appears. Instead, Appointment Types must be selected from within the appointment as needed.
* **Warn users before disassociating procedures from an appointment**: Set the default behavior when removing procedures from an appointment.
  + Checked: A warning appears when the user changes the Appointment Type of an existing appointment if the new type has different procedures than the current type.
  + Unchecked: The user can dissociate procedures from an appointment via Appointment Type with no warning.
* **Add**: Click to create a new Appointment Type. See below for details.
* **Up / Down**: Reorder Appointment Types.

## Add Appointment Types

Click **Add** to create a new Appointment Type or double-click an existing type to edit.

![](images/appointmentTypeEdit.png)

* **Name**: Description of the Appointment Type.
* **Color**: Associate a background color to the appointment type. Click the square to select a [Color](colorselection.html). Click **None** to clear the current color selection.
  + Appointment Type color overrides the provider color.
  + When a color is updated, users are prompted *Would you like to update all future appointments of this type to the new color?* Select **Yes** to update all existing future appointments. Select **No** to only use the updated color when creating new appointments.
* **Hidden**: Hide this Appointment Type as a selection from [Edit Appointment](aptedit.html) or Select Appointment Type list.
* **Time**: Indicates the time pattern of the Appointment Type. By default, it uses the time pattern of attached procedures. See Time Pattern Logic below for additional information.
  + To change the time pattern, use the slider bar on the left. Drag the slider up or down to increase or decrease appointment length.
  + Click each square to toggle between *X* (provider) and */* (non-provider) time. Each square is one Time Increment. Time Increment length is determined in [Appointment View Setup](appointmentviewsetup.html).
  + **Clear**: Click to remove the time pattern override.
* **Procedures to Add to the Appointment**: List of procedures automatically treatment planned when using this Appointment Type.
  + Click **Add** to attach procedures to the Appointment Type. Procedures associated with an Appointment Type should not have treatment areas (e.g., fillings) as there is no prompt to enter treatment area. Instead, procedures should be general (e.g., sedation).
  + Select a procedure and click **Remove** to delete it from the Appointment Type.
* **Required Procedures**: Click **Add** to attach procedures that are required when selecting this Appointment Type. Select a procedure and click **Remove** to delete from the required list.

+ **At Least One**: Select to require only one of the listed procedures be attached to the appointment when using this Appointment Type.
+ **All**: Select to require all listed procedures to be attached to the appointment when using this Appointment Type.
+ Radio buttons are disabled if the *Required Procedures* list is empty.

* **Allowed Blockout Types**: Restrict this Appointment Type to only be scheduled on the selected [Blockout Types](definitionsblockouts.html) or areas where there is no Blockout.

Click **Save** to finish adding a new Appointment Type or keep changes.

## Changing an Appointment Type

When an Appointment Type is changed, existing appointments with that type remain unchanged. Double-click the appointment and select the Appointment Type to update.

Changing an Appointment Type on an existing appointment treatment plans the procedures for the new Appointment Type. The original procedures also remain treatment planned. Procedures that are not needed can be manually deleted from the [Treatment Plan Module](treatmentplan.html), Procedures grid.

Changing the Appointment Type from one with a custom time pattern or attached procedures to one with no time pattern does not change the time pattern of the appointment.

## Time Pattern Logic

The appointment time is recalculated based on the following logic:

* If the Appointment Type has procedures attached and a custom time pattern, the custom time pattern is used.
* If the Appointment Type has procedures attached but does not have a custom time pattern, the procedure time pattern is used.
* If the Appointment Type has no procedures attached and no custom time pattern, the appointment does not have a time pattern.

Note: **Logic for MobileWeb Appointments**

* If an Appointment Type is selected, and the time duration entered matches the Appointment Type, the Appointment Time Pattern is retained.
* If no Appointment Type is selected, or the time duration entered does not match the Appointment Type, the time pattern adds assistant time to meet the full-time duration.