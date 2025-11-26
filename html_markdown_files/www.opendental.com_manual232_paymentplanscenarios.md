# File: ./www.opendental.com/manual232/paymentplanscenarios.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Payment Plan Examples</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paymentplanscenarios','paymentplanpatient','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/paymentplanscenarios.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/paymentplanscenarios.html" >v24.2</option><option value="https://www.opendental.com/manual241/paymentplanscenarios.html" >v24.1</option><option value="https://www.opendental.com/manual233/paymentplanscenarios.html" >v23.3</option><option value="https://www.opendental.com/manual232/paymentplanscenarios.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/paymentplanscenarios.html" >v23.1</option><option value="https://www.opendental.com/manual224/paymentplanscenarios.html" >v22.4</option><option value="https://www.opendental.com/manual223/paymentplanscenarios.html" >v22.3</option><option value="https://www.opendental.com/manual222/paymentplanscenarios.html" >v22.2</option><option value="https://www.opendental.com/manual221/paymentplanscenarios.html" >v22.1</option><option value="https://www.opendental.com/manual214/paymentplanscenarios.html" >v21.4</option><option value="https://www.opendental.com/manual213/paymentplanscenarios.html" >v21.3</option><option value="https://www.opendental.com/manual212/paymentplanscenarios.html" >v21.2</option><option value="https://www.opendental.com/manual211/paymentplanscenarios.html" >v21.1</option><option value="https://www.opendental.com/manual205/paymentplanscenarios.html" >v20.5</option><option value="https://www.opendental.com/manual204/paymentplanscenarios.html" >v20.4</option><option value="https://www.opendental.com/manual203/paymentplanscenarios.html" >v20.3</option><option value="https://www.opendental.com/manual202/paymentplanscenarios.html" >v20.2</option><option value="https://www.opendental.com/manual201/paymentplanscenarios.html" >v20.1</option><option value="https://www.opendental.com/manual194/paymentplanscenarios.html" >v19.4</option><option value="https://www.opendental.com/manual193/paymentplanscenarios.html" >v19.3</option><option value="https://www.opendental.com/manual192/paymentplanscenarios.html" >v19.2</option><option value="https://www.opendental.com/manual191/paymentplanscenarios.html" >v19.1</option><option value="https://www.opendental.com/manual184/paymentplanscenarios.html" >v18.4</option><option value="https://www.opendental.com/manual183/paymentplanscenarios.html" >v18.3</option><option value="https://www.opendental.com/manual182/paymentplanscenarios.html" >v18.2</option><option value="https://www.opendental.com/manual181/paymentplanscenarios.html" >v18.1</option><option value="https://www.opendental.com/manual174/paymentplanscenarios.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Payment Plan Examples</p></div>
<div class="GeneralPageContent">
<p>Below is guidance on how to set up a <a href="paymentplanpatient.html">Payment Plan</a> for certain scenarios. All examples assume that procedure fees and insurance estimates are set up correctly.</p>
<p>See <a href="paymentplandynamic.html">Dynamic Payment Plan</a> to create an open-ended repayment agreement.</p>
<p><b>Patient Payment plan for treatment that is already completed</b>: Create a payment plan and attach the completed procedures as credits. The Total Amount, Tx Completed Amt, and Total Tx Amt will match.</p>
<img src="images/payplanCompCredits.png" width="915" height="557"/><p><b>Patient Payment plan for procedures that are treatment planned, but not complete yet</b>:Create a payment plan and attach the treatment planned procedures. The Total Amount and Total Tx Amt will match. The Tx Completed Amt will initially be 0, but as the procedures are marked complete, the amount will automatically update. Payment plan credits in the account ledger will also be added as procedures are completed, thus offsetting the procedure charges.</p>
<img src="images/payplanTPCredits.png" width="915" height="559"/><p><b>Patient Payment plan for completed procedures and treatment planned procedures</b>: Create a payment plan and attach the completed and treatment planned procedures. The Total Amount and Total Tx Amt will match. The Tx Completed Amt will initially equal the value of all completed procedures. As the treatment planned procedures are marked complete, the amount will automatically update. Payment plan credits in the account ledger will also be added as procedures are completed, thus offsetting the procedure charges.</p>
<img src="images/payplanCompTpCredits.png" width="915" height="556"/><p><b>Uncommon: Patient Payment plan where you know the total payment plan amount, but do not want to attach procedure credits</b>: Create a payment plan and attach an unattached credit </p>
<p class="MarginBottomZero"></p>
<ol>
<li>Click<b> Tx Credits</b>. </li>
<li>click <b>Clear</b> to de-select all procedures. </li>
<li>Enter the payment plan amount in the Amt field. </li>
<li>click <b>Add</b>.</li>
</ol>
<p class="MarginBottomGap"><img src="images/payplanUnattached.png" width="915" height="371"/></p>
<p>The unattached credit amount will be considered a completed amount (Tx Completed Amt) and match the Total Tx Amt and Total Amount.</p>
<img src="images/payplanCompCredits.png" width="915" height="557"/></div>
</div>
</body>
</html>```
