# File: ./www.opendental.com/site/version17_2.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Version 17.2</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('version17_2','versions','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>Version 17.2</p></div>
		<div class="GeneralPageContent">
<p>See <a href="versions.html">Versions</a>.</p>
<p>Version 17.2 was released on 09/12/2017. EHR certified 2014 edition.</p>
<p><span class="parHead">Major Changes<br /></span><b>Mobile Web</b><a href="../manual/mobilewebuse.html">Use Mobile Web</a></p>
<ul>
<li>Add, delete, and move appointments in your appointment schedule. <br></li>
<li>Set appointment and confirmation status, appointment type, and appointment notes. </li>
<li>View and select operatories.</li>
<li>Headquarters added to Clinic menu. </li>
</ul>
<p><b>Reports: </b></p>
<ul>
<li>Restrict user access to specific reports. <a href="../manual/reportsecurity.html">Report Setup - Security Permissions</a></li>
<li>Report setup divided into four tabs: <a href="../manual/reportdisplaysettings.html">Display Settings</a>, <a href="../manual/reportsecurity.html">Security Permissions</a>, <a href="../manual/reportserver.html">Report Server</a>, <a href="../manual/reportmiscsettings.html">Misc Settings</a>. </li>
<li>Run the Production and Income Reports on a report server. <a href="../manual/reportserver.html">Report Setup - Report Server</a></li>
<li>Option to re-run aging for all selected months in current A/R graphic reports. <a href="../manual/reportsgraphicsetup.html">Graphic Reports - Setup Mode</a></li>
</ul>
<p><b>Substitution Codes:</b> Control which procedures codes are downgraded by insurance plan. <a href="../manual/downgrades.html">Procedure Estimate Downgrades</a></p>
<p><b>Task Reminders </b></p>
<ul>
<li>Reminder tasks pop up when they are due. <a href="../manual/taskreminders.html">Task Reminders</a></li>
<li>Change any task to a reminder task type, and vice versa. <a href="../manual/tasks.html">Create Tasks</a></li>
<li>New option to set a one-time task reminder. <a href="../manual/taskreminders.html">Task Reminders</a></li>
</ul>
<p><b>Setup Wizard:</b> Run a setup wizard to help enter basic setup information. <a href="../manual/setupwizard.html">Setup Wizard</a></p>
<p><span class="parHead">Changes by Category<br /></span><b>Account</b></p>
<ul>
<li>Filter recurring charges by date. <a href="../manual/recurringcharges.html">Recurring Charges</a></li>
<li>Option to consider writeoff estimates in aging. <a href="../manual/reportaging.html">Aging of A/R Report</a></li>
<li>Force Duplication for PayConnect is available when using and EMV terminal. <a href="https://www.opendental.com/manual/payconnectpayment.html">PayConnect: Process a Credit Card Payment</a></li>
<li>Ability to electronically sign PayConnect transactions when using an EMV terminal. <a href="https://www.opendental.com/manual/payconnect.html">PayConnect</a></li>
<li>When adding an adjustment attached to a procedure, if the remaining balance is less than 0, user will receive warning message. <a href="../manual/adjustments.html">Adjustments</a></li>
<li>For prepayments, view date and amount of allocations via the Payment window. <a href="https://www.opendental.com/manual/prepaymentpatient.html">Prepayments</a></li>
<li>Date column label changed to Proc Date in Payment window, Payment Splits grid. <a href="../manual/payment.html">Payment window</a></li>
<li>(procedure date) field removed from Pay Split window. <a href="../manual/paysplit.html">Pay Split window</a></li>
<li>When attaching a procedure to a pay split, the Select Procedure window shows more details. <a href="../manual/paysplit.html">Pay Split window</a></li>
<li>Account module preferences organized into three tabs. <a href="https://www.opendental.com/manual/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Preference for 'Invoices payments grid show writeoffs' determines if insurance writeoffs are included in the Payments grid on invoices. <a href="https://www.opendental.com/manual/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Preference for 'Patient Payments allow future dated debits' determines if users can enter future-dated payments. <a href="https://www.opendental.com/manual/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Preference for 'Patient Payments Use' determines which clinic is assigned by default to patient payments. <a href="https://www.opendental.com/manual/modulesetupaccount.html">Account Module Preferences</a></li>
<li>If patient is assigned a billing type that has been 'hidden', (hidden) will show next to the billing type. <a href="../manual/patientedit.html">Edit Patient Information window</a></li>
<li>Code Range and date filters added to Planned Appointment Tracker. <a href="../manual/appttracker.html">Planned Appointment Tracker</a></li>
</ul>
<p><b>Appointments</b></p>
<ul>
<li>Preference to set a time, in seconds, to delay a click when loading the Edit Appointment window. Useful to prevent accidental clicks. <a href="https://www.opendental.com/manual/modulesetupappts.html">Appointment Module Preferences</a></li>
<li>User option to only view data for the current exam in the Perio Chart vs entire history. <a href="../manual/perio.html">Perio Chart</a></li>
<li> In the Unscheduled List, Status column renamed UnschedStatus and new AptStatus column. <a href="../manual/unscheduled.html">Unscheduled List</a></li>
<li>New options for broken appointments. Includes logic for cancelled appointments (D9987). <a href="../manual/apptbreak.html">Break an Appointment</a>, <a href="https://www.opendental.com/manual/modulesetupappts.html">Appointment Module Preferences</a>. </li>
<li>Date range filter added to the Unscheduled List. <a href="../manual/unscheduled.html">Unscheduled List</a></li>
</ul>
<p><b>eServices</b></p>
<ul>
<li>Limit the amount of Web Sched Recall text messages sent per batch. <a href="../manual/webschedrecallsetup.html">Web Sched Recall Setup</a></li>
<li>Change an appointment confirmation status' 'Don't Send' and 'Don't Change' setting from the eReminder and eConfirmation Setup window. <a href="../manual/ereminderssetup.html">eReminder Setup</a>, <a href="../manual/econfirmationsetup.html">eConfirmation Setup</a></li>
<li>The lead time (in days) for eConfirmations and eReminders determines the time window messages can be sent (1 - X days). <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ereminderssetup.html">eReminder Setup</a>, <a href="../manual/econfirmationsetup.html">eConfirmation Setup</a></li>
<li>Info button added to the Signup Portal. <a href="../manual/signupportalbasic.html">eServices Sign Up Portal - Basic View</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7signupportaladvanced.html">eServices Sign Up Portal - Advanced View</a></li>
<li>Add <span class="CourierFont">&amp;amp;AFNAB=N</span> to a Web Form URL to stop 'next forms' from automatically inheriting the first name, last name, and birthdate from the previous form. <a href="../manual/webformsupload.html">Upload Web Forms</a></li>
<li>Option to allow parents or legal guardians to schedule a minor's Web Sched New Patient Appointment. <a href="../manual/webschednewpatsetup.html">Web Sched New Patient Appointment Setup</a></li>
</ul>
<p><b>Claims</b></p>
<ul>
<li>On Insurance Claims window, History grid, added a user column and right click options. ClaimPrinted added as a status and filter option. <a href="../manual/claimsend.html">Managing Insurance Claims</a></li>
<li>Enhancements to Claim Forms window. <a href="../manual/claimforms.html">Printed Claim Form Setup</a></li>
<li> Printed ADA 2012 claim form uses Patient Number for box 23 (PatientID) instead of SSN. <a href="../manual/claimformADA2012.html">ADA 2012 Claim Form</a></li>
<li>Enter Quick Paste Notes when recording claim status history. <a href="../manual/claimtabstatus.html">Edit Claim window - Status History Tab</a></li>
<li>On Denti-Cal claim form, print up to 15 procedures (instead of 10). <a href="../manual/dentical.html">Denti-Cal</a></li>
<li>When creating a preauthorization for a patient with only one active plan, user is no longer prompted to select insurance or relationship to patient. <a href="../manual/preauth.html">Preauthorizations</a></li>
<li>For Canada, when an EOB claim response is created, insurance paid amounts can be automatically entered. For Preauthorizations, the amount paid is entered as an estimate. <a href="../manual/claimstream.html">ClaimStream</a>, <a href="../manual/itrans.html">ITRANS</a>.</li>
<li>For Canada, preview claim acknowledgments before printing. <a href="../manual/canadaclaimsend.html">Canada: Send Claims and Retrieve Reports</a></li>
<li>The OpenDentalService can process clearinghouse reports. <a href="../manual/clearinghouses.html">Clearinghouse Setup</a></li>
<li>Clearinghouse passwords are masked. <a href="../manual/clearinghouses.html">Clearinghouse Setup</a></li>
<li>Option to block saving 837 files to the claim export path when sending to claims to EDS. <a href="../manual/eclaimseds.html"> Electronic Dental Services (EDS)</a></li>
<li>When matching ERA 835s to claims, the claim identifiers are no longer required to match. <a href="../manual/claimsERAmatching.html">Matching ERAs with Claims</a></li>
<li>Right click on a claim in the ERA window to go to the account. <a href="../manual/eraprocess.html">Process an ERA</a></li>
<li>When finalizing a ERA claim, manually detached claims are not considered. <a href="../manual/eraprocess.html">Process an ERA</a></li>
<li>Print button added to Claim Explanation of Benefits window. <a href="../manual/claimsERAeobdetails.html">EOB Claim Details</a></li>
</ul>
<p><b>Clinics</b></p>
<ul>
<li>Filter auto-ortho claims by clinic. <a href="../manual/orthoautoclaim.html">Auto Ortho Claim Generation</a></li>
<li>Reorder operatories for specific clinics. <a href="../manual/operatories.html">Operatory Setup</a></li>
<li>Filter the Global Fee Update tool by clinic and view progress with a progress bar. <a href="../manual/feesupdate.html">Updating Fees for Treatment Planned Procedures</a></li>
<li>Option to display clinic abbreviation instead of the clinic description in the main title bar. <a href="../manual/miscsetup.html">Miscellaneous Setup</a></li>
<li>Associate a speciality to a clinic. Useful for Patient Clones. <a href="../manual/clinicsetup.html">Clinic List</a></li>
</ul>
<p><b>Insurance</b></p>
<ul>
<li>Set a default billing type for an insurance plan. <a href="../manual/insplan.html">Edit Insurance Plan window</a></li>
<li>Preference to automatically change a patient's billing type when a new primary insurance plan is created and a billing type is set. <a href="https://www.opendental.com/manual/modulesetupfamily.html">Family Module Preferences</a></li>
<li>Edit Insurance Payment window, "Prepaid Insurance Cards" changed to "Virtual Credit Cards". <a href="../manual/claimpayfinalize.html">Finalize the Insurance Payment</a></li>
<li>Carrier Group Name field added to group insurance carrier for query purposes. <a href="../manual/carriers.html">Insurance Carriers</a></li>
<li>Carrier2Address and Carrier2CityStZip added as static text fields. <a href="../manual/statictextfields.html">Static Text Fields</a></li>
<li>Control which procedures codes are downgraded by insurance plan. <a href="../manual/downgrades.html">Procedure Estimate Downgrades</a></li>
<li>For Canada, the 'Assignment of Benefits' checkbox affects whether or not payment amounts from EOBs are automatically imported. <a href="../manual/canadainsplan.html">Canada Insurance Plan</a></li>
</ul>
<p><b>Interface Changes</b></p>
<ul>
<li>Report setup options divided into four tabs: <a href="../manual/reportdisplaysettings.html">Display Settings</a>, <a href="../manual/reportsecurity.html">Security Permissions</a>, <a href="../manual/reportserver.html">Report Server</a>, and <a href="../manual/reportmiscsettings.html">Misc Settings</a>.</li>
<li>"Birth date" changed to "birthdate" in Web Sched New Patient Appointments and Patient Portal Care Summary. <a href="../manual/webschednewpatsees.html">Web Sched New Patient: What the Patient Sees</a>, <a href="../manual/portalpatientsees.html"> Patient Portal: What the Patient Sees</a></li>
<li>Some one word labels changed to two words. <a href="../manual/tasksarea.html">Tasks Area</a>, <a href="../manual/manage.html">Manage Module</a>, and <a href="../manual/procedureedit.html">Editing Procedures</a>. </li>
<li>PinBoard changed to Pinboard throughout program. <a href="../manual/apptpinboard.html">Pinboard</a></li>
<li>Updated labels on blockout Cut-Copy-Paste tool to reflect accurate behavior. <a href="../manual/blockouts.html">Blockouts</a></li>
<li>Message that displays when hiding a provider has been enhanced. <a href="../manual/providerseditwindow.html">Edit Provider Window</a></li>
<li>Available field 'ADA Code' changed to 'Proc Code' in Progress Notes for foreign countries. <a href="../manual/showtabchart.html">Customizing Chart Views</a></li>
</ul>
<p><b>Patient Clone</b></p>
<ul>
<li>Create multiple patient clones per patient. <a href="../manual/patientclone.html">Patient Clones</a></li>
<li>Use specialties to differentiate patient clones. Clinics <a href="../manual/definitionsclinicspecialties.html">Definitions - Clinic Specialties</a>.</li>
<li>Option to place new patient clones in a new family and link to original patient via super family. <a href="https://www.opendental.com/manual/modulesetupfamily.html">Family Module Preferences, Super Family</a></li>
<li>Patient clone relationship information removed from Edit Patient Information, Other tab.</li>
<li>Patient clone tool buttons added to Family tool bar when Patient Clone is turned on (Add, Synch, Break). <a href="../manual/patientclone.html">Patient Clones</a></li>
<li>When a patient has a patient clone, a new Patient Clones grid shows in the Family module. <a href="../manual/family.html">Family Module</a></li>
</ul>
<p><b>Reports</b></p>
<ul>
<li>Restrict user access to specific reports. <a href="../manual/reportsecurity.html">Report Setup - Security Permissions</a></li>
<li>Run the Production and Income Reports on a report server. <a href="../manual/reportserver.html">Report Setup - Report Server</a></li>
<li>Aging of A/R Report updated to complex report system. <a href="../manual/reportaging.html">Aging of A/R Report</a></li>
<li>Report setup divided into four tabs: <a href="../manual/reportdisplaysettings.html">Display Settings</a>, <a href="../manual/reportsecurity.html">Security Permissions</a>, <a href="../manual/reportserver.html">Report Server</a>, <a href="../manual/reportmiscsettings.html">Misc Settings</a>. </li>
<li>Sort the Appointments Report by date created or date scheduled. <a href="../manual/reportappts.html">Appointments Report</a></li>
</ul>
<p><b>Security</b></p>
<ul>
<li>Edit Popup (other users) permission allows/blocks user from editing or deleting popups created by other users. <a href="../manual/permissions.html">Permissions</a></li>
<li>InsuranceCarrierCombine permission allows/blocks a user from combining insurance carriers. <a href="../manual/permissions.html">Permissions</a></li>
<li>InsurancePlanCombine permission allows/blocks a user from combining insurance plans. <a href="../manual/permissions.html">Permissions</a></li>
<li>'Change existing Ins Plan using Pick from List' permission allows user to pick a new plan before dropping a plan. <a href="../manual/permissions.html">Permissions</a></li>
<li>Audit trail entry added for Create Adjustment For Discount Plan permission. <a href="../manual/audittrail.html">Audit Trail</a></li>
<li>Set up automatic Open Dental log in when logged in to a Windows domain user. <a href="../manual/singlesignon.html">Setting up Single Sign on / LDAP</a></li>
<li>When changing the user on a Task, user is prompted to enter their password. <a href="../manual/tasks.html">Tasks</a></li>
<li>Run the Appointment Report by appointment date or date created. <a href="../manual/reportappts.html">Appointment Report</a></li>
</ul>
<p><b>Tasks</b></p>
<ul>
<li>Reminder tasks pop up when they are due. <a href="../manual/taskreminders.html">Task Reminders</a></li>
<li> Change any task to a task reminder and vice versa. <a href="../manual/tasks.html">Tasks</a></li>
<li>New option to set a one-time task reminder. <a href="../manual/taskreminders.html">Task Reminders</a></li>
</ul>
<p><b>Miscellaneous</b></p>
<ul>
<li>Images module defaults to using Internet Explorer's default PDF reader to open PDF images. <a href="../manual/images.html">Images Module</a></li>
<li>Allow backdating and deleting of specific procedures (with a $0 fee) by bypassing global lock date. <a href="../manual/procedurecodeedit.html">Edit Procedure Codes</a></li>
<li>Right click option to block incoming text messages from specific mobile numbers. <a href="../manual/textmsginbox.html">Text Messaging Inbox</a></li>
<li>Set specific sheets (e.g. Exam Sheets) to bypass the Global Lock Date. <a href="../manual/sheetproperties.html">Sheet Properties</a></li>
<li>DBM to fix invalid dates for all date columns. <a href="../manual/databasemaintenance.html">Database Maintenance</a></li>
<li>DateTStamp column added to the LabCase table. <a href="programmingresources.html">Programming Resources</a></li>
<li>OrthoCad bridge. <a href="../manual/bridgeorthocad.html">Bridge - OrthoCAD</a></li>
<li>Static text fields dateLastBW, dateLastExam, dateLastPanoFMX, dateLastPerio, and dateLastProphy are based on the first five characters of the procedure code. <a href="../manual/statictextfields.html">Static Text Fields</a></li>
<li>Ability to cancel out of an auto note, save responses and unanswered prompts, then return at a later time to complete it. <a href="../manual/autonotes.html">Auto Notes</a></li>
<li>Column headers in wiki lists wrap. <a href="../manual/wikilists.html">Wiki Lists</a></li>
<li>Lab Fee field added to Edit Lab Case window. <a href="../manual/labcaseedit.html">Creating a Dental Lab Case</a></li>
<li>Key range columns and 'enable random primary keys' removed from Replication Setup window. Only will show when random primary keys are already enabled. <a href="../manual/replicationservers.html">Replication: Add Servers and Designate a Slave Monitor</a></li>
<li>Option to add a default procedure note for treatment planned procedures. <a href="../manual/procedurecodeedit.html">Edit Procedure Codes</a></li>
<li>On Fill Sheet window, separate buttons for Print and Email. <a href="../manual/sheetsfillout.html">Filling Out Sheets</a></li>
<li>All treatment plan calculations are saved with a treatment plan, regardless of the 'show' options selected at time of save. <a href="../manual/treatmentplan.html">Treatment Plans</a></li>
<li>Commlog button and fields for email address, SS#, Patient Status, and Billing Type added to the Add Family window. <a href="../manual/familyadd.html">Enter New Patients by Family</a></li>
<li>Saved treatment plans will retain the insurance estimate information of the plan at the time of the save, even if it is later dropped and a discount plan is added instead. <a href="../manual/treatmentplan.html">Treatment Plan</a></li>
<li>Additional property added to TigerView bridge to set the DOB year to a four digit format. <a href="../manual/bridgetigerview.html">TigerView</a></li>
<li>Clinical Summ button added to EHR dashboard. <a href="../manual/ehrdashboard1.html">EHR Dashboard</a></li>
<li>Patient List button added to EHR dashboard. <a href="../manual/ehrdashboard1.html">EHR Dashboard</a></li>
<li> Discount plans can be dropped only. Delete option is removed. <a href="../manual/discountplans.html">Discount Plans</a></li>
<li>Warning message displays when changing the name of a custom patient field. <a href="../manual/custompatientfields.html">Custom Patient Field</a></li>
<li>When there is a version mismatch in a 'restored' database, Open Dental must be relaunched and updated before opening the restored database. <a href="../manual/backuptool.html">Backup/Restore Tool</a><br></li>
<li>Unhandled Exception window has new Copy All, Print, and Quit buttons. Users can only quit Open Dental when a UE appears. <a href="../manual/unhandledexception.html">Unhandled Exceptions</a></li>
<li>Database maintenance fix for missing ebill rows. <a href="../manual/databasemaintenance.html">Database Maintenance</a></li>
<li>Progress bar shows when Database Maintenance closes. <a href="../manual/databasemaintenance.html">Database Maintenance</a></li>
<li>New database maintenance tool to clear an update in progress. <a href="../manual/databasemaintenance.html">Database Maintenance</a></li>
<li>Show Deleted checkbox added to the Provider Merge tool. <a href="../manual/mergeproviders.html">Provider Merge</a></li>
</ul>
		</div>
	</div>
</body>
</html>```
