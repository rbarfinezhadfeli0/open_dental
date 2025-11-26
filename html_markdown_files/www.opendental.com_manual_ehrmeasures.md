# File: ./www.opendental.com/manual/ehrmeasures.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Measure Reports</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrmeasures','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrmeasures.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrmeasures.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrmeasures.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrmeasures.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrmeasures.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrmeasures.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrmeasures.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrmeasures.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrmeasures.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrmeasures.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrmeasures.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrmeasures.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrmeasures.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrmeasures.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrmeasures.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrmeasures.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrmeasures.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrmeasures.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrmeasures.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrmeasures.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrmeasures.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrmeasures.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrmeasures.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrmeasures.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrmeasures.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrmeasures.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrmeasures.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrmeasures.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Measure Reports</p></div>
<div class="GeneralPageContent">
<p>EHR measure reports detail a provider's current percentages for meaningful use objectives, for a specific reporting period. Use the numerator, denominator, and percent values in the report when attesting for meaningful use (MU). See <a href="../site/ehrattest.html">EHR Attestation</a>.</p>
<p>The objectives that show are based on the provider's stage of MU (Modified Stage 2, Stage 1, or Stage 2). See <a href="ehrmustagesetting.html">EHR Set Meaningful Use Stage</a>.</p>
<p>Hints:</p>
<ul>
<li>Check measure reports often to gauge progress and verify that percentages exceed each measure's requirement. Sometimes small steps determine the difference between meeting or not meeting a measure. Identifying and addressing data entry errors or missing information in the beginning days will make your job easier.</li>
<li>When you have questions, this window is a useful tool to quickly review measure details. Drill down for each measure and see exactly which patients and actions are included in denominators and numerators.</li>
</ul>
<br/><h2>Running a report</h2>
<ol>
<li>On the <a href="ehrdashboard1.html">EHR Dashboard</a>, click Measure Calc. <br/><img src="images/ehrMeasures1.gif" width="878" height="395" class="ImageInParagraph"/></li>
<li>Enter the reporting period's start and end date.</li>
<li>Click the Provider dropdown and select the provider to report on.  <div class="Note">Note: All providers who have the same last and first name will be grouped together in the same report. If using dummy providers, use the provider abbreviation to differentiate between providers since first and last name must be identical for EHR purposes.</div>
</li>
<li>Click Refresh to generate the report.</li>
<li>Click Print the print the report to the default printer.</li>
</ol>
<br/><p>Each row represents a measure. Rows turn green when the percentage meets the required benchmark for the selected stage of MU. Some non-percentage based measures may show (yes/no measures). These rows can be ignored.</p>
<h2>Calculation details</h2>
<p>Double click a measure calculation row to see a detailed explanation of the numerator and denominator and exactly which patients and actions are included in each.</p>
<img src="images/ehrMeasureDetails1.gif" width="736" height="530"/><ul>
<li><b>Objective</b>: The objective as described in specification sheets provided by CMS.</li>
<li><b>Measure</b>: The measure as described in the specification sheets.</li>
<li><b>Audit</b>: A list of all patients or actions included in the denominator for the measure. A brief explanation of what was, or was not entered, may also show. <ul>
<li>Green entries indicate instances that count in the numerator. An X also shows in the Met column.</li>
<li>White entries indicate instances when data could have been entered, but wasn't.</li>
</ul>
</li>
<li><b>Numerator</b>: The number of audit items that were counted in the numerator.</li>
<li><b>Denominator</b>: The number of eligible instances.</li>
<li><b>Percent</b>: The numerator divided by the denominator, or the percentage.</li>
<li><b>Exclusion</b>: If the measure offers an exclusion, an explanation will show. If the exclusion is based on a specific data value, Open Dental will track the data. For example, for CPOE medication orders, an exclusion is possible if you write less than 100 prescriptions. For this measure, Open Dental tracks and shows how many total prescriptions have been entered during the reporting period.</li>
</ul>
</div>
</div>
</body>
</html>```
