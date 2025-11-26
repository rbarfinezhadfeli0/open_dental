Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Supplemental Insurance Payments

In the Edit [Claim](claimedit.html) window, at the upper-right, is a **Supplemental** button.

![](images/claimSupplementalButton.png)

Supplemental claim payments are payments for procedures that have already been marked received. This can include additional payments, or negative amounts (e.g., [Insurance Refunds](insurancerefunds.html)). Like any insurance payment, a user must receive it, then finalize the payment by attaching it to the claim.

## Receiving a Supplemental Payment

If Pending Supplementals were entered, see [Enter Pending Supplemental Insurance Overpayments/Underpayments](claimpendingsupplemental.html), **To Supplemental** instead.

To receive a supplemental payment, follow the steps below:

1. Highlight the procedure line items associated with the supplemental payment.
   * The original procedure line item must be selected when entering a supplemental payment. Do not select a line item with the status of *Supp*.
2. Click **Supplemental**.
3. Enter the payment amount in the *Ins Pay* column.
4. Click **Save**.
5. Proceed to [Finalize Insurance Payment](claimpayfinalize.html).

Once created, supplemental payments are displayed as an additional line item in the grid of procedures with the Status of *Supp*.

![](images/claimSupplementalPay.gif)

## Correcting Write-Offs Using a Supplemental Payment

Supplemental payments can be used to account for adjustments to write-offs already entered, as long as the net write-off is 0 or greater. This is useful when the write-off amount changes and a user does not want to or cannot change the original write-off amount (e.g., doing so would affect historical reports).

Follow the steps below to use a supplemental payment to correct a write-off:

1. Highlight the procedure line items where the supplemental payment applies.
   * Users must select the original procedure line item when entering a supplemental payment. Do not select a line item with the status of Supp.
2. Click **Supplemental** in the upper right corner.
3. Enter the write-off adjustment amount in the *WriteOff* column.
   * If the write-off needs to be increased, enter a positive number.
   * If the write-off needs to be decreased, enter a negative number.
   * If a write-off was entered on another payment line, only the adjustment amount needs to be entered, not the full write-off amount (e.g., if the write-off was originally entered as 40, but should have only been 30, only enter the difference of -10).
4. Click **Save**.

## Automatic Supplemental Payments

Supplemental payments can be automatically created by the [Income Transfer Manager](incometransfermanager.html) if a claim was originally received As Total, rather than By Procedure. The supplemental entries are displayed as Txfr in the Status column of the Edit Claim window but are shown as Supplemental in the Edit Claim Procedure window.

Automatic supplemental claim transfers cannot be edited but may be deleted. If a transfer entry is deleted, all other transfer entries on the claim are deleted as well.

Additionally, if a claim with a supplemental transfer is edited, all the supplemental transfer entries are deleted. This includes editing or deleting a received claim procedure from the [Claim](claimedit.html) Edit window and the [Procedure](procedureedit.html) Info window and entering additional insurance payments to the claim.

Open the Income Transfer Manager and click **Transfer** to re-transfer any remaining unallocated claim payments.