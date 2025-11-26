# File: ./www.opendental.com/manual232/sheetsline.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sheet Line and Rectangle</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetsline','sheetsetup','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/sheetsline.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/sheetsline.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetsline.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetsline.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetsline.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/sheetsline.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetsline.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetsline.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetsline.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetsline.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetsline.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetsline.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetsline.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetsline.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetsline.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetsline.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetsline.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetsline.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetsline.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetsline.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetsline.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetsline.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetsline.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetsline.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetsline.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetsline.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetsline.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetsline.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sheet Line and Rectangle</p></div>
<div class="GeneralPageContent">
<p>Lines and rectangles are sheet field types that can be used to organize information on a sheet.</p>
<p>In <a href="sheetsetup.html">Edit Sheet Def</a>, click Line or Rectangle.</p>
<p>Fixed lines and rectangles are <a href="sheetsaddelements.html">Sheet Field Types</a> that can be added to a sheet background.</p>
<h2>Lines</h2>
<p>When editing a sheet, click <b>Line</b> or double-click a <i>Line</i> field from the Fields list.</p>
<img src="images/sheetLine.gif" width="461" height="238"/><p><b>X / Y Pos</b>: Enter the X and Y positions to place the line on the sheet.</p>
<p><b>Width / Height</b>: Enter the height and width of the line. Negative values are allowed. Entering a Height value will create a diagonal line.</p>
<p><b>Color</b>: Click to select a <a href="colorselection.html">Color</a>.</p>
<h2>Rectangles</h2>
<p>When editing a sheet, click <b>Rectangle</b>, double-click a <i>Rect</i> field from the Fields list, or double-click the rectangle from the sheet. </p>
<p>Rectangles are typically used to create checkboxes, however to mark the checkbox electronically, a <a href="sheetscheckbox.html">Checkbox or Radio Button</a> is needed. </p>
<img src="images/sheetRectangle.gif" width="404" height="269"/><p><b>X / Y Pos</b>: Enter the X and Y positions to place the rectangle on the sheet.</p>
<p><b>Width / Height</b>: Enter the width and height of the rectangle.</p>
<p><b>Color</b>: Click to select a color.</p>
</div>
</div>
</body>
</html>```
