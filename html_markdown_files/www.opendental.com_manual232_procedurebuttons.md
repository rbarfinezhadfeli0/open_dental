# File: ./www.opendental.com/manual232/procedurebuttons.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Procedure Buttons</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('procedurebuttons','+chart','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/procedurebuttons.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/procedurebuttons.html" >v24.2</option><option value="https://www.opendental.com/manual241/procedurebuttons.html" >v24.1</option><option value="https://www.opendental.com/manual233/procedurebuttons.html" >v23.3</option><option value="https://www.opendental.com/manual232/procedurebuttons.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/procedurebuttons.html" >v23.1</option><option value="https://www.opendental.com/manual224/procedurebuttons.html" >v22.4</option><option value="https://www.opendental.com/manual223/procedurebuttons.html" >v22.3</option><option value="https://www.opendental.com/manual222/procedurebuttons.html" >v22.2</option><option value="https://www.opendental.com/manual221/procedurebuttons.html" >v22.1</option><option value="https://www.opendental.com/manual214/procedurebuttons.html" >v21.4</option><option value="https://www.opendental.com/manual213/procedurebuttons.html" >v21.3</option><option value="https://www.opendental.com/manual212/procedurebuttons.html" >v21.2</option><option value="https://www.opendental.com/manual211/procedurebuttons.html" >v21.1</option><option value="https://www.opendental.com/manual205/procedurebuttons.html" >v20.5</option><option value="https://www.opendental.com/manual204/procedurebuttons.html" >v20.4</option><option value="https://www.opendental.com/manual203/procedurebuttons.html" >v20.3</option><option value="https://www.opendental.com/manual202/procedurebuttons.html" >v20.2</option><option value="https://www.opendental.com/manual201/procedurebuttons.html" >v20.1</option><option value="https://www.opendental.com/manual194/procedurebuttons.html" >v19.4</option><option value="https://www.opendental.com/manual193/procedurebuttons.html" >v19.3</option><option value="https://www.opendental.com/manual192/procedurebuttons.html" >v19.2</option><option value="https://www.opendental.com/manual191/procedurebuttons.html" >v19.1</option><option value="https://www.opendental.com/manual184/procedurebuttons.html" >v18.4</option><option value="https://www.opendental.com/manual183/procedurebuttons.html" >v18.3</option><option value="https://www.opendental.com/manual182/procedurebuttons.html" >v18.2</option><option value="https://www.opendental.com/manual181/procedurebuttons.html" >v18.1</option><option value="https://www.opendental.com/manual174/procedurebuttons.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Procedure Buttons</p></div>
<div class="GeneralPageContent">
<p>Procedure buttons allow users to quickly add commonly-used procedures to a patient's chart with a single click.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Chart, Procedure Buttons. </p>
<img src="images/procButtonQB.gif" width="632" height="416"/><p>Procedure buttons are located in the <a href="chart.html">Chart Module</a> on the <a href="entertreatment.html">Enter Treatment</a> tab. Users will usually simply select a tooth, then click a procedure button to chart the treatment.</p>
<p class="MarginBottomZero">There are two types of procedure buttons: </p>
<ul class="MarginBottomGap">
<li><a href="quickprocedurebutton.html">Quick Procedure Button</a>: Designed to quickly chart fillings and sealants on teeth. Each quick button can be associated with one procedure, and if applicable, to tooth surfaces.</li>
<li>Procedure Button: Can be associated with multiple <a href="procedurecodes.html">Procedure Codes</a> and <a href="autocode.html">Auto Codes</a>.</li>
</ul>
<p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://www.youtube.com/watch?v=QmAf8Ux0f-I">Procedure Buttons, Quick Buttons, and Auto Codes Webinar</a>.</p>
<p>When opening the window, the Quick Buttons category is selected (see screenshot above). When another category is selected, the window displays as shown below.</p>
<img src="images/procButtonOther.png" width="708" height="516"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Edit Categories</b>: Rename, reorder, or add new categories. See <a href="definitionsproccodecategories.html">Definitions: Proc Code Categories</a>.</li>
<li><b>Add</b>: Create a new procedure button. Opens the <a href="procedurebuttonedit.html">Procedure Button Edit</a> window.</li>
<li><b>Delete</b>: Delete the selected procedure button.</li>
<li><b>Up / Down</b>: Reorder buttons within a category.</li>
</ul>
</div>
</div>
</body>
</html>```
