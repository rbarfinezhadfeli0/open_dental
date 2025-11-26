# File: ./www.opendental.com/manual232/cob.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Coordination of Benefits ( COB )</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('cob','inssecondary','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/cob.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/cob.html" >v24.2</option><option value="https://www.opendental.com/manual241/cob.html" >v24.1</option><option value="https://www.opendental.com/manual233/cob.html" >v23.3</option><option value="https://www.opendental.com/manual232/cob.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/cob.html" >v23.1</option><option value="https://www.opendental.com/manual224/cob.html" >v22.4</option><option value="https://www.opendental.com/manual223/cob.html" >v22.3</option><option value="https://www.opendental.com/manual222/cob.html" >v22.2</option><option value="https://www.opendental.com/manual221/cob.html" >v22.1</option><option value="https://www.opendental.com/manual214/cob.html" >v21.4</option><option value="https://www.opendental.com/manual213/cob.html" >v21.3</option><option value="https://www.opendental.com/manual212/cob.html" >v21.2</option><option value="https://www.opendental.com/manual211/cob.html" >v21.1</option><option value="https://www.opendental.com/manual205/cob.html" >v20.5</option><option value="https://www.opendental.com/manual204/cob.html" >v20.4</option><option value="https://www.opendental.com/manual203/cob.html" >v20.3</option><option value="https://www.opendental.com/manual202/cob.html" >v20.2</option><option value="https://www.opendental.com/manual201/cob.html" >v20.1</option><option value="https://www.opendental.com/manual194/cob.html" >v19.4</option><option value="https://www.opendental.com/manual193/cob.html" >v19.3</option><option value="https://www.opendental.com/manual192/cob.html" >v19.2</option><option value="https://www.opendental.com/manual191/cob.html" >v19.1</option><option value="https://www.opendental.com/manual184/cob.html" >v18.4</option><option value="https://www.opendental.com/manual183/cob.html" >v18.3</option><option value="https://www.opendental.com/manual182/cob.html" >v18.2</option><option value="https://www.opendental.com/manual181/cob.html" >v18.1</option><option value="https://www.opendental.com/manual174/cob.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Coordination of Benefits ( COB )</p></div>
<div class="GeneralPageContent">
<p>Coordination of benefits (COB) are the rules for how insurance pays when a patient has coverage under more than one plan. </p>
<p>On the <a href="inssecondary.html">Secondary Insurance</a> plan, in the <a href="insplan.html">Edit Insurance Plan</a> window, Other Ins tab, select a Coordination of Benefits rule.</p>
<img src="images/insPlanEditCOB.png" width="463" height="472"/><p>Set the default Coordination of Benefits rule in <a href="preferences.html">Preferences</a>. There are many different ways to calculate COB, made even more complicated by various State laws. Non-duplication rules can vary, depending on the carrier. </p>
<p>Open Dental has the following different COB Rule options.</p>
<p class="MarginBottomZero"><b>Basic</b>: Secondary pays the lesser of: </p>
<ol class="MarginBottomGap">
<li>The amount that it would have paid in the absence of any other coverage.</li>
<li>The secondary allowed amount minus what primary paid.</li>
</ol>
<p class="MarginBottomZero">For example, on a $100 procedure, primary might pay $80 (80% of its allowed fee). </p>
<ul class="MarginBottomGap">
<li>If the secondary allowed amount was $110, secondary would pay the lesser of $88 or ($110 - $80), so $30.</li>
<li>If the secondary allowed amount was $90, secondary would pay the lesser of $72 or ($90 - $80), so $10.</li>
<li>As a second example, on a $100 procedure, primary might pay $50 (50% of its allowed fee).</li>
<li>If the secondary allowed amount was $110, secondary would pay the lesser of $55 or ($110 - $50), so $55.</li>
<li>If the secondary allowed amount was $90, secondary would pay the lesser of $45 or ($90 - $50), so $40.</li>
</ul>
<p class="MarginBottomZero"><b>Standard</b>: Secondary pays the lesser of: </p>
<ol class="MarginBottomGap">
<li>The amount that it would have paid in the absence of any other coverage.</li>
<li>The patient's portion under the primary plan.</li>
</ol>
<p class="MarginBottomZero">For example, on a $100 procedure, primary might pay $80 (80% of its allowed fee). </p>
<ul class="MarginBottomGap">
<li>If the secondary allowed amount was $110, secondary would pay the lesser of $88 or $20, so $20.</li>
<li>If the secondary allowed amount was $90, secondary would pay the lesser of $72 or $20, so $20.</li>
<li>As a second example, on a $100 procedure, primary might pay $50 (50% of its allowed fee).</li>
<li>If the secondary allowed amount was $110, secondary would pay the lesser of $55 or $50, so $50.</li>
<li>If the secondary allowed amount was $90, secondary would pay the lesser of $45 or $50, so $45.</li>
</ul>
<p><b>Carve Out</b>: (Non-Duplication) Secondary reduces what they pay by what primary paid.</p>
<p>Calculation used: <span class="codeblock">Secondary InsEst = (Secondary Allowed - Secondary Deductible) * Secondary Percentage - PaidOther</span></p>
<p class="MarginBottomZero">Example with deductible: On a $1500 procedure, primary might pay $750 (50% of its allowed fee). </p>
<ul class="MarginBottomGap">
<li>If secondary allowed amount was $1200, secondary deductible was $50 and secondary percentage was 80%, then secondary would pay: $170</li>
<li>170 = (1200 - 50) * .8 - 750</li>
</ul>
<p class="MarginBottomZero">Example without deductible (Non-Duplication: On a $100 procedure, primary might pay $80 (80% of its allowed fee). </p>
<ul class="MarginBottomGap">
<li>If secondary allowed amount was $110, secondary would pay $88 - $80 = $8.</li>
<li>If secondary allowed amount was $90, secondary would pay $72 - $80 = $0.</li>
<li>As a second example, on a $100 procedure, primary might pay $50 (50% of its allowed fee).</li>
<li>If secondary allowed amount was $110, secondary would pay $55 - $50 = $5.</li>
<li>If secondary allowed amount was $90, secondary would pay $45 - $50 = $0.</li>
</ul>
<p><b>Secondary Medicaid:</b> Secondary reduces what they pay by what primary pays. The estimated patient portion becomes a write-off for the primary insurance. Only use this rule when allowed to bill Medicaid as secondary.</p>
<p>Calculations used: <span class="codeblock">Pri Ins Write-Off = ProcFee - Pri Ins Pay Est (or Pri Ins Pay) - Sec Ins Est (or Sec Ins Pay)<br/> Secondary Ins Est = (Secondary Allowed - Secondary Deductible) * Secondary Percentage - PaidOther</span></p>
<p>Examples: On a $100 procedure, primary insurance might allow $70, pay $35, and write off $30. Secondary insurance might allow $20, pay $0, and write off $35. The patient pays $0.</p>
<p>On a $100 procedure, primary insurance might allow $40, pay $20 and write off $60. Secondary insurance might allow $30, pay $10 and write off $10. The patient pays $0.</p>
</div>
</div>
</body>
</html>```
