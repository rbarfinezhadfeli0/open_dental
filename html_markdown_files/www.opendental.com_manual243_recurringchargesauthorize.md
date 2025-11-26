# File: ./www.opendental.com/manual243/recurringchargesauthorize.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Authorize Recurring Charges</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('recurringchargesauthorize','creditcardsmanage','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/recurringchargesauthorize.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/recurringchargesauthorize.html" >v24.2</option><option value="https://www.opendental.com/manual241/recurringchargesauthorize.html" >v24.1</option><option value="https://www.opendental.com/manual233/recurringchargesauthorize.html" >v23.3</option><option value="https://www.opendental.com/manual232/recurringchargesauthorize.html" >v23.2</option><option value="https://www.opendental.com/manual231/recurringchargesauthorize.html" >v23.1</option><option value="https://www.opendental.com/manual224/recurringchargesauthorize.html" >v22.4</option><option value="https://www.opendental.com/manual223/recurringchargesauthorize.html" >v22.3</option><option value="https://www.opendental.com/manual222/recurringchargesauthorize.html" >v22.2</option><option value="https://www.opendental.com/manual221/recurringchargesauthorize.html" >v22.1</option><option value="https://www.opendental.com/manual214/recurringchargesauthorize.html" >v21.4</option><option value="https://www.opendental.com/manual213/recurringchargesauthorize.html" >v21.3</option><option value="https://www.opendental.com/manual212/recurringchargesauthorize.html" >v21.2</option><option value="https://www.opendental.com/manual211/recurringchargesauthorize.html" >v21.1</option><option value="https://www.opendental.com/manual205/recurringchargesauthorize.html" >v20.5</option><option value="https://www.opendental.com/manual204/recurringchargesauthorize.html" >v20.4</option><option value="https://www.opendental.com/manual203/recurringchargesauthorize.html" >v20.3</option><option value="https://www.opendental.com/manual202/recurringchargesauthorize.html" >v20.2</option><option value="https://www.opendental.com/manual201/recurringchargesauthorize.html" >v20.1</option><option value="https://www.opendental.com/manual194/recurringchargesauthorize.html" >v19.4</option><option value="https://www.opendental.com/manual193/recurringchargesauthorize.html" >v19.3</option><option value="https://www.opendental.com/manual192/recurringchargesauthorize.html" >v19.2</option><option value="https://www.opendental.com/manual191/recurringchargesauthorize.html" >v19.1</option><option value="https://www.opendental.com/manual184/recurringchargesauthorize.html" >v18.4</option><option value="https://www.opendental.com/manual183/recurringchargesauthorize.html" >v18.3</option><option value="https://www.opendental.com/manual182/recurringchargesauthorize.html" >v18.2</option><option value="https://www.opendental.com/manual181/recurringchargesauthorize.html" >v18.1</option><option value="https://www.opendental.com/manual174/recurringchargesauthorize.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Authorize Recurring Charges</p></div>
<div class="GeneralPageContent">
<p>Set up a recurring payment to a patient's credit/debit card or checking/savings account for regularly due charges (e.g., payment plans, repeating charges).</p>
<p>In <a href="creditcardsmanage.html">Credit Card Manage</a>, double-click a payment account. </p>
<img src="images/creditCardEdit.PNG" width="526" height="684"/><p>Authorize the recurring charge amount and frequency for select patients. On the scheduled payment date, the patient's payment method is added to the Recurring Charges tool to be processed. Run the tool manually to process the payments or set payments to process automatically at a specific time each day.  <div class="Note">Note: <ul>
<li>Recurring payments are allocated to outstanding charges within the family using first in/first out logic (FIFO). </li>
<li>Multiple cards can be set up for recurring charges in a family, but this may cause unexpected behavior when the family balance becomes $0.00. </li>
<li>When using a single card, adjust Charge Frequency below as required for multiple charges in a single month. Also see Charge Logic below.</li>
</ul>
</div>
</p>
<p>To run the tool and for set up requirements, see <a href="recurringcharges.html">CC Recurring Charges</a>.</p>
<p>To set up a recurring payment, in the Edit Credit Card window, enter the Authorize Recurring Charges details then select the Charge Frequency.</p>
<p class="MarginBottomZero"><b>Authorized Recurring Charges</b>: </p>
<ul class="MarginBottomGap">
<li><b>Payment Plan</b>: (optional) Attach the recurring charge to a <a href="paymentplandynamic.html">Payment Plan</a> or <a href="paymentplanpatient.html">Old Payment Plan</a>. Use the dropdown to select from a list of plans the patient is a guarantor of. The payment is applied to the payment plan (<a href="paymentplanpayment.html">Payment to a Payment Plan</a>). If no payment plan is selected, payment is processed for the patient's balance up to the charge amount entered and may include PayPlan Charges if due.<br><div class="Note">Note: If the attached payment plan is deleted or closed, the recurring charge is cleared. </div>
</li>
<li><b>Payment Type Override</b>: Assign a Payment Type to this patient's recurring charge transactions. This overrides the default payment type, <i>Pay type for CC</i> in <a href="preferences.html">Preferences</a>.</li>
<li><b>Charge Amount</b>: (required) Enter the scheduled payment amount. For payment plans, this is typically the same as the periodic Pay Plan Charge Due. To remove the amount, click <b>Clear</b>.</li>
<li><b>Date Start</b>: (required) Enter the date the recurring charge is scheduled to start. Click <b>Today</b> to insert today's date.</li>
<li><b>Date Stop</b>: Enter the final payment date. To charge the patient indefinitely, leave blank. The patient will then be charged for any outstanding balance due up to the authorized charge amount. If a payment plan is selected, recurring charges automatically end when the payment plan is paid in full.</li>
<li><b>Note</b>: Enter notes specific to the charge. Notes are only visible in this window. This text box supports <a href="rightclicktextboxes.html">Right Click Text Box</a>.</li>
<li><b>Run charge even if no family balance present</b>: (optional) Check to process the recurring charge for the full charge amount even if it exceeds the family balance. If the family has a credit or no balance, payment is posted to the account as <a href="unearnedprepayment.html">Unearned / Prepayment</a>. Only displays when the preference, <i>Allow recurring charge to run even if no family balance present</i>, is enabled.</li>
<li><b>Is Recurring Active</b>: The card is currently active for recurring charges. When unchecked, the card is not active for recurring charges. The setting can be manually changed or automatically changed via the preference <i>Automatically inactivate declined cards</i>.</li>
<li><b>Next Charge Date</b>: Date of the first scheduled recurring charge associated with the current charge frequency. If charge frequency is changed, the date is updated.</li>
<li><b>Previous Start Date</b>: Only appears if <i>Date Start</i> has been changed. The Date Start entered prior to the current Date Start (e.g., if the date start has been changed once, this is the original date start; if three dates have been used, this is the second date start entered).</li>
</ul>
<p class="MarginBottomZero"><b>Charge Frequency</b>: </p>
<ul class="MarginBottomGap">
<li><b>Fixed day(s) of month</b>: (default) Click <b>Add Day</b> to select one or more specific days of the month to schedule payment. Payment is processed on the date(s) indicated (e.g., 1st and 16th). The first payment is scheduled on or after the Date Start. The last payment is processed on or before the Date End. Click <b>Clear</b> to remove the selected date(s).</li>
<li><b>Fixed week day</b>: Check to select a specific day of the week to schedule the payment. Use the dropdown menu to select which day of the week and how often (e.g., every Monday or fifth Saturday).</li>
</ul>
<p class="MarginBottomZero"><b>Authorized Procedures</b>: Lists procedures that allow a recurring charge to be processed. </p>
<ul class="MarginBottomGap">
<li>Click <b>Add</b> to choose a procedure code to authorize.</li>
<li>Highlight a procedure and click <b>Remove</b> to delete the procedure from the list.</li>
</ul>
<p></p>
<p><div class="Note">Note: If a date does not exist in the month (e.g., 31st or fifth Monday) for the selected charge frequency, recurring charges occur on the last calendar day of the month (e.g., 30th) instead.</div>
</p>
<p>Click <b>Save</b> to keep changes. </p>
<p>To exit the Credit Card Edit window without saving changes, click <b>Cancel</b>. To remove the payment information from the patient's account, click <b>Delete</b>.</p>
<h2>Editing Recurring Charges</h2>
<p>To edit recurring charges, double-click the credit card and update any of the information as needed (e.g., charge amount, frequency, etc). Click <b>Save</b> to keep changes. If the card has already been charged for the current month, update the <i>Date Start</i> to the next expected charge date to prevent additional charges for the current month.</p>
<p class="MarginBottomZero">To use the same credit card for multiple recurring charges (e.g., multiple patients or payment plans): </p>
<ol class="MarginBottomGap">
<li>From the Credit Card Manage window, highlight an existing credit card.</li>
<li>Click <b>Reuse Existing Card</b>.</li>
<li>Optional: If the card needs to be moved to a different patient, from Credit Card Manage, select the card and click <b>Move To Patient</b>. Select the patient to which the card should be attached.</li>
<li>On the new copy of the credit card, enter the Authorized Recurring Charges details and select the new Charge Frequency.</li>
<li>Click <b>Save</b> to keep changes.</li>
</ol>
<h2>Charge Logic</h2>
<p><b>Using Authorized Procedures</b><br> A recurring charge is only processed when an authorized procedure is set complete and there is a family balance. Charges are still scheduled based on the Charge Frequency. </p>
<p>Payment is allocated using the selected Paysplits setting set in <a href="allocationssetup.html">Allocations Setup</a>. </p>
<p><b>Using a Single Card for Multiple Recurring Charges</b><br> If a single card is being used for multiple recurring charges, the card must be added to Credit Card Manage for any patients to which the charge is being applied. For payment plans, the card must be added to the payment plan guarantor.</p>
<p>To charge the same patient at different intervals (e.g., fixed day of the month and every other Friday) on the same credit card, the card must be added twice. The saved cards are charged independently of one another (i.e., the actual charge date for one card entry does not affect the actual charge date of the other card entries).</p>
<p><b>If <i>Run charge even if no family balance present</i> is Enabled</b><br> If a payment plan is linked to the recurring charge, the recurring charge is not processed if the patient does not have a PayPlan Charge Due.</p>
<p>If using Authorized Procedures, the recurring charge is only billed up to the procedure amount.</p>
<p>'Recurring Charge' is added below the transaction details of the payment note when the card is processed.</p>
<p><b>If <i>Run charge even if no family balance present</i> is Disabled</b><br> The recurring charge amount may be reduced, depending on the balance owed. </p>
<p>If the family balance owed is less than the recurring charge amount, the charge is reduced to the balance owed.  </p>
<p>If the recurring charge is linked to a payment plan and the PayPlan Charge Due is less than the charge amount, the charge amount is reduced if there is no additional family balance. </p>
<p>If the recurring charge is linked to a payment plan and the PayPlan Charge Due is less than the charge amount and the family has a balance due, the entire charge amount is processed (up to the family balance). The portion of the payment that exceeds the PayPlan Charge Due is posted to the account as unearned/prepayment.</p>
<p>If using Authorized Procedures, the recurring charge is reduced if it exceeds the family balance, even if the amount for the authorized procedure is more. </p>
</div>
</div>
</body>
</html>```
