# File: ./www.opendental.com/manual243/bridgedemandforce.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Demandforce Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgedemandforce','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgedemandforce.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgedemandforce.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgedemandforce.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgedemandforce.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgedemandforce.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgedemandforce.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgedemandforce.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgedemandforce.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgedemandforce.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgedemandforce.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgedemandforce.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgedemandforce.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgedemandforce.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgedemandforce.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgedemandforce.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgedemandforce.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgedemandforce.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgedemandforce.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgedemandforce.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgedemandforce.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgedemandforce.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgedemandforce.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgedemandforce.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgedemandforce.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgedemandforce.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgedemandforce.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgedemandforce.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgedemandforce.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Demandforce Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>DemandForce from www.demandforce.com</b>.</p>
<img src="images/bridgeDemandforce.png" width="770" height="594"/><p>Demandforce is a marketing and communication platform for dental practices. Website: <a href="https://www.demandforce.com/" target="_blank">https://www.demandforce.com/.</a></p>
<p><div class="Note">Note: As of February 2017, Demandforce no longer develops D3One. This bridge was implemented for this specific software. If D3One was obtained prior to its discontinuation, the bridge will work. Otherwise, D3One is no longer available.</div>
</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Change the <b>Path of file to open</b> to the Demandforce executable (e.g., demandforce.exe or d3one.exe).</li>
<li>Under <b>Additional Properties</b>, double-click the Value cell then enter the Demandforce license key.</li>
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
<p>The bridge writes out an XML file with all patient data. Use Demandforce to sync the XML file.</p>
</div>
</div>
</body>
</html>```
