Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Popups

In the [Main Toolbar](toolbar.html), click **Popups**.

![](images/popupsForFamily.gif)

Popups are automatic messages that are triggered when you open a patient's record and look like this:

![](images/popup.gif)

Click **OK** to acknowledge a popup.

Note:

* Once acknowledged, a popup will not show again on the workstation until at least 10 minutes have passed. See Add or Edit Popups below to determine the last time a popup was viewed on the workstation.
* Changes to popups are tracked in the popup audit trail, and any deletions are permanently archived.
* Popups also display for patients selected in ODTouch.

## Add or Edit Popups

With a [Patient Selected](patientselect.html), in the [Main Menu](mainmenu.html), click **Popups**. Active and disabled popups are listed. To view popups that have been deleted, check the *Show Deleted* box. *Last Viewed* indicates the last time the popup was viewed on this workstation.

Double-click an existing popup to edit, or click **Add**.
![](images/popupEdit.gif)

Level dropdown, Popup Message text box, and Delete button will be disabled if the popup belongs to another user and the current user does not have the *Edit Popup* security permission. Users can still edit and delete their own popups without the permission.

**Level**: Select when this popup will be triggered. Popups are only triggered when a user switches to a patient record; moving between modules will not trigger popups.

* Patient: Triggered when a user switches to this patient.
* Family: Triggered when a user switches to any member of the patient's family.
* Superfamily: Triggered when a user switches to any member of the patient's super family. The patient must be part of a super family for this option to be available. See [Super Family](superfamily.html).

**Date Time Disabled**: Displays the date and time the popup is considered disabled. This time can be set to disable the popup at a future date and time. Click **Now** to enter the current date and time. Date and time is entered in mm/dd/yyyy hh:mm:ss format. When the date and time has passed, the popup no longer prompts for users when the patient is selected. Disabled popups are still viewable in the Popups for Family window. Set default *Popups Disable Timespan* in [Preferences](preferences.html).

**Popup Message**: Enter the text of the Popup. [Right-Click](rightclicktextboxes.html) the text box for additional options.

**Delete**: Remove the popup from the Popup list. It will no longer be triggered, but can still be viewed when a user checks *Show Deleted* on the Popups for Family window.

**Audit Trail**: Click to view a log of any changes made to the message in this popup. User, date and time are tracked. Double-click on a popup to open the Edit Popup window. Changing a level, disabling a popup, or deleting a popup is not tracked in this audit trail.

![](images/popupAudit.gif)