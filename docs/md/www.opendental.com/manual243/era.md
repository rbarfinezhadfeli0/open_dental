Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

ERA

Use this window to process an ERA.

In the [ERAs](claimsera835.html) window, double-click on an ERA.

![](images/claimERA-1.png)

View ERA details, process ERAs, and finalize payment from this window. For instructions on processing ERAs, see [ERA Workflow](era835workflow.html).

## Payer/Payee Information

The top half of the window displays information about the payer (carrier) and payee (office/provider).

![](images/ERAPayerPayee.png)

**Raw Message**: Opens the raw data of the electronic file sent by insurance. This is used for troubleshooting purposes.

* **Copy All**: Click to copy all text of raw message.
* **Print**: Click to print raw message.

## Provider Adjustments

Provider adjustments display if any exist. Double-click a row to open a simple window that can be used to copy text.

![](images/ERAProvAdj.png)

## Claims Paid

All claims in the ERA are listed under Claims Paid. Double-click a claim to manually [Verify and Enter Payment](eraprocess.html). Open Dental attempts to automatically match claims to the ERA, if a match is not found, users may see the [ERA Claim Select](claimseramatching.html) window instead when double-clicking.

![](images/ERAClaimsPaid.png)

Columns:

* Recd: Received status. *X* indicates the claim payment has been processed and claim marked received.
* Patient: Patient associated to the claim.
* DateService: Date of service of the associated claim.
* Claim Identifier: Claim Identifier Number.
* Payor Control#: Payor Control Number.
* Status: Claim type information (e.g., processed as primary).
* ClaimFee: Total claim fee billed.
* InsPaid: Total insurance claim payment.
* PatPort: Total patient portion.
* Deduct: Patient deductible.
* Writeoff: Insurance write-off.

Right-click options:

* **Go to Account**: View patient's account information.
* **Add Tracking Status**: Add a tracking status. See [Track ERA](claimsera835trackstatus.html) for details.

## Buttons

A number of actions can be taken using the buttons at the bottom.

![](images/ERAButtons.png)

* **Detach Claim**: Click to detach a claim. When a claim cannot be processed in the ERA window, or, after processing the Claim an X is still not showing in the *Recd* column, follow the Detaching a Claim steps on [ERA Workflow](era835workflow.html).
* **Find Claim Matches For Detached**: Click to find claim matches for any detached claim (claims with a received status of N/A).
* **EOB Claim Details**: Highlight a claim and select to view a breakdown of the claim. See [EOB Claim Details](claimseraeobdetails.html).
* **Print**: Click to print the ERA.
  + To customize the printed ERA, see [ERA Layout](sheetsera.html)
  + To customize the printed ERA header, see [ERA Grid Header Layout](sheetseragridheader.html)
* **Print Preview**: Click to preview before printing.
* **Auto Process**: Click to receive payment for all claims on the ERA and finalize the batch insurance payment. A popup indicates how many claims were processed successfully, including any errors that need resolved. Correct any errors and click Auto Process again or receive claims manually as needed. For additional information see ERA Workflow.
* **Finalize Payment**: Once all claims are received, click to finalize the payment.
* **Delete**: Delete this ERA. All claims must be manually detached.

## Finalize Payment

When every claim in the ERA is marked *Received*, click **Finalize Payment**.

1. The [Edit Insurance Payment](editinspayment.html) opens. Most information is auto-populated. Enter or edit details as needed.
2. If payment is paid via a prepaid insurance card and an integrated [Credit Card Payment](paymentpatientcreditcard.html) option is enabled, the corresponding payment buttons are shown. Click a button to process the payment. When the transaction is complete, the Edit Insurance Payment window remains open and transaction details show in the Note.
3. Click **Save** to open the [Insurance Payment (EOB)](inspayeob.html) window.
4. Verify that the correct claims are attached and the amount is accurate.
5. Click **Save** again to finalize the payment.