# File: ./www.opendental.com/manual/reports.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Reports</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reports.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reports.html" >v24.2</option><option value="https://www.opendental.com/manual241/reports.html" >v24.1</option><option value="https://www.opendental.com/manual233/reports.html" >v23.3</option><option value="https://www.opendental.com/manual232/reports.html" >v23.2</option><option value="https://www.opendental.com/manual231/reports.html" >v23.1</option><option value="https://www.opendental.com/manual224/reports.html" >v22.4</option><option value="https://www.opendental.com/manual223/reports.html" >v22.3</option><option value="https://www.opendental.com/manual222/reports.html" >v22.2</option><option value="https://www.opendental.com/manual221/reports.html" >v22.1</option><option value="https://www.opendental.com/manual214/reports.html" >v21.4</option><option value="https://www.opendental.com/manual213/reports.html" >v21.3</option><option value="https://www.opendental.com/manual212/reports.html" >v21.2</option><option value="https://www.opendental.com/manual211/reports.html" >v21.1</option><option value="https://www.opendental.com/manual205/reports.html" >v20.5</option><option value="https://www.opendental.com/manual204/reports.html" >v20.4</option><option value="https://www.opendental.com/manual203/reports.html" >v20.3</option><option value="https://www.opendental.com/manual202/reports.html" >v20.2</option><option value="https://www.opendental.com/manual201/reports.html" >v20.1</option><option value="https://www.opendental.com/manual194/reports.html" >v19.4</option><option value="https://www.opendental.com/manual193/reports.html" >v19.3</option><option value="https://www.opendental.com/manual192/reports.html" >v19.2</option><option value="https://www.opendental.com/manual191/reports.html" >v19.1</option><option value="https://www.opendental.com/manual184/reports.html" >v18.4</option><option value="https://www.opendental.com/manual183/reports.html" >v18.3</option><option value="https://www.opendental.com/manual182/reports.html" >v18.2</option><option value="https://www.opendental.com/manual181/reports.html" >v18.1</option><option value="https://www.opendental.com/manual174/reports.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Reports</p></div>
<div class="GeneralPageContent">
<p>Open Dental has many report options accessed from the <a href="mainmenu.html">Main Menu</a> to view data in organized formats.</p>
<img src="images/reportsMain.png" width="471" height="175"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Standard</b>: Open Standard <a href="reportsstandard.html">Standard Reports</a> list to access text-based reports (production and income, daily and monthly reports, lists, and public health options). </li>
<li><b>Standard Favorites</b>: Displays reports marked as <i>Favorite</i> in <a href="reportdisplaysettings.html">Report Setup: Display Settings</a>. <br/><img src="images/reportsStandardFiltered.png" width="379" height="244" class="ImageInParagraph"/></li>
<li><b>Graphic</b>: Open <a href="reportsgraphic.html">Graphic Reports</a> to view visual reports by provider or clinic and customizable to fit office requirements (production and income, accounts receivable, new patients, and broken appointments).</li>
<li><b>User Query</b>: Open the <a href="queryoverview.html">User Query</a> window to generate custom reports to view data that may not be available in a standard report. </li>
<li><b>User Query Favorites</b>: Open <a href="queryfavorites.html">Query Favorites</a> for a list of saved queries.<br/><img src="images/reportsUserQueryFiltered.png" width="486" height="316" class="ImageInParagraph"/></li>
<li><b>eService Activity Log</b>: Opens the <a href="eserviceactivitylog.html">eService Activity Log</a> to view actions tracked by eServices.</li>
<li><b>Unfinalized Payments</b>: Shows the number of outstanding unfinalized payments in parentheses, e.g., <i>(3)</i> . Click to open the <a href="reportunfinalizedinsurancepayments.html">Unfinalized Insurance Payment Report</a>. The <a href="opendentalservice.html">Open Dental Service</a> must be installed and running for the number of unfinalized payments to display. </li>
</ul>
<p class="MarginBottomZero">Other Reports in Open Dental: </p>
<ul class="MarginBottomGap">
<li>To add a click-able URL as a Reports menu option, see <a href="bridgecustom.html">Custom Bridges</a>.</li>
<li><a href="appointmentlists.html">Appointment Lists</a></li>
<li>Accounting reports (General Ledger Detail and Balance Sheets). See <a href="accountingcloseyear.html">Accounting Close Year</a>.</li>
<li>Clearinghouse reports. See <a href="claimsend.html">Send Claims</a>.</li>
<li><a href="../resources/Arizona.txt">Arizona Reports</a></li>
<li>Custom Reports: Some users may have a Custom Reports menu item. It means there is a reports folder within the <a href="atozfolder.html">A to Z Folder</a> (typically Reports) that contains at least one .rdl file (e.g., Unsched Treat Plans.rdl). There is one menu item for each .rdl file in the folder.</li>
</ul>
<div class="Note">Note: <ul>
<li>For offices that converted from another software, reports should not be run on or prior to the conversion date.</li>
<li>Report processing/generation time may vary depending on the complexity and type of report being run.</li>
</ul>
</div>
</div>
</div>
</body>
</html>```
