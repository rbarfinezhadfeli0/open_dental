# File: ./www.opendental.com/site/version2_9.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 2.9</title>
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
			<h1>Version 2.9</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<h2>Version 2.9</h2>
<p>This minor version was released on 8/17/04 and was only sent to offices that requested it. </p>
<p><b>Periodontal Charting:</b> Basic functionality with fields for pocket depths, recession, MGJ, mobility, furcations, and bleeding. Focuses on speed of entry and editing. By using a very large window to display the information, you can see a lot of information at once. Does not feature any drawings of teeth or graphical viewing of data. See the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7perio.html">Periodontal Charting</a> page for more details.</p>
<p><b>Public Health :</b> Race, county, school, grade, and place of service fields added or enhanced along with some utilities and reports. (Thank you to the generosity of the Georgia public health dept for making this possible).</p>
<p><b>Comm Log: </b>More types added. Main interface is now in lower half of Account module. Auto comm log entries in recall.</p>
<p><b>Letters:</b> Generate letters for individual patients directly from their Account screen. </p>
<p><b>International:</b> Canadian procedure codes and claim form. UK procedure codes. Allow unformatted phone entry for providers.</p>
<p><b>MySQL Configuration: </b>The <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7choosedatabase.html">MySQL Configuration</a> window has been significantly enhanced with drop down lists and indicators, and the ability to install, start, and stop the MySQL service very quickly from within that window. You can also now do fast database switching without closing the program. </p>
<p><b>Miscellaneous:</b><br>  Treatment notes section added below graphical tooth chart.<br>  Added patient.FirstVisitDate.<br>  If chart number already in use, it now tells you the name of the patient using it.<br>  Allows unformatted practice phone number for foreign countries.<br> Allows non-standard SSN's<br> No longer allowed to delete patient unless all account and procedure entries have been deleted first.<br> Chart number cleared when setting a patient to status 'deleted', freeing the chart number up for reuse.<br> When attaching referrals, it now works as expected for new patients.<br> 'Set complete' button added within procedure edit window so you won't accidently change the date if you change the status to C.<br> If changing an existing procedure, it now deletes the tooth number and/or surfaces if applicable.<br> Updates to patient, appointment, and procedure tables now only update changed fields, improving <a href="refreshing.html">multiuser issues</a> on the network. <br> Ins Pending checkboxes added in Family module for Insurance plans.<br>  If an appointment operatory is moved, but not the time, then it no longer shows, "Move Appointment?". This is so you can quickly change ops.<br>  Added assistant field to appointments and assistant indicator on each appointment. <br> Lab summary for the day added to Appointments module<br> Daily production added to Appointments module.<br> Allow setting treatment priorities in Chart module without switching to Treatment Plan module.<br> Daily Procedure report enhanced to allow grouping by procedure code.<br> Provider window automatically enlarges if there are more than 20 providers (for dental schools)<br> Place of service field enhanced on HCFA-1500<br> Added 2 Provider ID fields to ADA2002 claim form.<br>  Added Employer field and 3 radiograph fields to ADA2000 claim form.<br><br></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>

</div>	
	</div>
</body>
</html>```
