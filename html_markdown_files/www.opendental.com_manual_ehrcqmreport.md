# File: ./www.opendental.com/manual/ehrcqmreport.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Report Clinical Quality Measures (CQMs)</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrcqmreport','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrcqmreport.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrcqmreport.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrcqmreport.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrcqmreport.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrcqmreport.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrcqmreport.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrcqmreport.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrcqmreport.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrcqmreport.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrcqmreport.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrcqmreport.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrcqmreport.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrcqmreport.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrcqmreport.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrcqmreport.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrcqmreport.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrcqmreport.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrcqmreport.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrcqmreport.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrcqmreport.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrcqmreport.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrcqmreport.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrcqmreport.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrcqmreport.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrcqmreport.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrcqmreport.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrcqmreport.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrcqmreport.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Report Clinical Quality Measures (CQMs)</p></div>
<div class="GeneralPageContent">
<p>We recommend checking <a href="ehrcqm.html">EHR Clinical Quality Measures</a> (CQMs) percentages early during your reporting period to make sure values are increasing.</p>
<ul>
<li>If denominators are 0, there are no <a href="ehrencounters.html">EHR Encounters</a>. Set a default encounter code or manually create encounters.</li>
<li>If the numerator values are low, make sure you are completing the actions required. See <a href="ehrcqmdef.html">EHR Clinical Quality Measure Descriptions</a>.</li>
</ul>
<br/><ol>
<li>On the <a href="ehrdashboard1.html">EHR Dashboard</a>, click <i>Quality Meas</i>. <br/><img src="images/ehrCQM.gif" width="810" height="476" class="ImageInParagraph"/></li>
<li>Enter the reporting period start and end dates and select the provider to report on.</li>
<li>Click <b>Refresh</b> to update the list.</li>
</ol>
<br/><p>A CQM may be represented by several rows if the data is divided into different classifications (e.g. divided by age groups). Double click a row to see exactly what is included in each denominator, numerator, exception, etc. See <a href="ehrcqmdetails.html">EHR CQM Calculation Details</a>.</p>
<p>To export and submit the CQM data:</p>
<ol>
<li>Click <b>Create QRDAs</b>.</li>
<li>Select a location on your computer to export the CQM files to, then click OK. A message will show indicating the files have been exported successfully. The file set will be grouped under a dated CQM folder in the file location.</li>
<li>Submit the report.</li>
</ol>
</div>
</div>
</body>
</html>```
