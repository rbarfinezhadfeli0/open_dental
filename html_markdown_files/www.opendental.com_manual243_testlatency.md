# File: ./www.opendental.com/manual243/testlatency.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Test Latency</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('testlatency','+misc','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/testlatency.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/testlatency.html" >v24.2</option><option value="https://www.opendental.com/manual241/testlatency.html" >v24.1</option><option value="https://www.opendental.com/manual233/testlatency.html" >v23.3</option><option value="https://www.opendental.com/manual232/testlatency.html" >v23.2</option><option value="https://www.opendental.com/manual231/testlatency.html" >v23.1</option><option value="https://www.opendental.com/manual224/testlatency.html" >v22.4</option><option value="https://www.opendental.com/manual223/testlatency.html" >v22.3</option><option value="https://www.opendental.com/manual222/testlatency.html" >v22.2</option><option value="https://www.opendental.com/manual221/testlatency.html" >v22.1</option><option value="https://www.opendental.com/manual214/testlatency.html" >v21.4</option><option value="https://www.opendental.com/manual213/testlatency.html" >v21.3</option><option value="https://www.opendental.com/manual212/testlatency.html" >v21.2</option><option value="https://www.opendental.com/manual211/testlatency.html" >v21.1</option><option value="https://www.opendental.com/manual205/testlatency.html" >v20.5</option><option value="https://www.opendental.com/manual204/testlatency.html" >v20.4</option><option value="https://www.opendental.com/manual203/testlatency.html" >v20.3</option><option value="https://www.opendental.com/manual202/testlatency.html" >v20.2</option><option value="https://www.opendental.com/manual201/testlatency.html" >v20.1</option><option value="https://www.opendental.com/manual194/testlatency.html" >v19.4</option><option value="https://www.opendental.com/manual193/testlatency.html" >v19.3</option><option value="https://www.opendental.com/manual192/testlatency.html" >v19.2</option><option value="https://www.opendental.com/manual191/testlatency.html" >v19.1</option><option value="https://www.opendental.com/manual184/testlatency.html" >v18.4</option><option value="https://www.opendental.com/manual183/testlatency.html" >v18.3</option><option value="https://www.opendental.com/manual182/testlatency.html" >v18.2</option><option value="https://www.opendental.com/manual181/testlatency.html" >v18.1</option><option value="https://www.opendental.com/manual174/testlatency.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Test Latency</p></div>
<div class="GeneralPageContent">
<p>The Test Latency tool can be used for troubleshooting if experiencing network slowness.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Misc Tools, Test Latency.</p>
<img src="images/testLatency.png" width="403" height="225"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Latency</b>: Measures turnaround time (how long it takes the computer to travel to the database and back). It is measured in milliseconds. The lower the latency, the less delay. Measurements vary from network to network, but on average a good result is less than 50 ms.</li>
<li><b>Speed</b>: Measures how long it will take to generate a complex query. It is measured in megabits per second (Mbps).</li>
</ul>
<p>Click <b>Test </b>to calculate.</p>
<p>If experiencing slowness, see <a href="troubleshootingslowness.html">Troubleshooting Slowness</a> for additional steps. </p>
</div>
</div>
</body>
</html>```
