# File: ./www.opendental.com/manual232/operatories.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Operatories</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('operatories','+appointments','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/operatories.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/operatories.html" >v24.2</option><option value="https://www.opendental.com/manual241/operatories.html" >v24.1</option><option value="https://www.opendental.com/manual233/operatories.html" >v23.3</option><option value="https://www.opendental.com/manual232/operatories.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/operatories.html" >v23.1</option><option value="https://www.opendental.com/manual224/operatories.html" >v22.4</option><option value="https://www.opendental.com/manual223/operatories.html" >v22.3</option><option value="https://www.opendental.com/manual222/operatories.html" >v22.2</option><option value="https://www.opendental.com/manual221/operatories.html" >v22.1</option><option value="https://www.opendental.com/manual214/operatories.html" >v21.4</option><option value="https://www.opendental.com/manual213/operatories.html" >v21.3</option><option value="https://www.opendental.com/manual212/operatories.html" >v21.2</option><option value="https://www.opendental.com/manual211/operatories.html" >v21.1</option><option value="https://www.opendental.com/manual205/operatories.html" >v20.5</option><option value="https://www.opendental.com/manual204/operatories.html" >v20.4</option><option value="https://www.opendental.com/manual203/operatories.html" >v20.3</option><option value="https://www.opendental.com/manual202/operatories.html" >v20.2</option><option value="https://www.opendental.com/manual201/operatories.html" >v20.1</option><option value="https://www.opendental.com/manual194/operatories.html" >v19.4</option><option value="https://www.opendental.com/manual193/operatories.html" >v19.3</option><option value="https://www.opendental.com/manual192/operatories.html" >v19.2</option><option value="https://www.opendental.com/manual191/operatories.html" >v19.1</option><option value="https://www.opendental.com/manual184/operatories.html" >v18.4</option><option value="https://www.opendental.com/manual183/operatories.html" >v18.3</option><option value="https://www.opendental.com/manual182/operatories.html" >v18.2</option><option value="https://www.opendental.com/manual181/operatories.html" >v18.1</option><option value="https://www.opendental.com/manual174/operatories.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Operatories</p></div>
<div class="GeneralPageContent">
<p>Add and customize operatory options to meet the needs of the practice.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Appointments, Operatories.</p>
<img src="images/operatories.gif" width="915" height="327"/><p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our videos: <a href="https://youtu.be/jDnnrFnw3CU">Operatory and Schedule Setup</a> &amp; <a href="https://youtu.be/CBwNnjaxzlg">Operatory and Schedule Setup for Clinics</a></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Clinic</b>: Click to filter operatories by clinic.</li>
<li><b>Add</b>: Click to add a new operatory, or double-click an existing operatory to edit. See <a href="operatoryedit.html">Operatory Edit</a> for details.</li>
<li><b>Combine</b>: Select multiple operatories, then click to combine them. See Combine Operatories below for additional details.</li>
<li><b>Up / Down</b>: Use the Up and Down arrows to change the sort order of operatories. Operatory sort order affects the left to right order of operatories in <a href="appointmentviews.html">Appointment Views</a>. If a specific clinic is selected, the operatory being moved cannot belong to a Headquarters appointment view.</li>
</ul>
<h2>Combine Operatories</h2>
<p>Duplicate operatories can be combined. Combining affects all appointments in the selected operatories.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Select two or more operatories to combine.</li>
<li>Click <b>Combine</b>. A confirmation message will appear. </li>
<li>Click <b>OK</b> to continue. The Operatory Pick window will display.<br/><img src="images/operatoryPick.gif" width="890" height="202" class="ImageInParagraph"/></li>
<li>Highlight the operatory to keep, then click <b>OK</b>. <ul>
<li>If appointments are scheduled in both operatories but do not overlap, a message will ask to move the appointments into the merged operatory. Click <b>OK</b> to automatically move the appointments.</li>
<li>If appointments are scheduled in both operatories that do overlap, and the preference, <i>Appointments allow overlap</i>, is not enabled in Preferences, they will need to be manually moved before the operatories can combine. A warning message will appear. Click <b>OK</b> to view a list of conflicting appointments. This list can be printed. When all conflicts are resolved, reopen the Operatories window to combine.</li>
</ul>
</li>
</ol>
<p>Duplicate operatories will be marked hidden and appointments merged.</p>
<h2>Prompts to Change Provider</h2>
<p>When users move an appointment from the Pinboard to an operatory, or from one operatory to another, they may be prompted to change the provider. If operatories are assigned to default providers, or to provider time blocks in the schedule, this is often what they want to do.</p>
<p class="MarginBottomZero">To turn the prompt off: </p>
<ol class="MarginBottomGap">
<li>Do not assign providers to operatories (Provider or Hygienist).</li>
<li>Do not assign provider time blocks to operatories in the schedule.</li>
</ol>
<h2>Provider Logic</h2>
<p class="MarginBottomZero">A provider will be automatically assigned to an appointment using the logic in the following order: </p>
<ol class="MarginBottomGap">
<li>The provider scheduled in the operatory. See <a href="schedule.html">Schedule Setup</a>.</li>
<li>The provider assigned to the operatory. See above.</li>
<li>The patient's primary provider. See <a href="patientedit.html">Edit Patient Information</a>.</li>
</ol>
</div>
</div>
</body>
</html>```
