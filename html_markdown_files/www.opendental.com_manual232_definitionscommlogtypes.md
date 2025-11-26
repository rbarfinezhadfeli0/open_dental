# File: ./www.opendental.com/manual232/definitionscommlogtypes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Commlog Types</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionscommlogtypes','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/definitionscommlogtypes.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/definitionscommlogtypes.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionscommlogtypes.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionscommlogtypes.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionscommlogtypes.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/definitionscommlogtypes.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionscommlogtypes.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionscommlogtypes.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionscommlogtypes.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionscommlogtypes.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionscommlogtypes.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionscommlogtypes.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionscommlogtypes.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionscommlogtypes.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionscommlogtypes.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionscommlogtypes.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionscommlogtypes.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionscommlogtypes.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionscommlogtypes.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionscommlogtypes.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionscommlogtypes.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionscommlogtypes.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionscommlogtypes.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionscommlogtypes.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionscommlogtypes.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionscommlogtypes.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionscommlogtypes.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionscommlogtypes.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Commlog Types</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Commlog Types.</p>
<img src="images/definitionsCommlogTypes.png" width="816" height="527"/><p>The Commlog Types definition determines the options available in the <a href="commlog.html">Commlog</a> type list.</p>
<p>This also assigns the default commlog type for some processes that automatically create commlogs in this definition (e.g., recall, texting, etc.). See <a href="commlog.html">Commlog</a>, Automated Commlogs. eServices use the first commlog type in the list.</p>
<p>Double-click an existing item or click <b>Add</b> to create a new item. The Edit Definition window will open.</p>
<img src="images/definitionEditCommlogTypes.png" width="433" height="263"/><p>Editing existing commlog types will change the type on current commlog entries.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter the commlog type.</li>
<li><b>Usage</b>: (Optional) Set the default commlog type when a commlog is automatically generated. Only assign one default per type. If no default is set, the first type in the list will be used. <ul>
<li><b>APPT</b>: Enter APPT to set this as the default type when Comm is clicked on the <a href="aptedit.html">Edit Appointment</a> window. Commlogs with this type are highlighted yellow in the Communications Log - Appointment Scheduling grid.</li>
<li><b>FIN</b>: No longer used in the program.</li>
<li><b>RECALL</b>: Enter RECALL to set this as the default type when a recall status is selected from the Set Status dropdown or Comm is clicked on the <a href="recalllist.html">Recall List</a>.</li>
<li><b>MISC</b>: Enter MISC to set this as the default type when Commlog is clicked from the <a href="toolbar.html">Main Toolbar</a>.</li>
<li><b>TEXT</b>: Enter TEXT to set this as the default type when a <a href="textmessages.html">Text Message</a> is sent.</li>
<li><b>REACT</b>: Enter REACT to set this as the default type when using the <a href="recalllistreactivation.html">Reactivation List</a>.</li>
</ul>
</li>
<li><b>No Color</b>: Check to use no color. Commlog text displays in medium-gray. </li>
<li><b>Color</b>: Click to assign color to the text of the commlog.</li>
</ul>
<p>Click OK to save.</p>
<p>To hide a commlog type, check <b>Hidden</b>.</p>
</div>
</div>
</body>
</html>```
