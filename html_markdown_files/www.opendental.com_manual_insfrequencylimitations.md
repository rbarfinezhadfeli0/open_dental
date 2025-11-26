# File: ./www.opendental.com/manual/insfrequencylimitations.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Frequency Limitations</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/insfrequencylimitations.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/insfrequencylimitations.html" >v24.2</option><option value="https://www.opendental.com/manual241/insfrequencylimitations.html" >v24.1</option><option value="https://www.opendental.com/manual233/insfrequencylimitations.html" >v23.3</option><option value="https://www.opendental.com/manual232/insfrequencylimitations.html" >v23.2</option><option value="https://www.opendental.com/manual231/insfrequencylimitations.html" >v23.1</option><option value="https://www.opendental.com/manual224/insfrequencylimitations.html" >v22.4</option><option value="https://www.opendental.com/manual223/insfrequencylimitations.html" >v22.3</option><option value="https://www.opendental.com/manual222/insfrequencylimitations.html" >v22.2</option><option value="https://www.opendental.com/manual221/insfrequencylimitations.html" >v22.1</option><option value="https://www.opendental.com/manual214/insfrequencylimitations.html" >v21.4</option><option value="https://www.opendental.com/manual213/insfrequencylimitations.html" >v21.3</option><option value="https://www.opendental.com/manual212/insfrequencylimitations.html" >v21.2</option><option value="https://www.opendental.com/manual211/insfrequencylimitations.html" >v21.1</option><option value="https://www.opendental.com/manual205/insfrequencylimitations.html" >v20.5</option><option value="https://www.opendental.com/manual204/insfrequencylimitations.html" >v20.4</option><option value="https://www.opendental.com/manual203/insfrequencylimitations.html" >v20.3</option><option value="https://www.opendental.com/manual202/insfrequencylimitations.html" >v20.2</option><option value="https://www.opendental.com/manual201/insfrequencylimitations.html" >v20.1</option><option value="https://www.opendental.com/manual194/insfrequencylimitations.html" >v19.4</option><option value="https://www.opendental.com/manual193/insfrequencylimitations.html" >v19.3</option><option value="https://www.opendental.com/manual192/insfrequencylimitations.html" >v19.2</option><option value="https://www.opendental.com/manual191/insfrequencylimitations.html" >v19.1</option><option value="https://www.opendental.com/manual184/insfrequencylimitations.html" >v18.4</option><option value="https://www.opendental.com/manual183/insfrequencylimitations.html" >v18.3</option><option value="https://www.opendental.com/manual182/insfrequencylimitations.html" >v18.2</option><option value="https://www.opendental.com/manual181/insfrequencylimitations.html" >v18.1</option><option value="https://www.opendental.com/manual174/insfrequencylimitations.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Frequency Limitations</p></div>
<div class="GeneralPageContent">
<p>Insurance frequency limitations may or may not affect estimates of treatment planned procedures, depending on Preferences and Code Groups.</p>
<p>In the <a href="benefitinfo.html">Edit Benefits</a> window, at the right, is the Frequency Limitation Benefits section.</p>
<img src="images/insFrequencyEnter.png" width="411" height="423"/><p class="MarginBottomZero">When <i>Enable Insurance Frequency Checking</i> is checked in <a href="preferences.html">Preferences</a>: </p>
<ul class="MarginBottomGap">
<li>In the Treatment Plan Module, primary and secondary insurance estimates consider Frequency Limitations.</li>
<li>$0 <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a> are not considered for Frequency Limitations.</li>
<li>When scheduling a procedure that has met its limitation, users receive a warning.</li>
</ul>
<h2>Set up and Enable Frequency Checking and Code Groups</h2>
<p>Frequency checking is enabled by default by the <i>Enable Insurance Frequency Checking</i> preference.</p>
<p>Customize <a href="codegroups.html">Code Groups</a> to determine which Code Groups are displayed in the grid and which procedures are affected by Frequency Limitations. </p>
<p>Only Code Groups marked <i>Show In Frequencies</i> are displayed in the grid. The procedures affected by Frequency Limitations are determined by the procedures assigned to the Code Group. Default codes are already included, and new codes can be added as needed. It is not recommended to change or remove default codes as it can affect estimates or benefits. </p>
<h2>Benefit Frequencies</h2>
<p>Enter Frequency Limitations for a Code Group by clicking a row in the Frequency Limitations Benefits grid. For each procedure code or Code Group with a frequency limitation, a row displays in the Family Module, Insurance Plan area for reference.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Pat: <i>X</i> indicates this Frequency Limitation is a patient override. Patient overrides only affect the selected patient.</li>
<li>Code Group: Code Group associated to the Frequency Limitation.</li>
<li>#: Click the column to type a quantity for the Frequency Limitation. Corresponds with the Frequency. <ul>
<li>If duplicate rows exist for the same Code Group, set the # to blank or 0. When changes are saved, the duplicate row is removed.</li>
</ul>
</li>
<li>Frequency: Click to choose the frequency type from a dropdown.</li>
<li>Treat Area: Click to choose the applicable treatment area from a dropdown. <i>Default</i> indicates the treatment area assigned to <a href="procedurecodeedit.html">Procedure Codes</a> is used to enforce Frequency Limitations. Use <i>Mouth</i> to enforce a frequency limitation regardless of treatment area. </li>
</ul>
<p><b>Show Procedure Codes</b>: Check to display the procedure codes included in the listed Code Groups.</p>
<p><b>Add</b>: Create an additional Benefit Frequency for a Code Group in the list. Opens Edit Benefit Frequency.</p>
<h2>Edit Benefit Frequency</h2>
<p>Click <b>Add</b> to create an additional Benefit Frequency for an existing Code Group. </p>
<p>This is uncommon but may be needed in some circumstances, like when there are frequency limitations both by treatment area and by time period (e.g., 2 procedures per benefit year and once every 5 years on the same tooth). See Examples below.</p>
<img src="images/benefitFrequencyEdit.png" width="695" height="437"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Code Group</b>: Highlight the Code Group to add a frequency limitation for.</li>
<li><b>Quantity</b>: Enter a value to correspond with the Time Period. </li>
<li><b>Frequency</b>: Highlight the frequency type.</li>
<li><b>Treatment Area</b>: Highlight an area to restrict the benefit to only the specified Treatment Area. </li>
</ul>
<p><b>Patient Override</b>: Check to indicate this Frequency Limitation applies to the selected patient only.</p>
<h2>Frequency Limitations in the Treatment Plan</h2>
<p> In the <a href="treatmentplan.html">Treatment Plan Module</a>, click the <b>Estimates as of</b> dropdown and select a date (this defaults to the current date). Once a date is selected, treatment plan estimates are updated to reflect the chosen date. If a procedure is not covered due to a frequency limitation, as of the selected date, the procedure's description reflects this.</p>
<p>Double-click a procedure to view the <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a> with more insurance estimate details.</p>
<p>Completed procedures attached to a claim for the same insurance plan affect frequency limitation calculations. Dates entered into <a href="inshistory.html">Insurance History</a> are also considered. Once claims are received, denied procedures or procedures where insurance paid $0 are not counted toward the frequency. </p>
<h2>Examples</h2>
<p class="MarginBottomZero"> If 2 is entered in the <i>#</i> or <i>Quantity</i> box, Frequency options work as follows: </p>
<ul class="MarginBottomGap">
<li>Every # Years <ul>
<li>One procedure covered every two years. Uses rolling year (e.g., if covered 12/13/2023, will not be covered again until 12/14/2025).</li>
</ul>
</li>
<li># Per Benefit Year</li>
<ul>
<li>Two procedures covered within the benefit year. Uses the selected benefit year, i.e., Calendar or Month.</li>
</ul>
<li>Every # of Months</li>
<ul>
<li>One procedure covered every two months.</li>
</ul>
<li># in Last 12 Months <ul>
<li>Two procedures covered in the last 12-month period. Uses the last 12 months from today (e.g., Rolling Year, Rolling Benefits).</li>
</ul>
</li>
</ul>
<p>Multiple Frequency Limitations can be entered for the same Code Group. For example, two Crowns are covered in a Benefit Year and a replacement Crown on the same tooth is only covered once every five years. Enter two Frequency Limitation Benefits:</p>
<p class="MarginBottomZero">#1 - Crown covered on the same tooth once every five years: </p>
<ul class="MarginBottomGap">
<li>Code Group: Crown</li>
<li>Quantity/#: 5</li>
<li>Frequency: Every # Years</li>
<li>Treatment Area: Tooth</li>
</ul>
<p class="MarginBottomZero">#2 - Two Crowns covered in a benefit year: </p>
<ul class="MarginBottomGap">
<li>Code Group: Crown</li>
<li>Quantity/#: 2</li>
<li>Frequency: # Per Benefit Year</li>
<li>Treatment Area: Mouth</li>
</ul>
</div>
</div>
</body>
</html>```
