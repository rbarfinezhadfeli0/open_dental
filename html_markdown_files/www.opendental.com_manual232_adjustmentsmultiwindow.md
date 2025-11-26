# File: ./www.opendental.com/manual232/adjustmentsmultiwindow.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Add Multiple Adjustments</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('adjustmentsmultiwindow','adjustments','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/adjustmentsmultiwindow.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/adjustmentsmultiwindow.html" >v24.2</option><option value="https://www.opendental.com/manual241/adjustmentsmultiwindow.html" >v24.1</option><option value="https://www.opendental.com/manual233/adjustmentsmultiwindow.html" >v23.3</option><option value="https://www.opendental.com/manual232/adjustmentsmultiwindow.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/adjustmentsmultiwindow.html" >v23.1</option><option value="https://www.opendental.com/manual224/adjustmentsmultiwindow.html" >v22.4</option><option value="https://www.opendental.com/manual223/adjustmentsmultiwindow.html" >v22.3</option><option value="https://www.opendental.com/manual222/adjustmentsmultiwindow.html" >v22.2</option><option value="https://www.opendental.com/manual221/adjustmentsmultiwindow.html" >v22.1</option><option value="https://www.opendental.com/manual214/adjustmentsmultiwindow.html" >v21.4</option><option value="https://www.opendental.com/manual213/adjustmentsmultiwindow.html" >v21.3</option><option value="https://www.opendental.com/manual212/adjustmentsmultiwindow.html" >v21.2</option><option value="https://www.opendental.com/manual211/adjustmentsmultiwindow.html" >v21.1</option><option value="https://www.opendental.com/manual205/adjustmentsmultiwindow.html" >v20.5</option><option value="https://www.opendental.com/manual204/adjustmentsmultiwindow.html" >v20.4</option><option value="https://www.opendental.com/manual203/adjustmentsmultiwindow.html" >v20.3</option><option value="https://www.opendental.com/manual202/adjustmentsmultiwindow.html" >v20.2</option><option value="https://www.opendental.com/manual201/adjustmentsmultiwindow.html" >v20.1</option><option value="https://www.opendental.com/manual194/adjustmentsmultiwindow.html" >v19.4</option><option value="https://www.opendental.com/manual193/adjustmentsmultiwindow.html" >v19.3</option><option value="https://www.opendental.com/manual192/adjustmentsmultiwindow.html" >v19.2</option><option value="https://www.opendental.com/manual191/adjustmentsmultiwindow.html" >v19.1</option><option value="https://www.opendental.com/manual184/adjustmentsmultiwindow.html" >v18.4</option><option value="https://www.opendental.com/manual183/adjustmentsmultiwindow.html" >v18.3</option><option value="https://www.opendental.com/manual182/adjustmentsmultiwindow.html" >v18.2</option><option value="https://www.opendental.com/manual181/adjustmentsmultiwindow.html" >v18.1</option><option value="https://www.opendental.com/manual174/adjustmentsmultiwindow.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Add Multiple Adjustments</p></div>
<div class="GeneralPageContent">
<p>Use the Add Multiple Adjustments window to add adjustments for multiple procedures at once.</p>
<p>In the <a href="account.html">Account Module</a> toolbar, click the <a href="adjustments.html">Adjustment</a> dropdown and select <b>Add Multiple</b>.</p>
<img src="images/adjAddMultiWindow.png" width="883" height="649"/><p class="MarginBottomZero">Alternatively: </p>
<ul class="MarginBottomGap">
<li>Select multiple procedures, click the Adjustment dropdown, and select Add Multiple.</li>
<li>Select multiple procedures, then right-click, and select Add Adjustment.</li>
</ul>
<h2>Adjustment Info</h2>
<p>In the Adjustment Info section, enter the adjustment details.</p>
<img src="images/adjMultiInfo.png" width="861" height="222"/><p><b>Date</b>: Typically the same as the entry date. Modifying this date could potentially change historical data. Date changes must be made prior to clicking Add Adjustment for the proper date to display.</p>
<p class="MarginBottomZero"><b>Amount / Percent</b>: The amount of the adjustment to attach to the selected procedure. Select a radio button to further define the adjustment amount. <i>Adjustment Create </i><a href="permissions.html">Permission</a> is required to create an adjustment other than $0. </p>
<ul class="MarginBottomGap">
<li>Fixed Amount: Each adjustment will be fixed dollar amount.</li>
<li>Percent of Remaining Balance: Each adjustment will be a percentage of each procedure's unpaid portion, i.e., Billed Fee - (Ins Est or Ins Paid + Write-off + Pat Paid + Other Adj). No adjustment will be added to procedures with a negative patient portion (credit) or a patient portion of zero.</li>
<li>Percent of Fee: Each adjustment will be a percentage of the attached procedure's fee (does not consider insurance write-off).</li>
</ul>
<p><b>Provider</b>: Provider assigned to the adjustments. Defaults to inherit the provider on the attached procedure. Click the dropdown or [...] to select a different provider. This will affect the production of the provider.</p>
<p><b>Clinic</b>: Clinic assigned to the adjustments. Defaults to inherit the clinic on the attached procedure. Click the dropdown or [...] to select a different clinic. This will affect the production of the clinic.</p>
<p><div class="Note">Note: The clinic and provider of the adjustment must match the attached procedure. If the provider and clinic do not match, the procedure value will not be updated and the adjustment will be considered a separate charge when a payment is applied.</div>
</p>
<p><b>Additions</b>: List of adjustment types that will increase the procedure fee. Customize options in <a href="definitionsadjtypes.html">Definitions: Adj Types</a>.</p>
<p><b>Subtractions</b>: List of adjustment types that will decrease the procedure fee. Customize options in Definitions, Adj Types.</p>
<h2>Account Entries, Note, and More</h2>
<p>In the bottom section of the Add Multiple Adjustment window, select procedures to apply adjustments, add note, add adjustments, and more.</p>
<img src="images/adjMultiAccountEntriesNote.png" width="833" height="379"/><p class="MarginBottomZero"><b>Account Entries Grid</b>: Select procedure to attach to adjustment. Completed procedures with a remaining balance. To filter the list, use the Credit Filter radio buttons. Defaults to include all credits when the Adjustments preference in <a href="allocationssetup.html">Allocations Setup</a> is set to <i>Manual</i>. </p>
<ul class="MarginBottomGap">
<li>Only allocated credits: Show all procedures that do not have enough attached credits (i.e., paysplits, adjustments) to cover the full cost of the procedure (e.g., procedures that have attached paysplits that only cover part of the cost).</li>
<li>Include all credits: Show all procedures that are not paid off using first in/first out logic. This logic applies when credits in a payment are not explicitly attached/allocated to procedures.</li>
<li>Exclude all credits: Show all procedures on this patient's account, regardless of remaining balance. </li>
</ul>
<p><b>Note</b>: Custom text that appears on each adjustment. To show this note on statements enable the preference, <i>Show notes for adjustments</i>.</p>
<p><b>Add</b>: Click to create adjustments in the Account Entries Grid for selected procedures with the entered Adjustment Info and Note. Adjustments are not yet posted.</p>
<p><b>Update</b>: Update adjustments based on the settings in Adjustment Info. This allows users to alter adjustments as needed before saving.</p>
<p><b>Delete</b>: Select adjustment(s) and click to delete from the Account Entries grid.</p>
<p><b>OK</b>: Save changes and post adjustment(s) to the patient's account. If adjustment exceeds the estimated patient portion remaining, users receive an <i>Overpaid Procedure Warning</i>.</p>
<p><b>Cancel</b>: Close the window without saving changes.</p>
</div>
</div>
</body>
</html>```
