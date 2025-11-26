# File: ./www.opendental.com/manual243/ehrsetupedresources.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Setup Education Resources and Triggers</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrsetupedresources','ehrsetupwindow','+chart','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrsetupedresources.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrsetupedresources.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrsetupedresources.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrsetupedresources.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrsetupedresources.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrsetupedresources.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrsetupedresources.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrsetupedresources.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrsetupedresources.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrsetupedresources.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrsetupedresources.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrsetupedresources.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrsetupedresources.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrsetupedresources.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrsetupedresources.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrsetupedresources.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrsetupedresources.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrsetupedresources.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrsetupedresources.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrsetupedresources.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrsetupedresources.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrsetupedresources.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrsetupedresources.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrsetupedresources.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrsetupedresources.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrsetupedresources.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrsetupedresources.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrsetupedresources.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Setup Education Resources and Triggers</p></div>
<div class="GeneralPageContent">
<p>Education resources are triggered for a patient based on problems, medications, lab results, or tobacco use status. When a patient meets a defined criteria, the resource can be generated, viewed, and printed. See <a href="ehredresourcesprovide.html">EHR Educational Resources</a>.</p>
<ol>
<li>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Chart, <a href="ehrsetupwindow.html">EHR</a>, then click <b>Educational Resources</b>. <br/><img src="images/ehrEdResourcesSetup.gif" width="740" height="185" class="ImageInParagraph"/><p>All existing education resources will list, along with the criteria that triggers it.</p>
</li>
<li>Click Add, or double click an existing resource to edit. <br/><img src="images/ehrEdResourcesEdit.gif" width="639" height="421" class="ImageInParagraph"/></li>
<li>Define the condition that must be met to show this resource for a patient.  <ul>
<li><b>Problem</b>: Click [...] to select a problem from the Problem Master List. The associated ICD-9 and SNOMED CT codes will also show.</li>
<li><b>Medication</b>: Click [...] to select a medication from the Medication Master List.</li>
<li><b>Tobacco Use Assessment</b>: Click [...] to select a SNOMED CT code that matches a tobacco use status entered on the Tobacco Use window.</li>
<li><b>Lab Results</b>: Enter the ID, Test Name and Value.</li>
<li><b>Resource URL</b>: Enter the path used to access the educational resource. It can be a full URL path (<b>http://www.example.com</b>) or a full document path (<b>C:\resources\resources.doc</b>).</li>
</ul>
<p>In the example above, if a patient's has 'bad breath' in their Problem List, the resource and link will list on the Education Resources window.</p>
</li>
<li>Click OK to save.</li>
</ol>
<br/><p>To create more than one reference to the same resource, add separate resources, each with a different condition, and point them to the same URL. For example, reference the same brochure on analgesics when a patient is prescribed ibuprofen, aspirin, or acetaminophen/(paracetamol).</p>
</div>
</div>
</body>
</html>```
