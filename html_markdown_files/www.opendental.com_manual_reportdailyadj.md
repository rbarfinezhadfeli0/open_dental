# File: ./www.opendental.com/manual/reportdailyadj.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Daily Adjustments Report</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportdailyadj','+daily','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportdailyadj.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportdailyadj.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportdailyadj.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportdailyadj.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportdailyadj.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportdailyadj.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportdailyadj.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportdailyadj.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportdailyadj.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportdailyadj.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportdailyadj.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportdailyadj.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportdailyadj.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportdailyadj.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportdailyadj.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportdailyadj.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportdailyadj.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportdailyadj.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportdailyadj.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportdailyadj.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportdailyadj.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportdailyadj.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportdailyadj.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportdailyadj.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportdailyadj.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportdailyadj.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportdailyadj.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportdailyadj.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Daily Adjustments Report</p></div>
<div class="GeneralPageContent">
<p>Use the Daily Adjustments Report to see adjustments for a date range, filtered by provider, clinic, or adjustment type.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the <i>Daily</i> section, click <b>Adjustments</b>.</p>
<img src="images/reportDailyAdj.png" width="725" height="429"/><p>Also see: <a href="adjustments.html">Adjustment</a></p>
<p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filters</h2>
<p>Set the report criteria and filters before running the report.</p>
<p><b>Calendar</b>: In the first calendar select the start date. In the second calendar select the end date. Both dates default to the current date, but any date range can be deleted.</p>
<p class="MarginBottomZero"><b>Providers</b>: Select the providers attached to adjustments to include. Check <b>All</b> to include all listed providers.  </p>
<ul class="MarginBottomGap">
<li>Filters by provider attached to the adjustment.</li>
<li>Users without the <i>Daily - View All Providers</i> permission will only see the provider associated with their <a href="securityusers.html">User</a> in the Providers list and the All checkbox will be disabled. </li>
<li>Users must have the <i>Daily - View All Providers</i> to access the full provider list and utilize the All checkbox.</li>
</ul>
<p><b>Adjustment Types:</b> Highlight the <a href="definitionsadjtypes.html">Adjustment Types</a> to include in the report. Select one or multiple types, or check <b>All</b> to include all adjustment types, including those marked hidden in Definitions.</p>
<p class="MarginBottomZero"><b>Clinics</b>: Only available when Clinics are enabled in <a href="showfeatures.html">Show Features</a>. Select clinics to include in the report.  </p>
<ul class="MarginBottomGap">
<li>Filters by clinic attached to adjustment.</li>
<li>If user is restricted to specific clinics, only accessible clinics are listed. When checking <b>All (includes hidden)</b>, results include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or adjustments not assigned to a clinic. </li>
</ul>
<h2>Report Preview</h2>
<p>Click <b>OK</b> to generate a print preview of the report. Below is an example of the report and explanation of the report columns. For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>. </p>
<img src="images/reportDailyAdjPrint.png" width="833" height="369"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Adjustment Date.</li>
<li><b>Patient Name</b>: Patient attached to the adjustment.</li>
<li><b>Prov</b>: Provider assigned to the adjustment.</li>
<li><b>Clinic</b>: Clinic assigned to the adjustment.</li>
<li><b>Adjustment Type</b>: See <a href="definitionsadjtypes.html">Definitions: Adj Types</a>.</li>
<li><b>Note</b>: Any text from the Note field of the <a href="adjustments.html">Edit Adjustment </a> window. </li>
<li><b>Amount</b>: Adjustment amount. Subtraction adjustment types are displayed as a negative number. Addition adjustment types are displayed as a positive. The total is listed on the last page of the report in bold.</li>
</ul>
</div>
</div>
</body>
</html>```
