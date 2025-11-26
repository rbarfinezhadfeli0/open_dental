# File: ./www.opendental.com/manual232/medical.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Medical</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('medical','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/medical.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/medical.html" >v24.2</option><option value="https://www.opendental.com/manual241/medical.html" >v24.1</option><option value="https://www.opendental.com/manual233/medical.html" >v23.3</option><option value="https://www.opendental.com/manual232/medical.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/medical.html" >v23.1</option><option value="https://www.opendental.com/manual224/medical.html" >v22.4</option><option value="https://www.opendental.com/manual223/medical.html" >v22.3</option><option value="https://www.opendental.com/manual222/medical.html" >v22.2</option><option value="https://www.opendental.com/manual221/medical.html" >v22.1</option><option value="https://www.opendental.com/manual214/medical.html" >v21.4</option><option value="https://www.opendental.com/manual213/medical.html" >v21.3</option><option value="https://www.opendental.com/manual212/medical.html" >v21.2</option><option value="https://www.opendental.com/manual211/medical.html" >v21.1</option><option value="https://www.opendental.com/manual205/medical.html" >v20.5</option><option value="https://www.opendental.com/manual204/medical.html" >v20.4</option><option value="https://www.opendental.com/manual203/medical.html" >v20.3</option><option value="https://www.opendental.com/manual202/medical.html" >v20.2</option><option value="https://www.opendental.com/manual201/medical.html" >v20.1</option><option value="https://www.opendental.com/manual194/medical.html" >v19.4</option><option value="https://www.opendental.com/manual193/medical.html" >v19.3</option><option value="https://www.opendental.com/manual192/medical.html" >v19.2</option><option value="https://www.opendental.com/manual191/medical.html" >v19.1</option><option value="https://www.opendental.com/manual184/medical.html" >v18.4</option><option value="https://www.opendental.com/manual183/medical.html" >v18.3</option><option value="https://www.opendental.com/manual182/medical.html" >v18.2</option><option value="https://www.opendental.com/manual181/medical.html" >v18.1</option><option value="https://www.opendental.com/manual174/medical.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Medical</p></div>
<div class="GeneralPageContent">
<p>In the <a href="chart.html">Chart Module</a>, double-click the pink Medical area. Click the Medical Info tab.</p>
<img src="images/medical.gif" width="812" height="525"/><p class="MarginBottomZero">Also see:  </p>
<ul class="MarginBottomGap">
<li><a href="problempatient.html">Problems</a> for a list of the patient's active and inactive problems.</li>
<li><a href="medicationspatient.html">Medications</a> for a list of the patient's current and discontinued medications.</li>
<li><a href="allergiespatient.html">Allergies</a> for a list of the patient's current and inactive allergies.</li>
<li><a href="familyhealthenter.html">Family Health History</a> for the health history of a patient's family members. This tab is only visible if EHR is turned on.</li>
<li><a href="vitalsignsenter.html">EHR Vital Signs</a> to document a patient's pulse, height, weight, and/or blood pressure, and any interventions.</li>
<li><a href="smokingenter.html">EHR Tobacco</a> to assess patient smoking status, tobacco use, and document interventions. This tab is only visible if EHR is turned on. </li>
</ul>
<p class="MarginBottomZero">Use the Medical tab to record medical information about the patient. </p>
<ul class="MarginBottomGap">
<li><b>Print Medical:</b> Print a list of the patient's problems, allergies, medical history, premedicate status (Y/N), medically urgent notes, and medical summary. (Only prints one page)</li>
<li><b>Premedicate:</b> If checked and <i>PremedFlag</i> is added to an appointment view, <i>Premedicate</i> will show in the Chart module medical area (bold red) and in the appointment box. It will also show when you hover over an appointment if <i>Med Flag</i> is added to the appointment bubble in Display Fields.</li>
<li><b>Current Meds Documented:</b> EHR only. See <a href="ehrcqmcurrentmeds.html">EHR Attest Medications Documented</a>.</li>
<li><b>Med Urgent:</b> Entered text will show in bold red in the Chart module medical area. Med Urgent notes can be added to an appointment view and the appointment bubble.</li>
<li><b>Medical Summary:</b> Entered text will show in the Chart module medical area.</li>
<li><b>Medical History:</b> This section should always reflect the current medical status. The assistants should type in all items that the patient marks on a medical history form. Once the data is entered into the computer, the dentist can refer to it more easily than the handwritten patient version. There is no archiving or update mechanism, so all changes should also be entered as chart notes.</li>
<li><b>Service Notes:</b> Enter useful information that is learned through discussions with patients, such as whether they need a blanket or pillow, nervous behavior, whether they are on a strict budget, whether they have to drive a long way to get to the office, etc. Shows in the Chart module medical area.</li>
</ul>
<p>Medical information displays in the Chart Module, under Patient Info in pink. </p>
<img src="images/medicalPanel.gif" width="412" height="256"/><p>The fields that display can be customized in <a href="displayfields.html">Display Fields</a>, ChartPatientInformation. To change the background color, see <a href="definitionsmisccolors.html">Definitions: Misc Colors</a>. </p>
</div>
</div>
</body>
</html>```
