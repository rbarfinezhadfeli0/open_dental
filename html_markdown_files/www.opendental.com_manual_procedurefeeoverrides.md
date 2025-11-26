# File: ./www.opendental.com/manual/procedurefeeoverrides.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Fee Override for Provider or Clinic</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('procedurefeeoverrides','procedurecodes','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/procedurefeeoverrides.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/procedurefeeoverrides.html" >v24.2</option><option value="https://www.opendental.com/manual241/procedurefeeoverrides.html" >v24.1</option><option value="https://www.opendental.com/manual233/procedurefeeoverrides.html" >v23.3</option><option value="https://www.opendental.com/manual232/procedurefeeoverrides.html" >v23.2</option><option value="https://www.opendental.com/manual231/procedurefeeoverrides.html" >v23.1</option><option value="https://www.opendental.com/manual224/procedurefeeoverrides.html" >v22.4</option><option value="https://www.opendental.com/manual223/procedurefeeoverrides.html" >v22.3</option><option value="https://www.opendental.com/manual222/procedurefeeoverrides.html" >v22.2</option><option value="https://www.opendental.com/manual221/procedurefeeoverrides.html" >v22.1</option><option value="https://www.opendental.com/manual214/procedurefeeoverrides.html" >v21.4</option><option value="https://www.opendental.com/manual213/procedurefeeoverrides.html" >v21.3</option><option value="https://www.opendental.com/manual212/procedurefeeoverrides.html" >v21.2</option><option value="https://www.opendental.com/manual211/procedurefeeoverrides.html" >v21.1</option><option value="https://www.opendental.com/manual205/procedurefeeoverrides.html" >v20.5</option><option value="https://www.opendental.com/manual204/procedurefeeoverrides.html" >v20.4</option><option value="https://www.opendental.com/manual203/procedurefeeoverrides.html" >v20.3</option><option value="https://www.opendental.com/manual202/procedurefeeoverrides.html" >v20.2</option><option value="https://www.opendental.com/manual201/procedurefeeoverrides.html" >v20.1</option><option value="https://www.opendental.com/manual194/procedurefeeoverrides.html" >v19.4</option><option value="https://www.opendental.com/manual193/procedurefeeoverrides.html" >v19.3</option><option value="https://www.opendental.com/manual192/procedurefeeoverrides.html" >v19.2</option><option value="https://www.opendental.com/manual191/procedurefeeoverrides.html" >v19.1</option><option value="https://www.opendental.com/manual184/procedurefeeoverrides.html" >v18.4</option><option value="https://www.opendental.com/manual183/procedurefeeoverrides.html" >v18.3</option><option value="https://www.opendental.com/manual182/procedurefeeoverrides.html" >v18.2</option><option value="https://www.opendental.com/manual181/procedurefeeoverrides.html" >v18.1</option><option value="https://www.opendental.com/manual174/procedurefeeoverrides.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Fee Override for Provider or Clinic</p></div>
<div class="GeneralPageContent">
<p>Fee overrides for clinics or providers can be used to reduce the number of fee schedules that are necessary.</p>
<p>In the <a href="procedurecodes.html">Procedure Codes</a> list, to the right of the main grid, is the Compare Fee Schedules section.</p>
<img src="images/feeOverrides.png" width="818" height="630"/><p>When entering procedure fees in <a href="feeschedules.html">Fee Schedules</a>, users can optionally enter fees that are provider and/or clinic specific. Provider and/or clinic specific fees are useful in the following situations:</p>
<ul>
<li>A PPO plan has different fee tiers depending on the provider (e.g., dentists have one fee, specialists have a different fee).</li>
<li><a href="clinics.html">Clinics</a> have different fees depending on geographical location.</li>
<li>A provider's fee varies depending on the clinic they provide service in.</li>
</ul>
<br/><p>Fee Logic: Open Dental first determines the fee schedule to use, according to the <a href="feeschedulelogic.html">Fee Schedule Logic</a>. After that, it applies overrides in this order:</p>
<ol>
<li>Clinic and provider override.</li>
<li>Provider-only override.</li>
<li>Clinic-only override.</li>
<li>Global fee.</li>
</ol>
<br/><h2>Enter Provider and/or Clinic Specific Fees</h2>
<p>Select the fee schedule criteria on the right under <b>Compare Fee Schedules</b>. These options determine which fee columns and fees show in the Procedures grid. <p><b>Fee 1</b> options determine the fees that show in the Fee 1 column.</p>
<p><b>Fee 2</b> options determine the fees that show in the Fee 2 column.</p>
<p><b>Fee 3</b> options determine the fees that show in the Fee 3 column.</p>
<p><b>Fee Schedule</b>: Click the dropdown or [...] to select the fee schedule.</p>
<p><b>Clinic</b>: To enter fees specific to a clinic, click the drop down or [...] to select the clinic.</p>
<p><b>Provider</b>: To enter fees specific to a provider, click the drop down or [...] to select the provider.</p>
<div class="Note">Note: Clinic and Provider are only enabled if the fee schedule allows provider and/or clinic-specific fees (<b>Use Global Fees</b> is disabled).</div>
<br/><br/><p>As the user selects criteria, the fees in the corresponding column will change to reflect the current fee entered for the fee schedule, clinic, and/or provider. The fee color is a quick method of identifying if a fee is global or specific. A color legend shows in the lower right. Customize colors in <a href="definitionsfeecolors.html">Definitions: Fee Colors</a>.</p>
</p>
<p>Click in a cell to enter the fee. Press tab to move from cell to cell for quick data entry. If the user deletes a fee override, the fee will revert to the global fee.</p>
<p>Click <b>Close</b> to save the fees and close the window.</p>
<p>To view all fees by procedure, double-click the procedure, then click <b>More</b> to View provider and clinic-specific fees.</p>
<h2>Example Scenarios</h2>
<p class="MarginBottomZero"><b>For PPO Plan1, dentists Dr. Jones and Dr. Smith use the same fees, but Dr. Wilson, an endodontist, has different fees for some procedures.</b></p>
<ol class="MarginBottomGap">
<li>Create one normal fee schedule (e.g., PPOPlan1) and disable <b>Use Global Fees</b>.</li>
<img src="images/feeOverrideCreateFeeSched.png" width="511" height="245"/><li>In the <a href="procedurecodes.html">Procedure Codes</a> enter the dentist fees as the global fees and provider overrides for the endodontist. <ul>
<li>For Fee 1 and 2, select the PPOPlan1 fee schedule.</li>
<li>For Fee 2, select Dr. Wilson as the provider.</li>
<li>In the Procedures grid, Fee 1 column, enter the dentist fees. These will be the global fees.</li>
<li>In the Fee 2 column, enter Dr. Wilson's fees when they differ. These fees will override the global fees when Dr. Wilson is the treating provider.</li>
</ul>
</li>
</ol>
<img src="images/feeOverrideEx1.png" width="818" height="628"/><p class="MarginBottomZero"><b>East, South, and West Clinics have the same UCR fees, but North Clinic has different UCR fees.</b></p>
<ol class="MarginBottomGap">
<li>Create one normal fee schedule (e.g., Office Fees) and disable <i>Use Global Fees</i>.</li>
<li>In the Procedure Code List, enter the fees for East, South, and West Clinics as the global fees. Enter clinic overrides for the North Clinic. <ul>
<li>For Fee 1 and 2 select the Office Fees fee schedule.</li>
<li>For Fee 2, select North Clinic.</li>
<li>In the Procedures grid, Fee 1 column, enter the Office Fees for East, South, and West Clinics.</li>
<li>In Fee 2 column, enter the fees for North Clinic when they differ.</li>
</ul>
</li>
</ol>
<img src="images/feeOverrideEx2.png" width="818" height="628"/><p class="MarginBottomZero"><b>Dr. Wye and Dr. George are both specialists at the North Clinic and their fees differ from the UCR fees of other providers. Dr. George also works at the West clinic and his fees there are different as well.</b></p>
<ol class="MarginBottomGap">
<li>Create one Normal fee schedule for Office Fees.</li>
<li>In the Procedure Code List, adjust the fees: <ul>
<li>For Fee 1, 2, and 3, select the Office Fees fee schedule.</li>
<li>For Fee 1, select Dr. Wye as the Provider.</li>
<li>For Fee 2, select the North Clinic and Dr. George.</li>
<li>For Fee 3, select West Clinic and Dr. George.</li>
<li>In the Procedures grid, enter the fees in the corresponding column.</li>
</ul>
</li>
<li>Assign the Office Fees schedule as needed. The fees will automatically adjust based on clinic and treating provider.</li>
</ol>
<img src="images/feeOverrideEx3.png" width="818" height="628"/><p class="MarginBottomZero"><b>Dr. Ripley is in network, but Dr. Norman is out of network and will not be taking any write-offs</b></p>
<ol class="MarginBottomGap">
<li>Create a<i> Normal </i>fee schedule and uncheck <i>Use global fees</i>.</li>
<li>Enter the in-network fees for Dr. Ripley (and other in-network providers) as the global fees.</li>
<li>In Fee Tools, copy the UCR/Office fee schedule to the in-network fee schedule with Dr. Norman selected in the Provider dropdown in the Copy To section.</li>
</ol>
<p>Now, when Dr. Norman is attached to a procedure using this insurance the UCR/office fee will be billed and no write-off estimates will be applied. The treatment planned estimates for Dr. Norman will not be accurate. Users may need to manually enter coverage for the patient portion estimate. The account will reflect accurately once the claim is paid.</p>
<img src="images/feeOverrideEx4.png" width="819" height="630"/><h2>Hygiene Procedures and Fees</h2>
<p>When there are multiple providers who have different allowed hygiene procedure fees for the same in-network (PPO) insurance plan, it can affect the insurance and patient portion estimates for hygiene procedures (e.g., when one provider is premier and the other is basic PPO). Hygiene procedure fees are calculated based on the rate of the provider on the exam. If providers have different rates, the hygiene procedure's reimbursement fees will differ by exam, as can the estimated patient portion.</p>
<p>The best solution for this scenario is to err on the side of over-collection.</p>
<ol>
<li>Create one fee schedule (e.g., PPO Plan 1). For each provider that might be on a hygiene exam, enter the highest allowed fee among the providers for each hygiene procedure.</li>
<li>Assign the fee schedule to the patient's insurance plan.</li>
<li>When charting and completing procedures, the higher fee will always be used to calculate both insurance estimates and patient portion. This is good business practice. The fee the patient will expect and be prepared for will be the higher fee. If the insurance payment ends up being lower (because the lower paid provider did the exam) the office can then issue a refund.</li>
</ol>
<br/><div class="Note">Note: In this scenario, we do not recommend paying hygienists based on net production, as their compensation will vary depending on the provider on the exam. There is no current way in Open Dental to have an accurate picture of the hygienist's income. For providers that are paid on collection, base the rate on actual income, not production, because production values will be inflated.</div>
<br/><br/><p>For each hygienist, enter the highest fee for each hygiene procedure. Leave blank for non-hygiene procedures.</p>
<p>Example: For PPO Plan1, prophy procedure: Dr. A has a fee of $200. Dr. B has a fee of $100. Insurance pays 80% ($160 for Dr. A, $80 for Dr. B). Patient portion for Dr. A is $40, for Dr. B is $20.</p>
<p class="MarginBottomZero"><b>Steps</b>: </p>
<ol class="MarginBottomGap">
<li>When entering hygiene procedure fees for each provider that might be on a hygiene exam, use Dr. A's fees (the highest).</li>
<li>Assign the fee schedule to the patient's insurance plan.</li>
</ol>
<p class="MarginBottomZero">When the hygienist does a procedure on Dr. A or Dr. B's exam: </p>
<ul class="MarginBottomGap">
<li>The fee will be $200.</li>
<li>The estimated patient portion will be $40.</li>
<li>The estimated insurance payment will be $160.</li>
</ul>
<p class="MarginBottomZero">When the insurance payment comes: </p>
<ul class="MarginBottomGap">
<li>When Dr. A is the provider on the appointment, insurance will reimburse $160, and the write-off and payment portion will be accurate.</li>
<li>When Dr. B is the provider on the appointment, insurance will reimburse only $80. The patient will have overpaid their portion ($20), so reimburse as needed.</li>
</ul>
</div>
</div>
</body>
</html>```
