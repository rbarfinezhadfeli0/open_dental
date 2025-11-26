# File: ./www.opendental.com/manual/reporterasautomaticallyprocess.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - ERAs Automatically Processed Report</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reporterasautomaticallyprocess','+reportlists','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reporterasautomaticallyprocess.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reporterasautomaticallyprocess.html" >v24.2</option><option value="https://www.opendental.com/manual241/reporterasautomaticallyprocess.html" >v24.1</option><option value="https://www.opendental.com/manual233/reporterasautomaticallyprocess.html" >v23.3</option><option value="https://www.opendental.com/manual232/reporterasautomaticallyprocess.html" >v23.2</option><option value="https://www.opendental.com/manual231/reporterasautomaticallyprocess.html" >v23.1</option><option value="https://www.opendental.com/manual224/reporterasautomaticallyprocess.html" >v22.4</option><option value="https://www.opendental.com/manual223/reporterasautomaticallyprocess.html" >v22.3</option><option value="https://www.opendental.com/manual222/reporterasautomaticallyprocess.html" >v22.2</option><option value="https://www.opendental.com/manual221/reporterasautomaticallyprocess.html" >v22.1</option><option value="https://www.opendental.com/manual214/reporterasautomaticallyprocess.html" >v21.4</option><option value="https://www.opendental.com/manual213/reporterasautomaticallyprocess.html" >v21.3</option><option value="https://www.opendental.com/manual212/reporterasautomaticallyprocess.html" >v21.2</option><option value="https://www.opendental.com/manual211/reporterasautomaticallyprocess.html" >v21.1</option><option value="https://www.opendental.com/manual205/reporterasautomaticallyprocess.html" >v20.5</option><option value="https://www.opendental.com/manual204/reporterasautomaticallyprocess.html" >v20.4</option><option value="https://www.opendental.com/manual203/reporterasautomaticallyprocess.html" >v20.3</option><option value="https://www.opendental.com/manual202/reporterasautomaticallyprocess.html" >v20.2</option><option value="https://www.opendental.com/manual201/reporterasautomaticallyprocess.html" >v20.1</option><option value="https://www.opendental.com/manual194/reporterasautomaticallyprocess.html" >v19.4</option><option value="https://www.opendental.com/manual193/reporterasautomaticallyprocess.html" >v19.3</option><option value="https://www.opendental.com/manual192/reporterasautomaticallyprocess.html" >v19.2</option><option value="https://www.opendental.com/manual191/reporterasautomaticallyprocess.html" >v19.1</option><option value="https://www.opendental.com/manual184/reporterasautomaticallyprocess.html" >v18.4</option><option value="https://www.opendental.com/manual183/reporterasautomaticallyprocess.html" >v18.3</option><option value="https://www.opendental.com/manual182/reporterasautomaticallyprocess.html" >v18.2</option><option value="https://www.opendental.com/manual181/reporterasautomaticallyprocess.html" >v18.1</option><option value="https://www.opendental.com/manual174/reporterasautomaticallyprocess.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>ERAs Automatically Processed Report</p></div>
<div class="GeneralPageContent">
<p>View the status of ERAs that have been automatically or semi-automatically processed.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Lists section, click <b>ERAs Automatically Processed</b>.</p>
<img src="images/reportERAAutomaticallyProcessed.png" width="915" height="417"/><p>Alternatively, from the <a href="era.html">ERA</a> window, click <b>Auto Processed Report</b>.</p>
<p><div class="Note">Note: To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>. </div>
</p>
<h2>Filters</h2>
<p>Set the report criteria to update the results in the ERAs grid.</p>
<img src="images/ERAautoProcessReportFilters.png" width="915" height="63"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>From / To</b>: Filter results by the date the ERA was received. Click the W buttons to jump back/forward one week. </li>
<li><b>Carrier</b>: Filter by carrier name on the ERA. </li>
<li><b>Check # or EFT Trace #</b>: Only show ERAs for a specific check number or EFT trace number.</li>
<li><b>Clinics</b>: Select the clinic associated with the ERA, or use All to view all clinics.</li>
<li><b>Auto Processed Result</b>: Filter by the result of the auto-processing.  <ul>
<li><b>Semi-automatic Incomplete</b>: When using semi-automatic processing, all claims on the ERA could not be received or payment could not be finalized. </li>
<li><b>Semi-automatic Complete</b>: When using semi-automatic processing, all claims were received and the payment was finalized.</li>
<li><b>Fully-automatic Incomplete</b>: When using fully-automatic processing, all claims on the ERA could not be received or payment could not be finalized.</li>
<li><b>Fully-automatic Complete</b>: When using fully-automatic processing, all claims were received and the payment was finalized</li>
</ul>
</li>
<li><b>Acknowledge ERA(s)</b>: Highlight ERAs in the ERAs grid and click to mark them as acknowledged. When an ERA is acknowledged, it is hidden from the report by default.</li>
<li><b>Show Acknowledged</b>: Check this box to display acknowledged ERAs.</li>
</ul>
<h2>ERAs Grid</h2>
<p>After setting filter criteria, click <b>Refresh</b> to update results in the ERAs grid.</p>
<p class="MarginBottomZero">The ERAs grid displays the status of ERAs.  </p>
<ul class="MarginBottomGap">
<li>Highlight an ERA to view associated claims in the Claims grid.</li>
<li>Double-click an ERA to view it.</li>
<li>Highlight ERA(s) and click <b>Acknowledge ERA(s)</b> or right-click an ERA to acknowledge and remove it from the list. </li>
</ul>
<p>Below are descriptions of the grid columns.</p>
<img src="images/ERAautoProcessReportERAs.png" width="915" height="96"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Patient Name</b>: Lists the patient on the ERA. If more than one patient is associated with an ERA, the number of claims on the ERA shows in the Patient Name column instead of a name.</li>
<li><b>Carrier Name</b>: Lists the carrier on the ERA.</li>
<li><b>Status</b>: Current status of the ERA. <ul>
<li>Unprocessed: No claims attached to the ERA have been processed.</li>
<li>Partial: Some claims attached to the ERA have been processed, but more claims need to be processed.</li>
<li>Not Finalized: All claims attached to the ERA have been processed. Payment still needs to be finalized.</li>
<li>Finalized: All claims attached to the ERA have been processed and payment has been finalized.</li>
</ul>
</li>
<li><b>Date</b>: Date ERA was received.</li>
</ul>
<h2>Claims Grid</h2>
<p class="MarginBottomZero">The Claims grid displays claims associated with the selected ERA. </p>
<ul class="MarginBottomGap">
<li>Highlight a claim to view attached claim procedure adjustments. </li>
<li>Double-click a row to view the claim. </li>
<li>Right-click a row to Go To Account. </li>
<li>Right-click a row to Process Unsent Secondary Claims.</li>
</ul>
<p></p>
<p>Below are descriptions of the grid columns.</p>
<img src="images/ERAautoProcessReportClaims.png" width="915" height="76"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Recd</b>: X indicates claim has been marked as received.</li>
<li><b>Patient Name</b> Patient name associated to the claim. </li>
<li><b>Type</b>: See <a href="claimtypes.html">Claim Types</a></li>
<li><b>DateService</b>: Date of Service of the claim.</li>
<li><b>EraPaid</b>: Amount of the ERA paid on the individual claim.</li>
<li><b>InsEst</b>: Total insurance estimate of the claim.</li>
<li><b>InsPaid</b>: Total of all insurance payments. Includes any payments made outside of the current ERA.</li>
<li><b>InsVar</b>: Insurance variance. The total difference in the estimated insurance payment and actual insurance payment (InsEst - InsPaid = InsVar).</li>
<li><b>W/O Est</b>: Write-off estimate.</li>
<li><b>Writeoff</b>: Amount of write-off for procedure.</li>
<li><b>W/O Var</b>: Write-off variance. The total difference in estimated write-off and actual write-off (W/O Est - Write-off = W/O Var). </li>
<li><b>Supp?</b>: X indicates payment is supplemental.</li>
<li><b>Claim Adj?</b>: X indicates a claim adjustment is present.</li>
<li><b>More Claims?</b>: X indicates additional claims exist for the same date of service for the patient.</li>
</ul>
<h2>Claim Procedure Adjustments</h2>
<p>The Claim Procedure Adjustments grid displays items associated with the selected claim on an ERA. Below are descriptions of the grid columns.</p>
<p><img src="images/ERAautoProcessReportClaimProcAdj.png" width="915" height="70"/></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Proc</b>: The number of the procedure as ordered in the claim.</li>
<li><b>Proc Code</b>: Procedure code associated with the claim procedure adjustment.</li>
<li><b>Description</b>: Description of claim adjustment.</li>
<li><b>Reason</b>: Additional claim procedure adjustment details. </li>
<li><b>Adj Amount</b>: Claim procedure adjustment amount. </li>
</ul>
</div>
</div>
</body>
</html>```
