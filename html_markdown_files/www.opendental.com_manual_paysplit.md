# File: ./www.opendental.com/manual/paysplit.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Paysplit</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paysplit','payment','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/paysplit.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/paysplit.html" >v24.2</option><option value="https://www.opendental.com/manual241/paysplit.html" >v24.1</option><option value="https://www.opendental.com/manual233/paysplit.html" >v23.3</option><option value="https://www.opendental.com/manual232/paysplit.html" >v23.2</option><option value="https://www.opendental.com/manual231/paysplit.html" >v23.1</option><option value="https://www.opendental.com/manual224/paysplit.html" >v22.4</option><option value="https://www.opendental.com/manual223/paysplit.html" >v22.3</option><option value="https://www.opendental.com/manual222/paysplit.html" >v22.2</option><option value="https://www.opendental.com/manual221/paysplit.html" >v22.1</option><option value="https://www.opendental.com/manual214/paysplit.html" >v21.4</option><option value="https://www.opendental.com/manual213/paysplit.html" >v21.3</option><option value="https://www.opendental.com/manual212/paysplit.html" >v21.2</option><option value="https://www.opendental.com/manual211/paysplit.html" >v21.1</option><option value="https://www.opendental.com/manual205/paysplit.html" >v20.5</option><option value="https://www.opendental.com/manual204/paysplit.html" >v20.4</option><option value="https://www.opendental.com/manual203/paysplit.html" >v20.3</option><option value="https://www.opendental.com/manual202/paysplit.html" >v20.2</option><option value="https://www.opendental.com/manual201/paysplit.html" >v20.1</option><option value="https://www.opendental.com/manual194/paysplit.html" >v19.4</option><option value="https://www.opendental.com/manual193/paysplit.html" >v19.3</option><option value="https://www.opendental.com/manual192/paysplit.html" >v19.2</option><option value="https://www.opendental.com/manual191/paysplit.html" >v19.1</option><option value="https://www.opendental.com/manual184/paysplit.html" >v18.4</option><option value="https://www.opendental.com/manual183/paysplit.html" >v18.3</option><option value="https://www.opendental.com/manual182/paysplit.html" >v18.2</option><option value="https://www.opendental.com/manual181/paysplit.html" >v18.1</option><option value="https://www.opendental.com/manual174/paysplit.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Paysplit</p></div>
<div class="GeneralPageContent">
<p>Payment Splits (paysplits) allow income to be allocated to clinics, production, providers, or unearned income types.</p>
<p>In the <a href="payment.html">Payment</a> window, click <b>Add</b>, or double-click an existing paysplit to edit.</p>
<img src="images/paySplit.png" width="776" height="516"/><p>To change paysplit settings, see <a href="allocationssetup.html">Allocations Setup</a>. </p>
<p><b>Entry Date</b>: The date the paysplit is created. This date cannot be changed.</p>
<p><b>Payment Date</b>: The payment date as entered on the Payment window. </p>
<p><b>Amount</b>: The portion of the total payment to allocate to this paysplit.</p>
<p><b>Unearned Type</b>: Used to designate this split as as <a href="unearnedprepayment.html">Unearned / Prepayment</a> (e.g. prepayments). If there is no procedure attached to the paysplit, defaults to the type set in Preferences, <i>Default unearned type for unallocated paysplits</i>. Customize types in <a href="definitionspaysplitunearned.html">Definitions: PaySplit Unearned Types</a>.</p>
<p><b>Clinic</b>: The clinic to allocate the income from this paysplit to. Defaults to the clinic assigned to the payment. Set the <i>Default Clinic for patient payments</i> in Preferences.</p>
<p><b>Provider</b>: The provider to allocate the income from this paysplit to. Click the dropdown to change the provider and select by abbreviation or <b>[...]</b> to select by name. If none the paysplit will be marked as a prepayment. When providers are restricted to clinics, only providers available for the selected clinic are options.</p>
<p><div class="Note">Note: If a procedure or adjustment is attached to a new paysplit, the Clinic and Provider are inherited from the procedure or adjustment and overrides the preference, <i>Patient payments use</i>.</div>
</p>
<p><b>Patient</b>: The patient this paysplit applies to. All family members are listed. To select a patient that is not in the family, check the <b>Is from another family</b> box, then select the patient.</p>
<p><b>Edit Anyway</b>: This button only shows when opening an existing paysplit that is attached to a procedure and the <i>Paysplit</i> setting in Allocations Setup is set to <i>Rigorous</i>. Click to enable the Clinic, Provider, and Patient fields so they can be edited. The <i>Setup</i> security permission is required. <div class="Note">Note: To ensure income is allocated correctly, the Clinic and Provider should always be the same as the attached production item.</div>
</p>
<p><b>Procedure</b>: Information for the procedure currently attached to the paysplit. See Procedure section below for additional information and how to attach or detach procedures.</p>
<p><b>Adjustment</b>: Information for the adjustment currently attached to the paysplit. See Adjustment section below for additional information and how to attach or detach adjustments.</p>
<p><div class="Note">Note: A procedure or adjustment may be attached to a paysplit, but not both. To attach both, instead link the adjustment directly to the procedure (see Adjustment) then create a payment split and attach it to the procedure.</div>
</p>
<p><b>Attached to Payment Plan</b>: Check this box to attach this as a <a href="paymentplanpayment.html">Payment to a Payment Plan</a>.</p>
<p><b>OK</b>: Save changes made to this window. If the paysplit amount exceeds the procedure's remaining balance, clicking <b>OK</b> will prompt the user with an overpaid procedure warning.</p>
<p><b>Cancel</b>: Close the window without saving any changes.</p>
<h2>Procedure</h2>
<p>Attach or detach a procedure from a paysplit. </p>
<img src="images/paysplitProcedure.png" width="627" height="227"/><p><b>Attach</b> Click to view the <a href="selectprocedure.html">Select Procedure</a> window. Highlight a procedure to attach to the payment, then click <b>OK</b>. Treatment planned procedures only show when <i>Allow prepayments to allocate to treatment planned procedures</i> is enabled in Allocations Setup.</p>
<p><b>Detach</b>: Click to clear the procedure currently attached to the paysplit.</p>
<p class="MarginBottomZero">Procedure information: After a procedure is attached to the paysplit, information for the attached procedure will show. </p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Date of the <a href="procedureedit.html">Procedure</a>. For completed procedures this is the date completed. For treatment planned (TP) procedures this is normally the date the procedure was treatment planned, but it can be changed. </li>
<li><b>Provider</b>: Treating provider.</li>
<li><b>Treatment Area</b>: Treatment area displayed will vary depending the procedure (e.g., Tooth, Surface, etc). Shows the treatment area attached to the procedure.</li>
<li><b>Description</b>: Procedure code description.</li>
</ul>
<p class="MarginBottomZero">Payment Breakdown Information: Payment and estimate information for the attached procedure. Only attached items (e.g., payments, adjustments, etc) are counted in the payment breakdown. Shown for informational purposes so users can enter correct paysplit information. </p>
<ul class="MarginBottomGap">
<li><b>Fee</b>: Billed fee or capitation fee. </li>
<li><b>Writeoffs</b>: Write-offs or estimated write-offs of created claims.</li>
<li><b>Ins Paid</b>: Total insurance payments attached to the procedure.</li>
<li><b>Ins Est</b>: Outstanding insurance estimate of created claims.</li>
<li><b>Adjustments</b>: Total of adjustments attached to procedure.</li>
<li><b>Patient Paid</b>: Total patient payments attached to procedure</li>
<li><b>This Payment Split</b>: Amount being applied from the current paysplit.</li>
<li><b>Remaining</b>: Remaining procedure balance after all payplits (including the current paysplit), estimates, write-offs, and adjustments have been applied. A number in parentheses indicates a credit (i.e., an overpaid procedure).</li>
</ul>
<h2>Adjustment</h2>
<p>Attach or detach an adjustment from a paysplit.</p>
<img src="images/paySplitAdj.png" width="627" height="230"/><p><b>Attach</b>: Click to open the Adjust Select window (see below). Highlight an adjustment from a list of positive and negative adjustments that are not linked to a procedure. Click <b>OK</b> to attach the selected adjustment to the paysplit. The Attach option is only available if there is no other procedure or adjustment currently attached to the payment split. </p>
<p><b>Detach</b>: Click to clear the adjustment currently attached to the paysplit. </p>
<p class="MarginBottomZero">A summary of the currently attached adjustment is displayed. </p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Adjustment date.</li>
<li><b>Provider</b>: Provider assigned to the adjustment.</li>
<li><b>Adjust Amount</b>: Adjustment fee.</li>
<li><b>Paid Previously</b>: Total payments split to this adjustment (not including the current payment split).</li>
<li><b>This Payment Split</b>: Amount paid on this paysplit.</li>
<li><b>Remaining</b>: Remaining adjustment balance after all paysplits have been applied (including the current payment split).</li>
</ul>
<img src="images/paySplitAdjSelect.png" width="675" height="244"/><p class="MarginBottomZero">Highlight an adjustment to view a breakdown on the right. </p>
<ul class="MarginBottomGap">
<li><b>Amt Original</b>: Adjustment fee.</li>
<li><b>Already Used</b>: Total payments split to the adjustment (not including the current payment split).</li>
<li><b>Amt Available</b>: Adjustment balance after previous payments have been applied.</li>
<li><b>Current Split</b>: Amount paid on this paysplit.</li>
<li><b>Amt End</b>: Remaining adjustment balance after all paysplits have applied (including the current payment split).</li>
</ul>
</div>
</div>
</body>
</html>```
