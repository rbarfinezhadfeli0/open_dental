# File: ./www.opendental.com/manual/alertcategories.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Alert Categories</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('alertcategories','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/alertcategories.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/alertcategories.html" >v24.2</option><option value="https://www.opendental.com/manual241/alertcategories.html" >v24.1</option><option value="https://www.opendental.com/manual233/alertcategories.html" >v23.3</option><option value="https://www.opendental.com/manual232/alertcategories.html" >v23.2</option><option value="https://www.opendental.com/manual231/alertcategories.html" >v23.1</option><option value="https://www.opendental.com/manual224/alertcategories.html" >v22.4</option><option value="https://www.opendental.com/manual223/alertcategories.html" >v22.3</option><option value="https://www.opendental.com/manual222/alertcategories.html" >v22.2</option><option value="https://www.opendental.com/manual221/alertcategories.html" >v22.1</option><option value="https://www.opendental.com/manual214/alertcategories.html" >v21.4</option><option value="https://www.opendental.com/manual213/alertcategories.html" >v21.3</option><option value="https://www.opendental.com/manual212/alertcategories.html" >v21.2</option><option value="https://www.opendental.com/manual211/alertcategories.html" >v21.1</option><option value="https://www.opendental.com/manual205/alertcategories.html" >v20.5</option><option value="https://www.opendental.com/manual204/alertcategories.html" >v20.4</option><option value="https://www.opendental.com/manual203/alertcategories.html" >v20.3</option><option value="https://www.opendental.com/manual202/alertcategories.html" >v20.2</option><option value="https://www.opendental.com/manual201/alertcategories.html" >v20.1</option><option value="https://www.opendental.com/manual194/alertcategories.html" >v19.4</option><option value="https://www.opendental.com/manual193/alertcategories.html" >v19.3</option><option value="https://www.opendental.com/manual192/alertcategories.html" >v19.2</option><option value="https://www.opendental.com/manual191/alertcategories.html" >v19.1</option><option value="https://www.opendental.com/manual184/alertcategories.html" >v18.4</option><option value="https://www.opendental.com/manual183/alertcategories.html" >v18.3</option><option value="https://www.opendental.com/manual182/alertcategories.html" >v18.2</option><option value="https://www.opendental.com/manual181/alertcategories.html" >v18.1</option><option value="https://www.opendental.com/manual174/alertcategories.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Alert Categories</p></div>
<div class="GeneralPageContent">
<p>Alerts can be grouped into categories, which can then be assigned to users.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Alert Categories.</p>
<img src="images/alertCategories.png" width="883" height="425"/><p class="MarginBottomZero">A list of internal groupings displays on the left. Customized alert categories show on the right. Only Custom alert categories can be edited. </p>

<p>Assign alert categories to users in <a href="securityusers.html">User Edit</a>.</p>
<h2>Add a New Category</h2>
<p>Select an <i>Internal</i> alert category then click <b>Copy</b>. Or select a <i>Custom </i>alert category and click <b>Duplicate</b>. The new category is added to Custom.</p>
<h2>Alert Category Edit</h2>
<p>Double-click a custom category to open the Alert Category Edit window. </p>
<img src="images/alertCategoriesEdit.png" width="330" height="272"/><p>Select the alerts to attach to the category, then click <b>Save</b>. </p>
<p>Click <b>Delete</b> to delete a custom category.</p>
<div class="Note">Note: Each custom alert category has a child/parent relationship with the internal category it was copied from. Thus, if a new alert is added to an internal category (the parent), the alert is also automatically added to the custom category (the child).</div>
</div>
</div>
</body>
</html>```
