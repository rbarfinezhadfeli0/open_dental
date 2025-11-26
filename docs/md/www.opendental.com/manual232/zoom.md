Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Zoom

In the [Main Menu](mainmenu.html), click Tools, Zoom.

![](images/zoom.png)

Zoom allows users to visually scale Open Dental by increasing the overall display of the program. Settings are per workstation and settings will be retained after Open Dental is closed.

**Settings**: Opens the Microsoft Display Settings.

Note: If you make changes in Microsoft Display Settings, close the Zoom window and reopen to reflect new settings.

Monitor Settings:

* **Resolution**: Current monitor resolution based on Microsoft Display Settings.
* **Working Area**: Current working area, or desktop area excluding the taskbar.
* **Microsoft Scale**: Current resolution scale.

**Zoom**: Input a postive number (i.e., 110) to increase Total Scale.

**Reset**: Resets to Microsoft Monitor Settings,making the Zoom scale 100. If there are problems with zoom on a workstation, and the problems prevent access to the zoom settings or ability to reset from this workstation, reset the zoom in [Computers](computer.html) from another workstation.

**Fit**: Automatically calculates a scale that will make Open Dental fit to your working area.

Zoom Settings:

* **Total Scale**: Combined scale percentage from Microsoft and Zoom.
* **Design Specs**: Maximum size of window that our engineers will design.
* **Maximum Size**: Maximum size of resolution after Zoom is applied.
* **Fit**: Displays YES or NO indicating if scale will fit working area. Applies to normal window size, not added Patient Dashboard or docked Tasks Area.

Click OK to save. Click Cancel to exit without saving changes.

## Windows Scaling

**If your fonts all look too big and cut off:**

Windows 10 users can go to Windows Settings, Display, "Advanced scaling settings", which is found about halfway down in blue. Turn off the option for "Let Windows try to fix apps so they're not blurry". You may need to restart your computer for the setting to take effect.

The above option is not available in Windows 11 and it also doesn't fix the problem where your primary monitor is not 100%. One option is to set your scaling to 100% in Windows Settings. You may also need to restart your computer. If you would rather not use 100% Windows scaling, then see the section below to Turn Off DPI Awareness.

All monitors should always be at the same MS scale. If different monitors are at different scales, this will cause [Zoom Artifacts](zoomartifacts.html) such as cut off text.

## Turn Off DPI Awareness

You can turn off dpi awareness as a troubleshooting step or as a last resort to fix layout issues. The downside is that it will cause blurriness if your monitor is not set to 100% scaling in Windows. Many people have their monitors at 150%, which won't be a problem, but 125% could look annoyingly blurry. You will lose some of the crisp detail, especially on a 4k monitor. Turning off dpi awareness will not interfere with our Zoom feature. There are two ways to turn off dpi awareness on a workstation:

1. We offer a simple override that turns off dpi awareness for Open Dental. This is done one computer (or app server) at a time. Go to C:\Program Files (x86)\Open Dental\. Manually add an empty text file called "**NoDpi.txt**". If your computer does not show file extensions, then it will just look like "NoDpi". Now, when you start Open Dental, it will not be dpi aware.

Note: This should not be confused with the other similar file called NoD2D.txt, which is discussed in [Graphics Preferences](graphics.html)

2. (#1 is better because it will continue to work after each update, but you should be aware of this other option) Windows has a feature that allows you to turn off the dpi awareness for one application at a time. On the Open Dental executable or shortcut, right-click and select **Properties**, then **Compatibility**. Click **Change high DPI Settings**. Check *Override high DPI scaling behavior.* Change the *Scaling performed by* to *System*.

## Remote Apps

If you are using Remote Apps, then you will probably want to add the NoDpi.txt file as described above.

There is also an intermittent issue if using Remote Apps on Server 2019. A maximized window can get shifted down and to the right by 8 pixels, but the mouse clicks still register at the old locations, resulting in frequent erroneous clicks. There is an override that turns off our custom borders and uses Microsoft borders instead. Go to C:\Program Files (x86)\Open Dental\. Manually add an empty text file called **"NoCustomBorders.txt"**. But if you use this option, you must also set Open Dental to be dpi unaware, usually by adding "NoDpi.txt" to the application folder.

4/12/2021-There is another issue that can happen with Remote Apps when you repeatedly drag to resize a window. It does not happen on all workstations. A thick black rectangle can appear at the size of the previous drag resize. The mouse then gets stuck temporarily on this erroneous rectangle. This is not a major issue because users rarely resize a window repeatedly. It also does not crash the program, and further attempts at resizing can be successful. We do not understand why it's doing that. It might not even be unique to Open Dental.

## Window Resizing

It was technically difficult to implement the Zoom feature. We had to build our own layout system. This results in some artifacts when resizing any window:

* Resizing by dragging corners jumps as the painting struggles to keep up with the mouse. It looks jittery.
* At the end of a resize, it can get "stuck" on your mouse for a moment and end up a different size than you intended. Just slow down a little. Pause your mouse for a moment after you release the button. This will give the software time to catch up.
* If dragging the title away from maximize, the entire window will flicker away from the mouse to the "restore" size and position before jumping back to the mouse. Just hold the mouse button down and wait for it to catch up.
* If you restore a minimized window from the task bar, it can be slightly bigger than when you minimized it. This is usually only noticeable with repeated minimize and restore.
* A maximized window can still be resized by grabbing the edges. This can actually be an advantage in some situations. You can maximize and then drag an edge so that it only fills half the screen. The annoyance is that some users are used to slamming the mouse over to the left to use the [Module](modules.html) buttons. You will need to retrain yourself to aim for the middle of the desired module button.
* When you drag a window to a high dpi monitor, it can hang for a moment while it redraws the new size. Just keep the mouse down and move slowly while it catches up.
* Snap to left or right by dragging does not work. Use the WindowKey-ArrowLorR key instead.
* Snap to one of the four corners does not work.
* If Open Dental is spanning two monitors, and you click Maximize, it will maximize to the monitor with the greatest percentage, as expected. But it will also leave a narrow 8px vertical ribbon on the other monitor. Avoid this by dragging to a single monitor before clicking Maximize.
* To resize a window, you will need to grab the actual border. This is consistent with older versions of Windows, but is different than the current Windows behavior where there are no borders and you must grab *outside* the border to resize.
* Previously, you could right click on the title bar of a window to get a drop down menu which contained Restore, Minimize, Close, etc. This no longer exists, and you must user the buttons at the upper right.

We are aware of all these issues. We are working on ways to improve performance and eliminate some of these artifacts, but it will not happen soon. The artifacts are tolerable. We feel that the advantages of having zoom far outweigh the resizing annoyances.

## Zoom Artifacts

The zoom feature is not perfect, especially with high dpi monitors. This version of Open Dental (v 23.1) is much better, but still has imperfections that might not even interfere with usage. [Zoom Artifacts](zoomartifacts.html) lists all known artifacts that we do not consider bugs: