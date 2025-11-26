# File: ./www.opendental.com/site/version3_8.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 3.8</title>
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
			<h1>Version 3.8</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<p>beta released on 9/27/05 </p>
<p><b>Confirmation Tool:</b> A separate user interface for confirming appointments instead of working off the daily schedule. It looks a lot like the current recall list. The advantage is that you can group family members so you don't accidently call twice. You can also handle postcards, reports, etc.</p>
<p><b>Billing:</b> Include general messages and/or dunning messages on batch billing. Dunning messages are based on a very customizable combination of billing type, account aging, and pending insurance payments. Inactive and deceased patients no longer show on bills.</p>
<p><b>Signaling:</b> Overhauled messaging to be 100% reliable and faster. Uses simple database strategy instead of the old complex ports and threading. It's more scalable now, and it sets the foundation for a full blown instant messaging system to be added later. Sound files no longer stored locally. This simplifies security and maintenance.</p>
<p><b>Multiple Treatment Plans:</b> When there are alternate treatment plans to present, this makes it easier. This also allows you to archive <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7treatmentplan.html">treatment plans</a> rather than just save a screen shot in the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7images.html">Images</a> module. Size of TP note is increased and can be different for each TP. Descriptions of each procedure can be changed.</p>
<p><b>Graphical tooth chart enhancements:</b> Control key not required to select multiple teeth. Dragging selects multiple teeth. Missing teeth never show, no matter which options selected in show menu. Can show procedures only for specific teeth.</p>
<p><b>Appointment Search: </b>Search for an available appointment slot by certain criteria.</p>
<p>Schedule recall appointments directly from the Make Appointment window.</p>
<p><b>Cycle Billing:</b> You can now print a small batch of statements each day. Anyone who has not had a bill within the last 30 days would get one. This required some changes to the aging calculations. They are now accurate to one day instead of based on the first of the month. This style of billing improves cash flow. </p>
<p><b>Deposit Slips: </b>Added a deposit table to database. This allows you to actually attach your checks to a specific deposit rather than just using a report. No more having to remember when you made your last deposit, and it's one step closer to QuickBooks integration.</p>
<p><br><br><br></p>
<p><br><br></p>

</div>	
	</div>
</body>
</html>```
