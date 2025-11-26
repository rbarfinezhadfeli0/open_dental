# File: ./www.opendental.com/manual232/erouting.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eRouting</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('erouting','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/erouting.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/erouting.html" >v24.2</option><option value="https://www.opendental.com/manual241/erouting.html" >v24.1</option><option value="https://www.opendental.com/manual233/erouting.html" >v23.3</option><option value="https://www.opendental.com/manual232/erouting.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/erouting.html" >v23.1</option><option value="https://www.opendental.com/manual224/erouting.html" >v22.4</option><option value="https://www.opendental.com/manual223/erouting.html" >v22.3</option><option value="https://www.opendental.com/manual222/erouting.html" >v22.2</option><option value="https://www.opendental.com/manual221/erouting.html" >v22.1</option><option value="https://www.opendental.com/manual214/erouting.html" >v21.4</option><option value="https://www.opendental.com/manual213/erouting.html" >v21.3</option><option value="https://www.opendental.com/manual212/erouting.html" >v21.2</option><option value="https://www.opendental.com/manual211/erouting.html" >v21.1</option><option value="https://www.opendental.com/manual205/erouting.html" >v20.5</option><option value="https://www.opendental.com/manual204/erouting.html" >v20.4</option><option value="https://www.opendental.com/manual203/erouting.html" >v20.3</option><option value="https://www.opendental.com/manual202/erouting.html" >v20.2</option><option value="https://www.opendental.com/manual201/erouting.html" >v20.1</option><option value="https://www.opendental.com/manual194/erouting.html" >v19.4</option><option value="https://www.opendental.com/manual193/erouting.html" >v19.3</option><option value="https://www.opendental.com/manual192/erouting.html" >v19.2</option><option value="https://www.opendental.com/manual191/erouting.html" >v19.1</option><option value="https://www.opendental.com/manual184/erouting.html" >v18.4</option><option value="https://www.opendental.com/manual183/erouting.html" >v18.3</option><option value="https://www.opendental.com/manual182/erouting.html" >v18.2</option><option value="https://www.opendental.com/manual181/erouting.html" >v18.1</option><option value="https://www.opendental.com/manual174/erouting.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eRouting</p></div>
<div class="GeneralPageContent">
<p>ODTouch users can set up eRouting to easily take patients through a customized appointment flow.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, eRouting.</p>
<img src="images/eRouting.png" width="805" height="420"/><p>eRouting is only available when ODTouch is enabled.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Setup</b>: Open <a href="eroutingsetup.html">eRouting Setup</a> to create eRouting definitions. </li>
<li><b>Patient</b>: Filter the list by patient. If a specific patient is selected, their name displays. <ul>
<li><b>[...]</b>: Click to select a specific patient. </li>
<li><b>Show All</b>: Click to view all patients who have had eRouting started.</li>
</ul>
</li>
<li><b>From / To</b>: Set a date range to view patients who have had eRouting started. Use the <b>W</b> arrows to quickly change weeks.</li>
<li><b>Clinic</b>: Filter the list by clinic. </li>
</ul>
<p>Click <b>Refresh</b> to view changes.</p>
<p>Double-click a patient to view details. </p>
<img src="images/eRoutingPat.png" width="609" height="422"/></div>
</div>
</body>
</html>```
