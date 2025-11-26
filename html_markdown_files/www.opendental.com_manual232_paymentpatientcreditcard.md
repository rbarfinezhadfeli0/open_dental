# File: ./www.opendental.com/manual232/paymentpatientcreditcard.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Credit Card Payment</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paymentpatientcreditcard','payment','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/paymentpatientcreditcard.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/paymentpatientcreditcard.html" >v24.2</option><option value="https://www.opendental.com/manual241/paymentpatientcreditcard.html" >v24.1</option><option value="https://www.opendental.com/manual233/paymentpatientcreditcard.html" >v23.3</option><option value="https://www.opendental.com/manual232/paymentpatientcreditcard.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/paymentpatientcreditcard.html" >v23.1</option><option value="https://www.opendental.com/manual224/paymentpatientcreditcard.html" >v22.4</option><option value="https://www.opendental.com/manual223/paymentpatientcreditcard.html" >v22.3</option><option value="https://www.opendental.com/manual222/paymentpatientcreditcard.html" >v22.2</option><option value="https://www.opendental.com/manual221/paymentpatientcreditcard.html" >v22.1</option><option value="https://www.opendental.com/manual214/paymentpatientcreditcard.html" >v21.4</option><option value="https://www.opendental.com/manual213/paymentpatientcreditcard.html" >v21.3</option><option value="https://www.opendental.com/manual212/paymentpatientcreditcard.html" >v21.2</option><option value="https://www.opendental.com/manual211/paymentpatientcreditcard.html" >v21.1</option><option value="https://www.opendental.com/manual205/paymentpatientcreditcard.html" >v20.5</option><option value="https://www.opendental.com/manual204/paymentpatientcreditcard.html" >v20.4</option><option value="https://www.opendental.com/manual203/paymentpatientcreditcard.html" >v20.3</option><option value="https://www.opendental.com/manual202/paymentpatientcreditcard.html" >v20.2</option><option value="https://www.opendental.com/manual201/paymentpatientcreditcard.html" >v20.1</option><option value="https://www.opendental.com/manual194/paymentpatientcreditcard.html" >v19.4</option><option value="https://www.opendental.com/manual193/paymentpatientcreditcard.html" >v19.3</option><option value="https://www.opendental.com/manual192/paymentpatientcreditcard.html" >v19.2</option><option value="https://www.opendental.com/manual191/paymentpatientcreditcard.html" >v19.1</option><option value="https://www.opendental.com/manual184/paymentpatientcreditcard.html" >v18.4</option><option value="https://www.opendental.com/manual183/paymentpatientcreditcard.html" >v18.3</option><option value="https://www.opendental.com/manual182/paymentpatientcreditcard.html" >v18.2</option><option value="https://www.opendental.com/manual181/paymentpatientcreditcard.html" >v18.1</option><option value="https://www.opendental.com/manual174/paymentpatientcreditcard.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Credit Card Payment</p></div>
<div class="GeneralPageContent">
<p>Open Dental has integrated with a few credit card processing companies to allow practices to take credit card payments directly through the payment window.</p>
<p>In the <a href="payment.html">Payment</a> window, at the upper right, is the Credit Card area.</p>
<img src="images/paymentPatientCreditCard.png" width="419" height="99"/><p>Only the credit card companies enabled in Program Links display in the Payment window.</p>
<p>If you are a payment processing company interested in direct integration with Open Dental, please see <a href="../site/creditcardintegration.html">Direct Credit Card Integration with Open Dental</a>.</p>
<h2>Integrated Options</h2>
<p>Prior to using an integrated payment method, the practice must first sign up with the merchant and enable the program link.</p>
<p>More than one credit card processing program may be enabled in Open Dental and clinics may set up different credentials when using different merchant accounts.</p>
<p class="MarginBottomZero"><a href="edgeexpress.html">EdgeExpress</a>: Global Payments Integrated<br/></p>
<ul class="MarginBottomGap">
<li>Supports online patient payments through the Payment Portal.</li>
<li>Support Recurring Payments.</li>
</ul>
<p class="MarginBottomZero"><a href="payconnectpaymentwindow.html">PayConnect by DentalXChange</a><br/></p>
<ul class="MarginBottomGap">
<li>Supports EMV transactions.</li>
<li>Supports online patient payments through the Payment Portal.</li>
<li>Support Recurring Payments.</li>
</ul>
<p class="MarginBottomZero"><a href="paysimple.html">PaySimple</a><br/></p>
<ul class="MarginBottomGap">
<li>Supports swiped credit card transactions plus ACH and direct debit payments from a patient's checking or savings account.</li>
<li>Supports online patient payments through the Payment Portal.</li>
<li>Support Recurring Payments.</li>
</ul>
<p><div class="Note">Note: <a href="xcharge.html">XCharge (OpenEdge)</a> was a previous option available through Global Payments Integrated. Existing XCharge installations can still be used, though Global Payments Integrated no longer supports XCharge. Users should contact Global Payments Integrated to switch to EdgeExpress, their updated payment processing option. </div>
</p>
<h2>Credit Card / ACH Payments</h2>
<p class="MarginBottomZero">To process a card payment: </p>
<ol class="MarginBottomGap">
<li>Enter the payment details in the <a href="payment.html">Payment</a> window then select a card from the <b>Credit Card</b> dropdown. <ul>
<li>To directly withdraw from a patient's checking or savings account (ACH payment), select the PaySimple ACH account instead. Or select <i>New Card</i> to enter new account information.</li>
</ul>
</li>
<li>Click the merchant's button to initiate the credit card processor. <ul>
<li>If multiple card processing programs are enabled, and a card or account is selected, use the program listed next to the number to process the payment. Otherwise, if <i>New Card</i> is selected, the user will be prompted to enter new card or account information.</li>
<li><a href="xcharge.html">XCharge (OpenEdge)</a>: Select Purchase as the transaction type. For new cards, check Save Token to safely store the card on file and click <b>OK</b> to enter the new card information. Click <b>Process</b> or <b>F12</b> to charge the card.<br/><div class="Note">Note: <ul>
<li>If a card terminal is attached, swipe the card after clicking <b>F12 Process</b>.</li>
<li>If the patient has insufficient funds, XCharge will take a partial payment up to the amount available. This is also true for Recurring Charges.</li>
</ul>
</div>
</li>
<li><a href="edgeexpress.html">Edge Express</a>: Select <i>Purchase</i> as the transaction type and select the card entry method. For new cards, check Save Token to safely store the card on file, then enter the card information and click <b>Make Payment</b> to charge the card.</li>
<li><a href="payconnectpaymentwindow.html">PayConnect Window</a>: Select Sale as the transaction type. For new cards, enter the card information and check Save Token to safely store the card on file then click <b>OK</b> to charge the card.</li>
<li><a href="paysimple.html">PaySimple</a>: Select Sale as the transaction type for credit/debit or click the ACH tab for a direct withdrawal. For new accounts, enter the card or bank account information and uncheck One-Time Payment to safely store the card or bank account on file then click <b>OK</b> to charge the card or account. <br/><div class="Note">Note:  After an ACH payment has been processed, the payment status will be marked as Posted (pending) in the Payment Note. Once the transaction is settled with the bank, the payment amount and status will need to be manually updated if declined. For users with an active registration key (are on support) and <a href="econnector.html">eConnector</a>, when the transaction is settled, the status in the payment note will automatically update to Settled if approved or Failed if declined. The note will also be appended with the declined payment response from PaySimple. </div>
</li>
</ul>
</li>
<li>Apply to Recurring Charge: For patients with <a href="recurringchargesauthorize.html">Authorized Recurring Charges</a>, check to apply this payment to their <a href="recurringcharges.html">Recurring Charge</a>. The Recurring Charge Month window will popup. Select whether to apply the payment to last month's recurring charge, or this month's. If the charge frequency is set for multiple days, select the specific recurring charge date this payment is for instead. <ul>
<li>If checked, the Credit Card dropdown menu is disabled.</li>
</ul>
</li>
<li>After the card or account has been processed, the <a href="paymenttransdetails.html">Credit Card Transaction Details</a> will be automatically added to the payment note. It will indicate successful or declined transactions.</li>
<li>Click <b>Print Receipt</b> or <b>E-mail Receipt</b> on the payment window to manually send a receipt generated from the credit card processor.  <ul>
<li>Receipts for EdgeExpress, XCharge, and PaySimple can be set to automatically print after a successful transaction. To set the default behavior see, <a href="edgeexpresssetup.html">EdgeExpress Setup</a>, <a href="xchargesetup.html">XCharge Setup</a>, or <a href="paysimplesetup.html">PaySimple Setup</a>. PayConnect transactions always automatically print a merchant receipt.</li>
<li>To print a receipt that shows patient account information, see <a href="receipt.html">Receipt</a>.</li>
</ul>
</li>
<li>Click <b>OK</b> to post the payment to the patient account.</li>
</ol>
<p><div class="Note">Note: <ul>
<li>When a credit card transaction is declined, the amount will automatically change to zero. Click <b>OK</b> to post the declined transaction to the account.</li>
<li>When an ACH transaction is declined, the payment amount does not get updated automatically and will need to be manually changed. Run the <a href="reportdailypayments.html">Daily Payments Report</a> and filter by the ACH payment type then reconcile the transactions with PaySimple reports to find the accounts with declined payments.</li>
<li>Clicking Cancel after a successful transaction will automatically void the payment.</li>
<li>Optionally, disable the merchant buttons on a payment after a successful transaction. Enable the <i>Disable merchant buttons for completed payments</i> preference. This prevents users from processing multiple transactions within a single payment. The credit card, CareCredit, and XWeb/PayConnect Portal, Return and Void buttons are not disabled after a successful transaction.</li>
</ul>
</div>
</p>
<p class="MarginBottomZero">In addition to patient payments, insurance payments can be taken via credit card. </p>
<ul class="MarginBottomGap">
<li>To take an insurance payment for single or small batch claims, see <a href="claimpayfinalize.html">Finalize Insurance Payment</a>. </li>
<li>To take an insurance payment for a large batch claim, see <a href="claimpaymentbatch.html">Batch Insurance Payment</a>.</li>
</ul>
<h2>Safely Storing Credit Card Information</h2>
<p>XCharge, PayConnect, and PaySimple use tokens to safely encrypt and store credit/debit card numbers and expiration dates or checking and savings account information with PaySimple. Storing tokens is optional. When a token is saved, the card or bank account will be listed as a masked number on the <a href="creditcardsmanage.html">Credit Card Manage</a> window.</p>
<p class="MarginBottomZero">Storing Tokens: </p>
<ul class="MarginBottomGap">
<li>The card number and expiration date are stored so they do not need to be re-entered each time the card is used.</li>
<li>An entry for the card will be added to the credit card manage list in the patient's <a href="account.html">Account Module</a>.</li>
<li>Tokens are stored to the credit card processing program that was used to add the card or bank information. The same program will be required to process future transactions for that token with the exception of XCharge and EdgeExpress. For example, a credit card added using PayConnect creates a unique token to PayConnect and any transactions for that token need to be processed using PayConnect. However, a credit card added through XCharge or EdgeExpress may be charged using either processor since both are from the same parent company.</li>
<li>If clinics are enabled, tokens are also stored to the clinic the logged-on user has selected under Clinics in the Main Menu.</li>
<li>Tokens must be stored to use <a href="recurringcharges.html">CC Recurring Charges</a>.</li>
</ul>
<p>If the office requires the card to be present for all transactions, it may be preferable to not store tokens. To set the default storage option, see Preferences, <i>Automatically store credit card tokens</i>. Users can also choose to save/not save a token when processing a single transaction (Save Token/One-Time Payment checkbox).</p>
<h2>PCI Compliance</h2>
<p>The credit card processor may offer to enroll the office in Payment Card Industry (PCI) compliance tools/assistance or charge the office non-compliance fees if the office does not complete the annual PCI DSS Self-Assessment Questionnaire (SAQ). PCI Compliance is required by the credit card industry for all merchants. Compliance is very difficult and time consuming to achieve. Many merchants may determine that the cost of the non-compliance fees are less than the cost of compliance. For more information: <a href="https://www.pcisecuritystandards.org/merchants/">https://www.pcisecuritystandards.org/merchants/</a>.</p>
</div>
</div>
</body>
</html>```
