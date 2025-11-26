# File: ./www.opendental.com/manual243/replicationprimarykeys.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Random Primary Keys</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('replicationprimarykeys','replication','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/replicationprimarykeys.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/replicationprimarykeys.html" >v24.2</option><option value="https://www.opendental.com/manual241/replicationprimarykeys.html" >v24.1</option><option value="https://www.opendental.com/manual233/replicationprimarykeys.html" >v23.3</option><option value="https://www.opendental.com/manual232/replicationprimarykeys.html" >v23.2</option><option value="https://www.opendental.com/manual231/replicationprimarykeys.html" >v23.1</option><option value="https://www.opendental.com/manual224/replicationprimarykeys.html" >v22.4</option><option value="https://www.opendental.com/manual223/replicationprimarykeys.html" >v22.3</option><option value="https://www.opendental.com/manual222/replicationprimarykeys.html" >v22.2</option><option value="https://www.opendental.com/manual221/replicationprimarykeys.html" >v22.1</option><option value="https://www.opendental.com/manual214/replicationprimarykeys.html" >v21.4</option><option value="https://www.opendental.com/manual213/replicationprimarykeys.html" >v21.3</option><option value="https://www.opendental.com/manual212/replicationprimarykeys.html" >v21.2</option><option value="https://www.opendental.com/manual211/replicationprimarykeys.html" >v21.1</option><option value="https://www.opendental.com/manual205/replicationprimarykeys.html" >v20.5</option><option value="https://www.opendental.com/manual204/replicationprimarykeys.html" >v20.4</option><option value="https://www.opendental.com/manual203/replicationprimarykeys.html" >v20.3</option><option value="https://www.opendental.com/manual202/replicationprimarykeys.html" >v20.2</option><option value="https://www.opendental.com/manual201/replicationprimarykeys.html" >v20.1</option><option value="https://www.opendental.com/manual194/replicationprimarykeys.html" >v19.4</option><option value="https://www.opendental.com/manual193/replicationprimarykeys.html" >v19.3</option><option value="https://www.opendental.com/manual192/replicationprimarykeys.html" >v19.2</option><option value="https://www.opendental.com/manual191/replicationprimarykeys.html" >v19.1</option><option value="https://www.opendental.com/manual184/replicationprimarykeys.html" >v18.4</option><option value="https://www.opendental.com/manual183/replicationprimarykeys.html" >v18.3</option><option value="https://www.opendental.com/manual182/replicationprimarykeys.html" >v18.2</option><option value="https://www.opendental.com/manual181/replicationprimarykeys.html" >v18.1</option><option value="https://www.opendental.com/manual174/replicationprimarykeys.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Random Primary Keys</p></div>
<div class="GeneralPageContent">
<p>See <a href="replication.html">Replication</a>.</p>
<p>Random primary keys are unique key ranges used by each server on Replication (both <a href="replicationoneway.html">One-Way Replication</a> and <a href="replicationdaisychain.html">Daisy Chain Replication</a>). They are an older method and not recommended. The recommended method is to instead use auto-increment variables to avoid data collision. See <a href="replicationautoincrement.html">Replication Auto Increment</a>.</p>
<h2>Turn on Random Primary Keys</h2>
<p>Random Primary Keys cannot be enabled in newer versions of Open Dental. Users who had Random Primary Keys enabled in the past will still have settings display in the <a href="replicationservers.html">Replication Setup</a> window.</p>
<img src="images/replicationPrimaryKeysEnable.png" width="367" height="37"/><p><b>Use Random Primary Keys</b>: Once random primary keys are enabled, they can never be turned off. Ranges can be freely edited. All of primary keys in all tables will be longer. </p>
<img src="images/replicationRandomPrimaryButtons.png" width="687" height="90"/><p><b>Set Ranges</b>: Once servers are added, click to automatically create ranges.</p>
<p><b>Test</b>: Click to generate sample keys for testing.</p>
<p></p>
<p>Double-click a server to edit the following: </p>
<img src="images/replicationPrimaryKeysRange.png" width="516" height="62"/><p><b>Range Start/End</b>: The allowed range is extremely large. Open Dental uses 64 bit signed int types internally and in the database. The allowed range is from 1 to 9,223,372,036,854,775,807. This key range is so large that this solution can be scaled up without ever running out of keys, no matter how many clinics are connected. We recommend ranges of at least 100,000,000 numbers. If smaller ranges are used, replication may become slow or unresponsive as the number of available primary keys runs out. This range recommendation will result in keys that are a very manageable 9 digits long. Also, JavaScript and other programs have a max int size of 9,007,199,254,740,992 (1000 times smaller), so it makes sense to stay under this value for future flexibility with other software.</p>
</div>
</div>
</body>
</html>```
