# File: ./www.opendental.com/manual/definitionsrecallunschedstatus.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Recall / Unsched Status</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionsrecallunschedstatus','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/definitionsrecallunschedstatus.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/definitionsrecallunschedstatus.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionsrecallunschedstatus.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionsrecallunschedstatus.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionsrecallunschedstatus.html" >v23.2</option><option value="https://www.opendental.com/manual231/definitionsrecallunschedstatus.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionsrecallunschedstatus.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionsrecallunschedstatus.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionsrecallunschedstatus.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionsrecallunschedstatus.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionsrecallunschedstatus.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionsrecallunschedstatus.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionsrecallunschedstatus.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionsrecallunschedstatus.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionsrecallunschedstatus.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionsrecallunschedstatus.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionsrecallunschedstatus.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionsrecallunschedstatus.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionsrecallunschedstatus.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionsrecallunschedstatus.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionsrecallunschedstatus.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionsrecallunschedstatus.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionsrecallunschedstatus.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionsrecallunschedstatus.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionsrecallunschedstatus.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionsrecallunschedstatus.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionsrecallunschedstatus.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionsrecallunschedstatus.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Recall / Unsched Status</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Recall/Unsched Status.</p>
<img src="images/definitionsRecalUnschedStatus.png" width="713" height="447"/><p>Recall/Unsched Status definitions determine the Set Status/Unscheduled Status options available in the <a href="recalllist.html">Recall</a> and <a href="unscheduled.html">Unscheduled Lists</a>.</p>
<p>When a status is selected from the Set Status dropdown menu in the Recall List, a <a href="commlog.html">Commlog</a> is created with the status name. In the Unscheduled List, selecting a status from the Unscheduled Status dropdown in the <a href="aptedit.html">Edit Appointment</a> window changes the UnschedStatus column.</p>
<p>Double-click an existing item to edit or click <b>Add</b> to create a new item. The following Edit Definition window opens.</p>
<img src="images/definitionEditRecallUnschStat.png" width="425" height="208"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter the status description.</li>
<li><b>Abbreviation</b>: Enter an abbreviation to correspond with the status. This displays in some areas instead of the full name. Must be 7 characters or less.</li>
</ul>
</div>
</div>
</body>
</html>```
