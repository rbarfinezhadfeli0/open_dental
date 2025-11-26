# File: ./www.opendental.com/manual232/payconnectpaymentwindow.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - PayConnect Window</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('payconnectpaymentwindow','paymentpatientcreditcard','payment','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/payconnectpaymentwindow.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/payconnectpaymentwindow.html" >v24.2</option><option value="https://www.opendental.com/manual241/payconnectpaymentwindow.html" >v24.1</option><option value="https://www.opendental.com/manual233/payconnectpaymentwindow.html" >v23.3</option><option value="https://www.opendental.com/manual232/payconnectpaymentwindow.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/payconnectpaymentwindow.html" >v23.1</option><option value="https://www.opendental.com/manual224/payconnectpaymentwindow.html" >v22.4</option><option value="https://www.opendental.com/manual223/payconnectpaymentwindow.html" >v22.3</option><option value="https://www.opendental.com/manual222/payconnectpaymentwindow.html" >v22.2</option><option value="https://www.opendental.com/manual221/payconnectpaymentwindow.html" >v22.1</option><option value="https://www.opendental.com/manual214/payconnectpaymentwindow.html" >v21.4</option><option value="https://www.opendental.com/manual213/payconnectpaymentwindow.html" >v21.3</option><option value="https://www.opendental.com/manual212/payconnectpaymentwindow.html" >v21.2</option><option value="https://www.opendental.com/manual211/payconnectpaymentwindow.html" >v21.1</option><option value="https://www.opendental.com/manual205/payconnectpaymentwindow.html" >v20.5</option><option value="https://www.opendental.com/manual204/payconnectpaymentwindow.html" >v20.4</option><option value="https://www.opendental.com/manual203/payconnectpaymentwindow.html" >v20.3</option><option value="https://www.opendental.com/manual202/payconnectpaymentwindow.html" >v20.2</option><option value="https://www.opendental.com/manual201/payconnectpaymentwindow.html" >v20.1</option><option value="https://www.opendental.com/manual194/payconnectpaymentwindow.html" >v19.4</option><option value="https://www.opendental.com/manual193/payconnectpaymentwindow.html" >v19.3</option><option value="https://www.opendental.com/manual192/payconnectpaymentwindow.html" >v19.2</option><option value="https://www.opendental.com/manual191/payconnectpaymentwindow.html" >v19.1</option><option value="https://www.opendental.com/manual184/payconnectpaymentwindow.html" >v18.4</option><option value="https://www.opendental.com/manual183/payconnectpaymentwindow.html" >v18.3</option><option value="https://www.opendental.com/manual182/payconnectpaymentwindow.html" >v18.2</option><option value="https://www.opendental.com/manual181/payconnectpaymentwindow.html" >v18.1</option><option value="https://www.opendental.com/manual174/payconnectpaymentwindow.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>PayConnect Window</p></div>
<div class="GeneralPageContent">
<p>Use the PayConnect Payment window to take payments, add new cards, void a transaction, or process a return.</p>
<p>In the <a href="payment.html">Payment</a> window, click <b>PayConnect</b>.</p>
<img src="images/payconnect.gif" width="402" height="425"/><p>Alternatively, when finalizing an insurance payment, in the Edit Insurance Payment window, click <b>PayConnect</b>.</p>
<p>PayConnect is an integrated <a href="paymentpatientcreditcard.html">Credit Card Payment</a> program that can be used to process credit and debit card transactions. Options vary depending on if the practice/clinic has set up PayConnect 1.0 or PayConnect 2.0. See <a href="payconnectsetup.html">PayConnect Setup</a> for additional information. </p>
<p>Website: <a href="http://www.dentalxchange.com">http://www.dentalxchange.com</a>. Only available to U.S. customers.</p>
<h2>Pay Connect 1.0</h2>
<p>If using PayConnect 1.0, the interface shown at the top of this page appears.</p>
<p class="MarginBottomZero"><b>Transaction Type</b>: </p>
<ul class="MarginBottomGap">
<li>Sale: A standard credit card charge. </li>
<li>Auth: Add a new card. See <a href="payconnectaddcard.html">PayConnect Add Card</a>.</li>
<li>Void: Reverse a sale soon after (same day) it was made. See <a href="payconnectvoid.html">PayConnect Void</a>.</li>
<li>Return: Reverse a sale one or more days after it was made. See <a href="paymentreturn.html">Credit Card Return</a>.</li>
</ul>
<p><b>Card Number</b>: Place the cursor in the field then process using the terminal or type the credit card number.</p>
<p><b>Security Code</b>: Enter the security code from the back of the credit card. When the card is processed using the terminal the security code auto-populates.</p>
<p><b>Expiration (MMYY)</b>: Enter the credit card expiration date. When the card is processed using the terminal, the expiration date auto-populates.</p>
<p><b>Zip Code</b>: Enter the zipcode of the cardholder's billing address. When the card is processed using the terminal, the zip code auto-populates. When using a card on file, the zip code stored in <a href="creditcardsmanage.html">Credit Card Manage</a> auto-populates this field.</p>
<p><b>Name On Card</b>: Auto-populates with the selected patient's name or, when the card is processed using the terminal, the cardholder's name.</p>
<p><b>Amount</b>: The transaction amount entered in the payment window. To edit, cancel the transaction and enter the correct amount in the payment window.</p>
<p class="MarginBottomZero"><b>Save Token</b>: Securely store the credit card number and expiration date as a token for future use.  </p>
<ul class="MarginBottomGap">
<li>When the Default Processing Method is set to <i>Web Service</i>, <i>Automatically store credit card tokens</i> can be enabled in <a href="preferences.html">Preferences</a> to check this box by default. </li>
<li>When the Default Processing Method is set to <i>Terminal</i>, tokens can only be saved from <a href="creditcardsmanage.html">Credit Card Manage</a>. </li>
</ul>
<p><b>Force Duplicate</b>: Determines if a transaction on the same card, for the same amount, on the same day may be approved. Check to allow a duplicate transaction, uncheck to decline duplicates. Set the default in <a href="payconnectsetup.html">PayConnect Setup</a>.</p>
<p><b>Signature Box</b>: Patient may sign the transaction (optional) and the signature is stored with PayConnect. See <a href="electronicsignatures.html">Electronic Signatures</a> for signature capture options.</p>
<h2>Pay Connect 2.0</h2>
<p>If using PayConnect 2.0, the interface shown below appears when processing a payment.</p>
<img src="images/payConnect20Payment.png" width="446" height="466"/><p class="MarginBottomZero"><b>Transaction Type</b>: Choose the type of transaction to process. </p>
<ul class="MarginBottomGap">
<li>Sale: A standard credit card charge. </li>
<li>Auth: Add a new card. See <a href="payconnectaddcard.html">PayConnect Add Card</a>.</li>
<li>Void: Reverse a sale soon after (same day) it was made. See <a href="payconnectvoid.html">PayConnect Void</a>.</li>
<li>Return: Reverse a sale one or more days after it was made. See <a href="paymentreturn.html">Credit Card Return</a>.</li>
</ul>
<p class="MarginBottomZero"><b>Processing Method</b>: Choose the method to enter and process payment information. </p>
<ul class="MarginBottomGap">
<li>Web Service: Select to enter payment details manually through the PayConnect WebService. If using a card on file, click OK to process payment. If adding a new card, click OK to launch the <a href="payconnectaddcard.html">PayConnect Add Card</a> interface. </li>
<li>Terminal: Select to process a payment using a credit card terminal.</li>
</ul>
<p><b>Terminal for Transaction</b>: Select the credit card terminal device to use for this transaction (i.e., used to process a physical credit card).</p>
<p><b>Amount</b>: The transaction amount entered in the payment window. To edit, cancel the transaction and enter the correct amount in the payment window.</p>
<p><b>Reference Number</b>: Unique identifier for a transaction. Used for <a href="paymentreturn.html">Credit Card Return</a>.</p>
<p><b>Save Card</b>: Securely store the credit card number and expiration date as a token for future use. If the preference, <i>Automatically store credit card tokens</i>, is enabled this box is checked by default.</p>
<p><b>Force Duplicate</b>: Determines if a transaction on the same card, for the same amount, on the same day may be approved. Check to allow a duplicate transaction, uncheck to decline duplicates. Set the default in PayConnect Setup.</p>
<p><b>Signature Box</b>: Patient may sign the transaction (optional) and the signature is stored with PayConnect.</p>
<h2>Receipts</h2>
<p>Merchant receipts are automatically printed after any transaction is processed through PayConnect, using the <i>Receipts</i> printer defined in <a href="printersetup.html">Printer Setup</a>.</p>
<h2>EMV Transactions</h2>
<p>Credit cards with computer chips (EMV transactions) are supported for PayConnect but credit card tokens are only saved for PayConnect 2.0 transactions. For PayConnect 1.0, tokens are not saved. </p>
<h2>Troubleshooting</h2>
<p class="MarginBottomZero">When processing a payment on a terminal through Open Dental:  </p>
<ul class="MarginBottomGap">
<li>The payment window does include an option for <i>Terminal</i>. Ensure <i>Terminal </i>is selected for payments.</li>
<li>The terminal screen displays <i>DentalXChange Welcome</i>. Press F4 to ensure the terminal is in DentalXChange mode.</li>
</ul>
</div>
</div>
</body>
</html>```
