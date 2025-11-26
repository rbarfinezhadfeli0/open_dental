Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Procedure - Financial Tab

View insurance estimates, payments, and adjustments attached to a procedure from the Financial tab.

In a [Procedure](procedureedit.html), at the bottom, is the Financial tab.

![](images/procedureInfoFinancial.gif)

**Add Estimate**: Click to add a new insurance estimate. Use this button to add estimates for insurance that may have been added after treatment was set complete or plans not currently in use by the patient. See Insurance Estimates and Payments below.

**Do Not Bill to Ins**: Check when the procedure should not be sent to insurance. If, on the [Procedure Code](procedurecodeedit.html), this procedure is set up as *Do Not Usually Bill to Ins*, the box will be checked by default.

**Add New Adj**: Click to add an [Adjustment](adjustments.html) to a completed procedure. Requires the *Adjustment Create* [Permission](permissions.html) to create adjustments over $0.

**Link Existing Adj**: Click to attach an existing adjustment to a completed procedure. Opens the Adjustment Picker window (see below). Adjustments not attached to a [Paysplit](paysplit.html), procedure, or dynamic payment plan are listed. Select an adjustment and click **OK**.
![](images/procedureEditAdj.png)

**Discount**: Type an amount to create a [TP Procedure Discount](treatmentplandiscounts.html) applied at the treatment plan level. The logged-on user must have the *Adjustment Create* permission to add or edit the discount. When the procedure is set complete, discounts will show as adjustments.

## Insurance Estimates and Payments

Each entry row is a [Claim Procedure](claimprocedure.html). Estimates are usually automatic, based on the [Insurance Plan](insplan.html). If an estimate doesn't look right or is missing, first make sure the [Insurance Plan](insplan.html) is set up correctly.

![](images/procFinancialIns.png)

**Ins Plan**: Insurance Plan associated to the estimate. Lists carrier and subscriber information.

**Pri/Sec**: Notes insurance type. (i.e., Pri, Sec, Med). Blank indicates *Other*.

**Status**: Claim status. *Est* indicates insurance estimates are not yet attached to a claim.

**Copay**: Patient copay. This is different than Est. Patient Portion.

**Deduct**: Deductible amount applied to the procedure.

**Percent**: Insurance coverage percentage.

**Ins Est**: Insurance payment estimate.

**Ins Pay**: For received claims, this is the actual insurance payment.

**Write-off**: For outstanding claim or estimates this is the estimated write-off. For received claims, this is the actual write-off amount.

**Estimate Note** : Shows automatically-generated notes that affect estimates (e.g., annual max, exclusions)

**Remarks**: Remarks from EOB entered on a received claim.

Double-click an insurance estimate row to open the Claim Procedure window. From this window, users can enter manual overrides to the insurance estimate as needed.

Important Notes:

* Each procedure can have only one estimate per insurance plan.
* If a user creates a [Treatment Plan](treatmentplan.html) before entering the insurance plan, fees may need to be updated to affect estimates. See [Fees Update](feesupdate.html).

To manually add an additional estimate (i.e., there is no estimate existing for the insurance):

1. Click **Add Estimate**.
2. If multiple insurances exist for the patient, select the insurance to add the estimate for.
   ![](images/estimateAdd.gif)
   * **Show plans for family which are not in use by the current patient**: Click to show all plans for the patient, even those that are currently dropped.
3. Once insurance has been selected, or if only one insurance exists for the patient, the [Edit Claim Procedure Window](claimprocedure.html) will open.
4. Enter the estimate information and click **OK**.

Adding an estimate to a procedure for an insurance plan that already has an existing estimate will open the existing estimate.

## Patient Payments

Payment splits in [Patient Payments](payment.html) that are attached to this procedure will list in this grid.

![](images/procFinancialPay.png)

**Entry Date**: Payment Date.

**Amount**: Payment split amount.

**Tot Amt**: Total amount of the payment to which the paysplit is attached (e.g., total check amount).

**Note**: Any note on the payment to which the paysplit is attached.

Double-click a payment split from the grid to edit. The [Payment](payment.html) window will open.

The status of *Completed* procedures with attached payment splits cannot be changed unless the total of paysplits attached equals zero (e.g., payment has been refunded or transferred to other procedures).

## Adjustments

Adjustments can be attached to completed procedures only. All adjustments attached to the procedure will be listed in this grid.

![](images/procFinancialAdj.png)

**Entry Date**: Adjustment date.

**Amount**: Adjustment amount.

**Type**: Assigned adjustment type. See [Definitions: Adj Types](definitionsadjtypes.html).

**Note**: Any note on the attached adjustment.

The procedure's clinic and provider must match the clinic and provider of the adjustment. If the provider and clinic do not match, the procedure value will not be updated and the adjustment will be considered a separate charge when a payment is applied.

To edit an adjustment attached to this procedure, double-click the item in the grid. The [Adjustment](adjustments.html) window will open.