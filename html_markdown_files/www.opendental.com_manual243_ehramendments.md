# File: ./www.opendental.com/manual243/ehramendments.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Amendments</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehramendments','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehramendments.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehramendments.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehramendments.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehramendments.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehramendments.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehramendments.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehramendments.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehramendments.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehramendments.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehramendments.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehramendments.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehramendments.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehramendments.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehramendments.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehramendments.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehramendments.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehramendments.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehramendments.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehramendments.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehramendments.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehramendments.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehramendments.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehramendments.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehramendments.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehramendments.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehramendments.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehramendments.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehramendments.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Amendments</p></div>
<div class="GeneralPageContent">
<p>Amendments are a way to document and track provider, organization, or patient provided information in the patient's EHR record. You can scan documents or only document a file's location. Scanned amendments do not show in the patient's chart, in the Images module, or anywhere else.</p>
<p>On the <a href="ehrdashboard1.html">EHR Dashboard</a>, click Amendments. <br/><img src="images/ehrAmendments.gif" width="600" height="225" class="ImageInParagraph"/></p>
<p>Double click an existing amendment to edit, or click <b>Add</b> to enter a new amendment. <img src="images/ehrAmendmentEdit.gif" width="595" height="343"/></p>
<p><b>Date Requested</b>: Date the amendment was requested.</p>
<p><b>Date Accepted/Denied</b>: Date that you accept or deny the request.</p>
<p><b>Date Appended</b>: Date the document was scanned. This date is automatically populated when a document is scanned.</p>
<p><b>Status</b>: The current status of the amendment.</p>
<p><b>Source</b>: Who made the request or provided the document (provider, patient, organization, other).</p>
<p><b>Source name</b>: The name of the source.</p>
<p><b>Description/Location</b>: If scanned, enter a description of the document. If not scanned, enter a description and where it is stored.</p>
<p><b>Scan</b>: Scan the document. If scanned, the button will change to View. Documents can only be viewed from within the Edit Amendment window.</p>
<h2>Scanning/viewing a document</h2>
<p>Click <b>Scan</b> or <b>View</b> to launch a modified version of the Images toolbar.</p>
<img src="images/ehrAmendmentsScan.gif" width="489" height="83"/><p>The file name is listed on the left, and the scanned document can be viewed on the right. There can only be one document per amendment. Each time you scan an amendment, it will remove the old document and replace it with the new document. If you have multiple pages, use the <b>Multi-Page</b> button so the pages are recognized as one document.</p>
<ul>
<li><b>Printer</b>: Print the document.</li>
<li><b>X</b>: Delete the document.</li>
<li><b>Scan</b><ul>
<li><b>Document</b>: Use the flatbed scanner of your attached device to Scan a single page document.</li>
<li><b>Multi-Page Document</b>: Use the automatic document feeder (ADF) of your attached device to scan multiple pages.</li>
</ul>
</li>
<li><b>Import</b>: Import an existing file from your computer or network. You can only import one file at a time.</li>
<li><b>Export</b>: Export the file to another location on your computer or network.</li>
<li><b>Copy</b>: Copy the document to the clipboard.</li>
<li><b>Paste</b>: Paste an item from the clipboard into the selected image folder.</li>
<li><b>Magnifying Glass + and -</b> : Zoom in and out in 50% increments.</li>
<li><b>100</b>: View the image at 100%</li>
</ul>
</div>
</div>
</body>
</html>```
