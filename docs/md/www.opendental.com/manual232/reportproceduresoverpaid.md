Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Procedures Overpaid Report

Find procedures overpaid due to insurance or patient payments, write-offs, or adjustments using the Procedures Overpaid report.

In [Standard Reports](reportsstandard.html), in the Monthly section, click **Procedures Overpaid**.

![](images/reportProceduresOverpaid.gif)

The Procedures Overpaid report lists individual procedures that have been overpaid by insurance, the patient, a write-off, or an adjustment.

* ![](images/youtubeLogo.png) See our Webinar: [Procedures Overpaid Report](https://youtu.be/F_sQs8GfT04)
* Payments, write-offs, and adjustments must be allocated to procedures in order for this report to pull data correctly.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

**From / To**: Click the drop down or type a date to set the report date range. Filters by *Date* of completed procedure.

**Providers**: Select the providers to include. Ctrl + click to select multiple providers. Select **All** to include all listed providers. Filters by provider attached to procedure (i.e., treating provider).

**Exclude if no Insurance Payment/Write-off**: Check to include only overpaid procedures attached to an insurance payment or write-off. Procedures overpaid due to adjustments or patient payments only will be excluded.

**Clinics**: Select clinics to include in the report. Ctrl + click to select multiple clinics or select **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by clinic assigned to procedure.
* If user is restricted to specific clinics, only accessible clinics will list. When selecting **All (includes hidden)**, results will include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.

**Patient**: By default, the currently selected patient will be listed.

* **Current**: Click to enters the currently selected patient.
* **Find**: Click to open [Select Patient](patientselect.html) and find a specific patient.
* **All**: Click to remove specific patient filter and search overpaid procedure for all patients.

## Procedures Overpaid Grid

After setting report filters, click **Refresh** to update results in the Procedures Overpaid Grid. Below are descriptions of the report columns. Click **Print** to generate a print preview of the report results.

![](images/reportProcsOverpaidGrid.png)

Right-click an item in the grid and select **Go To Account** to open the selected patient's account.

* **Patient**: Last name and first name of patient associated with the overpaid procedure.
* **Date**: Procedure date.
* **Code**: Procedure code.
* **Tth**: Tooth number.
* **Prov**: Provider.
* **Fee**: Procedure fee.
* **Ins Paid**: Total of all entered insurance payments (including supplemental) attached to the procedure. See [Receive Claim](claimreceive.html).
* **Write-off**: Total of all entered write-offs (including supplemental) attached to the procedure.
* **Pt Paid**: Total of all [Patient Payments](payment.html) attached to the procedure.
* **Adjust**: Total of all [Adjustments](adjustments.html) attached to the procedure.
* **Overpayment**: Total overpaid amount (*Fee* - *Ins Paid* - *Write-off* - *Pt Paid* - *Adjust* = *Overpayment*).