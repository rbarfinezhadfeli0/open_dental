# File: ./www.opendental.com/manual/medicationmaster.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Medications List</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('medicationmaster','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/medicationmaster.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/medicationmaster.html" >v24.2</option><option value="https://www.opendental.com/manual241/medicationmaster.html" >v24.1</option><option value="https://www.opendental.com/manual233/medicationmaster.html" >v23.3</option><option value="https://www.opendental.com/manual232/medicationmaster.html" >v23.2</option><option value="https://www.opendental.com/manual231/medicationmaster.html" >v23.1</option><option value="https://www.opendental.com/manual224/medicationmaster.html" >v22.4</option><option value="https://www.opendental.com/manual223/medicationmaster.html" >v22.3</option><option value="https://www.opendental.com/manual222/medicationmaster.html" >v22.2</option><option value="https://www.opendental.com/manual221/medicationmaster.html" >v22.1</option><option value="https://www.opendental.com/manual214/medicationmaster.html" >v21.4</option><option value="https://www.opendental.com/manual213/medicationmaster.html" >v21.3</option><option value="https://www.opendental.com/manual212/medicationmaster.html" >v21.2</option><option value="https://www.opendental.com/manual211/medicationmaster.html" >v21.1</option><option value="https://www.opendental.com/manual205/medicationmaster.html" >v20.5</option><option value="https://www.opendental.com/manual204/medicationmaster.html" >v20.4</option><option value="https://www.opendental.com/manual203/medicationmaster.html" >v20.3</option><option value="https://www.opendental.com/manual202/medicationmaster.html" >v20.2</option><option value="https://www.opendental.com/manual201/medicationmaster.html" >v20.1</option><option value="https://www.opendental.com/manual194/medicationmaster.html" >v19.4</option><option value="https://www.opendental.com/manual193/medicationmaster.html" >v19.3</option><option value="https://www.opendental.com/manual192/medicationmaster.html" >v19.2</option><option value="https://www.opendental.com/manual191/medicationmaster.html" >v19.1</option><option value="https://www.opendental.com/manual184/medicationmaster.html" >v18.4</option><option value="https://www.opendental.com/manual183/medicationmaster.html" >v18.3</option><option value="https://www.opendental.com/manual182/medicationmaster.html" >v18.2</option><option value="https://www.opendental.com/manual181/medicationmaster.html" >v18.1</option><option value="https://www.opendental.com/manual174/medicationmaster.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Medications List</p></div>
<div class="GeneralPageContent">
<p>The Medications master list contains all medications (generic and brand name) that can be added to a patient's chart.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Lists, Medications.</p>
<img src="images/medicationMaster.png" width="915" height="370"/><p>Alternatively, in the <a href="medical.html">Medical</a> window, Medications tab, click Add Medication.</p>
<h2>All Medications Tab</h2>
<p>This tab lists all medications that have been entered, both generic and brand name.</p>
<p><b>Add Generic</b>: Add a generic medication. Generic medications must be added before associated brand names can be entered.</p>
<p><b>Add Brand</b>: Add a brand name medication. First, select the associated generic medication.</p>
<p><b>Search</b>: Filter the list of medications by drug name. Results show as characters are entered.</p>
<p><b>Import</b>: Import medications. Must be imported from a file exported from an Open Dental database. Only new medications are imported.</p>
<p class="MarginBottomZero"><b>Export</b>: Export the medications list to a JSON file.<br/></p>
<ul class="MarginBottomGap">
<li>Medication Lists exported in Version 21.3.10 or greater cannot be imported into Version 21.3.9 or lower.</li>
<li>Medication Lists from any version can be imported into Version 21.3.10 or greater. </li>
</ul>
<p class="MarginBottomZero"><b>All Medications grid</b>: Medications are sorted alphabetically by default. To change the sort order, click on a column header.  </p>
<ul class="MarginBottomGap">
<li>In Use: Indicates medications that are currently prescribed to a patient or used as an EHR indicator in Preferences.</li>
<li>RxNorm: Lists <a href="rxnorms.html">RxNorms</a> associated with the drug. Click <b>(select)</b> to select an RxNorm. If RxNorms are not already imported, a prompt displays to import them.</li>
</ul>
<h2>Edit a Medication</h2>
<p>To add a generic medication, click <b>Add Generic</b>. To add a brand name, select the generic medication, then click <b>Add Brand</b>. To edit an existing medication, double-click it.</p>
<img src="images/medicationMasterEdit.png" width="655" height="516"/><p><b>RxNorm</b>: Click [...] to associate the medication with a normalized RxNorms drug name. For EHR, all medications in the list should be attached to an RxNorm so that the medication, and any allergies to this medication, show on <a href="ehrsummaryofcaresend.html">EHR Summaries of Care</a>.</p>
<p><b>Drug Name</b>: Enter the drug name as it shows in the master list.</p>
<p><b>Generic Name</b>: Enter the associated generic drug name. When entering a brand name drug this field is auto-filled with the generic name.</p>
<p><b>Notes</b>: Only allowed on generic medications. Every medication should have a note, no matter how short. They usually consist of the therapeutic category, and any precautions or interactions to be aware of. All medications attached to the generic medication show the same note. <a href="rightclicktextboxes.html">Right-Click</a> the text box for additional options.</p>
<p>Entering medications into the list takes a little extra time at first. It helps to divide the task among the assistants and the dentists. The assistants can look up the medication, ensure that the spelling is correct, and enter the generic and brand names. But they should not enter in any notes. Notes should only be entered by a dentist.</p>
<p class="MarginBottomZero"><b>Dependencies</b>: Click a dropdown to quickly view associated information about this drug. </p>
<ul class="MarginBottomGap">
<li><b>Patient medication</b>: A list of all patients who have this medication (<a href="medicationspatient.html">Medications</a> (active or discontinued)).</li>
<li><b>Patient allergy</b>: A list of all patients who have this medication as an allergy (<a href="allergiespatient.html">Allergies</a> (active and inactive)).</li>
<li><b>Brands</b>: For generic medications, click the down arrow to see which brand name medications are associated with this medication.</li>
</ul>
<p><b>Delete</b>: Remove the medication from the master list. Medications in use by a patient, in the Allergy List, or as an EHR indicator cannot be deleted.</p>
<h2>Missing Generic/Brand Tab</h2>
<p>This tab shows for United States only. The medications in this list are imported from Ensora eRx (formerly NewCrop eRx), not created in Open Dental, and have likely been created in the Ensora eRx interface. This list is empty if Ensora eRx has not been used.</p>
<img src="images/medicationMasterMissing.png" width="617" height="345"/><p class="MarginBottomZero">To convert a medication to generic: </p>
<ol class="MarginBottomGap">
<li>Select the drug description, then click <b>Convert to Generic</b>.</li>
<li>In the Edit Medication window, enter the medication details.</li>
<li>Click OK to save.</li>
</ol>
<p class="MarginBottomZero">To convert a medication to brand: </p>
<ol class="MarginBottomGap">
<li>On the All Medications tab, select a generic drug description.</li>
<li>Click the Missing Generic/Brand tab. Select the drug to convert.</li>
<li>Click <b>Convert to Brand</b>.</li>
<li>In the Edit Medication window, enter the medication details.</li>
<li>Click OK to save.</li>
</ol>
</div>
</div>
</body>
</html>```
