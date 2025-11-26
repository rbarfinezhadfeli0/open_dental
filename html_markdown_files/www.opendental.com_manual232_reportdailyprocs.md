# File: ./www.opendental.com/manual232/reportdailyprocs.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Daily Procedures Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportdailyprocs','+daily','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/reportdailyprocs.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/reportdailyprocs.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportdailyprocs.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportdailyprocs.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportdailyprocs.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/reportdailyprocs.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportdailyprocs.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportdailyprocs.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportdailyprocs.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportdailyprocs.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportdailyprocs.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportdailyprocs.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportdailyprocs.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportdailyprocs.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportdailyprocs.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportdailyprocs.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportdailyprocs.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportdailyprocs.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportdailyprocs.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportdailyprocs.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportdailyprocs.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportdailyprocs.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportdailyprocs.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportdailyprocs.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportdailyprocs.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportdailyprocs.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportdailyprocs.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportdailyprocs.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Daily Procedures Report</p></div>
<div class="GeneralPageContent">
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the <i>Daily</i> section, click <b>Procedures</b>.</p>
<img src="images/reportDailyProcsDlg.gif" width="753" height="468"/><p>The Daily Procedures Report lists all completed procedures within a date range. This report can be used to track quantity and production of a specific procedure, to generate a list of patients that had a specific procedure performed, or to track overall production.</p>
<p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filters</h2>
<p>Set the report criteria and filters before running the report.</p>
<p><b>Calendar</b>: Select the date range to include in the report. Select the starting date in the left calendar; select the end date in the right calendar.</p>
<p class="MarginBottomZero"><b>Providers</b>: Select the providers to include. Ctrl + click to select multiple providers. Check <b>All</b> to include all providers, including those marked <i>Hidden on Reports</i>.  </p>
<ul class="MarginBottomGap">
<li>Filters by treating provider (i.e., provider assigned to <a href="procedureedit.html">Procedure</a>).</li>
<li>Users without the <i>Daily - View All Providers</i> permission will only see the provider associated with their <a href="securityusers.html">User</a> in the Providers list and the All checkbox will be disabled. </li>
<li>Users must have the <i>Daily - View All Providers</i> to access the full provider list and utilize the All checkbox.</li>
</ul>
<p class="MarginBottomZero"><b>Type</b>: Choose which type of report to run. </p>
<ul class="MarginBottomGap">
<li><b>Individual Procedures</b>: Lists all patients, procedures and production, ordered by date.</li>
<li><b>Grouped by Procedure Code</b>: Groups procedure codes together and removes patient names to show quantity and fees only.</li>
</ul>
<p class="MarginBottomZero"><b>Only for procedure codes similar to</b>: Filter the report to only include certain procedure codes. </p>
<ul class="MarginBottomGap">
<li>Enter a complete procedure code (e.g., D1234) to limit the report to a single procedure code.</li>
<li>Enter a partial procedure code (e.g., D12) to include all similar codes (e.g., D1234, D1245, etc)</li>
</ul>
<p class="MarginBottomZero"><b>Clinics</b>: Select specific clinics, or check <b>All (includes hidden)</b> to include all patients, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>Filters by clinic assigned to procedure.</li>
<li>If user is restricted to specific clinics, only accessible clinics will list. When checking <b>All (includes hidden)</b>, results will include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or procedures not assigned to a clinic. </li>
</ul>
<h2>Report Preview</h2>
<p>Click <b>OK</b> to generate a print preview the report. The resulting report will change depending on the selected <i>Type</i>. Below are examples of the report results and descriptions of each column on the report. </p>
<p>For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<p><b>Report Type: Individual Procedures</b></p>
<img src="images/reportDailyProcs.gif" width="841" height="366"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Date procedure was set complete.</li>
<li><b>Patient Name</b>: Patient procedure was set complete for.</li>
<li><b>Code</b>: Procedure code. </li>
<li><b>Tooth</b>: Tooth number, if applicable.</li>
<li><b>Description</b>: Description of the procedure code. </li>
<li><b>Provider</b>: Provider assigned to the procedure (i.e., treating provider). </li>
<li><b>Clinic</b>: Only show when Clinics feature is enabled (see <a href="showfeatures.html">Show Features</a>). Clinic assigned to the procedure. This may differ from the patient's assigned clinic.</li>
<li><b>Fee</b>: Procedure amount (i.e., fee billed to the patient's account). </li>
</ul>
<p><b>Report Type: Grouped by Procedure Code</b></p>
<img src="images/reportDailyProcsGrouped.gif" width="841" height="348"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Category</b>: The procedure code category assigned to the procedure. See <a href="procedurecodeedit.html">Procedure Code Edit</a>.</li>
<li><b>Code</b>: Procedure code.</li>
<li><b>Description</b>: Description of the procedure code.</li>
<li><b>Quantity</b>: Number of these procedure codes set complete for the selected date range.</li>
<li><b>Average Fee</b>: The average (Total Fees divided by Quantity) of the fee billed for the procedure code. </li>
<li><b>Total Fees</b>: The total of the fees billed for the procedure code. </li>
</ul>
</div>
</div>
</body>
</html>```
