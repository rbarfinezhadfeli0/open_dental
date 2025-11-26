# File: ./www.opendental.com/manual243/paymentplanrecalculate.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Payment Plan Recalculate</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paymentplanrecalculate','paymentplanpatient','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/paymentplanrecalculate.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/paymentplanrecalculate.html" >v24.2</option><option value="https://www.opendental.com/manual241/paymentplanrecalculate.html" >v24.1</option><option value="https://www.opendental.com/manual233/paymentplanrecalculate.html" >v23.3</option><option value="https://www.opendental.com/manual232/paymentplanrecalculate.html" >v23.2</option><option value="https://www.opendental.com/manual231/paymentplanrecalculate.html" >v23.1</option><option value="https://www.opendental.com/manual224/paymentplanrecalculate.html" >v22.4</option><option value="https://www.opendental.com/manual223/paymentplanrecalculate.html" >v22.3</option><option value="https://www.opendental.com/manual222/paymentplanrecalculate.html" >v22.2</option><option value="https://www.opendental.com/manual221/paymentplanrecalculate.html" >v22.1</option><option value="https://www.opendental.com/manual214/paymentplanrecalculate.html" >v21.4</option><option value="https://www.opendental.com/manual213/paymentplanrecalculate.html" >v21.3</option><option value="https://www.opendental.com/manual212/paymentplanrecalculate.html" >v21.2</option><option value="https://www.opendental.com/manual211/paymentplanrecalculate.html" >v21.1</option><option value="https://www.opendental.com/manual205/paymentplanrecalculate.html" >v20.5</option><option value="https://www.opendental.com/manual204/paymentplanrecalculate.html" >v20.4</option><option value="https://www.opendental.com/manual203/paymentplanrecalculate.html" >v20.3</option><option value="https://www.opendental.com/manual202/paymentplanrecalculate.html" >v20.2</option><option value="https://www.opendental.com/manual201/paymentplanrecalculate.html" >v20.1</option><option value="https://www.opendental.com/manual194/paymentplanrecalculate.html" >v19.4</option><option value="https://www.opendental.com/manual193/paymentplanrecalculate.html" >v19.3</option><option value="https://www.opendental.com/manual192/paymentplanrecalculate.html" >v19.2</option><option value="https://www.opendental.com/manual191/paymentplanrecalculate.html" >v19.1</option><option value="https://www.opendental.com/manual184/paymentplanrecalculate.html" >v18.4</option><option value="https://www.opendental.com/manual183/paymentplanrecalculate.html" >v18.3</option><option value="https://www.opendental.com/manual182/paymentplanrecalculate.html" >v18.2</option><option value="https://www.opendental.com/manual181/paymentplanrecalculate.html" >v18.1</option><option value="https://www.opendental.com/manual174/paymentplanrecalculate.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Payment Plan Recalculate</p></div>
<div class="GeneralPageContent">
<p>If a patient makes a payment to an Old Payment Plan that is intended as an early payment (before the payment plan amount is due) or a payment to principal, future payments and interest can be recalculated.</p>
<p>In an <a href="paymentplanpatient.html">Old Payment Plan</a>, under Terms, click <b>Recalculate</b>.</p>
<p><span style="color:red"> Old Payment Plans, formerly Patient Payment Plans, are a deprecated feature. Additional Old Payment Plans cannot be created. Existing Old Payment Plans can still be edited and payments can be attached to these plans.</span> See <a href="paymentplandynamic.html">Payment Plan</a> to create new patient repayment plans.</p>
<img src="images/paymentplanRecalculate.png" width="381" height="254"/><div class="Note">Note: Added adjustments are not be recalculated. Manually edit any payment plan adjustments in the patient account, Amortization Schedule, and in <a href="paymentplantxcredits.html">Payment Plan Procedures and Credits</a>.</div>
<br/><br/><p>Enter the payment. See <a href="paymentplanpayment.html">Payment to a Payment Plan</a>.</p>
<p>In the <a href="account.html">Account Module</a>, double-click the original payment plan. The payment will show as an line item in the amortization schedule.</p>
<p>Under Terms, click <b>Recalculate</b>. <br/></p>
<p class="MarginBottomZero">Select how payment should be allocated. </p>
<ul class="MarginBottomGap">
<li><b>Prepay</b>: The amount will be applied to future amounts due (e.g. towards the next due payment).</li>
<li><b>Pay on Principal</b>: The amount will be subtracted from the total balance, then remaining charges will be recalculated.</li>
</ul>
<p>To also recalculate interest, check the <b>Recalculate Interest</b> box.</p>
<p>Click <b>OK</b> to recalculate payments.</p>
<p class="MarginBottomZero">Late Payments: Interest can also be recalculated for early or late payments. It does not matter which allocation method the user chooses. </p>
<ul class="MarginBottomGap">
<li>If the user does recalculate interest, the accrued interest is added to outstanding interest amounts then recalculated.</li>
<li>If the user does not recalculate interest, the accrued interest is added to the next payment; the outstanding amounts remain the same.</li>
</ul>
<h2>Example</h2>
<p>Patient has a $4500 payment plan that had a $0 balance as of 07/01/2022. Their next payment of $400 is not due until 08/01/2022. On 07/12/22, they made a payment of $500, making the payment plan balance $-500.</p>
<p></p>
<img src="images/recalcAmortOriginal.png" width="648" height="162"/><p>If <b>Prepay</b> is selected as the <i>Payment Allocation Method</i> and interest is also recalculated, the prepayment will be applied to future payments (e.g., payment #7). Any payments that were paid in full, will be noted <i>Prepaid</i>.</p>
<img src="images/recalcAmortPrepay.png" width="648" height="188"/><p>If <b>Pay on principal</b> is selected as the <i>Payment Allocation Method</i> and interest is also recalculated, the prepayment will first subtract from the total balance. Then the remaining payments will be recalculated based on the new balance (new balance / remaining payments = new due amounts). This may change the total numbers of payments or last payment date of the payment plan.</p>
<img src="images/recalcAmortPrincipal.png" width="648" height="160"/><h2>Troubleshooting</h2>
<p><b>A patient has not paid their balance for more than one month and I want to recalculate interest.</b></p>
<p>When you recalculate, it will only recalculate the interest for the balance at time you recalculate; it will not take into account more than one month.</p>
</div>
</div>
</body>
</html>```
