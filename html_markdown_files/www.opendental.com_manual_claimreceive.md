# File: ./www.opendental.com/manual/claimreceive.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Receive Claim</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimreceive','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/claimreceive.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/claimreceive.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimreceive.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimreceive.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimreceive.html" >v23.2</option><option value="https://www.opendental.com/manual231/claimreceive.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimreceive.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimreceive.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimreceive.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimreceive.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimreceive.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimreceive.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimreceive.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimreceive.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimreceive.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimreceive.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimreceive.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimreceive.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimreceive.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimreceive.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimreceive.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimreceive.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimreceive.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimreceive.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimreceive.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimreceive.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimreceive.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimreceive.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Receive Claim</p></div>
<div class="GeneralPageContent">
<p>Individual insurance claims can be received through the Account Module.</p>
<p>In the <a href="claimedit.html">Edit Claim</a> window, at the upper-right, is an Enter Payment area.</p>
<img src="images/claimEnterPayment.png" width="915" height="158"/><p class="MarginBottomZero">Click one of the three buttons.  </p>
<ul class="MarginBottomGap">
<li><b>As Total</b>: Enter a total payment amount. See As Total below for details.</li>
<li><b>By Procedure</b> (recommended): Itemize the payment by procedure. See By Procedure below for details.</li>
<li><b>Supplemental</b>: Add additional payments to procedures already received. See <a href="claimpaymentsupplemental.html">Supplemental Insurance Payments</a>.</li>
</ul>
<p>When payments have been entered, paid procedures and the claim will change to a status of <i>Received</i>. </p>
<p>When entering payments, it is recommended to include all EOB information, including remarks. This way all information is available in Open Dental and accessible from any computer. When a patient has questions, users can quickly determine what was or was not paid and why. </p>
<p class="MarginBottomZero">Also see:  </p>
<ul class="MarginBottomGap">
<li><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our Webinar: <a href="https://youtu.be/eiMgxXTqkn8">Claim Payments</a></li>
<li><a href="claimpaymentbatch.html">Batch Insurance Payment</a></li>
<li><a href="insinterest.html">Interest on Insurance Payments</a></li>
<li><a href="claimpaymentincorrectproc.html">Incorrect Procedures on Claim</a></li>
<li>Claims with No Payment (See below)</li>
<li>Insurance Pays on Alternate Procedure Codes (See below)</li>
</ul>
<h2>As Total</h2>
<p>Entering payments As Total is available for insurance plans with a type of <i>Category Percentage, </i><i>Medicaid or Flat Co-pay, </i> and <i>Capitation. </i></p>
<p>Entering an As Total payment differs depending on the <a href="allocationssetup.html">Allocations Setup</a> for <i>Claim Pay by Total splits automatically</i>. It is recommended that this setting is enabled when using Line Item Allocation (i.e., Rigorous or Auto-Split) and entering As Total payments. </p>
<p class="MarginBottomZero"><b>When <i>Claim Pay by Total splits automatically</i> is enabled:</b></p>
<ol class="MarginBottomGap">
<li>Click <b>As Total</b>. </li>
<li>Enter the total amount paid, then click <b>OK</b>. <br/><img src="images/AsTotalAmount.png" width="236" height="136" class="ImageInParagraph"/></li>
<li>The Enter Payment window opens, and Open Dental automatically assigns amounts to each procedure. Amounts can be changed if desired, or click <b>Save</b>, without making changes, to accept the amounts.<br/><img src="images/AsTotalSplit.png" width="915" height="308" class="ImageInParagraph"/></li>
<li>The paid amounts are shown split to each procedure in the Edit Claim window.<br/><img src="images/AsTotalOnClaim.png" width="915" height="102" class="ImageInParagraph"/></li>
<li>Once complete, continue to <a href="claimpayfinalize.html">Finalize Insurance Payment</a>.</li>
</ol>
<p class="MarginBottomZero"><b>When <i>Claim Pay by Total splits automatically</i> is disabled:</b></p>
<ol class="MarginBottomGap">
<li>Click <b>As Total</b>. </li>
<li>The <a href="claimprocedure.html">Edit Claim Procedure</a> window opens Enter the full Insurance Paid amount, then click <b>Save</b>. <br/><img src="images/AsTotalNotSplit.png" width="396" height="128" class="ImageInParagraph"/></li>
<li>The total payment is shown as a new line item in the Edit Claim window.<br/><img src="images/AsTotalOnClaimNotSplit.png" width="915" height="109" class="ImageInParagraph"/></li>
<li>Once complete, continue to <a href="claimpayfinalize.html">Finalize Insurance Payment</a>.</li>
</ol>
<h2>By Procedure</h2>
<p>Entering payments <b>By Procedure</b> is available for all insurance plan types except Capitation. It is required for PPO plans to track write-offs.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>To post payment to all procedures on the claim, click <b>By Procedure</b>. Alternatively, highlight specific procedures first.</li>
<li>The Enter Payment window opens. Edit insurance payment information as needed, then click <b>Save</b>.<br/><img src="images/ByProcedureEnterPayment.png" width="915" height="308" class="ImageInParagraph"/><br/><ul>
<li><b>Fee</b>: Fee billed to patient.</li>
<li><b>Billed to Ins</b>: Fee billed to insurance.</li>
<li><b>Deduct</b>: Automatically calculated based on benefit information. Click in the cell to manually edit. To reassign a deductible to a different procedure, highlight the procedure, then click Deductible.</li>
<li><b>Allowed</b>: Enter the insurance allowed fee for out-of-network plans. Requires the <i>Allow Editing Fee Schedule While Receiving Claims</i> permission. Entered amounts are used to generate <a href="bluebooksetup.html">Blue Book</a> estimates for out-of-network insurance plans. <ul>
<li> If Blue Book is enabled fees are saved to the database. </li>
<li>If Legacy Blue Book is enabled, fees are automatically added to the Out of Network fee schedule for the insurance plan. Requires the <i>Fee Schedule Edit</i> permission. </li>
</ul>
</li>
<li><b>Ins Pay</b>: Automatically calculated based on benefit estimates. Click in the cell to edit.</li>
<li><b>Write-off</b>: Automatically calculated. Click in the cell to edit or click Write Off in the lower left to create a write-off for all unpaid amounts by procedure (Fee Billed - Ins Pay).</li>
<li><b>Pat Resp</b>: Displays patient responsibility for the procedure (<span class="codeblock">Fee - Ins Pay - Write-off</span>) Only considers amounts on the current line item. Only displays when enabled in <a href="preferences.html">Preferences</a>.</li>
<li><b>Pay Tracking</b>: Click the cell to select from a list of options (defined in <a href="definitionsclaimpaytracking.html">Definitions: Claim Payment Tracking</a>). Useful to track why payments are rejected. Only displays when enabled in Preferences.</li>
<li><b>Remarks</b>: Click in the cell to enter remarks for any procedure that has a remark in the EOB.</li>
<li>Double-click on Date, Prov, Code, Th, Description, Fee Billed, or Status to open the <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a> and edit information.</li>
</ul>
</li>
<li>If not all procedures have been marked received, users receive a warning. <br/><img src="images/claimProceduresNotReceived.png" width="406" height="146" class="ImageInParagraph"/><br/><ul>
<li>Click <b>Yes</b> to mark all procedures received, changing the Claim Status to <i>Received</i>.</li>
<li>Click <b>No</b> to leave procedures unreceived. This leaves the claim in a <i>Sent - Verified</i> status and it remains on the <a href="reportoutins.html">Outstanding Insurance Claims Report</a>. </li>
</ul>
</li>
<li>Payments show associated with their procedures on the Edit Claim window. <br/><img src="images/ByProcedureOnClaim.png" width="915" height="102" class="ImageInParagraph"/></li>
<li>Once complete, continue to <a href="claimpayfinalize.html">Finalize Insurance Payment</a>.</li>
</ol>
<h2>Claims with No Payment</h2>
<p>If insurance does not pay on a claim, receive the procedure(s) using the As Total or By Procedure steps above. Enter 0 for each procedure. This marks the claim as <i>Received</i> so it is no longer considered outstanding.</p>
<p>If the claim is associated with an insurance plan that the practice does not receive assignment of benefits for (i.e., insurance payment does not go to the practice), enable the preference <i>Auto receive claims with no assignment of benefits</i>. When enabled, claims are immediately marked received with $0 payment once they have been marked as sent. </p>
<p class="MarginBottomZero">To scan an EOB associated with the zero payment, the preference <i> Show $0 claim payments in Batch Ins for number days</i> must be enabled.  </p>
<ul class="MarginBottomGap">
<li>If it is within the number of days entered, payment can be finalized two ways:</li>
<ul>
<li>For single claims, use<i>This Claim Only</i> in the Claim window. </li>
<li>For batch claims, use Manage Module, <a href="claimpaymentbatch.html">Batch Ins</a>. </li>
</ul>
<li>If it is outside the number of days entered, create a supplemental payment with an amount of 0 and finalize using This Claim Only or Manage Module, Batch Ins.</li>
</ul>
<p><div class="Note">Note: The preference, <i> Show $0 claim payments in Batch Ins for number days</i>, uses the Payment Date of the <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a>. If the Payment Date is outside of the range, the claim is excluded from the All Outstanding Claimsarea of the <a href="inspayeob.html">Insurance Payment (EOB)</a> window and is not included when finalizing payment from a claim. </div>
</p>
<h2>Insurance Pays on Alternate Procedure Codes</h2>
<p class="MarginBottomZero">If insurance pays on different procedure codes than they were sent (e.g., A BW and Pano were filed, but insurance paid on FMX), add the payment to the procedures that were charted. Claims and procedures do not need to be recreated. </p>
<ol class="MarginBottomGap">
<li>Enter the payment by Procedure. </li>
<li>Allocate the payment to the procedures that were actually completed. Payment may need to be split differently than shown in the EOB. </li>
<li>Add a note in the <i>Remarks</i> section. </li>
<li>Finalize the payment as normal.</li>
</ol>
<h2>Preferences to Consider</h2>
<p>The following <a href="preferences.html">Preferences</a> affect users when receiving payment for an insurance claim:</p>
<p class="MarginBottomZero"><b>Disallow write-offs greater than the adjusted procedure fee</b><br/> When enabled, users are prevented from entering write-offs that exceed the adjusted procedure fee. The following warning appears when users enter write-offs that are too high: <br/><img src="images/claimReceiveExcessWO.png" width="704" height="156" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li>Click <b>OK</b> to return to the Enter Payment window and correct the write-off amount before continuing to receive the claim.</li>
</ul>
<p class="MarginBottomZero"><b>Initial primary insurance payment and write-off cannot exceed adjusted procedure fee</b><br/> When enabled, users are prevented from entering primary insurance payments and write-offs that total higher than the adjusted procedure fee. The following warning appears if payments are entered that exceed the adjusted procedure fee: <br/><img src="images/claimReceiveOverpay.png" width="704" height="190" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li>Click <b>OK</b> to return to the Enter Payment window and correct the payment or write-off amount before continuing to receive the claim.</li>
</ul>
</div>
</div>
</body>
</html>```
