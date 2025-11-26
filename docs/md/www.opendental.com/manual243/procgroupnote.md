Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Procedure Group Note

A Group Note is a single clinical note made for multiple procedures completed on the same day, by the same provider.

In the [Chart Module](chart.html), highlight multiple procedures set complete on the same day. Right-click and select **Group Note**.

![](images/procGroupNote.png)

A Group [Note](notes.html) shows in the Progress Notes section of the [Chart Module](chart.html) after the last procedure it is attached to. Group Notes can only be created for procedures that have been set complete and have the same procedure date.

The Group Note is stored in the database as a procedure.

* The [Permission](permissions.html) to edit or delete Group Notes is based on the status of attached procedures. If attached to at least one completed procedure, it is controlled by *Edit Completed Procedure* permission. Otherwise it is controlled by *TP Procedure Delete*.
* Group Note text color in the Progress Notes can be customized in [Definitions: Prog Note Colors](definitionsprognotecolors.html), Status Existing Current Prov.

**Procedure Date**: Read only. Date of the selected procedures. To change the procedure date, see [Edit Procedure](procedureedit.html).

**Date Entry**: Read only. Date the Group Note was created. Auto-generates today's date for new Group Notes.

**User:** The user tied to the [Electronic Signature](electronicsignatures.html). By default this is the logged-on user. To override, click **[...]** and enter log on credentials.

**Auto Note:** Click to select and complete [Auto Notes](autonotes.html).

**Notes:** Enter the Group Note.

**Signature/Initials:** Electronically sign the note. The signature is connected to the user listed above the Notes area.

* If a note is edited later, the signature will be cleared.
* Enable *Block procedure note signatures when there are uncompleted auto note prompts* in [Preferences](preferences.html) to prevent users from signing Group Notes with incomplete auto notes.
* An [Alert](alerts.html) is generated when a signature is cleared by another user.
* If a signature is cleared by another user without adding a replacement, users are warned when saving the procedure.

**Procedures:** The procedures attached to this Group Note. The columns that display can be customized in [Display Fields](displayfields.html).

**Delete**: Delete the Group Note.

[Right-Click](rightclicktextboxes.html) the text box for additional options.

## Aggregate Group Notes

Aggregate Group notes allow users to create a Group Note that combines notes started on individual procedures.

When the preference *When creating a Group Note, aggregate procedure notes* is enabled and a Group Note is created:

* If a procedure note is signed, the note remains in the procedure and is copied to the Group Note as well.
* If a procedure note is not signed, the note is removed from the procedure but still copied to the Group Note.

![](images/YouTube_PlayButton_15px.png) See our video: [QuickTip: Using Aggregate Procedure Notes](https://www.youtube.com/embed/g9aYQZo4Css).

## Invalid Group Notes

Invalid Group Notes are created when [Procedure Lock](procedurelocking.html) is turned on.

![](images/groupNoteInvalid.png)

Invalidated Group Notes cannot be edited or deleted. Users can select the same procedures to create a new Group Note.