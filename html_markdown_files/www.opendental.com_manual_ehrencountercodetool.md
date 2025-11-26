# File: ./www.opendental.com/manual/ehrencountercodetool.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Generate Encounter Codes</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrencountercodetool','ehrsettings','ehrsetupwindow','+chart','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrencountercodetool.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrencountercodetool.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrencountercodetool.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrencountercodetool.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrencountercodetool.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrencountercodetool.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrencountercodetool.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrencountercodetool.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrencountercodetool.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrencountercodetool.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrencountercodetool.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrencountercodetool.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrencountercodetool.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrencountercodetool.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrencountercodetool.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrencountercodetool.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrencountercodetool.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrencountercodetool.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrencountercodetool.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrencountercodetool.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrencountercodetool.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrencountercodetool.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrencountercodetool.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrencountercodetool.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrencountercodetool.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrencountercodetool.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrencountercodetool.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrencountercodetool.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Generate Encounter Codes</p></div>
<div class="GeneralPageContent">
<p>If you do not set a default encounter code, your <a href="ehrcqm.html">EHR Clinical Quality Measures</a> (CQM) encounters will be zero. To automatically generate encounters based on completed procedures, use the <i>Insert Encs</i> tool.</p>
<div class="Note">Note: We recommend setting a default encounter code before you start a reporting period so CQM encounters are created every time you complete a procedure. See <a href="ehrencountercode.html">EHR Default Encounter Code</a>.</div>
<br/><br/><ol>
<li>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Chart, <a href="ehrsetupwindow.html">EHR</a>, then click <a href="ehrsettings.html">Settings</a> in the upper left corner. <br/><img src="images/ehrSettings.gif" width="493" height="723" class="ImageInParagraph"/></li>
<li>Click <b>Insert Encs</b>. <br/><img src="images/ehrInsertEncs.gif" width="472" height="355" class="ImageInParagraph"/></li>
<li>Enter a start and end date for the date range.</li>
<li>Click <b>Run</b>. <br/><img src="images/ehrEncountersInsterted.gif" width="246" height="144" class="ImageInParagraph"/><p>You will see a note of the number of encounters inserted and your CQM denominators will be changed.</p>
</li>
</ol>
</div>
</div>
</body>
</html>```
