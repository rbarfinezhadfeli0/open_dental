# File: ./www.opendental.com/site/ehrsecuremsg.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: EHR Objective 9: Secure Messaging</title>
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
			<h1>EHR Objective 9: Secure Messaging</h1>
		</div>
		<div id="Content">
<span style="color:red">This information applies to EHR Modified Stage 2 for Program Years 2015 to 2018. For current information, see:</span><ul>
<li><a href="ehrmodified2.html">EHR Modified Stage 2</a></li>
<li><a href="https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/2019ProgramRequirementsMedicaid.html">2019 Program Requirements - Medicaid</a></li>
<li><a href="https://opendental.com/site/ehrlicense.html">Open Dental EHR</a></li>
</ul>
<p>Measure: Send a secure electronic message, using Secure WebMail, to at least 5% of patients seen by the provider (or their authorized representative).</p>
<p><b>Exclusions Available?</b></p>
<p>Yes, if a provider has no office visits or conducts 50% of patient encounters in an area with low broadband availability.</p>
<h2>Resources</h2>
<p><a href="https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/MedicaidEPStage2_Obj9.pdf">2017 Spec Sheet</a> (PDF)</p>
<p><a href="https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/MedicaidEPModStage2_2018_Obj9.pdf">2018 Spec Sheet</a> (PDF)</p>
<h2>Calculation</h2>
<p class="MarginBottomZero">Version 16.4 and greater: The SecureMessaging calculation was updated to track how many secure web mails are sent to patients. </p>
<ul class="MarginBottomGap">
<li><p>Denominator: All unique patients with at least one completed procedure by the provider during the reporting period.</p>
</li>
<li><p>Numerator: The number of patients in the denominator for whom a secure web mail was sent.</p>
</li>
</ul>
<p>Version 16.3 and earlier: Use <a href="https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx">Query Example</a> 1201 to calculate how many patients with a completed procedure were sent a Secure WebMail for a date range, by provider. The SecureMessaging calculation in measure reports calculates how many messages a patient sends to a provider, not vice versa. This was an old stage 2 requirement.</p>
<p>We also recommend gathering supporting documentation that secure messaging is set up (e.g. screenshots).</p>
<h2>Setup</h2>
<p>Set up the <a href="patientportal.html">Patient Portal</a>.</p>
<h2>Instructions</h2>
<p><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7securewebmailsend.html">WebMail</a></p>
<p>We recommend capturing screenshots as supporting documentation.</p>

</div>	
	</div>
</body>
</html>```
