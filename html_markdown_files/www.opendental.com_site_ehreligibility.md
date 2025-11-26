# File: ./www.opendental.com/site/ehreligibility.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
		<title>Open Dental: EHR Eligibility Queries</title>
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
			<h1>EHR Eligibility Queries</h1>
		</div>
		<div id="Content">
<p>Existing Open Dental customers can run queries to determine eligibility for the <a href="ehrlicense.html">EHR Incentive Program</a> or to provide supporting documentation during <a href="ehrattest.html">EHR Attestation</a> for an incentive payment. See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7queryfavorites.html">Query Favorites</a>.</p>
<ul>
<li><b>Percentage of Patient Encounters Queries</b>. These queries give a percentage of patient encounters by insurance carrier, for a date range. Use to determine Medicaid patient volume for a specific time frame.  <ul>
<li>Percentage of Patient Encounters, by NPI (for a specific provider)</li>
<li>Percentage of Patient Encounters for all Providers</li>
<li>Percentage of Patient Encounters Recent Conversion (for all providers after a recent data conversion)</li>
</ul>
</li>
<li><b>Claim Detail Queries</b>. These reports give claim details for a date range. Use with a Percentage of Patient Encounters query to see patient claim information.  <ul>
<li>Claim Details by NPI (for a specific provider)</li>
<li>Claim Details for all Providers</li>
<li>Claim Details Recent Conversion (for all providers after a recent data conversion)</li>
</ul>
</li>
<li><b>Texas Medicaid Patient Volume Query</b>. For EHR providers who must provide supporting documentation for patient volume when attesting with Texas Medicaid.  <ul>
<li>EHR Texas Medicaid Patient Volume</li>
</ul>
</li>
</ul>
<p>The queries below can be found be found on the <a href="https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx">Query Examples</a> page. </p>
<p>To run a query, copy the query text (Ctrl + C), then paste it into the Query window. You may need to change information such as date range, NPI number, carrier, etc. It may be useful to export query results to Excel so you can format the results the way you want.</p>
<p>Hint: To add identifying header information to query results, first save the query to your Query Favorites, then enter a Title that includes all identifying information (e.g. title, date ranges, provider). Then run the query again. If you change report criteria, make sure to change the query's title also.</p>
<br><ol>
<li><b>Percentage of Patient Encounters, by NPI</b>: # 973<br><p>Percentage of patient encounters by insurance carrier, for a date range, by NPI. Use to determine Medicaid patient volume for a specific time frame. The percentage may add up to over 100% if a single patient has multiple carriers on the same day of service.</p>
</li>
<li><b> Percentage of Patient Encounters for all Providers</b>: # 974<br><p>Percentage of patient encounters by insurance carrier, for a date range, for all providers. Use to determine Medicaid patient volume for a specific time frame. The percentage may add up to over 100% if a single patient was seen by multiple carriers on the same day of service.</p>
</li>
<li><b>Percentage of Patient Encounters - Recent Conversion</b>: #975<br><p>For providers who had a recent data conversion. Percentage of patient encounters by insurance carrier, for a date range, for all providers. Use to determine Medicaid patient volume for a specific time frame. The percentage may add up to over 100% if a single patient was seen by multiple carriers on the same day of service.</p>
</li>
<li><b>Claim Details by NPI</b>: # 976 <br><p>Claim details for a date range, by NPI. Use with a Percentage of Patient Encounters query to see patient claim information.</p>
</li>
<li><b>Claim Details for all Providers</b>: #977<br><p>Claim details for a date range for all providers. Use with a Percentage of Patient Encounters query to see patient claim information.</p>
</li>
<li><b>Claim Details - Recent Conversion</b>: #978<br><p>For providers who had a recent data conversion. Claim details for a date range, for all providers. Use with a Percentage of Patient Encounters after a Conversion query to see patient claim information.</p>
</li>
<li><b>Texas Medicaid Patient Volume Query</b>: #979<br><p>For EHR providers who must provide supporting documentation for patient volume when attesting with Texas Medicaid.</p>
</li>
</ol>

</div>	
	</div>
</body>
</html>```
