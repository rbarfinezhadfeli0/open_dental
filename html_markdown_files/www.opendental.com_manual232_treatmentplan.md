# File: ./www.opendental.com/manual232/treatmentplan.html

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
						}"><option value="https://www.opendental.com/manual243/treatmentplan.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/treatmentplan.html" >v24.2</option><option value="https://www.opendental.com/manual241/treatmentplan.html" >v24.1</option><option value="https://www.opendental.com/manual233/treatmentplan.html" >v23.3</option><option value="https://www.opendental.com/manual232/treatmentplan.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/treatmentplan.html" >v23.1</option><option value="https://www.opendental.com/manual224/treatmentplan.html" >v22.4</option><option value="https://www.opendental.com/manual223/treatmentplan.html" >v22.3</option><option value="https://www.opendental.com/manual222/treatmentplan.html" >v22.2</option><option value="https://www.opendental.com/manual221/treatmentplan.html" >v22.1</option><option value="https://www.opendental.com/manual214/treatmentplan.html" >v21.4</option><option value="https://www.opendental.com/manual213/treatmentplan.html" >v21.3</option><option value="https://www.opendental.com/manual212/treatmentplan.html" >v21.2</option><option value="https://www.opendental.com/manual211/treatmentplan.html" >v21.1</option><option value="https://www.opendental.com/manual205/treatmentplan.html" >v20.5</option><option value="https://www.opendental.com/manual204/treatmentplan.html" >v20.4</option><option value="https://www.opendental.com/manual203/treatmentplan.html" >v20.3</option><option value="https://www.opendental.com/manual202/treatmentplan.html" >v20.2</option><option value="https://www.opendental.com/manual201/treatmentplan.html" >v20.1</option><option value="https://www.opendental.com/manual194/treatmentplan.html" >v19.4</option><option value="https://www.opendental.com/manual193/treatmentplan.html" >v19.3</option><option value="https://www.opendental.com/manual192/treatmentplan.html" >v19.2</option><option value="https://www.opendental.com/manual191/treatmentplan.html" >v19.1</option><option value="https://www.opendental.com/manual184/treatmentplan.html" >v18.4</option><option value="https://www.opendental.com/manual183/treatmentplan.html" >v18.3</option><option value="https://www.opendental.com/manual182/treatmentplan.html" >v18.2</option><option value="https://www.opendental.com/manual181/treatmentplan.html" >v18.1</option><option value="https://www.opendental.com/manual174/treatmentplan.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Treatment Plan Module</p></div>
<div class="GeneralPageContent">
<p>In the Treatment Plan <a href="modules.html">Module</a>, you can manage and prioritize treatment plans for a patient.</p>
<img src="images/treatmentplan.png" width="915" height="634"/><p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video playlist: <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynClmOo-iRmtFC7cOuq7Je5Io">Treatment Plan Webinars</a>.</p>
<h2>Treatment Plan Toolbar</h2>
<img src="images/treatmentToolbar.png" width="656" height="28"/><p class="MarginBottomZero">These buttons appear in the top toolbar:  </p>
<ul class="MarginBottomGap">
<li><b>Preauthorization</b>: Send <a href="preauth.html">Preauthorization</a> for a procedure.</li>
<li><b>Discount</b>: Add a <a href="treatmentplandiscounts.html">Procedure Discount</a> to selected treatment planned procedures.</li>
<li><b>Update Fees</b>: For this patient only, update all fees and insurance estimates on the selected treatment plan. See also <a href="feesupdate.html">Fees Update</a>.</li>
<li><b>LabCase</b>: Highlight procedures, and then click Lab Case to create a new Lab Case for selected procedures. Highlighted procedure information can be included on the lab slip. Requires <i>treatmentPlanProcs</i> or <i>treatmentPlanProcsPriority</i> static text fields, see <a href="sheetslabslips.html">Lab Slip Layout</a>.</li>
<li><b>Consent</b>: Highlight procedures, and then click Consent dropdown to find and create a new Consent form for selected procedures. Highlighted procedure information can be included on the Consent form. Requires treatmentPlanProcs or treatmentPlanProcsPriority static text fields, see <a href="consentforms.html">Consent Form</a>.</li>
<li><b>Print TP</b>: Print the selected treatment plan. To customize the printed layout of treatment plans, see <a href="sheetstreatplan.html">Treatment Plan Layout</a>.</li>
<li><b>Email TP</b>: Email the selected treatment plan.</li>
<li><b>Sign TP</b>: Electronically sign a saved treatment plan.</li>
<li><b>CareCredit</b>: Launch the <a href="carecreditaction.html">CareCredit Action</a> window. To hide this button click the dropdown and select <i>Disable Advertising</i>.</li>
</ul>
<h2>Treatment Plans</h2>
<img src="images/treatmentSaved.png" width="432" height="88"/><p>The Treatment Plans list in the upper left corner lists all active, inactive, and saved treatment plans for this patient.</p>
<p><b>Date</b>:Displays the date for Saved treatment plans.</p>
<p class="MarginBottomZero"><b>Status</b>: The status of the treatment plan. </p>
<ul class="MarginBottomGap">
<li><b>Active</b>: There can be one active treatment per patient. Procedures attached to appointments are always on the active plan. Only procedures with a Treatment Planned (TP) status can be on an active plan. As procedures are completed, they are removed. The active plan determines the following: <ul>
<li>The default procedures in the Chart module Progress Notes.</li>
<li>The default procedures drawn on the graphical tooth chart.</li>
<li>The default procedures when creating an appointment for this patient.</li>
<li>The default procedures when creating a planned appointment or scheduling an appointment.</li>
</ul>
</li>
<li><b>Inactive</b>: There can be multiple inactive treatment plans. Procedures on inactive plans can have a status of Treatment Planned (TP) or Treatment Planned Inactive (TPI). See <a href="treatmentplanedit.html">Edit Treatment Plan</a> for details.</li>
<li><b>Saved</b>: Save a treatment plan so you have a permanent record of it. See <a href="treatmentplanedit.html">Edit Treatment Plan</a> for details.</li>
</ul>
<p><b>Heading</b>: The name given to the treatment plan.</p>
<p><b>Signed</b>: Displays an X if the treatment plan has been signed by the patient.</p>
<p><b>eClipboard</b>: Displays an X if the treatment is currently being reviewed by the patient via eClipboard. To remove the treatment plan from eClipboard, click the X.</p>
<h2>Buttons</h2>
<img src="images/treatmentButton.png" width="96" height="152"/><p class="MarginBottomZero">The following buttons are available to manage the treatment plan: </p>
<ul class="MarginBottomGap">
<li><b>+New TP</b>: Click to create an inactive treatment plan. See <a href="treatmentplanedit.html">Edit Treatment Plan</a> for details. </li>
<li><b>Save TP</b>: Click to save the selected procedures as a saved treatment plan. See <a href="treatmentplanedit.html">Edit Treatment Plan</a> for details.</li>
<li><b>eClipboard</b>: Click to present a saved treatment plan using <a href="eclipboardtreatmentplan.html">eClipboard: Treatment Plan</a>.</li>
<li><b>Refresh</b>: Refresh treatment plan and deselect any highlighted procedures.</li>
<li><b>+Plan Appt</b>: Create <a href="apptplanned.html">Planned Appointments</a>.</li>
</ul>
<h2>Show Tab</h2>
<img src="images/treatmentShow.png" width="169" height="156"/><p class="MarginBottomZero">Options selected on the Show tab affect what shows in the Procedures grid and printed/emailed treatment plans. </p>
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
<img src="images/treatmentSort.png" width="168" height="155"/><p class="MarginBottomZero">Procedures are always sorted first by priority, then by date. It can further be sorted by tooth number or order of entry. Set the default in Preferences, <i>Sort Procedures By</i>. </p>
<ul class="MarginBottomGap">
<li><b>Tooth</b>: Sort by tooth number from smallest to largest. Procedures with no tooth number list first.</li>
<li><b>Order Entered</b>: Sort by oldest procedure first. Based on Date in <a href="procedureedit.html">Procedure Info</a>.</li>
</ul>
<p>Sort order does not sort by procedure code. If two codes have the same priority, treatment area, and date then the order is random. It may be in the order charted but it may not. The order could even change.</p>
<p><div class="Note">Note: If using Replication with Random Primary Keys enabled, the Sort By option is hidden.</div>
</p>
<h2>Preauthorizations</h2>
<img src="images/treatmentPreauth.png" width="305" height="74"/><p>The box at the upper right shows all <a href="preauth.html">Preauthorizations</a> for this patient. Double-click a preauthorization to edit.</p>
<h2>Procedures Grid</h2>
<img src="images/treatmentProcGrid.png" width="790" height="156"/><p>When you click on a treatment plan, the associated procedures show in the Procedures grid. What displays in the grid will display on a printed Treatment Plan.</p>
<p>Double-click a procedure to open the <a href="procedureedit.html">Procedure Info</a> window.</p>
<p class="MarginBottomZero">The columns that show can be customized in <a href="displayfields.html">Display Fields</a>, TreatmentPlanModule. Options include: </p>
<ul class="MarginBottomGap">
<li><b>Abbr</b>: The procedure code abbreviation.</li>
<li><b>Appt</b>: Displays an X if the procedure is attached to an appointment. Displays a P if the procedure is attached to a <a href="apptplanned.html">Planned Appointment</a>. Displays a U if the procedure is attached to an <a href="unscheduled.html">Unscheduled</a> appointment. This field is not included when the treatment plan is printed, signed, or saved to images.</li>
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
<li>For <a href="enterprisesetup.html">Enterprise</a> users the <i>Allowed</i> fee determined is affected by the setting <i>Hygiene procedures use primary provider PPO fee</i>. </li>
</ul>
</li>
<li><b>Pat</b>: The estimated patient cost.</li>
<li><b>Pri Ins</b>: The insurance estimates for the insurance plan listed first in the Family Module.</li>
<li><b>Priority</b>: The procedure's priority level.</li>
<li><b>Prognosis</b>: The prognosis assigned to the procedure on the <a href="entertreatment.html">Enter Treatment</a> and the <a href="proceduremisc.html">Procedure - Misc Tab</a>.</li>
<li><b>Prov</b>: The provider associated with the procedure.</li>
<li><b>Sec Ins</b>: The insurance estimates for the insurance plan listed second in the Family module.</li>
<li><b>Sub</b>: An X indicates the procedure uses a substitution code in Lists, Procedure Codes.</li>
<li><b>Surf</b>: The tooth surface.</li>
<li><b>Tth</b>: The tooth number.</li>
</ul>
<p>The pri and sec ins estimates can be misleading if, in the Family Module, the patient has a dental plan listed first and a medical plan listed second. In this particular situation, the Pri Ins column will show the dental plan estimates, and the Sec Ins column will show the medical plan estimates. We recommend listing the medical plan first in the Family Module.</p>
<h2>Set Priority &amp; Estimates as of</h2>
<img src="images/treatmentPriority.png" width="193" height="221"/><p>The set priority list is used to assign priorities to the procedures on the treatment plan. Select the procedure(s), then click on a priority level. The sort order of the procedures will change accordingly. Priorities can also be set while entering treatment in the Chart module, and on the Procedure Info window.</p>
<p>Priority options can be customized in <a href="definitionstreatplanpriorities.html">Definitions: Treat' Plan Priorities</a>. You can use numbers, letters, or words up to 7 characters. You can change the sort order of procedures according to priority, change text colors, and hide priorities from view. Examples of other possible priority levels are Sched, Wait, Next, ?, Decline, Last, Low, High, NewYear, Urgent, WaitIns, Altern, Plan A, Plan B, RecPlan, and AltPlan.</p>
<p class="MarginBottomZero"><b>Estimates as of</b>: Only displays when <i>Enable Insurance Frequency Checking</i> is checked in <a href="preferences.html">Preferences</a>. Defaults to the current date. Use the dropdown to select a future date to see Treatment Plan estimates as of the selected date.  </p>
<ul class="MarginBottomGap">
<li>Procedures that are not covered due to insurance limitations (e.g., annual max, waiting period, frequency limitation) as of the selected date are noted in the desription column.</li>
</ul>
<h2>Insurance</h2>
<img src="images/treatmentIns.png" width="212" height="139"/><p>When the patient has an insurance plan, the area at the lower right shows remaining family and individual insurance benefits at a glance. For details about how amounts are determined, see <a href="insremainingcalc.html">Insurance Remaining Calculations</a>.</p>
<h2>Discount Plan</h2>
<img src="images/discountPlanRemCalc.png" width="183" height="94"/><p class="MarginBottomZero">When the patient has a <a href="discountplan.html">Discount Plan</a>, the area at the lower right displays discount plan benefits at a glance. </p>
<ul>
<li><b>Annual Max</b>: The annual max for the discount plan. This is set at the plan level, see <a href="discountplans.html">Discount Plans</a>.</li>
<li><b>Adj Use</b>: The total amount of discount plan adjustments completed for the current benefit period.</li>
<li><b>Adj Remaining</b>: The patient's remaining annual max balance.<br/><p class="codeblock">Annual Max - Adj Used = Adj Remaining</p></li>
</ul>
<p class="MarginBottomGap"><div class="Note">Note: The Discount Plan fields are blank if the current date is outside the plans' effective dates.</div>
</p>
<h2>Note</h2>
<img src="images/treatmentNote.png" width="790" height="52"/><p>Uses the <i>Default Note</i> set in Preferences, unless the Note has been edited. Any changes made to the note here are saved for the selected treatment plan. Right-click to add <a href="quickpastenotessetup.html">Quick Paste Notes</a>.</p>
<h2>Good Faith Estimates / No Surprises Act</h2>
<p>Open Dental does not have a feature to automatically print a Good Faith Estimate (GFE) with all of the required fields. We believe that most patients are going to be fine with a copy of their Treatment Plan. </p>
<p>The missing fields are not very helpful and are, for each procedure, Provider Name, NPI Number, Taxpayer ID, ICD code, service code type, and service code number. The burden of adding the features needed would compete with other features and Open Dental customers have not shown the demand (see Feature Request 15447). </p>
<p>The rare patient that demands these extra fields along with the many required disclaimers can be given the filled out form from the CMS link below, as you have three days to provide it. <a href="https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance">https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance</a>.</p>
<p>Open Dental and the ADA both indicate (<a href="https://adanews.ada.org/ada-news/2022/march/ada-addresses-no-surprises-act-questions/">https://adanews.ada.org/ada-news/2022/march/ada-addresses-no-surprises-act-questions/</a>) that other parts of the act do not apply to dentists in most cases, only to Good Faith Estimates for cash patients. We do not believe that statements would need to be modified, Treatment Plans would need a new version for GFE requests.</p>
</div>
</div>
</body>
</html>```
