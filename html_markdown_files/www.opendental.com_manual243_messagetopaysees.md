# File: ./www.opendental.com/manual243/messagetopaysees.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Message-to-Pay: What Patient Sees</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('messagetopaysees','paymentportalsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/messagetopaysees.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/messagetopaysees.html" >v24.2</option><option value="https://www.opendental.com/manual241/messagetopaysees.html" >v24.1</option><option value="https://www.opendental.com/manual233/messagetopaysees.html" >v23.3</option><option value="https://www.opendental.com/manual232/messagetopaysees.html" >v23.2</option><option value="https://www.opendental.com/manual231/messagetopaysees.html" >v23.1</option><option value="https://www.opendental.com/manual224/messagetopaysees.html" >v22.4</option><option value="https://www.opendental.com/manual223/messagetopaysees.html" >v22.3</option><option value="https://www.opendental.com/manual222/messagetopaysees.html" >v22.2</option><option value="https://www.opendental.com/manual221/messagetopaysees.html" >v22.1</option><option value="https://www.opendental.com/manual214/messagetopaysees.html" >v21.4</option><option value="https://www.opendental.com/manual213/messagetopaysees.html" >v21.3</option><option value="https://www.opendental.com/manual212/messagetopaysees.html" >v21.2</option><option value="https://www.opendental.com/manual211/messagetopaysees.html" >v21.1</option><option value="https://www.opendental.com/manual205/messagetopaysees.html" >v20.5</option><option value="https://www.opendental.com/manual204/messagetopaysees.html" >v20.4</option><option value="https://www.opendental.com/manual203/messagetopaysees.html" >v20.3</option><option value="https://www.opendental.com/manual202/messagetopaysees.html" >v20.2</option><option value="https://www.opendental.com/manual201/messagetopaysees.html" >v20.1</option><option value="https://www.opendental.com/manual194/messagetopaysees.html" >v19.4</option><option value="https://www.opendental.com/manual193/messagetopaysees.html" >v19.3</option><option value="https://www.opendental.com/manual192/messagetopaysees.html" >v19.2</option><option value="https://www.opendental.com/manual191/messagetopaysees.html" >v19.1</option><option value="https://www.opendental.com/manual184/messagetopaysees.html" >v18.4</option><option value="https://www.opendental.com/manual183/messagetopaysees.html" >v18.3</option><option value="https://www.opendental.com/manual182/messagetopaysees.html" >v18.2</option><option value="https://www.opendental.com/manual181/messagetopaysees.html" >v18.1</option><option value="https://www.opendental.com/manual174/messagetopaysees.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Message-to-Pay: What Patient Sees</p></div>
<div class="GeneralPageContent">
<p>See <a href="paymentportalsetup.html">Payment Portal Setup</a>.</p>
<p>Message-to-Pay is designed for patients to quickly make a payment from their mobile device. </p>
<h2>Initial Message</h2>
<p>In the <a href="account.html">Account Module</a> an Open Dental user clicks the Payment dropdown and Message-to-Pay. A text message or email is sent from <a href="messagetopayedit.html">Message-to-Pay Edit</a> to the patient.</p>
<img src="images/MsgtoPayText.png" width="300" height="605"/><p>The patient clicks the payment link to open the <a href="portalpaymentsbypatient.html">Payment Portal</a>, or the statement link to open <a href="portalpatientsees.html">Patient Portal</a>.</p>
<h2>Payment Portal</h2>
<p>Immediately upon opening the payment link, the patient can view their balance. The balance shown is as of the statement generated by the Message-to-Pay message. </p>
<img src="images/MsgtoPayBalance.png" width="300" height="609"/><p class="MarginBottomZero">The patient can choose from two options:  </p>
<ul class="MarginBottomGap">
<li><b>Pay Now</b>: Immediately make a one-time payment. </li>
<li><b>Verify and Pay</b>: Verify identity, then add a new card on file or pay with a previously used payment method.</li>
</ul>
<h2>Pay Now</h2>
<p>When <b>Pay Now</b> is selected, the patient is prompted to enter an amount, then they can enter card details to make the payment.</p>
<img src="images/msgtoPayPayNow.png" width="300" height="609"/><h2>Verify and Pay</h2>
<p>When <b>Verify and Pay</b> is selected, the patient chooses how to receive verification. The patient then enters the verification code and can make a payment. </p>
<img src="images/msgtoPayVerify.png" width="300" height="609"/></div>
</div>
</body>
</html>```
