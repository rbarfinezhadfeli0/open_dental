# File: ./www.opendental.com/manual243/sheetstroubleshooting.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sheet Troubleshooting</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetstroubleshooting','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/sheetstroubleshooting.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/sheetstroubleshooting.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetstroubleshooting.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetstroubleshooting.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetstroubleshooting.html" >v23.2</option><option value="https://www.opendental.com/manual231/sheetstroubleshooting.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetstroubleshooting.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetstroubleshooting.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetstroubleshooting.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetstroubleshooting.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetstroubleshooting.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetstroubleshooting.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetstroubleshooting.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetstroubleshooting.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetstroubleshooting.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetstroubleshooting.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetstroubleshooting.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetstroubleshooting.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetstroubleshooting.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetstroubleshooting.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetstroubleshooting.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetstroubleshooting.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetstroubleshooting.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetstroubleshooting.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetstroubleshooting.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetstroubleshooting.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetstroubleshooting.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetstroubleshooting.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sheet Troubleshooting</p></div>
<div class="GeneralPageContent">
<p>Below are common questions about <a href="sheets.html">Sheets</a> as well as some troubleshooting steps.</p>
<p><b>Some text is being cut off in my sheets. How do I fix this?</b></p>
<p>When updating to 23.1 from previous version, the horizontal space between letters was increased. This may cause some text to be cut off if it no longer fits in the containing box. Use the <i>Sheet Font Size Reduction</i> tool in <a href="sheetproperties.html">Sheet Def Properties</a> to reduce the font size of text in all fields on the sheet. Alternatively, you can adjust the text size of indivdual fields by double-clicking the field or increase the size of the containing box to fit all text.</p>
<p><b>I accidentally deleted a custom sheet. How can I recover it?</b></p>
<p>To recover a deleted custom sheet, retrieve a copy from a backup of the database that contains the sheet.</p>
<p class="MarginBottomZero">In the backup database: </p>
<ol class="MarginBottomGap">
<li>Go to Setup, Sheets.</li>
<li>Highlight the custom sheet, then click Export. Save the file. It will be saved as a .xml file.</li>
<li>Close the backup database.</li>
</ol>
<p class="MarginBottomZero">In the current database: </p>
<ol class="MarginBottomGap">
<li> Go to Setup, Sheets.</li>
<li>Click Import.</li>
<li>Select the xml file saved from the backup.</li>
</ol>
<p><b>I type information into an Input Field or I mark a Checkbox, but when I hit save the field is blank.</b></p>
<p>This is usually caused by overlapping fields. Other than a line or Static Image, fields cannot overlap each other. Make sure fields are not inside a big Static Text box. Have the Static Text box before and/or after an InputField or Checkbox, but do not cover the field. </p>
<p><b>Blank pages are printing.</b></p>
<p>Blank pages indicate there is a field, image, or element on the page. Make sure that no fields, elements, or images extend outside of the page. Check for blank or white images, extra space at the end of an image, too large fields, blank text boxes, etc. Then, move the item or change its properties.</p>
<p><b>An image on my sheet isn't showing.</b></p>
<p>This means the sheet cannot find the image in the OpenDentImages folder. All sheet images need to be located in the Open Dental database to show on a sheet. Static images should be in the SheetImages folder inside the OpenDentImages folder. Patient images should be in the folder selected for Pat Image in Definitions, Image Categories.</p>
<p><b>When I view my sheet on a phone/tablet, the fields are out of order or are missing things.</b></p>
<p>When a sheet is created, ensure there is a desktop view and a mobile view. Images do not show in the mobile view, so make sure that all text is entered as Static Text and check the box "Include in Mobile" if the text is not accompanied by another field with a Mobile Caption (e.g., a Static Text followed by an Input Field.) This will allow the text to show in both the desktop (main) view and the mobile view. Also, drag the fields in Mobile View to the position that matches the desktop view. </p>
<p><b>On a Web Form or mobile device, mysterious fields are showing, but I don't see anything in the Sheet preview.</b></p>
<p>If fields are showing only in the Web Form or the mobile layout, they are on the sheet, but perhaps outside of the page's left or right margins, or the hidden field may be below everything on an unseen page. On the Edit Sheet Def window, locate the item in the Fields list on the right, then double-click to change its properties.</p>
<p><b>On Web Forms, the fonts are not showing correctly.</b></p>
<p>Font support is dependent on the browser used to view the Web Form. If a browser doesn't support a font, a different font will be substituted. This can affect layout of the sheet. We recommend using common fonts (e.g., Times New Roman, Arial, Courier) and testing sheets on a variety of different browsers and devices. Static text fields in particular may need to be larger to fit text.</p>
<p><b>I updated to version 23.1 (or higher) and now some of my existing Sheets have blank fields.</b></p>
<p>In Version 23.1, there was major overhaul to how Sheets are displayed. This can cause some fields to appear blank. To resolve this, go to Tools, <a href="databasemaintenance.html">Database Maintenance</a> from the Checks tab, select the <i>SheetFieldsWithEmptyItemColor</i> method, and click Fix.</p>
</div>
</div>
</body>
</html>```
