# File: ./www.opendental.com/manual232/xchargevoid.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - XCharge Void Payment</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('xchargevoid','xcharge','paymentpatientcreditcard','payment','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/xchargevoid.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/xchargevoid.html" >v24.2</option><option value="https://www.opendental.com/manual241/xchargevoid.html" >v24.1</option><option value="https://www.opendental.com/manual233/xchargevoid.html" >v23.3</option><option value="https://www.opendental.com/manual232/xchargevoid.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/xchargevoid.html" >v23.1</option><option value="https://www.opendental.com/manual224/xchargevoid.html" >v22.4</option><option value="https://www.opendental.com/manual223/xchargevoid.html" >v22.3</option><option value="https://www.opendental.com/manual222/xchargevoid.html" >v22.2</option><option value="https://www.opendental.com/manual221/xchargevoid.html" >v22.1</option><option value="https://www.opendental.com/manual214/xchargevoid.html" >v21.4</option><option value="https://www.opendental.com/manual213/xchargevoid.html" >v21.3</option><option value="https://www.opendental.com/manual212/xchargevoid.html" >v21.2</option><option value="https://www.opendental.com/manual211/xchargevoid.html" >v21.1</option><option value="https://www.opendental.com/manual205/xchargevoid.html" >v20.5</option><option value="https://www.opendental.com/manual204/xchargevoid.html" >v20.4</option><option value="https://www.opendental.com/manual203/xchargevoid.html" >v20.3</option><option value="https://www.opendental.com/manual202/xchargevoid.html" >v20.2</option><option value="https://www.opendental.com/manual201/xchargevoid.html" >v20.1</option><option value="https://www.opendental.com/manual194/xchargevoid.html" >v19.4</option><option value="https://www.opendental.com/manual193/xchargevoid.html" >v19.3</option><option value="https://www.opendental.com/manual192/xchargevoid.html" >v19.2</option><option value="https://www.opendental.com/manual191/xchargevoid.html" >v19.1</option><option value="https://www.opendental.com/manual184/xchargevoid.html" >v18.4</option><option value="https://www.opendental.com/manual183/xchargevoid.html" >v18.3</option><option value="https://www.opendental.com/manual182/xchargevoid.html" >v18.2</option><option value="https://www.opendental.com/manual181/xchargevoid.html" >v18.1</option><option value="https://www.opendental.com/manual174/xchargevoid.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>XCharge Void Payment</p></div>
<div class="GeneralPageContent">
<p>XCharge payments or returns can be voided if the original transaction was processed in the last 24 hours and has not been deposited.</p>
<p>In the <a href="payment.html">Payment</a> window, click <a href="xcharge.html">XCharge</a>. Select <i>Void</i> from the list of transaction types.</p>
<img src="images/xchargeVoidWindow.gif" width="371" height="427"/><p>Voiding <a href="xcharge.html">XCharge (OpenEdge)</a> transactions removes the original transaction from the patient's bank the same day. If the transaction is older or has been deposited, the payment can be returned instead (see <a href="paymentreturn.html">Credit Card Return</a>). Returns require a few days to process.</p>
<p class="MarginBottomZero">To void an XCharge transaction: </p>
<ol class="MarginBottomGap">
<li>In the patient's <a href="account.html">Account Module</a>, click <b>Payment</b>.</li>
<li>Enter a negative amount (e.g. -50). It must match the original transaction amount. Click <b>OK</b> to open the <a href="payment.html">Payment</a> window. <ul>
<li>Alternatively, right-click the original payment, click <b>Refund</b>, and go to Step 5.</li>
</ul>
</li>
<li><b>Clinics</b>: If using Clinics, verify the correct clinic is selected.</li>
<li><b>Current Payment Splits</b>: Allocate the void's payment split (paysplit) to a procedure or unearned income type.  <ul>
<li>If voiding a payment that has been allocated: Add a paysplit associated to the original procedure. Check <b>Show All Charges</b>, locate the charge for the original procedure, then click <b>Add Partial</b> and enter a negative split amount.</li>
<li>If voiding a prepayment that hasn't been allocated yet, add a paysplit and assign the unearned type of the original prepayment.</li>
<li>If the original payment was not allocated to a procedure or unearned type, users do not need to create a paysplit.</li>
<li>If no paysplit is added, an unallocated paysplit will be created.</li>
</ul>
</li>
<li>After verifying the paysplits, click <b>XCharge</b> and select <i>Void</i> as the ransaction type. Click <b>OK</b>. <ul>
<li>If using right-click, Refund, paysplits are added automatically to match the original payment.</li>
</ul>
</li>
<li>Click <b>Search</b> to locate the original transaction. <p><img src="images/xChargeCardLookup.gif" width="799" height="258"/></p>
</li>
<li>Select the transaction and click <b>OK</b> to fill the X-Charge Release window with the original transaction details.</li>
<li>Click <b>Process</b> or <b>F12</b> to complete the void. The payment window will automatically close.</li>
<li>The <a href="paymenttransdetails.html">Credit Card Transaction Details</a> will automatically be added to the payment note. Double-click the payment to print or email a receipt.</li>
</ol>
<div class="Note">Note: Payments allocated to procedures for multiple family members will post to each patient account.</div>
</div>
</div>
</body>
</html>```
