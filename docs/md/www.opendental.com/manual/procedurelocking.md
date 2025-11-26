Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Procedure Lock

The Procedure Lock Tool is used to permanently lock procedures from being edited, regardless of security permissions, and is rarely used.

In the [Main Menu](mainmenu.html), click Tools, Misc Tools, Procedure Locking.

![](images/procedureLockTool.gif)

This option is not used by most offices. Completed [Procedure Notes](procedurenotes.html) and any edits made are automatically recorded in the database and cannot be deleted. An archived history of notes on a completed procedure can be viewed in the [Chart Module](chart.html) under Show tab, Audit.

To lock procedures for a specific date range at one time, use the Procedure Lock Tool. This tool is only visible in the menu when procedure locking is allowed. To turn on procedure locking, enable the [Preference](preferences.html),  *Procedure locking is allowed*. Open Dental must be restarted for the Procedure Lock Tool to appear in the menu after this preference is enabled.

To lock all procedures completed in a date range, enter the date range in the Procedure Lock Tool window and click **OK**.

## Locking Individual Procedures

Procedure locking is for the few offices that want to lock each completed procedure and only allow notes to be appended. If an office uses this option, there is no way to unlock a procedure, regardless of security permissions. In the case of mistakes, a user can mark a locked procedure as invalid (see Invalidating below). This preference can be turned off later, but locked procedures remain permanently locked.

To change the lock setting, disable the  *Procedure locking is allowed* preference.

When locking is allowed, completed procedures will have a **Lock** button on the right side of the [Edit Procedure](procedureedit.html) window.

![](images/procedureLockingProc.png)

When a user clicks **Lock**, the procedure is immediately and permanently locked. Users may only view the procedure, append procedure notes, or invalidate the procedure.

## Appending Notes

Appending a note adds an additional note to the original procedure note. Click **Append** on a locked procedure.

![](images/procLockAppend.png)

Enter the new note in the **Appended Note** text area, or add an [Auto Note](autonotes.html). Appended notes are dated, and appear in the Progress Notes below the procedure. Appended notes can be signed electronically, see [Electronic Signatures](electronicsignatures.html). The user and signed status shown in progress notes is the user to last append the procedure. An [Alert](alerts.html) is generated when a note is appended by another user.

## Invalidating

Locked procedures cannot be edited or deleted, only appended or invalidated. If a user made a mistake (e.g., the wrong procedure was set complete, or wrong treatment area entered), the procedure may need to be invalidated from the Edit Procedure window. If insurance claims, payments, or adjustments are attached to the procedure, these will need detached or deleted prior to invalidating the procedure.

Click **Invalidate** from the Procedure Edit window.

![](images/procLockInvalidate.png)

The original procedure will still appear in the Progress Notes section of the Chart Module, but *-Invalid-* will appear in the description. Graphics will be hidden on the graphical toothchart (odontogram). The procedure status will change to *Invalidated*. The user will then have to recreate (i.e., re-chart) the procedure to correct any errors.

![](images/procLockInvalid.png)