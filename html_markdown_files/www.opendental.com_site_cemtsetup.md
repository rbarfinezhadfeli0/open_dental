# File: ./www.opendental.com/site/cemtsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - CEMT Setup</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('cemtsetup','central','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>CEMT Setup</p></div>
		<div class="GeneralPageContent">
<p>Some setup is required before using the <a href="central.html">Central Enterprise Management Tool ( CEMT )</a>.</p>
<h2>Configure the Central Manager</h2>
<p><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7update.html">Update</a> to the latest stable version of Open Dental before using the CEMT tool.</p>
<p class="MarginBottomZero">These steps are required before the CentralManager.exe file (open the Central Manager main window) can be launched. </p>
<ol class="MarginBottomGap">
<li>Stop the MySQL service.</li>
<li>Place a blank copy of an Open Dental database in the <b>C:\mysql\data folder</b>. Rename it to identify it as the central manager database (e.g., dbcentral).  <ul>
<li><b>For MySQL Users</b>: If using Open Dental 20.5.63 or newer, a blank database can be downloaded here: <a href="../resources/dbcentral_20_5_63.zip">dbcentral_20_5_63.zip</a>. </li>
<li><b>For MariaDB 10.5 Users</b>: If using Open Dental 21.1.49 or newer, a blank database can be downloaded here: <a href="../resources/dbcentral_10.5_24.1.66.zip">dbcentral_10.5_24.1.66.zip</a></li>
<li><b>For MariaDB 10.11 Users</b>: If using Open Dental 24.3.54 or newer, a blank database can be downloaded here: <a href="../resources/dbcentral_10.11_25.1.61.zip">dbcentral_10.11_25.1.61.zip</a></li>
</ul>
<div class="Note">Note:  To save the database, right-click and <i>Save As</i>. If Google Chrome displays a security warning, select <i>Keep</i>. </div>
</li>
<li>Start the MySQL service.</li>
<li>Open Open Dental and select <i>dbcentral</i> from the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7choosedatabase.html">Choose Database</a> window. This updates <i>dbcentral</i> to the current version of Open Dental.<br><div class="Note">Note: <ul>
<li>If the Choose Database window does not appear on startup, run Open Dental as a administrator, then go to File, Choose Database. Uncheck <i>Do not show this window on startup (this computer only)</i>. Close Open Dental then try again.</li>
<li>After the database is updated an Add Regkey window appears. A registration key is not required for the CEMT database. Simply close the regkey window.</li>
</ul>
</div>
</li>
<li>Copy <i>FreeDentalConfig.xml </i>from <b>C:\Program Files (x86)\Open Dental</b> to the desktop. </li>
<li>Rename the file to CentralManagerConfig.xml and right click on the file and select Edit with Notepad. It will look similar to the following: <br><img src="images/cemtSetupXml.png" width="618" height="318" class="ImageInParagraph"/><br><ul>
<li>Change the ComputerName to reflect the name or IP address of the server. </li>
<li>Change the database name to the central manager database (e.g. dbcentral).</li>
<li>Ignore the parameters for <span class="codeblock">NoShowOnStartup</span> and <span class="codeblock">UseDynamicMode</span>, if present. These parameters are ignored.</li>
<li>Move this file from the desktop to Open Dental installation directory (typically <b>C:\Program Files (x86)\Open Dental\</b>) </li>
</ul>
</li>
<li>Launch <i>CentralManager.exe</i> from the Open Dental program folder to begin using CEMT. Create a Windows shortcut to this program to make it easier to open in the future.</li>
<li>Once the CEMT is launched, set up database connections and define users, permissions, and other security settings. <ul>
<li>Set up <a href="cemtconnections.html">CEMT Connections</a>.</li>
<li>Create connection groups.</li>
<li>Define <a href="cemtsecurity.html">CEMT Security</a> settings (users, user groups, permissions, lock dates).</li>
</ul>
</li>
</ol>
<h2>Adding CEMT to an Additional Workstation</h2>
<ol>
<li>On the server, copy the CentralManagerConfig.xml file to the OpenDentImages folder.</li>
<li>On the workstation, open the OpenDentImages folder.</li>
<li>Copy the CentralManagerConfig.xml file and paste it into the Open Dental directory (typically <b>C:\Program Files\Open Dental (x86)\</b>)</li>
<li>Launch the Central Manager.</li>
</ol>
<br><h2>Middle Tier</h2>
<p>If the central manager database is hosted on a <a href="middletier.html">Middle Tier</a> server, also add a new middle tier XML node for the URI: <b>&lt;MiddleTierAddr&gt;&lt;/MiddleTierAddr&gt;</b>. Add it directly under the password node.</p>
<p>CEMT does not work for Middle Tier connection when using <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7bridgeeclinicalworks.html">eClinicalWorks</a>.</p>
		</div>
	</div>
</body>
</html>```
