Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Payment to a Payment Plan

Payments can be applied directly to Patient Payment Plans and Dynamic Payment Plans charges.

In the [Payment](payment.html) window, payments to payment plans show as a *PayPlanCharge* payment splits.

![](images/paymentPaymentPlan.png)

Typically, patient payments to a [Payment Plan](paymentplanpatient.html) or [Dynamic Payment Plan](paymentplandynamic.html) are entered from the account of the person making the payment. To make a payment:

Depending on the *Pay Plan charge logic* [Preference](preferences.html), users can attach payments to payments plans in a numbers of ways.

If Pay Plan charge logic is set to *Age Credits and Debits*, select the *PayPln: Debit* charge(s) from the account before clicking the **Payment** button. This will ensure that if other outstanding charges exist on the account, Open Dental allocates the payment to the Payment Plan first.

![](images/payPlanDebit.png)

For all other charge logic settings, including *Age Credits and Debits*, payments can be attached to Payment Plans in the following ways:

* Select procedures attached to the Payment Plan before clicking the **Payment** button. Double-click the payment split and check **Attached to Payment Plan**
* Click **Payment** and delete any unwanted auto-created payment splits. Select outstanding charges with type of *PayPlanCharge* from the Outstanding Charges list and click **Pay**. Proceed with entering payment details as normal. See [Patient Payment](payment.html)

![](images/payPlanOutstanding.png)

The payment will show in the payment plan's Amortization Schedule. Double-click the plan to view.

![](images/payplanPaymentAmort.gif)

Note: If a single payment is for multiple pay plan charges, it is split into a line item for each pay plan charge and for the pay plan charge amount.

If the *Pay Plan charge logic* preference is set to *Aged Debits and Credits*, payment plan payments also show in the ledger of the patient with the pay plan or the payment plan guarantor (if the guarantor is not in the same family).

![](images/payplanPaymentLineItem.gif)

**Simple Allocations Setup**

If the Paysplits preference in [Allocations Setup](allocationssetup.html) is set to *Manual*, any patient payment posted to an account with an active payment plan, is automatically attached to the payment plan. If multiple payment plans exist, users will be prompted to select a plan from the Select Payment Plan window.

![](images/payPlanSelect.png)

Select the plan to attach payment and click **OK**. To only view active plans, check **Show Active Only**.

## Patient Payment Plan Prepayments

To prepay or pay extra towards a patient payment plan, click Payment, and enter the payment amount. When the payment window opens:

1. Under the Current Payment Splits, delete any pay splits not associated to the payment plan but keep any prepayment split. If no prepayment split was created, click **Add** to create one.
2. Double-click on the prepayment split
3. Enter the [Paysplit](paysplit.html) details and click **OK**.
   * Enter the prepayment amount.
   * Select the unearned type.
   * Set the clinic and provider to None.
   * Check **Attached to Payment Plan**.
4. Enter the payment details and process the payment.
5. Double-click on the payment plan to recalculate the amortization schedule for the new prepayment. See [Payment Plan Recalculate](paymentplanrecalculate.html)
   1. Click **Recalculate**.
   2. Select **Prepay** or **Pay on Principal**.
   3. Optional: If the payment plan includes interest, check **Recalculate Interest** to recalculate interest as well.
   4. Click **OK**.After a selection is made, a new pay plan charge is added for the prepayment amount.
6. Allocate the prepayment to the new charge; either use the [Income Transfer Manager](incometransfermanager.html) or highlight the charge, click the Payment dropdown and select [Allocate Unearned Income](unearnedallocate.html).

## Dynamic Payment Plan Prepayments

To pay extra towards a Dynamic Payment Plan than what is currently due, overpay the pay plan principal charge. Highlight the pay plan debits due, then click Payment and enter the payment amount. When the payment window opens:

1. Under the Current Payment Splits, delete any pay splits not associated to the payment plan, then double-click the pay plan principal charge.
    If the payment did not auto-split to a pay plan charge, click **Delete Splits**, select the pay plan charges from the Outstanding Charges grid, and click **Pay**. Then, double-click a pay plan charge.
2. On the Edit Payment Split window, enter the extra payment amount and click **OK**. The amount of this pay plan charge should be the current charge amount plus the additional payment amount.
3. Enter the payment details and process the payment.

 Users will be prompted to apply the overpayment to principal or to prepay for the next payment plan charge.
![](images/dynamicPayPlanPrompt.png)4. Select whether to apply the overpayment to principal or create a prepayment on the payment plan.
   * Click **Yes** to apply the overpayment to principal and recalculate future interest charges. A new pay plan charge (PayPln:Debit) is added for the excess amount.

     Note: If there are unpaid pay plan charges, the overpayment is first transferred to the principal charges, ignoring any unpaid interest. A new principal charge is added for the remaining overpaid amount and the payment is transferred to the new charge. It is recommended to create payment splits for all unpaid pay plan charges before overpaying a principal charge.
   * Click **No** to apply the overpayment as a prepayment. An income transfer is automatically created, transferring the overpayment to the default *Dynamic payment plan prepayment type*, set in Preferences. The prepayment is considered a hidden split and does not affect the patient's balance until the next pay plan charge is due. When the next pay plan charge posts, the prepayment is automatically transferred to the interest charge, and any excess is transferred to the principal charge. See [Hidden Splits](hiddensplits.html), Payment Plan Prepayment.

     Note: If the extra payment exceeds the total loan amount, the excess is transferred to unearned income to be allocated later.
   * Click **Cancel** to return to the payment window and manually make changes to the payment.

To prepay towards a dynamic payment plan before a pay plan charge is due, click **Payment** and enter the payment amount. When the payment window opens:

1. Delete the Current Payment Splits, click **Delete Splits**.
2. Create a new pay split, click **Add Split**.
3. Enter the [Paysplit](paysplit.html) details, then click **OK**.
   * Enter the payment amount.
   * Check attached to payment plan.
   * Select the unearned type for Dynamic Payment Plans
   * Set the clinic and provider to *None*.
4. Enter the payment details and process the payment.

The payment is moved to the Hidden Splits tab and when the next pay plan charge is due, the prepayment is automatically transferred to the next pay plan charge.

## Detaching a Payment from a Payment Plan

If a payment was attached to a payment plan by mistake, it can be detached by editing the payment split (paysplit).

To edit the paysplit:

1. From the Payment Plan window, double-click the payment.
2. Double-click the [Paysplit](paysplit.html).
3. Uncheck *Attached to Payment Plan*.
4. Click **OK**.
5. Repeat with any additional paysplits.
6. Click **OK** to save changes to the payment.

If the payment is attached to a procedure that it should not be attached to, consider completing an [Income Transfer](incometransfer.html) to reallocate the payment to the correct procedure.