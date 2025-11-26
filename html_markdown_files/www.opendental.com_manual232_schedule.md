# File: ./www.opendental.com/manual232/schedule.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Schedule Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
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
						}"><option value="https://www.opendental.com/manual243/schedule.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/schedule.html" >v24.2</option><option value="https://www.opendental.com/manual241/schedule.html" >v24.1</option><option value="https://www.opendental.com/manual233/schedule.html" >v23.3</option><option value="https://www.opendental.com/manual232/schedule.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/schedule.html" >v23.1</option><option value="https://www.opendental.com/manual224/schedule.html" >v22.4</option><option value="https://www.opendental.com/manual223/schedule.html" >v22.3</option><option value="https://www.opendental.com/manual222/schedule.html" >v22.2</option><option value="https://www.opendental.com/manual221/schedule.html" >v22.1</option><option value="https://www.opendental.com/manual214/schedule.html" >v21.4</option><option value="https://www.opendental.com/manual213/schedule.html" >v21.3</option><option value="https://www.opendental.com/manual212/schedule.html" >v21.2</option><option value="https://www.opendental.com/manual211/schedule.html" >v21.1</option><option value="https://www.opendental.com/manual205/schedule.html" >v20.5</option><option value="https://www.opendental.com/manual204/schedule.html" >v20.4</option><option value="https://www.opendental.com/manual203/schedule.html" >v20.3</option><option value="https://www.opendental.com/manual202/schedule.html" >v20.2</option><option value="https://www.opendental.com/manual201/schedule.html" >v20.1</option><option value="https://www.opendental.com/manual194/schedule.html" >v19.4</option><option value="https://www.opendental.com/manual193/schedule.html" >v19.3</option><option value="https://www.opendental.com/manual192/schedule.html" >v19.2</option><option value="https://www.opendental.com/manual191/schedule.html" >v19.1</option><option value="https://www.opendental.com/manual184/schedule.html" >v18.4</option><option value="https://www.opendental.com/manual183/schedule.html" >v18.3</option><option value="https://www.opendental.com/manual182/schedule.html" >v18.2</option><option value="https://www.opendental.com/manual181/schedule.html" >v18.1</option><option value="https://www.opendental.com/manual174/schedule.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Schedule Setup</p></div>
<div class="GeneralPageContent">
<p>Schedule setup allows users to view and enter all provider and employee schedules. </p>
<p>To view the schedule, in the <a href="mainmenu.html">Main Menu</a>, click Setup, <b>Schedules</b>.</p>
<img src="images/schedule.gif" width="915" height="736"/><p>Alternatively, in the <a href="manage.html">Manage Module</a>, select a specific employee(s). Click <b>View Schedule</b>. </p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our videos: <a href="https://youtu.be/jDnnrFnw3CU">Operatory and Schedule Setup</a> &amp; <a href="https://youtu.be/CBwNnjaxzlg">Operatory and Schedule Setup for Clinics</a></p>
<h2>About</h2>
<p>Offices can define any kind of rotating or alternating schedule they want. From the Schedule window, enter individual work hours, holidays, lunch hours, and staff meetings. </p>
<p>To edit schedules, the <i>Schedules - Practice and Provider </i>security permission is required. The schedule may be blank until a provider or employee is selected and refresh is clicked.</p>
<p>Once schedules are entered, open/closed hours will be indicated in the Appointments Module with the background colors set in <a href="definitionsappointmentcolors.html">Definitions: Appointment Colors</a>.</p>
<h2>Schedule Grid</h2>
<p>Each day is represented by one cell. Today's date and schedule shows in red text. </p>
<img src="images/scheduleGrid.gif" width="768" height="303"/><p>Double-click a day to open the <a href="scheduleeditdaywindow.html">Schedule Edit</a>. Add employees or provider time to the schedule, or change the schedule for one day.</p>
<h2>Filters</h2>
<p>The filter options on the left control what shows in each cell.</p>
<img src="images/scheduleFilters.gif" width="205" height="490"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Refresh</b>: Make changes to filters, then click to refresh the Schedule Grid.</li>
<li><b>From/To Dates</b>: The date range currently displayed on the window.</li>
<li><b>Show Practice Holidays and Notes</b>: Show practice notes and holidays entered via the Edit Day window.</li>
<li><b>Show Clinic Holidays and Notes</b>: Only displays when Clinics is enabled. Show the selected Clinic's holidays and notes entered via the Edit Day window.</li>
<li><b>Clinic</b>: Only displays when Clinics is enabled. Select a Clinic and only its scheduled providers will show. The default clinic is the one selected in the <a href="mainmenu.html">Main Menu</a>. Users must have access to a Clinic to view its schedule. Initially the schedule will only show dates, notes, or holidays. Select providers and employees to populate the schedule with provider and employee names and hours.</li>
<li><b>Limit to Ops in Clinic</b>: Only displays when Clinics is enabled. Check the box to filter to operatories with the selected Clinic and view the scheduled time blocks. While in this view, all buttons in the lower left are disabled and schedules can't be edited.</li>
<li><b>Providers() / Employees ()</b>: View providers or employees. When using Clinics, only displays providers or employees associated with the selected Clinic. <ul>
<li>When the <a href="preferences.html">Preference</a>, <i> Select all provider/employees when loading schedules</i>, is enabled, all providers and employees will be selected when the Schedule window is opened. If the preference is disabled, no employees or providers will be selected when the Schedule window is opened; employees or providers must be selected manually to view schedules.</li>
<li>Double-click a provider or employee to show their schedule only. Click and drag to select multiple providers/employees, or ctrl-click to choose multiple, then click Refresh to view schedules. The number currently selected appears in parentheses.</li>
</ul>
</li>
<li><b>Clear Week</b>: Delete all schedule entries for the selected providers and employees, for the selected week. <ul>
<li>To clear multiple weeks, users can also go to a blank week, copy it, then repeat it. Make sure the <i>Replace Existing</i> box is checked (for example repeat it for 20 weeks to clear 20 weeks.)</li>
</ul>
</li>
<li><b>Week Filter</b>: Choose what days of the weeks are currently displayed on the schedule.  <ul>
<li>Work Week: Display only weekdays (Monday - Friday)</li>
<li>Full Week: Display entire week (Monday - Sunday)</li>
<li>Weekend: Display only weekends (Saturday and Sunday)</li>
</ul>
</li>
</ul>
<h2>Copy / Paste Schedule</h2>
<p>Use the Copy / Paste areas to quickly create or edit the schedule.</p>
<img src="images/schedulecopypaste.gif" width="206" height="241"/><p class="MarginBottomZero"><b>Copy</b>: Copy a day or week's schedule to the clipboard. This is a useful tool (with Paste/Repeat below) to quickly fill the schedule. </p>
<ul class="MarginBottomGap">
<li>Copy Day: Copy the selected day only.</li>
<li>Copy Week: Copy the entire week based on the selected day.</li>
</ul>
<p class="MarginBottomZero"><b>Paste</b>: Paste the copied day or week's schedule to a new day or week. Or repeatedly copy it for a specific number of days or weeks into the future. </p>
<ul class="MarginBottomGap">
<li>Warn on Provider Overlap: Receive a warning when provider schedules overlap in assigned operatories when a user clicks Paste or Repeat. Checked by default.</li>
<li>Replace Existing: Check this box to overwrite any existing schedules when a user clicks Paste or Repeat.</li>
<li>Paste: Paste the copied day or week to the selected day or week.</li>
<li>Repeat: Paste the copied day or week repeatedly for a specific number of days or weeks. Enter the number of days or weeks next to #.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>When using Clinics, the schedule for all Clinics is copied regardless of the Clinic selected in Filters.</li>
<li>When pasting over an existing schedule, a warning will popup indicating the number of providers whose schedule will be replaced.</li>
<li>Days marked as a holiday will not be replaced when pasting a schedule. To enter a schedule onto these days, do so manually. </li>
<li>See the Examples section of <a href="scheduleeditdaywindow.html">Schedule Edit</a> for further instruction on setting up various schedules.</li>
</ul>
</div>
</p>
<h2>Print Schedule</h2>
<img src="images/scheduleprint.gif" width="105" height="41"/><p><b>Print</b>: Print the schedule for the selected date range.</p>
</div>
</div>
</body>
</html>```
