# File: ./www.opendental.com/manual/reportnetunearnedincome.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Net Unearned Income Report</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportnetunearnedincome','reportunearnedincome','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportnetunearnedincome.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportnetunearnedincome.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportnetunearnedincome.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportnetunearnedincome.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportnetunearnedincome.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportnetunearnedincome.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportnetunearnedincome.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportnetunearnedincome.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportnetunearnedincome.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportnetunearnedincome.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportnetunearnedincome.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportnetunearnedincome.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportnetunearnedincome.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportnetunearnedincome.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportnetunearnedincome.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportnetunearnedincome.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportnetunearnedincome.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportnetunearnedincome.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportnetunearnedincome.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportnetunearnedincome.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportnetunearnedincome.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportnetunearnedincome.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportnetunearnedincome.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportnetunearnedincome.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportnetunearnedincome.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportnetunearnedincome.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportnetunearnedincome.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportnetunearnedincome.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Net Unearned Income Report</p></div>
<div class="GeneralPageContent">
<p>The Net Unearned Income Report shows families with patients that have unearned income payments collected and no unallocated procedures.</p>
<p>In <a href="reportunearnedincome.html">Unearned Income Reports</a>, click the <b>Net Unearned Income</b> tab.</p>
<img src="images/reportNetUnearnedIncome.png" width="649" height="499"/><p>Patients on this report have a net unearned income balance. Patients need to have treatment scheduled to allocate the payment, a refund should be issued, or payment may need to be allocated to an existing adjustment (e.g., Billing Charge or Finance Charge).</p>
<h2>Filters</h2>
<p>Set report criteria before running the report.</p>
<p class="MarginBottomZero"><b>Exclude families with a net $0.00 unearned income balance</b>: Determines if patients where the net unearned income balance is $0.00 are included in the report. </p>
<ul class="MarginBottomGap">
<li>Checked: Remove patients with no current unearned income from the report.</li>
<li>Unchecked: Do not exclude patients with a net $0.00 unearned income balance.</li>
</ul>
<p><b>Unearned Types</b>: Select the unearned types to include. Check <b>All</b> to include all unearned types. Unearned types can be set up in <a href="definitionspaysplitunearned.html">Definitions: PaySplit Unearned Types</a>.</p>
<p><b>Providers</b>: Select providers to include in the report. Filters by patient's primary provider. Check<b> All </b>to include all providers, including those marked <i>Hidden on Reports</i>. </p>
<p class="MarginBottomZero"><b>Clinics</b>: Only available when Clinics are enabled in <a href="showfeatures.html">Show Features</a>. Select clinics to include in the report. Check <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>Filters by patient's assigned clinic. </li>
<li>If a user is restricted to specific clinics, only accessible clinics are listed. When checking <b>All (includes hidden)</b>, results include all clinics a user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.</li>
</ul>
<h2>Report Preview</h2>
<p>Click <b>OK</b> to generate a print preview of the report. Below is an example of the report and explanation of the report columns. For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<img src="images/reportNetUnearnedIncomeResults.png" width="649" height="272"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Patient</b>: First name and last name of patient attached to unearned income.</li>
<li><b>Guarantor</b>: First name and last name of family guarantor of the associated patient.</li>
<li><b>Unearned Amt</b>: Unearned income total associated with the patient. If filtered by type, this is the total of the selected Unearned Types only.</li>
<li><b>Fam Bal</b>: Total outstanding family balance. This includes all outstanding insurance estimates and patient portions.</li>
</ul>
</div>
</div>
</body>
</html>```
