Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Hidden Splits

The Hidden Splits tab shows a summary of patient payments with an Unearned Type flagged to not show on the account.

In the [Account Module](account.html), select the Hidden Splits tab.

![](images/hiddenSplits.png)

The tab is only available when hidden paysplits exist within the family and turns red when there is a hidden paysplit balance. When all outstanding paysplits have been allocated, the tab turns gray.

The Hidden Splits tab shows a summary of patient [Payments](payment.html) with a [Paysplit Unearned Type](definitionspaysplitunearned.html) flagged as *Do Not Show on Account*. They are typically prepayments to dynamic payment plan charges or treatment planned procedures and attached to one or the other. These [Unearned / Prepayment](unearnedprepayment.html) types are hidden from the Patient Account tab, most reports, and statements, to not affect the patient balance until the treatment is complete or a payment plan charge is due.

To edit or view the original [Paysplit](paysplit.html) details, double-click the line item under Hidden Splits. A [Receipt](receipt.html) also includes the payment details. Run the [Hidden Payment Splits Report](reporthiddensplits.html) to track accounts with these prepayments.

Create additional prepayment types in [Definitions: PaySplit Unearned Types](definitionspaysplitunearned.html) and assign the default treatment plan procedure or dynamic payment plan prepayment type in [Allocations Setup](allocationssetup.html) and [Preferences](preferences.html).

## Treatment Planned Procedure Prepayment

For payments to be allocated to treatment planned procedures, *Allow prepayments to allocate to treatment planned procedures* must be enabled in Allocations Setup. To make a prepayment to a treatment planned procedure, see [Unearned / Prepayment](unearnedprepayment.html), Allocated Prepayment.

Once the procedure is set complete the following happens:

* The prepayment is transferred to the Patient Account and shows on reports as of the transfer date.
* The payment appears as a positive [Income Transfer](incometransfer.html) line item in the Patient Account tab and negative line item in the Hidden Splits tab.
* The procedure description no longer shows on the original prepayment line item under the Hidden Splits tab as the procedure is detached when transferred.

The income transfer appears in the Patient Account like the screenshot shown below: ![](images/hiddenSplitsComplete.png)

In the event a treatment planned procedure is detached from the payment or the automatic transfer is deleted, use the [Income Transfer Manager](incometransfermanager.html) to transfer the payment to a completed procedure.

## Payment Plan Prepayment

When a patient overpays a Dynamic Payment Plan charge, and opts to apply the excess to a prepayment, an income transfer is automatically created moving the overpaid amount to a hidden split. The transfer consists of a negative paysplit, subtracting the excess payment from the pay plan charge, and a positive paysplit (also attached to the payment plan) turning the excess into a prepayment that shows in the Hidden Splits tab.

Once the next Dynamic Payment Plan charge becomes due, the prepayment transfers to the new interest charge. If the prepayment is more than the amount of the new interest charge, any excess is transferred to the principal payment plan charge. The transfer appears as a positive income transfer line item in the payment plan and a negative line item in the Hidden Splits tab.

If the payment plan prepayment transfer is deleted, open the original payment that overpaid the plan and click OK on the payment window. There is a prompt to apply the overpayment to the principal balance or as a prepayment. Click No to re-create the prepayment transfer.

If the prepayment is more than the total interest and principal charges, run the Income Transfer Manager to re-allocate it to outstanding charges outside of the payment plan.