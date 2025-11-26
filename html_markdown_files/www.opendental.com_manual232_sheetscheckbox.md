# File: ./www.opendental.com/manual232/sheetscheckbox.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sheet Checkbox and Radio Button</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetscheckbox','sheetsetup','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/sheetscheckbox.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/sheetscheckbox.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetscheckbox.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetscheckbox.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetscheckbox.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/sheetscheckbox.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetscheckbox.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetscheckbox.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetscheckbox.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetscheckbox.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetscheckbox.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetscheckbox.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetscheckbox.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetscheckbox.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetscheckbox.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetscheckbox.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetscheckbox.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetscheckbox.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetscheckbox.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetscheckbox.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetscheckbox.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetscheckbox.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetscheckbox.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetscheckbox.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetscheckbox.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetscheckbox.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetscheckbox.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetscheckbox.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sheet Checkbox and Radio Button</p></div>
<div class="GeneralPageContent">
<p>Add Checkboxes to sheets to allow for easy data entry on Medical History Forms, Exam Sheets, and more. </p>
<p>In <a href="sheetsetup.html">Edit Sheet Def</a>, click <b>Check Box</b>.</p>
<img src="images/sheetsCheckbox.png" width="598" height="474"/><p>Alternatively, double-click an existing Check Box field from the Fields list to edit.</p>
<p class="MarginBottomZero"> Checkboxes and radio buttons are <a href="sheetsaddelements.html">Sheet Field Types</a> used to indicate a selection by toggling an <i>X</i> on or off. The look of this window and the available fields change depending on sheet type and selected Field Name.  </p>
<ul class="MarginBottomGap">
<li>Checkboxes allow one or many selections. </li>
<li>Radio buttons allow only one selection out of a group of options. </li>
<li>Both can correspond to a specific field in the database, though <i>misc</i> fields do not have a database value.</li>
</ul>
<p>The checkbox or radio button is the actual X, not a box surrounding the X. This makes it useful for scanned backgrounds. To add a box around the checkbox or radio button, add a <a href="sheetsline.html">Rectangle</a> as a visual indicator. </p>
<p><div class="Note">Note: <ul>
<li>Suggested size for the checkbox is 11x11 through 13x13. The surrounding rectangle is typically 1 pixel larger and the checkbox should be inset by 1 pixel. For example:  <ul>
<li>Rectangle: x=0, y=0, w=13, h=13</li>
<li>Checkbox: x=1, y=1, w=12, h=12</li>
</ul>
</li>
<li>Checkboxes and radio buttons for medical histories require additional setup. See <a href="sheetsmedicalhistory.html">Medical History Layout</a>.</li>
</ul>
</div>
</p>
<h2>Position and Size</h2>
<p>Displays for all sheet and checkbox types.</p>
<img src="images/sheetCheckboxLocation.png" width="246" height="56"/><p><b>X Pos / Y Pos</b>: The X and Y position of the checkbox on the sheet. </p>
<p><b>Width / Height</b>: The width and height of the X for the checkbox. </p>
<h2>Field Name</h2>
<p>Dislays for all sheet and checkbox types.</p>
<img src="images/sheetCheckboxFieldName.png" width="150" height="153"/><p class="MarginBottomZero"><b>Field Name</b>: The available field options the checkbox can correspond to. The selected field may change other options on the screen. </p>
<ul class="MarginBottomGap">
<li>Fields (other than <i>misc</i>) can be imported.</li>
<li><i>Misc</i> can be used to collect data that does not correspond to a database field. The entered data cannot be imported, but can be reported in a custom Query. Entered data is stored in the sheetfield.fieldvalue column in the sheetfield table. </li>
</ul>
<img src="images/sheetCheckboxAddProc.png" width="150" height="83"/><p><b>Add Procedure</b>: Only displays on <a href="sheetsscreenings.html">Screening</a> sheets. Allows a user to assign a procedure code to a checkbox. When checked, the procedure code will automatically chart.</p>
<p></p>
<h2>Allergies</h2>
<p>Only displays when <i>allergy</i> is the selected Field Name on <a href="sheetsmedicalhistory.html">Medical History</a> sheets. </p>
<img src="images/sheetCheckboxAllergies.png" width="150" height="178"/><p><b>Add Allergy</b>: Click to add a new allergy to the <a href="allergiesmaster.html">Allergy Master List</a>.</p>
<h2>Problems</h2>
<p>Only displays when <i>problem</i> is the selected Field Name on Medical History sheets.</p>
<img src="images/sheetCheckboxProblems.png" width="150" height="264"/><p><b>Add Problem</b>: Add a new problem to the <a href="problemmaster.html">Problem Master List</a>.</p>
<h2>Radio Button</h2>
<p>Only displays when <i>misc</i> is the selected Field Name.</p>
<img src="images/SheetCheckboxRadioButton.png" width="330" height="177"/><p class="MarginBottomZero"><b>Group Name</b>: Used to create custom checkboxes or radio buttons not tied to a database field. </p>
<ul class="MarginBottomGap">
<li>For radio buttons (single selection), enter a common name used for all radio buttons in the group.</li>
<li> For checkboxes (one or many selections), enter a unique group name for the checkbox.</li>
<li>When using Yes/No checkboxes, the user can choose to omit the No boxes. The Yes boxes will act as Yes when checked, and No when unchecked.</li>
</ul>
<p><b>Mobile Group Caption</b>: The caption that displays on mobile sheets for the group.</p>
<p><b>Mobile Item Caption</b>: The caption that displays on mobile sheets for the specific checkbox.</p>
<p><b>Required</b>: If checked, the user will be required to select an option in the generated form before saving it. If adding radio buttons, all radio buttons in a group should be marked the same: all required or all not required.</p>
<h2>Radio Button Value</h2>
<p>Only displays when a database field is the selected Field Name. The values listed are based on database options. Create one radio button for each value.</p>
<img src="images/sheetCheckboxRadioButtonValue.png" width="330" height="176"/><p><b>Mobile Group Caption</b>: The caption that displays on mobile sheets.</p>
<p><b>Mobile Item Caption</b>: The caption that displays on mobile sheets for the specific checkbox</p>
<p><b>Item Caption Override</b>: Enter an override for Mobile Item Caption. This caption displays on mobile sheets instead of the value selected above.</p>
<h2>Yes / No Checkboxes</h2>
<p>Only displays when <i>allergies</i> or <i>problems</i> are selected on Medical History sheets. </p>
<img src="images/SheetCheckboxYesNo.png" width="309" height="172"/><p><b>Yes / No</b>: Create a value for yes, and a value for no. (e.g., Yes the patient has this allergy, No this patient does not have this allergy)</p>
<p><b>Mobile Y/N Override</b>: Allows the user to change the value from "yes" or "no" to a custom value.</p>
<p><b>Mobile Group Caption</b>: The caption that displays on mobile sheets.</p>
<h2>Reportable Name</h2>
<p>Displays when <i>misc</i> is the selected Field Name.</p>
<img src="images/sheetsCheckboxRBRepor.gif" width="291" height="63"/><p><b>Reportable Name: </b>Enter an identifying name for this <i>misc</i> checkbox/radio button. </p>
<h2>Tab Order</h2>
<p>Displays for all checkbox types. </p>
<img src="images/sheetCheckboxTabOrder.png" width="129" height="28"/><p><b>Tab Order</b>: The order of an element when users press Tab on the generated form. (Hint: Click <b>Tab Order</b> in the right panel to view and edit the tab order of all elements on a sheet.</p>
<h2>Creating Radio Buttons for Database Fields</h2>
<p class="MarginBottomZero">These steps will create a group of radio buttons that correspond to database fields and whose values can be imported. Users must create a radio button for each possible value in a radio button group for it to work correctly. If a user clicks one radio button in a group, the other buttons in the group automatically uncheck.  </p>
<ol class="MarginBottomGap">
<li>On the Edit Checkbox window, select the Field Name (other than <i>misc</i>).</li>
<li>Enter the Mobile Group Caption (the shared caption for all of the buttons).</li>
<li> Select the first radio button value. </li>
<li>(Optional) Enter an Item Caption Override for the button.</li>
<li>Click <b>OK</b>.</li>
<li>Move the radio button to the correct location.</li>
<li>Click <b>Check Box</b> again.</li>
<li>Select the same Field Name.</li>
<li>Select the next radio button value. (the Mobile Group Caption will automatically carry over from the previous button.)</li>
<li>Click <b>OK</b>.</li>
<li> Move the radio button to the correct location.</li>
<li>Repeat step 6 - 10 until all radio button values have an associated radio button.</li>
</ol>
<h2>Creating Misc Radio Buttons</h2>
<p class="MarginBottomZero">These steps will create a group of radio buttons whose values cannot be imported, but can be reported in Custom Queries.  </p>
<ol class="MarginBottomGap">
<li>On the Edit Checkbox window, select <i>misc</i> as the Field Name.</li>
<li>For Group Name, enter a common name that will be used for all radio buttons in this group (e.g., Family Heart History).</li>
<li>For Mobile Group Caption, enter a common name that will be used for all radio buttons in this group. This is what will display in mobile layout and can be the same as the Group Name. </li>
<li>For Mobile Item Caption, enter the name of the this button that will display in mobile layout.</li>
<li>If the office wants to run a custom query (optional): For Reportable Name, enter a unique name for this option (e.g., Paternal Only, Maternal Only, Both, None). This is the name that will be reportable in a query when this radio button is selected.</li>
<li>Click <b>OK</b>.</li>
<li>Move the radio button to the correct location (e.g., click and drag).</li>
<li>Click <b>Check Box</b> again.</li>
<li> Select <i>misc</i> again.</li>
<li>Enter the same Group Name.</li>
<li>Enter the same Mobile Group Caption.</li>
<li>Enter a unique Mobile Item Caption for this button.</li>
<li>Enter another unique Reportable Name.</li>
<li>Click <b>OK</b>.</li>
<li>Move the radio button to the correct location.</li>
<li>Repeat step 8 - 15 for all radio buttons in the group.</li>
</ol>
<h2>Create a Misc CheckBox</h2>
<p class="MarginBottomZero">These steps will create a checkbox that allow one or many selections. Repeat these steps for each checkbox. </p>
<ol class="MarginBottomGap">
<li>On the Edit Checkbox window, select <i>misc</i> as the Field Name.</li>
<li>For Group Name, enter a unique group name for this button (e.g., Paternal, Maternal).</li>
<li> For Mobile Group Caption, enter a common name or question that will be used for all buttons in this group.</li>
<li>For Mobile Item Caption, enter a unique name for this button.</li>
<li>For Reportable Name, enter a unique identifying name for this option.</li>
<li>Click <b>OK</b>.</li>
<li>Move the checkbox to the correct location on the sheet.</li>
</ol>
</div>
</div>
</body>
</html>```
