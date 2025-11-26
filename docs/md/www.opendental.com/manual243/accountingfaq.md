Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Accounting FAQ

Below are answers to frequently asked questions about the [Accounting](accounting.html) feature in the [Manage Module](manage.html).

**What do I need to do to get started?**

1. Set up *Chart of Accounts*: Create at least one asset, expense, and income account. These account types are already available but you can edit, hide, delete, or add new ones.
2. Set up automated deposit entries: Assign deposits to an asset and income account so that when a [Deposit Slip](depositslip.html) is created, an entry is made into both the asset account (e.g., checking account) to balance your bank account and income account to keep track of the income total.
3. Set up automated payment entries: Assign specific payment types that do not use deposit slips (e.g., cash payments, patient refunds) to an asset and income account so when these payment types are created an entry is made into both the asset account and income account.

For detailed instructions, see [Accounting Setup](accountingsetup.html).

**What are *Automatic Payment Entries* for on the Setup Accounting window?**

It is commonly used for cash payments from patients or patient refunds. When you click Add, you will be prompted to select a payment type and add accounts where the cash will be deposited. We recommend using a second asset account such as Cash Box. Also, select an income account so the transactions are included when tracking total income.

Note:

* Cash Box accounts should be treated like checking accounts. All money going in and out must be recorded as a deposit to another account or as an expense. If not automatically added, manually enter the accounting transaction in the Cash Box account.
* A checking account does not make sense as a deposit account since each entry in a checking account is reconciled with a transaction recorded by the bank.

**How are deposits assigned to an account?**

When you create a new deposit, the account that will receive the deposit is listed under Deposit into Account on the Edit Deposit Slip window. The default account is the first one listed for *Automatic Deposit Entries*. You can also manually create a deposit if the income received is not from a patient.

**How do I enter a transaction for a payment (e.g., utility payments, rent)?**

We recommend entering a negative payment from an asset account like a checking account. It is easier to remember that a negative number here deducts from your asset account balance. If you instead enter the payment from an expense account, the payment amount should always be positive since it adds to the expense total.

1. Double-click the account to open it.
2. Click Add.
3. Enter the payment (as a negative number from an asset account, or as a positive number from an expense account).

See [Accounting Transactions](transactionhistory.html).

**How do I account for a patient refund?**

Patient refunds are entered as a negative patient payment. Create a patient refund payment type (see [Definitions: Payment Types](definitionspaymenttypes.html)) and set up Automatic Payment Entries for the refund type. Every time a refund payment is created, an accounting entry will automatically be made into the assigned asset and income account. If no Automatic Payment Entries are created for the payment type, manually create an entry in credit entry in the asset account (e.g., checking account) and split the entry to an income account (e.g., patient income).

**When do I need to create a manual deposit entry (DEP)?**

When you receive income from a non-patient source (e.g., a vendor refund). Manually create a deposit entry in the asset account and split to an account that makes sense for the payment source.