# File: ./www.opendental.com/manual243/apilabturnarounds.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - API LabTurnarounds</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('apilabturnarounds','+needtoOrganize','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/apilabturnarounds.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/apilabturnarounds.html" >v24.2</option><option value="https://www.opendental.com/manual241/apilabturnarounds.html" >v24.1</option><option value="https://www.opendental.com/manual233/apilabturnarounds.html" >v23.3</option><option value="https://www.opendental.com/manual232/apilabturnarounds.html" >v23.2</option><option value="https://www.opendental.com/manual231/apilabturnarounds.html" >v23.1</option><option value="https://www.opendental.com/manual224/apilabturnarounds.html" >v22.4</option><option value="https://www.opendental.com/manual223/apilabturnarounds.html" >v22.3</option><option value="https://www.opendental.com/manual222/apilabturnarounds.html" >v22.2</option><option value="https://www.opendental.com/manual221/apilabturnarounds.html" >v22.1</option><option value="https://www.opendental.com/manual214/apilabturnarounds.html" >v21.4</option><option value="https://www.opendental.com/manual213/apilabturnarounds.html" >v21.3</option><option value="https://www.opendental.com/manual212/apilabturnarounds.html" >v21.2</option><option value="https://www.opendental.com/manual211/apilabturnarounds.html" >v21.1</option><option value="https://www.opendental.com/manual205/apilabturnarounds.html" >v20.5</option><option value="https://www.opendental.com/manual204/apilabturnarounds.html" >v20.4</option><option value="https://www.opendental.com/manual203/apilabturnarounds.html" >v20.3</option><option value="https://www.opendental.com/manual202/apilabturnarounds.html" >v20.2</option><option value="https://www.opendental.com/manual201/apilabturnarounds.html" >v20.1</option><option value="https://www.opendental.com/manual194/apilabturnarounds.html" >v19.4</option><option value="https://www.opendental.com/manual193/apilabturnarounds.html" >v19.3</option><option value="https://www.opendental.com/manual192/apilabturnarounds.html" >v19.2</option><option value="https://www.opendental.com/manual191/apilabturnarounds.html" >v19.1</option><option value="https://www.opendental.com/manual184/apilabturnarounds.html" >v18.4</option><option value="https://www.opendental.com/manual183/apilabturnarounds.html" >v18.3</option><option value="https://www.opendental.com/manual182/apilabturnarounds.html" >v18.2</option><option value="https://www.opendental.com/manual181/apilabturnarounds.html" >v18.1</option><option value="https://www.opendental.com/manual174/apilabturnarounds.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>API LabTurnarounds</p></div>
<div class="GeneralPageContent">
<p>See <a href="../site/apispecification.html">API Specification</a></p>
<p>See <a href="laboratories.html">Laboratories</a> for more information.</p>
<h2>LabTurnarounds GET (single)</h2>
<p>Version Added: 24.2.29</p>
<p>Gets a single labturnaround.</p>
<p><b>LabTurnaroundNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br/> GET /labturnarounds/23<br/></p>
<p><b>Example Response:</b><br/><span class="codeblock"> {<br/> "LabTurnaroundNum": 23,<br/> "LaboratoryNum": 7,<br/> "Description": "Implant",<br/> "DaysPublished": 3,<br/> "DaysActual": 4<br/> } </span></p>
<p>200 OK<br/> 404 NotFound (with explanation)<br/></p>
<h2>LabTurnarounds GET (multiple)</h2>
<p>Version Added: 24.2.29</p>
<p>Gets a list of labturnarounds.</p>
<p><b>LaboratoryNum: </b> Optional. FK to laboratory.LaboratoryNum.<br/></p>
<p><b>Example Requests:</b><br/> GET /labturnarounds<br/> GET /labturnarounds?LaboratoryNum=7<br/></p>
<p><b>Example Response:</b><br/><span class="codeblock"> [<br/> {<br/> "LabTurnaroundNum": 23,<br/> "LaboratoryNum": 7,<br/> "Description": "Implant",<br/> "DaysPublished": 3,<br/> "DaysActual": 4<br/> },<br/> {<br/> "LabTurnaroundNum": 24,<br/> "LaboratoryNum": 7,<br/> "Description": "Repair",<br/> "DaysPublished": 1,<br/> "DaysActual": 2<br/> },<br/> etc...<br/> ]<br/></span></p>
<p>200 OK<br/> 404 NotFound (with explanation)<br/></p>
</div>
</div>
</body>
</html>```
