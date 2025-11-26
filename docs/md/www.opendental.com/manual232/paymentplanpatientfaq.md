Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Payment Plan Q and A

Below are some questions and answers about [Patient Payment Plans](paymentplanpatient.html).

Information may also apply to [Dynamic Payment Plans](paymentplandynamic.html) and [Insurance Payment Plans](paymentplanins.html) .

## Pay Plan Charge Logic

**How does each Pay Plan Logic Preference function?**

Pay Plan Logic [Preference](preferences.html), determines how charges and credits for Patient Payment Plans and Dynamic Payment Plans show in the patient account ledger and whether they affect balances, aging, and reports. This logic does not apply to Insurance Payment Plans.

Below is information on how each preference functions and screenshots of how Payment Plans will appear in the Patient Account ledger.

**Do Not Age (Legacy)**: Payment plan debits (amounts due) and payments only show within the payment plan and will not affect balance or aging.

* Payment plan debits are totaled in the Payment Plans grid under Due Now.
* Payment plan payments do not show in the ledger but in the payment plan. Double-clicking the plan row is the only way to view payment plan payments.
* One payment plan credit (PayPln) will show as a single line item in the patient account ledger, thus reducing the total account balance by the amount. The credit amount is based on the Tx Completed Amt set in the payment plan.
* Other payment plan credits, debits, and payments do not show in the ledger nor do they affect balances or aging.
* The total A/R in the Aging of A/R report will not include payment plan due amounts.
* Only changes to the Tx Completed Amount affect aging and production and income reports.
* Payment plan amounts are not included on the [Receivables Breakdown Report](reportreceivablesbreakdown.html).

![](images/payPlanAccountDoNotAge.png)

**Age Credits and Debits (Default)**: Payment plan debits, credits, and payments will show as line items in patient account ledger and affect balances and aging.
 When the patient is in the same family as the payment plan guarantor, the behavior is as follows.

* Payment plan amounts due (PayPln: Debit) and credits (PayPln: Credit) show as line items in the patient account ledger.
* Payment plan payments show in the account ledger.
* Payment plan due amounts are included the patient's balance.
* Payment plan amounts due and payments are considered when calculating aging.
* Payment plan credits and debits are included on the Receivables Breakdown report.
* Changes made to historical payment plan charges will affect historical information (e.g. Aging of A/R, Production and Income reports).

![](images/payPlanAccountAgeCreditsDebits.png)

When the patient is in a different family than the payment plan guarantor, the behavior is as follows.

* Payment plan amounts due (PayPln: Debit) show as line items in the guarantor's account ledger.
* Payment plan credits (PayPln: Credit) show as line items in the patient's account ledger.
* Payment plan payments show in the guarantor's account ledger.
* Payment plan due amounts are included in the guarantor's balance.

![](images/payPlanDefaultDiffFamilyGuarantor.png)

**Age Credits Only**: Patients are credited for payment plans when the credit comes due, but debits all exist separately from the account ledger.

* Each payment plan credit line item will show in the account ledger, sorted by Tx Credit date.
* Payment plan amounts due only show in the Payment Plan grid. They do not show in the account ledger.
* Payment plan amounts due will not be considered when calculating balances and aging.
* Payment plan credits and debits will not be included on the Receivables Breakdown report.
* Changes made to historical payment plan credits will affect historical information (e.g. Aging of A/R, Production and Income reports).
* Payments attached to the payment plan will only show in the Payment Plan window; they will not display in the account ledger.

![](images/payPlanAccountCreditsOnly.png)

**No Charges to Account (Rarely Used)**: No Pay Plan Credits or Pay Plan Debit are posted to the account. Patients are not credited for payment plans, so the account balance is aged normally.

* Payment plan amounts due only show in the Payment Plan grid. They do not show in the account ledger.
* Payments to payment plans show in ledger and payment plan.
* Payment plan amounts will not be included on the Receivables Breakdown report.

![](images/payPlanAccountNoCharges.png)

## Changing Pay Plan Charge Logic

**I am considering transitioning to Age Credits and Debits logic. What do I need to know?**

When you first transition, patient account balances will change:

* The account balance for any patient with a patient payment plan will change by the payment plan amount currently due.
* The Family Aging amounts will include patient payment plan charges currently due.
* The total A/R in the [Aging of Accounts Receivable (A/R) Report](reportaging.html) will change.

**How can I see the difference between Do Not Age logic and Age Credits and Debits logic in the Aging of A/R Report amounts?**

1. With Do Not Age selected:
   * Run the Aging of A/R report (Check **Include Negative Balances**).
   * Run the [Payment Plan Report](reportpaymentplan.html). Select Patient as the Payment Plan Type. Uncheck **Hide Completed Payment Plans** and **Limit to Plans Created in Date Range**. The Due Now column will indicate the total payment plan amount due.
2. With Age Credits and Debits selected, run the Aging of A/R report again (Check **Include Negative Balances**).

The Total column from the report in step 1 (traditional) + the Due Now amount from the Payment Plan report will equal the Total column from report in step 2 (Age Credits and Debits).

## Overcharged Payment Plans

**A patient has a payment plan with overcharged production. How do I reduce the production on the plan and re-allocate the patients' overpayment?**

Note: Following the steps outlined below will prevent users from creating future income transfers on the affected accounts using the Income Transfer Manager.

A payment plan may become overcharged if procedures attached to the plan are discounted or if insurance pays more than expected after the payment plan is created. To reduce the payment plan charges, the easiest method is to delete the payment plan and recreate it for the correct procedure balance. However, if payments are attached to the plan, complete the steps below.

In order to correct the payment plan, it must be open and have a remaining balance equal to the total overcharged amount.

1. If the payment plan is closed, double-click into the plan, click **Reopen**, then click **OK** to exit and save.
2. Transfer patient income from each overcharged procedure on the payment plan and allocate it to an outstanding charge or to [Unearned Income](unearnedprepayment.html) (to be allocated later). See [Income Transfer](incometransfer.html).
3. Double-click back into the payment plan and create a pay plan adjustment to remove the overcharged production; click **Add Adjustment**.
4. In the Negative Pay Plan Adjustment window, enter the total overcharged amount and click **OK**. The total adjustment amount will be credited to the payment plan. If the total adjustment exceeds a single pay plan charge, the amount is split between the pay plan charges with a remaining balance.
5. Associate the pay plan adjustment to the procedure credits attached to the payment plan; click **View Tx Credits**.
6. In the Payment Plan Procedures and Credits window, highlight the Adjustment credit (blue line item) and click **Delete**. This will remove the unattached credit created by the pay plan adjustment.
7. Create a new credit attached to each overcharged procedure. Overcharged procedures will have a negative amount in the Rem After column. Highlight the overcharged procedure (yellow line item), verify the amount matches the amount to be credited, and click **Add**. Repeat for each overcharged procedure on the payment plan, then click **OK** to save and exit the Tx Credits window.
8. If the amounts on the payment plan summary all match and there are no future charges remaining, the payment plan may be closed; click **Close**.