# File: ./www.opendental.com/manual232/insadd.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Add Insurance</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('insadd','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/insadd.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/insadd.html" >v24.2</option><option value="https://www.opendental.com/manual241/insadd.html" >v24.1</option><option value="https://www.opendental.com/manual233/insadd.html" >v23.3</option><option value="https://www.opendental.com/manual232/insadd.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/insadd.html" >v23.1</option><option value="https://www.opendental.com/manual224/insadd.html" >v22.4</option><option value="https://www.opendental.com/manual223/insadd.html" >v22.3</option><option value="https://www.opendental.com/manual222/insadd.html" >v22.2</option><option value="https://www.opendental.com/manual221/insadd.html" >v22.1</option><option value="https://www.opendental.com/manual214/insadd.html" >v21.4</option><option value="https://www.opendental.com/manual213/insadd.html" >v21.3</option><option value="https://www.opendental.com/manual212/insadd.html" >v21.2</option><option value="https://www.opendental.com/manual211/insadd.html" >v21.1</option><option value="https://www.opendental.com/manual205/insadd.html" >v20.5</option><option value="https://www.opendental.com/manual204/insadd.html" >v20.4</option><option value="https://www.opendental.com/manual203/insadd.html" >v20.3</option><option value="https://www.opendental.com/manual202/insadd.html" >v20.2</option><option value="https://www.opendental.com/manual201/insadd.html" >v20.1</option><option value="https://www.opendental.com/manual194/insadd.html" >v19.4</option><option value="https://www.opendental.com/manual193/insadd.html" >v19.3</option><option value="https://www.opendental.com/manual192/insadd.html" >v19.2</option><option value="https://www.opendental.com/manual191/insadd.html" >v19.1</option><option value="https://www.opendental.com/manual184/insadd.html" >v18.4</option><option value="https://www.opendental.com/manual183/insadd.html" >v18.3</option><option value="https://www.opendental.com/manual182/insadd.html" >v18.2</option><option value="https://www.opendental.com/manual181/insadd.html" >v18.1</option><option value="https://www.opendental.com/manual174/insadd.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Add Insurance</p></div>
<div class="GeneralPageContent">
<p>In the <a href="family.html">Family Module</a> toolbar, click <b>Add Insurance</b>.</p>
<img src="images/insPlanPatSubscriber.png" width="286" height="133"/><h2>Subscriber</h2>
<p>Click <b>Yes</b> if the current patient is the plan subscriber. Always enter insurance plan information for the subscriber before separately assigning the plan to non-subscriber family members. </p>
<p>A blank <a href="insplan.html">Insurance Plan</a> opens if this patient has never been the subscriber on any insurance plan. </p>
<p>If this patient has been the subscriber on prior insurance plan, Select Insurance Plan (see below) opens. </p>
<h2>Non-subscriber</h2>
<p>Click <b>No</b> if the current patient is not the subscriber for the insurance plan. Select Subscriber opens.</p>
<p><div class="Note">Note: Many insurance carriers have switched to each patient being their own subscriber. In that case, do not enter any non-subscriber family members.</div>
</p>
<img src="images/insplanSubscriber.png" width="403" height="322"/><p>Double-click the subscriber to select or highlight the subscriber and click OK. </p>
<p>Alternatively, if the subscriber is a non-family member, click <b>More Patients</b> to select anyone in the database as the subscriber.</p>
<p>Once a subscriber is selected, if any insurance plan has previously been entered for the subscriber, Select Insurance Plan (see below) opens. If no insurance plan has not been previously entered for the subscriber, a blank Insurance Plan opens instead.</p>
<h2>Select Insurance Plan</h2>
<p>All insurance plans for the selected subscriber are displayed. Those marked <i>not in use</i> have since been dropped. </p>
<img src="images/insplanSelectInsPlan.png" width="422" height="215"/><p><b>New Plan</b>: Click to open a blank insurance plan. Create a brand new plan or use Pick from List to choose from all existing insurance plans in the database. </p>
<p><b>OK</b>: After selecting an insurance plan from the list, click to add to the patient.</p>
<p><b>Cancel</b>: Click to close the window without adding insurance.</p>
<div class="Note">Note: Security permission <i>PatPlanCreate</i> is used to log an entry when a new patient insurance plan is created.</div>
<br/><br/><h2>Edit Insurance Plan</h2>
<p>Once in the <a href="insplan.html">Insurance Plan</a> window, use the <b>Pick From List</b> button to select an existing plan from the <a href="insplanlist.html">Insurance Plans</a> list. </p>
<p>At a minimum, select the patient's <i>Relationship to Subscriber</i>. If the patient is the subscriber, at minimum, the <i>Subscriber ID</i> is required.</p>
</div>
</div>
</body>
</html>```
