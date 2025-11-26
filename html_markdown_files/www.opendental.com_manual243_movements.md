# File: ./www.opendental.com/manual243/movements.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Tooth Movements</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('movements','+chartTabs','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/movements.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/movements.html" >v24.2</option><option value="https://www.opendental.com/manual241/movements.html" >v24.1</option><option value="https://www.opendental.com/manual233/movements.html" >v23.3</option><option value="https://www.opendental.com/manual232/movements.html" >v23.2</option><option value="https://www.opendental.com/manual231/movements.html" >v23.1</option><option value="https://www.opendental.com/manual224/movements.html" >v22.4</option><option value="https://www.opendental.com/manual223/movements.html" >v22.3</option><option value="https://www.opendental.com/manual222/movements.html" >v22.2</option><option value="https://www.opendental.com/manual221/movements.html" >v22.1</option><option value="https://www.opendental.com/manual214/movements.html" >v21.4</option><option value="https://www.opendental.com/manual213/movements.html" >v21.3</option><option value="https://www.opendental.com/manual212/movements.html" >v21.2</option><option value="https://www.opendental.com/manual211/movements.html" >v21.1</option><option value="https://www.opendental.com/manual205/movements.html" >v20.5</option><option value="https://www.opendental.com/manual204/movements.html" >v20.4</option><option value="https://www.opendental.com/manual203/movements.html" >v20.3</option><option value="https://www.opendental.com/manual202/movements.html" >v20.2</option><option value="https://www.opendental.com/manual201/movements.html" >v20.1</option><option value="https://www.opendental.com/manual194/movements.html" >v19.4</option><option value="https://www.opendental.com/manual193/movements.html" >v19.3</option><option value="https://www.opendental.com/manual192/movements.html" >v19.2</option><option value="https://www.opendental.com/manual191/movements.html" >v19.1</option><option value="https://www.opendental.com/manual184/movements.html" >v18.4</option><option value="https://www.opendental.com/manual183/movements.html" >v18.3</option><option value="https://www.opendental.com/manual182/movements.html" >v18.2</option><option value="https://www.opendental.com/manual181/movements.html" >v18.1</option><option value="https://www.opendental.com/manual174/movements.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Tooth Movements</p></div>
<div class="GeneralPageContent">
<p>On the graphical tooth chart, shift, rotate, and tip teeth to document a patient's current dentition. </p>
<p>In the <a href="chart.html">Chart Module</a>, click the Movements tab.</p>
<img src="images/movements.png" width="915" height="301"/><p>Click on one or more teeth in the tooth chart. Click and drag to quickly highlight multiple teeth.</p>
<p class="MarginBottomZero">Select or enter the desired movement in each box. If the value is typed in, click Apply. If one of the six boxes is blank, then not all selected teeth have the same value. </p>
<ul class="MarginBottomGap">
<li><b>Shift millimeters:</b> Click -/+ to decrease or increase the Mesial, Occlusal, or Labial value by 2.To indicate a tooth is present but not erupted, enter a negative occlusal value until the tooth is grayed out (at least -12).</li>
<li><b>Rotate/Tip degrees:</b><ul>
<li>Rotate: Click -/+ to decrease the value by 20.</li>
<li>Mesial/Labial Tip: Enter a value, or click -/+ to decrease the value by 10.</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero">Clear Movements: Click to clear the movements on teeth. This sets the teeth back to 0 for all values.  </p>
<ul class="MarginBottomGap">
<li><b>Selected Teeth</b>: Only clear the movements of selected teeth. </li>
<li><b>All Teeth</b>: Clear the movements on all teeth. </li>
</ul>
<p><b>Apply</b>: Click to apply the changes that have been manually typed in.</p>
<p>When done, click on the teeth to deselect them. It does not happen automatically.</p>
</div>
</div>
</body>
</html>```
