Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Payment Plan Recalculate

If a patient makes a payment to an Old Payment Plan that is intended as an early payment (before the payment plan amount is due) or a payment to principal, future payments and interest can be recalculated.

In an [Old Payment Plan](paymentplanpatient.html), under Terms, click **Recalculate**.

Old Payment Plans, formerly Patient Payment Plans, are a deprecated feature. Additional Old Payment Plans cannot be created. Existing Old Payment Plans can still be edited and payments can be attached to these plans. See [Payment Plan](paymentplandynamic.html) to create new patient repayment plans.

![](images/paymentplanRecalculate.png)

Note: Added adjustments are not be recalculated. Manually edit any payment plan adjustments in the patient account, Amortization Schedule, and in [Payment Plan Procedures and Credits](paymentplantxcredits.html).

Enter the payment. See [Payment to a Payment Plan](paymentplanpayment.html).

In the [Account Module](account.html), double-click the original payment plan. The payment will show as an line item in the amortization schedule.

Under Terms, click **Recalculate**.

Select how payment should be allocated.

* **Prepay**: The amount will be applied to future amounts due (e.g. towards the next due payment).
* **Pay on Principal**: The amount will be subtracted from the total balance, then remaining charges will be recalculated.

To also recalculate interest, check the **Recalculate Interest** box.

Click **OK** to recalculate payments.

Late Payments: Interest can also be recalculated for early or late payments. It does not matter which allocation method the user chooses.

* If the user does recalculate interest, the accrued interest is added to outstanding interest amounts then recalculated.
* If the user does not recalculate interest, the accrued interest is added to the next payment; the outstanding amounts remain the same.

## Example

Patient has a $4500 payment plan that had a $0 balance as of 07/01/2022. Their next payment of $400 is not due until 08/01/2022. On 07/12/22, they made a payment of $500, making the payment plan balance $-500.

![](images/recalcAmortOriginal.png)

If **Prepay** is selected as the *Payment Allocation Method* and interest is also recalculated, the prepayment will be applied to future payments (e.g., payment #7). Any payments that were paid in full, will be noted *Prepaid*.

![](images/recalcAmortPrepay.png)

If **Pay on principal** is selected as the *Payment Allocation Method* and interest is also recalculated, the prepayment will first subtract from the total balance. Then the remaining payments will be recalculated based on the new balance (new balance / remaining payments = new due amounts). This may change the total numbers of payments or last payment date of the payment plan.

![](images/recalcAmortPrincipal.png)

## Troubleshooting

**A patient has not paid their balance for more than one month and I want to recalculate interest.**

When you recalculate, it will only recalculate the interest for the balance at time you recalculate; it will not take into account more than one month.