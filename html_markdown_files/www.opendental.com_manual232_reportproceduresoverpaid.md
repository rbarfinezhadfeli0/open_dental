# File: ./www.opendental.com/manual232/reportproceduresoverpaid.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Procedures Overpaid Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportproceduresoverpaid','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/reportproceduresoverpaid.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/reportproceduresoverpaid.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportproceduresoverpaid.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportproceduresoverpaid.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportproceduresoverpaid.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/reportproceduresoverpaid.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportproceduresoverpaid.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportproceduresoverpaid.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportproceduresoverpaid.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportproceduresoverpaid.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportproceduresoverpaid.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportproceduresoverpaid.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportproceduresoverpaid.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportproceduresoverpaid.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportproceduresoverpaid.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportproceduresoverpaid.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportproceduresoverpaid.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportproceduresoverpaid.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportproceduresoverpaid.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportproceduresoverpaid.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportproceduresoverpaid.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportproceduresoverpaid.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportproceduresoverpaid.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportproceduresoverpaid.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportproceduresoverpaid.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportproceduresoverpaid.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportproceduresoverpaid.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportproceduresoverpaid.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Procedures Overpaid Report</p></div>
<div class="GeneralPageContent">
<p>Find procedures overpaid due to insurance or patient payments, write-offs, or adjustments using the Procedures Overpaid report.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Monthly section, click <b>Procedures Overpaid</b>.</p>
<img src="images/reportProceduresOverpaid.gif" width="915" height="282"/><p>The Procedures Overpaid report lists individual procedures that have been overpaid by insurance, the patient, a write-off, or an adjustment.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our Webinar: <a href="https://youtu.be/F_sQs8GfT04">Procedures Overpaid Report</a></li>
<li>Payments, write-offs, and adjustments must be allocated to procedures in order for this report to pull data correctly.</li>
</ul>
<p> To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filters</h2>
<p><b>From / To</b>: Click the drop down or type a date to set the report date range. Filters by <i>Date</i> of completed procedure. </p>
<p><b>Providers</b>: Select the providers to include. Ctrl + click to select multiple providers. Select <b>All</b> to include all listed providers. Filters by provider attached to procedure (i.e., treating provider).</p>
<p><b>Exclude if no Insurance Payment/Write-off</b>: Check to include only overpaid procedures attached to an insurance payment or write-off. Procedures overpaid due to adjustments or patient payments only will be excluded.</p>
<p class="MarginBottomZero"><b>Clinics</b>: Select clinics to include in the report. Ctrl + click to select multiple clinics or select <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>Filters by clinic assigned to procedure.</li>
<li>If user is restricted to specific clinics, only accessible clinics will list. When selecting <b>All (includes hidden)</b>, results will include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.</li>
</ul>
<p class="MarginBottomZero"><b>Patient</b>: By default, the currently selected patient will be listed. </p>
<ul class="MarginBottomGap">
<li><b>Current</b>: Click to enters the currently selected patient.</li>
<li><b>Find</b>: Click to open <a href="patientselect.html">Select Patient</a> and find a specific patient.</li>
<li><b>All</b>: Click to remove specific patient filter and search overpaid procedure for all patients.</li>
</ul>
<h2>Procedures Overpaid Grid</h2>
<p>After setting report filters, click <b>Refresh</b> to update results in the Procedures Overpaid Grid. Below are descriptions of the report columns. Click <b>Print</b> to generate a print preview of the report results.</p>
<img src="images/reportProcsOverpaidGrid.png" width="915" height="163"/><p>Right-click an item in the grid and select <b>Go To Account</b> to open the selected patient's account.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Patient</b>: Last name and first name of patient associated with the overpaid procedure.</li>
<li><b>Date</b>: Procedure date.</li>
<li><b>Code</b>: Procedure code.</li>
<li><b>Tth</b>: Tooth number.</li>
<li><b>Prov</b>: Provider.</li>
<li><b>Fee</b>: Procedure fee.</li>
<li><b>Ins Paid</b>: Total of all entered insurance payments (including supplemental) attached to the procedure. See <a href="claimreceive.html">Receive Claim</a>.</li>
<li><b>Write-off</b>: Total of all entered write-offs (including supplemental) attached to the procedure.</li>
<li><b>Pt Paid</b>: Total of all <a href="payment.html">Patient Payments</a> attached to the procedure.</li>
<li><b>Adjust</b>: Total of all <a href="adjustments.html">Adjustments</a> attached to the procedure.</li>
<li><b>Overpayment</b>: Total overpaid amount (<i>Fee</i> - <i>Ins Paid</i> - <i>Write-off</i> - <i>Pt Paid</i> - <i>Adjust</i> = <i>Overpayment</i>).</li>
</ul>
</div>
</div>
</body>
</html>```
