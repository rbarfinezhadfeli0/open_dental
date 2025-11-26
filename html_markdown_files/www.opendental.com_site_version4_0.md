# File: ./www.opendental.com/site/version4_0.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 4.0</title>
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
			<h1>Version 4.0</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<p>Beta version released on 2/2/06.<br> Production version was never released. Use version 4.1 instead. </p>
<p>Switched to Visual Studio 2005 and .NET 2.0.</p>
<p><b>Insurance Coverage Categories:</b> Previously, no overlapping of procedurecode ranges was allowed. This forced each procedurecode into exactly one category, like preventive. The improvement is to allow overlapping and subcategories. For instance, you can have crowns be a subcategory of major, and percentages can be assigned to either or both. In this example, the crown percentage takes priority over the major percentage.</p>
<p><b>Plan Benefits:</b> Changed format of benefits. Examples of benefits include maximums, deductibles, percentages, fluoride age limit, x-ray frequency, exclusions, limitations, etc. Instead of being columns in the insplan table, each benefit is now a row in a new table. There is no limit to the number of rows. This new organization is much more flexible and powerful. It's also the way electronic benefit information will be coming from carriers as we move to electronic benefit requests.</p>
<p><b>Insurance Plan Templating:</b> More optimizations for offices that have a lot of patients sharing insurance plans. When a change is made to a plan, you now have the option of applying the change to all identical plans. Copies all benefits from original plan, including percentages, maximums, etc. </p>
<p><b>Time Cards:</b> Customizable pay periods added so that you don't have enter the date range each time. Tracks 40 hour workweek, computes overtime, allows adjustments, and prints.</p>
<p><b>Chart module:</b> Right click on multiple selected procedures at once to set complete.</p>
<p><b>Appointment Rules:</b> Enforce preventing certain types of double booking. </p>
<p><b>Routing Slips:</b> For offices without computers in the operatories. Prints patient info, insurance info, today's appointment, and treatment plan all on one sheet. Does this as a batch for all appointments on one day. </p>
<p><b>General Accounting:</b> Includes a chart of accounts and a check register. Intended to replace QuickBooks for small offices.</p>
<p><b>New Reporting Framework:</b> We have included the open source RDL Project with Open Dental. It has been completely integrated and customized to work specifically for Open Dental reports. Over the next few versions, many existing reports and printouts will be gradually rewritten using RDL. This will allow any power user to totally customize any report. It will also allow export to PDF and some significant enhancements to various reports, like grouping and charts.</p>
<p>Enhanced Trophy bridge-Lets you set a specific folder for each patient.<br>  Dental Eye bridge <br>  Select patient window has a new grid so you can double click anywhere on a row.<br>  Set mixed dentition with one click.<br>  New grid for patient info in Family module.<br>  Easy Option to hide insurance features in Family module.<br>  Copy-paste in the Images module. Can be used to duplicate an image or to copy to another family member. <br>  Medical note added to confirmation list. <br>  Fixed birthday report for international use.<br>  Birthday postcards.<br>  Added Canadian lab fee field to procedures.<br>  Divorced added. <br>  Show quadrant letters on claimforms<br>  Undo billing process. In case something goes wrong during batch billing, you can remove the 'Statement Sent' entries quickly.<br>  TP procedures should paint on top of existing procedures in tooth chart<br>  After adding a new family member in Family module, that patient is now selected when switching to another module. <br>  Jump from Claim Send window directly to the Account of that patient.<br>  Stick appointment on pinboard directly from the Chart module.<br>  Right click-copy appointment to pinboard.<br>  Trojan: Added an update feature so that our Trojan interface can get officially certified (still awaiting certification)</p>

</div>	
	</div>
</body>
</html>```
