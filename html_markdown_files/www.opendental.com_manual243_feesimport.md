# File: ./www.opendental.com/manual243/feesimport.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Fees Import</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('feesimport','feescheduletools','procedurecodes','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/feesimport.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/feesimport.html" >v24.2</option><option value="https://www.opendental.com/manual241/feesimport.html" >v24.1</option><option value="https://www.opendental.com/manual233/feesimport.html" >v23.3</option><option value="https://www.opendental.com/manual232/feesimport.html" >v23.2</option><option value="https://www.opendental.com/manual231/feesimport.html" >v23.1</option><option value="https://www.opendental.com/manual224/feesimport.html" >v22.4</option><option value="https://www.opendental.com/manual223/feesimport.html" >v22.3</option><option value="https://www.opendental.com/manual222/feesimport.html" >v22.2</option><option value="https://www.opendental.com/manual221/feesimport.html" >v22.1</option><option value="https://www.opendental.com/manual214/feesimport.html" >v21.4</option><option value="https://www.opendental.com/manual213/feesimport.html" >v21.3</option><option value="https://www.opendental.com/manual212/feesimport.html" >v21.2</option><option value="https://www.opendental.com/manual211/feesimport.html" >v21.1</option><option value="https://www.opendental.com/manual205/feesimport.html" >v20.5</option><option value="https://www.opendental.com/manual204/feesimport.html" >v20.4</option><option value="https://www.opendental.com/manual203/feesimport.html" >v20.3</option><option value="https://www.opendental.com/manual202/feesimport.html" >v20.2</option><option value="https://www.opendental.com/manual201/feesimport.html" >v20.1</option><option value="https://www.opendental.com/manual194/feesimport.html" >v19.4</option><option value="https://www.opendental.com/manual193/feesimport.html" >v19.3</option><option value="https://www.opendental.com/manual192/feesimport.html" >v19.2</option><option value="https://www.opendental.com/manual191/feesimport.html" >v19.1</option><option value="https://www.opendental.com/manual184/feesimport.html" >v18.4</option><option value="https://www.opendental.com/manual183/feesimport.html" >v18.3</option><option value="https://www.opendental.com/manual182/feesimport.html" >v18.2</option><option value="https://www.opendental.com/manual181/feesimport.html" >v18.1</option><option value="https://www.opendental.com/manual174/feesimport.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Fees Import</p></div>
<div class="GeneralPageContent">
<p>Fees can be imported into fee schedules (e.g., if insurance sends a new fee schedule). </p>
<p>In <a href="feescheduletools.html">Fee Tools</a>, at the lower left, is an <b>Import</b> button.</p>
<img src="images/feeScheduleImport.png" width="222" height="89"/><p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://youtu.be/eE8YXP4G3bo">Updating Your UCR (Office) Fees</a>.</p>
<p> For fees to import, the corresponding code must already exist in the <a href="procedurecodes.html">Procedure Codes</a> list. </p>
<div class="Note">Note: Importing codes and fees does not automatically add codes. See <a href="procedurecodenew.html">Add Procedure Code</a> for instructions on creating new procedure codes.</div>
<br/><br/><p>Usually, it is easiest to manually enter or edit fees in a fee schedule instead of importing it (create the fee schedule, nine-key in the fees). Often the fee schedules provided to offices have no standard format. Thus, taking a PDF, printed fee schedule, or custom formatted fee list and editing it for import can be difficult. Large offices may have IT staff handle fee schedule importing, but in general, importing fees is a technical process and an advanced feature.</p>
<p class="MarginBottomZero"><b>File Format Requirements</b>: Fees must be saved as a tab-delimited file (text file is preferred). To see an example of the correct file format, <a href="feesexport.html">Export Fees</a>. When opened with Notepad, it looks similar to the screenshot shown below:<br/><img src="images/feeSchedFormat.png" width="606" height="388" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li>The first column of the imported file must contain the procedure code; the second column must contain the fee with no monetary symbols or extra characters/spaces. Decimals are not considered extra characters.</li>
<li>Columns must be separated by tab. </li>
<li>Columns containing additional information (e.g., abbreviation or description) are not required and are ignored during import. </li>
<li>Fee sort order does not matter. </li>
<li>Close the file before importing the fees.</li>
</ul>
<p><div class="Note">Note: To only make changes to a few fees, create a tab-delimited text file that only contains those codes and fees, then import it. Only those codes are updated.</div>
</p>
<p class="MarginBottomZero">To import fees into an existing fee schedule:<br/></p>
<ol class="MarginBottomGap">
<li>Make a backup copy of the existing fees as a preventative measure. See <a href="feeschedulecopy.html">Fees Copy</a> for detailed instructions.</li>
<li>Import the fees into the original fee schedule.</li>
<ol>
<li>In the Fee Tools window, under the <i>Select Fees</i> section, select the fee schedule to import into.</li>
<ul>
<li> Selecting only a fee schedule will export the default (i.e., global) fee schedule.</li>
<li> Select a Provider and/or Clinic to further narrow the export to <a href="procedurefeeoverrides.html">Clinic or Provider-Specific Fees</a>.</li>
<li>Provider or Clinic can only be selected for <a href="feeschedules.html">Fee Schedules</a> with <i>Use Global Fees</i> unchecked.</li>
</ul>
<li>(Optional) To start with a blank fee schedule, click <b>Clear</b>. All existing fees are deleted.</li>
<li>Click <b>Import</b>.</li>
<li>A warning message appears. Click <b>OK</b> to proceed.</li>
</ol>
</ol>
<img src="images/feeSchedImportWarn.png" width="413" height="172"/><p>If fees were cleared before importing, only the imported fees remain. If fees were not cleared before import, any existing fees are overwritten with imported fees and procedure codes that did not contain a fee in the import remain unchanged.</p>
<p>To apply updated fees to treatment planned procedures, see <a href="feesupdate.html">Fees Update</a>.</p>
</div>
</div>
</body>
</html>```
