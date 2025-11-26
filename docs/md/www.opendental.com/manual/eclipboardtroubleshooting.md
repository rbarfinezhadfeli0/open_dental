Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

eClipboard Troubleshooting

Below are common errors and solutions for [eClipboard](eclipboardsetup.html).

**Other Resources:**

* [eServices Troubleshooting](eservicestroubleshooting.html)
* [eConnector](econnector.html)

## General Troubleshooting

Follow these steps, in order, for general eClipboard troubleshooting. These steps resolve various issues.

1. Remove the device(s) from Open Dental.
2. Uninstall the eClipboard app from the device.
3. Restart the device.
4. Re-install eClipboard app on device.
5. Add/enable the device in Open Dental.

## eClipboard Errors

**Validation Failed**

Each tablet needs to be enabled in Open Dental before it can be used for eClipboard. In [Device Manager](devicemanager.html), check the *eClipboard* box next to the device.

**No appointment for patient found. Please hand this device to staff so that we can assist you.**

Typically this error is caused by having no birthdate entered for the patient in Open Dental. Enter the patient's birthdate, then try again.

**"Unknown error occured" after checking in patient. Application might crash or close.**

* Solution 1: Uninstall eClipboard from the device and remove the device from eClipboard Setup. Then, reinstall eClipboard to the device.
* Solution 2: If using clinics, ensure eClipboard is logged into the correct clinic.
* Solution 3: On the server, navigate to the eConnector service. Update the username and password to match the server's administrator credentials, rather than running the service as a Local System account.

**"Cannot find appointment" when entering correct date/patient name in eClipboard**

Verify the date and time is correct to their time zone on the server, and the mobile device (iPad/Tablet). If the time is different in either case, eClipboard may not be able to recognize that the appointment is scheduled for today.

**New Check-in Event
 Warning: A new check-in event has been sent to this device. Continuing will end the current session and result in lost progress. Do you want to allow?**

This warning displays on the eClipboard device when a staff member manually loads a patient to a device when the device is in use. This warning is just a confirmation that loading a patient is intentional.

## Additional Troubleshooting

**A device listed as compatible with eClipboard will not install the eClipboard app from App Store.**

Update tablet's operating system (OS). Some compatible devices might be running an older OS not compatible with eClipboard.

**eClipboard app works intermittently, certain forms not being received in Open Dental.**

Confirm internet connection to tablet. Some offices have reported issues using eClipboard in radiograph labs. The same radiation shielding that blocks X-rays will interfere with Wifi connections.

**When trying to send forms to eClipboard for iPad using Kiosk Manager, the device never receives the forms and stays in the *Waiting for Patient Information* loading screen.**

Ensure the device is signed in with a valid Apple ID. Check Settings or the App Store on the iPad to sign in with the Apple ID. Attempt to send the forms to the tablet again.