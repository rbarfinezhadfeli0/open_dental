# File: ./www.opendental.com/manual/refunds.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Refund</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('refunds','payment','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/refunds.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/refunds.html" >v24.2</option><option value="https://www.opendental.com/manual241/refunds.html" >v24.1</option><option value="https://www.opendental.com/manual233/refunds.html" >v23.3</option><option value="https://www.opendental.com/manual232/refunds.html" >v23.2</option><option value="https://www.opendental.com/manual231/refunds.html" >v23.1</option><option value="https://www.opendental.com/manual224/refunds.html" >v22.4</option><option value="https://www.opendental.com/manual223/refunds.html" >v22.3</option><option value="https://www.opendental.com/manual222/refunds.html" >v22.2</option><option value="https://www.opendental.com/manual221/refunds.html" >v22.1</option><option value="https://www.opendental.com/manual214/refunds.html" >v21.4</option><option value="https://www.opendental.com/manual213/refunds.html" >v21.3</option><option value="https://www.opendental.com/manual212/refunds.html" >v21.2</option><option value="https://www.opendental.com/manual211/refunds.html" >v21.1</option><option value="https://www.opendental.com/manual205/refunds.html" >v20.5</option><option value="https://www.opendental.com/manual204/refunds.html" >v20.4</option><option value="https://www.opendental.com/manual203/refunds.html" >v20.3</option><option value="https://www.opendental.com/manual202/refunds.html" >v20.2</option><option value="https://www.opendental.com/manual201/refunds.html" >v20.1</option><option value="https://www.opendental.com/manual194/refunds.html" >v19.4</option><option value="https://www.opendental.com/manual193/refunds.html" >v19.3</option><option value="https://www.opendental.com/manual192/refunds.html" >v19.2</option><option value="https://www.opendental.com/manual191/refunds.html" >v19.1</option><option value="https://www.opendental.com/manual184/refunds.html" >v18.4</option><option value="https://www.opendental.com/manual183/refunds.html" >v18.3</option><option value="https://www.opendental.com/manual182/refunds.html" >v18.2</option><option value="https://www.opendental.com/manual181/refunds.html" >v18.1</option><option value="https://www.opendental.com/manual174/refunds.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Refund</p></div>
<div class="GeneralPageContent">
<p>Easily create refunds for various scenarios from the Account Module.</p>
<p>In the <a href="account.html">Account Module</a>, right-click an existing payment. In the dropdown, click <b>Refund</b>.</p>
<img src="images/refundPatient.png" width="753" height="352"/><p>Alternatively, users can create a negative <a href="payment.html">Payment</a> to process a refund.</p>
<p>There are few scenarios when processing a refund for a patient. The process varies depending on whether work was done, not done, overpaid, or returned.</p>
<p class="MarginBottomZero">Also see, </p>
<ul class="MarginBottomGap">
<li><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our video: <a href="https://youtu.be/fbEG5iZcRcM">QuickTip: Patient Refunds</a></li>
<li><a href="carecreditrefund.html">CareCredit Refund</a></li>
<li><a href="patientportaltransactions.html">Patient Portal Refunds</a></li>
<li><a href="account.html">Account Module</a>, Right-click options</li>
</ul>
<p>We typically recommend using a payment type of <i>Patient Refund </i>(<a href="definitionspaymenttypes.html">Definitions: Payment Types</a>), so refunds can be excluded from the payment reports and deposits as needed.</p>
<p>Users may want to consider performing an <a href="incometransfer.html">Income Transfer</a> to ensure all payments, including refunds are allocated properly.</p>
<h2>Patient Overpayment</h2>
<p class="MarginBottomZero">When a procedure has been overpaid by the patient, do the following:  </p>
<ol class="MarginBottomGap">
<li>Right-click the original payment, and select <b>Refund</b>. <ul>
<li>Alternatively, users can click <b>Payment</b> from the Account Module and enter the refund manually as a negative amount (e.g. -100).</li>
<li>If creating a partial refund, adjust the total payment (i.e. refund) amount.</li>
</ul>
</li>
<li>Verify the <a href="paysplit.html">Paysplit</a> information. <ul>
<li>The paysplits should generally match the original payment being refunded, unless the payment has since been transferred. If the payment was transferred, ensure the paysplits are attached to the production, provider, or unearned type where the income is currently being applied or allocated. </li>
<li>If creating a partial refund, edit the payment splits (i.e., remove or change any paysplits as needed) to match the total payment amount.</li>
</ul>
</li>
<li>Verify or enter any payment information (Check #, Notes, Payment Type, etc). For card payments, see <a href="paymentreturn.html">Credit Card Return</a>. ACH transactions cannot be refunded.</li>
<li>Click <b>OK</b> to finalize the refund.</li>
</ol>
<img src="images/refundPatOverpay.png" width="915" height="517"/><h2>Work Not Performed</h2>
<p class="MarginBottomZero">When a procedure was set complete but the work was not actually performed on the patient, do the following: </p>
<ol class="MarginBottomGap">
<li>Credit the fee of the procedure to be refunded back to the account. (Skip if refunding an <a href="unearnedprepayment.html">Unearned / Prepayment</a>) <ol>
<li>Highlight the procedure.</li>
<li>Click <b>Adjustment</b>. </li>
<li>Enter the amount and select a subtraction adjustment type. </li>
<li>Click <b>OK</b> to credit the account.</li>
</ol>
</li>
<li>Create the refund payment.  <ul>
<li>If refunding a full payment that has not been transferred:  <ol>
<li>Right-click the original payment.</li>
<li>Click <b>Refund</b>. </li>
<li>The payment window will open with a negative payment matching the same amount of the original payment with negative paysplits.html matching the original payment will automatically be created. Verify the paysplits.</li>
</ol>
</li>
<li>If refunding a partial payment (e.g., payment was split to multiple procedures) or a payment that was transferred:  <ol>
<li>Click Payment.</li>
<li>Enter the refund as a negative amount (e.g., -100).</li>
<li>Create paysplits that match the original payment to be refunded (e.g., if the payment was originally attached to a specific procedure, attach the paysplit being refunded to the same procedure) or if the payment was transferred create paysplits to refund where the income is currently being allocated. </li>
</ol>
</li>
</ul>
</li>
<li>Process the refund using the original payment method. Verify the payment type, enter the check number or for card payments, see Credit Card Return. ACH transactions cannot be refunded.</li>
<li>Click <b>OK</b> to finalize the refund.</li>
</ol>
<h2>Product or Service Return</h2>
<p>If a patient purchased a service or product and is now returning it or would like to be refunded, follow these steps to refund the payment and zero out any charge.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Credit the fee of the procedure to be refunded back to the account.  <ol>
<li>Highlight the procedure. </li>
<li>Click <b>Adjustment</b>. </li>
<li>Enter the amount and select a subtraction adjustment type. </li>
<li>Click <b>OK</b> to credit the account. <br/> The return can be left as a credit on the patient's account or if the patient has other balances outstanding, the credit can be transferred using the <a href="incometransfermanager.html">Income Transfer Manager</a> or a manual <a href="incometransfer.html">Income Transfer</a>. To refund the patient:</li>
</ol>
</li>
<li>To refund the patient: <ul>
<li>If refunding a full payment that has not been transferred:  <ol>
<li>Right-click the original payment</li>
<li>Click <b>Refund</b>. </li>
<li>The payment window is opened with a negative payment matching the same amount and paysplits as the original payment. Verify the paysplits.</li>
</ol>
</li>
<li>If refunding a partial payment (e.g., payment was split to multiple procedures) or a payment that was transferred:  <ol>
<li>Click Payment.</li>
<li>Enter the refund as a negative amount (e.g., -100).</li>
<li>Create paysplits that match the original payment to be refunded (e.g., if the payment was originally attached to a specific procedure, attach the paysplit being refunded to the same procedure) or if the payment was transferred create paysplits to refund where the income is currently being allocated. </li>
</ol>
</li>
</ul>
</li>
<li>Process the refund using the original payment method. Verify the payment type, enter the check number or for card payments, see Credit Card Return. ACH transactions cannot be refunded.</li>
<li>Click <b>OK</b> to finalize the refund.</li>
</ol>
<h2>Warranty Credit</h2>
<p>If a procedure needs to be warrantied (e.g., patient paid for a filling that fell out and it needs to be redone). The patient is not going to be refunded any money, but the procedure is being redone at no charge, follow the steps below:</p>
<p class="MarginBottomZero">If the procedure is being redone by the same provider or payment does not need to be transferred to the new procedure:  </p>
<ol class="MarginBottomGap">
<li>Chart the warranty procedure.</li>
<li>Add a subtraction adjustment to the new procedure.</li>
<ol>
<li>Click <b>Adjustment</b>. </li>
<li>Enter the amount and select a subtraction adjustment type. </li>
<li>Click <b>OK</b> to credit the account.</li>
</ol>
</ol>
<p class="MarginBottomZero">If the procedure is being redone by a different provider and payment should be transferred to the new provider </p>
<ol>
<li>Chart the warranty procedure.</li>
<li>Add a subtraction adjustment to the original procedure. <ol>
<li>Click <b>Adjustment</b>. </li>
<li>Enter the amount and select a subtraction adjustment type. </li>
<li>Click <b>OK</b> to credit the account.</li>
</ol>
</li>
<li>Complete an <a href="incometransfer.html">Income Transfer</a> to reallocate payment to the new procedure. <ol>
<li>Click <b>Payment</b>.</li>
<li>Enter $0 as the payment amount.</li>
<li>Check None (Income Transfer) as the payment type.</li>
<li>Click <b>Add Split</b>.  <ol>
<li>Attach the paysplit to the original procedure.</li>
<li>Enter a negative amount equal to <i>Patient Paid</i> on the original procedure.</li>
<li>Click <b>OK</b> to save the paysplit.</li>
</ol>
</li>
<img src="images/refundPatWarrantyTransfer.png" width="811" height="540"/><li>Click <b>Add Split</b> again to create a positive paysplit towards the new procedure. <ol>
<li>Attach the paysplit to the new procedure.</li>
<li>Enter a positive amount matching the other paysplit that was created (e.g., if the other paysplit was -50, enter 50)</li>
</ol>
</li>
<li>Click <b>OK</b> to save the positive paysplit and go back to the payment window. <i>Current Payment Splits</i> should total 0.00. </li>
</ol>
</li>
<li>Click <b>OK </b>to complete the income transfer.</li>
</ol>
<p class="MarginBottomGap"><img src="images/refundPatWarrantyTransferOK.png" width="493" height="311"/></p>
<p>If the original procedure had insurance income, this cannot be transferred using an income transfer. An insurance claim will need to be created for the new procedure in order to allocate the insurance income. See <a href="insurancerefunds.html">Insurance Refunds</a>: Allocate to a different claim.</p>
</div>
</div>
</body>
</html>```
