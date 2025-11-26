# File: ./www.opendental.com/manual232/transactionhistory.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Accounting Transactions</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('transactionhistory','accounting','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/transactionhistory.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/transactionhistory.html" >v24.2</option><option value="https://www.opendental.com/manual241/transactionhistory.html" >v24.1</option><option value="https://www.opendental.com/manual233/transactionhistory.html" >v23.3</option><option value="https://www.opendental.com/manual232/transactionhistory.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/transactionhistory.html" >v23.1</option><option value="https://www.opendental.com/manual224/transactionhistory.html" >v22.4</option><option value="https://www.opendental.com/manual223/transactionhistory.html" >v22.3</option><option value="https://www.opendental.com/manual222/transactionhistory.html" >v22.2</option><option value="https://www.opendental.com/manual221/transactionhistory.html" >v22.1</option><option value="https://www.opendental.com/manual214/transactionhistory.html" >v21.4</option><option value="https://www.opendental.com/manual213/transactionhistory.html" >v21.3</option><option value="https://www.opendental.com/manual212/transactionhistory.html" >v21.2</option><option value="https://www.opendental.com/manual211/transactionhistory.html" >v21.1</option><option value="https://www.opendental.com/manual205/transactionhistory.html" >v20.5</option><option value="https://www.opendental.com/manual204/transactionhistory.html" >v20.4</option><option value="https://www.opendental.com/manual203/transactionhistory.html" >v20.3</option><option value="https://www.opendental.com/manual202/transactionhistory.html" >v20.2</option><option value="https://www.opendental.com/manual201/transactionhistory.html" >v20.1</option><option value="https://www.opendental.com/manual194/transactionhistory.html" >v19.4</option><option value="https://www.opendental.com/manual193/transactionhistory.html" >v19.3</option><option value="https://www.opendental.com/manual192/transactionhistory.html" >v19.2</option><option value="https://www.opendental.com/manual191/transactionhistory.html" >v19.1</option><option value="https://www.opendental.com/manual184/transactionhistory.html" >v18.4</option><option value="https://www.opendental.com/manual183/transactionhistory.html" >v18.3</option><option value="https://www.opendental.com/manual182/transactionhistory.html" >v18.2</option><option value="https://www.opendental.com/manual181/transactionhistory.html" >v18.1</option><option value="https://www.opendental.com/manual174/transactionhistory.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Accounting Transactions</p></div>
<div class="GeneralPageContent">
<p>From the Transaction History, view, add, and edit accounting transactions.</p>
<p>In <a href="accounting.html">Accounting</a>, double-click on an account from the Chart of Accounts.</p>
<img src="images/transactionHistory.png" width="915" height="266"/><p>Existing transactions are listed by date. By default, the <i>Asset</i>, <i>Liability</i>, and <i>Equity</i> accounts show the last full calendar year and the current year up to the current date. <i>Expense</i> and <i>Income</i> accounts default to the current month. To edit a transaction, double-click an item from the grid.</p>
<h2>Toolbar</h2>
<img src="images/accountingTransactionsToolbar.png" width="315" height="33"/><p><b>Add Entry</b>: Create a new transaction. Opens Edit Transaction window shown below.<br/><b>Reconcile</b>: <i>Asset</i> accounts only. <a href="reconcile.html">Reconcile</a> monthly bank statements. <br/><b>Print</b>: Send the list of transactions to the printer.<br/><b>Export</b>: Save the list of accounting transactions as a text or Excel file. All transactions in the grid are exported.<br/><b>Close</b>: Exit the Transaction History window.</p>
<h2>Filters</h2>
<p>Change filter criteria, to update results in the Transaction Grid</p>
<img src="images/accountingTransactionsFilters.png" width="872" height="44"/><p><b>From/To</b>: View transactions for a specific date range. Click <b>[V]</b> to select dates from a calendar. Click <b>[V]</b> again to close the calendar.</p>
<p><b>Amt</b>: Search the Debit and Credit columns for a specific amount. If Amt Max is blank, this searches for the exact amount only. If Amt Max has a value, this becomes the minimum amount in the amount range.</p>
<p><b>Amt Max</b>: Search the Debit and Credit columns up to a maximum amount.</p>
<p><b>Find Text:</b> Search for specific text in the <i>Chk #</i> and <i>Memo</i> columns.</p>
<h2>Transactions Grid</h2>
<p> Click <b>Refresh</b> to update the transactions in the grid based on the selected filters. The title of the grid is based on the name and type of account (e.g., <i>Checking Account (Asset)</i> or <i>Supplies (Expense)</i>).</p>
<img src="images/accountingTransactionsGrid.png" width="915" height="206"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Date entered into the Date field of the transaction. This may differ from the <i>Date/Time Entered</i> or <i>Date/Time Edited</i>.</li>
<li><b>Splits</b>: Description of any other account(s) transaction is associated with</li>
<li><b>Created by</b>: The logged-in user that made the accounting transaction.</li>
<li><b>Last Edited by</b>: The last user logged-in user that made changes to the accounting transaction.</li>
<li><b>Clear</b>: <i>X</i> in the column indicates the entry has been reconciled.</li>
</ul>
<h2>Edit Transaction</h2>
<p>Click <b>Add Entry</b> to create a new transaction or double-click an existing transaction to edit. The Edit Transaction window will open. </p>
<img src="images/transactionEdit.png" width="687" height="426"/><p>By default, the Simple view of the transaction is shown. Every transaction is split between at least two accounts: the account the amount is deducted from (usually an <i>Asset</i> account) and the account the amount is assigned to (often an <i>Expense</i> account). To split a transaction between more than two accounts, uncheck <b>Simple</b> to see the Complex View described below.</p>
<p class="MarginBottomZero"><b>Date/Time Entered</b>: The date and time the transaction was added.<br/><b>Date/Time Edited</b>: The date and time the transaction was edited.<br/><b>User Entered</b>: The logged-in user that made the accounting transaction.<br/><b>User Edited</b>: The last user logged-in user that made changes to the accounting transaction.<br/><b>Date</b>: The date of the transaction. Transactions will be sorted by this date.<br/><b>Amount</b>: The transaction amount. To deduct an amount from the account, enter a negative value.<br/><b>Other Account</b>: Click <b>Change</b> to select the second account.<br/><b>Memo</b>: Optional. Notes to identify this transaction. To enter a different memo for the Other Account, uncheck <b>Simple</b>.<br/><b>Check Number</b>: Optional. Enter a value to represent the transaction for reference (e.g., check number, DEP for deposit transactions, AW for automatic withdrawal transactions, etc.)<br/><b>Source Documents</b>: The source of deposit or patient payment. If Automatic Deposit Entries and Automatic Payment Entries are set up, deposits and patient payments will be automatically attached as a source document. Click Detach to remove the source document. </p>
<ul class="MarginBottomGap">
<li>Deposit: The date and total amount of the attached <a href="depositslip.html">Deposit Slip</a>. Click <b>Attach</b> to add an existing deposit to the transaction. Click <b>Detach</b> to remove the currently attached deposit from the transaction.</li>
<li>Payment: <a href="payment.html">Patient Payments</a> can only be seen and detached from this window.</li>
<li>Invoice: Click <b>Attach</b> to add relevant invoices and documentation to the accounting entry. Click <b>Detach</b> to remove the currently attached invoice from the transaction. Click <b>Open</b> to view previously attached files. If <i>Save accounting invoice attachments in database</i> is enabled in <a href="preferences.html">Preferences</a>, attachments are saved to the database. If the Preference is disabled, attachments are saved to the originating folder.</li>
</ul>
<h2>Complex View</h2>
<p>Use the complex view to split a transaction to more than two accounts (e.g., for credit card payments) or to assign a different memo under each account. Transactions can be split but all debits must equal the sum of all the credits.</p>
<img src="images/transactionEditComplex.png" width="687" height="536"/><p><b>Reconcile Date</b>: The date this transaction is attached to a <a href="reconcile.html">Reconcile</a>.<br/><b>Add</b>: Create a split to another account.<br/><b>Totals</b>: Total Debit and Credit amounts split between the accounts. Amounts must be equal.<br/><b>Memo Same For All</b>: Uncheck to enter a different memo for each split.<br/><b>Export</b>: Save the Edit Transaction details to a text or Excel file.</p>
<p class="MarginBottomZero">To split a transaction to more than two accounts: </p>
<ol class="MarginBottomGap">
<li>Uncheck <i>Simple</i><br/></li>
<li>(optional) Uncheck <i>Memo Same for All</i> to enter a different memo for each split.</li>
<li>Click <b>Add</b> to create a new split or double-click an existing split to edit.<br/><img src="images/transactionJournal.png" width="527" height="288" class="ImageInParagraph"/></li>
<li>Enter the split details and click <b>Change</b> to select the splitting account.</li>
<li>Click <b>OK</b> in the Edit Journal Entry window to save the split.</li>
<li>Repeat for each split.</li>
</ol>
</div>
</div>
</body>
</html>```
