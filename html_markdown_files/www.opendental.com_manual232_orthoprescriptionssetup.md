# File: ./www.opendental.com/manual232/orthoprescriptionssetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Ortho Prescriptions Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('orthoprescriptionssetup','orthosetup','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/orthoprescriptionssetup.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/orthoprescriptionssetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/orthoprescriptionssetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/orthoprescriptionssetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/orthoprescriptionssetup.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/orthoprescriptionssetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/orthoprescriptionssetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/orthoprescriptionssetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/orthoprescriptionssetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/orthoprescriptionssetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/orthoprescriptionssetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/orthoprescriptionssetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/orthoprescriptionssetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/orthoprescriptionssetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/orthoprescriptionssetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/orthoprescriptionssetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/orthoprescriptionssetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/orthoprescriptionssetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/orthoprescriptionssetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/orthoprescriptionssetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/orthoprescriptionssetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/orthoprescriptionssetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/orthoprescriptionssetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/orthoprescriptionssetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/orthoprescriptionssetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/orthoprescriptionssetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/orthoprescriptionssetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/orthoprescriptionssetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Ortho Prescriptions Setup</p></div>
<div class="GeneralPageContent">
<p>Create a list of favorites to add ortho hardware to multiple teeth at once. </p>
<p>In <a href="orthosetup.html">Ortho Setup</a>, next to Ortho Prescriptions, click <b>Setup</b>.</p>
<img src="images/orthoPrescriptionSetup.png" width="661" height="371"/><p><a href="orthohardwaresetup.html">Ortho Hardware Specs</a> must be set up prior to creating Ortho Prescriptions.</p>
<p><b>Add</b>: Click to add a new Ortho Prescription. The Edit Ortho Prescription window will pop up (see below).</p>
<p><b>Up</b>/<b>Down</b>: Select an item and click to move up or down in the list.</p>
<p>Double-click an existing prescription entry to edit. The Edit Ortho Prescription window (see below) will open.</p>
<h2>Edit Ortho Prescription</h2>
<p>When adding or editing an Ortho Prescription, the Edit Ortho Prescription window will open.</p>
<p><img src="images/orthoPrescriptionEdit.png" width="669" height="282"/></p>
<p><b>Description</b>: Type a description for the prescription.</p>
<p><b>Hardware Spec</b>: Click the dropdown to select an Ortho Hardware Spec to assign to the prescription.</p>
<p><b>Delete</b>: Delete prescription.</p>
<p class="MarginBottomZero"><b>Teeth</b>: Type tooth numbers (brackets or elastics) or a tooth range (wire) to assign to the prescription or click a button to automatically assign teeth. </p>
<ul class="MarginBottomGap">
<li><b>Upper</b>: Click to assign all upper teeth to the prescription. Replaces any teeth currently in the <i>Teeth</i> box.</li>
<li><b>Lower</b>: Click to assign all lower teeth to the prescription. Replaces any teeth currently in the <i>Teeth</i> box.</li>
<li><b>All</b>: Click to assign all teeth to the prescription. Replaces any teeth currently in the <i>Teeth</i> box.</li>
</ul>
<p><b>OK</b>: Close window and save changes.</p>
<p><b>Cancel</b>: Close window without saving changes.</p>
</div>
</div>
</body>
</html>```
