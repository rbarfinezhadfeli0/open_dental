# File: ./www.opendental.com/manual/sheetsgrid.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sheet Grid</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetsgrid','sheetsetup','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/sheetsgrid.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/sheetsgrid.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetsgrid.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetsgrid.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetsgrid.html" >v23.2</option><option value="https://www.opendental.com/manual231/sheetsgrid.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetsgrid.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetsgrid.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetsgrid.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetsgrid.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetsgrid.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetsgrid.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetsgrid.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetsgrid.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetsgrid.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetsgrid.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetsgrid.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetsgrid.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetsgrid.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetsgrid.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetsgrid.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetsgrid.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetsgrid.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetsgrid.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetsgrid.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetsgrid.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetsgrid.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetsgrid.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sheet Grid</p></div>
<div class="GeneralPageContent">
<p>Grids are special fields used in certain sheets.</p>
<p>In <a href="sheetsetup.html">Edit Sheet Def</a>, click <b>Grid</b>.</p>
<img src="images/sheetsGridType.png" width="358" height="172"/><p>Alternatively, in Sheet Def Edit double-click an existing Grid in the preview area or Fields list to edit.</p>
<p>Grids are a fixed group of information organized into columns and rows. They can be added to <a href="statement.html">Statements</a>, <a href="treatmentplan.html">Treatment Plans</a>, <a href="referrals.html">Referrals</a>, <a href="layout.html">Chart Layouts</a>, and printed <a href="paymentplanpatient.html">Payment Plans</a>. </p>
<p>Also see: <a href="sheetsaddelements.html">Sheet Field Types</a></p>
<p>When adding a grid to a sheet, use the Grid Type dropdown to select the grid. Available options depend on the sheet type.</p>
<img src="images/sheetsGridEdit.png" width="493" height="310"/><p class="MarginBottomZero">When editing a grid, you can determine the following: </p>
<ul class="MarginBottomGap">
<li><b>Grid Type</b>: Automatically selected. To change the grid type, delete and re-add using the correct type.</li>
<li><b>Growth Behavior</b>: Cannot be changed for most grid types. This attribute can be set when it is not known ahead of time how large the text input will be. Setting the growth behavior causes a field to grow bigger. In Chart Layout, you can use the dropdown to select a preferred behavior (see below).</li>
<li><b>X</b> and <b>Y</b>: Enter the position of the grid in relation to the X and Y axis. X = horizontal. Y = vertical. <br/><div class="Note">Note: You can also click and drag the grid on the sheet itself to reposition it.</div>
</li>
<li><b>Width</b> and <b>Height</b>: Only editable for Chart Layout grids. Displays the overall size of the grid.</li>
</ul>
<h2>Statement Grids</h2>
<p>There are six Grid Types for <a href="statementsheets.html">Statement Sheets</a>.</p>
<p><b>StatementAging</b></p>
<img src="images/sheetGridAging.gif" width="659" height="39"/><p><div class="Note">Note: PatNum, Account, and Total only display for superfamily statements. </div>
</p>
<p><b>StatementEnclosed</b>: <i>Amount Due</i> is automatically calculated. <i>Date Due</i> is determined by <i>Days to calculate due date</i> set in <a href="preferences.html">Preferences</a>. If the preference is blank, <i>Due on Receipt</i> is shown.</p>
<img src="images/sheetGridEnclosed.gif" width="330" height="39"/><p><b>StatementMain</b>: The columns can be modified in Display Fields, StatementMainGrid (column names, order, and size).</p>
<img src="images/sheetGridMain.gif" width="729" height="39"/><p><b>StatementPayPlanOld</b>: Displays information for <a href="paymentplanpatient.html">Old Payment Plans</a>. May also be labeled <i>statementPayPlan</i> in the Sheet Fields list of existing custom sheets.</p>
<img src="images/sheetsPayPlanGrid.png" width="517" height="70"/><p><b>StatementPayPlanGrid</b>: Displays information for <a href="paymentplandynamic.html">Payment Plans</a>. May also be labeled <i>statementDynamicPayPlan</i> in the Sheet Fields list of existing custom sheets.</p>
<img src="images/sheetsDynamicPayPlanGridExample.png" width="517" height="70"/><p><b>StatementInvoicePayment</b>: The grid populates with payments attached to procedures on the invoice as well as unattached payments that were made on the same day.</p>
<img src="images/sheetGridInvoicePayment.gif" width="639" height="69"/><h2>Treatment Plan Grids</h2>
<p>There are three Grid Types for <a href="sheetstreatplan.html">Treatment Plan Sheets</a>.</p>
<p><b>TreatPlanMain</b>: At least one TreatPlanMain must exist in each treatment plan sheet. The columns can be modified (e.g., column names, order, and width) in <a href="displayfields.html">Display Fields</a>, Treatment Plan Module .</p>
<img src="images/sheetTPGridMain.gif" width="829" height="39"/><p><b>TreatPlanBenefitsFamily</b></p>
<img src="images/sheetTPGridFamily.gif" width="309" height="54"/><p><b>TreatPlanBenefitsIndividual</b></p>
<img src="images/sheetTPGridIndivid.gif" width="309" height="54"/><h2>Payment Plan Grid</h2>
<p>There is one Grid Type for <a href="paymentplansheets.html">Payment Plan Sheets</a>.</p>
<p><b>PayPlanMain</b></p>
<img src="images/sheetsPayPlanGridexample.gif" width="729" height="39"/><h2>Referral Letter Grid</h2>
<p>The following Grid Type is available for <a href="sheetsreferrals.html">Referral Letter Sheets</a>. See Procedure Grids below for additional available types.</p>
<p><b>ReferralLetterProceduresCompleted</b>. Shows completed procedures for the day the sheet is generated for the patient.</p>
<img src="images/sheetGridReferralLetter.png" width="694" height="39"/><h2>Patient Dashboard Grid</h2>
<p>There is one Grid Type for <a href="dashboardsetup.html">Patient Dashboard Layouts</a>.</p>
<p><b>ApptsGrid</b></p>
<img src="images/sheetsGridAppts.gif" width="494" height="39"/><h2>Chart Layout Grids</h2>
<p>There are two Grid Types for <a href="layout.html">Chart Layouts</a>.</p>
<p><b>ProgressNotes</b></p>
<img src="images/sheetsGridProgressNotes.gif" width="683" height="159"/><p><b>PatientInfo</b></p>
<img src="images/sheetsGridPatientInfo.gif" width="419" height="109"/><p class="MarginBottomZero">ProgressNotes and PatientInfo allow for a custom growth behavior. Options include:  </p>
<ul class="MarginBottomGap">
<li>FillRightDown: Fill this grid all the way down, and all the way to the right of the display.</li>
<li>FillDown: Maintain the width of the grid, but fill all the way down the display. If a field is below this grid, it stops at that field.</li>
<li>FillRight: Maintain the height of the grid, but fill all the way to the right of the display. If a field is to the right of this grid, it overlaps.</li>
<li>FillDownFitColumns: Fill this grid all the way down and start at the highest available Y position. If a field is below this grid, the field is moved out of the way.</li>
</ul>
<h2>Procedure Grids</h2>
<p>These grids are available for Patient Forms, Referral Letters, Patient Letters, and Consent Forms. </p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>If the sheet is opened via the Forms button, regardless of the selected module, the Sheet Procedure Select window displays prior to opening the <a href="sheetsfillout.html">Fill Sheet</a> window.</li>
<li>If the sheet is opened via the Consent button from the Chart Module, the Sheet Procedure Select window displays prior to opening the <a href="sheetsfillout.html">Fill Sheet</a> window.</li>
<li>If the sheet is opened via the Consent button from the Treatment Plan Module, the grid is generated based on highlighted procedures in the Treatment Plan. The Sheet Procedure Select window is skipped.</li>
</ul>
<p><b>ProcsWithFee</b></p>
<img src="images/sheetsGridProcsWithFee.png" width="658" height="54"/><p><b>ProcsNoFee</b></p>
<img src="images/sheetsGridProcsNoFee.png" width="597" height="52"/></div>
</div>
</body>
</html>```
