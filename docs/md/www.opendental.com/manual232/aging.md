Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Aging

Aging is the length of time a balance has been outstanding and is useful for billling.

In the upper left of the [Account Module](account.html) is Family Aging.

![](images/agingFamily.png)

Aging is automatically calculated in the Family Aging grid when opening the [Account Module](account.html).

To run aging at a set time each day, the [Open Dental Service](opendentalservice.html) must be installed on the server and an *Automated aging run time* be set in [Preferences](preferences.html) or, for Enterprise users, an *Aging Service Time Due* be set in [Enterprise Setup](enterprisesetup.html).

Aging is also automatically calculated on affected accounts when users:

* Run the [Repeating Charges](repeatingcharges.html) tool, if *Run aging on accounts after posting charges* is checked.
* Run [Billing/Finance Charges](financecharges.html) or [Late Charges](latecharges.html).
* Open an unsent statement from the [Billing](billing.html) List.
* When receiving [Batch Insurance Payment](claimpaymentbatch.html) if *Aging calculated on receipt of batch claim payments* is enabled in [Enterprise Setup](enterprisesetup.html).

Aging is automatically calculated when generating the following reports, but not updated in accounts at that time:

* [Aging of Accounts Receivable (A/R) Report](reportaging.html)
* [Insurance Aging Report](reportinsaging.html)

Additional settings for Aging are found in Preferences and, for Enterprise users, Enterprise Setup, Account tab.

## How Aging is Calculated

By default, all charges within a family are sorted into four aging categories based on the date of the charge:

* 0-30
* 31-60
* 61-90
* over 90

Categories represent the number of days the remaining balance of a charge has been outstanding. Then, the sum of all credits for the entire family history is applied to the oldest category with a remaining balance. If the total credits were not sufficient to cover the total charges, categories will still contain amounts due.

By default, credits are applied to the oldest debts first in order to give the family as much credit as possible. This way, if a family has a balance in the *over 90* category, the practice might be more comfortable moving the guarantor account to precollections.

If the Preference, *Transactions attached to a procedure offset each other before aging*, is enabled, credits (e.g., adjustments, pay plan charges) attached to procedures are applied to the procedure balance instead of the oldest family balance.