# File: ./www.opendental.com/manual232/reportdailypatportuncollected.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Patient Portion Uncollected Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportdailypatportuncollected','+daily','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/reportdailypatportuncollected.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/reportdailypatportuncollected.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportdailypatportuncollected.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportdailypatportuncollected.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportdailypatportuncollected.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/reportdailypatportuncollected.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportdailypatportuncollected.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportdailypatportuncollected.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportdailypatportuncollected.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportdailypatportuncollected.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportdailypatportuncollected.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportdailypatportuncollected.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportdailypatportuncollected.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportdailypatportuncollected.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportdailypatportuncollected.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportdailypatportuncollected.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportdailypatportuncollected.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportdailypatportuncollected.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportdailypatportuncollected.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportdailypatportuncollected.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportdailypatportuncollected.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportdailypatportuncollected.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportdailypatportuncollected.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportdailypatportuncollected.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportdailypatportuncollected.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportdailypatportuncollected.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportdailypatportuncollected.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportdailypatportuncollected.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Patient Portion Uncollected Report</p></div>
<div class="GeneralPageContent">
<p>The Patient Portion Uncollected Report shows the uncollected patient balance of procedures completed in a date range.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the <i>Daily</i> section, click <b>Patient Portion Uncollected</b>.</p>
<img src="images/reportDailyPatPortUncollected.gif" width="797" height="304"/><p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<p>This report is non-modal so users can review accounts while the window is open.</p>
<h2>Filters</h2>
<p>Change report criteria filters to update report results.</p>
<p><b>From / To</b>: Select the start and end dates to run the report for. Only procedures completed in the selected date range will appear on the report.</p>
<p class="MarginBottomZero"><b>Clinics</b>: Select clinics to include in the report. Ctrl + click to select multiple clinics or check <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>Filters by clinic assigned to the procedure (e.g., treating clinic).</li>
<li>If user is restricted to specific clinics, only accessible clinics will list. When checking <b>All (includes hidden)</b>, results will include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.</li>
</ul>
<h2>Report Results</h2>
<p>Click <b>Refresh</b> to update the report grid based on the selected filters. The grid displays individual procedures with an uncollected patient portion meeting the filter criteria. Right-click a row and select <b>See Account</b> to open the <a href="account.html">Account Module</a> for the selected patient. The report window can stay open in the background. Descriptions of each column in the grid are below.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date</b>: The procedure completed date.</li>
<li><b>Patient Name</b>: The last name and first name of patient associated to the procedure.</li>
<li><b>Procedure</b>: The abbreviation of the completed procedure.</li>
<li><b>Fee</b>: The procedure fee (multiplied by Base Units and <a href="proceduremedical.html">Unit Quantity</a> if entered) i.e., billed fee.</li>
<li><b>Patient</b>: The total amount the patient owes after the insurance estimate or payment and write-off. Insurance estimates are only included for claims that have been created. </li>
<li><b>Adjustment</b>: The total amount of adjustments attached to the procedure. Parentheses indicate a negative adjustment total (e.g., discount).</li>
<li><b>Patient Paid</b>: The total amount of patient payments attached to the procedure. </li>
<ul>
<li>This does not include any amount applied as treatment credits from a <a href="paymentplanpatient.html">Patient Payment Plan</a> or <a href="paymentplandynamic.html">Dynamic Payment Plan</a>.</li>
</ul>
<li><b>Uncollected</b>: The remaining procedure balance after any partial patient payments, insurance estimates/payments, insurance write-offs, and adjustments.</li>
</ul>
<p>Right-click a patient and click <i>See Account</i> to open the Account Module for the selected patient. </p>
<h2>Print Preview</h2>
<p>Click <b>Print</b> to generate a print preview of the report. The print preview includes PatNum (unique Patient Number assigned in <a href="patientedit.html">Edit Patient Information</a>) in addition to the same data columns as the report results grid listed above. Dollar amount columns (e.g., Fee, Adjustment, etc) are also totaled in bold on the last page of the report below each corresponding column.</p>
<p>From the print preview window, users can print or export the report. For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<img src="images/reportDailyPatPortUncollectedPrint.png" width="841" height="399"/><h2>Questions and Answers</h2>
<p><b>The uncollected amount for a procedure does not reflect the insurance estimate/payment and write-off. Why?</b></p>
<p>Procedures on sent and received claims reflect insurance estimates/payments and write-offs. Procedures on claims with any other status do not.</p>
<p><b>The account balance is at zero but the report is still showing an uncollected patient portion. Why? </b></p>
<p>Procedures must have payments specifically allocated to them or they will still show on the report.</p>
</div>
</div>
</body>
</html>```
