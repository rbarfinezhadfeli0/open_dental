# File: ./www.opendental.com/manual/portalonlinepayments.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Online Payments</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('portalonlinepayments','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/portalonlinepayments.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/portalonlinepayments.html" >v24.2</option><option value="https://www.opendental.com/manual241/portalonlinepayments.html" >v24.1</option><option value="https://www.opendental.com/manual233/portalonlinepayments.html" >v23.3</option><option value="https://www.opendental.com/manual232/portalonlinepayments.html" >v23.2</option><option value="https://www.opendental.com/manual231/portalonlinepayments.html" >v23.1</option><option value="https://www.opendental.com/manual224/portalonlinepayments.html" >v22.4</option><option value="https://www.opendental.com/manual223/portalonlinepayments.html" >v22.3</option><option value="https://www.opendental.com/manual222/portalonlinepayments.html" >v22.2</option><option value="https://www.opendental.com/manual221/portalonlinepayments.html" >v22.1</option><option value="https://www.opendental.com/manual214/portalonlinepayments.html" >v21.4</option><option value="https://www.opendental.com/manual213/portalonlinepayments.html" >v21.3</option><option value="https://www.opendental.com/manual212/portalonlinepayments.html" >v21.2</option><option value="https://www.opendental.com/manual211/portalonlinepayments.html" >v21.1</option><option value="https://www.opendental.com/manual205/portalonlinepayments.html" >v20.5</option><option value="https://www.opendental.com/manual204/portalonlinepayments.html" >v20.4</option><option value="https://www.opendental.com/manual203/portalonlinepayments.html" >v20.3</option><option value="https://www.opendental.com/manual202/portalonlinepayments.html" >v20.2</option><option value="https://www.opendental.com/manual201/portalonlinepayments.html" >v20.1</option><option value="https://www.opendental.com/manual194/portalonlinepayments.html" >v19.4</option><option value="https://www.opendental.com/manual193/portalonlinepayments.html" >v19.3</option><option value="https://www.opendental.com/manual192/portalonlinepayments.html" >v19.2</option><option value="https://www.opendental.com/manual191/portalonlinepayments.html" >v19.1</option><option value="https://www.opendental.com/manual184/portalonlinepayments.html" >v18.4</option><option value="https://www.opendental.com/manual183/portalonlinepayments.html" >v18.3</option><option value="https://www.opendental.com/manual182/portalonlinepayments.html" >v18.2</option><option value="https://www.opendental.com/manual181/portalonlinepayments.html" >v18.1</option><option value="https://www.opendental.com/manual174/portalonlinepayments.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Online Payments</p></div>
<div class="GeneralPageContent">
<p>View and process payments made through the Payment Portal or CareCredit Lookup or Apply that need to be allocated using the Online Payments tool. </p>
<p>In the <a href="mainmenu.html">Main Menu</a> click Tools, Online Payments.</p>
<img src="images/onlinePaymentsTool.png" width="692" height="611"/><p>Alternatively, in the Main Menu, click Alerts. Select the Pending Payment alert, then click Open.</p>
<p>This option only appears in Tools menu when online or Payment Portal payments are enabled for an integrated payment processor or the <a href="carecreditsetup.html">CareCredit</a> program link is enabled.</p>
<p>Patient <a href="payment.html">Payments</a> made through the <a href="portalpaymentsbypatient.html">Payment Portal</a> or using <a href="../site/carecredit.html">CareCredit</a><i> Lookup</i> or <i>Apply</i> appear in this window</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>From/To</b>: Select the payment date range.</li>
<li><b>Clinic</b>: Select the clinic. Only payments for the selected clinic are shown. Users can only view payments for clinics they have access to.</li>
<li><b>Process Status:</b> Select the payment pending status.</li>
<li><b>Payment Source</b>: Select the payment processor type.</li>
</ul>
<p>Click <b>Refresh</b> to update results in the Payment Information grid after setting filter options. </p>
<p>Right-click an item and select <i>Go to Account</i> to open the Account Module.</p>
<h2>Process Pending Payments</h2>
<p class="MarginBottomZero">Pending Online Payments can be processed in Open Dental manually or automatically: </p>
<ul class="MarginBottomGap">
<li><b>Automatically</b>: Enable <i>Mark online payments as processed</i> in <a href="preferences.html">Preferences</a> to immediately check the <i>Mark as Processed</i> checkbox on online payments. Online payments are not marked as pending.</li>
<li><b>Manually</b>: When the logged-in user is subscribed to Online Payments Pending <a href="alerts.html">Alerts</a>, an alert notifies the user online patient payments are pending.</li>
</ul>
<img src="images/onlinepaymentpending.gif" width="525" height="303"/><p><div class="Note">Note: <ul>
<li>When an online payment is made, the default <a href="allocationssetup.html">Allocations Setup</a> is used to allocate the payment to production immediately, whether processing manually or automatically.</li>
<li>A pending payment is a payment that has not been marked processed in Open Dental. The charge itself is immediately processed with the credit card provider when the patient makes the payment.</li>
<li>To mark the alert as read, select <i>Mark As Read</i>. This resets the <i>Alerts ()</i> count.</li>
</ul>
</div>
</p>
<p class="MarginBottomZero">To Process a Pending Online Payment: </p>
<ol class="MarginBottomGap">
<li>Double-click a pending payment to open the <a href="payment.html">Payment</a> window.</li>
<img src="images/portalPaymentProcessWindow.png" width="915" height="594"/><li>Review the payment information. <ul>
<li>Create paysplits if desired. This may already be done depending on <a href="allocationssetup.html">Allocations Setup</a>.</li>
<li>Check the <i>Mark as Processed</i> box.</li>
</ul>
</li>
<li>Click <b>OK</b> to process the payment.</li>
<li>When all pending payments are processed, click <b>Close</b>.</li>
</ol>
</div>
</div>
</body>
</html>```
