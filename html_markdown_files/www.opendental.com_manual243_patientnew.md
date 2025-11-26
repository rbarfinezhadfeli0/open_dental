# File: ./www.opendental.com/manual243/patientnew.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Add Patient</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('patientnew','patientselect','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/patientnew.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/patientnew.html" >v24.2</option><option value="https://www.opendental.com/manual241/patientnew.html" >v24.1</option><option value="https://www.opendental.com/manual233/patientnew.html" >v23.3</option><option value="https://www.opendental.com/manual232/patientnew.html" >v23.2</option><option value="https://www.opendental.com/manual231/patientnew.html" >v23.1</option><option value="https://www.opendental.com/manual224/patientnew.html" >v22.4</option><option value="https://www.opendental.com/manual223/patientnew.html" >v22.3</option><option value="https://www.opendental.com/manual222/patientnew.html" >v22.2</option><option value="https://www.opendental.com/manual221/patientnew.html" >v22.1</option><option value="https://www.opendental.com/manual214/patientnew.html" >v21.4</option><option value="https://www.opendental.com/manual213/patientnew.html" >v21.3</option><option value="https://www.opendental.com/manual212/patientnew.html" >v21.2</option><option value="https://www.opendental.com/manual211/patientnew.html" >v21.1</option><option value="https://www.opendental.com/manual205/patientnew.html" >v20.5</option><option value="https://www.opendental.com/manual204/patientnew.html" >v20.4</option><option value="https://www.opendental.com/manual203/patientnew.html" >v20.3</option><option value="https://www.opendental.com/manual202/patientnew.html" >v20.2</option><option value="https://www.opendental.com/manual201/patientnew.html" >v20.1</option><option value="https://www.opendental.com/manual194/patientnew.html" >v19.4</option><option value="https://www.opendental.com/manual193/patientnew.html" >v19.3</option><option value="https://www.opendental.com/manual192/patientnew.html" >v19.2</option><option value="https://www.opendental.com/manual191/patientnew.html" >v19.1</option><option value="https://www.opendental.com/manual184/patientnew.html" >v18.4</option><option value="https://www.opendental.com/manual183/patientnew.html" >v18.3</option><option value="https://www.opendental.com/manual182/patientnew.html" >v18.2</option><option value="https://www.opendental.com/manual181/patientnew.html" >v18.1</option><option value="https://www.opendental.com/manual174/patientnew.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Add Patient</p></div>
<div class="GeneralPageContent">
<p>Add individual patients or families to Open Dental as needed. </p>
<p>In <a href="patientselect.html">Select Patient</a>, click <b>Add Pt</b>.</p>
<img src="images/patientAddSearch.png" width="268" height="51"/><p><b>Add Pt</b>: Click to add an individual patient. A last name must have already been searched before the <a href="patientedit.html">Edit Patient Information</a> window opens. This is to avoid duplicate patient accounts. </p>
<p><b>Add Many</b>: Click to <a href="familyadd.html">Add Family</a>.</p>
<p class="MarginBottomZero">When adding a new patient from the Select Patient Window, the following fields carry over:  </p>
<ul class="MarginBottomGap">
<li>First Name</li>
<li>Last Name</li>
<li>Birthdate (mm/dd/yyyy) </li>
</ul>
<h2>Existing Family</h2>
<p>To add a new patient to an existing family:</p>
<p>In the <a href="family.html">Family Module</a>, select an existing patient in the family. <br/><img src="images/patientAddFamily.png" width="275" height="176" class="ImageInParagraph"/></p>
<p>In the Toolbar, click<b> Add</b>. Enter patient details on the Edit Patient Information window.</p>
<p class="MarginBottomZero">When adding a new family member, the following fields carry over from the currently selected family member: </p>
<ul class="MarginBottomGap">
<li>Wireless Phone</li>
<li>Work Phone</li>
<li>Email</li>
<li>Text Message OK status</li>
<li>Appt Text status</li>
</ul>
</div>
</div>
</body>
</html>```
