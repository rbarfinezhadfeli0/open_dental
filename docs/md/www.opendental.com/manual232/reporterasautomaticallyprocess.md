Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

ERAs Automatically Processed Report

View the status of ERAs that have been automatically or semi-automatically processed.

In [Standard Reports](reportsstandard.html), in the Lists section, click **ERAs Automatically Processed**.

![](images/reportERAAutomaticallyProcessed.png)

Alternatively, from the [ERA](era.html) window, click **Auto Processed Report**.

Note:

* To control user access to this report, see Report Setup: Security Permissions.
* Similarly, the *InsPayCreate* permission is required.

## Filters

Set the report criteria to update the results in the ERAs grid.

![](images/ERAautoProcessReportFilters.png)

* **From / To**: Filter results by the date the ERA was received. Click the W buttons to jump back/forward one week.
* **Carrier**: Filter by carrier name on the ERA.
* **Check # or EFT Trace #**: Only show ERAs for a specific check number or EFT trace number.
* **Clinics**: Select the clinic associated with the ERA, or use All to view all clinics.
* **Auto Processed Result**: Filter by the result of the auto-processing.
  + **Semi-automatic Incomplete**: When using semi-automatic processing, the ERA was unable to receive all claims or finalize the payment.
  + **Semi-automatic Complete**: When using semi-automatic processing, all claims were received and the payment was finalized.
  + **Fully-automatic Incomplete**: When using fully-automatic processing, the ERA was unable to receive all claims or finalize the payment.
  + **Fully-automatic Complete**: When using fully-automatic processing, all claims were received and the payment was finalized
* **Show Acknowledged**: When an ERA is acknowledged, it is hidden from the report. Check this box to display acknowledged ERAs.

## ERAs Grid

After setting filter criteria, click **Refresh** to update results in the ERAs grid.

The ERAs grid displays the status of ERAs.

* Highlight an ERA to view associated claims in the Claims grid.
* Double-click an ERA to view it.
* Highlight ERA(s) and click **Acknowledge ERA(s)** or right-click an ERA to acknowledge and remove it from the list.

Below are descriptions of the grid columns.

![](images/ERAautoProcessReportERAs.png)

* **Patient Name**: Lists the patient on the ERA. If more than one patient is associated with an ERA, the number of claims on the ERA shows in the Patient Name column instead of a name.
* **Carrier Name**: Lists the carrier on the ERA.
* **Status**: Current status of the ERA.
  + Unprocessed: No claims attached to the ERA have been processed.
  + Partial: Some claims attached to the ERA have been processed, but more claims need to be processed.
  + Not Finalized: All claims attached to the ERA have been processed. Payment still needs to be finalized.
  + Finalized: All claims attached to the ERA have been processed and payment has been finalized.
* **Date**: Date ERA was received.

## Claims Grid

The Claims grid displays claims associated with the selected ERA.

* Highlight a claim to view attached claim procedure adjustments.
* Double-click a row to view the claim.
* Right-click a row to Go To Account.
* Right-click a row to Process Unsent Secondary Claims.

Below are descriptions of the grid columns.

![](images/ERAautoProcessReportClaims.png)

* **Recd**: X indicates claim has been marked as received.
* **Patient Name** Patient name associated to the claim.
* **Type**: See [Claim Types](claimtypes.html)
* **DateService**: Date of Service of the claim.
* **EraPaid**: Amount of the ERA paid on the individual claim.
* **InsEst**: Total insurance estimate of the claim.
* **InsPaid**: Total of all insurance payments. Includes any payments made outside of the current ERA.
* **InsVar**: Insurance variance. The total difference in the estimated insurance payment and actual insurance payment (InsEst - InsPaid = InsVar).
* **W/O Est**: Write-off estimate.
* **Writeoff**: Amount of write-off for procedure.
* **W/O Var**: Write-off variance. The total difference in estimated write-off and actual write-off (W/O Est - Write-off = W/O Var).
* **Supp?**: X indicates payment is supplemental.
* **Claim Adj?**: X indicates a claim adjustment is present.
* **More Claims?**: X indicates additional claims exist for the same date of service for the patient.

## Claim Procedure Adjustments

The Claim Procedure Adjustments grid displays items associated with the selected claim on an ERA. Below are descriptions of the grid columns.

![](images/ERAautoProcessReportClaimProcAdj.png)

* **Proc**: The number of the procedure as ordered in the claim.
* **Proc Code**: Procedure code associated to the claim procedure adjustment.
* **Description**: Description of claim adjustment.
* **Reason**: Additional claim procedure adjustment details.
* **Adj Amount**: Claim procedure adjustment amount.