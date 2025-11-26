# File: ./www.opendental.com/manual243/orthocase.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Ortho Case</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('orthocase','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/orthocase.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/orthocase.html" >v24.2</option><option value="https://www.opendental.com/manual241/orthocase.html" >v24.1</option><option value="https://www.opendental.com/manual233/orthocase.html" >v23.3</option><option value="https://www.opendental.com/manual232/orthocase.html" >v23.2</option><option value="https://www.opendental.com/manual231/orthocase.html" >v23.1</option><option value="https://www.opendental.com/manual224/orthocase.html" >v22.4</option><option value="https://www.opendental.com/manual223/orthocase.html" >v22.3</option><option value="https://www.opendental.com/manual222/orthocase.html" >v22.2</option><option value="https://www.opendental.com/manual221/orthocase.html" >v22.1</option><option value="https://www.opendental.com/manual214/orthocase.html" >v21.4</option><option value="https://www.opendental.com/manual213/orthocase.html" >v21.3</option><option value="https://www.opendental.com/manual212/orthocase.html" >v21.2</option><option value="https://www.opendental.com/manual211/orthocase.html" >v21.1</option><option value="https://www.opendental.com/manual205/orthocase.html" >v20.5</option><option value="https://www.opendental.com/manual204/orthocase.html" >v20.4</option><option value="https://www.opendental.com/manual203/orthocase.html" >v20.3</option><option value="https://www.opendental.com/manual202/orthocase.html" >v20.2</option><option value="https://www.opendental.com/manual201/orthocase.html" >v20.1</option><option value="https://www.opendental.com/manual194/orthocase.html" >v19.4</option><option value="https://www.opendental.com/manual193/orthocase.html" >v19.3</option><option value="https://www.opendental.com/manual192/orthocase.html" >v19.2</option><option value="https://www.opendental.com/manual191/orthocase.html" >v19.1</option><option value="https://www.opendental.com/manual184/orthocase.html" >v18.4</option><option value="https://www.opendental.com/manual183/orthocase.html" >v18.3</option><option value="https://www.opendental.com/manual182/orthocase.html" >v18.2</option><option value="https://www.opendental.com/manual181/orthocase.html" >v18.1</option><option value="https://www.opendental.com/manual174/orthocase.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Ortho Case</p></div>
<div class="GeneralPageContent">
<p>Ortho Cases help determine an ortho schedule and estimated payment information.</p>
<p>In the <a href="account.html">Account Module</a>, select the Ortho Cases tab.</p>
<img src="images/orthoCaseTab.png" width="561" height="104"/><p>The Ortho Cases tab is only available if procedures are added to Ortho Case Procedures in <a href="preferences.html">Preferences</a>.</p>
<p><b>Add Ortho Case</b>: Click to create a new Ortho Case. This button is disabled if the patient already has an active Ortho Case. Patients can have one active Ortho Case at a time.</p>
<p><b>Make Active</b>: Click to activate the currently selected Ortho Case. If a different Ortho Case was previously active, it is deactivated.</p>
<p><b>Hide Inactive Ortho Cases</b>: Check to hide any inactive Ortho Cases. </p>
<p class="MarginBottomZero"><b>Ortho Cases Grid</b>:  </p>
<ul class="MarginBottomGap">
<li>Is Active: An X shows on the active Ortho Case. Only one case can be active at a time for a patient. Once the debond procedure is set complete, the case is deactivated.</li>
<li>Is Transfer: An X shows if the Ortho Case is marked as a transfer. This is used to indicate a patient who had their banding done with another provider.</li>
<li>Start Date: The banding or transfer date of the Ortho Case.</li>
<li>Completion Date: The debonding date. </li>
</ul>
<p>When adding a new Ortho Case, the following window appears. Alternatively, double-click a case to view the details.</p>
<img src="images/orthoCaseWindow.png" width="876" height="442"/><p>When adding a new Ortho Case, all information must be filled out.</p>
<p><b>Banding Procedure</b>: Click <b>[...]</b> to select the banding procedure. The following window opens. Only treatment planned procedures are listed. Banding procedures are determined by codes added to the <i>Ortho Case Procedures</i> preference. Only one banding procedure can be associated with an Ortho Case.<br/><img src="images/orthoBandingProc.png" width="563" height="159" class="ImageInParagraph"/></p>
<p><b>Is Transfer</b>: Check this box when the patient has been transferred to the office from another provider, and your office did not provide the banding procedure.</p>
<p><b>Payment Plan</b>: Click to create a <a href="paymentplandynamic.html">Payment Plan</a> for any completed procedures linked to the active Ortho Case. The completed procedures are automatically attached to the plan's production, if not already attached to a plan. If a Payment Plan already exists for the Ortho Case, the button opens that plan instead of creating a new one.</p>
<p class="MarginBottomZero"><b>Fee Details: </b> Enter the fee information for this patient. </p>
<ul class="MarginBottomGap">
<li>Fee: The total of the orthodontic treatment.</li>
<li>Primary Insurance: The amount expected to be paid by primary insurance.</li>
<li>Secondary Insurance: Only visible when patient has a secondary insurance plan. The amount expected to be paid by secondary insurance.</li>
<li>Patient Portion: The amount expected to be paid by the patient.</li>
</ul>
<p class="MarginBottomZero"><b>Procedure Breakdown</b>: The amount towards each procedure. Enter as a percentage or amount. Percentages must equal 100. </p>
<ul class="MarginBottomGap">
<li>Banding Amount: Percentage or amount of the total fee applied to the banding procedure. </li>
<li>Debond Amount: Percentage or amount of the total fee applied to the debonding procedure.</li>
<li>All Visits Amount: Percentage or amount of the total fee applied to the individual visits.</li>
</ul>
<p class="MarginBottomZero"><b>Visit Details</b>: Enter one field to automatically calculate the others. </p>
<ul class="MarginBottomGap">
<li>Percent per Visit: The percentage of the total fee applied to each visit.</li>
<li>Amount per Visit: The amount of the total fee applied to each visit.</li>
<li>Visits Planned: The total number of expected visits.</li>
<li>Visits Completed: Automatically calculates as visit appointments are set complete. </li>
</ul>
<p class="MarginBottomZero"><b>Dates</b>: Enter the banding date and expected debonding date.  </p>
<ul class="MarginBottomGap">
<li>Banding Date: Enter the date of the banding procedure. If <i>Is Transfer</i> is checked, this shows as the Transfer Date.</li>
<li>Expected Debond Date: Enter the expected date of the Debond procedure. </li>
<li>Expected days of treatment: Automatically calculated.</li>
</ul>
<p class="MarginBottomZero"><b>Ortho Schedule</b>: Automatically created. Shows each procedure and visit.  </p>
<ul class="MarginBottomGap">
<li>Green line items have been set complete. The Date Completed automatically updates.</li>
<li>Black line items are procedures not yet completed. </li>
</ul>
<p>If any items are showing in red, they must be fixed before continuing.</p>
<p><b>Delete</b>: Only available for existing Ortho Cases. Click to delete the entire Ortho Case. Only active Ortho Cases can be deleted.</p>
<p><b>Close Case</b>: Only available for existing Ortho Cases with completed schedule items. Click to close the Ortho Case when treatment is completed, or the patient has transferred to a different provider. Only active Ortho Cases can be closed. </p>
<p><b>Detach Selected</b>: Highlight procedures to detach from the Ortho Schedule as needed. When a procedure is selected, all procedures below are also selected.</p>
<p>When all information is entered, and no items are showing in red, click <b>Save</b> to create the Ortho Case or save changes. </p>
<p>Once the Ortho Case is saved, all fields, except <i>Expected Debond Date</i>, are read-only.</p>
</div>
</div>
</body>
</html>```
