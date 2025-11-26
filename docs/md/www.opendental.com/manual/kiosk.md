Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Kiosk Manager

The Kiosk Manager is used to load patient forms for the kiosk and eClipboard.

In the [Main Menu](mainmenu.html), click Tools, **Kiosk Manager**.

![](images/kioskManager.png)

The [Kiosk](kioskpatient.html) Manager displays active kiosks for the office. Kiosks can be a computer or Windows tablet, or a device running the [eClipboard Feature](../site/eclipboard.html).

Use the Kiosk for patients to fill out forms electronically.

* Kiosk users will install Open Dental as normal on a Windows device, then open the Kiosk.
* eClipboard users will install eClipboard to an Android or iOS device.

**Clinic**: Select the clinic to view devices active for that location.

**Active Kiosk**: Displays active kiosks and eClipboard devices.

* Device Name: The name of the connected device.
* Session Name: The type of session. Either eClipboard or the device name for Kiosk.
* Device State: Displays the current page loaded on the device.
* Patient: The patient currently using the kiosk, if any.
* Clinic: The associated clinic.
* Action: Click **Clear** to clear the patient from the device. Click **Load** to load forms to that device.
* Delete: Remove the device from the list.

**Patient on Device**: Displays the patient for the selected device.

* **Forms on Device**: Displays forms currently loaded to the Kiosk or eClipboard device.
  + **Add or Remove Forms**: Opens [Patient Forms](patientform.html) for the patient.
* **Treatment Plans on Device**: Displays treatment plans currently loaded to the eClipboard device.
  + **Remove Treatment Plan**: Remove the treatment plan from the device.

**Send eClipboard BYOD Text**: Send a text message to the patient with a link to BYOD. See [eClipboard Setup](eclipboardsetup.html) and [BYOD: What Patient Sees](byodsees.html).

**Password**: When using Kiosk on a Windows device, create a password needed to close the Kiosk window. To close the Kiosk, there is a hidden Close button in the lower right of the window. Click in the area to close or prompt for the password.
![](images/kioskPassword.gif)

* If the Kiosk was launched from the Main Menu, it will also cause Open Dental to close.
* If the Kiosk was launched from Patient Forms, it will not close Open Dental.

## Workflow

When using Kiosk, there are two options for launching forms (such as Consent Forms, Health History, etc.)

Note: Consent forms must be enabled from [Patient Forms](patientform.html) Setup Options to show in the list.

Option 1: Load forms to a different device.

1. Select the patient to load forms for.
2. Open the Kiosk Manager.
3. Highlight the device the patient will use.
4. Click **Add or Remove** forms.
5. In the Patient Forms For window, click **Add** then highlight the needed forms.
6. Click **To Kiosk**, then close. The forms will list in the Kiosk Manager.
7. Click **Load** for the device. Forms will automatically list on the device.

Option 2: Load forms to the current device.

1. Select the patient, then click **Forms**.
2. Click Add then highlight the needed forms.
3. Click **To Kiosk**.
4. In the Patient Forms For window, click **Kiosk**. The kiosk will launch with the selected forms.

## Software and Hardware

Requirements vary on the type of kiosk:

* To have patients fill out forms online, see [Web Forms Feature](../site/webforms.html).
* For devices running Windows, see [Computer Requirements](../site/computerrequirements.html).
* For devices running eClipboard, see [Tablet](../site/tablet.html).