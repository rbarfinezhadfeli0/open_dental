# File: ./www.opendental.com/manual243/carecredittransactions.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - CareCredit Transactions</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('carecredittransactions','carecreditsetup','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/carecredittransactions.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/carecredittransactions.html" >v24.2</option><option value="https://www.opendental.com/manual241/carecredittransactions.html" >v24.1</option><option value="https://www.opendental.com/manual233/carecredittransactions.html" >v23.3</option><option value="https://www.opendental.com/manual232/carecredittransactions.html" >v23.2</option><option value="https://www.opendental.com/manual231/carecredittransactions.html" >v23.1</option><option value="https://www.opendental.com/manual224/carecredittransactions.html" >v22.4</option><option value="https://www.opendental.com/manual223/carecredittransactions.html" >v22.3</option><option value="https://www.opendental.com/manual222/carecredittransactions.html" >v22.2</option><option value="https://www.opendental.com/manual221/carecredittransactions.html" >v22.1</option><option value="https://www.opendental.com/manual214/carecredittransactions.html" >v21.4</option><option value="https://www.opendental.com/manual213/carecredittransactions.html" >v21.3</option><option value="https://www.opendental.com/manual212/carecredittransactions.html" >v21.2</option><option value="https://www.opendental.com/manual211/carecredittransactions.html" >v21.1</option><option value="https://www.opendental.com/manual205/carecredittransactions.html" >v20.5</option><option value="https://www.opendental.com/manual204/carecredittransactions.html" >v20.4</option><option value="https://www.opendental.com/manual203/carecredittransactions.html" >v20.3</option><option value="https://www.opendental.com/manual202/carecredittransactions.html" >v20.2</option><option value="https://www.opendental.com/manual201/carecredittransactions.html" >v20.1</option><option value="https://www.opendental.com/manual194/carecredittransactions.html" >v19.4</option><option value="https://www.opendental.com/manual193/carecredittransactions.html" >v19.3</option><option value="https://www.opendental.com/manual192/carecredittransactions.html" >v19.2</option><option value="https://www.opendental.com/manual191/carecredittransactions.html" >v19.1</option><option value="https://www.opendental.com/manual184/carecredittransactions.html" >v18.4</option><option value="https://www.opendental.com/manual183/carecredittransactions.html" >v18.3</option><option value="https://www.opendental.com/manual182/carecredittransactions.html" >v18.2</option><option value="https://www.opendental.com/manual181/carecredittransactions.html" >v18.1</option><option value="https://www.opendental.com/manual174/carecredittransactions.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>CareCredit Transactions</p></div>
<div class="GeneralPageContent">
<p>See <a href="carecreditsetup.html">CareCredit Setup</a>.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, <b>CareCredit Transactions</b>.</p>
<img src="images/careCreditTransactions.png" width="900" height="516"/><p class="MarginBottomZero">Alternatively, in the <a href="carecreditaction.html">CareCredit Action</a> window, click <b>Transactions</b>. </p>
<ul class="MarginBottomGap">
<li>When opened from the Tools menu, all transactions for all patients show.</li>
<li>When opened from the CareCredit Action window, only transactions for the selected patient show.</li>
</ul>
<h2>Transactions Tab</h2>
<p>The Transactions Tab shows purchases and refunds made through CareCredit.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>From / To</b>: Change the date range to filter transactions. Use the <b>W</b> buttons to quickly switch weeks.</li>
<li><b>Clinic</b>: Only visible when clinics is enabled. Filter the transaction list by clinic. </li>
<li><b>Refresh</b>: Click to update the list.</li>
</ul>
<p class="MarginBottomZero">Right-click a patient to:  </p>
<ul class="MarginBottomGap">
<li>Go To Account</li>
<li>Open Payment</li>
<li>Process Refund</li>
</ul>
<h2>Quickscreen Transactions Tab</h2>
<p>The Quickscreen Transactions Tab shows the status of batch quickscreens in a date range. </p>
<img src="images/careCreditTransactionBatch.png" width="900" height="516"/><p><b>Status</b>: Sort by transaction status. </p>
<p>Right-click a patient to Go To Account. </p>
<p>Highlight a patient, or click <b>All</b> to select all, then click <b>Reprocess</b>. Reprocessing sets the selected patients with a status of ExpiredBatch to Pending, and it reprocesses the transaction during the next batch quickscreen.</p>
<h2>Errors Tab</h2>
<p>The Errors Tab shows errors that occurred during batch quickscreens.</p>
<img src="images/careCreditTransactionErrors.png" width="900" height="516"/><p>Highlight a patient, or click <b>All</b> to select all, then acknowledge the errors. Acknowledging an error removes it from the list, but does not clear it from Open Dental <a href="alerts.html">Alerts</a>.</p>
<p><b>Include Acknowledged</b>: Check to show acknowledged errors.</p>
<p class="MarginBottomZero">Right-click a patient to: </p>
<ul class="MarginBottomGap">
<li>Go to Account</li>
<li>Acknowledge</li>
</ul>
<p>If a Merchant ID is indicated as closed, it is noted in the <i>Merchant Closed</i> column. For more information regarding an error message, contact CareCredit.</p>
</div>
</div>
</body>
</html>```
