# File: ./www.opendental.com/manual/ehrnotperformed.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR CQMs Not Performed</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrnotperformed','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrnotperformed.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrnotperformed.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrnotperformed.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrnotperformed.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrnotperformed.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrnotperformed.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrnotperformed.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrnotperformed.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrnotperformed.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrnotperformed.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrnotperformed.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrnotperformed.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrnotperformed.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrnotperformed.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrnotperformed.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrnotperformed.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrnotperformed.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrnotperformed.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrnotperformed.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrnotperformed.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrnotperformed.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrnotperformed.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrnotperformed.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrnotperformed.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrnotperformed.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrnotperformed.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrnotperformed.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrnotperformed.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR CQMs Not Performed</p></div>
<div class="GeneralPageContent">
<p>When you document <a href="ehrinterventions.html">EHR Interventions</a> for an eligible patient encounter, it counts towards <a href="ehrcqm.html">EHR Clinical Quality Measures</a>. If an intervention or action is not performed, you can document the reason. Interventions and reasons not performed are usually documented while entering patient <a href="vitalsignsenter.html">EHR Vital Signs</a> or <a href="smokingenter.html">Smoking Status</a>.</p>
<p>To view all <i>not performed reasons</i> for a patient, or manually add reasons.</p>
<ol>
<li>On the <a href="ehrdashboard1.html">EHR Dashboard</a>, click <b>Not Performed</b>. <br/><img src="images/ehrcqmNotPerformed.gif" width="866" height="206" class="ImageInParagraph"/><p>All reasons already entered are listed. Double click an entry to edit.</p>
</li>
<li>Click Add to enter a reason. <br/><img src="images/ehrcqmReasonInput.gif" width="446" height="183" class="ImageInParagraph"/></li>
<li>Click the dropdown to select the item not performed, then click OK.</li>
<li>If <i>BMIExam</i> or Document <i>CurrentMeds</i> is selected, the Not Performed Item with Reason window will show. If <i>InfluenzaVaccination</i> or <i>TobaccoScreening</i> is selected, another input window will request the item not being performed. <br/><img src="images/ehrVitalsReason.gif" width="393" height="452" class="ImageInParagraph"/></li>
<li><p>Enter the reason, then click OK.</p>
<ul>
<li>Code: Click to select from a list of acceptable reasons. The code system name and code description will populate based on your selection.</li>
<li>Note: Enter any notes.</li>
</ul>
</li>
</ol>
</div>
</div>
</body>
</html>```
