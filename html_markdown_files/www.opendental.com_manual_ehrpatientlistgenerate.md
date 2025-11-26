# File: ./www.opendental.com/manual/ehrpatientlistgenerate.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Generate Patient List</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrpatientlistgenerate','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrpatientlistgenerate.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrpatientlistgenerate.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrpatientlistgenerate.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrpatientlistgenerate.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrpatientlistgenerate.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrpatientlistgenerate.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrpatientlistgenerate.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrpatientlistgenerate.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrpatientlistgenerate.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrpatientlistgenerate.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrpatientlistgenerate.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrpatientlistgenerate.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrpatientlistgenerate.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrpatientlistgenerate.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrpatientlistgenerate.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrpatientlistgenerate.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrpatientlistgenerate.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrpatientlistgenerate.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrpatientlistgenerate.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrpatientlistgenerate.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrpatientlistgenerate.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrpatientlistgenerate.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrpatientlistgenerate.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrpatientlistgenerate.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrpatientlistgenerate.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrpatientlistgenerate.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrpatientlistgenerate.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrpatientlistgenerate.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Generate Patient List</p></div>
<div class="GeneralPageContent">
<p>Patient lists for can be generated for a single condition or many. The intended purpose is for quality improvement, reduction of disparities, and research or outreach. This is not a reporting requirement for <a href="../site/ehrmodified2.html">EHR Modified Stage 2</a>.</p>
<ol>
<li>On the <a href="ehrdashboard1.html">EHR Dashboard</a>, click <b>Generate List</b> (Patient List row, Click to Take Action column). <br/><img src="images/ehrPatientList.gif" width="748" height="568" class="ImageInParagraph"/><p>When you first open the window, there will be no data elements. As you select criteria, a line item will show for each. </p>
</li>
<li>Click a button on the right to add criteria. Some criteria have start/stop date options. <p><b>Birthdate</b>: Include patients greater than, less than, or equal to a certain age.</p>
<p><b>Problem</b>: Include patients with a certain <a href="problempatient.html">Problem</a>, <a href="icdcodes.html">ICD-10 Codes</a>, or <a href="snomedct.html">SNOMED CT Codes</a>.</p>
<p><b>Medication</b>: Include patients with a certain <a href="medicationspatient.html">Medication</a>.</p>
<p><b>LabResult</b>: Include patients with lab results for specific <a href="loinc.html">LOINC Codes</a> that are greater than, less than, or equal to a specific value.</p>
<p><b>Gender</b>: Include gender information in the list.</p>
<p><b>Comm Pref</b>: Include patients with a specific communication preference as set on the Reminders window. See <a href="ehrreminderssend.html">EHR Document Reminders Sent to Patients</a>.</p>
<p>Allergy: Include patients with a certain <a href="allergiespatient.html">Allergy</a>.</p>
</li>
<li>Click Results to generate the list based on the criteria defined. To sort the list by a specific criteria, click on a column header. <br/><img src="images/ehrPatientListResults.gif" width="915" height="232" class="ImageInParagraph"/></li>
<li>To print the list, click Print.</li>
</ol>
<br/><p>List criteria will not be saved when you close the Patient List window. Each time you generate a list, you must define the criteria you want.</p>
<p>For EHR supporting documentation we recommend saving screenshots of the criteria and generated list.</p>
</div>
</div>
</body>
</html>```
