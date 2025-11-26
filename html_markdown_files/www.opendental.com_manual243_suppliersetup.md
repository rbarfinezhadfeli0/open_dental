# File: ./www.opendental.com/manual243/suppliersetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Suppliers</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('suppliersetup','supplyinventory','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/suppliersetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/suppliersetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/suppliersetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/suppliersetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/suppliersetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/suppliersetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/suppliersetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/suppliersetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/suppliersetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/suppliersetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/suppliersetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/suppliersetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/suppliersetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/suppliersetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/suppliersetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/suppliersetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/suppliersetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/suppliersetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/suppliersetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/suppliersetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/suppliersetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/suppliersetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/suppliersetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/suppliersetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/suppliersetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/suppliersetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/suppliersetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/suppliersetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Suppliers</p></div>
<div class="GeneralPageContent">
<p>Use Suppliers to track where your practice orders supplies for use with Supply Orders.</p>
<p>In the <a href="supplyinventory.html">Supply Inventory</a> window, click <b>Suppliers</b>.</p>
<img src="images/supplierlist.gif" width="915" height="268"/><p>Suppliers and <a href="definitionssupplycats.html">Supply Categories</a> must be setup before users can add supplies to the <a href="supplies.html">Supplies</a> list or create <a href="supplyorders.html">Orders</a>.</p>
<p>The Suppliers grid, lists all Suppliers the office has already added and their information. </p>
<p>Click <b>Add</b> to create a new Supplier. Double-click on a row to edit an existing Supplier.</p>
<img src="images/supplierEdit.gif" width="688" height="384"/><p class="MarginBottomZero">Enter the supplier's information: </p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Supplier's business name. This is the only required field.</li>
<li><b>Phone</b>: Supplier's phone number.</li>
<li><b>Customer Id</b>: The office or practice's customer ID assigned by the supplier. Usually differs from an online username.</li>
<li><b>Website</b>: Supplier's website address.</li>
<li><b>User Name</b>: Office or practice's username for the supplier's website. Not required.</li>
<li><b>Password</b>: Office or practice's password for the supplier's website. Not required.</li>
<li><b>Note</b>: Additional information about this supplier can be noted in this area (e.g., hours of operation, what kind of supplies are purchased here, etc).</li>
</ul>
<p>Click <b>OK</b> to save. </p>
<p>Click <b>Delete</b> to remove an existing Supplier. Only Suppliers not attached to existing Supply Orders can be deleted.</p>
</div>
</div>
</body>
</html>```
