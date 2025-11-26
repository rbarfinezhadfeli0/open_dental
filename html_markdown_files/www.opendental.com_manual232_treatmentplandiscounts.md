# File: ./www.opendental.com/manual232/treatmentplandiscounts.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - TP Procedure Discount</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('treatmentplandiscounts','treatmentplan','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/treatmentplandiscounts.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/treatmentplandiscounts.html" >v24.2</option><option value="https://www.opendental.com/manual241/treatmentplandiscounts.html" >v24.1</option><option value="https://www.opendental.com/manual233/treatmentplandiscounts.html" >v23.3</option><option value="https://www.opendental.com/manual232/treatmentplandiscounts.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/treatmentplandiscounts.html" >v23.1</option><option value="https://www.opendental.com/manual224/treatmentplandiscounts.html" >v22.4</option><option value="https://www.opendental.com/manual223/treatmentplandiscounts.html" >v22.3</option><option value="https://www.opendental.com/manual222/treatmentplandiscounts.html" >v22.2</option><option value="https://www.opendental.com/manual221/treatmentplandiscounts.html" >v22.1</option><option value="https://www.opendental.com/manual214/treatmentplandiscounts.html" >v21.4</option><option value="https://www.opendental.com/manual213/treatmentplandiscounts.html" >v21.3</option><option value="https://www.opendental.com/manual212/treatmentplandiscounts.html" >v21.2</option><option value="https://www.opendental.com/manual211/treatmentplandiscounts.html" >v21.1</option><option value="https://www.opendental.com/manual205/treatmentplandiscounts.html" >v20.5</option><option value="https://www.opendental.com/manual204/treatmentplandiscounts.html" >v20.4</option><option value="https://www.opendental.com/manual203/treatmentplandiscounts.html" >v20.3</option><option value="https://www.opendental.com/manual202/treatmentplandiscounts.html" >v20.2</option><option value="https://www.opendental.com/manual201/treatmentplandiscounts.html" >v20.1</option><option value="https://www.opendental.com/manual194/treatmentplandiscounts.html" >v19.4</option><option value="https://www.opendental.com/manual193/treatmentplandiscounts.html" >v19.3</option><option value="https://www.opendental.com/manual192/treatmentplandiscounts.html" >v19.2</option><option value="https://www.opendental.com/manual191/treatmentplandiscounts.html" >v19.1</option><option value="https://www.opendental.com/manual184/treatmentplandiscounts.html" >v18.4</option><option value="https://www.opendental.com/manual183/treatmentplandiscounts.html" >v18.3</option><option value="https://www.opendental.com/manual182/treatmentplandiscounts.html" >v18.2</option><option value="https://www.opendental.com/manual181/treatmentplandiscounts.html" >v18.1</option><option value="https://www.opendental.com/manual174/treatmentplandiscounts.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>TP Procedure Discount</p></div>
<div class="GeneralPageContent">
<p>Discounts can be applied to treatment planned procedures by a percentage or a specific dollar amount. </p>
<p>In the <a href="treatmentplan.html">Treatment Plan Module</a>, click <b>Discount</b>.</p>
<img src="images/tpDiscount.gif" width="323" height="178"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>To apply a percentage discount to specific procedures, highlight the procedures first, then click Discount.</li>
<li>To apply a percentage discount to all procedures, do not select any procedures, then click Discount.</li>
</ul>
<p><div class="Note">Note: The discount feature is intended for use with cash only patients and is not currently programmed to interact with insurance. Use this feature only if you know it complies with your local laws. Laws vary between regions and Open Dental does not differentiate legal and non-legal use of the program. For example, we have been told that it may be illegal to use different fee schedules for cash only patients vs. insured patients.</div>
</p>
<p class="MarginBottomZero"><b>Percent</b>: Enter the percentage of the discount to apply. Enter 0 to clear all discounts. </p>
<ul class="MarginBottomGap">
<li>Set the <i>Default Procedure discount percentage</i> and <i>Procedure discount adj type</i> in <a href="preferences.html">Preferences</a>.</li>
</ul>
<p>Click <b>OK </b>to apply the discount to procedures. The Discount column in the Procedures grid will reflect any discounted percentage amounts + any PPO insurance write-offs.</p>
<img src="images/tpDiscountGrid.gif" width="852" height="154"/><p>When completed, an adjustment is automatically added for the discount amount.</p>
<img src="images/tpDiscountAccount.gif" width="810" height="95"/><h2>Apply a Specific Dollar Amount Discount to a Treatment Planned Procedure</h2>
<p>To enter a specific dollar amount discount, double-click on the procedure code. </p>
<p>Enter the amount in the <a href="procedurefinancial.html">Procedure - Financial Tab</a>. </p>
<img src="images/tpDiscountProcedure.gif" width="915" height="158"/></div>
</div>
</body>
</html>```
