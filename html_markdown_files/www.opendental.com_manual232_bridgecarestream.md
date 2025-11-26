# File: ./www.opendental.com/manual232/bridgecarestream.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Carestream Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgecarestream','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgecarestream.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgecarestream.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgecarestream.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgecarestream.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgecarestream.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgecarestream.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgecarestream.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgecarestream.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgecarestream.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgecarestream.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgecarestream.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgecarestream.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgecarestream.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgecarestream.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgecarestream.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgecarestream.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgecarestream.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgecarestream.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgecarestream.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgecarestream.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgecarestream.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgecarestream.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgecarestream.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgecarestream.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgecarestream.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgecarestream.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgecarestream.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgecarestream.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Carestream Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Carestream Ortho/OMS from www.carestreamdental.com</b>.</p>
<img src="images/bridgeCarestream.png" width="778" height="598"/><p>Carestream is a digital imaging software. <a href="https://www.carestream.com/en/us" target="_blank">https://www.carestream.com/en/us</a>.</p>
<p>This bridge is only for Carestream Ortho/OMS. For the standard Carestream bridge, use <a href="bridgetrophyenhanced.html">Trophy (Enhanced) Bridge</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
<li>Double-click on a row in <b>Additional Properties</b> to change settings.  <ol>
<li>Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Verify the <b>Patient.ini path</b>. If changed, the value cannot exceed 150 characters.</li>
</ol>
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
</div>
</div>
</body>
</html>```
