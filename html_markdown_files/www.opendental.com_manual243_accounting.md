# File: ./www.opendental.com/manual243/accounting.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Accounting</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('accounting','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/accounting.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/accounting.html" >v24.2</option><option value="https://www.opendental.com/manual241/accounting.html" >v24.1</option><option value="https://www.opendental.com/manual233/accounting.html" >v23.3</option><option value="https://www.opendental.com/manual232/accounting.html" >v23.2</option><option value="https://www.opendental.com/manual231/accounting.html" >v23.1</option><option value="https://www.opendental.com/manual224/accounting.html" >v22.4</option><option value="https://www.opendental.com/manual223/accounting.html" >v22.3</option><option value="https://www.opendental.com/manual222/accounting.html" >v22.2</option><option value="https://www.opendental.com/manual221/accounting.html" >v22.1</option><option value="https://www.opendental.com/manual214/accounting.html" >v21.4</option><option value="https://www.opendental.com/manual213/accounting.html" >v21.3</option><option value="https://www.opendental.com/manual212/accounting.html" >v21.2</option><option value="https://www.opendental.com/manual211/accounting.html" >v21.1</option><option value="https://www.opendental.com/manual205/accounting.html" >v20.5</option><option value="https://www.opendental.com/manual204/accounting.html" >v20.4</option><option value="https://www.opendental.com/manual203/accounting.html" >v20.3</option><option value="https://www.opendental.com/manual202/accounting.html" >v20.2</option><option value="https://www.opendental.com/manual201/accounting.html" >v20.1</option><option value="https://www.opendental.com/manual194/accounting.html" >v19.4</option><option value="https://www.opendental.com/manual193/accounting.html" >v19.3</option><option value="https://www.opendental.com/manual192/accounting.html" >v19.2</option><option value="https://www.opendental.com/manual191/accounting.html" >v19.1</option><option value="https://www.opendental.com/manual184/accounting.html" >v18.4</option><option value="https://www.opendental.com/manual183/accounting.html" >v18.3</option><option value="https://www.opendental.com/manual182/accounting.html" >v18.2</option><option value="https://www.opendental.com/manual181/accounting.html" >v18.1</option><option value="https://www.opendental.com/manual174/accounting.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Accounting</p></div>
<div class="GeneralPageContent">
<p>Open Dental has a built-in accounting tool that can be used independently by small offices.</p>
<p>In the <a href="manage.html">Manage Module</a>, click <b>Accounting</b>. </p>
<img src="images/accounting.png" width="494" height="407"/><p>The Chart of Accounts is a list of the accounts used to organize finances and divide expenses, revenue, assets, liabilities, and equity. When set up correctly, certain transactions in Open Dental automatically create accounting transactions in the Chart of Accounts. </p>
<h2>Menu Items</h2>
<p class="MarginBottomZero"><b>Setup</b>: Set up automated deposit entries and automated payment entries.  </p>
<ul class="MarginBottomGap">
<li>Open Dental: See <a href="accountingsetup.html">Accounting Setup</a></li>
<li>QuickBooks: See <a href="quickbooks.html">QuickBooks</a></li>
<li>QuickBooks Online: See <a href="quickbooksonline.html">QuickBooks Online</a></li>
</ul>
<p><b>Lock</b>: Lock all accounting entries on or before a specific date (e.g., when closing out the year). See <a href="accountingcloseyear.html">Accounting Close Year</a>.</p>
<p><b>Reports</b>: Generate and print end-of-year <a href="accountingreports.html">Accounting Reports</a>.</p>
<h2>Accounting Options</h2>
<p><b>Add</b>: Add a new account.</p>
<p><b>Edit</b>: Select an account, then click to make make changes. See Edit Account below.</p>
<p><b>Export .txt</b>: Save the Chart of Accounts grid as a tab-delimited text file.</p>
<p><b>Export .csv</b> Save the Chart of Accounts grid as a comma-delimited CSV file.</p>
<p><div class="Note">Note: When exporting, change the <i>As of Date</i> to export the Balance totals for the date entered.
</div>
</p>
<p><b>Close</b>: Close the Accounting window.</p>
<h2>Filters &amp; Grid</h2>
<p><b>As of Date</b>: Change to view balances on a different day and click Refresh.</p>
<p><b>Today</b>: Click to refresh the list to show current balances.</p>
<p class="MarginBottomZero"><b>Include Inactive Accounts</b>: Include or exclude accounts marked as inactive. </p>
<ul class="MarginBottomGap">
<li>Check: Shows inactive accounts and their balances as of the date selected.</li>
<li>Uncheck: Hides inactive accounts and their balances. Unchecked by default.</li>
</ul>
<p><b>Chart of Accounts</b>: A list of existing account types and their balance as of today's date.</p>
<p>To add, edit, or view, <a href="transactionhistory.html">Accounting Transactions</a>, double-click an account.</p>
<h2>Edit Account</h2>
<p>To add a new account, click <b>Add</b>. To make changes to an existing account, select the account and click <b>Edit</b>.</p>
<img src="images/accountEdit.png" width="655" height="383"/><p><b>Description</b>: Enter the account name.</p>
<p class="MarginBottomZero"><b>Type</b>: Select the kind of account. There are five types of accounts: </p>
<ul class="MarginBottomGap">
<li>Asset accounts: e.g., practice checking account, equipment, cash box.</li>
<li>Liability accounts: Loans.</li>
<li>Equity accounts: Owner/Practice Contributions/Capital, Retained Earnings, etc. <ul>
<li>Only one account can be marked as <i>Retained Earnings</i>, and the account cannot be deleted. If there are duplicate accounts named "Retained Earnings" they should be marked inactive or deleted.</li>
</ul>
</li>
<li>Income accounts: For accounts receivable (e.g., sources of revenue such as patient or insurance payments)</li>
<li>Expense accounts: For accounts payable (e.g., expenses such as supplies, utility bills, employee benefits, etc.)</li>
</ul>
<p><b>Bank Number</b>: The bank account number to represent this account in the Chart of Accounts grid. Used typically only for <i>Asset</i> account types.</p>
<p><b>Inactive</b>: Mark this account inactive to hide it from the Chart of Accounts grid.</p>
<p><b>Row Color</b>: Set a color to make the row easier to spot in the Chart of Accounts grid. Click on the color box to select a color.</p>
<p><b>Delete</b>: Removes the account. Accounts with transactions cannot be deleted.</p>
<p>Click <b>Save</b> to keep changes.</p>
<h2>Troubleshooting</h2>
<p>For additional troubleshooting, also see <a href="accountingfaq.html">Accounting FAQ</a>.</p>
<p>If accounts for automatic payments are set up incorrectly, transactions may be attached to invalid accounts and errors may occur when trying to view old payments. Follow these steps to identify and fix the transactions.</p>
<ol>
<li><a href="update.html">Update</a> to the latest stable version.</li>
<li>In the <a href="mainmenu.html">Main Menu</a>, click Tools, <a href="databasemaintenance.html">Database Maintenance</a>.</li>
<li>Click <b>Fix</b>.</li>
<li>A message in the log indicates how many transactions have an invalid account: "Transactions found attached to an invalid account: X. All invalid transactions have been attached to the account called UNKNOWN. They need to be fixed manually."</li>
<li>In the Manage Module, click Accounting. A new account called UNKNOWN shows. Double-click on it to view all transactions attached to an invalid account.</li>
<li>For each transaction correct the account.  <ol>
<li>Double-click on the transaction.</li>
<li>Uncheck <i>Simple</i>.</li>
<li>In the Splits area, double-click on the Unknown account.</li>
<li>Click <b>Change</b> and select the correct account.</li>
<li>Click <b>Save</b> to keep the changes and close the window.</li>
</ol>
</li>
</ol>
</div>
</div>
</body>
</html>```
