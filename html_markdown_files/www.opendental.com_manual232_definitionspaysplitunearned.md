# File: ./www.opendental.com/manual232/definitionspaysplitunearned.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: PaySplit Unearned Types</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionspaysplitunearned','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/definitionspaysplitunearned.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/definitionspaysplitunearned.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionspaysplitunearned.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionspaysplitunearned.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionspaysplitunearned.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/definitionspaysplitunearned.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionspaysplitunearned.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionspaysplitunearned.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionspaysplitunearned.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionspaysplitunearned.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionspaysplitunearned.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionspaysplitunearned.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionspaysplitunearned.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionspaysplitunearned.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionspaysplitunearned.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionspaysplitunearned.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionspaysplitunearned.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionspaysplitunearned.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionspaysplitunearned.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionspaysplitunearned.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionspaysplitunearned.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionspaysplitunearned.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionspaysplitunearned.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionspaysplitunearned.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionspaysplitunearned.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionspaysplitunearned.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionspaysplitunearned.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionspaysplitunearned.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: PaySplit Unearned Types</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, PaySplit Unearned Types.</p>
<img src="images/definitionsPaySplitUnearned.PNG" width="816" height="526"/><p>The PaySplit Unearned Type definition determines the list of <a href="unearnedprepayment.html">Unearned</a> Type options available in the <a href="paysplit.html">Paysplit</a> window.</p>
<p>By default, the Prepayment unearned type is used when a payment is posted to an account with a credit or no balance and when the Prepay button is clicked in the payment window. To change the default type, see the <i>Default unearned type for unallocated paysplits</i> in Preferences.</p>
<p>Double-click an existing item or click <b>Add</b> to create a new item. The Edit Definition window will open.</p>
<img src="images/definitionEditPaySplitUnearned.PNG" width="433" height="253"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter the unearned type.</li>
<li><b>Do Not Show on Account</b>: Enter 'X' to hide this unearned type from the account ledger, statements, and most reports. This is primarily used when an unearned type is associated to a treatment planned procedure or a prepayment to a dynamic payment plan charge. If a patient has this unearned type, the <a href="hiddensplits.html">Hidden Splits</a> tab will show in the <a href="account.html">Account Module</a>. Change the default type for treatment planned procedures and dynamic payment plan prepayments in Preferences.</li>
</ul>
<p>Click OK to save.</p>
</div>
</div>
</body>
</html>```
