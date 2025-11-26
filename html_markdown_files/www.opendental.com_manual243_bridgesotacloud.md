# File: ./www.opendental.com/manual243/bridgesotacloud.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - SOTA Cloud Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgesotacloud','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgesotacloud.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgesotacloud.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgesotacloud.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgesotacloud.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgesotacloud.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgesotacloud.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgesotacloud.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgesotacloud.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgesotacloud.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgesotacloud.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgesotacloud.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgesotacloud.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgesotacloud.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgesotacloud.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgesotacloud.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgesotacloud.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgesotacloud.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgesotacloud.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgesotacloud.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgesotacloud.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgesotacloud.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgesotacloud.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgesotacloud.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgesotacloud.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgesotacloud.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgesotacloud.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgesotacloud.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgesotacloud.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>SOTA Cloud Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>SOTA Cloud from sotacloud.com</b>.</p>
<img src="images/bridgeSotaCloud.png" width="770" height="594"/><p>SOTA Cloud is an imaging software. Website: <a href="https://sotaimaging.com/" target="_blank">https://sotaimaging.com/</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Double-click on <b>Additional Properties</b> to change settings.  <ul>
<li>Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Practice Instance Name: A unique identifier provided by SOTA. Required.</li>
</ul>
</li>
<li>Set up a clickable bridge button.  <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click Save.</li>
</ol>
<h2>Technical Details</h2>
<p>This bridge uses an API so there is no local path to set and no executable to launch. The bridge is launched using the workstation's default web browser. SOTA Cloud is only compatible with Chromium-based browsers (e.g., Google Chrome, Microsoft Edge, etc.)</p>
<p>If utilizing the SOTA Hub, use the <a href="bridgecliosoft.html">ClioSoft/SOTA Imaging Bridge</a> instead.</p>
</div>
</div>
</body>
</html>```
