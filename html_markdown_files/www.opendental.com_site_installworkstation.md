# File: ./www.opendental.com/site/installworkstation.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Install on Workstation</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('installworkstation','installation','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>Install on Workstation</p></div>
		<div class="GeneralPageContent">
<p>See <a href="installation.html">Installation</a>.</p>
<p>These steps explain how to install Open Dental on a new workstation when there are multiple computers in the office. Workstation installations are different than server installations.</p>
<p><div class="Note">Note: <ul>
<li>Open Dental requires the .Net framework, which is usually installed with most modern operating systems.</li>
<li>Individual workstations do not need MySQL/MariaDB components, the OpenDentImages folder, or databases installed.</li>
<li>If installing in <a href="canada.html">Canada</a>, set the <a href="regionlanguagesettings.html">Region and Language Settings</a> on the workstation to Canada before installing. </li>
</ul>
</div>
</p>
<h2>Installation Steps</h2>
<p class="MarginBottomZero">In File Explorer:  </p>
<ol class="MarginBottomGap">
<li>From the workstation, browse to the OpenDentImages folder on the server.</li>
<li>Locate the Setup.exe file.<br><img src="images/installWorkstation.png" width="749" height="458" class="ImageInParagraph"/></li>
<li>Right-click on the Setup.exe file and select <i>Run as Administrator</i>.</li>
<li>Once the install is complete, the Open Dental icon appears on the desktop. Right-click the icon and select <i>Run as Administrator</i>.</li>
<li>In the Choose Database window, select the connection settings:  <ul>
<li>Enter the servername or IP address.</li>
<li>Select the database.</li>
<li>Enter the MySQL Username and Password.</li>
<li>(optional) Check <i>Do not show this window on startup</i> to hide this window the next time Open Dental is started. This is a typical setting on a workstation.</li>
</ul>
</li>
</ol>
		</div>
	</div>
</body>
</html>```
