# File: ./www.opendental.com/manual232/quickpastecategory.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Quick Paste Category</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('quickpastecategory','quickpastenotessetup','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/quickpastecategory.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/quickpastecategory.html" >v24.2</option><option value="https://www.opendental.com/manual241/quickpastecategory.html" >v24.1</option><option value="https://www.opendental.com/manual233/quickpastecategory.html" >v23.3</option><option value="https://www.opendental.com/manual232/quickpastecategory.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/quickpastecategory.html" >v23.1</option><option value="https://www.opendental.com/manual224/quickpastecategory.html" >v22.4</option><option value="https://www.opendental.com/manual223/quickpastecategory.html" >v22.3</option><option value="https://www.opendental.com/manual222/quickpastecategory.html" >v22.2</option><option value="https://www.opendental.com/manual221/quickpastecategory.html" >v22.1</option><option value="https://www.opendental.com/manual214/quickpastecategory.html" >v21.4</option><option value="https://www.opendental.com/manual213/quickpastecategory.html" >v21.3</option><option value="https://www.opendental.com/manual212/quickpastecategory.html" >v21.2</option><option value="https://www.opendental.com/manual211/quickpastecategory.html" >v21.1</option><option value="https://www.opendental.com/manual205/quickpastecategory.html" >v20.5</option><option value="https://www.opendental.com/manual204/quickpastecategory.html" >v20.4</option><option value="https://www.opendental.com/manual203/quickpastecategory.html" >v20.3</option><option value="https://www.opendental.com/manual202/quickpastecategory.html" >v20.2</option><option value="https://www.opendental.com/manual201/quickpastecategory.html" >v20.1</option><option value="https://www.opendental.com/manual194/quickpastecategory.html" >v19.4</option><option value="https://www.opendental.com/manual193/quickpastecategory.html" >v19.3</option><option value="https://www.opendental.com/manual192/quickpastecategory.html" >v19.2</option><option value="https://www.opendental.com/manual191/quickpastecategory.html" >v19.1</option><option value="https://www.opendental.com/manual184/quickpastecategory.html" >v18.4</option><option value="https://www.opendental.com/manual183/quickpastecategory.html" >v18.3</option><option value="https://www.opendental.com/manual182/quickpastecategory.html" >v18.2</option><option value="https://www.opendental.com/manual181/quickpastecategory.html" >v18.1</option><option value="https://www.opendental.com/manual174/quickpastecategory.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Quick Paste Category</p></div>
<div class="GeneralPageContent">
<p>Organize Quick Paste Notes of similar type by category and set which areas notes are available for use.</p>
<p>In <a href="quickpastenotessetup.html">Quick Paste Notes Setup</a>, click <b>Add</b>. </p>
<img src="images/quickPasteCatEdit.gif" width="642" height="498"/><p>Alternatively, double-click an existing category to edit. </p>
<p>Each category is assigned a default text box type that supports quick notes and only note shortcut abbreviations in this category will work in those text boxes. </p>
<p><b>Description</b>: The name of the category.</p>
<p class="MarginBottomZero"><b>Default for Types</b>: The text box type the category's note shortcuts can be used with. Multiple types can be assigned to a single category. Ctrl + click to select multiple types. </p>
<ul class="MarginBottomGap">
<li><b>None</b>: None should never be used. It is simply used as a default when adding a new control. </li>
<li><b>Procedure</b>: Inside of a Procedure Code, both note fields.</li>
<li><b>Appointment</b>: Note field inside of the <a href="aptedit.html">Edit Appointment</a>.</li>
<li><b>CommLog</b>: Note field inside of the <a href="commlog.html">Commlog</a>.</li>
<li><b>Adjustment</b>: Note field inside of the <a href="adjustments.html">Edit Adjustment</a> window.</li>
<li><b>Claim</b>: Claim Note field inside of the <a href="claimtabgeneral.html">Edit Claim - General Tab</a> window.</li>
<li><b>Email</b>: Works in <a href="email.html">Email</a> fields, body of email, address lines.</li>
<li><b>InsPlan</b>: Works in the Plan Note and Note field in the <a href="insplan.html">Edit Insurance Plan</a> window.</li>
<li><b>Letter</b>: Obsolete. Used in the old letter merge feature. Sheets are now a better option.</li>
<li><b>MedicalSummary</b>: Medical Summary field in the <a href="medical.html">Medical</a> window, accessed from the Chart module.</li>
<li><b>ServiceNotes</b>: Service Notes field in the Medical window, accessed from the Chart module.</li>
<li><b>MedicalHistory</b>: Medical History field in the Medical window, accessed from the Chart module.</li>
<li><b>MedicationEdit</b>: Note field in the <a href="medicationmaster.html">Edit Medication </a>window.</li>
<li><b>MedicationPat</b>: Notes for this Patient field in the <a href="medicationspatient.html">Medication for Patient</a> window.</li>
<li><b>PatAddressNote</b>: Address and Phone Note field in the <a href="patientedit.html">Edit Patient Information</a> window.</li>
<li><b>Payment</b>: Note field in the <a href="payment.html">Patient Payment</a> window.</li>
<li><b>PayPlan</b>: Note field in the <a href="paymentplanpatient.html">Patient Payment Plan</a>, <a href="paymentplandynamic.html">Dynamic Payment Plan</a>, and <a href="paymentplanins.html">Insurance Payment Plan</a> windows.</li>
<li><b>Query</b>: Query Text field inside of the <a href="queryoverview.html">User Query</a> window.</li>
<li><b>Referral</b>: Notes and Display Notes fields in the <a href="referralsetup.html">Edit Referral</a> window.</li>
<li><b>Rx</b>: Notes field and Patient Instructions field in the <a href="rx.html">Edit Rx</a> window.</li>
<li><b>FinancialNotes</b>: In the <a href="account.html">Account Module</a>, both the Fam Urgent Fin Note and the Family Financial note fields.</li>
<li><b>ChartTreatment</b>: In the <a href="chart.html">Chart Module</a>, the odontogram notes field, normally under the 3D tooth chart.</li>
<li><b>MedicalUrgent</b>: Medical Urgent field in the Medical window, accessed from the Chart module.</li>
<li><b>Statement</b>: Works in the Account module, <a href="statement.html">Statement</a>, More Options in the Note and Bold Note fields. Works in the Manage module, <a href="billing.html">Billing</a>, General Note field. Defaults button, General Message, Body, Invoice Note, SMS Statement fields. (Does not work in the Dunning message fields)</li>
<li><b>Recall</b>: <a href="recall.html">Edit Recall</a> Administrative Note field.</li>
<li><b>Popup</b>: Select patient, click <a href="popups.html">Popups</a> button, click add or edit existing. Popup Message field only.</li>
<li><b>TxtMsg</b>: Text Message field inside of the <a href="textmessages.html">Text Message</a> window.</li>
<li><b>Task:</b><a href="taskswindow.html">Task Window</a>, both the Description and Note fields.</li>
<li><b>Schedule</b>: <a href="scheduleeditdaywindow.html">Edit Schedule</a>, Note field only.</li>
<li><b>TreatPlan</b>: <a href="treatmentplanedit.html">Saved Treatment Plan</a>, Note field only.</li>
<li><b>ClaimCustomTrack</b>: <a href="claimtabstatus.html">Edit Claim - Status History Tab</a>, Custom Tracking Status Update (add or edit a status), Note field only.</li>
<li><b>AutoNote</b>: Used in the Text Prompt window and Prompt preview windows.</li>
<li><b>ReadOnly</b>: Not in use. Only to be used if the ReadOnly property is set to true.</li>
<li><b>Lab</b>: <a href="labcaseedit.html">Edit Lab Case</a>, Instructions field.</li>
<li><b>Equipment</b>: <a href="equipment.html">Equipment</a>. Add or edit equipment window, works in the Status field only.</li>
<li><b>FilePath</b>: <a href="importinsplans834.html">Import Ins Plan 834</a> window, import path textbox. </li>
<li><b>ContactInfo</b>: Not in use.</li>
<li><b>ProgramLink</b>: <a href="programlinkoutputfile.html">Program Link Output File</a>, template textbox.</li>
</ul>
<p><b>OK</b>: Click to exit the window and save changes.</p>
<p><b>Cancel</b> Click to exit the window without saving changes..</p>
</div>
</div>
</body>
</html>```
