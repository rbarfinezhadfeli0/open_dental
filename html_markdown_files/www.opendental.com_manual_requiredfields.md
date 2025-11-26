# File: ./www.opendental.com/manual/requiredfields.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Required Fields</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('requiredfields','patientedit','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/requiredfields.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/requiredfields.html" >v24.2</option><option value="https://www.opendental.com/manual241/requiredfields.html" >v24.1</option><option value="https://www.opendental.com/manual233/requiredfields.html" >v23.3</option><option value="https://www.opendental.com/manual232/requiredfields.html" >v23.2</option><option value="https://www.opendental.com/manual231/requiredfields.html" >v23.1</option><option value="https://www.opendental.com/manual224/requiredfields.html" >v22.4</option><option value="https://www.opendental.com/manual223/requiredfields.html" >v22.3</option><option value="https://www.opendental.com/manual222/requiredfields.html" >v22.2</option><option value="https://www.opendental.com/manual221/requiredfields.html" >v22.1</option><option value="https://www.opendental.com/manual214/requiredfields.html" >v21.4</option><option value="https://www.opendental.com/manual213/requiredfields.html" >v21.3</option><option value="https://www.opendental.com/manual212/requiredfields.html" >v21.2</option><option value="https://www.opendental.com/manual211/requiredfields.html" >v21.1</option><option value="https://www.opendental.com/manual205/requiredfields.html" >v20.5</option><option value="https://www.opendental.com/manual204/requiredfields.html" >v20.4</option><option value="https://www.opendental.com/manual203/requiredfields.html" >v20.3</option><option value="https://www.opendental.com/manual202/requiredfields.html" >v20.2</option><option value="https://www.opendental.com/manual201/requiredfields.html" >v20.1</option><option value="https://www.opendental.com/manual194/requiredfields.html" >v19.4</option><option value="https://www.opendental.com/manual193/requiredfields.html" >v19.3</option><option value="https://www.opendental.com/manual192/requiredfields.html" >v19.2</option><option value="https://www.opendental.com/manual191/requiredfields.html" >v19.1</option><option value="https://www.opendental.com/manual184/requiredfields.html" >v18.4</option><option value="https://www.opendental.com/manual183/requiredfields.html" >v18.3</option><option value="https://www.opendental.com/manual182/requiredfields.html" >v18.2</option><option value="https://www.opendental.com/manual181/requiredfields.html" >v18.1</option><option value="https://www.opendental.com/manual174/requiredfields.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Required Fields</p></div>
<div class="GeneralPageContent">
<p>Use Required Fields to prompt staff to complete certain fields when entering patient information or insurance payments.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Required Fields.</p>
<img src="images/requiredFields.png" width="885" height="622"/><p class="MarginBottomZero">Examples: </p>
<ul class="MarginBottomGap">
<li>Birthdate cannot be blank.</li>
<li>Gender cannot be unknown.</li>
<li>Student status must be chosen if patient age is greater than 18 or less than 26.</li>
<li>Validate the number of digits in a Medicaid ID.</li>
</ul>
<p class="MarginBottomZero">How it works: </p>
<ul class="MarginBottomGap">
<li>When staff enters patient information or an insurance payment, required fields are indicated with an asterisk (*).</li>
<li>If required fields are incomplete when staff saves the window, a notification message displays with two options: return to the window to complete information or proceed without completing information.</li>
<li>When required fields are left incomplete, the Audit Trail logs an entry.</li>
</ul>
<p class="MarginBottomZero">Some fields are filled in automatically or do not trigger a popup. </p>
<ul class="MarginBottomGap">
<li>StudentStatus: Only triggers a popup for a new patient. If the required field is ignored, a non-student status is automatically assigned.</li>
<li>PrimaryProvider: Primary providers are automatically assigned and do not trigger a popup, unless <i>Primary Provider defaults to Select Provider in Patient Edit and Add Family</i> is checked in <a href="preferences.html">Preferences</a>.</li>
<li>BillingType: Does not trigger a popup.</li>
<li>State: State cannot be blank and requires a valid state abbreviation under Lists, <a href="stateabbreviations.html">State Abbreviations</a>.</li>
</ul>
<h2>Mark Fields as Required</h2>
<p class="MarginBottomZero"><b>Field Type</b>: Select which area to apply required fields to.  </p>
<ul class="MarginBottomGap">
<li>PatientInfo: Mark fields as required on the <a href="patientedit.html">Edit Patient Information</a> or <a href="familyadd.html">Add Family Window</a>.</li>
<li>InsPayEdit: Mark fields as required on the Edit Insurance Payment window. See <a href="claimpayfinalize.html">Finalize Insurance Payment</a>.</li>
</ul>
<p><b>Available fields</b>: Lists all fields that can be marked required. Field options vary depending on the Field type selected and which options are enabled in <a href="showfeatures.html">Show Features</a>.</p>
<p><b>Right Arrow</b>: Select item(s) from the Available Fields list and click to add to Required Fields. Ctrl + click to select multiple items at once. Items are removed from th Available Fields list.</p>
<p><b>Left Arrow</b>: Select item(s) from Required Fields and click to remove from Required Fields. Ctrl + click to select multiple items at once. Items are added back to the Available Fields list.</p>
<p><b>Required fields</b>: Lists all fields currently marked required for all field types. Click on a field to view a description of the requirement under the grid.</p>
<p class="MarginBottomZero"><b>Conditions</b>: (optional) Add specific conditions that require a field to be completed. An X displays in the Conditions column. Double-click an existing condition to edit.  </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Select a required field and click to add conditions. The Edit Required Field Condition window opens.</li>
<li><b>Delete</b>: Select an existing condition and click to delete the condition from the required field.</li>
</ul>
<img src="images/requiredFieldsEdit.png" width="407" height="281"/><p class="MarginBottomZero">Edit Required Field Condition window:  </p>
<ul class="MarginBottomGap">
<li><b>Condition Type</b>: Select the data that affects the required field.</li>
<li><b>Operator</b>: Set how the value corresponds to the condition. </li>
<li><b>Condition Value</b>: Set the value condition type. Multiple conditions can be added to a single Required Field.</li>
<li><b>Delete</b>: Click to delete the selected condition.</li>
</ul>
<h2>Validation of Medicaid ID and State</h2>
<p class="MarginBottomZero">If Medicaid is turned on in Show Features, the MedicaidID and MedicaidState fields list as Available Fields. In addition to designating the fields as required, offices can also turn on validation that ensures the number of digits in the Medicaid ID is correct for the entered state. </p>
<ol class="MarginBottomGap">
<li>Add <i>MedicaidState</i> to the Required Fields list.</li>
<li>Highlight <i>MedicaidState</i>. <br/><img src="images/requiredFieldsMedicaid.png" width="377" height="276" class="ImageInParagraph"/></li>
<li>Check <i>Validate the number of digits in MedicaidID to be correct for that state</i> to turn on validation. When checked, a Medicaid ID Length column also shows in the state abbreviation list. See <a href="stateabbreviations.html">State Abbreviations</a> to enter the number of digits in a Medicaid ID by state.</li>
</ol>
<p>How Medicaid ID validation works: <br/> When user saves the Edit Patient Information window, Open Dental checks if the number of digits entered for Medicaid ID matches the Medicaid ID Length entered for the state in the State Abbreviations list. If not, the user is warned that required fields are missing or incorrect. If they return to the window, a red exclamation point shows next to the State field. Hovering over the field shows a message that indicates the required ID length.</p>
<img src="images/requiredFieldsMedicaidID.png" width="526" height="62"/></div>
</div>
</body>
</html>```
