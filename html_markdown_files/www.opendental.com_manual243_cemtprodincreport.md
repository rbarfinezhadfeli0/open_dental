# File: ./www.opendental.com/manual243/cemtprodincreport.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - CEMT Reports</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('cemtprodincreport','central','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/cemtprodincreport.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/cemtprodincreport.html" >v24.2</option><option value="https://www.opendental.com/manual241/cemtprodincreport.html" >v24.1</option><option value="https://www.opendental.com/manual233/cemtprodincreport.html" >v23.3</option><option value="https://www.opendental.com/manual232/cemtprodincreport.html" >v23.2</option><option value="https://www.opendental.com/manual231/cemtprodincreport.html" >v23.1</option><option value="https://www.opendental.com/manual224/cemtprodincreport.html" >v22.4</option><option value="https://www.opendental.com/manual223/cemtprodincreport.html" >v22.3</option><option value="https://www.opendental.com/manual222/cemtprodincreport.html" >v22.2</option><option value="https://www.opendental.com/manual221/cemtprodincreport.html" >v22.1</option><option value="https://www.opendental.com/manual214/cemtprodincreport.html" >v21.4</option><option value="https://www.opendental.com/manual213/cemtprodincreport.html" >v21.3</option><option value="https://www.opendental.com/manual212/cemtprodincreport.html" >v21.2</option><option value="https://www.opendental.com/manual211/cemtprodincreport.html" >v21.1</option><option value="https://www.opendental.com/manual205/cemtprodincreport.html" >v20.5</option><option value="https://www.opendental.com/manual204/cemtprodincreport.html" >v20.4</option><option value="https://www.opendental.com/manual203/cemtprodincreport.html" >v20.3</option><option value="https://www.opendental.com/manual202/cemtprodincreport.html" >v20.2</option><option value="https://www.opendental.com/manual201/cemtprodincreport.html" >v20.1</option><option value="https://www.opendental.com/manual194/cemtprodincreport.html" >v19.4</option><option value="https://www.opendental.com/manual193/cemtprodincreport.html" >v19.3</option><option value="https://www.opendental.com/manual192/cemtprodincreport.html" >v19.2</option><option value="https://www.opendental.com/manual191/cemtprodincreport.html" >v19.1</option><option value="https://www.opendental.com/manual184/cemtprodincreport.html" >v18.4</option><option value="https://www.opendental.com/manual183/cemtprodincreport.html" >v18.3</option><option value="https://www.opendental.com/manual182/cemtprodincreport.html" >v18.2</option><option value="https://www.opendental.com/manual181/cemtprodincreport.html" >v18.1</option><option value="https://www.opendental.com/manual174/cemtprodincreport.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>CEMT Reports</p></div>
<div class="GeneralPageContent">
<p>In the <a href="central.html">Central Enterprise Management Tool ( CEMT )</a>, select connections to run the report against. Click Reports, Production and Income.</p>
<img src="images/centralPandIreport.png" width="483" height="373"/><p>Select the report criteria. See <a href="reportprodinc.html">Production and Income Reports</a> for a description of each field.</p>
<p class="MarginBottomZero"><b>Report Type</b>: All report types are run for all providers and all clinics for the date range. </p>
<ul class="MarginBottomGap">
<li><b>Daily</b>: Report groups by database, then by clinic. Date defaults to today's date.</li>
<li><b>Monthly</b>: Report groups by database, then by clinic. Date range defaults to the current month.</li>
<li><b>Annual</b>: Report groups by database, then by clinic, then by month. Date range defaults to one year.</li>
<li><b>Provider</b>: Report groups by database, then by clinic, then by provider. Date range defaults to today's date.</li>
</ul>
<p class="MarginBottomZero"><b>Show Insurance Write-offs:</b> Select when to apply insurance write-offs to production amounts. See <a href="writeoffstoproduction.html">Show Insurance Write-offs</a> for more details. Set the default in Report Setup - Misc Settings.  </p>
<ul class="MarginBottomGap">
<li><b>Using insurance payment date</b>: Apply the write-off when the insurance payment is entered.</li>
<li><b>Using procedure date</b>: Apply the write-off on the date of service.</li>
</ul>
<p><b>Include Unearned:</b> Select this box to include unearned income. An additional column is added for Unearned Income on Monthly, Annual and Provider reports, and the report uses a landscape orientation.<br/><div class="Note">Note: This should either always be selected when running Production and Income, or never selected.</div>
</p>
<p>The report groups results by database connection, then by clinic.</p>
</div>
</div>
</body>
</html>```
