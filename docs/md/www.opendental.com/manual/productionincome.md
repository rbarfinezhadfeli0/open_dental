Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Production and Income

See [Production and Income Reports](reportprodinc.html).

Below is a definition of terms used when discussing production and income, as well as a discussion about compensating providers by production vs income.

## Definition of Terms

**Production:** The amount of money the practice expects to collect. Production is often described in terms of production for all (or a group of) patients in a date range (or on a certain date). Gross production is the sum of the fees charged to the patient(s). It is a good number to compare how busy the practice is in different periods. Net production is gross production, plus adjustments, minus insurance write-offs.

**Write-offs:** The difference between the insurance fee the provider is contractually obliged to charge and the provider's UCR fees.

**Adjustments:** Reductions in charges to patients. Open Dental splits adjustments into positive adjustments and negative adjustments for data entry purposes, but they are reported together or by type. For example, a positive adjustment type might be 'missed appointment' or 'late charge'. A negative adjustment might be 'senior discount'.

**Income:** The amount of money brought in or paid on accounts (e.g., collections), usually described in terms of a date range.

**Production or Income?** Sometimes there is confusion about whether a particular entry is production or income. Examples:

* Patient refund: Both a negative adjustment (production) or a negative payment (income) would reduce the account balance. However, because money is entering or leaving the office, it should be entered as a negative payment so it shows as income in reports.
* Warranty credit: A patient comes into the office and a veneer that was applied last week has come off.
  1. The office wants to show the production of putting the veneer back on, so a user enters the procedure like normal (chart the procedure, mark it complete). However, the office is not going to collect the fee (no money exchanges hands) and does not want the production to show in Net Production for the day.
  2. Thus, add a negative adjustment equal in amount to the procedure fee. The gross production for the day will include the work for the veneer, but the net production will take into account the adjustment, thus making the net production for that patient zero.

## Reports

There are several [Production and Income Reports](reportprodinc.html) (daily, monthly, annual, provider). Each summarizes the data differently but is comprised of the same information.

If there are insurance plans that use the PPO percentage plan type, and the office tracks write-offs, there are three options that affect when write-offs in reports are applied to production. See [Show Insurance Write-offs](writeoffstoproduction.html) for guidance and examples.

## Paying Providers Based on Production

Some offices compensate providers by paying them a percentage of production. To determine provider production, run the Production and Income Report for a date range, using the *Provider* report type or by selecting only a single provider.

**If the office does not use PPO insurance plans**: The Tot Prod amount indicates the net production and accounts for adjustments. Set a Global Lock Date so that financial report data doesn't change over time. See [Security Lock Dates](securitylockdates.html). The practice should not be utilizing write-offs, so the write-off preference should not affect reports.

**If the office has PPO insurance plans**: Determine how the practice would like to calculate write-offs. There are three options. See [Show Insurance Write-offs](writeoffstoproduction.html) for information on each option and how it functions. .

## Paying Providers by Income / Collection

Provider income or collections can be viewed on the same Production and Income Report used to view production. There are two types of income: insurance income (Ins Income) and patient income (Pt Income). Together they equal the total income (Tot Income).

There are two issues to be aware of when tracking income:

1. Payments need to be properly allocated. For more details, see [Track Income by Provider](trackingincome.html).
2. Income may be received after the period in which it was earned.

Insurance Income: Insurance income is allocated when a user receives the claim payment.

* If a user receives the claim by procedure, the income for each procedure is allocated to the [Claimproc](claimprocedure.html) provider. This is normally the treating provider.
* If a user receives the claim by total, the total payment will default to the patient's primary provider but can be changed. This is not recommended. If receiving claim payments As Total, enable the [Allocation Preference](allocationssetup.html) *Claim Pay by Total splits automatically* to ensure payments are allocated to procedures. This will ensure payment goes to the claimproc provider, rather than the patient's primary provider.

**Patient Income:** Patient income can be allocated when entering the payment or at a later date using income transfers. Depending on Allocation Setup, Open Dental may suggest paysplits based on the family's outstanding charges, payment amount, and FIFO logic (first in, first out, by date). It is very important to know which provider should and is getting credit for a payment. The practice should also develop a policy for allocating payment to multiple providers. The daily or weekly [Daily Payments Report](reportdailypayments.html) (run by provider) can be a useful report to give to providers so they can verify the income information.

**Adjustments to income:** Adjustments themselves only affect production amounts, not income. If income needs to be adjusted, enter a payment or an income transfer. Below are some example scenarios.

* Returned patient check: Enter a negative payment to increase account balance. See [Refund](refunds.html).
* Customer has work done, does not want to pay for it, and the practice or provider have agreed to credit the fee: Enter a negative adjustment to affect production only. This will decrease the account balance.

**What are the issues with reporting income by provider?**

* Income may not come in at the time of service. The obligation to pay a provider their share of income lasts as long as the oldest balance for that provider. The exception to this is when the provider signs a contract or settlement stating otherwise.
* Patient payments are made before insurance pays and insurance does not pay as expected. If amounts are not the same as anticipated and differ by provider, one provider may end up receiving more payment than they produced. One way to handle this is to [transfer income](incometransfer.html) when insurance payments come in.
* Patient prepays (See: [Unearned / Prepayment](unearnedprepayment.html)).
  + Prepayments can be made unallocated to any procedure or provider. These will show as Unearned income on the account. Once work is complete, use the [Allocate Unearned Tool](unearnedallocate.html) or complete an [Income Transfer](incometransfer.html) to allocate income to completed procedures.
  + Prepayments can also be allocated to treatment planned procedures. These payments appear in the Hidden Splits tab of the Account. When procedures are completed, an income transfer is automatically completed.
  + If using accrual accounting, see [Accrual Basis Accounting](accrual.html).
* Improperly allocated payments may bias toward the default practice provider. This is especially true as the default practice provider is assigned as the default primary provider for new patients. If this is not changed and staff does not verify payment allocation, the default provider is more likely to be allocated payments.

  To mitigate this issue:

  + Train staff to set the correct primary provider.
  - Use a dummy practice provider if patients do not have assigned primary providers.+ Train staff to correctly allocate incoming payment by provider.