# File: ./www.opendental.com/manual/era835workflow.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - ERA Workflow</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('era835workflow','claimsera835','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/era835workflow.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/era835workflow.html" >v24.2</option><option value="https://www.opendental.com/manual241/era835workflow.html" >v24.1</option><option value="https://www.opendental.com/manual233/era835workflow.html" >v23.3</option><option value="https://www.opendental.com/manual232/era835workflow.html" >v23.2</option><option value="https://www.opendental.com/manual231/era835workflow.html" >v23.1</option><option value="https://www.opendental.com/manual224/era835workflow.html" >v22.4</option><option value="https://www.opendental.com/manual223/era835workflow.html" >v22.3</option><option value="https://www.opendental.com/manual222/era835workflow.html" >v22.2</option><option value="https://www.opendental.com/manual221/era835workflow.html" >v22.1</option><option value="https://www.opendental.com/manual214/era835workflow.html" >v21.4</option><option value="https://www.opendental.com/manual213/era835workflow.html" >v21.3</option><option value="https://www.opendental.com/manual212/era835workflow.html" >v21.2</option><option value="https://www.opendental.com/manual211/era835workflow.html" >v21.1</option><option value="https://www.opendental.com/manual205/era835workflow.html" >v20.5</option><option value="https://www.opendental.com/manual204/era835workflow.html" >v20.4</option><option value="https://www.opendental.com/manual203/era835workflow.html" >v20.3</option><option value="https://www.opendental.com/manual202/era835workflow.html" >v20.2</option><option value="https://www.opendental.com/manual201/era835workflow.html" >v20.1</option><option value="https://www.opendental.com/manual194/era835workflow.html" >v19.4</option><option value="https://www.opendental.com/manual193/era835workflow.html" >v19.3</option><option value="https://www.opendental.com/manual192/era835workflow.html" >v19.2</option><option value="https://www.opendental.com/manual191/era835workflow.html" >v19.1</option><option value="https://www.opendental.com/manual184/era835workflow.html" >v18.4</option><option value="https://www.opendental.com/manual183/era835workflow.html" >v18.3</option><option value="https://www.opendental.com/manual182/era835workflow.html" >v18.2</option><option value="https://www.opendental.com/manual181/era835workflow.html" >v18.1</option><option value="https://www.opendental.com/manual174/era835workflow.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>ERA Workflow</p></div>
<div class="GeneralPageContent">
<p>See <a href="claimsERA835.html">ERAs</a>.</p>
<p>Electronic Remittance Advice (ERA) can be processed manually, automatically, and semi-automatically. Below are the steps for inital set up to start receiving ERAs and how process them.</p>
<h2>Initial Setup Requirements</h2>
<p class="MarginBottomZero">To start using ERAs, offices must sign up for ERAs with their clearinghouse and participating insurance carriers. </p>
<ul class="MarginBottomGap">
<li>Automatic download of ERAs is supported through <a href="eclaimsclaimconnect.html">DentalXChange ClaimConnect E-Claims</a>, <a href="dentical.html">Denti-Cal</a>, and <a href="eclaimseds.html">Electronic Dental Services</a>. </li>
<li>Not all insurance carriers or clearinghouses offer ERAs, or the ability to automatically download. If automatic downloads are not available, manually download ERAs following the steps found on <a href="claimsera835troubleshooting.html">ERA Troubleshooting</a>.</li>
</ul>
<p class="MarginBottomZero">Some setup is needed in Open Dental to enable ERAs. If a clearinghouse is not set up in in Open Dental, see <a href="clearinghouses.html">Clearinghouse Setup</a>. </p>
<ol class="MarginBottomGap">
<li>Ensure the <a href="opendentalservice.html">Open Dental Service</a> is installed and running on the server.</li>
<li>In Clearinghouse Setup, check <i>Receive Reports by Service</i></li>
<li>In Clearinghouse Setup, double-click on the clearinghouse. Ensure <i>Download ERAs</i> is selected and that there is a designated report path. (e.g., C:\ClaimConnect\Report\).</li>
<li>Ensure necessary users have <a href="permissions.html">Permissions</a> for <i>Insurance Payment Create</i>.</li>
<li>In the <a href="claimsend.html">Send Claims</a> window, click <i>Get Reports</i>, select the clearinghouse, then check for a successful connection to the clearinghouse server.</li>
<li>(Optional) Enable <i>ERA Automation</i> (automatic processing) in <a href="preferences.html">Preferences</a>.</li>
</ol>
<p>Once this initial setup has been completed, the office is ready to begin receiving and processing ERAs. Proceed to one of the sections below to process ERAs.</p>
<h2>Manually Processing ERAs</h2>
<p class="MarginBottomZero">If ERA Automation is set to <i>Review All</i> in Preferences, all ERAs must be processed manually: </p>
<ol class="MarginBottomGap">
<li>From the Manage Module, click <b><a href="claimsERA835.html">ERAs</a></b></li>
<li>Verify the date range is correct. Enter any criteria to filter the list.</li>
<img src="images/eraFlowEOBWindow.png" width="915" height="321"/><li>Double-click an ERA to see the <a href="era.html">ERA - Electronic EOB</a> (e.g., attached claims and payments).</li>
<img src="images/eraFlowClaims.png" width="915" height="676"/><li>Double-click on a claim to process payment.</li>
<li>Verify the amounts being entered are correct.</li>
<img src="images/eraFlowVerifyPayment.png" width="915" height="677"/><li>Click <b>Save</b> to mark the claim as <i>Received</i></li>
<li>If multiple claims are included on the ERA, repeat steps 4-6 as needed for any remaining claims.</li>
<li>Once all claims in the ERA have been marked as <i>Received</i>, click <b>Finalize Payment</b>. See Finalize Payment on <a href="eraprocess.html">Process ERA</a>.</li>
<img src="images/eraFlowFinalizePayment.png" width="153" height="32"/></ol>
<div class="Note">Note: If a claim payment is missing the X in the Recd column, continue with the steps below to detach the claim and finalize the payment outside the ERA window.</div>
<h2>Detaching a Claim</h2>
<p>If a claim cannot be processed in the ERA window, the claim can be detached and payment information entered manually.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Select the problem claim from the Claims Paid grid.</li>
<li>Click <b>Detach Claim</b>. Once detached <i>N/A</i> appears in the Recd column for the selected claim.</li>
<img src="images/eraFlowDetach.png" width="915" height="229"/><li>Right-click on the detached claim; Select <b>Go to Account</b>.</li>
<li>From the Account Module, enter payment details and receive the claim as normal. See: <a href="claimreceive.html">Receive Claim</a>.</li>
<li>Repeat steps 1-4 as needed for any other claims that need to be detached from the ERA.</li>
<li>After all claims have been received on the ERA (Recd column marked <i>X</i>) or detached from the ERA (Recd column marked <i>N/A</i>) and received through the account module, finalize the payment as batch outside of the ERA window. See: <a href="claimpaymentbatch.html">Batch Insurance Payment</a>.</li>
</ol>
<div class="Note">Note: Once all claim payments have been processed or detached, and all claims (including $0 payments) have been attached to the batch check, the status of the ERA is updated to <i>Finalized*</i>. The asterisk (*) indicates an ERA with detached claims.</div>
<h2>Semi-Automatic ERA Processing</h2>
<p class="MarginBottomZero">If ERA Automation is set to <i>Semi-automatic</i> in Preferences, users can process ERAs with a single click in the ERA window: </p>
<ol class="MarginBottomGap">
<li>In the ERAs window, double-click on an ERA to see the attached claims and payments.</li>
<li>Click <b>Auto Process.</b></li>
<ul>
<li>All claims associated with the ERA are automatically received or a message is shown detailing any problem claims.. </li>
<img src="images/eraFlowProcessError.png" width="493" height="192"/><li>If there are any errors, correct them as needed. Click <b>Auto Process</b> again. If necessary, follow steps above for Detaching a Claim.</li>
</ul>
<li>If all claims on the ERA Auto Process successfully, payment is automatically finalized. </li>
</ol>
<h2>Fully-Automatic ERA Processing</h2>
<p class="MarginBottomZero">If ERA Automation is set to <i>Fully-automatic</i> in Preferences, Open Dental automatically completes the <a href="claimsERAmatching.html">ERA Match with Claim</a> process without any work needed from the office: </p>
<ul class="MarginBottomGap">
<li>To see ERAs that have been automatically processed and finalized, open the <a href="claimsERA835.html">ERAs</a> window. Select the <i>Finalized</i> status filter. ERAs that have been finalized by automatic process display a note. A note also indicate any failed auto processing attempts. <ul>
<li>See a list of partially or fully processed claims by clicking <b>Auto Processed Report</b> in the ERA window. See: <a href="reporterasautomaticallyprocess.html">ERAs Automatically Processed Report</a></li>
</ul>
</li>
<li>For ERAs that failed to Auto Process (i.e., do not meet claim matching logic), double-click them from the ERAs list and follow the steps for Semi-automatic or Manual ERA processing above.</li>
</ul>
<img src="images/eraFlowListAutoProcess.png" width="915" height="321"/><h2>Additional Information About Semi and Fully-Automatic ERA Processing</h2>
<p class="MarginBottomZero">Automatic ERA processing: </p>
<ul class="MarginBottomGap">
<li>Matches claims from the database to claims on the ERA. This also reassociates claims that were manually detached from an ERA using the <b>Detach Claim</b> button on the ERA window.</li>
<li>Applies the payment for the claim to an <a href="paymentplanins.html">Insurance Payment Plans</a> if only one valid payment plan for the claim is found.</li>
<ul>
<li>If multiple valid payment plans are found, the claim must be processed manually so an Insurance Payment Plan can be chosen by the user.</li>
</ul>
<li>Creates <a href="claimsnapshot.html">Claim Snapshots</a>.</li>
<li>Attempts to process as many claims as possible. If an error is encountered while processing only one claim on an ERA, the system receives the other claim payments and leaves the ERA in a partially processed state without attempting to finalize a batch insurance payment. <ul>
<li>An ERA may also be left in a <i>NotFinalized</i> state if all claims are processed, but an error was encountered when attempting to make the batch insurance payment. If errors are fixed and auto processing is attempted again, the system skips any claims that have already been processed.</li>
</ul>
</li>
<li>Enters initial payments, supplemental payments, reversals, and preauthorizations. Claims and <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a> have their status changed appropriately and date received is updated.</li>
<li>Creates a batch insurance payment for the ERA. The Carrier Name, Check#, Amount, and Clinic are filled. The Payment Date is set to the date the ERA is auto processed. <ul>
<li>The Payment Type is determined by the ERA Payment Method and the following <a href="preferences.html">Preferences</a>: <ul>
<li><i>CHK payment type</i>: <a href="inspaytypes.html">Insurance Payment Type</a> automatically assigned to Auto-Processed ERA payments when the Payment Method code is CHK.</li>
<li><i>ACH payment type</i>: Insurance Payment Type automatically assigned to Auto-Processed ERA payments when the Payment Method code is ACH.</li>
<li><i>FWT payment type</i>: Insurance Payment Type automatically assigned to Auto-Processed ERA payments when the Payment Method code is FWT.</li>
<li><i>Default payment type</i>: Insurance Payment Type automatically assigned to Auto-Processed ERA payments when the Payment Method code is unrecognized.</li>
<li>If these preferences are not set, the Payment Type is may be left as <i>undefined</i>.</li>
</ul>
</li>
</ul>
</li>
<li>Creates an auto deposit if <i>Insurance payments show auto deposit</i> is enabled in Preferences.</li>
<li>Claims with mismatched names (i.e., the patient name on the claim in Open Dental does not match the patient name on the ERA) may still be processed if other information exists to match the claims (e.g., claim identifier). A note is added to the auto processed ERA if any name mismatches exist.</li>
<li>Posts write-offs to non-primary (e.g., secondary or tertiary) claims when <i>Auto-processing posts write-offs on non-primary claims</i> is set to <i>Always</i> in Preferences.  <ul>
<li>If the preference is set to <i>Primary from ERA</i>, a claim is considered primary when the ERA status is <i>Processed as Primary</i>, regardless of the insurance plan ordinal in Open Dental.</li>
<li>If the preference is set to <i>Primary from plan</i>, a claim is considered primary when the insurance plan is marked as primary (i.e., ordinal 1) in <a href="insplan.html">Edit Insurance Plan</a>, regardless of the ERA status.</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero">Automatic ERA Processing does not: </p>
<ul class="MarginBottomGap">
<li>Set the allowed override for claimprocs or update allowed fee schedules.</li>
<li>Prompt to handle secondary claims when <i>Prompt for secondary claims</i> is enabled in Preferences.</li>
<li>Receive claims that include a CARC defined in the <i>Don't auto-process claims w/ these CARCs</i> preference. </li>
</ul>
</div>
</div>
</body>
</html>```
