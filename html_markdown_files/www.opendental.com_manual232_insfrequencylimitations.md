# File: ./www.opendental.com/manual232/insfrequencylimitations.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Frequency Limitations</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('insfrequencylimitations','benefitinfo','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/insfrequencylimitations.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/insfrequencylimitations.html" >v24.2</option><option value="https://www.opendental.com/manual241/insfrequencylimitations.html" >v24.1</option><option value="https://www.opendental.com/manual233/insfrequencylimitations.html" >v23.3</option><option value="https://www.opendental.com/manual232/insfrequencylimitations.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/insfrequencylimitations.html" >v23.1</option><option value="https://www.opendental.com/manual224/insfrequencylimitations.html" >v22.4</option><option value="https://www.opendental.com/manual223/insfrequencylimitations.html" >v22.3</option><option value="https://www.opendental.com/manual222/insfrequencylimitations.html" >v22.2</option><option value="https://www.opendental.com/manual221/insfrequencylimitations.html" >v22.1</option><option value="https://www.opendental.com/manual214/insfrequencylimitations.html" >v21.4</option><option value="https://www.opendental.com/manual213/insfrequencylimitations.html" >v21.3</option><option value="https://www.opendental.com/manual212/insfrequencylimitations.html" >v21.2</option><option value="https://www.opendental.com/manual211/insfrequencylimitations.html" >v21.1</option><option value="https://www.opendental.com/manual205/insfrequencylimitations.html" >v20.5</option><option value="https://www.opendental.com/manual204/insfrequencylimitations.html" >v20.4</option><option value="https://www.opendental.com/manual203/insfrequencylimitations.html" >v20.3</option><option value="https://www.opendental.com/manual202/insfrequencylimitations.html" >v20.2</option><option value="https://www.opendental.com/manual201/insfrequencylimitations.html" >v20.1</option><option value="https://www.opendental.com/manual194/insfrequencylimitations.html" >v19.4</option><option value="https://www.opendental.com/manual193/insfrequencylimitations.html" >v19.3</option><option value="https://www.opendental.com/manual192/insfrequencylimitations.html" >v19.2</option><option value="https://www.opendental.com/manual191/insfrequencylimitations.html" >v19.1</option><option value="https://www.opendental.com/manual184/insfrequencylimitations.html" >v18.4</option><option value="https://www.opendental.com/manual183/insfrequencylimitations.html" >v18.3</option><option value="https://www.opendental.com/manual182/insfrequencylimitations.html" >v18.2</option><option value="https://www.opendental.com/manual181/insfrequencylimitations.html" >v18.1</option><option value="https://www.opendental.com/manual174/insfrequencylimitations.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Frequency Limitations</p></div>
<div class="GeneralPageContent">
<p>Insurance frequency limitations may or may not affect estimates of treatment planned procedures, depending on Preferences and Code Groups.</p>
<p>In the <a href="benefitinfo.html">Edit Benefits</a> window, at the left, is the Frequencies section.</p>
<img src="images/insFrequencyEnter.png" width="290" height="128"/><p class="MarginBottomZero">When <i>Enable Insurance Frequency Checking</i> is checked in <a href="preferences.html">Preferences</a>: </p>
<ul class="MarginBottomGap">
<li>In the Treatment Plan Module, primary and secondary insurance estimates consider Frequency Limitations.</li>
<li>When checking for frequencies, tooth number, surface, and tooth range is taken into consideration (e.g., If insurance covers one composite filling per year, per tooth - Open Dental can't calculate this as we treat composite fillings per surface, not per tooth).</li>
<li>When scheduling a procedure that has met its limitation, users receive a warning.</li>
</ul>
<h2>Set up and Enable Frequency Checking and Code Groups</h2>
<p>Frequency checking is enabled by default by the <i>Enable Insurance Frequency Checking</i> preference. </p>
<p>The procedures affected by Frequency Limitations are determined by <a href="codegroups.html">Code Groups</a>. Default codes are already included, and new codes can be added as needed. It is not recommended to change or remove default codes as it can affect estimates or benefits. </p>
<h2>Benefit Frequencies</h2>
<p>Click <b>More</b> to open the Benefit Frequencies window and enter additional frequencies not displayed in the Edit Benefits window. </p>
<img src="images/insBenefitFrequencies.png" width="436" height="429"/><p>Code Group: Displays the Code Groups that have already been set up.</p>
<p><b>#</b>: Click the column to type a value for the Frequency Limitation.</p>
<p><b>Frequency</b>: Click to choose the frequency type from a dropdown.</p>
<h2>Frequency Limitations in the Treatment Plan</h2>
<p> In the <a href="treatmentplan.html">Treatment Plan Module</a>, click the <b>Estimates as of</b> dropdown and select a date (this defaults to the current date). Once a date is selected, treatment plan estimates are updated to reflect the chosen date. If a procedure is not covered due to a frequency limitation, as of the selected date, the procedure's description reflects this.</p>
<p>Double-click a procedure to view the <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a> with more insurance estimate details.</p>
<p>Completed procedures attached to a claim for the same insurance plan affect frequency limitation calculations. Dates entered into <a href="inshistory.html">Insurance History</a> are also considered. Once claims are received, denied procedures or procedures where insurance paid $0 are still counted toward the frequency. </p>
</div>
</div>
</body>
</html>```
