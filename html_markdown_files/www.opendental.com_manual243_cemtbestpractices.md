# File: ./www.opendental.com/manual243/cemtbestpractices.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - CEMT Best Practices</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('cemtbestpractices','central','advancedtopics','technical','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/cemtbestpractices.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/cemtbestpractices.html" >v24.2</option><option value="https://www.opendental.com/manual241/cemtbestpractices.html" >v24.1</option><option value="https://www.opendental.com/manual233/cemtbestpractices.html" >v23.3</option><option value="https://www.opendental.com/manual232/cemtbestpractices.html" >v23.2</option><option value="https://www.opendental.com/manual231/cemtbestpractices.html" >v23.1</option><option value="https://www.opendental.com/manual224/cemtbestpractices.html" >v22.4</option><option value="https://www.opendental.com/manual223/cemtbestpractices.html" >v22.3</option><option value="https://www.opendental.com/manual222/cemtbestpractices.html" >v22.2</option><option value="https://www.opendental.com/manual221/cemtbestpractices.html" >v22.1</option><option value="https://www.opendental.com/manual214/cemtbestpractices.html" >v21.4</option><option value="https://www.opendental.com/manual213/cemtbestpractices.html" >v21.3</option><option value="https://www.opendental.com/manual212/cemtbestpractices.html" >v21.2</option><option value="https://www.opendental.com/manual211/cemtbestpractices.html" >v21.1</option><option value="https://www.opendental.com/manual205/cemtbestpractices.html" >v20.5</option><option value="https://www.opendental.com/manual204/cemtbestpractices.html" >v20.4</option><option value="https://www.opendental.com/manual203/cemtbestpractices.html" >v20.3</option><option value="https://www.opendental.com/manual202/cemtbestpractices.html" >v20.2</option><option value="https://www.opendental.com/manual201/cemtbestpractices.html" >v20.1</option><option value="https://www.opendental.com/manual194/cemtbestpractices.html" >v19.4</option><option value="https://www.opendental.com/manual193/cemtbestpractices.html" >v19.3</option><option value="https://www.opendental.com/manual192/cemtbestpractices.html" >v19.2</option><option value="https://www.opendental.com/manual191/cemtbestpractices.html" >v19.1</option><option value="https://www.opendental.com/manual184/cemtbestpractices.html" >v18.4</option><option value="https://www.opendental.com/manual183/cemtbestpractices.html" >v18.3</option><option value="https://www.opendental.com/manual182/cemtbestpractices.html" >v18.2</option><option value="https://www.opendental.com/manual181/cemtbestpractices.html" >v18.1</option><option value="https://www.opendental.com/manual174/cemtbestpractices.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
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
