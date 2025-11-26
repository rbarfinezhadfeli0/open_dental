# File: ./www.opendental.com/manual243/eraprocess.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Process ERA</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eraprocess','era','claimsera835','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/eraprocess.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/eraprocess.html" >v24.2</option><option value="https://www.opendental.com/manual241/eraprocess.html" >v24.1</option><option value="https://www.opendental.com/manual233/eraprocess.html" >v23.3</option><option value="https://www.opendental.com/manual232/eraprocess.html" >v23.2</option><option value="https://www.opendental.com/manual231/eraprocess.html" >v23.1</option><option value="https://www.opendental.com/manual224/eraprocess.html" >v22.4</option><option value="https://www.opendental.com/manual223/eraprocess.html" >v22.3</option><option value="https://www.opendental.com/manual222/eraprocess.html" >v22.2</option><option value="https://www.opendental.com/manual221/eraprocess.html" >v22.1</option><option value="https://www.opendental.com/manual214/eraprocess.html" >v21.4</option><option value="https://www.opendental.com/manual213/eraprocess.html" >v21.3</option><option value="https://www.opendental.com/manual212/eraprocess.html" >v21.2</option><option value="https://www.opendental.com/manual211/eraprocess.html" >v21.1</option><option value="https://www.opendental.com/manual205/eraprocess.html" >v20.5</option><option value="https://www.opendental.com/manual204/eraprocess.html" >v20.4</option><option value="https://www.opendental.com/manual203/eraprocess.html" >v20.3</option><option value="https://www.opendental.com/manual202/eraprocess.html" >v20.2</option><option value="https://www.opendental.com/manual201/eraprocess.html" >v20.1</option><option value="https://www.opendental.com/manual194/eraprocess.html" >v19.4</option><option value="https://www.opendental.com/manual193/eraprocess.html" >v19.3</option><option value="https://www.opendental.com/manual192/eraprocess.html" >v19.2</option><option value="https://www.opendental.com/manual191/eraprocess.html" >v19.1</option><option value="https://www.opendental.com/manual184/eraprocess.html" >v18.4</option><option value="https://www.opendental.com/manual183/eraprocess.html" >v18.3</option><option value="https://www.opendental.com/manual182/eraprocess.html" >v18.2</option><option value="https://www.opendental.com/manual181/eraprocess.html" >v18.1</option><option value="https://www.opendental.com/manual174/eraprocess.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Process ERA</p></div>
<div class="GeneralPageContent">
<p>Process a claim on an ERA from the Verify and Enter Payment window.</p>
<p>In an <a href="era.html">ERA</a>, double-click on a patient in the Claims Paid grid.</p>
<img src="images/claimERAVerify.png" width="915" height="677"/><p>If a matching claim is not found, the <a href="claimseramatching.html">ERA 835 Claim Select</a> window opens instead.</p>
<p>From this window, users can verify that payment amounts are accurate in order to manually process claims on an ERA. For full instructions on manually processing ERAs, see <a href="era835workflow.html">ERA Workflow</a>, Manually Processing ERAs</p>
<h2>EOB Claim Adjustments</h2>
<p>Any adjustments to the claim payment are listed in the grid with the reason, amount, and any remarks. This section is read-only and for reference when entering payment.</p>
<img src="images/eraEOBClaimAdjs.png" width="915" height="102"/><h2>EOB Procedure Breakdown</h2>
<p>This grid displays procedures attached to the ERA. This section is read-only and for reference when entering payment.</p>
<img src="images/eraEnterPayProcBreakdown.png" width="915" height="191"/><p class="MarginBottomZero">Columns </p>
<ul class="MarginBottomGap">
<li>ProcNum: Unique number assigned to an individual procedure. This is different than the procedure code.</li>
<li>Code: Procedure code.</li>
<li>Description: Procedure description.</li>
<li>Fee Billed: Fee billed to insurance.</li>
<li>Deduct: Deductible.</li>
<li>Allowed: Insurance allowed fee (i.e., contracted fee).</li>
<li>Remarks: Remarks from the ERA.</li>
</ul>
<p><b>EOB Totals</b>: Totals in each box correspond to the numbers in the column directly above them (i.e., Fee Billed, Deduct, Allowed, or InsPay).</p>
<p>To view additional details about procedures, double-click a row in the EOB Procedure Breakdown grid. The Procedure Paid window opens. See <a href="claimseraeobdetails.html">EOB Claim Details</a>: EOB Procedure Breakdown for more details.</p>
<h2>Enter Payments</h2>
<p>Verify and adjust payment information in the Enter Payments grid.</p>
<img src="images/eraEnterPayments.png" width="915" height="354"/><p class="MarginBottomZero"><b>Include Write-offs for Category Percentage and Medicaid/Flat CoPay plans</b>: Determine if write-off amounts are transferred from the ERA when dealing with Category Percentage or Medicaid/Flat CoPay Plan Types.  </p>
<ul class="MarginBottomGap">
<li>Checked: Write-off amounts from the ERA are automatically be filled in from the ERA. Write-off amounts can be edited.</li>
<li>Unchecked: Write-off amounts are zeroed out and cannot be edited.</li>
<li> The default state of this checkbox is determined by <i>ERA post write-offs for Category Percentage and Medicaid/Flat Copay</i> in <a href="preferences.html">Preferences</a>. When enabled, this box is checked by default. When disabled, the box is unchecked by default. </li>
</ul>
<p><b>Split Claims</b>: Click to split any procedures marked with an <i>X</i> in the <i>Split</i> column into a new claim.</p>
</p>
<p class="MarginBottomZero">Enter Payments Grid Columns: </p>
<ul class="MarginBottomGap">
<li>Split: Click this column to mark a procedure to be split into a new claim. Click Split Claims once procedures have been marked to be split.</li>
<li>Date: Procedure date.</li>
<li>Prov: Procedure treating provider.</li>
<li>Code: Procedure code.</li>
<li>Tth: Tooth number.</li>
<li>Description: Procedure description.</li>
<li>Fee Billed: Fee billed to insurance.</li>
<li>Deduct: Deductible amount applied to procedure.</li>
<li>Allowed: Procedure allowed amount.</li>
<li>InsPay: Insurance payment amount.</li>
<li>Writeoff: Write-off amount.</li>
<li>Status: Claim Procedure status.</li>
<li>Pmt: X indicates a finalized payment is attached to the line item.</li>
<li>Pay Tracking: Claim Payment Tracking status. See <a href="definitionsclaimpaytracking.html">Definitions: Claim Payment Tracking</a></li>
<li>Remarks: Remarks from EOB.</li>
</ul>
<p><b>Total Payments Row</b>: This row appears when insurance sends back a code or dollar amount that does not match the original claim. It can be left as-is or can be manually applied to the appropriate claim items. If the payment is applied to claim line items, the <i>InsPay</i> field of the Total Payment line must be zeroed out.</p>
<img src="images/eraDetailsTotalPayment.png" width="915" height="41"/><p><b>Deductible</b>: Click to assign the deductible to the selected line item.</p>
<p><b>Write Off</b>: Click to write off unpaid amounts on all procedures.</p>
<p><div class="Note">Note: For in-network plans, if the insurance paid or deductible amounts are changed, manually change the write-off. If billing out-of-network plans, users may need to manually remove write-off amounts. </div>
</p>
<p><b>EOB Claim Details</b>: Open <a href="claimseraeobdetails.html">EOB Claim Details</a>.</p>
<p><b>Save</b>: Close the window. Saves payment information and marks the claim and all line items received. </p>
<h2>Processing ERA Claim Payment</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Distribute any Total Payment line items to individual procedures as needed.</li>
<li>Verify payment information between the EOB Procedure Breakdown and Enter Payments.</li>
<ul>
<li>Ensure the EOB Totals and Payment Totals match</li>
</ul>
<li>Assign the deductible as needed.</li>
<li>Correct any write-offs as needed.</li>
<li>Click OK to mark the claim and all line items Received.</li>
<li>Once all claims on the ERA have been marked received, finalize payment. See <a href="era.html">ERA</a>: Finalize Payment.</li>
</ol>
<p><b>Secondary Claims</b>: If there are any secondary claims, a new window is opened listing the claims. See <a href="inssecondary.html">Secondary Insurance</a>.</p>
<p><b>Supplemental Payments</b>: Supplemental payments, claim corrections, and claim reversals can be done by processing an ERA as normal.</p>
<p><b>Preauths</b>: <a href="preauth.html">Preauthorizations</a> can be received by processing an ERA as normal, and the estimates are updated.</p>
</div>
</div>
</body>
</html>```
