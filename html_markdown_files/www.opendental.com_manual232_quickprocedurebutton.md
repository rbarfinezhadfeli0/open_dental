# File: ./www.opendental.com/manual232/quickprocedurebutton.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Quick Procedure Button</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('quickprocedurebutton','procedurebuttons','+chart','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/quickprocedurebutton.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/quickprocedurebutton.html" >v24.2</option><option value="https://www.opendental.com/manual241/quickprocedurebutton.html" >v24.1</option><option value="https://www.opendental.com/manual233/quickprocedurebutton.html" >v23.3</option><option value="https://www.opendental.com/manual232/quickprocedurebutton.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/quickprocedurebutton.html" >v23.1</option><option value="https://www.opendental.com/manual224/quickprocedurebutton.html" >v22.4</option><option value="https://www.opendental.com/manual223/quickprocedurebutton.html" >v22.3</option><option value="https://www.opendental.com/manual222/quickprocedurebutton.html" >v22.2</option><option value="https://www.opendental.com/manual221/quickprocedurebutton.html" >v22.1</option><option value="https://www.opendental.com/manual214/quickprocedurebutton.html" >v21.4</option><option value="https://www.opendental.com/manual213/quickprocedurebutton.html" >v21.3</option><option value="https://www.opendental.com/manual212/quickprocedurebutton.html" >v21.2</option><option value="https://www.opendental.com/manual211/quickprocedurebutton.html" >v21.1</option><option value="https://www.opendental.com/manual205/quickprocedurebutton.html" >v20.5</option><option value="https://www.opendental.com/manual204/quickprocedurebutton.html" >v20.4</option><option value="https://www.opendental.com/manual203/quickprocedurebutton.html" >v20.3</option><option value="https://www.opendental.com/manual202/quickprocedurebutton.html" >v20.2</option><option value="https://www.opendental.com/manual201/quickprocedurebutton.html" >v20.1</option><option value="https://www.opendental.com/manual194/quickprocedurebutton.html" >v19.4</option><option value="https://www.opendental.com/manual193/quickprocedurebutton.html" >v19.3</option><option value="https://www.opendental.com/manual192/quickprocedurebutton.html" >v19.2</option><option value="https://www.opendental.com/manual191/quickprocedurebutton.html" >v19.1</option><option value="https://www.opendental.com/manual184/quickprocedurebutton.html" >v18.4</option><option value="https://www.opendental.com/manual183/quickprocedurebutton.html" >v18.3</option><option value="https://www.opendental.com/manual182/quickprocedurebutton.html" >v18.2</option><option value="https://www.opendental.com/manual181/quickprocedurebutton.html" >v18.1</option><option value="https://www.opendental.com/manual174/quickprocedurebutton.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Quick Procedure Button</p></div>
<div class="GeneralPageContent">
<p>Create Quick Procedure Buttons to quickly chart a procedure attached to tooth surfaces.</p>
<p>In <a href="procedurebuttons.html">Procedure Buttons</a>, double-click a quick button.</p>
<img src="images/procButtonQBEdit.gif" width="451" height="206"/><p>Alternatively, to add a new button, double-click on the white space of an availble row (see screenshot below).</p>
<p class="MarginBottomZero">Enter the button information. </p>
<ul class="MarginBottomGap">
<li><b>Display Text</b>: The button text.</li>
<li><b>Procedure Code</b>: Enter the procedure code that will be applied when this button is clicked. Click [...] to select from the <a href="procedurecodes.html">Procedure Codes</a>. Only one code can be associated per quick button and it must exist in the prior to setting up the quick button.</li>
<li><b>Surfaces</b>: Enter the surfaces that will be applied when the button is clicked (B/F, V, M, O/I, D/L).</li>
<li><b>Display as Label</b>: Check this box to display the text as a label instead of a button. This text will not be click-able in the Chart Module.</li>
</ul>
<p>Click <b>OK</b> to save. Click <b>Delete </b>the remove the button entirely.</p>
<p>In the Procedure Buttons window, when the Quick Buttons category is selected, the following will display.</p>
<img src="images/procButtonQuick.png" width="239" height="263"/><p class="MarginBottomZero">Hints:  </p>
<ul class="MarginBottomGap">
<li>Layout: New buttons are always placed to the right of the last button in the row. To add a space between buttons, create a blank button with no text, code, or surfaces, and check <b>Display as Label</b>.</li>
<li>Surfaces: Any text can be entered for the surface, but Open Dental will validate the surface before applying to the procedure. For example, if a surface of MOPDL is entered, Open Dental will validate it to MODL. Validation will occur left to right and exclude any non-valid surfaces.</li>
</ul>
</div>
</div>
</body>
</html>```
