# File: ./www.opendental.com/manual/claimpaymentsplit.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Split Claim</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimpaymentsplit','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/claimpaymentsplit.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/claimpaymentsplit.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimpaymentsplit.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimpaymentsplit.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimpaymentsplit.html" >v23.2</option><option value="https://www.opendental.com/manual231/claimpaymentsplit.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimpaymentsplit.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimpaymentsplit.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimpaymentsplit.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimpaymentsplit.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimpaymentsplit.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimpaymentsplit.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimpaymentsplit.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimpaymentsplit.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimpaymentsplit.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimpaymentsplit.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimpaymentsplit.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimpaymentsplit.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimpaymentsplit.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimpaymentsplit.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimpaymentsplit.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimpaymentsplit.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimpaymentsplit.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimpaymentsplit.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimpaymentsplit.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimpaymentsplit.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimpaymentsplit.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimpaymentsplit.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Split Claim</p></div>
<div class="GeneralPageContent">
<p>In the <a href="claimedit.html">Edit Claim</a> window, at the upper-right, click <b>Split Claim</b>.</p>
<img src="images/splitClaimButton.png" width="127" height="150"/><p>Splitting claims may be necessary if insurance only paid on some of the procedures in an Insurance Claim Payment, and the office is still waiting on payment for the other procedures or if some procedures need to be resubmitted, but not the entire claim.</p>
<p>Splitting the claim allows the office to receive payment for procedures that have been paid and leave unpaid procedures outstanding or resubmit them as needed. </p>
<h2>Splitting a Claim</h2>
<p>There are some common scenarios an office may need to split a claim.</p>
<p><b>Scenario 1</b>: Insurance rejects one or more procedures on a claim due to missing or incorrect information, but pays the rest of the claim. The rejected procedures need to be resubmitted to insurance.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Open the Edit Claim window. </li>
<li>Select the rejected procedure(s).</li>
<li>Click <b>Split Claim</b>. </li>
<li>The procedures listed on the open claim should be those that were paid by insurance. The rejected procedures are now on a new claim.</li>
<li>Receive the claim with the procedures that have been accepted and paid. See <a href="claimreceive.html">Receive Claim</a>.</li>
<li><a href="claimpayfinalize.html">Finalize Insurance Payment</a></li>
<li>Once information is updated for the rejected procedures, send the second claim.</li>
</ol>
<p class="MarginBottomZero"><b>Scenario 2</b>: Insurance decides to split one procedure from the claim because it will take longer to adjudicate. The EOB or ERA will indicate that the claim has been split. Manually split the procedure from the original claim. Since the procedure has already been submitted to insurance, it does not need to be resent. </p>
<ol class="MarginBottomGap">
<li>On the claim, highlight the procedures that are not included in the current payment.</li>
<li>Click <b>Split Claim</b>. </li>
<li>The procedures receiving payment are listed under Procedures. The procedures not included with the payment are in a new claim.</li>
<li>Receive the claim, then finalize the payment. .</li>
</ol>
<p>In both scenarios, in the patient account, there are now two claims: one received with a payment and one outstanding.</p>
<p>Any claim statuses from the original claim are copied to the split claim. See <a href="claimtabstatus.html">Edit Claim - Status History Tab</a>.</p>
<p>When payment is received for the outstanding claim, receive the claim and finalize payment.</p>
<h2>Troubleshooting</h2>
<p><b>Message: Claim identifier already in use for another claim.</b></p>
<p>Split claims have a unique claim identifier. When notification of a split claim is received on an ERA (scenario 2 above) note that the claim identifier for both original and split claim on the ERA is the same, even though the identifiers in Open Dental are different. The difference does not affect matching of ERAs to claims because other criteria is used.</p>
</div>
</div>
</body>
</html>```
