# File: ./www.opendental.com/manual/procedurecodenew.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Add Procedure Code</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('procedurecodenew','procedurecodes','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/procedurecodenew.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/procedurecodenew.html" >v24.2</option><option value="https://www.opendental.com/manual241/procedurecodenew.html" >v24.1</option><option value="https://www.opendental.com/manual233/procedurecodenew.html" >v23.3</option><option value="https://www.opendental.com/manual232/procedurecodenew.html" >v23.2</option><option value="https://www.opendental.com/manual231/procedurecodenew.html" >v23.1</option><option value="https://www.opendental.com/manual224/procedurecodenew.html" >v22.4</option><option value="https://www.opendental.com/manual223/procedurecodenew.html" >v22.3</option><option value="https://www.opendental.com/manual222/procedurecodenew.html" >v22.2</option><option value="https://www.opendental.com/manual221/procedurecodenew.html" >v22.1</option><option value="https://www.opendental.com/manual214/procedurecodenew.html" >v21.4</option><option value="https://www.opendental.com/manual213/procedurecodenew.html" >v21.3</option><option value="https://www.opendental.com/manual212/procedurecodenew.html" >v21.2</option><option value="https://www.opendental.com/manual211/procedurecodenew.html" >v21.1</option><option value="https://www.opendental.com/manual205/procedurecodenew.html" >v20.5</option><option value="https://www.opendental.com/manual204/procedurecodenew.html" >v20.4</option><option value="https://www.opendental.com/manual203/procedurecodenew.html" >v20.3</option><option value="https://www.opendental.com/manual202/procedurecodenew.html" >v20.2</option><option value="https://www.opendental.com/manual201/procedurecodenew.html" >v20.1</option><option value="https://www.opendental.com/manual194/procedurecodenew.html" >v19.4</option><option value="https://www.opendental.com/manual193/procedurecodenew.html" >v19.3</option><option value="https://www.opendental.com/manual192/procedurecodenew.html" >v19.2</option><option value="https://www.opendental.com/manual191/procedurecodenew.html" >v19.1</option><option value="https://www.opendental.com/manual184/procedurecodenew.html" >v18.4</option><option value="https://www.opendental.com/manual183/procedurecodenew.html" >v18.3</option><option value="https://www.opendental.com/manual182/procedurecodenew.html" >v18.2</option><option value="https://www.opendental.com/manual181/procedurecodenew.html" >v18.1</option><option value="https://www.opendental.com/manual174/procedurecodenew.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Add Procedure Code</p></div>
<div class="GeneralPageContent">
<p>Offices can create additional procedure codes to add non-standard, custom, or foreign procedure codes</p>
<p>In <a href="procedurecodes.html">Procedure Codes</a>, at the lower left, click <b>+ New</b>.</p>
<img src="images/procCodeNew.gif" width="822" height="543"/><p>Adding Procedure Codes is a way to create non-CDT codes. For example, create codes for supplies the office dispenses (mouthwash, toothpaste), when running a promotion on a procedure, or add codes used in a foreign country. The <i>Procedure Code Edit</i> security permission is required.</p>
<h2>Type</h2>
<img src="images/procCodeNewType.png" width="226" height="141"/><p>Select the <b>Type</b> of the new code. Depending on the selection, some fields on the right will automatically populate. These fields can be edited as needed.</p>
<h2>Procedure Fields</h2>
<p>Complete each field listed under <i>Edit these fields for each new code</i>. These fields are required.</p>
<img src="images/procCodeNewFields.png" width="549" height="123"/><p><b>Previously Entered Code</b>: If entering a series of new codes, the code last added will show under for reference.</p>
<p class="MarginBottomZero"><b>Procedure Code</b>: The new code. Up to 15 numbers, letters, or symbols are allowed. All codes starting with D will be shortened to 5 characters before being included on a insurance <a href="claimedit.html">Claim</a>.  </p>
<ul class="MarginBottomGap">
<li>Users can create multiple procedure codes starting with the same standard D code to differentiate treatment areas, fees, etc. (e.g., D8080.1, D8080.2). When a claim is created, only the standard, 5-digit code, including its description, is used.</li>
</ul>
<p><b>Description</b>: If this code starts with D and is billed to insurance, the description will show on the claim.</p>
<p><b>Abbreviation</b>: Procedure abbreviation.This is what appears on an appointment in the <a href="appointments.html">Appointments Module</a> when <i>Procs</i> or <i>ProcsColored</i> fields are added to an <a href="appointmentviewsetup.html">Appointment View</a>. Limited to 50 characters.</p>
<h2>Additional Options</h2>
<p>Select other procedure code options as needed. For more details, see <a href="procedurecodeedit.html">Procedure Code Edit</a>.</p>
<img src="images/procCodeNewAddtl.png" width="324" height="138"/><p><b>Do not usually bill to insurance</b>: When checked, the <i>Do Not Bill to Ins</i> box is checked by default for this procedure when treatment planned or completed to exclude procedure from insurance claims. </p>
<p><b>Is Hygiene Procedure</b>: Automatically assign the procedure to the hygiene provider when scheduling an appointment with two providers.</p>
<p><b>Is Prosthesis</b>: Additional prosthesis replacement information must be entered for the procedure before sending a claim.</p>
<p><b>Paint Type</b>: Determines how the procedure will be drawn on the <a href="graphicaltoothchart.html">Graphical Tooth Chart</a>.</p>
<p><b>Treatment Area</b>: Determines the surface and tooth options available when charting the procedure.</p>
<p><b>Category</b>: The category under which this procedure code will be organized.</p>
<h2>Add or Close</h2>
<p><b>Add, then another</b>: Click to save the procedure code and keep the New Code window open.</p>
<p><b>Add</b>: Click to save the procedure code and close the window.</p>
<p><b>Close</b>: Click to exit the window without saving the procedure code.</p>
<p>The new procedure code will appear in the Procedure Code List under the selected category.</p>
</div>
</div>
</body>
</html>```
