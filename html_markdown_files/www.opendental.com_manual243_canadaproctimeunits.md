# File: ./www.opendental.com/manual243/canadaproctimeunits.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Canada Procedure Code Time Units</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('canadaproctimeunits','canada','countries','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/canadaproctimeunits.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/canadaproctimeunits.html" >v24.2</option><option value="https://www.opendental.com/manual241/canadaproctimeunits.html" >v24.1</option><option value="https://www.opendental.com/manual233/canadaproctimeunits.html" >v23.3</option><option value="https://www.opendental.com/manual232/canadaproctimeunits.html" >v23.2</option><option value="https://www.opendental.com/manual231/canadaproctimeunits.html" >v23.1</option><option value="https://www.opendental.com/manual224/canadaproctimeunits.html" >v22.4</option><option value="https://www.opendental.com/manual223/canadaproctimeunits.html" >v22.3</option><option value="https://www.opendental.com/manual222/canadaproctimeunits.html" >v22.2</option><option value="https://www.opendental.com/manual221/canadaproctimeunits.html" >v22.1</option><option value="https://www.opendental.com/manual214/canadaproctimeunits.html" >v21.4</option><option value="https://www.opendental.com/manual213/canadaproctimeunits.html" >v21.3</option><option value="https://www.opendental.com/manual212/canadaproctimeunits.html" >v21.2</option><option value="https://www.opendental.com/manual211/canadaproctimeunits.html" >v21.1</option><option value="https://www.opendental.com/manual205/canadaproctimeunits.html" >v20.5</option><option value="https://www.opendental.com/manual204/canadaproctimeunits.html" >v20.4</option><option value="https://www.opendental.com/manual203/canadaproctimeunits.html" >v20.3</option><option value="https://www.opendental.com/manual202/canadaproctimeunits.html" >v20.2</option><option value="https://www.opendental.com/manual201/canadaproctimeunits.html" >v20.1</option><option value="https://www.opendental.com/manual194/canadaproctimeunits.html" >v19.4</option><option value="https://www.opendental.com/manual193/canadaproctimeunits.html" >v19.3</option><option value="https://www.opendental.com/manual192/canadaproctimeunits.html" >v19.2</option><option value="https://www.opendental.com/manual191/canadaproctimeunits.html" >v19.1</option><option value="https://www.opendental.com/manual184/canadaproctimeunits.html" >v18.4</option><option value="https://www.opendental.com/manual183/canadaproctimeunits.html" >v18.3</option><option value="https://www.opendental.com/manual182/canadaproctimeunits.html" >v18.2</option><option value="https://www.opendental.com/manual181/canadaproctimeunits.html" >v18.1</option><option value="https://www.opendental.com/manual174/canadaproctimeunits.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Canada Procedure Code Time Units</p></div>
<div class="GeneralPageContent">
<p>Procedures that use scaling units can be entered and tracked using Time Units.</p>
<p>For <a href="canada.html">Canada</a> users, in the <a href="treatmentplan.html">Treatment Plan Module</a>, click<b> Ins Rem</b>.</p>
<img src="images/canadaProcTimeUnitsRem.png" width="720" height="314"/><p>Alternatively, in the <a href="account.html">Account Module</a>, click <b>Ins Rem</b>.</p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our webinar: <a href="https://youtu.be/NZaggmVwFbo">Setting Up and Tracking Procedure Time Units</a>.</p>
<p class="MarginBottomZero">To calculate time units, the following must be set </p>
<ul class="MarginBottomGap">
<li>The procedure code has must have a time unit value. See Procedure Code Time Units below. </li>
<li>The insurance plan must have an other benefit entered to track units. See Time Unit Benefit below. </li>
</ul>
<p>Quantity used and remaining updates as completed procedures in the category are added to claims.</p>
<h2>Procedure Code Time Units</h2>
<p>Ensure each <a href="procedurecodeedit.html">Procedure Code</a> being tracked has a Time Unit entered.</p>
<img src="images/canadaProcTimeUnits.png" width="500" height="419"/><h2>Time Unit Benefit</h2>
<p>For each insurance plan tracking time units, enter a <a href="benefitinforowview.html">Benefit</a> using the example below as a guide.</p>
<img src="images/canadaTimeUnitBenefit.png" width="580" height="588"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Category</b>: Set to something other than<i> None</i>.</li>
<li><b>Type</b>: Set to <i>Limitations</i>.</li>
<li><b>Time Period</b>: Set the appropriate time period.</li>
<li><b>Quantity</b>: Enter the time unit values covered by the plan.</li>
<li><b>Qualifier</b>: Set to <i>Number of Services</i>.</li>
<li><b>Coverage Level</b>: Set to <i>Individual</i> or <i>Family</i>.</li>
<li><b>Treatment Area</b>: Leave as <i>Default</i>.</li>
</ul>
</div>
</div>
</body>
</html>```
