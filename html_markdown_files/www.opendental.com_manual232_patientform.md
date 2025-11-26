# File: ./www.opendental.com/manual232/patientform.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Patient Forms</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('patientform','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/manual243/patientform.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/patientform.html" >v24.2</option><option value="https://www.opendental.com/manual241/patientform.html" >v24.1</option><option value="https://www.opendental.com/manual233/patientform.html" >v23.3</option><option value="https://www.opendental.com/manual232/patientform.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/patientform.html" >v23.1</option><option value="https://www.opendental.com/manual224/patientform.html" >v22.4</option><option value="https://www.opendental.com/manual223/patientform.html" >v22.3</option><option value="https://www.opendental.com/manual222/patientform.html" >v22.2</option><option value="https://www.opendental.com/manual221/patientform.html" >v22.1</option><option value="https://www.opendental.com/manual214/patientform.html" >v21.4</option><option value="https://www.opendental.com/manual213/patientform.html" >v21.3</option><option value="https://www.opendental.com/manual212/patientform.html" >v21.2</option><option value="https://www.opendental.com/manual211/patientform.html" >v21.1</option><option value="https://www.opendental.com/manual205/patientform.html" >v20.5</option><option value="https://www.opendental.com/manual204/patientform.html" >v20.4</option><option value="https://www.opendental.com/manual203/patientform.html" >v20.3</option><option value="https://www.opendental.com/manual202/patientform.html" >v20.2</option><option value="https://www.opendental.com/manual201/patientform.html" >v20.1</option><option value="https://www.opendental.com/manual194/patientform.html" >v19.4</option><option value="https://www.opendental.com/manual193/patientform.html" >v19.3</option><option value="https://www.opendental.com/manual192/patientform.html" >v19.2</option><option value="https://www.opendental.com/manual191/patientform.html" >v19.1</option><option value="https://www.opendental.com/manual184/patientform.html" >v18.4</option><option value="https://www.opendental.com/manual183/patientform.html" >v18.3</option><option value="https://www.opendental.com/manual182/patientform.html" >v18.2</option><option value="https://www.opendental.com/manual181/patientform.html" >v18.1</option><option value="https://www.opendental.com/manual174/patientform.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Patient Forms</p></div>
<div class="GeneralPageContent">
<p>Patient Forms are types of Sheets that patients can complete electronically, such as registration forms, HIPAA forms, financial agreements, and medical histories.</p>
<p>In the <a href="toolbar.html">Main Toolbar</a>, click <b>Forms</b>.</p>
<img src="images/patientFormsSm.png" width="617" height="383"/><p class="MarginBottomZero">Patients can complete the forms in one of the following ways: </p>
<ul class="MarginBottomGap">
<li>Directly in the form (e.g., on the operatory computer, on a tablet, etc.)</li>
<li>Via the <a href="kiosk.html">Kiosk Manager</a></li>
<li>Via Web Forms</li>
<li>On paper, then scanned into the Imaging Module</li>
<li>Via <a href="../site/eclipboard.html">eClipboard</a></li>
</ul>
<p>Any Patient Forms or Medical Histories already generated for the patient show in this window. Images, PDFs, or other files that are in an Images category marked with a usage of <i>Show in Patient Forms</i> also show.</p>
<p>Double-click on a row to view the document or fill it out in the <a href="sheetsfillout.html">Fill Sheet</a> window. From there, it can be printed, emailed, filled out, or sent to the kiosk.</p>
<p class="MarginBottomZero"><b>Setup</b>: Click Setup in the upper left corner, then select a menu option. </p>
<ul class="MarginBottomGap">
<li><b>Sheets</b>: Go to <a href="sheets.html">Sheets</a> to customize <a href="sheetspatientform.html">Patient Forms</a>, <a href="sheetsmedicalhistory.html">Medical Histories</a>, or <a href="sheetsconsent.html">Consent Forms</a>.</li>
<li><b>Image Categories</b>: Opens the <a href="definitionsimagecat.html">Image Categories</a> Definitions window. </li>
<li><b>Options</b>: Check the box to show Consent Forms in the list. <br/><img src="images/patientFormOptions.png" width="403" height="178" class="ImageInParagraph"/></li>
</ul>
<p><b>Add</b>: Create a new form for this patient. All Sheets with a type of PatientForm or MedicalHistory are listed in Pick Sheet. Consent forms are also listed if the option is checked above.</p>
<img src="images/sheetPickerForm.png" width="400" height="368"/><p><div class="Note">Note: Items that show in this window depend on the following: <ul>
<li> If no custom PatientForm sheets have been created, the internal Registration Form, Financial Agreement, HIPAA, and Consent forms list by default.</li>
<li>When at least one custom sheet PatientForm exists, internal patient form sheet types are no longer listed. To get them to show, create a custom copy of each.</li>
<li> If no custom MedicalHistory sheets have been created, the internal Medical History Simple is listed by default. When at least one custom MedicalHistory exists, only custom medical histories are listed.</li>
</ul>
</div>
</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>To Kiosk</b>: Highlight one or more forms, then click <b>To Kiosk</b> to put the form in the Kiosk queue. <ul>
<li> All forms waiting to go to the kiosk have a number indicating their order in the Kiosk column. </li>
<li>To change the order, double-click the form to open the Fill Sheet window, then change the value in the <i>Show Order in Kiosk</i> field. To remove the form from the Kiosk, clear the number from the field.</li>
<li>If the form has a required signature field, the kiosk order cannot be removed or altered. The form must be deleted and sheets re-added in the proper order.</li>
</ul>
</li>
<li>Highlighting a sheet and clicking <b>OK</b>, or double-clicking a sheet opens the Fill Sheet window.</li>
</ul>
<p><b>Kiosk</b>: Launch the <a href="kioskpatient.html">Kiosk</a> on this computer to allow patient to fill out forms. Alternatively, users can control a dedicated Kiosk from the <a href="kiosk.html">Kiosk Manager</a>.</p>
<p><b>Copy</b>: Create a new copy of an existing form (useful when updating information).</p>
<p><b>Pre-Fill</b>: Create a new form using information from the database and the selected patient form. See Pre-Fill Logic section below.</p>
<p><b>Import</b>: Import completed form data into the database. See <a href="patientformsimport.html">Import Patient Forms and Medical Histories</a>.</p>
<h2>Medical History Update</h2>
<p>To have a patient review a previous medical history and make changes, highlight the most recent medical history and click <b>Pre-Fill</b> to open it. The pre-filled copy does not have a signature and does have today's date. Print it, send it to the Kiosk, or eClipboard, so the patient can make any changes and sign it. Changes are saved to the new form; they do not overwrite the original. Then import the new form, or enter the changed data.</p>
<h2>Pre-Fill Logic</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Only works with Custom Sheet Defs (see <a href="sheets.html">Sheets</a>). If an Internal Sheet Def is selected for Pre-Fill, users are prompted to select a Sheet Def type when attempting to import.</li>
<li>When using Pre-Fill on forms filled out in version 22.2 or newer, fields are filled from the database if available (e.g., patient information fields). Miscellaneous fields (i.e., <i>misc</i> sheet field type) are copied from the previously filled out form.</li>
<li>When using Pre-Fill with forms filled out prior to version 22.2, only database fields are pre-filled. Miscellaneous fields (i.e., <i>misc</i> sheet field type) are left blank.</li>
<li>When using Pre-Fill with forms filled out in version 23.1 and newer <i>misc</i> checkboxes and combo boxes are prefilled with data from a previously filled out form, if available.</li>
<li>When using Pre-Fill with forms filled out prior to version 23.1, <i>misc</i> checkboxes and combo boxes are left blank. </li>
<li>Retrieved Web Forms can only be used to pre-fill data if the Web Form was created or updated after version 22.2 or greater. See <a href="webformsupload.html">Web Form Setup</a> for instructions.</li>
<li>Insurance information only pre-fills from the database and cannot be copied from previous form.</li>
<li>If there are medications, allergies, and/or problems entered into the database, these values are used to pre-fill the form. If no medications, allergies, and/or problems are entered into the database, data from the previous form is copied.</li>
<li>Any change to the sheet (other than editing an existing Static Text) requires the form to be filled out again before it can be used for Pre-Fill.</li>
</ul>
</div>
</div>
</body>
</html>```
