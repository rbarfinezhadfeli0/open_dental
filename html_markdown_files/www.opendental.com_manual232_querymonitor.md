# File: ./www.opendental.com/manual232/querymonitor.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Query Monitor</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('querymonitor','+help','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/querymonitor.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/querymonitor.html" >v24.2</option><option value="https://www.opendental.com/manual241/querymonitor.html" >v24.1</option><option value="https://www.opendental.com/manual233/querymonitor.html" >v23.3</option><option value="https://www.opendental.com/manual232/querymonitor.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/querymonitor.html" >v23.1</option><option value="https://www.opendental.com/manual224/querymonitor.html" >v22.4</option><option value="https://www.opendental.com/manual223/querymonitor.html" >v22.3</option><option value="https://www.opendental.com/manual222/querymonitor.html" >v22.2</option><option value="https://www.opendental.com/manual221/querymonitor.html" >v22.1</option><option value="https://www.opendental.com/manual214/querymonitor.html" >v21.4</option><option value="https://www.opendental.com/manual213/querymonitor.html" >v21.3</option><option value="https://www.opendental.com/manual212/querymonitor.html" >v21.2</option><option value="https://www.opendental.com/manual211/querymonitor.html" >v21.1</option><option value="https://www.opendental.com/manual205/querymonitor.html" >v20.5</option><option value="https://www.opendental.com/manual204/querymonitor.html" >v20.4</option><option value="https://www.opendental.com/manual203/querymonitor.html" >v20.3</option><option value="https://www.opendental.com/manual202/querymonitor.html" >v20.2</option><option value="https://www.opendental.com/manual201/querymonitor.html" >v20.1</option><option value="https://www.opendental.com/manual194/querymonitor.html" >v19.4</option><option value="https://www.opendental.com/manual193/querymonitor.html" >v19.3</option><option value="https://www.opendental.com/manual192/querymonitor.html" >v19.2</option><option value="https://www.opendental.com/manual191/querymonitor.html" >v19.1</option><option value="https://www.opendental.com/manual184/querymonitor.html" >v18.4</option><option value="https://www.opendental.com/manual183/querymonitor.html" >v18.3</option><option value="https://www.opendental.com/manual182/querymonitor.html" >v18.2</option><option value="https://www.opendental.com/manual181/querymonitor.html" >v18.1</option><option value="https://www.opendental.com/manual174/querymonitor.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Query Monitor</p></div>
<div class="GeneralPageContent">
<p>The Query Monitor window allows you to view query requests made to the MySQL database server as they execute in real-time.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Help, Query Monitor.</p>
<img src="images/queryMonitor.png" width="915" height="474"/><p>This window can remain open in the background to allow monitoring during normal use of the program. Activity displayed is only from the instance of Open Dental from which it was launched. It does not allow you to monitor all queries being processed by the MySQL server.</p>
<p><div class="Note">Note: <ul>
<li>The <i>Query Monitor View</i> permission is required to access the Query Monitor.</li>
<li>The Query Monitor is not available when using a Middle Tier connection.</li>
</ul>
</div>
</p>
<p class="MarginBottomZero"><b>Query Feed</b>: Grid shows details on queries sent to the MySQL server. </p>
<ul class="MarginBottomGap">
<li><b>Command</b>: Exact SQL query command sent.</li>
<li><b>DateTimeStart</b>: Recorded date and time of the query.</li>
<li><b>Elapsed</b>: Amount of time to process the query command.</li>
</ul>
<p><b>Start</b>: Click to begin monitoring queries.</p>
<p><b>Stop</b>: Click to suspend monitoring queries.</p>
<p><b>Clear</b>: Click to clear the Query Feed.</p>
<p><b>Log</b>: Click to save a log of queries captured while monitoring. Monitoring must be stopped to use. Log file is saved to the <i>QueryMonitorLogs</i> folder in the OpenDentImages folder.</p>
<p class="MarginBottomZero"><b>Query Details</b>: Highlight an entry above to see complete details on the query submitted. </p>
<ul class="MarginBottomGap">
<li><b>Command</b>: Full text of the query selected above.</li>
<li><b>Start</b>: Date and time when the selected query started.</li>
<li><b>Stop</b>: Date and time when the selected query completed execution.</li>
<li><b>Elapsed</b>: Amount of time the query took to complete.</li>
</ul>
<p><b>Copy</b>: Copy contents of the Command window from Query Details.</p>
</div>
</div>
</body>
</html>```
