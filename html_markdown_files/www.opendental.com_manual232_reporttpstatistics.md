# File: ./www.opendental.com/manual232/reporttpstatistics.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Treatment Plan Presentation Statistics Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reporttpstatistics','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/reporttpstatistics.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/reporttpstatistics.html" >v24.2</option><option value="https://www.opendental.com/manual241/reporttpstatistics.html" >v24.1</option><option value="https://www.opendental.com/manual233/reporttpstatistics.html" >v23.3</option><option value="https://www.opendental.com/manual232/reporttpstatistics.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/reporttpstatistics.html" >v23.1</option><option value="https://www.opendental.com/manual224/reporttpstatistics.html" >v22.4</option><option value="https://www.opendental.com/manual223/reporttpstatistics.html" >v22.3</option><option value="https://www.opendental.com/manual222/reporttpstatistics.html" >v22.2</option><option value="https://www.opendental.com/manual221/reporttpstatistics.html" >v22.1</option><option value="https://www.opendental.com/manual214/reporttpstatistics.html" >v21.4</option><option value="https://www.opendental.com/manual213/reporttpstatistics.html" >v21.3</option><option value="https://www.opendental.com/manual212/reporttpstatistics.html" >v21.2</option><option value="https://www.opendental.com/manual211/reporttpstatistics.html" >v21.1</option><option value="https://www.opendental.com/manual205/reporttpstatistics.html" >v20.5</option><option value="https://www.opendental.com/manual204/reporttpstatistics.html" >v20.4</option><option value="https://www.opendental.com/manual203/reporttpstatistics.html" >v20.3</option><option value="https://www.opendental.com/manual202/reporttpstatistics.html" >v20.2</option><option value="https://www.opendental.com/manual201/reporttpstatistics.html" >v20.1</option><option value="https://www.opendental.com/manual194/reporttpstatistics.html" >v19.4</option><option value="https://www.opendental.com/manual193/reporttpstatistics.html" >v19.3</option><option value="https://www.opendental.com/manual192/reporttpstatistics.html" >v19.2</option><option value="https://www.opendental.com/manual191/reporttpstatistics.html" >v19.1</option><option value="https://www.opendental.com/manual184/reporttpstatistics.html" >v18.4</option><option value="https://www.opendental.com/manual183/reporttpstatistics.html" >v18.3</option><option value="https://www.opendental.com/manual182/reporttpstatistics.html" >v18.2</option><option value="https://www.opendental.com/manual181/reporttpstatistics.html" >v18.1</option><option value="https://www.opendental.com/manual174/reporttpstatistics.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Treatment Plan Presentation Statistics Report</p></div>
<div class="GeneralPageContent">
<p>Find metrics by user regarding Treatment Plan Presentation by running the Treatment Plan Presentation Statistics report.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Monthly section, click <b>Treatment Presentation Statistics</b>.</p>
<img src="images/reportTPStatistics.png" width="500" height="493"/><p class="MarginBottomZero">This report shows various metrics about saved treatment plans, by treatment plan presenter, including: </p>
<ul class="MarginBottomGap">
<li>Total number of treatment plans saved in a date range.</li>
<li>Total number of procedures in the saved treatment plans.</li>
<li>Total number of procedures that currently have a status of scheduled or completed.</li>
<li>Gross and net totals for presented plans and procedures.</li>
</ul>
<div class="Note">Note: <ul>
<li>To assign presenters to treatment plans, see <a href="treatmentplanedit.html">Edit Treatment Plan</a>.</li>
<li>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</li>
</ul>
</div>
<br/><br/><h2>Filters</h2>
<p>Set report filters before running the report.</p>
<p class="MarginBottomZero"><b>Calendars:</b> Select the date range for the report. Only treatment plans saved within the date range will be included. The default is last month.  </p>
<ul class="MarginBottomGap">
<li>Select the start date in the left calendar.</li>
<li>Select the end date in the right calendar.</li>
</ul>
<p><b>Users</b>: Select the users (or presenters) to include in the report. Ctrl + click to select multiple users. Check <b>All</b> to include all users, including those marked <i>Is Hidden</i>.</p>
<p class="MarginBottomZero"><b>Clinics:</b> Select clinics to include in the report. Ctrl + click to select multiple clinics or check <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>Filters by clinic assigned to procedure.</li>
<li>If user is restricted to specific clinics, only accessible clinics will list.</li>
</ul>
<p class="MarginBottomZero"><b>Calculated Production</b>: Select an option to determine how production is calculated when running report. The selected option will also determine the available columns on the generated report. See Report Preview below for more information. </p>
<ul class="MarginBottomGap">
<li><b>Gross Production</b>: Select to run report calculating by gross production only.</li>
<li><b>Net Production</b>: Select to run report by calculates net production (gross production - estimated or actual write-offs - discounts - adjustments).</li>
</ul>
<p class="MarginBottomZero"><b>Order Presented</b>: Production for procedures on multiple treatment plans will only be counted once. Select to whom production for these procedures should be attributed.  </p>
<ul class="MarginBottomGap">
<li><b>First Presented</b>: Attribute production to the user or presenter on the treatment plan saved first.</li>
<li><b>Last Presented</b>: Attribute production to the user or presenter on the treatment plan saved last.</li>
</ul>
<p class="MarginBottomZero"><b>User Displayed</b>: Select how the report presenter will be determined.  </p>
<ul class="MarginBottomGap">
<li><b>Presenter</b>: The presenter associated with the treatment plan.</li>
<li><b>Entry User</b>: The user entry associated with the treatment plan.</li>
</ul>
<h2>Report Preview</h2>
<p>After setting the report criteria, click <b>OK </b>to generate a print preview of the report. Below are examples of the two report types and the report columns.</p>
<p>For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<p><b>Gross Production Example</b></p>
<img src="images/reportTPStatisticsPrinted.png" width="678" height="285"/><p><b>Net Production Example</b></p>
<img src="images/reportTPStatisticsPrintedNet.png" width="679" height="271"/><ul>
<li><b>Presenter</b>: The treatment plan presenter. Determined by the selections on the prior report window.</li>
<li><b># of Plans</b>: The number of treatment plans saved in the date range by the user.</li>
<li><b># of Procs</b>: The total number of treatment planned procedures in saved treatment plans. Excludes deleted procedures that are still listed in a saved treatment plan.</li>
<li><b># of ProcsSched</b>: The total number of treatment planned procedures in saved treatment plans that are attached to an appointment with a status of <i>scheduled</i> and were created in the date range. The appointment date must also be in the report date range.</li>
<li><b># of ProcsComp</b>: The total number of procedures completed from saved treatment plans that were created in the date range.</li>
<li>The following columns only appear when Gross Production is selected:</li>
<ul>
<li><b>GrossTPAmt</b>: The total gross amount for all treatment planned procedures in saved treatment plans created in the date range. Excludes deleted procedures that are still listed in a saved treatment plan.</li>
<li><b>GrossSchedAmt</b>: The total gross amount for all treatment planned procedures in saved treatment plans created in the date range, that are attached to an appointment with a status of <i>scheduled</i>.</li>
<li><b>GrossCompAmt</b>: The total gross amount for all completed procedures in saved treatment plans created in the date range.</li>
</ul>
<li>The following columns appear when Net Production is selected:</li>
<ul>
<li><b>NetTPAmt</b>: The total net amount for all treatment planned procedures in saved treatment plans created in the date range. Excludes deleted procedures that are still listed in a saved treatment plan.</li>
<li><b>NetSchedAmt</b>: The total net amount for all treatment planned procedures in saved treatment plans created in the date range, that are attached to an appointment with a status of <i>scheduled</i>.</li>
<li><b>NetCompAmt</b>: The total net amount for all completed procedures in saved treatment plans created in the date range.</li>
</ul>
</ul>
</div>
</div>
</body>
</html>```
