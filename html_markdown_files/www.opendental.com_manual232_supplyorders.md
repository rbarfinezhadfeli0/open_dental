# File: ./www.opendental.com/manual232/supplyorders.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Supply Orders</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('supplyorders','supplyinventory','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/supplyorders.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/supplyorders.html" >v24.2</option><option value="https://www.opendental.com/manual241/supplyorders.html" >v24.1</option><option value="https://www.opendental.com/manual233/supplyorders.html" >v23.3</option><option value="https://www.opendental.com/manual232/supplyorders.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/supplyorders.html" >v23.1</option><option value="https://www.opendental.com/manual224/supplyorders.html" >v22.4</option><option value="https://www.opendental.com/manual223/supplyorders.html" >v22.3</option><option value="https://www.opendental.com/manual222/supplyorders.html" >v22.2</option><option value="https://www.opendental.com/manual221/supplyorders.html" >v22.1</option><option value="https://www.opendental.com/manual214/supplyorders.html" >v21.4</option><option value="https://www.opendental.com/manual213/supplyorders.html" >v21.3</option><option value="https://www.opendental.com/manual212/supplyorders.html" >v21.2</option><option value="https://www.opendental.com/manual211/supplyorders.html" >v21.1</option><option value="https://www.opendental.com/manual205/supplyorders.html" >v20.5</option><option value="https://www.opendental.com/manual204/supplyorders.html" >v20.4</option><option value="https://www.opendental.com/manual203/supplyorders.html" >v20.3</option><option value="https://www.opendental.com/manual202/supplyorders.html" >v20.2</option><option value="https://www.opendental.com/manual201/supplyorders.html" >v20.1</option><option value="https://www.opendental.com/manual194/supplyorders.html" >v19.4</option><option value="https://www.opendental.com/manual193/supplyorders.html" >v19.3</option><option value="https://www.opendental.com/manual192/supplyorders.html" >v19.2</option><option value="https://www.opendental.com/manual191/supplyorders.html" >v19.1</option><option value="https://www.opendental.com/manual184/supplyorders.html" >v18.4</option><option value="https://www.opendental.com/manual183/supplyorders.html" >v18.3</option><option value="https://www.opendental.com/manual182/supplyorders.html" >v18.2</option><option value="https://www.opendental.com/manual181/supplyorders.html" >v18.1</option><option value="https://www.opendental.com/manual174/supplyorders.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Supply Orders</p></div>
<div class="GeneralPageContent">
<p>The purpose of this feature is to track supply orders.</p>
<p>In the <a href="supplyinventory.html">Supply Inventory</a> window, click <b>Orders</b>.</p>
<img src="images/supplyOrders.png" width="771" height="412"/><p><b>New Order</b>: Select a Supplier from the dropdown, then click New Order to create a new pending order.</p>
<p><b>Show received</b>: Check to show received orders. </p>
<p><b>Supplier</b>: Use dropdown to filter the list by supplier, or to select the supplier for new orders.</p>
<p>The <b>Order History</b> grids lists pending and recent orders. Double-click an order to open Supply Order edit window.</p>
<p class="MarginBottomZero">The <b>Supplies on One Order</b> grid lists all the associated supplies for the highlighted order in Order History.  </p>
<ul class="MarginBottomGap">
<li>To edit a supply's quantity or price per unit, double-click on the supply item.</li>
<li>To edit an order's properties (date placed and note) double-click on the order. Alternatively, you can click in the Qty and/or Price/Unit cells to edit the amount. Changes made to prices here do not affect the main supply list.</li>
</ul>
<p><b>Add</b>: Click to add supplies to the selected order.</p>
<h2>Supply Order</h2>
<p>Double-click an order to open the Supply Order window. From here, track or update details about a specific recent or pending order.</p>
<img src="images/supplyOrderEdit.png" width="725" height="335"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Supplier</b>: Read only. This field cannot not be changed. When creating a new order, the supplier is chosen by whomever is selected in the Supplier dropdown on the Supply Orders window before New Order is clicked.</li>
<li><b>Date Placed</b>: Defaults to today's date on new order. Once a date is entered, the order is no longer considered pending.</li>
<li><b>Placed By</b>: For tracking purposes, a user can be selected from the Placed By dropdown. This will default to the currently logged-on user when the order is created, but will only save once a Date Placed has been entered. Unsent orders will always default to <i>None</i>. This is not a security field and can be edited at any time after order has been sent.</li>
<li><b>Date Received</b>: Enter date the order was received. Click <b>Today</b> to enter current date.</li>
<li><b>Note</b>: Enter any additional details about the order.</li>
</ul>
<h2>Add a New Order</h2>
<p>Click the <b>Supplier</b> dropdown and select a supplier. Click <b>New Order</b>. A new pending order will show in the <b>Order History</b> list, and it should be highlighted. Click <b>Add</b> and select the supply. Click <b>OK</b>, then repeat until all supplies are added and the order is complete. As you add supplies, the items will list in the Supplies on one Order grid.<br/><div class="Note">Note: Items manually added to an order will default to a quantity of one and the price from the main supply list. Edit as required.</div>
</p>
<p>Once all items have been added, double-click on the pending order in the Order History. Edit as required. The Total Amount automatically calculates based on price and quantity entered. Any shipping charges can also be recorded. Enter a note if desired.</p>
<p></p>
</div>
</div>
</body>
</html>```
