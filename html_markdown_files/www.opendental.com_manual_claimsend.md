# File: ./www.opendental.com/manual/claimsend.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Send Claims</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimsend','manage','modules','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/claimsend.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/claimsend.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimsend.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimsend.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimsend.html" >v23.2</option><option value="https://www.opendental.com/manual231/claimsend.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimsend.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimsend.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimsend.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimsend.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimsend.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimsend.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimsend.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimsend.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimsend.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimsend.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimsend.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimsend.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimsend.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimsend.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimsend.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimsend.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimsend.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimsend.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimsend.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimsend.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimsend.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimsend.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Send Claims</p></div>
<div class="GeneralPageContent">
<p>View claims waiting to be sent, a history of sent claims, validate and send claims, and more.</p>
<p>In the <a href="manage.html">Manage Module</a>, click Send Claims.</p>
<img src="images/claimsSend.png" width="915" height="524"/><p class="MarginBottomZero">Insurance claims can be sent, printed, and managed on the Insurance Claims window. </p>
<ul class="MarginBottomGap">
<li>Print or send claims as part of a batch.</li>
<li>View a history of sent claims, printed claims, and reports.</li>
<li>View and process <a href="claimsERA835.html">ERAs</a> received from a clearinghouse.</li>
<li>Create batch claims for unbilled procedures. See <a href="reportprocsnotbilledins.html">Procedures Not Billed to Insurance Report</a>.</li>
</ul>
<p>This window is non-modal so other windows can be open and used while sending or validating claims.</p>
<h2>Toolbar</h2>
<img src="images/sendClaimsToolbar.png" width="759" height="29"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Preview</b>: View the selected claim before sending or printing. Users can also double-click a claim in the grid to preview.</li>
<li><b>Blank</b>: Print a blank version of the default claim form.</li>
<li><b>Print</b>: To print specific claims, select them, then click Print. To print all claims marked as <i>Paper</i>, do not select any claims, then click Print.  <ul>
<li>Paper claims are the default when the <a href="insplan.html">Insurance Plan</a> setting for <i>Send Electronically</i> is set to <i>Don't usually send electronically</i>.</li>
<li>Printing a claim automatically changes the status to sent.</li>
</ul>
</li>
<li><b>Labels</b>: Print individual labels for selected insurance carriers.</li>
<li><b>Send E-Claims</b>: All claims are validated before sending to ensure no information is missing. <ul>
<li>To send all claims as a single batch to the clearinghouse listed in the Clearinghouse column, click Send E-Claims or click the dropdown to select the clearinghouse. A confirmation message is shown. Click <b>Yes</b> to proceed. </li>
<li>Claims with <i>Paper</i> as the clearinghouse are ignored.</li>
<li>For e-claim troubleshooting, see <a href="eclaimscomplexities.html">E-Claims Complexities</a>.</li>
</ul>
</li>
<li><b>Validate Claims</b>: Validate selected e-claims for missing information before sending. If no claims are selected, all claims in the list are validated. <ul>
<li>Open Dental always validates e-claims when sending. If a claim has missing information, no claims in the batch are sent and the <i>Missing Info</i> column is populated. If a claim has already been sent, a warning is displayed and the claim is not resent.</li>
<li>To validate claims when the Insurance Claims window loads (before sending), enable <i> Claims Send window validate on load</i> in <a href="preferences.html">Preferences</a>. This may be useful for smaller offices.</li>
</ul>
</li>
<li><b>Get Reports</b>: Manually retrieve reports from a clearinghouse. See Reports section for additional information.</li>
<li><b>Refresh</b>: Update the Claims Waiting to Send grid. Helpful if additional claims have been created or sent after opening the window.</li>
<li><b>Procs Not Billed</b>: Open the <a href="reportprocsnotbilledins.html">Procedures Not Billed to Insurance Report</a> and optionally create batch claims for unbilled procedures.</li>
<li><b>Close</b>: Close the window.</li>
</ul>
<h2>Claims Waiting to Send</h2>
<img src="images/sendClaimsWaiting.png" width="915" height="239"/><p>The Claims Waiting to Send grid lists claims that have a status of <i>Waiting to Send</i>. Click a column header to sort.</p>
<p class="MarginBottomZero">Filter options: Set the filter criteria. Results are updated automatically.  </p>
<ul class="MarginBottomGap">
<li><b>Clinic Filter</b>: Only visible when Clinics are enabled in <a href="showfeatures.html">Show Features</a>. Highlight clinics to filter the list of claims.  <ul>
<li>Filters by clinic assigned to the claim. </li>
<li>If user is restricted to specific clinics, only accessible clinics are listed. When selecting <b>All</b> from the dropdown, results include all clinics user has access to. Results do not include clinics user is restricted from or claims with no assigned clinic.</li>
</ul>
</li>
<li><b>Next Unsent</b>: Update the Clinic Filter selection to the next clinic with unsent claims. If multiple clinics are highlighted, the next clinic in the list after any currently highlighted clinics is selected.</li>
<li><b>Custom Tracking Filter</b>: List claims by recorded claim tracking status. Custom tracking data is entered on the <a href="claimtabstatus.html">Edit Claim - Status History Tab</a>.</li>
</ul>
<p class="MarginBottomZero">Columns: </p>
<ul class="MarginBottomGap">
<li>DateService: Date of service on the claims. Dates showing 01/01/0001 indicate a preauthorization.</li>
<li>Patient Name: The patient that is attached to the claim.</li>
<li>Carrier Name: The insurance plan attached to the patient.</li>
<li>Clinic: If using clinics, the clinic the claim is associated with.</li>
<li>Provider: The treating provider on the claim.</li>
<li>M/D: Indicates whether the claim is Medical (Med) or Dental (Dent).</li>
<li>Clearinghouse: Determined by the insurance plan's setting for <i>Don't usually send electronically</i> (<a href="insplan.html">Insurance Plan</a>). <i>Paper</i> is listed when this setting is enabled. The default clearinghouse is listed when this is disabled.</li>
<li>Warnings: Indicates when a user attempts to send a deleted or already sent claim.</li>
<li>Missing Info: Indicates the claims validation status. If <i>validated when sending</i>, the claim has not been validated for missing information yet. If missing information is listed, it must be completed before resending. If the column is blank, the claim has been successfully validated with no missing information found.</li>
<li>Ordinal: Order of insurance plan set in Patient Information section of Edit Insurance Plan window (e.g., 1, 2, etc). Indicates if plan is primary, secondary, etc.</li>
<li>ProcCodes: Procedures attached to the claim.</li>
</ul>
<h2>Claim History</h2>
<img src="images/sendClaimsHistory.png" width="915" height="208"/><p>The History grid lists all claims sent or printed from this window and received reports (e.g., ERAs, acknowledgment reports). Double-click an item to view more information. Right-click an item to <i>Go To Account</i>. The list of claims and reports can be filtered by date or type.</p>
<p class="MarginBottomZero">Filter Options: Set the filter criteria and click <b>Refresh</b> in the Claim History grid toolbar to update the claims listed in the grid. </p>
<ul class="MarginBottomGap">
<li><b>Date From / To</b>: Only show claims and reports in a date range.  <ul>
<li>Manually enter the dates.</li>
<li>Click the down arrow to select dates from a calendar then click the up arrow to collapse the calendar.</li>
<li>Click the W buttons to jump back or forward one week.</li>
</ul>
</li>
<li><b>Type</b>: Only show certain types of claims or reports. Single-click an option, or Ctrl+click to select multiple. If no options are selected, then all types are shown.  <ul>
<li>ClaimSent: Claim was sent electronically.</li>
<li>ClaimPrinted: Claim was printed.</li>
<li>Claim_Ren: Renaissance claims.</li>
<li>StatusNotify_277: A health care <a href="claims277.html">Claim Ack 277</a> that notifies of claim status. See Acknowledgment Reports below.</li>
<li>TextReport: Any report that is not a 997, 999, 277, or ERA_835. See Reports section for additional information.</li>
<li>ERA_835: An electronic EOB, also known as electronic remittance advice or ERA. The AckCode indicates the ERA status. If blank, some or all claims on the ERA are not received. If <i>Received</i>, all claims have been received, but payment must be finalized. Double-click an ERA to process it. See <a href="era835workflow.html">ERA Workflow</a> for additional information and instructions.</li>
<li>Ack Interchange</li>
</ul>
</li>
<li><b>Refresh</b>: Update claims or reports shown in the Claim History grid.</li>
<li><b>Undo</b>: If there was a problem with sending, highlight claims and click Undo. The claims are moved back to the Claims Waiting to Send grid and changed back to <i>Waiting the Send</i> status. Claims are still listed in the Claim History grid for historical record. </li>
<li><b>Print List</b>: Print the current contents of the History grid.</li>
<li><b>Outstanding Claims</b>: Open the <a href="reportoutins.html">Outstanding Insurance Claims Report</a>.</li>
</ul>
<p class="MarginBottomZero">Columns: </p>
<ul class="MarginBottomGap">
<li>Patient Name: The patient that is attached to the claim.</li>
<li>Carrier Name: The insurance plan attached to the patient.</li>
<li>Clearinghouse: The clearinghouse that the claim was sent to, where applicable.</li>
<li>Type: Displays the type of claim or report. See Type, above.</li>
<li>AckCode: The status on a Claim 277 Acknowledgement. Shows A or R (accepted/rejected).</li>
<li>User: The logged-on user that sent the claim, where applicable.</li>
<li>Note: Double-click the item to enter a note in this column.</li>
</ul>
<p><div class="Note">Note: For a report to be listed, it must already exist in the clearinghouse's default Report Path. Reports can be manually downloaded (click <b>Get Reports</b>) or set up to automatically download, (see Automatic Report Settings in <a href="clearinghouses.html">Clearinghouses</a>). Not all insurance carriers offer ERAs, reports, or the ability to automatically download. If report files are provided by a clearinghouse that does not support automatic downloads into Open Dental, files can be manually saved to the clearinghouse Report Path to be downloaded. </div>
</p>
<h2>Etrans Edit/Claim Details</h2>
<p>To view details about a sent claim, double-click it to open the Etrans Edit window.</p>
<img src="images/etransEdit.png" width="615" height="546"/><p><b>Message Text Sent</b>: Contains any data sent for an electronic claim (i.e., X12).</p>
<p><b>DateTime Trans</b>: Date and time claim was printed or sent electronically.</p>
<p><b>AckCode</b>: Acknowledgement code received from clearinghouse. Displayed if a 997 or 999 acknowledgement is received. See Reports section for additional details.</p>
<p><b>Note</b>: Text that displayed on the Insurance Claims window, History grid.</p>
<h2>Reports</h2>
<p class="MarginBottomZero">Reports must be downloaded to Clearinghouse <i>Report Path</i> to be listed in the History grid. </p>
<ul class="MarginBottomGap">
<li>To set up automatic download, see <a href="clearinghouses.html">Clearinghouses</a>. Only certain clearinghouses allow automatic download.</li>
<li>To manually download, click <b>Get Reports</b> or manually save the report file to the set report path.</li>
</ul>
<p>Reports can only be retrieved once per minute. As reports are retrieved, a progress bar appears. Errors are recorded in the Error Log. Users can pause or cancel progress at any time.</p>
<p class="MarginBottomZero">Acknowledgment Reports: Clearinghouses are not obligated to provide these acknowledgment reports and may choose to return some or all reports for some batches and not others. </p>
<ul class="MarginBottomGap">
<li><b>997 &amp; 999</b>: The 997 and 999 are simpler formats that only provide information regarding the status of a batch, based purely on formatting and data requirements. When a 997 or 999 is received by Open Dental, the AckCode column in the History grid for the corresponding claims are set to A for accepted or R for rejected. Double-click the sent claim from the History grid to open the Etrans Edit window and view the acknowledgment message text.</li>
<li><b>277</b>: Shows in the History grid with a Type of StatusNotify_277. This report provides more detailed status information about the sent batch than a 997 or 999 format. Double-click to open the <a href="claims277.html">Claim Ack 277</a>.</li>
<li><b>835</b>: Also known as the electronic remittance advice or ERA. The 835 report shows in the History grid with a Type of ERA_835. Double-click to open the <a href="era.html">ERA</a>.</li>
</ul>
<p>Text Reports: Reports usually come back from the clearinghouse as files placed in the report path specified in the Edit Clearinghouse window. They are then automatically imported by Open Dental and stored in the database. The original text file is deleted. Some clearinghouses use a web-based follow-up system rather than sending back text reports.</p>
</div>
</div>
</body>
</html>```
