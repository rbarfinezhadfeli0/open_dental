# File: ./www.opendental.com/manual243/depositslip.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Deposit Slip</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('depositslip','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/depositslip.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/depositslip.html" >v24.2</option><option value="https://www.opendental.com/manual241/depositslip.html" >v24.1</option><option value="https://www.opendental.com/manual233/depositslip.html" >v23.3</option><option value="https://www.opendental.com/manual232/depositslip.html" >v23.2</option><option value="https://www.opendental.com/manual231/depositslip.html" >v23.1</option><option value="https://www.opendental.com/manual224/depositslip.html" >v22.4</option><option value="https://www.opendental.com/manual223/depositslip.html" >v22.3</option><option value="https://www.opendental.com/manual222/depositslip.html" >v22.2</option><option value="https://www.opendental.com/manual221/depositslip.html" >v22.1</option><option value="https://www.opendental.com/manual214/depositslip.html" >v21.4</option><option value="https://www.opendental.com/manual213/depositslip.html" >v21.3</option><option value="https://www.opendental.com/manual212/depositslip.html" >v21.2</option><option value="https://www.opendental.com/manual211/depositslip.html" >v21.1</option><option value="https://www.opendental.com/manual205/depositslip.html" >v20.5</option><option value="https://www.opendental.com/manual204/depositslip.html" >v20.4</option><option value="https://www.opendental.com/manual203/depositslip.html" >v20.3</option><option value="https://www.opendental.com/manual202/depositslip.html" >v20.2</option><option value="https://www.opendental.com/manual201/depositslip.html" >v20.1</option><option value="https://www.opendental.com/manual194/depositslip.html" >v19.4</option><option value="https://www.opendental.com/manual193/depositslip.html" >v19.3</option><option value="https://www.opendental.com/manual192/depositslip.html" >v19.2</option><option value="https://www.opendental.com/manual191/depositslip.html" >v19.1</option><option value="https://www.opendental.com/manual184/depositslip.html" >v18.4</option><option value="https://www.opendental.com/manual183/depositslip.html" >v18.3</option><option value="https://www.opendental.com/manual182/depositslip.html" >v18.2</option><option value="https://www.opendental.com/manual181/depositslip.html" >v18.1</option><option value="https://www.opendental.com/manual174/depositslip.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Deposit Slip</p></div>
<div class="GeneralPageContent">
<p>Deposits slips can be created for patient payments and insurance payments.</p>
<p>In the <a href="manage.html">Manage Module</a>, click <b>Deposits</b>.</p>
<img src="images/depositSlipList.png" width="456" height="187"/><p>A dated list of all deposits ever made is shown. Use the Clinic dropdown menu to filter the list by <a href="clinics.html">Clinics</a>.</p>
<p>For each deposit, a Deposit Slip can be printed with bank account information. See <a href="sheetsdepositslip.html">Deposit Slip Layout</a> to customize. Set up Automatic Deposit Entries in the <a href="accounting.html">Accounting</a> system to track bank account deposits (see <a href="accountingsetup.html">Accounting Setup</a>). Deposits can also be created for <a href="quickbooks.html">QuickBooks</a> and <a href="quickbooksonline.html">QuickBooks Online</a>.</p>
<ul>
<li>The internal (default) Deposit Slip is designed to print onto preprinted QuickBooks forms and can only include 18 payments per slip. The top third is included with the bank deposit and preprints bank account information. The bottom 2/3 is a detailed report that is kept for records.</li>
<li>The first Deposit Slip in the <a href="sheets.html">Sheets</a> Custom list is used for printing. If no custom Deposit Slip exists, the Internal Deposit Slip is used.</li>
<li>To automatically create deposits when finalizing insurance payments, enable <i>Insurance payments show auto deposit</i> in <a href="preferences.html">Preferences</a>. </li>
</ul>
<br/><h2>Edit Deposit Slip</h2>
<p>Click <b>Add </b>to create a new deposit or double-click an existing deposit to edit. The Edit Deposit Slip window opens.</p>
<img src="images/depositslipEdit.png" width="915" height="677"/><p>By default, all payments are highlighted when creating a new deposit. Deselect payments to exclude them from this deposit or change filter criteria in the <b>Show</b> area (only displays when a new deposit is added).</p>
<p><b>Patient Payments</b>: When creating a new deposit, this is a list of <a href="payment.html">Payments</a> that are not attached to a deposit (sorted by payment date, then date entered), meeting Show criteria. When editing an existing deposit this is the list of patient payments attached to the deposit.</p>
<p><b>Insurance Payments</b>: When creating a new deposit, this is a list of <a href="claimpayfinalize.html">Claim Payments</a> that are not attached to a deposit (sorted by payment date, then date entered), meeting Show criteria. When editing an existing deposit this is the list of insurance payments attached to the deposit.</p>
<p class="MarginBottomZero">Deposit Information: </p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Today's date by default.</li>
<li><b>Amount</b>: Auto-calculated based on selected payments.</li>
<li><b>Item Count</b>: Read-only. Total number of deposit line items selected.</li>
<li><b>Batch #</b>: Enter the Batch Number for the selected group of payments. Usually used for credit card payments.</li>
<li><b>Bank Account Info</b>: By default is the bank account information as entered on the Edit Practice Info window (see <a href="practice.html">Practice Setup</a>) or Edit Clinic window for clinics (see <a href="clinicsetup.html">Clinic List</a>).</li>
<li><b>Memo</b>: Enter any notes specific to this deposit.</li>
<li><b>Deposit into Account</b>: This option only shows if Accounting is set up. Click the dropdown to select an account to deposit into. Only displays on new deposits.</li>
<li><b>Auto Deposit Account</b>: Auto deposit account attached to deposit. See <a href="definitionsautodepositaccount.html">Definitions: Auto Deposit Account</a>.</li>
</ul>
<p class="MarginBottomZero"><b>Show</b>: Filter the payments displayed in the Patient Payments and Insurance Payments grids. This area only displays when creating a new deposit. </p>
<ul>
<li><b>Start Date</b>: Enter a date to only see payments made on or after this date this date. Clicking Refresh after changing the Start Date sets this date as the default Start Date for the next deposit.</li>
<li><b>Clinic</b>: Filter the list to only include payments made to a specific clinic. The default clinic is the clinic selected in the Main Menu.</li>
<li><b>Patient Payment Types</b>: Highlight the Patient Payment Types to include. Payment Types marked N in <a href="definitionspaymenttypes.html">Definitions: Payment Types</a> are not listed.</li>
<li><b>Insurance Payment Types</b>: Highlight the Insurance Payment Types to include. Payment Types will marked N in <a href="inspaytypes.html">Definitions: Insurance Payment Types</a> are not listed.</li>
</ul>
<p class="MarginBottomGap">Click <b>Refresh</b> to update payments shown in the grids.</p>
<p><b>Delete</b>: Remove the deposit slip and detach payments from deposit. This does not delete any payments.</p>
<p><b>Search Check Number</b>: Enter a Check Number to find a payment in the deposit.</p>
<p><b>Search Amount</b>: Enter a payment amount to find a payment amount in the deposit.</p>
<p><b>Print</b>: Print deposit slips directly without generating a preview (does not save).</p>
<p><b>Create PDF</b>: Generate a PDF of the deposit slip (does not save).</p>
<p><b>Email PDF</b>: Opens the Edit Email Message window (see <a href="emailmessage.html">Email Message Edit</a>) and automatically attaches a PDF of the deposit slip (does not save).</p>
<h2>QuickBooks</h2>
<p>To send deposits to QuickBooks:</p>
<ol>
<li>Create the deposit.</li>
<li>Click<b> Send QB</b>.</li>
<li>Select the desired deposit and income account for this deposit.</li>
</ol>
<br/><div class="Note">Note: When a deposit is sent to QuickBooks, historical information about the accounts used is not kept. Instead look in QuickBooks.</div>
<br/><br/><p>Users have the option of sending deposits to <i>Class Refs</i> in QuickBooks for clinics. To enable this option and define Class Ref options, see QuickBooks, Enable QuickBooks Class Refs. When enabled, there is a Class dropdown on the Edit Deposit Slip window:</p>
<img src="images/depositSlipClass.gif" width="170" height="43"/><p>To send deposits to a specific Class Ref in QuickBooks:</p>
<ol>
<li>Create the deposit.</li>
<li>Select the clinic.</li>
<li>Click the Class dropdown to select the Class Ref. The available options are determined by the Class Refs added on the Setup Accounting window.</li>
<li>Click <b>OK</b> or <b>Send QB</b>.</li>
<li>Select the desired deposit and income account for this deposit.</li>
</ol>
<br/><p>A message advises the deposit was successfully sent to QuickBooks.</p>
<h2>QuickBooks Online</h2>
<p>When QuickBooks Online is enabled, users are prompted to select the account. Select the accounts from the dropdown, then click <b>OK</b>. </p>
<img src="images/depositQuickBooksOnline.png" width="409" height="157"/><h2>Correct a Deposit</h2>
<p class="MarginBottomZero">To correct a deposit follow these steps: </p>
<ul class="MarginBottomGap">
<li>Gather all physical documentation regarding the deposit.</li>
<li>Print the current deposit slip in Open Dental for records.</li>
<li>Open the deposit, then click<b> Delete</b> to delete it. If using the Accounting feature, deleting the deposit also removes the transaction from the Transaction History. <br/><div class="Note">Note: If needing to change or delete a deposit, the same change must manually be made in QuickBooks.</div>
</li>
<li>Manually go through and correct the claim payments, check amounts, or anything that was causing the deposit to be incorrect.</li>
<li>Create a new deposit (see steps 1 - 5 above).</li>
</ul>
<p>Hint: It is easiest to complete all deposits first, then make corrections at the end. This way all remaining payments can easily be identified as the payments to attach to the corrected deposit.</p>
</div>
</div>
</body>
</html>```
