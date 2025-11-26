# File: ./www.opendental.com/manual/imageinfo.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Image Info</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('imageinfo','images','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/imageinfo.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/imageinfo.html" >v24.2</option><option value="https://www.opendental.com/manual241/imageinfo.html" >v24.1</option><option value="https://www.opendental.com/manual233/imageinfo.html" >v23.3</option><option value="https://www.opendental.com/manual232/imageinfo.html" >v23.2</option><option value="https://www.opendental.com/manual231/imageinfo.html" >v23.1</option><option value="https://www.opendental.com/manual224/imageinfo.html" >v22.4</option><option value="https://www.opendental.com/manual223/imageinfo.html" >v22.3</option><option value="https://www.opendental.com/manual222/imageinfo.html" >v22.2</option><option value="https://www.opendental.com/manual221/imageinfo.html" >v22.1</option><option value="https://www.opendental.com/manual214/imageinfo.html" >v21.4</option><option value="https://www.opendental.com/manual213/imageinfo.html" >v21.3</option><option value="https://www.opendental.com/manual212/imageinfo.html" >v21.2</option><option value="https://www.opendental.com/manual211/imageinfo.html" >v21.1</option><option value="https://www.opendental.com/manual205/imageinfo.html" >v20.5</option><option value="https://www.opendental.com/manual204/imageinfo.html" >v20.4</option><option value="https://www.opendental.com/manual203/imageinfo.html" >v20.3</option><option value="https://www.opendental.com/manual202/imageinfo.html" >v20.2</option><option value="https://www.opendental.com/manual201/imageinfo.html" >v20.1</option><option value="https://www.opendental.com/manual194/imageinfo.html" >v19.4</option><option value="https://www.opendental.com/manual193/imageinfo.html" >v19.3</option><option value="https://www.opendental.com/manual192/imageinfo.html" >v19.2</option><option value="https://www.opendental.com/manual191/imageinfo.html" >v19.1</option><option value="https://www.opendental.com/manual184/imageinfo.html" >v18.4</option><option value="https://www.opendental.com/manual183/imageinfo.html" >v18.3</option><option value="https://www.opendental.com/manual182/imageinfo.html" >v18.2</option><option value="https://www.opendental.com/manual181/imageinfo.html" >v18.1</option><option value="https://www.opendental.com/manual174/imageinfo.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Image Info</p></div>
<div class="GeneralPageContent">
<p>The Item Info window displays additional details about an image.</p>
<p>In the <a href="images.html">Imaging Module</a>, right-click a file. In the menu, select <b>Info</b>.</p>
<img src="images/imagesItemInfo.png" width="854" height="414"/><p>Alternatively, this window also opens when using the Import and Paste buttons from the Imaging Module.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Category</b>: Corresponds to folder names. Select the category the image should be stored in. Customize options in <a href="definitionsimagecat.html">Definitions: Image Categories</a>.</li>
<li><b>File Name</b>: The full path to the file in the <a href="atozfolder.html">A to Z Folder</a>. Files are automatically named using the fformat: LastnameFirstnameUniquenumber (the autoindex number of the document table in the database). They are stored in the patient's A to Z folder. Click <b>Open Folder</b> to open the file location.</li>
<li><b>File Size</b>: Displays the size, in bytes, of the selected file.</li>
<li><b>Date and Time</b>: If a file is imported, the date and time match the date and time of the original file (not the date and time of the import). If an image is scanned or acquired, defaults to the current date and time. These fields are editable and affect sort order.</li>
<li><b>Provider</b>: Use the dropdown to associate a provider with the image. If using Clinics and providers are restricted to Clinics in <a href="securityusers.html">User Edit</a>, only providers available for the selected Clinic are options.</li>
<li><b>Description</b>: Enter a description for the image. This displays in the tree view with the file date.</li>
<li><b>Type</b>: If thumbnails are not displayed for a folder, determines the icon that appears for a file in the tree view.</li>
<li><b>Tooth Numbers</b>: If this file pertains to a tooth, enter tooth number(s) for reference.</li>
<li><b>Print Heading</b>: Check to include a heading with patient name, birthdate, and image date when printing the document. </li>
</ul>
<p><b>Audit Trail</b>: View a log of all changes to the file (creating, editing, etc.).<br/><img src="images/imageAuditTrail.png" width="907" height="187" class="ImageInParagraph"/></p>
<h2>Open Dental Cloud</h2>
<p class="MarginBottomZero">When using Open Dental Cloud, the Open Folder button changes.  </p>
<ul class="MarginBottomGap">
<li>Some users may see <i>Open Folder</i> for PDF files, and <i>Export</i> for all other file types. PDFs open in a web viewer and all other types are downloaded via the web browser.</li>
<li>Other users may see <i>Export</i> for all other file types. All file types are downloaded via the ODCloudClient.</li>
</ul>
</div>
</div>
</body>
</html>```
