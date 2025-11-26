# File: ./www.opendental.com/manual/plancapitation.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Capitation ( HMO / DMO ) Insurance Plan</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('plancapitation','insplantypes','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/plancapitation.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/plancapitation.html" >v24.2</option><option value="https://www.opendental.com/manual241/plancapitation.html" >v24.1</option><option value="https://www.opendental.com/manual233/plancapitation.html" >v23.3</option><option value="https://www.opendental.com/manual232/plancapitation.html" >v23.2</option><option value="https://www.opendental.com/manual231/plancapitation.html" >v23.1</option><option value="https://www.opendental.com/manual224/plancapitation.html" >v22.4</option><option value="https://www.opendental.com/manual223/plancapitation.html" >v22.3</option><option value="https://www.opendental.com/manual222/plancapitation.html" >v22.2</option><option value="https://www.opendental.com/manual221/plancapitation.html" >v22.1</option><option value="https://www.opendental.com/manual214/plancapitation.html" >v21.4</option><option value="https://www.opendental.com/manual213/plancapitation.html" >v21.3</option><option value="https://www.opendental.com/manual212/plancapitation.html" >v21.2</option><option value="https://www.opendental.com/manual211/plancapitation.html" >v21.1</option><option value="https://www.opendental.com/manual205/plancapitation.html" >v20.5</option><option value="https://www.opendental.com/manual204/plancapitation.html" >v20.4</option><option value="https://www.opendental.com/manual203/plancapitation.html" >v20.3</option><option value="https://www.opendental.com/manual202/plancapitation.html" >v20.2</option><option value="https://www.opendental.com/manual201/plancapitation.html" >v20.1</option><option value="https://www.opendental.com/manual194/plancapitation.html" >v19.4</option><option value="https://www.opendental.com/manual193/plancapitation.html" >v19.3</option><option value="https://www.opendental.com/manual192/plancapitation.html" >v19.2</option><option value="https://www.opendental.com/manual191/plancapitation.html" >v19.1</option><option value="https://www.opendental.com/manual184/plancapitation.html" >v18.4</option><option value="https://www.opendental.com/manual183/plancapitation.html" >v18.3</option><option value="https://www.opendental.com/manual182/plancapitation.html" >v18.2</option><option value="https://www.opendental.com/manual181/plancapitation.html" >v18.1</option><option value="https://www.opendental.com/manual174/plancapitation.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Capitation ( HMO / DMO ) Insurance Plan</p></div>
<div class="GeneralPageContent">
<p>Capitation is also known as HMO/DMO. Set up this <a href="insplantypes.html">Insurance Plan Type</a> when an office receives a flat fee every month, regardless of what work is done for patients. </p>
<img src="images/planCapitation.png" width="412" height="209"/><p>Patients pay a flat fee for some procedures and no fee for other procedures. Sometimes, a fee for the lab portion can be billed to insurance.</p>
<p><div class="Note">Note: <ul>
<li>To show Capitation as an option on the Edit Insurance Plan window, check Capitation in <a href="showfeatures.html">Show Features</a>.</li>
<li>To set up a plan that has co-pays and makes supplemental payments (mixed capitation), see <a href="planhmosupplemental.html">HMO / DMO Insurance Plan with Co-pays</a> instead.</li>
<li>Also see our <a href="https://opendental.com/resources/Capitation%20Flow%20Chart.pdf">Decision Making Guide</a> when setting up a Capitation Plan.</li>
<li> For tips on setting up the co-pay fee schedules, see <a href="feeschedulelogic.html">Fee Schedule Logic</a>. </li>
</ul>
</div>
</p>
<h2>Set up the Plan</h2>
<p class="MarginBottomZero"></p>
<ol>
<li>For any patient portions, set up a co-pay <a href="feeschedules.html">Fee Schedule</a>. For each procedure code enter the fee the patient must pay.</li>
<li>On the <a href="insplan.html">Insurance Plan</a>, set the following:  <ul>
<li><b>Plan Type</b>: Capitation. All benefit percentages will clear.</li>
<li><b>Fee Schedule:</b> Set the capitation fee schedule. If set to <i>None</i>, the provider's UCR fees will be used.</li>
<li><b>Patient Co-Pay Amounts</b>: Set the co-pay fee schedule (if applicable). </li>
</ul>
</li>
</ol>
<p class="MarginBottomGap"><img src="images/planCapitationSetup.png" width="416" height="213"/></p>
<h2>Billing Insurance</h2>
<p class="MarginBottomZero">If the office needs to bill insurance (rare) </p>
<ol class="MarginBottomGap">
<li>In the Account Module, select the procedure and click <b>New Claim</b>.</li>
<li>On the Edit Claim window, double-click on the procedure. Click <b>OK</b> when prompted.</li>
<li>Change the <i>Fee Billed to Ins</i> amount to the amount the carrier is required to pay.</li>
<li>Change the <i>Insurance Estimate</i> to the same amount.</li>
<li>Click <b>OK</b>, then send the claim. If the office does not expect to apply a payment for the claim, then mark the claim as received so it does not show on the Outstanding Insurance Claims report.</li>
</ol>
<p>Because the claim is for a capitation insurance plan, the amount expected from insurance will not be applied to the patient balance. Once payment is received, follow the steps below for Receiving a Capitation Payments.</p>
<h2>Receiving Capitation Payments</h2>
<p class="MarginBottomZero">When the office receives the monthly payment from a capitation carrier, do not enter the payment on individual claims. Instead, record the payment in a dummy patient for the carrier: </p>
<ol class="MarginBottomGap">
<li>Create a dummy patient with the same name as the carrier.</li>
<li>Apply all payments to that patient. Users have a few options: <ul>
<li><b>Option 1</b>: Apply as patient payments to dummy patient with carrier name. If Paysplits <a href="allocationssetup.html">Allocations Setup</a> is set to <i>Auto-Split</i> or <i>Manual</i>, allocate the pay splits to a specific provider by editing the pay split. If Paysplits Allocations Setup is set to <i>Rigorous</i>, the pay splits must be attached to an unearned type and will be tracked as <a href="unearnedprepayment.html">Unearned Income</a>.</li>
<li><b>Option 2</b> (Paysplits Allocations Setup can be <i>Rigorous</i>, impacts production): Another option is to add a capitation payment procedure for the full payment amount; however, this will impact production values. <ol>
<li><a href="procedurecodenew.html">Create a New Procedure Code</a> for capitation payments.</li>
<li>Chart the procedure and edit the amount to match the payment amount.</li>
<li>Set the procedure complete.</li>
<li>Select the procedure in the account module and click <b>Payment</b>.</li>
<li>Enter the capitation payment amount.</li>
<li>Complete the payment.</li>
<li>Once the payment and procedure are complete, the account balance should be $0.</li>
</ol>
<img src="images/planCapitationOpt2.png" width="737" height="96"/></li>
<li><b>Option 3</b> (if the office must have payments show as insurance payments): Apply as insurance payments so they show on reports and deposit slips as insurance payments. <ol>
<li>Add the capitation insurance plan to the dummy patient.</li>
<li>Create a dummy procedure with no fee.</li>
<li>Create a dummy claim with at least one procedure and 0 fee.</li>
<li>Enter the first payment <i>As Total</i>. When additional payments are received, enter as another As Total payment on the same claim (not to the actual patient's claim).</li>
</ol>
</li>
</ul>
</li>
<img src="images/planCapitationOpt3.png" width="915" height="395"/></ol>
<p>We do not recommend having more than one capitation plan for a single patient. If a patient has more than one capitation plan, users must manually change the secondary capitation plan's write-off amounts for each procedure and Open Dental reports will give incorrect production numbers. To fix production numbers, run Query #911, then delete any duplicate <i>CapCom</i> status insurance estimates so that there is only one <i>CapCom</i> estimate for each procedure.</p>
<p>Also do not manually add insurance estimates with a <i>CapCom</i> status; they are created automatically. If you have duplicates, production numbers will be inaccurate. To fix production numbers, run Query #911, then delete any duplicate <i>CapCom</i> status insurance estimates so that there is only one <i>CapCom</i> estimate for each procedure.</p>
<h2>Reports</h2>
<p>Run the <a href="reportcapitation.html">Capitation Utilization Report</a> at the end of each month to show all procedures for a date range performed for capitation, along with the provider fees and the patient co-pay.</p>
<p><a href="reportprodinc.html">Production and Income Reports</a> include production from capitation as Procedure Fee - Capitation Write-offs (as part of the (gross) Production column). For most procedures this contribution is $0, but if there is a patient portion (copay) then the capitation write-off will be less than the fee and thus the patient portion is part of the production.</p>
<p><a href="reportaging.html">Aging of Accounts Receivable (A/R) Report</a>: Capitation payments entered under a dummy patient will reflect as credits in the A/R report. This can be avoided by using a billing type that is excluded when running the A/R report.</p>
<h2>Technical Details</h2>
<p>Internally, a capitation claim creates a second claim procedure.</p>
<ul>
<li>The first claim procedure has a status of <i>CapComplete</i> and contains the procedure write-off.</li>
<li>The second claim procedure has a status of <i>CapClaim</i> and is only used to show the procedure detail for the claim. The status will not change when the claim is received.</li>
</ul>
<br/><p>Payment entry on individual capitation claims would be a <a href="featurerequests.html">Feature Request</a>.</p>
</div>
</div>
</body>
</html>```
