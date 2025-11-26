# File: ./www.opendental.com/manual232/carecreditpayment.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - CareCredit Payment</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('carecreditpayment','carecreditsetup','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/carecreditpayment.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/carecreditpayment.html" >v24.2</option><option value="https://www.opendental.com/manual241/carecreditpayment.html" >v24.1</option><option value="https://www.opendental.com/manual233/carecreditpayment.html" >v23.3</option><option value="https://www.opendental.com/manual232/carecreditpayment.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/carecreditpayment.html" >v23.1</option><option value="https://www.opendental.com/manual224/carecreditpayment.html" >v22.4</option><option value="https://www.opendental.com/manual223/carecreditpayment.html" >v22.3</option><option value="https://www.opendental.com/manual222/carecreditpayment.html" >v22.2</option><option value="https://www.opendental.com/manual221/carecreditpayment.html" >v22.1</option><option value="https://www.opendental.com/manual214/carecreditpayment.html" >v21.4</option><option value="https://www.opendental.com/manual213/carecreditpayment.html" >v21.3</option><option value="https://www.opendental.com/manual212/carecreditpayment.html" >v21.2</option><option value="https://www.opendental.com/manual211/carecreditpayment.html" >v21.1</option><option value="https://www.opendental.com/manual205/carecreditpayment.html" >v20.5</option><option value="https://www.opendental.com/manual204/carecreditpayment.html" >v20.4</option><option value="https://www.opendental.com/manual203/carecreditpayment.html" >v20.3</option><option value="https://www.opendental.com/manual202/carecreditpayment.html" >v20.2</option><option value="https://www.opendental.com/manual201/carecreditpayment.html" >v20.1</option><option value="https://www.opendental.com/manual194/carecreditpayment.html" >v19.4</option><option value="https://www.opendental.com/manual193/carecreditpayment.html" >v19.3</option><option value="https://www.opendental.com/manual192/carecreditpayment.html" >v19.2</option><option value="https://www.opendental.com/manual191/carecreditpayment.html" >v19.1</option><option value="https://www.opendental.com/manual184/carecreditpayment.html" >v18.4</option><option value="https://www.opendental.com/manual183/carecreditpayment.html" >v18.3</option><option value="https://www.opendental.com/manual182/carecreditpayment.html" >v18.2</option><option value="https://www.opendental.com/manual181/carecreditpayment.html" >v18.1</option><option value="https://www.opendental.com/manual174/carecreditpayment.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>CareCredit Payment</p></div>
<div class="GeneralPageContent">
<p>See <a href="carecreditsetup.html">CareCredit Setup</a>.</p>
<p>In the <a href="payment.html">Payment</a> window, at the upper right, is the <b>CareCredit</b> button.</p>
<img src="images/careCreditPaymentButton.png" width="663" height="162"/><p>Follow these steps when taking a CareCredit payment.</p>
<h2>Take a Payment</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In the <a href="account.html">Account Module</a>, click <b>Payment</b>. </li>
<li>Enter the entire treatment amount, and click OK to open the Payment window. <br/><div class="Note">Note: Though CareCredit deducts a processing fee, the payment should be entered as the full amount the patient agreed to. Any financing agreement between CareCredit and the patient, and any costs associated with accepting CareCredit, should not be documented in the patient's account to affect the balance (i.e., adjustments). The CareCredit <i>Merchant Fee</i> is noted in the payment Note and Surcharge Fee field once the payment is processed.</div>
</li>
<li>Verify the paysplits or select the completed procedures and treatment planned procedures. </li>
<li>Click the <b>CareCredit</b> button. The payment type changes to the type set in CareCredit Setup. <ul>
<li>If the <a href="preferences.html">Preference</a>, <i> Payments prompt for Payment Type</i>, is disabled, the payment type changes to the type set in CareCredit Setup. If the preference is enabled, users must manually select a payment type. </li>
</ul>
</li>
<li>If prompted, select a provider, then click OK to open the CareCredit Purchase Portal.<br/><div class="Note">Note:  If there are multiple paysplits with different providers (including prepayment splits with no provider) the Providers window opens. The user needs to select a provider from the list to represent the transaction. <ul>
<li>The Providers window does not open if all paysplits have the same provider or no provider (prepayment).</li>
<li>The provider selection does not affect the paysplits in Open Dental.</li>
<li>If using <i>Merchant Numbers by Provider</i>, select the provider with a merchant number.</li>
</ul>
</div>
</li>
<li>In the CareCredit Purchase Portal, click <b>Next</b>.<br/><img src="images/careCreditPurchase.png" width="730" height="394" class="ImageInParagraph"/><br/><div class="Note">Note: <ul>
<li>The patient name and zip code auto-populates with the information found in Open Dental.</li>
<li>Once this window opens, the purchase request must be completed within 30 minutes.</li>
<li>The print button does not print what is seen in any of the forms steps, it just prints a message that the form needs completed. </li>
<li>Do not leave this window and do other things in Open Dental.</li>
<li>If this window must be closed before the CareCredit transaction was completed, a prompt displays to acknowledge the close. The payment still saves in Open Dental. Double-click back into the payment to start over or delete it from the account.</li>
</ul>
</div>
</li>
<li>Verify the Purchase Amount, enter or look up the patient's CareCredit account number, and click <b>Next</b>.<br/><img src="images/careCreditPurchaseConfirm.png" width="778" height="566" class="ImageInParagraph"/><div class="Note">Note: The patient name and purchase amount are pulled from Open Dental and auto-populates the form. <ul>
<li>If the user does not know the Account Number, they can look it up by the patient's SSN &amp; Zip Code or by the Patient's Name &amp; Phone number.</li>
<li>The patient zip code, name, and phone number autopopulate.The SSN does not autopopulate the form, it must be entered manually. </li>
</ul>
</div>
</li>
<li>Enter the patient's identification information, select a financing option, and click <b>Submit Transaction</b>.<br/><img src="images/careCreditPurchasePatConfirm.png" width="778" height="671" class="ImageInParagraph"/><ul>
<li><b>Cardholder ID</b>: Use the dropdown to select an option to verify the patient's identity. Options are drivers license, green card/resident alien, government-issued ID, military ID, passport, state-issued ID, and tribal ID. </li>
<li><b>Financing Option</b>: Select an option (i.e., Care Credit, Clear Aligner) to open the dropdown and view and select financing terms. The options the user selected during setup under CareCredit Action, Manage, appear here.<br/><div class="Note">Note: Only options the patient's purchase amount qualifies for list.</div>
</li>
<li><b>Practice Memo</b>: Enter a memo that appears on the patient's CareCredit statement and at the bottom of the Pay Note of the Payment window.</li>
</ul>
 If 30 minutes has passed since beginning this process, a session expired message instructs the user to start over. The session could be expired during any of the above steps, a notification does not display until Submit Transaction is clicked.</li>
<li>Print the CareCredit receipt and have the patient sign, then click <b>Close</b>.<br/><img src="images/careCreditPurchaseComplete.png" width="855" height="601" class="ImageInParagraph"/></li>
</ol>
<p>Once the purchase window is closed, the Payment window closes and posts to the patient account. The transaction details are added to the Pay Note of the Payment window.</p>
<h2>Declined Payments</h2>
<p>If a CareCredit payment is declined, the payment still posts to the patient account. Double-click back into the payment to delete it. </p>
</div>
</div>
</body>
</html>```
