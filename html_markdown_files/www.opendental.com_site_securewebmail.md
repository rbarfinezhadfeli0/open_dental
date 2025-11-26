# File: ./www.opendental.com/site/securewebmail.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Secure WebMail Feature</title>
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
			<h1>Secure WebMail Feature</h1>
		</div>
		<div id="Content">
<p>The SecureWebMail Feature allows PHI to be sent in a secure way through the <a href="patientportal.html">Patient Portal</a>.</p>
<div align="center">
<img src="https://www.opendental.com/site/images/headerWebMail.png" width="900" height="300"/></div>
<p>WebMail can be used in the following scenarios.</p>
<p class="MarginBottomZero"><b>Provider sends WebMail to patient</b></p>
<ol class="MarginBottomGap">
<li>Provider sends a secure WebMail to a patient. </li>
<li>The patient receives an email notification indicating that a secure message is waiting for them in the portal.</li>
<li>The patient logs in to the portal using their credentials. In the portal, they can view, reply to, and send new WebMails. </li>
</ol>
<p class="MarginBottomZero"><b>Patient sends WebMail to provider</b><br> Secure WebMails sent to a provider can be viewed when the provider is logged in to Open Dental. They are viewable in the <a href="0_email.html#inbox">Email Inbox</a> and Chart module. </p>
<ol class="MarginBottomGap">
<li>Patient logs in to the Patient Portal and composes a new WebMail to their primary provider.</li>
<li>Provider logs in to Open Dental. An alert displays unread WebMail messages.</li>
<li>The WebMail can be seen in the provider's WebMail Inbox or the Chart Module.</li>
</ol>
<p class="MarginBottomZero"><b>Provider sends WebMail to another provider</b><br> You can also securely exchange patient information with another provider using WebMail and the Patient Portal. </p>
<ul class="MarginBottomGap">
<li>Create a patient record for the provider. The following fields are required: <ul>
<li>First Name</li>
<li>Last Name</li>
<li>Date of Birth</li>
<li>Phone Number</li>
<li>Email Address</li>
<li>Address Information</li>
<li>Assign a primary provider (the provider who will send the messages).</li>
</ul>
</li>
<li>Grant portal access to the provider.</li>
</ul>

</div>	
	</div>
</body>
</html>```
