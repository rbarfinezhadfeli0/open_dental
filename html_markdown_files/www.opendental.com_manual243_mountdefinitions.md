# File: ./www.opendental.com/manual243/mountdefinitions.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Mount Definitions</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mountdefinitions','+images','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/mountdefinitions.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/mountdefinitions.html" >v24.2</option><option value="https://www.opendental.com/manual241/mountdefinitions.html" >v24.1</option><option value="https://www.opendental.com/manual233/mountdefinitions.html" >v23.3</option><option value="https://www.opendental.com/manual232/mountdefinitions.html" >v23.2</option><option value="https://www.opendental.com/manual231/mountdefinitions.html" >v23.1</option><option value="https://www.opendental.com/manual224/mountdefinitions.html" >v22.4</option><option value="https://www.opendental.com/manual223/mountdefinitions.html" >v22.3</option><option value="https://www.opendental.com/manual222/mountdefinitions.html" >v22.2</option><option value="https://www.opendental.com/manual221/mountdefinitions.html" >v22.1</option><option value="https://www.opendental.com/manual214/mountdefinitions.html" >v21.4</option><option value="https://www.opendental.com/manual213/mountdefinitions.html" >v21.3</option><option value="https://www.opendental.com/manual212/mountdefinitions.html" >v21.2</option><option value="https://www.opendental.com/manual211/mountdefinitions.html" >v21.1</option><option value="https://www.opendental.com/manual205/mountdefinitions.html" >v20.5</option><option value="https://www.opendental.com/manual204/mountdefinitions.html" >v20.4</option><option value="https://www.opendental.com/manual203/mountdefinitions.html" >v20.3</option><option value="https://www.opendental.com/manual202/mountdefinitions.html" >v20.2</option><option value="https://www.opendental.com/manual201/mountdefinitions.html" >v20.1</option><option value="https://www.opendental.com/manual194/mountdefinitions.html" >v19.4</option><option value="https://www.opendental.com/manual193/mountdefinitions.html" >v19.3</option><option value="https://www.opendental.com/manual192/mountdefinitions.html" >v19.2</option><option value="https://www.opendental.com/manual191/mountdefinitions.html" >v19.1</option><option value="https://www.opendental.com/manual184/mountdefinitions.html" >v18.4</option><option value="https://www.opendental.com/manual183/mountdefinitions.html" >v18.3</option><option value="https://www.opendental.com/manual182/mountdefinitions.html" >v18.2</option><option value="https://www.opendental.com/manual181/mountdefinitions.html" >v18.1</option><option value="https://www.opendental.com/manual174/mountdefinitions.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Mount Definitions</p></div>
<div class="GeneralPageContent">
<p>A mount is a collage of multiple images or radiographs that can be viewed together.</p>
<p>In the <a href="mainmenu.html">Main Menu</a> click Setup, Imaging, <b>Mounts</b>.</p>
<img src="images/mountDefs.png" width="390" height="255"/><p>Mount Definitions (Mount Defs) that are created here are templates. They are available in the top toolbar of the <a href="images.html">Imaging Module</a>. Once a user picks a Mount Def from that toolbar, a new Mount is created for that patient with a layout based on the Mount Def template.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Click to create a new Mount Def.</li>
<li><b>Up/Down</b>: Highlight a mount, then click to re-order it in the list.</li>
<li>Double-click an existing Mount Def to edit.</li>
</ul>
<h2>Generate Mount</h2>
<p>If adding a new Mount Def, the user starts by generating a layout from one of the built-in templates. These serve most purposes or can be a starting point for a similar Mount Def.</p>
<img src="images/mountGenerate.png" width="590" height="315"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Type</b>: Select the type of mount from the list. Each type is a different layout. Find the layout that most closely resembles the desired layout. </li>
<li><b>Item Width/Height</b>: The width and height of one image.</li>
<li><b>Photo Grid: </b> Use when <i>Photo Grid</i> is selected as the type. <ul>
<li><b>Columns/Rows</b>: Enter the number of columns and rows desired for the photo grid.</li>
</ul>
</li>
<li><b>Generate</b>: Click to create the Mount Def and make edits.</li>
</ul>
<h2>Edit Mount Def</h2>
<p>Double-click an existing mount from the Mount Definitions list or click <b>Generate</b> from the Generate Mount window to open Edit Mount Def.</p>
<img src="images/mountFMX.png" width="915" height="536"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Description</b>: Enter a name for the Mount Def.</li>
<li><b>Default Cat</b>: Set the default Image Category to place the mount in. </li>
<li><b>Width/Height</b>: The overall size of the the Mount Def.</li>
<li><b>Background Color</b>: The background color used when generating the mount in the Imaging Module.</li>
<li><b>Text and Line Color</b>: The default color used for text and lines on this mount.</li>
<li><b>Text Background Color</b>: The default background color for text on this mount.</li>
<li><b>Text BackG Transparent</b>: Check to disable text background color. Text background is transparent.</li>
<li><b>Flip on Acquire</b>: Check to automatically flip images horizontally when acquired using this mount.</li>
<li><b>Use Adj Mode After Series</b>: Check to automatically enable adjust mode in the Imaging Module, instead of pan mode, after acquiring using this mount.</li>
<li><b>Measurement Scale</b>: The scale when measuring lines on this mount. See Calibrating Scale on <a href="draw.html">Draw</a> for details. <ul>
<li><b>Optional Units (mm)</b>: Enter the optional units to display on measurements. Typically mm.</li>
<li><b>Scale, pixels per unit</b>: Enter the scale for this mount. All images using this mount have the same scale as all images taken with the same machine.</li>
<li><b>Decimal Places</b>: The decimal places to count to when measuring lines on this mount.</li>
</ul>
</li>
<li><b>Generate</b>: Generate a new mount to replace the one currently selected. Erases the current layout.</li>
<li><b>Add Item</b>: Click to add a new image item.</li>
<li><b>Item Order</b>: Determine the item order. <ul>
<li><b>Up/Down</b>: Highlight an item, then click the arrows to re-order the layout.</li>
<li><b>Reorder All</b>: Click to set the order number to 0 for all items, then click each item in the desired order. Once complete, click <b>Stop</b> to save changes.</li>
</ul>
</li>
</ul>
<p>Highlight an item, then click and drag to move it, or use the arrows on the keyboard. </p>
<p><b>Delete</b>: Remove this mount from the Mount Definitions list.</p>
<h2>Item Edit</h2>
<p class="MarginBottomZero">Double-click an item on the template to edit the size and information. <br/><img src="images/mountItemDef.png" width="594" height="482" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li><b>X/Y</b>: Enter the horizontal (X) and vertical (Y) positions on the template.</li>
<li><b>Width/Height</b>: Enter the size of the item. </li>
<li><b>Rotate degrees when Acquire</b>: The number of degrees to rotate the item when using the Acquire button in the Imaging Module.</li>
<li><b>Tooth Numbers</b>: The typical tooth numbers associated with this item. </li>
<li><b>Text to Show</b>: Enter text to display on the mount. Fields used for text cannot have images placed over them.</li>
<li><b>Add Field</b>: Enter a replacement field (e.g., Patient name, birthdate, etc.)<br/><img src="images/mountReplacementFields.png" width="789" height="339" class="ImageInParagraph"/></li>
<li><b>Font Size</b>: Font size for the text to display. Font size is in pixels, enter a large number to view.</li>
</ul>
</div>
</div>
</body>
</html>```
