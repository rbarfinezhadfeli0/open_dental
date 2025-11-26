Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Reconcile

Use the reconcile feature to ensure bank records match the accounting entries in the accounting system.

In [Accounting](accounting.html), double-click an asset account. Click **Reconcile**.

![](images/reconciles.gif)

## Reconciling

Once the bank statement is received, double-click on the corresponding asset account from the Chart of Accounts. The Reconciles window will open with a list of previous reconciles.

Click **Add** to start a new reconcile. The Edit Reconcile window will open and list transactions not yet reconciled.

![](images/reconcileEdit.gif)

**Date**: Enter the date to match the bank statement date.

**Locked**: Check to prevent users from editing the reconcile entry once the reconcile is complete. The reconcile can only be locked if the *Target Change* value and the *Sum of Transactions* match.

**Starting/Ending Balance**: Enter the bank starting and ending balance shown on the statement.

**Target Change**: This value is the difference between the starting and ending balance.

**Sum of Transactions**: The total amount of all reconciled transaction (i.e., those marked with an X). As transactions are reconciled this value will change. The goal is to match the Target Change value and the Sum of Transactions, when this is done the reconcile is complete.

**Find Amount**: Enter an amount from the bank statement to quickly find in the Transactions list. Transactions with the matching amount will highlight yellow.

**Transactions**: Compare the listed transactions with the bank statement transactions. For every matching transaction, click in the **X** column to mark it as reconciled.

* **Chk #**: The check number for the corresponding accounting transaction. Typically, a withdrawal transaction (i.e., check payment to a vendor or refund check to a patient). Check payments received from insurance or patients are not entered as individual transactions but summed together as a deposit (DEP).
* **Date**: The date the transaction was added to the Accounting system. This date may be slightly different than the date on the bank statement to account for mailing of check payments and deposit turn around times.
* **Deposits**: The amount of the transaction if a deposit. If the transaction is not a deposit this field will be blank.
* **Withdrawals**: The amount of the transaction if a withdrawal. If the transaction is not a withdrawal this field will be blank.

If voided checks are recorded as $0 accounting transactions, both the Deposits and Withdrawals fields will be blank for the given transaction date. Those can either be included on the reconcile or a separate reconcile may be saved just for those blank transactions.

**Delete**: Click to delete the reconcile.

**Export**: Click to export the transactions list.

**Print**: Click to print the transactions list.

Click **OK** to save and exit the reconcile. Only transactions with an X will be saved in each reconcile. These transactions will also be marked with an X in the clear column of the [Transaction History](transactionhistory.html) window.

**Cancel**: Click to close the Edit Reconcile window without saving changes.

## Edit a Reconcile

To edit a locked reconcile, double-click into the reconcile and uncheck Locked. Make the needed changes, then lock the reconcile before clicking **OK** to save.