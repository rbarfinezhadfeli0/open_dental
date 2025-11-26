# File: ./www.opendental.com/manual243/ehrsyndromicdataobs.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Syndromic Surveillance Observations</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrsyndromicdataobs','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrsyndromicdataobs.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrsyndromicdataobs.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrsyndromicdataobs.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrsyndromicdataobs.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrsyndromicdataobs.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrsyndromicdataobs.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrsyndromicdataobs.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrsyndromicdataobs.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrsyndromicdataobs.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrsyndromicdataobs.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrsyndromicdataobs.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrsyndromicdataobs.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrsyndromicdataobs.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrsyndromicdataobs.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrsyndromicdataobs.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrsyndromicdataobs.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrsyndromicdataobs.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrsyndromicdataobs.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrsyndromicdataobs.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrsyndromicdataobs.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrsyndromicdataobs.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrsyndromicdataobs.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrsyndromicdataobs.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrsyndromicdataobs.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrsyndromicdataobs.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrsyndromicdataobs.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrsyndromicdataobs.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrsyndromicdataobs.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Syndromic Surveillance Observations</p></div>
<div class="GeneralPageContent">
<p>See <a href="ehrdashboard1.html">EHR Dashboard</a>.</p>
<p>Syndromic surveillance data can be recorded during a patient's appointment, then exported as an HL7 ADT standardized message. See <a href="ehrsyndromicdataexport.html">EHR Export Syndromic Surveillance Data</a>.</p>
<ol>
<li>Select the patient.</li>
<li>In the <a href="appointments.html">Appointments Module</a> or <a href="chart.html">Chart Module</a>, double click the appointment to open the <a href="aptedit.html">Edit Appointment</a>.</li>
<li>On the left side of the window, scroll down to the last of the appointment information fields. <br/><img src="images/ehrSyndromic.gif" width="261" height="128" class="ImageInParagraph"/></li>
<li>Click <b>Obs</b>. <br/><img src="images/ehrSyndromicObs1.gif" width="661" height="521" class="ImageInParagraph"/><p>All observations already recorded and attached to the appointment are listed.</p>
</li>
<li>Click Add to add an observation. <br/><img src="images/ehrsyndromicObs.gif" width="542" height="310" class="ImageInParagraph"/></li>
<li>Select the information, then click OK to save.  <ul>
<li>Observation Question: The data elements collected are based on EHR certification requirements.  <ul>
<li>BodyTemp</li>
<li>DateIllnessOrInjury</li>
<li>PatientAge</li>
<li>PrelimDiag</li>
<li>TriageNote</li>
<li>OxygenSaturation</li>
<li>ChiefComplaint</li>
<li>TreatFacilityID</li>
<li>TreatFacilityLocation</li>
<li>VisitType</li>
</ul>
</li>
<li>Value Type: 5 values can be assigned to an observation question.  <ul>
<li>Address: Inserts the Practice address as the Facility Address.</li>
<li>Coded: Select a LOINC, SNOMEDCT, ICD9 or ICD10 code.</li>
<li>DateAndTime: Type the date/time in the Value field.</li>
<li>Numeric: Type the numeric value then select the Value Type.</li>
<li>Text: Type text in the Value field.</li>
</ul>
</li>
</ul>
</li>
<li>To export the data, see <a href="ehrsyndromicdataexport.html">EHR Export Syndromic Surveillance Data</a>.</li>
</ol>
</div>
</div>
</body>
</html>```
