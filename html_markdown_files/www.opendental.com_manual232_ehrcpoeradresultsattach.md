# File: ./www.opendental.com/manual232/ehrcpoeradresultsattach.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Attach Image to Radiology Order</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrcpoeradresultsattach','ehrcpoelab','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/ehrcpoeradresultsattach.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/ehrcpoeradresultsattach.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrcpoeradresultsattach.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrcpoeradresultsattach.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrcpoeradresultsattach.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/ehrcpoeradresultsattach.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrcpoeradresultsattach.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrcpoeradresultsattach.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrcpoeradresultsattach.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrcpoeradresultsattach.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrcpoeradresultsattach.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrcpoeradresultsattach.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrcpoeradresultsattach.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrcpoeradresultsattach.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrcpoeradresultsattach.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrcpoeradresultsattach.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrcpoeradresultsattach.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrcpoeradresultsattach.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrcpoeradresultsattach.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrcpoeradresultsattach.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrcpoeradresultsattach.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrcpoeradresultsattach.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrcpoeradresultsattach.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrcpoeradresultsattach.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrcpoeradresultsattach.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrcpoeradresultsattach.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrcpoeradresultsattach.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrcpoeradresultsattach.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Attach Image to Radiology Order</p></div>
<div class="GeneralPageContent">
<span style="color:red">This information applied to EHR Stage 2.</span><p>See <a href="https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/2019ProgramRequirementsMedicaid.html">2019 Program Requirements - Medicaid</a> for current EHR/PI information.</p>
<p>Imaging results (x-rays) can be attached to CPOE radiology orders.</p>
<div class="Note">Note: Attaching imaging results to radiology orders was a menu measure for EHR stage 2, but is no longer a reporting requirement for EHR Modified Stage 2.</div>
<br/><h2>Waiting for images</h2>
<p>If a radiology order is awaiting results, you can flag the order. On the Lab Order Edit window, click <b>Manage Images</b>, then check <b>Waiting for Images</b>. This affects the denominator of the EHR imaging results measure. See <a href="ehrcpoelab.html">EHR Medical Lab Order ( CPOE )</a>.</p>
<h2>Attach images</h2>
<ol>
<li>The image must first exist in the patient's <a href="images.html">Imaging Module</a>. Images can be imported or scanned.</li>
<li>On the EHR Dashboard for Stage 2, click <b>Manage Images</b>.</li>
<li>Double click the original radiology order.</li>
<li>Click <b>Manage Images</b>. <br/><img src="images/ehrcpoeRadImage.gif" width="518" height="437" class="ImageInParagraph"/><p>All image files in the Images module will list under Available Images. Click on a row to preview an image.</p>
</li>
<li>Click the <b>Attached column</b> of an image row to attach the image to this order. An X will show.</li>
<li>If <b>Waiting for Images</b> is checked, click to clear it.</li>
<li>Click OK, then Save.</li>
</ol>
<br/><p>The numerator of the Lab Images menu measure should increase by 1.</p>
</div>
</div>
</body>
</html>```
