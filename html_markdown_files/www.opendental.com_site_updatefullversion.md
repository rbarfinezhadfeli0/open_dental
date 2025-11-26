# File: ./www.opendental.com/site/updatefullversion.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Update to Full Version</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('updatefullversion','installation','documentation')">
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
		<div class="TopBar2"><p>Update to Full Version</p></div>
		<div class="GeneralPageContent">
<p>See <a href="installation.html">Installation</a>.</p>
<p class="MarginBottomZero">When you order the full version of Open Dental, a support technician will often update the software on the main computer and perform some minor required setup. If you update on your own, refer to the following instructions. </p>
<ol class="MarginBottomGap">
<li>If not already installed, install the <a href="trial.html">Trial Version</a> on the server.</li>
<li>Update to the full version on the server following the instructions below.</li>
<li>Perform required setup on the server (see below).</li>
<li>If using Open Dental on several computers, see <a href="installworkstation.html">Install on Workstation</a>. These steps are different than server installations.</li>
</ol>
<p>These steps are used when updating from the Open Dental Trial Version to the Full Version. If the full version of Open Dental is already installed, use the steps on <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7updateinstall.html">Install Update</a> instead.</p>
<h2>Update to the Full Version on the Server</h2>
<p class="MarginBottomZero">The Trial version should already be installed. </p>
<ol class="MarginBottomGap">
<li>On the computer desktop, right-click on the Open Dental icon, then click <b>Run as Administrator</b>.</li>
<li>In the Main Menu, click Help, Update, then <b>Setup</b> in the upper left corner. <br><img src="images/installUpdateSetup.gif" width="744" height="423" class="ImageInParagraph"/></li>
<li>Next to Registration Key, click <b>Change</b>.</li>
<li>Enter the registration key from the welcome email.</li>
<li>Review the CDT, Open Dental and SQL license agreements. Check the boxes to agree. See <a href="../resources/cdtcompliance.pdf">CDT Compliance</a>.</li>
<li>Click <b>OK</b> twice to return to the Update window.</li>
<li>Click <b>Check for Updates</b> to see a list of all available versions. <br><img src="images/updatecheck.png" width="491" height="327" class="ImageInParagraph"/></li>
<li>Click <b>Install</b> next to the version to install. Only select one option. Normally, offices want to install the <i>New Stable</i> version. Do not install <i>Beta</i> unless users are comfortable with potential errors. Beta versions are not quite as stable and will require frequent updates.</li>
<li>Any announcements specific to the update will show. Click <b>OK</b> to proceed.</li>
<li>Open Dental must close on all workstations. A warning message will show. Click <b>Continue</b> to close Open Dental on the listed workstations and start the download. The listed workstations will receive a warning before Open Dental closes.</li>
<img src="images/updateShutdownWorkstations.png" width="658" height="273"/><li>Restart Open Dental. When it opens, the new files will be copied to the server. Installation to the main computer is complete.</li>
</ol>
<h2>Required Setup</h2>
<p class="MarginBottomZero">Complete these steps on the server (main computer) before proceeding. A support technician can assist the office. </p>
<ol class="MarginBottomGap">
<li>Run the Procedure Code Tools to remove temporary codes used in the Trial version and automatically add CDT codes. <ol>
<li>In the main menu, click Lists, Procedure Codes.</li>
<li>At the lower left, click <b>Tools</b>.</li>
<li>Check all boxes.</li>
<li>Click <b>Run Now</b>.</li>
</ol>
</li>
<li>If using multiple computers, perform these on the server before installing on a workstation.  <ol>
<li>Share the A to Z Folder.</li>
<li>Set the path to the shared OpenDentImages folder. (In the main menu, click Setup, <a href="0_paths.html">Data Paths</a>).</li>
</ol>
</li>
</ol>
<p>If workstations have trouble connecting, it may be a firewall issue. If users cannot get past the Choose Database window, then it's a firewall issue. The office may need to create an exception to allow Port 3306. See <a href="firewalls.html">Firewall</a> for information on how to open Port 3306.</p>
		</div>
	</div>
</body>
</html>```
