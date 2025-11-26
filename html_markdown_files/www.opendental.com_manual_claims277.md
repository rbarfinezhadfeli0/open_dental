# File: ./www.opendental.com/manual/claims277.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Claim Ack 277</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claims277','claimsend','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/claims277.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/claims277.html" >v24.2</option><option value="https://www.opendental.com/manual241/claims277.html" >v24.1</option><option value="https://www.opendental.com/manual233/claims277.html" >v23.3</option><option value="https://www.opendental.com/manual232/claims277.html" >v23.2</option><option value="https://www.opendental.com/manual231/claims277.html" >v23.1</option><option value="https://www.opendental.com/manual224/claims277.html" >v22.4</option><option value="https://www.opendental.com/manual223/claims277.html" >v22.3</option><option value="https://www.opendental.com/manual222/claims277.html" >v22.2</option><option value="https://www.opendental.com/manual221/claims277.html" >v22.1</option><option value="https://www.opendental.com/manual214/claims277.html" >v21.4</option><option value="https://www.opendental.com/manual213/claims277.html" >v21.3</option><option value="https://www.opendental.com/manual212/claims277.html" >v21.2</option><option value="https://www.opendental.com/manual211/claims277.html" >v21.1</option><option value="https://www.opendental.com/manual205/claims277.html" >v20.5</option><option value="https://www.opendental.com/manual204/claims277.html" >v20.4</option><option value="https://www.opendental.com/manual203/claims277.html" >v20.3</option><option value="https://www.opendental.com/manual202/claims277.html" >v20.2</option><option value="https://www.opendental.com/manual201/claims277.html" >v20.1</option><option value="https://www.opendental.com/manual194/claims277.html" >v19.4</option><option value="https://www.opendental.com/manual193/claims277.html" >v19.3</option><option value="https://www.opendental.com/manual192/claims277.html" >v19.2</option><option value="https://www.opendental.com/manual191/claims277.html" >v19.1</option><option value="https://www.opendental.com/manual184/claims277.html" >v18.4</option><option value="https://www.opendental.com/manual183/claims277.html" >v18.3</option><option value="https://www.opendental.com/manual182/claims277.html" >v18.2</option><option value="https://www.opendental.com/manual181/claims277.html" >v18.1</option><option value="https://www.opendental.com/manual174/claims277.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Claim Ack 277</p></div>
<div class="GeneralPageContent">
<p>The 277 format for e-claim acknowledgment reports contains more detailed status information about the sent batch than a 997 or 999 format.</p>
<p>In <a href="claimsend.html">Send Claims</a>, under History, double-click a StatusNotify_277 row.</p>
<img src="images/etrans277.png" width="915" height="556"/><p>See <a href="clearinghouses.html">Clearinghouses</a> for more information on e-claims. </p>
<p class="MarginBottomZero">When a 277 is received: </p>
<ul class="MarginBottomGap">
<li>In the Insurance Claims History grid, the corresponding rows for the sent claims have an AckCode column set to <i>A</i> or <i>R</i>.</li>
<li>The 277 also shows as a separate row with a Type of<i> StatusNotify_277</i>. Double-click the row to open the Claim Status Response window.</li>
</ul>
<p>The only information from the above window that gets automatically processed/imported is the claim status column (<i>Accepted</i> or <i>Rejected</i>).</p>
</div>
</div>
</body>
</html>```
