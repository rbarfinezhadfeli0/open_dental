# File: ./www.opendental.com/manual243/subscribersmove.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Move Subscribers</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('subscribersmove','+misc','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/subscribersmove.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/subscribersmove.html" >v24.2</option><option value="https://www.opendental.com/manual241/subscribersmove.html" >v24.1</option><option value="https://www.opendental.com/manual233/subscribersmove.html" >v23.3</option><option value="https://www.opendental.com/manual232/subscribersmove.html" >v23.2</option><option value="https://www.opendental.com/manual231/subscribersmove.html" >v23.1</option><option value="https://www.opendental.com/manual224/subscribersmove.html" >v22.4</option><option value="https://www.opendental.com/manual223/subscribersmove.html" >v22.3</option><option value="https://www.opendental.com/manual222/subscribersmove.html" >v22.2</option><option value="https://www.opendental.com/manual221/subscribersmove.html" >v22.1</option><option value="https://www.opendental.com/manual214/subscribersmove.html" >v21.4</option><option value="https://www.opendental.com/manual213/subscribersmove.html" >v21.3</option><option value="https://www.opendental.com/manual212/subscribersmove.html" >v21.2</option><option value="https://www.opendental.com/manual211/subscribersmove.html" >v21.1</option><option value="https://www.opendental.com/manual205/subscribersmove.html" >v20.5</option><option value="https://www.opendental.com/manual204/subscribersmove.html" >v20.4</option><option value="https://www.opendental.com/manual203/subscribersmove.html" >v20.3</option><option value="https://www.opendental.com/manual202/subscribersmove.html" >v20.2</option><option value="https://www.opendental.com/manual201/subscribersmove.html" >v20.1</option><option value="https://www.opendental.com/manual194/subscribersmove.html" >v19.4</option><option value="https://www.opendental.com/manual193/subscribersmove.html" >v19.3</option><option value="https://www.opendental.com/manual192/subscribersmove.html" >v19.2</option><option value="https://www.opendental.com/manual191/subscribersmove.html" >v19.1</option><option value="https://www.opendental.com/manual184/subscribersmove.html" >v18.4</option><option value="https://www.opendental.com/manual183/subscribersmove.html" >v18.3</option><option value="https://www.opendental.com/manual182/subscribersmove.html" >v18.2</option><option value="https://www.opendental.com/manual181/subscribersmove.html" >v18.1</option><option value="https://www.opendental.com/manual174/subscribersmove.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Move Subscribers</p></div>
<div class="GeneralPageContent">
<p>The Move Subscribers tool moves subscribers from one insurance plan to another.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Misc Tools, Move Subscribers.</p>
<img src="images/subscribersMove.gif" width="506" height="221"/><p>This tool can be useful at the beginning of a benefit year when insurance plans may change for a group of subscribers. Users must have the <i>Insurance Plan Change Subscriber</i> permission.</p>
<p><div class="Note">Note: <ul>
<li>Moving subscribers is irreversible. Make a full backup before running this tool.</li>
<li>This tool may take several minutes to run. Consider running it after business hours or when network usage is typically low.</li>
<li>Insurance estimates for treatment planned procedures will be recalculated based on the new plan.</li>
</ul>
</div>
</p>
<p><b>Ins plan to move subscribers to</b>: Click [...] to select the insurance plan that subscribers will be moved to.</p>
<p><b>Ins plan to move subscribers from</b>: Click [...] to select the old insurance plan. Patient-specific benefits, subscriber notes, benefit notes, or effective dates in this plan will not be retained in the move. This plan will be marked hidden after the move.</p>
<p><b>View</b>: View a selected plan's details.</p>
<p>Select the <i>move to</i> and <i>move from</i> plans, then click OK to move subscribers. The following prompt will display. </p>
<img src="images/subscribersMoveMsg.gif" width="412" height="224"/><p>Click OK to continue. It may take several minutes for the tool to run. When the move is complete, the following prompt will display.</p>
<img src="images/subscribersMoved.gif" width="202" height="133"/></div>
</div>
</body>
</html>```
