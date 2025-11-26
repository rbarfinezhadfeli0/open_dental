# File: ./www.opendental.com/site/version16_4.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 16.4</title>
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
			<h1>Version 16.4</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a>.</p>
<p>Version 16.4 was released on 3/31/2017. EHR certified 2014 edition.</p>
<p class="MarginBottomZero">Account module  </p>
<ul class="MarginBottomGap">
<li>Create and assign discount plans that use adjustments to reduce the full procedure fee (e.g. for patients that do not have insurance). <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7discountplans.html">Discount Plans</a></li>
<li>Option to email a PDF of a receipt to a patient after processing a credit card charge using PayConnect. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7payconnectpaymentwindow.html">Process a Credit Card Payment</a></li>
<li>EMV transaction support added for PayConnect. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7payconnectpaymentwindow.html">PayConnect</a></li>
<li>Invoices that use sheets have a new grid option that shows payments made the same day, payments made towards procedures on the invoice, and the remaining balance. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7statementsheets.html">Customize a Statement Using Sheets</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7invoice.html">Invoices</a></li>
<li>Invoices that use sheets have four new output fields. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7statementsheets.html">Customize a Statement Using Sheets</a></li>
<li>Statements that use sheets have option to include provider and invoice number in the StatementMain grid. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7displayfields.html">Display Fields</a></li>
<li>Credit card token information is saved for all online payments made via the portal (whether logged in or not). <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7portalonlinepayments.html">Patient Portal: Online Patient Payments</a></li>
<li>Click an adjustment in the account ledger to highlight associated procedures. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7account.html">Account Module</a></li>
<li>If a recurring charge is denied, a declined transaction will show in the account ledger. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7recurringcharges.html">Recurring Charges</a></li>
<li>Option to only view future dated line items in the payment plan Amortization Schedule. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplanpatient.html">Payment Plan Window</a></li>
<li>Preference determines default setting for the Exclude past activity checkbox on the Payment Plan window. <a href="https://www.opendental.com/manual174/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Option to list all procedures that have not been explicitly accounted for on the Payment Plan Procedures and Credits window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplantxcredits.html">Payment Plan Procedures and Credits window</a></li>
</ul>
<p class="MarginBottomZero">Appointments  </p>
<ul class="MarginBottomGap">
<li>Attach all treatment planned procedures to an appointment with a single click. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7aptedit.html">Edit Appointment Window</a></li>
<li>Single click on a square in the appointment length time bar to quickly increase appointment length. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7aptedit.html">Edit Appointment Window</a></li>
<li>Option to print all routing slips by day or appointment view using the printer icon in the Appointments module. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointments.html">Appointments Module</a></li>
<li>Option to include / not include custom recall types with special recall type appointments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7recalltypes.html">Recall Types</a></li>
<li>Preference determines whether Daily Production is based on appointments or provider bars in the appointment view. <a href="https://www.opendental.com/manual174/modulesetupappts.html">Appointment Module Preferences</a></li>
<li>Preference blocks user from creating appointments with no attached procedures. <a href="https://www.opendental.com/manual174/modulesetupappts.html">Appointment Module Preferences</a></li>
<li>Preference blocks user from setting appointments complete if no procedures are attached. <a href="https://www.opendental.com/manual174/modulesetupappts.html">Appointment Module Preferences</a></li>
<li>Preference blocks user from setting appointments complete if they have a future date. <a href="https://www.opendental.com/manual174/modulesetupappts.html">Appointment Module Preferences</a></li>
<li>Option to enable insurance frequency checking. <a href="https://www.opendental.com/manual174/modulesetupappts.html">Treatment Plan Module Preferences</a></li>
<li>Insurance frequency conflicts can be checked when scheduling an appointment. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insfrequencylimitations.html">Insurance Frequency Checking</a></li>
<li>Consider insurance frequency limitations when calculating insurance estimates in the Treatment Plan module. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7treatmentplan.html">Treatment Plan</a></li>
<li>Customize which procedure codes are affected by insurance frequency limitations. <a href="https://www.opendental.com/manual174/modulesetuptreat.html">Treatment Plan Module Preferences</a></li>
<li>Right click on an operatory header to show provider information. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointments.html">Appointments Module</a></li>
<li>Past due tab added to Insurance Verification List. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insverifylist.html">Insurance Verification List</a></li>
<li>Option to consider benefit year renewal date when determining whether insurance verification is needed. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insverifylistsetup.html">Insurance Verification Setup</a></li>
<li>Combine duplicate operatories. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7operatories.html">Operatory Setup</a></li>
<li>Web Sched Recall only schedules 'special' recall types (prophy/perio). <a href="websched.html">Web Sched Recall</a></li>
</ul>
<p class="MarginBottomZero">Chart module  </p>
<ul class="MarginBottomGap">
<li>Filter prescription templates on the Select Prescription window by drug name or dispensed amount. Opt to show/not show controlled substances. Search for templates using multiple terms. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7rx.html">New Rx / Write a Prescription</a></li>
<li>When accessing the Problem List from the Medical area, all of the patient's current, active problems are highlighted. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7problempatient.html">Patient Problem List</a></li>
<li>Preference determines whether or not an insurance estimate is created when a procedure is entered with a previous date and status of 'complete'. <a href="https://www.opendental.com/manual174/modulesetupchart.html">Chart Module Preferences</a></li>
<li>Click a button to digitally sign Procedure Notes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedureedit.html">Editing Procedures</a></li>
<li>Ceramic bridge autocode added to default auto codes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurecodetools.html">Procedure Code Tools</a></li>
<li>Procedure buttons for ceramic codes added to default procedure buttons. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurecodetools.html">Procedure Code Tools</a></li>
</ul>
<p class="MarginBottomZero">Clinics:  </p>
<ul class="MarginBottomGap">
<li>Option to add a clinic column to the progress notes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7showtabchart.html">Customizing Chart Views</a></li>
<li>Option to 'hide' a clinic so it no longer shows an option in various dropdowns. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7clinicsetup.html">Clinic Names, Contact Info, and Defaults</a></li>
<li>Option to show or hide 'hidden' clinics in the Clinics window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7clinicsetup.html">Clinic Names, Contact Info, and Defaults</a></li>
<li>Filter the Deposit Slips window by clinic. New clinic column. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7depositslip.html">Deposits and Deposit Slips</a></li>
<li>For each clinic, set a default Rx sheet that is used for prescriptions printed on a single page. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetdefaults.html">Setting Sheet Defaults</a></li>
<li>Option to assign clinics (classes) to deposits in QuickBooks. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7quickbooks.html">QuickBooks</a></li>
</ul>
<p class="MarginBottomZero">Modified Stage 2:  </p>
<ul class="MarginBottomGap">
<li>EHR dashboard enhanced to give quick and easy access to items that are required for EHR Modified Stage 2. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrdashboard1.html">EHR Dashboard</a></li>
<li>Modified Stage 2 added as a 'stage' option for global and provider meaningful use stage. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrmustagesetting.html">Setting Your MU Stage</a></li>
<li>Secure Messaging calculation updated in accordance with Modified Stage 2 calculation requirements. <a href="ehrsecuremsg.html">EHR Secure Messaging</a></li>
</ul>
<p class="MarginBottomZero">Orthodontics  </p>
<ul class="MarginBottomGap">
<li>Generate periodic ortho claims based on a set frequency and fee using the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7orthoautoclaim.html">Auto Ortho Tool</a>. </li>
<li>All orthodontic setup options accessible on a new Ortho Setup option via Main Menu, Setup. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7orthosetup.html">Ortho Setup</a></li>
<li>New Ortho Case tab available in the Account module. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7orthocase.html">Ortho Case</a></li>
<li>View Ortho Case information in the ortho chart. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7orthochart.html">Ortho Chart</a></li>
<li>Enter plan information about orthodontic claims on the Edit Insurance Plan window, Ortho tab. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insplan.html">Edit Insurance Plan window</a></li>
<li>Entering data on an Ortho Chart tab will populate all tabs with that date and data in corresponding columns. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7orthochart.html">Ortho Chart</a></li>
<li>Ortho chart toolbar button has dropdown options to select specific tabs. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7chart.html">Chart Module</a></li>
<li>Preference to block users from entering claim payments on claims generated using the Auto Ortho Tool. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7orthosetup.html">Ortho Setup</a></li>
</ul>
<p class="MarginBottomZero">Reports  </p>
<ul class="MarginBottomGap">
<li>Sort the Outstanding Insurance Claims report by column header. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportoutins.html">Outstanding Insurance Claims Report </a></li>
<li>Receivables Breakdown report takes payment plans into account when using line-item payment plan accounting. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportreceivablesbreakdown.html">Receivables Breakdown Report</a></li>
<li>Jump to a specific report page in Complex Reports. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportcomplex.html">Printing Reports - Complex Report System</a></li>
<li>Enhancements to Treatment Finder Report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reporttreatfinder.html">Treatment Finder Report</a></li>
<li>'Unearned' provider replaces 'Include Unearned' checkbox in the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportprodinc.html">Production and Income</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportdailypayments.html">Payments</a> and <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportprovpayroll.html">Provider Payroll Reports</a>.</li>
</ul>
<p class="MarginBottomZero"><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7salestax.html">Sales Tax</a>: Apply a sales tax adjustment, based on a percentage, to selected procedures.  </p>
<ul class="MarginBottomGap">
<li>Set a default adjustment type to apply to sales tax adjustments. <a href="https://www.opendental.com/manual174/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Set the sales tax percentage to use for sales tax calculation. <a href="https://www.opendental.com/manual174/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Sales Tax adjustment type added to Defintions, Adj Types when it doesn't already exist. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7definitionsadjtypes.html"> Definitions - Adj Types</a></li>
<li>Dropdown option on Adjustments toolbar button to 'Apply Sales Tax'. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7account.html">Account Module</a></li>
</ul>
<p class="MarginBottomZero">Security  </p>
<ul class="MarginBottomGap">
<li>Option to hide 'hidden' users in the Security window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7security.html">Security</a></li>
<li>MobileWeb permission restricts users from logging in the Mobile Web. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li>PatPlanCreate permission logs an audit trail entry when a patient insurance plan is created. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li>PatPriProvEdit permission restricts users from editing a patient's primary provider. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li>PatientBillingEdit permission for changing billing type and appointment scheduling checkbox. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li>Preference to require strong passwords to also include a special character. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7security.html">Security</a></li>
<li>ReferralEdit permission restricts users from editing or deleting a referral in the Referral List. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li>Permission to edit procedure notes and signature controlled by the Edit Completed Procedure (limited) permission instead of the full. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Permissions</a></li>
<li>Insurance Plan Edit permission is required to enter initial plan information for brand new insurance plan from the Add Family window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7familyadd.html">Enter New Patients by Family</a></li>
</ul>
<p class="MarginBottomZero">Tasks  </p>
<ul class="MarginBottomGap">
<li>Description field in Task is expandable. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasks.html">Create Tasks</a><br></li>
<li>Task search preference to limit search results to 50. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasksearch.html">Searching for Tasks</a><br></li>
<li>View all tasks attached to the selected patient in the Patient Tickets tab. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasksarea.html">Tasks Area</a><br></li>
<li>Open Tickets and Patient Tickets tabs renamed to Open Tasks and Patient Tasks. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasksarea.html">Tasks Area</a></li>
<li>Enhancements to task list cut and paste behavior. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasksarea.html">Tasks Area</a></li>
</ul>
<p> Enhanced Select Patient search window to return exact matches first. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7patientselect.html">Selecting Patients</a><br>  Child Prophy type removed from Setup Recall and Confirmation window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7recallsetup.html">Recall and Confirmation List Setup </a><br>  Insurance plan information on the Edit Insurance Plan window divided into tabs. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insplan.html">Edit Insurance Plan Window</a><br>  View license information from the About window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7aboutwindow.html">Open Dental About Window</a><br>  Emergency contact information added as importable input fields in medical history forms. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetsmedicalhistory.html">Sheets: Medical History Setup</a><br>  Option to store images on an FTP site using SFTP. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paths.html">Data Paths</a><br>  Implant graphic for teeth with implants shows on the Graphical Perio Chart. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7perio.html">Perio Chart</a><br>  Teeth with implants are indicated with an 'i' in the perio chart. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7perio.html">Perio Chart</a><br> Custom bridges can now include gender, patient's primary provider, and patient's clinic. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgecustom.html">Custom Bridges</a><br> Categorize auto notes by folder and reorder the list. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7definitionsautonotes.html">Definitions: Auto Note Categories</a><br> Collapse/expand all auto notes with a checkbox. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7autonotesetup.html">Set up Auto Notes </a><br> Only the computer that starts an update and admin computers can override an 'update in progress'. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7update.html">Updating Open Dental Versions</a><br>  Procedure Code Tools warnings show before running a tool that will overwrite customized settings. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurecodetools.html">Procedure Code Tools</a><br>  Plug-in framework enhanced with virtual exception method. <a href="plugins.html">Plug In Framework</a><br>  Choose where custom patient fields and custom appointment fields show. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7custompatientfields.html">Custom Patient Fields</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointmentfields.html">Custom Appointment Fields</a><br>  Line numbers in the wiki scroll with the code text. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7wikiaddedit.html">Wiki Page Add/Edit</a><br>  Speed enhancements to appointment views. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointments.html">Appointments</a><br>  Subscribe users to alerts in the CEMT. <a href="cemtsecurity.html">CEMT Security</a><br>  Search options added to the Problem List window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7problemmaster.html">Problem List</a><br>  A middle tier server can host multiple database connections. <br>  Kiosk manager identifies each kiosk by computer name and session name. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7kioskpatient.html">Launch the Kiosk</a><br>  Enhancements to keyboard controls for auto notes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7autonotes.html">Using Auto Notes</a><br>  Construct a web form URL that links multiple forms together, creates a redirect, and/or associates a clinic. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webformsupload.html">Upload Web Forms</a><br>  Update web forms without changing the URL. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webformsupload.html">Upload Web Forms</a><br>  Update the claim tracking status for multiple claims at once using the Outstanding Claims Report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportoutins.html">Outstanding Insurance Claims Report</a><br>  EDS clearinghouse uses web calls to retrieve dental claims. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eclaimseds.html">Electronic Dental Services</a><br>  New automation trigger and action can restrict ability to schedule appointments based on billing type. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7automation.html">Automation</a><br>  Fill Sheet window control panel moved to bottom of window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetsfillout.html">Filling Out Sheets</a><br>  Set a default sheet to use for prescriptions printed on a single page (Rx). <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetdefaults.html">Setting Sheet Defaults</a><br>  Superfamilies can be sorted by sorted last names (instead of first). <a href="https://www.opendental.com/manual174/modulesetupfamily.html">Family Module Preferences</a><br>  Field added as an option for a message segment: 'messageTypeNoStruct'. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7hl7genericmsg.html">Generic HL7 Message Structure</a>.<br>  Patient number added as criteria that links patient clones with the original patient. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7patientclone.html">Patient Clone</a><br>  Edit Patient Information - Other tab indicates patient's clone relationship and allows user to swap or break the relationship. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7patientedit.html">Edit Patient Information - Other Tab</a><br>  Public Health tab on Edit Patient Information window has enhanced race/ethnicity options based on CDCREC codes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7patienteditpublichealth.html">Public Health Tab</a><br>  Public Health tab on Edit Patient Information window has areas to document sexual orientation and gender identity. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7patienteditpublichealth.html">Public Health Tab</a><br>  Move subscriber confirmation message enhanced for clarity. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7subscribersmove.html">Move Subscribers</a><br>  Database maintenance check for pay splits attached to deleted prepayments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a><br>  Breakdown column added to database maintenance window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a><br>  Procedures can have only one estimate per insurance plan. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurefinancial.html">Procedure Info - Financial Tab</a><br>  Message prompts when enabling eRx enhanced.<br>  Print tool button added to eRx interface to allow printing of Prescriber Report for Ohio requirements. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7newcrop.html">Ensora eRx / Prescription</a><br>  TreatPlanOrphanedProcTps DBM makes dummy treatment plans for treatment planned procedures that were once attached to a saved treatment plan that no longer exists. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></p>

</div>	
	</div>
</body>
</html>```
