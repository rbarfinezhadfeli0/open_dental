# File: ./www.opendental.com/manual232/reportmiscsettings.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Report Setup: Misc Settings</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportmiscsettings','reportssetup','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/reportmiscsettings.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/reportmiscsettings.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportmiscsettings.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportmiscsettings.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportmiscsettings.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/reportmiscsettings.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportmiscsettings.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportmiscsettings.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportmiscsettings.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportmiscsettings.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportmiscsettings.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportmiscsettings.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportmiscsettings.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportmiscsettings.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportmiscsettings.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportmiscsettings.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportmiscsettings.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportmiscsettings.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportmiscsettings.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportmiscsettings.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportmiscsettings.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportmiscsettings.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportmiscsettings.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportmiscsettings.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportmiscsettings.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportmiscsettings.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportmiscsettings.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportmiscsettings.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Report Setup: Misc Settings</p></div>
<div class="GeneralPageContent">
<p>Miscellaneous report settings control the default options for standard reports.</p>
<p>In the <a href="reportssetup.html">Reports Setup</a> window, click the Misc Settings tab.</p>
<img src="images/reportMiscSettings.png" width="566" height="712"/><p>Check a box to select a setting; uncheck a box to deselect.</p>
<p class="MarginBottomZero"><b>Wrap columns when printing:</b> Set whether or not column text will wrap to the next line when printing complex reports and user queries.  </p>
<ul class="MarginBottomGap">
<li>Checked: Column text will automatically wrap if needed.</li>
<li>Unchecked: Text will not wrap.</li>
</ul>
<p class="MarginBottomZero"><b>Show PatNum:</b> Aging, OutstandingIns, ProcsNotBilled: Set whether or not the patient number shows with patient name in the Aging of A/R, Outstanding Insurance Claims, and Procedures Not Billed to Insurance reports. </p>
<ul class="MarginBottomGap">
<li>Checked: Patient number will be included (e.g., 40-Dawn, Trisha).</li>
<li>Unchecked: Patient number will not be included (e.g., Dawn, Trisha).</li>
</ul>
<p class="MarginBottomZero"><b>Monthly P&amp;I scheduled production subtracts PPO write-offs:</b></p>
<ul class="MarginBottomGap">
<li>Checked: Automatically subtract the write-off amount from anticipated production in Monthly <a href="reportprodinc.html">Production and Income Reports</a> (Scheduled column). This only applies to future dates where the work has not been completed and only affects insurance plans with a PPO Percentage plan type.</li>
<li>Unchecked: Do not automatically subtract the write-off amount from anticipated production in Monthly Production and Income reports. </li>
</ul>
<p class="MarginBottomZero"><b>Default to showing clinic info on Daily P&amp;I report:</b> Set the default setting for <i>Show Clinic Info</i> on Daily Production and Income report. </p>
<ul class="MarginBottomGap">
<li>Checked: By default, the report will print in landscape, show a clinic column, and can optionally be grouped by clinic (<i>Show Clinic Info</i> checked).</li>
<li>Unchecked: By default, the report will print in portrait mode and clinic information won't show (<i>Show Clinic Info</i> unchecked).</li>
</ul>
<p class="MarginBottomZero"><b>Default to showing clinic breakdown on P&amp;I reports:</b> Set the default setting for <i>Show Clinic Breakdown</i> in Production and Income reports. </p>
<ul class="MarginBottomGap">
<li>Checked: By default the report will group by clinic (<i>Show Clinic Breakdown</i> checked).</li>
<li>Unchecked: By default, the report will group by date and intermingle clinics (<i>Show Clinic Breakdown</i> unchecked).</li>
</ul>
<p class="MarginBottomZero"><b>Show a verbose history when previewing reports:</b> Set the default setting for verbose history when running reports via the <a href="reportcomplex.html">Complex Report System</a>. </p>
<ul class="MarginBottomGap">
<li>Checked: By default, a report query will populate when a complex report is run. The query shows the elapsed time of each generated item in the report. This is useful for large offices whose reports take a long time to generate. Click Copy to Clipboard to save the history and paste into a document.</li>
<li>Unchecked: A report query will not populate when a complex report is run.</li>
</ul>
<p class="MarginBottomZero"><b>Allow using today's date in Provider Payroll report:</b> Determines whether or not the <a href="reportprovpayroll.html">Provider Payroll Production and Income Report</a> (detailed) allows including today's date. </p>
<ul class="MarginBottomGap">
<li>Checked: Allow the date range to include today's date.</li>
<li>Unchecked: Block the date range from including today or future dates. For example, if you capture Claim Snapshots at the end of day via Service, you may want to block today's date.</li>
</ul>
<p class="MarginBottomZero"><b>Calculate write-offs by claim snapshot for today's date in Net Production Detail report:</b> Determines which amount to use as the write-off in the <a href="reportnetproddaily.html">Net Production Detail Daily Report</a>. </p>
<ul class="MarginBottomGap">
<li>Checked: Use the write-off amount in the Claim Snapshot for today's date.</li>
<li>Unchecked: Use the write-off amount for the current <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a>.</li>
</ul>
<p class="MarginBottomZero"><b>Incomplete Procedure Note Report defaults:</b> These settings determine the default state for corresponding checkboxes in the <a href="reportincompleteprocnote.html">Incomplete Procedure Notes Report</a>. </p>
<ul class="MarginBottomGap">
<li><b>Include procedures without a note in the Incomplete Procedures Report:</b> Set the default state for the <i>Include procedures for patients with no notes on any procedure for the same day</i> checkbox. <ul>
<li>Checked: Box will be checked.</li>
<li>Unchecked: Box will be unchecked.</li>
</ul>
</li>
<li><b>Include procedures with a note that is unsigned in the Incomplete Procedures Report:</b> Set the default state for the <i>Include procedures with a note that is unsigned</i> checkbox. <ul>
<li>Checked: Box will be checked.</li>
<li>Unchecked: Box will be unchecked.</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero"><b>Assume all procedures are in the General benefit category by default in the Treatment Finder report:</b></p>
<ul class="MarginBottomGap">
<li>Checked: Procedures for a patient apply towards annual max by assuming the procedures are in the general category.</li>
<li>Unchecked: Does not apply all procedures to the general category.</li>
</ul>
<p class="MarginBottomZero"><b>Default to 'Date Range' tab in Outstanding Insurance Report:</b> See <a href="reportoutins.html">Outstanding Insurance Claims Report</a>. </p>
<ul class="MarginBottomGap">
<li>Checked: Report defaults to <i>Date Range</i> tab view.</li>
<li>Unchecked: Report defaults to <i>Days Old</i> tab view.</li>
</ul>
<p class="MarginBottomZero"><b>Default to including hidden treatment planned prepayments on the Payments report</b>: Determines the default behavior for hidden splits on the <a href="reportdailypayments.html">Daily Payments Report</a>. </p>
<ul class="MarginBottomGap">
<li>Checked: Include hidden splits (treatment planned prepayments) on the Payments report by default.</li>
<li>Unchecked: Do not include hidden splits on the Payments report by default.</li>
</ul>
<p class="MarginBottomZero"><b>Default selected date for PPO write-offs:</b> Set the default setting for <i>Show insurance write-offs</i> in Production and Income, PPO Write-off, Daily Write-off, Monthly Production Goals, Custom Aging and Receivables Breakdown reports. See <a href="writeoffstoproduction.html">Show Insurance Writeoffs</a> for more details. </p>
<ul class="MarginBottomGap">
<li>Insurance Pay Date: Default to use the date of insurance payment.</li>
<li>Procedure Date: Default to use the date the procedure was completed.</li>
<li>Initial Claim Date/Ins Pay Date: Default to using a combination of initial claim date for write-off estimates, and then insurance pay date for write-off adjustments.</li>
</ul>
<p><b>Excluded Codes for Incomplete Procedure Notes Report</b>: Determine which codes to optionally exclude from the Incomplete Procedure Notes report. D9986 ( Missed) and D9987 (Cancelled) are entered by default. Click <b>[...]</b> to add additional codes.</p>
</div>
</div>
</body>
</html>```
