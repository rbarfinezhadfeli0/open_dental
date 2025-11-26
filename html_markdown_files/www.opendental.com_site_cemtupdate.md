# File: ./www.opendental.com/site/cemtupdate.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - CEMT Update Databases</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('cemtupdate','central','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>CEMT Update Databases</p></div>
		<div class="GeneralPageContent">
<p>Databases connected to the <a href="central.html">Central Enterprise Management Tool ( CEMT )</a> are usually the same version of Open Dental for full functionality.</p>
<h2>CEMT Database</h2>
<p>The version of the CEMT itself needs to be updated from time to time.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Launch Open Dental from the server and select a connected database. </li>
<li>Update to the desired version. See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7update.html">Update</a>.</li>
<li>Once update is complete, launch Open Dental and select the CEMT database (i.e., "dbcentral").</li>
<li>Click OK on the prompt to update the database.</li>
<li>Once finished, the registration key prompt can be closed.</li>
</ol>
<h2>Connected Databases</h2>
<p>To update the other databases, connect to them in the normal way through Open Dental proper and update them to the same version by clicking Help, then Update. Workstations in each office update as normal using the database setup files.</p>
<h2>Automatically Update all Databases</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Update the CEMT database first.</li>
<li>Create a command line script to push out the Open Dental msi to each office and then run it.</li>
<li>Use the <b>IsSilentUpdate</b>&nbsp;<a href="commandline.html">Command Line Arguments</a> parameter to update with no prompts.</li>
<li>Log the errors that may occur during updating by taking the exit codes from the running processes.</li>
</ol>
		</div>
	</div>
</body>
</html>```
