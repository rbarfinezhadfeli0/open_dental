Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

eClipboard Setup

eClipboard users can determine which features to utilize for their practice.

In [eServices Setup](eservicessetup.html), click **eClipboard**.

![](images/eClipboardSetup.png)

![](images/YouTube_PlayButton_15px.png) See our webinar: [eClipboard App](https://youtu.be/1vVclf1xgnU).

## Set Up eClipboard in Open Dental

1. Sign up for eClipboard in the [eServices Signup](eservicessignup.html).
2. Set up [Mobile Settings](mobilesettings.html) to use when logging into the app. This only needs to be done once and is used for all Open Dental apps.
3. Determine eClipboard rules and behavior (see below).

## Install eClipboard on a Tablet Device

1. Install eClipboard to each desired device. eClipboard is available for iOS and Android.
   * [App Store](https://apps.apple.com/us/app/eclipboard/id1455419778)
   * [Google Play](https://play.google.com/store/apps/details?id=com.opendental.eClipboard)
2. In the app, enter the Mobile Settings to connect the app with the database.
3. Enable the device in the [Device Manager](devicemanager.html).
4. (Optional) Lock eClipboard to prevent patients from accessing other areas of the device.
   * On Android, enable Pin Windows.
   * On iOS, enable Guided Access.

## Clinic Setup

If using clinics, determine if all clinics use the same features, or if features are unique to each clinic.

![](images/eclipboardClinic.png)

* **Use Defaults for this Clinic**: Check to use default settings for the selected clinic. Uncheck to change settings for the selected clinic only.
* **Clinic:** Select clinic from the dropdown to create clinic specific settings.

## Behavior Rules

Determine the behavior for the eClipboard app.

![](images/eclipboardBehavior.png)

* **Allow self check-in**: Allow patients to enter their name and birthdate, confirm their appointment time, and check-in. The patient's appointment status is updated to the *Time Arrived trigger*, set in [Preferences](preferences.html), and the patient is added to the [Waiting Room](waitingroom.html). Appointments must be scheduled for today to utilize eClipboard.
* **Allow patients to fill out forms in mobile app**: Allow eClipboard to function as a [Kiosk](kioskpatient.html) where patients can fill out forms.
* **Allow payment when patient is checking in**: Allow patients to view statements and make a payment. Only available for [XCharge (OpenEdge)](xcharge.html), [Edge Express](edgeexpress.html), or [PayConnect Window](payconnectpaymentwindow.html) users. See [eClipboard: Payment](eclipboardpayment.html) for details.
* **Add specified forms upon patient arrival**: When checked, the forms defined below are added automatically upon arrival.
* **Show kiosk manager when staff changes patient status to arrived**: When checked, the [Kiosk Manager](kiosk.html) opens in Open Dental when a user sets the patient's confirmation status as *Arrived*. The user can then send specific forms to eClipboard for the patient to fill out.
* **Require patients to complete authentication before showing sheets**: Require patients to verify their identity before filling forms. Patients can choose to have a 6-digit code sent to their phone number or email address, then they enter the code into eClipboard.
* **Display check-in questions individually**: Require patients to enter their First Name, Last Name, and Birthdate one prompt at a time, rather than all at once. Must log out of eClipboard and log back in on each device for setting to take affect.

## Send eClipboard BYOD to patient phones

BYOD (Bring Your Own Device) allows patients to fill out forms via eClipboard from their mobile device. The [Integrated Texting Feature](../site/textintegrated.html) eService is required.

* For Office Flow, see [BYOD: Workflow](byodworkflow.html).
* For Patient Flow, see [BYOD: What Patient Sees](byodsees.html).

![](images/eClipboardBYOD.png)

* **Confirmation Statuses**: Opens [Automated Messaging Advanced Settings](automatedmessagingadvanced.html).
* **Allow eClipboard BYOD via text messages**: Allow a link to be sent to patients to check in and fill out forms via eClipboard. Patients install eClipboard to their device, then use the link provided to log in.
* **Append eClipboard BYOD to Automated Arrival text messages**: When checked, and the office is using [Arrivals](arrivalssetup.html), the [eClipboardBYOD] tag is added to the end of the initial arrival text message. The tag adds a link for patients to follow to install eClipboard. Arrivals are only available for offices using [eConfirmations](econfirmationsetup.html).

## Successful Check-in Message

![](images/eClipboardMessageToShow.png)

* **Message to show patients after successful check-in**: Create a personalized message to display on eClipboard after the patient has completed their check-in checklist.

## Images

View the list of images a patient may be requested to take upon check in.

![](images/eClipboardImages.png)

Click **Add** or double-click an existing image definition to edit. See [eClipboard Images](eclipboardimages.html) for details.

## Forms

When *Add specified forms upon patient arrival* is checked, specified forms are added to the eClipboard device automatically when the patient checks in.

![](images/eclipboardAvailableForms.png)

* **Add Sheet**: Click to select from the sheets list to add a new form.
* **Up / Down**: Highlight a sheet, then use the buttons to move it up or down the list.

Double-click a sheet from the list to edit the behavior, frequency, and age limitations.

![](images/eClipboardSheetRules.png)

* **Sheet**: Displays the sheet name.
* **Behavior**: Select the sheet behavior. Options include:
  + Pre-fill: The sheet displays every set number of days.
    - If a revision has been triggered, and the set number of days has passed, the patient is given a new blank sheet to fill.
    - If no revision has occurred, and the set number of days has passed, the patient is given a pre-filled copy of the sheet to review. See Pre-Fill Logic on [Patient Forms](patientform.html) for more details.
    - See the Sheet Revisions section on [Edit Sheet Def](sheetsetup.html) for more details.
  + New: Patient fills out a new sheet every set number of days.
* **Frequency:**  Determine the frequency the sheet must be filled.
  + Once: Only needs filled once per patient. Once filled, patient is not automatically prompted to fill again, unless the sheet has been revised.
  + Each Visit: Prompt the patient to fill the sheet at each visit.
  + Time Span: Specify a custom frequency in years, months, or days.
* **Minimum Age**: Enter a minimum age for the patient to fill out the form (e.g., Set 18 if minors do not need to fill the form.)
* **Maximum Age**: Enter the maximum age (e.g., Set 18 if the form is only for pediatric patients).
* **Sheets to Ignore**: Only displays when *Once* is selected. Click [...] to select from sheets with the same sheet type. When a patient fills out the selected sheet, they are not prompted to fill out any *Sheets to Ignore*, even if these are in the Forms list.

## More Options

At the bottom of the window, click **Branding Profile** to set up branding for eClipboard devices. See [eClipboard Branding Profile](eclipboardbranding.html) for details.

Other eClipboard options include [eClipboard: Treatment Plan](eclipboardtreatmentplan.html) and [eClipboard: Payment Plans](eclipboardpaymentplans.html).

Also see [eClipboard Troubleshooting](eclipboardtroubleshooting.html) and [eClipboard: What Patient Sees](eclipboardsees.html).