# File: ./www.opendental.com/manual/financecharges.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Billing/Finance Charges</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('financecharges','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/financecharges.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/financecharges.html" >v24.2</option><option value="https://www.opendental.com/manual241/financecharges.html" >v24.1</option><option value="https://www.opendental.com/manual233/financecharges.html" >v23.3</option><option value="https://www.opendental.com/manual232/financecharges.html" >v23.2</option><option value="https://www.opendental.com/manual231/financecharges.html" >v23.1</option><option value="https://www.opendental.com/manual224/financecharges.html" >v22.4</option><option value="https://www.opendental.com/manual223/financecharges.html" >v22.3</option><option value="https://www.opendental.com/manual222/financecharges.html" >v22.2</option><option value="https://www.opendental.com/manual221/financecharges.html" >v22.1</option><option value="https://www.opendental.com/manual214/financecharges.html" >v21.4</option><option value="https://www.opendental.com/manual213/financecharges.html" >v21.3</option><option value="https://www.opendental.com/manual212/financecharges.html" >v21.2</option><option value="https://www.opendental.com/manual211/financecharges.html" >v21.1</option><option value="https://www.opendental.com/manual205/financecharges.html" >v20.5</option><option value="https://www.opendental.com/manual204/financecharges.html" >v20.4</option><option value="https://www.opendental.com/manual203/financecharges.html" >v20.3</option><option value="https://www.opendental.com/manual202/financecharges.html" >v20.2</option><option value="https://www.opendental.com/manual201/financecharges.html" >v20.1</option><option value="https://www.opendental.com/manual194/financecharges.html" >v19.4</option><option value="https://www.opendental.com/manual193/financecharges.html" >v19.3</option><option value="https://www.opendental.com/manual192/financecharges.html" >v19.2</option><option value="https://www.opendental.com/manual191/financecharges.html" >v19.1</option><option value="https://www.opendental.com/manual184/financecharges.html" >v18.4</option><option value="https://www.opendental.com/manual183/financecharges.html" >v18.3</option><option value="https://www.opendental.com/manual182/financecharges.html" >v18.2</option><option value="https://www.opendental.com/manual181/financecharges.html" >v18.1</option><option value="https://www.opendental.com/manual174/financecharges.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Billing/Finance Charges</p></div>
<div class="GeneralPageContent">
<p>The Billing and Finance Charges tool is used to apply finance or billing charges to accounts.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, <b>Billing/Finance Charges</b>.</p>
<img src="images/billingFinanceCharge.png" width="575" height="550"/><p>The charges are applied to all guarantor <a href="account.html">Accounts</a> that meet the filtering criteria entered in this window.  <div class="Note">Note: <a href="aging.html">Aging</a> runs when opening the tool, again after billing/finance charges post, and after undoing previous charges.</div>
</p>
<p class="MarginBottomZero">Required Setup: </p>
<ul class="MarginBottomGap">
<li>In <a href="showfeatures.html">Show Features</a>, the Charge Tools radio button must be set to check the radio button to <i>Billing/Finance Charges</i> to see the option in the Tools menu to use this feature. This is enabled by default.</li>
<li>Set the <i>Billing charge adj type</i> and <i>Finance charge adj type</i> in <a href="preferences.html">Preferences</a>.</li>
</ul>
<h2>Date</h2>
<img src="images/billingFinanceChargeDate.png" width="192" height="56"/><p><b>Date Last Run</b>: Date the Billing/Finances charge tool was last run.</p>
<p><b>Date of New Charges</b>: Enter the date the new charges should be applied. Billing or finance charges are posted to patient accounts with this adjustment date.</p>
<h2>Billing/Finance Charges</h2>
<img src="images/billingFinanceChargeTypes.png" width="296" height="135"/><p><b>Billing Charge</b>: Select to add a flat charge to the account. Enter the charge amount in the text box. Charges are added to accounts as an <a href="adjustments.html">Adjustment</a> using the <i>Billing charge adj type</i>.</p>
<p class="MarginBottomZero"><b>Finance Charge</b>: Select to apply finance charges and apply a percentage charge (APR) to account balances. Charges are added to accounts as an adjustment using the <i>Finance charge adj type</i>. Set the following options before applying charges: </p>
<ul class="MarginBottomGap">
<li><b>APR</b>: Enter the percentage charge to apply to account balances. This charge is calculated against the patient portion of the entire family. It is recommended that you run it every month for an accurate APR. An adjustment is added using the following formula: <p class="codeblock"> (Estimated Balance *(APR / 12)) </p></li>
<li><b>Charge at least</b>: Set the minimum finance charge amount. For example, if set to $5.00, any finance charge amount from $0.01 to $4.99 is charged as $5.00 to the patient.</li>
<li><b>Only if over</b>: Set the minimum amount of a calculated finance charge before APR is assessed. For example, if the <i>Only if over</i> amount is $3.00 and the finance charge is less than that amount, the patient is charged $0.00.</li>
<li>If both preferences are set, the patient is charged the <i>Charge at least</i> amount, but only if it is greater than the <i>Only if over</i> amount. If the finance charge is greater than the <i>Charge at least</i> amount, the finance charge amount is applied.</li>
<li><b>Compound Interest</b>: Determines whether or not past interest adjustment charges are considered when calculating new interest charges. Check to charge interest on the total past due amount. Uncheck to charge interest on the past due amount minus any past interest charges. <div class="Note">Note: If the account has an <a href="installmentplan.html">Installment Plan</a> set up for any family member, the installment plan's APR is used instead of the APR set here.</div>
</li>
</ul>
<h2>Billing Types</h2>
<img src="images/billingFinanceChargeBillingTypes.png" width="166" height="209"/><p><b>Only Apply to these Billing Types</b>: Select which accounts should have charges applied based on the guarantor's <a href="definitionsbillingtypes.html">Billing Type</a>. </p>
<h2>Balances Aged</h2>
<img src="images/billingFinanceChargeAged.png" width="169" height="90"/><p class="MarginBottomZero"><b>Calculate on balances aged</b>: Select the age of the accounts that should have charges applied. When calculating finance charges, only balances over the selected age are considered (e.g., if Over 90 Days is selected, outstanding balances aged less than 90 days do not affect the calculated finance charge amount). </p>
<ul class="MarginBottomGap">
<li>Over 30 Days: Apply billing or finance charges to balances aged over 30 days. </li>
<li>Over 60 Days: Apply billing or finance charges to balances aged over 60 days. </li>
<li>Over 90 Days: Apply billing or finance charges to balances aged over 90 days. </li>
</ul>
<h2>Billing/Finance Filters</h2>
<p> Select options to have to exclude accounts from being billed finance or billing charges.</p>
<img src="images/billingFinanceChargeFilters.png" width="383" height="197"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Exclude bad addresses (no zip code)</b>: Check to exclude families with a bad address on the guarantor's account.</li>
<li><b>Exclude inactive families</b>: Check to exclude families with an Inactive status (i.e., all members marked <i>Inactive</i>). </li>
<li><b>Exclude if insurance pending</b>: Check to exclude families with any insurance claims still pending.</li>
<li><b>Ignore walkout (In person) Statements</b>: Works in combination with <i>Exclude accounts not billed since</i> setting. If checked, statements with a mode of <i>InPerson</i> are not considered as being billed.</li>
<li><b>Exclude accounts (guarantor) without Truth in Lending</b>: Check to exclude families that do not have record of a signed <i>Truth in Lending</i> from the guarantor. See <a href="patienteditother.html">Edit Patient Information: Other Tab</a>, <i>Signed Truth in Lending</i> checkbox.</li>
<li><b>Exclude if balance less than</b>: Families with a balance less than the entered amount are excluded from billing/finance charges.</li>
<li><b>Exclude accounts not billed since</b>: Defaults to the <i>Date last run</i>. Billing/Finance charges are not applied to accounts that have not been sent a statement from the guarantor's account between the date entered and today's date. Accounts that have been sent a statement between the date entered and today's date get a billing/finance charge. Remove the date to include all accounts.</li>
</ul>
<h2>Undo Billing/Finance Charges</h2>
<img src="images/billingFinanceChargeUndo.png" width="169" height="87"/><p>Use the <b>Undo</b> button to undo the most recent charges (finance or billing). All adjustments made on the same date, which have the same adjustment type, are deleted. Finance/Billing charges for a different date must be undone manually. Use the <a href="reportfinancecharge.html">Finance Charge Report</a> to identify the adjustments made on that date.</p>
<p>Billing and finance charge adjustments attached to a <a href="payment.html">Payment</a> or <a href="paymentplandynamic.html">Payment Plan</a> cannot be deleted with this tool. To view a list of patients with these adjustment types attached to payment splits and Payment Plans, click <b>Yes</b> when prompted.</p>
<img src="images/billingFinanceChargePrompt.png" width="403" height="159"/><p>Go to each patient on the list and manually detach the adjustment from the pay splits or Payment Plan to delete the adjustment, if needed.</p>
<h2>Assign Charges</h2>
<img src="images/billingFinanceChargeAssignProv.png" width="309" height="84"/><p class="MarginBottomZero"><b>Assign Charges To</b>: Determine which provider billing or finance charge adjustments are assigned to. This provider's production is affected. </p>
<ul class="MarginBottomGap">
<li>Patient's Primary Provider: Select to assign adjustment to the guarantor's primary provider.</li>
<li>Specific Provider: Select to assign all adjustments to a specific provider selected from the dropdown.</li>
</ul>
<h2>Run Billing or Finance Charges</h2>
<p><b>Run</b>: Click to process billing or finance charges to all families meeting the filter criteria.</p>
<p class="MarginBottomZero">Follow the steps below to set up and run billing or finance charges: </p>
<ol class="MarginBottomGap">
<li>Verify the <i>Date of new charges</i>. This defaults to the current day and does not normally need to be changed.</li>
<li>Select a charge type:</li>
<ul>
<li>If selecting <i>Billing Charge</i>, enter charge amount.</li>
<li>If selecting <i>Finance Charge</i>, enter APR % and other charge criteria.</li>
</ul>
<li>Select affected <i>Billing Types</i>.</li>
<li>Select an option for <i>Calculate on balances aged</i>.</li>
<li>Set preferred <i>Billing/Finance Filters</i>.</li>
<li>Select the provider to <i>Assign charges to</i>.</li>
<li>Click <b>Run</b>.</li>
</ol>
<p>Once the tool is complete, a message indicates how many charges were applied. To see all the finance charges that were applied, run the <a href="reportfinancecharge.html">Finance Charge Report</a>.</p>
<h2>Apply Both Billing and Finance Charges</h2>
<p class="MarginBottomZero">To apply both billing and finance charges to an account, run the billing/finance charge tool twice on the same day, once per month. Still complete daily billing. </p>
<ol class="MarginBottomGap">
<li>Run the tool to apply the APR finance charge (e.g., 18%) to accounts over 30 days.</li>
<li>Run the tool to apply billing charge (e.g., $4) to accounts over 60 days.</li>
<li>Send statements.</li>
</ol>
</div>
</div>
</body>
</html>```
