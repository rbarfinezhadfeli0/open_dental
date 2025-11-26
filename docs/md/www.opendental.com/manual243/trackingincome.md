Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Track Income by Provider

The steps for allocating income to providers using [Production and Income Reports](reportprodinc.html) varies depending on whether the income is an insurance payment or patient payment. See [Production and Income](productionincome.html) for a detailed discussion of the important differences between production and income.

## Insurance Payments

All production entries (procedures and adjustments) have a provider. When you enter a claim payment by procedure using the EOB, the payment amounts are allocated to the provider attached to the procedure. See [Finalize Insurance Payment](claimpayfinalize.html).

## Patient Payments

These can be a little trickier to allocate. You can allocate income when entering a patient [Payment](payment.html), or, if you don't know the correct allocation amounts at payment time, transfer income using [Income Transfer](incometransfer.html) to fine tune amounts when you do.

Hints:

* See [Allocations Setup](allocationssetup.html) to set allocation preferences.
* In Preferences, set the Payment window to automatically open every time you [Receive a Claim](claimreceive.html). Then you can fine tune provider balances using income transfers once you know how insurance has paid a claim.
* For other queries about tracking provider income, see [Query Examples](https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx) and filter results by provider and income.
* To catch providers who have been overpaid, run Query #101.

Version 15.2 to 17.2. The Payment Split Manager can be used at the time of payment to quickly allocate income to providers and attach procedures. Open Dental will suggest payment splits based on payment amount and outstanding charges and automatically attach procedures. You can accept, modify, delete, or add partial splits.

Version 15.1 or earlier: When you click OK, Open Dental will create payment splits by patient to the primary provider. If the amount exceeds the patient's balance, it will ask if you want to apply excess amounts to other family balances. If you click Yes, it will do so. If there are multiple providers who do the work for a single patient (e.g. a primary and hygienist), only the primary provider will receive the income.