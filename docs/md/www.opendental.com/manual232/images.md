Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Imaging Module

The Imaging [Module](modules.html) is a place to scan and store most images, radiographs, forms, and letters that are traditionally stored in a paper chart.

![](images/images.png)

When scanning a single image or file, it is saved as a JPEG. Saving a multi-page document (from a document feeder) saves as a PDF. Additionally, other file types, including Word, PDF, and Excel formats can be imported into the Imaging Module.

## External Software versus Open Dental

For many years, Open Dental focused on building [Program Bridges](../site/programbridges.html) to other imaging software. We have now added enough features that practices should not need any separate imaging software. Users can take radiographs directly in Open Dental. See [Sensor Compatibility](../site/sensorcompatibility.html)

## Images Toolbar

![](images/imageTools1.png)

**Print**: Prints to the *Default* printer in [Printer Setup](printersetup.html). The image is automatically resized to fit the printed page.

* Printing an image with a type of *Radiograph* includes a header with patient and mount information (if applicable).
* Not available for PDFs; to print a PDF, see the PDF dialogue instead.

**Delete**: Delete the selected image.

**Info**: Open [Item Info](imageinfo.html) window to view or edit image or document information (e.g., category, name, date, etc.)

**Sign**: Open the Signature window to attach a note to the selected image and electronically sign it. See [Electronic Signatures](electronicsignatures.html).

**Scan Document**: Scan a single-page document as a JPEG file using a connected flatbed scanner. *Document* is automatically selected as the file Type.

**Scan Multi-Page Document**: Scan a multi-page document as a PDF using a connected scanner with an automatic document feeder (ADF). *Document* is automatically selected as the file Type.

**Scan Radiograph**: Scan a radiograph using a connected flatbed scanner. The pixel windowing settings set in Imaging Setup are used as the default. *Radiograph* is automatically selected as the Type. Radiograph scans save as a JPEG file. Also see [Enhancing Radiograph Images](imageenhancing.html).

**Scan Photo**: Scan a photo as a JPEG using a connected flatbed scanner. *Photo* is automatically selected as the Type.

Note: Scanning steps may vary from workstation to workstation depending on settings selected in [Imaging Quality](imagingsetup.html) and the selected scanner.

**Mount / Acquire**: Click to take images using an imaging device. See [Select Mount and Acquire](mountacquire.html). To utilize imaging in Open Dental, first set up [Imaging Devices](imagingdevices.html) and [Mount Definitions](mountdefinitions.html).

**Video**: Click to open the [Video Capture](videocapture.html) window. Use the live feed to take images and intraoral photos.

Note: An active registration key is required to utilize the Mount/Acquire and Video capture features to take images. The trial version, which does not use a registration key, can still be used to test these features as needed.

**Import**: Add an existing file from the current computer or network to Open Dental. Set a default path to open when clicking Import by entering the *Default import folder* in [Preferences](preferences.html). When an image is imported, the Item Info window opens to enter notes and information.

Note: Import Logic:

1. If an Image Category is selected, the imports go to the selected folder.
2. If no Image Category is selected, and there is a *Default Image Category* set in Preferences, imports go to the default category.
3. If no Image Category is selected, and there no default Image Category set in Preferences, imports go to the first folder in the Image Categories.

* **Import Automatically**: This could potentially be used by some phosphor plate systems. If they allow a folder to be designated where new images will be saved, then use the same folder as the default here. Set the *Default folder for automatic import* in Preferences. Click **Start**. As images are saved to the folder by the other software, they are automatically imported. Once scanning is complete, click **Stop**.
  ![](images/imagingAutoImport.png)
* **Change**: Click to select a folder for automatic import.
* **Go To**: Click to open the currently selected folder in the File Explorer.
* **Start**: Click to begin the automatic import.
* **Stop**: Click to end the automatic import.
* **Close**: Click to exit the automatic import interface.

**Export**: Export a file to another location on the computer or network. If the image is a TIFF file, it is exported as a JPEG. Other files are exported in their original file format.

Click the dropdown for additional options:* **Move to Patient**: Move the currently selected image or document to a different patient. The [Select Patient](patientselect.html) window opens, allowing users to select an existing patient or create a new patient to move the file to. Automatically switches to the newly selected or created patient, so the file can be moved to a different category (folder), as needed.
* **Export TIFF**: Export a selected TIFF file in TIFF format instead of JPEG.

**Copy**: Copy the selected image to the clipboard.

**Paste**: Paste files or bitmaps from the clipboard into the selected mount position or image folder.

**Forms**: Click the dropdown to quickly add frequently used PDF files or images (e.g., surveys, after care instructions, brochures) to the selected image category. Once added to a patient, click *Sign* to add notes or an electronic signature. To add forms to the dropdown, navigate to *Forms* in the OpenDentImages folder. Paste any documents or images into this folder. Restart Open Dental to view newly added templates.

![](images/imageTools2.png)

The options below only work with image files, not PDFs.

* **Slider**: Click and drag each edge of the slider left or right to adjust the pixel windowing values for the selected image. Windowing is useful for images like radiographs because it isolates gray levels. Changes are visible in the preview while dragging. For more details, see [Enhancing Radiograph Images](imageenhancing.html).
* **Zoom**: Zoom by dragging, using the +/- buttons, typing in the box, or using the mouse scroll wheel.
* **Fit**: Click to fit the image to the screen.
* **100**: Click to zoom to 100%, one image pixel per screen pixel.
* **Fit 1**: Only available for mounts. Click to fit the selected mount image to fit the screen.
* **Crop**: Click to activate, then click and drag to draw a rectangle around the part of the image to keep. Upon releasing the mouse, a confirmation appears. Click OK to remove the parts of the image outside of the drawn rectangle.
  + This is for display only and does not alter the original image.
  + Reset the crop from the [Item Size](mountsize.html) window.
* **Pan**: Click to activate, then drag the image to reposition.
* **Adjust**: Only available for mounts. Once activated, drag to adjust an image slightly, or to move it to a different position in the mount.
* **Size/Rotation**: Click an image file or image within a mount, then click to adjust the image. See [Mount Size](mountsize.html) for details.
* **FlipH, -90, +90, 180**: Use to flip and rotate the image.
  + Reset the orientation from the Item Size window.
  + This is for display only and does not alter the original image.
* **Draw**: See the [Draw](draw.html) tool for details on drawing, adding text, adding lines, and adding measurements to an image.
* **Unmount**: Only available when viewing mounts. Select an image from the mount, then click to unmount it. Useful for moving images around. Once an image is unmounted, it appears in a section at the bottom.
  ![](images/unmount.png)+ **Remount**: Use to remount an image. First, click the open spot on the mount, select the image, then click to remount it.
  + **Delete**: Use to delete an image from a mount. First, unmount the image, select the image, then click to delete it.
  + **Retake**: Select an image in the mount and click to unmount it. Use [Mount and Acquire](mountacquire.html) to replace the image.
  + **Close**: Click to close the Unmounted section. Cannot be closed if images are left in the section.

## Image Categories

![](images/imageCategories.png)

Files are organized in tree view by categories (folders). The documents within a folder/category are based on files stored in the patient's [A to Z Folder](atozfolder.html). See [Definitions: Image Categories](definitionsimagecat.html) to customize folders/categories.

**Collapse All**: Click to collapse all folders. Use the +/- symbols on a folder to expand and collapse as needed.
**Expand All**: Click to expand all folders. Use the +/- symbols on a folder to expand and collapse as needed.

* An earth behind the folder icon indicates the folder is shared to Patient Portal. See Definitions, Image Categories, *Show in Patient Portal*. ![](images/portalImagesConnect.png)
* Right-click on an image file to print, delete, or get more information. See [Image Info](imageinfo.html).
* Right-click on a mount to print, delete, or get more information. See [Mount Info](mountinfo.html).
* Single click on an image file (jpg, gif) or PDF, to preview it in the window on the right. For other file types, there is no preview capability.
* Drag and drop an image to move it from one category to another.
* Double-click an item to open it in its default program. For example, a Word file (doc) would open in MS Word.

Note: Image files (e.g. JPEG, GIF, DICOM, etc.) are already previewed in Open Dental and do not open in a default program if double-clicked. The Item Info window opens instead.

Images are sorted chronologically by the date and time created (hour/minute/seconds). To change the sort order, edit the date and/or time in the info window (see [Image Info](imageinfo.html)).

Images stored in the category designated as *Show as Thumbnails and in Chart module* will display as a thumbnail within the folder.

## Viewing Images

To view multiple images at once, select the first image, drag the image to the side using the title bar, then select the next image.

Note: The Unmounted area does not display when moving an image outside the Imaging Module.

![](images/imagingMulti.png)

To move an image to a specific spot on the screen, click Windows in the upper right corner of the image.

![](images/imagingWindows.png)

* This Screen: Click where on the current monitor/screen to place the image.
* Other Screen: Move the image to a specific spot on another monitor/screen.
* Actions:
  + Dock This: Dock this image to the Imaging Module.
  + Close Others: Close any other open images.
  + Show All: Open any minimized images.
* Open Windows: Displays any open images.

Right-click options: Right-click options differ for PDFs, right-click an image preview to see the following options.

* Copy: Copy the image to the clipboard
* Paste: Paste a file from the clipboard to the Imaging Module.
* Flip Horizontally: Flip the selected image horizontally.
* Rotate Left: Rotate the selected image 90 degrees counter-clockwise.
* Rotate Right: Rotate the selected image 90 degrees clockwise.
* Rotate 180: Rotate the selected image 180 degrees clockwise.
* Delete: Delete the selected image.
* Info: Open Item Info for the selected image.

## Add Files into the Imaging Module

To add files into the Imaging Module, there are several options.

* **Scan the documents or images**
* **Import files from another location on the computer or network**
* **Drag and drop files from a Windows folder directly into an Images folder**: This will not work if Open Dental is running as an administrator.
* **Copy/Paste an image from the clipboard**: Within another program, copy the image to the clipboard (Ctrl + C or Edit, Copy). Or copy an active window to the clipboard by pressing Alt + PrtScn. In the Imaging Module, select the category and click Paste. Pasted images are not compressed, but generally use less space than a scanned document. Use the [Print Screen Tool](printscreentool.html) to export or print screenshots without saving to a particular patient.
  + Pasting an image that already exists in Open Dental may cause a bloated file size, especially if it starts out as a gif. All such images get converted to jpg with zero compression, resulting in some bloat.
  + The current recommendation for duplicating a gif is to copy it directly to the A to Z folders using Windows, then return to the Imaging Module and refresh. The new file is picked up and attached to the patient.
* **Copy/Paste directly into the patient's folder**: See [A to Z Folder](atozfolder.html), Placing Images and Documents for detailed for instructions.
  + The next time the Imaging Module is opened for the patient, the files are automatically added to the tree view and can be re-categorized and renamed.
  + This is useful when copying large quantities of files at once.
  + Once recognized by Open Dental, do not rename or move the files in the A to Z folder, or Open Dental will not know where to find them.

## PDF Files

PDF files viewed in Open Dental use WebView2. If WebView2 is not installed, users are prompted to download the installation. This only needs to be done once on each workstation.

Double-click a PDF from the image category to launch it outside of Open Dental, using the workstation's default PDF viewer.

To always view PDFs outside of Open Dental, enable the preference, *PDF files always launch in a separate window*. Users will be required to double-click a PDF to view it.

Some toolbar options do not work with PDFs and are disabled when a PDF is selected. Use the options in the WebView2 interface instead.