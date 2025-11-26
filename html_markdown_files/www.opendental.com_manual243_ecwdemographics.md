# File: ./www.opendental.com/manual243/ecwdemographics.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eCw Patient Demographics</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ecwdemographics','bridgeeclinicalworks','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ecwdemographics.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ecwdemographics.html" >v24.2</option><option value="https://www.opendental.com/manual241/ecwdemographics.html" >v24.1</option><option value="https://www.opendental.com/manual233/ecwdemographics.html" >v23.3</option><option value="https://www.opendental.com/manual232/ecwdemographics.html" >v23.2</option><option value="https://www.opendental.com/manual231/ecwdemographics.html" >v23.1</option><option value="https://www.opendental.com/manual224/ecwdemographics.html" >v22.4</option><option value="https://www.opendental.com/manual223/ecwdemographics.html" >v22.3</option><option value="https://www.opendental.com/manual222/ecwdemographics.html" >v22.2</option><option value="https://www.opendental.com/manual221/ecwdemographics.html" >v22.1</option><option value="https://www.opendental.com/manual214/ecwdemographics.html" >v21.4</option><option value="https://www.opendental.com/manual213/ecwdemographics.html" >v21.3</option><option value="https://www.opendental.com/manual212/ecwdemographics.html" >v21.2</option><option value="https://www.opendental.com/manual211/ecwdemographics.html" >v21.1</option><option value="https://www.opendental.com/manual205/ecwdemographics.html" >v20.5</option><option value="https://www.opendental.com/manual204/ecwdemographics.html" >v20.4</option><option value="https://www.opendental.com/manual203/ecwdemographics.html" >v20.3</option><option value="https://www.opendental.com/manual202/ecwdemographics.html" >v20.2</option><option value="https://www.opendental.com/manual201/ecwdemographics.html" >v20.1</option><option value="https://www.opendental.com/manual194/ecwdemographics.html" >v19.4</option><option value="https://www.opendental.com/manual193/ecwdemographics.html" >v19.3</option><option value="https://www.opendental.com/manual192/ecwdemographics.html" >v19.2</option><option value="https://www.opendental.com/manual191/ecwdemographics.html" >v19.1</option><option value="https://www.opendental.com/manual184/ecwdemographics.html" >v18.4</option><option value="https://www.opendental.com/manual183/ecwdemographics.html" >v18.3</option><option value="https://www.opendental.com/manual182/ecwdemographics.html" >v18.2</option><option value="https://www.opendental.com/manual181/ecwdemographics.html" >v18.1</option><option value="https://www.opendental.com/manual174/ecwdemographics.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eCw Patient Demographics</p></div>
<div class="GeneralPageContent">
<p>For <a href="bridgeeclinicalworks.html">eClinicalWorks</a> users, all patient demographic data originates in eCW and is passed to Open Dental. All synchronization is based on the patient ID.</p>
<p>Do not enter patient data in Open Dental. When patient demographic data is sent from eCW, it will automatically overwrite all data in Open Dental for the matching patient ID without any user interaction. If the patient ID does not yet exist, then a new patient is created in Open Dental.</p>
<p>Patients that have a blank first name or blank last name in eCW will not be imported into Open Dental. If a patient has a blank first name or blank last name and the data for that patient is passed into Open Dental from eCW, then Open Dental will place a message in the Event Log to let the user know that the patient was not imported.</p>
<p>If using Tight Integration, you cannot edit patient demographic data in Open Dental.</p>
<p><b>Merging Patients</b>: To merge patients you must first merge patients in eCW. Then, immediately afterwards, merge the same two patients in the same order in Open Dental. See <a href="mergepatients.html">Merge Patients</a>. If patients are not merged in this manner, some information may not properly bridge between eCW and Open Dental.</p>
</div>
</div>
</body>
</html>```
