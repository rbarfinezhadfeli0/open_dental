# File: ./www.opendental.com/manual/codesystemimport.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Importing Code Systems</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('codesystemimport','ehrsetupwindow','+chart','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/codesystemimport.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/codesystemimport.html" >v24.2</option><option value="https://www.opendental.com/manual241/codesystemimport.html" >v24.1</option><option value="https://www.opendental.com/manual233/codesystemimport.html" >v23.3</option><option value="https://www.opendental.com/manual232/codesystemimport.html" >v23.2</option><option value="https://www.opendental.com/manual231/codesystemimport.html" >v23.1</option><option value="https://www.opendental.com/manual224/codesystemimport.html" >v22.4</option><option value="https://www.opendental.com/manual223/codesystemimport.html" >v22.3</option><option value="https://www.opendental.com/manual222/codesystemimport.html" >v22.2</option><option value="https://www.opendental.com/manual221/codesystemimport.html" >v22.1</option><option value="https://www.opendental.com/manual214/codesystemimport.html" >v21.4</option><option value="https://www.opendental.com/manual213/codesystemimport.html" >v21.3</option><option value="https://www.opendental.com/manual212/codesystemimport.html" >v21.2</option><option value="https://www.opendental.com/manual211/codesystemimport.html" >v21.1</option><option value="https://www.opendental.com/manual205/codesystemimport.html" >v20.5</option><option value="https://www.opendental.com/manual204/codesystemimport.html" >v20.4</option><option value="https://www.opendental.com/manual203/codesystemimport.html" >v20.3</option><option value="https://www.opendental.com/manual202/codesystemimport.html" >v20.2</option><option value="https://www.opendental.com/manual201/codesystemimport.html" >v20.1</option><option value="https://www.opendental.com/manual194/codesystemimport.html" >v19.4</option><option value="https://www.opendental.com/manual193/codesystemimport.html" >v19.3</option><option value="https://www.opendental.com/manual192/codesystemimport.html" >v19.2</option><option value="https://www.opendental.com/manual191/codesystemimport.html" >v19.1</option><option value="https://www.opendental.com/manual184/codesystemimport.html" >v18.4</option><option value="https://www.opendental.com/manual183/codesystemimport.html" >v18.3</option><option value="https://www.opendental.com/manual182/codesystemimport.html" >v18.2</option><option value="https://www.opendental.com/manual181/codesystemimport.html" >v18.1</option><option value="https://www.opendental.com/manual174/codesystemimport.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Importing Code Systems</p></div>
<div class="GeneralPageContent">
<p>In the <a href="ehrsetupwindow.html">EHR Setup Window</a>, click <b>Code Systems Importer</b>.</p>
<img src="images/ehrCodeSystemImport.png" width="883" height="319"/><p>Several systems for medical and procedural coding can be imported into Open Dental and then attached to patient information. Coding systems allow a consistent way to organize, index, store, and retrieve clinical data between providers and care sites.</p>
<p><div class="Note">Note: Code systems cannot be downloaded when using <a href="middletier.html">Middle Tier</a>. Instead, connect directly to the database. </div>
</p>
<p><b>Check for Updates</b>: Click to view a list of code systems available for import. </p>
<p class="MarginBottomZero">Columns: <br/></p>
<ul class="MarginBottomGap">
<li>Code System: The code system name. A description of each is below.</li>
<li>Current Version: If you have downloaded a coding system, the version downloaded shows.</li>
<li>Available Version: The latest version of the coding system available to download.</li>
<li>Download Status: Indicates the status of download and the number of codes imported.</li>
</ul>
<p><b>Keep old descriptions</b>: Check to retain previously downloaded code descriptions.</p>
<p class="MarginBottomZero"><b>Download Updates</b>: Highlight the Code Systems to download, then click to begin the download. </p>
<ul class="MarginBottomGap">
<li>If there are licensing agreements, they are displayed prior to import. Click <b>OK</b> to agree to licensing terms and proceed; Exit [X] the window to cancel the import.</li>
<li>It may take a several minutes for the data to download. As the download progresses, the status is shown in the <i>Download Status</i> column. When the import is complete, a message will indicate success. </li>
</ul>
<h2>Available Coding Systems</h2>
<p>Currently the following coding systems can be downloaded and are intended for use by U.S. offices only.</p>
<table class="simpletable">
<tr>
<th style="width:25%">Name</th>
<th style="width:25%">Description</th>
<th style="width:25%">Codes/Database Size</th>
<th style="width:25%">Where used</th>
</tr>
<tr>
<td>CDCREC</td>
<td>CDC Race and Ethnicity Set.</td>
<td>966 codes &lt; .1 MB</td>
<td>CQMs, demographics</td>
</tr>
<tr>
<td>CVX</td>
<td></td>
<td>159 codes &lt; .1 MB</td>
<td>vaccine data export</td>
</tr>
<tr>
<td>HCPCS</td>
<td>Healthcare Common Procedure Coding System</td>
<td>5,951 codes .5 MB</td>
<td>procedure codes, CQMs</td>
</tr>
<tr>
<td><a href="icdcodes.html">ICD-10</a></td>
<td>International Classification of Diseases 10th revision</td>
<td>95,352 codes 5.54 MB</td>
<td>procedures, syndromic surveillance, clinical summaries, summaries of care, claims, CQMs </td>
</tr>
<tr>
<td><a href="loinc.html">LOINC</a></td>
<td>Logical Observation Identifiers Names and Codes</td>
<td>72,624 codes 15.5 MB</td>
<td>CQMs, medical laboratory orders, radiology orders, clinical summaries, summaries of care, syndromic surveillance, vaccines (validation) </td>
</tr>
<tr>
<td>RxNorm</td>
<td>A normalized naming system for generic and branded drugs.</td>
<td>391,275 codes 34.9 MB</td>
<td>medications (every medication should be associated with an RxNorm), prescriptions, CQMs</td>
</tr>
<tr>
<td><a href="snomedct.html">SNOMED CT</a></td>
<td>Systemized Nomenclature of Medication Clinical Terms</td>
<td>2,720,609 codes 131 MB</td>
<td>problems (every problem should be attached to a SNOMED CT code), CQMs, procedures (medical tab)</td>
</tr>
<tr>
<td>SOP</td>
<td>Systems of Payment</td>
<td>145 codes &lt; .1 MB</td>
<td>CQMs</td>
</tr>
<tr>
<td>UCUM</td>
<td>Unified Code for Units of Measure</td>
<td>557 &lt; .1 MB</td>
<td>CQMs, medical laboratory orders, syndromic surveillance, vaccines</td>
</tr>
<tr>
<td></td>
<td>TOTAL</td>
<td>97.7 MB</td>
<td></td>
</tr>
</table>
<div class="Note">Note: <ul>
<li><a href="cptcodes.html">CPT Codes</a> were used with 2011 EHR. They are no longer used and cannot be imported.</li>
<li>ICD-9 Codes can still be imported but are no longer used. Use ICD-10 Codes instead.</li>
</ul>
</div>
</div>
</div>
</body>
</html>```
