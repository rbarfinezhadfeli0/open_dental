# File: ./www.opendental.com/manual232/appointmentviews.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Appointment Views</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('appointmentviews','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/appointmentviews.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/appointmentviews.html" >v24.2</option><option value="https://www.opendental.com/manual241/appointmentviews.html" >v24.1</option><option value="https://www.opendental.com/manual233/appointmentviews.html" >v23.3</option><option value="https://www.opendental.com/manual232/appointmentviews.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/appointmentviews.html" >v23.1</option><option value="https://www.opendental.com/manual224/appointmentviews.html" >v22.4</option><option value="https://www.opendental.com/manual223/appointmentviews.html" >v22.3</option><option value="https://www.opendental.com/manual222/appointmentviews.html" >v22.2</option><option value="https://www.opendental.com/manual221/appointmentviews.html" >v22.1</option><option value="https://www.opendental.com/manual214/appointmentviews.html" >v21.4</option><option value="https://www.opendental.com/manual213/appointmentviews.html" >v21.3</option><option value="https://www.opendental.com/manual212/appointmentviews.html" >v21.2</option><option value="https://www.opendental.com/manual211/appointmentviews.html" >v21.1</option><option value="https://www.opendental.com/manual205/appointmentviews.html" >v20.5</option><option value="https://www.opendental.com/manual204/appointmentviews.html" >v20.4</option><option value="https://www.opendental.com/manual203/appointmentviews.html" >v20.3</option><option value="https://www.opendental.com/manual202/appointmentviews.html" >v20.2</option><option value="https://www.opendental.com/manual201/appointmentviews.html" >v20.1</option><option value="https://www.opendental.com/manual194/appointmentviews.html" >v19.4</option><option value="https://www.opendental.com/manual193/appointmentviews.html" >v19.3</option><option value="https://www.opendental.com/manual192/appointmentviews.html" >v19.2</option><option value="https://www.opendental.com/manual191/appointmentviews.html" >v19.1</option><option value="https://www.opendental.com/manual184/appointmentviews.html" >v18.4</option><option value="https://www.opendental.com/manual183/appointmentviews.html" >v18.3</option><option value="https://www.opendental.com/manual182/appointmentviews.html" >v18.2</option><option value="https://www.opendental.com/manual181/appointmentviews.html" >v18.1</option><option value="https://www.opendental.com/manual174/appointmentviews.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Appointment Views</p></div>
<div class="GeneralPageContent">
<p>Quickly change the information and Operatories displayed in the Appointments Module by switching the Appointment View.</p>
<p>In the <a href="appointments.html">Appointments Module</a>, on the right, is the Appointment View dropdown.</p>
<img src="images/apptviewSelect.png" width="169" height="96"/><p>Appointment Views determine which Operatories, providers, and appointment information displays in the Appointments Module. They also determine the default start time when Open Dental is launched. Multiple views can be set up with any combination of Operatories, providers, and patient or appointment information.</p>
<p class="MarginBottomZero">Also see:  </p>
<ul class="MarginBottomGap">
<li><a href="appointmentviewsetup.html">Appointment View Setup</a></li>
<li><a href="appointmentvieweditwindow.html">Appointment View Edit</a> (description of all options)</li>
<li><a href="apptviewproccolors.html">Proc Appt Colors</a></li>
</ul>
<p>Select the Appointment View using the View dropdown on the right side of the Appointments Module or press an associated function key (F1, F2, etc.)</p>
<p>The appointment schedule immediately changes to reflect the Appointment View settings.</p>
<p class="MarginBottomZero">Appointment View examples: </p>
<ul class="MarginBottomGap">
<li>HIPAA-compliant view (no PHI)</li>
<li>A view for each provider</li>
<li>A view for each Operatory</li>
<li>Hygiene appointments</li>
</ul>
<p>When using <a href="clinics.html">Clinics</a>, changing the Clinic in the Main Menu changes the Appointment View.</p>
<p class="MarginBottomZero">The default Appointment View when a user logs on follows logic in this order: </p>
<ol class="MarginBottomGap">
<li>The same view active the last time the user logged out.</li>
<li>The view last active on the workstation.</li>
<li>The first available view that is not <i>none</i>.</li>
<li>If no other views, the <i>none</i> view.</li>
</ol>
<p>The <i>None</i> view cannot be edited. When the view is set to <i>none</i>, the view shows all providers, all operatories, patient first and last name, and procedures attached to the appointment. If Clinics are enabled, and a user selects <i>none</i> on Headquarters, they are prompted to select a view.</p>
</div>
</div>
</body>
</html>```
