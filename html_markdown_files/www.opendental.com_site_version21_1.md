# File: ./www.opendental.com/site/version21_1.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Version 21.1</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('version21_1','versions','advancedtopics','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>Version 21.1</p></div>
		<div class="GeneralPageContent">
<p>See <a href="versions.html">Versions</a></p>
<p>Version 21.1 was released on 06/01/2021. </p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> Overview of <a href="https://youtu.be/CEspTRpQvic">Version 21.1</a></p>
<h2>Major Changes</h2>
<p class="MarginBottomZero"><b>Discount Plans</b>: Have more control over discount plan setup. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7discountplans.html">Discount Plans</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7discountplan.html">Discount Plan Subscriber Edit</a></p>
<ul class="MarginBottomGap">
<li>Allow for plan notes and subscriber notes. </li>
<li>Create and add frequency limitations.</li>
<li>Allow an annual max. </li>
<li>Discount Plans are automatically assigned a Plan ID Number.</li>
<li>Discount plan amount now considers the unit quantity. </li>
</ul>
<p><b>Open Dental Mobile</b>: View reports from a mobile device. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7opendentalmobilemenu.html">ODMobile Menu</a></p>
<p><br></p>
<p><b>Treatment Plan</b>: Taxable procedures can display tax amount. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7displayfields.html">Display Fields</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7treatmentplan.html">Treatment Plan Module</a></p>
<h2>Changes by Category</h2>
<p class="MarginBottomZero"><b>Account Module</b><br></p>
<ul class="MarginBottomGap">
<li>When using Blue Book, default the cursor into the Allowed column when entering claim payments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7claimreceive.html">Receive Claim</a></li>
<li>Account Module always displays Quick Procs, even if user does not have <i>Account Procs Quick Add</i> permission. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7quickprocs.html">Quick Procs</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li>Allow associating treatment planned procedures with dynamic payment plans. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplandynamic.html">Payment Plan</a></li>
<li>Payment Plan Tx Credits include Discount Plan adjustments in <i>Rem Before</i> amounts. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplantxcredits.html">Payment Plan Procedures and Credits</a></li>
<li>Block moving credit cards with recurring charges between patients. (also backported to 20.5.39) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7creditcardsmanage.html">Credit Card Manage</a></li>
<li>Deleting a credit card now checks for duplicate tokens. (Also backported to 20.4.61 and 20.5.40) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7recurringchargesauthorize.html">Authorize Recurring Charges</a></li>
<li>Payment type is now required before voiding a transaction. (Also backported to 20.5.43) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7payment.html">Payment</a></li>
<li>Dynamic Payment Plan interest calculation now only considers the principal for completed procedures when <i>Await procedure completion</i> is selected. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplandynamic.html">Payment Plan</a></li>
</ul>
<p class="MarginBottomZero"><b>Chart Module</b><br></p>
<ul class="MarginBottomGap">
<li>Paging is disabled when progress notes are sorted by a column. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7chart.html">Chart Module</a></li>
<li>Re-order procedures on a procedure button. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurebuttons.html">Procedure Buttons</a></li>
<li>Patient information in Open Dental updates in DoseSpot. (Also backported to 20.5.33) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7dosespotuse.html">DoseSpot eRx / Prescription</a></li>
<li>Patient last name displays on superfamily commlogs in the Chart Module when the patient first name field is blank.<a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7showtabchart.html">Show Chart Views</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7commlog.html">Commlog</a></li>
</ul>
<p class="MarginBottomZero"><b>eServices</b><br></p>
<ul class="MarginBottomGap">
<li>Text message sent when an attempt to confirm an appointment fails. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html">eConfirmations</a></li>
<li>Improved phone number matching for incoming text messages. (Also backported to 20.5.49) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7textmsginbox.html">Text Messaging Mailbox</a></li>
<li>Web Sched Recall can group by family. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7recalllist.html">Recall List</a></li>
<li>Mobile Settings button added to eService Setup window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mobilesettings.html">Mobile App Credentials</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eservicessetup.html">eServices Setup</a></li>
<li>Added eService Activity Log. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eserviceactivitylog.html">eService Activity Log</a></li>
<li>Removed the <i>Show Pre-Screen Questions</i> option from eService Web Sched Advanced window. (Also backported to 20.5.47) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschedadvanced.html">Web Sched Advanced</a></li>
<li>Web Sched Existing Patient can have either text or email available for two-factor authentication. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschedadvanced.html">Web Sched Advanced</a></li>
<li>Web Sched appointments report default date range is now from one month in the past, to the current date. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschedapptreport.html">Web Sched Appointments Report</a></li>
<li>Added eClipboard appointment confirmation status option. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html">eConfirmations</a></li>
<li>Offices can use their own email address when sending mass emails. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7hostedemailaddressverification.html">Hosted Email Address Verification</a></li>
<li>Allow sending BYOD link when appointment is in a status other than Arrived. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7automatedmessaging.html">Automated Messaging</a></li>
<li>Preference to have appointments with a specified status not change when checking in via eClipboard. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7automatedmessaging.html">Automated Messaging</a></li>
</ul>
<p class="MarginBottomZero"><b>Family Module</b><br></p>
<ul class="MarginBottomGap">
<li>Added a date picker dropdown to the Birthdate text box in the Edit Patient Information window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7patientedit.html">Edit Patient Information</a></li>
<li>Merged patients are removed from superfamilies if they were placed in one. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mergepatients.html">Merge Patients</a></li>
</ul>
<p class="MarginBottomZero"><b>Imaging Module</b><br></p>
<ul class="MarginBottomGap">
<li>Item Info window now displays after importing files and using the Paste button. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7images.html">Imaging Module</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7imageinfo.html">Image Info</a></li>
<li>Patient selection is cleared when switching users while in the Imaging Module. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7images.html">Imaging Module</a></li>
</ul>
<p class="MarginBottomZero"><b>Manage Module</b><br></p>
<ul class="MarginBottomGap">
<li>Add new employers when importing insurance plans. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7importinsplans834.html">Import Ins Plan 834</a></li>
<li>On Hand Quantity added to Supply and Inventory. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7supplies.html">Supplies</a></li>
<li>TSI users can print or export the Account Receivable Manager grid. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tsicollections.html">TSI Collections</a></li>
<li>Updated terminology in TSI Setup window and Account Receivable Manager. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tsisetup.html">TSI Setup</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tsicollections.html">TSI Collections</a></li>
<li>Right-click options to quickly access patients and tasks. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasks.html">Task</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7commlog.html">Commlog</a></li>
<li>Ability to have multiple task lists open at once. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7manage.html">Manage Module</a></li>
<li>Added tasknum to task window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasks.html">Task</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7taskswindow.html">Task Window</a></li>
<li>Enhancements to emails automatically downloaded to the email inbox from Gmail. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailaddressedit.html">Email Address Edit</a></li>
<li>'Email Inbox' updated to 'Email Client' and now includes a sent messages filter. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailinbox.html">Email Client</a></li>
<li>Remove Old Data tool includes the <i>EmailMessage</i> table. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7removeolddata.html">Remove Old Data</a></li>
<li>Clinic button added to the TSI A/R Manager. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tsicollections.html">TSI Collections</a></li>
</ul>
<p class="MarginBottomZero"><b>Reports</b></p>
<ul class="MarginBottomGap">
<li>Custom Aging Report displays when a provider is marked as hidden. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportcustomaging.html">Custom Aging Report</a></li>
<li>Optimized the payment plans report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportpaymentplan.html">Payment Plans Report</a></li>
<li>Procedures with deleted procedure notes are now included on the Incomplete Procedure Notes Report when <i>Include procedures with no notes</i> is checked. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportincompleteprocnote.html">Incomplete Procedure Notes Report</a></li>
</ul>
<p class="MarginBottomZero"><b>Security</b><br></p>
<ul class="MarginBottomGap">
<li>Audit trail tracks when patient status is changed. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7audittrailpermissions.html">Audit Trail Permissions</a></li>
<li>Ability to filter the user list when logging into Open Dental. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7securitylogin.html">Log On</a></li>
<li>Security log added when a patient's Text OK status is changed. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7textmessages.html">Text Message</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7audittrailpermissions.html">Audit Trail Permissions</a></li>
</ul>
<p class="MarginBottomZero"><b>Treatment Plan Module</b><br></p>
<ul class="MarginBottomGap">
<li>Use custom sheets per clinic for Treatment Plans. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetdefaults.html">Sheet Def Defaults</a></li>
<li>Allow users without the <i>Insurance Payment Create</i> security permission to enter insurance payment estimates on preauthorizations. (Also backported to 20.5.45) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7preauth.html">Preauthorization</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
</ul>
<p class="MarginBottomZero"><b>Miscellaneous</b><br></p>
<ul class="MarginBottomGap">
<li>Button for None added to definitions picker window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7definitions.html">Definitions</a></li>
<li>Diagnostics window shows count of hidden clinics. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7diagnostics.html">Diagnostics</a></li>
<li>CareCredit shows batch Quickscreen transactions. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7carecredittransactions.html">CareCredit Transactions</a></li>
<li>CareCredit batch and manual Quickscreen round the estimated fee to the nearest dollar. (Also backported to 20.4.60 and 20.5.38) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7carecreditsetup.html">CareCredit Setup</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7carecreditaction.html">CareCredit Action</a></li>
<li>New CareCredit status on the appointment right-click options. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointments.html">Appointments Module</a></li>
<li>Database maintenance method for PatientMissing moved to the Tools tab. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li>Database maintenance method to un-delete procedures associated with income. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li>Database maintenance method for invalid Canadian ROT responses. (Also backported to 20.5.49) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li>Database maintenance methods automatically moved to Old tab when they do not need to be run again. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li>Procedures on appointment transfer to patient and referral letters. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7statictextfields.html">Static Text Field Names</a></li>
<li>When a shutdown signal is received, users will be automatically closed out of Open Dental without warning. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7miscsetup.html">Miscellaneous Setup</a></li>
<li>Added user preference to the <i>Ignore Content</i> checkbox for wiki search. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7wikisearch.html">Wiki Search</a></li>
<li>Appointment Module net production includes TP procedure discounts when the <i>Add daily adjustments to net production</i> preference is checked. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7productiontotals.html">Production Totals</a>, <a href="https://www.opendental.com/manual211/modulesetupappts.html">Appointments Module Preferences</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7treatmentplandiscounts.html">TP Procedure Discount</a></li>
<li>Procedure Code Tools now fix D code abbreviations. (Also backported to 20.5.41) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurecodetools.html">Procedure Code Tools</a></li>
<li>Emails created from the Fill Sheet window now default the From field to the logged-on user's email address. (Also backported to 20.5.41) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetsfillout.html">Fill Sheet</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailmessage.html">Email Message Edit</a></li>
<li>Insurance Plan List filters updated. (Also backported to 20.5.43) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insplanlist.html">Insurance Plans</a></li>
<li>EDS electronic statements are now batched into a single file. (Also backported to 20.5.43) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7billingdefaults.html">Billing Defaults</a>, <a href="https://www.opendental.com/manual211/modulesetupmanage.html">Manage Module Preferences</a></li>
<li>Commlogs are now only considered automatic if created by the OpenDentalService, eConnector, FHIR, etc. (Also backported to 20.4.62 and 20.5.45) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7commlog.html">Commlog</a></li>
<li>Field to use either the patient's preferred name or patient's first name. (Also backported to 20.5.51) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7statictextfields.html">Static Text Field Names</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7programlinkoutputfile.html">Program Link Output File</a>, <a href="https://www.opendental.com/manual211/massemailtemplates.html">Mass Email Templates</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailmessage.html">Email Message Edit</a></li>
<li>Code System Import is accessible regardless of if EHR is turned on. (Also backported to 20.5.51) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7codesystemimport.html">Importing Code Systems</a></li>
<li>Security Admin permission required to add IP Address to Cloud Management. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissionssecurityadmin.html">"Security Admin" Permission</a></li>
<li>Open Dental Cloud permission to allow login from any location. <a href="opendentalcloudsignin.html">Open Dental Cloud Sign In</a></li>
</ul>
		</div>
	</div>
</body>
</html>```
