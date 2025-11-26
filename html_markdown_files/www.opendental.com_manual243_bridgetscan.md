# File: ./www.opendental.com/manual243/bridgetscan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Tscan Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgetscan','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgetscan.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgetscan.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgetscan.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgetscan.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgetscan.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgetscan.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgetscan.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgetscan.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgetscan.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgetscan.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgetscan.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgetscan.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgetscan.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgetscan.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgetscan.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgetscan.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgetscan.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgetscan.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgetscan.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgetscan.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgetscan.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgetscan.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgetscan.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgetscan.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgetscan.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgetscan.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgetscan.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgetscan.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Tscan Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Tscan from www.tekscan.com</b>.</p>
<img src="images/bridgeTscan.png" width="770" height="594"/><p>Tscan is digital imaging software. Website: <a href="http://www.tekscan.com" target="_blank">www.tekscan.com</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the<b> Path of file to open</b>.</li>
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
<h2>Technical Data</h2>
<p>Patient ID is the key link between Open Dental and Tscan. The Tscan program requires the patient ID to be composed of letters and numbers only. If the <i>Enter 0 to use PatientNum, or 1 to use ChartNum</i> property is set to 1, then any characters that are not letters or numbers are removed before the bridge is invoked. When the bridge is invoked, Tscan performs a case-insensitive search to locate the existing patient. If a patient ID match is found for an existing patient within the Tscan database, then the found patient is selected in Tscan. If the patient ID is not found, then a new patient is created in Tscan. If Tscan finds the same patient ID and there is discrepancy between first, last or middle names, then a warning message is displayed.</p>
<p>Additionally, the bridge always sends the patient first and last name to Tscan and removes any characters which are not letters or numbers. If a patient middle name has been entered, then the bridge sends the patient middle name and removes any characters which are not letters or numbers. If the patient has a birthdate entered in Open Dental, then the birthdate is sent over to Tscan; otherwise, no birthdate is sent. If the patient gender is set to male or female, then the gender information is sent to Tscan. Otherwise, if the patient gender is set to unknown then the gender is not sent to Tscan.</p>
</div>
</div>
</body>
</html>```
