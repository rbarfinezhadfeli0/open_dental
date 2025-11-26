Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

DoseSpot Setup

DoseSpot is a method of sending electronic prescriptions in Open Dental. It is an internet based, secure e-Prescribing system. DoseSpot integrates with Open Dental using a program link and offers two-way medication syncing.

There are five parts to setting up DoseSpot. See each section below for details on each part.

Note: Practices using NewCrop eRx can choose to switch to DoseSpot or continue using NewCrop eRx. Once DoseSpot is enabled, there is an option to keep NewCrop eRx enabled to allow users to continue sending prescriptions electronically while the DoseSpot Identity Proofing process is underway. Once the transition to DoseSpot is completed for all needed providers, call Open Dental Support to cancel NewCrop eRx.

Signing up for eRx initiates monthly fees that cannot be refunded.

## Part 1: Enable DoseSpot Program Link

1. In the Open Dental [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html).
2. Double-click [Electronic Rx](bridgeerx.html).
   ![](images/doseSpotEnable.png)
3. Select DoseSpot as the eRx Solution. If the practice is in the process of switching to DoseSpot from NewCrop eRX, select DoseSpot with NewCrop eRX.

   Note: To continue the use of NewCrop eRX, check *Allow NewCrop eRX in the [Provider Edit Window](providerseditwindow.html) for each needed provider until DoseSpot identity proofing is complete.*
4. Check the **Enabled** box.
5. Click OK.

## Part 2: Fill out Clinic/Practice and Provider Registration Forms

1. Designate a Practice Administrator for EPCS registrations (cannot be a doctor).
2. Complete the [DoseSpot Registration Form](https://opendentalsoft.com:1943/ODDoseSpotRegistration/DoseSpotRegistration.aspx).

   Note:
   * For each additional provider, use the same form and uncheck *Clinic* at the top. Each provider submitting electronic prescriptions needs to submit a Provider form.
   * To register additional proxy (non-provider) users, please send an email with their first and last names to erx@opendental.com.
3. After submitting the form, an email is sent to Practice Administrator's email address with instructions on the next step.
4. When ready for Open Dental to generate the Clinic ID and/or Provider ID, forward the email received to erx@opendental.com.
5. 5.The practice administrator then receives an email containing the Clinic Key, Clinic ID, DoseSpot User ID, and Practice Administrator registration. This can take 5-10 business days to receive.

Note: Please note that once the IDs are generated charges will be initiated and because they involve multiple third parties, they cannot be refunded by Open Dental regardless of whether or not the provider completes the registration process. Please notify Open Dental immediately if you do not wish to proceed at any point in the process, in order to minimize the charges.

## Part 3: Sign up for DoseSpot

The following instructions are for the first clinic registered. For subsequent clinics, see the Additional Clinics section below.

Enter Clinic Key and Clinic ID:

1. In [eRx Setup](bridgeerx.html), double-click Headquarters. The DoseSpot Property Edit window will open.
   ![](images/dosespotPropEdit.png)
2. Enter the provided **Clinic Key** and **Clinic ID**.

   Note:
   * If clinic information is missing, click **Setup** to open the Edit Clinic window and enter required information.
   * To delete clinic information, highlight the Clinic from the eRx Setup window and click **Delete**. A warning window will appear confirming the deletion of the selected row. Click OK to delete or Cancel to discard changes.
3. Click OK to save.

## Part 4: Enable Users

Open Dental will automatically insert the DoseSpot User ID into the **DoseSpot User ID** field of the User Edit window only for providers. Providers will be notified via an eRx Alert when registration is complete.

The practice administrator must manually enter a DoseSpot User ID for non-doctors and providers with multiple ID numbers. This process can also be used for providers in the event a provider DoseSpot User ID was not automatically entered in the DoseSpot User ID field.

Enter DoseSpot User ID to access DoseSpot: This is required for each provider and non-doctor who will be queuing e-Prescriptions.

1. Once the DoseSpot User ID has been received, in Open Dental, click Setup, Security Settings ([Global Security Settings](securitysettings.html)).
2. Double-click the user to open the User Edit window.
   ![](images/dosespotSecurityUserEdit.png)
3. In the DoseSpot User ID field, enter the **DoseSpot User ID**.
    For providers with multiple DoseSpot User IDs (e.g., providers with multiple NPIs), click **[...]** to enter a number per clinic.
4. Non-doctors must have their employee associated with the user, and doctors must have their provider associated.
5. Click OK to save.

The provider and non-doctor(s) may now access DoseSpot.

## Part 5: Complete Identity Proofing

**Important: Identity Proofing is typically completed for each provider upon first launch of DoseSpot. In the event Identity Proofing was not completed, follow the steps below.**

This process only applies to prescribing providers. Each prescribing provider must complete Identity Proofing before sending e-Prescriptions.

1. Select any patient and click **eRx**.
2. Click and agree to the first two user agreements.
3. Click the last link for Identity proofing.
4. Fill out the demographic information, enter personal phone number, and check the One Time Passcode (OTP) agreement box.
5. Enter driver's license information. Enter personal credit card number. Credit card number is required for identity proofing.
6. Click **Next**.
7. A text message with a one time passcode is sent to the provider's phone. Enter the code into the box and click Next.
8. Answer the security questions as prompted.
9. Once security questions are complete click **Next**.
10. Click **Set PIN**.
11. Create a 4-digit pin that will be used when sending all prescriptions. Provider can now send non-controlled substances electronically.

Note:

* Each prescribing provider will create a PIN. This PIN is required every time an e-Prescription is sent.
* Some prescribing provider will receive a letter in the mail (via home address) from Experian that contains their Session ID needed for EPCS registrations. The provider will be notified after IDP if a letter is being sent.

## Additional Clinics

To register additional clinics:

1. Go to Setup, Program Links.
2. Double-click **electronic Rx**.
3. Double-click the clinic.
4. Click **Register**.
5. Click **OK**.
6. Repeat for each clinic.
7. Select any patient and click **eRx** in the Chart Module.
8. Clinic will be ready for use in 2-5 business days.

## Register for EPCS

There are two parts to register for Electronic Prescribing for Controlled Substances (EPCS).

**Part 1: Practice Administrator Login**

The practice administrator is designated during the Sign Up for DoseSpot process above. This person will access the Administration Console in DoseSpot and enable EPCS for the registered provider(s).

1. In a web browser, navigate to <http://pss.dosespot.com/Admin>.
2. Enter login information. Login information is sent via email when the clinic is registered for DoseSpot.
3. Enter mobile phone number and click *Send Me DUO Activation Texts* to receive two text messages: one text to download the DUO Mobile app and another to sync the app to the Admin Console login.

   Note: DUO only supports Andriod 10+ and iOS 14+.
4. Download the DUO Mobile app and follow the on-app prompts.
5. Click the link received in the second text message to sync the DUO app with the Admin Console.
6. Enter the One-Time Passcode (OTP) in the Administration Console and click *Login*.
7. Click Edit on the provider/clinician to enable EPCS.
8. Under TFA Authentication, check the EPCS/TFA Activation box.
9. Click *Save*.

**Part 2: Activate One Time Passcode (OTP) Device**

EPCS registration is required in order to submit electronic prescriptions for controlled substances. The provider will also need to download the Duo Mobile App from the [Google Play Store](https://play.google.com/store/apps/details?id=com.duosecurity.duomobile) or [Apple App Store](https://itunes.apple.com/us/app/duo-mobile/id422663827?mt=8).

1. Log into Open Dental as the provider who activated EPCS/TFA.
2. In Open Dental, select a patient.
3. In the Chart Module, click **eRx** to open DoseSpot.
4. Click the notification alert ![](images/doseSpotNotification.png) in the upper left.
5. Click Activate TFA Authentication.
6. The TFA Authentication window will display.
7. Enter the Credential ID generated from the Duo Mobile app. Do not include spaces.
8. Enter the Session ID from the Experian letter.
9. Enter the displayed 6-digit code from Duo Mobile app into the TFA Code field on the computer.
10. Enter in the provider's PIN created during the IDP setup process.
11. Click Save.

The provider can now send both controlled and non-controlled substances electronically.

Note: EHR Incentive Program: e-Prescribing for the EHR Incentive Program is only possible with NewCrop eRx - Comprehensive.

## New Phone

If the provider has a new phone, do the following:

1. Download the Duo App from the app store.
2. Have the practice admin log into the DoseSpot Admin Console (<http://pss.dosespot.com/Admin>) and click **Edit** next to the provider's name.
3. In the EPCS tab, click **Re-Send DUO Mobile**.
4. Verify phone number.
5. Click **Resend**.
6. The provider will receive text message with a link. Click on the link to sync DoseSpot with new phone.

If the provider's phone number has changed, contact Open Dental Support to have it updated.