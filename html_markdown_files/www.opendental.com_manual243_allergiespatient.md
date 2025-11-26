# File: ./www.opendental.com/manual243/allergiespatient.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Allergies</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('allergiespatient','medical','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/allergiespatient.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/allergiespatient.html" >v24.2</option><option value="https://www.opendental.com/manual241/allergiespatient.html" >v24.1</option><option value="https://www.opendental.com/manual233/allergiespatient.html" >v23.3</option><option value="https://www.opendental.com/manual232/allergiespatient.html" >v23.2</option><option value="https://www.opendental.com/manual231/allergiespatient.html" >v23.1</option><option value="https://www.opendental.com/manual224/allergiespatient.html" >v22.4</option><option value="https://www.opendental.com/manual223/allergiespatient.html" >v22.3</option><option value="https://www.opendental.com/manual222/allergiespatient.html" >v22.2</option><option value="https://www.opendental.com/manual221/allergiespatient.html" >v22.1</option><option value="https://www.opendental.com/manual214/allergiespatient.html" >v21.4</option><option value="https://www.opendental.com/manual213/allergiespatient.html" >v21.3</option><option value="https://www.opendental.com/manual212/allergiespatient.html" >v21.2</option><option value="https://www.opendental.com/manual211/allergiespatient.html" >v21.1</option><option value="https://www.opendental.com/manual205/allergiespatient.html" >v20.5</option><option value="https://www.opendental.com/manual204/allergiespatient.html" >v20.4</option><option value="https://www.opendental.com/manual203/allergiespatient.html" >v20.3</option><option value="https://www.opendental.com/manual202/allergiespatient.html" >v20.2</option><option value="https://www.opendental.com/manual201/allergiespatient.html" >v20.1</option><option value="https://www.opendental.com/manual194/allergiespatient.html" >v19.4</option><option value="https://www.opendental.com/manual193/allergiespatient.html" >v19.3</option><option value="https://www.opendental.com/manual192/allergiespatient.html" >v19.2</option><option value="https://www.opendental.com/manual191/allergiespatient.html" >v19.1</option><option value="https://www.opendental.com/manual184/allergiespatient.html" >v18.4</option><option value="https://www.opendental.com/manual183/allergiespatient.html" >v18.3</option><option value="https://www.opendental.com/manual182/allergiespatient.html" >v18.2</option><option value="https://www.opendental.com/manual181/allergiespatient.html" >v18.1</option><option value="https://www.opendental.com/manual174/allergiespatient.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Allergies</p></div>
<div class="GeneralPageContent">
<p>Allergy information can be entered for each patient.</p>
<p>In the <a href="medical.html">Medical</a> window, click the Allergies tab.</p>
<img src="images/medicalAllergies.png" width="772" height="273"/><p><b>Add Allergy</b>: Add an allergy from the <a href="allergiesmaster.html">Allergy List</a>.</p>
<p><b>Show Inactive Allergies</b>: Check to show allergies that have been marked inactive.</p>
<p><b>Allergies</b>: The grid displays a list of allergies entered for the patient. The <a href="ehrinfobutton.html">EHR InfoButton</a> may show if EHR is turned on.</p>
<p>Active allergies show in the Chart Module - Patient Info area in bold red. Every time a user adds, edits or deletes a patient allergy, an entry is made in the <a href="audittrail.html">Audit Trail</a>.</p>
<h2>Allergy Edit</h2>
<p>Click <b>Add Allergy</b> to attach a new allergy to a patient or double-click an existing allergy to edit.</p>
<img src="images/allergyEdit.png" width="516" height="278"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Allergy</b>: Select the allergy. Only allergies added to the master Allergy List are available. If needing to add an allergy that is not in the dropdown, add it to the Allergy List first.</li>
<li><b>SNOMED CT Reaction</b>: (Optional) Click <b>[...]</b> to select <a href="snomedct.html">SNOMED CT Codes</a> (sent in the XML of a <a href="ehrccd.html">Continuity of Care Document (CCD)</a>/summary of care). Click <b>None</b> to clear the box.</li>
<li><b>Reaction Description</b>: (Optional) Enter the allergic reaction.</li>
<li><b>Date Adverse Reaction</b>: (Optional) Enter the date of the reaction.</li>
<li><b>Is Active</b>: By default the box is checked. To mark an allergy inactive, uncheck the box.</li>
<li><b>Delete</b>: Click to remove this allergy from the patient. </li>
</ul>
<p>Click <b>Save</b> to finish adding a new allergy or keep changes.</p>
</div>
</div>
</body>
</html>```
