# File: ./www.opendental.com/manual/claimpayfinalize.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Finalize Insurance Payment</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimpayfinalize','claimreceive','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/claimpayfinalize.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/claimpayfinalize.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimpayfinalize.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimpayfinalize.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimpayfinalize.html" >v23.2</option><option value="https://www.opendental.com/manual231/claimpayfinalize.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimpayfinalize.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimpayfinalize.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimpayfinalize.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimpayfinalize.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimpayfinalize.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimpayfinalize.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimpayfinalize.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimpayfinalize.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimpayfinalize.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimpayfinalize.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimpayfinalize.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimpayfinalize.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimpayfinalize.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimpayfinalize.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimpayfinalize.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimpayfinalize.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimpayfinalize.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimpayfinalize.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimpayfinalize.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimpayfinalize.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimpayfinalize.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimpayfinalize.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Finalize Insurance Payment</p></div>
<div class="GeneralPageContent">
<p>Finalize a insurance payment on a claim after receiving an EOB.</p>
<p>In the <a href="claimedit.html">Edit Claim</a> window, in the middle, is the Insurance Payments area.</p>
<img src="images/claimPaymentFinalize.png" width="753" height="101"/><p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our Webinar: <a href="https://youtu.be/eiMgxXTqkn8">Claim Payments</a>.</p>
<p><b>Batch</b>: Click to finalize a bulk insurance payment attached to multiple claims. See Finalizing a Bulk Insurance Payment below for detailed steps. </p>
<p><b>This Claim Only</b>: Click to finalize payment for a single claim. See Finalizing a Single Claim below for detailed steps.</p>
<p>Enable <i>Warn users to finalize payments for received claims</i> in <a href="preferences.html">Preferences</a> to warn users there are unfinalized payments when saving a <a href="claimreceive.html">Received Claim</a>. </p>
<h2>Finalizing a Single Claim</h2>
<p class="MarginBottomZero">To finalize insurance claim payment for a single claim, follow the steps below: </p>
<ol class="MarginBottomGap">
<li><a href="claimreceive.html">Receive Claim</a> payment.</li>
<li>From the received claim, click <b>This Claim Only</b>.</li>
<li>Enter payment details into <a href="editinspayment.html">Edit Insurance Payment</a>.</li>
<li>If processing a virtual credit card payment, click the button for the credit card processor and follow the prompts to process payment.</li>
<li>Click <b>Save</b>.</li>
<li><i>Optional</i>: <a href="claimpaymenteobscan.html">Scan EOB</a> to attach it to the payment.</li>
<li>Click <b>Save</b> on the <a href="inspayeob.html">Insurance Payment (EOB)</a> window to finish finalizing payment.</li>
</ol>
<h2>Finalizing a Bulk Insurance Payment</h2>
<p class="MarginBottomZero">To finalize bulk insurance payment attached to multiple claims follow the steps below: </p>
<ol class="MarginBottomGap">
<li>Receive claim payment for all claims on the EOB.</li>
<li>After receiving the last claim on the EOB, click <b>Batch</b> from the <a href="claimedit.html">Claim</a>.</li>
<li>Enter payment details into Edit Insurance Payment.</li>
<li>If processing a virtual credit card payment, click the button for the credit card processor and follow the prompts to process payment.</li>
<li>Click <b>Save</b>.</li>
<li>From the Insurance Payment (EOB) window, verify the claims in the Attached to this Payment grid match the claims on the EOB. <ul>
<li>All claims that have not been attached to a payment appear here. Claims that are not part of the EOB currently being finalized should be detached. See Troubleshooting below for additional details.</li>
<li>The <i>Amount </i>and <i>Total Payments</i> should match if the correct claims are attached.</li>
</ul>
</li>
<li>Verify Payment Details.</li>
<li><i>Optional</i>: Scan the EOB to attach it to the payment.</li>
<li>Click <b>Save</b> to finish finalizing payment.</li>
</ol>
<p>Alternatively, batch insurance payments can be finalized from the <a href="manage.html">Manage Module</a> using the <a href="claimpaymentbatch.html">Batch Insurance Payment</a> feature. If <i> Finalize claim payments in Batch Insurance window only</i> is enabled in <a href="preferences.html">Preferences</a>, all insurance payments must be finalized from the Manage Module using the Batch Insurance Payment feature.</p>
<h2>Troubleshooting</h2>
<p><b>When trying to finalize a $0 payment I get a warning.</b></p>
<p><img src="images/zeroDollarClaimPay.png" width="406" height="159"/></p>
<p>If the preference, <i>Show claims received after days (blank to disable)</i>, is blank, users cannot finalize any $0 payments. Enter a number into this preference in order to finalize $0 insurance payments. Insurance payments can be finalized for the number of days entered into the preference. </p>
<p>After that time, the preference must be increased (not recommended) or a $0 supplemental payment can be added to finalize if needing to scan an EOB. </p>
<p>This warning does not appear when finalizing payment using using the <b>Batch</b> button from a claim if there are other unfinalized payments, and $0 payments are not included in the batch. To finalize a bulk EOB with $0 payments, use the Batch Insurance Payment feature from the Manage Module instead. </p>
<p><b>When entering a batch insurance payment, the default amount is too big and does not match the EOB amount.</b></p>
<p class="MarginBottomZero">This occurs when other claims have been received, but not finalized. All received claims not finalized are automatically included in the total amount calculation, and users see the claims listed in the Attached to this Payment grid. </p>
<ol class="MarginBottomGap">
<li>For this payment, manually change the amount to match the EOB. Click <b>Save</b> on the Edit Insurance Payment window.</li>
<li>Click <b>OK</b> on the warning.  <p><img src="images/insPayFinalizeWarning.png" width="407" height="172"/></p>
</li>
<li>Manually detach claims not tied to this payment by selecting claim(s) and clicking <b>Detach</b>.  <p><img src="images/insPayFinalizeDetach.png" width="740" height="248"/></p>
</li>
<li>Once only the correct claims are attached, click <b>Save</b> to finish finalizing the payment.</li>
</ol>
<p><div class="Note">Note: Users should go back to detached claims and ensure payment is finalized. Run the <a href="reportunfinalizedinsurancepayments.html">Unfinalized Insurance Payment Report</a> to find received claims not attached to an insurance payment.</div>
</p>
<p>If payment is always finalized immediately after receiving claims, the amounts and claims when clicking Batch are always accurate, reducing data entry. </p>
<p>Insurance payments that haven't been finalized are indicated with a note in the account module:</p>
<img src="images/claimNotFinalized.png" width="736" height="61"/><p><b>What if I cannot receive all of the claims that make up my bulk check/payment and I need to leave for the day?</b></p>
<p>Do not finalize the payment until all claims have been recieved. This way all claim payments have the same payment date.</p>
<p><b>I have a bulk payment but the carrier is taking back money from a previous claim. How do I enter the claim?</b></p>
<p>See <a href="insurancerefunds.html">Insurance Refunds</a>.</p>
</div>
</div>
</body>
</html>```
