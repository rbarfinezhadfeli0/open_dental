# File: ./www.opendental.com/manual232/sheetsfillout.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Fill Sheet</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetsfillout','patientform','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/manual243/sheetsfillout.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/sheetsfillout.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetsfillout.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetsfillout.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetsfillout.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/sheetsfillout.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetsfillout.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetsfillout.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetsfillout.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetsfillout.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetsfillout.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetsfillout.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetsfillout.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetsfillout.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetsfillout.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetsfillout.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetsfillout.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetsfillout.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetsfillout.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetsfillout.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetsfillout.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetsfillout.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetsfillout.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetsfillout.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetsfillout.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetsfillout.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetsfillout.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetsfillout.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Fill Sheet</p></div>
<div class="GeneralPageContent">
<p>Sheets can be filled in, edited, signed on the Fill Sheet window.</p>
<p>In <a href="patientform.html">Patient Forms</a> double-click an existing form to edit.</p>
<img src="images/sheetFillOut.png" width="878" height="722"/><p class="MarginBottomZero">The Fill Sheet window will also open when: </p>
<ul class="MarginBottomGap">
<li>Clicking <b>Add</b> from the Patient Form window and selecting a sheet type to fill out a new form.</li>
<li>Adding or editing a <a href="letterspatient.html">Patient Letter</a>.</li>
<li>Adding or editing a <a href="letterreferral.html">Referral Letter</a> or <a href="referralslips.html">Referral Slip</a>.</li>
<li>Adding or editing an <a href="examsheets.html">Exam Sheet</a>.</li>
<li>Adding or editing a <a href="labslips.html">Lab Slip</a>.</li>
<li>Adding or editing a <a href="publichealthscreeningcustom.html">Public Health Custom Screening</a>.</li>
<li>Double-clicking an existing sheet from the Progress Notes section of the <a href="chart.html">Chart Module</a>.</li>
<li>Double-clicking an existing sheet from the Communications Log section of the <a href="account.html">Account Module</a>.</li>
<li>Clicking <b>View</b> from the <a href="statementwindow.html">Statement Window</a> (only includes limited options).</li>
</ul>
<p>Above is an example of a patient registration form.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>All text in input text fields, output text fields, and static text fields is editable.</li>
<li>Input fields are indicated with a light yellow background.</li>
<li>Checkboxes and radio buttons can be selected/deselected (toggle an X on or off).</li>
<li>Signature boxes accept electronic signatures. Once signed, the date and time of the signature will show. If a signature is invalidated or cleared the date/time stamp is removed.</li>
<li>To enter information on a combo box, there are two options: <ul>
<li>Click on the combo box and select from the dropdown list.</li>
<li>On your keyboard, tab to the combo box, use the space bar to open the dropdown list, use the arrow to select the item, then press Enter.</li>
</ul>
</li>
<li>Users can arbitrarily freehand draw anywhere on the form using a stylus or mouse.</li>
<li>Some <a href="statictextfields.html">Static Text Fields</a> fields will prompt the <a href="apptspatient.html">Patient Appointments</a> window to open. Select the desired information to proceed to the Fill Sheet window.</li>
</ul>
<h2>Fill Sheet Options</h2>
<p>The following displays for any form being filled.</p>
<p><div class="Note">Note: If a signature is required for the selected sheet, changes to editable options (e.g., Show Order In Kiosk, Description, etc.) can only be saved if the form is signed. </div>
</p>
<img src="images/sheetFillOutOptions.png" width="863" height="120"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date time</b>: Indicates the date and time the form is generated.</li>
<li><b>Description</b>: Defaults to the sheet description set in <a href="sheetproperties.html">Sheet Def Properties</a>.</li>
<li><b>Show Order in Kiosk</b>: If adding this form to the Kiosk queue, enter the form's order in the queue. See <a href="kiosk.html">Kiosk Manager</a>.</li>
<li><b>Internal Note</b>: Enter any notes.</li>
<li><b>Autosave to Images</b>: Only appears when an <a href="definitionsimagecat.html">Definitions: Image Categories</a> has usage set to <i>Autosave Forms</i>. Check to automatically save a copy of the sheet to the Imaging Module when clicking <b>OK</b>. Checked by default if the specific sheet is marked as <i>Autosave</i> in <a href="sheetproperties.html">Sheet Def Properties</a>.</li>
<li><b>Eraser Tool</b>: Check the box to turn the pointer into an eraser then click and drag, or use the stylus, to erase a drawing. A drawing is defined as a continuous curved line without lifting the pen, so a continuous line is considered a single object. Uncheck to turn the eraser off.</li>
<li><b>Print/Email</b>: Print and/or email the form.<br/><img src="images/sheetOutput.png" width="453" height="274" class="ImageInParagraph"/><br/><ul>
<li><b>Paper copies</b>: Enter the number to print. The default value depends on the form or letter selected and the emails entered.</li>
<li><b>Email to Patient</b>: If an email is entered on the Edit Patient Information window it will show. Check the box to email the form or letter to the patient. When selected, the form or letter will be converted to a PDF and attached to the outgoing email.</li>
<li><b>Email to Referral</b>: Only shows if creating a referral letter. If an email is entered for the referral on the Edit Referral window it will show. Check the box to email the letter to the referral.</li>
<li>Click <b>OK</b>. Paper copies are sent directly to the printer. Once printed or emailed, the form is archived in the database for later reference. Forms can be viewed at the bottom of the Account Module or in the Chart Module.</li>
</ul>
</li>
<li><b>Create PDF</b>: Click to save the form as a PDF. </li>
<li><b>Print</b>: Click Print to send the form directly to the printer. Prints one copy at a time.</li>
<li><b>Email</b>: Click Email to open the Edit Email Message window with a PDF attached to the outgoing email. Finish sending the email from this window. See <a href="emailmessage.html">Email Message Edit</a>.</li>
<li><b>To Kiosk</b>: Click to send the form to the <a href="kioskpatient.html">Kiosk</a>.</li>
<li><b>Change Pat</b>: Change patient. Associate the sheet with a different patient. Select the patient then click <b>OK</b> to move the sheet. It will be viewable in the new patient's Progress Notes. Changing patients will not change or affect any information in the sheet (e.g., patient name).</li>
<li><b>Add Field</b>: Add a new field to the sheet. Pat Image is currently the only field type that can be added. See Add Field below.</li>
<li><b>Reduce Font Size</b>: Only available for existing sheets. Click to reduce the font size of all text on the sheet by 0.5 pts. Click <b>?</b> for more information on the tool. </li>
<li><b>Delete</b>: Remove a sheet. The <i>Sheet Delete</i> security permission is required. <ul>
<li>Deleted sheets will no longer show in the Chart Module or commlog but will still exist in the database.</li>
<li>To view deleted sheets, open the Chart Module in Audit mode (<a href="showtabchart.html">Show Chart Views</a>, click Audit).</li>
<li><b>Restore</b>: Deleted sheets have a Restore option. To restore a deleted sheet, double-click it in Audit mode to open the Fill Sheet window, then click <b>Restore</b>.</li>
</ul>
</li>
<li><b>Unlock</b>: Applies to forms with an electronic signature box. Once a sheet is signed, it locks. Only users with the <i>Sheet Edit</i> security permission can unlock it. Click to unlock the sheet and make changes. Any changes made to the sheet will invalidate (clear) the saved electronic signatures and the sheet will need to be signed again.</li>
</ul>
<h2>Add Field</h2>
<p>Additional <a href="sheetspatimage.html">Pat Image</a> fields can be added to a sheet.</p>
<p class="MarginBottomZero">To add a new field in the Fill Sheet window:  </p>
<ol class="MarginBottomGap">
<li>Click <b>Add Field</b>. The Add Field window opens.</li>
<img src="images/fillSheetAddField.png" width="467" height="318"/><li> Click <b>Pat Image</b> to add the field to the sheet. The Edit Image Field window will open. Currently, Pat Image is the only field type that can be added. Additional field types may be available in the future.</li>
<img src="images/fillSheetEditImageField.png" width="524" height="333"/><li>Click <b>Change</b> to select a document or mount that has been uploaded to the patient's <a href="images.html">Imaging Module</a>. Change <i>X Pos</i> and <i>Y Pos</i> to change the position of the image on the sheet. Change the <i>Width</i> and <i>Height</i> to change the size of the image. Click <b>OK</b> to add the field to the sheet.</li>
<img src="images/fillSheetPatImage.png" width="848" height="752"/><li>To edit the field after it has been added to the sheet, double-click the image from the sheet. The Edit Image Field window is opened again.</li>
</ol>
<h2>Select Procedures</h2>
<p>Sheets that include the <i>ProcsWithFee</i> or <i>ProcsNoFee</i> grid will prompt to select procedures before opening the Fill Sheet window.</p>
<img src="images/sheetProcedureSelect.png" width="652" height="229"/><p>Select one or more procedures from the list, then click <b>OK</b> to add procedures to the sheet. Only procedures treatment planned or completed for the selected patient are listed.</p>
<p>To generate a sheet without the grid, click <b>Cancel</b>.</p>
<p class="MarginBottomZero">Columns: </p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Updates depending on procedure status. Will display the treatment planned date, date of scheduled appointment, or date completed. </li>
<li><b>Th</b>: Tooth number associated with the procedure.</li>
<li><b>Surf</b>: Surfaces associated with the procedure. </li>
<li><b>Description</b>: Procedure description. </li>
<li><b>Amount</b>: Procedure fee before any discounts, adjustments, or write-offs.</li>
<li><b>Code</b>: Procedure code.</li>
</ul>
<p><div class="Note">Note: When a Consent Form with these one of these grids is generated from the Treatment Plan Module, this window is skipped. Only procedures already highlighted in the Treatment Plan are included on the sheet. </div>
</p>
</div>
</div>
</body>
</html>```
