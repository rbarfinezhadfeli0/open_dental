# File: ./www.opendental.com/manual243/paymentplanpatientfaq.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Payment Plan Q and A</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paymentplanpatientfaq','paymentplandynamic','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/paymentplanpatientfaq.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/paymentplanpatientfaq.html" >v24.2</option><option value="https://www.opendental.com/manual241/paymentplanpatientfaq.html" >v24.1</option><option value="https://www.opendental.com/manual233/paymentplanpatientfaq.html" >v23.3</option><option value="https://www.opendental.com/manual232/paymentplanpatientfaq.html" >v23.2</option><option value="https://www.opendental.com/manual231/paymentplanpatientfaq.html" >v23.1</option><option value="https://www.opendental.com/manual224/paymentplanpatientfaq.html" >v22.4</option><option value="https://www.opendental.com/manual223/paymentplanpatientfaq.html" >v22.3</option><option value="https://www.opendental.com/manual222/paymentplanpatientfaq.html" >v22.2</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Payment Plan Q and A</p></div>
<div class="GeneralPageContent">
<p>Below are some questions and answers about <a href="paymentplandynamic.html">Payment Plan</a>.</p>
<p>Information may apply to <a href="paymentplandynamic.html">Payment Plan</a>, <a href="paymentplanins.html">Insurance Payment Plans</a>, or <a href="paymentplanpatient.html">Old Payment Plan</a>.</p>
<h2>Pay Plan Charge Logic</h2>
<p><b>How does each Pay Plan Logic Preference function?</b></p>
<p>Pay Plan Logic <a href="preferences.html">Preferences</a>, determines how <i>PayPln: Charge Due</i> and <i>PayPln: Production</i> line items show in the patient account grid for Payment Plans and Old Payment Plans. It also determines whether PayPlan Production and PayPlan Charges Due affect balances, aging, and reports. This logic does not apply to Insurance Payment Plans. </p>
<p>Below is information on how each preference functions and screenshots of how Payment Plans appear in the Patient Account ledger.</p>
<p class="MarginBottomZero"><b>Do Not Age (Legacy)</b>: Charges Due and payments only show within the payment plan and do not affect balance or aging.  </p>
<ul class="MarginBottomGap">
<li>PayPlan Charges Due are totaled in the Payment Plans grid under Due Now.</li>
<li>Payment plan payments do not show in the ledger but in the payment plan. Double-clicking the plan row is the only way to view payment plan payments.</li>
<li>A single line item for PayPln: Production is added to the patient account grid, thus reducing the total account balance by the amount. The amount is based on the Tx Completed Amt set in the payment plan.</li>
<li>Other payment plan production, Charges Due, and payments do not show in the account grid nor do they affect balances or aging.</li>
<li>The total A/R in the Aging of A/R report does not include payment plan due amounts.</li>
<li>Only changes to the Tx Completed Amount affect aging and production and income reports.</li>
<li>Payment plan amounts are not included on the <a href="reportreceivablesbreakdown.html">Receivables Breakdown Report</a>.</li>
</ul>
<img src="images/payPlanAccountDoNotAge.png" width="757" height="176"/><p class="MarginBottomZero"><b>Age Credits and Debits (Default)</b>: Charges Due, payment plan production, and payments show as line items in patient account grid and affect balances and aging.<br> When the patient is in the same family as the payment plan guarantor, the behavior is as follows. </p>
<ul class="MarginBottomGap">
<li>Payment plan charges due (PayPln: Charge Due) and production (PayPln: Production) show as line items in the patient account ledger.</li>
<li>Payment plan payments show in the account ledger.</li>
<li>Payment plan due amounts are included the patient's balance.</li>
<li>Payment plan amounts due and payments are considered when calculating aging.</li>
<li>Payment plan Charges Due and production are included on the Receivables Breakdown report.</li>
<li>Changes made to historical Pay Plan Charges Due affect historical information (e.g., Aging of A/R, Production and Income reports).</li>
</ul>
<img src="images/payPlanAccountAgeCreditsDebits.png" width="757" height="257"/><p class="MarginBottomZero">When the patient is in a different family than the payment plan guarantor, the behavior is as follows. </p>
<ul class="MarginBottomGap">
<li>Payment plan charges due (PayPln: Charge Due) show as line items in the guarantor's account ledger.</li>
<li>Payment plan production (PayPln: Production) show as line items in the patient's account ledger.</li>
<li>Payment plan payments show in the guarantor's account ledger.</li>
<li>Payment plan due amounts are included in the guarantor's balance.</li>
</ul>
<img src="images/payPlanDefaultDiffFamilyGuarantor.png" width="915" height="144"/><p class="MarginBottomZero"><b>Age Credits Only</b>: Patients are credited for payment plans when the charge comes due, but Charges Due all exist separately from the account grid. </p>
<ul class="MarginBottomGap">
<li>Each payment PayPln: Production line item shows in the account grid, sorted by Date Showing or Tx Credit date.</li>
<li>Payment plan amounts due only show in the Payment Plan grid. They do not show in the account ledger.</li>
<li>Payment plan amounts due are not considered when calculating balances and aging.</li>
<li>Payment plan production and Charges Due are not included on the Receivables Breakdown report.</li>
<li>Changes made to historical payment plan production affect historical information (e.g., Aging of A/R, Production and Income reports).</li>
<li>Payments attached to the payment plan only show in the Payment Plan window; they do not display in the account ledger.</li>
</ul>
<img src="images/payPlanAccountCreditsOnly.png" width="757" height="189"/><p class="MarginBottomZero"><b>No Charges to Account (Rarely Used)</b>: PayPln: Production or PayPln:Charges Due line items are posted to the account. Patients are not credited for payment plans, so the account balance is aged normally. </p>
<ul class="MarginBottomGap">
<li>Payment plan amounts due only show in the Payment Plan grid. They do not show in the account ledger.</li>
<li>Payments to payment plans show in ledger and payment plan.</li>
<li>Payment plan amounts are not included on the Receivables Breakdown report.</li>
</ul>
<img src="images/payPlanAccountNoCharges.png" width="757" height="176"/><h2>Changing Pay Plan Charge Logic</h2>
<p><p><b>I am considering transitioning to Age Credits and Debits logic. What do I need to know?</b></p>
</p>
<p class="MarginBottomZero">When you first transition, patient account balances change: </p>
<ul class="MarginBottomGap">
<li>The account balance for any patient with a patient payment plan changes by the payment plan amount currently due.</li>
<li>The Family Aging amounts include patient payment plan charges currently due.</li>
<li>The total A/R in the <a href="reportaging.html">Aging of Accounts Receivable (A/R) Report</a> changes.</li>
</ul>
<p><b>How can I see the difference between Do Not Age logic and Age Credits and Debits logic in the Aging of A/R Report amounts?</b></p>
<ol>
<li>With Do Not Age selected: <ul>
<li>Run the Aging of A/R report (Check <b>Include Negative Balances</b>).</li>
<li>Run the <a href="reportpaymentplan.html">Payment Plans Report</a>. Select Patient as the Payment Plan Type. Uncheck <b>Hide Completed Payment Plans</b> and <b>Limit to Plans Created in Date Range</b>. The Due Now column indicates the total payment plan amount due.</li>
</ul>
</li>
<li>With Age Credits and Debits selected, run the Aging of A/R report again (Check <b>Include Negative Balances</b>).</li>
</ol>
<br><p>The Total column from the report in step 1 (traditional) + the Due Now amount from the Payment Plan report equals the Total column from report in step 2 (Age Credits and Debits).</p>
<h2>Overcharged Payment Plans</h2>
<p><p><b>A patient has an Old Payment Plan with overcharged production. How do I reduce the production on the plan and re-allocate the patients' overpayment?</b></p>
</p>
<p><div class="Note">Note: Following the steps outlined below prevent users from creating future income transfers on the affected accounts using the <a href="incometransfermanager.html">Income Transfer Manager</a>.</div>
</p>
<p>An Old Payment Plan may become overcharged if procedures attached to the plan are discounted or if insurance pays more than expected after the Old Payment Plan is created. To reduce the payment plan charges, the easiest method is to delete the Old Payment Plan and recreate it for the correct procedure balance. However, if payments are attached to the plan, complete the steps below.</p>
<p>In order to correct the Old Payment Plan, it must be open and have a remaining balance equal to the total overcharged amount.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>If the Old Payment Plan is closed, double-click into the plan, click <b>Reopen</b>, then click <b>OK</b> to exit and save.</li>
<li>Transfer patient income from each overcharged procedure on the Old Payment Plan and allocate it to an outstanding charge or to <a href="unearnedprepayment.html">Unearned / Prepayment</a> (to be allocated later). See <a href="incometransfer.html">Income Transfer</a>.</li>
<li>Double-click back into the Old Payment Plan and create a pay plan adjustment to remove the overcharged production; click <b>Add Adjustment</b>.</li>
<li>In the Negative Pay Plan Adjustment window, enter the total overcharged amount and click <b>OK</b>. The total adjustment amount is credited to the payment plan. If the total adjustment exceeds a single pay plan charge, the amount is split between the pay plan charges with a remaining balance.</li>
<li>Associate the pay plan adjustment to the procedure credits attached to the Old Payment Plan; click <b>View Tx Credits</b>.</li>
<li>In the Payment Plan Procedures and Credits window, highlight the Adjustment credit (blue line item) and click <b>Delete</b>. This removes the unattached credit created by the pay plan adjustment.</li>
<li>Create a new credit attached to each overcharged procedure. Overcharged procedures have a negative amount in the Rem After column. Highlight the overcharged procedure (yellow line item), verify the amount matches the amount to be credited, and click <b>Add</b>. Repeat for each overcharged procedure on the Old Payment Plan, then click <b>OK</b> to save and exit the Tx Credits window.</li>
<li>If the amounts on the payment plan summary all match and there are no future charges remaining, the Old Payment Plan may be closed; click <b>Close</b>. </li>
</ol>
<p><p><b>Why do I get a warning that a Payment Plan is overcharged when trying to use the Income Transfer Manager, but the Payment Plan does not appear on the Payment Plans Overcharged Report?</b></p>
</p>
<p>If production (i.e., procedures and adjustments) attached to a Payment Plan has an Amount Override entered or the Payment Plan has Permanent Lock enabled, it does not show on the <a href="reportdynamicpayplanovercharged.html">Payment Plans Overcharged Report</a>, however if trying to use the <a href="incometransfermanager.html">Income Transfer Manager</a>, there is a warning if production is overcharged. </p>
<p>Payment Plans with an Amount Override entered after all PayPlan Charges have posted for the production, may still appear on the report.</p>
<h2>Pay Plan Charges</h2>
<p><b>When trying to edit a pay plan charge, I get the message <i>The phrase 'Down Payment' cannot be used in the notes.</i></b></p>
<p>This text is used to denote the Down Payment amount. The Down Payment charge is automatically created when the Amortization Schedule is created. If no Down Payment amount was entered when the payment plan was created, other charges cannot be designated as the Down Payment. The payment plan must be deleted and recreated instead.</p>
<p><b>The dates for pay plan charges have changed, but no user edited the Payment Plan.</b></p>
<p>For Payment Plans, the <a href="opendentalservice.html">Open Dental Service</a> must be installed and running in order for pay plan charges to be posted on charge date. If the Open Dental Service is not running at the <i>Pay Plan run time</i> on the charge date, the dates for any charges not already created in the database (i.e., already posted or manually edited) are adjusted. The charge dates are moved one increment depending on the Charge Frequency.</p>
<p>For example, if an unposted charge was scheduled to occur on 10/1/2024 and the Charge Frequency is Monthly, the charge is rescheduled to occur on 11/1/2024. All subsequent charges are also rescheduled to occur one month later.</p>
<h2>Payment Plan Overpayments</h2>
<p><b>Why do I get a Payment Plan Overpayment Detected warning when trying to attach a payment to a Payment Plan?</b></p>
<p>When saving a payment where the total amount of payment splits attached to the Payment Plan exceeds the current Due Now balance, a prompt is shown to determine how the overpayment should be handled. </p>
<p>Click Yes to pay the amount toward principal. Once the payment is saved, a new pay plan charge for the excess amount is created and the Payment Plan Balancer is run automatically to allocate the payment to pay plan charges. </p>
<p>Click No to treat the overpayment as a prepayment. Once the payment is saved, the Payment Plan Balancer is run automatically to allocate the payment. The overpayment amount is allocated to the <i>Payment plan unearned type</i> set in Preferences. </p>
</div>
</div>
</body>
</html>```
