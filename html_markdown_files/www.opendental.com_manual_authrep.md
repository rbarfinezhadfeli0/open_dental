# File: ./www.opendental.com/manual/authrep.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Authorized Representatives</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('authrep','portalhostedbyod','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/authrep.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/authrep.html" >v24.2</option><option value="https://www.opendental.com/manual241/authrep.html" >v24.1</option><option value="https://www.opendental.com/manual233/authrep.html" >v23.3</option><option value="https://www.opendental.com/manual232/authrep.html" >v23.2</option><option value="https://www.opendental.com/manual231/authrep.html" >v23.1</option><option value="https://www.opendental.com/manual224/authrep.html" >v22.4</option><option value="https://www.opendental.com/manual223/authrep.html" >v22.3</option><option value="https://www.opendental.com/manual222/authrep.html" >v22.2</option><option value="https://www.opendental.com/manual221/authrep.html" >v22.1</option><option value="https://www.opendental.com/manual214/authrep.html" >v21.4</option><option value="https://www.opendental.com/manual213/authrep.html" >v21.3</option><option value="https://www.opendental.com/manual212/authrep.html" >v21.2</option><option value="https://www.opendental.com/manual211/authrep.html" >v21.1</option><option value="https://www.opendental.com/manual205/authrep.html" >v20.5</option><option value="https://www.opendental.com/manual204/authrep.html" >v20.4</option><option value="https://www.opendental.com/manual203/authrep.html" >v20.3</option><option value="https://www.opendental.com/manual202/authrep.html" >v20.2</option><option value="https://www.opendental.com/manual201/authrep.html" >v20.1</option><option value="https://www.opendental.com/manual194/authrep.html" >v19.4</option><option value="https://www.opendental.com/manual193/authrep.html" >v19.3</option><option value="https://www.opendental.com/manual192/authrep.html" >v19.2</option><option value="https://www.opendental.com/manual191/authrep.html" >v19.1</option><option value="https://www.opendental.com/manual184/authrep.html" >v18.4</option><option value="https://www.opendental.com/manual183/authrep.html" >v18.3</option><option value="https://www.opendental.com/manual182/authrep.html" >v18.2</option><option value="https://www.opendental.com/manual181/authrep.html" >v18.1</option><option value="https://www.opendental.com/manual174/authrep.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Authorized Representatives</p></div>
<div class="GeneralPageContent">
<p>See <a href="portalhostedbyod.html">Patient Portal</a>.</p>
<p>Authorized representatives can view another patient's health information in the Patient Portal and receive <a href="../site/websched.html">Web Sched</a> notifications on another patient's behalf. Several settings in Open Dental control who is authorized to see a patient's health information.</p>
<p><b>Patients</b>: Can always view their own health information.</p>
<p><b>Guarantors</b>: By default, guarantors have access to all family member information. This is determined by the <i>Allow guarantor access to family health information in the Patient Portal</i> preference. If enabled, guarantors can view information for all family members. If disabled guarantors can only view their own information. This is a global setting that affects all guarantors.</p>
<p><b>Guardians</b>: Can view health information for any patient for which they are designated as Guardian (<a href="patientedit.html">Edit Patient Information</a>, <a href="familyrelationship.html">Family Relationships</a>, Guardian is checked).</p>
<p><b>Responsible Party</b>: Can view health information for any patient for which they are a responsible party (Edit Patient Information window, Responsible Party).</p>
<p class="MarginBottomZero">Authorized representatives can view:  </p>
<ul>
<li>Statements/Receipts</li>
<li>Some patient information from the Family Module, Imaging Module, Webmail, and Care Summary (if using EHR).</li>
</ul>
<p class="MarginBottomGap"><div class="Note">Note: Treatments Plans cannot be viewed unless they are added to the Imaging Module.</div>
</p>
</div>
</div>
</body>
</html>```
