# File: ./www.opendental.com/manual232/planhmosupplemental.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - HMO / DMO Insurance Plan with Co-pays</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('planhmosupplemental','insplantypes','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/planhmosupplemental.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/planhmosupplemental.html" >v24.2</option><option value="https://www.opendental.com/manual241/planhmosupplemental.html" >v24.1</option><option value="https://www.opendental.com/manual233/planhmosupplemental.html" >v23.3</option><option value="https://www.opendental.com/manual232/planhmosupplemental.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/planhmosupplemental.html" >v23.1</option><option value="https://www.opendental.com/manual224/planhmosupplemental.html" >v22.4</option><option value="https://www.opendental.com/manual223/planhmosupplemental.html" >v22.3</option><option value="https://www.opendental.com/manual222/planhmosupplemental.html" >v22.2</option><option value="https://www.opendental.com/manual221/planhmosupplemental.html" >v22.1</option><option value="https://www.opendental.com/manual214/planhmosupplemental.html" >v21.4</option><option value="https://www.opendental.com/manual213/planhmosupplemental.html" >v21.3</option><option value="https://www.opendental.com/manual212/planhmosupplemental.html" >v21.2</option><option value="https://www.opendental.com/manual211/planhmosupplemental.html" >v21.1</option><option value="https://www.opendental.com/manual205/planhmosupplemental.html" >v20.5</option><option value="https://www.opendental.com/manual204/planhmosupplemental.html" >v20.4</option><option value="https://www.opendental.com/manual203/planhmosupplemental.html" >v20.3</option><option value="https://www.opendental.com/manual202/planhmosupplemental.html" >v20.2</option><option value="https://www.opendental.com/manual201/planhmosupplemental.html" >v20.1</option><option value="https://www.opendental.com/manual194/planhmosupplemental.html" >v19.4</option><option value="https://www.opendental.com/manual193/planhmosupplemental.html" >v19.3</option><option value="https://www.opendental.com/manual192/planhmosupplemental.html" >v19.2</option><option value="https://www.opendental.com/manual191/planhmosupplemental.html" >v19.1</option><option value="https://www.opendental.com/manual184/planhmosupplemental.html" >v18.4</option><option value="https://www.opendental.com/manual183/planhmosupplemental.html" >v18.3</option><option value="https://www.opendental.com/manual182/planhmosupplemental.html" >v18.2</option><option value="https://www.opendental.com/manual181/planhmosupplemental.html" >v18.1</option><option value="https://www.opendental.com/manual174/planhmosupplemental.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>HMO / DMO Insurance Plan with Co-pays</p></div>
<div class="GeneralPageContent">
<p>Also known as mixed capitation, this <a href="insplantypes.html">Insurance Plan Type</a> is used for HMOs or DMOs with supplemental payments and copays.</p>
<img src="images/planHMO.gif" width="412" height="192"/><p>This insurance plan setup tracks write-offs and is common in Texas (e.g., CHIP, MCNA, DentaQuest, Medicaid).</p>
<p>Create a PPO plan that tracks write-offs, then add a copay fee schedule.</p>
<ol>
<li>Create a <i>Normal </i><a href="feeschedules.html">Fee Schedule</a> for the insurance plan. </li>
<ul>
<li>To calculate the fee for each procedure, add the insurance supplemental amount to the patient copay. <p class="codeblock">Insurance Supplemental Amounts + Patient Copay = Procedure Fee</p></li>
</ul>
<li>Create a <i>CoPay</i> fee schedule for the carrier.  <ul>
<li>Enter the patient's copay amount for each procedure into this fee schedule.<br/><div class="Note">Note: If there is no fee, make sure to enter 0 or the patient will get charged the UCR fees (or set the blank entry default behavior in <a href="preferences.html">Preferences</a>).</div>
</li>
</ul>
</li>
<li>On the <a href="insplan.html">Insurance Plan</a>, set the following:  <ul>
<li><b>Plan Type</b>: PPO Percentage</li>
<li><b>Fee Schedule</b>: The <i>Normal</i> fee schedule created in Step 1</li>
<li><b>Patient Co-pay Amounts</b>: The <i>CoPay</i> fee schedule created in Step 2.</li>
<li><b>Benefit Information</b>: Set benefits to 100% for all categories.</li>
</ul>
</li>
</ol>
<br/><p class="MarginBottomZero">Example: For D1110, DMO Insurance's will pay $90 and the patient has a copay of $10. </p>
<ul class="MarginBottomGap">
<li>In the Normal (i.e., insurance) fee schedule, Procedure A will have a fee amount of $100 (insurance + copay).</li>
<li>In the Copay fee schedule, Procedure A will have a fee of $10 (the copay).</li>
</ul>
<p>To calculate insurance estimates, Open Dental uses the following equation: <p class="codeblock">D1110 Normal fee ($100) - D1110 Copay fee ($10) = Insurance estimate ($90)</p></p>
<h2>Troubleshooting</h2>
<p class="MarginBottomZero">If a user entered this kind of plan as a <i>Capitation Plan Type</i> with a copay fee schedule, follow these steps to fix it. </p>
<ol class="MarginBottomGap">
<li>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Fee Schedules. Add a normal fee schedule with a similar but not identical name to the existing copay fee schedule.</li>
<li>For each procedure in the normal fee schedule, enter the fees using the following equation to determine the amount: <p class="codeblock">(Patient Copay + Insurance Supplemental Amounts = Procedure Fee)</p><p>Make sure to enter 0 for all fees where there is no supplemental fee or copay.</p>
</li>
<li>On the Edit Insurance plan window, change the following:  <ul>
<li><b>Plan Type</b>: PPO Percentage (from Capitation).</li>
<li><b>Fee Schedule</b>: The new normal fee schedule.</li>
<li><b>Benefit Information</b>: Set benefits to 100% for all benefit categories.</li>
</ul>
</li>
</ol>
<p>For tips on setting up copay fee schedules, see <a href="feeschedulelogic.html">Fee Schedule Logic</a>.</p>
</div>
</div>
</body>
</html>```
