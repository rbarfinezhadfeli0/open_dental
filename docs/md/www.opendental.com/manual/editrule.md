Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Edit Rule

Rules determine the timing and messages that go out on automated messages.

In the [Automated Messaging](automatedmessaging.html) window, double-click an automated messaging rule.

![](images/editRule.png)

The title of this window varies depending on which Automated Messaging feature is being edited. Double-click an existing rule to edit, or click one of the following buttons to add a new rule for the corresponding feature.

* **Add eReminder**
* **Add eConfirmation**
* **Add Auto Thank-You**
* **Add New Patient Thank-You**
* **Add Patient Portal Invite** (Before Appointment)
* **Add Arrival**
* **Add Patient Portal Invite** (After Appointment)
* **Add General Message**

## Enable the Rule

![](images/editRuleTop.png)

**Enabled**: Determines if the selected rule is currently active. Rules can be enabled and disabled as needed, without having to recreate them.

* Checked: The selected rule is enabled and active.
* Unchecked: The selected rule is disabled.

## Send Time

Set time preferences for sending the message.

![](images/editRuleSendTime.png)

* **Days and Hours**: Set when the message should be sent in days and/or hours. A day is defined as the date before the appointment date (includes weekends). When days and hours are entered, both are considered (e.g., send a message 1 day and 1 hour in advance of the appointment). The automated eServices schedule also affects send time. See [eServices Misc](eservicesmisctab.html).
  + eReminders: Set how far in advance the message is sent. Entering 0 for Days allows same day reminders to be sent.
  + eConfirmations: Set how far in advance the message is sent. Confirmation messages are not sent for appointments created same day.
  + Automated Thank-Yous: Set how long after the appointment is created, in hours and/or days, the Thank-You should be sent. Setting the send time to 0 sends the message shortly after an appointment is created, but it can cause multiple Thank-You's to send out if the appointment is deleted, recreated or moved to a different time slot after scheduling.
  + Arrivals: Set how far in advance of the appointment the Arrival should be sent. The default is 3 hours.
  + Patient Portal Invite (before appointment): Set how far in advance of the appointment to send the invite.
  + Patient Portal Invite (after appointment): Set how long after the appointment to send the invite.
  + General Message: Set how long after the appointment the message is sent. Setting the send time to 0 sends the message shortly after an appointment is set complete.
* **Do not send within \_\_\_\_ of appointment**: Control whether or not messages are sent for short notice appointments (e.g., same day appointments).
  + eReminders, eConfirmations: When values are entered, messages are not sent when the upcoming appointment time falls within the time period. If both Days and Hours are blank, reminders may be sent up to the appointment time. Confirmation messages are not sent for appointments created same day.
  + Automated Thank-Yous: When values are entered, Thank-Yous are not sent when the upcoming appointment time falls within the time period.
  + Arrivals: When values are entered, Arrivals are not sent when the upcoming appointment time falls within the time period. If both Days and Hours are blank, Arrivals may be sent up to the appointment time.
  + Patient Portal Invite (before appointment): When values are entered, invites are not sent if the upcoming appointment falls within the time period.
  + This setting is not available for General Messages or Patient Portal Invites (after appointment).

Note: If there are multiple rules for the same message type, the system sends the rule that is closest to the appointment date. (e.g., if there is both a 3-day and 5-day Send Time, the 3-day is used.)

The following setting only displays when editing a rule for Patient Portal.

![](images/editRulePatPortalSendTime.png)

* **Before appointment**: Send the invite before the appointment. Send time begins before the start of the appointment (e.g., 1 hour before the appointment start time).
* **After appointment**: Send the invite after the appointment. Send time begins at the end of the appointment (e.g., 1 hour after the appointment end time).

It is not recommended to change this setting as the message template does not update with the change. Instead, return to the eServices Automated Messaging window and select the appropriate *Add Patient Portal Invite* button.

## Send Order

Select how the messages are sent to patients.

![](images/editRuleSendOrder.png)

* **Contact Methods**: Set a specific delivery method order. The method listed first is attempted first. If the patient does not have contact information for this method (i.e., an email address) the attempt is unsuccessful and the the second method is attempted. If that is unsuccessful, the third method is attempted. Highlight a method, then click the up/down arrows to reorder it. Options include:
  + Preferred Confirm Method: Use the patient's preferred confirmation method to send the message. If Work Phone is selected the program moves to the next send method (Text or Email). See [Edit Patient Information](patientedit.html).
  + Text: Send text messages.
    - For Arrivals, Text is the only available option.
  + Email: Send email messages. When *Send Secure Email* is checked, displays as *Secure Email* instead.
    - For Patient Portal Invites, Email is the only available option.
* **Send All**: Check to send via all available options. This option is hidden for Arrivals or Patient Portal Invites.

## Patient Portal Invites

This setting only displays for Patient Portal Invites.

![](images/editRulePatPortalInvite.png)

Determine which circumstances to send an invite to a patient.

* **Invite until patient visits Portal**: Send invite if the patient has never visited Patient Portal. Once the patient has visited the portal, do not send additional invites.
* **Invite once per appointment**: Send invite regardless if the patient has ever visited the Patient Portal. An invite is sent at each appointment.
* **Invite once per appointment if patient has not visited Portal in \_\_\_ days**: Send invite if the patient has not visited Patient Portal within the last number of days. Enter specific number of days (e.g., 30).

A practice email is required to send Patient Portal Invites. Patient must have name, address, date of birth, email address, and a phone number entered for Patient Portal Invite to send.

## eConfirmations

This setting only displays for eConfirmations.

![](images/editruleConf.png)

**Send text message auto replies**: Send an automated text message after the patient has confirmed their appointment. Customize the reply template in Advanced Settings (see below).

## Defaults

The default tab displays messages in the default language. When other languages are added, additional tabs display.

![](images/editRuleDefaults.png)

* **Text Message**: The message sent on text messages.
* **Email Subject and Body**: The first text box is for the subject line. The second text box is for the body of the emails.
* **Send Secure Email**: Only allowed when Secure Email is enabled in [Secure Email Setup](secureemailsetup.html). Check to send secure email messages instead of unsecure email messages.
* **Edit**: Click to insert [HTML Email](emailhtml.html) formatting to the email body.

**Template Replacement Tags**: Insert replacement tags to automatically insert certain information. Options vary depending on the Rule Type. Available options list at the bottom of the Edit Rule window.

| Tag | Available for | Description |
| --- | --- | --- |
| AddToCalendar | eReminders, Automated Thank-You Messages, eConfirmations | Allows patient to add the appointment to the calendar on their mobile device (iOS or Android). When added to a device, the office name and address in included. This tag can only be used when the office is also signed up for eConfirmations.  If this tag is added to eReminders or Automated Thank-You Messages when eConfirmations are not enabled, the user receives an error message. |
| ApptDate | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, General Messages | The appointment date. |
| ApptTime | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | The appointment start time. |
| ApptTimeAskedArrive | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | The time the patient is asked to arrive ([Time Ask to Arrive](timeasktoarrive.html)). If no *Time Ask To Arrive* is entered, uses the appointment time. |
| Arrived | Arrivals | The Arrival code the patient replies with. |
| ClinicName | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | The name of the [Clinic](cliniceditwindow.html) assigned to the appointment. If the Clinics [Feature](showfeatures.html) is not enabled, uses the Practice Name in [Practice Setup](practice.html) instead. |
| ClinicPhone | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | The phone number of the clinic assigned to the appointment. If the Clinics Feature is not enabled, uses the phone number in Practice Setup instead. |
| ConfirmCode | eConfirmations | The included short code C in an integrated text message for the appointment that is being confirmed. Example: Reply [ConfirmCode] to confirm = Reply C to confirm. When a patient texts back the C, the appointment confirmation status changes to the Accepted status. If a patient has an additional appointment and receives a confirmation before their original appointment is complete, the corresponding [ConfirmCode] would then become "C2," where the number correlates to the number of appointment. The patient must only reply with the confirm code. Any additional text causes Open Dental not to recognize the response. |
| ConfirmURL | eConfirmations | The URL to click to confirm an appointment. |
| EmailDisclaimer | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | Displays an automatic opt-out statement for sent emails. When a patient wishes to unsubscribe, they reply "Unsubscribe" in the reply email. Once unsubscribed, the Open Dental user must manually remove their email address from future correspondence. See [Email Setup](emailsetup.html) for details. |
| NameF | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | Patient's first name. |
| NamePreferredOrFirst | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | Patient's preferred name. If no preferred name, uses first name. |
| NewPatWebFormURL | New Patient Thank-You messages | The URL as determined by [Automated Messaging Preferences](automatedmessagingpreferences.html). This tag can only be used when the office is also signed up for eConfirmations. |
| OfficeName | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | The practice name in Practice Setup. |
| OfficePhone | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | If using clinics, the clinic phone number. If not using clinics, the practice phone number. |
| PracticeName | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | The practice name in Practice Setup. |
| PracticePhone | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | The practice phone number. |
| Password | Patient Portal Invites | Patient Portal password. Only available for Patient Portal Invites. |
| PatientPortalURL | Patient Portal Invites | The URL to Patient Portal. Only available for Patient Portal Invites. |
| Premed | eReminders, | Include a premedicate reminder for patient marked as Premedicate. Set custom message in [Automated Messaging Advanced Settings](automatedmessagingadvanced.html). |
| ProvAbbr | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | The abbreviation for the provider the appointment is scheduled with. |
| ProvName | eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages | The provider the appointment is scheduled with. If the appointment is marked *Is Hygiene*, this is the hygienist the appointment is scheduled with. |
| Username | Patient Portal Invites | The patient's username for Patient Portal. Only available for Patient Portal Invites. |

Note: The [EmailDisclaimer] tag is a default tag on emails. It can only be removed if *Include Opt-Out Statement*  is disabled in [Email Setup](emailsetup.html). This statement includes [Practice](practice.html) or [Clinic](clinicsetup.html) address and instructions about how to unsubscribe from [eService](eservices.html) emails. The statement is only included in emails sent for [Web Sched ASAP](webschedasap.html), [Web Sched Verify](webschedverify.html), [Web Sched Recall](webschedrecallsetup.html), [eConfirmations](econfirmationsetup.html), [eReminders](ereminderssetup.html), [Patient Portal Invites](../site/patientportal.html), the [Confirmation List](confirmationlist.html), and the [Recall List](recalllist.html).

## Buttons

![](images/editRuleButtons.png)

* **Delete**: Delete this rule entirely.
* **Advanced**: Edit the text for aggregated messages. See Advanced Settings below.
* **Add Language**: Add additional languages to send messages in. See Add Language below.
* **OK**: Click to save settings.
* **Cancel**: Click to leave the window without saving.

## Advanced Settings

When one or more appointments on the same day share a common patient email address and/or wireless phone number (e.g., a family), the associated messages are grouped together into an aggregated email or text (i.e., one long text message or email).

If a single patient has multiple appointments for one day, the texts or emails they receive list their first appointment for the day only. When confirming an [eConfirmation](econfirmationsetup.html), all appointments for the day are marked confirmed.

In the Edit Rule window, click **Advanced**.

![](images/EditRuleAdvancedEmail.png)

Note: If using language translations, language tabs display at the top. Ensure the correct language is selected before editing.

**Template Replacement Tags**: A list of valid template replacement tags that can be used to insert data from the database into the message.

**Tabs**: Tabs vary depending on the Rule Type selected.

* **Email Templates**: Edit the email text sent for aggregated messages.
  ![](images/editRuleAggEmailSubject.png)+ Aggregated Email Subject: The email heading.
  + Aggregated Email Template: The email body.
  + Aggregated Email Template Per Appointment: Determines how the [Appts] tag is filled. Each appointment lists using the sentence entered here.

* **SMS Templates**: Edit the message sent on texts.
  ![](images/editRuleAggSMS.png)
  + Aggregated SMS Template: The body of the text message sent.
  + Aggregated SMS Template Per Appointment: Determines how the [Appts] tag is filled. Each appointment lists using the sentence entered here.

* **Arrival Templates**: Only available for Arrivals.
  ![](images/editRuleAggArrival.png)
  + Arrival SMS Response Template: The message sent when the patient arrives to the office.
  + Come in SMS Message Template: The message sent when the office send the *Come In* text.

* **Auto Reply Templates**: Only available for eConfirmations. Sends an automated reply after patient confirms their appointment.
  ![](images/editRuleAggAutoReply.png)
  + Single Reply Template: The reply when a single appointment is confirmed.
  + Aggregate Auto Reply Template: The reply when multiple appointments are confirmed.

## Add Language

Create and send messages in the patient's preferred language.

In the Edit Rule window, click **Add Language**. Select the language from the dropdown. Edit or add languages from *Languages used by patients* in [Preferences](preferences.html).

![](images/editRuleLanguage.png)

When a language is added, a language tab displays.

Select the language tab and manually type in the translated message. When a patient has this language selected as their preferred language in the [Edit Patient Information](patientedit.html) window, the translated message is used.

The language sends based off the following criteria:

* If only one patient in a family has an appointment that day, that patient's preferred language is used.
* If multiple family members have an appointment that day, including the guarantor, the guarantor's preferred language is used.
* If multiple family members have an appointment that day, but not the guarantor, and the patient's preferred language is the same, the preferred language is used.
* If multiple family members have an appointment that day, but not the guarantor, and the patients have different preferred languages, whichever patient is listed first, is the preferred language used.

To remove a language, click **Remove Language**.

## Troubleshooting

**What if I update the Send Time on an existing rule?**

Existing appointments that have already been sent a message may receive another message once the eServices window is saved.