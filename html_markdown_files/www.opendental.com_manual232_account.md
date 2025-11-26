# File: ./www.opendental.com/manual232/account.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Account Module</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/account.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/account.html" >v24.2</option><option value="https://www.opendental.com/manual241/account.html" >v24.1</option><option value="https://www.opendental.com/manual233/account.html" >v23.3</option><option value="https://www.opendental.com/manual232/account.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/account.html" >v23.1</option><option value="https://www.opendental.com/manual224/account.html" >v22.4</option><option value="https://www.opendental.com/manual223/account.html" >v22.3</option><option value="https://www.opendental.com/manual222/account.html" >v22.2</option><option value="https://www.opendental.com/manual221/account.html" >v22.1</option><option value="https://www.opendental.com/manual214/account.html" >v21.4</option><option value="https://www.opendental.com/manual213/account.html" >v21.3</option><option value="https://www.opendental.com/manual212/account.html" >v21.2</option><option value="https://www.opendental.com/manual211/account.html" >v21.1</option><option value="https://www.opendental.com/manual205/account.html" >v20.5</option><option value="https://www.opendental.com/manual204/account.html" >v20.4</option><option value="https://www.opendental.com/manual203/account.html" >v20.3</option><option value="https://www.opendental.com/manual202/account.html" >v20.2</option><option value="https://www.opendental.com/manual201/account.html" >v20.1</option><option value="https://www.opendental.com/manual194/account.html" >v19.4</option><option value="https://www.opendental.com/manual193/account.html" >v19.3</option><option value="https://www.opendental.com/manual192/account.html" >v19.2</option><option value="https://www.opendental.com/manual191/account.html" >v19.1</option><option value="https://www.opendental.com/manual184/account.html" >v18.4</option><option value="https://www.opendental.com/manual183/account.html" >v18.3</option><option value="https://www.opendental.com/manual182/account.html" >v18.2</option><option value="https://www.opendental.com/manual181/account.html" >v18.1</option><option value="https://www.opendental.com/manual174/account.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Account Module</p></div>
<div class="GeneralPageContent">
<p>The Account <a href="modules.html">Module</a> is where a patient's financial information and claim history is viewed.</p>
<img src="images/account.png" width="915" height="536"/><p>By default the selected patient's information is displayed. Set default options in <a href="preferences.html">Preferences</a> and <a href="allocationssetup.html">Allocations Setup</a>.</p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynCnYKR2Y5ngkYf-rLqjw9j5F">Account Module Playlist</a>.</p>
<h2>Account Toolbar</h2>
<img src="images/accountToolbar.png" width="873" height="27"/><p class="MarginBottomZero"><b>Payment</b>: Click the button to enter a patient <a href="payment.html">Payment</a>. </p>
<ul class="MarginBottomGap">
<li><b>Allocate Unearned</b>: Click the dropdown to <a href="unearnedallocate.html">Allocate Unearned Income</a>.</li>
<li><b>Income Transfer</b>: Click the dropdown to perform an <a href="incometransfer.html">Income Transfer</a>.</li>
<li><b>Send Payment to eClipboard</b>: For eClipboard users only. Click the dropwdown to send statements and payments to eClipboard. See <a href="eclipboardpayment.html">eClipboard: Payment</a>.</li>
</ul>
<p class="MarginBottomZero"><b>Adjustment</b>: Select a single procedure and click the button to enter single negative or positive <a href="adjustments.html">Adjustment</a>. Select multiple procedures and click the button to <a href="adjustmentsmultiwindow.html">Add Multiple Adjustments</a> at once. </p>
<ul class="MarginBottomGap">
<li><b>Apply Sales Tax</b>: Click the dropdown to apply <a href="salestax.html">Sales Tax</a>. </li>
<li><b>Add Multiple</b>: Click the dropdown to create adjustments for multiple procedures at once. </li>
</ul>
<p class="MarginBottomZero"><b>New Claim</b>: Click the button to <a href="claimedit.html">Create a Claim</a> based on the patient's currently active insurance plans. Claims are automatically created for both primary and secondary insurance plans. Click the dropdown for additional options: </p>
<ul class="MarginBottomGap">
<li><b>Primary</b>: Create a primary dental claim.</li>
<li><b>Secondary</b>: Create a <a href="inssecondary.html">Secondary Insurance</a> dental claim.</li>
<li><b>Medical</b>: Create a medical or institutional claim.</li>
<li><b>Other</b>: Create a claim for other (e.g., tertiary) insurance plans.</li>
</ul>
<p class="MarginBottomZero"><b>Payment Plan</b>: Click to create a payment plan.  </p>
<ul class="MarginBottomGap">
<li><b>Dynamic Payment Plan</b>: See <a href="paymentplandynamic.html">Dynamic Payment Plan</a>.</li>
<li><b>Patient Payment Plan</b>: See <a href="paymentplanpatient.html">Patient Payment Plan</a>.</li>
<li><b>Insurance Payment Plan</b>: See <a href="paymentplanins.html">Insurance Payment Plans</a>.</li>
</ul>
<p><b>Installment Plan</b>: Set up <a href="installmentplan.html">Installment Plan</a>. This is a quick alternative to a payment plan.</p>
<p><b>Quick Procs</b>: See <a href="quickprocs.html">Quick Procs</a>.</p>
<p><b>Repeating Charge</b>: Add <a href="repeatingcharges.html">Repeating Charges</a> to the patient's balance on a monthly basis. </p>
<p class="MarginBottomZero"><b>Statement</b>: Click the button to send a statement to the printer. Prints all transactions within the number of days set in <a href="billingdefaults.html">Billing Defaults</a> or, the date range entered in the Show tab (see below). Click the dropdown to select another option. See <a href="statement.html">Statement</a>. </p>
<ul class="MarginBottomGap">
<li><b>Walkout</b>: Send a walkout statement directly to the printer. Displays information (procedures, payments, adjustments, etc) from today's date only, for the selected patient. </li>
<li><b>Email</b>: Email a PDF version of the full statement. <div class="Note">Note: To securely email statements, see <a href="billingdefaults.html">Billing Defaults</a>. Regular email is not a secure method of sending statements (PHI). </div>
</li>
<li><b>Receipt</b>: Send a <a href="receipt.html">Receipt</a> directly to the printer.</li>
<li><b>Invoice</b>: Generate an <a href="invoice.html">Invoice</a>.</li>
<li><b>Limited Statement</b>: Generate a <a href="limited.html">Limited Statement</a> that only includes selected account items and associated transactions.</li>
<li><b>Limited (Custom)</b>: Opens the Limited Statement Select window to select procedures, pay plan debits, patient payments, insurance payments, and adjustments.</li>
<li><b>More Options</b>: Open the <a href="statementwindow.html">Statement Window</a> to select specific statement options.</li>
</ul>
<p><b>Questionnaire</b>: Launch the <a href="questionnaire.html">Questionnaire</a> feature. Only visible when enabled in <a href="showfeatures.html">Show Features</a>.</p>
<p class="MarginBottomZero">Third-Party Integrations: These buttons show by default, but can be hidden by disabling the bridges in <a href="programlinks.html">Program Links</a>. </p>
<ul class="MarginBottomGap">
<li><b>DXC Patient Credit Score</b>: See <a href="dentalxchangecreditservice.html">DentalXChange Patient Credit Score Service</a>. </li>
<li><b>TrojanCollect</b>: See <a href="trojancollect.html">Trojan Express Collect</a>. </li>
<li><b>CareCredit</b>: Launch the <a href="carecreditaction.html">CareCredit Action</a> window. To hide this button click the dropdown and select <i>Disable Advertising</i>.</li>
</ul>
<h2>Aging and Balance Due</h2>
<img src="images/accountAging.png" width="753" height="41"/><p><b>Family Aging</b>: Displays the aging for the family balance. These amounts show the full balance, regardless of insurance estimates or expected write-offs. Every time a user open a patient's account, <a href="aging.html">Aging</a> is updated for accuracy.</p>
<p><b>Total</b>: The total balance for all family members. The total does not take into account insurance estimates or expected write-offs.</p>
<p><b>Ins Est</b>: Displays expected insurance payments for the entire family (estimated insurance payments + estimated write-offs). This number only updates when a claim has been created or received.</p>
<p><b>Est Bal </b>(bold red): The total remaining balance for the family after subtracting pending insurance amounts and write-offs. (<span class="codeblock">Total - InsEst = Est Bal</span>)</p>
<p><b>Pat Est Bal</b>: The selected patient's balance after subtracting pending insurance amounts and write-offs.</p>
<p><b>Unearned</b>: The total <a href="unearnedprepayment.html">Unearned / Prepayment</a> balance for the family. Hover over the total to view a breakdown. All unallocated prepayments within the family are summed by unearned income type. No breakdown is displayed if the total unearned balance is zero.</p>
<p><b>Ins Rem</b>: Hover over the box to see <a href="insremainingcalc.html">Insurance Remaining Calculations</a>.</p>
<p><b>DPlan Rem</b>: Hover over the box to see remaining discount plan benefits. This replaces <i> Ins Rem</i> when a patient has a <a href="discountplan.html">Discount Plan</a>.</p>
<p><div class="Note">Note: <ul>
<li>If using patient payment plans, the pay plan logic determines whether or not Total, Est Bal, and Pat Est Bal include payment plan amounts due.</li>
<li>If <i>Balances don't subtract insurance estimate</i> in Preferences is enabled, the captions above balance information are different (Balance (bold red), Ins Pending, After Ins, Pat Est Bal). This option is useful if the office does not accept insurance assignment of benefits and the patient pays the full amount regardless of the insurance estimate.</li>
<li>There is not a closeout process at the end of the month to put procedures into history. Instead, if the practice does not want previous entries to be altered, assign <a href="permissions.html">Permissions</a> to users based on date. Older entries can still be changed, but only if the user has permission. Procedures themselves are protected from alteration when attached to a sent or received claim regardless of a user's <a href="security.html">Security</a> settings.</li>
</ul>
</div>
</p>
<h2>Payment Plans</h2>
<img src="images/accountPayPlans.png" width="757" height="120"/><p>When the patient attached to a payment plan, as guarantor or patient, details show in the Payment Plan grid. Double-click a plan to view terms, amortization schedule, or to edit. </p>
<p>For details see: <a href="paymentplanpatient.html">Payment Plan</a>, <a href="paymentplandynamic.html">Dynamic Payment Plan</a>, and <a href="installmentplan.html">Installment Plan</a>.</p>
<h2>Patient Account Tab</h2>
<img src="images/accountPatActTab.png" width="753" height="284"/><p class="MarginBottomZero">The line item details of the patient's account history. All procedures, grouped by date with related claims, insurance payments, patient payments (and pay splits), adjustments, statements, invoices, and receipts are listed. Depending on the selected Pay Plan Logic Preference, payment plan credits, debits, and payments may also show. The sort order is as follows: </p>
<ul class="MarginBottomGap">
<li>All items are grouped by date, sorted oldest to newest.</li>
<li>Items of the same type from the same date are grouped together in the following order:  <ol>
<li>Procedures</li>
<li>Adjustments</li>
<li>Patient Payments and Income Transfers</li>
<li>Insurance Claim</li>
<li>Insurance Payment</li>
<li>Payment Plan Credits and Debits</li>
<li>Statements</li>
</ol>
</li>
<li>Procedures are further sorted and grouped by Treatment Area in the following order: <ol>
<li>No treatment area or Mouth</li>
<li>Quad or Sextant</li>
<li>Arch</li>
<li>Surface</li>
<li>Tooth</li>
<li>Tooth Range</li>
</ol>
Within this grouping, procedures are also sorted by Procedure Code (lowest to highest) and Procedure Number, a system-generated number that is not visible to users.</li>
</ul>
<p class="MarginBottomZero">Double-click an item to edit. Click a claim or adjustment to highlight attached procedures. </p>
<ul class="MarginBottomGap">
<li>Customize text colors for entry types in <a href="definitionsaccountcolors.html">Definitions: Account Colors</a>.</li>
<li>Customize the columns that show in <a href="displayfields.html">Display Fields</a>, Account Module.</li>
<li>Running balances never take into account pending insurance estimates.</li>
<li>Insurance payments use the payment date of the <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a> attached to the claim. If a claim has procedures with different payment dates, there are multiple line items for <i>Insurance Payment for Claim</i>.</li>
</ul>
<p>Procedures marked as (In Process) are part of a group of procedures. These cannot be sent out on claims until all other procedures in the group have also been completed.</p>
<p class="MarginBottomZero"><b>Right-click options</b>: </p>
<ul class="MarginBottomGap">
<li>Add Adjustment: Opens the Edit Adjustment window. If a procedure was selected first, it is automatically attached to the adjustment.</li>
<li>Delete Charge: Deletes unpaid payment plan charges (PayPln: Debit) for <a href="paymentplandynamic.html">Dynamic Payment Plans</a> and <a href="paymentplanpatient.html">Payment Plan</a>. Option only available when the Pay Plan charge logic is set to <i>Age Credits and Debits</i> in <a href="preferences.html">Preferences</a>.</li>
<li>Refund: Option only available when an existing payment is selected. Creates a <a href="refunds.html">Refund</a> payment for the original payment. The Payment window opens with the amount of the original payment (as a negative) and the original payment type selected. The paysplit is automatically allocated to the production item or unearned type of the original payment. </li>
</ul>
<p><div class="Note">Note: Refunds via the right-click menu cannot be done on: <ul>
<li>CareCredit and patient portal payments.</li>
<li>Hidden prepayments.</li>
<li>Payments attached to payment plans.</li>
<li>Payments with negative Paysplits (e.g. income transfers, existing refunds).</li>
<li>Payments allocated via an income transfer.</li>
</ul>
</div>
</p>
<h2>Auto Ortho Tab</h2>
<img src="images/accountOrthotab.png" width="555" height="284"/><p>This tab only shows if <i>Show Auto Ortho in account module</i> is selected in <a href="orthosetup.html">Ortho Setup</a>. View the patient's <a href="orthoauto.html">Auto Ortho</a> details. </p>
<h2>Ortho Case Tab</h2>
<img src="images/accountOrthoCaseTab.png" width="570" height="188"/><p>This tab only shows if procedures are added to Ortho Case Procedures in Ortho Setup. View the patient's <a href="orthocase.html">Ortho Case</a> details.</p>
<h2>Hidden Splits Tab</h2>
<img src="images/accountHiddenTab.png" width="753" height="188"/><p>The <a href="hiddensplits.html">Hidden Splits</a> Tab appears when a prepayment is allocated to a treatment planned procedure. </p>
<h2>Communications Log (Commlog)</h2>
<img src="images/accoutCommlogs.png" width="749" height="74"/><p>The Communications Log lists all <a href="commlog.html">Commlog</a> entries for the patient. There is a splitter between the main account grid and the log. Drag the splitter up or down to shrink or expand the log.</p>
<h2>Main Tab</h2>
<img src="images/accountMain.png" width="190" height="534"/><p><b>Fam Urgent Fin Note</b>: This note applies to the entire family. It shows in red and is meant for very important financial notes. It also shows in red in a variety of other places throughout the program. </p>
<p><b>Service Date View</b>: Click to open <a href="servicedateview.html">Service Date View</a>. </p>
<p><b>Credit Card Manage</b>: Manage stored patient credit cards. See <a href="creditcardsmanage.html">Credit Card Manage</a>.</p>
<p><b>Select Patient</b>: Lists all family members. Click on a patient to switch patient accounts, or click<i> Entire Family</i> to view the account history for all family members. <div class="Note">Note: Patients manually set to <i>Archived</i> show in this list. Patients set to <i>Archived</i> due to a merge do not show unless the merged patient is aready selected</div>
</p>
<p><b>Family Financial</b>: These notes are not tracked in the audit trail. This is an older version of the Commlog.</p>
<h2>Show Tab</h2>
<img src="images/accountShow.png" width="190" height="308"/><p>Select which information displays in the Account Module.</p>
<p><b>Start/End Date</b>: Filter transactions by date on the Patient Account. Enter a start and end date manually then click <b>Refresh</b>, or click a button to select today only, Last 45 Days, Last 90 Days, or All Dates (no date range).</p>
<p><b>Show Proc Breakdowns</b>: Display additional financial information in the description column for each procedure (e.g., patient portion, insurance paid, write-off, adjustment). This checkbox is user specific. To show the breakdown on statements, select <i>Show procedure breakdown</i> in <a href="preferences.html">Preferences</a>.</p>
<p><b>Show Family Comm Entries</b>: Show Commlog entries for the entire family rather than just for the current patient. Set whether this option is checked or unchecked by default in Preferences, <i>Show family commlog entries by default</i>.</p>
<p><b>Show Automated Commlogs</b>: Show Commlog entries that have been automatically generated (e.g., Recalls, FHIR, web sched, etc). This checkbox is user specific, and affects automated Commlogs in the Account Module, Chart Module, and Appointment Edit window. </p>
<p><b>Show Completed Pay Plans</b>: Affects all workstations. Show <a href="paymentplanclose.html">Closed Payment Plans</a> in the Payment Plans grid. When <i>Entire Family</i> is selected, the Payment Plans grid is always displayed.</p>
<h2>Patient Information</h2>
<img src="images/accountPatientInfo.gif" width="185" height="147"/><p>This grid only shows fields are added to <a href="displayfields.html">Display Fields</a>, Account Patient Information. It can list billing type and custom patient fields. See <a href="custompatientfields.html">Patient Fields</a> to add or hide definitions in this list.</p>
</div>
</div>
</body>
</html>```
