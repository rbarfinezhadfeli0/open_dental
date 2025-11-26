# File: ./www.opendental.com/site/version12_4.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 12.4</title>
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
			<h1>Version 12.4</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<p>Version 12.4 was released on 2/12/2013</p>
<p>2013 Codes: The CDT codes for 2013 were released on 12/31/2012 as part of version 12.4.28. Changes were also made to areas like recall and insurance benefits to use the new fluoride code D1208. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurecodetools.html">CDT Codes</a>.</p>
<p><b>Images in Database:</b> The automatic update process now works if storing images in the database. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7imagesstoreindb.html">Store Images in Database</a>.</p>
<p><b>HL7 Service:</b> Multiple HL7 services allowed on the same computer, each for a different database. Also, Open Dental tracks which HL7 service is connected to it, and it won't let a second HL7 service connect.</p>
<p><b>Generic HL7 Interface:</b> Total control over the message structure. Add new custom interfaces as needed. TCP/IP interfaces available to avoid folder sharing issues. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7hl7genericmsg.html">Generic HL7</a></p>
<p><b>HL7 Message History:</b> See history of messages sent and received. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7hl7genericmsg.html">Generic HL7</a><br><br><b>Electronic Rx:</b> Can send Rx electronically, but it's still a double entry process. So this feature is considered to be incomplete for general use. <a href="electronicrx.html">Electronic Rx</a>.<br><br><b>Canada Fee Schedule Tools:</b> Import carrier fees for a province for a certain year. <a href="canada.html">Canada</a>.</p>
<p><b>Minor Changes</b><br>  Recall table now has DateScheduled column. This will make the recall list fill faster. <br>  A memo can now be added to deposit slips. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7depositslip.html">Deposit Slip</a><br>  Added a tool to easily and safely switch between MyISAM and InnoDb storage engines. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7databasemaintenance.html">Database Maintenance</a><br>  Insurance plans default to assignment of benefits checkbox. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insplan.html">Insurance Plans</a><br>  Supply and Inventory interface overhauled. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7supplyinventory.html">Supply</a><br>  Perio charting now supports positive gingival margins aka hyperplasia. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7perio.html">Perio</a>Equipment Setup permission added. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7security.html">Security</a>.<br>  Medical history can now be printed. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7medical.html">Medical</a>.<br>  Employee schedules grid in the appointment module can now show schedule notes.<br>  Security permission added to restrict access to the billing window. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7security.html">Security</a>.<br>  Security permission added for editing problems. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7security.html">Security</a>.<br>  Checkboxes and Input sheet fields are now reportable. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheets.html">Sheets Radio Buttons</a><br>  Multiple problems at a time may now be selected and added to a patient's medical history. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7problempatient.html">Problems</a>.<br>  Added statement option for <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7invoice.html">Invoices</a>.<br> CaptureLink program link now available. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgecapturelink.html">CaptureLink</a>.<br>  Custom languages can now be added to the language table. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7patientlanguages.html">Language Definitions</a>.<br>  EHR Certification renewed. EHR License.<br>  Added ADA 2012 claim form. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7claimforms.html">Claim Forms</a>.<br>  Canadian lab fees can be edited inside of the Procedure Edit window. <a href="canada.html">Canada</a>.<br></p>

</div>	
	</div>
</body>
</html>```
