Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

eClipboard: Treatment Plan

Saved treatment plans can be sent to eClipboard for patients to review and sign.

In the [Treatment Plan Module](treatmentplan.html), highlight a saved treatment plan. Click the **eClipboard** button.

![](images/treatmentplaneClipboardButton.png)

Also see:

* [eClipboard Setup](eclipboardsetup.html)
* [eClipboard: What Patient Sees](eclipboardsees.html)

## Patient Currently in Session

If a patient is currently in an eClipboard session, highlight the Saved Treatment Plan then click **eClipboard**.

The Treatment Plan will be added to their Check-in checklist.

![](images/eClipboardCheckInTP.png)

## Patient Not in Session

If the patient is not currently in an eClipboard session, the treatment plan can be sent to the device.

1. In the Treatment Plan Module, highlight the Saved Treatment Plan, then click **eClipboard**.
2. The following window will show.
   ![](images/eClipboardTPQR.png)
3. In eClipoard, click the QR icon.
   ![](images/eClipboardQRButton.png)
4. Either use the device camera to scan the QR code, or type in the unlock code.
5. The treatment plan will populate in eClipboard.
   ![](images/eclipboardTPUnlocked.png)
   * Click the Full Screen button in the upper-right to zoom in on the treatment plan.
   * Additional saved treatment plans can be sent to the device for the patient to compare and review.
   * Once a patient has made a decision, click **Sign**. The signature field will display to sign electronically.

## Saving Treatment Plans

Before treatment plans signed via eClipboard can be saved, [Microsoft Visual C++ 2015 Redistributable Update 3](https://www.microsoft.com/en-us/download/details.aspx?id=52685) must be installed on the server.

Treatment plans signed via eClipboard are automatically saved to the Imaging Module if the preference,  *Save signed Treatment Plans to PDF*, is enabled, and the OpenDentImages folder is using network file storage, Dropbox, or SFTP (cannot be a local folder).

## Updating Treatment Plans

Treatment plans can be updated while still loaded to the eClipboard device. Simply make the edits to the saved treatment plan in Open Dental, then click **eClipboard**. Updates will reflect in eClipboard.

To remove a treatment plan currently loaded to eClipboard, in the patient's Treatment Plan module, click the *X* next to the saved treatment plan in the Treatment Plans grid.