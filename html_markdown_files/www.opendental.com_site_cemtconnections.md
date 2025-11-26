# File: ./www.opendental.com/site/cemtconnections.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - CEMT Connections</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('cemtconnections','central','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>CEMT Connections</p></div>
		<div class="GeneralPageContent">
<p>In the <a href="central.html">Central Enterprise Management Tool ( CEMT )</a>, click Setup, Connections. </p>
<img src="images/centralConnectionsSetup.png" width="861" height="462"/><p>Connect to unlimited databases using CEMT. Also group connections together to make running reports easier.</p>
<p class="MarginBottomZero">View Connections: </p>
<ul class="MarginBottomGap">
<li><b>Connection Groups</b>: Connections can be grouped together. See <a href="cemtconnectiongroups.html">CEMT Connection Groups</a>.</li>
<li><b>Search</b>: Search for a connection. Connections search as characters are typed.</li>
</ul>
<p><b>Add</b>: Click to add a new connection. See below for details. </p>
<p class="MarginBottomZero">Conn. Order:  </p>
<ul class="MarginBottomGap">
<li><b>Up / Down Arrows</b>: Highlight a connection, then click to reorder it in the list. </li>
<li><b>Alphabetize</b>: Click to order connections in alphabetical order. </li>
</ul>
<p class="MarginBottomZero">Prefs:  </p>
<ul class="MarginBottomGap">
<li><b>Automatically Log On</b>: Check to automatically log on to the target database when connecting through CEMT.</li>
<li><b>Dynamic Mode (launch mismatched version)</b>: Use to connect to a database from a different version of Open Dental without updating or downgrading the local client. <ul>
<li>When checked, if the selected server and database are running a version different than the currently installed version on the workstation, Open Dental automatically creates a temporary install of the server's version of the Open Dental client into a dynamic folder (typically <b>C:\Program Files (x86)\Open Dental\DynamicMode</b>) and launches the program from there.</li>
<li>If using CEMT with Open Dental Version 24.1.79 and greater or 24.2.36 and greater, the tool cannot open databases using a version lower than 24.1.79 or 24.2.36. Update the database version or open the database outside of the CEMT instead. </li>
</ul>
</li>
</ul>
<h2>Add or Edit a Connection</h2>
<p>Click Add, or double-click an existing connection to edit. </p>
<img src="images/centralConnectionEdit2.png" width="690" height="430"/><p class="MarginBottomZero">Enter connection details, then click OK. </p>
<ul class="MarginBottomGap">
<li><b>Direct Database Connection</b>: Enter the Server Name, Database, MySQL User, and MySQL Password. (see <a href="securitymysql.html">MySQL Security</a>).</li>
<li><b>Middle Tier Connection</b>: Enter the <a href="middletier.html">Middle Tier</a> connection details. This is rare and should only be used if not using a direct database connection.</li>
<li><b>Show clinic breakdown on reports</b>: Check to enable clinic breakdowns on reports generated for this connection through CEMT.</li>
<li><b>Note</b>: Enter any notes regarding this connection. Note can be used to alphabetize the list.</li>
</ul>
		</div>
	</div>
</body>
</html>```
