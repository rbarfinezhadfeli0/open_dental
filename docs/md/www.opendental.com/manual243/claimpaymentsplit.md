Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Split Claim

In the [Edit Claim](claimedit.html) window, at the upper-right, click **Split Claim**.

![](images/splitClaimButton.png)

Splitting claims may be necessary if insurance only paid on some of the procedures in an Insurance Claim Payment, and the office is still waiting on payment for the other procedures or if some procedures need to be resubmitted, but not the entire claim.

Splitting the claim allows the office to receive payment for procedures that have been paid and leave unpaid procedures outstanding or resubmit them as needed.

## Splitting a Claim

There are some common scenarios an office may need to split a claim.

**Scenario 1**: Insurance rejects one or more procedures on a claim due to missing or incorrect information, but pays the rest of the claim. The rejected procedures need to be resubmitted to insurance.

1. Open the Edit Claim window.
2. Select the rejected procedure(s).
3. Click **Split Claim**.
4. The procedures listed on the open claim should be those that were paid by insurance. The rejected procedures are now on a new claim.
5. Receive the claim with the procedures that have been accepted and paid. See [Receive Claim](claimreceive.html).
6. [Finalize Insurance Payment](claimpayfinalize.html)
7. Once information is updated for the rejected procedures, send the second claim.

**Scenario 2**: Insurance decides to split one procedure from the claim because it will take longer to adjudicate. The EOB or ERA will indicate that the claim has been split. Manually split the procedure from the original claim. Since the procedure has already been submitted to insurance, it does not need to be resent.

1. On the claim, highlight the procedures that are not included in the current payment.
2. Click **Split Claim**.
3. The procedures receiving payment are listed under Procedures. The procedures not included with the payment are in a new claim.
4. Receive the claim, then finalize the payment. .

In both scenarios, in the patient account, there are now two claims: one received with a payment and one outstanding.

Any claim statuses from the original claim are copied to the split claim. See [Edit Claim - Status History Tab](claimtabstatus.html).

When payment is received for the outstanding claim, receive the claim and finalize payment.

## Troubleshooting

**Message: Claim identifier already in use for another claim.**

Split claims have a unique claim identifier. When notification of a split claim is received on an ERA (scenario 2 above) note that the claim identifier for both original and split claim on the ERA is the same, even though the identifiers in Open Dental are different. The difference does not affect matching of ERAs to claims because other criteria is used.