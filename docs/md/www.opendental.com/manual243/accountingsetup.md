Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Accounting Setup

Set up accounts for automatic deposit and payment entries when using Open Dental's built-in Accounting tool.

In [Accounting](accounting.html), click Setup, Open Dental.

![](images/accountingSetup.png)

## Automatic Deposit Entries

When a [Deposit Slip](depositslip.html) is created, an entry goes into an *Asset* account (e.g., checking account) to balance a bank account. A second entry is made in an *Income* account to keep track of the income total.

**Automatic Deposit Entries**: Set up accounts where [Deposits](depositslip.html) can be automatically deposited into.

Click **Add**, then double-click an *Asset* account to add a new account to the list. Accounts already added to the Chart of Accounts in [Accounting](accounting.html) are available to choose from.

![](images/accountingSetupPickAccount.png)

Added accounts are options in the *Deposit into Account* dropdown on the Edit Deposit Slip window.

![](images/accountingSetupDeposit.png)

Select an account and click **Remove** to delete it from the list and make it unavailable when creating deposits.

**Income Account**: The *Income* account where deposits are credited to track total income. Click **Change** to open the Pick Account window (shown above) and select a different account.

## Automatic Payment Entries

Some payment types that do not use deposit slips (e.g., cash payments or patient refunds), but still need an accounting entry, can be assigned to an *Asset* and *Income* account to create automatic payment entries. Every time the payment type is used, an entry goes into an *Asset* account (e.g., checking account) to balance the bank account. A second entry is made into an *Income* account to keep track of the income total.

**Automated Payment Entries**: Associate a payment type to an *Asset* account. Click **Add** to open the Edit Auto Pay Entry window and select a payment type from the dropdown menu.

![](images/autopayEntries.png)

Click **Add**, then double-click an *Asset* account from the Pick Account window.

![](images/accountingSetupPickAccount.png)

Account types added to the pick list for a payment type are available in the  *Pay into Account* dropdown on the [Payment](payment.html) window when that payment type is selected.

![](images/accountingCashBox.png)

**Income Account**: The *Income* account where the payment types are credited to track total income. **Income Account**: The *Income* account where deposits are credited to track total income. Click **Change** to open the Pick Account window (shown above) and select a different account.

If accounts for automatic payments are set up incorrectly, transactions may be attached to invalid accounts and users may receive an error when trying to view old payments. Follow the [Accounting](accounting.html) troubleshooting steps to identify and fix the transactions.