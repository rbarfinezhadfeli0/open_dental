# File: ./www.opendental.com/manual243/benefitinfo.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Benefits</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('benefitinfo','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/benefitinfo.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/benefitinfo.html" >v24.2</option><option value="https://www.opendental.com/manual241/benefitinfo.html" >v24.1</option><option value="https://www.opendental.com/manual233/benefitinfo.html" >v23.3</option><option value="https://www.opendental.com/manual232/benefitinfo.html" >v23.2</option><option value="https://www.opendental.com/manual231/benefitinfo.html" >v23.1</option><option value="https://www.opendental.com/manual224/benefitinfo.html" >v22.4</option><option value="https://www.opendental.com/manual223/benefitinfo.html" >v22.3</option><option value="https://www.opendental.com/manual222/benefitinfo.html" >v22.2</option><option value="https://www.opendental.com/manual221/benefitinfo.html" >v22.1</option><option value="https://www.opendental.com/manual214/benefitinfo.html" >v21.4</option><option value="https://www.opendental.com/manual213/benefitinfo.html" >v21.3</option><option value="https://www.opendental.com/manual212/benefitinfo.html" >v21.2</option><option value="https://www.opendental.com/manual211/benefitinfo.html" >v21.1</option><option value="https://www.opendental.com/manual205/benefitinfo.html" >v20.5</option><option value="https://www.opendental.com/manual204/benefitinfo.html" >v20.4</option><option value="https://www.opendental.com/manual203/benefitinfo.html" >v20.3</option><option value="https://www.opendental.com/manual202/benefitinfo.html" >v20.2</option><option value="https://www.opendental.com/manual201/benefitinfo.html" >v20.1</option><option value="https://www.opendental.com/manual194/benefitinfo.html" >v19.4</option><option value="https://www.opendental.com/manual193/benefitinfo.html" >v19.3</option><option value="https://www.opendental.com/manual192/benefitinfo.html" >v19.2</option><option value="https://www.opendental.com/manual191/benefitinfo.html" >v19.1</option><option value="https://www.opendental.com/manual184/benefitinfo.html" >v18.4</option><option value="https://www.opendental.com/manual183/benefitinfo.html" >v18.3</option><option value="https://www.opendental.com/manual182/benefitinfo.html" >v18.2</option><option value="https://www.opendental.com/manual181/benefitinfo.html" >v18.1</option><option value="https://www.opendental.com/manual174/benefitinfo.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Benefits</p></div>
<div class="GeneralPageContent">
<p>Custom benefits can be entered on an insurance plan to calculate procedure estimates and insurance remaining estimates.</p>
<p>In an <a href="insplan.html">Insurance Plan</a>, at the lower right, is the Benefit Information.</p>
<img src="images/benefitOverview.png" width="518" height="324"/><p> Benefits apply to all subscribers on the plan. If different subscribers have different benefits, create different plans. If a user changes benefits for a plan, all <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a> estimates also change, including those on current and sent claims. Sent claims need to be recalculated before changes affect claim estimates.</p>
<p>To change or view benefits, double-click anywhere in the grid. To change benefit information, the <i>Insurance Plan Edit</i> security permission is required.</p>
<img src="images/benefitsEdit.png" width="915" height="582"/><p class="MarginBottomZero">There are two view options for the Edit Benefit window. </p>
<ul class="MarginBottomGap">
<li><b>Simplified View</b> (default): This view allows quick data entry and organizes benefit information by field. See below for a description of each field.</li>
<li><b>Row view</b>: If Simplified View is unchecked, benefits are represented by rows. See <a href="benefitinforowview.html">Edit Benefits - Row View</a>. This is useful if typical insurance categories are not used (e.g., are in a country other than the U.S. or Canada).</li>
</ul>
<p class="MarginBottomZero"><b>Benefit Year</b>: (This area is the same between Simplified View or Row View.) The renewal date used to calculate benefits and the current benefit year. It applies to all benefits in the window.  </p>
<ul class="MarginBottomGap">
<li>If plan follows calendar year (starts in January; ends in December): Check this box.</li>
<li>If the plan follows a service year (starts in a month other than January): Uncheck the box, then enter the two-digit month when benefits renew in the Month field (e.g., October = 10, February = 02).</li>
</ul>
<p><div class="Note">Note: Every benefit is stored as a row in the database. This format matches how electronic benefits from insurance companies are received. </div>
</p>
<h2>Simplified View</h2>
<p>The fields that show in Simplified View are described below. Click in a field to enter values. Leaving a box blank is different than entering a zero; blank means unknown.</p>
<p><div class="Note">Note: <a href="inscatssetup.html">Insurance Categories</a> must have at least one of each e-benefit category present (Accident, Crowns, Diagnostic, Endodontics, General, MaxillofacialProsth, OralSurgery, Orthodontics, Periodontics, Prosthodontics, Restorative, RoutinePreventive, and DiagnosticXRay).</div>
</p>
<p class="MarginBottomZero"><b>Annual Max</b>: The maximum annual amount insurance pays in benefits per individual or family. If left blank, <a href="insremainingcalc.html">Insurance Remaining Calculations</a> cannot be done. </p>
<ul class="MarginBottomGap">
<li>Individual: Enter the annual max amount for the individual.</li>
<li>Family: Enter the annual max amount for the entire family. Leave blank if If there is no<i> Family Annual Max</i> for the plan. </li>
</ul>
<p class="MarginBottomZero"><b>General Deductible</b>: The amount the individual or family must pay out of pocket before the insurance company begins to pay. Applies to procedures in any Insurance Category. See <a href="inscatssetup.html">Insurance Categories</a> for details. Resets at the start of the new service or calendar year. </p>
<ul class="MarginBottomGap">
<li>Individual: Enter the deductible amount for the individual. If the <i>Family Deductible</i> has already been met, the <i>Individual Deductible</i> is not be applied.</li>
<li>Family: Enter the deductible amount for the entire family. If the Family Deductible has been met by a family member or combination of family members, Individual Deductibles are no longer applied. Leave blank if there is no <i>Family Deductible</i> for the plan.</li>
</ul>
<p><div class="Note">Note: The deductible is applied before the insurance estimate is calculated. For example, if there is a $125 filling covered at 80% and the individual deductible is $50, the insurance estimate is $60 ($125 - $50 deductible x 80%) and the patient portion is $65 ($50 deductible + $15 amount left over after insurance).</div>
</p>
<p><b>Age Limits</b>: Enter a number in a row to create a limitation based on age. Functions as a through age for the corresponding <a href="codegroups.html">Code Group</a> (e.g., if entering 13, a patient who is 13 years old is still covered, but once they turn 14, they are no longer covered). Only Code Groups marked <i>Show In Age Limits</i> are listed.</p>
<p class="MarginBottomZero"><b>Ortho</b>: Enter orthodontic benefit information. </p>
<ul class="MarginBottomGap">
<li>Lifetime Max: The maximum orthodontic benefit. This is separate from the individual and family Annual Max above as long as the insurance category spans are set correctly. The correct setup (and default) is to have an Ortho span of D8000 to D8999 and to exclude that span from the General category.</li>
<li>Percentage: The percentage per procedure that is covered. This affects insurance estimates.</li>
<li>Ortho Through Age: Used with codes that fall into Ortho insurance category span. This affects insurance estimates. 0 is not a valid entry.</li>
</ul>
<p class="MarginBottomZero"><b>Categories</b>: </p>
<ul class="MarginBottomGap">
<li><b>Percentages (%)</b>: The percent covered per procedure for each category.  <ul>
<li>For quick entry of the same percentage amount, enter the amount in the <i>Quick %</i> box. Values are automatically populated in the associated <i>%</i> fields.</li>
</ul>
</li>
<li><b>Deductibles (if different)</b>: The deductible per individual or family for a specific category, if it is different than th<i>e General Deductible</i>.  <ul>
<li>Zero indicates there is no deductible at all. If blank, the General Deductible is used. See <a href="deductibles.html">Deductibles</a>.</li>
</ul>
</li>
<li><b>Waiting Periods (if applicable)</b>: The number of months a patient must wait before insurance covers a procedure.  <ul>
<li>An effective date must be entered in the <a href="insplan.html">Insurance Plan</a>, Subscriber Information for waiting periods to calculate.</li>
</ul>
</li>
</ul>
<p><b>Frequency Limitation Benefits</b>: Enter insurance frequency limitations in the grid. Any <a href="codegroups.html">Code Groups</a> that have been created are listed in the grid by default. Additional benefits can be created as needed. See <a href="insfrequencylimitations.html">Frequency Limitations</a> for more detailed information.</p>
<p><b>Other Benefits</b>: Benefits that are specific to this insurance plan. Useful for incentive plans, or to override typical insurance percentages or amounts. See Other Benefits section below for more information.</p>
<p><b>Notes</b>: This is the same as the subscriber note on the Edit Insurance Plan window. Certain types of benefits that just affect the subscriber are not easily codified, so do not have a box. These types of benefits are just entered as subscriber notes. This text box supports <a href="rightclicktextboxes.html">Right-Click Options</a>.</p>
<h2>Other Benefits</h2>
<img src="images/benefitTypes.png" width="694" height="182"/><p>There are different types of Other Benefits. These are discussed below. Only specific Other Benefit scenarios are functional. For more information, see, <a href="otherbenefits.html">Other Benefits</a>.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>ActiveCoverage</b>: Informational only. Not normally used. Used to show a patient has coverage, but without any specific information (e.g., percentage).</li>
<li><b>Percentage (CoInsurance)</b>: Percentage insurance covers for a certain procedure code or category.</li>
<li><b>Deductible</b>: Dollar amount the individual or family must pay before insurance coverage begins.</li>
<li><b>CoPayment</b>: Informational only. Patient portion owed for a procedure. Copayments should be entered into a copay fee schedule instead. Any copays entered into insurance benefits are non-functional. See: <a href="feeschedules.html">Fee Schedules</a> for more information. </li>
<li><b>Exclusions</b>: Services that are not covered by insurance. These can be procedure categories or individual codes.</li>
<li><b>Limitations</b>: Includes multiple limitation types such as maximums frequency or age.</li>
<li><b>Waiting Period</b>: Time period after the insurance effective date the insured must wait prior to insurance covering a benefit.</li>
</ul>
<h2>Benefit Hierarchy</h2>
<p>Benefits are calculated one procedure at a time. Multiple benefits can apply to a single procedure code. If some benefits are of the same type, there is a hierarchy to determine which benefits affect insurance estimates. </p>
<p>1. Benefits applied to the specific procedure code.</p>
<p><img src="images/benefitHierarchyProcCode.png" width="578" height="65"/></p>
<p>2. Benefits applied to an <a href="inscatssetup.html">Insurance Category</a> containing the procedure code. If the procedure is included in multiple categories, benefits for categories lower in the list take higher priority.</p>
<img src="images/benefitHierarchyCat.png" width="694" height="71"/><br/><img src="images/benefitHierarchyInsCat.png" width="715" height="687" class="ImageInParagraph"/><p><b>Example:</b></p>
<p><img src="images/benefitHierarchyExample.png" width="694" height="112"/></p>
<p>If D9944 is in both the General and Adjunctive insurance categories, the Adjunctive benefit supersedes the General benefit, because the category is more specific (lower in the Insurance Categories list). If no other benefits existed for the procedure, insurance would cover the procedure at 40% Perio rate, not the 20% General rate.</p>
<p> Because there is a benefit specifically for D9944, this supersedes the benefits for any category. Even though D9944 is included in the General and Adjunctive insurance categories, the procedure is actually covered at 100%.</p>
<h2>Consideration of Other Procedures</h2>
<p class="MarginBottomZero">Benefits are calculated one procedure at a time, however it may be necessary to consider benefits applied to other procedures. Time spans can be large, and information may be considered from multiple patients. For example, when calculating an ortho lifetime max, it is necessary to consider all procedures, regardless of treatment date, and a family annual max requires considering procedures from all patients under the same subscriber. When considering other procedures: </p>
<ul class="MarginBottomGap">
<li>Completed procedures attached to claims are always considered, regardless of if payment is received or still estimated.</li>
<li>Treatment planned procedures are only considered when they are ordered before the current procedure. The order is as displayed in the Treatment Plan Module.</li>
</ul>
<p>For Frequency Limitations, procedures affect frequency once attached to a claim. If the claim is denied (i.e., insurance pays $0), the procedure is no longer considered. If a claim is initially denied and a pending supplemental or supplemental payment is entered later, the procedure again affects Frequency Limitation. Dates entered into <a href="inshistory.html">Insurance History</a> are also considered. Completed procedures not attached to a claim are not considered.</p>
</div>
</div>
</body>
</html>```
