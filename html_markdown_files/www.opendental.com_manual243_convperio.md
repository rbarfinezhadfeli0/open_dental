# File: ./www.opendental.com/manual243/convperio.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Conversions: Perio</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('convperio','usingodconversion','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/convperio.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/convperio.html" >v24.2</option><option value="https://www.opendental.com/manual241/convperio.html" >v24.1</option><option value="https://www.opendental.com/manual233/convperio.html" >v23.3</option><option value="https://www.opendental.com/manual232/convperio.html" >v23.2</option><option value="https://www.opendental.com/manual231/convperio.html" >v23.1</option><option value="https://www.opendental.com/manual224/convperio.html" >v22.4</option><option value="https://www.opendental.com/manual223/convperio.html" >v22.3</option><option value="https://www.opendental.com/manual222/convperio.html" >v22.2</option><option value="https://www.opendental.com/manual221/convperio.html" >v22.1</option><option value="https://www.opendental.com/manual214/convperio.html" >v21.4</option><option value="https://www.opendental.com/manual213/convperio.html" >v21.3</option><option value="https://www.opendental.com/manual212/convperio.html" >v21.2</option><option value="https://www.opendental.com/manual211/convperio.html" >v21.1</option><option value="https://www.opendental.com/manual205/convperio.html" >v20.5</option><option value="https://www.opendental.com/manual204/convperio.html" >v20.4</option><option value="https://www.opendental.com/manual203/convperio.html" >v20.3</option><option value="https://www.opendental.com/manual202/convperio.html" >v20.2</option><option value="https://www.opendental.com/manual201/convperio.html" >v20.1</option><option value="https://www.opendental.com/manual194/convperio.html" >v19.4</option><option value="https://www.opendental.com/manual193/convperio.html" >v19.3</option><option value="https://www.opendental.com/manual192/convperio.html" >v19.2</option><option value="https://www.opendental.com/manual191/convperio.html" >v19.1</option><option value="https://www.opendental.com/manual184/convperio.html" >v18.4</option><option value="https://www.opendental.com/manual183/convperio.html" >v18.3</option><option value="https://www.opendental.com/manual182/convperio.html" >v18.2</option><option value="https://www.opendental.com/manual181/convperio.html" >v18.1</option><option value="https://www.opendental.com/manual174/convperio.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Conversions: Perio</p></div>
<div class="GeneralPageContent">
<p>See <a href="usingodconversion.html">Use Converted Database</a>.</p>
<p>During a final <a href="../site/conversions.html">Conversion</a>, we default every patient to a 6 month Prophy recall type. Before we deliver the final conversion, we run a script that changes all patients with completed procedures for D4910, D4341, and D4342 in the last three years to a four-month Perio recall.</p>
<p>To view a report of which patients were converted to Perio to go <a href="queryfavorites.html"> User Query Favorites</a>. Double-click the <i>Conv - Perio Patients</i> query</p>
<img src="images/convPerioQuery.png" width="886" height="304"/><p>Change an individual patient's recall in the <a href="family.html">Family Module</a>, <a href="recall.html">Recall</a> area.</p>
<p>To change default intervals, see <a href="recalltypes.html">Recall Types</a>. Be cautious when editing recall types as changes affect the entire recall system.</p>
<p>Resource: <a href="../resources/conversions/Post%20Conversion%20Checklist.pdf">Post Conversion Checklist (PDF)</a></p>
</div>
</div>
</body>
</html>```
