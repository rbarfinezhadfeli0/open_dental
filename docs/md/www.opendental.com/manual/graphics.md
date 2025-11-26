Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Graphics Preferences

In the [Main Menu](mainmenu.html), click File, **Graphics**.

**This window is obsolete!**

You should never need to go into this window unless you are using an unsupported version of Windows. (See [Computer Requirements](../site/computerrequirements.html).) The entire lower half is for technology from 15 years ago. The upper half is for DirectX 11 which has been included with Windows since Windows 8.0. Everyone should use DirectX 11, but this window does give you the option to use the older DirectX 9 or OpenGL if you really need to. This might be done for increasingly rare troubleshooting, to compare the 3D Toothchart drawing for older versions versus newer versions.

If you use an older graphics option, certain features will not be available:

* [Procedure Code](procedurecodeedit.html) paint types for Retained Root and Space Maintainer will be unavailable.
* Procedure Code paint type for Text will be unavailable, except for W (watch).
* Graphical [Perio Chart](perio.html) will be unavailable for OpenGL.

![](images/graphics.png)

Graphic settings affect the display of the [Graphical Tooth Chart](graphicaltoothchart.html), the [Graphical Perio Chart](graphicalperiochart.html), and the graphics displayed on printed Treatment Plans.

Users must have the *Graphics Edit* permission to access and change graphic settings.

**DirectX 11 Tooth Chart on all computers**: This section affects all workstations connected to the database.

* **Use if available.**: Check to use DirectX 11 if the proper files are automatically detected on the workstation.
* **Do not use.**: Check if you do not want to use DirectX 11 on all workstations.

**DirectX 11 Tooth Chart**: This section affects this computer only.

* **Use the global setting**: Use the setting noted above.
* **Use if available**: Use the DirectX 11 tooth chart if proper files are available on the workstation.
* **Do not use**: Do not use DirectX 11 on this workstation.

**DirectX 11 status on this computer**: Lists the current status of DirectX 11 on this workstation. Setting is updated automatically once the Chart Module has been viewed and cannot be changed.

* **Available**: The necessary files have been detected to use DirectX 11.
* **Sparks 3D.dll not found or Chart not used yet**: The necessary files have not been automatically detected or this computer has graphical limitations. DirectX 11 cannot be used on this workstation.

**Older Tooth Chart Technology**: Select the tooth chart to use when DirectX 11 is not available.

* **DirectX 9**: Display is similar to DirectX 11 and allows detailed graphical charting (e.g. extractions, crowns, etc.). Required installation of SDK. Graphical Perio Chart is allowed.
* Simple 2D: Display does not allow detailed graphical charting. Circles appear over teeth to display basic charting. Graphical Perio Chart is not allowed.
* OpenGL: Display is similar to DirectX 11 and allows detailed graphical charting (e.g. extractions, crowns, etc.). Graphical Perio Chart is not allowed.

**Options for Older Technology**: These options are only available when DirectX 11 is not available and older technology is being used.

* **Open GL Filters**: Filter the list of graphic formats. These options are only enabled when OpenGL is the selected option.
  + **Hardware Acceleration**: Use one of these formats if you have a graphics card. If you have a graphics controller that is integrated into the motherboard, you might not want to use this option. In practice, it works best to try it both ways to see which gives you the best result.
  + **Use Double-Buffering**: With these formats, the redraw of the graphics is hidden in a second buffer. This eliminates flicker.
  + **Show All Formats**: All available formats
* Available Graphics Formats: Click on a format to use for the chart. The selected format shows at the top.

## Troubleshooting

**Updates:**

* Install all express/critical Windows Updates.
* Update the graphics card driver using one of the following:
  1. Try to locate the driver from the computer manufacturer's website.
  2. Try to locate the driver from the graphics card manufacturer's website.
  3. Try to use Windows Update to update the graphics card driver.

**Crash on startup (with Event Viewer error referring to Direct2DWrapper), or missing Module Buttons, or unacceptable 5% background CPU usage:**
 Update Open Dental to latest stable. You have the option of turning off DirectX (Direct2D) for the general icons. The only downside is that the icons will be a little fuzzy when using zoom. This is done one computer (or app server) at a time. Go to C:\Program Files (x86)\Open Dental\. Manually add an empty text file called "NoD2D.txt". If your computer does not show file extensions, then it will just look like "NoD2D". Now, when you start Open Dental, it will not use Direct2D.

Note: This should not be confused with the other similar file called NoDpi.txt, which is discussed in [Zoom](zoom.html)

**If the old DirectX 9 tooth chart is still not working properly (and you cannot use DirectX 11 for some reason):**

* Install the DirectX End-User Runtimes (June 2010). <https://www.microsoft.com/en-us/download/details.aspx?id=8109>.
  + Create a temp folder then download the file to it. This places all files in one location.
  + Run DXSETUP.exe to insert missing DirectX files.
  + Close, then reopen Open Dental.
* If none of the above steps resolve the issue, install the June 2010 version of the DirectX SDK and restart the computer. <https://www.microsoft.com/en-us/download/details.aspx?id=6812>.

If you cannot get into Graphic Preferences on your computer you can change the graphic setting from a different computer to use Simple Graphics. See [Computers](computer.html).

## Technical Details

Terminology:

* Windowed: Can be drawn on the screen. There are some graphics formats that cannot be drawn to the screen.
* Palette: Instead of millions of colors, there is just a small palette of colors available.
* Depth bits: This is how the coordinates on the Z axis are stored. If there are not enough depth bits available, overlapping doesn't work properly.
* Color bits: The more the better.

DirectX is not available for Open Dental Cloud users. Instead, Open Dental Cloud users will automatically use OpenGL.