# File: ./www.opendental.com/manual243/rxnorms.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - RxNorms</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('rxnorms','ehrsetupwindow','+chart','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/rxnorms.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/rxnorms.html" >v24.2</option><option value="https://www.opendental.com/manual241/rxnorms.html" >v24.1</option><option value="https://www.opendental.com/manual233/rxnorms.html" >v23.3</option><option value="https://www.opendental.com/manual232/rxnorms.html" >v23.2</option><option value="https://www.opendental.com/manual231/rxnorms.html" >v23.1</option><option value="https://www.opendental.com/manual224/rxnorms.html" >v22.4</option><option value="https://www.opendental.com/manual223/rxnorms.html" >v22.3</option><option value="https://www.opendental.com/manual222/rxnorms.html" >v22.2</option><option value="https://www.opendental.com/manual221/rxnorms.html" >v22.1</option><option value="https://www.opendental.com/manual214/rxnorms.html" >v21.4</option><option value="https://www.opendental.com/manual213/rxnorms.html" >v21.3</option><option value="https://www.opendental.com/manual212/rxnorms.html" >v21.2</option><option value="https://www.opendental.com/manual211/rxnorms.html" >v21.1</option><option value="https://www.opendental.com/manual205/rxnorms.html" >v20.5</option><option value="https://www.opendental.com/manual204/rxnorms.html" >v20.4</option><option value="https://www.opendental.com/manual203/rxnorms.html" >v20.3</option><option value="https://www.opendental.com/manual202/rxnorms.html" >v20.2</option><option value="https://www.opendental.com/manual201/rxnorms.html" >v20.1</option><option value="https://www.opendental.com/manual194/rxnorms.html" >v19.4</option><option value="https://www.opendental.com/manual193/rxnorms.html" >v19.3</option><option value="https://www.opendental.com/manual192/rxnorms.html" >v19.2</option><option value="https://www.opendental.com/manual191/rxnorms.html" >v19.1</option><option value="https://www.opendental.com/manual184/rxnorms.html" >v18.4</option><option value="https://www.opendental.com/manual183/rxnorms.html" >v18.3</option><option value="https://www.opendental.com/manual182/rxnorms.html" >v18.2</option><option value="https://www.opendental.com/manual181/rxnorms.html" >v18.1</option><option value="https://www.opendental.com/manual174/rxnorms.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>RxNorms</p></div>
<div class="GeneralPageContent">
<p>RxNorm is a normalized naming system for generic and branded drugs. </p>
<p>In the <a href="ehrsetupwindow.html">EHR Setup Window</a>, click <b>RxNorms</b>.</p>
<img src="images/rxnorm.gif" width="703" height="352"/><p>Alternatively, RxNorms may be assigned to <a href="medicationmaster.html">Medications</a> using a pick list <b>[...]</b>.</p>
<p>Drug names include active ingredients, strength, and form. All medications in the master list must have an RxNorm assigned for medication reconciliation, clinical decision support interventions, and Open Dental's drug interaction alerts to work correctly. This will also ensure a patient's medications show on clinical documents (e.g., <a href="ehrccd.html">Continuity of Care Document (CCD)</a>).</p>
<p>To import RxNorms see <a href="codesystemimport.html">Importing Code Systems</a>.</p>
<p class="MarginBottomZero"><b>Code or Description</b>: Enter the code or description.  </p>
<ul class="MarginBottomGap">
<li><b>Similar</b>: Click to return all results that closely match. </li>
<li><b>Exact</b>: Click to only return results that exactly match all entered text.</li>
</ul>
<p><b>Ignore Numbers</b>: Check to only search letters found in descriptions and ignore any numbered measurements.</p>
<p><b>None</b>: Clear the RxNorm drug selected on the previous screen.</p>
</div>
</div>
</body>
</html>```
