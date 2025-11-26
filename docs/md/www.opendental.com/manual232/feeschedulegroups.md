Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Fee Schedule Groups

Fee Schedule Groups are used to manage fee schedules that are region specific, but share the same clinics.

In the [Main Menu](mainmenu.html), click Setup, Fee Schedule Groups.

![](images/feeScheduleGroups.png)

To enable fee schedule groups, offices must :

* Enable *Show Fee Schedule Groups* in [Enterprise Setup](enterprisesetup.html).
* Be using [Clinics](clinics.html).
* Have fee schedules with *Use Global Fees* unchecked.

Users must not be restricted to a clinic and have the *Fee Schedule Edit* permission to access Fee Schedule Groups.

Fee Schedule Groups use one fee schedule for all clinics in the associated group. Clinics can be assigned to multiple Fee Schedules Groups as long as there is a unique fee schedule.

Fee Schedule Group Filters:

* **Fee Schedule**: Type to limit the list by fee schedule name.
* **Clinic**: Select a clinic from the dropdown list. Limits the list to only groups used by the clinic.

The window displays the following information:

* **Fee Schedule Groups**: This column lists all Fee Schedule Groups available. One fee schedule can have as many groups as necessary.
* **Clinics in Group**: This column lists all clinics associated with the selected Fee Schedule Group.

**Add Group**: Click to create a new Fee Schedule Group. Opens the Fee Schedule Edit window.

## Fee Schedule Group Edit

Click **Add Group** to create a new Fee Schedule Group or double-click an existing group to edit.

![](images/feeScheduleGroupAdd.png)

* **Description**: The name of the Fee Schedule Group.
* **Fee Schedule**: Select the fee schedule to group.
* **Available Clinics**: Lists clinics not currently associated with any Fee Schedule Group assigned the selected fee schedule.
* **Clinics in Group**: Lists clinics assigned to the Fee Schedule Group.

Use the **Left** and **Right** arrows to move clinics in and out of the group.

Click **OK** to create the group or save changes. If changes to the group structure have been made, the user is prompted to select the fees.

![](images/feeScheduleGroupPrompt.png)

* **Yes**: Users receive an additional prompt to select the clinic which has the current fees they wish to use for all associated clinics. Fee schedules will be overridden to use the selected clinic's fees.
* **No**: All associated clinics in the group will use the default fees associated with the fee schedule. Fee schedules will be overridden to use the default fees.