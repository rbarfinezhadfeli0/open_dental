# File: ./www.opendental.com/manual232/graphicaltoothchart.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Graphical Tooth Chart</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('graphicaltoothchart','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/graphicaltoothchart.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/graphicaltoothchart.html" >v24.2</option><option value="https://www.opendental.com/manual241/graphicaltoothchart.html" >v24.1</option><option value="https://www.opendental.com/manual233/graphicaltoothchart.html" >v23.3</option><option value="https://www.opendental.com/manual232/graphicaltoothchart.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/graphicaltoothchart.html" >v23.1</option><option value="https://www.opendental.com/manual224/graphicaltoothchart.html" >v22.4</option><option value="https://www.opendental.com/manual223/graphicaltoothchart.html" >v22.3</option><option value="https://www.opendental.com/manual222/graphicaltoothchart.html" >v22.2</option><option value="https://www.opendental.com/manual221/graphicaltoothchart.html" >v22.1</option><option value="https://www.opendental.com/manual214/graphicaltoothchart.html" >v21.4</option><option value="https://www.opendental.com/manual213/graphicaltoothchart.html" >v21.3</option><option value="https://www.opendental.com/manual212/graphicaltoothchart.html" >v21.2</option><option value="https://www.opendental.com/manual211/graphicaltoothchart.html" >v21.1</option><option value="https://www.opendental.com/manual205/graphicaltoothchart.html" >v20.5</option><option value="https://www.opendental.com/manual204/graphicaltoothchart.html" >v20.4</option><option value="https://www.opendental.com/manual203/graphicaltoothchart.html" >v20.3</option><option value="https://www.opendental.com/manual202/graphicaltoothchart.html" >v20.2</option><option value="https://www.opendental.com/manual201/graphicaltoothchart.html" >v20.1</option><option value="https://www.opendental.com/manual194/graphicaltoothchart.html" >v19.4</option><option value="https://www.opendental.com/manual193/graphicaltoothchart.html" >v19.3</option><option value="https://www.opendental.com/manual192/graphicaltoothchart.html" >v19.2</option><option value="https://www.opendental.com/manual191/graphicaltoothchart.html" >v19.1</option><option value="https://www.opendental.com/manual184/graphicaltoothchart.html" >v18.4</option><option value="https://www.opendental.com/manual183/graphicaltoothchart.html" >v18.3</option><option value="https://www.opendental.com/manual182/graphicaltoothchart.html" >v18.2</option><option value="https://www.opendental.com/manual181/graphicaltoothchart.html" >v18.1</option><option value="https://www.opendental.com/manual174/graphicaltoothchart.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Graphical Tooth Chart</p></div>
<div class="GeneralPageContent">
<p>The Graphical Tooth Chart visually displays the patient's teeth, as well as treatment that has been performed, is planned, or has been referred out.</p>
<p>In the <a href="chart.html">Chart Module</a>, at the upper left, is the graphical tooth chart. </p>
<img src="images/graphicalToothChart.png" width="414" height="341"/><p>To select a tooth, click the tooth or tooth number. Click a selected tooth again to deselect. Click and drag to quickly select multiple teeth.</p>
<p>Drag the slider bar under the chart to show historical changes to the patient's tooth chart. Procedures that were originally in the Treatment Planned procedure status appear on the chart as of the <a href="procedureedit.html">Procedure</a><i> Date TP</i>. Other statuses appear as of the <i>Date Entry</i>. </p>
<p class="MarginBottomZero"><b>Tooth Numbering</b>: Tooth numbering displayed on the Graphical Tooth Chart is determined by the <i>Tooth Nomenclature</i> set in <a href="preferences.html">Preferences</a>.Open Dental supports 4 different tooth numbering systems: </p>
<ul class="MarginBottomGap">
<li>Universal (Common in the United States, 1-32): Valid tooth numbers are 1-32 and A-T. For supernumerary teeth, valid values are 51-82 and AS-TS. Permanent supernumerary tooth numbers add 50 to the tooth number (tooth 1 = 51). Primary supernumerary tooth numbers add an S (tooth A = AS). Procedures for supernumerary teeth do not show on the Graphical Tooth Chart, but they do get billed to insurance. Also see <a href="supernumeraryteeth.html">Supernumerary Teeth</a>.</li>
<li>FDI Notation (International, 11-48), 51-85 for primary teeth: For foreign users, supernumerary teeth can be entered as 99.</li>
<li>Haderup (Danish)</li>
<li>Palmer (Ortho)</li>
</ul>
<p><div class="Note">Note: If viewing the Graphical Tooth Chart from the <a href="ortho.html">Ortho</a> tab and <i>Tooth chart ortho mode</i> is enabled, tooth numbering is displayed in Palmer, regardless of <i>Tooth Nomenclature</i> preference. </div>
</p>
<p class="MarginBottomZero"><b>Tooth Graphics</b>: </p>
<ul class="MarginBottomGap">
<li>Users can select teeth from the Graphical Tooth Chart and chart procedures from the <a href="entertreatment.html">Enter Treatment</a> tab or mark teeth missing/not missing from the <a href="missingteeth.html">Missing/Primary Teeth</a> tab.</li>
<li>A procedure code's paint type and treatment area determines the graphic used in the tooth chart. Some treatment areas show no graphic (e.g., mouth). See <a href="procedurecodeedit.html">Procedure Code</a>.</li>
<li>Colors are dependent on:  <ul>
<li>Procedure status (treatment planned, complete, existing other provider, existing current provider, referred, condition).</li>
<li>The colors set in <a href="definitionschartgraphiccolors.html">Definitions: Chart Graphic Colors</a>.</li>
<li>The current logged-on user. See <a href="usersettings.html">User Settings</a>.</li>
</ul>
</li>
<li>If Chart Graphic Colors are changed, we recommend changing <a href="definitionsprognotecolors.html">Definitions: Prog Note Colors</a> to match. By convention, procedures that use metal are a dark color, while those that use ceramic, porcelain, or plastic are a light color. In rare situations, a procedure code may have a color override, in which case color does not indicate status.</li>
<li>Procedure statuses shown on the Graphical Tooth Chart depend on the settings enabled for selected <a href="showtabchart.html">Chart View</a>.</li>
<li>Supernumerary teeth are not displayed on the Graphical Tooth Chart, so procedures charted to supernumerary teeth are not shown. Users can draw freehand draw supernumerary teeth on the Chart using the <a href="chartdrawing.html">Draw Tab</a>.</li>
<li>Teeth can be moved on the tooth chart using the <a href="movements.html">Movements</a> tab.</li>
</ul>
<h2>Tooth Chart Dropdown</h2>
<p>In the Chart Module, in the toolbar, is a Tooth Chart dropdown.</p>
<img src="images/toothChartDropdown.png" width="861" height="129"/><p><b>Show Big</b>: Open the <a href="chartbig.html">Big Graphical Tooth Chart</a>.</p>
<p><b>Save the Tooth Chart</b>: Save a copy of the Graphical Tooth Chart in the <a href="images.html">Imaging Module</a> to the <a href="definitionsimagecat.html">Image Category</a> marked for Graphical Tooth Charts.</p>
<h2>Troubleshooting</h2>
<p>If treatment is displaying on the Graphical Tooth Chart that is no longer relevant or no longer in place (e.g., removed crown) check <i>Hide Graphics</i> in <a href="procedureedit.html">Procedure Info</a>. Procedures are no longer displayed on the Graphical Tooth Chart.</p>
</div>
</div>
</body>
</html>```
