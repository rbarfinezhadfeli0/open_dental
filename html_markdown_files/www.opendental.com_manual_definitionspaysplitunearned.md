# File: ./www.opendental.com/manual/definitionspaysplitunearned.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: PaySplit Unearned Types</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/definitionspaysplitunearned.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/definitionspaysplitunearned.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionspaysplitunearned.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionspaysplitunearned.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionspaysplitunearned.html" >v23.2</option><option value="https://www.opendental.com/manual231/definitionspaysplitunearned.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionspaysplitunearned.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionspaysplitunearned.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionspaysplitunearned.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionspaysplitunearned.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionspaysplitunearned.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionspaysplitunearned.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionspaysplitunearned.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionspaysplitunearned.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionspaysplitunearned.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionspaysplitunearned.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionspaysplitunearned.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionspaysplitunearned.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionspaysplitunearned.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionspaysplitunearned.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionspaysplitunearned.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionspaysplitunearned.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionspaysplitunearned.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionspaysplitunearned.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionspaysplitunearned.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionspaysplitunearned.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionspaysplitunearned.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionspaysplitunearned.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: PaySplit Unearned Types</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, PaySplit Unearned Types.</p>
<img src="images/definitionsPaySplitUnearned.PNG" width="713" height="386"/><p>The PaySplit Unearned Type definition determines the list of <a href="unearnedprepayment.html">Unearned</a> Type options available in the <a href="paysplit.html">Paysplit</a> window.</p>
<p>By default, the Prepayment unearned type is used when a payment is posted to an account with a credit or no balance and when the Prepay button is clicked in the payment window. To change the default type, see the <i>Default unearned type for unallocated paysplits</i> in Preferences.</p>
<p>Double-click an existing item or click <b>Add</b> to create a new item. The Edit Definition window opens.</p>
<img src="images/definitionEditPaySplitUnearned.PNG" width="425" height="209"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter a description for the unearned type.</li>
<li><b>Do Not Show on Account</b>: Enter 'X' to hide this unearned type from the account grid, statements, and most reports. <ul>
<li>Primarily used when an unearned type is associated to a treatment planned procedure or a prepayment to a <a href="paymentplandynamic.html">Payment Plan</a> charge.</li>
<li>If a patient has this unearned type, the <a href="hiddensplits.html">Hidden Splits</a> tab is available in the <a href="account.html">Account Module</a>. </li>
<li></li>
</ul>
</li>
</ul>
<p>Click <b>Save</b> to keep changes.</p>
<p>Set the default <i>Payment plan uneared type</i> and <i>Defaul unearned type for unallocated paysplits </i>in Preferences. Set the <i>Default treatment planned procedure unearned type</i> in <a href="allocationssetup.html">Allocations Setup</a>.</p>
</div>
</div>
</body>
</html>```
