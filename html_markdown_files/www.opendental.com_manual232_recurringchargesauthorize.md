# File: ./www.opendental.com/manual232/recurringchargesauthorize.html

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
						}"><option value="https://www.opendental.com/manual243/recurringchargesauthorize.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/recurringchargesauthorize.html" >v24.2</option><option value="https://www.opendental.com/manual241/recurringchargesauthorize.html" >v24.1</option><option value="https://www.opendental.com/manual233/recurringchargesauthorize.html" >v23.3</option><option value="https://www.opendental.com/manual232/recurringchargesauthorize.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/recurringchargesauthorize.html" >v23.1</option><option value="https://www.opendental.com/manual224/recurringchargesauthorize.html" >v22.4</option><option value="https://www.opendental.com/manual223/recurringchargesauthorize.html" >v22.3</option><option value="https://www.opendental.com/manual222/recurringchargesauthorize.html" >v22.2</option><option value="https://www.opendental.com/manual221/recurringchargesauthorize.html" >v22.1</option><option value="https://www.opendental.com/manual214/recurringchargesauthorize.html" >v21.4</option><option value="https://www.opendental.com/manual213/recurringchargesauthorize.html" >v21.3</option><option value="https://www.opendental.com/manual212/recurringchargesauthorize.html" >v21.2</option><option value="https://www.opendental.com/manual211/recurringchargesauthorize.html" >v21.1</option><option value="https://www.opendental.com/manual205/recurringchargesauthorize.html" >v20.5</option><option value="https://www.opendental.com/manual204/recurringchargesauthorize.html" >v20.4</option><option value="https://www.opendental.com/manual203/recurringchargesauthorize.html" >v20.3</option><option value="https://www.opendental.com/manual202/recurringchargesauthorize.html" >v20.2</option><option value="https://www.opendental.com/manual201/recurringchargesauthorize.html" >v20.1</option><option value="https://www.opendental.com/manual194/recurringchargesauthorize.html" >v19.4</option><option value="https://www.opendental.com/manual193/recurringchargesauthorize.html" >v19.3</option><option value="https://www.opendental.com/manual192/recurringchargesauthorize.html" >v19.2</option><option value="https://www.opendental.com/manual191/recurringchargesauthorize.html" >v19.1</option><option value="https://www.opendental.com/manual184/recurringchargesauthorize.html" >v18.4</option><option value="https://www.opendental.com/manual183/recurringchargesauthorize.html" >v18.3</option><option value="https://www.opendental.com/manual182/recurringchargesauthorize.html" >v18.2</option><option value="https://www.opendental.com/manual181/recurringchargesauthorize.html" >v18.1</option><option value="https://www.opendental.com/manual174/recurringchargesauthorize.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Authorize Recurring Charges</p></div>
<div class="GeneralPageContent">
<p>Set up a recurring payment to a patient's credit/debit card or checking/savings account for regularly due charges (e.g., payment plans, repeating charges).</p>
<p>In <a href="creditcardsmanage.html">Credit Card Manage</a>, double-click a payment account. </p>
<img src="images/creditCardEdit.PNG" width="540" height="581"/><p>Authorize the recurring charge amount and frequency for select patients. On the scheduled payment date, the patient's payment method will be added to the Recurring Charges tool to be processed. Run the tool manually to process the payments or set payments to process automatically at a specific time each day.  <div class="Note">Note: <ul>
<li>Recurring payments are allocated to outstanding charges within the family using first in/first out logic (FIFO). </li>
<li>Multiple cards can be setup for recurring charges in a family, but this may cause unexpected behavior when the family balance becomes $0.00. </li>
<li>When using a single card, adjust Charge Frequency below as required for multiple charges in a single month. Also see Charge Logic below.</li>
</ul>
</div>
</p>
<p>To run the tool and for set up requirements, see <a href="recurringcharges.html">CC Recurring Charges</a>.</p>
<p>To set up a recurring payment, enter the Authorize Recurring Charges details then select the Charge Frequency.</p>
<p class="MarginBottomZero"><b>Authorized Recurring Charges</b>: </p>
<ul class="MarginBottomGap">
<li><b>Payment Plan</b>: (optional) Attach the recurring charge to a <a href="paymentplanpatient.html">Patient Payment Plan</a> or <a href="paymentplandynamic.html">Dynamic Payment Plan</a>. Use the dropdown to select from a list of plans the patient is a guarantor of. The payment will be applied to the payment plan (<a href="paymentplanpayment.html">Payment to a Payment Plan</a>). If no payment plan is selected, a payment will be processed for the patient's balance up to the charge amount entered and may include payplan charges if due.<br/><div class="Note">Note: If the attached payment plan is deleted or closed, the recurring charge is cleared. </div>
</li>
<li><b>Payment Type Override</b>: Assign a Payment Type to this patient's recurring charge transactions. This overrides the default payment type, <i>Pay type for CC</i> in <a href="preferences.html">Preferences</a>.</li>
<li><b>Charge Amount</b>: (required) Enter the scheduled payment amount. For payment plans, this is typically the same as the periodic pay plan debit amount. To remove the amount, click <b>Clear</b>.</li>
<li><b>Date Start</b>: (required) Enter the date the recurring charge is scheduled to start. Click <b>Today</b> to insert today's date.</li>
<li><b>Date Stop</b>: Enter the final payment date. To charge the patient indefinitely, leave blank. The patient will then be charged for any outstanding balance due up to the authorized charge amount. If a payment plan is selected, the recurring charge will automatically end when the payment plan is paid in full.</li>
<li><b>Note</b>: Enter notes specific to the charge. Notes are only visible in this window.</li>
<li><b>Run charge even if no family balance present</b>: (optional) Check to process the recurring charge for the charge amount even if the family does not have a balance. If the family has a credit or no balance, the payment will post to the account as an <a href="unearnedprepayment.html">Unearned / Prepayment</a>. Only displays when the preference, <i>Allow recurring charge to run even if no family balance present</i>, is enabled.</li>
<li><b>Is Recurring Active</b>: The card is currently active for recurring charges. When unchecked, the card is not active for recurring charges. The setting can be manually changed or automatically changed via the preference <i>Automatically inactivate declined cards</i>.</li>
<li><b>Next Charge Date</b>: Date of the first scheduled recurring charge associated with the current charge frequency. If charge frequency is changed, the date will update.</li>
<li><b>Previous Start Date</b>: Only appears if <i>Date Start</i> has been changed. The Date Start entered prior to the current Date Start (e.g., if the date start has been changed once this is the original date start, if three dates have been used this is the second date start entered).</li>
</ul>
<p class="MarginBottomZero"><b>Charge Frequency</b>: </p>
<ul class="MarginBottomGap">
<li><b>Fixed day(s) of month</b>: (default) Click <b>Add Day</b> to select one or more days of the month to schedule the payment. The payment will be processed on the day(s) indicated, with the first charge scheduled the month entered in the Date Start field and the last payment in the month entered in the Date End field. Click <b>Clear</b> to remove the selection(s). <ul>
<li>If a selected day falls on the end of the month (e.g., 31) and a month does not include that day (e.g., February, September), charges will be added on the day prior (e.g., February 28, September 30).</li>
</ul>
</li>
<li><b>Fixed week day</b>: Check to select a fixed week day to schedule the payment. Use the dropdown menu to select which day of the week and how often (e.g., every Monday or fifth Saturday).</li>
</ul>
<p>Click <b>OK</b> to save. </p>
<p>To exit the Credit Card Edit window without saving changes, click <b>Cancel</b>. To remove the payment information from the patient's account, click <b>Delete</b>.</p>
<h2>Editing Recurring Charges</h2>
<p>To edit recurring charges, double-click the credit card and update any of the information as needed (e.g., charge amount, frequency, etc). Click <b>OK</b> to save. If the card has already been charged for the current month, update the <i>Date Start</i> to the next expected charge date to prevent additional charges for the current month.</p>
<p class="MarginBottomZero">To use the same credit card for multiple recurring charges (e.g., multiple patients or payment plans): </p>
<ol class="MarginBottomGap">
<li>From the Credit Card Manage window, highlight an existing credit card.</li>
<li>Click <b>Reuse Existing Card</b>.</li>
<li>Optional: If the card needs to be moved to a different patient, from Credit Card Manage, select the card and click <b>Move To Patient</b>. Select the patient to which the card should be attached.</li>
<li>On the new copy of the credit card, enter the Authorized Recurring Charges details and select the new Charge Frequency.</li>
<li>Click <b>OK</b> to save.</li>
</ol>
<h2>Charge Logic</h2>
<p>If a single card is being used for multiple recurring charges, the card will need to be added to Credit Card Manage of any patients to which the charge is being applied. For payment plans, the card must be added to the payment plan guarantor.</p>
<p>To charge the same patient on different intervals (e.g., fixed day of the month and every other Friday) on the same credit card, the card will need to be added twice. The two saved cards will be charged independently of one another (i.e., the actual charge date for one card instance will not affect the actual charge date of the other card instances).</p>
<p class="MarginBottomZero">If <i>Run charge even if no family balance present</i> is checked: </p>
<ul class="MarginBottomGap">
<li>And a payment plan is selected, the recurring charge will not be processed if the patient does not have a payplan debit due.</li>
<li>'Recurring Charge' is added below the transaction details of the payment note when the card is processed</li>
</ul>
<p>If <i>Run charge even if no family balance present</i> is unchecked, the recurring charge amount will be reduced if the family balance or payplan debit is less than the charge amount. The balance owed is charged instead.  </p>
<p>If the payplan debit is less than the charge amount and the family has a balance due, the entire charge amount will be processed. The portion of the payment that exceeds the payplan debit will post to the account as unearned/prepayment.</p>
</div>
</div>
</body>
</html>```
