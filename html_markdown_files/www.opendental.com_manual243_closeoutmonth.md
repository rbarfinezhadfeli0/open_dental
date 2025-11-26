# File: ./www.opendental.com/manual243/closeoutmonth.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Close Out Month</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('closeoutmonth','reportprodinc','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/closeoutmonth.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/closeoutmonth.html" >v24.2</option><option value="https://www.opendental.com/manual241/closeoutmonth.html" >v24.1</option><option value="https://www.opendental.com/manual233/closeoutmonth.html" >v23.3</option><option value="https://www.opendental.com/manual232/closeoutmonth.html" >v23.2</option><option value="https://www.opendental.com/manual231/closeoutmonth.html" >v23.1</option><option value="https://www.opendental.com/manual224/closeoutmonth.html" >v22.4</option><option value="https://www.opendental.com/manual223/closeoutmonth.html" >v22.3</option><option value="https://www.opendental.com/manual222/closeoutmonth.html" >v22.2</option><option value="https://www.opendental.com/manual221/closeoutmonth.html" >v22.1</option><option value="https://www.opendental.com/manual214/closeoutmonth.html" >v21.4</option><option value="https://www.opendental.com/manual213/closeoutmonth.html" >v21.3</option><option value="https://www.opendental.com/manual212/closeoutmonth.html" >v21.2</option><option value="https://www.opendental.com/manual211/closeoutmonth.html" >v21.1</option><option value="https://www.opendental.com/manual205/closeoutmonth.html" >v20.5</option><option value="https://www.opendental.com/manual204/closeoutmonth.html" >v20.4</option><option value="https://www.opendental.com/manual203/closeoutmonth.html" >v20.3</option><option value="https://www.opendental.com/manual202/closeoutmonth.html" >v20.2</option><option value="https://www.opendental.com/manual201/closeoutmonth.html" >v20.1</option><option value="https://www.opendental.com/manual194/closeoutmonth.html" >v19.4</option><option value="https://www.opendental.com/manual193/closeoutmonth.html" >v19.3</option><option value="https://www.opendental.com/manual192/closeoutmonth.html" >v19.2</option><option value="https://www.opendental.com/manual191/closeoutmonth.html" >v19.1</option><option value="https://www.opendental.com/manual184/closeoutmonth.html" >v18.4</option><option value="https://www.opendental.com/manual183/closeoutmonth.html" >v18.3</option><option value="https://www.opendental.com/manual182/closeoutmonth.html" >v18.2</option><option value="https://www.opendental.com/manual181/closeoutmonth.html" >v18.1</option><option value="https://www.opendental.com/manual174/closeoutmonth.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Close Out Month</p></div>
<div class="GeneralPageContent">
<p>There's nothing that offices officially have to do to close out a month in Open Dental. All financials roll over when the calendar changes, and so does Open Dental. There is also no close out process at the <a href="newyeartasks.html">New Year</a>.</p>
<p>Below are some tasks offices may wish to do at the end of each month, but they are not necessary.</p>
<b>Run Reports</b><p class="MarginBottomZero">The following reports can be run anytime, but they should be run at least once a month: </p>
<ul class="MarginBottomGap">
<li><a href="reportaging.html">Aging of Accounts Receivable (A/R) Report</a> (although, this can be run as of any date)</li>
<li><a href="reportprodinc.html">Production and Income Reports</a></li>
</ul>
<p class="MarginBottomZero">The following reports should be run frequently (at minimum once a month) to ensure claims are getting created, sent, and paid. These reports are key to keeping insurance revenue coming in. </p>
<ul class="MarginBottomGap">
<li><a href="reportclaimsnotsent.html">Claims Not Sent Report</a>: List of claims that were generated in Open Dental, but not submitted to insurance.</li>
<li><a href="reportoutins.html">Outstanding Insurance Claims Report</a>: Claims that have been submitted to insurance, but have not been paid.</li>
<li><a href="reportprocsnotbilledins.html">Procedures Not Billed to Insurance Report</a>: Procedures that have been completed, but no claim has been created for.</li>
</ul>
<b>Set Security Lock Dates</b><p>Once reports have been run for a month (or another period), setting a global lock date will prevent users from editing previous entries (e.g., procedures, patient payments, insurance payments, and adjustments) or backdating new items. See <a href="securitylockdates.html">Security Lock Dates</a> for additional information and instructions for enabling global lock dates.</p>
<b>Billing</b><p>The <a href="billinglist.html">Billing List</a> should be run at least once a month to generate statements for patients with outstanding balances. </p>
<p>Before running the Billing List, offices may want to run the <a href="financecharges.html">Billing/Finance Charges</a> Tool to post any billing or finance charges to accounts prior to generating statements. The Billing/Finance Charge Tool should be run once a month.</p>
<p>The Billing List is designed to default to exclude patients who have been billed within the last month (See <a href="billing.html">Billing</a><i> Include anyone not billed since</i>). If the default date is not changed, offices can run the Billing List multiple times in the same month (e.g., daily) and the same patient will not get multiple statements.</p>
<b>Recall List</b><p>The <a href="recalllist.html">Recall List</a> should also be run at least once a month. </p>
<p>The Recall List is designed to allow offices to prevent patients from receiving multiple reminders in a short period of time. If a patient has just received a reminder, they can be excluded from the Recall List by default. This allows staff to run the recall list multiple times a month (e.g., daily) without sending multiple reminders to the same patient. See <a href="recallsetup.html">Setup Recall</a><i> Also show in list if # of days since</i> settings for additional information.</p>
</div>
</div>
</body>
</html>```
