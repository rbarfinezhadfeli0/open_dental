# File: ./www.opendental.com/manual243/cemtpatienttransfer.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - CEMT Patient Transfer</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('cemtpatienttransfer','central','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/cemtpatienttransfer.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/cemtpatienttransfer.html" >v24.2</option><option value="https://www.opendental.com/manual241/cemtpatienttransfer.html" >v24.1</option><option value="https://www.opendental.com/manual233/cemtpatienttransfer.html" >v23.3</option><option value="https://www.opendental.com/manual232/cemtpatienttransfer.html" >v23.2</option><option value="https://www.opendental.com/manual231/cemtpatienttransfer.html" >v23.1</option><option value="https://www.opendental.com/manual224/cemtpatienttransfer.html" >v22.4</option><option value="https://www.opendental.com/manual223/cemtpatienttransfer.html" >v22.3</option><option value="https://www.opendental.com/manual222/cemtpatienttransfer.html" >v22.2</option><option value="https://www.opendental.com/manual221/cemtpatienttransfer.html" >v22.1</option><option value="https://www.opendental.com/manual214/cemtpatienttransfer.html" >v21.4</option><option value="https://www.opendental.com/manual213/cemtpatienttransfer.html" >v21.3</option><option value="https://www.opendental.com/manual212/cemtpatienttransfer.html" >v21.2</option><option value="https://www.opendental.com/manual211/cemtpatienttransfer.html" >v21.1</option><option value="https://www.opendental.com/manual205/cemtpatienttransfer.html" >v20.5</option><option value="https://www.opendental.com/manual204/cemtpatienttransfer.html" >v20.4</option><option value="https://www.opendental.com/manual203/cemtpatienttransfer.html" >v20.3</option><option value="https://www.opendental.com/manual202/cemtpatienttransfer.html" >v20.2</option><option value="https://www.opendental.com/manual201/cemtpatienttransfer.html" >v20.1</option><option value="https://www.opendental.com/manual194/cemtpatienttransfer.html" >v19.4</option><option value="https://www.opendental.com/manual193/cemtpatienttransfer.html" >v19.3</option><option value="https://www.opendental.com/manual192/cemtpatienttransfer.html" >v19.2</option><option value="https://www.opendental.com/manual191/cemtpatienttransfer.html" >v19.1</option><option value="https://www.opendental.com/manual184/cemtpatienttransfer.html" >v18.4</option><option value="https://www.opendental.com/manual183/cemtpatienttransfer.html" >v18.3</option><option value="https://www.opendental.com/manual182/cemtpatienttransfer.html" >v18.2</option><option value="https://www.opendental.com/manual181/cemtpatienttransfer.html" >v18.1</option><option value="https://www.opendental.com/manual174/cemtpatienttransfer.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>CEMT Patient Transfer</p></div>
<div class="GeneralPageContent">
<p>In the <a href="central.html">Central Enterprise Management</a> window, highlight the database the patient is currently entered in. Click Transfer, Patients.</p>
<img src="images/cemtPatientTransfer.gif" width="915" height="276"/><p>Patients who move between locations can have some basic information exported from one database and imported to another through the Central Enterprise Management Tool (CEMT). Only demographic information is exported to the target database. Account details, treatment history, and insurance information is not included. None of the information for the patient in the old database will be automatically changed.</p>
<p class="MarginBottomZero">There are two steps to transferring patients:  </p>
<ol class="MarginBottomGap">
<li>Export the patient data from the original database.</li>
<li>Import the patient data into the new database.</li>
</ol>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our <a href="https://youtu.be/TuiS4oyOuMc">QuickTip Video: Transfer Patient Between Databases Using CEMT</a>.</p>
<h2>Export from the Original Database</h2>
<p class="MarginBottomZero">Patients to Export: Lists patients to export to a different database. </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Click to select patients to export.</li>
<li><b>Remove</b>: Remove selected patient from list of patients to transfer.</li>
</ul>
<p class="MarginBottomZero">Databases to export patients to: Lists the database to export patients to. </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Click to add a database. Only databases with a status of OK list.</li>
<li><b>Remove</b>: Remove selected database from list of Databases to export to.</li>
</ul>
<p><b>Export</b>: Click to export the patients. Depending on the number of patients being exported, this process may take some time. A progress bar displays, and once complete, a summary appears.</p>
<p>Change the patient in the old database to Inactive and make a note about moving them to the other database.</p>
<h2>Import the Patient into the New Database</h2>
 Exported patients appear as new patient Web Forms in the target database.  <p>Open the new database, then go to Tools, <a href="../site/webforms.html">Web Forms</a>.</p>
<p>Click <b>Retrieve New Forms</b> and create new records for each patient. For details on this process, see <a href="webformsretrieve.html">Web Forms Retrieve</a>.</p>
<p>Once all web forms have been retrieved, all are listed in a window like the one below:<br/><img src="images/cemtPatientTransferWebforms.png" width="757" height="367" class="ImageInParagraph"/><br/> Right-click on each patient in the grid and select <b>View this patient's forms</b>.</p>
<p>In the Patient Forms window, select <i>PatientTransferCEMT</i> and click <b>Import</b>. See <a href="patientformsimport.html">Import Patient Forms and Medical Histories</a> for additional details on importing information into the database.</p>
<p></p>
</div>
</div>
</body>
</html>```
