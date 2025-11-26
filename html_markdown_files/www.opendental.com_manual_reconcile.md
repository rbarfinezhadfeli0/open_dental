# File: ./www.opendental.com/manual/reconcile.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Reconcile</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reconcile','accounting','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reconcile.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reconcile.html" >v24.2</option><option value="https://www.opendental.com/manual241/reconcile.html" >v24.1</option><option value="https://www.opendental.com/manual233/reconcile.html" >v23.3</option><option value="https://www.opendental.com/manual232/reconcile.html" >v23.2</option><option value="https://www.opendental.com/manual231/reconcile.html" >v23.1</option><option value="https://www.opendental.com/manual224/reconcile.html" >v22.4</option><option value="https://www.opendental.com/manual223/reconcile.html" >v22.3</option><option value="https://www.opendental.com/manual222/reconcile.html" >v22.2</option><option value="https://www.opendental.com/manual221/reconcile.html" >v22.1</option><option value="https://www.opendental.com/manual214/reconcile.html" >v21.4</option><option value="https://www.opendental.com/manual213/reconcile.html" >v21.3</option><option value="https://www.opendental.com/manual212/reconcile.html" >v21.2</option><option value="https://www.opendental.com/manual211/reconcile.html" >v21.1</option><option value="https://www.opendental.com/manual205/reconcile.html" >v20.5</option><option value="https://www.opendental.com/manual204/reconcile.html" >v20.4</option><option value="https://www.opendental.com/manual203/reconcile.html" >v20.3</option><option value="https://www.opendental.com/manual202/reconcile.html" >v20.2</option><option value="https://www.opendental.com/manual201/reconcile.html" >v20.1</option><option value="https://www.opendental.com/manual194/reconcile.html" >v19.4</option><option value="https://www.opendental.com/manual193/reconcile.html" >v19.3</option><option value="https://www.opendental.com/manual192/reconcile.html" >v19.2</option><option value="https://www.opendental.com/manual191/reconcile.html" >v19.1</option><option value="https://www.opendental.com/manual184/reconcile.html" >v18.4</option><option value="https://www.opendental.com/manual183/reconcile.html" >v18.3</option><option value="https://www.opendental.com/manual182/reconcile.html" >v18.2</option><option value="https://www.opendental.com/manual181/reconcile.html" >v18.1</option><option value="https://www.opendental.com/manual174/reconcile.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Reconcile</p></div>
<div class="GeneralPageContent">
<p>Use the reconcile feature to ensure bank records match the accounting entries in the accounting system.</p>
<p>In <a href="accounting.html">Accounting</a>, double-click an asset account. Click <b>Reconcile</b>.</p>
<img src="images/reconciles.gif" width="356" height="308"/><h2>Reconciling</h2>
<p>Once the bank statement is received, double-click on the corresponding asset account from the Chart of Accounts. The Reconciles window will open with a list of previous reconciles. </p>
<p>Click <b>Add</b> to start a new reconcile. The Edit Reconcile window will open and list transactions not yet reconciled. </p>
<img src="images/reconcileEdit.gif" width="597" height="305"/><p><b>Date</b>: Enter the date to match the bank statement date.</p>
<p><b>Locked</b>: Check to prevent users from editing the reconcile entry once the reconcile is complete. The reconcile can only be locked if the <i>Target Change</i> value and the <i>Sum of Transactions</i> match.</p>
<p><b>Starting/Ending Balance</b>: Enter the bank starting and ending balance shown on the statement.</p>
<p><b>Target Change</b>: This value is the difference between the starting and ending balance.</p>
<p><b>Sum of Transactions</b>: The total amount of all reconciled transaction (i.e., those marked with an X). As transactions are reconciled this value will change. The goal is to match the Target Change value and the Sum of Transactions, when this is done the reconcile is complete. </p>
<p><b>Find Amount</b>: Enter an amount from the bank statement to quickly find in the Transactions list. Transactions with the matching amount will highlight yellow.</p>
<p class="MarginBottomZero"><b>Transactions</b>: Compare the listed transactions with the bank statement transactions. For every matching transaction, click in the <b>X</b> column to mark it as reconciled. </p>
<ul class="MarginBottomGap">
<li><b>Chk #</b>: The check number for the corresponding accounting transaction. Typically, a withdrawal transaction (i.e., check payment to a vendor or refund check to a patient). Check payments received from insurance or patients are not entered as individual transactions but summed together as a deposit (DEP). </li>
<li><b>Date</b>: The date the transaction was added to the Accounting system. This date may be slightly different than the date on the bank statement to account for mailing of check payments and deposit turn around times.</li>
<li><b>Deposits</b>: The amount of the transaction if a deposit. If the transaction is not a deposit this field will be blank.</li>
<li><b>Withdrawals</b>: The amount of the transaction if a withdrawal. If the transaction is not a withdrawal this field will be blank.</li>
</ul>
<p>If voided checks are recorded as $0 accounting transactions, both the Deposits and Withdrawals fields will be blank for the given transaction date. Those can either be included on the reconcile or a separate reconcile may be saved just for those blank transactions.</p>
<p><b>Delete</b>: Click to delete the reconcile. </p>
<p><b>Export</b>: Click to export the transactions list.</p>
<p><b>Print</b>: Click to print the transactions list.</p>
<p><b></b></p>
<p>Click <b>OK</b> to save and exit the reconcile. Only transactions with an X will be saved in each reconcile. These transactions will also be marked with an X in the clear column of the <a href="transactionhistory.html">Transaction History</a> window.</p>
<p><b>Cancel</b>: Click to close the Edit Reconcile window without saving changes.</p>
<h2>Edit a Reconcile</h2>
<p>To edit a locked reconcile, double-click into the reconcile and uncheck Locked. Make the needed changes, then lock the reconcile before clicking <b>OK</b> to save.</p>
</div>
</div>
</body>
</html>```
