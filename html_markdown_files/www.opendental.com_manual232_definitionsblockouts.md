# File: ./www.opendental.com/manual232/definitionsblockouts.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Blockout Types</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionsblockouts','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/definitionsblockouts.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/definitionsblockouts.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionsblockouts.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionsblockouts.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionsblockouts.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/definitionsblockouts.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionsblockouts.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionsblockouts.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionsblockouts.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionsblockouts.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionsblockouts.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionsblockouts.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionsblockouts.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionsblockouts.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionsblockouts.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionsblockouts.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionsblockouts.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionsblockouts.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionsblockouts.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionsblockouts.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionsblockouts.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionsblockouts.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionsblockouts.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionsblockouts.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionsblockouts.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionsblockouts.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionsblockouts.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionsblockouts.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Blockout Types</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Blockout Types.</p>
<img src="images/definitionsBlockoutTypes.png" width="816" height="527"/><p>The Blockout Types definition determines the available <a href="blockouts.html">Blockouts</a> to use in the <a href="appointments.html">Appointments Module</a> and the blockout background color.</p>
<div class="Note">Note: Requires the <i>Setup</i>, security permission (see <a href="permissions.html">Permissions</a>).</div>
<br/><br/><p>To determine how blockouts look, enable or disable the <i>Use solid blockouts instead of outlines on the appointment book</i> preference. To change the <a href="blockouts.html">Blockouts</a> text color, see <a href="definitionsappointmentcolors.html">Definitions: Appointment Colors</a>.</p>
<p>Double-click an existing item or click <b>Add</b> to create a new item. The Edit Definition window will open.<br/><img src="images/definitionEditBlockoutTypes.png" width="503" height="203" class="ImageInParagraph"/></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter the blockout name. This will show on the appointment schedule.</li>
<li><b>Usage</b>: (Optional) Set the usage. Usage selections are abbreviated in the Flags column of the definitions grid. <ul>
<li><b>Block appointments scheduling</b>: When checked, prevents appointments from being scheduled over this blockout type (NS flag).</li>
<li><b>Disable Cut/Copy/Paste</b>: When checked, disables the cut, copy, and paste functions for this blockout type (DC flag).</li>
</ul>
</li>
<li><b>Color</b>: Click the colored block to select a blockout <a href="colorselection.html">Color</a>.</li>
</ul>
<p>Click OK to save.</p>
</div>
</div>
</body>
</html>```
