# File: ./www.opendental.com/site/ehrcpoe.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: EHR Objective 3: Computerized Provider Order Entry (CPOE)</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="resources/site.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/site.js" defer></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
</head>
<body>
	<div id="TitleAndNav">
		<div id="TitleAndSocial">
			<div id="Title">
				<a href="../index.html">
					<img src="resources/logo.png" alt="Open Dental Software">
				</a>
			</div>
			<div id="Phone">
				<a href="tel:1-503-363-5432" class="phoneLink">503-363-5432</a>
			</div>
		</div>
		<div id="NavWrapper">
			<nav>
				<div id="HamburgerMenu">&#9776;</div>
				<ul>
					<!--See notes in up in the head for explanation of relative path choices.-->
					<li><a href="../index.html">Home</a></li>
					<li><a href="trial.html">Trial Version</a></li>
					<li><a href="order.html">Order</a></li>
					<li><a href="documentation.html">Documentation</a></li>
					<li><a href="http://opendentalsoft.com/forum/">Forum</a></li>
					<li><a href="contact.html">Contact Us</a></li>
					<li><a href="searchSite.html"><img id="MenuIconSearch" src="resources/iconSearch.gif" alt=""/>Search</a> </li>
				</ul>
			</nav>
		</div>
	</div>
    <div id="PagePane"><!--The lighter foreground window that floats over the darker background-->
		<div id="PageTitle">
			<h1>EHR Objective 3: Computerized Provider Order Entry (CPOE)</h1>
		</div>
		<div id="Content">
<span style="color:red">This information applies to EHR Modified Stage 2 for Program Years 2015 to 2018. For current information, see:</span><ul>
<li><a href="ehrmodified2.html">EHR Modified Stage 2</a></li>
<li><a href="https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/2019ProgramRequirementsMedicaid.html">2019 Program Requirements - Medicaid</a></li>
<li><a href="https://opendental.com/site/ehrlicense.html">Open Dental EHR</a></li>
</ul>
<h2>Measures</h2>
<p>CPOE means that an order is entered by a licensed provider. To count as CPOE in Open Dental, a provider must be logged on.</p>
<p><b>Measure 1</b>: More than 60% of medication orders created by EP during reporting period are recorded using CPOE.</p>
<p><b>Measure 2</b>: More than 30% of medical laboratory orders created by EP during reporting period are recorded using CPOE. Medical lab orders are usually for blood work.</p>
<p><b>Measure 3</b>: More than 30% of radiology orders (x-rays) created by EP during reporting period are recorded using CPOE.</p>
<div class="Note">Note: In version 15.4 and greater, there is a new and simplified method of creating and approving CPOE radiology orders. All x-ray procedures are automatically counted as radiology orders, and procedures added or approved by an EHR provider count as CPOE.</div>
<p><b>Exclusions Available?</b></p>
<p>Yes. Providers qualify for an exclusion for a measure if they order less than 100 of the order type during the reporting period.</p>
<h2>Resources</h2>
<p><a href="https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/MedicaidEPStage2_Obj3.pdf">2017 Spec Sheet</a> (PDF)</p>
<p><a href="https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/MedicaidEPModStage2_2018_Obj2.pdf">2018 Spec Sheet</a> (PDF) </p>
<p><img src="images/YouTube_PlayButton_15px.png" width="16" height="16" style="margin-bottom: 0px"/> See our video playlist: <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynCmkPdhlP5DZKz61iZJrenKi">EHR Webinars</a>.</p>
<h2>Calculations</h2>
<div class="Note">Note: There are 3 calculation options for CPOE medication order but you will only report one.</div>
<p class="MarginBottomZero">CPOE_MedOrdersOnly </p>
<ul class="MarginBottomGap">
<li>Denominator: All medication orders created by the provider and entered during the reporting period.</li>
<li>Numerator: Medication orders in the denominator entered using CPOE.</li>
</ul>
<p class="MarginBottomZero">CPOE_LabOrdersOnly: </p>
<ul class="MarginBottomGap">
<li>Denominator: The number of medical laboratory orders for an ordering provider, created by a provider, with a date/time start during the reporting period.</li>
<li>Numerator: Orders in the denominator entered by a provider.</li>
</ul>
<p class="MarginBottomZero">CPOE_RadiologyOrdersOnly (version 15.4 and greater): </p>
<ul class="MarginBottomGap">
<li>Denominator: The number of completed radiology procedures (by default CDT codes D0210 - D0340 and D0364 - D0386) associated with the provider plus any lab orders with a 'RAD' LOINC code for the provider with a date/time start during the reporting period.</li>
<li>Numerator: Orders in the denominator approved or entered by the provider.</li>
</ul>
<p class="MarginBottomZero">CPOE_RadiologyOrdersOnly (version 15.3 and earlier): </p>
<ul class="MarginBottomGap">
<li>Denominator: The number of radiology orders (orders with a 'RAD' LOINC code) ordered for the provider with a date/time start during the reporting period.</li>
<li>Numerator: Orders in the denominator entered by a provider.</li>
</ul>
<h2>Setup</h2>
<p>Determine how medication orders/prescriptions will be created:</p>
<ul>
<li>Legacy eRx (comprehensive version)</li>
<li>Paper prescriptions in Open Dental. If using this option, you should also qualify for the <a href="ehreprescribing.html">EHR Objective 4: ePrescribing</a> exclusion.</li>
</ul>
<h2>Instructions</h2>
<p>To create CPOE orders, a provider must be logged on to Open Dental.</p>
<p>Medication Orders: Must have count, instructions, refill and start date. Once created, orders list in the patient's medication list, sorted by start date.</p>
<ul>
<li>If using Legacy eRx, see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7newcrop.html">Writing and Transmitting Legacy eRx</a>.</li>
<li>If writing paper prescriptions, see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7rx.html">Rx / Prescription</a>.</li>
</ul>
<p>Lab Orders</p>
<ul>
<li><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrcpoelab.html">EHR Medical Lab Order ( CPOE )</a></li>
<li><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrcpoelabresultsenter.html">EHR Lab Results</a></li>
</ul>
<p>Radiology Orders</p>
<ul>
<li><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrcpoeradapprove.html">EHR Radiology Order List</a> (new method)</li>
<li><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrcpoerad.html">EHR Lab Order RAD codes</a> (old method)</li>
<li><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrcpoeradresultsattach.html">EHR Attach Image to Radiology Order</a></li>
</ul>
<p>Access 2011 CPOE Lab/Radiology Orders - On the EHR Dashboard, click Labs/Rads under 2011 Ed.</p>

</div>	
	</div>
</body>
</html>```
