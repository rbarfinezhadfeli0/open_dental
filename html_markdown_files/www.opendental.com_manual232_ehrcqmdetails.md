# File: ./www.opendental.com/manual232/ehrcqmdetails.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR CQM Calculation Details</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrcqmdetails','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/ehrcqmdetails.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/ehrcqmdetails.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrcqmdetails.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrcqmdetails.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrcqmdetails.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/ehrcqmdetails.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrcqmdetails.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrcqmdetails.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrcqmdetails.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrcqmdetails.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrcqmdetails.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrcqmdetails.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrcqmdetails.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrcqmdetails.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrcqmdetails.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrcqmdetails.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrcqmdetails.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrcqmdetails.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrcqmdetails.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrcqmdetails.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrcqmdetails.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrcqmdetails.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrcqmdetails.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrcqmdetails.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrcqmdetails.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrcqmdetails.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrcqmdetails.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrcqmdetails.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR CQM Calculation Details</p></div>
<div class="GeneralPageContent">
<p>See <a href="ehrdashboard1.html">EHR Dashboard</a>.</p>
<p>The CQMs reported by Open Dental list on the <a href="ehrcqmreport.html">Clinical Quality Measures 2014 window</a>. A CQM may be represented by several rows if the data is divided into different classifications (e.g. divided by age groups). You can drill down to the patient level for each calculation to see what is included in each denominator, numerator, exception, etc.</p>
<p>Double click a row to see calculation details.</p>
<img src="images/ehrCqmEdit.gif" width="782" height="557"/><p>Audit: <a href="ehrencounters.html">EHR Encounters</a> included in the denominator, plus exclusions or exceptions.</p>
<ul>
<li>If Numerator = X then this encounter is included in the numerator.</li>
<li>If Exclusion = X then this encounter meets exclusion criteria and is not counted in the final denominator value.</li>
<li>If Exception = X, then a valid reason <a href="ehrnotperformed.html">EHR CQMs Not Performed</a> was documented for this encounter and it is not included in the final denominator value.</li>
</ul>
<br/><p>Descriptions of each denominator, numerator, exception, or exclusion also show.</p>
<ul>
<li>Denominator: All patients calculated (had an eligible encounter).</li>
<li>Numerator: All patients for whom the required action was performed (e.g. information recorded, intervention performed).</li>
<li>Exclusions: Patients who had an eligible encounter but are excluded from the denominator for a valid reason (e.g. pregnancy). Valid exclusions vary by CQM. Pregnancy is usually documented in Vital Signs as an Exclusion from BMI.</li>
<li>Exceptions: Patients who have a valid reason CQMs Not Performed documented for an eligible encounter. Exceptions are excluded from the performance rate calculation.</li>
<li>Performance Not Met: The number of encounters for which CQM data was not entered. Denominator - Numerator - Exclusions - Exceptions</li>
<li>Reporting Rate: The percentage of encounters for which CQM data was entered. Exclusions and exceptions are included in the numerator. (Numerator + Exceptions + Exclusions) divided by Denominator</li>
<li>Performance Rate: The final CQM percentage that is reported. This number subtracts exclusions and exceptions from the denominator before calculating the percentage. Numerator divided by (Denominator - Exclusions - Exceptions)</li>
</ul>
</div>
</div>
</body>
</html>```
