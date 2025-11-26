# File: ./www.opendental.com/manual232/planppofixed.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - PPO Fixed Benefit Insurance Plan</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('planppofixed','insplantypes','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/planppofixed.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/planppofixed.html" >v24.2</option><option value="https://www.opendental.com/manual241/planppofixed.html" >v24.1</option><option value="https://www.opendental.com/manual233/planppofixed.html" >v23.3</option><option value="https://www.opendental.com/manual232/planppofixed.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/planppofixed.html" >v23.1</option><option value="https://www.opendental.com/manual224/planppofixed.html" >v22.4</option><option value="https://www.opendental.com/manual223/planppofixed.html" >v22.3</option><option value="https://www.opendental.com/manual222/planppofixed.html" >v22.2</option><option value="https://www.opendental.com/manual221/planppofixed.html" >v22.1</option><option value="https://www.opendental.com/manual214/planppofixed.html" >v21.4</option><option value="https://www.opendental.com/manual213/planppofixed.html" >v21.3</option><option value="https://www.opendental.com/manual212/planppofixed.html" >v21.2</option><option value="https://www.opendental.com/manual211/planppofixed.html" >v21.1</option><option value="https://www.opendental.com/manual205/planppofixed.html" >v20.5</option><option value="https://www.opendental.com/manual204/planppofixed.html" >v20.4</option><option value="https://www.opendental.com/manual203/planppofixed.html" >v20.3</option><option value="https://www.opendental.com/manual202/planppofixed.html" >v20.2</option><option value="https://www.opendental.com/manual201/planppofixed.html" >v20.1</option><option value="https://www.opendental.com/manual194/planppofixed.html" >v19.4</option><option value="https://www.opendental.com/manual193/planppofixed.html" >v19.3</option><option value="https://www.opendental.com/manual192/planppofixed.html" >v19.2</option><option value="https://www.opendental.com/manual191/planppofixed.html" >v19.1</option><option value="https://www.opendental.com/manual184/planppofixed.html" >v18.4</option><option value="https://www.opendental.com/manual183/planppofixed.html" >v18.3</option><option value="https://www.opendental.com/manual182/planppofixed.html" >v18.2</option><option value="https://www.opendental.com/manual181/planppofixed.html" >v18.1</option><option value="https://www.opendental.com/manual174/planppofixed.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>PPO Fixed Benefit Insurance Plan</p></div>
<div class="GeneralPageContent">
<p>Set up a PPO Fixed Benefit <a href="insplantypes.html">Insurance Plan Type</a> when the office is contractually obligated to reduce its fees as an in-network provider, and the insurance plan is paying a fixed amount. </p>
<img src="images/planPPOFixed.png" width="412" height="192"/><br/><p>This insurance plan type calculates write-offs, includes the insurance portion, and rolls the remaining amount to the patient.</p>
<p class="MarginBottomZero">On the <a href="insplan.html">Insurance Plan</a>, set the following:  </p>
<ul class="MarginBottomGap">
<li><b>Plan Type</b>: PPO Fixed Benefit</li>
<li><b>Fee Schedule</b>: The carrier's fee schedule.</li>
<li><b>Fixed Benefit Amounts</b>: The plan's fixed fee schedule (<a href="feeschedules.html">Fee Schedules</a>, FixedBenefit).</li>
</ul>
<div class="Note">Note: The Fixed Benefit Amount box will only show if the Plan Type is set to PPO Fixed Benefit.</div>
<p>This plan will set all insurance categories with a coverage benefit to 100% coverage. Insurance estimates come directly from the Fixed Benefit fee schedule.</p>
<p><a href="deductibles.html">Deductibles</a> are only calculated for insurance categories with a coverage benefit. To calculate the deductible on a category that is not displayed in the <a href="benefitinfo.html">Benefits</a> window, add an <a href="otherbenefits.html">Other Benefit</a>.</p>
<p>The patient portion is calculated using the following formula: <span class="codeblock">UCR fee - Write-Off - Fixed Benefit amount</span></p>
<p>Write-offs are usually calculated using the following formula: <span class="codeblock">UCR fee - PPO fee.</span> The difference between the two amounts will be an automatic write-off.</p>
<p>If the PPO fee is higher than a provider's UCR fee, the PPO fees are used as the billed fees. To instead use the UCR fees, enable the <i>Use UCR fee for billed fee even if PPO fee is higher</i> preference.</p>
<p>To set how blank fixed benefit fee schedules are handled, see the <a href="preferences.html">Preference</a>, <i>Fixed benefit fee schedules treat blank entries as zero</i>. </p>
<p>Claims will automatically show the provider's UCR fee, regardless of the status of the <i>Claims show UCR fee, not billed fee</i> setting in the Other Ins Info tab of Insurance Plan window.</p>
</div>
</div>
</body>
</html>```
