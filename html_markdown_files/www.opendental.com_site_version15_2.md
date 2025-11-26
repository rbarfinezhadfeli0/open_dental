# File: ./www.opendental.com/site/version15_2.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 15.2</title>
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
			<h1>Version 15.2</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a>.</p>
<p>Version 15.2 was released on 7/20/2015.</p>
<p><b>Pay Split Manager:</b> New tool to manage and allocate payment income to providers and procedures. Improved automatic payment split logic that is based on FIFO. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7incometransfermanager.html">Income Transfer Manager</a></p>
<p class="MarginBottomZero"><b>Payment Plan Improvements:</b><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplanpatient.html">Old Payment Plan</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportpaymentplan.html">Payment Plan Report</a></p>
<ul class="MarginBottomGap">
<li>Payment plan amortization schedule shows provider, interest, and total amounts.</li>
<li>Payment schedule, down payment, and number of payments or monthly payment amount are stored in database.</li>
<li>Payment plan changes are not saved until user clicks OK.</li>
<li>Payment plan report has options to filter by date range, provider, and clinic, show family balance, and show insurance payment plans and/or patient payment plans. Generated report calculates total amounts by column, sorts by provider, and groups by clinic. Uses <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportcomplex.html">Complex Report System</a>.</li>
</ul>
<p class="MarginBottomZero"><b>Waiting Room: </b><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7waitingroom.html">Waiting Room</a>, <a href="https://www.opendental.com/manual174/modulesetupappts.html">Appointment Module Preferences</a></p>
<ul class="MarginBottomGap">
<li>Use text color to flag patients whose wait time has exceeded a certain value. </li>
<li> Only show patients in the waiting room if their appointment is scheduled in an operatory that shows in the current appointment view.</li>
</ul>
<p class="MarginBottomZero"><b>Broken Appointments:</b></p>
<ul class="MarginBottomGap">
<li>Automation for missed appointments now uses the new ADA procedure code D9986. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7apptbreak.html">Break an Appointment</a></li>
<li>Preference to automatically show the Commlog window when an appointment is broken using procedure code D9986. <a href="https://www.opendental.com/manual174/modulesetupappts.html">Appointment Module Preferences</a></li>
<li>New broken appointment report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportbrokenappt.html">Broken Appointment Report</a></li>
</ul>
<p class="MarginBottomZero"><b>eServices: </b>Easier identification and management of Listener Service status. </p>
<ul class="MarginBottomGap">
<li> Listener Service status is monitored regularly and tracked. </li>
<li>If the Listener Service goes down, user is notified in the interface that eServices are down. </li>
<li>Restart the Listener Service from the eServices Setup window, Listener Service tab.</li>
<li>New eServices option in the main menu. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mainmenu.html">Main Menu</a></li>
<li>eServicesSetup permission. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permission</a></li>
</ul>
<p class="MarginBottomZero"><b>Central Enterprise Management Tool: </b><a href="cemtsetup.html">Central Enterprise Management Tool Setup</a></p>
<ul class="MarginBottomGap">
<li>Create CEMT specific users with their own user groups and permissions and sync to other databases.</li>
<li>Modify the global lock date. New global lock date preference. <a href="cemtsecurity.html">CEMT Security</a></li>
<li>CEMT user data only visible on audit trail entries and log on window. </li>
<li>Create custom connection groups. <a href="cemtconnections.html">CEMT Database Connections</a></li>
</ul>
<p><b>Minor Changes:<br></b>Orthodontic total months for 5010 e-claims. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7claimtabgeneral.html"> Claim - General Tab</a><br>  Finance Charge Report allows entering a date range. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportfinancecharge.html">Finance Charge Report</a><br>  Email Inbox: Preview new e-mails, interface enhancements. <br>  OpenDentalWebConfig.xml file is auto-generated.<br>  Open Dental services are automatically stopped when updating versions, then restarted once update is complete. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7update.html">Update Open Dental Versions</a><br>  Set the default provider for a clinic. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7clinicsetup.html">Clinic Setup</a><br>  Attempts to clock in trigger an alert if the pay period doesn't exist. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7timeclock.html">Time Clock</a><br>  Unscheduled List is non-modal (e.g. access other windows while Unscheduled List is open). <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7unscheduled.html">Unscheduled List</a><br>  Send an unscheduled appointment from the Unscheduled List to the PinBoard. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7unscheduled.html">Unscheduled List</a><br>  Jump to the Chart module from the Unscheduled List. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7unscheduled.html">Unscheduled List</a><br>  Planned Appointment Tracker is non-modal (e.g. access other windows while Planned Appointment Tracker is open). <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appttracker.html">Planned Appointment Tracker</a><br>  Send an unscheduled planned appointment from the Planned Appointment Tracker to the PinBoard. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appttracker.html">Planned Appointment Tracker</a><br>  Jump to the Chart module from the Planned Appointment Tracker. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appttracker.html">Planned Appointment Tracker</a><br>  Backup tool checks for sufficient disk space on backup device. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7backuptool.html">Backup/Restore Tool</a><br>  Ability to change the date of EHR measure events. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrmeasureeventedit.html">Edit Measure Event Dates</a><br>  EHR measure event audit trail shows any date changes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrmeasureeventedit.html">Edit Measure Event Dates</a><br>  EHRMeasureEventEdit permission. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permission</a>Disable the process signal interval during periods of inactivity. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7miscsetup.html">Miscellaneous Setup</a><br>  Reset all tooth movement values to zero. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7movements.html">Tooth Movement</a><br>  Search for deposit entries by payment amount or check number. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7depositslip.html">Deposits and Deposit Slips</a><br>  View total count of selected deposit line items. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7depositslip.html">Deposits and Deposit Slips</a><br>  Same for entire family checkbox for wireless phone, work phone, and email. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7patientedit.html">Patient Edit</a><br>  Invoice note allows multiple lines. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7billingdefaults.html">Billing Defaults</a><br>  LabCorp HL7 interface for inbound messages. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7hl7labcorp.html">LabCorp HL7</a><br>  Genoray's Triana bridge. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgegenoraytriana.html">Genoray Triana</a><br>  Preference determines when e-claims on the Send Claims window are validated. <a href="https://www.opendental.com/manual174/modulesetupmanage.html">Manage Module Preferences</a><br>  Use Database Maintenance to correct invalid default provider numbers on procedure codes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a><br>  Use Database Maintenance to find insurance payments that are not marked as partial and have no attached claims. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a><br>  Remote connect to Open Dental using Remote Support with Code in Main Menu, Help. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mainmenu.html">Main Menu </a><br></p>

</div>	
	</div>
</body>
</html>```
