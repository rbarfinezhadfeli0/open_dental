# File: ./www.opendental.com/manual243/reportinsoverpaid.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Insurance Overpaid Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportinsoverpaid','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportinsoverpaid.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportinsoverpaid.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportinsoverpaid.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportinsoverpaid.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportinsoverpaid.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportinsoverpaid.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportinsoverpaid.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportinsoverpaid.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportinsoverpaid.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportinsoverpaid.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportinsoverpaid.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportinsoverpaid.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportinsoverpaid.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportinsoverpaid.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportinsoverpaid.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportinsoverpaid.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportinsoverpaid.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportinsoverpaid.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportinsoverpaid.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportinsoverpaid.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportinsoverpaid.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportinsoverpaid.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportinsoverpaid.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportinsoverpaid.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportinsoverpaid.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportinsoverpaid.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportinsoverpaid.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportinsoverpaid.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Insurance Overpaid Report</p></div>
<div class="GeneralPageContent">
<p>The Insurance Overpaid Report finds situations where the insurance payment, plus any write-off, exceeds the procedure fee.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Monthly section, click <b>Insurance Overpaid</b>.</p>
<img src="images/reportInsuranceOverpaid.PNG" width="547" height="523"/><p>The purpose of this report is to identify situations where it may be necessary to adjust procedure fees to account for what insurance companies are paying. To resolve overpayments on procedures one by one, use the <a href="reportproceduresoverpaid.html">Procedures Overpaid Report</a> instead.</p>
<p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filters</h2>
<p>Set the report criteria and filters before running the report.</p>
<p><b>Calendar</b>: Set the date range to run the report. Select the start date on the left calendar and the end date on the right calendar. Filters by procedure date.</p>
<p class="MarginBottomZero"><b>Clinics</b>: Only available when Clinics are enabled in <a href="showfeatures.html">Show Features</a>. Select clinics to include in the report. Check <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>Filters by clinic assigned to procedure.</li>
<li>If user is restricted to specific clinics, only accessible clinics are listed. When checking <b>All (includes hidden)</b>, results include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or procedures not assigned to a clinic. </li>
</ul>
<p class="MarginBottomZero">Filter Options:  </p>
<ul class="MarginBottomGap">
<li><b>Filter results by procedure</b>: Group the report by procedure.</li>
<li><b>Filter results by patient and date</b>: Group the report by patient and date. Patients are only included if their total fees for all procedures completed on the same date were overpaid.</li>
</ul>
<h2>Report Preview</h2>
<p>Click <b>OK</b> to generate a print preview of the report. The following is an example of the report and explanation of the report columns. For a description of toolbar buttons, <a href="reportcomplex.html">Complex Report System</a>.</p>
<img src="images/reportInsuranceOverpaid2.PNG" width="747" height="267"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Pat Name</b>: Patient last name and first name.</li>
<li><b>Date</b>: <a href="procedureedit.html">Procedure</a> date (i.e., date completed).</li>
<li><b>Fee</b>: When <i>Filter results by procedure</i> is selected, this is the individual procedure fee. When <i>Filter results by patient and date</i> is selected, this is the total fees billed for the date.</li>
<li><b>InsPaid+W/O</b>: Total of all finalized insurance payments and write-offs.</li>
</ul>
<p>Totals for the <i>Fee</i> and <i>InsPaid+W/O</i> columns are included in bold on the last page of the report.</p>
<h2>Troubleshooting</h2>
<p>To handle the items on this list, find the original EOBs to verify payment information.</p>
<p><b>Fixing Incorrect Payment Amounts</b>: If the incorrect payment amount was entered, it can only be corrected once any deposit slip and finalized insurance payment are deleted. Once deleted, the payment can be fixed and refinalized and deposit slip recreated. Alternatively, to prevent a change in historical data, a negative supplemental payment can be added with notes that it is a correction and not a refund.</p>
<p><b>Fixing Incorrect Write-offs</b>: If write-off amounts were entered too high, add supplemental payments for the necessary procedures and correct the write-offs by adding negative write-off amounts (e.g., if a write-off entered was $10 too high, create a supplemental payment with a -10 write-off). </p>
<p><b>Sending a Refund</b>: If insurance truly did overpay, they must be notified so that a refund can be arranged. See <a href="insurancerefunds.html">Insurance Refunds</a> for detailed instructions on creating insurance refunds in Open Dental.</p>
</div>
</div>
</body>
</html>```
