# File: ./www.opendental.com/manual232/reportinspayplanpastdue.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Insurance Payment Plans Past Due Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportinspayplanpastdue','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/reportinspayplanpastdue.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/reportinspayplanpastdue.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportinspayplanpastdue.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportinspayplanpastdue.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportinspayplanpastdue.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/reportinspayplanpastdue.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportinspayplanpastdue.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportinspayplanpastdue.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportinspayplanpastdue.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportinspayplanpastdue.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportinspayplanpastdue.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportinspayplanpastdue.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportinspayplanpastdue.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportinspayplanpastdue.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportinspayplanpastdue.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportinspayplanpastdue.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportinspayplanpastdue.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportinspayplanpastdue.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportinspayplanpastdue.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportinspayplanpastdue.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportinspayplanpastdue.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportinspayplanpastdue.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportinspayplanpastdue.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportinspayplanpastdue.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportinspayplanpastdue.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportinspayplanpastdue.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportinspayplanpastdue.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportinspayplanpastdue.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Insurance Payment Plans Past Due Report</p></div>
<div class="GeneralPageContent">
<p>Track Insurance Payment Plans with overdue payments using the Ins Pay Plans Past Due report.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Monthly section, click <b>Ins Pay Plans Past Due</b>.</p>
<img src="images/reportInsPayPlanPast.gif" width="855" height="260"/><p>The Insurance Payment Plans Past Due Report lists patients with <a href="paymentplanins.html">Insurance Payment Plans</a> that have balances overdue. This report is especially useful for orthodontic offices. Insurance payment plan past due amounts do not show in the patient's payment plans grid.</p>
<div class="Note">Note: To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</div>
<br/><br/><h2>Filters</h2>
<p>Set report criteria and filters to update the results.</p>
<p><b>Days past due</b>: Enter the number of the insurance payment is overdue to filter the report. Payment plans with at least one payment overdue the number of days entered or greater will be included.</p>
<p><b>Provs</b>: Select the providers to include. Ctrl + click to select multiple providers. Check <b>All</b> to include all listed providers.</p>
<p class="MarginBottomZero"><b>Clinics</b>: Select clinics to include in the report. Ctrl + click to select multiple clinics or check <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>Filters by clinic assigned to the Insurance Payment Plan.</li>
<li>If user is restricted to specific clinics, only accessible clinics will list. When checking <b>All (includes hidden)</b>, results will include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.</li>
</ul>
<h2>Ins Pay Plans Past Due</h2>
<p>The Ins Pay Plans Past Due grid will update immediately when filter criteria is changed. Click <b>Print</b> to immediately print the report results. Click <b>Export</b> to save the results as a .txt or .xls file file. </p>
<p>Click a column title to sort results in ascending or descending order. Below is a description of the report columns:</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Patient</b>: Name of the patient with an outstanding insurance payment plan.</li>
<li><b>DateLastPmt</b>: The date of the last received insurance plan payment. <i>01/01/0001</i> indicates a payments has never been made.</li>
<li><b>#Overdue</b>: Number of insurance plan payments that are overdue.</li>
<li><b>AmtOverdue</b>: Dollar amount of total overdue payments.</li>
<li><b>CarrierName/Phone</b>: Name and phone number of the insurance carrier attached to the overdue payment plan.</li>
</ul>
</div>
</div>
</body>
</html>```
