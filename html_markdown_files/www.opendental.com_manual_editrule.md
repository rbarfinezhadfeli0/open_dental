# File: ./www.opendental.com/manual/editrule.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Edit Rule</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('editrule','automatedmessaging','eservicessetup','mainmenu','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/editrule.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/editrule.html" >v24.2</option><option value="https://www.opendental.com/manual241/editrule.html" >v24.1</option><option value="https://www.opendental.com/manual233/editrule.html" >v23.3</option><option value="https://www.opendental.com/manual232/editrule.html" >v23.2</option><option value="https://www.opendental.com/manual231/editrule.html" >v23.1</option><option value="https://www.opendental.com/manual224/editrule.html" >v22.4</option><option value="https://www.opendental.com/manual223/editrule.html" >v22.3</option><option value="https://www.opendental.com/manual222/editrule.html" >v22.2</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Edit Rule</p></div>
<div class="GeneralPageContent">
<p>Rules determine the timing and messages that go out on automated messages. </p>
<p>In the <a href="automatedmessaging.html">Automated Messaging</a> window, double-click an automated messaging rule.</p>
<img src="images/editRule.png" width="745" height="723"/><p class="MarginBottomZero">The title of this window varies depending on which Automated Messaging feature is being edited. Double-click an existing rule to edit, or click one of the following buttons to add a new rule for the corresponding feature.  </p>
<ul class="MarginBottomGap">
<li><b>Add eReminder</b></li>
<li><b>Add eConfirmation</b></li>
<li><b>Add Auto Thank-You</b></li>
<li><b>Add New Patient Thank-You</b></li>
<li><b>Add Patient Portal Invite </b>(Before Appointment)</li>
<li><b>Add Arrival</b></li>
<li><b>Add Patient Portal Invite</b> (After Appointment)</li>
<li><b>Add General Message</b></li>
</ul>
<h2>Enable the Rule</h2>
<img src="images/editRuleTop.png" width="148" height="32"/><p class="MarginBottomZero"><b>Enabled</b>: Determines if the selected rule is currently active. Rules can be enabled and disabled as needed, without having to recreate them. </p>
<ul class="MarginBottomGap">
<li>Checked: The selected rule is enabled and active. </li>
<li>Unchecked: The selected rule is disabled.</li>
</ul>
<h2>Send Time</h2>
<p> Set time preferences for sending the message.</p>
<img src="images/editRuleSendTime.png" width="515" height="90"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Days and Hours</b>: Set when the message should be sent in days and/or hours. A day is defined as the date before the appointment date (includes weekends). When days and hours are entered, both are considered (e.g., send a message 1 day and 1 hour in advance of the appointment). The automated eServices schedule also affects send time. See <a href="eservicesmisctab.html">eServices Misc</a>. <ul>
<li>eReminders: Set how far in advance the message is sent. Entering 0 for Days allows same day reminders to be sent.</li>
<li>eConfirmations: Set how far in advance the message is sent. Confirmation messages are not sent for appointments created same day.</li>
<li>Automated Thank-Yous: Set how long after the appointment is created, in hours and/or days, the Thank-You should be sent. Setting the send time to 0 sends the message shortly after an appointment is created, but it can cause multiple Thank-You's to send out if the appointment is deleted, recreated or moved to a different time slot after scheduling.</li>
<li>Arrivals: Set how far in advance of the appointment the Arrival should be sent. The default is 3 hours.</li>
<li>Patient Portal Invite (before appointment): Set how far in advance of the appointment to send the invite. </li>
<li>Patient Portal Invite (after appointment): Set how long after the appointment to send the invite. </li>
<li>General Message: Set how long after the appointment the message is sent. Setting the send time to 0 sends the message shortly after an appointment is set complete.</li>
</ul>
</li>
<li><b>Do not send within ____ of appointment</b>: Control whether or not messages are sent for short notice appointments (e.g., same day appointments).  <ul>
<li>eReminders, eConfirmations: When values are entered, messages are not sent when the upcoming appointment time falls within the time period. If both Days and Hours are blank, reminders may be sent up to the appointment time. Confirmation messages are not sent for appointments created same day.</li>
<li>Automated Thank-Yous: When values are entered, Thank-Yous are not sent when the upcoming appointment time falls within the time period.</li>
<li>Arrivals: When values are entered, Arrivals are not sent when the upcoming appointment time falls within the time period. If both Days and Hours are blank, Arrivals may be sent up to the appointment time.</li>
<li>Patient Portal Invite (before appointment): When values are entered, invites are not sent if the upcoming appointment falls within the time period.</li>
<li>This setting is not available for General Messages or Patient Portal Invites (after appointment).</li>
</ul>
</li>
</ul>
<p><div class="Note">Note: If there are multiple rules for the same message type, the system sends the rule that is closest to the appointment date. (e.g., if there is both a 3-day and 5-day Send Time, the 3-day is used.)</div>
</p>
<p>The following setting only displays when editing a rule for Patient Portal.</p>
<img src="images/editRulePatPortalSendTime.png" width="144" height="69"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Before appointment</b>: Send the invite before the appointment. Send time begins before the start of the appointment (e.g., 1 hour before the appointment start time).</li>
<li><b>After appointment</b>: Send the invite after the appointment. Send time begins at the end of the appointment (e.g., 1 hour after the appointment end time).</li>
</ul>
<p>It is not recommended to change this setting as the message template does not update with the change. Instead, return to the eServices Automated Messaging window and select the appropriate <i>Add Patient Portal Invite</i> button.</p>
<h2>Send Order</h2>
<p>Select how the messages are sent to patients. </p>
<img src="images/editRuleSendOrder.png" width="437" height="160"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Contact Methods</b>: Set a specific delivery method order. The method listed first is attempted first. If the patient does not have contact information for this method (i.e., an email address) the attempt is unsuccessful and the the second method is attempted. If that is unsuccessful, the third method is attempted. Highlight a method, then click the up/down arrows to reorder it. Options include: <ul>
<li>Preferred Confirm Method: Use the patient's preferred confirmation method to send the message. If Work Phone is selected the program moves to the next send method (Text or Email). See <a href="patientedit.html">Edit Patient Information</a>.</li>
<li>Text: Send text messages.  <ul>
<li>For Arrivals, Text is the only available option.</li>
</ul>
</li>
<li>Email: Send email messages. When <i>Send Secure Email</i> is checked, displays as <i>Secure Email</i> instead. <ul>
<li>For Patient Portal Invites, Email is the only available option.</li>
</ul>
</li>
</ul>
</li>
<li><b>Send All</b>: Check to send via all available options. This option is hidden for Arrivals or Patient Portal Invites.</li>
</ul>
<h2>Patient Portal Invites</h2>
<p>This setting only displays for Patient Portal Invites.</p>
<img src="images/editRulePatPortalInvite.png" width="303" height="154"/><p class="MarginBottomZero">Determine which circumstances to send an invite to a patient. </p>
<ul class="MarginBottomGap">
<li><b>Invite until patient visits Portal</b>: Send invite if the patient has never visited Patient Portal. Once the patient has visited the portal, do not send additional invites.</li>
<li><b>Invite once per appointment</b>: Send invite regardless if the patient has ever visited the Patient Portal. An invite is sent at each appointment.</li>
<li><b>Invite once per appointment if patient has not visited Portal in ___ days</b>: Send invite if the patient has not visited Patient Portal within the last number of days. Enter specific number of days (e.g., 30). </li>
</ul>
<p>A practice email is required to send Patient Portal Invites. Patient must have name, address, date of birth, email address, and a phone number entered for Patient Portal Invite to send.</p>
<h2>eConfirmations</h2>
<p>This setting only displays for eConfirmations.</p>
<img src="images/editruleConf.png" width="416" height="31"/><p><b>Send text message auto replies</b>: Send an automated text message after the patient has confirmed their appointment. Customize the reply template in Advanced Settings (see below).</p>
<h2>Defaults</h2>
<p>The default tab displays messages in the default language. When other languages are added, additional tabs display. </p>
<img src="images/editRuleDefaults.png" width="733" height="400"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Text Message</b>: The message sent on text messages.</li>
<li><b>Email Subject and Body</b>: The first text box is for the subject line. The second text box is for the body of the emails.</li>
<li><b>Send Secure Email</b>: Only allowed when Secure Email is enabled in <a href="secureemailsetup.html">Secure Email Setup</a>. Check to send secure email messages instead of unsecure email messages. </li>
<li><b>Edit</b>: Click to insert <a href="emailhtml.html">HTML Email</a> formatting to the email body.</li>
</ul>
<p><b>Template Replacement Tags</b>: Insert replacement tags to automatically insert certain information. Options vary depending on the Rule Type. Available options list at the bottom of the Edit Rule window. <table class="simpletable">
<tr>
<th style="width:10%">Tag</th>
<th style="width:40%">Available for</th>
<th style="width:49%">Description</th>
</tr>
<tr>
<td>AddToCalendar</td>
<td>eReminders, Automated Thank-You Messages, eConfirmations</td>
<td>Allows patient to add the appointment to the calendar on their mobile device (iOS or Android). When added to a device, the office name and address in included. This tag can only be used when the office is also signed up for eConfirmations.<br/> If this tag is added to eReminders or Automated Thank-You Messages when eConfirmations are not enabled, the user receives an error message.</td>
</tr>
<tr>
<td>ApptDate</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, General Messages</td>
<td>The appointment date.</td>
</tr>
<tr>
<td>ApptTime</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td>The appointment start time.</td>
</tr>
<tr>
<td>ApptTimeAskedArrive</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td>The time the patient is asked to arrive (<a href="timeasktoarrive.html">Time Ask to Arrive</a>). If no <i>Time Ask To Arrive </i>is entered, uses the appointment time.</td>
</tr>
<tr>
<td>Arrived</td>
<td>Arrivals</td>
<td>The Arrival code the patient replies with. </td>
</tr>
<tr>
<td>ClinicName</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td>The name of the <a href="cliniceditwindow.html">Clinic</a> assigned to the appointment. If the Clinics <a href="showfeatures.html">Feature</a> is not enabled, uses the Practice Name in <a href="practice.html">Practice Setup</a> instead.</td>
</tr>
<tr>
<td>ClinicPhone</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td>The phone number of the clinic assigned to the appointment. If the Clinics Feature is not enabled, uses the phone number in Practice Setup instead.</td>
</tr>
<tr>
<td>ConfirmCode</td>
<td>eConfirmations</td>
<td>The included short code C in an integrated text message for the appointment that is being confirmed. Example: Reply [ConfirmCode] to confirm = Reply C to confirm. When a patient texts back the C, the appointment confirmation status changes to the Accepted status. If a patient has an additional appointment and receives a confirmation before their original appointment is complete, the corresponding [ConfirmCode] would then become "C2," where the number correlates to the number of appointment. The patient must only reply with the confirm code. Any additional text causes Open Dental not to recognize the response.</td>
</tr>
<tr>
<td>ConfirmURL</td>
<td>eConfirmations</td>
<td>The URL to click to confirm an appointment. </td>
</tr>
<tr>
<td>EmailDisclaimer</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td>Displays an automatic opt-out statement for sent emails. When a patient wishes to unsubscribe, they reply "Unsubscribe" in the reply email. Once unsubscribed, the Open Dental user must manually remove their email address from future correspondence. See <a href="emailsetup.html">Email Setup</a> for details.</td>
</tr>
<tr>
<td>NameF</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td>Patient's first name.</td>
</tr>
<tr>
<td>NamePreferredOrFirst</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td>Patient's preferred name. If no preferred name, uses first name.</td>
</tr>
<tr>
<td>NewPatWebFormURL</td>
<td>New Patient Thank-You messages</td>
<td>The URL as determined by <a href="automatedmessagingpreferences.html">Automated Messaging Preferences</a>. This tag can only be used when the office is also signed up for eConfirmations.</td>
</tr>
<tr>
<td>OfficeName</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td>The practice name in Practice Setup.</td>
</tr>
<tr>
<td>OfficePhone</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td>If using clinics, the clinic phone number. If not using clinics, the practice phone number.</td>
</tr>
<tr>
<td>PracticeName</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td>The practice name in Practice Setup.</td>
</tr>
<tr>
<td>PracticePhone</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td> The practice phone number.</td>
</tr>
<tr>
<td>Password</td>
<td>Patient Portal Invites</td>
<td>Patient Portal password. Only available for Patient Portal Invites. </td>
</tr>
<tr>
<td>PatientPortalURL</td>
<td>Patient Portal Invites</td>
<td>The URL to Patient Portal. Only available for Patient Portal Invites. </td>
</tr>
<tr>
<td>Premed</td>
<td>eReminders, </td>
<td>Include a premedicate reminder for patient marked as Premedicate. Set custom message in <a href="automatedmessagingadvanced.html">Automated Messaging Advanced Settings</a>.</td>
</tr>
<tr>
<td>ProvAbbr</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td>The abbreviation for the provider the appointment is scheduled with.</td>
</tr>
<tr>
<td>ProvName</td>
<td>eReminders, eConfirmations, Automated Thank-You Messages, Patient Portal Invites, Arrivals, Arrivals, General Messages</td>
<td>The provider the appointment is scheduled with. If the appointment is marked <i>Is Hygiene</i>, this is the hygienist the appointment is scheduled with.</td>
</tr>
<tr>
<td>Username</td>
<td>Patient Portal Invites</td>
<td>The patient's username for Patient Portal. Only available for Patient Portal Invites. </td>
</tr>
</table>
</p>
<p><div class="Note">Note: The [EmailDisclaimer] tag is a default tag on emails. It can only be removed if <i>Include Opt-Out Statement </i> is disabled in <a href="emailsetup.html">Email Setup</a>. This statement includes <a href="practice.html">Practice</a> or <a href="clinicsetup.html">Clinic</a> address and instructions about how to unsubscribe from <a href="eservices.html">eService</a> emails. The statement is only included in emails sent for <a href="webschedasap.html">Web Sched ASAP</a>, <a href="webschedverify.html">Web Sched Verify</a>, <a href="webschedrecallsetup.html">Web Sched Recall</a>, <a href="econfirmationsetup.html">eConfirmations</a>, <a href="ereminderssetup.html">eReminders</a>, <a href="../site/patientportal.html">Patient Portal Invites</a>, the <a href="confirmationlist.html">Confirmation List</a>, and the <a href="recalllist.html">Recall List</a>.</div>
</p>
<h2>Buttons</h2>
<img src="images/editRuleButtons.png" width="745" height="43"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Delete</b>: Delete this rule entirely. </li>
<li><b>Advanced</b>: Edit the text for aggregated messages. See Advanced Settings below.</li>
<li><b>Add Language</b>: Add additional languages to send messages in. See Add Language below.</li>
<li><b>OK</b>: Click to save settings. </li>
<li><b>Cancel</b>: Click to leave the window without saving.</li>
</ul>
<h2>Advanced Settings</h2>
<p>When one or more appointments on the same day share a common patient email address and/or wireless phone number (e.g., a family), the associated messages are grouped together into an aggregated email or text (i.e., one long text message or email).</p>
<p>If a single patient has multiple appointments for one day, the texts or emails they receive list their first appointment for the day only. When confirming an <a href="econfirmationsetup.html">eConfirmation</a>, all appointments for the day are marked confirmed.</p>
<p>In the Edit Rule window, click<b> Advanced</b>. </p>
<img src="images/EditRuleAdvancedEmail.png" width="670" height="630"/><p><div class="Note">Note: If using language translations, language tabs display at the top. Ensure the correct language is selected before editing.</div>
</p>
<p><b>Template Replacement Tags</b>: A list of valid template replacement tags that can be used to insert data from the database into the message.</p>
<p class="MarginBottomZero"><b>Tabs</b>: Tabs vary depending on the Rule Type selected. </p>
<ul class="MarginBottomGap">
<li><b>Email Templates</b>: Edit the email text sent for aggregated messages. <ul>
<img src="images/editRuleAggEmailSubject.png" width="668" height="420"/><li>Aggregated Email Subject: The email heading. </li>
<li>Aggregated Email Template: The email body. </li>
<li>Aggregated Email Template Per Appointment: Determines how the [Appts] tag is filled. Each appointment lists using the sentence entered here. </li>
</ul>
</li>
<br/><li><b>SMS Templates</b>: Edit the message sent on texts.<br/><img src="images/editRuleAggSMS.png" width="667" height="348" class="ImageInParagraph"/><ul>
<li>Aggregated SMS Template: The body of the text message sent.</li>
<li>Aggregated SMS Template Per Appointment: Determines how the [Appts] tag is filled. Each appointment lists using the sentence entered here. </li>
</ul>
</li>
<br/><li><b>Arrival Templates</b>: Only available for Arrivals.<br/><img src="images/editRuleAggArrival.png" width="670" height="282" class="ImageInParagraph"/><ul>
<li>Arrival SMS Response Template: The message sent when the patient arrives to the office.</li>
<li>Come in SMS Message Template: The message sent when the office send the <i>Come In</i> text.</li>
</ul>
</li>
<br/><li><b>Auto Reply Templates</b>: Only available for eConfirmations. Sends an automated reply after patient confirms their appointment.<br/><img src="images/editRuleAggAutoReply.png" width="668" height="265" class="ImageInParagraph"/><ul>
<li>Single Reply Template: The reply when a single appointment is confirmed. </li>
<li>Aggregate Auto Reply Template: The reply when multiple appointments are confirmed.</li>
</ul>
</li>
</ul>
<h2>Add Language</h2>
<p>Create and send messages in the patient's preferred language. </p>
<p>In the Edit Rule window, click <b>Add Language</b>. Select the language from the dropdown. Edit or add languages from <i>Languages used by patients</i> in <a href="preferences.html">Preferences</a>.</p>
<img src="images/editRuleLanguage.png" width="733" height="345"/><p>When a language is added, a language tab displays. </p>
<p>Select the language tab and manually type in the translated message. When a patient has this language selected as their preferred language in the <a href="patientedit.html">Edit Patient Information</a> window, the translated message is used.</p>
<p class="MarginBottomZero">The language sends based off the following criteria: </p>
<ul class="MarginBottomGap">
<li>If only one patient in a family has an appointment that day, that patient's preferred language is used. </li>
<li>If multiple family members have an appointment that day, including the guarantor, the guarantor's preferred language is used.</li>
<li>If multiple family members have an appointment that day, but not the guarantor, and the patient's preferred language is the same, the preferred language is used. </li>
<li>If multiple family members have an appointment that day, but not the guarantor, and the patients have different preferred languages, whichever patient is listed first, is the preferred language used.</li>
</ul>
<p>To remove a language, click <b>Remove Language</b>.</p>
<h2>Troubleshooting</h2>
<p><b>What if I update the Send Time on an existing rule?</b></p>
<p>Existing appointments that have already been sent a message may receive another message once the eServices window is saved.</p>
</div>
</div>
</body>
</html>```
