# File: ./www.opendental.com/manual/reportsgraphicsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Graphic Reports Setup</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportsgraphicsetup','reportsgraphic','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportsgraphicsetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportsgraphicsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportsgraphicsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportsgraphicsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportsgraphicsetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportsgraphicsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportsgraphicsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportsgraphicsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportsgraphicsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportsgraphicsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportsgraphicsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportsgraphicsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportsgraphicsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportsgraphicsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportsgraphicsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportsgraphicsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportsgraphicsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportsgraphicsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportsgraphicsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportsgraphicsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportsgraphicsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportsgraphicsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportsgraphicsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportsgraphicsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportsgraphicsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportsgraphicsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportsgraphicsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportsgraphicsetup.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Graphic Reports Setup</p></div>
<div class="GeneralPageContent">
<p>Graphic Reports Setup Mode is where changes can be made to the graphic report tabs, the reports in each tab, and the settings for each individual report.</p>
<p>In the <a href="reportsgraphic.html">Graphic Reports</a> window, click <b>Setup</b>. </p>
<img src="images/reportsGraphicSetupMode.gif" width="915" height="545"/><p>The <i>Graphical Setup</i> permission is required to set up reports.</p>
<p class="MarginBottomZero">Options:  </p>
<ul class="MarginBottomGap">
<li><b>Exit Setup:</b> Close Setup Mode.</li>
<li><b>Refresh Data:</b> Update the data in all reports.</li>
<li><b>Default Graphs:</b> Add or restore default reports for practice, clinic, and/or provider.</li>
<li><b>Reset A/R Graph Data:</b> Re-run aging for months reported in any A/R graphic report. This may take a significant amount of time.</li>
</ul>
<h2>Organize Graphic Reports</h2>
<p class="MarginBottomZero">Use tabs to organize graphic reports. Each tab can contain an unlimited amount of reports. </p>
<ul class="MarginBottomGap">
<li>Double-click a tab header to rename a tab.</li>
<li>Click <b>Add Tab</b> to create a new tab.</li>
<li>Click the red <b>X </b>to remove a tab. Tabs can only be removed when there are no reports within.</li>
</ul>
<p class="MarginBottomZero">Reports are organized by cell in rows and columns. </p>
<ul class="MarginBottomGap">
<li>Click <b>Add Column</b> to add a new column of empty cells.</li>
<li>Click <b>Add Row</b> to add a new row of empty cells.</li>
<li>To add a new report, drag a Graph Type to an empty cell.</li>
</ul>
<p>Hover over a report in a tab to view individual report options:</p>
<p><img src="images/reportsGraphicColumn.gif" width="30" height="31" style="margin-bottom: 0px"/>Delete an entire column of empty cells (column to be deleted will be outlined in red).</p>
<p><img src="images/reportsGraphicRow.gif" width="30" height="30" style="margin-bottom: 0px"/>Delete an entire row of empty cells (row to be deleted will be outlined in red).</p>
<p><img src="images/reportsGraphicDelete.gif" width="30" height="30" style="margin-bottom: 0px"/>Remove a report from a cell (report to be deleted will be outlined in red).</p>
<p><img src="images/reportsGraphicDrag.gif" width="30" height="30" style="margin-bottom: 0px"/>Drag a report to a different cell.</p>
<p><img src="images/reportsGraphicRefresh.gif" width="30" height="30" style="margin-bottom: 0px"/>Refresh the report data.</p>
<p><img src="images/reportsGraphicPrintExport.gif" width="30" height="30" style="margin-bottom: 0px"/>Open the Print Settings window. See Print/Export a Report.</p>
<p><img src="images/reportsGraphicEdit.gif" width="30" height="29" style="margin-bottom: 0px"/>Edit the report criteria.</p>
<br/><h2>Customize Individual Reports</h2>
<p class="MarginBottomZero">To customize a report, hover over the report, then click the Edit icon.  </p>
<ul class="MarginBottomGap">
<li>If in Setup Mode, changes to criteria can be saved.</li>
<li>If not in Setup mode, changes can be dynamically viewed, but will not be saved.</li>
</ul>
<p>The Edit Cell window will display report options as well as a preview of the report.</p>
<img src="images/reportsGraphicProd.gif" width="814" height="532"/><p>Below is a description of options. Options will vary depending on the graph type.</p>
<p><b>Group By Provider/Clinic:</b> Only shows when using Clinics. Determines how report results are grouped.</p>
<p class="MarginBottomZero">Report specific options: These options only show on specific reports, usually at the top. </p>
<ul class="MarginBottomGap">
<li><b>Included Production Sources:</b> The production sources to consider when generating a Production report. Options include Completed Procs (Procedures), Adjustments, and Write-offs (by procedure date).</li>
<li><b>Included Income Sources:</b> The income sources to consider when generating an Income report. Options include Pay Splits (Patient Payments) and Insurance Claim Payments.</li>
<li><b>Count By:</b> The criteria used to calculate the number of broken appointments in a Broken Appointments report. Options include Procedures (D9986, D9987, or both), Appointments left on the schedule, or a specific adjustment type. If adjustment type, click the dropdown to select.</li>
</ul>
<p><b>Chart Title:</b> The header for the report.</p>
<p class="MarginBottomZero"><b>Display:</b> The Y axis (quantity). Options vary depending on the graph type. </p>
<ul class="MarginBottomGap">
<li>Production $: Production dollar amount, based on included production sources</li>
<li>Count Procedures: A count of Procedures.</li>
<li>Income $: Income dollar amount, based on included income sources.</li>
<li>Receivable $:</li>
<li>Count: Number of broken appointments, based on the Count By logic.</li>
<li>Count Patients: Number of new patients. Patients are considered 'new' when they have their first completed appointment in the date range.</li>
</ul>
<p><b>Series Type:</b> Display options for plotted data.  <p>Stacked Area</p>
<img src="images/graphicReportStackedArea.gif" width="387" height="163"/><p>Stacked Column, Column</p>
<img src="images/graphicReportsStackedColumn.gif" width="382" height="161"/><p>Line</p>
<img src="images/graphicReportLine.gif" width="376" height="161"/></p>
<p><b>Group By:</b> The Y axis (time interval). Options include days, weeks, months, or years.</p>
<p><b>Legend:</b> Where to show a report color legend (e.g. identify colors by provider or clinic). To hide the legend, select None.</p>
<p class="MarginBottomZero"><b>Filter Dates:</b> The report date range. </p>
<ul class="MarginBottomGap">
<li>Quick Range: Select the general data range for the report.</li>
<li>From/To: If Quick Range is custom, select a from/to date.</li>
</ul>
<p class="MarginBottomZero"><b>Series Grouping:</b> Select additional grouping options for report data. </p>
<ul class="MarginBottomGap">
<li>All: Display data by providers/clinics.</li>
<li>Top: Group data by top providers/clinics versus all other providers/clinics. For example, to compare the top producing provider with all other providers, select 'Top, 1, provider'. The resulting chart will have two groupings: 1) the top producing provider, 2) all other providers.</li>
<li>None: Only display data for the entire practice; do not separate by provider/clinic.</li>
</ul>
</div>
</div>
</body>
</html>```
