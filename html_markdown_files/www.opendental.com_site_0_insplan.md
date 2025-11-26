# File: ./www.opendental.com/site/0_insplan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Insurance Plans</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('0_insplan','0_family','0_modules','quickmanual','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>Insurance Plans</p></div>
		<div class="GeneralPageContent">
<p>Add new or edit existing insurance plans from the Edit Insurance Plan window.</p>
<p>In the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7family.html">Family Module</a>, double-click an existing insurance plan.</p>
<img src="images/insPlanEdit.png" width="915" height="670"/><p class="MarginBottomZero">Alternatively: </p>
<ul class="MarginBottomGap">
<li>Double-click a plan in the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insplanlist.html">Insurance Plans</a> list.</li>
<li>Add insurance to a patient.</li>
</ul>
<h2>Patient Information</h2>
<p>This information is specific to the patient, including subscriber relationship, last date of eligibility verification, and more.</p>
<img src="images/insPlanPatientInfo.png" width="915" height="87"/><p><b>Audit Trail</b>: This audit trail displays patient-level changes to the insurance plan.<br><img src="images/insAuditPatient.png" width="915" height="241" class="ImageInParagraph"/></p>
<p><b>Ortho</b>: View patient-specific information about the next time an orthodontic claim will be automatically generated when using <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7orthoautoclaim.html">Ortho Auto Claims</a>.</p>
<img src="images/orthoPatSetupIns.png" width="367" height="227"/><p><b>Adjustments to Insurance Benefits</b>: Use this area to enter benefits used outside of your practice or rollover benefits from a prior benefit year.</p>
<h2>Plan Info Tab (Insurance Plan Information)</h2>
<p>Enter details specific to the insurance plan, including carrier information, plan type, group number, and more.</p>
<img src="images/insPlanPlanInfo.png" width="459" height="376"/><p><b>Audit Trail</b>: View changes made to the insurance carrier, insurance plan, benefits, or employer. This audit trail is accessible to all users.<br><img src="images/insPlanAudit.png" width="915" height="262" class="ImageInParagraph"/></p>
<p><b>Pick From List</b>: Use this option to select an existing insurance plan from the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insplanlist.html">Insurance Plans</a> list. This prevents the need to re-enter plan details for new subscribers.</p>
<p><b>Carrier</b>: Select from a list insurance carriers to pre-fill carrier details, like phone number, address, electronic ID, and more.</p>
<p class="MarginBottomZero"><b>Plan Type</b>: Set up the insurance plan using a variety of Insurance Plan Type options. These affect how Open Dental calculates benefits and fees. </p>
<ul class="MarginBottomGap">
<li><b>Category Percentage</b>: Traditional percentage insurance plans. Normally used for out-of-network plans or in-network plans if you don't track insurance write-offs.</li>
<li><b>PPO Percentage</b>: Preferred Provider Organizations. Normally used for in-network plans. This tracks write-offs.</li>
<li><b>PPO Fixed Benefit</b>: In-network plan that calculates write-offs and covers insurance at a fixed amount.</li>
<li><b>Medicaid or Flat Co-pay</b>: Set up Medicaid plans or other plans where insurance pays a flat fee for procedures instead of a percentage. All categories are computed at 100% coverage and write-offs are not tracked. </li>
<li><b>Capitation</b>: HMO and DMO type plans. Used for plans where your office receives a flat fee from insurance for a period, regardless of what work is completed. Claims are not normally sent with this insurance type.</li>
</ul>
<p><b>Fee Schedules</b>: For PPO plans, these are the allowed or contracted fees. For other plan types, these are the fees that are billed to the account.</p>
<p class="MarginBottomZero">Other available fee schedule options are dependent on the plan type and other settings. Options include: </p>
<ul class="MarginBottomGap">
<li><b>Carrier Allowed Amounts</b>: Works with the Blue Book feature or to manually enter allowed fees for out-of-network plans.. </li>
<li><b>Patient Co-pay Amounts</b>: Generally used with Medicaid and Flat Co-pay plans. Patient responsibility per procedure.</li>
<li><b>Fixed Benefit Amounts</b>: Coverage amounts per procedure for <i>PPO Fixed Benefit</i> plans.</li>
</ul>
<h2>Other Ins Info Tab</h2>
<p>Set various plan settings, like per-visit copay substitution rules, and more from the Other Ins Info tab.</p>
<img src="images/insplanOtherInsInfo.png" width="459" height="470"/><h2>Ortho Tab</h2>
<p>Note how ortho claims are handled for this plan from the Ortho tab. This affects how the Auto Ortho tool can be used for patients with this insurance plan. should be sent for ortho treatment for the plan.</p>
<img src="images/insPlanOrthoTab.png" width="459" height="153"/><h2>Benefit Information</h2>
<p>This area shows a summary of the plan's benefits from the Benefit Information area. See <a href="0_insbenefits.html">Insurance Benefit Information</a> for more details on customizing benefits.</p>
<img src="images/insPlanBenefitInfo.png" width="518" height="389"/><p><b>Request Electronic Benefits</b>: Easily request electronic benefits from your clearinghouse and import into the plan. A history of requests is also available for reference. Integrated with DentalXChange ClaimConnect and Electronic Dental Services (EDS).</p>
<p><b>Import Benefits</b>: Import benefits exported from Trojan.</p>
<p><b>Benefits Last Verified</b>: Indicates the date that insurance benefits were last verified. This affects if a patient is included on the Insurance Verification List. Click <b>Now</b> to insert today's date.</p>
		</div>
	</div>
</body>
</html>```
