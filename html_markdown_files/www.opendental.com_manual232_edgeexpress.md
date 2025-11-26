# File: ./www.opendental.com/manual232/edgeexpress.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Edge Express</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('edgeexpress','paymentpatientcreditcard','payment','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/edgeexpress.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/edgeexpress.html" >v24.2</option><option value="https://www.opendental.com/manual241/edgeexpress.html" >v24.1</option><option value="https://www.opendental.com/manual233/edgeexpress.html" >v23.3</option><option value="https://www.opendental.com/manual232/edgeexpress.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/edgeexpress.html" >v23.1</option><option value="https://www.opendental.com/manual224/edgeexpress.html" >v22.4</option><option value="https://www.opendental.com/manual223/edgeexpress.html" >v22.3</option><option value="https://www.opendental.com/manual222/edgeexpress.html" >v22.2</option><option value="https://www.opendental.com/manual221/edgeexpress.html" >v22.1</option><option value="https://www.opendental.com/manual214/edgeexpress.html" >v21.4</option><option value="https://www.opendental.com/manual213/edgeexpress.html" >v21.3</option><option value="https://www.opendental.com/manual212/edgeexpress.html" >v21.2</option><option value="https://www.opendental.com/manual211/edgeexpress.html" >v21.1</option><option value="https://www.opendental.com/manual205/edgeexpress.html" >v20.5</option><option value="https://www.opendental.com/manual204/edgeexpress.html" >v20.4</option><option value="https://www.opendental.com/manual203/edgeexpress.html" >v20.3</option><option value="https://www.opendental.com/manual202/edgeexpress.html" >v20.2</option><option value="https://www.opendental.com/manual201/edgeexpress.html" >v20.1</option><option value="https://www.opendental.com/manual194/edgeexpress.html" >v19.4</option><option value="https://www.opendental.com/manual193/edgeexpress.html" >v19.3</option><option value="https://www.opendental.com/manual192/edgeexpress.html" >v19.2</option><option value="https://www.opendental.com/manual191/edgeexpress.html" >v19.1</option><option value="https://www.opendental.com/manual184/edgeexpress.html" >v18.4</option><option value="https://www.opendental.com/manual183/edgeexpress.html" >v18.3</option><option value="https://www.opendental.com/manual182/edgeexpress.html" >v18.2</option><option value="https://www.opendental.com/manual181/edgeexpress.html" >v18.1</option><option value="https://www.opendental.com/manual174/edgeexpress.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Edge Express</p></div>
<div class="GeneralPageContent">
<p>In the <a href="payment.html">Payment</a> window, in the <a href="paymentpatientcreditcard.html">Credit Card Payment</a> area, click <b>Global Payments Integrated</b>.</p>
<img src="images/edgeExpressTransactionTypes.png" width="394" height="280"/><h2>EdgeExpress Transaction Types</h2>
<p>Select the transaction to process, then the card entry method.</p>
<p class="MarginBottomZero"><b>Card Entry Method</b>: </p>
<ul class="MarginBottomGap">
<li>Terminal: Use the terminal to swipe the patient's card.</li>
<li>Web Service: Type in the patient's card number and expiration date.</li>
</ul>
<p class="MarginBottomZero"><b>Transaction Types</b>: Refer to the OpenEdge user manual for details on each type. </p>
<ul class="MarginBottomGap">
<li> Purchase: A standard credit card charge. See <a href="paymentpatientcreditcard.html">Credit Card Payment</a>.</li>
<li>Return: Credits the amount of the transaction to the card. See <a href="paymentreturn.html">Credit Card Return</a>.</li>
<li>Void: Reverse a sale the same day it was made. </li>
</ul>
<p><b>Save Token</b>: Securely store the credit card number and expiration date as a token for future use. Set the default in Preferences, <i>Automatically store credit card tokens</i>.</p>
<p><b>Prompt for Signature</b>: Prompt patients for a signature on the credit card terminal before completing the transaction. Terminal must support electronic signature capabilities. </p>
<p><b>Print Receipt</b>: Automatically print a receipt to the default receipt printer when the transaction is completed.</p>
<p>Click <b>OK</b> to continue the transaction.</p>
<h2>Additional Resources</h2>
<p class="MarginBottomZero">Related Links: </p>
<ul class="MarginBottomGap">
<li><a href="edgeexpressaddcard.html">Edge Express Add Card</a></li>
<li><a href="edgeexpresssetup.html">EdgeExpress Setup</a></li>
</ul>
</div>
</div>
</body>
</html>```
