# File: ./www.opendental.com/site/version20_5.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 20.5</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="resources/site.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/site.js" defer></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
</head>
<body>
	<div id="TitleAndNav">
		<div id="TitleAndSocial">
			<div id="Title">
				<a href="../index.html">
					<img src="resources/logo.png" alt="Open Dental Software">
				</a>
			</div>
			<div id="Phone">
				<a href="tel:1-503-363-5432" class="phoneLink">503-363-5432</a>
			</div>
		</div>
		<div id="NavWrapper">
			<nav>
				<div id="HamburgerMenu">&#9776;</div>
				<ul>
					<!--See notes in up in the head for explanation of relative path choices.-->
					<li><a href="../index.html">Home</a></li>
					<li><a href="trial.html">Trial Version</a></li>
					<li><a href="order.html">Order</a></li>
					<li><a href="documentation.html">Documentation</a></li>
					<li><a href="http://opendentalsoft.com/forum/">Forum</a></li>
					<li><a href="contact.html">Contact Us</a></li>
					<li><a href="searchSite.html"><img id="MenuIconSearch" src="resources/iconSearch.gif" alt=""/>Search</a> </li>
				</ul>
			</nav>
		</div>
	</div>
    <div id="PagePane"><!--The lighter foreground window that floats over the darker background-->
		<div id="PageTitle">
			<h1>Version 20.5</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<p>Version 20.5 was released on 03/11/2021.</p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> Overview of <a href="https://youtu.be/f_9pbd2JWhI">Version 20.5</a></p>
<h2>Major Changes</h2>
<p class="MarginBottomZero"><b>Paint Types</b>: Created new paint types for more tooth chart customization. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurecodeedit.html">Procedure Code</a></p>
<ul class="MarginBottomGap">
<li>New paint types created for <i>Space Maintainers</i> and <i>Retained Root</i>. </li>
<li>Paint type Watch changed to Text </li>
</ul>
<p><b>Appointment Module</b>: New buttons to jump appointment calendar 3, 4 or 6 months. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointments.html">Appointments Module</a></p>
<br><p class="MarginBottomZero"><b>Discount Plans</b>: Added effective dates for Discount Plans. </p>
<ul class="MarginBottomGap">
<li>Added subscriber level effective dates for Discount Plans. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7discountplan.html">Discount Plan Subscriber Edit</a></li>
<li>Effective date included in Discount Plan Report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportdiscountplan.html">Discount Plans Report</a></li>
</ul>
<p><b>Procedure Codes</b>: New 2021 COVID-19 CDT Codes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurecodetools.html">Procedure Code Tools</a></p>
<h2>Changes by Category</h2>
<p></p>
<p class="MarginBottomZero"><b>Appointments Module</b></p>
<ul class="MarginBottomGap">
<li>Modifications to look of ASAP list. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7asaplist.html">ASAP List</a></li>
<li>In the Confirmation List, option to send one confirmation request per family. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7confirmationlist.html">Confirmation List</a></li>
<li><i>Go to Appt Date</i> automatically selects an appointment view that contains the appointment operatory. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7apptspatient.html">Patient Appointments</a></li>
<li>Estimated Patient Portion includes Treatment Plan discounts in the Edit Appointment window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7aptedit.html">Edit Appointment</a></li>
</ul>
<p class="MarginBottomZero"><b>Account Module</b></p>
<ul class="MarginBottomGap">
<li>Claims paid As Total can be automatically split to procedures. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7claimreceive.html">Receive Claim</a>, <a href="https://www.opendental.com/manual205/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Option to pay on principal for Dynamic Payment Plans. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplandynamic.html">Payment Plan</a></li>
<li>Account Module preference to specify if negative production can be transferred as income. <a href="https://www.opendental.com/manual205/modulesetupaccount.html">Account Module Preferences</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7incometransfermanager.html">Income Transfer Manager</a></li>
<li>Preference to hide income transfer manager. <a href="https://www.opendental.com/manual205/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Automatic sales tax. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7salestax.html">Sales Tax</a>, <a href="https://www.opendental.com/manual205/modulesetupaccount.html">Account Module Preferences</a></li>
<li>As Of date added to Income Transfer Manager (also backported to 20.4.29) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7incometransfermanager.html">Income Transfer Manager</a></li>
<li>Statement number can be added to Statement Sheet. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7outputtextfields.html">Output Text Field Names</a></li>
<li>Payment type now displays on hidden splits. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7hiddensplits.html">Hidden Splits</a></li>
<li>Treatment planned prepayments made to super family members now show in the Patient Account tab of the paid by account. (also backported to 20.4.33) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7hiddensplits.html">Hidden Splits</a></li>
<li>Income Transfer Manager fixes treatment planned prepayments that have been detached or deleted. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7hiddensplits.html">Hidden Splits</a></li>
<li>Preference not to re-run declined cards on recurring charges. <a href="https://www.opendental.com/manual205/modulesetupaccount.html">Account Module Preferences</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7recurringchargesauthorize.html">Authorize Recurring Charges</a></li>
<li>Late charge feature. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7latecharges.html">Late Charges</a></li>
<li>Recurring Charge Month window now opens anytime <i>Apply to Recurring Charges</i> is checked. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentpatientcreditcard.html">Credit Card Payment</a></li>
<li>Custom sheets can be associated with statements, limited statements, invoices, and receipts. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetdefaults.html">Sheet Def Defaults</a></li>
<li>Adding a payment to a patient with multiple payment plans will display information on which plans are active. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplanpayment.html">Payment to a Payment Plan</a></li>
</ul>
<p class="MarginBottomZero"><b>Chart Module</b></p>
<ul class="MarginBottomGap">
<li>Adding rows to Ortho Chart prompts for date and provider. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7orthochart.html">Ortho Chart</a></li>
<li>Chart Module tab changes to combine missing teeth and primary into one category. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7missingteeth.html">Missing/Primary Teeth</a></li>
<li>Custom text can be added to Tooth Chart. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7chartdrawing.html">Draw on Tooth Chart</a></li>
<li>DoseSpot eRx requires height and weight for patients under the age of 18. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7dosespotrequiredinfo.html">Required DoseSpot eRx Information</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7vitalsignsenter.html">EHR Vital Signs</a></li>
</ul>
<p class="MarginBottomZero"><b>eServices</b></p>
<ul class="MarginBottomGap">
<li>Mass Email can get recipient list from user query. <a href="https://www.opendental.com/manual205/sendmassemail.html">Send Mass Email</a></li>
<li>Mass email templates dependent on clinics available to user. <a href="https://www.opendental.com/manual205/massemailtemplates.html">Mass Email Templates</a></li>
<li>Updated automatic footer to mass emails. <a href="https://www.opendental.com/manual205/sendmassemail.html">Send Mass Email</a>, <a href="https://www.opendental.com/manual205/massemailtemplates.html">Mass Email Templates</a></li>
<li>Alert when web forms are ready to be retrieved. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7alerts.html">Alerts</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webformsretrieve.html">Web Forms Retrieve</a></li>
</ul>
<p class="MarginBottomZero"><b>Family Module</b></p>
<ul class="MarginBottomGap">
<li>Preference for Same for Entire family to all remain unchecked. <a href="https://www.opendental.com/manual205/modulesetupfamily.html">Family Module Preferences</a></li>
<li>Added <i>None</i> option to Exclude Automated Msgs settings for easier removal of previous exclusions. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7patientedit.html">Edit Patient Information</a></li>
<li>PPO plans that do not track write-offs can be excluded from blue book. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7planppo.html">PPO Insurance Plan</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insplan.html">Insurance Plan</a></li>
</ul>
<p class="MarginBottomZero"><b>Imaging Module</b></p>
<ul class="MarginBottomGap">
<li>New Imaging Module Preference for PDF's to always display in a separate PDF viewer.<a href="https://www.opendental.com/manual205/modulesetupimages.html">Imaging Module Preferences</a></li>
<li>New Imaging Module Preferences for default import folders. <a href="https://www.opendental.com/manual205/modulesetupimages.html">Imaging Module Preferences</a></li>
<li>Added live feed for intraoral cameras. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7images.html">Imaging Module</a></li>
<li>Ability to take X-ray images within Imaging Module. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7imagingdevices.html">Imaging Devices</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7images.html">Imaging Module</a></li>
<li>Ability to move an image to a different patient. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7images.html">Imaging Module</a></li>
<li>Automatically import multiple images at once. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7images.html">Imaging Module</a></li>
</ul>
<p class="MarginBottomZero"><b>Manage Module</b></p>
<ul class="MarginBottomGap">
<li>Alert when supplemental backup is successfully created. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7alerts.html">Alerts</a></li>
<li>Transworld warns user when an account with outstanding claims is sent to collections. (Also backported to 20.4.29) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tsicollections.html">TSI Collections</a></li>
<li>Passwords in the <i>ebill</i> table are encrypted. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7billingdefaults.html">Billing Defaults</a></li>
<li>Emails from Gmail can be automatically downloaded to the email inbox. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailaddressedit.html">Email Address Edit</a></li>
<li>Enhancements when removing old data. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7removeolddata.html">Remove Old Data</a></li>
<li>DentalXChange statements have the option to include <i>Adjust</i> in the description for adjustments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7billingdefaults.html">Billing Defaults</a></li>
<li>Filter time clock by employee name. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7timeclock.html">Time Clock</a></li>
<li>Hide Legacy/Repeating tasks settings when Legacy/Repeating tasks are not enabled. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasklists.html">Task List</a></li>
</ul>
<p class="MarginBottomZero"><b>Reports</b></p>
<ul class="MarginBottomGap">
<li>Added end date filter to Treatment Finder Report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reporttreatfinder.html">Treatment Finder Report</a></li>
<li>Discount Plan report shows effective dates and term dates. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportdiscountplan.html">Discount Plans Report</a></li>
</ul>
<p class="MarginBottomZero"><b>Security</b></p>
<ul class="MarginBottomGap">
<li>Audit trail tracks when sheet information is imported. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7audittrailpermissions.html">Audit Trail Permissions</a></li>
<li>Audit trail entry when a user adds or edits a state abbreviation. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7stateabbreviations.html">State Abbreviations</a></li>
<li>Associate CEMT users with providers, employees, and DoseSpot User IDs. <a href="cemtsecurity.html">CEMT Security</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7security.html">Security</a></li>
<li>CEMT option to log in automatically via Middle Tier. <a href="cemtpasswords.html">CEMT Passwords</a>, <a href="cemtusersettings.html">CEMT User Settings</a></li>
<li>Single sign-on for CEMT. <a href="cemtsecurity.html">CEMT Security</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7singlesignon.html">Single Sign-On / Domain Login</a></li>
<li>Program links mask passwords. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7programlinks.html">Program Links</a></li>
</ul>
<p class="MarginBottomZero"><b>Tools</b></p>
<ul class="MarginBottomGap">
<li>Ability to hide column in wiki list. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7wikilists.html">Wiki List</a></li>
<li>Option to archive patients in the Patient Status Setter. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7patientstatussetter.html">Patient Status Setter</a></li>
<li>Ability to create certifications for employee training. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7certifications.html">Certifications</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7certificationsetup.html">Certification Setup</a></li>
<li>Database maintenance method for ProcedurelogProvNumMissing includes breakdown. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li>Choose an active instance of Open Dental to shutdown or shutdown all at once. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7shutdown.html">Shutdown Workstations</a></li>
</ul>
<p><b>Miscellaneous</b></p>
<ul>
<li>2021 Ontario Dental Association (ODA) Fee guides. (Also backported to 20.4.31) <a href="canadafeeschedules.html">Canada Fee Guides</a></li>
<li>Updates to Canada Auto Codes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7canadaautocodes.html">Canada Auto Codes</a></li>
<li>Allow Treatment Planned Procedures to pass into Consent Forms and Lab Slips. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7treatmentplan.html">Treatment Plan Module</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7consentforms.html">Consent Form</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7labcaseedit.html">Lab Case</a></li>
<li>2021 ICD10 codes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7icdcodes.html">ICD-10 Codes</a></li>
<li>About window includes database name. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7aboutwindow.html">About</a></li>
<li>PaySimple partner link updated. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paysimplesetup.html">PaySimple Setup</a></li>
<li>Check Insurance Plan Fees window can be printed. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7feeschedulecheckfees.html">Check Insurance Plan Fees</a></li>
<li>Check Insurance Plan Fees window expanded to include <i>ManualBlueBlook </i>Fee Schedules. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7feeschedulecheckfees.html">Check Insurance Plan Fees</a></li>
<li>Checkbox to save outgoing requests to DentalXChange Attachment Service. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eclaimsclaimconnect.html">DentalXChange ClaimConnect E-Claims</a></li>
<li>DentalEye bridge enhanced to allow DentalEye Version 3.3. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgedentaleye.html">DentalEye Bridge</a></li>
<li>In a Patient Form, importable radio groups can have custom values.. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetscheckbox.html">Sheet Checkbox and Radio Button</a></li>
<li>Registration key form displays all licenses. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7updatesetup.html">Update Setup</a></li>
<li>Ability to sort patients when launching Trophy bridge.<a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgetrophy.html">Trophy Bridge</a></li>
<li>Option to hide inactive cards in Recurring Charges. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7recurringcharges.html">CC Recurring Charges</a></li>
</ul>

</div>	
	</div>
</body>
</html>```
