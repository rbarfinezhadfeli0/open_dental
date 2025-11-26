# File: ./www.opendental.com/manual/schedule.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Schedule Setup</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('schedule','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/schedule.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/schedule.html" >v24.2</option><option value="https://www.opendental.com/manual241/schedule.html" >v24.1</option><option value="https://www.opendental.com/manual233/schedule.html" >v23.3</option><option value="https://www.opendental.com/manual232/schedule.html" >v23.2</option><option value="https://www.opendental.com/manual231/schedule.html" >v23.1</option><option value="https://www.opendental.com/manual224/schedule.html" >v22.4</option><option value="https://www.opendental.com/manual223/schedule.html" >v22.3</option><option value="https://www.opendental.com/manual222/schedule.html" >v22.2</option><option value="https://www.opendental.com/manual221/schedule.html" >v22.1</option><option value="https://www.opendental.com/manual214/schedule.html" >v21.4</option><option value="https://www.opendental.com/manual213/schedule.html" >v21.3</option><option value="https://www.opendental.com/manual212/schedule.html" >v21.2</option><option value="https://www.opendental.com/manual211/schedule.html" >v21.1</option><option value="https://www.opendental.com/manual205/schedule.html" >v20.5</option><option value="https://www.opendental.com/manual204/schedule.html" >v20.4</option><option value="https://www.opendental.com/manual203/schedule.html" >v20.3</option><option value="https://www.opendental.com/manual202/schedule.html" >v20.2</option><option value="https://www.opendental.com/manual201/schedule.html" >v20.1</option><option value="https://www.opendental.com/manual194/schedule.html" >v19.4</option><option value="https://www.opendental.com/manual193/schedule.html" >v19.3</option><option value="https://www.opendental.com/manual192/schedule.html" >v19.2</option><option value="https://www.opendental.com/manual191/schedule.html" >v19.1</option><option value="https://www.opendental.com/manual184/schedule.html" >v18.4</option><option value="https://www.opendental.com/manual183/schedule.html" >v18.3</option><option value="https://www.opendental.com/manual182/schedule.html" >v18.2</option><option value="https://www.opendental.com/manual181/schedule.html" >v18.1</option><option value="https://www.opendental.com/manual174/schedule.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Schedule Setup</p></div>
<div class="GeneralPageContent">
<p>Schedule setup allows users to view and enter all provider and employee schedules. </p>
<p>To view the schedule, in the <a href="mainmenu.html">Main Menu</a>, click Setup, <b>Schedules</b>.</p>
<img src="images/schedule.png" width="915" height="645"/><p>Alternatively, in the <a href="manage.html">Manage Module</a>, select a specific employee(s). Click <b>View Schedule</b>. </p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our videos: <a href="https://youtu.be/jDnnrFnw3CU">Operatory and Schedule Setup</a> &amp; <a href="https://youtu.be/CBwNnjaxzlg">Operatory and Schedule Setup for Clinics</a></p>
<p>Offices can define any kind of rotating or alternating schedule they want. From the Schedule window, enter individual work hours, holidays, lunch hours, and staff meetings. </p>
<p>To edit schedules, the <i>Schedules - Practice and Provider </i><a href="permissions.html">Security Permission</a> is required. The schedule may be blank upon entering this window. See the Filters section to update what is shown in the Schedules grid.</p>
<p>Once schedules are entered, open/closed hours are indicated in the Appointments Module with the background colors set in <a href="definitionsappointmentcolors.html">Definitions: Appointment Colors</a>.</p>
<h2>Schedule Grid</h2>
<p>The schedule may be blank upon opening the Schedule. Set filter criteria (e.g., select providers/employees) and click <b>Refresh</b> to view schedules. </p>
<img src="images/scheduleGrid.png" width="769" height="330"/><p>Each day is represented by a single cell. Today's date and schedule are displayed in red text. Holidays or notes added to the schedule are denoted in the corresponding cell. </p>
<p> Double-click a day to open <a href="scheduleeditdaywindow.html">Schedule Edit</a> to make changes to a single day's schedule (e.g., add employees or provider time to the schedule).</p>
<h2>Filters</h2>
<p>Set filters to affect which schedules are displayed in the Schedule grid..</p>
<img src="images/scheduleFilters.png" width="214" height="486"/><p>After setting filters, click <b>Refresh</b> to update what is displayed in the Schedule grid.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>From / To Dates</b>: The date range to display in the Schedule grid.</li>
<li><b>Show Practice Holidays and Notes</b>: Display practice notes and holidays entered via the Edit Day window. If using clinics, this corresponds to notes or holidays with <i>Headquarters</i> assigned as the clinic.</li>
<li><b>Show Clinic Holidays and Notes</b>: Only displays when Clinics are enabled in <a href="showfeatures.html">Show Features</a>. Display the selected Clinic's holidays and notes entered via the Edit Day window.</li>
<li><b>Clinic</b>: Only displays when Clinics are enabled. Select a clinic to show only schedules for providers/employees assigned to the clinic.  <ul>
<li>Defaults to the clinic selected in the <a href="mainmenu.html">Main Menu</a>. </li>
<li>If user is restricted to specific clinics, only accessible clinics are listed.</li>
<li>The selected clinic also affects the Providers and Employees lists. Only providers or employees assigned to the selected clinic are listed in these tabs.</li>
</ul>
</li>
<li><b>Limit to Ops in Clinic</b>: Only displays when Clinics are enabled. Check the box to show only schedules assigned to the clinic's <a href="operatories.html">Operatories</a> or for provider's assigned to the clinic's operatories. While in this view, Clear Week, and Copy/Paste options are disabled.</li>
<li><b>Providers(0) / Employees (0)</b>: Highlight the providers or employees to view in the Schedule grid. The number currently selected appears in parentheses. <ul>
<li>When<i> Select all provider/employees when loading schedules</i> is enabled in <a href="preferences.html">Preferences</a>, all providers and employees are selected when the Schedule window is opened. If the preference is disabled, no employees or providers are selected when the Schedule window is opened; employees or providers must be selected manually to view schedules.</li>
<li>When using Clinics, only displays providers or employees associated with the selected clinic. <ul>
<li>If a provider or user attached to an employee is assigned to multiple clinics, they are listed for any accessible clinic.</li>
<li>If an employee is not assigned to a <a href="securityusers.html">User</a>, they are only displayed when <i>Headquarters</i> is selected.</li>
</ul>
</li>
<li>Double-click a provider or employee to immediately update the Schedule grid to show only their schedule . </li>
</ul>
</li>
<li><b>Clear Week</b>: Delete all schedule entries for the selected providers and employees, for the selected week. <ul>
<li>To clear multiple weeks, users can also go to a blank week, copy it, and then repeat it. Ensure <i>Replace Existing</i> is checked (for example repeat it for 20 weeks to clear 20 weeks.)</li>
</ul>
</li>
<li><b>Week Filter</b>: Choose which days of the week are currently displayed on the schedule and copied to the clipboard. <ul>
<li>Work Week: Display only weekdays (Monday - Friday)</li>
<li>Full Week: Display entire week (Monday - Sunday)</li>
<li>Weekend: Display only weekends (Saturday and Sunday)</li>
</ul>
</li>
</ul>
<h2>Copy / Paste Schedule</h2>
<p>Use the Copy / Paste areas to quickly create or edit the schedule.</p>
<img src="images/schedulecopypaste.png" width="214" height="207"/><p class="MarginBottomZero">Copy: Copy a day or week's schedule to the clipboard. This tool is useful (with Paste/Repeat below) to quickly fill the schedule. </p>
<ul class="MarginBottomGap">
<li><b>Clipboard Contents</b>: Indicates the current date range copied to the clipboard that will be pasted/repeated.</li>
<li><b>Copy Day</b>: Highlight a day on the schedule and click to copy the currently selected providers/employees schedules to the clipboard.</li>
<li><b>Copy Week / Copy Weekend</b>: Highlight a day on the schedule and click to copy the currently selected provider/employee schedules to the clipboard.  <ul>
<li>If the Week Filter is set to Work Week or Full Week, shows Copy Week. </li>
<li>If the Week Filter is set to Weekend, shows Copy Weekend. </li>
<li>All the days of the calendar week corresponding with the <i>Week Filter</i> are copied (e.g., if set to Work Week, copies Monday-Friday).</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero">Paste: Paste the clipboard contents schedule to additional days or weeks. </p>
<ul class="MarginBottomGap">
<li><b>Warn on Provider Overlap</b>: Check to receive a warning when provider schedules overlap in assigned operatories when clicking Paste or Repeat.</li>
<li><b>Replace Existing</b>: Check this box to overwrite any existing schedules when a user clicks Paste or Repeat. There is a warning indicating the number of providers whose schedule will be replaced. </li>
<li>Click<b> Paste</b> to insert the clipboard contents into the currently selected day or week.</li>
<li>Enter a number and click <b>Repeat</b> to insert the copied schedule, starting at the currently selected date, for a specified number of days or weeks. If the clipboard contents contain a single day, the number corresponds to days. If the clipboard contents contain a week's schedule, the number corresponds to weeks.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>When using Clinics, the schedule for all Clinics is copied, regardless of the clinic selected in Filters.</li>
<li>Days marked as a holiday are not replaced when pasting/repeating a schedule. To enter a schedule for these days, it must be done manually from Edit Day. </li>
<li>See the Examples section of <a href="scheduleeditdaywindow.html">Schedule Edit</a> for further instructions on setting up various schedules.</li>
</ul>
</div>
</p>
<h2>Print Schedule</h2>
<p>Click <b>Print</b> to send a copy of the schedule displayed in the grid to the default printer. </p>
</div>
</div>
</body>
</html>```
