# File: ./www.opendental.com/manual232/paymenttransdetails.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Credit Card Transaction Details</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paymenttransdetails','paymentpatientcreditcard','payment','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/paymenttransdetails.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/paymenttransdetails.html" >v24.2</option><option value="https://www.opendental.com/manual241/paymenttransdetails.html" >v24.1</option><option value="https://www.opendental.com/manual233/paymenttransdetails.html" >v23.3</option><option value="https://www.opendental.com/manual232/paymenttransdetails.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/paymenttransdetails.html" >v23.1</option><option value="https://www.opendental.com/manual224/paymenttransdetails.html" >v22.4</option><option value="https://www.opendental.com/manual223/paymenttransdetails.html" >v22.3</option><option value="https://www.opendental.com/manual222/paymenttransdetails.html" >v22.2</option><option value="https://www.opendental.com/manual221/paymenttransdetails.html" >v22.1</option><option value="https://www.opendental.com/manual214/paymenttransdetails.html" >v21.4</option><option value="https://www.opendental.com/manual213/paymenttransdetails.html" >v21.3</option><option value="https://www.opendental.com/manual212/paymenttransdetails.html" >v21.2</option><option value="https://www.opendental.com/manual211/paymenttransdetails.html" >v21.1</option><option value="https://www.opendental.com/manual205/paymenttransdetails.html" >v20.5</option><option value="https://www.opendental.com/manual204/paymenttransdetails.html" >v20.4</option><option value="https://www.opendental.com/manual203/paymenttransdetails.html" >v20.3</option><option value="https://www.opendental.com/manual202/paymenttransdetails.html" >v20.2</option><option value="https://www.opendental.com/manual201/paymenttransdetails.html" >v20.1</option><option value="https://www.opendental.com/manual194/paymenttransdetails.html" >v19.4</option><option value="https://www.opendental.com/manual193/paymenttransdetails.html" >v19.3</option><option value="https://www.opendental.com/manual192/paymenttransdetails.html" >v19.2</option><option value="https://www.opendental.com/manual191/paymenttransdetails.html" >v19.1</option><option value="https://www.opendental.com/manual184/paymenttransdetails.html" >v18.4</option><option value="https://www.opendental.com/manual183/paymenttransdetails.html" >v18.3</option><option value="https://www.opendental.com/manual182/paymenttransdetails.html" >v18.2</option><option value="https://www.opendental.com/manual181/paymenttransdetails.html" >v18.1</option><option value="https://www.opendental.com/manual174/paymenttransdetails.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Credit Card Transaction Details</p></div>
<div class="GeneralPageContent">
<p><a href="paymentpatientcreditcard.html">Credit Card</a> transaction details are added to the Note field of the <a href="payment.html">Payment</a> window when an <a href="xcharge.html">XCharge (OpenEdge)</a>, <a href="edgeexpress.html">Edge Express</a>, <a href="payconnectpaymentwindow.html">PayConnect Window</a>, or <a href="paysimple.html">PaySimple</a> transaction is attempted or completed. </p>
<p>Payments made by patients through the online <a href="portalpaymentsbypatient.html">Payment Portal</a> are indicated with an additional line in the Transaction Details.</p>
<h2>XCharge Transaction Details</h2>
<p>Each transaction type may return different transaction details and the information displayed comes directly from XCharge. A copy of the details are also stored here: <b>C:\Program Files (x86)\X-Charge, XResult.txt</b> for individual transactions and RecurringChargeResult.txt for all the transactions in the last batch of recurring charges run. Every time a transaction is completed the .txt file will be overwritten with the new transaction details.</p>
<p class="codeblock">RESULT=SUCCESS</p><p class="codeblock">TYPE=Purchase</p><p class="codeblock">APPROVALCODE=101883</p><p class="codeblock">AVSRESULT=Y</p><p class="codeblock">SWIPED=F</p><p class="codeblock">CONTACTLESS=F</p><p class="codeblock">CLERK=Tanya R</p><p class="codeblock">XCTRANSACTIONID=85548250673</p><p class="codeblock">ACCOUNT=XXXXXXXXXXX1014</p><p class="codeblock">EXPIRATION=1220</p><p class="codeblock">ACCOUNTTYPE=American Express</p><p class="codeblock">XCACCOUNTIDUPDATED=F</p><p class="codeblock">AMOUNT=109.00</p><p class="codeblock">APPROVEDAMOUNT=109.00</p><br/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Result</b>: Transaction result (e.g., success, partial, etc.).</li>
<li><b>Type</b>: Transaction type (e.g., purchase, return, void, etc.). </li>
<li><b>Approval Code</b>: Code associated with the approved transaction. Consists of numbers and/or letters. For voids, the approval code will always be 000000.</li>
<li><b>AVS RESULT</b>: Address verification service (AVS) is a service provided by the payment merchant that determines the match or partial match of the card holders address information.</li>
<li><b>Swiped</b>: Indicates whether the card was keyed-in or swiped. <ul>
<li>F = False. The card was keyed-in.</li>
<li>T = True. The card was swiped.</li>
</ul>
</li>
<li><b>Contactless</b>: Indicates whether the Tap to Pay option was used. <ul>
<li>F = False. The Tap to Pay option was not used.</li>
<li>T = True. The Tap to Pay option was used.</li>
</ul>
</li>
<li><b>Clerk</b>: User who was logged in when the payment was taken. R at the end of the user's name indicates the card was charged using <a href="recurringcharges.html">CC Recurring Charges</a>.</li>
<li><b>XCTransactionID</b>: XCharge alias assigned to each credit card. <b>Account</b>: Last 4 digits of the credit card used during the transaction. The first 8 (for AMEX) or 12 digits are masked for security purposes.</li>
<li><b>Expiration</b>: Expiration date of the credit card used during the transaction (MMYY).</li>
<li><b>Account Type</b>: Credit card brand (e.g., American Express, Discover, MasterCard, Visa, etc.).</li>
<li><b>XC Account ID Updated</b>: Indicates if the bank sent an updated expiration date, allowing expired credit cards to be charged. See <a href="xcharge.html">XCharge (OpenEdge)</a>, Decline Minimizer.</li>
<li><ul>
<li>F = False. A new credit card expiration date was not received.</li>
<li>T = True. A new credit card expiration date was received.</li>
</ul>
</li>
<li><b>Amount</b>: Requested purchase amount that was entered into the Payment window.</li>
<li><b>Approved Amount</b>: Amount that was charged to the card. This may be different than the Amount if the card holder did not have enough funds to process the entire amount (e.g., partial).</li>
</ul>
<h2>XCharge Transaction Details - Declined Payments</h2>
<p>Declined credit card payments display less transaction details. <p class="codeblock">RESULT=Transaction not completed</p><p class="codeblock">DESCRIPTION=001 Decline</p></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Result</b>: For declined cards this will typically display <i>Transaction not completed</i>.</li>
<li><b>Description</b>: Reason code for the decline. Refer to the XCharge user manual for code definitions.</li>
</ul>
<h2>PayConnect Transaction Details</h2>
<p>When processing a payment using PayConnect, users will receive a transaction details similar to what appears below will populate in the Note section of the Payment window: <p class="codeblock">Transaction Type: SALE</p><p class="codeblock">Status: Approved</p><p class="codeblock">Amount: 15.00</p><p class="codeblock">Card Type: VISA</p><p class="codeblock">Auth Code: XXXX</p><p class="codeblock">Ref Number: XXXXX</p></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Transaction Type</b>: Transaction type (e.g., sale, return, void, etc.).</li>
<li><b>Status</b>: Transaction result (e.g., approved, declined, etc.).</li>
<li><b>Amount</b>: Transaction amount.</li>
<li><b>Card Type</b>: Credit card brand (e.g., American Express, Discover, MasterCard, Visa, etc.).</li>
<li><b>Auth Code</b>: Code associated to the approved transaction consists of numbers and letters. For voids, the approval code will always be 000000.</li>
<li><b>Ref Number</b>: Transaction ID, the same as Transaction # on PayConnect receipts.</li>
<li><b>Surcharge Fee Amount</b>: For PayConnect 2.0 surcharge accounts only, surcharge fee for the transaction.</li>
</ul>
<h2>PaySimple Transaction Details</h2>
<p>When processing a payment using PaySimple, users will receive a transaction details similar to what appears below will populate in the Note section of the Payment window:</p>
<p><p class="codeblock">Transaction Type: SALE</p><p class="codeblock">Status: Authorized</p><p class="codeblock">Auth Code: Approved</p><p class="codeblock">Amount: 10.00</p><p class="codeblock">PaySimple Account ID: XXXXXXX</p><p class="codeblock">PaySimple Transaction Number: XXXXXXX</p></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Transaction Type</b>: Transaction type (e.g., sale, return, void, etc.)</li>
<li><b>Status</b>: Transaction result (e.g., approved, declined, etc.).</li>
<li><b>Amount</b>: Transaction amount.</li>
<li><b>Pay Simple Account ID</b>: Identifier assigned to the credit card/ACH account by PaySimple.</li>
<li><b>PaySimple Transaction Number</b>: Unique identifier for this transaction.</li>
</ul>
<h2>Edge Express Transaction Details</h2>
<p>When processing a payment using Edge Express, users will receive a transaction details similar to what appears below will populate in the Note section of the Payment window:</p>
<p><p class="codeblock">Amount: 10.00</p><p class="codeblock">Card Number: 346173XXXXXX0028</p><p class="codeblock">Transaction ID: 0000000XXXXX</p><p class="codeblock">Response: Approval</p><p class="codeblock">Processed: 08/02/2022 10:22 AM</p></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Amount</b>: Transaction amount.</li>
<li><b>Card Number</b>: Credit card number. The first 6 digits and last 4 digits are unmasked.</li>
<li><b>Transaction ID</b>: Unique identifier for this transaction.</li>
<li><b>Response</b>: Transaction result (e.g., approved, declined, etc.).</li>
<li><b>Processed</b>: Date and time the transaction was processed.</li>
</ul>
</div>
</div>
</body>
</html>```
