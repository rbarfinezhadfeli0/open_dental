# File: ./www.opendental.com/manual232/bridgeaudaxceph.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - AudaxCeph Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgeaudaxceph','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgeaudaxceph.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgeaudaxceph.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgeaudaxceph.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgeaudaxceph.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgeaudaxceph.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgeaudaxceph.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgeaudaxceph.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgeaudaxceph.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgeaudaxceph.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgeaudaxceph.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgeaudaxceph.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgeaudaxceph.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgeaudaxceph.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgeaudaxceph.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgeaudaxceph.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgeaudaxceph.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgeaudaxceph.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgeaudaxceph.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgeaudaxceph.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgeaudaxceph.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgeaudaxceph.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgeaudaxceph.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgeaudaxceph.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgeaudaxceph.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgeaudaxceph.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgeaudaxceph.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgeaudaxceph.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgeaudaxceph.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>AudaxCeph Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>AudaxCeph</b>.</p>
<img src="images/bridgeAudaxCeph.png" width="778" height="598"/><p>AudaxCeph is an x-ray analysis software. Website: <a href="http://www.audaxceph.com/" target="_blank">http://www.audaxceph.com/</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Double-click on a row in <b>Additional Properties</b> to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Set up a clickable bridge button.  <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click OK.</li>
</ol>
<p>The AudaxCeph bridge must be open before he AudaxCeph bridge button in Open Dental will work. If a patient is selected in Open Dental, but AudaxCeph is already open with a different patient selected, clicking the bridge button will not change the patient.</p>
<h2>Technical Details</h2>
<p>Because of the AudaxCeph bridge, the following occurs:</p>
<p>Patient Status: Every patient opened in AudaxCeph will have a patient status of active, even if a different patient status (e.g., deceased, inactive) has been selected on the Edit Patient Information window in Open Dental.</p>
<p>Gender: There are four gender selections in Open Dental (male, female, other, unknown) and only two in AudaxCeph (male, female). All unknown or other genders in Open Dental are translated to a male gender in AudaxCeph.</p>
<p>How the bridge works: When the bridge is enabled, Open Dental creates an update.xml file in the installation folder which AudaxCeph will read from.</p>
</div>
</div>
</body>
</html>```
