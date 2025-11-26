# File: ./www.opendental.com/manual232/equipment.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Equipment</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('equipment','supplyinventory','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/equipment.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/equipment.html" >v24.2</option><option value="https://www.opendental.com/manual241/equipment.html" >v24.1</option><option value="https://www.opendental.com/manual233/equipment.html" >v23.3</option><option value="https://www.opendental.com/manual232/equipment.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/equipment.html" >v23.1</option><option value="https://www.opendental.com/manual224/equipment.html" >v22.4</option><option value="https://www.opendental.com/manual223/equipment.html" >v22.3</option><option value="https://www.opendental.com/manual222/equipment.html" >v22.2</option><option value="https://www.opendental.com/manual221/equipment.html" >v22.1</option><option value="https://www.opendental.com/manual214/equipment.html" >v21.4</option><option value="https://www.opendental.com/manual213/equipment.html" >v21.3</option><option value="https://www.opendental.com/manual212/equipment.html" >v21.2</option><option value="https://www.opendental.com/manual211/equipment.html" >v21.1</option><option value="https://www.opendental.com/manual205/equipment.html" >v20.5</option><option value="https://www.opendental.com/manual204/equipment.html" >v20.4</option><option value="https://www.opendental.com/manual203/equipment.html" >v20.3</option><option value="https://www.opendental.com/manual202/equipment.html" >v20.2</option><option value="https://www.opendental.com/manual201/equipment.html" >v20.1</option><option value="https://www.opendental.com/manual194/equipment.html" >v19.4</option><option value="https://www.opendental.com/manual193/equipment.html" >v19.3</option><option value="https://www.opendental.com/manual192/equipment.html" >v19.2</option><option value="https://www.opendental.com/manual191/equipment.html" >v19.1</option><option value="https://www.opendental.com/manual184/equipment.html" >v18.4</option><option value="https://www.opendental.com/manual183/equipment.html" >v18.3</option><option value="https://www.opendental.com/manual182/equipment.html" >v18.2</option><option value="https://www.opendental.com/manual181/equipment.html" >v18.1</option><option value="https://www.opendental.com/manual174/equipment.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Equipment</p></div>
<div class="GeneralPageContent">
<p>The purpose of this feature is to track equipment for payment of property taxes.</p>
<p>In the <a href="supplyinventory.html">Supply Inventory</a> window, click <b>Equipment</b>.</p>
<img src="images/equipment.gif" width="915" height="333"/><p><b>SN/Descript/Loc:</b> Filter the list by serial number, description, or location.</p>
<p><b>Date Range:</b> Filter the list by specific purchased and sold dates.</p>
<p><b>Purchased, Sold, All:</b> Filter the equipment view by selecting the radio button. When <i>All</i> is selected, items with a <i>DatePurchased</i> or <i>DateSold</i> in the selected date range display. </p>
<p><b>Refresh</b>: Click to update Equipment list after changing filters. </p>
<p>Click <b> Add</b> to add a new equipment item or double-click an existing item to edit.</p>
<img src="images/equipmentEdit.gif" width="601" height="429"/><p><b>Date Entry</b>: This date is system-generated when the equipment item is initially created. It cannot be edited.</p>
<p><b>Description</b>: Enter a description (e.g., item name) for the equipment.</p>
<p><b>Serial Number</b>: Automatically generated. It is recommended to physically label the equipment with the serial number for better tracking. Click <b>Generate</b> to assign a new serial number. The serial number field can also be cleared or replaced with a different serial number. Serial numbers cannot be duplicated.</p>
<p><b>Model Yr</b>: Enter the two-digit model year of the equipment (e.g., 22).</p>
<p><b>Date Purchased</b>: Enter the date the equipment was initially purchased.</p>
<p><b>Date Sold</b>: If or when equipment is sold to another party, enter the date it was sold.</p>
<p><b>Purchase Cost</b>: Enter the actual purchase cost of the equipment.</p>
<p><b>Estimated Market Value</b>: Enter the estimated value of the equipment.</p>
<p><b>Location</b>: Enter the location of the equipment in the office (e.g., OP-2).</p>
<p><b>Status</b>: Enter the status of the equipment order (e.g., ordered, pending delivery).</p>
</div>
</div>
</body>
</html>```
