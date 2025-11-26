# File: ./www.opendental.com/manual243/medical.html

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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/medical.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/medical.html" >v24.2</option><option value="https://www.opendental.com/manual241/medical.html" >v24.1</option><option value="https://www.opendental.com/manual233/medical.html" >v23.3</option><option value="https://www.opendental.com/manual232/medical.html" >v23.2</option><option value="https://www.opendental.com/manual231/medical.html" >v23.1</option><option value="https://www.opendental.com/manual224/medical.html" >v22.4</option><option value="https://www.opendental.com/manual223/medical.html" >v22.3</option><option value="https://www.opendental.com/manual222/medical.html" >v22.2</option><option value="https://www.opendental.com/manual221/medical.html" >v22.1</option><option value="https://www.opendental.com/manual214/medical.html" >v21.4</option><option value="https://www.opendental.com/manual213/medical.html" >v21.3</option><option value="https://www.opendental.com/manual212/medical.html" >v21.2</option><option value="https://www.opendental.com/manual211/medical.html" >v21.1</option><option value="https://www.opendental.com/manual205/medical.html" >v20.5</option><option value="https://www.opendental.com/manual204/medical.html" >v20.4</option><option value="https://www.opendental.com/manual203/medical.html" >v20.3</option><option value="https://www.opendental.com/manual202/medical.html" >v20.2</option><option value="https://www.opendental.com/manual201/medical.html" >v20.1</option><option value="https://www.opendental.com/manual194/medical.html" >v19.4</option><option value="https://www.opendental.com/manual193/medical.html" >v19.3</option><option value="https://www.opendental.com/manual192/medical.html" >v19.2</option><option value="https://www.opendental.com/manual191/medical.html" >v19.1</option><option value="https://www.opendental.com/manual184/medical.html" >v18.4</option><option value="https://www.opendental.com/manual183/medical.html" >v18.3</option><option value="https://www.opendental.com/manual182/medical.html" >v18.2</option><option value="https://www.opendental.com/manual181/medical.html" >v18.1</option><option value="https://www.opendental.com/manual174/medical.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Medical</p></div>
<div class="GeneralPageContent">
<p>The medical area shows patient medical information. </p>
<p>In the <a href="chart.html">Chart Module</a>, double-click the pink Medical area. Click the Medical Info tab.</p>
<img src="images/medical.png" width="804" height="521"/><p class="MarginBottomZero">Other tabs accessible from this window:  </p>
<ul class="MarginBottomGap">
<li><a href="problempatient.html">Problems</a>: Lists patient's active and inactive problems. </li>
<li><a href="medicationspatient.html">Medications</a>: Lists patient's current and discontinued medications.</li>
<li><a href="allergiespatient.html">Allergies</a>: Lists patient's current and inactive allergies.</li>
<li><a href="familyhealthenter.html">Family Health History</a>: The health history of a patient's family members. This tab is only visible when EHR is enabled.</li>
<li><a href="vitalsignsenter.html">EHR Vital Signs</a>: Documents the patient's pulse, height, weight, and/or blood pressure, and any interventions.</li>
<li><a href="smokingenter.html">EHR Tobacco</a>: Assess the patient's smoking status, tobacco use, and document interventions. This tab is only visible when EHR is enabled. </li>
</ul>
<h2>Medical Info Tab</h2>
<p>Use the Medical Info tab to record medical information about the patient.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Print Medical</b>: Print a list of the patient's problems, allergies, medical history, premedicate status (Y/N), medically urgent notes, and medical summary. Only prints one page.</li>
<li><b>Premedicate</b>: Check to indicate the patient needs to be premedicated. If checked and the <i>PremedFlag</i> is added to an appointment view, <i>Premedicate</i> shows in the Chart Module, medical area (bold red) and in the appointment box. It also shows when hovering over an appointment if <i>Med Flag</i> is added to the appointment bubble in Display Fields.</li>
<li><b>Current Meds Documented</b>: Only used with EHR. See <a href="ehrcqmcurrentmeds.html">EHR Attest Medications Documented</a>.</li>
<li><b>Med Urgent</b>: Urgent medical notes about the patient. Entered text shows in bold red in the Chart Module, medical area. Med Urgent notes can be added to an appointment view and the appointment bubble for additional visibility.</li>
<li><b>Medical Summary</b>: A brief medical summary. Entered text shows in the Chart Module, medical area.</li>
<li><b>Service Notes:</b> Useful information that is learned through discussions with patients, such as whether they need a blanket or pillow, nervous behavior, whether they are on a strict budget, etc. Shows in the Chart Module, medical area.</li>
<li><b>Medical History</b>: The patient's medical history. Information from the Medical History form should be entered here so that provider's have an easy-to-read history. This information is not archived and should be entered as chart notes as well.</li>
</ul>
<p><a href="rightclicktextboxes.html">Right-Click</a> in any text box for additional options.</p>
<p>Medical information displays in the Chart Module, under Patient Info in pink. </p>
<img src="images/medicalPanel.png" width="417" height="231"/><p>The fields that display can be customized in <a href="displayfields.html">Display Fields</a>, ChartPatientInformation. To change the background color, see <a href="definitionsmisccolors.html">Definitions: Misc Colors</a>. </p>
</div>
</div>
</body>
</html>```
