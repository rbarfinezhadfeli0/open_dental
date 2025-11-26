# File: ./www.opendental.com/manual/manage.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Manage Module</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/manage.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/manage.html" >v24.2</option><option value="https://www.opendental.com/manual241/manage.html" >v24.1</option><option value="https://www.opendental.com/manual233/manage.html" >v23.3</option><option value="https://www.opendental.com/manual232/manage.html" >v23.2</option><option value="https://www.opendental.com/manual231/manage.html" >v23.1</option><option value="https://www.opendental.com/manual224/manage.html" >v22.4</option><option value="https://www.opendental.com/manual223/manage.html" >v22.3</option><option value="https://www.opendental.com/manual222/manage.html" >v22.2</option><option value="https://www.opendental.com/manual221/manage.html" >v22.1</option><option value="https://www.opendental.com/manual214/manage.html" >v21.4</option><option value="https://www.opendental.com/manual213/manage.html" >v21.3</option><option value="https://www.opendental.com/manual212/manage.html" >v21.2</option><option value="https://www.opendental.com/manual211/manage.html" >v21.1</option><option value="https://www.opendental.com/manual205/manage.html" >v20.5</option><option value="https://www.opendental.com/manual204/manage.html" >v20.4</option><option value="https://www.opendental.com/manual203/manage.html" >v20.3</option><option value="https://www.opendental.com/manual202/manage.html" >v20.2</option><option value="https://www.opendental.com/manual201/manage.html" >v20.1</option><option value="https://www.opendental.com/manual194/manage.html" >v19.4</option><option value="https://www.opendental.com/manual193/manage.html" >v19.3</option><option value="https://www.opendental.com/manual192/manage.html" >v19.2</option><option value="https://www.opendental.com/manual191/manage.html" >v19.1</option><option value="https://www.opendental.com/manual184/manage.html" >v18.4</option><option value="https://www.opendental.com/manual183/manage.html" >v18.3</option><option value="https://www.opendental.com/manual182/manage.html" >v18.2</option><option value="https://www.opendental.com/manual181/manage.html" >v18.1</option><option value="https://www.opendental.com/manual174/manage.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Manage Module</p></div>
<div class="GeneralPageContent">
<p>The Manage <a href="modules.html">Module</a> contains miscellaneous management functions that do not apply to any single patient.</p>
<img src="images/manage.png" width="915" height="581"/><p>Also see <a href="../webinars/webinars.html">Webinars</a>.</p>
<h2>Daily Area</h2>
<img src="images/manageDaily.png" width="280" height="189"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Send Claims:</b> Open <a href="claimsend.html">Insurance Claims</a> window to send or print insurance claims waiting to be sent or view Claim History.</li>
<li><b>Batch Ins:</b> Enter <a href="claimpaymentbatch.html">Batch Insurance Payments</a>. </li>
<li><b>Billing:</b> Print or email batch statements and set billing defaults. See <a href="billing.html">Billing</a>.</li>
<li><b>Deposits:</b> Create and manage <a href="depositslip.html">Deposit Slips</a>.</li>
<li><b>Supply Inventory:</b> Open <a href="supplyinventory.html">Supply Inventory</a> to track suppliers, supplies, orders, and equipment.</li>
<li><b>TSI Collections:</b> Open <a href="tsicollections.html">TSI Collections</a>.</li>
<li><b>Tasks:</b> Opens the <a href="tasksarea.html">Tasks Area</a> in a separate window. More than one task list can be open at a time.</li>
<li><b>Backup:</b> Use Open Dental's manual <a href="backuptool.html">Backup Tool</a>.</li>
<li><b>Accounting:</b> Open the <a href="accounting.html">Accounting</a> feature used to set up a chart of accounts and track expenses, income, assets, liabilities and equity.</li>
<li><b>Email Inbox:</b> Open the <a href="emailinbox.html">Email Client</a>.</li>
<li><b>ERAs:</b> Open the <a href="claimsERA835.html">ERAs</a> window to process and manage ERAs.</li>
<li><b>Import Ins Plans:</b> Only visible when <a href="publichealth.html">Public Health</a> is turned on. This is a very specific function for importing 834 files. <a href="importinsplans834.html">Import Ins Plan 834</a>.</li>
</ul>
<h2>Time Clock</h2>
<img src="images/manageTimeClock.png" width="466" height="280"/><p>Employees can use the <a href="timeclock.html">Time Clock</a> to clock in or out of work..</p>
<h2>Messaging</h2>
<img src="images/manageMessaging.png" width="897" height="285"/><p>Send internal text, light, and sound messages to all workstations in the office. See <a href="messaging.html">Messaging</a> for additional details.</p>
</div>
</div>
</body>
</html>```
