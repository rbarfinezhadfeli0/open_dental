# File: ./www.opendental.com/manual243/claimforms.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Claim Forms</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimforms','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/claimforms.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/claimforms.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimforms.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimforms.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimforms.html" >v23.2</option><option value="https://www.opendental.com/manual231/claimforms.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimforms.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimforms.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimforms.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimforms.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimforms.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimforms.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimforms.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimforms.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimforms.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimforms.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimforms.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimforms.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimforms.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimforms.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimforms.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimforms.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimforms.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimforms.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimforms.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimforms.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimforms.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimforms.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Claim Forms</p></div>
<div class="GeneralPageContent">
<p>Printed Claim Forms are set up from the Claim Forms window.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Family/Insurance, Claim Forms.</p>
<img src="images/claimForms.png" width="787" height="423"/><p>This page only contains information about Claim Forms that are printed. The information in a printed Claim Form does not affect what is sent in e-claims.</p>
<p class="MarginBottomZero">Also see: </p>
<ul class="MarginBottomGap">
<li><a href="claimformada2012.html">ADA Claim Forms</a>: How fields in a printed ADA 2012, 2018, 2019, and 2024 Claim Form are populated.</li>
<li><a href="claimform1500.html">HCFA 1500 Claim Form</a>: How fields in a printed 1500 Claim Form are populated.</li>
</ul>
<h2>Claim Forms</h2>
<p>Open Dental includes multiple internal forms to choose from. Optionally, forms can be customized or new forms added.</p>
<img src="images/claimFormsGrids.png" width="627" height="270"/><p><b>Internal Claim Forms</b>: The original Claim Form templates that come with Open Dental. Double-click a form name to open a read-only copy.</p>
<p><b>Custom Claim Forms</b>: Claim Forms that can be customized, duplicated, imported, exported, or deleted. Double-click a form name to open <a href="claimformedit.html">Claim Form Edit</a>.</p>
<p><b>Copy</b>: Click to copy an Internal form to the Custom grid. </p>
<p><b>Set Default</b>: The default Claim Form determines the default Claim Form when a new <a href="insplan.html">Insurance Plan</a> is created. Highlight a custom form, then click to set it as the default. An X appears in the <i>Default </i>column.</p>
<h2>Reassign Claim Forms</h2>
<p>Old Claim Forms associated with insurance plans can be reassigned to an updated form.</p>
<img src="images/claimFormReassign.png" width="240" height="130"/><p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Import or create the new Claim Form.</li>
<li>In the Custom Claim Forms grid, highlight the old form.</li>
<li>Click the Reassign dropdown and select the new form. <br/></li>
<li>Click <b>Reassign</b>. A message indicates how many insurance plans were affected by the reassignment.</li>
</ol>
<h2>Custom Claim Form Options</h2>
<p>These options apply to forms in the Custom Claim Forms grid.</p>
<img src="images/claimFormCustomOptions.png" width="240" height="130"/><p><b>Add</b>: Click to create a new blank Claim Form. Opens Claim Form Edit.</p>
<p><b>Delete</b>: Highlight a Claim Form, then click to delete. Only do this when the Claim Form is not in use for any insurance plans.</p>
<p><b>Duplicate</b>: Highlight a Claim Form, then click to create a duplicate. </p>
<p><b>Export</b>: Highlight a claim form, then click to export in XML format. When the Windows File Explorer opens, choose where to save the XML. </p>
<p class="MarginBottomZero"><b>Import</b>: Import a Claim Form from an XML file.  </p>
<ul class="MarginBottomGap">
<li>Requires an XML file exported from Open Dental. </li>
<li>Most Claim Forms require a background image (GIF or JPEG) in addition to the XML.</li>
<li>To Import:  <ol>
<li>Save the XML file and the image file to the <a href="atozfolder.html">A to Z Folder</a> (i.e., OpenDentImages folder). </li>
<li>Click Import and select the XML file. </li>
<li>The new form appears last in the Custom Claim Forms list. Once imported, the XML file is no longer needed by Open Dental and can be deleted from the A to Z folder.</li>
<li>See <a href="claimformedit.html">Claim Form Edit</a> to add a background image.</li>
</ol>
</li>
</ul>
</div>
</div>
</body>
</html>```
