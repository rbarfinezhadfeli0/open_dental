# File: ./www.opendental.com/manual/labcasemanage.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Lab Cases</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('labcasemanage','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/labcasemanage.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/labcasemanage.html" >v24.2</option><option value="https://www.opendental.com/manual241/labcasemanage.html" >v24.1</option><option value="https://www.opendental.com/manual233/labcasemanage.html" >v23.3</option><option value="https://www.opendental.com/manual232/labcasemanage.html" >v23.2</option><option value="https://www.opendental.com/manual231/labcasemanage.html" >v23.1</option><option value="https://www.opendental.com/manual224/labcasemanage.html" >v22.4</option><option value="https://www.opendental.com/manual223/labcasemanage.html" >v22.3</option><option value="https://www.opendental.com/manual222/labcasemanage.html" >v22.2</option><option value="https://www.opendental.com/manual221/labcasemanage.html" >v22.1</option><option value="https://www.opendental.com/manual214/labcasemanage.html" >v21.4</option><option value="https://www.opendental.com/manual213/labcasemanage.html" >v21.3</option><option value="https://www.opendental.com/manual212/labcasemanage.html" >v21.2</option><option value="https://www.opendental.com/manual211/labcasemanage.html" >v21.1</option><option value="https://www.opendental.com/manual205/labcasemanage.html" >v20.5</option><option value="https://www.opendental.com/manual204/labcasemanage.html" >v20.4</option><option value="https://www.opendental.com/manual203/labcasemanage.html" >v20.3</option><option value="https://www.opendental.com/manual202/labcasemanage.html" >v20.2</option><option value="https://www.opendental.com/manual201/labcasemanage.html" >v20.1</option><option value="https://www.opendental.com/manual194/labcasemanage.html" >v19.4</option><option value="https://www.opendental.com/manual193/labcasemanage.html" >v19.3</option><option value="https://www.opendental.com/manual192/labcasemanage.html" >v19.2</option><option value="https://www.opendental.com/manual191/labcasemanage.html" >v19.1</option><option value="https://www.opendental.com/manual184/labcasemanage.html" >v18.4</option><option value="https://www.opendental.com/manual183/labcasemanage.html" >v18.3</option><option value="https://www.opendental.com/manual182/labcasemanage.html" >v18.2</option><option value="https://www.opendental.com/manual181/labcasemanage.html" >v18.1</option><option value="https://www.opendental.com/manual174/labcasemanage.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Lab Cases</p></div>
<div class="GeneralPageContent">
<p>Manage and track the status of existing Lab Cases from the Lab Cases list.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Lists, Lab Cases.</p>
<img src="images/labCases.png" width="915" height="275"/><p>Alternatively, in the <a href="appointments.html">Appointments Module</a>, under the calendar, click <b>Lab Cases</b>.</p>
<img src="images/labCaseStatus.png" width="223" height="87"/><p> The status of Lab Cases for the selected date shows next to the Lab Cases button. If the status is <i>All Received</i>, then all Lab Cases attached to today's appointments have been marked <i>Received</i> on the <a href="labcaseedit.html">Lab Case</a> Edit window. If the status is <i>Not Received</i>, then Lab Cases for today's appointments are still outstanding. The number indicates how many Lab Cases are not marked <i>Received</i>. If using Clinics, the status reflects Lab Cases attached to all appointments scheduled in the selected clinic's operatories, for the selected date.</p>
<h2>Filters</h2>
<p>Set filter criteria to update Lab Cases grid. By default, only incomplete Lab Cases attached to incomplete appointments are listed. </p>
<img src="images/labCasesFilters.png" width="729" height="56"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>From/To Date</b>: Enter a date range to view Lab Cases between a specific date range, based on appointment date.</li>
<li><b>Show Unattached</b>: Check to view Lab Cases not attached to an appointment.</li>
<li><b>Show Completed</b>: Check to view completed Lab Cases. Lab cases are considered complete when the attached appointment is set complete. The <i>Status</i> of the lab is not changed.</li>
<li><b>Clinic</b>: Select a clinic to filter by clinic attached to appointment. Only visible when <a href="clinics.html">Clinics</a> is enabled. The list will only include clinics the user has permission to access. If <i>Show Unattached</i> is checked, unattached labs are not filtered by clinic.</li>
</ul>
<h2>Lab Case Grid</h2>
<p>Click <b>Refresh</b> to update the Lab Cases grid after changing filter criteria. </p>
<p>Double-click a Lab Case to open the <a href="labcaseedit.html">Edit Lab Case </a> window and update the lab Tracking status. Right-click a lab case and select <b>Go To Appointment</b> to quickly jump to the associated appointment in the schedule.</p>
<p>Below is a description of each column in the grid.</p>
<img src="images/labCasesGrid.png" width="915" height="151"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Appt Date Time</b>: Date and time of the appointment the Lab Case is attached to. Blank indicates the Lab Case is unattached.</li>
<li><b>Appt Status</b>: Status of the appointment the Lab Case is attached to.</li>
<li><b>Procedures:</b> Abbreviations of procedures attached to the appointment.</li>
<li><b>Patient</b>: Last name and first name of the patient attached to the lab.</li>
<li><b>Status</b>: Current <i>Tracking</i> status of the lab entered from Edit Lab Case. The status shown will be based on the highest priority tracking status with a tracking date entered. Tracking statuses are  <ol>
<li>Quality Checked</li>
<li>Received</li>
<li>Sent</li>
<li>Created</li>
</ol>
</li>
<li><b>Lab</b>: <a href="laboratories.html">Laboratory</a> attached to the Lab Case.</li>
<li><b>Lab Phone</b>: Contact phone number entered for the lab in Laboratories List.</li>
<li><b>Instructions</b>: Any text entered into the <i>Instructions</i> area of Edit Lab Case.</li>
</ul>
</div>
</div>
</body>
</html>```
