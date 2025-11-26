# File: ./www.opendental.com/manual/patientclone.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Clone</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('patientclone','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/patientclone.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/patientclone.html" >v24.2</option><option value="https://www.opendental.com/manual241/patientclone.html" >v24.1</option><option value="https://www.opendental.com/manual233/patientclone.html" >v23.3</option><option value="https://www.opendental.com/manual232/patientclone.html" >v23.2</option><option value="https://www.opendental.com/manual231/patientclone.html" >v23.1</option><option value="https://www.opendental.com/manual224/patientclone.html" >v22.4</option><option value="https://www.opendental.com/manual223/patientclone.html" >v22.3</option><option value="https://www.opendental.com/manual222/patientclone.html" >v22.2</option><option value="https://www.opendental.com/manual221/patientclone.html" >v22.1</option><option value="https://www.opendental.com/manual214/patientclone.html" >v21.4</option><option value="https://www.opendental.com/manual213/patientclone.html" >v21.3</option><option value="https://www.opendental.com/manual212/patientclone.html" >v21.2</option><option value="https://www.opendental.com/manual211/patientclone.html" >v21.1</option><option value="https://www.opendental.com/manual205/patientclone.html" >v20.5</option><option value="https://www.opendental.com/manual204/patientclone.html" >v20.4</option><option value="https://www.opendental.com/manual203/patientclone.html" >v20.3</option><option value="https://www.opendental.com/manual202/patientclone.html" >v20.2</option><option value="https://www.opendental.com/manual201/patientclone.html" >v20.1</option><option value="https://www.opendental.com/manual194/patientclone.html" >v19.4</option><option value="https://www.opendental.com/manual193/patientclone.html" >v19.3</option><option value="https://www.opendental.com/manual192/patientclone.html" >v19.2</option><option value="https://www.opendental.com/manual191/patientclone.html" >v19.1</option><option value="https://www.opendental.com/manual184/patientclone.html" >v18.4</option><option value="https://www.opendental.com/manual183/patientclone.html" >v18.3</option><option value="https://www.opendental.com/manual182/patientclone.html" >v18.2</option><option value="https://www.opendental.com/manual181/patientclone.html" >v18.1</option><option value="https://www.opendental.com/manual174/patientclone.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Clone</p></div>
<div class="GeneralPageContent">
<p>Patient Clones are a useful feature for practices that have different types of providers who treat the same patient. </p>
<img src="images/patientCloneToolbar.png" width="769" height="39"/><p class="MarginBottomZero">The tool can be used to create one or more duplicates of the original patient, with data continually synced between patient and clone. For example, a general dentistry office may also provide orthodontic and endodontic treatment. </p>
<ul class="MarginBottomGap">
<li>Use the original patient record to track general dentistry work.</li>
<li>Create a patient clone with a specialty of orthodontics to track orthodontic work.</li>
<li>Create another patient clone with a specialty of endodontics to track endodontic work.</li>
</ul>
<h2>Turn on Patient Clones</h2>
<p>Enable <i>Patient Clone</i> in <a href="showfeatures.html">Show Features</a> to use the feature and see options.</p>
<h2>Patient Clones in the Family Module</h2>
<p>Manage patient clones, create new patient clones, and view patient clone relationships in the <a href="family.html">Family Module</a>.</p>
<img src="images/patientCloneFamily.png" width="591" height="186"/><p>The original patient is listed in mixed case (e.g., Smith, Jane). Clones are created in all capital letters (e.g., SMITH, JANE).</p>
<p>The Patient Clones grid shows when one or more patient clones exist. The original patient is displayed in red with clones listed below.</p>
<h2>Clone Super Families</h2>
<p>By default, patient clones are added to the original patient's family (listed in the Family Members grid). Another option is to place new patient clones in their own family, and associate the clone to the original via <a href="superfamily.html">Super Family</a>. This is useful when offices want to maintain separate financial accounts for each clone (e.g., send separate statements for orthodontic and general dentistry work).</p>
<p>To add a clone to a Super Family, enable the preference, <i>New patient clones use super family instead of regular family</i>. Create the clone. A separate Super Family grid displays in the Family Module with the original patient as the Super Family Head and clones as family members.</p>
<h2>Add Patient Clones</h2>
<p>In the Family Module, select the original patient from the Family Members. In the toolbar, click <b>Add</b> to the right of Clones. The Clone Add window opens.</p>
<img src="images/patientCloneAdd.png" width="523" height="275"/><p class="MarginBottomZero">Information in the <i>Patient to Clone</i> area is read-only and automatically populated with patient data. Select the clone's primary provider, specialty, and clinic. </p>
<ul class="MarginBottomGap">
<li><b>Primary Provider</b>: Defaults to the provider selected on the patient's Edit Patient Information window. Click the dropdown or <b>[...]</b> to change.</li>
<li><b>Specialty</b>: The clone's specialty. Only specialties not currently in use by another clone for the same patient are available. Options are determined by <a href="definitionsclinicspecialties.html">Definitions: Clinic Specialties</a>. <i>Unspecified</i> can only be selected if a clinic in the database has no specialty associated.</li>
<li><b>Clinic</b>: Only appears when Clinics are enabled in Show Features. The patient's default clinic. Only <a href="clinicsetup.html">Clinics</a> associated with the selected specialty are available options.</li>
</ul>
<p>Click <b>Clone</b> to create the clone.</p>
<h2>Break Patient-Clone Relationships</h2>
<p class="MarginBottomZero">To break the relationship between a single patient clone and the original patient: </p>
<ol class="MarginBottomGap">
<li>In the Family Module, select the patient clone.</li>
<li>Click <b>Break</b>.</li>
<li>A confirmation message is shown. Click <b>Yes</b> to break the relationship.</li>
</ol>
<p class="MarginBottomZero">To break all relationships between the original patient and every patient clone: </p>
<ol class="MarginBottomGap">
<li>In the Family Module, select the original patient.</li>
<li>Click <b>Break</b>.</li>
<li>A confirmation message shows. Click <b>Yes</b> to break the relationship.</li>
</ol>
<p>Once the relationship is broken, clones are no longer listed in the Patient Clones grid, but still lists as family members or Super Family members if the clone has not been moved from the family or Super Family.</p>
<h2>Link Duplicate Patients as Clones</h2>
<p class="MarginBottomZero">If a duplicate account exists for a patient, and the duplicate account should be a patient clone, use the <a href="mergepatients.html">Merge Patients</a> tool to merge the duplicate account into a new patient clone.  </p>
<ol class="MarginBottomGap">
<li>On the original account (the account to be kept), create a patient clone (see previous steps).</li>
<li>Go to Tools, Misc Tools, Merge Patients. </li>
<li>Select the new clone account as the <i>Patient to merge into</i> and select the duplicate account as the <i>Patient to merge from</i>, then complete the merge. </li>
</ol>
<h2>Sync Original Patient and Clone</h2>
<p>The following information can be synced between the original patient and clones.</p>
<p><table class="simpletable">
<tr>
<th style="width:25%"></th>
<th style="width:25%"></th>
<th style="width:25%"></th>
<th style="width:25%"></th>
</tr>
<tr>
<td>First Name</td>
<td>Last Name</td>
<td>Preferred Name</td>
<td>Middle Initial</td>
</tr>
<tr>
<td>Responsible Party</td>
<td>Patient Status</td>
<td>Gender</td>
<td>Race</td>
</tr>
<tr>
<td>Language</td>
<td>SSN</td>
<td>Position</td>
<td>Address, Address 2, City, State, Zip</td>
</tr>
<tr>
<td>Address Note</td>
<td>Hm, Wireless, Wk, Phones</td>
<td>Email</td>
<td>Text Message OK</td>
</tr>
<tr>
<td>Billing Type</td>
<td>Fee Schedule</td>
<td>Credit Type</td>
<td>Medicaid ID</td>
</tr>
<tr>
<td>Medical Urgent Note</td>
<td>Ins Plan Info</td>
<td></td>
<td></td>
</tr>
</table>
</p>
<p>Patient forms are not synced, however forms already created on the original patient are copied to the cloned patient. Forms created after the clone has been created are separate between the clone and the original patient.</p>
<p>Insurance coverage amounts are not synced (amounts used and benefits available), so insurance estimates may be inaccurate. To ensure both the original and clone reflect updated amounts, whenever an amount changes for one, add <a href="adjinsbenefits.html">Adjustments to Insurance Benefits</a> to the other.</p>
<p><div class="Note">Note: This may not be an issue if general dental and orthodontic benefits are different and Ortho Lifetime Max and Percentage have been added as <a href="benefitinfo.html">Benefit Information</a>.</div>
</p>
<p>Sync Information:</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In the Family Module, Family Members grid, select the patient or clone. <div class="Note">Note: If a sync is completed from the clone, all clone names become ALL CAPS, and the original patient name become mixed case (e.g., John L. Smith).</div>
</li>
<li>In the toolbar, click <b>Sync</b>. <br/><img src="images/patientCloneSync.png" width="413" height="159" class="ImageInParagraph"/></li>
<li>Click <b>Yes</b> to continue.</li>
<li>A detailed list of synced changes is shown. <br/><img src="images/patientCloneSynced.png" width="588" height="310" class="ImageInParagraph"/></li>
<li>Click <b>OK</b> to close the window. Click <b>Print</b> to print a copy of all changes.</li>
</ol>
<h2>Technical Details</h2>
<p>Bridges to other software: Open Dental always sends the information of the original patient to bridged software, not the clone. If, in the bridged software, information is associated with the clone, users may have issues accessing it. We recommend moving all information to the original patient instead.</p>
</div>
</div>
</body>
</html>```
