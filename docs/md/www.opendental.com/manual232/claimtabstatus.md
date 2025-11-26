Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

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

## Add a Custom Track Status / Error Code

1. Click **Add**.
   ![](images/claimEditCustomTrackStatusUpdate.png)
2. **Custom Track Status**: Click the dropdown to select a status. No status is selected by default.
3. **Error Code**: Click the dropdown to select an error code. The long description of the error code displays in the text box below the dropdown.

   Note: To require an error code, enable *Require error code when adding claim custom tracking status* in Preferences.
4. **Note**: Optionally add a note that appearsw in the *Log Note* column. Right-click to insert [Quick Paste Notes](quickpastenotessetup.html). Notes can be added or edited later by double-clicking a Claim Tracking Status row.
5. Click **Update** to save.
   * If no Custom Track Status was selected a warning appears to specify a Custom Track Status. Click **OK** to return to the prior window and choose a Custom Track Status. Users cannot proceed without selecting a Custom Track Status.
   ![](images/claimTrackingNoStatus.png)* If *None* was selected as the Custom Track Status, a warning appears regarding the [Outstanding Insurance Claims Report](reportoutins.html). Click **OK** to proceed with None as the Custom Track Status; the claim can no longer be filter from the report using *Last Custom Tracking Status*. Click **Cancel** to return to the prior window and choose a different Custom Track Status.
   ![](images/claimStatusNone.png)