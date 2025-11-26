# File: ./www.opendental.com/manual/family.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Family Module</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/family.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/family.html" >v24.2</option><option value="https://www.opendental.com/manual241/family.html" >v24.1</option><option value="https://www.opendental.com/manual233/family.html" >v23.3</option><option value="https://www.opendental.com/manual232/family.html" >v23.2</option><option value="https://www.opendental.com/manual231/family.html" >v23.1</option><option value="https://www.opendental.com/manual224/family.html" >v22.4</option><option value="https://www.opendental.com/manual223/family.html" >v22.3</option><option value="https://www.opendental.com/manual222/family.html" >v22.2</option><option value="https://www.opendental.com/manual221/family.html" >v22.1</option><option value="https://www.opendental.com/manual214/family.html" >v21.4</option><option value="https://www.opendental.com/manual213/family.html" >v21.3</option><option value="https://www.opendental.com/manual212/family.html" >v21.2</option><option value="https://www.opendental.com/manual211/family.html" >v21.1</option><option value="https://www.opendental.com/manual205/family.html" >v20.5</option><option value="https://www.opendental.com/manual204/family.html" >v20.4</option><option value="https://www.opendental.com/manual203/family.html" >v20.3</option><option value="https://www.opendental.com/manual202/family.html" >v20.2</option><option value="https://www.opendental.com/manual201/family.html" >v20.1</option><option value="https://www.opendental.com/manual194/family.html" >v19.4</option><option value="https://www.opendental.com/manual193/family.html" >v19.3</option><option value="https://www.opendental.com/manual192/family.html" >v19.2</option><option value="https://www.opendental.com/manual191/family.html" >v19.1</option><option value="https://www.opendental.com/manual184/family.html" >v18.4</option><option value="https://www.opendental.com/manual183/family.html" >v18.3</option><option value="https://www.opendental.com/manual182/family.html" >v18.2</option><option value="https://www.opendental.com/manual181/family.html" >v18.1</option><option value="https://www.opendental.com/manual174/family.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Family Module</p></div>
<div class="GeneralPageContent">
<p>The Family <a href="modules.html">Module</a> is where basic patient and insurance information is entered and organized.</p>
<img src="images/family.png" width="915" height="640"/><p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynCmRWyNcN1QW9Rttvl6cpBOd">Family Module Playlist</a>.</p>
<h2>Family Toolbar</h2>
<img src="images/familyToolbar.png" width="915" height="30"/><p class="MarginBottomZero">Family Members </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Add a new patient to the current family and open <a href="patientedit.html">Edit Patient Information</a>. Contact information, Billing Type, and Primary/Secondary Provider are pre-filled from the currently selected family member. Update as needed. Use <b>Move</b> to transfer an existing patient to a different family.</li>
<li><b>Delete</b>: Delete the selected patient. Patients can only be deleted if no information has been entered (e.g., procedures, perio charts, etc.) </li>
<li><b>Set Guarantor</b>: Make the selected patient the guarantor (see below).</li>
<li><b>Move</b>: Move the selected patient to a new family or a different existing family.<br/><ul>
<li>Users are warned that the <i>Fam Fin Urgent Note</i> and <i>Family Financial</i> notes (see <a href="account.html">Account Module</a>) will not transfer. Notes can be copied manually as needed.</li>
<li>If the family has been sent to <a href="tsicollections.html">TSI Collections</a>, do not move a family member to a new or different existing family.</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero">Clones: Only visible when the <a href="patientclone.html">Patient Clone</a> feature is enabled in <a href="showfeatures.html">Show Features</a>. </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Create a patient clone for the selected patient.</li>
<li><b>Sync</b>: Sync data between an original and clone patient record.</li>
<li><b>Break</b>: Break the relationship between a clone and original patient.</li>
</ul>
<p class="MarginBottomZero">Super Family: Only visible when the <a href="superfamily.html">Super Families</a> feature is enabled in Show Features. </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Create a Super Family or add a patient to a Super Family.</li>
<li><b>Remove</b>: Remove the selected patient from the Super Family.</li>
<li><b>Disband</b>: Remove the relationship between all members of the Super Family.</li>
</ul>
<p class="MarginBottomZero"><b>Add Insurance</b>: Attach an insurance plan or view all insurance plans for the family.  </p>
<ul class="MarginBottomGap">
<li>Click the button to <a href="insadd.html">Add Insurance</a> information.</li>
<li>Click the dropdown, then Plans For Family, to view all insurance plans associated with the family, including dropped plans (see Plans for Family below).</li>
</ul>
<p><b>Discount Plan</b>: Click the button to add <a href="discountplans.html">Discount Plans</a>. Click the dropdown to drop an existing Discount Plan.</p>
<h2>Patient Picture &amp; Family Member List</h2>
<img src="images/familyPatientPic.png" width="590" height="108"/><p>The <a href="patientpictures.html">Patient Picture</a> (if available) is displayed in the top-left.</p>
<p>The currently selected patient is highlighted in orange. To select a different family member, click their name. Double-click a family member from the list to open the Edit Patient Information for the patient.</p>
<p><div class="Note">Note: Patients manually set to <i>Archived</i> are shown in this list. Patients set to <i>Archived</i> due to a merge are not shown unless the merged patient is already selected.</div>
</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Guarantor: The family member designated as the guarantor appears first in the list and in bold. This person is responsible for the account. It does not need to be a patient (e.g., parent of a minor). The Guarantor cannot be deleted or moved unless they are the only family member. Moving the guarantor into another family effectively combines two families, which combines account notes and address/phone notes.</li>
<li>Clones: Patient clones are listed in ALL CAPS.</li>
<li>Other Family Members: Family members can only be deleted when they have no procedures, claims, payments, procedures attached to claims, or Commlog entries. Once deleted, the patient cannot be accessed from any portion of the program.</li>
</ul>
<h2>Recall</h2>
<img src="images/familyRecall.png" width="545" height="108"/><p>Patient <a href="recall.html">Recall</a> information is displayed to the right of the Family Members grid. This area lists all recalls due and scheduled for the patient. </p>
<p>Displayed columns can be customized in <a href="displayfields.html">Display Fields</a>, <i>FamilyRecallGrid</i>. Double-click anywhere in the Recall area to open Recalls for Patient to edit recall details.</p>
<h2>Patient Information</h2>
<img src="images/familyPatInfo.png" width="260" height="397"/><p>A summary of patient information. Double-click in the area to edit or enter information on the <a href="patientedit.html">Edit Patient Information Window</a>. </p>
<p>Customize which fields are shown here in Display Fields, <i>PatientInformation</i>. If <i>Pat Fields</i> are set to show, custom <a href="custompatientfields.html">Patient Fields</a> are displayed.</p>
<p class="MarginBottomZero">Double-clicking some cells may open a different area: </p>
<ul class="MarginBottomGap">
<li>Double-click a Referral cell to open <a href="referrals.html">Referrals for Patient</a> and view detailed referral information or add/edit referrals. The cell color can be customized in <a href="definitionsmisccolors.html">Definitions: Misc Colors</a>.</li>
<li>Double-click in the Payor Types cell to open <a href="payortypes.html">Payor Types</a> and view detailed Payor Type information or add/edit Payor Types.</li>
</ul>
<h2>Patient Clones</h2>
<img src="images/familyClone.png" width="337" height="103"/><p>This grid only shows when the selected patient has a <a href="patientclone.html">Patient Clone</a>. It lists the original patient and all associated clones. </p>
<h2>Super Family</h2>
<img src="images/familySuperFam.png" width="337" height="184"/><p>This grid only shows when the selected patient is part of a <a href="superfamily.html">Super Family</a>. It lists all Super Family members. Customize which fields are shown here in Display Fields, <i>SuperFamily Grid Columns</i></p>
<h2>Insurance Plans</h2>
<img src="images/familyInsArea.png" width="524" height="397"/><p>The Insurance Plans area displays all insurance plans currently attached to the patient as active coverage. A nearly unlimited amount of plans can be attached (primary, secondary, tertiary, primary medical, secondary medical, etc.) Change the background color of <i>Subscriber information</i> in Definitions, Misc Colors. Double-click on any plan to open <a href="insplan.html">Edit Insurance Plan</a> to view details or make changes. </p>
<p>Double-click on the history grid below the plan details to open <a href="inshistory.html">Insurance History</a>.</p>
<p>To view all plans associated with a family, click the <b>Add Insurance</b> dropdown menu, then click <b>Plans for Family</b>.</p>
<img src="images/insPlansForFamily.png" width="566" height="280"/><p>Double-click a plan to see more details. Dropped insurance plans never get deleted and are always available here for reference.</p>
<h2>Discount Plans</h2>
<img src="images/familyDiscPlan.png" width="370" height="273"/><p>This area replaces the Insurance Plans area when a <a href="discountplans.html">Discount Plan</a> has been attached to the patient. Double-click the plan to open <a href="discountplan.html">Discount Plan Subscriber Edit</a>, or change or drop the plan.</p>
</div>
</div>
</body>
</html>```
