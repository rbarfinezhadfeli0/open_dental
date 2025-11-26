Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Send Claims

View claims waiting to be sent, a history of sent claims, validate and send claims, and more.

In the [Manage Module](manage.html), click Send Claims.

![](images/claimsSend.png)

Insurance claims can be sent, printed, and managed on the Insurance Claims window.

* Print or send claims as part of a batch.
* View a history of sent claims, printed claims, and reports.
* View and process [ERAs](claimsERA835.html) received from a clearinghouse.
* Create batch claims for unbilled procedures. See [Procedures Not Billed to Insurance Report](reportprocsnotbilledins.html).

This window is non-modal so other windows can be open and used while sending or validating claims.

## Toolbar

![](images/sendClaimsToolbar.png)

* **Preview**: View the selected claim before sending or printing. Users can also double-click a claim in the grid to preview.
* **Blank**: Print a blank version of the default claim form.
* **Print**: To print specific claims, select them, then click Print. To print all claims marked as *Paper*, do not select any claims, then click Print.
  + Paper claims are the default when the [Insurance Plan](insplan.html) setting for *Send Electronically* is set to *Don't usually send electronically*.
  + Printing a claim automatically changes the status to sent.
* **Labels**: Print individual labels for selected insurance carriers.
* **Send E-Claims**: All claims are validated before sending to ensure no information is missing.
  + To send all claims as a single batch to the clearinghouse listed in the Clearinghouse column, click Send E-Claims or click the dropdown to select the clearinghouse. A confirmation message is shown. Click **Yes** to proceed.
  + Claims with *Paper* as the clearinghouse are ignored.
  + For e-claim troubleshooting, see [E-Claims Complexities](eclaimscomplexities.html).
* **Validate Claims**: Validate selected e-claims for missing information before sending. If no claims are selected, all claims in the list are validated.
  + Open Dental always validates e-claims when sending. If a claim has missing information, no claims in the batch are sent and the *Missing Info* column is populated. If a claim has already been sent, a warning is displayed and the claim is not resent.
  + To validate claims when the Insurance Claims window loads (before sending), enable  *Claims Send window validate on load* in [Preferences](preferences.html). This may be useful for smaller offices.
* **Get Reports**: Manually retrieve reports from a clearinghouse. See Reports section for additional information.
* **Refresh**: Update the Claims Waiting to Send grid. Helpful if additional claims have been created or sent after opening the window.
* **Procs Not Billed**: Open the [Procedures Not Billed to Insurance Report](reportprocsnotbilledins.html) and optionally create batch claims for unbilled procedures.
* **Close**: Close the window.

## Claims Waiting to Send

![](images/sendClaimsWaiting.png)

The Claims Waiting to Send grid lists claims that have a status of *Waiting to Send*. Click a column header to sort.

Filter options: Set the filter criteria. Results are updated automatically.

* **Clinic Filter**: Only visible when Clinics are enabled in [Show Features](showfeatures.html). Highlight clinics to filter the list of claims.
  + Filters by clinic assigned to the claim.
  + If user is restricted to specific clinics, only accessible clinics are listed. When selecting **All** from the dropdown, results include all clinics user has access to. Results do not include clinics user is restricted from or claims with no assigned clinic.
* **Next Unsent**: Update the Clinic Filter selection to the next clinic with unsent claims. If multiple clinics are highlighted, the next clinic in the list after any currently highlighted clinics is selected.
* **Custom Tracking Filter**: List claims by recorded claim tracking status. Custom tracking data is entered on the [Edit Claim - Status History Tab](claimtabstatus.html).

Columns:

* DateService: Date of service on the claims. Dates showing 01/01/0001 indicate a preauthorization.
* Patient Name: The patient that is attached to the claim.
* Carrier Name: The insurance plan attached to the patient.
* Clinic: If using clinics, the clinic the claim is associated with.
* Provider: The treating provider on the claim.
* M/D: Indicates whether the claim is Medical (Med) or Dental (Dent).
* Clearinghouse: Determined by the insurance plan's setting for *Don't usually send electronically* ([Insurance Plan](insplan.html)). *Paper* is listed when this setting is enabled. The default clearinghouse is listed when this is disabled.
* Warnings: Indicates when a user attempts to send a deleted or already sent claim.
* Missing Info: Indicates the claims validation status. If *validated when sending*, the claim has not been validated for missing information yet. If missing information is listed, it must be completed before resending. If the column is blank, the claim has been successfully validated with no missing information found.
* Ordinal: Order of insurance plan set in Patient Information section of Edit Insurance Plan window (e.g., 1, 2, etc). Indicates if plan is primary, secondary, etc.
* ProcCodes: Procedures attached to the claim.

## Claim History

![](images/sendClaimsHistory.png)

The History grid lists all claims sent or printed from this window and received reports (e.g., ERAs, acknowledgment reports). Double-click an item to view more information. Right-click an item to *Go To Account*. The list of claims and reports can be filtered by date or type.

Filter Options: Set the filter criteria and click **Refresh** in the Claim History grid toolbar to update the claims listed in the grid.

* **Date From / To**: Only show claims and reports in a date range.
  + Manually enter the dates.
  + Click the down arrow to select dates from a calendar then click the up arrow to collapse the calendar.
  + Click the W buttons to jump back or forward one week.
* **Type**: Only show certain types of claims or reports. Single-click an option, or Ctrl+click to select multiple. If no options are selected, then all types are shown.
  + ClaimSent: Claim was sent electronically.
  + ClaimPrinted: Claim was printed.
  + Claim\_Ren: Renaissance claims.
  + StatusNotify\_277: A health care [Claim Ack 277](claims277.html) that notifies of claim status. See Acknowledgment Reports below.
  + TextReport: Any report that is not a 997, 999, 277, or ERA\_835. See Reports section for additional information.
  + ERA\_835: An electronic EOB, also known as electronic remittance advice or ERA. The AckCode indicates the ERA status. If blank, some or all claims on the ERA are not received. If *Received*, all claims have been received, but payment must be finalized. Double-click an ERA to process it. See [ERA Workflow](era835workflow.html) for additional information and instructions.
  + Ack Interchange
* **Refresh**: Update claims or reports shown in the Claim History grid.
* **Undo**: If there was a problem with sending, highlight claims and click Undo. The claims are moved back to the Claims Waiting to Send grid and changed back to *Waiting the Send* status. Claims are still listed in the Claim History grid for historical record.
* **Print List**: Print the current contents of the History grid.
* **Outstanding Claims**: Open the [Outstanding Insurance Claims Report](reportoutins.html).

Columns:

* Patient Name: The patient that is attached to the claim.
* Carrier Name: The insurance plan attached to the patient.
* Clearinghouse: The clearinghouse that the claim was sent to, where applicable.
* Type: Displays the type of claim or report. See Type, above.
* AckCode: The status on a Claim 277 Acknowledgement. Shows A or R (accepted/rejected).
* User: The logged-on user that sent the claim, where applicable.
* Note: Double-click the item to enter a note in this column.

Note: For a report to be listed, it must already exist in the clearinghouse's default Report Path. Reports can be manually downloaded (click **Get Reports**) or set up to automatically download, (see Automatic Report Settings in [Clearinghouses](clearinghouses.html)). Not all insurance carriers offer ERAs, reports, or the ability to automatically download. If report files are provided by a clearinghouse that does not support automatic downloads into Open Dental, files can be manually saved to the clearinghouse Report Path to be downloaded.

## Etrans Edit/Claim Details

To view details about a sent claim, double-click it to open the Etrans Edit window.

![](images/etransEdit.png)

**Message Text Sent**: Contains any data sent for an electronic claim (i.e., X12).

**DateTime Trans**: Date and time claim was printed or sent electronically.

**AckCode**: Acknowledgement code received from clearinghouse. Displayed if a 997 or 999 acknowledgement is received. See Reports section for additional details.

**Note**: Text that displayed on the Insurance Claims window, History grid.

## Reports

Reports must be downloaded to Clearinghouse *Report Path* to be listed in the History grid.

* To set up automatic download, see [Clearinghouses](clearinghouses.html). Only certain clearinghouses allow automatic download.
* To manually download, click **Get Reports** or manually save the report file to the set report path.

Reports can only be retrieved once per minute. As reports are retrieved, a progress bar appears. Errors are recorded in the Error Log. Users can pause or cancel progress at any time.

Acknowledgment Reports: Clearinghouses are not obligated to provide these acknowledgment reports and may choose to return some or all reports for some batches and not others.

* **997 & 999**: The 997 and 999 are simpler formats that only provide information regarding the status of a batch, based purely on formatting and data requirements. When a 997 or 999 is received by Open Dental, the AckCode column in the History grid for the corresponding claims are set to A for accepted or R for rejected. Double-click the sent claim from the History grid to open the Etrans Edit window and view the acknowledgment message text.
* **277**: Shows in the History grid with a Type of StatusNotify\_277. This report provides more detailed status information about the sent batch than a 997 or 999 format. Double-click to open the [Claim Ack 277](claims277.html).
* **835**: Also known as the electronic remittance advice or ERA. The 835 report shows in the History grid with a Type of ERA\_835. Double-click to open the [ERA](era.html).

Text Reports: Reports usually come back from the clearinghouse as files placed in the report path specified in the Edit Clearinghouse window. They are then automatically imported by Open Dental and stored in the database. The original text file is deleted. Some clearinghouses use a web-based follow-up system rather than sending back text reports.