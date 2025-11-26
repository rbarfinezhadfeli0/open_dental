# File: ./www.opendental.com/manual232/inspaytypes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Insurance Payment Types</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('inspaytypes','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/inspaytypes.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/inspaytypes.html" >v24.2</option><option value="https://www.opendental.com/manual241/inspaytypes.html" >v24.1</option><option value="https://www.opendental.com/manual233/inspaytypes.html" >v23.3</option><option value="https://www.opendental.com/manual232/inspaytypes.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/inspaytypes.html" >v23.1</option><option value="https://www.opendental.com/manual224/inspaytypes.html" >v22.4</option><option value="https://www.opendental.com/manual223/inspaytypes.html" >v22.3</option><option value="https://www.opendental.com/manual222/inspaytypes.html" >v22.2</option><option value="https://www.opendental.com/manual221/inspaytypes.html" >v22.1</option><option value="https://www.opendental.com/manual214/inspaytypes.html" >v21.4</option><option value="https://www.opendental.com/manual213/inspaytypes.html" >v21.3</option><option value="https://www.opendental.com/manual212/inspaytypes.html" >v21.2</option><option value="https://www.opendental.com/manual211/inspaytypes.html" >v21.1</option><option value="https://www.opendental.com/manual205/inspaytypes.html" >v20.5</option><option value="https://www.opendental.com/manual204/inspaytypes.html" >v20.4</option><option value="https://www.opendental.com/manual203/inspaytypes.html" >v20.3</option><option value="https://www.opendental.com/manual202/inspaytypes.html" >v20.2</option><option value="https://www.opendental.com/manual201/inspaytypes.html" >v20.1</option><option value="https://www.opendental.com/manual194/inspaytypes.html" >v19.4</option><option value="https://www.opendental.com/manual193/inspaytypes.html" >v19.3</option><option value="https://www.opendental.com/manual192/inspaytypes.html" >v19.2</option><option value="https://www.opendental.com/manual191/inspaytypes.html" >v19.1</option><option value="https://www.opendental.com/manual184/inspaytypes.html" >v18.4</option><option value="https://www.opendental.com/manual183/inspaytypes.html" >v18.3</option><option value="https://www.opendental.com/manual182/inspaytypes.html" >v18.2</option><option value="https://www.opendental.com/manual181/inspaytypes.html" >v18.1</option><option value="https://www.opendental.com/manual174/inspaytypes.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Insurance Payment Types</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Insurance Payment Types.</p>
<img src="images/definitionsInsPaymentTypes.png" width="816" height="547"/><p>The Insurance Payment Types definition determines the payment type options available when <a href="claimpayfinalize.html">Finalizing Insurance Payments</a>.</p>
<p>Also set which payment types to exclude when creating a <a href="depositslip.html">Deposit Slip</a>. The <a href="reportdailypayments.html">Daily Payments Report</a> is grouped by insurance payment type and can optionally be filtered by type.</p>
<p>Double-click an existing item or click <b>Add</b> to create a new item. The Edit Definition window opens.</p>
<img src="images/definitionEditInsPaymentTypes.png" width="433" height="250"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter the payment type.</li>
<li><b>N=Not selected for deposit</b>: Enter N to exclude this type from deposit slips or leave blank to include this type.</li>
</ul>
<p>Click OK to save.</p>
<p>To remove an item from the Payment Type list, double-click the item and click <b>Delete</b>. If the item has been attached to an insurance payment it cannot be deleted. Alternatively, mark the item as<b> Hidden</b> if not in use.</p>
</div>
</div>
</body>
</html>```
