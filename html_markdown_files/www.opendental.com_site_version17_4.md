# File: ./www.opendental.com/site/version17_4.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Version 17.4</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('version17_4','versions','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>Version 17.4</p></div>
		<div class="GeneralPageContent">
<p>See <a href="versions.html">Versions</a>.</p>
<p>Version 17.4 was released on 5/2/2018. </p>
<p>Blog: <a href="https://opendental.blog/2018/05/09/software-update-stable-version-17-4/">Stable Version 17.4 Highlights</a><br><br></p>
<p><span class="parHead">Major Changes<br /></span><b>DoseSpot</b>: New ePrescribing option with DoseSpot. Features two-way medication syncing, proxy clinicians, and provider notifications for prescriptions ready to send. <a href="https://www.opendental.com/manual174/dosespot.html">DoseSpot</a></p>
<p><b>Patient Portal: </b>New methods to automate providing access to the patient portal. <a href="https://www.opendental.com/manual174/portalaccess.html">Granting Access to the Portal</a></p>
<ul>
<li> Email automated Patient Portal Invitations before or after a scheduled appointment. Invitations include the credentials to access the portal. <a href="https://www.opendental.com/manual174/portalhostedbyod.html">Setting up the Patient Portal</a></li>
<li>Include the patientPortalCredentials static text field on a sheet. When the sheet is generated for a patient who has not yet accessed the portal, portal login credentials will display on the sheet. <a href="https://www.opendental.com/manual174/portalaccess.html">Granting Access to the Portal</a></li>
</ul>
<p><b>eReminders and eConfirmations </b></p>
<ul>
<li>Create an unlimited number of eReminder rules per appointment. <a href="https://www.opendental.com/manual174/ereminderssetup.html">Setting up eReminders</a></li>
<li>Customize the aggregated text and email messages sent to multiple family members at once. <a href="https://www.opendental.com/manual174/ereminderssetup.html">Setting up eReminders</a>, <a href="https://www.opendental.com/manual174/econfirmationsetup.html">Setting up eConfirmations</a></li>
</ul>
<p><b>Web Sched Verify: </b>When a patient successfully books a Web Sched Recall, New Patient, or ASAP appointment online, follow up with an automated verification message that includes appointment details. <a href="https://www.opendental.com/manual174/webschedverify.html">Web Sched Verify</a></p>
<p><b>Account Collections using Transworld Systems Interface: </b><a href="https://www.opendental.com/manual174/tsicollections.html">TSI (Transworld) Billing and Collections Service </a></p>
<ul>
<li>Send past due accounts to collections using the Transworld program link. <a href="https://www.opendental.com/manual174/tsisetup.html">Set up the TSI Program Link</a></li>
<li>Manage accounts in the Transworld window, including suspending and cancelling collections. <a href="https://www.opendental.com/manual174/tsimanage.html">TSI Interface</a></li>
<li>Accept payments directly through Transworld. <a href="https://www.opendental.com/manual174/tsipayment.html">Payments to a TSI Account</a></li>
</ul>
<p><span class="parHead">Changes by Category<br /></span><b>Account</b></p>
<ul>
<li>Preference to 'Allow storing credit card numbers' removed from Account Module preferences. <a href="https://www.opendental.com/manual174/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Add adjustments for multiple procedures using Add Multiple in the Adjustment dropdown or by right-clicking the Account module grid. <a href="https://www.opendental.com/manual174/adjustments.html">Adjustments</a></li>
<li>Credit filter added to Add Multiple window. <a href="https://www.opendental.com/manual174/adjustmentsmultiwindow.html">Add Multiple Adjustments Window</a></li>
<li>Preference to allow/block emailing of credit card receipts when entering a patient payment. <a href="https://www.opendental.com/manual174/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Set a default processing method for PayConnect in the program link. <a href="https://www.opendental.com/manual174/payconnectsetup.html">Set up PayConnect (a single set of credentials)</a></li>
<li>Enforce Valid Adjustments preference can force adjustment provider to match attached procedure. <a href="https://www.opendental.com/manual174/modulesetupaccount.html">Account Module Preferences</a></li>
<li>View number of patients attached to a discount plan in the Discount Plans window, Pats column. <a href="https://www.opendental.com/manual174/discountplans.html">Discount Plans</a></li>
</ul>
<p><b>Alerts</b></p>
<ul>
<li>Alert notifies user about appointments scheduled via Web Sched ASAP. Quickly open the Web Sched Appointments report. <a href="https://www.opendental.com/manual174/alerts.html">Alerts</a></li>
<li>Alert indicates when the eConnector is down. <a href="https://www.opendental.com/manual174/alerts.html">Alerts</a></li>
<li>Alert indicates when the eConnector has an error. <a href="https://www.opendental.com/manual174/alerts.html">Alerts</a></li>
<li>Alert notifies user when the MySQL server has more than half the allowed connections. <a href="https://www.opendental.com/manual174/alerts.html">Alerts</a></li>
</ul>
<p><b>Appointments</b></p>
<ul>
<li>Unscheduled and planned appointments, as well as recalls, can be marked ASAP and added to the ASAP list. <a href="https://www.opendental.com/manual174/asaplist.html">ASAP List</a></li>
<li>Option to create blockout types that do not allow appointment scheduling. <a href="https://www.opendental.com/manual174/definitionsblockouts.html">Definitions: Blockout Types</a><br></li>
<li>Option to create blockout types that do not allow cut/copy/paste. <a href="https://www.opendental.com/manual174/definitionsblockouts.html">Definitions: Blockout Types</a><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7blockouts.html">Blockouts</a></li>
<li>Create and edit "No Schedule" and "Don't cut copy paste" blockouts without the blockout permission. <a href="https://www.opendental.com/manual174/permissions.html">Permissions</a>, <a href="https://www.opendental.com/manual174/blockouts.html">Blockouts</a></li>
<li>Appointment module preferences have been divided into two tabs: Appearance and Behavior. <a href="https://www.opendental.com/manual174/modulesetupappts.html">Appointment Module Preferences</a></li>
<li> Preference to set a default length for appointments without attached procedures. <a href="https://www.opendental.com/manual174/modulesetupappts.html">Appointment Module Preferences</a></li>
<li>Add scheduling notes per provider. Notes are visible in the Appointments module when clicking on an operatory header. <a href="https://www.opendental.com/manual174/providerseditwindow.html">Edit Provider Window</a><br></li>
<li>Add scheduling notes per clinic. Notes are visible in the Appointments module when clicking on an operatory header. <a href="https://www.opendental.com/manual174/cliniceditwindow.html">Edit Clinic Window</a></li>
<li>Options to add net production and patient portion to an appointment view. <a href="https://www.opendental.com/manual174/appointmentvieweditwindow.html">Appointment View Edit Window</a></li>
<li>Sent eReminders and eConfirmations show in the Communications Log grid of the Edit Appointment window. <a href="https://www.opendental.com/manual174/aptedit.html">Edit Appointment Window</a></li>
<li>Option to view merged patients in the Select Patient window. <a href="https://www.opendental.com/manual174/patientselect.html">Selecting Patients</a></li>
<li>User is warned if they attempt to make an appointment for a merged patient, and prompted to switch to active patient. <a href="https://www.opendental.com/manual174/mergepatients.html">Merge Patients</a></li>
</ul>
<p><b>Billing</b></p>
<ul>
<li>Statements show patnums after the patient's name for an individual and in a column for a superfamily. <a href="https://www.opendental.com/manual174/superfamily.html">Super Families</a></li>
<li>Include patient last name in the rows of a statement. <a href="https://www.opendental.com/manual174/statementwindow.html">Statement Window</a></li>
<li>Preference to add compounding interest to finance charges in the Finance/Billing Charges window. <a href="https://www.opendental.com/manual174/financecharges.html">Billing / Finance Charges</a></li>
</ul>
<p><b>Bridges</b></p>
<ul>
<li>New command line available fields added for custom program links. <a href="https://www.opendental.com/manual174/bridgecustom.html">Custom Bridges</a></li>
<li>CADI bridge. <a href="https://www.opendental.com/manual174/bridgecadi.html">Bridge - CADI</a><br></li>
<li>HDX WILL bridge. <a href="https://www.opendental.com/manual174/bridgehdxwill.html">Bridge - HDX Will</a></li>
<li> New substitution output text field for [Address2] added for custom bridges. <a href="https://www.opendental.com/manual174/bridgecustom.html">Custom Bridges</a></li>
<li>For custom bridge output text files, an additional replacement field added for birthdate format yyyy-MM-dd. <a href="https://www.opendental.com/manual174/bridgecustom.html">Custom Bridges</a></li>
</ul>
<p><b>Canada</b></p>
<ul>
<li>IsAccident field on printed claim forms shows an X if there is a set Accident Date. <a href="https://www.opendental.com/manual174/canadaclaims.html">Claims - Canada</a></li>
</ul>
<p><b>Chart </b></p>
<ul>
<li>Preference to merge procedures notes when multiple users attempt to edit concurrently. <a href="https://www.opendental.com/manual174/procedurenotes.html">Procedure Notes</a></li>
<li>RCT paint type added for pulpectomy on primary teeth. <a href="https://www.opendental.com/manual174/primary.html">Primary Teeth</a></li>
<li>Allow saving XVWeb images from the Chart module. <a href="https://www.opendental.com/manual174/xvwebintegration.html">XV Web Integration</a></li>
<li>XVWeb images show as thumbnails as they are downloaded in the Chart module. <a href="https://www.opendental.com/manual174/xvwebintegration.html">XV Web Integration</a></li>
<li>Referral letters can show tooth chart, including procedures and tooth chart legend. <a href="https://www.opendental.com/manual174/sheetsaddelements.html">Sheet Elements and Options</a></li>
<li>When the User column is added to the Chart View, email line items will indicate who was logged on when the email was sent. <a href="https://www.opendental.com/manual174/showtabchart.html"> Show Tab / Chart Views</a></li>
<li>Progress notes update when tooth selections are changed in the tooth chart. 'Show Selected Teeth' must be checked. <a href="https://www.opendental.com/manual174/chart.html">Chart Module</a></li>
<li>Delete procedures that are attached to a preauthorization. <a href="https://www.opendental.com/manual174/preauth.html">Preauthorizations</a></li>
</ul>
<p><b>Clinics</b></p>
<ul>
<li>Save default dunning and general messages per clinic. <a href="https:/manual174/billingdunningmsg.html">Dunning Messages</a>, <a href="https://www.opendental.com/manual174/billingdefaults.html">Billing Defaults</a></li>
<li>The billing list can be run for multiple specific clinics. <a href="https://www.opendental.com/manual174/billinglist.html">Billing List</a></li>
<li>Turning clinics off when eServices are enabled triggers a popup to disable or keep eServices. <a href="https://www.opendental.com/manual174/clinics.html">Clinics</a>, <a href="https://www.opendental.com/manual174/showfeatures.html">Show Features</a></li>
<li>Run Global Fee Update for multiple clinics at once. <a href="https://www.opendental.com/manual174/feesupdate.html">Updating Fees for Treatment Planned Procedures</a></li>
</ul>
<p><b>Rx / eRx</b></p>
<ul>
<li>17.4.12 - New ePrescribing option with DoseSpot. Features two-way medication syncing, proxy clinicians, and provider notifications for prescriptions ready to send. <a href="https://www.opendental.com/manual174/dosespot.html">DoseSpot</a></li>
<li>Pharmacy information auto populates in the Edit Rx window for electronic prescriptions. <a href="https://www.opendental.com/manual174/rx.html">New Rx / Write a Prescription</a></li>
<li>Add a CDT procedure code to a printed prescription. <a href="https://www.opendental.com/manual174/cliniceditwindow.html">Edit Clinic Window</a>, <a href="https://www.opendental.com/manual174/rxsetup.html">Prescription List</a></li>
<li>Output text fields for Rx Sheets have been renamed and have new functionality. <a href="https://www.opendental.com/manual174/sheetsrx.html">Sheets: Rx / Single Prescriptions</a></li>
<li>RxNorm codes are now used to standardize medications in the United States and download automatically if they are not imported. <a href="https://www.opendental.com/manual174/rxnorms.html">RxNorms</a></li>
</ul>
<p><b>eServices</b></p>
<ul>
<li>eReminders and eConfirmations  <ul>
<li>Create an unlimited number of eReminder rules per appointment. <a href="https://www.opendental.com/manual174/ereminderssetup.html">Setting up eReminders</a></li>
<li>Customize the aggregated text and email messages sent to multiple family members at once. <a href="https://www.opendental.com/manual174/ereminderssetup.html">Setting up eReminders</a>, <a href="https://www.opendental.com/manual174/econfirmationsetup.html">Setting up eConfirmations</a></li>
<li>Confirmation statuses set as triggers for Time Arrived, Time Seated, and Time Dismissed are excluded when sending eReminders or eConfirmations. <a href="https://www.opendental.com/manual174/confirmationstatus.html">Appointment Confirmation Status</a><br></li>
</ul>
</li>
<li> Web Sched  <ul>
<li>Web Sched Verify: When a patient successfully books a Web Sched Recall, New Patient, or ASAP appointment online, follow up with an automated verification message that includes appointment details. <a href="https://www.opendental.com/manual174/webschedverify.html">Web Sched Verify Messages</a></li>
<li>Patients can request to be notified of an earlier opening when scheduling online via Web Sched Recall. <a href="https://www.opendental.com/manual174/webschedrecallsees.html">Web Sched Recall: What Patients See</a></li>
<li>Aggregated Web Sched Recall messages will generate a commlog for each patient. <a href="https://www.opendental.com/manual174/recalllist.html">Recall List</a>, <a href="https://www.opendental.com/manual174/webschedrecallsetup.html">Web Sched Recall Setup</a></li>
<li> Option to force patients to use the U.S. 10 digit format when entering phone numbers in the Web Sched New Patient interface. <a href="https://www.opendental.com/manual174/webschednewpatsetup.html">Setting up Web Sched New Patient</a></li>
<li>Web Sched ASAP appointments added to the Web Sched Appointments report. <a href="https://www.opendental.com/manual174/webschedapptreport.html">Web Sched Appointments Report</a></li>
</ul>
</li>
<li>Text Messaging window limited to 100 messages. Use paging buttons to see additional texts if over 100. <a href="https://www.opendental.com/manual174/textmsginbox.html">Text Messaging Inbox</a></li>
<li>Patient Portal <a href="https://www.opendental.com/manual174/patientportal.html">Patient Portal</a><ul>
<li>New methods to automate providing access to the patient portal. <a href="https://www.opendental.com/manual174/portalaccess.html">Granting Access to the Portal</a><ul>
<li> Email automated Patient Portal Invitations before or after a scheduled appointment. Invitations include the credentials to access the portal. <a href="https://www.opendental.com/manual174/portalhostedbyod.html">Setting up the Patient Portal, Patient Portal Invites</a></li>
<li>Include the patientPortalCredentials static text field on a sheet. When the sheet is generated for a patient who has not yet accessed the portal, portal login credentials will display on the sheet. <a href="https://www.opendental.com/manual174/portalaccess.html">Granting Access to the Portal, patientPortalCredentials Static Text Field</a></li>
</ul>
</li>
<li>Passwords generated by Open Dental are random, 8 digit one-time use passwords. Patients will be prompted to change their credentials when they first log in to the portal. <a href="https://www.opendental.com/manual174/portalaccess.html">Granting Access to the Portal</a></li>
</ul>
</li>
<li>eConnector service enhancements. <a href="https://www.opendental.com/manual174/econnector.html">eConnector</a></li>
<li> Web form birthdate format is based on the Windows region settings of the office. <a href="https://www.opendental.com/manual174/webformspatient.html">Web Forms: What Patients See</a></li>
</ul>
<p><b>Family </b></p>
<ul>
<li>Patient merge improvements. <a href="https://www.opendental.com/manual174/mergepatients.html">Merge Patients</a></li>
<li>Prompt to remove future appointments for patients marked "deceased". <a href="https://www.opendental.com/manual174/patientedit.html">Edit Patient Information Window</a></li>
<li>Check for duplicate patients from the Add Family window. <a href="https://www.opendental.com/manual174/familyadd.html">Enter New Patients by Family</a></li>
<li>Referral sources can be designated "preferred". <a href="https://www.opendental.com/manual174/referralsetup.html">Referral List</a></li>
<li>Option to view merged patients in the Select Patient window. <a href="https://www.opendental.com/manual174/patientselect.html">Selecting Patients</a></li>
<li>Search for patients by invoice number in the Select Patient window. <a href="https://www.opendental.com/manual174/displayfields.html">Display Fields</a></li>
<li>Preference to automatically sync the email address of the guarantor to all family members in the Add Family window. <a href="https://www.opendental.com/manual174/modulesetupfamily.html">Family Module Preferences</a></li>
<li>Referral letters that contain a procedure grid or tooth chart are saved as PDF. <a href="https://www.opendental.com/manual174/letterreferral.html">Referral Letters</a></li>
<li>Family module preference for 'Insurance plans default to show UCR fee on claims' now sets all plans to use UCR fees instead of just category percentage plans. <a href="https://www.opendental.com/manual174/modulesetupfamily.html">Family Module Preferences</a></li>
</ul>
<p><b>Fees</b></p>
<ul>
<li>Show Hidden checkbox for procedure codes can only be accessed from Lists, Procedure Codes. <a href="https://www.opendental.com/manual174/procedurecode.html">Procedure Code List</a></li>
<li>Removed 'Import eCW' button from the Fee Tools window. <a href="https://www.opendental.com/manual174/feescheduletools.html">Fee Tools</a></li>
<li>Update write-off estimates independently from fee schedules in the Fee Tools window. <a href="https://www.opendental.com/manual174/feesupdate.html">Updating Fees for Treatment Planned Procedures</a></li>
</ul>
<p><b>Insurance</b></p>
<ul>
<li>Access other parts of Open Dental while the Batch Insurance Payments window is open, when accessed from the Manage module. <a href="https://www.opendental.com/manual174/claimpaymentbatch.html">Batch Insurance Payments</a><br></li>
<li>Access other parts of Open Dental while the Insurance Payment (EOB) window is open, when accessed from the Batch Insurance Payments window. <a href="https://www.opendental.com/manual174/claimpaymentbatch.html">Batch Insurance Payments</a><br></li>
<li>Filter outstanding claims in the Insurance Payment (EOB) window by ClaimID. <a href="https://www.opendental.com/manual174/claimpaymentbatch.html">Batch Insurance Payments</a><br></li>
<li>Search outstanding claims by full name in the Insurance Payment (EOB) window. <a href="https://www.opendental.com/manual174/claimpaymentbatch.html">Batch Insurance Payments</a></li>
<li>Preference to allow future dated insurance payments. <a href="https://www.opendental.com/manual174/modulesetupaccount.html">Account Module Preferences</a>, Insurance tab</li>
<li>Request benefit information for non-subscribers. <a href="https://www.opendental.com/manual174/ebenefits.html">Electronic Benefits</a></li>
<li>Detailed progress bar added to Get Reports function in Insurance Claims window. <a href="https://www.opendental.com/manual174/claimsend.html">Managing Insurance Claims</a></li>
<li>Customize the default format of a new Claim ID using Claim Identification Prefix in Account Module Preferences, Insurance tab. <a href="https://www.opendental.com/manual174/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Insurance Verification time calculation enhancements. <a href="https://www.opendental.com/manual174/insverifylist.html">Insurance Verification List</a></li>
<li>New Definitions category for Carrier Group Names. <a href="https://www.opendental.com/manual174/definitionscarriergroupnames.html">Definitions, Carrier Group Names</a></li>
<li>Associate an insurance carrier with a carrier group. <a href="https://www.opendental.com/manual174/carriers.html">Insurance Carrier List</a></li>
<li>New Medicaid COB rule for secondary insurance. <a href="https://www.opendental.com/manual174/cob.html">COB Rules</a></li>
<li>Customize printed ERAs using Sheets. <a href="https://www.opendental.com/manual174/sheetsera.html">Customizing an ERA Using Sheets</a></li>
<li>Customize the header that prints on customized ERA sheets. <a href="https://www.opendental.com/manual174/sheetseragridheader.html">Customizing the ERAGridHeader using Sheets</a></li>
<li>Attach supplemental payments (claim reversals and claim correcitons) to their claims in the ERA window. <a href="https://www.opendental.com/manual174/eraprocess.html">Process ERAs</a></li>
<li>View write-off and deductible amounts in the ERA window and ERA Claim Details window. <a href="https://www.opendental.com/manual174/eraprocess.html">Process ERAs</a></li>
<li>The Ins Payment Create permission is required to access the ERA window from Manage Module. <a href="https://www.opendental.com/manual174/permissions.html">Permissions</a>, <a href="https://www.opendental.com/manual174/claimsERA835Manage.html">Manage ERAs</a></li>
<li>Add tracking status directly to claims on an ERA. <a href="https://www.opendental.com/manual174/claimsera835trackingstatus.html">Tracking an Outstanding ERA</a></li>
</ul>
<p><b>Payments</b></p>
<ul>
<li>Sort the Outstanding Charges grid on the Payment window by column. Filter by date range, provider, clinic, patient, code, and amount ending. <a href="https://www.opendental.com/manual174/payment.html">Payment Window</a></li>
<li>Checkbox on the Payment window determines if super family member charges and splits show. <a href="https://www.opendental.com/manual174/payment.html">Payment Window</a></li>
<li>Merged Force users to attach procedures to adjustments with Enforce Valid Adjustments in Account Module Preferences. <a href="https://www.opendental.com/manual174/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Allow users to preselect account charges when adding a new payment. <a href="https://www.opendental.com/manual174/paymentpatientcreditcard.html">Entering a Credit Card Patient Payment</a>, <a href="https://www.opendental.com/manual174/paymentpatientother.html">Entering a Non-Credit Card Payment</a></li>
<li>The "Prefer this patient" checkbox only shows if the family has multiple patients. <a href="https://www.opendental.com/manual174/paymentpatientcreditcard.html">Entering a Credit Card Patient Payment</a>, <a href="https://www.opendental.com/manual174/paymentpatientother.html">Entering a Non-Credit Card Payment</a></li>
<li>Preference to remove prompt that suggests allocating unearned income when creating a claim. <a href="https://www.opendental.com/manual174/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Paysplit manager added to income transfer window. <a href="https://www.opendental.com/manual174/incometransfer.html">Income Transfer</a></li>
</ul>
<p><b>Reports</b><br></p>
<ul>
<li>In the Unearned Income Report, filter out families that have a zero net dollar unearned income balance. <a href="https://www.opendental.com/manual174/reportunearnedincome.html">Unearned Income Report </a></li>
<li>Birthday Report date range includes year. <a href="https://www.opendental.com/manual174/reportbirthdays.html">Birthday Report</a></li>
<li>Daily Payments Report preference to show payment splits by provider or not. <a href="https://www.opendental.com/manual174/reportdailypayments.html">Daily Payments Report</a></li>
<li>Sort the Treatment Finder report by column heading. <a href="https://www.opendental.com/manual174/reporttreatfinder.html">Treatment Finder Report</a></li>
<li>Unfinalized payments show on the Reports window. <a href="https://www.opendental.com/manual174/reportsstandard.html">Standard Reports</a></li>
<li>Two providers with the same first and last name can run Production and Income and Daily Payments reports when one of the providers has the permission to do so. <a href="https://www.opendental.com/manual174/reportprodinc.html">Production and Income Reports</a>, <a href="https://www.opendental.com/manual174/reportdailypayments.html">Daily Payments</a></li>
<li>New Custom Aging report allows users to choose which transactions to include. <a href="https://www.opendental.com/manual174/reportcustomaging.html">Custom Aging Report</a></li>
<li>Exclude archived patients from the Aging of AR report. <a href="https://www.opendental.com/manual174/reportaging.html">Aging of A/R Report</a></li>
<li>Run the Graphic Reports on a report server. <a href="https://www.opendental.com/manual174/reportserver.html">Report Server</a></li>
<li>The Outstanding Insurance Claims report has its own Display Fields category, allowing report customization. <a href="https://www.opendental.com/manual174/displayfields.html">Display Fields</a></li>
<li>New filter options for Outstanding Insurance Claims report. <a href="https://www.opendental.com/manual174/reportoutins.html">Outstanding Insurance Claims Report</a></li>
<li>Patient date of birth field added to Outstanding Insurance Claims report. <a href="https://www.opendental.com/manual174/reportoutins.html">Outstanding Insurance Claims Report</a></li>
<li>Deleted providers no longer show on reports. <a href="https://www.opendental.com/manual174/providers.html">Provider List</a></li>
<li>Unfinalized Payments Report enhancements. <a href="https://www.opendental.com/manual174/reportunfinalizedinsurancepayments.html">Unfinalized Payments Report</a></li>
<li>The write-off estimates optionally aged in the aging report are now aged by procedure date instead of claimsnapshot date. <a href="https://www.opendental.com/manual174/reportaging.html">Aging of A/R Report</a></li>
<li>In the Production and Income report, optionally show both procedure date for write-off estimates and insurance pay date for write-off adjustments using the "both" radio button. <a href="https://www.opendental.com/manual174/reportprodinc.html">Production and Income Reports</a></li>
<li>Query Favorites are searchable. <a href="https://www.opendental.com/manual174/queryfavorites.html">Query Favorites</a></li>
<li>Production and Income reports and Daily Payments reports have a separate checkbox to include Unearned Income independently of attached provider. <a href="https://www.opendental.com/manual174/reportprodinc.html">Production and Income Reports</a>, <a href="https://www.opendental.com/manual174/reportdailypayments.html">Daily Payments</a></li>
<li>Four Unearned Income reports show in the Unearned Income reports window. <a href="https://www.opendental.com/manual174/reportunearnedincome.html">Unearned Income Report</a><ul>
<li><a href="https://www.opendental.com/manual174/reportunearnedallocation.html">Unearned Allocation report</a></li>
<li><a href="https://www.opendental.com/manual174/reportnetunearnedincome.html">Net Unearned Income report</a></li>
<li><a href="https://www.opendental.com/manual174/reportlineitemunearned.html">Line Item Unearned Income report</a></li>
<li><a href="https://www.opendental.com/manual174/reportunearnedaccounts.html">Unearned Accounts report</a></li>
</ul>
</li>
</ul>
<p><b>Security</b><br></p>
<ul>
<li> Interface changes to the Security window. <a href="https://www.opendental.com/manual174/security.html">Security Window</a><ul>
<li> Security window divided into a Users tab, User Group Tab. <a href="https://www.opendental.com/manual174/security.html">Security Window</a></li>
<li> Global Security Settings are accessible via a Settings menu item on the Security window. <a href="https://www.opendental.com/manual174/securitysettings.html">Global Security Settings</a></li>
<li> Users tab shows the user's group and a read-only overview of the group's security permissions. <a href="https://www.opendental.com/manual174/security.html">Security Window</a></li>
<li> Users Group tab shows the group's permissions as well as all users in the group. Use this tab to assign permissions to the group. <a href="https://www.opendental.com/manual174/securityusergroups.html">Adding or Renaming User Groups</a></li>
</ul>
</li>
<li> Users can be associated to multiple user groups. <a href="https://www.opendental.com/manual174/securityusers.html">User Security Profiles</a></li>
<li> Logging off of Open Dental now triggers an OK/No prompt. Set default behavior with a preference. <a href="https://www.opendental.com/manual174/securitylogin.html">Security: Logging On/Off</a></li>
<li> Patient Edit permission logs an entry in the audit trail when a patient is moved to a different family, or patient information is changed and saved. <a href="https://www.opendental.com/manual174/permissions.html">Permissions</a></li>
<li> Fee Schedule Edit permission restricts editing fee schedules from the Setup and Lists menus. <a href="https://www.opendental.com/manual174/permissions.html">Permissions</a>, <a href="https://www.opendental.com/manual174/feeschedules.html">Fee Schedules</a></li>
<li> Referral Edit permission allows/blocks user from editing or deleting referrals. It is tracked in the audit trail. <a href="https://www.opendental.com/manual174/permissions.html">Permissions</a></li>
<li> Perio Chart Edit permission logs an entry in the audit trial when a perio exam is added, deleted, or copied. <a href="https://www.opendental.com/manual174/permissions.html">Permissions</a></li>
<li> Procedure Code Edit permission logs changes to individual procedure codes. <a href="https://www.opendental.com/manual174/permissions.html">Permissions</a></li>
<li> Recall Edit permission logs changes to recalls, recall types, and recall triggers. <a href="https://www.opendental.com/manual174/permissions.html">Permissions</a></li>
<li> When a task is deleted, an entry is made in the security log that records the tasknum of the deleted task. <a href="https://www.opendental.com/manual174/permissions.html">Permissions</a></li>
<li> Security Admin permission logs an entry in the audit trail when permissions are granted or revoked for user groups. <a href="https://www.opendental.com/manual174/permissions.html">Permissions</a></li>
<li> PreAuth Sent Edit permission allows/blocks user from editing preauths that have already been sent. <a href="https://www.opendental.com/manual174/permissions.html">Permissions</a>, <a href="https://www.opendental.com/manual174/preauth.html">Preauthorizations</a></li>
<li> Filter the audit trail based on the last time an item was edited. <a href="https://www.opendental.com/manual174/audittrail.html">Audit Trail</a></li>
<li> New audit trail column displays the date and time of the change before last. <a href="https://www.opendental.com/manual174/audittrail.html">Audit Trail</a></li>
<li> Claim History Edit permission has a user group lock date instead of a global lock date. <a href="https://www.opendental.com/manual174/permissions.html">Permissions</a></li>
<li> Lock dates are no longer considered when procedures have a status of EO or EC. <a href="https://www.opendental.com/manual174/securitylockdates.html">Security Lock Dates</a><br></li>
</ul>
<p><b>Miscellaneous <br></b> Generate a unique serial number for equipment entries. <a href="https://www.opendental.com/manual174/equipment.html">Equipment</a><br>  Set a tab order for combo boxes on sheets. <a href="https://www.opendental.com/manual174/sheetsfillout.html">Filling out Sheets</a><br>  Use the Int Link button to add a new page in the wiki. <a href="https://www.opendental.com/manual174/wikiaddedit.html">Wiki Page: Add / Edit</a><br>  An error indicates when an incorrect password is entered in the Service Manager during an installation attempt. <a href="https://www.opendental.com/manual174/servicemanager.html">Service Manager</a><br>  Option to display information entered in old, renamed custom patient fields. <a href="https://www.opendental.com/manual174/custompatientfields.html">Custom Patient Fields</a><br>  Access Quick Paste Notes through the Setup menu. <a href="https://www.opendental.com/manual174/mainmenu.html">Main Menu</a><br>  Single practices can now add specialities to patient clones when creating the clone. <a href="https://www.opendental.com/manual174/patientclone.html">Patient Clones</a><br>  Preference to send Unhandled Exception report directly to Open Dental support. <a href="https://www.opendental.com/manual174/miscsetup.html">Miscellaneous Setup</a>, <a href="https://www.opendental.com/manual174/unhandledexception.html">Unhandled Exceptions</a><br>  Apteryx images can be saved to the Open Dental Images module. <a href="https://www.opendental.com/manual174/XVWebIntegration.html">XV Web Integration</a><br>  FHIR includes allergies, medications, and conditions. <a href="https://www.opendental.com/manual174/fhir.html">FHIR Restful API Service</a><br>  Denti-Cal testing for new SFTP paths. <a href="https://www.opendental.com/manual174/dentical.html">Denti-Cal</a><br>  When copying a fee schedule, a message will indicate when the copy is done. <a href="https://www.opendental.com/manual174/feeschedulecopy.html">Copying Fee Schedules</a><br>  Enhancements to the Select Patient window. <a href="https://www.opendental.com/manual174/patientselect.html">Selecting Patients</a><br>  Added a database maintenance to find payments that are attached to an incorrect payment plan type, paysplits that are attached to insurance payment plans, and claim payments that are attached to patient payment plans. <a href="https://www.opendental.com/manual174/dbmlogresults.html">DBM Log Results</a><br>  Improvements to overallocation warning messages. <a href="https://www.opendental.com/manual174/paymentpatient.html">Payments</a>, <a href="https://www.opendental.com/manual174/adjustments.html">Adjustments</a>, <a href="https://www.opendental.com/manual174/claimpayment.html">Insurance Payments</a>, <a href="https://www.opendental.com/manual174/claimprocedure.html">Claim Procedure</a><br>  Removed SecurityLogInvalidKeyDBM. <a href="https://www.opendental.com/manual174/databasemaintenance.html">Database Maintenance</a><br>  Display Field window enhancements. <a href="https://www.opendental.com/manual174/displayfields.html">Display Fields</a><br></p>
<p><b>Enhancements</b><br>  Use an internal MD5 hash algorithm implementation instead of the .NET framework cryptography implementation. <br>  Load time improvements in Account module. <a href="https://www.opendental.com/manual174/account.html">Account Module</a><br>  Improved update speed. <a href="https://www.opendental.com/manual174/update.html">Updating Open Dental</a><br>  Open Dental generally uses less memory.<br>  Speed enhancements to Middle Tier. <a href="https://www.opendental.com/manual174/middletier.html">Middle Tier</a><br>  Speed enhancements to processes involving fees. <br></p>
		</div>
	</div>
</body>
</html>```
