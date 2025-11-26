# File: ./www.opendental.com/manual232/unittestpaymentplanscreens.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Payment Plan Unit Test Screens</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('unittestpaymentplanscreens','unittestpaymentplan','unittesting.html','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/unittestpaymentplanscreens.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/unittestpaymentplanscreens.html" >v24.2</option><option value="https://www.opendental.com/manual241/unittestpaymentplanscreens.html" >v24.1</option><option value="https://www.opendental.com/manual233/unittestpaymentplanscreens.html" >v23.3</option><option value="https://www.opendental.com/manual232/unittestpaymentplanscreens.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/unittestpaymentplanscreens.html" >v23.1</option><option value="https://www.opendental.com/manual224/unittestpaymentplanscreens.html" >v22.4</option><option value="https://www.opendental.com/manual223/unittestpaymentplanscreens.html" >v22.3</option><option value="https://www.opendental.com/manual222/unittestpaymentplanscreens.html" >v22.2</option><option value="https://www.opendental.com/manual221/unittestpaymentplanscreens.html" >v22.1</option><option value="https://www.opendental.com/manual214/unittestpaymentplanscreens.html" >v21.4</option><option value="https://www.opendental.com/manual213/unittestpaymentplanscreens.html" >v21.3</option><option value="https://www.opendental.com/manual212/unittestpaymentplanscreens.html" >v21.2</option><option value="https://www.opendental.com/manual211/unittestpaymentplanscreens.html" >v21.1</option><option value="https://www.opendental.com/manual205/unittestpaymentplanscreens.html" >v20.5</option><option value="https://www.opendental.com/manual204/unittestpaymentplanscreens.html" >v20.4</option><option value="https://www.opendental.com/manual203/unittestpaymentplanscreens.html" >v20.3</option><option value="https://www.opendental.com/manual202/unittestpaymentplanscreens.html" >v20.2</option><option value="https://www.opendental.com/manual201/unittestpaymentplanscreens.html" >v20.1</option><option value="https://www.opendental.com/manual194/unittestpaymentplanscreens.html" >v19.4</option><option value="https://www.opendental.com/manual193/unittestpaymentplanscreens.html" >v19.3</option><option value="https://www.opendental.com/manual192/unittestpaymentplanscreens.html" >v19.2</option><option value="https://www.opendental.com/manual191/unittestpaymentplanscreens.html" >v19.1</option><option value="https://www.opendental.com/manual184/unittestpaymentplanscreens.html" >v18.4</option><option value="https://www.opendental.com/manual183/unittestpaymentplanscreens.html" >v18.3</option><option value="https://www.opendental.com/manual182/unittestpaymentplanscreens.html" >v18.2</option><option value="https://www.opendental.com/manual181/unittestpaymentplanscreens.html" >v18.1</option><option value="https://www.opendental.com/manual174/unittestpaymentplanscreens.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Payment Plan Unit Test Screens</p></div>
<div class="GeneralPageContent">
<p>These screens represent the different <a href="unittestpaymentplan.html">Payment Plan Unit Tests</a> scenarios.</p>
<p>Down equals total amount.  <img src="images/UnitTest1.gif" width="915" height="678"/></p>
<p>Number of payments simple.  <img src="images/UnitTest2.gif" width="915" height="678"/></p>
<p>Term example.  <img src="images/UnitTest3.gif" width="915" height="678"/></p>
<p>Term example.  <img src="images/UnitTest4.gif" width="915" height="678"/></p>
<p>Real world example.  <img src="images/UnitTest5.gif" width="915" height="678"/></p>
<p>Payment amount example.  <img src="images/UnitTest6.gif" width="915" height="678"/></p>
<p>Term plan with no interest and different final payment amount  <img src="images/UnitTest7.gif" width="915" height="678"/></p>
<h2>Recalculations</h2>
<p>1. Balance Due on Account <img src="images/BalanceDue-Before.gif" width="915" height="678"/></p>
<p>1a. Balance Due: If you select Prepay and Recalculate Interest  <img src="images/_formRecalc-Prepay-RecalcInterest.gif" width="395" height="265"/><img src="images/prePayRecalc-BalanceDue-After.gif" width="915" height="678"/></p>
<p>1b. Balance Due: If you select Prepay and do not Recalculate Interest  <img src="images/_formRecalc-Prepay-NoRecalcInterest.gif" width="395" height="265"/><img src="images/prePayRecalc-BalanceDue-After-NoRecalcInterest.gif" width="915" height="678"/></p>
<p>1c. Balance Due: If you select Pay on Principal and Recalculate Interest  <img src="images/_formRecalc-PayOnPrincipal-RecalcInterest.gif" width="395" height="265"/><img src="images/prePayRecalc-BalanceDue-After.gif" width="915" height="678"/></p>
<p>1d. Balance Due: If you select Pay on Principal and do not Recalculate Interest.  <img src="images/_formRecalc-PayOnPrincipal-NoRecalcInterest.gif" width="395" height="265"/><img src="images/payOnPrincipalRecalc-BalanceDue-After-NoRecalcInterest.gif" width="915" height="678"/></p>
<p>2. Overpaid  <img src="images/OverPaid-Before.gif" width="915" height="678"/></p>
<p>2a. Overpaid: If you select Prepay and Recalculate Interest <br/><img src="images/_formRecalc-Prepay-RecalcInterest.gif" width="395" height="265" class="ImageInParagraph"/><img src="images/prePayRecalc-OverPaid-After.gif" width="915" height="678"/></p>
<p>2b. Overpaid: If you select Prepay and do not Recalculate Interest <br/><img src="images/_formRecalc-Prepay-NoRecalcInterest.gif" width="395" height="265" class="ImageInParagraph"/><br/><img src="images/prePayRecalc-OverPaid-After-NoRecalcInt.gif" width="915" height="678" class="ImageInParagraph"/></p>
<p>2c. Overpaid: If you select Pay on Principal and Recalculate Interest <br/><img src="images/_formRecalc-PayOnPrincipal-RecalcInterest.gif" width="395" height="265" class="ImageInParagraph"/><br/><img src="images/payOnPrincipalRecalc-OverPaid-After.gif" width="915" height="678" class="ImageInParagraph"/></p>
<p>2d. Overpaid: If you select Pay on Principal and do not Recalculate Interest. <br/><img src="images/_formRecalc-PayOnPrincipal-NoRecalcInterest.gif" width="395" height="265" class="ImageInParagraph"/><img src="images/payOnPrincipalRecalc-OverPaid-After-NoRecalcInt.gif" width="915" height="678"/></p>
</div>
</div>
</body>
</html>```
