Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Operatories

Add and customize operatory options to meet the needs of the practice.

In the [Main Menu](mainmenu.html), click Setup, Appointments, Operatories.

![](images/operatories.gif)

![](images/youtubeLogo.png) See our videos: [Operatory and Schedule Setup](https://youtu.be/jDnnrFnw3CU) & [Operatory and Schedule Setup for Clinics](https://youtu.be/CBwNnjaxzlg)

* **Clinic**: Click to filter operatories by clinic.
* **Add**: Click to add a new operatory, or double-click an existing operatory to edit. See [Operatory Edit](operatoryedit.html) for details.
* **Combine**: Select multiple operatories, then click to combine them. See Combine Operatories below for additional details.
* **Up / Down**: Use the Up and Down arrows to change the sort order of operatories. Operatory sort order affects the left to right order of operatories in [Appointment Views](appointmentviews.html). If a specific clinic is selected, the operatory being moved cannot belong to a Headquarters appointment view.

## Combine Operatories

Duplicate operatories can be combined. Combining affects all appointments in the selected operatories.

1. Select two or more operatories to combine.
2. Click **Combine**. A confirmation message will appear.
3. Click **OK** to continue. The Operatory Pick window will display.
   ![](images/operatoryPick.gif)
4. Highlight the operatory to keep, then click **OK**.
   * If appointments are scheduled in both operatories but do not overlap, a message will ask to move the appointments into the merged operatory. Click **OK** to automatically move the appointments.
   * If appointments are scheduled in both operatories that do overlap, and the preference, *Appointments allow overlap*, is not enabled in Preferences, they will need to be manually moved before the operatories can combine. A warning message will appear. Click **OK** to view a list of conflicting appointments. This list can be printed. When all conflicts are resolved, reopen the Operatories window to combine.

Duplicate operatories will be marked hidden and appointments merged.

## Prompts to Change Provider

When users move an appointment from the Pinboard to an operatory, or from one operatory to another, they may be prompted to change the provider. If operatories are assigned to default providers, or to provider time blocks in the schedule, this is often what they want to do.

To turn the prompt off:

1. Do not assign providers to operatories (Provider or Hygienist).
2. Do not assign provider time blocks to operatories in the schedule.

## Provider Logic

A provider will be automatically assigned to an appointment using the logic in the following order:

1. The provider scheduled in the operatory. See [Schedule Setup](schedule.html).
2. The provider assigned to the operatory. See above.
3. The patient's primary provider. See [Edit Patient Information](patientedit.html).