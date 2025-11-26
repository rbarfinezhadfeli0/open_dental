# File: ./www.opendental.com/manual232/patientportaltransactions.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Patient Portal Transactions</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('patientportaltransactions','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/patientportaltransactions.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/patientportaltransactions.html" >v24.2</option><option value="https://www.opendental.com/manual241/patientportaltransactions.html" >v24.1</option><option value="https://www.opendental.com/manual233/patientportaltransactions.html" >v23.3</option><option value="https://www.opendental.com/manual232/patientportaltransactions.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/patientportaltransactions.html" >v23.1</option><option value="https://www.opendental.com/manual224/patientportaltransactions.html" >v22.4</option><option value="https://www.opendental.com/manual223/patientportaltransactions.html" >v22.3</option><option value="https://www.opendental.com/manual222/patientportaltransactions.html" >v22.2</option><option value="https://www.opendental.com/manual221/patientportaltransactions.html" >v22.1</option><option value="https://www.opendental.com/manual214/patientportaltransactions.html" >v21.4</option><option value="https://www.opendental.com/manual213/patientportaltransactions.html" >v21.3</option><option value="https://www.opendental.com/manual212/patientportaltransactions.html" >v21.2</option><option value="https://www.opendental.com/manual211/patientportaltransactions.html" >v21.1</option><option value="https://www.opendental.com/manual205/patientportaltransactions.html" >v20.5</option><option value="https://www.opendental.com/manual204/patientportaltransactions.html" >v20.4</option><option value="https://www.opendental.com/manual203/patientportaltransactions.html" >v20.3</option><option value="https://www.opendental.com/manual202/patientportaltransactions.html" >v20.2</option><option value="https://www.opendental.com/manual201/patientportaltransactions.html" >v20.1</option><option value="https://www.opendental.com/manual194/patientportaltransactions.html" >v19.4</option><option value="https://www.opendental.com/manual193/patientportaltransactions.html" >v19.3</option><option value="https://www.opendental.com/manual192/patientportaltransactions.html" >v19.2</option><option value="https://www.opendental.com/manual191/patientportaltransactions.html" >v19.1</option><option value="https://www.opendental.com/manual184/patientportaltransactions.html" >v18.4</option><option value="https://www.opendental.com/manual183/patientportaltransactions.html" >v18.3</option><option value="https://www.opendental.com/manual182/patientportaltransactions.html" >v18.2</option><option value="https://www.opendental.com/manual181/patientportaltransactions.html" >v18.1</option><option value="https://www.opendental.com/manual174/patientportaltransactions.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Patient Portal Transactions</p></div>
<div class="GeneralPageContent">
<p>Use the Patient Portal Transactions window to view transactions made via the Pay button in Patient Portal.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, <b>Patient Portal Transactions</b>.</p>
<img src="images/patientportalTransactions.png" width="837" height="397"/><p>This window is only available when Online Payments are enabled for a compatible credit card processor. Only <a href="portalpaymentsbypatient.html">Online Payments</a> initiated from the <a href="portalpatientsees.html">Patient Portal</a> are listed in this window.</p>
<p class="MarginBottomZero">Filter results using the fields at the top: </p>
<ul class="MarginBottomGap">
<li><b>From/To Dates</b>: Determines the date range of transactions. The default date range is today.</li>
<li><b>Clinic</b>: Select the clinic. Only transactions for the selected clinic will show. Users can only view transactions for clinics they have access to.</li>
<li><b>Refresh</b>: Click to update results.</li>
</ul>
<p class="MarginBottomZero">Right-click on a transaction to select other options:  </p>
<ul class="MarginBottomGap">
<li><b>Go To Account</b>: Open the patient's Account Module.</li>
<li><b>Open Payment</b>: Open the Payment window for this transaction.</li>
<li><b>Void Payment</b>: Void the transaction.  <ul>
<li><a href="payconnectvoid.html">PayConnect Void</a></li>
<li><a href="xchargevoid.html">XCharge Void Payment</a></li>
<li><a href="edgeexpressvoid.html">EdgeExpress Void</a></li>
</ul>
</li>
<li><b>Process Return</b>: Issue a refund.  <ul>
<li><a href="paymentreturn.html">Credit Card Return</a></li>
</ul>
</li>
</ul>
</div>
</div>
</body>
</html>```
