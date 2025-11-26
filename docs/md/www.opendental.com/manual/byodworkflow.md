Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

BYOD: Workflow

Bring Your Own Device (BYOD) allows patients to check-in and fill out forms via the [eClipboard](eclipboardsetup.html) app on their own mobile device.

Note: The BYOD feature will be removed from Open Dental starting with Version 25.1. Open Dental is currently working on a replacement for BYOD. In the interim, offices can use the [Web Forms](https://www.opendental.com/manual/webforms.xml) feature to allow patients to fill out forms prior to their appointment.

![](images/byodWorkflow.png)

To use BYOD, an office must be signed up for eClipboard and at least one device in the office must be signed into eClipboard using the [Mobile Settings](mobilesettings.html). There are two ways to send BYOD to a patient.

Note: Patients must have eClipboard installed on their device to utilize BYOD. See [BYOD: What Patient Sees](byodsees.html) for details.

## Option 1: Send BYOD Link automatically

1. The office must be signed up for:
   * eClipboard
   * eConfirmations
2. In eClipboard Setup, enable the following settings:
   * *Allow eClipboard BYOD via text messages*.
   * *Append eClipboard BYOD to Automated Arrival text messages*.
   * Customize the appended message as desired.
3. In Automated Messaging setup, enable [Arrivals](arrivalssetup.html).

Using the Arrival rules, patients are sent an Arrival text message that includes a link to install eClipboard.

## Option 2: Send BYOD Link Manually

1. The office must be signed up for:
   * eClipboard
   * Integrated Text Messaging
2. In eClipboard Setup, enable *Allow eClipboard BYOD via text messages*.
   * Optionally, enable *Show kiosk manager when staff changes patient status to arrived*.
3. Mark the patient's appointment as *Arrived*.
4. Send a BYOD message.
   * If *Show kiosk manager when staff changes patient status to arrived* is enabled, the [Kiosk Manager](kiosk.html) opens. Click **Send eClipboard BYOD Text**.
   * If *Show kiosk manager when staff changes patient status to arrived* is not enabled, right-click the appointment and select ****Send eClipboard BYOD Text****.
5. A text message window appears. Verify the message and send.

The patient receives a message that includes a link to install eClipboard.