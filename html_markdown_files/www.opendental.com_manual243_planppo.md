# File: ./www.opendental.com/manual243/planppo.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - PPO Insurance Plan</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('planppo','insplantypes','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/planppo.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/planppo.html" >v24.2</option><option value="https://www.opendental.com/manual241/planppo.html" >v24.1</option><option value="https://www.opendental.com/manual233/planppo.html" >v23.3</option><option value="https://www.opendental.com/manual232/planppo.html" >v23.2</option><option value="https://www.opendental.com/manual231/planppo.html" >v23.1</option><option value="https://www.opendental.com/manual224/planppo.html" >v22.4</option><option value="https://www.opendental.com/manual223/planppo.html" >v22.3</option><option value="https://www.opendental.com/manual222/planppo.html" >v22.2</option><option value="https://www.opendental.com/manual221/planppo.html" >v22.1</option><option value="https://www.opendental.com/manual214/planppo.html" >v21.4</option><option value="https://www.opendental.com/manual213/planppo.html" >v21.3</option><option value="https://www.opendental.com/manual212/planppo.html" >v21.2</option><option value="https://www.opendental.com/manual211/planppo.html" >v21.1</option><option value="https://www.opendental.com/manual205/planppo.html" >v20.5</option><option value="https://www.opendental.com/manual204/planppo.html" >v20.4</option><option value="https://www.opendental.com/manual203/planppo.html" >v20.3</option><option value="https://www.opendental.com/manual202/planppo.html" >v20.2</option><option value="https://www.opendental.com/manual201/planppo.html" >v20.1</option><option value="https://www.opendental.com/manual194/planppo.html" >v19.4</option><option value="https://www.opendental.com/manual193/planppo.html" >v19.3</option><option value="https://www.opendental.com/manual192/planppo.html" >v19.2</option><option value="https://www.opendental.com/manual191/planppo.html" >v19.1</option><option value="https://www.opendental.com/manual184/planppo.html" >v18.4</option><option value="https://www.opendental.com/manual183/planppo.html" >v18.3</option><option value="https://www.opendental.com/manual182/planppo.html" >v18.2</option><option value="https://www.opendental.com/manual181/planppo.html" >v18.1</option><option value="https://www.opendental.com/manual174/planppo.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>PPO Insurance Plan</p></div>
<div class="GeneralPageContent">
<p>PPO Insurance Plans type are a type of In-network / Contracted <a href="insplantypes.html">Insurance Plan</a>. </p>
<p>PPO stands for Preferred Provider Organization. </p>
<p>Set up this Insurance Plan Type when the practice or providers are contractually obligated to reduce their fees as an in-network provider. Because the practice or providers are enrolled with the insurance company, they have access to a published list of fees that they must charge the patient. The insurance portion is calculated as a percentage of the published fee and the patient pays the rest.</p>
<p>There are two setup options: one tracks write-offs, the other doesn't. Write-offs are the difference between the contracted fee and the provider's UCR fees.</p>
<div class="Note">Note: <ul>
<li>To set up a plan that has copays and makes supplemental payments (mixed capitation), see <a href="planhmosupplemental.html">HMOs/DMOs with Supplemental Payments and Copays</a> instead.</li>
<li>To see how the fee schedule is determined, see <a href="feeschedulelogic.html">Fee Schedule Logic</a>.</li>
</ul>
</div>
<br/><br/><h2>Option 1: Set up a PPO plan and track write-offs</h2>
<p>Set up an insurance plan with a PPO Percentage plan type and the carrier fee schedule. This plan tracks write-offs.</p>
<p class="MarginBottomZero">On the <a href="insplan.html">Insurance Plan</a>, select these options: </p>
<ul class="MarginBottomGap">
<li><b>Plan Type</b>: PPO Percentage</li>
<li><b>Fee Schedule</b>: The carrier's <a href="feeschedules.html">Fee Schedules</a>. <br/><img src="images/planPPO1.png" width="412" height="142" class="ImageInParagraph"/></li>
</ul>
<p>Insurance estimates will be based on the carrier's fee schedule.</p>
<p>Procedure fees will be based on the provider's fee schedule.</p>
<p>Write-offs are usually calculated using the following formula: <span class="codeblock">UCR fees - PPO fee</span> The difference between the two amounts will be an automatic write-off.</p>
<p>Typically, if the PPO fee is higher than a provider's UCR fee, the PPO fees are used as the billed fees. To instead use the UCR fees, see <a href="preferences.html">Preferences</a>, <i>Use UCR fee for billed fee even if PPO fee is higher</i>.</p>
<p>As UCR fees are billed to the account by default, the setting, <b>Claims show UCR fee, not billed fee</b> only needs to be enabled if billed fees are changed manually. The correct insurance estimate (breakdowns) will show in the account after the claim is created.</p>
<p>Write-offs are reported in <a href="reportprodinc.html">Production and Income Reports</a>, the <a href="reportdailywriteoffs.html">Daily Write-off Report</a>, the <a href="reportppowriteoffs.html">PPO Write-offs Report</a>, and the <a href="reportreceivablesbreakdown.html">Receivables Breakdown Report</a>.</p>
<h2>Option 2: Set up a Category Percentage plan and don't track write-offs (not recommended)</h2>
<p class="MarginBottomZero">This is a simpler approach for an in-network plan but doesn't track write-offs. It is not recommended for a few reasons:  </p>
<ul class="MarginBottomGap">
<li>If fee schedules are incorrect, patients will be billed incorrectly which could lead to lower collection rates.</li>
<li>At risk of not getting full reimbursement from insurance. Submitting the full office fee is the only way to get maximum reimbursement.</li>
<li>It is harder to manage and identify insurance overpayments.</li>
</ul>
<p>Set up an insurance plan with a Category Percentage plan type and the carrier fee schedule. The carrier fees will be used instead of the provider's fees. One disadvantage is that patients will not see the provider's fees and may not be aware that a discount is being given.</p>
<p class="MarginBottomZero">On the Edit Insurance Plan window, select these options: </p>
<ul class="MarginBottomGap">
<li><b>Plan Type</b>: Category Percentage</li>
<li><b>Fee Schedule</b>: The carrier's fee schedule. <br/><img src="images/planPPO2.png" width="412" height="144" class="ImageInParagraph"/></li>
<li>(optional) To show the provider's fees on the insurance claim, check <b>Claims show UCR fee, not billed fee</b> in the <i>Other Ins</i> Info tab.</li>
<li>(optional): To display the UCR fee and calculate write-off amounts in the Treatment Plan, without tracking on reports, add <i>Cat% UCR</i> to the Treatment Plan Module <a href="displayfields.html">Display Fields</a>.</li>
</ul>
<h2>Patient Copays per Procedures</h2>
<p class="MarginBottomZero">If the patient is required to copay per procedures, follow these steps.  </p>
<ol class="MarginBottomGap">
<li>Create a <i>copay</i> fee schedule for the carrier.</li>
<li>For each procedure code, enter the patient's copay amount. There can be just a few fees with the rest blank. If the practice only has the insurance copay fee schedule, not the patient copay amounts, use this equation to obtain the fee: <p class="codeblock">Carrier Fee - Insurance Copay = Patient Copay</p></li>
<li>On the Edit Insurance Plan window set the following:  <ul>
<li><b>Fee Schedule</b>: The carrier's normal fee schedule.</li>
<li><b>Patient Co-pay Amounts</b>: The carrier's copay fee schedule. <br/><img src="images/planPPOcopay.png" width="413" height="210" class="ImageInParagraph"/></li>
</ul>
<p><a href="benefitinfo.html">Benefits</a>: Usually, percentages will be set to 100% so that everything above the copay is calculated as the insurance portion. If percentages are not set to 100%, percentage calculations will be performed on the remaining amount.</p>
</li>
</ol>
<p><div class="Note">Note: When insurance pays off a lower fee schedule than the normal contracted fee schedule, and patient pays the difference, create a copay fee schedule. The copay fee schedule is the normal contracted fee schedule minus the lower fee schedule. </div>
</p>
<h2>PPOs with fee schedules that change after first year</h2>
<p>These can be easily handled by using two insurance plans: one for preventive services, and one for basic services. These will need to be updated manually after the first year so that estimates etc. are monitored closely during the transition to the second year, when benefits will have to be updated in Open Dental.</p>
</div>
</div>
</body>
</html>```
