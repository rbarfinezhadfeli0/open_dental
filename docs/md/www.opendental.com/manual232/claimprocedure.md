Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Claim Procedures ( claimprocs )

View and edit details of a procedure attached to an insurance claim or estimate from the Edit Claim Procedure window.

In a [Claim](claimedit.html), double-click on a procedure.

![](images/claimProc.png)

Alternatively, in the [Procedure - Financial Tab](procedurefinancial.html) double-click an estimate.

A claim procedure (claimproc) is used for the following purposes:

* To attach procedures to claims.
* To split insurance payments on claims.
* To record total insurance payments on claims. These payments are not attached to procedures.
* To store insurance estimates before a claim is created.

In a typical situation:

1. While treatment planning, a procedure is created.
2. A claimproc is automatically added to the procedure to keep track of its estimated insurance portion. Change the estimate by changing the claimproc.
3. When the claim for the procedure is created, the claimproc links the procedure to the claim.
4. When viewing the claim detail, all procedure estimates and payments are stored in the claimproc rather than with the procedure. This allows for an unlimited number of claims to be sent for each procedure and users to have very fine control over all estimates and payments for each claim.
5. When receiving a claim, it can be itemized by procedure or entered as a total payment.

Change the information as needed, then click **OK** to save. The logged-on user must have the correct security permission to edit write-offs and write-off estimates.

## Miscellaneous Information

![](images/claimProcMisc.png)

**Ins Plan**: The insurance plan and subscriber. Claimprocs are always associated with one insurance plan whether they are an estimate or attached to a claim.

**Status**: The status of the claim procedure.

* Estimate: Not yet attached to a claim. Claim Info section is not shown. Estimates never affect the patient balance.
* Not Received: Attached to a claim with a status other than *Received*.
* Received: Attached to a claim with a *Received* status. Should also be attached to an insurance payment (finalized).
* PreAuthorization: Attached to a [Preauthorization](preauth.html).
* InsHist: Procedure was created by adding a date to [Insurance History](inshistory.html).
* Supplemental: Indicates an additional payment on the same procedure. Estimates are generally 0. Almost identical to Received.
* For [Capitation ( HMO / DMO ) Insurance Plan](plancapitation.html), the statuses below apply:
  + CapClaim: Since most capitation procedures are not sent to insurance there are always duplicate claimprocs for a procedure (similar to Supplemental). The first claimproc tracks the copay and write-off and is never attached to a claim (status = CapComplete). The second claimproc has status of CapClaim.
  + CapEstimate: Not yet attached to a claim or for a procedure that is treatment planned (TP). When procedure is completed, status can be changed to CapComplete but never to anything else.
  + CapComplete: Only set when procedure is set complete. This stores the copay and write-off amounts. The copay is only there for reference; the write-off affects the balance. Never attached to a claim.
  + (Adjustment: A hidden type set in the upper section of the [Insurance Plan](insplan.html) using a completely different interface.)

**Payment Tracking**: Document information about the payment of the procedure. Useful to track why payment was rejected. Customize options in [Definitions: Claim Payment Tracking](definitionsclaimpaytracking.html).

**Provider**: Provider attached to the claimproc. By default, this is the provider who performed the procedure, but can be different. This provider is assigned to any insurance payment. Click [...] to change. The provider can only be changed when the status is set to *Not Received*. See: [Claimproc Provider](claimprocedureprovider.html).

**Clinic**: Only visible if [Clinics](clinics.html) is turned on. Normally the clinic assigned to the [Procedure](procedureedit.html) (e.g., treating clinic), but it can differ. This does affect some reports.

**Pay Entry Date**: The date the related insurance payment was entered. Used to track account aging. Only displays after an insurance payment has been received.

**Payment Date**: Can be edited until attached to an insurance check. Once attached to an insurance check see [Finalize Insurance Payment](claimpayfinalize.html) to edit payment information.

**Procedure Date**: The date the procedure was performed. Used to track annual benefits used.

**Description**: The procedure code description.

## Claim

![](images/claimProcClaim.png)

**This is an estimate only/This is part of a claim**: Indicates if this claimproc is an estimate or has been attached to claim. If part of a claim, the following information shows:

* **Code Sent to Ins**: The procedure code sent to insurance. Usually it is the same as the actual procedure code, but may be different if using alternate codes (e.g., for Medicaid), medical codes or custom codes with suffixes that get removed before being sent.
* **Fee Billed to Ins**: The amount billed to insurance. Usually it is the same amount billed to the patient, but does not need to be. If *Claims show UCR fee* is checked on the Edit Insurance Plan window, the amount shown is the provider's UCR fee. So the claim may go out with a fee of $105, but the patient is only billed $100.
* **Claim Adj Reason Code**: Read-only. Displays a Claim Adjustment Reason Code if procedure level adjustments from an [ERA](era.html) were applied.
* **Remarks from EOB**: EOB remarks that explain why insurance did not pay as expected on this procedure.

## Fee Information

![](images/claimProcFeeInfo.png)

**Do Not Bill to Insurance**: Only used when the claimproc is an estimate. Indicates that this claimproc will remain an estimate and never be attached to a claim. Estimate information is hidden when this box is checked. This box is greyed out when the procedure is attached to a claim or preauthorization.

**Fee**: The actual fee billed to the patient as entered on the [Procedure](procedureedit.html).

**Fee Schedule**: The fee schedule of the insurance plan listed first in the Family module. If this is a medical procedure code, this fee schedule may not accurately indicate where the fee is pulled from.

## Carrier Allowed Amount

![](images/claimProcCarrierAllowed.png)

**Substitution Code**: The Ins Subst Code entered for the procedure code. Used for situations like posterior composites, where the insurance company downgrades it to the rate of an amalgam.

**PPO Fee Schedule**: The Fee Schedule set for set for PPO Plan Type insurance in the [Edit Insurance Plan](insplan.html) window.

**Allowed Fee Schedule**: The fee schedule set for Carrier Allowed Amounts on the Edit Insurance Plan window.

**Allowed Amt**: Insurance allowed fee (e.g., contracted fee). Frequently, insurance companies do not allow the full fee because they claim it is above UCR for the area. In these cases, enter the allowed fee that should be used for all calculations instead of the *Fee*.

* Changes to the allowed amount can be made for this claim only by entering a fee into the white box.
* If this is a PPO plan, an allowed amount may already be entered. Click **Edit Allowed Amt** to change the amount in the fee schedule.
* When entering [Insurance Payments](claimpayfinalize.html), there is also a column for allowed amounts, and these flow into the out-of-network fee schedule if one is set for the insurance plan (Edit Insurance Plan window, Carrier Allowed Amount).
* Out-of-network fee schedules can be auto-generated using the Blue Book feature.

## Estimate Information

Changing information does not change the patient's balance. To update a patient's estimated balance, click **Recalculate Estimates** in the Edit Claim window after making any changes to procedures attached to a claim.

![](images/claimProcInsEst.png)

**Patient Copay**: For most plan types, based on the insurance plan's *Patient Co-pay Amounts* fee schedule.

* For capitation, this automates calculation of write-off.
* For any other insurance, this amount is subtracted from what insurance will pay.

For Fixed Benefit Plan Types, this Patient Copay is calculated as (Fee or Allowed Amt) - Fixed Benefit Amount. Fixed Benefit Amount is determined from from based *Fixed Benefit* fee schedule assigned to the insurance plan.

**Deductible**: The amount that the patient must pay each year before insurance kicks in. Usually waived on preventive procedures.

**Percentage %**: The percentage that insurance is expected to cover, based on a plan's benefits.

**Paid By Other Ins**: Adds up all amounts paid by insurance plans that are lower in order. For example, it will never contain an amount if this is primary insurance.

**BaseEst**: Base insurance estimate before considering any deductible or maximums (e.g., annual max). Calculated as (Fee or Allowed) - Copay) x (Percentage or Percent Override)

**Insurance Estimate**: This value is the one shown in most places as the estimate. It depends on the order of treatment in the treatment plan. If the claimproc is already attached to a claim, this does not affect the patient balance and the Insurance Estimate under Claim Info should be used instead. Frequency Limitations are not considered in this field. Other limitations and exlusions are. See the *Estimate Note* for additional information on what may be affecting the estimate.

**Write-off Estimate**: Usually only used for PPO plans. This shows as a column in the treatment plan.

**Estimated Patient Portion**: The estimated amount the patient is responsible for after insurance estimate and write-offs (Fee - Insurance Estimate - Write-off).

**Estimate Note**: Contains automatically generated notes about annual max, limitations, exclusions, etc. that may affect the insurance calculations and also display in the Treatment Plan.

Note: Overrides can be entered into the white boxes to the right of select fields. Be aware that manually entering overrides does not fully recalculate insurance coverage. For example: adding a missing coverage percentage does not result in a missing deductible being added. Whenever possible, it is best to correct coverage information here: [Change Insurance Plan Information](insplanedit.html).

## Claim Info

If the claimproc is still an estimate, this section is not be visible. Once attached to a claim, this section can only be edited from within a claim.

![](images/claimProcClaimInfo.png)

**Deductible**: The actual deductible as reported by the insurance company.

**Insurance Estimate**: The official amount estimated to be paid. Affects patient balance. Gets copied from Insurance Estimate when claim is created. After that, it can only be changed manually.

**Insurance Paid**: Once insurance pays, this is the amount actually paid on this procedure. Cannot be edited once the procedure is attached to a check.

**Write-off**: Amount not covered by insurance that office decides not to charge the patient. This is how Capitation is handled as well as assignment of benefits where provider has agreed not to charge above a set amount.

**Estimated Patient Portion**: The estimated amount the patient is responsible for after insurance and write-offs (Fee - Insurance Estimate - Write-off).

## Buttons

![](images/claimProcButtons.png)

**Attached to Insurance Payment Plan**: This box is automatically checked if this claimproc's insurance payment is attached to an Insurance Payment Plan. This box can be checked manually if payment is entered first and an [Insurance Payment Plan](paymentplanins.html) is created after the fact.

**Delete**: Remove the insurance estimate (claimproc) from a procedure.

* If the procedure is attached to a claim, this also removes the procedure from the attached claim.
* Claimprocs with a procedure date for the current (today's) date cannot be deleted. Mark the procedure as *Do Not Bill to Ins* from the [Procedure - Financial Tab](procedurefinancial.html) instead.
* Claimprocs for procedures with a procedure status of *Treatment Planned* cannot be deleted. Mark the procedure as *Do Not Bill to Ins* from the Procedure - Financial tab instead.
* The last claimproc cannot be deleted from a claim. The claim must be deleted instead.

**OK**: Close the window. Changes are saved.

**Cancel**: Close the window. Some changes may not be saved.

## Blue Book

When [Blue Book](bluebooksetup.html) is enabled, the **Blue Book Log** button is visible. Click to see the history of the blue book fee for this procedure code.

![](images/blueBookLog.gif)

The history of the fee is shown. As allowed amounts are entered, or manual fees change, they are logged here.