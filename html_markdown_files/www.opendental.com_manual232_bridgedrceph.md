# File: ./www.opendental.com/manual232/bridgedrceph.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dr. Ceph Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgedrceph','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgedrceph.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgedrceph.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgedrceph.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgedrceph.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgedrceph.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgedrceph.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgedrceph.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgedrceph.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgedrceph.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgedrceph.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgedrceph.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgedrceph.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgedrceph.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgedrceph.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgedrceph.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgedrceph.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgedrceph.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgedrceph.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgedrceph.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgedrceph.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgedrceph.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgedrceph.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgedrceph.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgedrceph.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgedrceph.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgedrceph.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgedrceph.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgedrceph.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dr. Ceph Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Dr. Ceph from www.fyitek.com</b>.</p>
<img src="images/bridgeDrCeph.png" width="778" height="598"/><p>Dr. Ceph is an orthodontic imaging software. Website: <a href="https://fyitek.com/software/drceph" target="_blank">https://fyitek.com/software/drceph</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
<li>Double-click on a row in <b>Additional Properties</b> to change settings.  <ul>
<li>Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Customize race options when opening a patient. See below for details.</li>
</ul>
</li>
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
<p><b>Custom Patient Race Options</b>:<br/> Enter race options to choose from, separating each by a comma. Dr Ceph is programmed with White, Black, Hispanic, and Asian. Two custom options are allowed as well. </p>
<p>When launching Dr Ceph, a window will launch where race, treatment phase, xray location, photo location, and xray date can be entered.</p>
<img src="images/bridgedrcephOptions.png" width="677" height="359"/></div>
</div>
</body>
</html>```
