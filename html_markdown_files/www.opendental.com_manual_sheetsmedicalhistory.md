# File: ./www.opendental.com/manual/sheetsmedicalhistory.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Medical History Layout</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetsmedicalhistory','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/sheetsmedicalhistory.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/sheetsmedicalhistory.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetsmedicalhistory.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetsmedicalhistory.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetsmedicalhistory.html" >v23.2</option><option value="https://www.opendental.com/manual231/sheetsmedicalhistory.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetsmedicalhistory.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetsmedicalhistory.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetsmedicalhistory.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetsmedicalhistory.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetsmedicalhistory.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetsmedicalhistory.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetsmedicalhistory.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetsmedicalhistory.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetsmedicalhistory.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetsmedicalhistory.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetsmedicalhistory.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetsmedicalhistory.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetsmedicalhistory.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetsmedicalhistory.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetsmedicalhistory.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetsmedicalhistory.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetsmedicalhistory.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetsmedicalhistory.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetsmedicalhistory.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetsmedicalhistory.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetsmedicalhistory.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetsmedicalhistory.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Medical History Layout</p></div>
<div class="GeneralPageContent">
<p>Medical History forms can be customized to meet the needs of the practice.</p>
<p>In <a href="sheets.html">Sheets</a>, double-click on a custom sheet with the type of MedicalHistory.</p>
<img src="images/sheetMedicalHistory.png" width="915" height="814"/><p class="MarginBottomZero">Alternatively, in Sheets:  </p>
<ul class="MarginBottomGap">
<li>Click <b>New</b> and choose <i>MedicalHistory</i> as the Sheet Type to create a new Medical History form from blank.</li>
<li>Select an existing Custom <i>MedicalHistory</i> sheet and click <b>Duplicate</b> to create a copy of an existing Medical History form.</li>
<li>Select the existing Internal <i>MedicalHistory</i> sheet and click <b>Copy</b> to create a copy of a default Medical History sheet that can be edited.</li>
</ul>
<p class="MarginBottomZero">Patients can fill out Medical History forms on a computer (e.g., in an operatory), via a Kiosk, <a href="../site/eclipboard.html">eClipboard</a>, or online using an internet browser (see <a href="../site/webforms.html">Web Forms Feature</a>). If Input Fields are set up on the Medical History, entered data can be imported into the database. </p>
<ul class="MarginBottomGap">
<li><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our Webinar: <a href="https://youtu.be/DQE2FNC9BKw">Medical History Form</a></li>
<li><a href="patientform.html">Patient Forms</a></li>
<li><a href="patientformsimport.html">Import Patient Forms and Medical Histories</a></li>
</ul>
<p>Before use, review internal sheets carefully and customize for the practice. The Medical History sheet uses special input and checkbox fields for medications, allergies, and problems. The internal sheet is only an example and may contain allergies and problems that do not exist in the Open Dental master lists.</p>
<p>It is important that the master <a href="medicationmaster.html">Medications List</a>, <a href="allergiesmaster.html">Allergy List</a>, and <a href="problemmaster.html">Problem List</a> do not contain duplicates. Each input field and checkbox on a Medical History sheet corresponds to a specific item in the master list. When importing, spelling is compared to find matches. If exact matches are not found, import will not work properly. For example, if the allergy on the Medical History is attached to 'Penicillin', but the patient's medication list contains <i>Pen</i>, the allergies will not match and the import will not work.</p>
<p class="MarginBottomZero">Medication, problem, and allergy input fields and checkboxes require special setup. See below for additional information. For general information on customizing the Medical History sheet, see the following pages:  </p>
<ul class="MarginBottomGap">
<li><a href="sheetproperties.html">Sheet Def Properties</a></li>
<li><a href="sheetsaddelements.html">Sheet Field Types</a></li>
</ul>
<h2>Medications</h2>
<p>Input fields and checkboxes fields can be used independently or together for medications.</p>
<img src="images/medhistoryCheckInput.gif" width="692" height="96"/><p>Patients enter medication names in Input Fields (inputMed##). Up to twenty inputMed fields are allowed on a sheet. Each inputMed# can be only used once on a single sheet. Also see <a href="sheetsinputfield.html">Sheet Input Field</a>.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>For new medications: Patients can type any new medications into the input field.</li>
<li>For medication updates: If a patient's medication list contains a medication that matches an inputMed# field value, the field automatically populates with the current medication. </li>
</ul>
<p class="MarginBottomZero">To add an input field:  </p>
<ol class="MarginBottomGap">
<li>On the Edit Sheet Def window, click <b>Input Field</b>. <br/><img src="images/sheetInputFieldMedical.png" width="573" height="464" class="ImageInParagraph"/></li>
<li>Select an inputMed# field that is not currently in use, then enter its properties.</li>
<li>If utilizing the mobile layout, enter a <i>Mobile Caption</i>. This is required.</li>
<li>Click <b>Save</b>. Each inputMed field can only be used once on a sheet.</li>
</ol>
<p><div class="Note">Note: <a href="../site/webforms.html">Web Forms Feature</a> do not populate inputMed fields automatically.</div>
</p>
<h2>CheckMed Fields</h2>
<p>CheckMed checkboxes can be used with Input Fields as No indicators. This is useful for Medical History Updates so a patient can indicate if they are no longer taking a medication. Since current medications automatically populate the input field, patients just need to indicate if they are no longer taking the med. See <a href="sheetscheckbox.html">Sheet Checkbox and Radio Button</a>. <div class="Note">Note: Checkboxes with checkMed# fields do not work in <a href="../site/webforms.html">Web Forms</a> as the inputMed fields does not populate automatically.</div>
</p>
<p>Ensure the <i>Static Text</i> instructs the patient that the checkboxes indicate <i>No</i>.</p>
<p class="MarginBottomZero">To add a CheckMed checkbox: </p>
<ol class="MarginBottomGap">
<li>On the Edit Sheet Def window, click <b>Check Box</b>. <br/><img src="images/sheetMedicalHistCheckbox.png" width="677" height="483" class="ImageInParagraph"/></li>
<li>Click on the checkMed# field that corresponds to an inputMed# field (e.g., <i>checkMed1</i> corresponds to <i>inputMed1</i>).</li>
<li>Click <b>Save</b>.</li>
</ol>
<p>Importing: When a user imports medications into the database, medications manually typed in by the patient are always treated as new medications, regardless if the checkbox is marked.</p>
<h2>Allergies and Problems</h2>
<p>Checkboxes can be used as Yes/No indicators for allergies and problems. If allergies or problems are already entered in a patient's record, the checkbox is automatically marked on the Medical History form when adding a new form to the patient.</p>
<img src="images/medicalhistoryAllergy.gif" width="237" height="128"/><p class="MarginBottomZero">To add a problem or allergy checkbox: </p>
<ol class="MarginBottomGap">
<li>On the Edit Sheet Def window, click <b>Check Box</b>. <br/><img src="images/sheetCheckBoxMedical.png" width="677" height="550" class="ImageInParagraph"/></li>
<li>Select the allergy or problem field name. The Allergies or Problems list displays items entered in the master <a href="allergiesmaster.html">Allergy List</a> and <a href="problemmaster.html">Problem List</a>. If a user is editing a Checkbox linked to an Allergy or Problem missing from the master lists, a prompt displays to add them. Click <b>Yes</b> to create the new Allergy or Problem.<br/><img src="images/sheetsAllergyAddPrompt.png" width="368" height="133" class="ImageInParagraph"/></li>
<li>Click on the allergy or problem this checkbox applies to. Click the <b>Add Allergy/Add Problem</b> button to add new items to the master lists of each. See <a href="allergiesmaster.html">Allergy List</a> and <a href="problemmaster.html">Problem List</a> for details on adding each.<br/></li>
<li>On the right, select whether the checkbox indicates Yes or No. Users can create all yes boxes, or, typically, create both a yes and a no box for each Allergy or Problem, and they are linked together. This causes them to toggle as a radio button, meaning there can be only a Yes or No answer, not both.</li>
<li>If utilizing the mobile layout, enter a <i>Mobile Group Caption</i>. This is required. </li>
<li>Click <b>OK</b>.</li>
<li>Add a <i>Static Text</i> field next to the checkbox to label it.</li>
</ol>
<h2>Troubleshooting</h2>
<p class="MarginBottomZero"><p><b>I've renamed a Problem or Allergy in my master list; do I need to do anything on my sheets?</b></p>
 If a problem or allergy is renamed in the master Allergies or Problems lists, ensure all Medical History sheets that use the allergy or problem are updated.  </p>
<ol class="MarginBottomGap">
<li>Open the Medical History sheet where the allergy or problem is used. </li>
<li>Double-click on the pertinent check boxes. </li>
<li>Select the new allergy or problem to update it on on the sheet.</li>
<li>Repeat the steps for each Medical History sheet the allergy or problem is used.</li>
</ol>
<p><p><b>My patient marked yes for a problem or allergy that is in the Problems or Allergies list, but there is no option to import.</b></p>
 The spelling in the Problems or Allergies List does not match the spelling on the sheet. If spelling is inconsistent, then importing will not work properly. Correct the spelling on either the sheet or the master list to allow for importing. The problem or allergy can also be added manually. See <a href="problempatient.html">Problems</a> and <a href="allergiespatient.html">Allergies</a>. </p>
</div>
</div>
</body>
</html>```
