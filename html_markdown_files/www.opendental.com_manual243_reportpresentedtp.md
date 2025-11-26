# File: ./www.opendental.com/manual243/reportpresentedtp.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Presented Treatment Production Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportpresentedtp','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportpresentedtp.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportpresentedtp.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportpresentedtp.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportpresentedtp.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportpresentedtp.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportpresentedtp.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportpresentedtp.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportpresentedtp.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportpresentedtp.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportpresentedtp.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportpresentedtp.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportpresentedtp.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportpresentedtp.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportpresentedtp.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportpresentedtp.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportpresentedtp.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportpresentedtp.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportpresentedtp.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportpresentedtp.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportpresentedtp.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportpresentedtp.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportpresentedtp.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportpresentedtp.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportpresentedtp.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportpresentedtp.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportpresentedtp.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportpresentedtp.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportpresentedtp.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Presented Treatment Production Report</p></div>
<div class="GeneralPageContent">
<p>The Presented Treatment Production Report totals the production from completed procedures that are attached to Saved Treatment Plans.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Monthly section, click <b>Presented TreatPlan Production</b>.</p>
<img src="images/reportPresentedTP.png" width="494" height="490"/><p> To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filters and Report Options</h2>
<p>Set criteria before generating the report.</p>
<p><b>Calendars:</b> Select the date range for the report. Set the start date in the left calendar and the end date in the right calendar. Only production for procedures set complete within the date range are included. The default is the last calendar month. </p>
<p class="MarginBottomZero"><b>Report Type</b>: Select an option to change the generated report data.  </p>
<ul class="MarginBottomGap">
<li><b>Detailed</b>: Show production by individual procedure.</li>
<li><b>Total</b>: Show total production for each user or presenter.</li>
</ul>
<p class="MarginBottomZero"><b>Order Presented</b>: Production for procedures on multiple treatment plans are only counted once. Select how production is attributed. </p>
<ul class="MarginBottomGap">
<li><b>First Presented</b>: Attribute production to the user or presenter on the treatment plan saved originally.</li>
<li><b>Last Presented</b>: Attribute production to the user or presenter on the treatment plan saved most recently.</li>
</ul>
<p class="MarginBottomZero"><b>User Displayed</b>: Select how the presenter is determined.  </p>
<ul class="MarginBottomGap">
<li><b>Presenter</b>: The <i>presenter</i> associated with the treatment plan.</li>
<li><b>Entry User</b>: The <i>entry user</i> associated with the treatment plan.</li>
</ul>
<p class="MarginBottomZero"><b>Users</b>: Select the users to include. Check <b>All</b> to include all listed users. </p>
<ul class="MarginBottomGap">
<li>When <i>User Displayed</i> is set to Presenter, filters by the user assigned as Presenter on the <a href="treatmentplanedit.html">Saved Treatment Plan</a>.</li>
<li>When <i>User Displayed</i> is set to Entry User, filters by the user assigned as User Entry on the Saved Treatment Plan (i.e., the logged-on user who created the saved treatment plan).</li>
</ul>
<p><b>Clinics:</b> Select the clinics to include. Ctrl + click to select multiple clinics or check <b>All (Includes hidden)</b> to include all clinics, including those marked hidden. Filters by clinics assigned to completed procedures.</p>
<h2>Report Preview</h2>
<p>After setting the report criteria, click <b>OK</b> to generate a print preview of the report. The layout of the resulting report depends on the selected <i>Report Type</i>. The following are examples of the reports and explanations of the report columns.</p>
<p>For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<p><b>Report Type: Detailed Report</b></p>
<img src="images/reportPresentedTPPrinted.png" width="915" height="463"/><p><b>Report Type: Totals Report</b></p>
<img src="images/reportPresentedTPPrintedTotal.png" width="909" height="395"/><p class="MarginBottomZero">Some columns may change depending on the selected <i>Report Type</i>. </p>
<ul>
<li><b>Presenter</b>: Entry user or presenter of the Saved Treatment Plan.</li>
<li><b># of Procs</b>: Only appears when Report Type of <i>Totals Report</i> is selected. Total number of procedures completed in the report date range attached to a Saved Treatment Plan for the Presenter.</li>
<li>The following fields only appear when Report Type of <i>Detailed Report</i> is selected:  <ul>
<li><b>Date Presented</b>: Date of the Saved Treatment Plan.</li>
<li><b>Date Completed</b>: Date of the completed procedure.</li>
<li><b>Descript</b>: Procedure description.</li>
</ul>
</li>
<li><b>GrossProd</b>: Gross production fee (i.e., fee billed to account).</li>
<li><b>Write-offs</b>: Insurance write-offs. Only counted if an insurance claim has been created. Reflects write-off entered in <a href="claimprocedure.html">Claim Procedure (claimproc)</a>.</li>
<li><b>Adjustments</b>: Procedure <a href="adjustments.html">Adjustments</a>.</li>
<li><b>NetProduction</b>: <span class="codeblock">Net production = GrossProd - Write-offs + Adjustments</span>.</li>
</ul>
<p class="MarginBottomGap">Production columns are totaled on the last page of the report, below the grid, in bold.</p>
</div>
</div>
</body>
</html>```
