# File: ./www.opendental.com/manual232/ehrclinicalsummaryprovide.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Clinical Summary</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrclinicalsummaryprovide','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/ehrclinicalsummaryprovide.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/ehrclinicalsummaryprovide.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrclinicalsummaryprovide.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrclinicalsummaryprovide.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrclinicalsummaryprovide.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/ehrclinicalsummaryprovide.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrclinicalsummaryprovide.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrclinicalsummaryprovide.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrclinicalsummaryprovide.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrclinicalsummaryprovide.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrclinicalsummaryprovide.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrclinicalsummaryprovide.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrclinicalsummaryprovide.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrclinicalsummaryprovide.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrclinicalsummaryprovide.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrclinicalsummaryprovide.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrclinicalsummaryprovide.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrclinicalsummaryprovide.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrclinicalsummaryprovide.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrclinicalsummaryprovide.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrclinicalsummaryprovide.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrclinicalsummaryprovide.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrclinicalsummaryprovide.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrclinicalsummaryprovide.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrclinicalsummaryprovide.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrclinicalsummaryprovide.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrclinicalsummaryprovide.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrclinicalsummaryprovide.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Clinical Summary</p></div>
<div class="GeneralPageContent">
<p>On the <a href="ehrdashboard1.html">EHR Dashboard</a>, click <b>Send clinical summary to Pt</b>.</p>
<img src="images/ehrClinicalSummary.gif" width="289" height="513"/><p>Clinical summaries are after-visit summaries that provide relevant and actionable information and instructions to a patient. This was a measure in stage 1 and stage 2 of EHR, but is no longer a reporting requirement for <a href="../site/ehrmodified2.html">EHR Modified Stage 2</a>.</p>
<p>The Clinical Summaries Sent to Patient grid lists dated log entries of clinical summaries that have been provided to the patient. To preview an xml version of the CCD file, click <b>Show xml</b>. </p>
<p>To provide the clinical summary, you have three options:</p>
<ol>
<li>(recommended) Click <b>To Portal</b> to automatically send the clinical summary to Patient Portal.</li>
<li>Click <b>Export</b> to save two clinical summary files (the document and a stylesheet) to a location on your computer.</li>
<li>Click<b> Show xhtml</b> to preview the clinical summary in a web browser. You can then Print it to paper or as a PDF file to provide to a patient.</li>
</ol>
<br/><img src="images/ehrClinicalSummaryExport.gif" width="381" height="434" class="ImageInParagraph"/><p>Select and enter the information to include in the clinical summary, then click OK.</p>
<ul>
<li><b>Visit Date</b>: Enter a date to limit the information to a specific office visit, or leave blank to include all information for all dates. If a date is entered, procedures, vital signs and encounters with matching dates will show, and care plans for today's date and the future will show.</li>
<li><b>Sections</b>: Check the boxes next to the information to include. Click All to select all sections; click None to clear all selections. For a detailed explanation of all areas, see <a href="ehrccd.html">EHR Continuity of Care Document ( CCD )</a>. If you uncheck boxes, the heading will show and content will say <i>none</i>.</li>
<li><b>Instructions</b>: Type any instructions.</li>
</ul>
<br/><p>Select method:</p>
<ul>
<li>If <b>To Portal</b>: The clinical summary files will be sent to the <a href="../site/patientportal.html">Patient Portal Feature</a> as a WebMail attachment. A patient email is not required. The provider associated with the clinical summary will be the logged in provider, or, if a provider is not logged in, the patient's primary provider.</li>
<li>If <b>Exporting</b>: Select the location on your computer where the ccd.xml and ccd.xls files will be exported, then click OK. The default location is the first category/folder in the patient's <a href="images.html">Imaging Module</a>. We recommend creating a new Images category in <a href="definitions.html">Definitions</a> (e.g. EHR Exports) and place it as the first category.</li>
<li>If <b>Show xhtml</b>: The clinical summary will open in a browser window. Click Print.</li>
</ul>
<br/><p>When a clinical summary is sent to the patient portal, there is no verification that the Patient Portal has been set up or that a patient has been granted access. See <a href="portalaccess.html">Patient Portal Access</a>. The clinical summary is sent to the portal regardless. Once the patient can access the portal, the clinical summary will be available for viewing. </p>
</div>
</div>
</body>
</html>```
