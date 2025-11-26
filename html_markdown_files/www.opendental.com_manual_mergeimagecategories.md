# File: ./www.opendental.com/manual/mergeimagecategories.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Merge Image Categories</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mergeimagecategories','+misc','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/mergeimagecategories.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/mergeimagecategories.html" >v24.2</option><option value="https://www.opendental.com/manual241/mergeimagecategories.html" >v24.1</option><option value="https://www.opendental.com/manual233/mergeimagecategories.html" >v23.3</option><option value="https://www.opendental.com/manual232/mergeimagecategories.html" >v23.2</option><option value="https://www.opendental.com/manual231/mergeimagecategories.html" >v23.1</option><option value="https://www.opendental.com/manual224/mergeimagecategories.html" >v22.4</option><option value="https://www.opendental.com/manual223/mergeimagecategories.html" >v22.3</option><option value="https://www.opendental.com/manual222/mergeimagecategories.html" >v22.2</option><option value="https://www.opendental.com/manual221/mergeimagecategories.html" >v22.1</option><option value="https://www.opendental.com/manual214/mergeimagecategories.html" >v21.4</option><option value="https://www.opendental.com/manual213/mergeimagecategories.html" >v21.3</option><option value="https://www.opendental.com/manual212/mergeimagecategories.html" >v21.2</option><option value="https://www.opendental.com/manual211/mergeimagecategories.html" >v21.1</option><option value="https://www.opendental.com/manual205/mergeimagecategories.html" >v20.5</option><option value="https://www.opendental.com/manual204/mergeimagecategories.html" >v20.4</option><option value="https://www.opendental.com/manual203/mergeimagecategories.html" >v20.3</option><option value="https://www.opendental.com/manual202/mergeimagecategories.html" >v20.2</option><option value="https://www.opendental.com/manual201/mergeimagecategories.html" >v20.1</option><option value="https://www.opendental.com/manual194/mergeimagecategories.html" >v19.4</option><option value="https://www.opendental.com/manual193/mergeimagecategories.html" >v19.3</option><option value="https://www.opendental.com/manual192/mergeimagecategories.html" >v19.2</option><option value="https://www.opendental.com/manual191/mergeimagecategories.html" >v19.1</option><option value="https://www.opendental.com/manual184/mergeimagecategories.html" >v18.4</option><option value="https://www.opendental.com/manual183/mergeimagecategories.html" >v18.3</option><option value="https://www.opendental.com/manual182/mergeimagecategories.html" >v18.2</option><option value="https://www.opendental.com/manual181/mergeimagecategories.html" >v18.1</option><option value="https://www.opendental.com/manual174/mergeimagecategories.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Merge Image Categories</p></div>
<div class="GeneralPageContent">
<p>Image categories can be merged together to combine images into one folder. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Misc Tools, Merge Image Categories.</p>
<img src="images/mergeImageCats.png" width="602" height="276"/><p>Merging <a href="definitionsimagecat.html">Image Categories</a> logs an entry in the <a href="audittrail.html">Audit Trail</a>.</p>
 To merge Image Categories: <p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Select the<i> Image Category to merge into</i>. Click <b>Change</b> to select the Image Category to keep.</li>
<li>Select the<i> Image Category to merge from</i>. Click <b>Change</b> to select the Image Category to remove. </li>
<li>Click <b>Merge</b> to combine the categories. There is a warning that results are permanent and cannot be undone.</li>
<br/><img src="images/mergeImageCatsConfirm.png" width="376" height="133" class="ImageInParagraph"/><li> Click <b>Yes</b> to continue with the merge. A message displays once the merge is successful.</li>
</ol>
<p>Once the merge is complete, all images from the <i>Image Category to merge from</i> (Step 2) are now moved to the <i>Image Category to merge into</i> (Step 1). The <i>Image Category to merge from</i> is also marked as Hidden in <a href="definitionsimagecat.html">Definitions: Image Categories</a>. </p>
</div>
</div>
</body>
</html>```
