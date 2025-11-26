# File: ./www.opendental.com/manual232/reportpaymentplan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Payment Plans Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportpaymentplan','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/reportpaymentplan.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/reportpaymentplan.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportpaymentplan.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportpaymentplan.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportpaymentplan.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/reportpaymentplan.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportpaymentplan.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportpaymentplan.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportpaymentplan.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportpaymentplan.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportpaymentplan.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportpaymentplan.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportpaymentplan.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportpaymentplan.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportpaymentplan.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportpaymentplan.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportpaymentplan.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportpaymentplan.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportpaymentplan.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportpaymentplan.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportpaymentplan.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportpaymentplan.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportpaymentplan.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportpaymentplan.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportpaymentplan.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportpaymentplan.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportpaymentplan.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportpaymentplan.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Payment Plans Report</p></div>
<div class="GeneralPageContent">
<p>Run the Payment Plans report to view a list of Payment Plans by guarantor that can be filtered.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Monthly section, click <b>Payment Plans</b>. <br/><img src="images/reportPaymentPlan.png" width="596" height="392" class="ImageInParagraph"/></p>
<p>This report is often used with the <a href="reportaging.html">Aging of Accounts Receivable (A/R) Report</a> to determine which patients owe the office money.</p>
<p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filters</h2>
<p class="MarginBottomZero"><b>Date Range:</b> To limit the report to plans created in a date range: </p>
<ul class="MarginBottomGap">
<li><b>Check the Limit to Plans Created in a Date Range</b> box. This is the default selection and enables the Date Start and Date End fields.</li>
<li>In the Date Start field, click the dropdown to select the start date.</li>
<li>In the Date End field, click the dropdown to select the end date. <p>Unchecking <b>Limit to Plans Created in Date Range</b> shows all plans meeting the remaining criteria, regardless of date.</p>
</li>
</ul>
<p class="MarginBottomZero"><b>Payment Plan Types:</b> Select which types of Payment Plans to include: </p>
<ul class="MarginBottomGap">
<li>Insurance: Select to view only <a href="paymentplanins.html">Insurance Payment Plans</a>. </li>
<li>Patient: Select to view only <a href="paymentplanpatient.html">Patient Payment Plans</a> and <a href="paymentplandynamic.html">Dynamic Payment Plans</a></li>
<li>Both: Select to view all Payment Plan types.</li>
</ul>
<p><b>Hide Completed Payment Plans:</b> Check to exclude closed Payment Plans from the report.</p>
<p><b>Show Family Balance:</b> Check to include Fam Balance column in the report. Shows Payment Plan guarantor's family balance.</p>
<p><b>Providers:</b> Highlight the providers to include. Click All to select all providers.</p>
<p><b>Clinics:</b> Select the clinics to include. Click <b>All</b> to select all clinics, including those that are hidden. The report is grouped by clinic.</p>
<h2>Report Preview</h2>
<p>After setting the report filters, click <b>OK</b> to launch a print preview of the report results. Below is an example of the report and descriptions of each column of the report.</p>
<p>For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<img src="images/reportPaymentPlanPrint.png" width="915" height="488"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Provider</b>: Last name of the provider attached to the Payment Plan.</li>
<li><b>Guarantor</b>: For Dyanmic and Patient Payment Plans, the guarantor of the payment plan. This may differ from the family guarantor. For Insurance Payment Plans, the patient associated with the payment plan.</li>
<li><b>Ins</b>: X indicates Insurance Payment Plan.</li>
<li><b>Princ</b>: The total principal amount.</li>
<li><b>Accum Int</b>: Accumulated interest for the plan.</li>
<li><b>Paid</b>: The total amount paid on the plan.</li>
<li><b>Balance</b>: The current Payment Plan balance (Princ + Accum Int - Paid).</li>
<li><b>Due Now</b>: The amount that is due now.</li>
<li><b>Balance Not Due</b>: The total Payment Plan balance that is not yet due (is due in the future). (Balance - Due Now). Only shows when the <i>Pay plan charge logic </i><a href="preferences.html">Preference</a> is set to <i>Age Credits and Debits</i>.</li>
<li><b>Fam Balance</b>: Only appears when <i>Show Family Balance</i> is checked. The total family balance for the Payment Plan guarantor.</li>
</ul>
</div>
</div>
</body>
</html>```
