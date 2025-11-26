# File: ./www.opendental.com/manual243/counties.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Counties</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('counties','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/counties.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/counties.html" >v24.2</option><option value="https://www.opendental.com/manual241/counties.html" >v24.1</option><option value="https://www.opendental.com/manual233/counties.html" >v23.3</option><option value="https://www.opendental.com/manual232/counties.html" >v23.2</option><option value="https://www.opendental.com/manual231/counties.html" >v23.1</option><option value="https://www.opendental.com/manual224/counties.html" >v22.4</option><option value="https://www.opendental.com/manual223/counties.html" >v22.3</option><option value="https://www.opendental.com/manual222/counties.html" >v22.2</option><option value="https://www.opendental.com/manual221/counties.html" >v22.1</option><option value="https://www.opendental.com/manual214/counties.html" >v21.4</option><option value="https://www.opendental.com/manual213/counties.html" >v21.3</option><option value="https://www.opendental.com/manual212/counties.html" >v21.2</option><option value="https://www.opendental.com/manual211/counties.html" >v21.1</option><option value="https://www.opendental.com/manual205/counties.html" >v20.5</option><option value="https://www.opendental.com/manual204/counties.html" >v20.4</option><option value="https://www.opendental.com/manual203/counties.html" >v20.3</option><option value="https://www.opendental.com/manual202/counties.html" >v20.2</option><option value="https://www.opendental.com/manual201/counties.html" >v20.1</option><option value="https://www.opendental.com/manual194/counties.html" >v19.4</option><option value="https://www.opendental.com/manual193/counties.html" >v19.3</option><option value="https://www.opendental.com/manual192/counties.html" >v19.2</option><option value="https://www.opendental.com/manual191/counties.html" >v19.1</option><option value="https://www.opendental.com/manual184/counties.html" >v18.4</option><option value="https://www.opendental.com/manual183/counties.html" >v18.3</option><option value="https://www.opendental.com/manual182/counties.html" >v18.2</option><option value="https://www.opendental.com/manual181/counties.html" >v18.1</option><option value="https://www.opendental.com/manual174/counties.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Counties</p></div>
<div class="GeneralPageContent">
<p>Counties are used to track data in Public Health.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Lists, Counties.</p>
<img src="images/counties.png" width="466" height="381"/><p>The Counties list is only available when <a href="publichealth.html">Public Health</a> is enabled in <a href="showfeatures.html">Show Features</a>.</p>
<p><b>Add</b>: Click to add a new county. </p>
<p><b>Remove</b>: Highlight a county, then click to remove it. Counties can only be removed when not in use with a patient.</p>
<p>Click <b>Add</b> to create a new county, or double-click an existing county to edit.</p>
<img src="images/countyEdit.png" width="488" height="232"/><p><b>County Name</b>: Enter the name of the county. This name appears in a dropdown when matching text is entered in the County field on the <a href="patientedit.html">Edit Patient Information</a>. If the county name is later changed, it changes it for all patients using it.</p>
<p><b>County Code</b>: (optional) Enter additional information about the county.</p>
</div>
</div>
</body>
</html>```
