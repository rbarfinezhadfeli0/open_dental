# File: ./www.opendental.com/manual243/ehrinterventions.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Interventions</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrinterventions','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrinterventions.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrinterventions.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrinterventions.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrinterventions.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrinterventions.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrinterventions.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrinterventions.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrinterventions.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrinterventions.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrinterventions.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrinterventions.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrinterventions.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrinterventions.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrinterventions.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrinterventions.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrinterventions.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrinterventions.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrinterventions.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrinterventions.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrinterventions.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrinterventions.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrinterventions.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrinterventions.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrinterventions.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrinterventions.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrinterventions.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrinterventions.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrinterventions.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Interventions</p></div>
<div class="GeneralPageContent">
<p>When a provider documents an intervention for an eligible patient encounter, it counts towards <a href="ehrcqm.html">EHR Clinical Quality Measures</a>. Interventions are documented while entering patient <a href="vitalsignsenter.html">EHR Vital Signs</a> and <a href="smokingenter.html">Smoking Status</a>, or can be viewed and added on the Interventions window.</p>
<p>To view all patient's interventions, on the <a href="ehrdashboard1.html">EHR Dashboard</a>, click Interventions.</p>
<img src="images/ehrInterventions.gif" width="883" height="461"/><h2>Adding interventions</h2>
<ol>
<li>Click Add. <br/><img src="images/ehrInterventionsManual.gif" width="668" height="586" class="ImageInParagraph"/></li>
<li>Enter the intervention date. Today's date is the default.</li>
<li>Highlight the intervention. To filter the list by type, click the <b>Code Set</b> dropdown.</li>
<li>If patient declines the intervention, check <b>Patient Declined</b>.</li>
<li>Enter a note (optional).</li>
<li>Click OK. If you select a medication, the Medication for Patient window will open so you can enter instructions and start date. The medication will also be added to the patient's <a href="medicationmaster.html">Medications List</a>.</li>
</ol>
<br/><h2>Editing interventions</h2>
<p>Only date, patient declined, and notes can be edited.</p>
<ol>
<li>Double click an intervention to open the Intervention window. Only the Date, Patient Declined checkbox and Note field will be active. The current intervention will be highlighted.</li>
<li>Make changes as needed.</li>
<li>Click OK.</li>
</ol>
<br/><p>To delete an intervention, click <b>Delete</b> on the Intervention window.</p>
</div>
</div>
</body>
</html>```
