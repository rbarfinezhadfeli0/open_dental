Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Accounting Transactions

From the Transaction History, view, add, and edit accounting transactions.

In [Accounting](accounting.html), double-click on an account from the Chart of Accounts.

![](images/transactionHistory.png)

Existing transactions are listed by date. By default, the *Asset*, *Liability*, and *Equity* accounts show the last full calendar year and the current year up to the current date. *Expense* and *Income* accounts default to the current month. To edit a transaction, double-click an item from the grid.

## Toolbar

![](images/accountingTransactionsToolbar.png)

**Add Entry**: Create a new transaction. Opens Edit Transaction window shown below.
**Reconcile**: *Asset* accounts only. [Reconcile](reconcile.html) monthly bank statements.
**Print**: Send the list of transactions to the printer.
**Export**: Save the list of accounting transactions as a text or Excel file. All transactions in the grid are exported.
**Close**: Exit the Transaction History window.

## Filters

Change filter criteria, to update results in the Transaction Grid

![](images/accountingTransactionsFilters.png)

**From/To**: View transactions for a specific date range. Click **[V]** to select dates from a calendar. Click **[V]** again to close the calendar.

**Amt**: Search the Debit and Credit columns for a specific amount. If Amt Max is blank, this searches for the exact amount only. If Amt Max has a value, this becomes the minimum amount in the amount range.

**Amt Max**: Search the Debit and Credit columns up to a maximum amount.

**Find Text:** Search for specific text in the *Chk #* and *Memo* columns.

## Transactions Grid

Click **Refresh** to update the transactions in the grid based on the selected filters. The title of the grid is based on the name and type of account (e.g., *Checking Account (Asset)* or *Supplies (Expense)*).

![](images/accountingTransactionsGrid.png)

* **Date**: Date entered into the Date field of the transaction. This may differ from the *Date/Time Entered* or *Date/Time Edited*.
* **Splits**: Description of any other account(s) transaction is associated with
* **Created by**: The logged-in user that made the accounting transaction.
* **Last Edited by**: The last user logged-in user that made changes to the accounting transaction.
* **Clear**: *X* in the column indicates the entry has been reconciled.

## Edit Transaction

Click **Add Entry** to create a new transaction or double-click an existing transaction to edit. The Edit Transaction window will open.

![](images/transactionEdit.png)

By default, the Simple view of the transaction is shown. Every transaction is split between at least two accounts: the account the amount is deducted from (usually an *Asset* account) and the account the amount is assigned to (often an *Expense* account). To split a transaction between more than two accounts, uncheck **Simple** to see the Complex View described below.

**Date/Time Entered**: The date and time the transaction was added.
**Date/Time Edited**: The date and time the transaction was edited.
**User Entered**: The logged-in user that made the accounting transaction.
**User Edited**: The last logged-in user that made changes to the accounting transaction.
**Date**: The date of the transaction. Transactions will be sorted by this date.
**Amount**: The transaction amount. To deduct an amount from the account, enter a negative value.
**Other Account**: Click **Change** to select the second account.
**Memo**: Optional. Notes to identify this transaction. To enter a different memo for the Other Account, uncheck **Simple**.
**Check Number**: Optional. Enter a value to represent the transaction for reference (e.g., check number, DEP for deposit transactions, AW for automatic withdrawal transactions, etc.)
**Source Documents**: The source of deposit or patient payment. If Automatic Deposit Entries and Automatic Payment Entries are set up, deposits and patient payments will be automatically attached as a source document. Click Detach to remove the source document.

* Deposit: The date and total amount of the attached [Deposit Slip](depositslip.html). Click **Attach** to add an existing deposit to the transaction. Click **Detach** to remove the currently attached deposit from the transaction.
* Payment: [Patient Payments](payment.html) can only be seen and detached from this window.
* Invoice: Click **Attach** to add relevant invoices and documentation to the accounting entry. Click **Detach** to remove the currently attached invoice from the transaction. Click **Open** to view previously attached files. If *Save accounting invoice attachments in database* is enabled in [Preferences](preferences.html), attachments are saved to the database. If the Preference is disabled, attachments are saved to the originating folder.

## Complex View

Use the complex view to split a transaction to more than two accounts (e.g., for credit card payments) or to assign a different memo under each account. Transactions can be split but all debits must equal the sum of all the credits.

![](images/transactionEditComplex.png)

**Reconcile Date**: The date this transaction is attached to a [Reconcile](reconcile.html).
**Add**: Create a split to another account.
**Totals**: Total Debit and Credit amounts split between the accounts. Amounts must be equal.
**Memo Same For All**: Uncheck to enter a different memo for each split.
**Export**: Save the Edit Transaction details to a text or Excel file.

To split a transaction to more than two accounts:

1. Uncheck *Simple*
2. (optional) Uncheck *Memo Same for All* to enter a different memo for each split.
3. Click **Add** to create a new split or double-click an existing split to edit.
   ![](images/transactionJournal.png)
4. Enter the split details and click **Change** to select the splitting account.
5. Click **OK** in the Edit Journal Entry window to save the split.
6. Repeat for each split.