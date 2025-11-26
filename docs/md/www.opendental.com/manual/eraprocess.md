Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Process ERA

Process a claim on an ERA from the Verify and Enter Payment window.

In an [ERA](era.html), double-click on a patient in the Claims Paid grid.

![](images/claimERAVerify.png)

If a matching claim is not found, the [ERA 835 Claim Select](claimsERAmatching.html) window opens instead.

From this window, users can verify that payment amounts are accurate in order to manually process claims on an ERA. For full instructions on manually processing ERAs, see [ERA Workflow](era835workflow.html), Manually Processing ERAs

## EOB Claim Adjustments

Any adjustments to the claim payment are listed in the grid with the reason, amount, and any remarks. This section is read-only and for reference when entering payment.

![](images/eraEOBClaimAdjs.png)

## EOB Procedure Breakdown

This grid displays procedures attached to the ERA. This section is read-only and for reference when entering payment.

![](images/eraEnterPayProcBreakdown.png)

Columns

* ProcNum: Unique number assigned to an individual procedure. This is different than the procedure code.
* Code: Procedure code.
* Description: Procedure description.
* Fee Billed: Fee billed to insurance.
* Deduct: Deductible.
* Allowed: Insurance allowed fee (i.e., contracted fee).
* Remarks: Remarks from the ERA.

**EOB Totals**: Totals in each box correspond to the numbers in the column directly above them (i.e., Fee Billed, Deduct, Allowed, or InsPay).

To view additional details about procedures, double-click a row in the EOB Procedure Breakdown grid. The Procedure Paid window opens. See [EOB Claim Details](claimsERAeobdetails.html): EOB Procedure Breakdown for more details.

## Enter Payments

Verify and adjust payment information in the Enter Payments grid.

![](images/eraEnterPayments.png)

**Include Write-offs for Category Percentage and Medicaid/Flat CoPay plans**: Determine if write-off amounts are transferred from the ERA when dealing with Category Percentage or Medicaid/Flat CoPay Plan Types.

* Checked: Write-off amounts from the ERA are automatically be filled in from the ERA. Write-off amounts can be edited.
* Unchecked: Write-off amounts are zeroed out and cannot be edited.
* The default state of this checkbox is determined by *ERA post write-offs for Category Percentage and Medicaid/Flat Copay* in [Preferences](preferences.html). When enabled, this box is checked by default. When disabled, the box is unchecked by default.

**Split Claims**: Click to split any procedures marked with an *X* in the *Split* column into a new claim.

Note: If a claim attached to the ERA is split, the claim must be detached from the ERA in order to properly finalize payment. For detailed instructions, follow the Detaching a Claim steps on [ERA Workflow](era835workflow.html).

Enter Payments Grid Columns:

* Split: Click this column to mark a procedure to be split into a new claim. Click Split Claims once procedures have been marked to be split.
* Date: Procedure date.
* Prov: Procedure treating provider.
* Code: Procedure code.
* Tth: Tooth number.
* Description: Procedure description.
* Fee Billed: Fee billed to insurance.
* Deduct: Deductible amount applied to procedure.
* Allowed: Procedure allowed amount.
* InsPay: Insurance payment amount.
* Writeoff: Write-off amount.
* Status: Claim Procedure status.
* Pmt: X indicates a finalized payment is attached to the line item.
* Pay Tracking: Claim Payment Tracking status. See [Definitions: Claim Payment Tracking](definitionsclaimpaytracking.html)
* Remarks: Remarks from EOB.

**Total Payments Row**: This row appears when insurance sends back a code or dollar amount that does not match the original claim. It can be left as-is or can be manually applied to the appropriate claim items. If the payment is applied to claim line items, the *InsPay* field of the Total Payment line must be zeroed out.

![](images/eraDetailsTotalPayment.png)

**Deductible**: Click to assign the deductible to the selected line item.

**Write Off**: Click to write off unpaid amounts on all procedures.

Note: For in-network plans, if the insurance paid or deductible amounts are changed, manually change the write-off. If billing out-of-network plans, users may need to manually remove write-off amounts.

**EOB Claim Details**: Open [EOB Claim Details](claimsERAeobdetails.html).

**Save**: Close the window. Saves payment information and marks the claim and all line items received.

## Processing ERA Claim Payment

1. Distribute any Total Payment line items to individual procedures as needed.
2. Verify payment information between the EOB Procedure Breakdown and Enter Payments.

* Ensure the EOB Totals and Payment Totals match

3. Assign the deductible as needed.
4. Correct any write-offs as needed.
5. Click OK to mark the claim and all line items Received.
6. Once all claims on the ERA have been marked received, finalize payment. See [ERA](era.html): Finalize Payment.

**Secondary Claims**: If there are any secondary claims, a new window is opened listing the claims. See [Secondary Insurance](inssecondary.html).

**Supplemental Payments**: Supplemental payments, claim corrections, and claim reversals can be done by processing an ERA as normal.

**Preauths**: [Preauthorizations](preauth.html) can be received by processing an ERA as normal, and the estimates are updated.