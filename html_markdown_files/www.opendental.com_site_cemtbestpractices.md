# File: ./www.opendental.com/site/cemtbestpractices.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - CEMT Best Practices</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('cemtbestpractices','central','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>CEMT Best Practices</p></div>
		<div class="GeneralPageContent">
<p class="MarginBottomZero">The <a href="central.html">CEMT</a> is designed to be a central hub for managing separate Open Dental databases. </p>
<ul class="MarginBottomGap">
<li>There can be only one CEMT database. It can be used by multiple CEMT clients.</li>
<li>CEMT users are created with unique names in the CEMT database.</li>
<li>Connections are set up to each Open Dental database.</li>
<li>Security settings in the CEMT database, including users, are synced to each Open Dental database.</li>
<li>CEMT users log into the CEMT tool, then launch a connection to an Open Dental database.</li>
<li>A user's CEMT credentials log the user into the Open Dental database automatically.</li>
</ul>
<h2>Use the CEMT</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Create and use one CEMT database for all CEMT users.</li>
<li>Create a CEMT user for each person who uses the CEMT and assign them security permissions. These permissions restrict or grant access to certain areas of Open Dental databases (just like other Open Dental users).</li>
<li>Create a connection for each Open Dental database the CEMT should manage.</li>
<li>Refresh Connection on each connection, then Sync all security settings to all Open Dental databases.</li>
<li>Have the user log into the CEMT using their CEMT username and password.</li>
<li>The User can double click a connection to launch Open Dental and connect to the Open Dental databases. Logging on to the Open Dental database is automatic with the permissions set in the CEMT.</li>
<li>Manage all CEMT users in the CEMT only and sync to all Open Dental database after any change. This avoids any concurrency issues.</li>
</ol>
		</div>
	</div>
</body>
</html>```
