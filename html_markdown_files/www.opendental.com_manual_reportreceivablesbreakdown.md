# File: ./www.opendental.com/manual/reportreceivablesbreakdown.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Receivables Breakdown Report</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportreceivablesbreakdown','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportreceivablesbreakdown.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportreceivablesbreakdown.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportreceivablesbreakdown.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportreceivablesbreakdown.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportreceivablesbreakdown.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportreceivablesbreakdown.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportreceivablesbreakdown.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportreceivablesbreakdown.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportreceivablesbreakdown.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportreceivablesbreakdown.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportreceivablesbreakdown.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportreceivablesbreakdown.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportreceivablesbreakdown.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportreceivablesbreakdown.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportreceivablesbreakdown.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportreceivablesbreakdown.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportreceivablesbreakdown.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportreceivablesbreakdown.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportreceivablesbreakdown.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportreceivablesbreakdown.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportreceivablesbreakdown.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportreceivablesbreakdown.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportreceivablesbreakdown.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportreceivablesbreakdown.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportreceivablesbreakdown.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportreceivablesbreakdown.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportreceivablesbreakdown.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportreceivablesbreakdown.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Receivables Breakdown Report</p></div>
<div class="GeneralPageContent">
<p>The Receivables Breakdown Report allows offices to see changes in accounts receivable throughout a calendar month. </p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Monthly section, click <b>Receivables Breakdown</b>.</p>
<img src="images/reportReceivablesBreakdown.png" width="603" height="351"/><p>This report is a breakdown, by date, of outstanding patient balances.</p>
<div class="Note">Note: <ul>
<li>If <i>Pay Plan charge logic </i> is set to <i>Age Credits and Debits</i> in <a href="preferences.html">Preferences</a>, this report takes into account payment plan amounts due. Otherwise it does not.</li>
<li>To make the totals on this report match the Aging of A/R report total, see the bottom of this page.</li>
<li>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</li>
</ul>
</div>
<p></p>
<p class="MarginBottomZero"><b>Providers</b>: Select the treating providers to include.  </p>
<ul class="MarginBottomGap">
<li>Practice is the default option. It includes all providers and unearned paysplits.</li>
<li>Provider selection is only an option if the logged-on user has the <i>Production and Income, View All Providers</i> permission. Select one or more providers to view.</li>
<li>If all providers are selected manually, unearned paysplits are not included. To include unearned in the Ending A/R, select <i>Practice</i> instead.</li>
</ul>
<p class="MarginBottomZero"><b>Show Insurance Write-offs</b>: Select when write-offs should be applied. See <a href="writeoffstoproduction.html">Show Insurance Write-offs</a> for more details. </p>
<ul class="MarginBottomGap">
<li>Use insurance payment date: Apply write-offs on the date the insurance claim is received.</li>
<li>Use procedure date: Apply write-offs on the day the procedure is completed.</li>
</ul>
<p><b>Up to the following date</b>: Select the end date for the report. The start date is always the first day of the same month (e.g., if the end date of August 26 is selected, the start date is August 1).</p>
<h2>Report Preview</h2>
<p>After setting report filters, click <b>OK</b> to generate a print preview of the report. Below is an example of the report and descriptions of each column of the report.</p>
<p>For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<img src="images/reportReceivablesPrint.png" width="915" height="444"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Production</b>: Total amount of completed procedures.</li>
<li>The following columns only appear when the <i>Pay Plan charge logic</i> preference is set to <i>Age Credits and Debits</i>.</li>
<ul>
<li><b>PayPlanProd</b>: Production applied to patient accounts to offset payment plan charges.</li>
<li><b>Prod-PPProd</b>: Production after PayPlanProd is subtracted.</li>
<li><b>PayPlanCharges</b>: Payment plan Charges Due.</li>
</ul>
<li><b>Adjustments</b>: Total combined positive and negative <a href="adjustments.html">Adjustment</a>. <ul>
<li>Adjustments attached to procedures are counted on the report as of <i>(procedure date)</i> noted on the Adjustment. If adjustments are not attached to procedures, they are counted on the report as of the <i>Adjustment Date</i>.</li>
</ul>
</li>
<li><b>Write-off</b>: PPO and capitation insurance write-offs.</li>
<li><b>Payment</b>: Amount received from patient payments.</li>
<li><b>InsPayment</b>: Amount received from insurance payments. Determined amounts entered for <i>Insurance Paid </i> on <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a>. May include unfinalized payments. </li>
<li><b>Daily A/R</b>: Net change in account receivables.</li>
<li><b>Ending A/R</b>: Total account receivables.</li>
</ul>
<p><div class="Note">Note: If the preference <i>Transactions attached to a procedure offset each other before aging</i> is enabled, negative adjustments are reflected in balances as of the procedure date, even when the adjustment date is after the selected report date.</div>
</p>
<h2>Matching Receivables Breakdown and Aging of A/R Totals</h2>
<p>To get the <a href="reportaging.html">Aging of Accounts Receivable (A/R) Report</a> Total to match the Receivables Breakdown, Ending A/R Total, run each report for all providers and select the options below.</p>
<div class="Note">Note: Reports do not match if there are payment plans.</div>
<br><br><p class="MarginBottomZero">Receivables Breakdown Report: </p>
<ul class="MarginBottomGap">
<li>Provider: Practice</li>
<li>Show Insurance Write-offs: Select Using insurance payment date.</li>
<li>Dates: Same as Aging of A/R Report.</li>
</ul>
<p class="MarginBottomZero">Aging of A/R Report: </p>
<ul class="MarginBottomGap">
<li>Date: Same as Receivables Breakdown report.</li>
<li>Age of Account: Any Balance</li>
<li>Negative Balances:- Check Include negative balances. - Do NOT check Only show negative balances.</li>
<li>Exclusions: Do NOT check any of the exclusions.</li>
<li>Billing Types: All</li>
<li>Providers: All</li>
</ul>
<p>The reports do not match if run for specific providers, even if there are no payment plans. The Aging of A/R report includes all entries associated with any patient who has the selected provider as their primary provider at the time of the work. The Receivable Breakdown includes only the entries where the selected provider was the provider on the procedure/claim/adjustment/write-off. These totals are very different.</p>
</div>
</div>
</body>
</html>```
