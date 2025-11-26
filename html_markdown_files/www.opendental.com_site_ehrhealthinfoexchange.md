# File: ./www.opendental.com/site/ehrhealthinfoexchange.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: EHR Objective 5: Health Information Exchange</title>
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
			<h1>EHR Objective 5: Health Information Exchange</h1>
		</div>
		<div id="Content">
<span style="color:red">This information applies to EHR Modified Stage 2 for Program Years 2015 to 2018. For current information, see:</span><ul>
<li><a href="ehrmodified2.html">EHR Modified Stage 2</a></li>
<li><a href="https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/2019ProgramRequirementsMedicaid.html">2019 Program Requirements - Medicaid</a></li>
<li><a href="https://opendental.com/site/ehrlicense.html">Open Dental EHR</a></li>
</ul>
<p class="MarginBottomZero">Measure: Providers that transition or refer patients to another provider or setting of care must: </p>
<ol class="MarginBottomGap">
<li>Create a summary of care using Open Dental</li>
<li>Electronically transmit the summary of care to a receiving provider for more than 10% of transitions of care and referrals.</li>
</ol>
<p><b>Exclusions Available? </b></p>
<p>Yes. If provider has less than 100 referrals to another provider during the reporting period.</p>
<h2>Resources</h2>
<p><a href="https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/MedicaidEPStage2_Obj5.pdf">2017 Spec Sheet</a> (PDF)</p>
<p><a href="https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/MedicaidEPModStage2_2018_Obj5.pdf">2018 Spec Sheet</a> (PDF) </p>
<h2>Calculations</h2>
<p class="MarginBottomZero">SummaryofCare: </p>
<ul class="MarginBottomGap">
<li>Denominator: Number of outgoing Referrals TO another provider (must be a doctor) during the reporting period.</li>
<li>Numerator: Number of referrals in the denominator to whom a summary of care was provided (printed, by Email, or exported). Creating a referral automatically provides a summary of care to the patient portal and affects the numerator.</li>
</ul>
<p class="MarginBottomZero">SummaryofCareElectronic:  </p>
<ul class="MarginBottomGap">
<li>Denominator: Number of outgoing referrals TO another provider (must be a doctor) during the reporting period.</li>
<li>Numerator: Referrals in the denominator to whom a summary of care was sent electronically (by Email or exported).</li>
</ul>
<h2>Setup</h2>
<p class="MarginBottomZero">Part 2, electronic transmission, requires setting up a secure way to send summaries of care. You have two options: </p>
<ol class="MarginBottomGap">
<li>Send directly from Open Dental using <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7emailencrypted.html">Encrypted Email</a>. This requires obtaining, installing, and sharing email security certificates.</li>
<li>Contract with a Health Information Service Provider (HISP) to perform authentication, encryption, and trust verification on your behalf. You can then export summaries of care and use the HISP to send securely.</li>
</ol>
<h2>Instructions</h2>
<p><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7ehrsummaryofcaresend.html">Summaries of Care</a></p>

</div>	
	</div>
</body>
</html>```
