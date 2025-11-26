# File: ./www.opendental.com/site/version4_3.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 4.3</title>
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
			<h1>Version 4.3</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<p>Released on 7/27/06 </p>
<p><b>Treatment Plan:</b> Print 3D tooth chart. Option to show a column for standard fees. Subtotal option which gives the totals for each column at the bottom of each group of prioritites. Grand totals now show at the bottom of the grid. Sorting changed to show items with priorities first. Insurance columns don't show if patient doesn't have insurance. Layman's terms added to procedure codes. Option to use insurance maximums and deductibles when displaying patient portions. Grid now prints the same as on the screen, including cell wrap and totals. </p>
<p><b>Custom patient fields:</b> The ability to add extra fields to patients for special situations. For instance you could add fields for HIPAA signed, second email, patient's web site, pager number, driver's license, hospital ward, or anything else. </p>
<p><b>Diseases:</b> A checklist for each patient. Used for medical conditions as well as allergies. </p>
<p><b>Pt Info Terminal:</b> A way for a new patient to enter their own information from the waiting room. The receptionist controls the terminal from another computer. Can also be used to let patient update their info if it has changed. New patients can check off items in list of diseases.</p>
<p><b>Medical History Questionnaire:</b> Customized list of questions and answers added to pt info terminal. Only used for new patients. </p>
<p><b>DatabaseIntegrityCheck.exe:</b> A new standalone tool was added so that the tables can be checked without opening up the program.</p>
<p><b>Rx Alerts:</b> Crosslink Diseases to Rx definitions so that an alert is triggered for allergies, etc when writing an Rx. </p>
<p>Improved bridge to NewPatientForm.com<br>  Ability to choose color for background of tooth chart. Defaults to gray instead of blue.<br>  X12 disallow XX on 2010AA NM108 unless medical claim<br>  Provider edit window no longer allows dash in SSN/TIN.<br>  Premed flag added. Also shows on appointments<br>  Grid style updated in Rx, Rx Setup, <br>  Added RDL function Query.GetParameterValue().<br>  Progress notes now sort better, taking priority, tooth number, and code into account.<br>  Premed flag can now show on appointments.<br>  Ins Plan synchronization refined and simplified slightly. Added Search by GroupName and GroupNum. <br>  Fixed a number of small bugs in plan synchronization. Version 4.2 and earlier should not be used by offices that do synchronization.<br>  Combine Ins Plans<br>  Rdl reports able to be launched directly from within the program.<br>  Program links: Option to pass patnum as a parameter in the name of the file to launch. <br>  When adding an InsPlan, use the MedicaidID as subscriber number if present rather than the SSN. <br>  Schick bridge rewritten.<br>  DateFirstVisit update logic changed a little bit to try to preserve first visit dates after conversions.</p>

</div>	
	</div>
</body>
</html>```
