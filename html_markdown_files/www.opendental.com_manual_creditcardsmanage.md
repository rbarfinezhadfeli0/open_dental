# File: ./www.opendental.com/manual/creditcardsmanage.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Credit Card Manage</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('creditcardsmanage','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/creditcardsmanage.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/creditcardsmanage.html" >v24.2</option><option value="https://www.opendental.com/manual241/creditcardsmanage.html" >v24.1</option><option value="https://www.opendental.com/manual233/creditcardsmanage.html" >v23.3</option><option value="https://www.opendental.com/manual232/creditcardsmanage.html" >v23.2</option><option value="https://www.opendental.com/manual231/creditcardsmanage.html" >v23.1</option><option value="https://www.opendental.com/manual224/creditcardsmanage.html" >v22.4</option><option value="https://www.opendental.com/manual223/creditcardsmanage.html" >v22.3</option><option value="https://www.opendental.com/manual222/creditcardsmanage.html" >v22.2</option><option value="https://www.opendental.com/manual221/creditcardsmanage.html" >v22.1</option><option value="https://www.opendental.com/manual214/creditcardsmanage.html" >v21.4</option><option value="https://www.opendental.com/manual213/creditcardsmanage.html" >v21.3</option><option value="https://www.opendental.com/manual212/creditcardsmanage.html" >v21.2</option><option value="https://www.opendental.com/manual211/creditcardsmanage.html" >v21.1</option><option value="https://www.opendental.com/manual205/creditcardsmanage.html" >v20.5</option><option value="https://www.opendental.com/manual204/creditcardsmanage.html" >v20.4</option><option value="https://www.opendental.com/manual203/creditcardsmanage.html" >v20.3</option><option value="https://www.opendental.com/manual202/creditcardsmanage.html" >v20.2</option><option value="https://www.opendental.com/manual201/creditcardsmanage.html" >v20.1</option><option value="https://www.opendental.com/manual194/creditcardsmanage.html" >v19.4</option><option value="https://www.opendental.com/manual193/creditcardsmanage.html" >v19.3</option><option value="https://www.opendental.com/manual192/creditcardsmanage.html" >v19.2</option><option value="https://www.opendental.com/manual191/creditcardsmanage.html" >v19.1</option><option value="https://www.opendental.com/manual184/creditcardsmanage.html" >v18.4</option><option value="https://www.opendental.com/manual183/creditcardsmanage.html" >v18.3</option><option value="https://www.opendental.com/manual182/creditcardsmanage.html" >v18.2</option><option value="https://www.opendental.com/manual181/creditcardsmanage.html" >v18.1</option><option value="https://www.opendental.com/manual174/creditcardsmanage.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Credit Card Manage</p></div>
<div class="GeneralPageContent">
<p>The Credit Card Manage window lists saved credit/debit cards and checking/savings accounts for a patient.</p>
<p>In the <a href="account.html">Account Module</a>, Main tab, click <b>Credit Card Manage</b>.</p>
<img src="images/creditCardManage.PNG" width="915" height="232"/><p><a href="paymentpatientcreditcard.html">Credit/Debit Card</a> and account entries are automatically added here when a user processes an <a href="xcharge.html">XCharge (OpenEdge)</a>, <a href="edgeexpress.html">Edge Express</a>, <a href="payconnectpaymentwindow.html">PayConnect Window</a>, or <a href="paysimple.html">PaySimple</a> transaction and select <i>Save Token</i>.</p>
<p class="MarginBottomZero">Columns: </p>
<ul class="MarginBottomGap">
<li><b>Card Number</b>: Securely displays card or account saved on. The first 12 digits of each entry are masked with X for cards and * for bank accounts. </li>
<li><b>Clinic</b>: Only shows if the Clinics feature is enabled in <a href="showfeatures.html">Show Features</a>. Displays the clinic assigned to the credit card token.</li>
<li><b>Start Date</b>: Date the recurring charge is scheduled to start.</li>
<li><b>Stop Date</b>: Date the recurring charge is scheduled to stop. </li>
<li><b>Amount</b>: Scheduled payment amount.</li>
<li><b>Charge Frequency</b>: Day(s) of the month/week the <a href="recurringchargesauthorize.html">Recurring Charge</a> is scheduled to run.</li>
<li><b>Pay Plan</b>: X indicates the recurring charge is attached to a <a href="paymentplandynamic.html">Payment Plan</a> or <a href="paymentplanpatient.html">Old Payment Plan</a>.</li>
<li><b>Recurring Active</b>: X indicates recurring charges are active for the card. </li>
</ul>
<p class="MarginBottomZero">Depending on the integrated <a href="paymentpatientcreditcard.html">Credit Card</a> used to save a card token, there are different columns. If using multiple card processors, transactions can only be processed using the card processor for which the token is saved. </p>
<ul class="MarginBottomGap">
<li><b>XCharge</b>: X indicates the card token is saved in XCharge.</li>
<li><b>EdgeExpress</b>: X indicates the card token is saved in EdgeExpress.</li>
<li><b>PayConnect</b>: X indicates the card token is saved in PayConnect.</li>
<li><b>PaySimple</b>: X indicates the card token is saved in PaySimple.</li>
<li><b>ACH</b>: X indicates a checking or savings account token is saved in PaySimple.</li>
</ul>
<p class="MarginBottomZero"><b>Add New Card</b>: Add payment information without processing a payment. Click and enter the card or bank account information. If multiple credit card processing programs are enabled, select the program from the list when prompted, and then enter the payment information. </p>
<ul class="MarginBottomGap">
<li><a href="xchargeaddcard.html">XCharge Add Card</a></li>
<li><a href="edgeexpressaddcard.html">Edge Express Add Card</a></li>
<li><a href="payconnectaddcard.html">PayConnect Add Card</a></li>
<li><a href="paysimpleaddcard.html">PaySimple Add Card</a></li>
</ul>
<p>A token for the payment information is saved under the selected processing program. When clinics are enabled, the token also saves to the clinic the logged-on user has selected in the <a href="clinics.html">Clinics</a> dropdown in the <a href="mainmenu.html">Main Menu</a>. </p>
<p>Double-click an added card or account to <a href="recurringchargesauthorize.html">Authorize Recurring Charges</a>.</p>
<p><b>Reuse Existing Card</b>: Creates another entry (token) for an existing credit card that has an authorized recurring charge without re-entering the credit card number. Select an existing card with recurring charges and click to create an additional entry (token) without re-entering card details. The Credit Card Edit window opens immediately to authorize recurring charges. Click <b>Save</b> to create a copy of the card. If the selected card does not have recurring charges set up, a new entry is not made. Instead, any changes update the existing card.</p>
<p><b>Move To Patient</b>: Move a card or bank account to a different patient. Clear any recurring charges from the card first. Highlight the card or account, then click to select a new patient.</p>
<p><b>Up/Down</b>: To reorder the list, highlight a card or bank account, then click the Up/Down arrows. The order of cards and accounts in the list determines the order in the Credit Card dropdown on the <a href="payment.html">Payment</a> window.</p>
</div>
</div>
</body>
</html>```
