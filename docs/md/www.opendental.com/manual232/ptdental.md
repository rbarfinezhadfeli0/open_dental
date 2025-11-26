Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

PT Dental Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **PT Dental**.

![](images/bridgePTdental.png)

PT Dental offers paperless technologies. Website: [www.gopaperlessnow.com](http://gopaperlessnow.com/). There is a functional 2-way bridge to handle Registration Forms.

To enable the bridge for both PT Dental buttons.

1. In the list of Program Links, double-click on both **PT Dental** and **PT Dental Update**.
2. Check the **Enabled** box for both bridges.
3. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
4. Click OK.

You will now have buttons in your Family Module labeled *PT Dental* and *PT Dental Update*.

![](images/bridgePTdentalupdate.png)

## Using PT Dental

1. Create the patient in Open Dental.
2. Click *PT Dental* to send the patient data to PT Dental. Both programs will now have the same patient data.
   * Also use the PT Dental button any time the patient needs opened in PT Dental.
3. If the patient fills out a form in PT Dental, whether online or in the office, certain patient data may need to be updated. This includes demographics, insurance, referral, and med alerts. Use the button in PT Dental to send this information to Open Dental.
   * A message will display confirming that the transfer was successful.
4. See the newly created Commlog entry for details that couldn't be automatically transferred, such as insurance and referral.
5. If changes are made in Open Dental which need sent to PT Dental, use the PT Update button in the Open Dental toolbar.

## Technical Details

The data transfer involves about 6 different files, all in **C:\PT\USI**. This path is hard coded. Both PT Dental and Open Dental know which filenames to use when passing data back and forth. They also know how to watch for new files so that there is no delay. The files involved get deleted immediately after they are consumed. The Open Dental PatNum is used as the primary key in all data transfers. So any field can be changed, including last name, first name, and birthdate without confusing the synchronization functionality. Patients may use PT Dental to fill out forms in the office or online. When they do it online, PT Dental is responsible for synchronizing the data between its website and each locally installed PT Dental program. From there, the data is transferred to Open Dental. PT Dental will also provide a scripting program that simulates mouse clicks and keystrokes to interact with Open Dental.

The PT Dental script attempts to open the Open Dental Referrals window for the patient. But there is no button in the user interface. So Open Dental allows a key shortcut of Ctrl-X . The script then uses this keystroke to open the Referrals window.