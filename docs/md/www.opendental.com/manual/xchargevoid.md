Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

XCharge Void Payment

XCharge payments or returns can be voided if the original transaction was processed in the last 24 hours and has not been deposited.

In the [Payment](payment.html) window, click **XCharge**. Select *Void* from the list of transaction types.

![](images/xchargeVoidWindow.png)

Voiding [XCharge (OpenEdge)](xcharge.html) transactions removes the original transaction from the patient's bank the same day. If the transaction is older or has been deposited, the payment can be returned instead (see [Credit Card Return](paymentreturn.html)). Returns require a few days to process.

To void an XCharge transaction:

1. In the patient's [Account Module](account.html), click **Payment**.

* Alternatively if voiding a payment, right-click the original payment, click **Refund**, and go to Step 6.

2. Enter an amount. It must match the original transaction amount.
   * If voiding a payment, enter a negative amount matching the original transaction (e.g., -50).
   * If voiding a refund, enter a positive amount matching the original transaction (e.g., 50).
3. Click **OK** to open the [Payment](payment.html) window.
4. **Clinics**: If using Clinics, verify the correct clinic is selected.
5. **Current Payment Splits**: Allocate the void's payment split (paysplit) to a production (e.g., procedures or adjustments) or an [Unearned Type](unearnedprepayment.html).
   * If using right-click, Refund, paysplits are added automatically to match the original payment. Verify the paysplits and amount before proceeding.
   * If voiding a transaction that has been allocated: Add a paysplit associated to the original procedure. Check **Show All Charges**, locate the charge for the original procedure, then click **Add Partial**.
     + If voiding a payment, the paysplits should be negative.
     + If voiding a refund, the paysplits should be positive.
   * If voiding a prepayment that hasn't been allocated yet, add a paysplit and assign the unearned type of the original prepayment.
   * If the original transaction was not allocated to a procedure or unearned type, paysplits do not need to be created manually.
   * If no paysplit is added, an unallocated paysplit is created.
6. After verifying the paysplits, click **XCharge** and select *Void* as the transaction type. Click **OK**.
7. Click **Search** to locate the original transaction.

   ![](images/xChargeCardLookup.png)
8. Select the transaction and click **OK** to fill the X-Charge Release window with the original transaction details.
9. Click **Process** or **F12** to complete the void. The payment window automatically closes.
10. The [Credit Card Transaction Details](paymenttransdetails.html) are automatically added to the payment note. Double-click the payment to print or email a receipt.

Note: Payments allocated to procedures for multiple family members post to each patient account.