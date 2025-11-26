Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Payment Plan Q and A

Below are some questions and answers about [Payment Plan](paymentplandynamic.html).

Information may apply to [Payment Plan](paymentplandynamic.html), [Insurance Payment Plans](paymentplanins.html), or [Old Payment Plan](paymentplanpatient.html).

## Pay Plan Charge Logic

**How does each Pay Plan Logic Preference function?**

Pay Plan Logic [Preferences](preferences.html), determines how *PayPln: Charge Due* and *PayPln: Production* line items show in the patient account grid for Payment Plans and Old Payment Plans. It also determines whether PayPlan Production and PayPlan Charges Due affect balances, aging, and reports. This logic does not apply to Insurance Payment Plans.

Below is information on how each preference functions and screenshots of how Payment Plans appear in the Patient Account ledger.

**Do Not Age (Legacy)**: Charges Due and payments only show within the payment plan and do not affect balance or aging.

* PayPlan Charges Due are totaled in the Payment Plans grid under Due Now.
* Payment plan payments do not show in the ledger but in the payment plan. Double-clicking the plan row is the only way to view payment plan payments.
* A single line item for PayPln: Production is added to the patient account grid, thus reducing the total account balance by the amount. The amount is based on the Tx Completed Amt set in the payment plan.
* Other payment plan production, Charges Due, and payments do not show in the account grid nor do they affect balances or aging.
* The total A/R in the Aging of A/R report does not include payment plan due amounts.
* Only changes to the Tx Completed Amount affect aging and production and income reports.
* Payment plan amounts are not included on the [Receivables Breakdown Report](reportreceivablesbreakdown.html).

![](images/payPlanAccountDoNotAge.png)

**Age Credits and Debits (Default)**: Charges Due, payment plan production, and payments show as line items in patient account grid and affect balances and aging.
 When the patient is in the same family as the payment plan guarantor, the behavior is as follows.

* Payment plan charges due (PayPln: Charge Due) and production (PayPln: Production) show as line items in the patient account ledger.
* Payment plan payments show in the account ledger.
* Payment plan due amounts are included the patient's balance.
* Payment plan amounts due and payments are considered when calculating aging.
* Payment plan Charges Due and production are included on the Receivables Breakdown report.
* Changes made to historical Pay Plan Charges Due affect historical information (e.g., Aging of A/R, Production and Income reports).

![](images/payPlanAccountAgeCreditsDebits.png)

When the patient is in a different family than the payment plan guarantor, the behavior is as follows.

* Payment plan charges due (PayPln: Charge Due) show as line items in the guarantor's account ledger.
* Payment plan production (PayPln: Production) show as line items in the patient's account ledger.
* Payment plan payments show in the guarantor's account ledger.
* Payment plan due amounts are included in the guarantor's balance.

![](images/payPlanDefaultDiffFamilyGuarantor.png)

**Age Credits Only**: Patients are credited for payment plans when the charge comes due, but Charges Due all exist separately from the account grid.

* Each payment PayPln: Production line item shows in the account grid, sorted by Date Showing or Tx Credit date.
* Payment plan amounts due only show in the Payment Plan grid. They do not show in the account ledger.
* Payment plan amounts due are not considered when calculating balances and aging.
* Payment plan production and Charges Due are not included on the Receivables Breakdown report.
* Changes made to historical payment plan production affect historical information (e.g., Aging of A/R, Production and Income reports).
* Payments attached to the payment plan only show in the Payment Plan window; they do not display in the account ledger.

![](images/payPlanAccountCreditsOnly.png)

**No Charges to Account (Rarely Used)**: PayPln: Production or PayPln:Charges Due line items are posted to the account. Patients are not credited for payment plans, so the account balance is aged normally.

* Payment plan amounts due only show in the Payment Plan grid. They do not show in the account ledger.
* Payments to payment plans show in ledger and payment plan.
* Payment plan amounts are not included on the Receivables Breakdown report.

![](images/payPlanAccountNoCharges.png)

## Changing Pay Plan Charge Logic

**I am considering transitioning to Age Credits and Debits logic. What do I need to know?**

When you first transition, patient account balances change:

* The account balance for any patient with a patient payment plan changes by the payment plan amount currently due.
* The Family Aging amounts include patient payment plan charges currently due.
* The total A/R in the [Aging of Accounts Receivable (A/R) Report](reportaging.html) changes.

**How can I see the difference between Do Not Age logic and Age Credits and Debits logic in the Aging of A/R Report amounts?**

1. With Do Not Age selected:
   * Run the Aging of A/R report (Check **Include Negative Balances**).
   * Run the [Payment Plans Report](reportpaymentplan.html). Select Patient as the Payment Plan Type. Uncheck **Hide Completed Payment Plans** and **Limit to Plans Created in Date Range**. The Due Now column indicates the total payment plan amount due.
2. With Age Credits and Debits selected, run the Aging of A/R report again (Check **Include Negative Balances**).

The Total column from the report in step 1 (traditional) + the Due Now amount from the Payment Plan report equals the Total column from report in step 2 (Age Credits and Debits).

## Overcharged Payment Plans

**A patient has an Old Payment Plan with overcharged production. How do I reduce the production on the plan and re-allocate the patients' overpayment?**

Note: Following the steps outlined below prevent users from creating future income transfers on the affected accounts using the [Income Transfer Manager](incometransfermanager.html).

An Old Payment Plan may become overcharged if procedures attached to the plan are discounted or if insurance pays more than expected after the Old Payment Plan is created. To reduce the payment plan charges, the easiest method is to delete the Old Payment Plan and recreate it for the correct procedure balance. However, if payments are attached to the plan, complete the steps below.

In order to correct the Old Payment Plan, it must be open and have a remaining balance equal to the total overcharged amount.

1. If the Old Payment Plan is closed, double-click into the plan, click **Reopen**, then click **OK** to exit and save.
2. Transfer patient income from each overcharged procedure on the Old Payment Plan and allocate it to an outstanding charge or to [Unearned / Prepayment](unearnedprepayment.html) (to be allocated later). See [Income Transfer](incometransfer.html).
3. Double-click back into the Old Payment Plan and create a pay plan adjustment to remove the overcharged production; click **Add Adjustment**.
4. In the Negative Pay Plan Adjustment window, enter the total overcharged amount and click **OK**. The total adjustment amount is credited to the payment plan. If the total adjustment exceeds a single pay plan charge, the amount is split between the pay plan charges with a remaining balance.
5. Associate the pay plan adjustment to the procedure credits attached to the Old Payment Plan; click **View Tx Credits**.
6. In the Payment Plan Procedures and Credits window, highlight the Adjustment credit (blue line item) and click **Delete**. This removes the unattached credit created by the pay plan adjustment.
7. Create a new credit attached to each overcharged procedure. Overcharged procedures have a negative amount in the Rem After column. Highlight the overcharged procedure (yellow line item), verify the amount matches the amount to be credited, and click **Add**. Repeat for each overcharged procedure on the Old Payment Plan, then click **OK** to save and exit the Tx Credits window.
8. If the amounts on the payment plan summary all match and there are no future charges remaining, the Old Payment Plan may be closed; click **Close**.

**Why do I get a warning that a Payment Plan is overcharged when trying to use the Income Transfer Manager, but the Payment Plan does not appear on the Payment Plans Overcharged Report?**

If production (i.e., procedures and adjustments) attached to a Payment Plan has an Amount Override entered or the Payment Plan has Permanent Lock enabled, it does not show on the [Payment Plans Overcharged Report](reportdynamicpayplanovercharged.html), however if trying to use the [Income Transfer Manager](incometransfermanager.html), there is a warning if production is overcharged.

Payment Plans with an Amount Override entered after all PayPlan Charges have posted for the production, may still appear on the report.

## Pay Plan Charges

**When trying to edit a pay plan charge, I get the message *The phrase 'Down Payment' cannot be used in the notes.***

This text is used to denote the Down Payment amount. The Down Payment charge is automatically created when the Amortization Schedule is created. If no Down Payment amount was entered when the payment plan was created, other charges cannot be designated as the Down Payment. The payment plan must be deleted and recreated instead.

**The dates for pay plan charges have changed, but no user edited the Payment Plan.**

For Payment Plans, the [Open Dental Service](opendentalservice.html) must be installed and running in order for pay plan charges to be posted on charge date. If the Open Dental Service is not running at the *Pay Plan run time* on the charge date, the dates for any charges not already created in the database (i.e., already posted or manually edited) are adjusted. The charge dates are moved one increment depending on the Charge Frequency.

For example, if an unposted charge was scheduled to occur on 10/1/2024 and the Charge Frequency is Monthly, the charge is rescheduled to occur on 11/1/2024. All subsequent charges are also rescheduled to occur one month later.

## Payment Plan Overpayments

**Why do I get a Payment Plan Overpayment Detected warning when trying to attach a payment to a Payment Plan?**

When saving a payment where the total amount of payment splits attached to the Payment Plan exceeds the current Due Now balance, a prompt is shown to determine how the overpayment should be handled.

Click Yes to pay the amount toward principal. Once the payment is saved, a new pay plan charge for the excess amount is created and the Payment Plan Balancer is run automatically to allocate the payment to pay plan charges.

Click No to treat the overpayment as a prepayment. Once the payment is saved, the Payment Plan Balancer is run automatically to allocate the payment. The overpayment amount is allocated to the *Payment plan unearned type* set in Preferences.