Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Allocate Unearned Income

In the [Account Module](account.html), select positive adjustments or procedures, click the Payment dropdown and **Allocate Unearned**.

![](images/paymentAllocateUnearned.png)

The family's [Unearned / Prepayment](unearnedprepayment.html) balance will be quickly allocated to the selected items. This method is useful when an account has only one unearned income type to allocate (e.g., prepayment). Use the manual income transfer method below when an account has multiple unearned types that need to be allocated to specific types of charges (e.g., overpayment, copay, etc).

Alternatively, to see a list of outstanding charges to allocate income to, select **Allocate Unearned** from the Payment dropdown without selecting any procedures. The [Select Account Entries](selectprocedure.html) window will open and all completed procedures and unattached, positive adjustments with a patient portion remaining will be listed. Follow the steps below to allocate unearned.

![](images/allocateUnearnedSelectAcct.png)

To allocate unearned:

1. Highlight one or more items to allocate
2. Click **OK**. The Payment window will open.
3. Click **OK** to close the Payment window and complete the allocation.

![](images/allocateUnearnedPayment.png)

After procedures are chosen to allocate to, the [Payment](payment.html) window will open with the following:

* The Payment Type will be checked as *None (Income Transfer)*.
* Payment Splits (Paysplits) for the selected production items and unallocated amount will be auto-created, offsetting each other to equal 0.

Verify the paysplits are accurate before clicking **OK** to complete the income transfer.

Once income is successfully allocated, there will be *Txfr* line items to indicate there was an income transfer in the patient's account.

![](images/unearnedLineItem.png)

To allocate unearned payments to enabled repeating charges, assign an unearned income type to the [Repeating Charge](repeatingcharge.html).

## Multiple Unearned Types

To allocate a specific unearned type, first confirm there is a positive balance for the type; hover over the family, unearned total to see the total balance for each unearned type.

![](images/unearnedTypes.png)

If there is no balance for the unearned type, select one that does have a balance or use **Allocate Unearned** above instead.

Next, create a manual income transfer:

1. Click **Payment**.
2. Enter $0 as the payment amount.
3. Check **None (Income Transfer)** as the *Payment Type*.
4. Click **Add Split** to create a negative paysplit that subtracts income from the family unearned balance.
   1. On the [Paysplit](paysplit.html) window, enter a negative number less than or equal to the unearned amount.
      * Less than, to transfer a partial amount.
      * Equal to, to transfer the entire amount.
   2. Select the Patient (upper right) the original unearned payment was made to.
   3. Select the specific *Unearned Type*, and the *Clinic* and *Provider* of the original payment. A payment must exist for the selected clinic/provider combination to complete a valid transfer.
   4. Click **OK** to save the negative paysplit and go back to the payment window.
5. Click **Add Split** again to create a positive paysplit that adds the income to a production item.
   1. Enter a positive amount equal to the negative split. (e.g., the negative split was -50, enter 50)
   2. Select the Patient to add the income to.
   3. Attach the income to a procedure, adjustment, or payment plan (one per paysplit). The clinic/provider is inherited from the selected production item.
   4. Click **OK** to save the positive split.

Repeat steps 4 and 5 as needed to transfer unearned income to any additional procedures. When the total paysplits equal $0, click **OK** on the payment window to complete the transfer.

![](images/unearnedSplits.png)

## Negative Unearned

If the paysplits being created exceed the available amount of unearned income on the account, a popup warning will display. Click **No** to return to the payment window and correct paysplits.

![](images/negativeUnearnedWarn.png)

The amount of unearned being allocated should not exceed the current unearned balance (e.g., if the Prepayment amount when hovering over Unearned is $300, total negative paysplits in the transfer with an Unearned Type of Prepayment should not exceed $300).

## Allocation Logic

The Allocate Unearned tool will allocate unearned income assigned to a provider that matches the provider of the selected production items first. If there is no unearned income with a matching provider or the income has no provider at all, the oldest unearned income amount is allocated to the selected production items, regardless of the unearned type.

A negative paysplit and a corresponding positive paysplit will be created for each production item selected. The negative paysplit will have the same unearned type as that assigned to the unearned balance. If the unearned balance has multiple unearned types (e.g., multiple payments with an unearned type in addition to prepayment), the negative paysplit will be assigned the default unearned type set in [Preferences](preferences.html).

If the selected production is paid in full, expected to be paid in full (i.e., insurance estimate covers 100% of a procedure), or the family does not have a positive unearned balance, the Payment window will open with no payplits for the selected items.

Unearned will not be transferred to the selected items if there are unattached, negative adjustments on the account. The credit from the adjustments is paying off the production, using first in/first out logic. Either attach the negative adjustments to a procedure, or allocate unearned manually.