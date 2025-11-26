# File: ./www.opendental.com/manual243/treatmentplan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Treatment Plan Module</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('treatmentplan','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/treatmentplan.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/treatmentplan.html" >v24.2</option><option value="https://www.opendental.com/manual241/treatmentplan.html" >v24.1</option><option value="https://www.opendental.com/manual233/treatmentplan.html" >v23.3</option><option value="https://www.opendental.com/manual232/treatmentplan.html" >v23.2</option><option value="https://www.opendental.com/manual231/treatmentplan.html" >v23.1</option><option value="https://www.opendental.com/manual224/treatmentplan.html" >v22.4</option><option value="https://www.opendental.com/manual223/treatmentplan.html" >v22.3</option><option value="https://www.opendental.com/manual222/treatmentplan.html" >v22.2</option><option value="https://www.opendental.com/manual221/treatmentplan.html" >v22.1</option><option value="https://www.opendental.com/manual214/treatmentplan.html" >v21.4</option><option value="https://www.opendental.com/manual213/treatmentplan.html" >v21.3</option><option value="https://www.opendental.com/manual212/treatmentplan.html" >v21.2</option><option value="https://www.opendental.com/manual211/treatmentplan.html" >v21.1</option><option value="https://www.opendental.com/manual205/treatmentplan.html" >v20.5</option><option value="https://www.opendental.com/manual204/treatmentplan.html" >v20.4</option><option value="https://www.opendental.com/manual203/treatmentplan.html" >v20.3</option><option value="https://www.opendental.com/manual202/treatmentplan.html" >v20.2</option><option value="https://www.opendental.com/manual201/treatmentplan.html" >v20.1</option><option value="https://www.opendental.com/manual194/treatmentplan.html" >v19.4</option><option value="https://www.opendental.com/manual193/treatmentplan.html" >v19.3</option><option value="https://www.opendental.com/manual192/treatmentplan.html" >v19.2</option><option value="https://www.opendental.com/manual191/treatmentplan.html" >v19.1</option><option value="https://www.opendental.com/manual184/treatmentplan.html" >v18.4</option><option value="https://www.opendental.com/manual183/treatmentplan.html" >v18.3</option><option value="https://www.opendental.com/manual182/treatmentplan.html" >v18.2</option><option value="https://www.opendental.com/manual181/treatmentplan.html" >v18.1</option><option value="https://www.opendental.com/manual174/treatmentplan.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Treatment Plan Module</p></div>
<div class="GeneralPageContent">
<p>In the Treatment Plan <a href="modules.html">Module</a>, staff can manage and prioritize treatment plans for a patient.</p>
<img src="images/treatmentplan.png" width="915" height="612"/><p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video playlist: <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynClmOo-iRmtFC7cOuq7Je5Io">Treatment Plan Webinars</a>.</p>
<h2>Treatment Plan Toolbar</h2>
<img src="images/treatmentToolbar.png" width="656" height="28"/><p class="MarginBottomZero">These buttons appear in the top toolbar:  </p>
<ul class="MarginBottomGap">
<li><b>Preauthorization</b>: Highlight procedures in an active or inactive treatment plan and click to create a <a href="preauth.html">Preauthorization</a>.</li>
<li><b>Discount</b>: Add a <a href="treatmentplandiscounts.html">Procedure Discount</a> to selected treatment planned procedures.</li>
<li><b>Update Fees</b>: For this patient only, update all fees and insurance estimates for all active and inactive treatment. See also <a href="feesupdate.html">Fees Update</a>.</li>
<li><b>LabCase</b>: Create a new <a href="labcaseedit.html">Lab Case</a>. <ul>
<li>To include, treatment planned procedure information on the Lab Slip, highlight procedures before clicking <b>LabCase</b>.  <ul>
<li>Requires <i>treatmentPlanProcs</i> or <i>treatmentPlanProcsPriority </i><a href="statictextfields.html">Static Text Fields</a> to be added to the selected <a href="sheetslabslips.html">Lab Slip Layout</a>.</li>
</ul>
</li>
</ul>
</li>
<li><b>Consent</b>: See <a href="consentforms.html">Consent Form</a>. 
</li>
<li><b>Print TP</b>: Print the selected treatment plan. To customize the printed layout of treatment plans, see <a href="sheetstreatplan.html">Treatment Plan Layout</a>. If selecting a saved treatment plan that has been saved to the Imaging Module, a PDF viewer opens. The treatment plan can be printed from the PDF viewer.</li>
<li><b>Email TP</b>: Email the selected treatment plan.</li>
<li><b>Sign TP</b>: Electronically sign a saved treatment plan.</li>
<li><b>CareCredit</b>: Launch the <a href="carecreditaction.html">CareCredit Action</a> window. To hide this button click the dropdown and select <i>Disable Advertising</i>.</li>
</ul>
<h2>Treatment Plans</h2>
<img src="images/treatmentSaved.png" width="434" height="159"/><p>The Treatment Plans grid in the upper-left corner lists all active, inactive, and saved treatment plans for this patient. See <a href="treatmentplanedit.html">Edit Treatment Plan</a> for additional information on creating and editing treatment plans.</p>
<p class="MarginBottomZero"><b>Date</b>: Displays the date for <i>Saved</i> treatment plans. </p>
<ul class="MarginBottomGap">
<li><b>Status</b>: There are multiple treatment plan statuses.  <ul>
<li>Active: There can be one active treatment plan per patient. Procedures attached to scheduled appointments are always on the active plan. Only procedures with a Treatment Planned (TP) status can be on an active plan. As procedures are completed, they are removed. The active plan determines the following: <ul>
<li>The default procedures in the Chart Module, Progress Notes.</li>
<li>The default procedures drawn on the <a href="graphicaltoothchart.html">Graphical Tooth Chart</a>.</li>
<li>The default procedures available when creating or editing an <a href="aptedit.html">Appointment</a>.</li>
</ul>
</li>
<li>Inactive: There can be multiple inactive treatment plans. Procedures on inactive plans can have a status of Treatment Planned (TP) or Treatment Planned Inactive (TPi). TP procedures also appear in the Active treatment plan. </li>
<li>Saved: Treatment plan that has been saved to create permanent record. These can be signed or sent to eClipboard.</li>
</ul>
</li>
<li><b>Heading</b>: The name given to the treatment plan. Cannot be changed for <i>Unassigned</i> Inactive treatment.</li>
<li><b>Signed</b>: Displays an X if the treatment plan has been signed by the patient.</li>
<li><b>eClipboard</b>: Displays an X if the treatment is currently being reviewed by the patient via eClipboard. To remove the treatment plan from eClipboard, click the X.</li>
</ul>
<h2>Buttons</h2>
<img src="images/treatmentButton.png" width="96" height="152"/><p class="MarginBottomZero">The following buttons are available to manage treatment: </p>
<ul class="MarginBottomGap">
<li><b>+New TP</b>: Click to create an Inactive treatment plan. See <a href="treatmentplanedit.html">Edit Treatment Plan</a> for details. </li>
<li><b>Save TP</b>: Highlight procedures and click to create a Saved treatment plan. See <a href="treatmentplanedit.html">Edit Treatment Plan</a> for details.</li>
<li><b>eClipboard</b>: Click to present a saved treatment plan using <a href="eclipboardtreatmentplan.html">eClipboard: Treatment Plan</a>.</li>
<li><b>Refresh</b>: Refresh treatment plan and deselect any highlighted procedures.</li>
<li><b>+Plan Appt</b>: Create <a href="apptplanned.html">Planned Appointments</a>.</li>
</ul>
<h2>Show Tab</h2>
<p>Options selected on the Show tab affect what is displayed in the Procedures grid and printed/emailed treatment plans.</p>
<img src="images/treatmentShow.png" width="170" height="155"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Graphical Completed Tx</b>: Show completed treatment plan procedures on the printed <a href="graphicaltoothchart.html">Graphical Tooth Chart</a>. Set the default in Preferences.</li>
<li><b>Use Ins Max and Deduct</b>: Indicate when a patient's insurance maximum or deductible has been applied or reached. Only visible when patient has insurance.</li>
<li><b>Fees</b>: Show or hide all fee information.  <ul>
<li><b>Insurance Estimates</b>: Indicates PPO or allowed fee, primary and secondary insurance estimates, and patient portion, if the patient has insurance. If the patient has a discount plan, it shows the discount (DPlan) and patient portion. Checked by default when patient has insurance or a discount plan.</li>
<li><b>Discount</b>: Show procedure discount amounts. Can only be checked if there is a discount or write-off in one of the treatment planned procedures.</li>
<li><b>Subtotals</b>: Show Subtotals for each priority level.</li>
<li><b>Totals</b>: Show Totals at the bottom of the grid.</li>
</ul>
</li>
</ul>
<h2>Sort By Tab</h2>
<p>Procedures are always sorted first by priority, then by date. It can further be sorted by tooth number or order of entry. The default is determined by the <i>Sort procedures by</i> preference,.</p>
<img src="images/treatmentSort.png" width="170" height="155"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Tooth</b>: Sort by tooth number from smallest to largest. Procedures with no tooth number list first.</li>
<li><b>Order Entered</b>: Sort by oldest procedure first. Based on Date in <a href="procedureedit.html">Procedure Info</a>.</li>
</ul>
<p>Sort order does not sort by procedure code. If two codes have the same priority, treatment area, and date then the order is random. It may be in the order charted but it may not. The order could even change.</p>
<p><div class="Note">Note: If using Replication with Random Primary Keys enabled, the Sort By option is hidden.</div>
</p>
<h2>Preauthorizations</h2>
<p>The box at the upper-right shows all <a href="preauth.html">Preauthorizations</a> for this patient. Double-click a preauthorization to edit.</p>
<img src="images/treatmentPreauth.png" width="307" height="154"/><h2>Procedures Grid</h2>
<p>When clicking on a treatment plan, the associated procedures are shown in the Procedures grid. What displays in the grid displays on a printed Treatment Plan.</p>
<img src="images/treatmentProcGrid.png" width="798" height="424"/><p>In an active or inactive treatment plan, double-click a procedure to open the <a href="procedureedit.html">Procedure Info</a> window. In a saved treatment plan, double-click a procedure to open the Edit Treatment Planned Procedure window (see <a href="treatmentplanedit.html">Edit Treatment Plan</a>).</p>
<p class="MarginBottomZero">The columns displayed in the Procedures Grid can be customized in <a href="displayfields.html">Display Fields</a>, TreatmentPlanModule. Options include: </p>
<ul class="MarginBottomGap">
<li><b>Abbr</b>: The procedure code abbreviation.</li>
<li><b>Appt</b>: Indicates if the procedure is attached to any appointment. This field is not included when the treatment plan is printed, signed, or saved to images.  <ul>
<li>Blank: Procedure is not attached to any appointment.</li>
<li>X: Procedure is attached to a scheduled appointment. </li>
<li>P: Procedure is attached to a <a href="apptplanned.html">Planned Appointment</a>. </li>
<li>U: Procedure is attached to an <a href="unscheduled.html">Unscheduled</a> appointment. </li>
</ul>
</li>
<li><b>Cat% UCR</b>: Displays the UCR fee for the procedure, regardless of which insurance type is selected in the insurance plan. When this column and the Fee column display, the Discount column will show. Discount = UCR Fee - Procedure Fee.</li>
<li><b>Clinic</b>: The clinic associated with the procedure code.</li>
<li><b>Code</b>: The Procedure Code.</li>
<li><b>DateTP</b>: Date the procedure was treatment planned.</li>
<li><b>Description</b>: Procedure description, details related to the insurance estimates (e.g., deductibles, over annual max, etc.), and estimated tax.</li>
<li><b>Discounts</b>: Any discounts applied (procedure discounts + any PPO insurance plan write-offs). Not an option if the UCR fees match the PPO fee.</li>
<li><b>Done</b>: An X indicates a procedure is completed (saved treatment plans).</li>
<li><b>DPlan</b>: Any discount applied as a result of an in-house discount plan (UCR fee - discount plan fee). This column only shows when insurance estimates is checked under the Show tab, the patient has a discount plan, and the DPlan display field is added to treatment plan module.</li>
<li><b>Dx</b>: The procedure's diagnosis.</li>
<li><b>Fee</b>: The fee charged for the procedure.</li>
<li><b>Allowed</b>: The PPO fee for PPO plans or the allowed fee for out of network plans. An X will display in this column for procedures marked <i>DoNotBillIns</i>. <ul>
<li>If Enterprise Setup is enabled in <a href="showfeatures.html">Show Features</a>, the Allowed fee shown is affected by the <i>Hygiene procedures use primary provider PPO fee</i> preference. </li>
</ul>
</li>
<li><b>Pat</b>: The estimated patient cost (<span class="codeblock">Fee - Pri Ins - Sec Ins - Discount</span>).</li>
<li><b>Pri Ins</b>: The insurance estimates for the insurance plan listed first in the Family Module.</li>
<li><b>Priority</b>: The procedure's priority level.</li>
<li><b>Prognosis</b>: The prognosis assigned to the procedure on the <a href="entertreatment.html">Enter Treatment</a> and the <a href="proceduremisc.html">Procedure - Misc Tab</a>.</li>
<li><b>Prov</b>: The provider associated with the procedure.</li>
<li><b>Sec Ins</b>: The insurance estimates for the insurance plan listed second in the Family module.</li>
<li><b>Sub</b>: An X indicates the procedure uses a substitution code in Lists, Procedure Codes.</li>
<li><b>Surf</b>: The tooth surface.</li>
<li><b>Tth</b>: The tooth number.</li>
</ul>
<p>The Pri Ins and Sec Ins estimates can be misleading if, in the Family Module, the patient has a dental plan listed first and a medical plan listed second. In this particular situation, the Pri Ins column will show the dental plan estimates, and the Sec Ins column will show the medical plan estimates. We recommend listing the medical plan first in the Family Module. </p>
<p>If the patient has more than two insurance plans, double-click the procedure to open <a href="procedureedit.html">Edit Procedure</a> and view any additional estimates that are not considered in the treatment plan.</p>
<p>If a procedure is attached to a Pre Authorization, only the information from the insurance estimate <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a> is considered. <i>PreAuth</i> claim procedures are not considered. </p>
<h2>Set Priority &amp; Estimates as of</h2>
<img src="images/treatmentPriority.png" width="190" height="219"/><p>The set priority list is used to assign priorities to the procedures on the treatment plan. Select the procedure(s), then click on a priority level. The sort order of the procedures will change accordingly. Priorities can also be set while entering treatment in the Chart module, and on the Procedure Info window.</p>
<p>Priority options can be customized in <a href="definitionstreatplanpriorities.html">Definitions: Treat' Plan Priorities</a>. You can use numbers, letters, or words up to 7 characters. You can change the sort order of procedures according to priority, change text colors, and hide priorities from view. Examples of other possible priority levels are Sched, Wait, Next, ?, Decline, Last, Low, High, NewYear, Urgent, WaitIns, Altern, Plan A, Plan B, RecPlan, and AltPlan.</p>
<p class="MarginBottomZero"><b>Estimates as of</b>: Only displays when <i>Enable Insurance Frequency Checking</i> is checked in <a href="preferences.html">Preferences</a>. Defaults to the current date. Use the dropdown to select a future date to see Treatment Plan estimates as of the selected date.  </p>
<ul class="MarginBottomGap">
<li>For patients with insurance: Changing this date updates estimates in the Procedures grid and totals in the Insurance Grids to reflect the selected date. Procedures that are not covered due to insurance limitations (e.g., annual max, waiting period, frequency limitation) as of the selected date are noted in the description column.</li>
<li>For patients with a Discount Plan: Changing this date updates estimates in the Procedures grid only. Procedures not covered due to Discount Plan limitations (i.e., annual max or frequency limitation) as of the selected date are noted in the description column.</li>
</ul>
<h2>Insurance Grids</h2>
<p>When the patient has an insurance plan, the area at the lower-right shows remaining family and individual insurance benefits at a glance. For details about how amounts are determined, see <a href="insremainingcalc.html">Insurance Remaining Calculations</a>. This area displays the Discount Plan Grid (see below) instead for patients assigned a Discount Plan.</p>
<img src="images/treatmentIns.png" width="200" height="248"/><h2>Discount Plan Grid</h2>
<p>The lower-right area displays Discount Plan benefits at a glance when a patient is assigned to a <a href="discountplan.html">Discount Plan Subscriber Edit</a>. If a patient is not assigned a Discount Plan, the Insurance Grid (see above) is displayed in this area.</p>
<img src="images/discountPlanRemCalc.png" width="174" height="91"/><p class="MarginBottomZero"></p>
<ul>
<li><b>Annual Max</b>: The annual max set at the <a href="discountplans.html">Discount Plan</a> .</li>
<li><b>Adj Use</b>: The total amount of discount plan adjustments completed for the current benefit period for the patient.</li>
<li><b>Adj Remaining</b>: The discount amount the patient has remaining before reaching the annual max. <span class="codeblock">Annual Max - Adj Used = Adj Remaining</span>.</li>
</ul>
<p class="MarginBottomGap"><div class="Note">Note: The Discount Plan fields are blank if the current date is outside the plans' effective dates.</div>
</p>
<h2>Note</h2>
<p>The text field at the bottom of the window is the treatment plan note. If the <i>Note </i><a href="outputtextfields.html">Output Text Field</a> is added to the default <a href="sheetstreatplan.html">Treatment Plan Layout</a>, this text is displayed when saving, printing, or sending treatment plans..</p>
<img src="images/treatmentNote.png" width="798" height="60"/><p>Uses the <i>Default Note</i> set in Preferences, unless the Note has been edited. Any changes made to the note here are saved for the selected treatment plan. This text box supports <a href="rightclicktextboxes.html">Right-Click Options</a>.</p>
<h2>Good Faith Estimates / No Surprises Act</h2>
<p>Open Dental does not have a feature to automatically print a Good Faith Estimate (GFE) with all of the required fields. We believe that most patients are going to be fine with a copy of their Treatment Plan. </p>
<p>The missing fields are not very helpful and are, for each procedure, Provider Name, NPI Number, Taxpayer ID, ICD code, service code type, and service code number. The burden of adding the features needed would compete with other features and Open Dental customers have not shown the demand (see Feature Request 15447). </p>
<p>The rare patient that demands these extra fields along with the many required disclaimers can be given the filled out form from the CMS link below, as you have three days to provide it. <a href="https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance">https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance</a>.</p>
<p>Open Dental and the ADA both indicate (<a href="https://adanews.ada.org/ada-news/2022/march/ada-addresses-no-surprises-act-questions/">https://adanews.ada.org/ada-news/2022/march/ada-addresses-no-surprises-act-questions/</a>) that other parts of the act do not apply to dentists in most cases, only to Good Faith Estimates for cash patients. We do not believe that statements would need to be modified, Treatment Plans would need a new version for GFE requests.</p>
</div>
</div>
</body>
</html>```
