# File: ./www.opendental.com/manual232/trackingincome.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Track Income by Provider</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('trackingincome','reportprodinc','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/trackingincome.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/trackingincome.html" >v24.2</option><option value="https://www.opendental.com/manual241/trackingincome.html" >v24.1</option><option value="https://www.opendental.com/manual233/trackingincome.html" >v23.3</option><option value="https://www.opendental.com/manual232/trackingincome.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/trackingincome.html" >v23.1</option><option value="https://www.opendental.com/manual224/trackingincome.html" >v22.4</option><option value="https://www.opendental.com/manual223/trackingincome.html" >v22.3</option><option value="https://www.opendental.com/manual222/trackingincome.html" >v22.2</option><option value="https://www.opendental.com/manual221/trackingincome.html" >v22.1</option><option value="https://www.opendental.com/manual214/trackingincome.html" >v21.4</option><option value="https://www.opendental.com/manual213/trackingincome.html" >v21.3</option><option value="https://www.opendental.com/manual212/trackingincome.html" >v21.2</option><option value="https://www.opendental.com/manual211/trackingincome.html" >v21.1</option><option value="https://www.opendental.com/manual205/trackingincome.html" >v20.5</option><option value="https://www.opendental.com/manual204/trackingincome.html" >v20.4</option><option value="https://www.opendental.com/manual203/trackingincome.html" >v20.3</option><option value="https://www.opendental.com/manual202/trackingincome.html" >v20.2</option><option value="https://www.opendental.com/manual201/trackingincome.html" >v20.1</option><option value="https://www.opendental.com/manual194/trackingincome.html" >v19.4</option><option value="https://www.opendental.com/manual193/trackingincome.html" >v19.3</option><option value="https://www.opendental.com/manual192/trackingincome.html" >v19.2</option><option value="https://www.opendental.com/manual191/trackingincome.html" >v19.1</option><option value="https://www.opendental.com/manual184/trackingincome.html" >v18.4</option><option value="https://www.opendental.com/manual183/trackingincome.html" >v18.3</option><option value="https://www.opendental.com/manual182/trackingincome.html" >v18.2</option><option value="https://www.opendental.com/manual181/trackingincome.html" >v18.1</option><option value="https://www.opendental.com/manual174/trackingincome.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Track Income by Provider</p></div>
<div class="GeneralPageContent">
<p>The steps for allocating income to providers using <a href="reportprodinc.html">Production and Income Reports</a> varies depending on whether the income is an insurance payment or patient payment. See <a href="productionincome.html">Production and Income</a> for a detailed discussion of the important differences between production and income.</p>
<h2>Insurance Payments</h2>
<p>All production entries (procedures and adjustments) have a provider. When you enter a claim payment by procedure using the EOB, the payment amounts are allocated to the provider attached to the procedure. See <a href="claimpayfinalize.html">Finalize Insurance Payment</a>.</p>
<h2>Patient Payments</h2>
<p>These can be a little trickier to allocate. You can allocate income when entering a patient <a href="payment.html">Payment</a>, or, if you don't know the correct allocation amounts at payment time, transfer income using <a href="incometransfer.html">Income Transfer</a> to fine tune amounts when you do.</p>
<p class="MarginBottomZero">Hints: </p>
<ul class="MarginBottomGap">
<li>See <a href="allocationssetup.html">Allocations Setup</a> to set allocation preferences.</li>
<li>In Preferences, set the Payment window to automatically open every time you <a href="claimreceive.html">Receive a Claim</a>. Then you can fine tune provider balances using income transfers once you know how insurance has paid a claim.</li>
<li>For other queries about tracking provider income, see <a href="https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx">Query Examples</a> and filter results by provider and income.</li>
<li>To catch providers who have been overpaid, run Query #101.</li>
</ul>
<p>Version 15.2 to 17.2. The Payment Split Manager can be used at the time of payment to quickly allocate income to providers and attach procedures. Open Dental will suggest payment splits based on payment amount and outstanding charges and automatically attach procedures. You can accept, modify, delete, or add partial splits. </p>
<p>Version 15.1 or earlier: When you click OK, Open Dental will create payment splits by patient to the primary provider. If the amount exceeds the patient's balance, it will ask if you want to apply excess amounts to other family balances. If you click Yes, it will do so. If there are multiple providers who do the work for a single patient (e.g. a primary and hygienist), only the primary provider will receive the income.</p>
</div>
</div>
</body>
</html>```
