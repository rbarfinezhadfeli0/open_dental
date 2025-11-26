# File: ./www.opendental.com/manual232/sheetsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Edit Sheet Def</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetsetup','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/sheetsetup.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/sheetsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetsetup.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/sheetsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetsetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Edit Sheet Def</p></div>
<div class="GeneralPageContent">
<p>Open Dental has several internal sheets that can be copied and customized for practice needs. </p>
<p>In <a href="sheets.html">Sheets</a>, click <b>New</b>, or double-click a custom sheet to edit.</p>
<img src="images/sheetsRegForm.png" width="915" height="601"/><p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our video on Mobile Web Forms: <a href="https://youtu.be/vxTM-m3JHBU">Web Forms Tutorial</a>.</p>
<h2>Preview</h2>
<p>On the left is a preview of the fields and elements currently on the sheet and their location on the page. </p>
<img src="images/sheetsEditPreview.png" width="762" height="386"/><p>Multiple fields can be selected at a time by highlighting in the Fields list or click and dragging by starting in a blank area to bring up the selection box. Selected fields are indicated in red. </p>
<p>Click and drag selected fields to move their location on the sheet. </p>
<p>Double-click a field or element to edit that field's properties.</p>
<h2>Properties</h2>
<img src="images/sheetDefProperties.png" width="285" height="54"/><p><b>Sheet Name</b>: Name of the current sheet is listed, but cannot be edited here. Click <b>Edit Properties</b> to rename the sheet.</p>
<p><b>Show Mobile</b>/<b>Hide Mobile</b>: Click to open or hide the <a href="sheetsetupmobile.html">Edit Mobile Sheet Def</a> window.</p>
<p><b>Edit Properties</b>: Click to make changes to <a href="sheetproperties.html">Sheet Def Properties</a> (e.g., name, default fonts, page orientation, page size).</p>
<h2>Copy, Paste, Align, and Miscellaneous Tools</h2>
<img src="images/sheetDefAlign.png" width="239" height="106"/><p><b>Undo Ctrl-Z</b>: Undo the last action.</p>
<p><b>Redo Ctrl-Y</b>: Redo to last undone action.</p>
<p><b>Copy Ctrl-C</b>: Copy the selected field(s).</p>
<p><b>Paste Ctrl-V</b>: Paste the selected field(s).</p>
<p><b>Blue</b>: Check to make all fields blue except static text fields, lines, and rectangles (i.e., fields allowing custom color).</p>
<p><b>Grid Snap</b>: Click to enable grid. Auto Snap makes it easier to move fields and ensure they are aligned. <img src="images/setupAutoSnap.png" width="465" height="152"/><br/> Enter a value between 10 and 100(pixels) to enable. Based on the value entered, a grid will appear in the background of the <i>Edit Sheet Def</i> window to assist in aligning elements.</p>
<p class="MarginBottomZero"><b>Align</b>: Select fields and click a button to align the selected fields. </p>
<ul class="MarginBottomGap">
<li>Left: Click to align fields with the left-most selected field.</li>
<li>Center: Click to align fields in the center of the selection.</li>
<li>Right: Click to align fields with the right-most selected field.</li>
<li>Top: Click to align fields with the top-most selected field.</li>
</ul>
<h2>Fields</h2>
<img src="images/sheetDefFields2.png" width="156" height="231"/><p class="MarginBottomZero">Existing sheet fields are listed here. To add a new sheet field, see <i>Add Field/Show</i> below. To  </p>
<ul class="MarginBottomGap">
<li>To edit a field or element, double-click on it in the preview, or double-click on it in the Fields list.</li>
<li>To edit an image or line, double-click on the item in the Fields list. </li>
<li>To set up fields that can be imported into the database, see <a href="sheetsmedicalhistory.html">Medical History Layout</a> or <a href="sheetspatientform.html">Patient Form Layout</a>. </li>
<li>To select multiple fields, press Ctrl while clicking.  <ul>
<li>Alternatively, click and drag on the sheet (starting in a blank area). A rectangle tool will appear. Drag the rectangle to select multiple objects.</li>
</ul>
</li>
<li>To move fields, drag them with the mouse, or use the arrows on the keyboard. </li>
<li>To move the fields in large increments, press Shift while pressing the arrows. </li>
</ul>
<p><b>Guide Lines</b>: When dragging one or more fields, blue lines will appear when the the selected fields align with one or more other fields in the sheet.</p>
<img src="images/sheetFieldGuidelines.png" width="285" height="112"/><h2>Add Field/Show</h2>
<img src="images/sheetDefFields.png" width="130" height="490"/><p>On the left, click a button to add a new <a href="sheetsaddelements.html">Sheet Field</a>. Not all fields are available for each sheet type. Fields not available for the sheet type will not be available in the Add Field list. To edit existing sheet fields, see <i>Fields</i> below. MobileHeader cannot be added as a field type. The title corresponds to the Show checkbox only.</p>
<p class="MarginBottomZero">On the right, check or uncheck boxes to show or hide the corresponding field type.  </p>
<ul>
<li><b>All</b>: Click to check all boxes to show all field types.</li>
<li><b>None</b>: Click to uncheck all boxes to hide all fields types.</li>
</ul>
<p class="MarginBottomGap">The field(s) will be hidden in the sheet in the Fields shown above.</p>
<h2>Language</h2>
<img src="images/sheetDefLanguage.png" width="150" height="66"/><p class="MarginBottomZero"><b>Synch matched fields</b>: Determine if new fields added to the default language sheet are added to secondary language sheets automatically and movement synchs automatically. Checked by default.  </p>
<ul class="MarginBottomGap">
<li>Checked: New fields added to the <i>Default</i> sheet will be added to all other languages. If the field is moved on the default sheet, it will be moved to the same position on the other sheets. Once a field is edited from another language (i.e., not the default) movements made on the default will no longer synch to that translation. Fields that will not synch will be outlined in green on the non-default sheet. Fields that will synch will be outlined in blue on the non-default sheet.</li>
<li>Unchecked: New fields added to the <i>Default</i> sheet will need to be added to other languages manually. Any movements will also need to be made manually on other sheets. </li>
</ul>
<p><b>Dropdown</b>: Select a language translation to edit. See <a href="sheetsetuplanguage.html">Language Translations for Sheets</a> for details.</p>
<h2>Pages</h2>
<img src="images/sheetDefPages.png" width="130" height="51"/><p class="MarginBottomZero"><b>Add</b>: Add a new page to end of the sheet. </p>
<ul class="MarginBottomGap">
<li>A 40 px margin is applied to the top of each additional page.</li>
<li>A 60 px margin is applied to the bottom of each additional page.</li>
<li>For example, a standard 1100 px height sheet has 1000 px of usable space. </li>
<li>Any fields outside the margins are not visible when using the sheet. If a static image extends past the margins it is cropped.</li>
</ul>
<p><b>Remove</b>: Delete the last page from the sheet. No fields can exist on the page in order to remove.</p>
<p>If the sheet is multiple pages, a darker dotted line represents the page break.</p>
<p>Items should not be placed on a page break line. Any fields on a page break line will be divided in two when printing. </p>
<h2>Miscellaneous Cont.</h2>
<img src="images/sheetDefMisc.png" width="285" height="65"/><p class="MarginBottomZero"><b>Tab Order</b>: Click to view and edit the order followed when users fill out the form and press Tab. Tab orders can be used on Input Fields and Checkboxes. All other options will be grayed out when editing Tab Order.  </p>
<ol class="MarginBottomGap">
<li>Click <b>Tab Order</b> to switch the window to tab order mode.</li>
<li>Click on each field to assign its tab order. The corresponding order number will appear on the field and in the Fields list. To remove a tab order, click on the field again (it will change to zero).</li>
<li>To exit tab order mode, click <b>Tab Order</b> again.</li>
</ol>
<p><b>Tips</b>: Click to view keyboard shortcuts and hotkeys available when editing sheets.</p>
<p><b>OK</b>: Exit the Sheet Def Edit window and save changes. If making changes to a sheet in use by eClipboard or Web Forms, a prompt will display to update the form in use. See below for details.</p>
<p><b>Delete</b>: Delete the entire sheet.</p>
<p><b>Cancel</b>: Exit the Sheet Def Edit window without saving any changes. </p>
<h2>Updating Sheets in Use</h2>
<p>When sheets are in use by eClipboard or Web Forms, a prompt may display to update the sheet in use. </p>
<p class="MarginBottomZero">If updating an eClipboard sheet with a type of <i>Once</i>: </p>
<ol class="MarginBottomGap">
<li>The first prompt will display. Check <b>Force patients to fill out again</b> to generate the sheet again for patients who have already filled the previous version, then click OK to continue.<br/><img src="images/sheetInUseeClipboardForce.png" width="280" height="212" class="ImageInParagraph"/></li>
<li>A second prompt will display to confirm the decision. Click <b>Yes</b> to confirm or <b>No</b> to cancel.<br/><img src="images/sheetInUseeClipboardConfirm.png" width="403" height="146" class="ImageInParagraph"/></li>
</ol>
<p class="MarginBottomZero">If updating a Web Form in use, the following prompt will display.<br/><img src="images/sheetInUseWebForm.png" width="301" height="159" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li> Click <b>Yes</b> to update the Web Form in use.</li>
<li>Click<b> No</b> to make changes to the sheet but not the Web Form. Web Forms can be updated from <a href="webformsupload.html">Web Form Setup</a> later on. </li>
</ul>
<h2>Sheet Revisions</h2>
<img src="images/sheetsRevisionNumber.png" width="172" height="28"/><p>At the top of each sheet is a Revision Number. </p>
<p>When a sheet is in use for a patient, we use the revision number to determine if an updated sheet is needed. When using eClipboard, and a form has a behavior type of <i>PreFill</i>, patients will be prompted to fill a new form. The patient will update the entire form again, not just the fields edited or changed.</p>
<p> For example, if the office created a new Financial Agreement, it would be Revision 1. A patient comes into the office for the first time and signs the Financial Agreement. Before the patient arrived for their second appointment, the office made updates to the Financial Agreement policy (now Revision 2). When using eClipboard, the patient can be prompted to sign a new agreement, since changes have been made. </p>
<p>A new revision number is created any time a field is deleted or added for a form, and that form was in use by a patient. </p>
<h2>Hints</h2>
<p><p><b>Web Forms and Browsers:</b></p>
 If using a sheet for <a href="../site/webforms.html">Web Forms Feature</a>, the view of the sheet is dependent on the browser the web form is viewed in. If a browser doesn't support a font, a different font will be substituted. This can affect layout of the sheet. We recommend using common fonts (e.g., Times New Roman, Arial, Courier) and testing sheets on a device and browser the office plans to support. If fonts are substituted, Static Text Fields may need to be larger to fit all text.</p>
<p><p><b>Single Page Sheets:</b></p>
If a single page sheet, make sure all fields and elements are located within the page.</p>
<p class="MarginBottomZero"><p><b>Adding Initial Boxes:</b></p>
 To add initial boxes so a patient can distinctly acknowledge sections of a form, you have two options: </p>
<ol class="MarginBottomGap">
<li>Create a pseudo margin so there is room on the right or left side of the form. Add checkboxes as the initial boxes and a signature box at the bottom. Patients can check the boxes, then sign at the bottom to establish identity and acknowledgment.</li>
<li>If using touch screens, use Rectangles larger than checkboxes, labeled 'initials'. Customer can then use a finger or stylus to initial. <p>Checkboxes are usually sufficient for an electronic form because electronic signatures will be invalidated if the state of a checkbox changes (e.g., from unchecked to checked).</p>
</li>
</ol>
<p><p><b>Printing Blank Forms:</b></p>
 If a blank form is needed (e.g., a patient needs to fill one out by hand), create a dummy patient where the last name is entered as only a period, no other information, as seen below. </p>
<img src="images/sheetsBlankFormName.png" width="293" height="45"/><p>Generate any forms from this patient and patient information will not be pre-filled.</p>
<p><p><b>Web Form Setup</b></p>
If using setting up a sheet for use with <a href="../site/webforms.html">Web Forms</a>, the sheet must contain the <a href="inputfieldnames.html">Input Fields</a> for first name (FName), last name (LName), and Birthdate.</p>
<p><p><b>Organizing Fields</b></p>
Do not overlap fields. Overlapping fields will cause annoyances. There is no way to set which fields draw first, so if, for example, a user tries to put a checkbox on top of a paragraph of text then the checkbox could easily be hidden under the white background of the text box. <p class="MarginBottomZero">Some exceptions:  </p>
<ul class="MarginBottomGap">
<li>Lines can safely overlap other fields.</li>
<li>Any field may be placed on top of a background image</li>
<li>If images need to overlap (e.g., to create a page header) use a third party software to do so, then save as a single image.</li>
</ul>
</p>
</div>
</div>
</body>
</html>```
