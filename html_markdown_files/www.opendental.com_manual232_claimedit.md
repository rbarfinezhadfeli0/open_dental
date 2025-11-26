# File: ./www.opendental.com/manual232/claimedit.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Claim</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/claimedit.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/claimedit.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimedit.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimedit.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimedit.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/claimedit.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimedit.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimedit.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimedit.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimedit.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimedit.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimedit.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimedit.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimedit.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimedit.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimedit.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimedit.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimedit.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimedit.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimedit.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimedit.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimedit.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimedit.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimedit.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimedit.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimedit.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimedit.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimedit.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Claim</p></div>
<div class="GeneralPageContent">
<p>Create, send and receive claims for indivdual patients from the Edit Claim window.</p>
<p>In the <a href="account.html">Account Module</a> toolbar, click <b>New Claim</b>.</p>
<img src="images/claimPayFinalize.png" width="915" height="683"/><p class="MarginBottomZero">Alternatively:  </p>
<ul class="MarginBottomGap">
<li>Double-click an existing claim to edit.</li>
<li>Select a <a href="claimtypes.html">Claim Type</a> from the <b>New Claim</b> dropdown menu.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>Clicking <b>New Claim</b>, without selecting any procedures, automatically creates a claim for all procedures not sent to insurance. If there is dual coverage, a secondary claim is also automatically created with a status of <i>Hold until Pri Received</i>.</li>
<li>For more control, highlight specific procedures, then click <b>New Claim</b>, or click the drop down to create a Primary, Secondary, Medical, or Other claim type.</li>
</ul>
</div>
</p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our Webinar: <a href="https://youtu.be/Zbdp3n4gne0">Creating Claims</a></p>
<p>Once created, the claim is displayed in the patient's account under the procedures.<br/><img src="images/claimNew.gif" width="732" height="237" class="ImageInParagraph"/></p>
<p>To send, print, edit, or delete a claim, the logged-on user must have the correct <a href="permissions.html">Security Permissions</a>. This window is read-only if the logged-on user doesn't have access to the clinic on the claim or the clinic on the claim is hidden.<br/><div class="Note">Note: <ul>
<li>When a patient has unearned income and the preference, <i> Prompt user to allocate unearned income after creating a claim</i>, is checked, the user is prompted to <a href="unearnedallocate.html">Allocate Unearned Income</a> when a claim is created.</li>
<li>Editing a claim with supplemental claim transfers created by the <a href="incometransfermanager.html">Income Transfer Manager</a> deletes all the transfer entries on the claim. See <a href="claimpaymentsupplemental.html">Supplemental Insurance Payments</a> for additional information.</li>
<li>Edits to the claim payment or write-off are logged in the audit trail.</li>
</ul>
</div>
</p>
<h2>Claim Status, Claim Type, and Dates</h2>
<img src="images/claimStatusDate.png" width="274" height="151"/><p class="MarginBottomZero"><b>Claim Status</b>: Every claim has a status. </p>
<ul class="MarginBottomGap">
<li><b>Unsent</b>: Claim has been created, but not sent.</li>
<li><b>Hold until Pri received</b>: For secondary claims that should not be sent until the primary claim is received.</li>
<li><b>Waiting to Send</b>: Claim is ready to be printed or sent electronically. See <a href="claimsend.html">Send Claims</a>.</li>
<li><b>Probably Sent</b>: Claim has been printed or sent electronically, but the process has not yet been verified. As soon as it is verified the claim has been sent or printed, change the status.</li>
<li><b>Sent - Verified</b>: Claim has been sent or printed. Shows on the <a href="reportoutins.html">Outstanding Insurance Claims Report</a>, so it can be tracked to ensure timely payment..</li>
<li><b>Received</b>: Claim has been received from insurance, either with a payment or a denial. Usually the claim is marked received automatically when clicking one of the Enter Payment buttons at the upper right.</li>
<li><b>Hold for In Process</b>: One or more procedures on the claim is set to <i>Complete (In Process)</i>. This status cannot be selected manually. Once all procedures grouped together for multiple visits have been set complete, the claim status is automatically be updated to <i>Waiting to Send</i>. This claim status cannot be changed manually. See <a href="procsmultipleappts.html">Procedure over Multiple Appointments</a> for additional information.</li>
</ul>
<p>When a claim is created using the <b>New Claim</b> button for a patient with dual coverage, both a primary and secondary claim are automatically created. The primary claim has a status of <i>Waiting to Send</i>. The secondary claim has a status of <i>Hold until Pri received</i> and remains in the patient's account. When the primary claim is received, send the secondary claim (verify the estimates on the secondary claim before sending). <div class="Note">Note: <ul>
<li>For information about secondary claims, see <a href="inssecondary.html">Secondary Insurance</a>.</li>
<li>Claim text color is dependent on settings in <a href="definitionsaccountcolors.html">Definitions: Account Colors</a>.</li>
<li>Printing a claim automatically changes its status to <i>Sent</i>.</li>
</ul>
</div>
</p>
<p><b>Claim Type</b>: Set automatically when creating a claim. It is there for reference, but cannot be changed, because it affects so many other fields. See <a href="claimtypes.html">Claim Types</a>.</p>
<p><b>Date of Service</b>: Defaults to the date of the last procedure listed on the claim.</p>
<p><b>Date Orig Sent</b>: The date the claim was originally sent.</p>
<p><b>Date Sent</b>: Populates with the date the claim was created, and updates when the claim is sent. When a claim is resent, the label changes to Date Resent and the date is updated.</p>
<p><b>Date Received</b>: The date the claim was received and processed.</p>
<p class="MarginBottomZero"><b>Resend</b>: Resend a claim. There are two options: </p>
<ul>
<li><b>The claim has not been accepted yet and I need to resend it</b>: Claim Correction Type (<a href="claimtabmisc.html">Edit Claim - Misc Tab</a>) will be set to <i>Original</i> and Date Resent will be set to today's date. The claim will be sent electronically.</li>
<li><b>The claim was accepted and I need to replace it with updated information</b>: Correction Type will be set to <i>Replacement</i>. The claim will be sent electronically.</li>
</ul>
<p class="MarginBottomGap">Click <b>Send</b> after selecting an option to finish resending claim.</p>
<p><div class="Note">Note: The Original Reference Num (<a href="claimtabmisc.html">Edit Claim - Misc Tab</a>) is required before a claim with a Correction Type of <i>Replacement</i> can be sent.</div>
</p>
<h2>Claim and Provider Information</h2>
<img src="images/claimFormTypeProviders.png" width="283" height="147"/><p><b>Clinic</b>: Read only. This matches the Clinic assigned to procedures in the claim.</p>
<p><b>Med/Dent</b>: There are three options; Dental, Medical, and Institutional. The default selection is based on the Claim Type. This setting is used for e-claims and determines whether the e-claim format is Dental, Medical, or Institutional.</p>
<p><b>Claim Form</b>: The <a href="claimforms.html">Claim Form</a> used when printing the claim. This does not affect what is sent electronically. For information on how a printed 1500 claim form is populated, see <a href="claimform1500.html">HCFA 1500 Claim Form</a>. For information on how printed ADA claim forms are populated, see <a href="claimformada2012.html">ADA 2012 and 2018 Claim Forms</a>. </p>
<p class="MarginBottomZero"><b>Billing Provider</b>: Billing provider who is sent or printed on the claim. The default billing provider follows the logic below. </p>
<ul class="MarginBottomGap">
<li>If the treating provider has a Claim Billing Prov Override, that provider is used (<a href="providerseditwindow.html">Provider</a>).</li>
<li>Otherwise, for clinics, if the procedure is assigned to a clinic, the Default Insurance Billing Dentist for that clinic is used (<a href="clinicsetup.html">Clinic List</a>).</li>
<li>Otherwise, the Default Insurance Billing Dentist for the practice is used (<a href="practice.html">Practice Setup</a>).</li>
</ul>
<p>Different providers can be assigned to each procedure. When providers are restricted to specific clinics (<a href="securityusers.html">User Edit</a>), only providers available for the claim's clinic are options.</p>
<p class="MarginBottomZero"><b>Treating Provider</b>: Treating provider who is sent or printed on the claim.  </p>
<ul class="MarginBottomGap">
<li>By default, is the last provider in the list of selected procedures who is not flagged as a secondary provider. If there are only providers flagged as a secondary provider, then the patient's primary provider is used. Some claim formats require a Treating Provider. Different providers can still be assigned to each procedure. When providers are restricted to specific Clinics, only providers available for the claim's Clinic are options.</li>
</ul>
<p class="MarginBottomZero"><b>Predeterm Benefits</b>: If a <a href="preauth.html">Preauthorization</a> has previously been sent, enter reference number for the preauthorization received from insurance. </p>
<ul class="MarginBottomGap">
<li>This may be <i>Claim Identifier (CLM01)</i> value from the <a href="claimtabmisc.html">Edit Claim - Misc Tab</a> of the Preauthorization. Verify with the carrier what value/identifier to use for the preauthorization. </li>
<li>This number shows on e-claims and printed claims (PreAuthString).</li>
<li>On the Claim Misc tab there is also a <i>Prior Authorization (rare)</i> field.</li>
</ul>
<h2>Insurance Plans</h2>
<img src="images/claimInsurancePlans.png" width="289" height="177"/><p><b>Insurance Plan</b>: Set when creating the claim and cannot be changed. If the claim is attached to the wrong insurance plan, delete the claim and recreate it.</p>
<p><b>Relationship</b>: The patient's relationship to the plan's subscriber, based on the value set in the patient's Edit Insurance Plan Window.</p>
<p><b>Other Coverage</b>: If there are multiple insurance carriers, this auto-populates. For instance, if the claim is to the primary insurance, and the patient also has secondary coverage, the secondary coverage shows. Click <b>Change</b> to select a different plan. Click <b>None</b> to remove this information from the claim.</p>
<h2> Enter Payment </h2>
<img src="images/claimEnterPaymentSplitClaim.png" width="154" height="162"/><p class="MarginBottomZero"><b>Enter Payment</b>:  </p>
<ul class="MarginBottomGap">
<li><b>As Total</b>: Receive a claim as a total payment amount. (Not available with PPO insurance plans).</li>
<li><b>By Procedure</b> (recommended): Receive a claim by itemizing the payment by procedure. (Not available with Capitation insurance plans).</li>
<li><b>Supplemental</b>: Enter additional payments on procedures already marked received. See <a href="claimpaymentsupplemental.html">Supplemental Insurance Payments</a>.</li>
<li><b>Split Claim</b>: Split the procedures on the claim into two separate claims. See <a href="claimpaymentsplit.html">Split Claim</a>.</li>
</ul>
<h2>Pending Payment</h2>
<img src="images/claimPayPending.png" width="125" height="89"/><p class="MarginBottomZero"><b>Pending Payment:</b> Select procedure and click an option to enter pending insurance underpayments or overpayments. Amounts entered affect estimated account balances. </p>
<ul class="MarginBottomGap">
<li><b>Ins Overpaid</b> Click to enter a pending insurance overpayment. Opens the window shown below. Enter the amount overpaid in the <i>Ins Overp</i> column. Amounts are added to the claim as a negative <i>PndSup</i> line item.</li>
<li><b>Ins Underpaid</b> Click to enter a pending insurance underpayment. Opens the window shown below. Enter the amount underpaid in the <i>Ins Under</i> column. Amounts are added to the claim as a positive <i>PndSup</i> line item.</li>
</ul>
<img src="images/claimInsPendingOverUnderPay.png" width="915" height="309"/><p><b>To Supplemental</b>: Change all Pending Supplemental (<i>PndSup</i>) payments to Supplemental (<i>Supp</i>).</p>
<h2>Procedures and Estimates</h2>
<img src="images/claimProcedures.png" width="915" height="164"/><p class="MarginBottomZero"><b>Procedures</b>: The procedures attached to this claim, along with billed fees and insurance estimate information. Double click a procedure to see details. See <a href="claimreceive.html">Receive Claim</a> for a description of each column. </p>
<ul class="MarginBottomGap">
<li><b>Add adjustment</b>: Right click on a procedure to create an adjustment. The preference, <i>Allow procedure adjustments from claim window</i>, must be enabled.</li>
<li><b>#</b>: The number of the procedure as ordered in claim. Procedures are sorted in the following order: <ol>
<li>Priority (highest to lowest based on the order of priority options). Does not appear on the claim. View or edit from the <a href="procedureedit.html">Edit Procedure</a> window.</li>
<li>Tooth number (no tooth number first, then lowest to highest)</li>
<li>Date (oldest to newest)</li>
 If multiple codes have the same priority, tooth number, and date then the order is random. It may be in the order charted but it may not. The order could even change. </ol>
</li>
<li><b>Date</b>: Service date of procedure.</li>
<li><b>Prov</b>: Provider attached to the <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a>. This is normally the treating provider.</li>
<li><b>Code</b>: Procedure code.</li>
<li><b>Tth</b>: Tooth number for associated procedure.</li>
<li><b>Description</b>: Procedure description.</li>
<li><b>Fee</b>: Procedure Fee billed to the patient.</li>
<li><b>Billed to Ins</b>: Fee amount billed to insurance. This may differ from Fee.</li>
<li><b>Deduct</b>: Deductible amount applied to the procedure.</li>
<li><b>Ins Est</b>: Estimated insurance payment.</li>
<li><b>Write-off</b>: Amount of write-off for procedure.</li>
<li><b>Pat Resp</b>: Only shows when <i>Show Patient Responsibility column in Edit Claim/Payment windows</i> is enabled in Preferences. Displays the patient responsibility for the procedure once an insurance payment is made (Fee - Ins Pay - Write-off = Pat Resp). This column does not consider numbers in the Ins Est field. Supplemental payments may show a negative patient responsibility as the fee is not duplicated on supplemental claimprocs.</li>
<li><b>Status</b>: Current claim status of the claim procedure, e.g: Recd (Received), Supp (Supplemental) etc.</li>
<li><b>Pmt</b>: Payment. An "X" indicates a finalized payment has been entered for the procedure.</li>
<li><b>Pay Tracking</b>: Only shows when <i>Show Payment Tracking column in the Edit Claim/Payment windows</i> is enabled in Preferences. Claim Payment Tracking status from <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a>. </li>
<li><b>Remarks</b>: Remarks from EOB.</li>
</ul>
<p class="MarginBottomZero"><b>Recalculate Estimates</b>: Recalculate benefit estimates. For example:  </p>
<ul class="MarginBottomGap">
<li>If procedures are treatment planned with the wrong percentages and a claim is created before fixing the percentages, estimates can be recalculated instead of deleting the claim.</li>
<li>If a fee schedule was originally incorrect, recalculate write-offs.</li>
<li>The fee billed updates on claims that have not been sent or received.</li>
</ul>
<div class="Note">Note: An orange exclamation mark appears next to the button when recalculation of claim estimates is suggested.</div>
<br/><br/><p>Medical claims: The Ins Est column can be misleading if the patient has one dental insurance plan listed first and one <a href="medicalins.html">Medical Insurance</a> plan listed second. In this particular situation, the Ins Est column always indicates 0, because it is showing the dental insurance estimates. To avoid this issue, ensure that the medical plan is listed first in the Family Module. </p>
<p class="MarginBottomZero">There are limits to the number of procedures that are sent with a claim.  </p>
<ul class="MarginBottomGap">
<li>Dental and medical e-claims are limited to 50 procedures. Claims with more than 50 procedures are blocked from sending.</li>
<li>Institutional e-claims are limited to 999 procedures. A separate claim must be created for additional procedures.</li>
<li>On printed claims, only as many procedures as can print on a single page (the claim form) can be sent. The printed ADA claim form is limited to 10 procedures.</li>
</ul>
<h2>Finalize Insurance Payments and Additional Payment Information</h2>
<img src="images/finalizeInsPay.png" width="915" height="112"/><p><b>View ERA</b>: Access <a href="claimsera835.html">ERAs</a> associated with the claim. ERAs can only be accessed when claim identifiers and service dates match.</p>
<p><b>View EOB</b>: View scanned EOBs for attached insurance payments. If there are more than one a selection list appears.</p>
<p><b>Batch</b>: Attach received claims to a batch insurance payment. See <a href="claimpayfinalize.html">Finalize Insurance Payment</a>.</p>
<p><b>This Claim Only</b>: Finalize payment by attaching only the current received claim to an insurance payment.</p>
<p><b>Reasons Underpaid</b>: Enter details if a claim does not pay as much as expected, enter details about why. This information shows on the patient's statement so they know why they have to pay more for their procedures.</p>
<h2>Tabs</h2>
<img src="images/claimTabs.png" width="307" height="38"/><p><b>General Tab</b>: Enter information about prosthetics, orthodontic work, and claim referrals. See <a href="claimtabgeneral.html">Edit Claim - General Tab</a>.</p>
<p><b>Attachments Tab</b>: Enter information about attached images and documents. If needed, attachment IDs should be added to the claim before sending claims electronically. See <a href="claimtabattach.html">Edit Claim - Attachments Tab</a>.</p>
<p><b>Misc Tab</b>: Enter information about Denti-Cal and other miscellaneous fields. See <a href="claimtabmisc.html">Edit Claim - Misc Tab</a>.</p>
<p><b>Medical Tab</b>: Enter information printed on medical claim forms, including the UB-04, which is usually for institutional claims. See <a href="claimmedical.html">Edit Claim - Medical Tab</a>.</p>
<p><b>Status History Tab</b>: Record custom claim tracking data. See <a href="claimtabstatus.html">Edit Claim - Status History Tab</a>.</p>
<h2>Print, Send, or Save Claim</h2>
<img src="images/claimSaveSend.png" width="915" height="53"/><p><b>Delete</b>: Delete a claim.</p>
<p><b>Label</b>: Print a label for the claim.</p>
<p><b>Preview</b>: Preview the claim as it would look on the printed claim form.</p>
<p><b>Print</b>: Print the claim. <div class="Note">Note: Printing a claim automatically changes its status to sent.</div>
</p>
<p><b>Send</b>: Send the claim electronically.</p>
<p><b>History</b>: View electronic claim message. Displays as raw data (X12).</p>
<p><b>OK</b>: Save the claim information.</p>
<p><b>Cancel</b>: Close the window without saving.</p>
</div>
</div>
</body>
</html>```
