# File: ./www.opendental.com/manual232/ehrcqmcurrentmeds.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Attest Medications Documented</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrcqmcurrentmeds','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/ehrcqmcurrentmeds.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/ehrcqmcurrentmeds.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrcqmcurrentmeds.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrcqmcurrentmeds.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrcqmcurrentmeds.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/ehrcqmcurrentmeds.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrcqmcurrentmeds.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrcqmcurrentmeds.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrcqmcurrentmeds.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrcqmcurrentmeds.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrcqmcurrentmeds.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrcqmcurrentmeds.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrcqmcurrentmeds.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrcqmcurrentmeds.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrcqmcurrentmeds.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrcqmcurrentmeds.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrcqmcurrentmeds.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrcqmcurrentmeds.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrcqmcurrentmeds.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrcqmcurrentmeds.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrcqmcurrentmeds.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrcqmcurrentmeds.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrcqmcurrentmeds.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrcqmcurrentmeds.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrcqmcurrentmeds.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrcqmcurrentmeds.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrcqmcurrentmeds.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrcqmcurrentmeds.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Attest Medications Documented</p></div>
<div class="GeneralPageContent">
<p>See <a href="ehrdashboard1.html">EHR Dashboard</a>.</p>
<p>For <a href="ehrcqmdef.html">Clinical Quality Measure</a> #68, Document Current Meds, a provider must verify during a patient encounter that the patient's Medication List is current to the best of his/her knowledge and ability.</p>
<p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video playlist: <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynCmkPdhlP5DZKz61iZJrenKi">EHR Webinars</a>.</p>
<ol>
<li>In the <a href="chart.html">Chart Module</a>, double click on the medical information in the Patient Info area.</li>
<li>Click the <a href="medical.html">Medical Info</a> tab. <br/><img src="images/medical.gif" width="812" height="525" class="ImageInParagraph"/></li>
<li>Check a radio button under Current Meds Documented. <ul>
<li>If Yes, this patient encounter will count in the numerator for this measure, thus increasing the percentage.</li>
<li>If No then OK is clicked, you will be prompted to enter a reason for <a href="ehrnotperformed.html">EHR CQMs Not Performed</a>. If a qualifying reason is entered, this encounter will be excluded from both the end denominator and numerator and not affect the percentage.</li>
</ul>
</li>
<li>Click OK to save information and close the window.</li>
</ol>
</div>
</div>
</body>
</html>```
