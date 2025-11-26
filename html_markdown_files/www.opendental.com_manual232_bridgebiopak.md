# File: ./www.opendental.com/manual232/bridgebiopak.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - BioPAK Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgebiopak','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgebiopak.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgebiopak.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgebiopak.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgebiopak.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgebiopak.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgebiopak.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgebiopak.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgebiopak.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgebiopak.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgebiopak.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgebiopak.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgebiopak.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgebiopak.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgebiopak.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgebiopak.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgebiopak.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgebiopak.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgebiopak.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgebiopak.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgebiopak.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgebiopak.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgebiopak.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgebiopak.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgebiopak.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgebiopak.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgebiopak.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgebiopak.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgebiopak.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>BioPAK Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>BioPAK from www.bioresearchinc.com</b>.</p>
<img src="images/bridgeBioPAK.png" width="778" height="598"/><p>BioPAK is a digital imaging and analysis software. Website: <a href="http://www.bioresearchinc.com/" target="_blank">http://www.bioresearchinc.com/</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
<li>Double-click on a row in <b>Additional Properties</b> to change settings. Use the PatNum (enter 0) or the ChartNum (enter 1) as the patient ID.</li>
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
<p>BioPAK uses the patient number to identify selected patients. Open Dental will send the selected patients birthdate, chart number (if selected), gender, patient number, and name to BioPAK. If the patient number does not exist, a new patient record is created. If the patient number does exists but the name does not match then it will give an error that the patient already exists. If the patient record is correct, update the name to match in both softwares.</p>
</div>
</div>
</body>
</html>```
