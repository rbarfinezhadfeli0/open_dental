# File: ./www.opendental.com/manual243/definitionschartgraphiccolors.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Chart Graphic Colors</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionschartgraphiccolors','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/definitionschartgraphiccolors.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/definitionschartgraphiccolors.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionschartgraphiccolors.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionschartgraphiccolors.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionschartgraphiccolors.html" >v23.2</option><option value="https://www.opendental.com/manual231/definitionschartgraphiccolors.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionschartgraphiccolors.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionschartgraphiccolors.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionschartgraphiccolors.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionschartgraphiccolors.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionschartgraphiccolors.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionschartgraphiccolors.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionschartgraphiccolors.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionschartgraphiccolors.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionschartgraphiccolors.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionschartgraphiccolors.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionschartgraphiccolors.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionschartgraphiccolors.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionschartgraphiccolors.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionschartgraphiccolors.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionschartgraphiccolors.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionschartgraphiccolors.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionschartgraphiccolors.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionschartgraphiccolors.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionschartgraphiccolors.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionschartgraphiccolors.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionschartgraphiccolors.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionschartgraphiccolors.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Chart Graphic Colors</p></div>
<div class="GeneralPageContent">
<p>Edit the colors used in the graphical tooth chart.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Chart Graphic Colors.</p>
<img src="images/definitionsChartGraphicColors.png" width="713" height="496"/><p>The Chart Graphic Colors definition determines the colors used on the <a href="graphicaltoothchart.html">Graphical Tooth Chart</a>.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Treatment Planned</b>, <b>Complete</b>, <b>Existing Current Prov</b>, <b>Existing Other Prov</b>, <b>Referred Out</b>: Graphic colors for procedures charted with these statuses. Colors selected for these statuses (and light) also show as default choices on the <a href="chartdrawing.html">Draw Tab</a>.</li>
<li><b>Treatment Planned (light)</b>, <b>Complete (light)</b>, <b>Existing Current Prov (light)</b>, <b>Existing Other Prov (light)</b>, <b>Referred Out (light)</b>: Graphic colors for procedures charted with these statuses and with a procedure paint type, light (see <a href="procedurecodenew.html">Add Procedure Code</a>).</li>
<li><b>Main Background</b>: Background color of the tooth chart.</li>
<li><b>Text</b>: Color of the tooth number text.</li>
<li><b>Highlighted Text</b>: Color of the tooth number text when tooth is selected.</li>
<li><b>Highlighted Background</b>: Background color of the tooth number when the tooth is selected.</li>
<li><b>Background on TPs</b>: Background color of the tooth chart on signed and printed <a href="treatmentplan.html">Treatment Plans</a>.</li>
<li><b>Text on TPs</b>: Color of the tooth number text on signed and printed treatment plans.</li>
<li><b>Condition</b>: Graphic color for procedures when charted as a condition.</li>
<li><b>Condition (light)</b>: Graphic color for procedures when charted as a condition and with a procedure paint type, light.</li>
</ul>
<p>To edit a definition color double-click an item to open the Edit Definition window. Click the colored block to select a <a href="colorselection.html">Color</a> then Save. The item name cannot be changed or hidden.</p>
<p>If the graphic color is changed for a procedure status, consider also changing the procedure text color in the progress notes to match. See <a href="definitionsprognotecolors.html">Definitions: Prog Note Colors</a>.</p>
</div>
</div>
</body>
</html>```
