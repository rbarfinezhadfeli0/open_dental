# File: ./www.opendental.com/manual243/insplan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Insurance Plan</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/insplan.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/insplan.html" >v24.2</option><option value="https://www.opendental.com/manual241/insplan.html" >v24.1</option><option value="https://www.opendental.com/manual233/insplan.html" >v23.3</option><option value="https://www.opendental.com/manual232/insplan.html" >v23.2</option><option value="https://www.opendental.com/manual231/insplan.html" >v23.1</option><option value="https://www.opendental.com/manual224/insplan.html" >v22.4</option><option value="https://www.opendental.com/manual223/insplan.html" >v22.3</option><option value="https://www.opendental.com/manual222/insplan.html" >v22.2</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Insurance Plan</p></div>
<div class="GeneralPageContent">
<p>Add new or edit existing insurance plans from the Edit Insurance Plan window.</p>
<p>In the <a href="family.html">Family Module</a>, double-click an existing insurance plan.</p>
<img src="images/insPlanEdit.png" width="915" height="670"/><p class="MarginBottomZero">Alternatively: </p>
<ul class="MarginBottomGap">
<li>Double-click a plan in the <a href="insplanlist.html">Insurance Plans</a> list.</li>
<li><a href="insadd.html">Add Insurance</a> to a patient.</li>
</ul>
<h2>Patient Information</h2>
<p class="MarginBottomZero">This information is specific to the patient. </p>
<ul class="MarginBottomGap">
<li>In the database, it is stored in a table called <i>patplan</i>.</li>
<li>Set the background color in <a href="definitionsmisccolors.html">Definitions: Misc Colors</a>, Family Module Coverage.</li>
<li>If editing a plan which is not attached to any patient as current coverage, this upper section may be blank.</li>
</ul>
<img src="images/insPlanPatientInfo.png" width="915" height="87"/><p><b>Audit Trail:</b> Click to view the Insurance Patient Plan Edit log. This audit trail displays patient-level changes to the insurance plan and is accessible to all users.<br/><img src="images/insAuditPatient.png" width="915" height="241" class="ImageInParagraph"/><br/> For changes made to the insurance carrier, insurance plan, benefits, or employer, see the Audit Trail in the Plan Info tab.</p>
<p><b>Relationship to subscriber</b>: (required) If the patient is the subscriber, the default is <i>Self</i>. Otherwise a relationship must be selected.</p>
<p><b>Optional Patient ID</b>: ID used instead of a Subscriber ID. Used automatically on paper claims if added. To send the patient ID on e-claims, enable <i>On e-claims use Optional Patient ID instead of Subscriber ID</i> in <a href="preferences.html">Preferences</a>. If no Optional Patient ID is added, Subscriber ID is used. </p>
<p><b>Drop</b>: <a href="insplandrop.html">Drop Insurance Plan</a> from the patient when the patient no longer has insurance coverage or changes carrier. The insurance plan is not deleted and the plan remains in the Insurance Plans for Family window.</p>
<p><b>Patient Plan ID</b>: A system generated unique identifier that is useful for third-party reporting.</p>
<p><b>Order</b>: Determines the order this plan shows in the Family Module (primary, secondary, or supplemental insurance). 1 = primary, 2 = secondary, etc. The number can be changed at any time.</p>
<p><b>Eligibility Last Verified</b>: The date that patient insurance eligibility was marked <i>verified</i> (manually or using the <a href="insverifylist.html">Insurance Verification List</a>). Click Now to insert today's date.</p>
<p><b>Pending</b>: Informational only. Identifies insurance information that is incomplete or unverified. If the the insurance company name is unknown, create a dummy carrier called <i>Pending</i>, check the Pending box, then come back later and fix it.</p>
<p><b>Hist</b>: View history for procedures completed outside of the office. This is useful when tracking insurance frequencies. See <a href="inshistory.html">Insurance History</a>.</p>
<p class="MarginBottomZero"><b>Ortho</b>: View patient-specific information about the next time an orthodontic claim will be automatically generated when using <a href="orthoautoclaim.html">Ortho Auto Claims</a>.<br/><img src="images/orthoPatSetupIns.png" width="367" height="227" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li><b>Fee</b>: Defaults to the fee set in the Ortho Tab. Uncheck <b>Use Default Fee</b> to enter a patient fee override.</li>
<li><b>Next Claim Date</b>: The date the next claim will be created using the Tool. Defaults to a date based on the last auto-created claim and the frequency (i.e., Auto Proc Period).</li>
</ul>
<p><b>Adjustments to Insurance Benefits</b>: Displays any entered <a href="adjinsbenefits.html">Adjustments to Insurance Benefits</a> for the benefit year. Click <b>Add</b> to enter additional adjustments.</p>
<h2>Plan Info Tab (Insurance Plan Information)</h2>
<p>This information is specific to the insurance plan and can only be edited by users with the <i>Insurance Plan Edit </i><a href="permissions.html">Permission</a>. Carrier information can only be edited by users with both the <i>Carrier Edit </i> and <i>Insurance Plan Edit </i> permissions.</p>
<img src="images/insPlanPlanInfo.png" width="459" height="376"/><p><b>Audit Trail</b>: View changes made to the insurance carrier, insurance plan, benefits, or employer. This audit trail is accessible to all users.<br/><img src="images/insPlanAudit.png" width="915" height="262" class="ImageInParagraph"/></p>
<p><b>Pick From List</b>: Select an existing insurance plan from the <a href="insplanlist.html">Insurance Plans</a> list. Requires the <i>Change existing Ins Plan using Pick List</i> permission. Alternately, drop the insurance plan before picking a new plan.</p>
<p><div class="Note">Note: Users who do not have the <i>Carrier Create</i> permission, must use <b>Pick From List</b> to assign a carrier to a plan.</div>
</p>
<p><b>Insurance Plan ID</b>: A system generated unique identifier that is useful for third party reporting and to filter the Insurance Plan List.</p>
<p><b>Medical Insurance</b>: Check this box if this is <a href="medicalins.html">Medical Insurance</a> rather than dental. Only visible if Medical Insurance is turned on.</p>
<p><b>Employer</b>: Optional. The Employer associated with the insurance plan. Begin typing and select an existing entry from the <a href="employers.html">Employers</a> List. If an entry is not selected, a new entry is added to the Employers List.</p>
<p class="MarginBottomZero"><b>Carrier</b>: Required. Click <b>[...]</b> to pick an existing carrier from the <a href="carriers.html">Carriers</a> list or begin typing to select an existing carrier from the dropdown. If a user manually enters carrier information or changes carrier information, a new entry is automatically added to the Insurance Carriers List. </p>
<ul class="MarginBottomGap">
<li>Carrier information is grayed out if the logged-on user does not have sufficient permissions.</li>
<li>Carrier information can only be edited from by users with both the <i>Carrier Edit </i> and <i>Insurance Plan Edit</i> permissions.</li>
<li>If the logged-on user changes information in any carrier field, a new carrier is created. If a different user has a plan open with the same carrier, and carrier information is edited by that user, a new carrier is also created.</li>
</ul>
<p class="MarginBottomZero"><b>Electronic ID/Payer ID</b>: Provided by the insurance company if they accept <a href="clearinghouses.html">E-Claims</a>. Enter the ID manually or click Search ID to search the <a href="payerids.html">Payer ID</a> list. If the carrier does not accept electronic claims, there are two choices. </p>
<ul class="MarginBottomGap">
<li>Leave the ID blank and submit the claims electronically anyway. If the clearinghouse cannot match the insurance carrier name with a known name, the claim will be printed by the clearinghouse and mailed.</li>
<li>Select a <i>don't send electronically</i> option for Send Electronically (see below). These claims will be marked as <i>paper</i>.</li>
</ul>
<p class="MarginBottomZero"><b>Send Electronically: </b> Determines whether e-claims can be sent electronically for this insurance plan. Defaults to the setting for the carrier (see <a href="carriers.html">Carriers</a>) but can be changed by insurance plan.. </p>
<ul class="MarginBottomGap">
<li>Send Claims Electronically: Allow sending e-claims for this plan.</li>
<li>Don't Send Claims Electronically: Do not allow sending e-claims for this plan (e.g., claims must be printed).</li>
<li>Don't Send Secondary Claims Electronically: Do not allow sending secondary e-claims (e.g., when plan requires that secondary claims are mailed with a copy of the primary EOB).</li>
</ul>
<p><b>Group Name</b>: Typically the same as the employer. Used to identify differences in plans (i.e., if the same employer has multiple plan options.)</p>
<p><b>BIN</b>: Benefit Identification Number. Issued by the carrier. Only displays when EHR is enabled in <a href="showfeatures.html">Show Features</a>.</p>
<p><b>Group Number</b>: Issued by the carrier.</p>
<p><b>Other Subscribers</b>: Indicates the number of subscribers who use or have used this plan. Click the down arrow to see other subscriber names.</p>
<h2>Plan Info Tab (continued)</h2>
<img src="images/insPlanPlanTypes.png" width="412" height="209"/><p class="MarginBottomZero"><b>Plan Type</b>: Choose the <a href="insplantypes.html">Insurance Plan Types</a> from the dropdown. Affects availability of other options. </p>
<ul class="MarginBottomGap">
<li><b>Category Percentage</b>: Traditional percentage insurance plans.</li>
<li><b>PPO Percentage</b>: Preferred Provider Organizations. Set this as the default for new plans in Preferences.</li>
<li><b>PPO Fixed Benefit</b>: In-network plan that calculates write-offs and covers insurance at a fixed amount.</li>
<li><b>Medicaid or Flat Co-pay</b>: All categories are computed at 100% coverage. Disables all other percentages.</li>
<li><b>Capitation</b>: HMO and DMO type plans. Disables all other percentages.</li>
</ul>
<p>For help choosing the correct plan type and setup, see: <a href="https://opendental.com/resources/Insurance%20Flow%20Chart.pdf">Insurance Flow Chart</a> or <a href="https://opendental.com/resources/Capitation%20Flow%20Chart.pdf">Capitation Flow Chart</a>.</p>
<p><b>Fee Schedule</b>: The fee schedule used by this plan. If <i>none</i>, the provider's fee schedule is typically used. The only exception is if a fee schedule has been set on the <a href="patientedit.html">Edit Patient Information</a> window (e.g., a discount/cash fee schedule); this overrides other fee schedules.</p>
<p><b>Use Blue Book</b>: Only displays when Plan Type is set to <i>Category Percentage</i>. When checked, the plan uses <a href="bluebooksetup.html">Insurance Blue Book</a> to determine estimates. When unchecked, the plan does not use Blue Book for estimates. A confirmation message displays when unchecking this box.</p>
<p class="MarginBottomZero"><b>Carrier Allowed Amounts</b>: Set the fee schedule for out-of-network plans. Only one may be set at a time. </p>
<ul class="MarginBottomGap">
<li><b>Out of Network (Old)</b>: Used for out-of-network insurance plans.</li>
<li><b>Manual Blue Book</b>: Used when Blue Book is enabled. </li>
</ul>
<p class="MarginBottomZero"><b>Other Fee Schedules</b>: See Types of Insurance Plans for more information. </p>
<ul class="MarginBottomGap">
<li><b>Patient Co-pay Amounts</b>: Used for patient co-pays per procedure.</li>
<li><b>Fixed Benefit Amounts</b>: Only visible when plan type is set to <i>PPO Fixed Benefit</i>. The fixed benefit fee schedule for the plan.</li>
</ul>
<h2>Other Ins Info Tab</h2>
<img src="images/insplanOtherInsInfo.png" width="459" height="470"/><p><b>Use Alternate Code</b>: Use alternate procedure codes when submitting claims (e.g., Medicaid). To associate alternate codes (Alt Code) with procedure codes, see Edit <a href="procedurecodeedit.html">Procedure Code</a>. Only available when <i>Medicaid</i> is enabled in Show Features.</p>
<p><b>Substitution code options</b>: These options determine whether or not estimated fees for procedures are downgraded based on substitution codes. Associate substitution codes to procedures in the Procedure Code List. Also see <a href="downgrades.html">Estimate Downgrades</a>.</p>
<ul>
<li><b>Don't Substitute Codes</b> (e.g., posterior composites):  <ul>
<li>Checked: Do not use substitution codes to calculate downgraded insurance estimates. All estimates are be based on the fee of the completed procedure and substitution codes are ignored.</li>
<li>Unchecked: Use the substitution code associated with the procedure (if entered) to calculate downgraded insurance estimates. This affects all procedures with substitution codes, unless there are specific substitution codes marked to exclude.</li>
</ul>
</li>
<li><b>PPO substitution calculate writeoffs:</b> Select whether insurance estimates calculate write-offs when a procedure is substituted. Only applies to PPO plans.  <ul>
<li>Checked: Calculate write-offs when a procedure code is substituted. The write-off is calculated between the amount billed to the patient (i.e., office fee) and the allowed fee for the originally charted procedure.</li>
<li>Unchecked: Do not calculate write-offs when a procedure is substituted.</li>
</ul>
</li>
<li><b>Subst Codes</b>: Control which procedure codes have downgraded estimates for this insurance plan (also uncheck <i>Don't Substitute Codes</i>).</li>
</ul>
<br/><p><b>Claims show UCR fee, not billed fee:</b> Show the UCR fees of the treating provider on claims instead of the insurance fee. The default value for new plans is determined by the <i>Insurance plans default to show UCR fee on claims</i> preference. When enabling the preference, there is a prompt to change all existing plans to show UCR fee.</p>
<p><b>Hidden</b>: Hide this insurance plan in the <a href="insplanlist.html">Insurance Plans</a> List so it can't be copied for use by other subscribers. If this plan has multiple subscribers, and it should be hidden it for all subscribers, also select the <i>Change Plan for all subscribers</i> radio button.</p>
<p><b>Claims show base units</b>: Check this box to show base units on claims. Usually applies to medical insurance claims only. Base units are entered on the Edit Procedure Code window.</p>
<p><b>Claim Form</b>: The form used for printed claims. Set the default in <a href="claimforms.html">Claim Forms</a>.</p>
<p><b>COB Rule</b>: Select a <a href="cob.html">Coordination of Benefits ( COB )</a> rule option. </p>
<p><b>Filing Code</b>: For e-claims. If the carrier has an <a href="insfilingcodes.html">Insurance Filing Code</a>, select it. By default, <i>Commercial Insurance</i> is used. If the filing code is incorrect, then the carrier will reject the claim.</p>
<p><b>Filing Code Subtype</b>: If the insurance filing code has a specific subtype, select it.</p>
<p><b>Billing Type</b>: The plan's Billing Type. If the preference for <i>Adding new primary insurance plan to patient sets billing type</i> is checked, and this is a new primary insurance plan, setting a Billing Type here also assigns the Billing Type to the patient in <a href="patientedit.html">Edit Patient Information</a>. (If an existing plan's Billing Type is changed, it does not automatically change the patient's Billing Type).</p>
<p class="MarginBottomZero">Write-Offs for Non-Covered Services Override: Choose the behavior for this insurance plan when handling write-offs for procedures that are not covered by insurance. </p>
<ul class="MarginBottomGap">
<li><b>Exclusions:</b> For in-network plans. If a procedure is excluded from insurance coverage, determines if patients are billed the full UCR fee. Exclusions are defined using <a href="otherbenefits.html">Other Benefits</a>, or by setting coverage to 0%. <ul>
<li>Practice Default: Behavior is determined by the <i>Ins plans with exclusions use UCR fee (zero out write-offs)</i>.</li>
<li>Do Nothing: Exclusions are billed normally based on plan fee schedule.  <ul>
<li>For plans set up with a PPO Plan Type, write-offs are calculated normally.</li>
<li>For plans set up with a Category Percentage Plan Type, the patient is billed the fee from the assigned Fee Schedule.</li>
</ul>
</li>
<li>Use UCR Fee: Write-offs are automatically zeroed out if an exclusion exists for a procedure code. <ul>
<li>For plans set up with a PPO Plan Type, write-offs are zeroed out.</li>
<li>For plans set up with a Category Percentage Plan Type, the full UCR fee is billed.</li>
</ul>
</li>
</ul>
</li>
<li><b>Annual Max</b>: If patient is has met their annual max, determines if this insurance plan automatically zeroes out write-offs.  <ul>
<li>Default: Behavior is determined by the preference <i>Ins plans use UCR fee (zero out write-offs) when annual max is met</i>.</li>
<li>Yes: Write-offs are automatically zeroed out if the patient has met their annual max.</li>
<li>No: Write-offs are not changed if the patient has met their annual max.</li>
</ul>
</li>
<li><b>Age or Frequency Limit</b>: If patient has met an age or frequency limit, determines if the insurance plan automatically zeroes out write-offs.  <ul>
<li>Default: Behavior is determined by the preference <i>Ins plans use UCR fee (zero out write-offs) when frequency or age limits are met</i>.</li>
<li>Yes: Write-offs are automatically zeroed out if a procedure is not covered due to a frequency or age limit.</li>
<li>No: Write-offs are not changed due to frequency or age limit.</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero">Per Visit Amounts: For primary insurance plans with per-visit copays, enter the amounts the patient and insurance pay. </p>
<ul class="MarginBottomGap">
<li><b>Patient Copay</b>: Flat amount the patient pays for an office visit. The <i>Patient copay procedure code</i>, set in Preferences, is automatically added to new appointments for the specified amount.</li>
<li><b>Insurance</b>: Flat amount insurance pays per office visit. The <i> Insurance procedure code</i>, set in Preferences, is automatically added to new appointments for the specified amount.</li>
</ul>
<h2>Ortho Tab</h2>
<p>The Ortho tab shows when the preference, <i>Show Auto Ortho in Account Module</i>, is enabled. Use it to enter plan information for orthodontic claims. This information is also in the Auto Ortho tab. Information can only be changed by users with the <i>Insurance Plan Ortho Edit</i> security permission.</p>
<img src="images/insPlanOrthoTab.png" width="459" height="153"/><p class="MarginBottomZero"><b>Ortho Claim Type</b>: Select how the carrier wants to receive orthodontic claims.  </p>
<ul class="MarginBottomGap">
<li><b>Initial Claim Only</b>: Send a single orthodontic claim for the initial procedure.</li>
<li><b>Initial Plus Visit</b>: Send an orthodontic claim for the initial procedure and each subsequent visit.</li>
<li><b>Initial Plus Periodic</b>: Send an orthodontic claim for the initial procedure, then send claims periodically for a certain fee and procedure. Selecting this option makes claims for this carrier eligible for automatic claim generation using the Auto Ortho Tool.</li>
</ul>
<p class="MarginBottomZero">If Initial Plus Periodic is the claim type, the following fields are also editable. </p>
<ul class="MarginBottomGap">
<li><b>Ortho Auto Proc</b>: The procedure code to put on auto-generated orthodontic claims. Set the default in Preferences. Click <b>[...]</b> to select a different procedure. Click Default to reset the default. Only the first 5 digits of procedure codes are sent to insurance.</li>
<li><b>Ortho Auto Fee</b>: The procedure fee billed in the claim.</li>
<li><b>Auto Proc Period</b>: Select the frequency of which the claim will be auto-generated.</li>
<li><b>Wait 30 days before creating the first automatic claim</b>: If the insurance carrier requires that there is a minimum amount of days after the initial visit before periodic claims can be sent, check this box. When checked, the next claim will show in the Auto Ortho Claim list 30 days after the initial procedure is completed.</li>
</ul>
<h2>Subscriber Information</h2>
<p>The subscriber is set when first creating the insurance plan. </p>
<img src="images/insPlanSubInfo.png" width="518" height="184"/><p><b>Name</b>: Displays the subscriber name. Click <b>Change</b> to choose a different subscriber.</p>
<p><b>Subscriber ID</b>: Required and cannot be blank. If the patient has Medicaid, use the Medicaid ID number, then also fill in the Medicaid ID on the Edit Patient Information window.</p>
<p><b>Effective Dates:</b> The effective dates of the insurance plan. The effective start date is required when using waiting periods. The end date does not terminate the plan. Plans that are no longer in use should be dropped. If using <a href="automation.html">Automation</a>, the effective end date is used for the Condition, <i>Insurance Not Effective</i>. Set benefit renewal dates (calendar year or service year) in the Benefit Information section (see below). Affects filters in the <a href="reportprocsnotbilledins.html">Procedures Not Billed to Insurance Report</a>.</p>
<p><b>Release of Information</b>: Check this box if the patient has signed a form that states that the patient consents to the use and disclosure of protected health information to the insurance company in order to carry out payment activities. <i>Signature on File</i> shows in box 36 of the printed <a href="claimformada2012.html">ADA Claim Form</a>.</p>
<p class="MarginBottomZero"><b>Assignment of Benefits</b>: Determines whether insurance payments are paid directly to the patient or provider. </p>
<ul class="MarginBottomGap">
<li>Checked: Insurance payments are sent directly to provider.</li>
<li>Unchecked: Insurance pays patient. Typically used in offices where patient pays upfront. See <i>Claims with No Payment</i> on the <a href="claimreceive.html">Receive Claim</a> page for claim information. <ul>
<li>Enable the preference, <i>Auto receive claims with no assignment of benefits</i>, to automatically mark claims received with $0 payment once they have been marked sent.</li>
</ul>
</li>
<li> The permission, <i>Insurance Plan Change Assignment of Benefits</i> is required to change this setting.</li>
<li>Changes made to Assignment of Benefits are logged in the Audit Trail.</li>
<li>The default for new plans is determined by the <i>Insurance plans default to assignment of benefits</i> preference. When enabling or disabling this preference users are also prompted to change existing plans.</li>
<li>If using Clinics, this setting can be overridden by the <a href="cliniceditwindow.html">Clinic</a> setting, <i>Always Assign Benefits to the Patient</i>. When the Clinic setting is checked, Assignment of Benefits is always enabled, regardless of whether checked or unchecked in this window.</li>
</ul>
<p><b>Note</b>: Notes specific to the subscriber and associated family members. These appear in bold red in the insurance grid. <a href="rightclicktextboxes.html">Right-Click</a> the text box for additional options.</p>
<h2>Benefit Information</h2>
<img src="images/insPlanBenefitInfo.png" width="518" height="389"/><p><b>Request Electronic Benefits</b>: If the practice has signed up for <a href="ebenefits.html">Electronic Eligibility and Benefits</a> with a clearinghouse, and a Subscriber ID is entered, click<b> Request</b> to request benefit information or <b>History</b> to view a history of requests.</p>
<p class="MarginBottomZero"><b>Import Benefits</b>: </p>
<ul class="MarginBottomGap">
<li>If the practice has set up the <a href="trojan.html">Trojan Bridge</a>, click <b>Trojan</b> to copy exported Trojan data. The Trojan ID number shows at the right.</li>
<li>Click <b>Notes</b> to view benefit notes if available. They are created when importing benefits and usually read only.</li>
</ul>
<p><b>Benefits Last Verified</b>: Indicates the date that insurance benefits were last marked verified (manually or using the <a href="insverifylist.html">Insurance Verification List</a>). Click <b>Now</b> to insert today's date.</p>
<p><b>Don't Verify</b>: Check this box to always exclude this plan from the Insurance Plan Verification List. To also exclude patients with this plan, see <a href="insverifylistsetup.html">Insurance Verification Setup</a>.</p>
<p>Double-click the grid to enter <a href="benefitinfo.html">Benefit Information</a>.</p>
<h2>Miscellaneous</h2>
<p><b>Plan Note</b>: Enter notes specific to the insurance plan. This note will show for all subscribers on the plan. These appear in bold red in the insurance grid. <a href="rightclicktextboxes.html">Right-Click</a> the text box for additional options.</p>
<img src="images/insPlanPlanNote.png" width="404" height="138"/><p><b>Label</b>: Print the insurance carrier name and address on an individual mailing label.</p>
<p><b>Delete</b>: If the plan has only one subscriber, this will delete the plan (remove it from the Insurance Plan List). If there are other subscribers, the plan will only be removed from this subscriber and associated family members on the plan.</p>
<h2>Saving Changes</h2>
<p>The radio buttons at the bottom of the window determine if <a href="triggersnewplan.html">Fields that Trigger New Plan</a> create a new insurance plan or affect all subscribers.</p>
<img src="images/insPlanNewvsChange.png" width="519" height="48"/><p>For details on using the options and how to create or update insurance plans, see <a href="insplanedit.html">Change Insurance Plan Information</a></p>
<h2>Troubleshooting</h2>
<p><b>When adding a fee schedule or changing a plant type, I get the following warning:<br/><img src="images/insplanFeeSchedPrompt.png" width="410" height="172" class="ImageInParagraph"/></b></p>
<p>When Blue Book is enabled, adding a fee schedule to a Category Percentage plan will delete the Blue Book data for the plan. Only click Yes if this change is intentional. </p>
</div>
</div>
</body>
</html>```
