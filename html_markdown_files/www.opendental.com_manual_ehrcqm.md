# File: ./www.opendental.com/manual/ehrcqm.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Clinical Quality Measures</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrcqm','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrcqm.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrcqm.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrcqm.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrcqm.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrcqm.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrcqm.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrcqm.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrcqm.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrcqm.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrcqm.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrcqm.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrcqm.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrcqm.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrcqm.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrcqm.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrcqm.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrcqm.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrcqm.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrcqm.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrcqm.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrcqm.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrcqm.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrcqm.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrcqm.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrcqm.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrcqm.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrcqm.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrcqm.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Clinical Quality Measures</p></div>
<div class="GeneralPageContent">
<span style="color:red">This information applies to EHR Modified Stage 2 for Program Years 2015 to 2018. For current information, see:</span><ul>
<li><a href="../site/ehrmodified2.html">EHR Modified Stage 2</a></li>
<li><a href="https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/2019ProgramRequirementsMedicaid.html">2019 Program Requirements - Medicaid</a></li>
<li><a href="https://opendental.com/site/ehrlicense.html">Open Dental EHR</a></li>
</ul>
<br/><p>Also see <a href="ehrdashboard1.html">EHR Dashboard</a>.</p>
<p>Reporting Clinical Quality Measures (CQMs) is an EHR Modified Stage 2 requirement. CQMs are tools used to measure and track the quality of healthcare services.</p>
<p>Open Dental reports on 9 CQMs. These CQMs were chosen for certification because they cover at least 3 National Quality Strategy (NQS) domains, focus on high-priority health conditions and best-practices for care delivery, and are applicable to dental providers.</p>
<h2>Calculations</h2>
<ul>
<li>Denominators are based on <a href="ehrencounters.html">EHR Encounters</a>. By default, encounters are not automatically generated based on completed procedures or appointments. However, you can automate the process if you set a <a href="ehrencountercode.html">EHR Default Encounter Code</a>. If you choose not to set a default, you must manually generate CQM encounters that are appropriate for each measure.</li>
<li>Numerators are based on completing specific actions and/or <a href="ehrinterventions.html">EHR Interventions</a>.</li>
</ul>
<p>For specific denominator and numerator logic for each CQM, see <a href="ehrcqmdef.html">EHR Clinical Quality Measure Descriptions</a>.</p>
<p>Some CQMs use specific code systems in calculations. To download coding systems and see which codes are used in CQMs, see <a href="codesystemimport.html">Importing Coding Systems</a>.</p>
<h2>Related links</h2>
<p class="MarginBottomZero">How to </p>
<ul class="MarginBottomGap">
<li><a href="ehrencountercode.html">EHR Default Encounter Code</a></li>
<li><a href="ehrpregnancycode.html">EHR Default Pregnancy Code</a></li>
<li><a href="ehrcqmdetails.html">EHR CQM Calculation Details</a></li>
<li><a href="ehrcqmreport.html">EHR Report Clinical Quality Measures (CQMs)</a></li>
</ul>
<p class="MarginBottomZero">CQM-related actions </p>
<ul class="MarginBottomGap">
<li><a href="ehrcqmcurrentmeds.html">EHR Attest Medications Documented</a></li>
<li><a href="entertreatment.html">Enter Treatment</a></li>
<li><a href="ehrvaccine.html">EHR Vaccine Data</a></li>
<li><a href="ehrnotperformed.html">EHR CQMs Not Performed</a></li>
</ul>
</div>
</div>
</body>
</html>```
