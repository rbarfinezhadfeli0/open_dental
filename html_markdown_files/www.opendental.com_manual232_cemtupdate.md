# File: ./www.opendental.com/manual232/cemtupdate.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - CEMT Update Databases</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('cemtupdate','central','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/cemtupdate.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/cemtupdate.html" >v24.2</option><option value="https://www.opendental.com/manual241/cemtupdate.html" >v24.1</option><option value="https://www.opendental.com/manual233/cemtupdate.html" >v23.3</option><option value="https://www.opendental.com/manual232/cemtupdate.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/cemtupdate.html" >v23.1</option><option value="https://www.opendental.com/manual224/cemtupdate.html" >v22.4</option><option value="https://www.opendental.com/manual223/cemtupdate.html" >v22.3</option><option value="https://www.opendental.com/manual222/cemtupdate.html" >v22.2</option><option value="https://www.opendental.com/manual221/cemtupdate.html" >v22.1</option><option value="https://www.opendental.com/manual214/cemtupdate.html" >v21.4</option><option value="https://www.opendental.com/manual213/cemtupdate.html" >v21.3</option><option value="https://www.opendental.com/manual212/cemtupdate.html" >v21.2</option><option value="https://www.opendental.com/manual211/cemtupdate.html" >v21.1</option><option value="https://www.opendental.com/manual205/cemtupdate.html" >v20.5</option><option value="https://www.opendental.com/manual204/cemtupdate.html" >v20.4</option><option value="https://www.opendental.com/manual203/cemtupdate.html" >v20.3</option><option value="https://www.opendental.com/manual202/cemtupdate.html" >v20.2</option><option value="https://www.opendental.com/manual201/cemtupdate.html" >v20.1</option><option value="https://www.opendental.com/manual194/cemtupdate.html" >v19.4</option><option value="https://www.opendental.com/manual193/cemtupdate.html" >v19.3</option><option value="https://www.opendental.com/manual192/cemtupdate.html" >v19.2</option><option value="https://www.opendental.com/manual191/cemtupdate.html" >v19.1</option><option value="https://www.opendental.com/manual184/cemtupdate.html" >v18.4</option><option value="https://www.opendental.com/manual183/cemtupdate.html" >v18.3</option><option value="https://www.opendental.com/manual182/cemtupdate.html" >v18.2</option><option value="https://www.opendental.com/manual181/cemtupdate.html" >v18.1</option><option value="https://www.opendental.com/manual174/cemtupdate.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>CEMT Update Databases</p></div>
<div class="GeneralPageContent">
<p>Databases connected to the <a href="central.html">Central Enterprise Management Tool ( CEMT )</a> are usually the same version of Open Dental for full functionality.</p>
<h2>CEMT Database</h2>
<p>The version of the CEMT itself needs to be updated from time to time.</p>
<p>Launch Open Dental from the server and select the CEMT database. Click Help, <a href="update.html">Update</a>.</p>
<h2>Connected Databases</h2>
<p>To update the other databases, connect to them in the normal way through Open Dental proper and update them to the same version (Help, Update). Workstations in each office update as normal using the database setup files.</p>
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
