Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Unearned / Prepayment

In the [Account Module](account.html), at the upper right, is the family Unearned Income balance.

![](images/unearned.png)

Unearned income is typically a patient prepayment towards future charges or a patient overpayment to be refunded. When a patient payment has a [Payment Split](paysplit.html) (paysplit) with an unearned type attached, it is considered a prepayment or unearned income. Prepayments may be allocated to treatment planned procedures at the time of the payment or left as unallocated, and manually allocated once a charge is completed. See [Allocate Unearned Income](unearnedallocate.html).

## Unallocated Prepayment

Unallocated prepayments are patient payments assigned an unearned income type but not yet allocated to a charge. These are useful for collecting payments in advance for future charges (e.g. adjustments, pay plan charges, repeating charges, etc.) or prepayments to treatment not yet determined. To instead allocate a prepayment to treatment, see *Allocated Prepayment below*.

**To create an unallocated prepayment to the default unearned type**:

1. Click the [Payment](payment.html) button.
2. Enter the payment amount into the popup window.
3. Enter the payment details.
   * If needed, process any [Credit Card Payment](paymentpatientcreditcard.html).
4. Click **Prepay**.

![](images/unearnedPaymentPrepay.png)

The payment window will immediately close. One unallocated paysplit will be created with the *Default unearned type for unallocated paysplits* set in Preferences.

**To create an unallocated prepayment to an alternate unearned type:**

1. Click **Payment**.
2. Enter the payment amount into the popup window.
3. Click **Delete Splits** to delete any auto-generated payment splits.
4. Click **+Add Split**
5. Enter the paysplit details.
   * Enter an *Amount* for the pay split.
   * Select an *Unearned Type* from the dropdown.
   * (Optional) Assign a *Clinic* and *Provider* from the dropdowns.
   ![](images/unearnedPaysplitEdit.png)
6. If multiple prepayment types need to be assigned to the payment, repeat step 5 as needed. Current Payment Splits Total must match the Payment Amount.
![](images/unearnedPaysplitsMatch.png)7. Enter the payment details (e.g., Check #, Note, etc).
   * If needed, process any credit card payment
8. Click **OK** to save the payment.

The payment will show as a credit line item in the Patient Account, affecting the patient's balance. The family's total unallocated amount will show under *Unearned* in the top aging bar. Hover over the total to view a breakdown of the family's unallocated, unearned balance. All unallocated prepayments within the family are summed by unearned income type. No breakdown is displayed if the total unearned balance is zero.

![](images/unearnedprepay.png)

When new charges are due, transfer the prepayment to the charges. See [Allocate Unearned Income](unearnedallocate.html). To transfer unallocated prepayments to repeating charges, check *Use Unearned* in the [Edit Repeat Charge](repeatingcharge.html) window. Run the [Unearned Income Reports](reportunearnedincome.html) to track accounts with prepayments.

Note:

* Payments allocated to unearned types marked *Do Not Show in Account or on Reports* in [Definitions: PaySplit Unearned Types](definitionspaysplitunearned.html) will only show in the Hidden Splits tab. They will not appear as a line item in the Patient Account tab. See: [Hidden Splits](hiddensplits.html).
* The [Income Transfer Manager](incometransfermanager.html) may also create unallocated prepayments when a procedure is overpaid and there are no other outstanding charges due.

## Allocated Prepayment

Allocated prepayments are patient payments assigned to a specific treatment planned procedure. Procedures are assigned the *Default treatment planned procedure unearned type* set in [Allocations Setup](allocationssetup.html). This is generally an unearned income type flagged as *Do Not Show on Account* (i.e. a hidden paysplit). *Allow prepayments to allocate to treatment planned procedures* in Allocations Setup must be enabled to allocate to treatment planned procedures.

**To create an allocated prepayment**:

1. Click  **Payment**.
2. Enter the payment amount into the popup window.
3. Click **Delete Splits** to clear the default payment allocation.
4. Select the **Treat Plan** tab
5. Highlight the treatment planned procedures (TP) to allocate the payment.
6. Click **Pay**.
![](images/unearnedTreatmentPlanPrepay.png)7. If needed, process any [Credit Card Payment](paymentpatientcreditcard.html).
8. Click **OK** on the payment window.

Hidden paysplits will be created for each TP procedure selected and assigned the *Default treatment planned procedure unearned type* set in Allocations Setup.

Note: An allocated prepayment may also be created when a dynamic payment plan charge is overpaid. See [Dynamic Payment Plan](paymentplandynamic.html), Payment and Interest Logic.

When *Do Not Show in Account or on Reports* is enabled for the *Default treatment planned procedure unearned type*, the payment will be hidden from the Patient Account tab and most reports, to not affect the patient balance until the treatment planned procedure is set complete. It is also excluded from the Unearned balance since it is already allocated. A summary of the prepayment can be viewed under the *Hidden Splits* tab. Once the procedure is set complete, the prepayment is transferred to the Patient Account with an automatic income transfer. Run the [Hidden Payment Splits Report](reporthiddensplits.html) to track accounts with these prepayments.

## Negative Unearned

A negative unearned balance indicates that more unearned income than existed was allocated (e.g., unearned income that did not exist was allocated). It is never advisable to create a negative unearned balance. If income was overallocated from an unearned type, it will be noted as a negative when hovering over the unearned balance, even if the total unearned balance is positive.

![](images/unearnedNegative.png)

To correct a negative unearned balance, a manual [Income Transfer](incometransfer.html) will need to be created to offset what was overallocated to a procedure, provider, clinic, or adjustment.

To create the manual income transfer:

1. Click **Payment**.
2. Enter $0 as the payment amount.
3. Check **None (Income Transfer)** as the payment type.
4. Click **Add Split** to create a positive paysplit that offsets income to the family unearned balance.
   1. On the [Edit Payment Split](paysplit.html) window, enter an amount less than or equal to the unearned income amount.
      * Less than, to offset a partial amount.
      * Equal to, to offset the entire amount.
   2. Select the Patient (upper right) to apply the transfer to.
   3. Select the specific *Unearned Type* to transfer income back to.
   4. Click **OK** to save the positive paysplit and go back to the payment window.
5. Click **Add Split** again to create a negative paysplit that removes income from a production item or provider that has income attached.
   1. Enter a negative amount matching the positive paysplit (e.g., if the positive split was $50, enter -50),
   2. Attach the paysplit to a procedure, adjustment, payment plan, or provider (one per paysplit).
      * If a production item is selected, the clinic/provider is inherited from the selected production item.
      * This will remove income from the selected production item or provider.
   3. Click **OK** to save the negative paysplit and go back to the payment window.
![](images/unearnedNegativeCorrectSplits.png)

Repeat steps 4 and 5 as needed to offset any unearned income. When the total paysplits equal $0, click OK on the payment window to complete the transfer. If the amount transferred equaled the full negative unearned balance, there should no longer be a negative unearned balance. Any provider or clinic included in the transfer will show negative income splits on reports for the day. Once negative unearned is corrected, users may want to run the incometransfermanager to correct any other unallocated payments, overpayments, or unearned income.

Note: Negative unearned balances may also occur when creating refunds if paysplits are not created on the refund properly. See [Refund](refunds.html) for information on creating refunds.