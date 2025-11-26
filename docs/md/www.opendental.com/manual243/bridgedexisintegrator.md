Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Dexis Integrator Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Dexis Integrator from www.kavo.com**.

![](images/bridgeDexisIntegrator.png)

Dexis Integrator allows offices to bridge to the Dexis Integrator App. This allows offices to use RDP to connect with Dexis.

Website: <https://www.kavo.com/en-us/>.

To enable the bridge:

1. Check the **Enabled** box.
2. Double-click on **Additional Properties** to change settings.
   1. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
   2. Determine how to transfer patient information to Dexis. Enter 0 to use DDE (default) or 1 to use a Communication File (text file).
   3. If using a Communication File, enter the folder path where the files are stored. See below for details.
3. Set up a clickable bridge button:
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
4. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
5. Click Save.

## Technical Data

The selected patient information is sent to the Integrator software and the Integrator forwards that info to the local PC to launch Dexis locally with the selected patient. It causes the RDP session to be minimized and when the local Dexis is closed the RDP session is maximized again.

**Communication File**
 If using a Communication File:

* Create a single folder where Open Dental stores the communication files and where Dexis then reads them from. This folder should be on a local hard disk. (e.g., **C:\Dexis\commFiles**)
* When installing the integrator, edit the Integra.ini file:
  pms=Open Dental
  path=< Enter File Path Here >
  link=dexfil
  + File Path must be the full path name including the name of the file. (e.g., **C:\Dexis\commFiles\Patient\_< Station> .txt**)
    - Patient\_< Station> .txt must be appended to the file path for the Communication File to work.
    - < Station> is a special variable that the integrator interprets to get the end client workstation name. The program link writes in this full file name, and it should match with the workstation name that the Integrator determines as well.