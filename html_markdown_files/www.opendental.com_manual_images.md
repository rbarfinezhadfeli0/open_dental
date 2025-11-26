# File: ./www.opendental.com/manual/images.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Imaging Module</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('images','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/images.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/images.html" >v24.2</option><option value="https://www.opendental.com/manual241/images.html" >v24.1</option><option value="https://www.opendental.com/manual233/images.html" >v23.3</option><option value="https://www.opendental.com/manual232/images.html" >v23.2</option><option value="https://www.opendental.com/manual231/images.html" >v23.1</option><option value="https://www.opendental.com/manual224/images.html" >v22.4</option><option value="https://www.opendental.com/manual223/images.html" >v22.3</option><option value="https://www.opendental.com/manual222/images.html" >v22.2</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Imaging Module</p></div>
<div class="GeneralPageContent">
<p>The Imaging <a href="modules.html">Module</a> is a place to scan and store most images, radiographs, forms, and letters that are traditionally stored in a paper chart.</p>
<img src="images/images.png" width="915" height="626"/><p>When scanning a single image or file, it is saved as a JPEG. Saving a multi-page document (from a document feeder) saves as a PDF. Additionally, other file types, including Word, PDF, and Excel formats can be imported into the Imaging Module.</p>
<h2>External Software versus Open Dental</h2>
<p>For many years, Open Dental focused on building <a href="../site/programbridges.html">Program Bridges</a> to other imaging software. We have now added enough features that practices should not need any separate imaging software. Users can take radiographs directly in Open Dental. See <a href="../site/sensorcompatibility.html">Sensor Compatibility</a></p>
<h2>Images Toolbar</h2>
<img src="images/imageTools1.png" width="866" height="32"/><p class="MarginBottomZero"><b>Print</b>: Prints to the <i>Default</i> printer in <a href="printersetup.html">Printer Setup</a>. The image is automatically resized to fit the printed page. Click the dropdown to print all images in the currently selected category using the Windows default printer.  </p>
<ul class="MarginBottomGap">
<li>Printing an image with a type of <i>Radiograph</i> includes a header with patient and mount information (if applicable). </li>
<li>Not available for PDFs; to print a PDF, see the PDF dialogue instead. </li>
</ul>
<p><b>Delete</b>: Remove the selected file from Open Dental and delete it from the <a href="atozfolder.html">A to Z Folder (OpenDentImages)</a>.</p>
<p><b>Info</b>: Open <a href="imageinfo.html">Item Info</a> window to view or edit image or document information (e.g., category, name, date, etc.)</p>
<p class="MarginBottomZero"><b>Sign</b>: Open the Signature window to add or edit a notes on the selected image and electronically sign it. <a href="electronicsignatures.html">Electronic Signatures</a> are supported.  </p>
<ul class="MarginBottomGap">
<li>Once notes or a signature are saved, they are visible in the bottom-left of the image preview. </li>
<li>Signatures created in Open Dental Version 24.3.11 or greater are invalidated when there are any changes to the document. Signatures created in Open Dental Version 24.3.10 or lower remain valid even if the document is changed.</li>
</ul>
<img src="images/imageSigned.png" width="678" height="101"/><p><b>Scan Document</b>: Scan a single-page document as a JPEG file using a connected flatbed scanner. <i>Document</i> is automatically selected as the file Type.</p>
<p><b>Scan Multi-Page Document</b>: Scan a multi-page document as a PDF using a connected scanner with an automatic document feeder (ADF). <i>Document</i> is automatically selected as the file Type.</p>
<p><b>Scan Radiograph</b>: Scan a radiograph using a connected flatbed scanner. The pixel windowing settings set in Imaging Setup are used as the default. <i>Radiograph</i> is automatically selected as the Type. Radiograph scans save as a JPEG file. Also see <a href="imageenhancing.html">Enhancing Radiograph Images</a>.</p>
<p><b>Scan Photo</b>: Scan a photo as a JPEG using a connected flatbed scanner. <i>Photo</i> is automatically selected as the Type. </p>
<p><div class="Note">Note: Scanning steps may vary from workstation to workstation depending on settings selected in <a href="imagingsetup.html">Imaging Quality</a> and the selected scanner.</div>
</p>
<p><b>Mount / Acquire</b>: Click to take images using an imaging device. See <a href="mountacquire.html">Select Mount and Acquire</a>. To utilize imaging in Open Dental, first set up <a href="imagingdevices.html">Imaging Devices</a> and <a href="mountdefinitions.html">Mount Definitions</a>. </p>
<p><b>Video</b>: Click to open the <a href="videocapture.html">Video Capture</a> window. Use the live feed to take images and intraoral photos. </p>
<p><div class="Note">Note: Enabled support with an active registration key is required to utilize the Mount/Acquire and Video capture features to take images. The trial version, which does not use a registration key, can still be used to test these features as needed.</div>
</p>
<p class="MarginBottomZero"><b>Import</b>: Add an existing file from the current computer or network to Open Dental. Set a default path to open when clicking Import by entering the <i>Default import folder</i> in <a href="preferences.html">Preferences</a>. When an image is imported, the Item Info window opens to enter notes and information. <br/><div class="Note">Note: Import Logic:  <ol>
<li>If an Image Category is selected, the imports go to the selected folder. </li>
<li>If no Image Category is selected, and there is a <i>Default Image Category</i> set in Preferences, imports go to the default category.</li>
<li>If no Image Category is selected, and there no default Image Category set in Preferences, imports go to the first folder in the Image Categories.</li>
</ol>
</div>
</p>
<ul class="MarginBottomGap">
<li><b>Import Automatically</b>: This could potentially be used by some phosphor plate systems. If they allow a folder to be designated where new images will be saved, then use the same folder as the default here. Set the <i>Default folder for automatic import</i> in Preferences. Click <b>Start</b>. As images are saved to the folder by the other software, they are automatically imported. Once scanning is complete, click<b> Stop</b>.<br/><img src="images/imagingAutoImport.png" width="799" height="45" class="ImageInParagraph"/></li>
<li><b>Change</b>: Click to select a folder for automatic import. </li>
<li><b>Go To</b>: Click to open the currently selected folder in the File Explorer.</li>
<li><b>Start</b>: Click to begin the automatic import. </li>
<li><b>Stop</b>: Click to end the automatic import. </li>
<li><b>Close</b>: Click to exit the automatic import interface.</li>
</ul>
<p class="MarginBottomZero"><b>Export</b>: Export the selected file to another location on the computer or network. If an image is selected on a mount, only the selected image is exported. If the image is a TIFF file, it is exported as a JPEG. Other files are exported in their original file format. Exported DICOM images reflect the original file, and no edits (i.e., drawings, rotation, etc.) are included. Click the dropdown for additional options.</p>
<ul class="MarginBottomGap">
<li><b>Move to Patient</b>: Move the currently selected image or document to a different patient. The <a href="patientselect.html">Select Patient</a> window opens, allowing users to select an existing patient or create a new patient to move the file to. Automatically switches to the newly selected or created patient, so the file can be moved to a different category (folder), as needed. Drawings are not included when an image is moved.</li>
<li><b>Export TIFF</b>: Export a selected TIFF file in TIFF format instead of JPEG.</li>
</ul>
<p><b>Copy</b>: Copy the selected image to the clipboard.</p>
<p><b>Paste</b>: Paste files or bitmaps from the clipboard into the selected mount position or image folder.</p>
<p><b>Forms</b>: Click the dropdown to quickly add frequently used PDF files or images (e.g., surveys, after care instructions, brochures) to the selected image category. Once added to a patient, click <i>Sign</i> to add notes or an electronic signature. To add forms to the dropdown, navigate to <i>Forms</i> in the OpenDentImages folder. Paste any documents or images into this folder. Restart Open Dental to view newly added templates.</p>
<img src="images/imageTools2.png" width="915" height="32"/><p>The options below only work with image files, not PDFs or other documents.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Windowing</b>: Adjust windowing values by clicking and dragging either slider. If either slider is moved from the far end, single clicking in the Windowing area may move the slider. Windowing is useful for images like radiographs because it isolates gray levels. Changes are visible in the preview as adjustments are made. For more details, see <a href="imageenhancing.html">Enhancing Radiograph Images</a>.</li>
<li><b>Zoom</b>: Zoom by dragging, using the +/- buttons, typing in the box, or using the mouse scroll wheel.</li>
<li><b>Fit</b>: Click to fit the image to the screen.</li>
<li><b>100</b>: Click to zoom to 100%, one image pixel per screen pixel.</li>
<li><b>Fit 1</b>: Only available for mounts. Click to fit the selected mount image to fit the screen.</li>
<li><b>Crop</b>: Click to activate, then click and drag to draw a rectangle around the part of the image to keep. Upon releasing the mouse, a confirmation appears. Click OK to remove the parts of the image outside of the drawn rectangle. <ul>
<li>This is for display only and does not alter the original image.</li>
<li>Reset the crop from the <a href="mountsize.html">Item Size</a> window.</li>
</ul>
</li>
<li><b>Pan</b>: Click to activate, then drag the image to reposition.</li>
<li><b>Adjust</b>: Only available for mounts. Once activated, drag to adjust an image slightly, or to move it to a different position in the mount.</li>
<li><b>Size/Rotation</b>: Click an image file or image within a mount to open Item Size or Item Size and Rotation on Mount. See <a href="mountsize.html">Image Size</a> for details. </li>
<li><b>FlipH, -90, +90, 180</b>: Use to flip and rotate the image.  <ul>
<li>Reset the orientation from the Item Size window.</li>
<li>This is for display only and does not alter the original image.</li>
</ul>
</li>
<li><b>Draw</b>: See the <a href="draw.html">Draw</a> tool for details on drawing, adding text, adding lines, and adding measurements to an image.</li>
<li><b>Unmount</b>: Only available when viewing mounts. Select an image from the mount, then click to unmount it. Useful for moving images around. Once an image is unmounted, it appears in a section at the bottom. <ul>
<img src="images/unmount.png" width="590" height="208"/><li><b>Remount</b>: Use to remount an image. First, click the open spot on the mount, select the image, then click to remount it.</li>
<li><b>Delete</b>: Use to delete an image from a mount. First, unmount the image, select the image, then click to delete it.</li>
<li><b>Retake</b>: Select an image in the mount and click to unmount it. Use <a href="mountacquire.html">Mount and Acquire</a> to replace the image. </li>
<li><b>Close</b>: Click to close the Unmounted section. Cannot be closed if images are left in the section.</li>
</ul>
</li>
</ul>
<h2>Image Categories</h2>
<img src="images/imageCategories.png" width="232" height="121"/><p>Files are organized in tree view by categories (folders). The documents within a folder/category are based on files stored in the patient's <a href="atozfolder.html">A to Z Folder</a>. See <a href="definitionsimagecat.html">Definitions: Image Categories</a> to customize folders/categories. </p>
<p><b>Collapse All</b>: Click to collapse all folders. Use the +/- symbols on a folder to expand and collapse as needed. <br/><b>Expand All</b>: Click to expand all folders. Use the +/- symbols on a folder to expand and collapse as needed. </p>
<p class="MarginBottomZero">Additional Details: </p>
<ul class="MarginBottomGap">
<li>A globe behind the folder icon indicates the folder is shared to Patient Portal. See Definitions, Image Categories, <i>Show in Patient Portal</i>.<br/><img src="images/portalImagesConnect.png" width="17" height="16" class="ImageInParagraph"/></li>
<li>Right-click on a file or image to print, delete, open <a href="imageinfo.html">Image Info</a>, or open <a href="tasksearch.html">Task Search</a> to find any task the file is attached to.</li>
<li>Right-click on a mount to print, delete, or open <a href="mountinfo.html">Mount Info</a>.</li>
<li>Single-click on an image file (JPEG, GIF, DICOM, etc.) or PDF, to preview it in the window on the right. For other file types, there is no preview capability. </li>
<li>Drag and drop an image to move it from one category to another.</li>
<li>Double-click a non-image (e.g., PDF, Text file) to open it in its default program. For example, a Word file (doc) would open in Microsoft Word.</li>
<li>Images are sorted chronologically by the item Date and Time (hour/minute/seconds).  <ul>
<li>If preference <i>Sort images by date descending</i> is enabled, the oldest item is first.</li>
<li>If preference <i>Sort images by date descending</i> is disabled, the newest item is first.</li>
<li>To change an item's sort order, edit the date and/or time in <a href="imageinfo.html">Image Info</a> or <a href="mountinfo.html">Mount Info</a>.</li>
</ul>
</li>
<li>Images stored in the categories designated as <i>Show as Thumbnails and in Chart module</i> display a thumbnail preview within the category.</li>
</ul>
<h2>Viewing Images</h2>
<p>To view multiple images at once, select the first image, drag the image to the side using the title bar. This undocks the image and another image can be selected to display. <div class="Note">Note: The Unmounted area does not display when an image is undocked.</div>
</p>
<img src="images/imagingMulti.png" width="915" height="571"/><p>To move an image to a specific spot on the screen, click Windows in the image preview toolbar.</p>
<p class="MarginBottomZero"><img src="images/imagingWindows.png" width="390" height="341"/><br/></p>
<ul class="MarginBottomGap">
<li>This Screen: Click an option to move the image to that area of the current monitor/screen. </li>
<li>Other Screen: Click an option to move the image to that area on another monitor/screen.</li>
<li><b>Dock This</b>: Dock the image to the Imaging Module.</li>
<li><b>Close Others</b>: Close any other open images.</li>
<li><b>Show All</b>: Open any minimized images.</li>
<li>Open Images: Lists the file name for any open images.</li>
</ul>
<p><div class="Note">Note: If an image is minimized or maximized, the image is undocked when it is restored.</div>
</p>
<p class="MarginBottomZero">Right-click options: Right-click options differ for PDFs, right-click an image preview to see the following options. </p>
<ul class="MarginBottomGap">
<li>Copy: Copy the image to the clipboard</li>
<li>Paste: Paste a file from the clipboard to the Imaging Module. </li>
<li>Flip Horizontally: Flip the selected image horizontally.</li>
<li>Rotate Left: Rotate the selected image 90 degrees counter-clockwise.</li>
<li>Rotate Right: Rotate the selected image 90 degrees clockwise.</li>
<li>Rotate 180: Rotate the selected image 180 degrees clockwise.</li>
<li>Delete: Remove the image from Open Dental and delete it from the A to Z Folder.</li>
<li>Info: Open Item Info for the selected image.</li>
</ul>
<h2>Add Files into the Imaging Module</h2>
<p class="MarginBottomZero">To add files into the Imaging Module, there are several options. </p>
<ul class="MarginBottomGap">
<li><b>Scan the documents or images</b></li>
<li><b>Import files from another location on the computer or network</b></li>
<li><b>Drag and drop files from a Windows folder directly into an Images folder</b>: This does not work if Open Dental is running as an administrator.</li>
<li><b>Copy/Paste an image from the clipboard</b>: Within another program, copy the image to the clipboard (Ctrl + C or Edit, Copy). Or copy an active window to the clipboard by pressing Alt + PrtScn. In the Imaging Module, select the category and click Paste. Pasted images are not compressed, but generally use less space than a scanned document. Use the <a href="printscreentool.html">Print Screen Tool</a> to export or print screenshots without saving to a particular patient.<br/><ul>
<li>Pasting an image that already exists in Open Dental may cause a bloated file size, especially if it starts out as a gif. All such images get converted to jpg with zero compression, resulting in some bloat. </li>
<li>The current recommendation for duplicating a gif is to copy it directly to the A to Z folders using Windows, then return to the Imaging Module and refresh. The new file is picked up and attached to the patient.</li>
</ul>
</li>
<li><b>Copy/Paste directly into the patient's folder</b>: See <a href="atozfolder.html">A to Z Folder</a>, Placing Images and Documents for detailed for instructions.  <ul>
<li>The next time the Imaging Module is opened for the patient, the files are automatically added to the tree view and can be re-categorized and renamed. </li>
<li>This is useful when copying large quantities of files at once. </li>
<li>Once recognized by Open Dental, do not rename or move the files in the A to Z folder, or Open Dental will not know where to find them.</li>
</ul>
</li>
</ul>
<h2>PDF Files</h2>
<p>PDF files viewed in Open Dental use WebView2. If WebView2 is not installed, users are prompted to download the installation. This only needs to be done once on each workstation.</p>
<p>Double-click a PDF from the image category to launch it outside of Open Dental, using the workstation's default PDF viewer. </p>
<p>To always view PDFs outside of Open Dental, enable the preference, <i>PDF files always launch in a separate window</i>. Users will be required to double-click a PDF to view it.</p>
<p>Some toolbar options do not work with PDFs and are disabled when a PDF is selected. Use the options in the WebView2 interface instead.</p>
</div>
</div>
</body>
</html>```
