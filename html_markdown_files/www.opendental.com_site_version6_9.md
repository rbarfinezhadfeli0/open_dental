# File: ./www.opendental.com/site/version6_9.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 6.9</title>
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
			<h1>Version 6.9</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<p>Version 6.9 was released on 2/22/2010</p>
<p><b>3D Tooth Chart:</b> Moved from OpenGL to DirectX for simpler hardware support. Tooth outlines are now antialiased. Veneer graphics added. Primary pulp graphics added (use PostBU paint type). Primary teeth can be selected more easily. Scales better in fullscreen mode. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7graphics.html">Graphics</a>.</p>
<p><b>Graphical Perio Chart:</b> A graphical version of the perio chart was added. It can be viewed, printed, or saved as an image. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7perio.html">Perio</a>.</p>
<p><b>Clinics: </b>Added ClinicNum to <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paysplit.html">PaySplit</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7claimprocedure.html">ClaimProc</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7adjustments.html">Adjustment</a>, and <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paymentplanpatient.html">PayPlanCharge</a> tables. All existing PaySplit entries have been assigned the clinic of the corresponding Payment. All existing ClaimProc entries have been assigned the clinic of the Procedure, or if no procedure then the Claim. Clinic viewable as column in Account module using <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7displayfields.html">Display Fields</a>. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7incometransfer.html">Provider Income Transfer</a> window removed, and instead incorporated into the ordinary <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7payment.html">Payment</a> window. Daily Prod &amp; Inc report now prints in landscape if using clinics.</p>
<p><b>Providers: </b>A better way to select providers for very large offices was implemented in a variety of windows. Instead of using a list or a dropdown, users can open a large selection window.</p>
<p><b>Automation: </b>An automation framework was added. Users can set up their own actions (3 so far including printing a letter) based on certain trigger events (3 so far including setting procedures complete). More triggers and actions can easily be added as users request. Will allow program to behave differently depending on the preference of the office. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7automation.html">Automation</a>.</p>
<p><b>Insurance Overpaid Report:</b> To help find situations where the insurance payment plus any writeoff exceeds the procedure fee. </p>
<p><b>Minor Changes</b><br>  Bridge to <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgemountainside.html">Mountainside</a> Software.<br><b></b>The main daily and monthly reports all standardized with the same provider and clinic selection controls. <br>  Writeoff report now splits out different providers better.<br>  Appointment views now have a time filter for morning vs. afternoon views. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7appointmentviews.html">Appt Views</a>.<br>  Sheet descriptions now show in Progress Notes instead of sheet type. <br>  Added address to appointment view options.<br>  Planned appointments can be reordered and the order shows in make appt window. <br>  Security added to Aging report and A/R report. <br>  Another Trophy bridge for numbered mode.<br>  Undo button for recall commlog entries. <br>  Electronic benefits now has a viewing mode for insurance companies that send message text rather than computer-readable fields. Website links are clickable.<br>  Birthdate show in appt edit window for eCW. <br> Fee schedule import for eCW. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgeeclinicalworks.html">eClinicalWorks</a>.</p>

</div>	
	</div>
</body>
</html>```
