# File: ./www.opendental.com/manual232/timeclock.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Time Clock</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('timeclock','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/timeclock.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/timeclock.html" >v24.2</option><option value="https://www.opendental.com/manual241/timeclock.html" >v24.1</option><option value="https://www.opendental.com/manual233/timeclock.html" >v23.3</option><option value="https://www.opendental.com/manual232/timeclock.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/timeclock.html" >v23.1</option><option value="https://www.opendental.com/manual224/timeclock.html" >v22.4</option><option value="https://www.opendental.com/manual223/timeclock.html" >v22.3</option><option value="https://www.opendental.com/manual222/timeclock.html" >v22.2</option><option value="https://www.opendental.com/manual221/timeclock.html" >v22.1</option><option value="https://www.opendental.com/manual214/timeclock.html" >v21.4</option><option value="https://www.opendental.com/manual213/timeclock.html" >v21.3</option><option value="https://www.opendental.com/manual212/timeclock.html" >v21.2</option><option value="https://www.opendental.com/manual211/timeclock.html" >v21.1</option><option value="https://www.opendental.com/manual205/timeclock.html" >v20.5</option><option value="https://www.opendental.com/manual204/timeclock.html" >v20.4</option><option value="https://www.opendental.com/manual203/timeclock.html" >v20.3</option><option value="https://www.opendental.com/manual202/timeclock.html" >v20.2</option><option value="https://www.opendental.com/manual201/timeclock.html" >v20.1</option><option value="https://www.opendental.com/manual194/timeclock.html" >v19.4</option><option value="https://www.opendental.com/manual193/timeclock.html" >v19.3</option><option value="https://www.opendental.com/manual192/timeclock.html" >v19.2</option><option value="https://www.opendental.com/manual191/timeclock.html" >v19.1</option><option value="https://www.opendental.com/manual184/timeclock.html" >v18.4</option><option value="https://www.opendental.com/manual183/timeclock.html" >v18.3</option><option value="https://www.opendental.com/manual182/timeclock.html" >v18.2</option><option value="https://www.opendental.com/manual181/timeclock.html" >v18.1</option><option value="https://www.opendental.com/manual174/timeclock.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Time Clock</p></div>
<div class="GeneralPageContent">
<p>Employees can use the time clock to clock in and out of work.</p>
<p>In the <a href="manage.html">Manage Module</a>, at the upper-right, is the Time Clock area.</p>
<img src="images/timeClock.png" width="466" height="280"/><p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our webinar: <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynCnp3kAZYRTmpCvqK-VryAc1">Time Cards</a>.</p>
<p class="MarginBottomZero">Before using the time clock, the following tasks must be completed. </p>
<ol class="MarginBottomGap">
<li>Add employees. See <a href="employees.html">Employees</a>.</li>
<li>Create user profiles for each employee. See <a href="securityusers.html">User Edit</a>.</li>
<li>Add pay periods in <a href="timecardsetup.html">Time Card Setup</a>.</li>
</ol>
<h2>Buttons</h2>
<p><b>Manage:</b> Manage employee time cards, calculate daily/weekly totals, and run reports. See <a href="timecardmanage.html">Manage Time Cards</a>. Requires <i>Edit All Time Cards </i><a href="permissions.html">Permission</a>. <br/><b>View Time Card:</b> View or edit the selected employee's <a href="timeclockedit.html">Time Card</a>. Always enabled for the employee associated with the logged-in user. Requires <i>Edit All Time Cards</i> for use with other employees. <br/><b>View Breaks:</b> View or edit the selected employee's breaks in the Time Card. Always enabled for the employee associated with the logged-in user. Requires <i>Edit All Time Cards</i> for use with other employees.<br/><b>View Schedule:</b> Open <a href="scheduleview.html">Schedule</a> for the selected employees.</p>
<p><b>Server Time</b>: The server time is used to time stamp all events in the database (commlogs, audit trail, tasks, etc). This time is pulled from the server hosting the Open Dental database. If the time is changed on the server, a restart of the <a href="mysql.html">MySQL</a> service may be required.</p>
<p> By default, the time displayed is the time of the server. To use a workstation's local time instead, see <a href="miscsetup.html">Miscellaneous Setup</a>.</p>
<p class="MarginBottomZero"><b>Clock In</b>: Click an employee, then Clock In.<br/><b>Clock Out For</b>: Click an employee, select a status (Home, Lunch, Break), then click Clock Out For. </p>
<ul class="MarginBottomGap">
<li><b>Home</b>: Use this status when leaving for the day. The clock out time will be recorded on the time card.</li>
<li><b>Lunch</b>: Use this status when clocking out for an unpaid break. The clock out time will be recorded on the time card. <ul>
<li>Lunch is hidden when <i>Allow paid 30 minute breaks</i> is unchecked in Preferences. Use the Break status to clock out for unpaid breaks instead.</li>
</ul>
</li>
<li><b>Break</b>: The behavior of this status is determined by the preference, <i>Allow paid 30 minute breaks</i>. <ul>
<li>If paid breaks are allowed, use this status to clock out for paid breaks. The length of the break is tracked in the time card under Breaks. To determine if break time that exceeds 30 minute is considered paid versus unpaid, change the setting in Time Card Setup for <i>Calc Daily button makes adjustments if breaks over 30 minutes</i>.</li>
<li>If paid breaks are not allowed, use this status to clock out for unpaid breaks. The clock out time will be recorded on the time card.</li>
</ul>
</li>
</ul>
<p><div class="Note">Note: Users without the <i>Edit All Time Cards </i> Permission see Clock In/Clock Out For enabled for the employee associated with their user only. Users with the <i>Edit All Time Cards</i> Permission see the Clock In/Clock Out For enabled for all employees.</div>
</p>
<h2>Employee Grid</h2>
<p>For an employee to list in the grid, they must be added in the <a href="employees.html">Employees</a> list.</p>
<p>When using clinics, the clinic selected in the Main Menu determines which employees are listed. When clocking in, this clinic is associated to the clock in event and subsequent clock out events.</p>
<p><b>Filter by Name</b>: Search for an employee to narrow down Employee list. Automatically refreshes while typing.</p>
<p class="MarginBottomZero">Status: Displays current status of the employee:  </p>
<ul class="MarginBottomGap">
<li>Home: Employee is clocked out.</li>
<li>Working: Employee is clocked in.</li>
<li>Break: Employee is clocked out for break.</li>
<li>Lunch: Employee is clocked out for lunch.</li>
<li>Manual Entry: An employee edited the time card so the clock out event happens in the future.</li>
</ul>
</div>
</div>
</body>
</html>```
