Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

eClipboard: What Patient Sees

On a tablet device, launch the [eClipboard](../site/eclipboard.html) app.

eClipboard features vary depending on which settings are enabled in [eClipboard Setup](eclipboardsetup.html).

## Patient Check-in

If *Allow self check-in* is enabled, patients start by entering their first name, last name, and birthdate. Preferred names are taken into consideration if they are entered in the [Edit Patient Information](patientedit.html) window.

* Alternatively, when *Display check-in questions individually* is checked, the first name, last name, and birthdate prompts each appear on their own screen.
* To bypass entering first name, last name, and birthdate, right-click the patient's appointment in Open Dental and select *Show eClipboard QR*. Scan the QR code using the QR icon in the bottom right of the eClipboard device. This quickly accesses the patient's check-in checklist.

![](images/eClipboardCheckIn.png)

Once entered, the patient is asked to confirm the time of their appointment and provider.

![](images/eClipboardCheckInVerify.png)

Note:

* The provider's preferred name is used if entered in the Edit Provider window.
* A warning displays if the clinic assigned to the device differs from the clinic the patient is scheduled in.

## Patient Authentication

If *Require patients to complete authentication before showing sheets* is enabled, patients are prompted to enter a code to verify their identity.

![](images/eclipboard2FA.png)

The patient selects their preferred way to receive the authentication code:

* Email code to: Email the code to the email address on file for the patient.
* Text code to: Text the code to the wireless phone number on file for the patient.

Once the code is received, the patient is prompted to enter it. Enter the code, then click **Submit** to continue.

![](images/eclipboardCode.png)

## Check-in Checklist

Once at the Check-in Checklist, the patient can begin completing items. As items are completed, a green checkmark displays.

![](images/eClipboardFormsChecklist.png)

The patient clicks on an item to complete it, then is prompted to click Next to move on to the next item. Checklist items can include:

* Patient forms (*Allow patients to fill forms in mobile app*, *Add specified forms upon patient arrival*)
  + Staff can also send or remove forms from the list from the [Kiosk Manager](kiosk.html). This can happen at any time in the eClipboard process as forms are uploaded to the device in real time.
  + If manually checking in a patient, enable *Show kiosk manager when staff changes patient status to arrive*. This prompts the Kiosk Manager to show and send the forms to a device.
  + Forms use the mobile layout of custom sheets. Some fields may pre-fill with patient information. These fields can be edited or updated as needed. Once filled, patients can sign digitally using the touch screen of the device.
* Patient picture (*Allow patients to take self-portrait in mobile app*)
  + Even when enabled, patients may skip this step and submit forms anyway.
* Picture of their Photo ID (*Allow Image Captures*)
  + Even when enabled, patients may skip this step and submit forms anyway.
* Picture of their Insurance Card (*Allow Image Captures*)
  + Even when enabled, patients may skip this step and submit forms anyway.

## Mobile Forms

If the patient has forms to fill out, they appear using the [Mobile Sheet Layout](sheetsetupmobile.html).

![](images/eClipboardMobileForm.png)

## Return Screen

Once all items are submitted, a message displays requesting the patient return the device. The message can be customized in eClipboard setup, *Message to show patients after successful check-in*.

![](images/eclipboardReturn.png)

Click **Return** to return to the Check-In screen, or wait 20 seconds to refresh automatically.

## Signup Portal Login

To associate eClipboard with your practice, enter the Signup Portal Credentials. These credentials are only needed the first time you login to eClipboard, or if you have manually logged out of eClipboard.

![](images/eClipboardLogin.png)

If using the same device between clinics, completely log out, then log in using the credentials for the needed clinic.

## Menu

Click the menu icon in the upper left to open the menu.

![](images/eclipoardMenu.png)

* **Check-in**: Opens the patient Check-in screen.
* **Treatment Plans**: Opens the camera to scan a Treatment Plan QR code. See [eClipboard: Treatment Plan](eclipboardtreatmentplan.html).
* **Payment Plans**: Opens the camera to scan a Payment Plan QR code. See [eClipboard: Payment Plans](eclipboardpaymentplans.html).
* **Patient Payments**: Opens the camera to scan a Patient Payment QR code. See [eClipboard: Payment](eclipboardpayment.html).
* **About**: Opens the About section. See below for details.
* **Logout**: Close eClipboard. Open Dental username and password is required. This prevents patients from accessing other areas of the device.

## About

Use the eClipboard Menu to view About information. An Open Dental username and password is required.

![](images/eClipboardAbout.png)

**Device Name**: The default name can be customized as needed to differentiate devices.