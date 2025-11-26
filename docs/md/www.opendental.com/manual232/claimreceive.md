Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Receive Claim

Individual insurance claims can be received through the Account Module.

In the [Edit Claim](claimedit.html) window, at the upper-right, is an Enter Payment area.

![](images/claimEnterPayment.png)

Click one of the three buttons.

* **As Total**: Enter a total payment amount. See As Total below for details.
* **By Procedure** (recommended): Itemize the payment by procedure. See By Procedure below for details.
* **Supplemental**: Add additional payments to procedures already received. See [Supplemental Insurance Payments](claimpaymentsupplemental.html).

When payments have been entered, paid procedures and the claim will change to a status of *Received*.

When entering payments, it is recommended to include all EOB information, including remarks. This way all information is available in Open Dental and accessible from any computer. When a patient has questions, users can quickly determine what was or was not paid and why.

Also see:

* ![](images/youtubeLogo.png) See our Webinar: [Claim Payments](https://youtu.be/eiMgxXTqkn8)
* [Batch Insurance Payment](claimpaymentbatch.html)
* [Interest on Insurance Payments](insinterest.html)
* [Incorrect Procedures on Claim](claimpaymentincorrectproc.html)
* Claims with No Payment (See below)
* Insurance Pays on Alternate Procedure Codes (See below)

## As Total

Entering payments As Total is available for insurance plans with a type of *Category Percentage,* *Medicaid or Flat Co-pay,*  and *Capitation.*

Entering an As Total payment differs depending on the [Allocations Setup](allocationssetup.html) for *Claim Pay by Total splits automatically*. It is recommended that this setting is enabled when using Line Item Allocation (i.e., Rigorous or Auto-Split) and entering As Total payments.

**When *Claim Pay by Total splits automatically* is enabled:**

1. Click **As Total**.
2. Enter the total amount paid, then click **OK**.
   ![](images/AsTotalAmount.png)
3. The Enter Payment window opens, and Open Dental automatically assigns amounts to each procedure. Amounts can be changed if desired, or simply click **OK** to accept the amounts.
   ![](images/AsTotalSplit.png)
4. The paid amounts show split to each procedure in the Edit Claim window.
   ![](images/AsTotalOnClaim.png)
5. Once complete, continue to [Finalize Insurance Payment](claimpayfinalize.html).

**When *Claim Pay by Total splits automatically* is disabled:**

1. Click **As Total**.
2. The [Edit Claim Procedure](claimprocedure.html) window open.s Enter the full Insurance Paid amount, then click **OK**.
   ![](images/AsTotalNotSplit.png)
3. The total payment is shown as a new line item in the Edit Claim window.
   ![](images/AsTotalOnClaimNotSplit.png)
4. Once complete, continue to [Finalize Insurance Payment](claimpayfinalize.html).

## By Procedure

Entering payments **By Procedure** is available for all insurance plan types except Capitation. It is required for PPO plans to track write-offs.

1. To post payment to all procedures on the claim, click **By Procedure**. Alternatively, highlight specific procedures first.
2. The Enter Payment window opens. Edit insurance payment information as needed, then click OK.
   ![](images/ByProcedureEnterPayment.png)
   * **Fee**: Fee billed to patient.
   * **Billed to Ins**: Fee billed to insurance.
   * **Deduct**: Automatically calculated based on benefit information. Click in the cell to manually edit. To reassign a deductible to a different procedure, highlight the procedure, then click Deductible.
   * **Allowed**: Enter the insurance allowed fee for out-of-network plans. Requires the *Allow Editing Fee Schedule While Receiving Claims* permission. Entered amounts are used to generate [Blue Book](bluebooksetup.html) estimates for out-of-network insurance plans.
     + If Blue Book is enabled fees are saved to the database.
     + If Legacy Blue Book is enabled, fees are automatically added to the Out of Network fee schedule for the insurance plan. Requires the *Fee Schedule Edit* permission.
   * **Ins Pay**: Automatically calculated based on benefit estimates. Click in the cell to edit.
   * **Write-off**: Automatically calculated. Click in the cell to edit or click Write Off in the lower left to create a write-off for all unpaid amounts by procedure (Fee Billed - Ins Pay).
   * **Pat Resp**: Displays patient responsibility for the procedure. Only displays when enabled in [Preferences](preferences.html)
   * **Pay Tracking**: Click in cell to select from a list of options (defined in [Definitions: Claim Payment Tracking](definitionsclaimpaytracking.html)). Useful to track why payments are rejected. Only displays when enabled in Preferences.
   * **Remarks**: Click in the cell to enter remarks for any procedure that has a remark in the EOB.
   * Double-click on Date, Prov, Code, Th, Description, Fee Billed or Status to open the [Claim Procedures ( claimprocs )](claimprocedure.html) and edit information.
3. If not all procedures have been marked received, users receive a warning.
   ![](images/claimProceduresNotReceived.png)
   * Click **Yes** to mark all procedures received, changing the Claim Status to *Received*.
   * Click **No** to leave procedures unreceived. This leaves the claim in a *Sent - Verified* status and it remains on the [Outstanding Insurance Claims Report](reportoutins.html).
4. Payments show associated with their procedures on the Edit Claim window.
   ![](images/ByProcedureOnClaim.png)
5. Once complete, continue to [Finalize Insurance Payment](claimpayfinalize.html).

## Claims with No Payment

If insurance does not pay on a claim, receive the procedure(s) using the As Total or By Procedure steps above. Enter 0 for each procedure. This marks the claim as *Received* so it is no longer considered outstanding.

If the claim is associated with an insurance that the practice does not receive assignment of benefits for (i.e., insurance payment does not go to the practice), enable the preference *Auto receive claims with no assignment of benefits*. When enabled, claims are immediately marked received with $0 payment once they have been marked as sent.

To scan an EOB associated with the zero payment, do one of the following:

* If the preference  *Show claims received after days* is disabled, finalize the payment and add the EOB by creating a [Batch Insurance Payment](claimpaymentbatch.html).
* If the preference  *Show claims received after days* is enabled,
  + and you are within the number of days entered, finalize the payment by clicking *This Claim Only*. Enter 0 for the payment amount, add the EOB, and finalize the payment.
  + and you are outside the number of days entered, create a supplemental payment with an amount of 0. Create the payment by clicking *This Claim Only*. Enter 0 for the payment amount, add the EOB, and finalize the payment.

Note: The preference,  *Show claims received after days*, uses the date of the [Claim Procedures ( claimprocs )](claimprocedure.html) When enabled, payments can only be added if within the number of days entered since the date of the claimproc.

.

## Insurance Pays on Alternate Procedure Codes

If insurance pays on different procedure codes than they were sent (e.g., A BW and Pano was filed, but insurance paid on FMX), simply add the payment to the procedures that was charted. No need to recreate the claims or procedures.

1. Enter the payment by Procedure.
2. Allocate the payment to the procedures that were actually completed. Payment may need to be split differently than shown in the EOB.
3. Add a note in the *Remarks* section.
4. Finalize the payment as normal.

## Preferences to Consider

The following [Preferences](preferences.html) affect users when receiving payment for an insurance claim:

* *Disallow write-offs greater then the adjusted procedure fee*: When enabled, users are prevented from entering write-offs that exceed the adjusted procedure fee. The following warning appears when users enter write-offs that are too high:
  ![](images/claimReceiveExcessWO.png)

+ Users must click **OK** to return to the Enter Payment window and the correct write-off amount before continuing to receive the claim.

* *Initial primary insurance payment and write-off cannot exceed adjusted procedure fee*: When enabled, users are prevented from entering primary insurance payments and write-offs that total higher than the adjusted procedure fee. The following warning appears if payments are entered that exceed the adjusted procedure fee:
  ![](images/claimReceiveOverpay.png)
  + Users must click **OK** to return to the Enter Payment window and correct the payment or write-off amount before continuing to receive the claim.