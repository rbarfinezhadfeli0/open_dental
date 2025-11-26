# File: ./www.opendental.com/site/version6_8.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 6.8</title>
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
			<h1>Version 6.8</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<p>Version 6.8 was released on 12/22/2009.<br></p>
<p><b>Appointment Module:</b> Day and week navigation buttons enhanced. Search box is more visible. In appointment views, added option to only show operatories for scheduled providers. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointments.html">Appointments</a>. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointmentviews.html">Appt Views</a>.</p>
<p><b>Security:</b> Added permission for TreatPlanEdit, includes date limitation. Added permission for viewing Production and Income report. Added permission to prevent timecard entry deletion. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7security.html">Security</a>.</p>
<p><b>Billing:</b> Added filter to exclude families with procedures not sent to insurance. This is important for larger organizations where billing is done in a separate department. Without this filter, the billing department could accidentally send statements before the claims were created. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7billing.html">Billing</a>. </p>
<p><b>Graphical Chart:</b> Save a copy of the 3D graphical chart to the Images module. These snapshots are especially important for pedo offices. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7chart.html">Chart</a> module.</p>
<p><b>Replication:</b> All primary and foreign keys have been increased from 32 bit to 64 bit, both in the database and in the program. Users can now set key ranges for each server, and Open Dental is aware of which server it 's connected to. All remaining tables have been enabled for replication. Different AtoZ folders can be set for each server. <a href="replication.html">Replication</a>.</p>
<p><b>Writeoffs:</b> The user now has full control over the estimated writeoffs that show in the "discount" column in the TP module. They can be overridden. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7claimprocedure.html">Claim Proc</a>.</p>
<p><b>Unearned Income:</b> If using accrual basis accounting, paysplits can now be assigned an unearned income type such as prepayment or refund due. Total unearned income shows at the top of the Account module and in two new reports. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7accrual.html">Accrual</a>.</p>
<p><b>Recall:</b> Added option for max number of reminders. Recall list can now be filtered by number of reminders. Recall list stays open and can be minimized. Commlog (reminder) entries can be made more easily from recall list. Recall for a patient can be disabled until their balance drops below a certain level, and it can also be disabled for a certain amount of time. Manual recalls which do not use triggers can now also be used. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7recall.html">Recall</a>. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7recalllist.html">Recall List</a>.</p>
<p><b>Tasks:</b> Notes can be appended to a task even if someone else in the office already changed the note. No more annoying message about not allowed to change. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasklists.html">Tasklist</a>.</p>
<p><b>Confirmations List:</b> Confirmations can now be e-mailed. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7confirmationlist.html">Confirmation List</a>.</p>
<p><b>Bridges:</b> Added bridge to <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgeewoo.html">Ewo</a>.</p>
<p><b>Minor Changes:</b><br>  Added group name and group number to display in Family module.<br>  Email recall added variables for NameF and NameFL. <br>  Age added to letter merge. <br><br></p>

</div>	
	</div>
</body>
</html>```
