# File: ./www.opendental.com/manual243/inspayeob.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Insurance Payment (EOB)</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('inspayeob','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/inspayeob.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/inspayeob.html" >v24.2</option><option value="https://www.opendental.com/manual241/inspayeob.html" >v24.1</option><option value="https://www.opendental.com/manual233/inspayeob.html" >v23.3</option><option value="https://www.opendental.com/manual232/inspayeob.html" >v23.2</option><option value="https://www.opendental.com/manual231/inspayeob.html" >v23.1</option><option value="https://www.opendental.com/manual224/inspayeob.html" >v22.4</option><option value="https://www.opendental.com/manual223/inspayeob.html" >v22.3</option><option value="https://www.opendental.com/manual222/inspayeob.html" >v22.2</option><option value="https://www.opendental.com/manual221/inspayeob.html" >v22.1</option><option value="https://www.opendental.com/manual214/inspayeob.html" >v21.4</option><option value="https://www.opendental.com/manual213/inspayeob.html" >v21.3</option><option value="https://www.opendental.com/manual212/inspayeob.html" >v21.2</option><option value="https://www.opendental.com/manual211/inspayeob.html" >v21.1</option><option value="https://www.opendental.com/manual205/inspayeob.html" >v20.5</option><option value="https://www.opendental.com/manual204/inspayeob.html" >v20.4</option><option value="https://www.opendental.com/manual203/inspayeob.html" >v20.3</option><option value="https://www.opendental.com/manual202/inspayeob.html" >v20.2</option><option value="https://www.opendental.com/manual201/inspayeob.html" >v20.1</option><option value="https://www.opendental.com/manual194/inspayeob.html" >v19.4</option><option value="https://www.opendental.com/manual193/inspayeob.html" >v19.3</option><option value="https://www.opendental.com/manual192/inspayeob.html" >v19.2</option><option value="https://www.opendental.com/manual191/inspayeob.html" >v19.1</option><option value="https://www.opendental.com/manual184/inspayeob.html" >v18.4</option><option value="https://www.opendental.com/manual183/inspayeob.html" >v18.3</option><option value="https://www.opendental.com/manual182/inspayeob.html" >v18.2</option><option value="https://www.opendental.com/manual181/inspayeob.html" >v18.1</option><option value="https://www.opendental.com/manual174/inspayeob.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Insurance Payment (EOB)</p></div>
<div class="GeneralPageContent">
<p>Verify claims attached to an insurance payment and view or attach EOBs.</p>
<p>In a <a href="claimedit.html">Claim</a>, double-click an insurance payment to edit. </p>
<img src="images/claimPaymentEOB.png" width="915" height="659"/><p>Alternatively, this window opens when clicking <b>Save</b> to finalize a payment from the <a href="editinspayment.html">Edit Insurance Payment</a> window. </p>
<h2>Finalizing Insurance Payments from Account Module</h2>
<p>When finalizing insurance payments from a <a href="claimedit.html">Claim</a> using the <b>Batch</b> or <b>This Claim Only</b> buttons, the window shown in the screenshot above is displayed. For detailed instructions on finalizing insurance payments from the Account Module, see <a href="claimpayfinalize.html">Finalize Insurance Payment</a>. </p>
<p><b>Payment Details</b>: Displays information entered on <a href="editinspayment.html">Edit Insurance Payment</a>. Click <b>Edit</b> to open the window again to change details.</p>
<p class="MarginBottomZero"><b>Attached to this Payment</b>: Claims currently attached to this payment. When clicking <b>Batch</b> from a <a href="claimedit.html">Claim</a>, all received claims not attached to a finalized payment are listed. By default, the list is sorted in the order claims were entered. </p>
<ul class="MarginBottomGap">
<li>Double-click a claim in the grid to open.</li>
<li>Right-click a row and select <b>Go to Account</b> to open the Account Module for the selected patient.</li>
<li>#: The order of the payment on the EOB.</li>
<li>Service Date: Date of Service on the claim.</li>
<li>Clinic: Clinic assigned to the claim.</li>
<li>Fee: Total billed fee of the claim.</li>
<li>Payment: The claim payment amount for this EOB.</li>
</ul>
<p><b>Up # / Down #</b>: Highlight a claim and click to move in the grid.</p>
<p><b>Refresh</b>: Update the claims in the grid to remove any claims that have been finalized or add any claims received since the window was opened.</p>
<p class="MarginBottomZero"><b>Detach</b>: Select claim(s) not associated with payment and click to disassociate from the payment. </p>
<ul class="MarginBottomGap">
<li>Once detached, claims cannot be reattached without deleting the payment and starting over. Alternatively, users can follow find instructions to Correct a Batch Payment on <a href="claimpaymentbatch.html">Batch Insurance Payment</a> after the payment is finalized.</li>
</ul>
<p><b>Total Payments</b>: The total of all claim payments associated with the current insurance payment. This should match the <i>Amount</i>.</p>
<p><b>View ERA</b>: Click to view associated ERA. Only appears if an ERA is attached. See <a href="claimseraeobdetails.html">EOB Claim Details</a>.</p>
<p><b>Scan EOB</b>: Click to scan or attach a copy of the insurance EOB. If an EOB is already attached, displays <b>View EOB</b> instead. Opens <a href="claimpaymenteobscan.html">Scan EOB</a>. </p>
<p><b>Delete</b>: Remove the finalized payment. If an insurance payment is deleted, received claims remain unattached until a new payment is created. Payment splits are not affected.</p>
<p>Click <b>Save</b> to finish finalizing an insurance payment or maintain changes.</p>
<h2>Finalizing Insurance Payments from Manage Module</h2>
<p>When finalizing a Batch Insurance Payment using the <b>Batch Ins</b> button from the Manage Module (see <a href="claimpaymentbatch.html">Batch Insurance Payment</a> for detailed instructions), the window in the screenshot below is displayed. Description for fields mentioned in the previous section are the same in this window. The following section describes additional fields. </p>
<img src="images/claimbatchattach.png" width="915" height="659"/><p><b>Attached to this Payment</b>: Lists any claims that have been attached to the payment.</p>
<p class="MarginBottomZero"><b>Refresh</b>: Click to update the Attached to this Payment and All Outstanding Claims grids. </p>
<ul class="MarginBottomGap">
<li> The Attached to this Payment grid is updated to remove any claims that have been finalized or add any claims received since the window was opened.</li>
<li>The All Outstanding Claims grid is updated to reflect filter changes.</li>
</ul>
<p><b>Attach</b>: Highlight a claim from the All Oustanding Claims Grid and click to attach to the <a href="claimpaymentbatch.html">Batch Insurance Payment</a>. The claim is moved to the Attached to this Payment grid.</p>
<p><b>Detach</b>: Highlight a claim in the Attached to this Payment grid to remove it from the batch payment.</p>
<p class="MarginBottomZero">Filters: Set criteria to limit claims that appear in the All Outstanding Claims Grid </p>
<ul class="MarginBottomGap">
<li><b>Carrier</b>: Enter the name in the insurance carrier name in the field or click <b>(...)</b> to pick from the <a href="carriers.html">Carriers</a> list. If it's possible a claim is missing, try search for a similar carrier (e.g., if BCBS, search for Blue Cross or similar). </li>
<li><b>Name</b>: Enter either the patient's first or last name to filter.</li>
<li><b>ClaimID</b>: Filter the outstanding claims by ClaimID. If known, enter the ClaimID.</li>
</ul>
<p class="MarginBottomZero"><b>All Outstanding Claims:</b> All claims, matching filter criteria, with a sent status or unfinalized payment for the insurance carrier. Claims are sorted first by carrier, then by patient. </p>
<ul class="MarginBottomGap">
<li>Right-click a row and select <b>Go to Account</b> to open the Account Module for the selected patient.</li>
<li>Service Date: Date of Service on the claim.</li>
<li>Clinic: Clinic assigned to the claim.</li>
<li>Fee: Total billed fee of the claim.</li>
<li>Payment: Total payment amount attached to the claim. Includes finalized and unfinalized amounts. Claims that haven't been received have a payment of 0. If a partial payment was finalized previously, this amount may not match the Payment amount once the claim is attached.</li>
</ul>
<p>Changes are saved when exiting the window.</p>
<p></p>
</div>
</div>
</body>
</html>```
