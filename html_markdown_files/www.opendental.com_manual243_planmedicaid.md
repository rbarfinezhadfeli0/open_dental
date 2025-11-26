# File: ./www.opendental.com/manual243/planmedicaid.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Medicaid or Flat Co-Pay Insurance Plan</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('planmedicaid','insplantypes','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/planmedicaid.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/planmedicaid.html" >v24.2</option><option value="https://www.opendental.com/manual241/planmedicaid.html" >v24.1</option><option value="https://www.opendental.com/manual233/planmedicaid.html" >v23.3</option><option value="https://www.opendental.com/manual232/planmedicaid.html" >v23.2</option><option value="https://www.opendental.com/manual231/planmedicaid.html" >v23.1</option><option value="https://www.opendental.com/manual224/planmedicaid.html" >v22.4</option><option value="https://www.opendental.com/manual223/planmedicaid.html" >v22.3</option><option value="https://www.opendental.com/manual222/planmedicaid.html" >v22.2</option><option value="https://www.opendental.com/manual221/planmedicaid.html" >v22.1</option><option value="https://www.opendental.com/manual214/planmedicaid.html" >v21.4</option><option value="https://www.opendental.com/manual213/planmedicaid.html" >v21.3</option><option value="https://www.opendental.com/manual212/planmedicaid.html" >v21.2</option><option value="https://www.opendental.com/manual211/planmedicaid.html" >v21.1</option><option value="https://www.opendental.com/manual205/planmedicaid.html" >v20.5</option><option value="https://www.opendental.com/manual204/planmedicaid.html" >v20.4</option><option value="https://www.opendental.com/manual203/planmedicaid.html" >v20.3</option><option value="https://www.opendental.com/manual202/planmedicaid.html" >v20.2</option><option value="https://www.opendental.com/manual201/planmedicaid.html" >v20.1</option><option value="https://www.opendental.com/manual194/planmedicaid.html" >v19.4</option><option value="https://www.opendental.com/manual193/planmedicaid.html" >v19.3</option><option value="https://www.opendental.com/manual192/planmedicaid.html" >v19.2</option><option value="https://www.opendental.com/manual191/planmedicaid.html" >v19.1</option><option value="https://www.opendental.com/manual184/planmedicaid.html" >v18.4</option><option value="https://www.opendental.com/manual183/planmedicaid.html" >v18.3</option><option value="https://www.opendental.com/manual182/planmedicaid.html" >v18.2</option><option value="https://www.opendental.com/manual181/planmedicaid.html" >v18.1</option><option value="https://www.opendental.com/manual174/planmedicaid.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Medicaid or Flat Co-Pay Insurance Plan</p></div>
<div class="GeneralPageContent">
<p>Set up this <a href="insplantypes.html">Insurance Plan Type</a> when the plan pays a flat fee instead of a percentage. Insurance coverage will be 100%. </p>
<img src="images/planMedicaid.png" width="412" height="208"/><p>Write-offs are not tracked. To track write-offs, see <a href="planhmosupplemental.html">HMO / DMO Insurance Plan with Co-pays</a>.</p>
<p>On the <a href="insplan.html">Insurance Plan</a>, select these options.</p>
<ul>
<li><b>Plan Type</b>: <i>Medicaid or Flat Co-Pay</i>. This will clear all percentages, maximums and deductibles, but a warning message will show first.</li>
<li><b>Fee Schedule</b>: The carrier's fee schedule.</li>
<li><b>Patient Co-pay Amounts</b>: The copay fee schedule for the carrier.</li>
</ul>
<br/><p>If insurance does not cover a procedure for some reason, and the office does not expect the patient to pay, enter the procedure fee as a write-off when <a href="claimreceive.html">receiving the claim</a>.</p>
<p class="MarginBottomZero">If a patient is required to pay a copay for procedures </p>
<ol class="MarginBottomGap">
<li>Create a <i>copay</i><a href="feeschedules.html"> Fee Schedule</a> for the carrier.</li>
<li>For each procedure code, enter the patient's copay amount. There can be just a few fees with the rest blank. If you only have the insurance copay fee schedule, not the patient copay amounts, use this equation to obtain the fee: <p class="codeblock">Carrier Fee - Insurance Copay = Patient Copay</p></li>
</ol>
</div>
</div>
</body>
</html>```
