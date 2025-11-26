Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Draw

Use the draw tab to edit images by drawing, adding text, adding lines, or adding measurements.

In the [Imaging Module](images.html), click **Draw**.

![](images/imagingText.png)

![](images/YouTube_PlayButton_15px.png) See our [X-Ray and Measurements Mounts](https://youtu.be/BWQILKkAqds) Webinar.

When Draw is selected, the above toolbar will display.

**Color**: Click to select color for text, lines, drawings, and text background. The background color can remain transparent when *Transparent* is checked.
![](images/imagingTextColor.png)

**Text**: Click, then click on the image where the text should display. The following window will display.
![](images/imagingTextEnter.png)

* **Text**: Enter the text for the image.
* **Location X/Y**: Displays the current X and Y position of the text. These values can be edited manually.
* **Actual Size**: The actual size of the font when the image is at 100%. Click **Calculate Apparent** to view the size of the font as it appears when the image is zoomed in or out.
* **Apparent Size**: The size the font appears at the current zoom level. Click **Calculate Actual** to view the actual size of the font.
* **Text Color**: Color of the text.
* **Background Color**: Background color for the text.
* **Transparent**: Check to keep the background of the text transparent.

**Pen**: Click to draw freehand on the image.

**Line**: Click to draw a line on the image. When selected, additional options display.

![](images/imagingLine.png)* **Edit Points**: Click, then click on the line to move it in segments. Allows line to follow curves.
* **Measure**: Click, then click on a line to measure it. Scale must already be set. See Calibrating Scale below.
* **Scale**: Click to view or set a scale. See Calibrating Scale below for additional details.
  ![](images/imageScale.png)
  + **Optional Units**: Units that display on a measured line. Typically mm.
  + **Known Length**: The known length of a line. This number is manually entered when calibrating the scale.
  + **Pixels**: The number of pixels on a line. Automatically calculated when calibrating the scale.
  + **Pixels per mm**: This number is populated after clicking Calculate. Determines how many pixels on the screen equals 1mm.
  + **Decimal Places**: How many decimals a line should measure to.

**Eraser**: Click to open eraser tool and erase lines and text.

**Change Color**: Click to open the change color tool. Select lines, text, and drawings to change the color to the currently selected option.

**Close**: Click to close the Draw tools.

## Calibrating Scale

Calibrating a scale only needs to be done once as all imaging is taken with the same machine. Once calibrated, lines can be measured using the Measure tool.

1. Take an image with a known length. This can be done on a test patient.
2. Draw a line along the known length on the image.
3. Click Set Scale, then cancel out of the window.
4. Click on the line of the known length. The Image Scale window will open again with the Pixels pre-populated.
5. Enter the known length in the Image Scale window, then click Calculate.
6. The Pixels per mm field will populate. Take note of this number.
7. Enter the Pixels per mm number in two places:
   * Set a *Default Measurement Scale* in [Preferences](preferences.html).
   * Set the Measurement Scale on each mount template (see [Mount Definitions](mountdefinitions.html)).

When measuring a line on an image in a mount, the calculation is done automatically.

To measure a line on a single image, not within a mount, enter the scale manually.