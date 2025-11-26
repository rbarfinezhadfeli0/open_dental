# File: ./www.opendental.com/manual243/paymentplanins.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Insurance Payment Plans</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paymentplanins','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/paymentplanins.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/paymentplanins.html" >v24.2</option><option value="https://www.opendental.com/manual241/paymentplanins.html" >v24.1</option><option value="https://www.opendental.com/manual233/paymentplanins.html" >v23.3</option><option value="https://www.opendental.com/manual232/paymentplanins.html" >v23.2</option><option value="https://www.opendental.com/manual231/paymentplanins.html" >v23.1</option><option value="https://www.opendental.com/manual224/paymentplanins.html" >v22.4</option><option value="https://www.opendental.com/manual223/paymentplanins.html" >v22.3</option><option value="https://www.opendental.com/manual222/paymentplanins.html" >v22.2</option><option value="https://www.opendental.com/manual221/paymentplanins.html" >v22.1</option><option value="https://www.opendental.com/manual214/paymentplanins.html" >v21.4</option><option value="https://www.opendental.com/manual213/paymentplanins.html" >v21.3</option><option value="https://www.opendental.com/manual212/paymentplanins.html" >v21.2</option><option value="https://www.opendental.com/manual211/paymentplanins.html" >v21.1</option><option value="https://www.opendental.com/manual205/paymentplanins.html" >v20.5</option><option value="https://www.opendental.com/manual204/paymentplanins.html" >v20.4</option><option value="https://www.opendental.com/manual203/paymentplanins.html" >v20.3</option><option value="https://www.opendental.com/manual202/paymentplanins.html" >v20.2</option><option value="https://www.opendental.com/manual201/paymentplanins.html" >v20.1</option><option value="https://www.opendental.com/manual194/paymentplanins.html" >v19.4</option><option value="https://www.opendental.com/manual193/paymentplanins.html" >v19.3</option><option value="https://www.opendental.com/manual192/paymentplanins.html" >v19.2</option><option value="https://www.opendental.com/manual191/paymentplanins.html" >v19.1</option><option value="https://www.opendental.com/manual184/paymentplanins.html" >v18.4</option><option value="https://www.opendental.com/manual183/paymentplanins.html" >v18.3</option><option value="https://www.opendental.com/manual182/paymentplanins.html" >v18.2</option><option value="https://www.opendental.com/manual181/paymentplanins.html" >v18.1</option><option value="https://www.opendental.com/manual174/paymentplanins.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Insurance Payment Plans</p></div>
<div class="GeneralPageContent">
<p>Insurance Payment Plans can be used to track expected insurance payments (e.g., insurance installment payments). </p>
<p>In the <a href="account.html">Account Module</a>, Payment Plans grid, they show with the Type <i>Ins</i>.</p>
<img src="images/payplaninsgrid.png" width="757" height="63"/><p><div class="Note">Note: <ul>
<li>The grid can also list regular <a href="paymentplandynamic.html">Payment Plan</a>, <a href="installmentplan.html">Installment Plan</a>, and <a href="paymentplanpatient.html">Old Payment Plan</a>.</li>
<li>Insurance Payment Plans can only be used in conjunction with Payment Plans if using the correct setup. See Payment Plans, Setting up a Payment Plan in Conjunction with an Insurance Payment Plan for additional information.</li>
<li>See General Setup steps at the bottom of this page.</li>
</ul>
</div>
</p>
<p>To create a new Insurance Payment Plan, in the Account Module, click Payment Plan, Insurance Payment Plan. </p>
<img src="images/payPlanIns.png" width="915" height="645"/><p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our <a href="https://youtu.be/bhmmJgJtj-0">Insurance Payment Plan Webinar</a>. </p>
<h2>General Agreement Information</h2>
<img src="images/insPayPlanGeneral.png" width="381" height="186"/><p><b>Category</b>: Assign a category to this payment plan (e.g., Ortho, Implant). Useful to distinguish one payment plan from another when families have many plans. Customize category options in <a href="definitionspaymentplancategories.html">Definitions: Payment Plan Categories</a>.</p>
<p><b>Patient</b>: The person who was treated. Click <b>Go To</b> to switch to their account. Patients can have multiple payment plans, and each plan can have a different guarantor.</p>
<p><b>Provider</b>: Use the dropdown or click <b>[...]</b> to change the provider assigned to the payment plan. </p>
<p><b>Clinic</b>: Use the dropdown to change the clinic assigned to the payment plan.</p>
<p><b>Insurance Plan</b>: Click <b>Change</b> to select the insurance plan this payment plan is attached to, then click <b>OK</b>.</p>
<p><b>Date of Agreement</b>: Defaults to today's date. Can be changed to a past date.</p>
<h2>Terms</h2>
<p>Terms affect the Amortization Schedule.</p>
<img src="images/insPayPlanTerms.png" width="380" height="216"/><p><b>Total Amount</b>: Enter the total amount of expected payments from insurance.</p>
<p><b>Date of First Payment</b>: Enter the date the first insurance payment is received (e.g., today's date). Defaults to one month from the current date. Can be changed to any date </p>
<p><b>Down Payment</b>: Enter the down payment amount. This is expected due immediately (i.e., Date of Agreement).</p>
<p class="MarginBottomZero"><b>APR</b>: Typically APR is not charged on Insurance Payment Plans. If insurance is paying interest, enter the rate here. If an amount other than 0 is entered, the following fields are available: (only one can be used at a time.) </p>
<ul class="MarginBottomGap">
<li><b>No interest for the first # payments</b>: Enter a number to prevent interest from calculating until after those payments (e.g., if 3 is entered, interest is not be calculated until the fourth payment). Does not include the down payment.</li>
<li><b>Interest start date</b>: Type a date to prevent interest from being calculated until after the entered date.</li>
</ul>
<p class="MarginBottomZero"><b>Either</b>: To calculate the payments, enter in one of the following: </p>
<ul class="MarginBottomGap">
<li><b>Number of Payments</b>: Enter the total number of payments insurance is expected to make.</li>
<li><b>Payment Amt</b>: Enter the dollar amount insurance is expected to pay for each payment.</li>
</ul>
<p><b>Recalculate</b>: Insurance Payment Plans cannot be recalculated.</p>
<p><b>More Options</b>: Click to open the Payment Plan Options window and select the frequency of payments. The default frequency is Monthly.</p>
<img src="images/paymentPlanPatientMoreOptions.png" width="494" height="303"/><p><b>Create Schedule</b>: Click to create the Amortization Schedule.</p>
<h2>Loan Information</h2>
<p>All fields are read-only and auto-calculated except the <i>Tx Completed Amt</i> field.</p>
<img src="images/insPayPlanLoan.png" width="299" height="141"/><p><b>Total Cost of Loan</b>: Total Amount + calculated Interest + Pay Plan Adjustments</p>
<p><b>Accumulated Due</b>: Total payments due to date.</p>
<p><b>Paid so far</b>: Total amount paid toward the payment plan to date. Payments must be attached to the payment plan to calculate in the total.</p>
<p><b>Principal paid so far</b>: Total amount that has been paid towards the principal to date. Payments must be attached to the payment plan to calculate in the total.</p>
<p><b>Tx Completed Amt</b>: The total amount of all insurance payments. This amount is applied as a <i>PayPln: Production</i> line item with the description <i>Expected payments from [Insurance Carrier]</i> to the patient's account. The amount is deducted from the patient's balance.</p>
<h2>Amortization Schedule and Note</h2>
<p>The Amortization Schedule is generated based on the terms. Principal and interest are calculated automatically. Due dates are based on the <i>Date of First Payment</i> and the frequency selected from <b>More Options</b>. </p>
<img src="images/insPayPlanSched.png" width="650" height="456"/><p><b>Exclude past activity</b>: When checked, only future dated line items show in the Amortization Schedule and past activity is hidden. When unchecked, all activity shows. Totals are not affected by this setting. To set the default setting for the checkbox, see <a href="preferences.html">Preferences</a>, <i>Payment Plans exclude past activity by default</i>.</p>
<p><b>Current Totals</b>: Automatically calculated based on current and past charges, accumulated payments, and the running balance.</p>
<p>A horizontal bold line indicates today's date and separates past items from future items. Any amount currently due is bold. Payments attached to this plan show in the Payment column and affect the running balance. The provider column notes the last name of the provider assigned to the payment split attached to the payment plan. </p>
<p>Double-click an existing charge to edit. See Edit Pay Pan Charge section below for details.</p>
<p><b>Note</b>: A detailed note of the terms is added automatically. Any changes made to the terms will be added to the note. Other notes can be added as needed. <a href="rightclicktextboxes.html">Right Click Text Box</a> the text box for additional options.</p>
<h2>Saving, Adjustments, Closing Plan, and More</h2>
<img src="images/payPlanSave.png" width="753" height="33"/><p><b>Delete</b>: Delete the entire payment plan.</p>
<p><b>Close Plan</b>: Click to close out the payment plan. Do this once insurance stops making payments (i.e., pays off the claim or is no longer paying). If insurance paid less than was originally anticipated, a warning appears.</p>
<img src="images/insPayPlanCloseWarn.png" width="405" height="160"/><p> Click <b>Yes</b> to proceed with closing the payment plan. The <i>Tx Completed Amt</i> is adjusted to match the <i>Paid so far</i> amount. Click <b>No</b> to return to Insurance Payment Plan window without closing the payment plan. </p>
<p><b>Add</b>: Add a new payment plan charge or note to the Amortization Schedule. See Edit Pay Plan Charge below.</p>
<p><b>Add Adjustment</b>: Add a negative payment plan adjustment to discount a portion of the payment plan balance (e.g., for a courtesy discount). The Negative Pay Plan Adjustment window opens. Enter the amount to adjust off the payment plan.</p>
<p><b>eClipboard</b>: Not used for Insurance Payment Plans.</p>
<p><b>Clear Schedule</b> Click to clear the existing Amortization schedule.</p>
<p><b>Print</b>: Click to print the payment plan. See <a href="paymentplanprint.html">Sign and Print Payment Plan</a>.</p>
<p><b>Yes</b>: Click to close the window and save changes.</p>
<p><b>No</b>: Click to close the window without saving changes.</p>
<p><div class="Note">Note: To track insurance payments for procedures on multiple claims, create a payment plan for each claim</div>
</p>
<h2>Edit Pay Plan Charge</h2>
<p>Click <b>Add</b> to create an additional Pay Plan Charge on the Amortization Schedule or double-click an existing charge from the Amortization Schedule grid to edit.</p>
<img src="images/insPayPlanChargeEdit.png" width="401" height="331"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date Entry</b>: Read only. Date and time stamp when the Pay Plan Charge was originally created.</li>
<li><b>Date Edit</b>: Read only. Date and time stamp when the Pay Plan Charge was most recently edited.</li>
<li><b>Date</b>: Defaults to the date entry, but can be changed. This is that date displayed in the Amortization Schedule grid.</li>
<li><b>Note</b>: Displays in the Description column of the Amortization Schedule. The text "Down Payment" is not allowed as Down Payments cannot be edited. Right-click the text box for additional options.</li>
<li><b>Principal</b>: Pay Plan Charge amount not including interest.</li>
<li><b>Interest</b>: Read only. This is automatically calculated based on Terms and Principal.</li>
<li><b>Provider</b>: Read only. Provider assigned to Payment Plan.</li>
<li><b>Clinic</b>: Read only. Clinic assigned to payment plan.</li>
</ul>
<p>Click <b>Delete</b> to remove a charge from the Amortization Schedule. This recalculates the <i>Total Amount</i>.</p>
<p>Click <b>Save </b>to keep changes. If adding a new charge or changing Principal amount, the <i>Total Amount</i> is recalculated.</p>
<h2>General Setup</h2>
<p class="MarginBottomZero">Setting up an Insurance Payment Plan: </p>
<ol class="MarginBottomGap">
<li>Create and send the insurance <a href="claimedit.html">Claim</a>. Each claim can only be associated with one payment plan.</li>
<li>When the first insurance payment comes in, set up the Insurance Payment Plan before receiving the payment. <ol>
<li>If insurance is making a large first installment payment (this is uncommon) input this as the Down Payment. </li>
<li>Input the <i>Total Amount</i>.</li>
<li>Uncommon: Input the <i>APR</i> and interest information.</li>
<li>Input the <i>Number of Payments</i> or <i>Payment Amt</i>. </li>
<li>Click <b>More Options</b> and choose the payment frequency.</li>
<li>Click <b>Create Schedule</b> to create the Amortization Schedule. </li>
<li>In the <i>Tx Completed Amt</i> field, note the total expected principal payments from insurance (i.e, not including any interest).</li>
<ul>
<li>Adding the <i>Tx Completed Amt</i> creates a <i>PayPln:Production</i> line item on the account for expected insurance payments. This ensures the patient is not responsible for the amount expected to be paid by insurance.</li>
</ul>
</ol>
</li>
<li><a href="claimreceive.html">Receive Claim</a> and <a href="claimpayfinalize.html">Finalize Insurance Payment</a> as normal. <ul>
<li>To receive claim payments, with interest (uncommon), see <a href="insinterest.html">Interest on Insurance Payments</a></li>
</ul>
</li>
<li>As subsequent payments come in, receive them as <a href="claimpaymentsupplemental.html">Supplemental Insurance Payments</a>.</li>
<li>Once insurance has paid off the payment plan or stops making payments, click <b>Close Plan</b>.  <ul>
<li>The user is prompted to adjust the <i>Tx Completed Amt</i> to the amount actually paid by insurance, so if there was any balance unpaid, it is now patient responsibility.</li>
</ul>
</li>
</ol>
<p>If the Insurance Payment Plan was created prior to receiving the first insurance payment, payments are automatically attached to the Insurance Payment Plan. If the payment plan is created after receiving insurance payments, users must manually mark insurance payments as attached to the payment plan. See Attaching Payments to an Insurance Payment Plan below for more information. </p>
<div class="Note">Note: <ul>
<li>Run the <a href="reportinspayplanpastdue.html">Insurance Payment Plans Past Due Report</a> to view patients with Insurance Payment Plan amounts past due.</li>
<li><i>Due Now</i> column in Payment Plans grid is for patient due amounts and does not apply to Insurance Payments due.</li>
</ul>
</div>
<br><br><h2>Attaching Payments to an Insurance Payment Plan</h2>
<p>Attaching/Detaching Payments to or from Plans: If a user creates the claim payment before the Insurance Payment Plan, payments are not automatically attached to the payment plan. To manually attach, open the claim payment by double-clicking the procedure to open the <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a> window, then check <b>Attached to Insurance Payment Plan</b>.</p>
<p>To detach a payment from an Insurance Payment Plan, open claim, double-click the procedure to open the Claim Procedure window, then uncheck <b>Attached to Insurance Payment Plan</b>.</p>
<p>If entering the first payment on a claim and there are multiple Insurance Payment Plans attached to the patient without payments attached, there is a prompt to select the payment plan. If only one Insurance Payment Plan without payments attached exists, the payment is automatically associated to that payment plan. Supplemental payments to the same claim are automatically attached to the same Insurance Payment Plan as the original payment. </p>
<h2>View or Reopen Closed Payment Plans</h2>
<p>Payment plans that have been closed are still available to view or to reopen if needed. Only open payment plans can be edited; changing historical information is not recommended.</p>
<p class="MarginBottomZero">To show closed payment plans in the Payment Plans grid: </p>
<ol class="MarginBottomGap">
<li>In the Account Module, click the Show tab.</li>
<li>Check the box for <b>Show Completed Pay Plans</b>. This affects all workstations.</li>
</ol>
<p>All closed plans for the patient list in the Payment Plans grid in a light text color.</p>
<img src="images/payPlanInsClosed.png" width="757" height="90"/><p class="MarginBottomZero">To reopen a closed payment plan: </p>
<ol class="MarginBottomGap">
<li>Double-click the closed plan to open the payment plan window.</li>
<li>Click <b>Reopen</b>.</li>
</ol>
<img src="images/paymentplanReOpen.png" width="712" height="150"/><p>Only past activity shows in the Amortization Schedule. To reinstate the payment plan, a new Amortization Schedule must be created.</p>
<h2>Troubleshooting</h2>
<p><b>When entering the insurance payment, it does not automatically attach to the payment plan even though there is a balance on the plan.</b></p>
<ul>
<li>First check that the Tx Completed Amt in the Insurance Payment Plan matches the Total Amount of expected payments.</li>
<li>If the Tx Completed Amt is 0, you will be unable to attach the payment to the plan.</li>
</ul>
</div>
</div>
</body>
</html>```
