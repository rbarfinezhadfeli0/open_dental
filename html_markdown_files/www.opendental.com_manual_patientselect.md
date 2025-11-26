# File: ./www.opendental.com/manual/patientselect.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Select Patient</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('patientselect','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/patientselect.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/patientselect.html" >v24.2</option><option value="https://www.opendental.com/manual241/patientselect.html" >v24.1</option><option value="https://www.opendental.com/manual233/patientselect.html" >v23.3</option><option value="https://www.opendental.com/manual232/patientselect.html" >v23.2</option><option value="https://www.opendental.com/manual231/patientselect.html" >v23.1</option><option value="https://www.opendental.com/manual224/patientselect.html" >v22.4</option><option value="https://www.opendental.com/manual223/patientselect.html" >v22.3</option><option value="https://www.opendental.com/manual222/patientselect.html" >v22.2</option><option value="https://www.opendental.com/manual221/patientselect.html" >v22.1</option><option value="https://www.opendental.com/manual214/patientselect.html" >v21.4</option><option value="https://www.opendental.com/manual213/patientselect.html" >v21.3</option><option value="https://www.opendental.com/manual212/patientselect.html" >v21.2</option><option value="https://www.opendental.com/manual211/patientselect.html" >v21.1</option><option value="https://www.opendental.com/manual205/patientselect.html" >v20.5</option><option value="https://www.opendental.com/manual204/patientselect.html" >v20.4</option><option value="https://www.opendental.com/manual203/patientselect.html" >v20.3</option><option value="https://www.opendental.com/manual202/patientselect.html" >v20.2</option><option value="https://www.opendental.com/manual201/patientselect.html" >v20.1</option><option value="https://www.opendental.com/manual194/patientselect.html" >v19.4</option><option value="https://www.opendental.com/manual193/patientselect.html" >v19.3</option><option value="https://www.opendental.com/manual192/patientselect.html" >v19.2</option><option value="https://www.opendental.com/manual191/patientselect.html" >v19.1</option><option value="https://www.opendental.com/manual184/patientselect.html" >v18.4</option><option value="https://www.opendental.com/manual183/patientselect.html" >v18.3</option><option value="https://www.opendental.com/manual182/patientselect.html" >v18.2</option><option value="https://www.opendental.com/manual181/patientselect.html" >v18.1</option><option value="https://www.opendental.com/manual174/patientselect.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Select Patient</p></div>
<div class="GeneralPageContent">
<p>Use the Select Patient window to search and select patients in Open Dental.</p>
<p>In the <a href="toolbar.html">Main Toolbar</a>, click <b>Select Patient</b>. <br/><img src="images/patientselect.png" width="915" height="699" class="ImageInParagraph"/></p>
<p>Alternatively, use the keyboard shortcut Ctrl + P to open the Select Patient window.</p>
<p>Double-click on the patient to select. The patient record opens in whichever module the user began in. Alternatively, select the patient and click <b>OK</b>.</p>
<p>By default, only up to 40 patients list in the Select Patient grid at once. Names are sorted alphabetically by last name. The columns of information are customizable in <a href="displayfields.html">Display Fields</a>.</p>
<p><b>Keyboard</b>: Click to use the built-in Windows keyboard. This button is not available for Open Dental Cloud users. </p>
<p><b>Search by</b>: To filter the list, enter criteria in the Search by area. Users can search by one or many criteria and enter information by typing or using the on-screen keyboard. </p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>First Name</b>: By default this field searches patient first name only. To also search preferred name, enable <i>Search for preferred name in the first name field in Select Patient window</i> in <a href="preferences.html">Preferences</a>.</li>
<li><b>SSN</b>: Any user can search by Social Security Number (SSN). If SSNs are masked, only users with the <i>Patient Social Security Number View</i> permission can right-click to view the full number. </li>
<li><b>Billing Type</b>: Options are defined in <a href="definitionsbillingtypes.html">Definitions: Billing Types</a>.</li>
<li><b>Site</b>: Options are defined in the <a href="sites.html">Site List</a>.</li>
<li><b>Clinic</b>: If using Clinics, filter the list to patients who are associated to a specific clinic as well as patients who are unassigned. Patients are associated to clinics when the clinic is their default or if they have any appointments in the clinic. The default selection is the clinic selected in the Main Menu.</li>
<li><b>Guarantors Only</b>: Check to only list guarantors.</li>
<li><b>Show Inactive Patients</b>: Check to include patients with a status of <i>Inactive</i>. Enable , <i>Show Inactive Patients by default</i> in <a href="preferences.html">Preferences</a> to default this box to checked.</li>
<li><b>Show Archived/Deceased/Hidden Clinics</b>: Check to include patients that have a status of <i>Archived</i> or <i>Deceased</i>, or whose default clinic is marked hidden.</li>
<li><b>Show Merged Patients</b>: Check to include patients who have been merged into another patient. Option only displays if <i>Show Archived/Deceased/Hidden Clinics</i> is checked.</li>
</ul>
<p><b>Search</b>: Click to update search results when <i>Refresh while typing</i> is not selected.<br/><div class="Note">Note: <ul>
<li>Only full string matches display, with exact matches listing first. If a user searches for "cott", only results that start with "cott" display (e.g., Cotter). Results that include "cott" mid-string do not (e.g., Scott).</li>
<li>When searching patients, use the up and down keys on the keyboard to quickly navigate to a patient. Use the Enter key to quickly select the highlighted patient.</li>
</ul>
</div>
</p>
<p class="MarginBottomZero"><b>Get All</b>: Only available when the <i>Show Get All button in Select Patient window</i> preference is enabled. List all patients (more than 40) that meet the search criteria and activate the vertical scrollbar.  </p>
<ul class="MarginBottomGap">
<li>When this option is clicked, all patients matching the string of characters entered as search criteria (including mid-string characters) are listed. </li>
<li>Next Visit and Last Visit fields do not populate when using <b>Get All</b>.</li>
</ul>
<p class="MarginBottomZero"><b>Refresh while typing</b>: Determines whether the patient list automatically refreshes as users type. When <i>Allow Refresh while typing in Select Patient window</i> is disabled, this box is hidden. </p>
<ul class="MarginBottomGap">
<li>Checked: As users type search criteria, the patient list automatically refreshes with matching results. The setting affects the current workstation only.</li>
<li>Unchecked: Do not refresh while typing. After entering search criteria, users must click <b>Search</b> or use the Enter key to update the results.</li>
</ul>
<p class="MarginBottomZero"><b>Add New Family</b>: Users must always search for at least patient last name to see if a patient record exists. If it doesn't, users can add a new patient record using one of the following options: </p>
<ul class="MarginBottomGap">
<li><b>Add Pt</b>: Add a single patient. See <a href="patientedit.html">Edit Patient Information</a>.</li>
<li><b>Add Many</b>: Add multiple family members at once. See <a href="familyadd.html">Add Family</a>.</li>
</ul>
<p><div class="Note">Note: Last Name, First Name, and Birthdate entered on select patient window automatically carry over when adding new patient(s).</div>
</p>
<p><b>Previous 40</b> / <b>Next 40</b>: By default, only 40 records are displayed at a time. Click to move between the next or previous 40 records. These buttons are disabled after clicking <b>Get All</b> as all results are displayed. </p>
<h2>Select Patient Dropdown</h2>
<p>Another way to select a patient is by clicking the Select Patient dropdown in the Main Toolbar. The last five patients selected show, as well as all family members associated with the current patient. Click on a name to select.</p>
<img src="images/patientSelectDropdown.png" width="239" height="216"/><h2>Other Options</h2>
<ul>
<li>Click on a different family member in the Family Module or Account Module.</li>
<li>Click on a patient's appointment.</li>
<li>If the text <i>PatNum:#####</i> is currently copied to the clipboard, clicking Select Patient launches the copied patnum (e.g., if <i>PatNum:1524</i> is copied to the clipboard, Patient Number 1524 is selected). </li>
</ul>
</div>
</div>
</body>
</html>```
