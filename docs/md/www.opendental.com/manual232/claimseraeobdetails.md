Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EOB Claim Details

View details for a claim associated with an ERA.

In an [ERA](era.html), click **EOB Claim Details**.

![](images/claimERAClaimDetails.png)

Alternatively, double-click on an unreceived claim from the ERA and click **EOB Claim Details** in the *Verify and Enter Payment* window.

## Claim Information

Claim information, including patient, subscriber, insurance payment total, etc., is listed at the top of the window.

![](images/eraEOBSubscriber.png)

## Balancing

This section displays the calcuation for the Ins Paid amount shown at the top of the EOB.

![](images/eraEOBClaimBalancing.png)

* Claim Fee: Total amount of fees on the claim.
* Claim AdjAmt Sum: Total amount of Claim Adjustments. These are itemized in the EOB Claim Adjustments section.
* Proc AdjAmt Sum: Total amount of procedure adjustment (e.g., write-offs).
* Ins Paid Calc: Insurance paid calculation (Claim Fee - Claim AdjAmt Sum - Proc AdjAmt Sum = Ins Paid Calc). This number and *Ins Paid* at the top of the EOB should match.

## EOB Claim Adjutments

If payment amounts were adjusted (e.g., reduced), any amounts are noted in this section along with any appliable reason and remarks. These adjustments are also be counted in the *Claim AdjAmt Sum* in the Balancing calculation above.

![](images/eraEOBAdjustments.png)

Double-click a row to open a simple window used to copy message text.

## EOB Procedure Breakdown

This grid displays procedures attached to the ERA.

![](images/eraEOBProcBreakdown.png)

* ProcNum: Unique number assigned to an individual procedure. This is different than the procedure code.
* ProcCode: Procedure code.
* ProcDescript: Procedure description.
* FeeBilled: Fee billed to insurance.
* InsPaid: Insurance payment for procedure.
* PatPort: Patient portion for procedure (i.e., patient responsibility).
* Deduct: Deductible.
* Writeoff: Insurance write-off.

To view additional details about procedures, double-click a row in the Procedure Breakdown grid. The Procedure Paid window shown below opens.

![](images/claimERAProcPaid.png)

* Click **Print** to print a copy of the procedure information.
* Double-click a row in a grid to open a simple window used to copy text.

## EOB Claim Adjudication Info

Any adjudication information included with the ERA is listed in this section.

![](images/eraEOBAdjudication.png)

Double-click a row ito open a simple window used to copy message text.

## EOB Supplemental Info

Supplemental payment information included with the ERA is listed in this section. This is also where coverage information is listed for [Preauthorizations](preauth.html).

![](images/eraEOBSupplemental.png)

Double-click a row to open a simple window used to copy message text.

## Print

Click **Print** to open a print preview of the remittance information.

![](images/eraEOBPrint.png)

**Print**: Click from the print preview window to open printer dialogue or immediately print depending on [Printer Setup](printersetup.html).