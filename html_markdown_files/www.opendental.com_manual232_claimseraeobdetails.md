# File: ./www.opendental.com/manual232/claimseraeobdetails.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EOB Claim Details</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimseraeobdetails','era','claimsera835','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/claimseraeobdetails.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/claimseraeobdetails.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimseraeobdetails.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimseraeobdetails.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimseraeobdetails.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/claimseraeobdetails.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimseraeobdetails.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimseraeobdetails.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimseraeobdetails.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimseraeobdetails.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimseraeobdetails.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimseraeobdetails.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimseraeobdetails.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimseraeobdetails.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimseraeobdetails.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimseraeobdetails.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimseraeobdetails.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimseraeobdetails.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimseraeobdetails.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimseraeobdetails.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimseraeobdetails.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimseraeobdetails.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimseraeobdetails.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimseraeobdetails.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimseraeobdetails.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimseraeobdetails.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimseraeobdetails.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimseraeobdetails.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EOB Claim Details</p></div>
<div class="GeneralPageContent">
<p>View details for a claim associated with an ERA.</p>
<p>In an <a href="era.html">ERA</a>, click <b>EOB Claim Details</b>.</p>
<img src="images/claimERAClaimDetails.png" width="915" height="677"/><p>Alternatively, double-click on an unreceived claim from the ERA and click <b>EOB Claim Details</b> in the <i>Verify and Enter Payment</i> window.</p>
<h2>Claim Information</h2>
<p>Claim information, including patient, subscriber, insurance payment total, etc., is listed at the top of the window. </p>
<img src="images/eraEOBSubscriber.png" width="676" height="108"/><h2>Balancing</h2>
<p>This section displays the calcuation for the Ins Paid amount shown at the top of the EOB.</p>
<img src="images/eraEOBClaimBalancing.png" width="915" height="69"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Claim Fee: Total amount of fees on the claim.</li>
<li>Claim AdjAmt Sum: Total amount of Claim Adjustments. These are itemized in the EOB Claim Adjustments section.</li>
<li>Proc AdjAmt Sum: Total amount of procedure adjustment (e.g., write-offs).</li>
<li>Ins Paid Calc: Insurance paid calculation (Claim Fee - Claim AdjAmt Sum - Proc AdjAmt Sum = Ins Paid Calc). This number and <i>Ins Paid</i> at the top of the EOB should match.</li>
</ul>
<h2>EOB Claim Adjutments</h2>
<p>If payment amounts were adjusted (e.g., reduced), any amounts are noted in this section along with any appliable reason and remarks. These adjustments are also be counted in the <i>Claim AdjAmt Sum</i> in the Balancing calculation above. </p>
<img src="images/eraEOBAdjustments.png" width="915" height="102"/><p>Double-click a row to open a simple window used to copy message text. </p>
<h2>EOB Procedure Breakdown</h2>
<p>This grid displays procedures attached to the ERA. </p>
<img src="images/eraEOBProcBreakdown.png" width="915" height="82"/><ul>
<li>ProcNum: Unique number assigned to an individual procedure. This is different than the procedure code.</li>
<li>ProcCode: Procedure code.</li>
<li>ProcDescript: Procedure description.</li>
<li>FeeBilled: Fee billed to insurance.</li>
<li>InsPaid: Insurance payment for procedure.</li>
<li>PatPort: Patient portion for procedure (i.e., patient responsibility).</li>
<li>Deduct: Deductible.</li>
<li>Writeoff: Insurance write-off. </li>
</ul>
<p>To view additional details about procedures, double-click a row in the Procedure Breakdown grid. The Procedure Paid window shown below opens.</p>
<img src="images/claimERAProcPaid.png" width="915" height="514"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Click <b>Print</b> to print a copy of the procedure information.</li>
<li>Double-click a row in a grid to open a simple window used to copy text.</li>
</ul>
<p></p>
<h2>EOB Claim Adjudication Info</h2>
<p>Any adjudication information included with the ERA is listed in this section.</p>
<img src="images/eraEOBAdjudication.png" width="915" height="102"/><p>Double-click a row ito open a simple window used to copy message text. </p>
<h2>EOB Supplemental Info</h2>
<p>Supplemental payment information included with the ERA is listed in this section. This is also where coverage information is listed for <a href="preauth.html">Preauthorizations</a>.</p>
<img src="images/eraEOBSupplemental.png" width="915" height="83"/><p>Double-click a row to open a simple window used to copy message text. </p>
<h2>Print</h2>
<p>Click <b>Print</b> to open a print preview of the remittance information.</p>
<img src="images/eraEOBPrint.png" width="833" height="427"/><p><b>Print</b>: Click from the print preview window to open printer dialogue or immediately print depending on <a href="printersetup.html">Printer Setup</a>.</p>
</div>
</div>
</body>
</html>```
