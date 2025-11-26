Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

PANDA Perio Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html), PandaPerio.

![](images/bridgePandaPerio.png)

Note: In order to successfully bridge to PandaPerio, PandaLauncher is required.

PANDA Perio is periodontal charting software. Website: <https://www.pandaperio.com/>.

To enable the bridge:

1. Check the **Enabled** box.
2. Double-click on **Additional Properties** to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
3. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
4. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
5. Click Save.

## Technical Details

This bridge passes the patient's Patient ID, First Name, Last Name, Birthdate, SSN, Home Phone Number, and Work Phone Number. If there is a referral attached and the referral is flagged as *Is Doctor*, then the Referring Provider's ReferralNum, First Name, Last Name, Address, and Phone Number are also passed over.

If the patient is a patient clone, the bridge transfers the non-clone patient information.

To write to an ini file instead, use the [PANDA Perio (advanced) Bridge](bridgepandaperioadvanced.html) .