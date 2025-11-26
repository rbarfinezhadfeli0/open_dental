Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Sheet Static Image

Static images allow users to add background images, logos and more to sheet layouts.

In [Edit Sheet Def](sheetsetup.html), click **Static Image**.

![](images/sheetImage.png)

Static images are large or small images ([Sheet Field Types](sheetsaddelements.html)) that can be imported into sheets. Images can be used for an entire background based on a scanned form or as smaller graphics (e.g., logos).

Note:

* Supported image types are jpg, gif, png, tif, bmp.
   Word and PDF files must be converted to a supported image type before they can be imported. (Open Dental support cannot assist in converting file types. There are many resources available, such as the Snipping Tool in Windows, online PDF converters, and more.)
* Static Images will not display in Mobile Layout.
* Image sizes should not exceed the size of the sheet minus the margins (e.g., 850 x1000). White space (for example, the bottom of a scanned image) should be cropped out. Smaller file sizes are less likely to have any loading issues.
* To add images that are patient specific, see [Sheet Patient Image](sheetspatimage.html).
* Small images may make lines and rectangles not show. To fix, add a larger background image as well.
* Images are not tied to signatures. Changes to an image do not clear or invalidate a signature. Place information that should invalidate a signature in a text field instead.
* Images should not be overlayed because there is no way to determine which image shows on top/bottom.
* Images with transparency are not supported. When viewing a sheet as a Web Form, transparency may be displayed as black.

**File Name**: Click the dropdown arrow to select an image from the **OpenDentImages/SheetImages** folder. Or click **Import** to select another image file. A preview of the image will show in the middle of the window.

**X/Y Pos**: Determines the position of the upper left corner of the image on the sheet in relation to the x and y axis. X = horizontal. Y = vertical.

**Width/Height**: The size of the image in pixels. To quickly resize an image to the largest size that will fit in the window, click **Shrink to Fit**. The *File Size* indicates the image's original size.

**Maintain Ratio**: Check this box to maintain the same height to width ratio when resizing an image.

## Clinic Specific Images

If using clinics, images can change depending on which clinic the sheet is generated from. For example, if the office logo changes from one clinic to another, users can set up the sheet to use the clinic-specific logo.

1. First customize the sheet and import a default image (e.g., Logo1.jpg).
2. In [OpenDentImages](atozfolder.html), locate the **SheetImages** folder. This is where images for sheets are stored.
3. Create a sub folder for each clinic using the Clinic ID.
   * The Clinic ID can be found in the [Edit Clinic](cliniceditwindow.html) window.
   * Each sub folder should be named with the Clinic ID. For example, if the Clinic ID is 42, the folder would be **\\SERVER\OpenDentImages\SheetImages\42**.
4. Place the new images into their respective clinic's folder. Ensure the image name is the same as the default (e.g. Logo1.jpg).

In Open Dental, select the clinic from the dropdown, then generate the sheet. If a clinic-level image exists, that image will be used on the sheet. If no clinic-level image exists, the default image will be used.

Note: Clinic-level images are not currently supported for [Web Forms Feature](../site/webforms.html) or [Sheet Patient Image](sheetspatimage.html).