Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

TSI Sent Accounts

Once an account has been sent to TSI for billing and collection management, it is listed in the Sent Accounts tab.

In [TSI Collections](tsicollections.html), click the **Sent Accounts** tab.

![](images/tsiARmgrSent.png)

Note: Accounts listed here are determined by a [Billing Type](definitionsbillingtypes.html) marked with C (for collections). If you have modified an existing billing type to add a C, or have manually changed the billing type on accounts outside of the TSI interface, guarantors who have not yet been sent to TSI may be listed.
 For this reason we recommend only using a single billing type marked C, and only changing the billing status of accounts being sent to TSI from the Unsent Accounts tab.

**Clinics**: Only available when clinics is turned on. Defaults to the clinic selected in the main menu. Click to change clinics.

**Account Filters**: To save criteria as the default for the next time you run the report, click **Save as Default**.

* **Providers**: Filter by provider (which provider?). Click the dropdown to change.
* **Last Trans Type**: Filter by the type of transaction that last occurred. Options include:
  + Cancel: Debt collection activity for this account has been cancelled.
  + Credit Adjustment
  + Debit Adjustment:
  + Paid in Full: Account has been paid in full.
  + Placement: Account was recently sent to TSI to begin debt collection.
  + Partial Payment: Guarantor made a partial payment but a balance remains.
  + Paid in Full, Thank You: guarantor paid the total overdue balance and a thank you letter was sent.
  + Reinstate:
  + Suspend: Debt collection activity for this acount has been suspended.
  + None: no filter based on last transaction.
* **Account Age**: Filter by account age.
* **Minimum Balance**: Only show guarantors who have a balance over a specific amount (e.g. only show accounts with a balance over $25).
* **Days Since Last Payment**: Only include guarantors who have not made a payment in a specific amount of days (e.g. only show guarantors who have not made a payment in the last 90 days).
* **Show PatNums**: Show patient numbers next to guarantor's name. Defaults to the setting in [Report Setup: Misc Settings](reportmiscsettings.html) for *Show PatNum*.

**Guarantors - Sent to TSI**: Add or remove columns in [Display Fields](displayfields.html), *A/R Manager Sent Grid.*

**Export**: Click to export the grid to Excel.

**Print:** Click to print the grid.

## Suspend TSI Billing and Collection Activity

1. Under Account Status Updates, click the *New Status* dropdown, then select Suspend.
2. Click the Billing Type dropdown and select the billing type to assign to the suspended accounts.
3. Click **Update TSI** to send the information to TSI.

Note: If the patient is sent back to TSI within 50 days of their suspension date, their account is reinstated. If sent after 50 days, it is sent as a new account to TSI.

The guarantor is removed from the Sent Accounts tab. The suspended date and time is listed on the Unsent tab under DateTime Suspended.

![](images/tsiSuspended.png)

## Reinstate a Suspended Account

1. On the Accounts Receivables Manager, *Unsent Accounts* tab, locate and highlight the suspended account(s).
2. Click **Send to TSI**.

The guarantor is moved to the Sent Accounts tab and the reinstate date and time is listed under Last Transaction.

![](images/tsiReinstated.png)

## Cancel TSI Billing and Collection Activity

1. On the Accounts Receivables Manager, *Sent Accounts* tab, select the Guarantor(s).
2. Under Account Status Updates, click the *New Status* dropdown, then select Cancel.
3. Click the Billing Type dropdown and select the billing type to assign to the cancelled accounts.
4. Click **Update TSI** to send the information to TSI.

The guarantor is removed from the Sent Accounts tab.

## Payment Plans

If a Payment Plan is created for a patient whose guarantor has been sent to TSI, a warning displays that a message will be sent to suspend the account with TSI. If the user chooses to continue, the TSI account is set to Suspended. After 50 days, the TSI account is automatically cancelled.

If the office decides to send the patient back to TSI for collections, the payment plan **must be deleted** before reinstating the account with TSI.