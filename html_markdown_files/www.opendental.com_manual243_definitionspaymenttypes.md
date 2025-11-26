# File: ./www.opendental.com/manual243/definitionspaymenttypes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Payment Types</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionspaymenttypes','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/definitionspaymenttypes.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/definitionspaymenttypes.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionspaymenttypes.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionspaymenttypes.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionspaymenttypes.html" >v23.2</option><option value="https://www.opendental.com/manual231/definitionspaymenttypes.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionspaymenttypes.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionspaymenttypes.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionspaymenttypes.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionspaymenttypes.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionspaymenttypes.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionspaymenttypes.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionspaymenttypes.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionspaymenttypes.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionspaymenttypes.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionspaymenttypes.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionspaymenttypes.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionspaymenttypes.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionspaymenttypes.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionspaymenttypes.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionspaymenttypes.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionspaymenttypes.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionspaymenttypes.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionspaymenttypes.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionspaymenttypes.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionspaymenttypes.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionspaymenttypes.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionspaymenttypes.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Payment Types</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Payment Types.</p>
<img src="images/definitionsPaymentTypes.png" width="713" height="444"/><p>The Payment Types definition determines the list of patient payment type options available in the <a href="payment.html">Edit Payment</a> window.</p>
<p>Also set which payment types to exclude when creating a <a href="depositslip.html">Deposit Slip</a>. The <a href="reportdailypayments.html">Daily Payments Report</a> is grouped by patient payment type and can optionally be filtered by type.</p>
<p>Double-click an existing item or click <b>Add</b> to create a new item. The Edit Definition window opens.</p>
<img src="images/definitionEditPayTypes.png" width="425" height="209"/><p><b>Name</b>: Enter the payment type.</p>
<p><b>N=Not selected for deposit</b>: Enter N to exclude this type from deposit slips or leave blank to include this type.</p>
<p><b>Hidden</b>: Check to hide this payment type.</p>
<p><div class="Note">Note: If a <i>Cash</i> payment type does not exist, one is automatically created for use in <a href="depositslip.html">Deposit Slips</a>. If a different payment type has been used to track cash payments, it must be changed to the <i>Cash</i> payment type in order to track money payments in a deposit.</div>
</p>
</div>
</div>
</body>
</html>```
