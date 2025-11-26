# File: ./www.opendental.com/manual243/definitionsaccountquickadd.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Account Procs Quick Add</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionsaccountquickadd','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/definitionsaccountquickadd.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/definitionsaccountquickadd.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionsaccountquickadd.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionsaccountquickadd.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionsaccountquickadd.html" >v23.2</option><option value="https://www.opendental.com/manual231/definitionsaccountquickadd.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionsaccountquickadd.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionsaccountquickadd.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionsaccountquickadd.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionsaccountquickadd.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionsaccountquickadd.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionsaccountquickadd.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionsaccountquickadd.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionsaccountquickadd.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionsaccountquickadd.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionsaccountquickadd.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionsaccountquickadd.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionsaccountquickadd.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionsaccountquickadd.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionsaccountquickadd.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionsaccountquickadd.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionsaccountquickadd.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionsaccountquickadd.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionsaccountquickadd.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionsaccountquickadd.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionsaccountquickadd.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionsaccountquickadd.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionsaccountquickadd.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Account Procs Quick Add</p></div>
<div class="GeneralPageContent">
<p>Use Account Procs Quick Add definitions to customize the list available Quick Procs in the Account Module.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Account Procs Quick Add.</p>
<img src="images/definitionsAccountProcsQuickAdd.png" width="713" height="458"/><p>The <a href="quickprocs.html">Quick Procs</a> dropdown in the Account Module is empty by default. Add items in definitions to build the dropdown list as needed.</p>
<p>Double-click an existing item to edit or click <b>Add</b> to create a new item. The Edit Definition window opens.<br/><img src="images/definitionEditProcQuickAdd.png" width="425" height="202" class="ImageInParagraph"/></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Hidden</b>: Check to hide the item in the Quick Procs dropdown in the Account Module. The item is still available in Definitions. </li>
<li><b>Name</b>: Item description. This identifies the item in the Quick Procs dropdown. When procedures are added to the patient's account, <a href="procedurecodeedit.html">Procedure Code</a> descriptions are used.</li>
<li><b>Procedure Codes</b>: Enter the procedure code or group of codes associated with the item. To enter more than one code, separate each code with a comma and do not add spaces (e.g., D0140,D0220). This field is case-sensitive, so enter the code as it appears in the <a href="procedurecodes.html">Procedure Codes</a> list.</li>
</ul>
<p>Click <b>Save</b> to exit the window and keep changes.</p>
<p><b>Delete</b>: Permanently remove this item from Definitions and the Quick Procs dropdown. </p>
</div>
</div>
</body>
</html>```
