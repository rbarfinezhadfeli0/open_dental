# File: ./www.opendental.com/manual232/bridgefloridaprobe.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Florida Probe Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgefloridaprobe','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgefloridaprobe.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgefloridaprobe.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgefloridaprobe.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgefloridaprobe.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgefloridaprobe.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgefloridaprobe.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgefloridaprobe.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgefloridaprobe.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgefloridaprobe.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgefloridaprobe.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgefloridaprobe.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgefloridaprobe.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgefloridaprobe.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgefloridaprobe.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgefloridaprobe.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgefloridaprobe.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgefloridaprobe.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgefloridaprobe.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgefloridaprobe.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgefloridaprobe.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgefloridaprobe.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgefloridaprobe.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgefloridaprobe.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgefloridaprobe.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgefloridaprobe.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgefloridaprobe.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgefloridaprobe.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgefloridaprobe.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Florida Probe Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Florida Probe from www.floridaprobe.com</b>.</p>
<img src="images/bridgeFloridaProbe.png" width="778" height="598"/><p>Florida Probe is a periodontal charting software. Website: <a href="http://www.floridaprobe.com/" target="_blank">http://www.floridaprobe.com/</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>, typically <b>C:\Program Files (x86)\Florida Probe Corporation\FP32\fp32.exe</b>.</li>
<li>Double-click on <b>Additional Properties</b> to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Set up a clickable bridge button.  <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click OK.</li>
</ol>
<h2>Technical Details</h2>
<p>Open Dental sends the following command line arguments:<br/><span class="codeblock">fp32.exe /search /prompt /chart "&lt;PatNum or ChartNumber&gt;" /first &lt;first-name&gt; /last &lt;last-name&gt;</span></p>
</div>
</div>
</body>
</html>```
