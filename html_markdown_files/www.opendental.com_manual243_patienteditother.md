# File: ./www.opendental.com/manual243/patienteditother.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Edit Patient Information: Other Tab</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('patienteditother','patientedit','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/patienteditother.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/patienteditother.html" >v24.2</option><option value="https://www.opendental.com/manual241/patienteditother.html" >v24.1</option><option value="https://www.opendental.com/manual233/patienteditother.html" >v23.3</option><option value="https://www.opendental.com/manual232/patienteditother.html" >v23.2</option><option value="https://www.opendental.com/manual231/patienteditother.html" >v23.1</option><option value="https://www.opendental.com/manual224/patienteditother.html" >v22.4</option><option value="https://www.opendental.com/manual223/patienteditother.html" >v22.3</option><option value="https://www.opendental.com/manual222/patienteditother.html" >v22.2</option><option value="https://www.opendental.com/manual221/patienteditother.html" >v22.1</option><option value="https://www.opendental.com/manual214/patienteditother.html" >v21.4</option><option value="https://www.opendental.com/manual213/patienteditother.html" >v21.3</option><option value="https://www.opendental.com/manual212/patienteditother.html" >v21.2</option><option value="https://www.opendental.com/manual211/patienteditother.html" >v21.1</option><option value="https://www.opendental.com/manual205/patienteditother.html" >v20.5</option><option value="https://www.opendental.com/manual204/patienteditother.html" >v20.4</option><option value="https://www.opendental.com/manual203/patienteditother.html" >v20.3</option><option value="https://www.opendental.com/manual202/patienteditother.html" >v20.2</option><option value="https://www.opendental.com/manual201/patienteditother.html" >v20.1</option><option value="https://www.opendental.com/manual194/patienteditother.html" >v19.4</option><option value="https://www.opendental.com/manual193/patienteditother.html" >v19.3</option><option value="https://www.opendental.com/manual192/patienteditother.html" >v19.2</option><option value="https://www.opendental.com/manual191/patienteditother.html" >v19.1</option><option value="https://www.opendental.com/manual184/patienteditother.html" >v18.4</option><option value="https://www.opendental.com/manual183/patienteditother.html" >v18.3</option><option value="https://www.opendental.com/manual182/patienteditother.html" >v18.2</option><option value="https://www.opendental.com/manual181/patienteditother.html" >v18.1</option><option value="https://www.opendental.com/manual174/patienteditother.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Edit Patient Information: Other Tab</p></div>
<div class="GeneralPageContent">
<p>The Edit Patient Information, Other tab displays miscellaneous patient information.</p>
<p>In the <a href="patientedit.html">Edit Patient Information</a> window click the Other tab.</p>
<img src="images/patientEditOther.gif" width="467" height="267"/><p class="MarginBottomZero"><b>SS#</b>: Social Security Number. Dashes are automatically added.  </p>
<ul class="MarginBottomGap">
<li>If the <i>Mask patient Social Security Numbers</i> preference is enabled, the social security number masks the first 5 digits.</li>
<li>Users with the <i>Patient Social Security Number View </i> permission can click <b>View</b> to see the full number.</li>
<li>Users without the <i>Patient Social Security Number View </i> permission can only see the last four digits.</li>
</ul>
<p><b>Date of First Visit</b>: This field is usually updated automatically based on the first appointment or procedure status. See below for <i>Date of First Visit</i> logic.</p>
<p><b>Student Status if Dependent Over 19 (for Ins)</b>: Choose a student status for the patient. Used for insurance claims.</p>
<p><b>College Name</b>: Enter the name of the college for the patient. Used for insurance claims.</p>
<p><b>Signed Truth in Lending</b>: Check if patient has signed a Truth in Lending document.</p>
<p><b>DoseSpot Access Medication History Consent</b>: Only visible if DoseSpot is enabled. When checked, consent is given to DoseSpot to access the patient's medication history via SureScripts. Only check this box if the patient has given consent. Consent information is passed to Dosespot from SureScripts when OK is clicked in the Edit Patient Information window. Once consent is given, it cannot be revoked, so the box cannot be unchecked. </p>
<h2>Date of First Visit Logic</h2>
<p>This logic assumes that procedures are attached to appointments. </p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>When a procedure is charted, regardless of status, and there are no other completed procedures and the <i>Date of First Visit</i> is blank, then the <i>Date of First Visit</i> is updated to match the appointment date, or the procedure date if not attached to an appointment.</li>
<li> When charting a procedure and the procedure status becomes Completed, the <i>Date of First Visit</i> is populated by the date of the completed procedure if the <i>Date of First Visit</i> is blank or less than seven days old.</li>
<li> If there is an appointment the <i>Date of First Visit</i> is populated by the day but if the appointment is deleted and there are no completed procedures then the <i>Date of First Visit</i> is cleared.</li>
<li> If an appointment is flagged as a New Patient Appointment and there are no completed procedures, the <i>Date of First Visit</i> is changed when the appointment moves to match the new appointment date. </li>
</ol>
<p class="MarginBottomZero">Typically, the <i>Date of First Visit</i> is today's date but the following are times in which the date can be a date other than today: </p>
<ol class="MarginBottomGap">
<li>Adding a Repeating Charge for a future charge date changes the <i>Date of First Visit</i> to the first Repeating Charge date. </li>
<li>Scheduling an appointment for a future or past day changes the <i>Date of First Visit</i> to match the day selected in the Appointment Module. </li>
<li>Setting a procedure complete in the Chart Module uses the oldest procedure date. </li>
<li>Adding procedures through Appointment Types sets the <i>Date of First Visit</i> to the date of the appointment the procedures are attached to. </li>
<li>Adding a procedure using Quick Add buttons sets the <i>Date of First Visit</i> to the date of the appointment the procedures are attached to. </li>
<li>For customers using an HL7 interface and creating procedures via HL7, the <i>Date of First Visit</i> is set to the procedurelog.ProcDate of the first received procedure in the HL7 interface. </li>
</ol>
</div>
</div>
</body>
</html>```
