# File: ./www.opendental.com/manual243/bridgeraymage.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - RayMage Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgeraymage','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgeraymage.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgeraymage.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgeraymage.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgeraymage.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgeraymage.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgeraymage.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgeraymage.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgeraymage.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgeraymage.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgeraymage.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgeraymage.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgeraymage.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgeraymage.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgeraymage.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgeraymage.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgeraymage.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgeraymage.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgeraymage.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgeraymage.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgeraymage.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgeraymage.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgeraymage.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgeraymage.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgeraymage.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgeraymage.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgeraymage.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgeraymage.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgeraymage.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>RayMage Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>RayMage from www.cefla.com</b>.</p>
<img src="images/bridgeRayMage.png" width="770" height="594"/><p>RayMage is imaging software. Website: <a href="http://www.cefla.com/en" target="_blank">www.cefla.com/en</a>.</p>
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
<h2>Technical Details</h2>
<p>If the patient ID already exists in RayMage, then the corresponding patient folder is opened. If the patient ID does not exists in RayMage, then a new patient folder is created and opened. When a patient ID already exists in RayMage and the patient name passed in does not match (for example when a patient name is updated), then a message box displays in RayMage asking the user if they want to change the patient name and the patient folder corresponding to the existing ID is opened.</p>
<p>Open Dental launches RayMage with the following command line arguments:</p>
<p class="codeblock">/PATID "123456" /NAME "John" /SURNAME "Smith"</p><p>The name and surname arguments is the patient's first and last name with all spaces and quotes removed from them.</p>
</div>
</div>
</body>
</html>```
