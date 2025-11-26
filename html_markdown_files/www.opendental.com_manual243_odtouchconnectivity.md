# File: ./www.opendental.com/manual243/odtouchconnectivity.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - ODTouch: Connectivity Statuses</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('odtouchconnectivity','odtouchsettings','odtouchhome','odtouchsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/odtouchconnectivity.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/odtouchconnectivity.html" >v24.2</option><option value="https://www.opendental.com/manual241/odtouchconnectivity.html" >v24.1</option><option value="https://www.opendental.com/manual233/odtouchconnectivity.html" >v23.3</option><option value="https://www.opendental.com/manual232/odtouchconnectivity.html" >v23.2</option><option value="https://www.opendental.com/manual231/odtouchconnectivity.html" >v23.1</option><option value="https://www.opendental.com/manual224/odtouchconnectivity.html" >v22.4</option><option value="https://www.opendental.com/manual223/odtouchconnectivity.html" >v22.3</option><option value="https://www.opendental.com/manual222/odtouchconnectivity.html" >v22.2</option><option value="https://www.opendental.com/manual221/odtouchconnectivity.html" >v22.1</option><option value="https://www.opendental.com/manual214/odtouchconnectivity.html" >v21.4</option><option value="https://www.opendental.com/manual213/odtouchconnectivity.html" >v21.3</option><option value="https://www.opendental.com/manual212/odtouchconnectivity.html" >v21.2</option><option value="https://www.opendental.com/manual211/odtouchconnectivity.html" >v21.1</option><option value="https://www.opendental.com/manual205/odtouchconnectivity.html" >v20.5</option><option value="https://www.opendental.com/manual204/odtouchconnectivity.html" >v20.4</option><option value="https://www.opendental.com/manual203/odtouchconnectivity.html" >v20.3</option><option value="https://www.opendental.com/manual202/odtouchconnectivity.html" >v20.2</option><option value="https://www.opendental.com/manual201/odtouchconnectivity.html" >v20.1</option><option value="https://www.opendental.com/manual194/odtouchconnectivity.html" >v19.4</option><option value="https://www.opendental.com/manual193/odtouchconnectivity.html" >v19.3</option><option value="https://www.opendental.com/manual192/odtouchconnectivity.html" >v19.2</option><option value="https://www.opendental.com/manual191/odtouchconnectivity.html" >v19.1</option><option value="https://www.opendental.com/manual184/odtouchconnectivity.html" >v18.4</option><option value="https://www.opendental.com/manual183/odtouchconnectivity.html" >v18.3</option><option value="https://www.opendental.com/manual182/odtouchconnectivity.html" >v18.2</option><option value="https://www.opendental.com/manual181/odtouchconnectivity.html" >v18.1</option><option value="https://www.opendental.com/manual174/odtouchconnectivity.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>ODTouch: Connectivity Statuses</p></div>
<div class="GeneralPageContent">
<p>View how the device is connected to the database.</p>
<p>From <a href="odtouchsettings.html">ODTouch: Settings</a>, tap <b>Connectivity Status</b>.</p>
<img src="images/odtouchConnectivity.png" width="766" height="508"/><p class="MarginBottomZero">Information in this window is primarily read-only. </p>
<ul class="MarginBottomGap">
<li><b>Endpoint</b>: Displays the endpoint information.</li>
<li><b>Endpoint Type</b>: How the device is connected to the database.  <ul>
<li>HQ Proxy: Connected to the database using the HQ Proxy method. </li>
<li>LAN: Connected to the database using the eServices Listener. </li>
<li>WAN: Not currently an option.</li>
<li>Disconnected: The tablet is disconnected from the database. </li>
<li>Unknown: The status cannot be determined.</li>
</ul>
</li>
<li><b>Response</b>: Tap <b>Test Connection</b> to get response details. </li>
</ul>
</div>
</div>
</body>
</html>```
