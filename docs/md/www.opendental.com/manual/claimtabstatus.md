Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Edit Claim - Status History Tab

Use the Status History tab to record data about a claim.

In the [Claim Edit](claimedit.html) window, click the Status History tab.

![](images/claimEditStatus.png)

The Status History tab is useful to track a claim status, such as why a claim hasn't been sent, why processing is delayed, etc.

Before a status can be added, definitions must be created and customized.

* Customize claim custom tracking status options in [Definitions: Claim Custom Tracking](definitionsclaimcustomtracking.html)
* Customize Error Codes in [Definitions: Claim Error Code](definitionsclaimerrorcode.html).
* Optionally, enable *Exclude 'None' as an option on Custom Claim Tracking Status* in [Preferences](preferences.html) to force a status to be used.
* To update status for many claims at once, see [Outstanding Insurance Claims Report](reportoutins.html).

This information does not show on printed claims or e-claims.

**Add**: Create a new Claim Custon Tracking Status History entry. Opens Custom Tracking Status Update (see below).

**Claim Custom Tracking Status History**: Displays all custom claim tracking status entries for this claim.

* Date: The time stamp when the status update was created or last edited.
* Description: Custom Track Status name.
* Log Note: Note entered in the Custom Tracking Status Update window.
* ErrorCode: Claim Error Code associated with the update.
* User: The user who created or last edited the status update.

## Custom Tracking Status Update

Click **Add** to create a new entry for Claim Custon Tracking Status History or double-click an existing entry to edit.

![](images/claimEditCustomTrackStatusUpdate.png)

* **Custom Track Status**: Click the dropdown to select a status. No status is selected by default. **Error Code**: Click the dropdown to select an error code. The long description of the error code displays in the text box below the dropdown.

+ Enable the preference, *Require error code when adding claim custom tracking status* to require users to select error codes.

* **Note**: Optionally add a note that appears in the *Log Note* column. Notes can be added or edited later by double-clicking a Claim Tracking Status row. This text box supports [Right-Click Options](rightclicktextboxes.html).

Click **Save** to add the status or keep changes.

* If no Custom Track Status was selected a warning appears to specify a Custom Track Status. Click **OK** to return to the prior window and choose a Custom Track Status. Users cannot proceed without selecting a Custom Track Status.
![](images/claimTrackingNoStatus.png)* If *None* was selected as the Custom Track Status, a warning appears regarding the [Outstanding Insurance Claims Report](reportoutins.html). Click **OK** to proceed with None as the Custom Track Status; the claim can no longer be filter from the report using *Last Custom Tracking Status*. Click **Cancel** to return to the prior window and choose a different Custom Track Status.
![](images/claimStatusNone.png)