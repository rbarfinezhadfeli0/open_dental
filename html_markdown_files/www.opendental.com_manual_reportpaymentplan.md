# File: ./www.opendental.com/manual/reportpaymentplan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Payment Plans Report</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportpaymentplan.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportpaymentplan.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportpaymentplan.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportpaymentplan.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportpaymentplan.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportpaymentplan.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportpaymentplan.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportpaymentplan.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportpaymentplan.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportpaymentplan.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportpaymentplan.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportpaymentplan.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportpaymentplan.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportpaymentplan.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportpaymentplan.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportpaymentplan.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportpaymentplan.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportpaymentplan.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportpaymentplan.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportpaymentplan.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportpaymentplan.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportpaymentplan.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportpaymentplan.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportpaymentplan.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportpaymentplan.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportpaymentplan.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportpaymentplan.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportpaymentplan.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Payment Plans Report</p></div>
<div class="GeneralPageContent">
<p>Run the Payment Plans report to view a list of payment plans by guarantor that can be filtered.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Monthly section, click <b>Payment Plans</b>. <br/><img src="images/reportPaymentPlan.png" width="590" height="389" class="ImageInParagraph"/></p>
<p>This report is often used with the <a href="reportaging.html">Aging of Accounts Receivable (A/R) Report</a> to determine which patients owe the office money.</p>
<p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filters</h2>
<p class="MarginBottomZero"><b>Date Range:</b> To limit the report to plans created in a date range: </p>
<ul class="MarginBottomGap">
<li>Check the <b>Limit to Plans Created in a Date Range</b> box. This is the default selection and enables the Date Start and Date End fields.</li>
<li>In the Date Start field, click the dropdown to select the start date.</li>
<li>In the Date End field, click the dropdown to select the end date. <p>Unchecking <b>Limit to Plans Created in Date Range</b> shows all plans meeting the remaining criteria, regardless of date.</p>
</li>
</ul>
<p class="MarginBottomZero"><b>Payment Plan Types:</b> Select which types of payment plans to include: </p>
<ul class="MarginBottomGap">
<li>Insurance: Select to view only <a href="paymentplanins.html">Insurance Payment Plans</a>. </li>
<li>Patient: Select to view only <a href="paymentplandynamic.html">Payment Plans</a> and <a href="paymentplanpatient.html">Old Payment Plans</a></li>
<li>Both: Select to view all payment plan types.</li>
</ul>
<p><b>Hide Completed Payment Plans:</b> Check to exclude closed payment plans from the report.</p>
<p><b>Show Family Balance:</b> Check to include Fam Balance column in the report. Shows payment plan guarantor's family balance.</p>
<p class="MarginBottomZero"><b>Providers</b>: Filter the report by provider. Check <b>All</b> to include all providers, including those that are hidden.  </p>
<ul class="MarginBottomGap">
<li>For Old Payment Plans and Insurance Payments Plans, filters the report by the attached provider.</li>
<li>For Payment Plans, this filters by the providers on Pay Plan Charges. If Pay Plan Charges are linked to multiple providers, the Payment Plan is included when filtering for any provider with a Pay Plan Charge already created in the database (i.e., a posted or manually edited charge).</li>
<li>To exclude hidden providers from the report, manually select visible providers from the list.</li>
</ul>
<p class="MarginBottomZero"><b>Clinics:</b> Select the clinics to include. Check <b>All</b> to include all clinics, including those that are hidden. The report is grouped by clinic. </p>
<ul class="MarginBottomGap">
<li>For Old Payment Plans and Insurance Payments Plans, filters the report by the clinic attached to the plan.</li>
<li>For Payment Plans, this filters by clinic attached to any Pay Plan Charges created in the database. If Pay Plan Charges are attached to multiple clinics, the Payment Plan is included when filtering for any of these clinics. If no Pay Plan Charges have been created in the database, a clinic is determined at random, from the clinics on attached production, to appear on the report. </li>
</ul>
<h2>Report Preview</h2>
<p>Click <b>OK</b> to generate a print preview of the report. The following is an example of the report and explanation of the report columns.</p>
<p>For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<img src="images/reportPaymentPlanPrint.png" width="915" height="337"/><p class="MarginBottomZero">If using Clinics, the report is grouped by clinic with totals for each clinic at the end of the report. </p>
<ul class="MarginBottomGap">
<li>Old Payment Plans and Insurance Payment Plans, are grouped by the clinic attached to the plan.</li>
<li>Payment Plans may be grouped with any clinic attached to Pay Plan Charges already created in the database. If running the report for multiple clinics, the plan is only listed for one clinic.</li>
</ul>
<p class="MarginBottomZero">Report columns: </p>
<ul class="MarginBottomGap">
<li><b>Provider</b>: Last name of the provider.  <ul>
<li>For Old Payment Plans and Insurance Payment Plans, this is the provider attached to the plan.</li>
<li>For Payment Plans, this may be any provider attached to Pay Plan Charges already created in the database.</li>
</ul>
</li>
<li><b>Guarantor</b>: For Payment Plans and Old Payment Plans, the guarantor of the payment plan. This may differ from the family guarantor. For Insurance Payment Plans, the patient associated with the payment plan.</li>
<li><b>Ins</b>: X indicates Insurance Payment Plan.</li>
<li><b>Princ</b>: The total principal amount of the payment plan.</li>
<li><b>Accum Int</b>: Accumulated interest for the plan.</li>
<li><b>Paid</b>: The total amount paid on the plan.</li>
<li><b>Balance</b>: The current payment plan balance <span class="codeblock">(Princ + Accum Int - Paid)</span>.</li>
<li><b>Due Now</b>: The amount that is due now on the payment plan.</li>
<li><b>Bal Not Due</b>: The total payment plan balance that is not yet due (is due in the future). <span class="codeblock">(Balance - Due Now)</span>. Only shows when the <i>Pay plan charge logic </i> is set to <i>Age Credits and Debits</i> in <a href="preferences.html">Preferences</a>.</li>
<li><b>Fam Balance</b>: Only appears when <i>Show Family Balance</i> is checked. The total family balance for the payment plan guarantor.</li>
</ul>
</div>
</div>
</body>
</html>```
