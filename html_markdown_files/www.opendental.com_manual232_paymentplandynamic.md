# File: ./www.opendental.com/manual232/paymentplandynamic.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dynamic Payment Plan</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paymentplandynamic','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/paymentplandynamic.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/paymentplandynamic.html" >v24.2</option><option value="https://www.opendental.com/manual241/paymentplandynamic.html" >v24.1</option><option value="https://www.opendental.com/manual233/paymentplandynamic.html" >v23.3</option><option value="https://www.opendental.com/manual232/paymentplandynamic.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/paymentplandynamic.html" >v23.1</option><option value="https://www.opendental.com/manual224/paymentplandynamic.html" >v22.4</option><option value="https://www.opendental.com/manual223/paymentplandynamic.html" >v22.3</option><option value="https://www.opendental.com/manual222/paymentplandynamic.html" >v22.2</option><option value="https://www.opendental.com/manual221/paymentplandynamic.html" >v22.1</option><option value="https://www.opendental.com/manual214/paymentplandynamic.html" >v21.4</option><option value="https://www.opendental.com/manual213/paymentplandynamic.html" >v21.3</option><option value="https://www.opendental.com/manual212/paymentplandynamic.html" >v21.2</option><option value="https://www.opendental.com/manual211/paymentplandynamic.html" >v21.1</option><option value="https://www.opendental.com/manual205/paymentplandynamic.html" >v20.5</option><option value="https://www.opendental.com/manual204/paymentplandynamic.html" >v20.4</option><option value="https://www.opendental.com/manual203/paymentplandynamic.html" >v20.3</option><option value="https://www.opendental.com/manual202/paymentplandynamic.html" >v20.2</option><option value="https://www.opendental.com/manual201/paymentplandynamic.html" >v20.1</option><option value="https://www.opendental.com/manual194/paymentplandynamic.html" >v19.4</option><option value="https://www.opendental.com/manual193/paymentplandynamic.html" >v19.3</option><option value="https://www.opendental.com/manual192/paymentplandynamic.html" >v19.2</option><option value="https://www.opendental.com/manual191/paymentplandynamic.html" >v19.1</option><option value="https://www.opendental.com/manual184/paymentplandynamic.html" >v18.4</option><option value="https://www.opendental.com/manual183/paymentplandynamic.html" >v18.3</option><option value="https://www.opendental.com/manual182/paymentplandynamic.html" >v18.2</option><option value="https://www.opendental.com/manual181/paymentplandynamic.html" >v18.1</option><option value="https://www.opendental.com/manual174/paymentplandynamic.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dynamic Payment Plan</p></div>
<div class="GeneralPageContent">
<p>A Dynamic Payment Plan is an open-ended repayment agreement.</p>
<p>In the <a href="account.html">Account Module</a> Payment Plans grid, they show with the Type <i>DPP</i>.</p>
<img src="images/paymentPlanDynamicGrid.png" width="749" height="61"/><p><div class="Note">Note: <ul>
<li>The grid can also include <a href="paymentplanpatient.html">Patient Payment Plans</a>, <a href="installmentplan.html">Installment Plans</a> and <a href="paymentplanins.html">Insurance Payment Plans</a>.</li>
<li>If production on a dynamic payment plan has been overcharged, the plan will turn yellow. Run the <a href="reportdynamicpayplanovercharged.html">Dynamic Payment Plans Overcharged Report</a> to find any overcharged production.</li>
<li>Dynamic Payment Plans are only functional with an Insurance Payment Plan for the same procedures if set up correctly. See <i>Setting up a Dynamic Payment Plan for use with an Insurance Payment Plan</i> at the bottom of this page.</li>
<li>The <a href="opendentalservice.html">Open Dental Service</a> is required to use Dynamic Payment Plans. This service updates plans as needed daily. To set a time for Dynamic Payment Plans to update, see <a href="preferences.html">Preferences</a>, <i>Dynamic Pay Plan run time</i>.</li>
</ul>
</div>
</p>
<p>To create a new Dynamic Payment Plan, in the Account Module, click Payment Plan, Dynamic Payment Plan.</p>
<img src="images/paymentPlanDynamic.png" width="915" height="633"/><p>Alternatively, double-click an existing dynamic payment plan to edit. </p>
<p class="MarginBottomZero">Related Links: </p>
<ul class="MarginBottomGap">
<li><a href="paymentplanpayment.html">Payment to a Payment Plan</a></li>
<li><a href="paymentplanscenarios.html">Payment Plan Examples</a></li>
<li><a href="reportpaymentplan.html">Payment Plans Report</a></li>
<li><a href="paymentplanpatientfaq.html">Payment Plan Q and A</a></li>
</ul>
<p>See General Setup at the bottom of this page for instructions on setting up a Dynamic Payment Plan.</p>
<h2>Category / Patient / Guarantor </h2>
<img src="images/paymentPlanDynamicPatientInfo.png" width="347" height="75"/><p><b>Category</b>: Assign a category to the payment plan (e.g., Ortho, Implant). Useful to distinguish one payment plan from another when families have many plans. Customize the category options in <a href="definitionspaymentplancategories.html">Definitions: Payment Plan Categories</a>.</p>
<p><b>Patient</b>: The person who was treated. Click <b>Go To</b> to switch to their account. Patients can have multiple payment plans, and each plan can have a different guarantor.</p>
<p><b>Guarantor</b>: The person who will make the payments. Defaults to the currently selected patient. The guarantor does not have to be in the same family as the patient. It also can differ from the account's guarantor. Click <b>Change</b> to select a different guarantor. Click <b>Go To</b> to switch to their account.</p>
<h2>Lock Options</h2>
<img src="images/paymentPlanDynamicLock.png" width="148" height="30"/><p><b>Full Lock</b>: Check to lock current terms of the payment plan. Prevents further changes to the repayment schedule or the production (e.g., adding procedures and adjustments or changing the production Amount Override). Plans that are locked cannot be edited. Users must create a new plan to add treatment instead. Adding an APR interest rate requires the plan be locked.</p>
<p><b>Unlock</b>: Option is available when opening an existing plan and Full Lock is unchecked. Click to unlock the <i>Terms</i> section in order to make edits.</p>
<h2>Terms</h2>
<img src="images/paymentPlanDynamicTerms.png" width="368" height="332"/><p><b>Date of Agreement</b>: Defaults to today's date. Can be changed to a past date. If the <i>Allow future dated transactions</i> preference is enabled, can also be changed to a future date. </p>
<p><b>Total Principal Amount</b>: The total amount of the payment plan, excluding interest. Calculates based on the attached production.</p>
<p><b>Date of First Payment</b>: Defaults to one month from today's date.</p>
<p><b>Down Payment</b>: The amount of the down payment. Immediately due when the payment plan is created regardless of the Handle Treatment Planned setting.</p>
<p class="MarginBottomZero"><b>APR</b>: The percentage of interest to charge on the principal balance of completed procedures. If entered, additional options are available to delay interest charges. Enter only one. If both fields are left blank, interest is charged to all scheduled payments. Payment plan must be locked before saving. </p>
<ul class="MarginBottomGap">
<li><b>No interest for the first [ ] payments</b>: The number of payments before interest is applied.</li>
<li><b>Interest start date</b>: The date of the first interest charge.</li>
</ul>
<p class="MarginBottomZero">Interest is automatically calculated using the following method: </p>
<ol class="MarginBottomGap">
<li>Subtracts the down payment from the payment plan balance.</li>
<li>Calculates the number of payments, or the payment amount, based on the new balance (balance minus down payment).</li>
</ol>
<p class="MarginBottomZero">The amortization schedule can be based on a total number of payments or a specific payment amount. Enter only one. </p>
<ul class="MarginBottomGap">
<li><b>Payment Amount</b>: Enter the payment amount. Number of payments will be calculated automatically.</li>
<li><b>Number of Payments</b>: Enter the number of payments. Payment amount will calculate automatically.</li>
</ul>
<p class="MarginBottomZero"><b>Charge Frequency</b>: Select the frequency of which charges are applied to the payment plan. The options below are calculated based off the Date of First Payment. </p>
<ul class="MarginBottomGap">
<li><b>Weekly</b></li>
<li><b>Every other week</b></li>
<li><b>Specific day of the month</b></li>
<li><b>Monthly</b></li>
<li><b>Quarterly</b></li>
</ul>
<p class="MarginBottomZero"><b>Handle Treatment Planned</b>: Determine whether treatment planned procedures should be included in the total now, or as the work is completed. If toggling this setting, click Create Schedule to see changes.  </p>
<ul class="MarginBottomGap">
<li><b>Await procedure completion</b>: Do not include treatment planned procedures in the Amortization Schedule until the work is completed. When selected, treatment planned work will not display on printed payment plans. The patient may need to re-sign the payment plan each time work is completed.</li>
<li><b>Procedure as complete</b>: Include treatment planned procedures in the Amortization Schedule. The total for treatment planned work will display as a credit on the patient's account until the work is completed.</li>
</ul>
<h2>Term Buttons</h2>
<img src="images/paymentPlanDynamicTermButtons.png" width="111" height="99"/><p><b>Create Schedule</b>: Create the Amortization Schedule based on the terms. A description of the terms will show in the Note field. Production must be attached first. When editing the terms on existing plans, click Create Schedule to view the changes.</p>
<p><b>Cancel</b>: Cancel changes made to the Terms on existing payment plans. Click the Unlock button to enable. Only appears for existing Dynamic Payment Plans.</p>
<p><b>Save</b>: Save changes made to the Terms on existing payment plans. Only appears for existing Dynamic Payment Plans. Click the Unlock button to enable. </p>
<p><b>Templates</b>: Open <a href="payplantemplates.html">Payment Plan Templates</a> to quickly set terms. </p>
<h2>Loan Information</h2>
<img src="images/paymentPlanDynamicCalculations.png" width="202" height="138"/><p>Once the schedule is created or, updated and saved, the calculations below are automatic.</p>
<p><b>Total Cost of Loan</b>: Total Amount plus interest and any added charges.</p>
<p><b>Accumulated Due</b>: The total amount that has been due up to the current date.</p>
<p><b>Paid so far</b>: The total amount that has been paid towards the payment plan to date.</p>
<p><b>Principal paid so far</b>: The total amount that has been paid towards the principal to date.</p>
<p><b>Tx Completed Amt</b>: The total fee amount for charges that have come due.</p>
<p><b>Total Tx Amt</b>: The total fee amount for all production that is attached to the payment plan. Will not display until after plan has been saved by clicking OK.</p>
<h2>Note</h2>
<img src="images/paymentPlanDynamicNote.png" width="669" height="111"/><p>A detailed note of the terms shows for future reference. Any changes made to the terms will be added to the note. Other notes can be added as needed.</p>
<p>If the <a href="preferences.html">Preference</a>, <i> Pay Plans use Sheets</i> is checked, additional Terms and Conditions are displayed when viewing or signing the repayment agreement. Customize the default message in Preferences. Updating the terms will also update any replacement fields used in the default message.</p>
<h2>Schedule Tab</h2>
<img src="images/paymentPlanDynamicSchedule.png" width="677" height="283"/><p class="MarginBottomZero"><b>Amortization Schedule</b>: The amortization schedule is generated based on the terms. Principal and interest are calculated automatically. Due dates are based on the <i>Date of First Payment</i> and selected <i>Charge Frequency</i>.<br/></p>
<ul class="MarginBottomGap">
<li>A horizontal bold line indicates today's date and separates past items from future items.</li>
<li>Line items in black represent charges that have posted to the account. Gray line items are projected future charges. Charges are actually posted to the account using the <a href="opendentalservice.html">Open Dental Service</a> daily at the time determined in Preferences.</li>
<li>Gray items can change if production is added or removed, or additional payments are made.</li>
<li>Payments attached to this payment plan show as green credits and affect the running balance. If extra payments show here, but should not, uncheck the <i>Attached to Payment Plan</i> box on the <a href="payment.html">Payment</a> window for each payment.</li>
</ul>
<p class="MarginBottomZero"><b>Ungrouped</b>: Determine how Pay Plan Charges and payments are displayed in the Amoritization Scheduled.  </p>
<ul class="MarginBottomGap">
<li>Unchecked (default): Individual Pay Plan Charge and payments are grouped into a single line item.</li>
<li>Checked: Pay Plan Charges show procedure information and are split by procedure amount. Individual payment splits are listed.</li>
</ul>
<img src="images/dynamicPayPlanSchedUngrouped.png" width="671" height="231"/><p><b>Hide past activity</b>: When checked, only future dated line items show in the Amortization Schedule and past activity is hidden. When unchecked, all activity shows. Totals are not affected by this setting. To set the default setting for the checkbox, see Preferences, <i>Payment Plans exclude past activity by default</i>.</p>
<p><b>Current Totals</b>: Automatically calculated based on current and past charges, accumulated payments, and the running balance.</p>
<h2>Production Tab</h2>
<img src="images/paymentPlanDynamicProduction.png" width="677" height="167"/><p class="MarginBottomZero"><b>Attached Production</b>: Displays the procedures and adjustments attached to the payment plan. </p>
<ul class="MarginBottomGap">
<li><b>Amount</b>: Default amount charged for the attached production item.</li>
<li><b>Amount Override</b>: Enter a new amount to override the default for the attached production item. Leave blank or enter zero to use the default amount.</li>
<li>Production is sorted by the date added then ordered by Ortho Case procedures, completed procedures, positive adjustments, and treatment planned procedures. </li>
</ul>
<p><div class="Note">Note: Additional insurance payments or adjustments applied towards any of the attached production items after the plan was created will automatically update future pay plan charges if the Amount Override is blank or Full lock is unchecked.</div>
</p>
<p><b>Delete</b>: Delete the selected production item from the attached production list.</p>
<p><b>Print</b>: Print the list of attached production (as shown), including the production total.</p>
<p><b>Show Attached P&amp;I</b>: View Pay Plan Charges and paysplits associated with the attached production.</p>
<img src="images/dynamicPayPlanAttachedPI.png" width="671" height="404"/><p><b>Add</b>: Attach production to the payment plan. Opens the Select Production window.</p>
<p></p>
<img src="images/paymentPlanDynamicSelectProduction.png" width="590" height="463"/><p class="MarginBottomZero">Select from a list of adjustments, completed procedures, and treatment planned procedures to attach to the payment plan. Only positive adjustments not attached to procedures are listed. </p>
<ul class="MarginBottomGap">
<li><b>Amount Original</b>: Amount of the production item prior to any payments, adjustments, or insurance estimates.</li>
<li><b>Amount End</b>: Amount owed on the production item after any payments, adjustments, and insurance estimates have been applied. </li>
</ul>
<p><div class="Note">Note: <ul>
<li>Production items can only be attached to a single payment plan.</li>
<li>To show automated sales tax amounts for newly treatment planned procedures, Update Fees in the <a href="treatmentplan.html">Treatment Plan Module</a>. </li>
</ul>
</div>
</p>
<h2>Saving, Closing Plan, and More</h2>
<img src="images/paymentPlanDynamicButtons.png" width="673" height="46"/><p><b>Delete</b>: Delete the entire plan. Also, clears any <a href="recurringchargesauthorize.html">Authorized Recurring Charges</a> attached to the plan. Payments cannot be attached.</p>
<p class="MarginBottomZero"><b>Close Plan</b>: Click to close a Payment Plan that is no longer being paid on (i.e., paid off or patient stopped making payments). </p>
<ul class="MarginBottomGap">
<li>Remaining production items that did not have a posted Pay Plan Charge are removed from the Payment Plan. The production amount is subtracted from the total principal and the Pay Plan Credits are removed from the account.</li>
<li>Any <a href="hiddensplits.html">Payment Plan Prepayments</a> are transferred to the Close Out Charge. If there is income left over, it will be transferred to <a href="unearnedprepayment.html">Unearned Income</a>. Use the income transfer manager to allocate the excess to other outstanding charges.</li>
<li><a href="recurringchargesauthorize.html">Authorize Recurring Charges</a> attached to this Payment Plan are cleared.</li>
<li>Interest charges for future-dated debits are removed. It does not affect historical debits.</li>
</ul>
<p><b>Print</b>: Click to print a copy of the payment plan Amortization Schedule and Terms or Payment Plan sheet.</p>
<p><b>Sign &amp; Print</b>: Displays instead of <b>Print</b> when the preference <i>Pay Plans use sheets for printing</i> is enabled and the payment plan sheet contains a signature box. See <a href="paymentplanprint.html">Sign and Print Payment Plan</a>.</p>
<p><b>eClipboard</b>: Send the Payment Plan to eClipboard. See <a href="eclipboardpaymentplans.html">eClipboard: Payment Plans</a>.</p>
<p><b>OK</b>: Click to close the window and save changes.</p>
<p><b>Cancel</b>: Click to close the window without saving changes.</p>
<h2>General Setup</h2>
<p class="MarginBottomZero">To set up a Dynamic Payment Plan, follow the steps below:  </p>
<ol class="MarginBottomGap">
<li>Verify the <i>Date of Agreement</i>. This is generally today, but a past date can be entered. </li>
<li>Optional: Enter the <i>Down Payment</i>. The down payment will be due today when the scheduled is created, regardless of the <i>Date of First Payment </i>or <i>Date of Agreement</i>.</li>
<li>Attach Production. Total Principal Amount will calculate automatically. <ol>
<li>Click the <b>Production</b> tab.</li>
<li>Click <b>Add</b>.</li>
<li>Select the procedure(s) or adjustment(s) to be paid by the payment plan. <ul>
<li>Unattached negative adjustments cannot be attached to a Dynamic Payment plan. Attach the <a href="adjustments.html">Adjustment</a> to a procedure being paid by the payment plan instead. </li>
</ul>
</li>
<li>Click <b>OK</b>.</li>
<li>Repeat the steps to add any additional procedures.</li>
</ol>
</li>
<li>Optional: Input the <i>APR</i> and interest terms.</li>
<li>Input the <i>Number of Payments</i> or <i>Payment Amt</i>. </li>
<li>Select the <b>Charge Frequency</b>.</li>
<li>If treatment planned procedures are included in <i>Attached Production</i>, select an option for <b>Handle Treatment Planned</b>.</li>
<li>Click <b>Create Schedule</b> to create the Amortization Schedule. </li>
<li>Verify the Payment Plan information.</li>
<li>Print or send the payment plan to the eClipboard for patient signature. </li>
<li>Optional: To prevent changes (e.g., adding additional production, changing repayment terms, etc) to the payment plan once it is saved, enable <b>Full Lock</b>. Dynamic Payment Plans with APR must have Full Lock enabled.</li>
</ol>
<h2>Edit an Existing Plan</h2>
<p>Double-click into an existing plan.</p>
<p>Click <b>Unlock </b>to edit the Terms. Dynamic Payment Plans with <i>Full Lock</i> enabled cannot be edited.</p>
<p><b>Editing Amortization Schedule and Charges</b></p>
<p>Double-click an unpaid, posted Pay Plan Charge to edit. </p>
<img src="images/dynamicPayPlanEditCharge.png" width="449" height="327"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date Entry</b>: Read only. Date and time stamp when the Pay Plan Charge was originally created.</li>
<li><b>Date Edit</b>: Read only. Date and time stamp when the Pay Plan Charge was most recently edited.</li>
<li><b>Date</b>: Defaults to the date the charge posted, but can be changed. This is that date displayed in the Amortization Schedule grid.</li>
<li><b>Note</b>: Displays in the Description column of the Amortization Schedule.</li>
<li><b>Principal</b>: Pay Plan Charge amount not including interest. If the Principal amount is reduced, any excess is shifted to the next charge. Charge totals for each date are not increased, so the overall Amortization Schedule may be affected, and the end date of the Payment Plan may be moved out. </li>
<li><b>Interest</b>: Automatically calculated based on Terms and Principal.</li>
<li><b>Provider</b>: Provider assigned to production</li>
<li><b>Clinic</b>: Clinic assigned to production.</li>
</ul>
<p class="MarginBottomZero">Click <b>Delete</b> to remove the charge from its current date.  </p>
<ul class="MarginBottomGap">
<li>The charge turns gray to indicate it is scheduled to be posted. <ul>
<li>If other charges have been billed to the Payment Plan, the deleted charge will be moved to the end of the Amortization Schedule. The end date for the payment plan may change.</li>
<li>If this is the only charge billed for the Payment Plan, the charge is still scheduled for the original date listed.</li>
</ul>
</li>
<li>Alternatively, Pay Plan Charges can be deleted by right-clicking from the Amortization Schedule or from the Patient Account Grid by right-clicking the PayPln: Debit (option only available when the Pay Plan charge logic is set to Age Credits and Debits in Preferences).</li>
</ul>
<p>If a grouped charge with multiple production items is selected, the Pay Plan Charge Selection window opens instead.</p>
<img src="images/dynamicPayPlanChargeSelect.png" width="290" height="147"/><p>Click <b>Zero out charges</b> to reduce the principal on all listed charges to zero. The charges are moved to the next charge date and subsequent charges rescheduled. To edit a specific charge, select it and click <b>OK</b> to open the Edit Payment Plan Charges window for the selected charge. </p>
<p><b>Update Amortization Schedule</b></p>
<p>After editing production or changing any terms, the Amortization Schedule must be updated. Click <b>Create Schedule</b> to update the Amortization Schedule. Any current charges that have been billed are not changed, but future charges are updated to match the current terms.</p>
<p>Once changes have been made to the Dynamic Payment Plan Terms or the Amortization Schedule, click <b>Save</b> to save changes. Click <b>OK</b> to exit the Dynamic Payment Plan window.</p>
<h2>View or Reopen Closed Payment Plans</h2>
<p>Payment plans that have been closed are still available to view or to reopen if needed. Only open Payment Plans can be edited; changing historical information is not recommended.</p>
<p class="MarginBottomZero">To show closed Payment Plans in the Payment Plan grid: </p>
<ol class="MarginBottomGap">
<li>In the Account Module, click the Show tab.</li>
<li>Check the box for <b>Show Completed Pay Plans</b>. This affects all workstations.</li>
</ol>
<p>All closed plans for the patient list in the Payment Plan grid in a light text color.</p>
<img src="images/paymentPlanClosed.gif" width="756" height="69"/><p class="MarginBottomZero">To reopen a closed Payment Plan: </p>
<ol class="MarginBottomGap">
<li>Double-click the closed plan to open the Payment Plan window.</li>
<li>In the lower right, click Reopen.</li>
</ol>
<img src="images/paymentplanReOpen.png" width="701" height="146"/><p>Only past activity shows in the amortization schedule. To reinstate the payment plan, a new amortization schedule will need to be created.</p>
<h2>Account Module Patient Account Tab</h2>
<p>Credits, debits, and payments for patient payment plans can optionally show as line items in the patient's Account Module and affect balances and aging depending on the <i>Pay Plan charge logic </i> preference.</p>
<p class="MarginBottomZero">If the <i>Pay Plan charge logic</i> is set to an option that display Pay Plan Credits as line items in the account grid, treatment planned procedures are treated differently depending on the selected <i>Handle Treatment Planned</i> setting of the Payment Plan. </p>
<ul class="MarginBottomGap">
<li>If set to <i>Await procedure completion</i>: Pay Plan Credits are initially posted as $0. When procedures are set complete, the credit is updated to match the Attached Production amount, and the Pay Plan Charge date remains unchanged.</li>
<li>If set to <i>Procedure as complete</i>: Pay Plan Credits are posted for the full amount of the Attached Production. </li>
</ul>
<h2>Setting up a Dynamic Payment Plan for use with an Insurance Payment Plan</h2>
<p>In order for a Dynamic Payment Plan to function properly with an ongoing <a href="paymentplanins.html">Insurance Payment Plan</a>, it must be set up a specific way. Follow the steps below to set up a Payment Plan for use with an Insurance Payment Plan.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Create the Dynamic Payment Plan:</li>
<ol>
<li>Attach production to the plan for the correct procedures. Ensure the amount (i.e., patient portion) is correct.</li>
<li>Set all other plan terms, schedule, and verify any other information. </li>
<li>In the Production tab, enter the <i>Amount Override</i> for the expected patient portion for all procedures being paid by the Insurance Payment Plan.</li>
</ol>
<li>Create the <a href="paymentplanins.html">Insurance Payment Plan</a> at the time of receiving first insurance payment.  <ul>
<li>Be sure to input the correct <i>Tx Completed Amount</i> (this should be the expected total payment from insurance).</li>
</ul>
<ul>
</ul>
</li>
</ol>
<p>If the patient portion changes, update the<i> Amount Override</i> in the Production tab of the Dynamic Payment Plan for plans not set to Full Lock. If the plan is set to Full Lock, this cannot be updated. </p>
</div>
</div>
</body>
</html>```
