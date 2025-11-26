# File: ./www.opendental.com/manual232/bridgeperiopal.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - PerioPal Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgeperiopal','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgeperiopal.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgeperiopal.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgeperiopal.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgeperiopal.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgeperiopal.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgeperiopal.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgeperiopal.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgeperiopal.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgeperiopal.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgeperiopal.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgeperiopal.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgeperiopal.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgeperiopal.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgeperiopal.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgeperiopal.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgeperiopal.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgeperiopal.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgeperiopal.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgeperiopal.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgeperiopal.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgeperiopal.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgeperiopal.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgeperiopal.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgeperiopal.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgeperiopal.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgeperiopal.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgeperiopal.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgeperiopal.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>PerioPal Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>PerioPal</b> in the list.</p>
<img src="images/bridgePeriopal.png" width="778" height="598"/><p>PerioPal is voice activated software for periodontal examinations. The PerioPal website is no longer available.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
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
<p>The bridge uses a command line as follows:<p class="codeblock">[Application Path]/PerioPal "PtChart;PtName;PtBday;PtMedAlert;"</p></p>
<p>Where :<p class="codeblock">[Application Path ] Usually = C{\Program Files\PerioPal\</p><p class="codeblock">Pt Chart = AlphaNumeric Chart number from the Office Management System</p><p class="codeblock">PtName = Patients Last, First Middle Init</p><p class="codeblock">PtBday is the Patient Birthdate in any Microsoft Access compatible date format</p><p class="codeblock">Pt MedAlert is a Y or N .</p></p>
</div>
</div>
</body>
</html>```
