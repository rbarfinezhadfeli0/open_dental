Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Insurance Payment (EOB)

Verify claims attached to an insurance payment and view or attach EOBs.

In a [Claim](claimedit.html), double-click an insurance payment to edit.

![](images/claimPaymentEOB.png)

Alternatively, this window opens when clicking **Save** to finalize a payment from the [Edit Insurance Payment](editinspayment.html) window.

## Finalizing Insurance Payments from Account Module

When finalizing insurance payments from a [Claim](claimedit.html) using the **Batch** or **This Claim Only** buttons, the window shown in the screenshot above is displayed. For detailed instructions on finalizing insurance payments from the Account Module, see [Finalize Insurance Payment](claimpayfinalize.html).

**Payment Details**: Displays information entered on [Edit Insurance Payment](editinspayment.html). Click **Edit** to open the window again to change details.

**Attached to this Payment**: Claims currently attached to this payment. When clicking **Batch** from a [Claim](claimedit.html), all received claims not attached to a finalized payment are listed. By default, the list is sorted in the order claims were entered.

* Double-click a claim in the grid to open.
* Right-click a row and select **Go to Account** to open the Account Module for the selected patient.
* #: The order of the payment on the EOB.
* Service Date: Date of Service on the claim.
* Clinic: Clinic assigned to the claim.
* Fee: Total billed fee of the claim.
* Payment: The claim payment amount for this EOB.

**Up # / Down #**: Highlight a claim and click to move in the grid.

**Refresh**: Update the claims in the grid to remove any claims that have been finalized or add any claims received since the window was opened.

**Detach**: Select claim(s) not associated with payment and click to disassociate from the payment.

* Once detached, claims cannot be reattached without deleting the payment and starting over. Alternatively, users can follow find instructions to Correct a Batch Payment on [Batch Insurance Payment](claimpaymentbatch.html) after the payment is finalized.

**Total Payments**: The total of all claim payments associated with the current insurance payment. This should match the *Amount*.

**View ERA**: Click to view associated ERA. Only appears if an ERA is attached. See [EOB Claim Details](claimseraeobdetails.html).

**Scan EOB**: Click to scan or attach a copy of the insurance EOB. If an EOB is already attached, displays **View EOB** instead. Opens [Scan EOB](claimpaymenteobscan.html).

**Delete**: Remove the finalized payment. If an insurance payment is deleted, received claims remain unattached until a new payment is created. Payment splits are not affected.

Click **Save** to finish finalizing an insurance payment or maintain changes.

## Finalizing Insurance Payments from Manage Module

When finalizing a Batch Insurance Payment using the **Batch Ins** button from the Manage Module (see [Batch Insurance Payment](claimpaymentbatch.html) for detailed instructions), the window in the screenshot below is displayed. Description for fields mentioned in the previous section are the same in this window. The following section describes additional fields.

![](images/claimbatchattach.png)

**Attached to this Payment**: Lists any claims that have been attached to the payment.

**Refresh**: Click to update the Attached to this Payment and All Outstanding Claims grids.

* The Attached to this Payment grid is updated to remove any claims that have been finalized or add any claims received since the window was opened.
* The All Outstanding Claims grid is updated to reflect filter changes.

**Attach**: Highlight a claim from the All Oustanding Claims Grid and click to attach to the [Batch Insurance Payment](claimpaymentbatch.html). The claim is moved to the Attached to this Payment grid.

**Detach**: Highlight a claim in the Attached to this Payment grid to remove it from the batch payment.

Filters: Set criteria to limit claims that appear in the All Outstanding Claims Grid

* **Carrier**: Enter the name in the insurance carrier name in the field or click **(...)** to pick from the [Carriers](carriers.html) list. If it's possible a claim is missing, try search for a similar carrier (e.g., if BCBS, search for Blue Cross or similar).
* **Name**: Enter either the patient's first or last name to filter.
* **ClaimID**: Filter the outstanding claims by ClaimID. If known, enter the ClaimID.

**All Outstanding Claims:** All claims, matching filter criteria, with a sent status or unfinalized payment for the insurance carrier. Claims are sorted first by carrier, then by patient.

* Right-click a row and select **Go to Account** to open the Account Module for the selected patient.
* Service Date: Date of Service on the claim.
* Clinic: Clinic assigned to the claim.
* Fee: Total billed fee of the claim.
* Payment: Total payment amount attached to the claim. Includes finalized and unfinalized amounts. Claims that haven't been received have a payment of 0. If a partial payment was finalized previously, this amount may not match the Payment amount once the claim is attached.

Changes are saved when exiting the window.