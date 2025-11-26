# File: ./www.opendental.com/manual243/bridgecliniview.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - CliniView Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgecliniview','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgecliniview.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgecliniview.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgecliniview.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgecliniview.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgecliniview.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgecliniview.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgecliniview.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgecliniview.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgecliniview.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgecliniview.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgecliniview.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgecliniview.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgecliniview.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgecliniview.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgecliniview.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgecliniview.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgecliniview.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgecliniview.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgecliniview.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgecliniview.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgecliniview.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgecliniview.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgecliniview.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgecliniview.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgecliniview.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgecliniview.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgecliniview.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgecliniview.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>CliniView Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>CliniView</b>.</p>
<img src="images/bridgeCliniview.png" width="770" height="594"/><p>CliniView is an imaging software. Website: <a href="https://www.kavo.com/en-us/?lang=en-us" target="_blank">https://www.kavo.com/en-us/?lang=en-us</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
<li>Double-click on <b>Additional Properties</b> to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Set up a clickable bridge button.  <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click Save.</li>
</ol>
<div class="Note">Note: If the CliniView bridge does not launch, use the <a href="bridgeapteryx.html">Apteryx Bridge</a> instead.</div>
</div>
</div>
</body>
</html>```
