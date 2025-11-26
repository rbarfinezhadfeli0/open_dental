# File: ./www.opendental.com/site/version21_3.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Version 21.3</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('version21_3','versions','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>Version 21.3</p></div>
		<div class="GeneralPageContent">
<p>See <a href="versions.html">Versions</a>.</p>
<p>Version 21.3 was released on 12/02/2021.</p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> Overview of <a href="https://youtu.be/UIysFyHT9vo" target="_blank">Version 21.3</a>.</p>
<h2>Major Changes</h2>
<p class="MarginBottomZero"><b>Advertising Postcards Feature</b></p>
<ul class="MarginBottomGap">
<li>Set up office with a Postcard Account. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7postcardssetup.html">Postcards Setup (Advertising)</a></li>
<li>Design postcards and send them to existing or prospective patients. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7postcardsadvertisingworkflow.html">Postcards (Advertising): Workflow</a></li>
<li>Select a list of patients to send postcard advertisements to or purchase a mailing list. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7advertisingselectpatients.html">Advertising - Select Patients</a></li>
</ul>
<p class="MarginBottomZero"><b>Secure Email Feature</b></p>
<ul class="MarginBottomGap">
<li>Enable and set up secure email: <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7secureemailsetup.html">Secure Email Setup</a></li>
<li>Send secure email messages. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailmessage.html">Email Message Edit</a></li>
<li>Supports HTML formatting. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailhtml.html">HTML Email</a></li>
<li>Recipients use 2-factor authentication to view and reply to messages. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7secureemailworkflow.html">Secure Email: Workflow</a></li>
<li>Display secure email messages in Patient Portal. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7portalpatientsees.html">Patient Portal: What Patient Sees</a></li>
</ul>
<p><b>Updated CDT Codes for 2022</b>. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurecodetools.html">Procedure Code Tools</a></p>
<h2>Changes by Category</h2>
<p class="MarginBottomZero"><b>Account Module</b></p>
<ul class="MarginBottomGap">
<li>Edit Payment Split window defaults to the current patient. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paysplit.html">Paysplit</a></li>
<li>Add ability to include payment plan charges on limited statements. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7limited.html">Limited Statement</a></li>
<li>Added Provider and Clinic columns to the Adjustment Picker window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurefinancial.html">Procedure - Financial Tab</a></li>
<li>Review multiple adjustments before adding them to the account. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7adjustmentsmultiwindow.html">Add Multiple Adjustments</a></li>
<li>Statement button sets the start date from billing defaults when printing the statement. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7account.html">Account Module</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7statementwindow.html">Statement Window</a></li>
<li>Removed <i>(overpayment)</i> from Refund <i>(overpayment) </i>menu item. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7refunds.html">Refund</a></li>
<li>Update repeating charges for all patients or patients in a superfamily. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7repeatingcharges.html">Repeating Charges</a></li>
<li>Moved Allocation Setup to Account menu. (Also backported to 21.2.39) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7allocationssetup.html">Allocations Setup</a></li>
<li>Payment Plans consider <i>Adjustment Create</i> permission. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplanpatient.html">Old Payment Plan</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7adjustments.html">Adjustment</a></li>
<li>Updated terminology in the Production Tab of Dynamic Payment Plans. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplandynamic.html">Payment Plan</a></li>
</ul>
<p class="MarginBottomZero"><b>Chart Module</b></p>
<ul class="MarginBottomGap">
<li>Warn or block a user from completing a procedure in a hidden category. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7entertreatment.html">Enter Treatment</a></li>
<li>DoseSpot no longer requires practice or clinic fax number. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7dosespotrequiredinfo.html">Required DoseSpot eRx Information</a></li>
<li>New auto codes for dentures. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7autocode.html">Auto Codes</a></li>
<li>New procedure buttons for dentures. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurebuttons.html">Procedure Buttons</a></li>
<li>Print Ortho Chart for a date range. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7orthochart.html">Ortho Chart</a></li>
<li>Ortho Chart locks to prevent concurrency issues. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7orthochart.html">Ortho Chart</a></li>
<li>Big Tooth Chart window title updated. (Also backported to 21.2.43) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7chartbig.html">Big Graphical Tooth Chart</a></li>
</ul>
<p class="MarginBottomZero"><b>eServices</b></p>
<ul class="MarginBottomGap">
<li>Patient Portal Invites for all appointments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7editrule.html">Edit Rule</a></li>
<li>Added Premed tag to eReminders. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7editrule.html">Edit Rule</a></li>
<li>Patient Portal prevents disclosing whether a username exists. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7portalpatientsees.html">Patient Portal: What Patient Sees</a></li>
<li>eClipboard allows patient payments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eclipboardpayment.html">eClipboard: Payment</a></li>
<li>Patient Portal displays confirmations when payment using credit card on file is successful. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7portalpatientsees.html">Patient Portal: What Patient Sees</a></li>
<li>Option to display eClipboard checkin questions individually. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eclipboardsetup.html">eClipboard Setup</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eclipboardsees.html">eClipboard 24: What Patient Sees</a></li>
<li>eRx proxy users can utilize DoseSpot through Open Dental Mobile. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7opendentalmobilepatients.html">ODMobile Patients</a></li>
<li>Web Sched Appointments Reports filters using eServiceLog instead of SecurityLog. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschedapptreport.html">Web Sched Appointments Report</a></li>
<li>Webforms only download for the selected clinic. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webformsretrieve.html">Web Forms Retrieve</a></li>
<li>About page added to Open Dental Mobile. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7opendentalmobilemenu.html">ODMobile Menu</a></li>
<li>View payment plans in eClipboard. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eclipboardpaymentplans.html">eClipboard: Payment Plans</a></li>
<li>Receipt option for patients making online payments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7portalpaymentsbypatient.html">Payment Portal</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7portalpatientsees.html">Patient Portal: What Patient Sees</a></li>
<li>Preference to save payment plans as PDF from eClipboard. <a href="https://www.opendental.com/manual213/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Fixed where <i>Display Rendering Data</i> setting was located. <a href="https://www.opendental.com/manual213/sendmassemail.html">Send Mass Email</a></li>
<li>Change recall display name in Web Sched Existing Patient. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschedexistingpatsetup.html">Web Sched Existing Patient</a></li>
<li>Changed Mass Email menu item to Advertising - Mass Email. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mainmenu.html">Main Menu</a></li>
<li>Moved Mass Email Patient List to its own window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7advertisingselectpatients.html">Advertising - Select Patients</a></li>
<li>Changed Hosted Email button to Mass Email. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eservicessetup.html">eServices Setup</a></li>
<li>Updated Web Sched ASAP to only display appointments that fit within the upcoming timeslot. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7asapmsgs.html">ASAP Message Setup</a></li>
<li>Consent forms fixed so they do not display in Web Form Setup. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webformsupload.html">Web Form Setup</a></li>
<li>Secure Email includes a summary in the notification email. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7secureemailworkflow.html">Secure Email: Workflow</a></li>
</ul>
<p class="MarginBottomZero"><b>Imaging Module</b></p>
<ul class="MarginBottomGap">
<li>Open multiple images in the Imaging Module at once. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7images.html">Imaging Module</a></li>
<li>Add text to images. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7images.html">Imaging Module</a></li>
<li>Add browse buttons to import folder fields. <a href="https://www.opendental.com/manual213/modulesetupimages.html">Imaging Module Preferences</a></li>
<li>Added Twain option for ScanX phosphor plate. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7imagingdevices.html">Imaging Devices</a></li>
</ul>
<p class="MarginBottomZero"><b>Manage Module</b></p>
<ul class="MarginBottomGap">
<li>Tasks make notification sound on blocked tasks. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasks.html">Task</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasksarea.html">Tasks Area</a></li>
<li>Option to show hidden users in Task Search. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasksearch.html">Task Search</a></li>
<li>Filter Transaction History by amount range. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7transactionhistory.html">Accounting Transactions</a></li>
<li>Automatic and semi-automatic processing of ERAs re-enabled.<a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7era.html">ERA</a></li>
<li>Report to track automatically processed ERAs. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reporterasautomaticallyprocess.html">ERAs Automatically Processed Report</a></li>
</ul>
<p class="MarginBottomZero"><b>Open Dental Cloud</b></p>
<ul class="MarginBottomGap">
<li>Added scan functionality. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7images.html">Imaging Module</a></li>
<li>Allow PayConnect EMV transactions. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7payconnectsetup.html">PayConnect Setup</a></li>
<li>Added imaging device support. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7imagingdevices.html">Imaging Devices</a></li>
<li>Supports Dr Ceph Imaging. <a href="https://opendental.com/resources/ODCloudIntegrations.pdf">Third Party Integrations</a></li>
</ul>
<p class="MarginBottomZero"><b>Security</b></p>
<ul class="MarginBottomGap">
<li>Security permission to restrict access to adding or editing medications. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li>Security permission for setting up high security program links. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li>Security permission to restrict access to adding or editing allergies. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li>Security permission to restrict access to adding or editing problems. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li>Security permission to restrict access to the Edit Patient Information window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li>Audit Trail entry for editing patient credit card. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7audittrailpermissions.html">Audit Trail Permissions</a></li>
<li>Description for Mobile Web permission now includes Open Dental Mobile. (Also backported to 21.2.29) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li><i>Adjustment Create</i> permission is required when adding discount to procedure. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurefinancial.html">Procedure - Financial Tab</a></li>
<li>Updated permission name from Daily Payments - View All Providers to Daily Reports - View All Providers. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
</ul>
<p class="MarginBottomZero"><b>Tools</b></p>
<ul class="MarginBottomGap">
<li>Wiki search allows main pages to show at top of results. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7wikisearch.html">Wiki Search</a></li>
<li>Wiki considers keywords when adding internal link. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7wikiaddedit.html">Wiki Edit</a></li>
<li>Allow user to edit wiki page if it is broken. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7wiki.html">Wiki</a></li>
<li>Tool to merge billing types. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mergebillingtypes.html">Merge Billing Types</a></li>
<li>New database maintenance method for<i> DiscountPlanSubWithInvalidDiscountPlanNum</i>. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li>New database maintenance method for <i>ProviderMissingFromDB</i>. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li>Allow Audit Trail to run on Report Server. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7miscsetup.html">Miscellaneous Setup</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7audittrail.html">Audit Trail</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportserver.html">Report Setup: Report Server</a></li>
</ul>
<p class="MarginBottomZero"><b>Miscellaneous</b></p>
<ul class="MarginBottomGap">
<li>Fixed spelling in XVWeb bridge. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgeapteryxxvweb.html">Apteryx XVWeb Bridge</a></li>
<li>Print Electronic Eligibility and Benefits. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ebenefits.html">Electronic Eligibility and Benefits</a></li>
<li>New keyboard shortcut added to open Select Patient window. <a href="keyboardshortcuts.html">Keyboard Shortcuts</a></li>
<li>License agreement captures User, Date, and Open Dental Version. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7updateinstall.html">Install Update</a></li>
<li>Service to automate statement generation. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7scheduledprocesses.html">Scheduled Processes</a></li>
<li>Option to update appointment type color on existing future appointments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointmenttypes.html">Appointment Types</a></li>
<li>Sheet level setting to control auto-saving of forms to Imaging Module. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetproperties.html">Sheet Def Properties</a></li>
<li>Enhance the Dexis Integrator bridge to have an option for using the File Interface protocol. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgedexisintegrator.html">Dexis Integrator Bridge</a></li>
<li>Added SteriSimple Bridge. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgesterisimple.html">SteriSimple Bridge</a></li>
<li>MariaDB copyright information added to About window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7aboutwindow.html">About</a></li>
<li>Add color to rectangles on sheets. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetsline.html">Sheet Line and Rectangle</a></li>
<li>Patient Portion Uncollected report is now non-modal. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportdailypatportuncollected.html">Patient Portion Uncollected Report</a></li>
<li>Bridge to Pixel by Digital Doc. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgepixel.html">Pixel Bridge</a></li>
<li>Feature requests display highest version completed. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7featurerequests.html">Feature Requests</a></li>
<li>Add DownLocal growth behavior to Insurance Benefit grid in Treatment Plan Sheet. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetsgrid.html">Sheet Grid</a></li>
<li>Block MySQL 5.5 users from Unearned Allocation report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportunearnedallocation.html">Unearned Allocation Report</a></li>
<li>Copy Email and Phone fields from the selected patient when adding new family member. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7patientnew.html">Add Patient</a></li>
<li>Medication list exports as JSON instead of Tab-Delimited file. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7medicationmaster.html">Medications List</a></li>
<li>Updated dll for Dr Ceph bridge. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgedrceph.html">Dr. Ceph Bridge</a></li>
<li>Warning when user attempts to cancel aging when running certain tools. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7billing.html">Billing</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7financecharges.html">Billing/Finance Charges</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tsicollections.html">TSI Collections</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7latecharges.html">Late Charges</a></li>
<li>Updated wording on block message if excluding income transfers on AR Report while on MySQL 5.5. (Also backported to 21.2.29) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportaging.html">Aging of Accounts Receivable (A/R) Report</a></li>
<li>Added Weekend Rate 3 in Time Card Rules. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7timeclockedit.html">TimeCard</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7timecardsetup.html">Time Card Setup</a></li>
<li>Added missing fields to the internal form 1500_02_12 claim form. (Also backported to 21.2.32) <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7claimform1500.html">HCFA 1500 Claim Form</a></li>
<li>Replication service can be used with One Way Replication. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7opendentalreplicationservice.html">Open Dental Replication Service</a>, <a href="replicationoneway.html">One-Way Replication</a></li>
<li>Hide MariaDB sys and session users from MySQL Manager. <a href="mysqlusermanager.html">MySQL User Manager</a></li>
<li>Merge Patients window, changed <i>Patient ID</i> label to <i>Patient Number</i>. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mergepatients.html">Merge Patients</a></li>
<li>When using RDP, the client name is used as the computer name in various places. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7computer.html">Computers</a>, <a href="remote.html">Remote Access</a></li>
<li>Insurance Verify list option to verify benefits separate from eligibility. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insverifylistsetup.html">Insurance Verification Setup</a></li>
</ul>
		</div>
	</div>
</body>
</html>```
