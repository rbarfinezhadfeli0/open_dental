# File: ./www.opendental.com/manual243/bridgedentaleye.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - DentalEye Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgedentaleye','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgedentaleye.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgedentaleye.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgedentaleye.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgedentaleye.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgedentaleye.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgedentaleye.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgedentaleye.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgedentaleye.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgedentaleye.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgedentaleye.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgedentaleye.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgedentaleye.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgedentaleye.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgedentaleye.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgedentaleye.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgedentaleye.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgedentaleye.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgedentaleye.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgedentaleye.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgedentaleye.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgedentaleye.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgedentaleye.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgedentaleye.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgedentaleye.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgedentaleye.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgedentaleye.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgedentaleye.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgedentaleye.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>DentalEye Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>DentalEye</b>.</p>
<img src="images/bridgeDentalEye.png" width="770" height="594"/><p>DentalEye is an imaging software. This bridge can also be used for <a href="bridgemipacs.html">MiPACS Bridge</a>. Website: <a href="http://www.dentaleye.com/" target="_blank">http://www.dentaleye.com/</a>.</p>
<p><div class="Note">Note: Users must have DentalEye version 3.3 or greater installed.</div>
</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
<li>Double-click on a row in <b>Additional Properties</b> to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Set up a clickable bridge button.  <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click Save.</li>
</ol>
</div>
</div>
</body>
</html>```
