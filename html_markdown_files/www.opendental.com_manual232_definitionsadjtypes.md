# File: ./www.opendental.com/manual232/definitionsadjtypes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Adj Types</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionsadjtypes','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/definitionsadjtypes.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/definitionsadjtypes.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionsadjtypes.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionsadjtypes.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionsadjtypes.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/definitionsadjtypes.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionsadjtypes.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionsadjtypes.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionsadjtypes.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionsadjtypes.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionsadjtypes.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionsadjtypes.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionsadjtypes.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionsadjtypes.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionsadjtypes.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionsadjtypes.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionsadjtypes.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionsadjtypes.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionsadjtypes.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionsadjtypes.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionsadjtypes.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionsadjtypes.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionsadjtypes.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionsadjtypes.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionsadjtypes.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionsadjtypes.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionsadjtypes.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionsadjtypes.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Adj Types</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Adj Types.</p>
<img src="images/definitionsAdjTypes.png" width="816" height="524"/><p>The Adj Types definition determines the list of <a href="adjustments.html">Adjustment</a> options available in the Account Module and for various preferences.</p>
<p>Double-click an existing item to edit or click <b>Add</b> to create a new item. The Edit Definition window will open.<br/><img src="images/definitionEditAdjType.png" width="433" height="223" class="ImageInParagraph"/></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter the adjustment name. The name will appear on the patient accounts and statements when used.</li>
<li><b>+, -, or dp</b>: Set the behavior type of the adjustment. Once the adjustment type is created, this value cannot be changed. <ul>
<li>Enter <b>+</b> to create a positive adjustment that increases the patient balance. The adjustment will be listed under <i>Additions</i> in the <a href="adjustments.html">Adjustment</a> Edit window.</li>
<li>Enter <b>-</b> to create a negative adjustment that decreases the patient balance. The adjustment will be listed under <i>Subtractions</i> in the Edit Adjustment window.</li>
<li>Enter <b>dp</b> to create an adjustment for <a href="discountplans.html">Discount Plans</a>.</li>
</ul>
</li>
</ul>
<p>Click OK to save. Check <b>Hidden</b> to hide the definition.</p>
</div>
</div>
</body>
</html>```
