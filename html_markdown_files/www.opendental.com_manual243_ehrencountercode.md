# File: ./www.opendental.com/manual243/ehrencountercode.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Default Encounter Code</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrencountercode','ehrsettings','ehrsetupwindow','+chart','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrencountercode.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrencountercode.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrencountercode.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrencountercode.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrencountercode.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrencountercode.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrencountercode.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrencountercode.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrencountercode.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrencountercode.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrencountercode.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrencountercode.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrencountercode.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrencountercode.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrencountercode.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrencountercode.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrencountercode.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrencountercode.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrencountercode.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrencountercode.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrencountercode.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrencountercode.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrencountercode.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrencountercode.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrencountercode.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrencountercode.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrencountercode.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrencountercode.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Default Encounter Code</p></div>
<div class="GeneralPageContent">
<p>Set a default encounter code before your EHR reporting period to automatically generate a <a href="ehrencounters.html">EHR Encounters</a> (based on the code) every time a procedure is set complete. Encounters affect the denominator of <a href="ehrcqm.html">EHR Clinical Quality Measures</a>. If you do not select a default code (none) no encounters will be created, and CQM values will be zero.</p>
<ul>
<li>We recommend selecting one of nine SNOMED CT codes that are used in every CQM, thus increasing the number of encounters eligible for inclusion in CQM calculations.</li>
<li>If you choose a code not in the recommended list, patients may not be included in CQM calculations if the code does not qualify.</li>
<li>If you do not select a code at all, CQM values will be zero, though you can manually create encounters or use the <a href="ehrencountercodetool.html">Encounter Code Tool</a> to automatically generate encounters for a date range.</li>
</ul>
<br/><ol>
<li>In the main menu, click Setup, Chart, <a href="ehrsetupwindow.html">EHR</a>, then click Settings in the upper left corner to open the <a href="ehrsettings.html">EHR Settings</a> window.</li>
<li>In the <b>Default Encounter Code</b> area, select the code. <br/><img src="images/ehrDefaultEncounterCode.gif" width="454" height="268" class="ImageInParagraph"/><p>To select a recommended code, click the dropdown and select it.</p>
<ul>
<li>90052600: Initial evaluation and management of healthy individual (procedure)</li>
<li>185349003: Encounter for <i>check-up</i> (procedure)</li>
<li>185463005: Visit out of hours (procedure)</li>
<li>185465003: Weekend visit (procedure)</li>
<li>270427003: Patient-initiated encounter (procedure)</li>
<li>270430005: Provider-initiated encounter (procedure)</li>
<li>308335008: Patient encounter procedure (procedure)</li>
<li>390906007: Follow-up encounter (procedure)</li>
<li>406547006: Urgent follow-up (procedure)</li>
</ul>
<p>To select a different code (SNOMED CT, CDT, CPT, or HCPCS), click the corresponding button, then select the code. Codes must downloaded before they can be selected. See <a href="codesystemimport.html">Importing Code Systems</a>. Note that if you choose a code not in the recommended list, patients may not be included in CQM calculations if the code does not qualify.</p>
<p>If you select <i>none</i>, <a href="ehrencounters.html">EHR Encounters</a> will not be automatically generated. You must do it manually.</p>
</li>
<li>Click OK to save selections.</li>
</ol>
<br/><p>Only one encounter per date/patient/provider combination will be generated. So if a patient has procedures completed on one day, one by a dentist and one by a hygienist, an encounter will be generated for each provider. Also see <a href="ehrpregnancycode.html">EHR Default Pregnancy Code</a>.</p>
</div>
</div>
</body>
</html>```
