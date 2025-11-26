# File: ./www.opendental.com/manual/mergepatients.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Merge Patients</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mergepatients','+misc','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/mergepatients.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/mergepatients.html" >v24.2</option><option value="https://www.opendental.com/manual241/mergepatients.html" >v24.1</option><option value="https://www.opendental.com/manual233/mergepatients.html" >v23.3</option><option value="https://www.opendental.com/manual232/mergepatients.html" >v23.2</option><option value="https://www.opendental.com/manual231/mergepatients.html" >v23.1</option><option value="https://www.opendental.com/manual224/mergepatients.html" >v22.4</option><option value="https://www.opendental.com/manual223/mergepatients.html" >v22.3</option><option value="https://www.opendental.com/manual222/mergepatients.html" >v22.2</option><option value="https://www.opendental.com/manual221/mergepatients.html" >v22.1</option><option value="https://www.opendental.com/manual214/mergepatients.html" >v21.4</option><option value="https://www.opendental.com/manual213/mergepatients.html" >v21.3</option><option value="https://www.opendental.com/manual212/mergepatients.html" >v21.2</option><option value="https://www.opendental.com/manual211/mergepatients.html" >v21.1</option><option value="https://www.opendental.com/manual205/mergepatients.html" >v20.5</option><option value="https://www.opendental.com/manual204/mergepatients.html" >v20.4</option><option value="https://www.opendental.com/manual203/mergepatients.html" >v20.3</option><option value="https://www.opendental.com/manual202/mergepatients.html" >v20.2</option><option value="https://www.opendental.com/manual201/mergepatients.html" >v20.1</option><option value="https://www.opendental.com/manual194/mergepatients.html" >v19.4</option><option value="https://www.opendental.com/manual193/mergepatients.html" >v19.3</option><option value="https://www.opendental.com/manual192/mergepatients.html" >v19.2</option><option value="https://www.opendental.com/manual191/mergepatients.html" >v19.1</option><option value="https://www.opendental.com/manual184/mergepatients.html" >v18.4</option><option value="https://www.opendental.com/manual183/mergepatients.html" >v18.3</option><option value="https://www.opendental.com/manual182/mergepatients.html" >v18.2</option><option value="https://www.opendental.com/manual181/mergepatients.html" >v18.1</option><option value="https://www.opendental.com/manual174/mergepatients.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Merge Patients</p></div>
<div class="GeneralPageContent">
<p>The Merge Patients tool can be used to merge duplicate patient accounts into one.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Misc Tools, <b>Merge Patients</b>.</p>
<img src="images/mergePatient.png" width="695" height="277"/><p>Patient merges are permanent and cannot be undone.</p>
<p class="MarginBottomZero">To merge duplicate patients:  </p>
<ol class="MarginBottomGap">
<li>Select the <i>Patient to merge into</i>. Click <b>Change</b> to select the patient account to keep. If an imaging software is bridged to Open Dental, the patient account linked to the images should be selected.</li>
<li>Select the <i>Patient to merge from</i>. Click <b>Change</b> to select the patient account that will be merged into the patient selected in Step 1 (<i>Patient to merge into</i>).</li>
<li>Click <b>Merge</b>.</li>
<li>One of two prompts are shown:</li>
<ul>
<li>If any patient fields (first name, last name, and birthdate) do not match, the warning displays these details from each account. Confirm the patient details before proceeding.</li>
<img src="images/mergePatientNoMatch.png" width="406" height="211"/><li>If patient fields (first name, last name, and birthdate) are an exact match, there is a prompt to continue.</li>
<img src="images/mergePatientConfirm.png" width="392" height="133"/></ul>
<li> Click <b>Yes</b> to proceed with the merge or <b>No</b> to cancel the merge.</li>
<ul>
<li>Patient first name, last name, and birthdate do not need to match in order to proceed with merging patients.</li>
</ul>
<li>A confirmation message is shown once the merge is successful.</li>
</ol>
<p class="MarginBottomZero">After the merge is successfully completed: </p>
<ul class="MarginBottomGap">
<li>The status of the <i>Patient to merge from</i> is changed to <i>Archived</i>. The patient can still be accessed via the <a href="patientselect.html">Select Patient</a> window by selecting <i>Show Archived/Deceased/Hidden Clinics</i> and <i>Show Merged Patients</i>. The merged patient only shows in the <a href="family.html">Family Module</a> or <a href="account.html">Account Module</a> when the merged patient is selected.</li>
<li>Duplicate data (e.g., insurance, recall) needs manual cleanup.</li>
<li>The following does not transfer from the <i>Patient to merge from</i> in the merge. Users may wish to verify this information prior to the merge and re-enter it after the merge: <ul>
<li><a href="patientedit.html">Patient Information</a> is kept from the <i>Patient to merge into</i> only. </li>
<li>Fam Urgent Fin Note is kept from the <i>Patient to merge into</i> only.</li>
<li>Med Urgent note is kept from the <i>Patient to merge into</i> only. </li>
<li>Any other data not listed above is copied from the <i>Patient to merge from</i> to <i>Patient to merge into</i>.</li>
</ul>
</li>
<li>When attempting to schedule an appointment for the merged patient, there is a prompt to switch patients.</li>
<li>History for both the merge <i>from</i> and <i>to</i> patient can be viewed in the <a href="audittrail.html">Audit Trail</a>.</li>
<li>If the merge <i>to</i> patient is moved into another family, the merge <i>from</i> patient is moved as well.</li>
<li>If the merge <i>from</i> patient was in a <a href="superfamily.html">Super Family</a>, they are removed from the Super Family.</li>
<li>As a second step, consider deleting the archived patient in the Family Module.</li>
<li>If the merge <i>from</i> patient was not a guarantor and was linked to <a href="patientclone.html">Clones</a>, the Clones remain in the original family and are linked to the merge <i>to</i> patient in the Patient Clones grid of the Family Module.</li>
<li>If the merge <i>from</i> patient was selected at the time of the merge, the selected patient is switched to the merge <i>to</i> patient after the merge.</li>
</ul>
</div>
</div>
</body>
</html>```
