# File: ./www.opendental.com/manual232/paymentplantxcredits.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Payment Plan Procedures and Credits</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paymentplantxcredits','paymentplanpatient','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/paymentplantxcredits.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/paymentplantxcredits.html" >v24.2</option><option value="https://www.opendental.com/manual241/paymentplantxcredits.html" >v24.1</option><option value="https://www.opendental.com/manual233/paymentplantxcredits.html" >v23.3</option><option value="https://www.opendental.com/manual232/paymentplantxcredits.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/paymentplantxcredits.html" >v23.1</option><option value="https://www.opendental.com/manual224/paymentplantxcredits.html" >v22.4</option><option value="https://www.opendental.com/manual223/paymentplantxcredits.html" >v22.3</option><option value="https://www.opendental.com/manual222/paymentplantxcredits.html" >v22.2</option><option value="https://www.opendental.com/manual221/paymentplantxcredits.html" >v22.1</option><option value="https://www.opendental.com/manual214/paymentplantxcredits.html" >v21.4</option><option value="https://www.opendental.com/manual213/paymentplantxcredits.html" >v21.3</option><option value="https://www.opendental.com/manual212/paymentplantxcredits.html" >v21.2</option><option value="https://www.opendental.com/manual211/paymentplantxcredits.html" >v21.1</option><option value="https://www.opendental.com/manual205/paymentplantxcredits.html" >v20.5</option><option value="https://www.opendental.com/manual204/paymentplantxcredits.html" >v20.4</option><option value="https://www.opendental.com/manual203/paymentplantxcredits.html" >v20.3</option><option value="https://www.opendental.com/manual202/paymentplantxcredits.html" >v20.2</option><option value="https://www.opendental.com/manual201/paymentplantxcredits.html" >v20.1</option><option value="https://www.opendental.com/manual194/paymentplantxcredits.html" >v19.4</option><option value="https://www.opendental.com/manual193/paymentplantxcredits.html" >v19.3</option><option value="https://www.opendental.com/manual192/paymentplantxcredits.html" >v19.2</option><option value="https://www.opendental.com/manual191/paymentplantxcredits.html" >v19.1</option><option value="https://www.opendental.com/manual184/paymentplantxcredits.html" >v18.4</option><option value="https://www.opendental.com/manual183/paymentplantxcredits.html" >v18.3</option><option value="https://www.opendental.com/manual182/paymentplantxcredits.html" >v18.2</option><option value="https://www.opendental.com/manual181/paymentplantxcredits.html" >v18.1</option><option value="https://www.opendental.com/manual174/paymentplantxcredits.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Payment Plan Procedures and Credits</p></div>
<div class="GeneralPageContent">
<p>Associate procedures to a Patient Payment Plan in order to determine the Pay Plan Credit applied to a patient's account balance. </p>
<p>In a <a href="paymentplanpatient.html">Patient Payment Plan</a>, click <b>View Tx Credits</b>.</p>
<img src="images/payplanProceduresCredits.png" width="915" height="371"/><p>The total amount of credits attached determines the amount subtracted from the patient balance (PayPln: Credit). See Attaching Payment Plan Credits section for instructions on attaching Pay Plan Credits.</p>
<p><b>Print</b>: Print a list of the procedures and credits that currently show in the Available Procedures/Payment Plan Credits grid.</p>
<p><b>Hide Unattached Procedures</b>: Only show procedures that are already credited to this plan.</p>
<p><b>Show procedures that have not been explicitly paid off</b>: Only show procedures with an estimated patient portion after insurance estimates, write-offs, and explicitly attached adjustments and payments are applied. Unallocated credits (i.e., adjustments, insurance payments, or patient payments) are not included in the <i>Rem Before</i> amounts. Alternatively, run the <a href="incometransfermanager.html">Income Transfer Manager</a> to allocate income prior to attaching treatment credits.</p>
<p><b>Available Procedures</b>: Procedures with a <i>Rem Before</i> amount other than $0 are listed in yellow. Any treatment credits attached to other Patient Payment Plans are considered in the <i>Rem Before</i> amount. </p>
<p class="MarginBottomZero"><img src="images/payPlanCreditAvailProcs.png" width="369" height="112"/></p>
<ul class="MarginBottomGap">
<li>Date: The procedure date.</li>
<li>Provider: Abbreviation of the provider assigend to the procedure.</li>
<li>Stat: The status of the procedure. C = complete. TP = treatment planned.<br/></li>
<li>Code: Procedure code.</li>
<li>Fee: Procedure amount (i.e., fee billed to account before write-offs, adjustments, etc).</li>
<li>Rem Before: The estimated patient portion after insurance estimates, write-offs, adjustments, and payments. This includes adjustments or payments not explicitly attached to the procedure but are applied using first in/first out logic (FIFO). FIFO logic is not applied to treatment planned procedures.<br/><div class="Note">Note: <ul>
<li>For treatment planned procedures, Rem Before includes <a href="discountplan.html">Discount Plan</a> adjustments but not <a href="treatmentplandiscounts.html">TP Procedure Discounts</a>. Manually enter the correct amount after TP procedure discounts when adding Tx Credits for these procedures.</li>
<li>To ensure the <i>Rem Before</i> amounts are as accurate as possible, run the Income Transfer Manager before creating Payment Plan Credits. Any unallocated income and adjustments (including insurance payments entered using the As Total option) is transfered to procedures, updating the <i>Rem Before</i> amounts.</li>
</ul>
</div>
</li>
</ul>
<p><b>Payment Plan Credits</b>: View all credits (blue) attached to this plan.</p>
<p class="MarginBottomZero"><img src="images/payPlanCreditAttached.png" width="397" height="112"/></p>
<ul class="MarginBottomGap">
<li>Credit Date: The date the credit will appear on the account.</li>
<li>Amount: The total amount of credit applied. Typically the Rem Before and Amount match.</li>
<li>Rem After: If attached to a procedure, the remaining amount due on the procedure after the credit is applied. If the Credit and Rem Before are the same, this should be zero.</li>
<li>Note: The note entered with the credit information.</li>
</ul>
<p>Payment Plan adjustments show as credits on the date they are created and include an adjustment note.</p>
<img src="images/payplanTxCreditsAdj.png" width="739" height="71"/><p><b>Credit Information</b>: Add, update, or remove credits in the Payment Plan Credit area. Credits can be attached to available procedures or unallocated (not recommended). If unallocated, Payment Plan payments are not split to specific adjustments or procedures.</p>
<p><img src="images/PayPlanCreditInfo.png" width="175" height="294"/><div class="Note">Note: <ul>
<li>Positive adjustments must be attached to procedures (e.g., finance charges or sales tax) in order to include them in the Payment Plan principal balance.</li>
<li>Payments can only be made to payplan charges when credits are attached to procedures if Paysplits is set to <i>Rigorous</i> in <a href="allocationssetup.html">Allocations Setup</a>.</li>
</ul>
</div>
</p>
<ul>
<li><b>Code</b>: If the credit is attached to a procedure code, the code is shown. Otherwise <i>Unattached</i> is shown to indicate unallocated.</li>
<li><b>Date</b>: This date determines when the credit is applied to the account. If attached to a completed procedure, it defaults to the completed procedure date. If attached to a treatment planned procedure, it shows None but will automatically update once set complete. If left blank, it defaults to today's date. <br/><div class="Note">Note: Backdating Payment Plan Credits or changing Payment Plan Credits in the past changes historical aging.</div>
</li>
<li><b>Amt</b>: The total credit amount to apply.</li>
<li><b>Note</b>: If attached to a procedure, defaults to the procedure code and a shorthand description. If credits show in the patient's account grid this note shows in the Description column for PayPlan: Credit line items.</li>
</ul>
<br/><p>To add a credit for a procedure, highlight the procedure first. The credit fields populate with the procedure information. Modify if needed, then click <b>Add</b>. A procedure can only be attached to one Payment Plan. It cannot be attached to both a patient Payment Plan and dynamic Payment Plan.</p>
<p><b>Add</b>: Click to add Tx credits for the selected procedure(s). The button is <b>Update</b> instead if selecting a procedure with attached Tx Credits.</p>
<p><b>Update</b>: Select an existing Tx Credit row and type any changes into Credit Information fields. Click to apply changes to the selected Tx Credit.</p>
<p><b>Delete</b>: Select existing Tx Credit rows and click to delete.</p>
<p><b>Clear</b>: Click to deselect all rows currently selected in the grid.</p>
<p><div class="Note">Note: Updating a Payment Plan Adjustment does not automatically update the Amortization Schedule or the patient account. Manually update the adjustment in these places.</div>
</p>
<h2>Attaching Treatment Credits</h2>
<p class="MarginBottomZero">To attach the total <i>Rem Before</i> balance of a procedure: </p>
<ol class="MarginBottomGap">
<li>From the <a href="paymentplanpatient.html">Patient Payment Plan</a> window, click <b>View Tx Credits</b>.</li>
<li>Select procedure(s) from the <i>Available Procedures</i> area. Click + drag or Ctrl + click to select multiple procedures.</li>
<li>Click <b>Add</b>. </li>
<li>Repeat for any additional procedures.</li>
<li>Click <b>OK</b> to save Tx Credits to the Payment Plan.</li>
</ol>
<img src="images/payPlanTxCreditTotal.png" width="757" height="70"/><p class="MarginBottomZero">To attach treatment credit for a partial balance: </p>
<ol class="MarginBottomGap">
<li>From the Patient Payment Plan window, click <b>View Tx Credits</b>.</li>
<li>Select the procedure from the <i>Available Procedures</i> area.</li>
<li>Enter the Tx Credit to be applied to the procedure in the <b>Amt</b> field of the <i>Credit Information</i> area.</li>
<li>Click <b>Add</b>.</li>
<li>Repeat for any additional procedures.</li>
<li>Click <b>OK</b> to save Tx Credits to the Payment Plan.</li>
</ol>
<img src="images/payPlanTxCreditPartial.png" width="757" height="70"/><p class="MarginBottomZero">To attach an unallocated credit: </p>
<ol class="MarginBottomGap">
<li>From the Patient Payment Plan window, click <b>View Tx Credits</b>.</li>
<li>Click <b>Clear</b> to ensure no rows are selected.</li>
<li>Enter the Tx Credit amount in the <b>Amt</b> field of the <i>Credit Information</i> area.</li>
<li>Click <b>Add</b>.</li>
<ul>
<li>If <i>Rigorous</i> Paysplits are enabled in <a href="allocationssetup.html">Allocations Setup</a>, users receive a warning. Unallocated Tx Credits are not allowed with this preference. Follow the steps above to attach to a procedure instead. </li>
</ul>
<li>If Tx Credits need to be attached to procedures, follow steps above to do so.</li>
<li>Click <b>OK</b> to save Tx Credits to the Payment Plan.</li>
</ol>
<img src="images/payPlanTxCreditUnattached.png" width="757" height="70"/><p>A warning displays if a procedure's provider is different than the payment plan's provider. If the user proceeds (clicks <b>Yes</b>) the Payment Plan provider is assigned to the pay. Future payment splits, however, will be allocated to the procedure provider when the Paysplits Allocations preference is set to something other than <i>Rigorous</i>. Income transfers may also be incorrect. See <a href="paymentplanpatientfaq.html">Payment Plan Q and A</a>.</p>
<h2>Reversals / Detaching Treatment Credits</h2>
<p>Open Dental does not currently support automatic reversals for attaching Payment Plan Credits to Payment Plans, but reversals can be made manually by detaching treatment credits.</p>
<p class="MarginBottomZero">To detach treatment credits:  </p>
<ol class="MarginBottomGap">
<li>From the Patient Payment Plan window, click <b>View Tx Credits</b>.</li>
<li>Select an existing <i>Payment Plan Credit</i> row.</li>
<li>Update or delete the Tx Credit.  <ul>
<li>To update the Tx Credit: Type an updated <i>Amt</i> and click <b>Update</b>.</li>
<li>To delete the Tx Credit: Click <b>Delete</b>.</li>
</ul>
</li>
<li>Repeat steps to update or delete any additional Tx credits.  <ul>
<li>Users may also wish to attach new Tx Credits to ensure the <i>Total Amount</i> of the Payment Plan still matches the <i>Total Credits Attached</i>. See steps above for attaching Treatment Credits. </li>
</ul>
</li>
<li>Click <b>OK</b> to close the Payment Plan Procedures and Credits window.</li>
</ol>
</div>
</div>
</body>
</html>```
