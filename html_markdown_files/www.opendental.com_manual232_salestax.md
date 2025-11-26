# File: ./www.opendental.com/manual232/salestax.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sales Tax</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('salestax','adjustments','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/salestax.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/salestax.html" >v24.2</option><option value="https://www.opendental.com/manual241/salestax.html" >v24.1</option><option value="https://www.opendental.com/manual233/salestax.html" >v23.3</option><option value="https://www.opendental.com/manual232/salestax.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/salestax.html" >v23.1</option><option value="https://www.opendental.com/manual224/salestax.html" >v22.4</option><option value="https://www.opendental.com/manual223/salestax.html" >v22.3</option><option value="https://www.opendental.com/manual222/salestax.html" >v22.2</option><option value="https://www.opendental.com/manual221/salestax.html" >v22.1</option><option value="https://www.opendental.com/manual214/salestax.html" >v21.4</option><option value="https://www.opendental.com/manual213/salestax.html" >v21.3</option><option value="https://www.opendental.com/manual212/salestax.html" >v21.2</option><option value="https://www.opendental.com/manual211/salestax.html" >v21.1</option><option value="https://www.opendental.com/manual205/salestax.html" >v20.5</option><option value="https://www.opendental.com/manual204/salestax.html" >v20.4</option><option value="https://www.opendental.com/manual203/salestax.html" >v20.3</option><option value="https://www.opendental.com/manual202/salestax.html" >v20.2</option><option value="https://www.opendental.com/manual201/salestax.html" >v20.1</option><option value="https://www.opendental.com/manual194/salestax.html" >v19.4</option><option value="https://www.opendental.com/manual193/salestax.html" >v19.3</option><option value="https://www.opendental.com/manual192/salestax.html" >v19.2</option><option value="https://www.opendental.com/manual191/salestax.html" >v19.1</option><option value="https://www.opendental.com/manual184/salestax.html" >v18.4</option><option value="https://www.opendental.com/manual183/salestax.html" >v18.3</option><option value="https://www.opendental.com/manual182/salestax.html" >v18.2</option><option value="https://www.opendental.com/manual181/salestax.html" >v18.1</option><option value="https://www.opendental.com/manual174/salestax.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sales Tax</p></div>
<div class="GeneralPageContent">
<p>See <a href="adjustments.html">Adjustments</a>.</p>
<p>Sales tax can be manually or automatically applied to completed procedures. Sales tax displays as an adjustment.</p>
<p>Here is how Sales Tax appears in the <a href="account.html">Account Module</a>:</p>
<img src="images/salesTaxExample.gif" width="736" height="50"/><h2>Set up Requirements</h2>
<p class="MarginBottomZero">Before using the sales tax feature, the following needs to be set up: </p>
<ul class="MarginBottomGap">
<li>Create a positive sales tax adjustment type in <a href="definitionsadjtypes.html">Definitions: Adj Types</a>.</li>
<li>Set the adjustment type, tax percentage, default provider, and automation in <a href="preferences.html">Preferences</a>.</li>
<li>If <i>Automate Sales Tax</i> is enabled, set which procedures are taxed in each <a href="procedurecodeedit.html">Procedure Code</a>.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>If the sales tax provider is different than the procedures' provider, the sales tax adjustment will show as a separate charge in the <a href="payment.html">Payment</a> window, Outstanding Charges grid, even though the adjustment is attached to the procedure.</li>
<li>If the procedure fee changes, delete the sales tax adjustment and re-complete the procedure or manually edit the adjustment amount.</li>
<li>Enable <i>Auto Tax</i> on a <a href="procedurecodeedit.html">Procedure Code</a> and enable the preference, <i>Automate Sales Tax</i>, to post sales tax automatically.</li>
<li>Sales tax must be added manually to completed <a href="repeatingcharge.html">Repeating Charge</a> procedures and procedures attached to an <a href="orthocase.html">Ortho Case</a>.</li>
<li>Sales tax adjustments may be manually added to procedures that already have sales tax applied. Verify the procedure is not already taxed before applying.</li>
<li>Procedures being billed to <a href="planppo.html">PPO Percentage</a> or <a href="planppofixed.html">PPO Fixed Benefit </a> insurance plan types: sales tax amount is calculated based on the billed fee less any estimated write-off (i.e., insurance fee). </li>
</ul>
</div>
</p>
<h2>Manual Sales Tax</h2>
<p>In the Account Module, highlight one or more completed procedures. In the toolbar, click the Adjustment dropdown, then <b>Apply Sales Tax</b>.</p>
<img src="images/toolbarSalesTax.gif" width="179" height="83"/><p>A sales tax adjustment will be immediately created and attached to each procedure. The adjustment is directly attached to the procedure. </p>
<h2>Automate Sales Tax</h2>
<p>A sales tax adjustment is automatically added to a patient's account when a procedure is set complete. The adjustment is directly attached to the procedure. </p>
<p>Ensure procedures are marked as taxable in the <a href="procedurecodeedit.html">Procedure Code</a> window. </p>
<p class="MarginBottomZero">Taxable procedures display on the Treatment Plan. There are two options: </p>
<ul class="MarginBottomGap">
<li>Display tax amount on the procedure description. This will happen automatically if the Tax Est column has not been added to the treatment plan. The taxable amount will calculate into the patient portion. </li>
<li>Display tax amount in a separate column. Add the Tax Est column in <a href="displayfields.html">Display Fields</a>. </li>
</ul>
</div>
</div>
</body>
</html>```
