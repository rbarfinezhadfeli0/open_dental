# File: ./www.opendental.com/manual232/insurancerefunds.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Insurance Refunds</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('insurancerefunds','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/insurancerefunds.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/insurancerefunds.html" >v24.2</option><option value="https://www.opendental.com/manual241/insurancerefunds.html" >v24.1</option><option value="https://www.opendental.com/manual233/insurancerefunds.html" >v23.3</option><option value="https://www.opendental.com/manual232/insurancerefunds.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/insurancerefunds.html" >v23.1</option><option value="https://www.opendental.com/manual224/insurancerefunds.html" >v22.4</option><option value="https://www.opendental.com/manual223/insurancerefunds.html" >v22.3</option><option value="https://www.opendental.com/manual222/insurancerefunds.html" >v22.2</option><option value="https://www.opendental.com/manual221/insurancerefunds.html" >v22.1</option><option value="https://www.opendental.com/manual214/insurancerefunds.html" >v21.4</option><option value="https://www.opendental.com/manual213/insurancerefunds.html" >v21.3</option><option value="https://www.opendental.com/manual212/insurancerefunds.html" >v21.2</option><option value="https://www.opendental.com/manual211/insurancerefunds.html" >v21.1</option><option value="https://www.opendental.com/manual205/insurancerefunds.html" >v20.5</option><option value="https://www.opendental.com/manual204/insurancerefunds.html" >v20.4</option><option value="https://www.opendental.com/manual203/insurancerefunds.html" >v20.3</option><option value="https://www.opendental.com/manual202/insurancerefunds.html" >v20.2</option><option value="https://www.opendental.com/manual201/insurancerefunds.html" >v20.1</option><option value="https://www.opendental.com/manual194/insurancerefunds.html" >v19.4</option><option value="https://www.opendental.com/manual193/insurancerefunds.html" >v19.3</option><option value="https://www.opendental.com/manual192/insurancerefunds.html" >v19.2</option><option value="https://www.opendental.com/manual191/insurancerefunds.html" >v19.1</option><option value="https://www.opendental.com/manual184/insurancerefunds.html" >v18.4</option><option value="https://www.opendental.com/manual183/insurancerefunds.html" >v18.3</option><option value="https://www.opendental.com/manual182/insurancerefunds.html" >v18.2</option><option value="https://www.opendental.com/manual181/insurancerefunds.html" >v18.1</option><option value="https://www.opendental.com/manual174/insurancerefunds.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Insurance Refunds</p></div>
<div class="GeneralPageContent">
<p>If insurance overpays on a <a href="claimedit.html">Claim</a>, they will either request a refund check, or they will allocate the overpayment to another patient.</p>
<h2>Refund via check</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In the <a href="account.html">Account Module</a>, double-click on the claim.</li>
<li>Highlight the procedure to be refunded</li>
<li>Click <a href="claimpaymentsupplemental.html">Supplemental</a> at the upper right.</li>
<li>Enter the refund amount as a negative amount for Ins Pay (e.g. -10), then click <b>OK</b>.  <p><img src="images/insRefundEnterPay.png" width="720" height="183"/></p>
</li>
<li>In the <a href="claimedit.html">Claim</a>, click <b>This Claim Only</b>.</li>
<li>Enter any needed check information and enter the payment amount as a negative (e.g. -10). <p><img src="images/insRefundClaimCheck.png" width="500" height="552"/></p>
</li>
<li>Complete the rest of the payment as normal. See <a href="claimpayfinalize.html">Finalize Insurance Payment</a>.<br/><div class="Note">Note: <ul>
<li>Offices may wish to create a new <a href="inspaytypes.html">Insurance Payment Type</a> for Insurance Refund checks to avoid incorrect totals if using <a href="depositslip.html">Deposit Slips</a>.</li>
<li>If a payment is being refunded due to eligibilty, additional supplemental payments may be needed to adjust off write-offs as well.</li>
</ul>
</div>
</li>
</ol>
<p>This will correct the patient account balance making the patient responsible for the previous overpayment. If the office does not want the patient to be responsible for the balance, enter a negative <a href="adjustments.html">Adjustment</a> to subtract the amount from the account balance.</p>
<img src="images/refundInsuranceClaim.png" width="915" height="343"/><h2>Allocate to a different claim</h2>
<p>There are times when instead of having an office send a refund check back to the carrier, the carrier will instead deduct the overpayment from another claim. This may be on a future claim from the same patient or an entirely different patient, but the process is still the same. The office will enter in a negative supplemental payment into the overpaid claim (as described above), but instead of finalizing a negative payment, the payment will be batched together with a positive payment. </p>
<ol>
<li>Double-click the claim that was overpaid and needs to be refunded.</li>
<li>Follow steps 2-4 from Refund via Check above to enter the overpayment as a negative payment.</li>
<li>Create a Batch Insurance check from the Manage Module using the <b>Batch Ins</b> button. </li>
<li>Attach the refunded claim to the bulk payment. </li>
<li>Receive all other claims on the EOB and attach them to the payment. (See:<a href="claimpaymentbatch.html">Batch Insurance Payment</a> for detailed instructions.) </li>
<li>Once all claims on the EOB are received, the total payments of the attached claims should match the amount of the payment. The payment is already finalized.  <p><img src="images/insRefBatchFinalize.png" width="725" height="522"/></p>
</li>
</ol>
</div>
</div>
</body>
</html>```
