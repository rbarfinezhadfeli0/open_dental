# File: ./www.opendental.com/manual/reportprocedurecodes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Procedure Codes - Fee Schedules Report</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportprocedurecodes','+reportlists','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportprocedurecodes.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportprocedurecodes.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportprocedurecodes.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportprocedurecodes.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportprocedurecodes.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportprocedurecodes.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportprocedurecodes.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportprocedurecodes.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportprocedurecodes.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportprocedurecodes.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportprocedurecodes.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportprocedurecodes.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportprocedurecodes.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportprocedurecodes.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportprocedurecodes.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportprocedurecodes.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportprocedurecodes.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportprocedurecodes.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportprocedurecodes.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportprocedurecodes.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportprocedurecodes.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportprocedurecodes.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportprocedurecodes.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportprocedurecodes.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportprocedurecodes.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportprocedurecodes.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportprocedurecodes.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportprocedurecodes.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Procedure Codes - Fee Schedules Report</p></div>
<div class="GeneralPageContent">
<p>Print or export procedure codes and fees using the Procedure Codes - Fee Schedules report.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the List section, click <b>Procedure Codes - Fee Schedules</b>.</p>
<img src="images/reportProcedureCodes.png" width="427" height="342"/><p>The Procedure Codes - Fee Schedule report prints procedure fees by fee schedule. If clinic and/or provider-specific fees have been entered, a report of the fees that differ by provider/clinic can also be printed.</p>
 To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.<br/><br/><h2>Filters</h2>
<p><b>Fee schedule</b>: Select a fee schedule to print or export.</p>
<p><b>Clinic</b>: Select a clinic to view only clinic overrides for the selected fee schedule. Select <i>Default</i> to view the Global fees (i.e., no clinic overrides).</p>
<p><b>Provider</b>: Select a provider to view only provider overrides for the selected fee schedule. Select <i>Default</i> view the Global fees (i.e., no provider overrides).</p>
<p><div class="Note">Note: The Provider and Clinic options reflect the <a href="procedurefeeoverrides.html">Provider or Clinic Fee Overrides</a> in the <a href="procedurecodes.html">Procedure Codes</a> List. Choosing both a provider and clinic shows only fee overrides for that provider and clinic combination.</div>
</p>
<p><b>Show blank fees:</b> Check to include procedure codes with no fees entered for the selected fee schedule and clinic/provider combination.</p>
<p class="MarginBottomZero">Report sorting behavior:  </p>
<ul class="MarginBottomGap">
<li><b>Code</b>: Sort the report by procedure code. Codes in hidden categories are included.</li>
<li><b>Categories</b>: Group the report by procedure code category. Codes in hidden categories are not included.</li>
</ul>
<h2>Report Preview</h2>
<p>After selecting the report criteria, click <b>OK</b> to generate a print preview of the report. The following are examples of the report and explanation of the report columns.</p>
<p>For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<p><b>Example 1</b>: Global fee schedule by Category </p>
<img src="images/reportProcedureCodePrintGlobal.png" width="915" height="555"/><p><b>Example 2</b>: Clinic fee overrides by Code</p>
<img src="images/reportProcedureCodePrintClinic.png" width="915" height="333"/><p><b>Example 3:</b> Clinic and Provider fee overrides by Code</p>
<img src="images/reportProcedureCodePrintClinicProv.png" width="915" height="286"/><p class="MarginBottomZero">Some columns may change depending on the selected report sorting behavior. </p>
<ul class="MarginBottomGap">
<li><b>Category</b>: Procedure code category. Only appears when report is sorted by <i>Categories</i>. The category name appears once for each category grouping.</li>
<li><b>Code</b>: Procedure code.</li>
<li><b>Desc</b>: Procedure code description.</li>
<li><b>Abbr</b>: Procedure code abbreviation.</li>
<li><b>Fee</b>: Procedure fee from the selected fee schedule and provider/clinic combination.</li>
</ul>
</div>
</div>
</body>
</html>```
