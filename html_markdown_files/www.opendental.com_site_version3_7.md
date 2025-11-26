# File: ./www.opendental.com/site/version3_7.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 3.7</title>
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
			<h1>Version 3.7</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<p>Released on 9/26/05 </p>
<p><b>Clinics:</b> The clinic field has now been added to procedures, appointments, operatories, and claims. And you can enter a separate address for each clinic.</p>
<p><b>Payment Plan Amortization:</b> Total control over amount and date of each payment in the amortization schedule instead of the payment being the same every month.</p>
<p><b>Operatories</b>: Operatory table added to database instead of using the definition table. This allows attaching dentists, hygienists, and clinics to operatories. Now, you can see the provider schedule as the background color in an operatory. Also, when you drag an appointment to a new operatory, it automatically changes the provider for you. </p>
<p><b>Patient balance:</b> Option to track patient balances with or without insurance estimate taken into consideration.</p>
<p><b>Print Patient Progress Notes</b></p>
<p><b>Fee Schedule Tools:</b> Clear a fee schedule, increase a fee schedule by a percentage, copy a fee schedule. </p>
<p>Canadian E-Claims: Division number added to ins plan. <br>  HIPAA national provider ID field added<br>  Button added to print an insurance label directly from the edit claim window. <br>  Added Medicaid ID and Account # to patient import tool.<br>  Backup button password protected<br>  All appointment changes tracked through the audit trail.<br>  Security added to timecards. <br> Added entry date to tasks for sorting purposes.<br> Supernumerary tooth number support <br> Button to split a claim into two separate claims. Used when insurance only pays on some procedures.<br> Added default place of service to clinic table.<br> E-claims: if sending extractions, don't also show those teeth as missing.<br> Loop structure for subscriber and dependent on same claim was changed for e-claims<br> Option to not show return address on recall cards.<br> Validates missing teeth before including them on e-claims.<br>  E-claims: validates secondary carrier info and treating provider license number<br> E-claims: Amt paid by pri ins gets sent on secondary claims.<br> Patient info site field dropdown list was behaving slightly wrong<br> Enhanced backup to also backup the Setup.exe file and to prevent version mismatch.<br> Trojan: all remaining fields included so we can be 'certified'.<br> Allow larger numbers in order to handle Rupiah currency.<br><br><br><br></p>
<p><br><br></p>

</div>	
	</div>
</body>
</html>```
