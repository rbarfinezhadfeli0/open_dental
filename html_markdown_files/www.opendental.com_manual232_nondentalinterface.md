# File: ./www.opendental.com/manual232/nondentalinterface.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Non-Dental</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('nondentalinterface','practice','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/nondentalinterface.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/nondentalinterface.html" >v24.2</option><option value="https://www.opendental.com/manual241/nondentalinterface.html" >v24.1</option><option value="https://www.opendental.com/manual233/nondentalinterface.html" >v23.3</option><option value="https://www.opendental.com/manual232/nondentalinterface.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/nondentalinterface.html" >v23.1</option><option value="https://www.opendental.com/manual224/nondentalinterface.html" >v22.4</option><option value="https://www.opendental.com/manual223/nondentalinterface.html" >v22.3</option><option value="https://www.opendental.com/manual222/nondentalinterface.html" >v22.2</option><option value="https://www.opendental.com/manual221/nondentalinterface.html" >v22.1</option><option value="https://www.opendental.com/manual214/nondentalinterface.html" >v21.4</option><option value="https://www.opendental.com/manual213/nondentalinterface.html" >v21.3</option><option value="https://www.opendental.com/manual212/nondentalinterface.html" >v21.2</option><option value="https://www.opendental.com/manual211/nondentalinterface.html" >v21.1</option><option value="https://www.opendental.com/manual205/nondentalinterface.html" >v20.5</option><option value="https://www.opendental.com/manual204/nondentalinterface.html" >v20.4</option><option value="https://www.opendental.com/manual203/nondentalinterface.html" >v20.3</option><option value="https://www.opendental.com/manual202/nondentalinterface.html" >v20.2</option><option value="https://www.opendental.com/manual201/nondentalinterface.html" >v20.1</option><option value="https://www.opendental.com/manual194/nondentalinterface.html" >v19.4</option><option value="https://www.opendental.com/manual193/nondentalinterface.html" >v19.3</option><option value="https://www.opendental.com/manual192/nondentalinterface.html" >v19.2</option><option value="https://www.opendental.com/manual191/nondentalinterface.html" >v19.1</option><option value="https://www.opendental.com/manual184/nondentalinterface.html" >v18.4</option><option value="https://www.opendental.com/manual183/nondentalinterface.html" >v18.3</option><option value="https://www.opendental.com/manual182/nondentalinterface.html" >v18.2</option><option value="https://www.opendental.com/manual181/nondentalinterface.html" >v18.1</option><option value="https://www.opendental.com/manual174/nondentalinterface.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Non-Dental</p></div>
<div class="GeneralPageContent">
<p>For practices or clinics using Open Dental for non-dental purposes, you can change the Open Dental interface to remove dental information.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="practice.html">Practice</a>, then check the <i>Practice is Medical</i> box.</p>
<img src="images/chartMedicalInterface.gif" width="915" height="667"/><p>If using clinics: In the main menu, click Lists, <a href="clinics.html">Clinics</a>, then check the <i>Clinic is Medical</i> box.</p>
<h2>Enable the Non-Dental Interface</h2>
<p class="MarginBottomZero">When <i>Practice is Medical</i> is enabled, the following changes occur: </p>
<ul class="MarginBottomGap">
<li>Throughout the software, most references to teeth and surfaces are hidden.</li>
<li>The Chart and Treatment Plan icons will be non-dental.</li>
<li>In the <a href="chart.html">Chart Module</a>:  <ul>
<li>The graphical tooth chart is hidden and the note box is larger.</li>
<li>Tabs for Missing Teeth, Movements and Primary no longer show.</li>
<li>Buttons for Perio Chart, Tooth Chart and Ortho Chart are removed from the toolbar.</li>
</ul>
</li>
<li>The Edit Benefit Window displays in Row View only (<a href="benefitinforowview.html">Edit Benefits - Row View</a>).</li>
<li>In Reports, the Procedure Code column is widened to accommodate up to 15 characters.</li>
</ul>
<p>Above is an example of the non-dental interface in the Chart module.</p>
<h2>Other Useful Features</h2>
<p class="MarginBottomZero">Other possible interface changes:  </p>
<ul class="MarginBottomGap">
<li>In the Chart module, <a href="showtabchart.html">Show Chart Views</a>, create customized views for the Progress Notes by removing columns that pertain to dental.</li>
<li>Customize definition options by renaming, editing, or removing dental options and adding others (Appt Procs Quick Add, Proc Button Categories, Diagnosis, Image categories, Proc Code Categories, Provider Specialties). <a href="definitions.html">Definitions</a></li>
<li>In <a href="displayfields.html">Display Fields</a>, remove dental columns from the interface (e.g. ProcedureGroupNote, TreatmentPlanModule).</li>
</ul>
<p>Other features useful for non-dental practices:</p>
<ul>
<li>Set a default start / stop range for patient medications in Preferences.</li>
<li>Enter medical lab orders. <a href="ehrcpoelab.html">EHR Medical Lab Order ( CPOE )</a></li>
<li>Import or enter lab results. <a href="ehrcpoelabresultsenter.html">EHR Lab Results</a></li>
<li>Add custom patient information fields (e.g. primary care physician). <a href="custompatientfields.html">Patient Fields</a></li>
</ul>
</div>
</div>
</body>
</html>```
