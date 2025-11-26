# File: ./www.opendental.com/manual/ehrencounters.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Encounters</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrencounters','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrencounters.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrencounters.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrencounters.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrencounters.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrencounters.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrencounters.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrencounters.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrencounters.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrencounters.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrencounters.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrencounters.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrencounters.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrencounters.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrencounters.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrencounters.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrencounters.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrencounters.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrencounters.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrencounters.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrencounters.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrencounters.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrencounters.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrencounters.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrencounters.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrencounters.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrencounters.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrencounters.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrencounters.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Encounters</p></div>
<div class="GeneralPageContent">
<p>Encounters are used to calculate <a href="ehrcqm.html">EHR Clinical Quality Measures</a>. Each time you have an interaction with a patient, an encounter can be created. CQM denominators and numerators take into account eligible encounters. If no encounters are created, your CQM data values will be 0.</p>
<p>To generate encounters, you have three options:</p>
<p>Option 1(Recommended): Generate encounters automatically based on a recommended a default encounter code. Set a default encounter code before your reporting period begins (see <a href="ehrsettings.html">EHR Settings</a>). When a procedure is set complete, one encounter code will be automatically generated per date/patient/provider combination. There are 9 encounter codes we recommend because they are used in every measure.</p>
<p>Option 2: Generate encounter codes automatically using the Insert Encounter tool. This is usually done if you do not set the default code before the reporting period begins. See <a href="ehrencountercodetool.html">EHR Generate Encounter Codes</a>.</p>
<p>Option 3: Manually create encounters with a qualified code specific to each CQM measure.</p>
<h2>Add an encounter manually</h2>
<ol>
<li>On the <a href="ehrdashboard1.html">EHR Dashboard</a>, click <b>Encounters</b>. <br/><img src="images/ehrEncounters.gif" width="767" height="265" class="ImageInParagraph"/><p>All encounters will list, both automatically and manually created.</p>
</li>
<li>Click Add. <br/><img src="images/ehrEncounterInfo.gif" width="581" height="453" class="ImageInParagraph"/></li>
<li>Enter the encounter information and click OK. <ul>
<li><b>Date</b>: The date of the encounter.</li>
<li><b>Provider</b>: The provider associated with the encounter.</li>
<li><b>Code</b>: Select a qualified code for the CQM measure. Click SNOMED CT, HCPCS, or CPT to select from an imported code system, or CDT to select a CDT code. Once selected, the code system and description will show. See <a href="snomedct.html">SNOMED CT Codes</a> and <a href="cptcodes.html">CPT Codes</a>.</li>
<li><b>Note</b>: Notes about the encounter.</li>
</ul>
</li>
</ol>
</div>
</div>
</body>
</html>```
