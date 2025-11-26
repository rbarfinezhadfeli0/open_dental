# File: ./www.opendental.com/manual232/insverifylist.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Insurance Verification List</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('insverifylist','appointmentlists','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/insverifylist.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/insverifylist.html" >v24.2</option><option value="https://www.opendental.com/manual241/insverifylist.html" >v24.1</option><option value="https://www.opendental.com/manual233/insverifylist.html" >v23.3</option><option value="https://www.opendental.com/manual232/insverifylist.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/insverifylist.html" >v23.1</option><option value="https://www.opendental.com/manual224/insverifylist.html" >v22.4</option><option value="https://www.opendental.com/manual223/insverifylist.html" >v22.3</option><option value="https://www.opendental.com/manual222/insverifylist.html" >v22.2</option><option value="https://www.opendental.com/manual221/insverifylist.html" >v22.1</option><option value="https://www.opendental.com/manual214/insverifylist.html" >v21.4</option><option value="https://www.opendental.com/manual213/insverifylist.html" >v21.3</option><option value="https://www.opendental.com/manual212/insverifylist.html" >v21.2</option><option value="https://www.opendental.com/manual211/insverifylist.html" >v21.1</option><option value="https://www.opendental.com/manual205/insverifylist.html" >v20.5</option><option value="https://www.opendental.com/manual204/insverifylist.html" >v20.4</option><option value="https://www.opendental.com/manual203/insverifylist.html" >v20.3</option><option value="https://www.opendental.com/manual202/insverifylist.html" >v20.2</option><option value="https://www.opendental.com/manual201/insverifylist.html" >v20.1</option><option value="https://www.opendental.com/manual194/insverifylist.html" >v19.4</option><option value="https://www.opendental.com/manual193/insverifylist.html" >v19.3</option><option value="https://www.opendental.com/manual192/insverifylist.html" >v19.2</option><option value="https://www.opendental.com/manual191/insverifylist.html" >v19.1</option><option value="https://www.opendental.com/manual184/insverifylist.html" >v18.4</option><option value="https://www.opendental.com/manual183/insverifylist.html" >v18.3</option><option value="https://www.opendental.com/manual182/insverifylist.html" >v18.2</option><option value="https://www.opendental.com/manual181/insverifylist.html" >v18.1</option><option value="https://www.opendental.com/manual174/insverifylist.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Insurance Verification List</p></div>
<div class="GeneralPageContent">
<p>This is useful for offices that verify Insurance Benefits and patient eligibility prior to appointments.</p>
<p>In the <a href="appointmentlists.html">Appointment Lists</a>, click <b>Ins Verify</b>.</p>
<img src="images/insVerifyList.gif" width="915" height="640"/><p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://youtu.be/dw8kxAIoY0s">Managing the Insurance Verification List Webinar</a>.</p>
<p>The Insurance Verification list is managed manually. Use this list to quickly identify when insurance benefits and patient eligibility needs verification. Offices can also assign ownership of verifications, then track, change, and manage verification status. Set defaults for the list in <a href="insverifylistsetup.html">Insurance Verification Setup</a>. The <i>Insurance Verification </i><a href="permissions.html">Security Permission</a> is required for users to access this list.</p>
<h2>Verification Filters</h2>
<p>Change the criteria to change the results listed. These filters will affect all tabs. Set defaults in Insurance Verification Setup.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Days until scheduled appointment</b>: Enter the number of days to consider appointments. Patients with an appointment scheduled in this time frame will list. Filter can be set separately for Standard and Medicaid insurance. Medicaid insurance is determined by insurance filing code. See Assign Standard Verification/Assign Medicaid Verification below or Insurance Verification Setup for more information.</li>
<li><b>Plan benefits haven't been verified in</b>: Determines which insurance plans (Ins) list based on the last benefit verification date. Filter can be set separately for Standard and Medicaid insurance. Medicaid insurance is determined by insurance filing code. See Assign Standard Verification/Assign Medicaid Verification below or Insurance Verification Setup for more information. </li>
<li><b>Days since patient eligibility</b>: Determines which patients (Pat) list based on the last patient eligibility verification date. Filter can be set separately for Standard and Medicaid insurance. Medicaid insurance is determined by insurance filing code. See Assign Standard Verification/Assign Medicaid Verification below or Insurance Verification Setup for more information.</li>
<li><b>Carrier</b>: Enter a specific carrier name. Leave blank to include all carriers.</li>
<li><b>For User</b>: List verifications assigned to a specific user. The dropdown will list all users currently assigned a verification. Click to select, or click <b>[...]</b> to select from a pick list. <ul>
<li><b>Select All</b>: Select verifications assigned to all users, including those marked hidden. </li>
<li><b>Select None</b>: Select unassigned verifications (i.e., verifications not assigned to any user)</li>
<li>Hidden users will not be listed in the dropdown or pick list. If verifications are assigned to a hidden user, this will be denoted with <i>(hidden)</i> following the user name. These verifications display only when <i>All Users </i>are selected. </li>
</ul>
</li>
<li><b>Verify Status</b>: Only list plans and patients with a specific verification status. Customize options in <a href="definitionsinsverify.html">Definitions: Insurance Verification Status</a>.</li>
<li><b>Region</b> (only visible when using <a href="clinics.html">Clinics</a>): List verifications by clinic region. The options can be customized in <a href="definitionsregions.html">Definitions: Regions</a>.</li>
<li><b>Clinic</b> (only visible when using Clinics): List patients with appointments in a specific clinic. Only clinics accessible by the logged-on user are options.</li>
</ul>
<h2>Insurance Verify List</h2>
<p>The <i>Verification List</i> tab will be highlighted by default upon opening the Insurance Verification List. To preview insurance plan information, subscriber information, and verification status, highlight a patient or plan. The information will appear at the bottom. To open the Insurance Plan, double-click a row, or right-click and click <b>Go to Patient Plan</b>.</p>
<img src="images/insVerifyVerificationTab.png" width="915" height="133"/><p class="MarginBottomZero">Verifications are grouped by those that are current and those that are past due. Click a tab to view verifications that meet the criteria. </p>
<ul class="MarginBottomGap">
<li><b>Current</b>: Verifications for appointments in the future that meet the filter criteria.</li>
<li><b>Past Due</b>: Verifications that meet filter criteria, yet are past due. Typically, this list should only include verifications for yesterday's appointments that need to be done as soon as possible. The number of days that determine past due status is set in Insurance Verification Setup.</li>
</ul>
<p class="MarginBottomZero"><b>Insurance Verify List</b>: Click on a column header to sort the list in ascending or descending order. </p>
<ul class="MarginBottomGap">
<li><b>Type</b>:Three different verification types may list <ul>
<li><i>Pat</i>: Patient eligibility needs verification.</li>
<li><i>Ins</i>: Insurance benefits needs verification.</li>
<li><i>Ins/Pat</i>: Both patient eligibility and insurance benefits need verification.</li>
</ul>
</li>
<li><b>Patient</b>: Name of the patient associated with the upcoming appointment.  <ul>
<li>There can be many patients on a single plan and multiple patients may need to have their eligibility verified which can result in multiple Pat rows per plan. </li>
<li>Plan benefits only need to be verified once to affect all patients on that plan. To avoid multiple users trying to verify the same plan at the same time, Open Dental only shows one <i>Ins</i> row per plan (or one <i>Ins/Pat</i> row if at least one patient needs to be verified). If a patient is also linked to the plan verification it will be the patient with the closest appointment date and time.</li>
</ul>
</li>
<li><b>Appt Date Time</b>: Date and time of the appointment for which insurance needs to be verified.</li>
<li><b>Carrier</b>: Insurance carrier associated to the plan.</li>
<li><b>Last Verified</b>: Date insurance benefits or patient eligibility was last verified. Date corresponds to the Type listed. If the Type is <i>Pat/Ins</i>, the date will be the oldest date of last verification for either eligibility or benefits. A date of <i>01/01/0001</i> indicates benefits or eligibility have never been verified.</li>
<li><b>Status</b>: Verification status assigned to the patient.</li>
<li><b>Status Date</b>: Date verification status was set or updated. If no status is assigned, today's date will be displayed.</li>
<li><b>Assigned to</b>: User assigned to verification. </li>
</ul>
<p><div class="Note">Note: <ul>
<li>To change information, the <i>Insurance Plan Edit</i> security permission is required.</li>
<li>To exclude a plan from the list, check Don't Verify on the Edit Insurance Plan window.</li>
</ul>
</div>
</p>
<p><b>Right-click Options</b>: From the Verification List tab, right-click on a row to get the following options. </p>
<img src="images/insVerifyRightClick1.png" width="776" height="213"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Go to Patient</b>: Open the <a href="family.html">Family Module</a> for the selected patient.</li>
<li><b>Go to Patient Plan</b>: Open <a href="insplan.html">Edit Insurance Plan</a> for the selected insurance plan.</li>
<li><b>Assign to User</b>: Choose a user to assign insurance verification for selected row.</li>
<li><b>Set Verify Status to</b>: Choose a verification status for the selected row. Upon setting the status, users will be prompted to enter a status note. <br/><img src="images/insVerifyStatusNote.gif" width="465" height="232" class="ImageInParagraph"/></li>
<li><b>Verify Insurance Benefits</b>: Mark insurance benefits verified. Benefits Last Verified date will be updated in Edit Insurance Plan window for all patients attached to this insurance plan and verification list will be refreshed. Option only appears if type is <i>Ins</i> or <i>Ins/Pat</i>.</li>
<li><b>Verify Patient Eligibility</b>: Mark patient eligibility verified. Eligibility Last Verified date will be updated in the Edit Insurance Plan window for this patient only. Option only appears if Type is <i>Pat</i> or <i>Ins/Pat</i>.</li>
<li><b>Verify Both</b>: Mark insurance benefits and patient eligibility verified. Benefits Last Verified and Eligibility Last Verified dates will be updated. Option only appears if Type is <i>Ins/Pat</i>.</li>
</ul>
<h2>Insurance Plan and Subscriber Information</h2>
<img src="images/insVerifyPlanInfo.png" width="776" height="136"/><p>At the bottom of the <i>Verification List</i> tab, users will see insurance plan and subscriber information once a plan is selected.</p>
<p><b>Insurance Plan</b>: Information for the selected insurance plan. Information is not unique to the selected patient. Includes information that may be necessary for office staff to contact a carrier and verify insurance benefits. Click <b>Mark Ins Benefits Verified</b> after verifying benefits to update last verified date.</p>
<p><b>Subscriber</b>: Information for the subscriber of the selected insurance plan. Also includes birthdate for the selected patient, which may differ from the subscriber. This is information that may be necessary to verify patient eligibility when office staff contacts a carrier. Click <b>Mark Patient Eligibility Verified</b> after verifying patient eligibility to update the last verified date.</p>
<p><b>Verify Status</b>: Click an Insurance Verification Status from the dropdown to set or update the <i>Status</i> and <i>Status Date</i>. The user will be prompted to enter a <i>Status Note</i> upon selecting a status.</p>
<p><b>Status Note</b>: Insurance verification status note of the selected verification.</p>
<h2>Assign Standard Verification/Assign Medicaid Verification</h2>
<p>Users can be assigned to insurance verifcation from the two Assign Verification tabs. Column descriptions and filters are the same as the Verification List. Users must have the<i> Insurance Plan Verification List </i><a href="permissions.html">Security Permission</a> to be assigned insurance verification.</p>
<img src="images/insVerifyAssign.png" width="915" height="572"/><p>Plans will appear in the Assign Medicaid Verification tab when the <i>Insurance filing code</i> for the plan (set in <a href="insplan.html">Edit Insurance Plan</a>, Other Ins Info Tab) is selected in Insurance Verification Setup, Show In Medicaid List When. </p>
<p>Plans with all other insurance filing codes or no selected insurance filing code, will list in the Assign Standard Verification tab. </p>
<p><b>For User</b> filter will default to Unassigned to show verifications that have not yet been assigned to any user.</p>
<p class="MarginBottomZero">Right-click options: </p>
<ul class="MarginBottomGap">
<li><b>Assign to User</b>: Select a user to make responsible for verifying insurance. <ul>
<li>To assign multiple verifications to the same user, click and drag, or press <span class="codeblock">Ctrl</span> or <span class="codeblock">Shift</span> while clicking, then right-click and select a user.</li>
</ul>
</li>
<li><b>Set Verify Status to</b>: Select an insurance verification status to set or update the <i>Status</i> and <i>Status Date</i>.</li>
</ul>
<p><b>Assign Standard Verification / Assign Medicaid Verification</b>: Assign verification to specific users or set a status note from this area. </p>
<img src="images/insVerifyAssignTool.png" width="915" height="323"/><p class="MarginBottomZero"><b>To User</b>: Assign insurance verifcation to specific users.  </p>
<ol>
<li>Select verifications to assign. Click and drag, Ctrl + click, or Shift + click to select multiple.</li>
<li>Click <b>[...]</b>.</li>
<li>Select a user from the list. Click <b>Select None</b> to unassign verifications instead.<br/><img src="images/insVerifyPickUser.gif" width="326" height="287" class="ImageInParagraph"/></li>
<li>Click <b>OK</b>.</li>
<li>Click <b>Assign</b> at the bottom of the Insurance Verification List window.</li>
</ol>
<p class="MarginBottomGap">The selected verifications are now assigned to the selected user (or unassigned if <i>Select None</i> was clicked). If the verification was previously assigned to another user, the verification is now only assigned to the new user. </p>
<p><b>Note</b>: Enter a status note. When right-clicking and selecting <b>Set Verify Status</b>, any note typed into this box will automatically be added into the Add Status Note window.</p>
<img src="images/insVerifyNote.png" width="710" height="236"/><h2>Mark a Patient Eligibility (Pat) / Insurance Benefits (Ins) as Verified</h2>
<p>There are several ways to mark patient eligibility and/or insurance benefits as verified. Marking a verification as verified will change last verified dates on the Edit Insurance Plan window. </p>
<p class="MarginBottomZero">Dates will update according to <a href="insverifylistsetup.html">Insurance Verification Setup</a> preferences: </p>
<ul class="MarginBottomGap">
<li>Eligibility Last Verified Date: <ul>
<li>Updates to the current date (i.e., today) if the preference <i>Always reverify service year patient eligibility</i> is disabled.</li>
<li>Updates to the appointment date if the preference <i>Always reverify service year patient eligibility</i> is enabled.</li>
</ul>
</li>
<li>Benefits Last Verified Date: <ul>
<li>Updates to the current date (i.e., today) if the preference <i>Always reverify service year insurance benefits</i> is disabled.</li>
<li>Updates to the appointment date if the preference <i>Always reverify service year insurance benefits</i> is enabled.</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero"><b>Option 1</b>:  </p>
<ol>
<li>On the Verification List tab, right-click on a verification then select an option. Options will vary depending on the type of verification selected. <ul>
<li><b>Verify Patient Eligibility</b>: Mark patient eligibility as verified (Eligibility Last Verified date automatically updates).</li>
<li><b>Verify Insurance Plan</b>: Mark insurance benefits as verified (Benefits Last Verified automatically updates).</li>
<li><b>Verify Both</b>: Mark both patient eligibility and insurance benefits as verified (automatically updates both dates).</li>
</ul>
 A confirmation message will show.</li>
<li>Click <b>OK</b>.</li>
</ol>
<p class="MarginBottomGap"><img src="images/insVerifyListConfirm.gif" width="365" height="133"/></p>
<p class="MarginBottomZero"><b>Option 2</b>: </p>
<ol class="MarginBottomGap">
<li>On the <i>Verification List</i> tab, highlight the verification row. General insurance plan and subscriber information will show in the bottom of the window.</li>
<li>Click one of the verified buttons: <ul>
<li><b>Mark Patient Eligibility Verified</b>: Mark patient eligibility as verified (Eligibility Last Verified date automatically updates).</li>
<li><b>Mark Ins Benefits Verified</b>: Mark insurance benefits as verified (Benefits Last Verified automatically updates).</li>
</ul>
</li>
<li>A confirmation message will show. Click <b>OK</b> to confirm.</li>
</ol>
<p class="MarginBottomZero"><b>Option 3</b>: </p>
<ol class="MarginBottomGap">
<li>On the Verification List tab, double-click a verification row, or right-click and select <b>Go To Plan</b> to open the Edit Insurance Plan window.</li>
<li>To verify patient eligibility, manually enter a date for <i>Eligibility Last Verified</i>.</li>
<li>To verify insurance plan benefits, manually enter a date for <i>Benefits Last Verified</i>.</li>
<li>Click <b>OK</b> to save.</li>
</ol>
<img src="images/insVerifyPlanWindow.png" width="758" height="557"/></div>
</div>
</body>
</html>```
