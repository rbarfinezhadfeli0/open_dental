# File: ./www.opendental.com/site/version6_6.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: Version 6.6</title>
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
			<h1>Version 6.6</h1>
		</div>
		<div id="Content">
<p>See <a href="versions.html">Versions</a></p>
<p>Version 6.6 was released 7/27/09. It includes the following new features:</p>
<p><b>Web Service/Middle Tier:</b> Instead of directly connecting to the database, an enterprise can run a middle tier layer that provides data for the clients. (done, but due to distribution complexity, it will be phased in over the next few weeks rather than being part of the first beta). <a href="middletier.html">Middle Tier</a></p>
<p><b>Shutdown Workstations:</b> From any computer, see which other workstations are running, and forcefully shut them all down. Gives users a 15 second warning. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7shutdown.html">Shutdown Workstations</a>.</p>
<p><b>Workstation Update:</b> Copies files instead of running the Setup.exe. This results in much faster update on each workstation and requires only one mouse click. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7update.html">Update</a>.</p>
<p><b>Update Lockout:</b> During the update process, all other workstations are locked out and not permitted to connect to the database. This replaces the old strategy of having to separately inform users that it's ok to open the program again. Now, users can just attempt to connect as desired.</p>
<p><b>Minor Changes:</b><br>  Bridge to <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgeicat.html">iCat</a>. <br>  Prevents entry of both Family and Individual benefits until that feature is supported. <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7benefitinfo.html">Benefits</a>.<br>  Program loads faster.<br>  Recall list window reorganized to avoid horizontal scroll. <br>  New patient report is now based on completed procedures instead of first visit date. This is more accurate when new patients cancel their first appointment.<br></p>

</div>	
	</div>
</body>
</html>```
