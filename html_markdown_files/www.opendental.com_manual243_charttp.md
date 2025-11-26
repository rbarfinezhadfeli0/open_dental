# File: ./www.opendental.com/manual243/charttp.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Treatment Plan in Chart</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('charttp','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/charttp.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/charttp.html" >v24.2</option><option value="https://www.opendental.com/manual241/charttp.html" >v24.1</option><option value="https://www.opendental.com/manual233/charttp.html" >v23.3</option><option value="https://www.opendental.com/manual232/charttp.html" >v23.2</option><option value="https://www.opendental.com/manual231/charttp.html" >v23.1</option><option value="https://www.opendental.com/manual224/charttp.html" >v22.4</option><option value="https://www.opendental.com/manual223/charttp.html" >v22.3</option><option value="https://www.opendental.com/manual222/charttp.html" >v22.2</option><option value="https://www.opendental.com/manual221/charttp.html" >v22.1</option><option value="https://www.opendental.com/manual214/charttp.html" >v21.4</option><option value="https://www.opendental.com/manual213/charttp.html" >v21.3</option><option value="https://www.opendental.com/manual212/charttp.html" >v21.2</option><option value="https://www.opendental.com/manual211/charttp.html" >v21.1</option><option value="https://www.opendental.com/manual205/charttp.html" >v20.5</option><option value="https://www.opendental.com/manual204/charttp.html" >v20.4</option><option value="https://www.opendental.com/manual203/charttp.html" >v20.3</option><option value="https://www.opendental.com/manual202/charttp.html" >v20.2</option><option value="https://www.opendental.com/manual201/charttp.html" >v20.1</option><option value="https://www.opendental.com/manual194/charttp.html" >v19.4</option><option value="https://www.opendental.com/manual193/charttp.html" >v19.3</option><option value="https://www.opendental.com/manual192/charttp.html" >v19.2</option><option value="https://www.opendental.com/manual191/charttp.html" >v19.1</option><option value="https://www.opendental.com/manual184/charttp.html" >v18.4</option><option value="https://www.opendental.com/manual183/charttp.html" >v18.3</option><option value="https://www.opendental.com/manual182/charttp.html" >v18.2</option><option value="https://www.opendental.com/manual181/charttp.html" >v18.1</option><option value="https://www.opendental.com/manual174/charttp.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Treatment Plan in Chart</p></div>
<div class="GeneralPageContent">
<p>Create treatment plans from the Chart Module using the Treatment Plans checkbox.</p>
<p>In the <a href="chart.html">Chart Module</a>, at the middle right, check the <b>Treatment Plans</b> box.</p>
<img src="images/chartTP.png" width="915" height="661"/><p>When checked, the Treatment Plans grid and Procedures grid display instead of Progress Notes. This view also allows users to create new treatment plans without leaving the Chart Module.</p>
<p>The Treatment Plans checkbox only displays when <i>Is TP View</i> is selected on the <a href="showtabchart.html">Show tab</a>.</p>
<p class="MarginBottomZero">Active and inactive treatment plans are listed in the Treatment Plans grid. Saved treatment plans are not listed.  </p>
<ul class="MarginBottomGap">
<li>When a specific treatment plan is selected, its procedures are shown on the <a href="graphicaltoothchart.html">Graphical Tooth Chart</a> and listed in the Procedures grid.</li>
<li>When all treatment plans are selected, all treatment planned procedures are shown on the Graphical Tooth Chart and listed in the Procedures grid.</li>
</ul>
<p>Creating active or inactive treatment plans or prioritizing treatment is done the same way it would in the <a href="treatmentplan.html">Treatment Plan Module</a>. See <a href="treatmentplanedit.html">Edit Treatment Plan</a> for details.</p>
</div>
</div>
</body>
</html>```
