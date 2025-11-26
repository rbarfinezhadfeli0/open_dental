# File: ./www.opendental.com/manual/webschedapptreport.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Web Sched Appointments Report</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('webschedapptreport','+reportlists','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/webschedapptreport.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/webschedapptreport.html" >v24.2</option><option value="https://www.opendental.com/manual241/webschedapptreport.html" >v24.1</option><option value="https://www.opendental.com/manual233/webschedapptreport.html" >v23.3</option><option value="https://www.opendental.com/manual232/webschedapptreport.html" >v23.2</option><option value="https://www.opendental.com/manual231/webschedapptreport.html" >v23.1</option><option value="https://www.opendental.com/manual224/webschedapptreport.html" >v22.4</option><option value="https://www.opendental.com/manual223/webschedapptreport.html" >v22.3</option><option value="https://www.opendental.com/manual222/webschedapptreport.html" >v22.2</option><option value="https://www.opendental.com/manual221/webschedapptreport.html" >v22.1</option><option value="https://www.opendental.com/manual214/webschedapptreport.html" >v21.4</option><option value="https://www.opendental.com/manual213/webschedapptreport.html" >v21.3</option><option value="https://www.opendental.com/manual212/webschedapptreport.html" >v21.2</option><option value="https://www.opendental.com/manual211/webschedapptreport.html" >v21.1</option><option value="https://www.opendental.com/manual205/webschedapptreport.html" >v20.5</option><option value="https://www.opendental.com/manual204/webschedapptreport.html" >v20.4</option><option value="https://www.opendental.com/manual203/webschedapptreport.html" >v20.3</option><option value="https://www.opendental.com/manual202/webschedapptreport.html" >v20.2</option><option value="https://www.opendental.com/manual201/webschedapptreport.html" >v20.1</option><option value="https://www.opendental.com/manual194/webschedapptreport.html" >v19.4</option><option value="https://www.opendental.com/manual193/webschedapptreport.html" >v19.3</option><option value="https://www.opendental.com/manual192/webschedapptreport.html" >v19.2</option><option value="https://www.opendental.com/manual191/webschedapptreport.html" >v19.1</option><option value="https://www.opendental.com/manual184/webschedapptreport.html" >v18.4</option><option value="https://www.opendental.com/manual183/webschedapptreport.html" >v18.3</option><option value="https://www.opendental.com/manual182/webschedapptreport.html" >v18.2</option><option value="https://www.opendental.com/manual181/webschedapptreport.html" >v18.1</option><option value="https://www.opendental.com/manual174/webschedapptreport.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Web Sched Appointments Report</p></div>
<div class="GeneralPageContent">
<p>Use the Web Sched Appointments report to identify patients who have scheduled appointments using Web Sched. </p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, click <b>Web Sched Appointments</b>.</p>
<img src="images/webschedApptReport.png" width="915" height="284"/><p> Alternatively, from the <a href="alerts.html">Alerts</a> window, highlight the Web Sched Appointment alert and click <b>Open</b>. </p>
<h2>Filters</h2>
<p class="MarginBottomZero">Use the settings at the top to filter the report.  </p>
<ul class="MarginBottomGap">
<li><b>From/To</b>: Select the date range of appointments to view, based on when the patient created the appointment. Click the down arrow to select days from a calendar; click the down arrow again to close the calendar.</li>
<li><b>Clinics</b>: If using clinics, highlight the clinics to report on. Press Ctrl while clicking to select multiple clinics, or click All (includes hidden) to select all clinics.</li>
<li><b>Confirmation Status</b>: Filter the results by <a href="confirmationstatus.html">Confirmation Status</a>. </li>
<li><b>Web Sched Appointment Types:</b> Select the types of Web Sched appointments to report on. <ul>
<li><b>Show Recall Appointments</b>: Show appointments scheduled using <a href="webschedrecallsetup.html">Web Sched Recall</a>.</li>
<li><b>Show New Patient Appointments</b>: Show appointments scheduled using <a href="webschednewpatsetup.html">Web Sched New Patient</a>.</li>
<li><b>Show ASAP Appointments</b>: Show appointments scheduled using <a href="webschedasap.html">Web Sched ASAP</a>.</li>
<li><b>Show Existing Patient Appointment</b>: Show appointments scheduled using <a href="webschedexistingpatsetup.html">Web Sched Existing Patient</a>.</li>
</ul>
</li>
</ul>
<p>Once criteria is entered, click <b>Refresh List</b> to display results.</p>
</div>
</div>
</body>
</html>```
