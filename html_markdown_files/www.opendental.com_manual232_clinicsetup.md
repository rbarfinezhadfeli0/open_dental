# File: ./www.opendental.com/manual232/clinicsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Clinic List</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('clinicsetup','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/clinicsetup.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/clinicsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/clinicsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/clinicsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/clinicsetup.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/clinicsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/clinicsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/clinicsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/clinicsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/clinicsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/clinicsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/clinicsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/clinicsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/clinicsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/clinicsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/clinicsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/clinicsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/clinicsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/clinicsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/clinicsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/clinicsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/clinicsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/clinicsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/clinicsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/clinicsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/clinicsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/clinicsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/clinicsetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Clinic List</p></div>
<div class="GeneralPageContent">
<p>Use the Clinics list to view clinics, move patients between clinics, or add new clinics.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Lists, <b>Clinics</b>.</p>
<img src="images/clinics.png" width="915" height="379"/><p>All <a href="clinics.html">Clinics</a> that have been added show in the Clinics list. The list of clinics can be reordered and patients can be moved from one clinic to another.</p>
<p><b>Show Hidden</b>: Check/uncheck to display/hide hidden clinics in the Clinics list.</p>
<p class="MarginBottomZero"><b>Clinics</b> grid: Lists added Clinics. Hidden Clinics are displayed depending on the <i>Show Hidden</i> checkbox.  </p>
<ul class="MarginBottomGap">
<li><b>Pat Count</b>: Number of patients assigned to the Clinic. Counts patients who have a status of <i>patient</i>, <i>inactive</i>, or <i>prospective</i></li>
<li>Double-click a row to open a <a href="cliniceditwindow.html">Clinic</a> to view additional details or edit.</li>
<li>When patients or employees do not have a clinic assignment, they default to the <i>Headquarters</i>. This is not an actual Clinic and cannot be edited nor hidden.</li>
</ul>
<p class="MarginBottomZero"><b>Move Patients</b>: Reassign patients to another Clinic.  </p>
<ol class="MarginBottomGap">
<li>Highlight the Clinic from which patients are being moved (e.g., the current clinic). </li>
<li>Click <b>[...]</b>to select the Clinic to which the patients are to be moved (i.e., the new clinic).</li>
<li>Click <b>Move</b>. </li>
<li>A confirmation message is shown. Click <b>OK</b> to move the patients.</li>
<li>A message indicates when the move is complete. Click <b>Done</b> to close. The patient count for the Clinic chosen in step one should now be zero. </li>
</ol>
<p class="MarginBottomZero"><b>Clinic Order</b>: The order of clinics in the Clinics list affects the order in other dropdowns throughout the program. By default, clinics are sorted in the order they are created. </p>
<ul class="MarginBottomGap">
<li><b>Up</b> / <b>Down</b>: Highlight a Clinic in the grid and click to reorder in the list.</li>
<li><b>Order Alphabetical</b>: Check this box to automatically sort the clinics in alphabetical order. Disables <b>Up</b> / <b>Down</b> buttons. Any new clinics will also be automatically sorted alphabetically.</li>
</ul>
<p><b>Select All</b>: Highlights all Clinics in the grid</p>
<p><b>Select None</b>: If any Clinics are currently highlighted in the grid, removes the selection.</p>
</div>
</div>
</body>
</html>```
