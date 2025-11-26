# File: ./www.opendental.com/site/version18_1.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 18.1</title>
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
			<h1>Version 18.1</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a>.<br><br>  Version 18.1 was released on 07/16/2018. EHR certified 2014 edition.</p>
<h2>Major Changes</h2>
<ul>
<li>Web Sched New Patient setup changes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html">Setting up Web Sched New Patient</a><ul>
<li>Option to allow patient to select the provider when scheduling an appointment online. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html">Setting up Web Sched New Patient</a></li>
<li>Interface changes to Hosted URL grid on the Web Sched New Patient setup window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html">Setting up Web Sched New Patient</a></li>
<li>Option to show a Web Form after a patient schedules a Web Sched New Patient appointment online. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html">Setting up Web Sched New Patient</a></li>
<li>Associate Web Sched New Patient Appointment definitions (reasons for appointments) with appointment types. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7definitionswebschednewpatappttypes.html">Definitions, Web Sched New Patient Appointment Types</a><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointmenttypes.html">Appointment Types</a></li>
<li>Appointment types associated to Web Sched New Patient Appointment Type definitions determine Web Sched New Patient appointment procedures, length, and time patterns. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointmenttypes.html">Appointment Types</a></li>
<li>Associate operatories to Web Sched New Patient Appointment Types. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7operatories.html">Operatory Setup</a></li>
<li>Option to require patients to verify email address or text number using a verification code when trying to schedule Web Sched New Patient appointments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html">Setting up Web Sched New Patient</a></li>
</ul>
</li>
<li>eConfirmation setup changes. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html">eConfirmation Setup</a><ul>
<li>Create multiple eConfirmation rules. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html">eConfirmation Setup</a></li>
<li>Option in eConfirmations for one-click or two-click confirmation. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html">eConfirmation Setup</a></li>
<li>'Do not send within' option added for eConfirmation rules, eReminder rules, and Patient Portal invites. Allows user to control whether messages are sent for short notice appointments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html">eConfirmation Setup</a></li>
</ul>
</li>
<li>Patient Portal: Additional methods of directing patients to the online patient payment interface. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7portalonlinepayments.html">Online Patient Payments</a></li>
<li>PaySimple credit card processing integration. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paysimple.html">PaySimple</a></li>
</ul>
<br><h2>All Changes by Category</h2>
<p class="MarginBottomZero">Account  </p>
<ul class="MarginBottomGap">
<li>Account Module Preference to 'Allow prepayments to providers'. <a href="https://www.opendental.com/manual181/modulesetupaccount.html">Account Module Preferences</a></li>
<li> Manage Module Preference to 'Insurance Payments to Show auto deposit'. When enabled, an 'auto deposit' will be made when entering a claim payment. <a href="https://www.opendental.com/manual181/modulesetupmanage.html">Manage Module Preferences</a></li>
<li> Auto Deposit Account definition for use with auto deposits of claim payments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7definitionsautodepositaccount.html">Definitions, Auto Deposit Account</a></li>
<li>When creating an invoice, user can select payment plan charges. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7invoice.html">Invoices</a></li>
<li>New Pay Plan Logic option for 'No Charges to Account (rarely used)' causes payment plans to have no affect on account balance. <a href="https://www.opendental.com/manual181/modulesetupaccount.html">Account Module Preferences</a></li>
<li> 'Show Proc Breakdown' option is now user specific. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7account.html">Account Module</a></li>
<li>Make negative adjustments on payment plans. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplanpatient.html">Payment Plan Window</a></li>
<li>Account Module Preference to 'Age negative adjustments by adjustment date'. <a href="https://www.opendental.com/manual181/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Account Module Preference to 'Allow future dated transactions'. <a href="https://www.opendental.com/manual181/modulesetupaccount.html">Account Module Preferences</a></li>
<li>New Definition for Payment Plan categories. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7definitionspaymentplancategories.html">Definitions: Payment Plan Categories</a></li>
<li> Category column added to the Account module Payment Plan grid indicates a payment plan's category. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7account.html">Account Module</a></li>
<li>Filter the TSI A/R Manager to include guarantors with a balance less than or equal to $0. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tsicollections.html">TSI Interface in Open Dental</a></li>
<li>Force unearned types to match the attached paysplit's unearned type when there is not one previously set. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7unearnedallocate.html">Allocating Unearned Income</a></li>
<li>Negative (offsetting) prepayments are now required to be attached to their original prepayments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7unearnedallocate.html">Allocating Unearned Income</a></li>
<li>Sync providers when prepayments are attached to payment splits. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7unearnedallocate.html">Allocating Unearned Income</a></li>
<li>Commlog auto save preference moved from Chart Module Preferences to Account Module Preferences. <a href="https://www.opendental.com/manual181/modulesetupaccount.html">Account Module Preferences</a></li>
<li>Update the Sent status when the user prints a statement from the Fill Sheet window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7statementwindow.html">Statement Window</a></li>
<li> Combo boxes used in custom statement sheets show on printed and saved PDFs. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7statementwindow.html">Statement Window</a></li>
<li>When creating an invoice, user can select payment plan charges. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7invoice.html">Invoices</a></li>
<li> New output text fields for invoicePayPlanLabel and invoicePayPlanValue. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7statementsheets.html">Customizing Statements using Sheets</a><br></li>
</ul>
<p class="MarginBottomZero">Canada  </p>
<ul class="MarginBottomGap">
<li>Option to automatically receive Canadian EOBs. <a href="itrans.html">ITRANS</a></li>
<li>Import carrier information with the click of a button when ITRANS is your default clearinghouse. <a href="canadacarriers.html">Canada Carriers and Networks</a></li>
</ul>
<p class="MarginBottomZero">Chart  </p>
<ul class="MarginBottomGap">
<li>Chart Module Preferences divided into two tabs: Behavior and Appearance. <a href="https://www.opendental.com/manual181/modulesetupchart.html">Chart Module Preferences</a></li>
<li>Chart module preference for Prompt for Planned Appointment. <a href="https://www.opendental.com/manual181/modulesetupchart.html">Chart Module Preferences</a></li>
<li> When a procedure has a treatment area of sextant or arch, user must select an arch or sextant when charting the procedure. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedureedit.html">Procedure Info Window</a></li>
<li>The Chart module's Signed column will now indicate when any form has been electronically signed. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7chart.html">Chart Module</a></li>
<li>Chart module speed enhancements. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7chart.html">Chart Module</a></li>
<li>New automation trigger option, RxCreate, when creating a prescription that is a controlled substance or requires a procedure code. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7automation.html">Automation</a></li>
</ul>
<p class="MarginBottomZero">Clinics  </p>
<ul class="MarginBottomGap">
<li>When copying fees, select multiple clinics as the 'Copy To' criteria by using the clinic picker [...]. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7feeschedulecopy.html">Copying Fees</a></li>
<li>Enter a unique DEA number for each provider/clinic combination. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7providerseditwindow.html">Edit Provider Window</a></li>
<li>Enter a unique DoseSpot User ID for each provider/clinic combination. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7securityusers.html">User Security Profiles</a></li>
<li>When clinics are on, option to force user to select a default clinic when adding a patient. <a href="https://www.opendental.com/manual181/modulesetupfamily.html">Family Module Preferences</a></li>
<li>Retrieved web forms are filtered by clinic. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webformsretrieve.html">Retrieving Web Forms from the Server</a></li>
</ul>
<p class="MarginBottomZero">eServices  </p>
<ul class="MarginBottomGap">
<li>Associate a photo and description with providers that list in the Web Sched Recall and Web Sched New Patient interface. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7providerseditwindow.html">Edit Provider Window</a></li>
<li>When sending a single text message, and the monthly spending limit is reached, user will be prompted to increase the limit. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7textmessages.html">Sending General Text Messages</a></li>
<li>Option to use long date format in messages. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eservicesmisctab.html">eServices Setup Miscellaneous Tab</a></li>
<li>Web Sched New Patient  <ul>
<li>Option to allow patient to select the provider when scheduling an appointment online. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html"> Setting up Web Sched New Patient</a></li>
<li>Interface changes to Hosted URL grid on the Web Sched New Patient setup window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html">Setting up Web Sched New Patient</a></li>
<li>Option to show a Web Form after a patient schedules a Web Sched New Patient appointment online. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html">Setting up Web Sched New Patient</a></li>
<li>Associate Web Sched New Patient Appointment definitions (reasons for appointments) with appointment types. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7definitionswebschednewpatappttypes.html">Definitions, Web Sched New Patient Appointment Types</a><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointmenttypes.html">Appointment Types</a></li>
<li>Appointment types associated to Web Sched New Patient Appointment Type definitions determine Web Sched New Patient appointment procedures, length, and time patterns. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointmenttypes.html">Appointment Types</a></li>
<li>Associate operatories to Web Sched New Patient Appointment Types. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7operatories.html">Operatory Setup</a></li>
<li>Option to require patients to verify email address or text number using a verification code when trying to schedule Web Sched New Patient appointments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html">Setting up Web Sched New Patient</a></li>
</ul>
</li>
<li>Web Sched Recall  <ul>
<li>Set a default confirmation status for appointments scheduled using Web Sched Recall. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschedrecallsetup.html">Setting up Web Sched Recall</a></li>
<li>Option to allow patient to select the provider when scheduling an appointment online. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webschedrecallsetup.html">Setting up Web Sched Recall</a></li>
<li>New alert notifies staff when patient makes an appointment online using Web Sched Recall. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7alerts.html">Alerts</a></li>
</ul>
</li>
<li> eReminders and eConfirmations</li>
<ul>
<li>Create an unlimited number of eConfirmation rules. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html">eConfirmation Setup</a></li>
<li>Option in eConfirmations for one-click or two-click confirmation. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html">eConfirmation Setup</a></li>
<li>'Do not send within' option added for eConfirmation rules, eReminder rules, and Patient Portal invites. Allows user to control whether messages are sent for short notice appointments. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html">eConfirmation Setup</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ereminderssetup.html">eReminders Setup</a></li>
<li>When a patient has multiple appointments on the same day, only their earliest appointment will show in eConfirmations and eReminders. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html">eConfirmation Setup</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ereminderssetup.html">eReminders Setup</a></li>
<li>Renamed the Preferred send order option in the Edit eConfirmation Rule window to Preferred Confirm Method. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html">eConfirmation Setup</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ereminderssetup.html">eReminders Setup</a></li>
</ul>
<li>Patient Portal: Additional methods of directing patients to the online patient payment interface. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7portalonlinepayments.html">Online Patient Payments</a><ul>
<li>Send patients directly to a Hosted Payment URL so they can make a payment online. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7portalhostedbyod.html">Setting up the Patient Portal</a></li>
<li>On customized statements, include a clickable URL patients can use to access online payments (statementURL or statementShortURL). <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7statementsheets.html">Customizing a Statement using Sheets</a></li>
<li>When emailing statements from the billing list, the email message can contain a clickable link to the online patient payment interface. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7billingdefaults.html">Billing Defaults</a></li>
<li>When generating statements from the billing list, option to also send a text message that includes a clickable link to the online patient payment interface. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7billing.html">Billing Options</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7billingdefaults.html">Billing Defaults</a></li>
</ul>
</li>
<li>Web Forms:  <ul>
<li>Patients can sign Web Forms that contain a signature box. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webformspatient.html">What Patients See when Filling out Web Forms</a></li>
<li>Prev, Next, Submit buttons in the mobile view moved to the top of the window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7webformspatient.html">What Patients See when Filling out Web Forms</a></li>
</ul>
</li>
</ul>
<p class="MarginBottomZero">Insurance  </p>
<ul class="MarginBottomGap">
<li>ERAs that are split by procedure can be matched and processed together. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7era.html">Processing an ERA</a></li>
<li>Tooth range added to box 24A of the medical claim form (SystemandTeeth). <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7claimform1500.html">HCFA 1500 Claim Form</a></li>
<li>The Batch Insurance (EOB) window carrier filter now finds all carriers that contain the search term. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7claimpaymentbatch.html">Batch Insurance Payments</a></li>
<li>Option to enable/disable ERA downloads for ClaimConnect or Electronic Dental Services (EDS). <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eclaimsclaimconnect.html">ClaimConnect</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7eclaimseds.html">Electronic Dental Services (EDS)</a></li>
<li>New PPO Fixed Benefit plan type for insurance plans. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7planppofixed.html">In-Network Fixed Benefit Plans</a></li>
<li>New FixedBenefit type for Fee Schedules. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7feeschedules.html">Fee Schedules</a></li>
<li>New option on the Clearinghouse window to retrieve reports at a set time. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7clearinghouses.html">Clearinghouse Setup</a></li>
</ul>
<p class="MarginBottomZero">Reports  </p>
<ul class="MarginBottomGap">
<li>New Discount Plan report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportdiscountplan.html">Discount Plan Report</a></li>
<li>Incomplete Procedure Notes report is non-modal. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportincompleteprocnote.html">Incomplete Procedure Notes Report</a></li>
<li>Proc Code column added to Claims not Sent report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportclaimsnotsent.html">Claims Not Sent Report</a></li>
<li>Broken Appointments graphic report allows user to select D9986, D9987 or both. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportsgraphicsetup.html">Graphic Reports</a></li>
<li>Enhancements to the Finance Charge Report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportfinancecharge.html">Finance Charge Report</a></li>
<li>Run released query favorites via the main menu, User Query sub menu. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7queryfavorites.html">Query Favorites</a></li>
<li>In the Appointments report, view appointments scheduled using Web Sched ASAP. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportappts.html">Appointments Report</a></li>
<li>W/O Est column renamed W/O Change and behavior updated. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportaging.html">Aging of AR Report</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportinsaging.html">Insurance Aging Reports</a></li>
<li>Check box on the Aging of A/R report to 'Age negative adjustments'. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportaging.html">Aging of A/R Report</a></li>
<li>Option to prompt user to enter variables (SET statements) when running a query favorite. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7queryfavorites.html">Query Favorites</a></li>
<li>Custom aging report does not include patients with a status of deceased. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reportcustomaging.html">Custom Aging Report</a></li>
</ul>
<p class="MarginBottomZero">Security  </p>
<ul class="MarginBottomGap">
<li>In the main menu, the Setup, Security menu option has sub menu options: Security Settings (opens the main Security window) and Add User (add a new User Security Profile). <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mainmenu.html">Main Menu</a></li>
<li>Add User permission allows user to add a new user security profile via the Add User menu option, even if they don't have the Security Admin permission. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Security Permissions</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7securityusers.html">User Security Profiles</a></li>
<li>In Global Security Settings, set a default user group to apply to new users added via the Add User menu option. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7securitysettings.html">Global Security Settings</a></li>
<li>Edit EO or EC Procedures permission controls whether or not a user can edit procedures with an existing other or existing current status. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Security Permissions</a></li>
<li>Single sign on available when using the Middle Tier. <a href="middletier.html">Middle Tier</a></li>
<li>View Claim permission controls whether or not a user can view and create claims. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Security Permissions</a></li>
<li>Treat Plan Sign permission controls whether or not a user can sign a treatment plan. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Security Permissions</a></li>
<li>Discount Plan Edit permission is tracked in the audit trail. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7audittrail.html">Audit Trail</a></li>
<li>Repeating Charge Tool permission controls whether or not a user can run the repeating charge tool. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7permissions.html">Security Permissions</a></li>
<li>A password is required when adding a new user and passwords must be 'strong'. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7securitysettings.html">Global Security Settings</a><br></li>
</ul>
<p class="MarginBottomZero">Treatment Plan  </p>
<ul class="MarginBottomGap">
<li>Option to add a PPO/Allowed Fee column to Treatment Plan grid. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7displayfields.html">Display Fields</a></li>
<li>Create planned appointments from the Treatment Plan module. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7apptplanned.html">Planned Appontments</a></li>
<li>In Definitions, the Treatment Plan Priority category will display item order in second column. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7definitionstreatplanpriorities.html">Definitions, Treat'Plan Priorities</a></li>
<li>tpPatPortionEst output text field available for treatment plans using sheets. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7outputtextfields.html">Output Text Fields</a></li>
</ul>
<p class="MarginBottomZero">Miscellaneous  </p>
<ul class="MarginBottomGap">
<li>Associate ICD10 codes to prescriptions. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7newcrop.html">Writing and Transmitting Legacy eRx Prescriptions</a></li>
<li>Option to filter the Confirmation List by appointment confirmation status. Minor enhancements to the Confirmation List window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7confirmationlist.html">Confirmation List</a></li>
<li>ASAP List, Recall tab lists all patients with a recall marked ASAP, even if they have received a recall reminder already. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7asaplist.html">ASAP List</a></li>
<li>Select where in Open Dental individual emails show/don't show. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailinbox.html">Email Inbox</a></li>
<li>Email template window has a scrollbar. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailtemplates.html">Email Templates</a></li>
<li>Training Videos menu item added to Help menu. Links to the Open Dental website page for webinars. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mainmenu.html">Main Menu</a></li>
<li>When using Letter Merge, set the default Image category for generated letters. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7lettermerge.html">Letter Merge</a></li>
<li>Flag a carrier to reverse electronic co-insurance benefit percentages.<a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7carriers.html"> Insurance Carriers List</a></li>
<li>In the Central Enterprise Management Tool (CEMT), Display Fields option added to the Setup menu. Allows user to customize the columns that show when searching for patients. <a href="central.html">Central Enterprise Management Tool (CEMT)</a>.</li>
<li>New Miscellaneous Setup option for 'Middle tier server caches fees'. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7miscsetup.html">Miscellaneous Setup</a></li>
<li> Columns added to the Accounting Transaction History window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7transactionhistory.html">Accounting Transaction History</a><br></li>
<li>Date added to the printed accounting reconcile report. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7reconcile.html">Reconciling Accounting Transactions</a></li>
<li>Option in the Recall List to view patients whose recall type conflicts with the procedures on a scheduled recall appointment. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7recalllist.html">Recall List</a></li>
<li>In the Recall List, the Recently Contacted tab lists patients who have been sent a recall reminder within a date range. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7recalllist.html">Recall List</a></li>
<li>Tasks can be sent to multiple task lists. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasks.html">Tasks</a></li>
<li>New table called Entrylog. <a href="programmingresources.html">Programming Resources</a>, Database Documentation</li>
<li> Middle Tier speed improvements. <a href="middletier.html">Middle Tier</a></li>
<li>Exam sheets can remain open while working in other windows.<a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7examsheets.html">Exam Sheets</a></li>
<li>Quickly view and print employee schedules from the Manage module. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7scheduleview.html">Viewing Employee Schedules</a></li>
<li>Overhaul of the Reseller Portal.</li>
<li>Copying a task will also copy task number and patient number. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7taskswindow.html">Task Window</a></li>
<li>Mark as Read right click menu option for tasks. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasksarea.html">Task Lists and Tasks</a></li>
<li>When searching tasks, option to use a report server to avoid slowness. <a href="../manual/tasksearch.html">Task Search</a></li>
<li>View daily production goals in the Appointments module. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7productiontotals.html">Production Totals</a></li>
<li>Ortho Insight 3D Bridge. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgeorthoinsight.html">Ortho Insight 3D Bridge</a></li>
<li>When using Podium and a patient's Text OK status is set to No, an invitation will be sent via email if patient has an email address. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgepodium.html">Podium Bridge</a></li>
<li>The Backup tool has a new Archive tab. Enhancements to interface. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7backuptool.html">Backup and Archive Tool</a></li>
<li>Updates to how the Appointments module is refreshed. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointments.html">Appointments Module</a></li>
<li>Option to hide DBM methods. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li>ProcedureLogTPAttachedToClaim DBM moved to Old tab. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li>InsSubNumMismatchPlanNum DBM moved to Old tab. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li>ProcedurelogMultipleClaimProcForInsSub DBM moved to Old tab. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li>DateNoZeros DBM moved to the Old tab. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li> CanadaCarriersCdaMissingInfo DBM moved to Old tab. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a></li>
<li>Windows F10 key functionality is suppressed main modules. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mainmenu.html">Main Menu</a></li>
<li>In Replication Setup, the IP address is auto-poputlated in the server description. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7replicationservers.html">Replication: Add Servers and Designate a Slave Monitor</a></li>
<li> Diagnostics button added to the About window. Shows general system settings. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7aboutwindow.html">About Window</a></li>
</ul>

</div>	
	</div>
</body>
</html>```
