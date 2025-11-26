# File: ./www.opendental.com/manual/eroutingsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eRouting Setup</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eroutingsetup','erouting','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/eroutingsetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/eroutingsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/eroutingsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/eroutingsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/eroutingsetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/eroutingsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/eroutingsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/eroutingsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/eroutingsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/eroutingsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/eroutingsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/eroutingsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/eroutingsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/eroutingsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/eroutingsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/eroutingsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/eroutingsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/eroutingsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/eroutingsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/eroutingsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/eroutingsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/eroutingsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/eroutingsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/eroutingsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/eroutingsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/eroutingsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/eroutingsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/eroutingsetup.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eRouting Setup</p></div>
<div class="GeneralPageContent">
<p>Set up customized eRouting definitions to meet the flow of different types of appointments when using ODTouch.</p>
<p>In <a href="erouting.html">eRouting</a>, click <b>Setup</b>.</p>
<img src="images/eRoutingDefs.png" width="490" height="310"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Clinic</b>: Select the clinic assigned to the definition. </li>
<li><b>Use Default</b>: Check to use the default definitions instead of clinic specific definitions. Set default definitions by setting the clinic to <i>HQ Default</i>. </li>
<li><b>Add</b>: Click to add a new eRouting definition. The eRouting Def Edit Window opens. See the following section for details.</li>
<li><b>Duplicate</b>: Select an existing definition, then click to create a copy.</li>
</ul>
<h2>eRouting Def Edit</h2>
<p>In the eRouting Defs window, click <b>Add</b> to create a new eRouting Def or double-click an existing eRouting Def to edit.</p>
<img src="images/eRoutingDefEdit.png" width="915" height="395"/><p><b>Description</b>: Enter a name for the eRouting definition. </p>
<p class="MarginBottomZero"><b>Actions</b>: The grid displays any actions and checklist items that are added to this eRouting Def.  </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Create a new action for the eRouting Def. Opens the Module Form Def Edit window. See the following section for additional details. Actions are added individually. </li>
<li><b>Up</b> / <b>Down</b>: Highlight an action in the list and click to reorder it. </li>
</ul>
<p class="MarginBottomZero"><b>eRouting Triggers</b>: The grid displays any triggers that cause when this eRouting Def is used in ODTouch. If a patient or appointment meets the trigger criteria, the appropriate eRouting Def is started in ODTouch. If multiple triggers are met, users are prompted to select an eRouting Def.  </p>
<ul class="MarginBottomGap">
<li><b>Add Trigger Type</b>: Click the dropdown to select a trigger to start this eRouting Def. Click <b>Add</b> to include it. Each trigger type is added individually. Options include:</li>
<ul>
<li>General: Used for patients that do not meet other trigger criteria. <ul>
<li>Add: Add a General trigger.</li>
</ul>
</li>
<li>Appointment: Use appointments as a trigger for patient criteria. <ul>
<li>Add: Add appointments as a trigger without a specific <a href="appointmenttypes.html">Appointment Type</a>.</li>
<li>Add Appt Types: Add a specific appointment type as a trigger. </li>
</ul>
</li>
<li>Billing Type: Use <a href="definitionsbillingtypes.html">Billing Type</a> as a trigger for patient criteria. <ul>
<li>Add: Add a specific Billing Type as a trigger.</li>
</ul>
</li>
</ul>
</ul>
<p>To delete a Trigger, highlight it, then click <b>Remove</b>.</p>
<p>Click <b>Delete </b>to remove the entire eRouting definition. Click <b>Save</b> to keep changes.</p>
<h2>Module Form Def Edit</h2>
<p>Click <b>Add</b> in the Actions area or double-click an action to open Module Form Def Edit.</p>
<img src="images/eRoutingMobileFormDefEdit.png" width="469" height="181"/><p><b>Label Override</b>: The description of the action type that appears in the eRouting checklist in ODTouch. If no label override is entered, the Action Type name is used.</p>
<p class="MarginBottomZero"><b>Action Type</b>: Select from the dropdown to determine what action occurs in ODTouch when selecting the item in the eRouting Checklist. Options include:  </p>
<ul class="MarginBottomGap">
<li>None: Do nothing on ODTouch.</li>
<li>Perio Chart: Open <a href="odtouchperio.html">ODTouch: Perio</a>.</li>
<li>Treatment Plan: Open <a href="odtouchtreatmentplans.html">ODTouch: Treatment Plans</a>.</li>
<li>Payment Plan: Open <a href="odtouchpayplan.html">ODTouch: Payment Plans</a>. </li>
<li>Chart Procedures: Open <a href="odtouchchart.html">ODTouch: Chart</a>.</li>
<li>Imaging: Open <a href="odtouchimages.html">ODTouch: Images</a>.</li>
<li>Complete Appointment: Complete the appointment.</li>
<li>Take Payment: Open <a href="odtouchpayment.html">ODTouch: Payment</a></li>
<li>Schedule Follow up: Open <a href="odtouchappts.html">ODTouch: Appointments</a>.</li>
<li>ERX: Open <a href="odtoucherx.html">ODTouch: eRx</a>.</li>
<li>Exam Sheet: Open an exam sheet. See <a href="odtouchexam.html">ODTouch: Exam Sheets</a> for details. </li>
<li>Consent Form: Open a consent form. </li>
<li>Medical: Open <a href="odtouchmedical.html">ODTouch: Medical Info</a>.</li>
<li>Checklist Item: Create a custom checklist item in the eRouting list. Items are just for reference and no additional action is taken in ODTouch.</li>
</ul>
<p><b>Default to Load</b>: Used for Exam Sheet and Consent Form action types. Select the default sheet to open when selecting the eRouting action. If no default is assigned to the action, a list of available sheets is shown when selecting the eRouting action in ODTouch.</p>
</div>
</div>
</body>
</html>```
