# File: ./www.opendental.com/manual/draw.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Draw</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('draw','images','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/draw.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/draw.html" >v24.2</option><option value="https://www.opendental.com/manual241/draw.html" >v24.1</option><option value="https://www.opendental.com/manual233/draw.html" >v23.3</option><option value="https://www.opendental.com/manual232/draw.html" >v23.2</option><option value="https://www.opendental.com/manual231/draw.html" >v23.1</option><option value="https://www.opendental.com/manual224/draw.html" >v22.4</option><option value="https://www.opendental.com/manual223/draw.html" >v22.3</option><option value="https://www.opendental.com/manual222/draw.html" >v22.2</option><option value="https://www.opendental.com/manual221/draw.html" >v22.1</option><option value="https://www.opendental.com/manual214/draw.html" >v21.4</option><option value="https://www.opendental.com/manual213/draw.html" >v21.3</option><option value="https://www.opendental.com/manual212/draw.html" >v21.2</option><option value="https://www.opendental.com/manual211/draw.html" >v21.1</option><option value="https://www.opendental.com/manual205/draw.html" >v20.5</option><option value="https://www.opendental.com/manual204/draw.html" >v20.4</option><option value="https://www.opendental.com/manual203/draw.html" >v20.3</option><option value="https://www.opendental.com/manual202/draw.html" >v20.2</option><option value="https://www.opendental.com/manual201/draw.html" >v20.1</option><option value="https://www.opendental.com/manual194/draw.html" >v19.4</option><option value="https://www.opendental.com/manual193/draw.html" >v19.3</option><option value="https://www.opendental.com/manual192/draw.html" >v19.2</option><option value="https://www.opendental.com/manual191/draw.html" >v19.1</option><option value="https://www.opendental.com/manual184/draw.html" >v18.4</option><option value="https://www.opendental.com/manual183/draw.html" >v18.3</option><option value="https://www.opendental.com/manual182/draw.html" >v18.2</option><option value="https://www.opendental.com/manual181/draw.html" >v18.1</option><option value="https://www.opendental.com/manual174/draw.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Draw</p></div>
<div class="GeneralPageContent">
<p>Use the Draw toolbar to edit images by drawing or adding text, lines, or measurements.</p>
<p>In the <a href="images.html">Imaging Module</a>, click <b>Draw</b>.</p>
<img src="images/imagingText.png" width="411" height="33"/><p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our <a href="https://youtu.be/BWQILKkAqds">X-Ray and Measurements Mounts</a> Webinar.</p>
<p>When Draw is selected, the above toolbar will display.</p>
<p class="MarginBottomZero"><b>Color</b>: Click to select the color applied to drawings and text.  </p>
<ul class="MarginBottomGap">
<li>Text, Line, and Polygon Color: The default color for new text, lines, or polygons. Click the colored box to edit the <a href="colorselection.html">Color</a>.</li>
<li> Text Background Color: The default color applied to the background of new text items. Click the colored box to change or check <i>Transparent</i> for text to have no background by default. </li>
</ul>
<img src="images/imagingTextColor.png" width="315" height="173"/><p><b>Text</b>: Enable the text tool. Click on the image to add text. The Edit Text window is opened. </p>
<img src="images/imagingTextEnter.png" width="443" height="373"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Text</b>: Enter the text to display on the image.</li>
<li><b>Location X/Y</b>: Displays the current X and Y position where the text is shown. These values can be edited manually or text can be moved once this window is closed by clicking and dragging text on the image.</li>
<li><b>Actual Size</b>: The actual size of the font when the image is at 100%. Click <b>Calculate Apparent</b> to view the size of the font as it appears when the image is zoomed in or out.</li>
<li><b>Apparent Size</b>: The size the font appears at the current zoom level. Click <b>Calculate Actual</b> to view the actual size of the font.</li>
<li><b>Text Color</b>: The current color of the text. Click the colored box to change.</li>
<li><b>Background Color</b>: The current color of the enclosing box (i.e., background) behind the text. </li>
<li><b>Transparent</b>: When checked, no background color is applied to the text.</li>
</ul>
<p><b>Pen</b>: Enable freehand drawing. Click on the image to draw.</p>
<p class="MarginBottomZero"><b>Line</b>: Enable line drawing. Click to draw a line on the image. When selected, additional options are displayed in the tool bar. </p>
<ul class="MarginBottomGap">
<img src="images/imagingLine.png" width="186" height="33"/><li><b>Edit Points</b>: Enable the ability to edit points on an existing line. Hover over a line until the + icon appears, then click and drag to move a single line point. Allows line to follow curves.</li>
<li><b>Measure</b>: Enable the tool to measure lines. Click on a line to measure it. The Edit Text window opens with the measurement entered in the text box. Click Save to add the measurement as text. Scale must already be set. See Calibrating Scale below.</li>
<li><b>Scale</b>: Click open the Image Scale to view or set a scale. See Calibrating Scale below for additional details. <ul>
<img src="images/imageScale.png" width="341" height="347"/><li><b>Optional Units</b>: Units that display on a measured line. Typically <i>mm</i>.</li>
<li><b>Known Length</b>: The known length of a line. This number is manually entered when calibrating the scale.</li>
<li><b>Pixels</b>: The number of pixels on a line. Automatically calculated when calibrating the scale.</li>
<li><b>Pixels per</b>: Label changes dependent on the Optional Units entered (e.g., mm). This number is populated after clicking <b>Calculate</b>. Determines how many pixels on the screen equals 1 unit of measurement (e.g., pixels per millimeter). </li>
<li><b>Decimal Places</b>: How many decimals a line should measure to.</li>
</ul>
</li>
</ul>
<p><b>Polygon</b>: Enable freeform shape drawing. Click the image to draw a filled shape.</p>
<p><b>Eraser</b>: Enable the eraser tool. Click a drawing, line, or text to remove from the image.</p>
<p><b>Change Color</b>: Apply the current color defaults to an object. Once the tool is selected, click a line, text, polygon, or pen drawing to change the color.</p>
<p><b>Close</b>: Hide the Draw toolbar.</p>
<h2>Calibrating Scale</h2>
<p>Calibrating a scale only needs to be done once as all imaging is taken with the same machine. Once calibrated, lines can be measured using the Measure tool.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Take an image with a known length. This can be done on a test patient.</li>
<li>Draw a line along the known length on the image.</li>
<li>Click Set Scale, then cancel out of the window.</li>
<li>Click on the line of the known length. The Image Scale window will open again with the Pixels pre-populated.</li>
<li>Enter the known length in the Image Scale window, then click Calculate.</li>
<li>The Pixels per mm field will populate. Take note of this number.</li>
<li>Enter the Pixels per mm number in two places: <ul>
<li>Set a <i>Default Measurement Scale</i> in <a href="preferences.html">Preferences</a>.</li>
<li>Set the Measurement Scale on each mount template (see <a href="mountdefinitions.html">Mount Definitions</a>). </li>
</ul>
</li>
</ol>
<p>When measuring a line on an image in a mount, the calculation is done automatically. </p>
<p>To measure a line on a single image, not within a mount, enter the scale manually.</p>
</div>
</div>
</body>
</html>```
