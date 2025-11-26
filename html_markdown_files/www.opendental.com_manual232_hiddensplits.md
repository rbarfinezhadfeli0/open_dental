# File: ./www.opendental.com/manual232/hiddensplits.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Hidden Splits</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('hiddensplits','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/hiddensplits.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/hiddensplits.html" >v24.2</option><option value="https://www.opendental.com/manual241/hiddensplits.html" >v24.1</option><option value="https://www.opendental.com/manual233/hiddensplits.html" >v23.3</option><option value="https://www.opendental.com/manual232/hiddensplits.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/hiddensplits.html" >v23.1</option><option value="https://www.opendental.com/manual224/hiddensplits.html" >v22.4</option><option value="https://www.opendental.com/manual223/hiddensplits.html" >v22.3</option><option value="https://www.opendental.com/manual222/hiddensplits.html" >v22.2</option><option value="https://www.opendental.com/manual221/hiddensplits.html" >v22.1</option><option value="https://www.opendental.com/manual214/hiddensplits.html" >v21.4</option><option value="https://www.opendental.com/manual213/hiddensplits.html" >v21.3</option><option value="https://www.opendental.com/manual212/hiddensplits.html" >v21.2</option><option value="https://www.opendental.com/manual211/hiddensplits.html" >v21.1</option><option value="https://www.opendental.com/manual205/hiddensplits.html" >v20.5</option><option value="https://www.opendental.com/manual204/hiddensplits.html" >v20.4</option><option value="https://www.opendental.com/manual203/hiddensplits.html" >v20.3</option><option value="https://www.opendental.com/manual202/hiddensplits.html" >v20.2</option><option value="https://www.opendental.com/manual201/hiddensplits.html" >v20.1</option><option value="https://www.opendental.com/manual194/hiddensplits.html" >v19.4</option><option value="https://www.opendental.com/manual193/hiddensplits.html" >v19.3</option><option value="https://www.opendental.com/manual192/hiddensplits.html" >v19.2</option><option value="https://www.opendental.com/manual191/hiddensplits.html" >v19.1</option><option value="https://www.opendental.com/manual184/hiddensplits.html" >v18.4</option><option value="https://www.opendental.com/manual183/hiddensplits.html" >v18.3</option><option value="https://www.opendental.com/manual182/hiddensplits.html" >v18.2</option><option value="https://www.opendental.com/manual181/hiddensplits.html" >v18.1</option><option value="https://www.opendental.com/manual174/hiddensplits.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Hidden Splits</p></div>
<div class="GeneralPageContent">
<p>The Hidden Splits tab shows a summary of patient payments with an Unearned Type flagged to not show on the account.</p>
<p>In the <a href="account.html">Account Module</a>, select the Hidden Splits tab.</p>
<img src="images/hiddenSplits.png" width="757" height="128"/><p>The tab is only available when hidden paysplits exist within the family and turns red when there is a hidden paysplit balance. When all outstanding paysplits have been allocated, the tab turns gray. </p>
<p>The Hidden Splits tab shows a summary of patient <a href="payment.html">Payments</a> with a <a href="definitionspaysplitunearned.html">Paysplit Unearned Type</a> flagged as <i>Do Not Show on Account</i>. They are typically prepayments to dynamic payment plan charges or treatment planned procedures and attached to one or the other. These <a href="unearnedprepayment.html">Unearned / Prepayment</a> types are hidden from the Patient Account tab, most reports, and statements, to not affect the patient balance until the treatment is complete or a payment plan charge is due.</p>
<p>To edit or view the original <a href="paysplit.html">Paysplit</a> details, double-click the line item under Hidden Splits. A <a href="receipt.html">Receipt</a> also includes the payment details. Run the <a href="reporthiddensplits.html">Hidden Payment Splits Report</a> to track accounts with these prepayments.</p>
<p> Create additional prepayment types in <a href="definitionspaysplitunearned.html">Definitions: PaySplit Unearned Types</a> and assign the default treatment plan procedure or dynamic payment plan prepayment type in <a href="allocationssetup.html">Allocations Setup</a> and <a href="preferences.html">Preferences</a>.</p>
<h2>Treatment Planned Procedure Prepayment</h2>
<p>For payments to be allocated to treatment planned procedures, <i>Allow prepayments to allocate to treatment planned procedures</i> must be enabled in Allocations Setup. To make a prepayment to a treatment planned procedure, see <a href="unearnedprepayment.html">Unearned / Prepayment</a>, Allocated Prepayment.</p>
<p class="MarginBottomZero">Once the procedure is set complete the following happens:  </p>
<ul class="MarginBottomGap">
<li>The prepayment is transferred to the Patient Account and shows on reports as of the transfer date. </li>
<li>The payment appears as a positive <a href="incometransfer.html">Income Transfer</a> line item in the Patient Account tab and negative line item in the Hidden Splits tab. </li>
<li>The procedure description no longer shows on the original prepayment line item under the Hidden Splits tab as the procedure is detached when transferred.</li>
</ul>
<p>The income transfer appears in the Patient Account like the screenshot shown below: <img src="images/hiddenSplitsComplete.png" width="757" height="153"/></p>
<p>In the event a treatment planned procedure is detached from the payment or the automatic transfer is deleted, use the <a href="incometransfermanager.html">Income Transfer Manager</a> to transfer the payment to a completed procedure.</p>
<h2>Payment Plan Prepayment</h2>
<p>When a patient overpays a Dynamic Payment Plan charge, and opts to apply the excess to a prepayment, an income transfer is automatically created moving the overpaid amount to a hidden split. The transfer consists of a negative paysplit, subtracting the excess payment from the pay plan charge, and a positive paysplit (also attached to the payment plan) turning the excess into a prepayment that shows in the Hidden Splits tab.</p>
<p>Once the next Dynamic Payment Plan charge becomes due, the prepayment transfers to the new interest charge. If the prepayment is more than the amount of the new interest charge, any excess is transferred to the principal payment plan charge. The transfer appears as a positive income transfer line item in the payment plan and a negative line item in the Hidden Splits tab.</p>
<p>If the payment plan prepayment transfer is deleted, open the original payment that overpaid the plan and click OK on the payment window. There is a prompt to apply the overpayment to the principal balance or as a prepayment. Click No to re-create the prepayment transfer.</p>
<p>If the prepayment is more than the total interest and principal charges, run the Income Transfer Manager to re-allocate it to outstanding charges outside of the payment plan.</p>
</div>
</div>
</body>
</html>```
