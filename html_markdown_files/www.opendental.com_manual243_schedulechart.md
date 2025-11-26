# File: ./www.opendental.com/manual243/schedulechart.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Schedule Graph</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('schedulechart','schedule','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/schedulechart.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/schedulechart.html" >v24.2</option><option value="https://www.opendental.com/manual241/schedulechart.html" >v24.1</option><option value="https://www.opendental.com/manual233/schedulechart.html" >v23.3</option><option value="https://www.opendental.com/manual232/schedulechart.html" >v23.2</option><option value="https://www.opendental.com/manual231/schedulechart.html" >v23.1</option><option value="https://www.opendental.com/manual224/schedulechart.html" >v22.4</option><option value="https://www.opendental.com/manual223/schedulechart.html" >v22.3</option><option value="https://www.opendental.com/manual222/schedulechart.html" >v22.2</option><option value="https://www.opendental.com/manual221/schedulechart.html" >v22.1</option><option value="https://www.opendental.com/manual214/schedulechart.html" >v21.4</option><option value="https://www.opendental.com/manual213/schedulechart.html" >v21.3</option><option value="https://www.opendental.com/manual212/schedulechart.html" >v21.2</option><option value="https://www.opendental.com/manual211/schedulechart.html" >v21.1</option><option value="https://www.opendental.com/manual205/schedulechart.html" >v20.5</option><option value="https://www.opendental.com/manual204/schedulechart.html" >v20.4</option><option value="https://www.opendental.com/manual203/schedulechart.html" >v20.3</option><option value="https://www.opendental.com/manual202/schedulechart.html" >v20.2</option><option value="https://www.opendental.com/manual201/schedulechart.html" >v20.1</option><option value="https://www.opendental.com/manual194/schedulechart.html" >v19.4</option><option value="https://www.opendental.com/manual193/schedulechart.html" >v19.3</option><option value="https://www.opendental.com/manual192/schedulechart.html" >v19.2</option><option value="https://www.opendental.com/manual191/schedulechart.html" >v19.1</option><option value="https://www.opendental.com/manual184/schedulechart.html" >v18.4</option><option value="https://www.opendental.com/manual183/schedulechart.html" >v18.3</option><option value="https://www.opendental.com/manual182/schedulechart.html" >v18.2</option><option value="https://www.opendental.com/manual181/schedulechart.html" >v18.1</option><option value="https://www.opendental.com/manual174/schedulechart.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Schedule Graph</p></div>
<div class="GeneralPageContent">
<p>A graph of the Schedule is available to give users a visual representation of each provider and employee's work schedule for a single day.</p>
<p>In <a href="schedule.html">Schedule Setup</a>, double-click a day. Click the Graph tab.</p>
<img src="images/scheduleEditDayGraph.png" width="915" height="680"/><p>The graph is divided into 15-minute time segments. A vertical bar indicates the current time.</p>
<p><b>Date</b>: The upper-left corner shows the selected date. Click the arrows to move forward or back one day.</p>
<p><b>Search</b>: This function only works from the List tab.</p>
<p><b>Clinic</b>: Only available when Clinics are enabled in <a href="showfeatures.html">Show Features</a>. Select a clinic to see only schedules for providers/employees assigned to the clinic. If user is restricted to specific clinics, only accessible clinics are listed.</p>
<p><b>Sort</b>: Choose the order schedules are displayed in the chart (Start Time, Stop Time, or Name).</p>
<p class="MarginBottomZero"><b>Filter</b>: Determine what information is displayed on the chart.  </p>
<ul class="MarginBottomGap">
<li>Notes: Display any practice or clinic notes. These are always shown first.</li>
<li>Providers: Display all scheduled providers. These are grouped after notes and sorted based on the selected sort behavior. as a group.</li>
<li>Employees: Display all scheduled employees. These are grouped after providers and sorted based on selected sort behavior. Employees are identified by name, and any notes entered in their time block show.</li>
</ul>
<p class="MarginBottomZero"><b>Scale</b>: Select the start and end hour to display. </p>
<ul class="MarginBottomGap">
<li>0 = 12:00 AM the currently selected date.</li>
<li>12 = 12:00 PM the currently selected date.</li>
<li>24 = 12:00 AM the following date.</li>
</ul>
<p><b>Graph</b>: Notes or holidays are displayed across the entire scale with any text added to the Note field. Provider schedules display the provider abbreviation and any schedule note. Employee schedules display the employee first name and any schedule note.</p>
<p>For instructions on adding notes, holidays, or schedules, see <a href="scheduleeditdaywindow.html">Schedule Edit</a>.</p>
<p>If <b>Delete</b> is clicked from the Graph tab, the entire day's schedule is deleted.</p>
</div>
</div>
</body>
</html>```
