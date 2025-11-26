# File: ./www.opendental.com/manual243/apptprint.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Print Appointments</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('apptprint','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/apptprint.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/apptprint.html" >v24.2</option><option value="https://www.opendental.com/manual241/apptprint.html" >v24.1</option><option value="https://www.opendental.com/manual233/apptprint.html" >v23.3</option><option value="https://www.opendental.com/manual232/apptprint.html" >v23.2</option><option value="https://www.opendental.com/manual231/apptprint.html" >v23.1</option><option value="https://www.opendental.com/manual224/apptprint.html" >v22.4</option><option value="https://www.opendental.com/manual223/apptprint.html" >v22.3</option><option value="https://www.opendental.com/manual222/apptprint.html" >v22.2</option><option value="https://www.opendental.com/manual221/apptprint.html" >v22.1</option><option value="https://www.opendental.com/manual214/apptprint.html" >v21.4</option><option value="https://www.opendental.com/manual213/apptprint.html" >v21.3</option><option value="https://www.opendental.com/manual212/apptprint.html" >v21.2</option><option value="https://www.opendental.com/manual211/apptprint.html" >v21.1</option><option value="https://www.opendental.com/manual205/apptprint.html" >v20.5</option><option value="https://www.opendental.com/manual204/apptprint.html" >v20.4</option><option value="https://www.opendental.com/manual203/apptprint.html" >v20.3</option><option value="https://www.opendental.com/manual202/apptprint.html" >v20.2</option><option value="https://www.opendental.com/manual201/apptprint.html" >v20.1</option><option value="https://www.opendental.com/manual194/apptprint.html" >v19.4</option><option value="https://www.opendental.com/manual193/apptprint.html" >v19.3</option><option value="https://www.opendental.com/manual192/apptprint.html" >v19.2</option><option value="https://www.opendental.com/manual191/apptprint.html" >v19.1</option><option value="https://www.opendental.com/manual184/apptprint.html" >v18.4</option><option value="https://www.opendental.com/manual183/apptprint.html" >v18.3</option><option value="https://www.opendental.com/manual182/apptprint.html" >v18.2</option><option value="https://www.opendental.com/manual181/apptprint.html" >v18.1</option><option value="https://www.opendental.com/manual174/apptprint.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Print Appointments</p></div>
<div class="GeneralPageContent">
<p>The appointment schedule or Routing Slips can be printed for the day as needed.</p>
<p>In the <a href="appointments.html">Appointments Module</a>, in the Toolbar, click <b>Print</b>.</p>
<img src="images/apptPrintSetup.png" width="417" height="465"/><p>From the Appt Print Setup window, customize the print settings for the appointment schedule or print Routing Slips for the day.</p>
<h2>Print Appointments</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Start / Stop Time</b>: Enter the time span to print appointments.</li>
<li><b>Operatories per page</b>: Directly affects how many pages are printed and scales the size of the Operatories printed. More Operatories per page results in fewer printed pages. If the <i>Operatories per page</i> exceeds the number of Operatories in the selected <a href="appointmentviews.html">Appointment View</a>, the printout includes blank space. Adjust the <i>Operatories per page</i> to match the number of Operatories in the Appointment View to scale the full page.</li>
<li><b>Font Size</b>: Affects how many pages are printed.</li>
<li><b>Color</b>: Determine how to print the appointments. Useful for saving colored ink.</li>
<ul>
<li><b>Full color</b>: Operatories, Blockouts, and appointments boxes print in solid color as they appear on screen. </li>
<li><b>Less color</b>: Operatories with Blockouts with be printed with a crosshatch in the corresponding Blockout color. Closed Operatories print with a crosshatch in the corresponding color. Appointments print in white.</li>
<li><b>Grayscale</b>: Printed without color. Operatories with Blockouts show a crosshatch and closed Operatories show a crosshatch going the opposite direction. Appointments print in white. </li>
</ul>
<li><b>Orientation</b>: Determine the orientation to print the schedule. <ul>
<li><b>Landscape</b>: Print in landscape.</li>
<li><b>Portrait</b>: Print in portrait.</li>
</ul>
</li>
<li><b>Save</b>: Save settings for the next time the schedule is printed.</li>
<li><b>Preview</b>: Review the print output.</li>
<li><b>Print</b>: Print the appointment schedule for the day. Prints the currently selected Appointment View. </li>
</ul>
<p><div class="Note">Note: The current setting for Day or Week view in the Appointments Module determines if a daily or weekly list is printed. Time increments and rows per increment set in <a href="appointmentviewsetup.html">Appointment View Setup</a> can affect printing. If too many pages are still printing, increase the time increment or set the rows per increment to one.</div>
</p>
<h2>Print Routing Slips</h2>
<p class="MarginBottomZero"> Print Routing Slips for appointments on the schedule for the selected day. Not available if Headquarters is the selected Clinic, or if Week view is selected. </p>
<ul class="MarginBottomGap">
<li><b>All for Day</b>: Print all Routing Slips for appointments assigned to the selected Clinic on the selected day.</li>
<li><b>Current View Only</b>: Print Routing Slips for the selected Appointment View only.</li>
</ul>
<p>If multiple <a href="sheetsroutingslips.html">Routing Slip Layouts</a> exist in <a href="sheets.html">Sheets</a>, the top-most option in the custom grid is used. If there are no custom Routing Slip layouts, the internal Routing Sheet is used. </p>
</div>
</div>
</body>
</html>```
