# File: ./www.opendental.com/site/canadainsplan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Canada Insurance Plans</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('canadainsplan','canada','countries','documentation')">
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
		<div class="TopBar2"><p>Canada Insurance Plans</p></div>
		<div class="GeneralPageContent">
<p>For <a href="canada.html">Canada</a> users, in the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7family.html">Family Module</a>, double-click an <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insplan.html">Insurance Plan</a>.</p>
<img src="images/canadianInsPlan.png" width="915" height="673"/><p class="MarginBottomZero">The Edit Insurance Plan window looks slightly different in Canada than it does for other countries. The key difference is terminology; all insurance plan fields are in the same place. Notable differences are highlighted in orange and discussed below. </p>
<ul class="MarginBottomGap">
<li><b>Dependant Code</b>: A 2-digit code assigned to the family member on the plan. Required by some carriers/plans.</li>
<li><b>EDI Code</b>: The 6-digit carrier ID number. Required for electronic claims.</li>
<li><b>Plan Number</b>: Also known as Policy Number, Contract Number, or Group Number.</li>
<li><b>Div. No.</b>: Division number. Required by some carriers/plans. </li>
<li><b>Plan Type</b>: Typically Category Percentage for nearly all Canadian insurance plans.</li>
<li><b>Fee Schedule</b>: See below for entering fee schedules for different plan types.</li>
<li><b>Subscriber ID</b>: Also known as Certificate Number or Member Number.</li>
<li><b>Assignment of Benefits (pay provider)</b>: When checked, insurance sends payments to provider. When unchecked, payments are sent to the patient. Unchecking box also turns off the automatic download of EOBs for the subscriber (when in use in <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7clearinghouses.html">Clearinghouses</a>).</li>
<li><b>Request Electronic Benefits</b>: Eligibility requests are not currently supported.</li>
<li><b>Benefit Information</b>: To see recommended insurance categories for Canada, see <a href="canadainscatsetup.html">Canada Insurance Categories</a>. To set up time units, see <a href="canadaproctimeunits.html">Canada Procedure Code Time Units</a>.</li>
</ul>
<p><div class="Note">Note: Some Canadian insurance carriers may combine the division number, subscriber ID, and dependant code into a single string of text, (e.g., UTM876543211-01) where the letters (UTM) are the Div. No., the numbers before the hyphen (876543211) are the subscriber ID and the numbers after the hyphen (01) are the Dependant Code. The hyphen is not entered.</div>
</p>
<h2>Other Ins Info Tab</h2>
<p>The Other Ins Info tab includes the Coordination of Benefits rules and Exclusion rules.</p>
<img src="images/canadianInsPlanOtherInsInfo.png" width="468" height="478"/><p>The Other Ins Info tab will be the same in Canada as it is for other countries, see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insplan.html">Insurance Plan</a>. However, some notable recommendations are discussed below. </p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>COB Rule</b>: Click to choose the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7cob.html">Coordination of Benefits ( COB )</a> rule. <i>Standard</i> is the recommended default for Canadian offices.</li>
<li><b>Exclusions</b>: Click to choose the insurance plan's exclusion rule. <i>Use UCR Fee</i> is the recommended default for Canadian offices, especially if HSO plans are used.</li>
</ul>
<h2>Canadian Tab </h2>
<p>The Canadian tab hosts additional Canada-specific settings.</p>
<img src="images/canadianInsPlanInfoSection.png" width="438" height="186"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Plan Flag</b>: Usually left blank, but used to indicate one of three kinds of Provincial Medical Plans: <ul>
<li>A = Newfoundland MCP Plan</li>
<li>V = Veteran's Affairs Plan</li>
<li>N = NIHB</li>
</ul>
</li>
<li><b>Is Provincial Medical Plan</b>: If Plan Flag indicates a Provincial Medical Plan, check the box. If it is blank, uncheck the box.</li>
<li><b>Diagnostic and Institution codes</b>: Only required if Plan Flag is set to A.</li>
</ul>
<h2>Plan Examples</h2>
<p>Below are some examples of setting up insurance depending on the insurance plan and region. </p>
<p><b>General Setup</b></p>
<img src="images/canadaInsPlanGeneral.png" width="392" height="64"/><p class="MarginBottomZero">The general setup is the most common. All fee on procedures show the provider's fees (usually the province fees). The patient is responsible for anything not covered by insurance.  </p>
<ul class="MarginBottomGap">
<li>Set the Plan Type to <i>Category Percentage</i>.</li>
<li>Leave the Fee Schedule as <i>None</i>.</li>
</ul>
<p><b>Charge Difference</b></p>
<img src="images/canadaInsPlanDifference.png" width="432" height="145"/><p class="MarginBottomZero"> All fees on procedures show the provider's fees (usually the province fees), but the out-of-network fee guide is used for estimates. Percentages are based off the out-of-network fee guide. The patient is responsible for the difference between the two fees and anything not covered by insurance.  </p>
<ul class="MarginBottomGap">
<li>Set the Plan Type to <i>Category Percentage</i>.</li>
<li>Set the Out of Network (Old) fee guide to the insurance fee guide.</li>
</ul>
<p><b>Charge Only</b></p>
<img src="images/canadaInsPlanChargeOnly.png" width="371" height="55"/><p class="MarginBottomZero">All fees on procedures show the fees for the assigned fee guide. The patient is not responsible for the fees on the assigned guide. The patient is responsible for anything not covered by insurance.  </p>
<ul class="MarginBottomGap">
<li>Set the Plan Type to <i>Category Percentage</i>.</li>
<li>Set the Fee Schedule to the insurance fee guide.</li>
</ul>
<p><b>Two Different Fee Guides</b></p>
<img src="images/canadaInsPlanDifference2Charge.png" width="416" height="146"/><p class="MarginBottomZero">All fees on procedures show the fees for the assigned fee guide. The out-of-network fee guide is used for estimates. Percentages are based off the out-of-network guide. The patient is responsible for the difference between the two fees and anything not covered by insurance. </p>
<ul class="MarginBottomGap">
<li>Set the Plan Type to <i>Category Percentage</i>.</li>
<li>Set the Fee Schedule to the desired fee guide.</li>
<li>Set the Out of Network (Old) fee guide to the insurance fee guide.</li>
</ul>
<p><b>HSO Plans</b></p>
<img src="images/canadaInsPlanHSOPlan.png" width="413" height="142"/><p class="MarginBottomZero">All fees on procedures show the fees for the assigned fee guide. The out-of-network fee guide is used for estimates. Percentages are based off the out-of-network guide. </p>
<ul class="MarginBottomGap">
<li>Set the Exclusion rule in the Other Ins Info tab to <i>Use UCR Fee</i>.</li>
<li>Set the Plan Type to <i>Category Percentage</i>.</li>
<li>Set the Fee Schedule to the desired HSO fee guide.</li>
<li>Create a new HSO fee guide as Out of Network type in <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7feeschedules.html">Fee Schedules</a>.</li>
<li>Copy the <i>Normal</i> type HSO fee guide to the <i>Out of Network</i> type HSO fee guide using <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7feescheduletools.html">Fee Tools</a>.</li>
<li>Set the Out of Network (Old) HSO fee guide to the <i>Out of Network</i> copy of the <i>Normal</i> HSO fee guide.</li>
<li>Set all <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7benefitinfo.html">Benefit Categories</a> to 100%.</li>
</ul>
		</div>
	</div>
</body>
</html>```
