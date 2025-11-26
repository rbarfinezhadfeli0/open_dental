# File: ./www.opendental.com/manual243/problemmaster.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Problem List</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('problemmaster','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/problemmaster.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/problemmaster.html" >v24.2</option><option value="https://www.opendental.com/manual241/problemmaster.html" >v24.1</option><option value="https://www.opendental.com/manual233/problemmaster.html" >v23.3</option><option value="https://www.opendental.com/manual232/problemmaster.html" >v23.2</option><option value="https://www.opendental.com/manual231/problemmaster.html" >v23.1</option><option value="https://www.opendental.com/manual224/problemmaster.html" >v22.4</option><option value="https://www.opendental.com/manual223/problemmaster.html" >v22.3</option><option value="https://www.opendental.com/manual222/problemmaster.html" >v22.2</option><option value="https://www.opendental.com/manual221/problemmaster.html" >v22.1</option><option value="https://www.opendental.com/manual214/problemmaster.html" >v21.4</option><option value="https://www.opendental.com/manual213/problemmaster.html" >v21.3</option><option value="https://www.opendental.com/manual212/problemmaster.html" >v21.2</option><option value="https://www.opendental.com/manual211/problemmaster.html" >v21.1</option><option value="https://www.opendental.com/manual205/problemmaster.html" >v20.5</option><option value="https://www.opendental.com/manual204/problemmaster.html" >v20.4</option><option value="https://www.opendental.com/manual203/problemmaster.html" >v20.3</option><option value="https://www.opendental.com/manual202/problemmaster.html" >v20.2</option><option value="https://www.opendental.com/manual201/problemmaster.html" >v20.1</option><option value="https://www.opendental.com/manual194/problemmaster.html" >v19.4</option><option value="https://www.opendental.com/manual193/problemmaster.html" >v19.3</option><option value="https://www.opendental.com/manual192/problemmaster.html" >v19.2</option><option value="https://www.opendental.com/manual191/problemmaster.html" >v19.1</option><option value="https://www.opendental.com/manual184/problemmaster.html" >v18.4</option><option value="https://www.opendental.com/manual183/problemmaster.html" >v18.3</option><option value="https://www.opendental.com/manual182/problemmaster.html" >v18.2</option><option value="https://www.opendental.com/manual181/problemmaster.html" >v18.1</option><option value="https://www.opendental.com/manual174/problemmaster.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Problem List</p></div>
<div class="GeneralPageContent">
<p>The master problem list contains all problems that can be attached to a patient's problem list.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Lists, Problems.</p>
<img src="images/problemSetup.gif" width="690" height="411"/><p>Alternatively, in the <a href="medical.html">Medical</a> area of the Chart Module, Problems tab, click <b>Add Problem</b>.</p>
<p> Problems are medical conditions or other factors that affect the health of patients. In order for a problem to be added to a patient's Medical information, it must first be added to the master list. The list contains all problems that have previously been added to patients or that users have added to the list.</p>
<p><b>Search</b>: Filter the list by ICD9, ICD10, or SNOMED CT code, or by description. As the user enters criteria, the list will update with matching results.</p>
<p><b>Show Hidden</b>: Check to show problem which have been marked hidden.</p>
<p><b>Add</b>: Click to add a new problem to the master list. See Add or Edit a Problem below.</p>
<p class="MarginBottomZero"><b>Sort Options</b>: If accessed via the Main Menu, problems can be reordered or sorted alphabetically. These options do not appear when the Problems list is opened via the Medical area of the Chart Module. </p>
<ul class="MarginBottomGap">
<li>Use the <b>Up/Down</b> arrows to reorder individual problems.</li>
<li>Click <b>Alphabetize</b> to sort the current list of problems alphabetically by description.</li>
</ul>
<p><b>Close</b>: Click to close the problems list.</p>
<h2>Add or Edit a Problem</h2>
<p>Click <b>Add</b> to create a new problem.</p>
<p> Double-click an existing problem to edit.</p>
<p><img src="images/problemEdit.gif" width="470" height="239"/></p>
<p><b>ICD-9 Code</b>: Click <b>[...]</b> to associate the problem with an ICD-9 Code.</p>
<p><b>ICD-10 Code</b>: Click <b>[...]</b> to associate the problem with an ICD-10 Code. See <a href="icdcodes.html">ICD-10 Codes</a></p>
<p><b>SNOMED CT Code</b>: Click <b>[...]</b> to associate the problem with <a href="snomedct.html">SNOMED CT Codes</a>. Required for problem details to appear on <a href="ehrccd.html">Continuity of Care Document (CCD)</a>. </p>
<p><b>Description</b>: Type the identifying name of the condition.</p>
<p><b>Hidden</b>: Check to hide a problem from appearing in the master Problem List when updating patient medical history. Can be used with problems that are attached to patients as these cannot be deleted.</p>
<p><b>Delete</b>: Click to delete a problem from the master Problem List. Can only be used if the problem is not attached to any patients.</p>
<p>Click <b>OK</b> to save the problem.</p>
<p>To download code systems to associate to problems, see <a href="codesystemimport.html">Importing Code Systems</a>.</p>
<p class="MarginBottomZero">For EHR: </p>
<ul class="MarginBottomGap">
<li>If a problem of <i>none</i> is created, also enter the problem as the <i>Indicator that patient has no problems</i> in <a href="preferences.html">Preferences</a>.</li>
</ul>
<p>Problems can also be added to the master list while editing a <a href="sheetsmedicalhistory.html">Medical History Sheet</a>.</p>
</div>
</div>
</body>
</html>```
