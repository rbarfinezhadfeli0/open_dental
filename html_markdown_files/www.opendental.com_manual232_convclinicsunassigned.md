# File: ./www.opendental.com/manual232/convclinicsunassigned.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Conversions: Unassigned Clinics</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('convclinicsunassigned','usingodconversion','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/convclinicsunassigned.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/convclinicsunassigned.html" >v24.2</option><option value="https://www.opendental.com/manual241/convclinicsunassigned.html" >v24.1</option><option value="https://www.opendental.com/manual233/convclinicsunassigned.html" >v23.3</option><option value="https://www.opendental.com/manual232/convclinicsunassigned.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/convclinicsunassigned.html" >v23.1</option><option value="https://www.opendental.com/manual224/convclinicsunassigned.html" >v22.4</option><option value="https://www.opendental.com/manual223/convclinicsunassigned.html" >v22.3</option><option value="https://www.opendental.com/manual222/convclinicsunassigned.html" >v22.2</option><option value="https://www.opendental.com/manual221/convclinicsunassigned.html" >v22.1</option><option value="https://www.opendental.com/manual214/convclinicsunassigned.html" >v21.4</option><option value="https://www.opendental.com/manual213/convclinicsunassigned.html" >v21.3</option><option value="https://www.opendental.com/manual212/convclinicsunassigned.html" >v21.2</option><option value="https://www.opendental.com/manual211/convclinicsunassigned.html" >v21.1</option><option value="https://www.opendental.com/manual205/convclinicsunassigned.html" >v20.5</option><option value="https://www.opendental.com/manual204/convclinicsunassigned.html" >v20.4</option><option value="https://www.opendental.com/manual203/convclinicsunassigned.html" >v20.3</option><option value="https://www.opendental.com/manual202/convclinicsunassigned.html" >v20.2</option><option value="https://www.opendental.com/manual201/convclinicsunassigned.html" >v20.1</option><option value="https://www.opendental.com/manual194/convclinicsunassigned.html" >v19.4</option><option value="https://www.opendental.com/manual193/convclinicsunassigned.html" >v19.3</option><option value="https://www.opendental.com/manual192/convclinicsunassigned.html" >v19.2</option><option value="https://www.opendental.com/manual191/convclinicsunassigned.html" >v19.1</option><option value="https://www.opendental.com/manual184/convclinicsunassigned.html" >v18.4</option><option value="https://www.opendental.com/manual183/convclinicsunassigned.html" >v18.3</option><option value="https://www.opendental.com/manual182/convclinicsunassigned.html" >v18.2</option><option value="https://www.opendental.com/manual181/convclinicsunassigned.html" >v18.1</option><option value="https://www.opendental.com/manual174/convclinicsunassigned.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Conversions: Unassigned Clinics</p></div>
<div class="GeneralPageContent">
<p>See <a href="usingodconversion.html">Use Converted Database</a>.</p>
<p>When <a href="clinics.html">Clinics</a> is enabled, patient assignment to a clinic determines the default clinic used for billing, claims, payments, adjustments, and more. During <a href="../site/conversions.html">Conversions</a>, any patients not already assigned to clinics are assigned to a clinic named <i>Conv_Unassigned</i>. We recommend identifying these patients, then assigning them to the correct clinic as soon possible after a conversion. To identify these patients, we provide the query, <i>Conv - Patients in Unassigned Clinic</i>.</p>
<p>Go to <a href="queryfavorites.html">User Query Favorites</a>, then double-click on the <i>Conv - Patients in Unassigned Clinic</i> query</p>
<img src="images/convqueryClinics.gif" width="903" height="305"/><p>For each patient listed, go the <a href="patientedit.html">Edit Patient Information Window</a> and assign a clinic.</p>
<p>Once all patients have been assigned an actual clinic, delete the <i>Conv_Unassigned</i> clinic from the <a href="clinicsetup.html">Clinic List</a>.</p>
<div class="Note">Note: To run <a href="billing.html">Batch Billing</a> for patients who are assigned to the Conv_Unassigned clinic, select the Conv_Unassigned clinic in the <a href="billing.html">Billing Options</a> before creating the Billing List.</div>
<br/><br/><p>Resource: <a href="../resources/conversions/Post%20Conversion%20Checklist.pdf">Post Conversion Checklist (PDF)</a></p>
</div>
</div>
</body>
</html>```
