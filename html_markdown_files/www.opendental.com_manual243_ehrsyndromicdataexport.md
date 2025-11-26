# File: ./www.opendental.com/manual243/ehrsyndromicdataexport.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Export Syndromic Surveillance Data</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrsyndromicdataexport','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrsyndromicdataexport.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrsyndromicdataexport.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrsyndromicdataexport.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrsyndromicdataexport.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrsyndromicdataexport.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrsyndromicdataexport.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrsyndromicdataexport.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrsyndromicdataexport.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrsyndromicdataexport.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrsyndromicdataexport.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrsyndromicdataexport.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrsyndromicdataexport.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrsyndromicdataexport.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrsyndromicdataexport.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrsyndromicdataexport.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrsyndromicdataexport.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrsyndromicdataexport.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrsyndromicdataexport.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrsyndromicdataexport.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrsyndromicdataexport.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrsyndromicdataexport.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrsyndromicdataexport.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrsyndromicdataexport.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrsyndromicdataexport.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrsyndromicdataexport.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrsyndromicdataexport.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrsyndromicdataexport.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrsyndromicdataexport.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Export Syndromic Surveillance Data</p></div>
<div class="GeneralPageContent">
<p>See <a href="ehrdashboard1.html">EHR Dashboard</a>.</p>
<p>Syndromic Surveillance Data can be exported as an HL7 ADT standardized message. To record observations see <a href="ehrsyndromicdataobs.html">Enter Syndromic Surveillance Observations</a>.</p>
<p>Open Dental does not currently support automatic submission of syndromic data to state public health agencies. Rather, you must manually export observations by appointment, then submit to the public health agency using the required transport method. Since most dentists don't collect syndromic data, we think attesting to an exclusion is a good option. However, some states may not accept an exclusion.</p>
<h2>Before exporting</h2>
<p>The public health agency will require sign up and additional steps before data can be accepted. Contact your state's public health agency to determine requirements, sign legal agreements, or begin the on-boarding process.</p>
<h2>Exporting data</h2>
<ol>
<li>On the patient's <a href="aptedit.html">Edit Appointment</a>, click <b>Obs</b>. <img src="images/ehrSyndromicObs1.gif" width="661" height="521"/><p>All observations already recorded and attached to the appointment are listed.</p>
</li>
<li>Click <b>Export HL7</b>.</li>
<li>Select the location in which to save the exported txt file, then click Save.</li>
</ol>
</div>
</div>
</body>
</html>```
