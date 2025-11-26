# File: ./www.opendental.com/manual243/zoom.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Zoom</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('zoom','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/zoom.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/zoom.html" >v24.2</option><option value="https://www.opendental.com/manual241/zoom.html" >v24.1</option><option value="https://www.opendental.com/manual233/zoom.html" >v23.3</option><option value="https://www.opendental.com/manual232/zoom.html" >v23.2</option><option value="https://www.opendental.com/manual231/zoom.html" >v23.1</option><option value="https://www.opendental.com/manual224/zoom.html" >v22.4</option><option value="https://www.opendental.com/manual223/zoom.html" >v22.3</option><option value="https://www.opendental.com/manual222/zoom.html" >v22.2</option><option value="https://www.opendental.com/manual221/zoom.html" >v22.1</option><option value="https://www.opendental.com/manual214/zoom.html" >v21.4</option><option value="https://www.opendental.com/manual213/zoom.html" >v21.3</option><option value="https://www.opendental.com/manual212/zoom.html" >v21.2</option><option value="https://www.opendental.com/manual211/zoom.html" >v21.1</option><option value="https://www.opendental.com/manual205/zoom.html" >v20.5</option><option value="https://www.opendental.com/manual204/zoom.html" >v20.4</option><option value="https://www.opendental.com/manual203/zoom.html" >v20.3</option><option value="https://www.opendental.com/manual202/zoom.html" >v20.2</option><option value="https://www.opendental.com/manual201/zoom.html" >v20.1</option><option value="https://www.opendental.com/manual194/zoom.html" >v19.4</option><option value="https://www.opendental.com/manual193/zoom.html" >v19.3</option><option value="https://www.opendental.com/manual192/zoom.html" >v19.2</option><option value="https://www.opendental.com/manual191/zoom.html" >v19.1</option><option value="https://www.opendental.com/manual184/zoom.html" >v18.4</option><option value="https://www.opendental.com/manual183/zoom.html" >v18.3</option><option value="https://www.opendental.com/manual182/zoom.html" >v18.2</option><option value="https://www.opendental.com/manual181/zoom.html" >v18.1</option><option value="https://www.opendental.com/manual174/zoom.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Zoom</p></div>
<div class="GeneralPageContent">
<p>Zoom allows users to visually scale Open Dental by increasing the overall display of the program. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Zoom.</p>
<img src="images/zoom.png" width="601" height="391"/><p>Zoom settings are per workstation and settings are retained after Open Dental is closed. </p>
<p><b>Settings</b>: Opens the Microsoft Display Settings.</p>
<p><div class="Note">Note: If changes are made in Microsoft Display Settings, close the Zoom window and reopen to reflect new settings.</div>
</p>
<p class="MarginBottomZero">Monitor Settings:  </p>
<ul class="MarginBottomGap">
<li><b>Resolution</b>: Current monitor resolution based on Microsoft Display Settings. For minimum resolution requirements, see <a href="computerrequirements.html">Computer Requirements</a>.</li>
<li><b>Working Area</b>: Current working area, or desktop area excluding the taskbar. </li>
<li><b>Microsoft Scale</b>: Current resolution scale. </li>
</ul>
<p><b>Zoom</b>: Input a positive number (e.g., 110) to increase Total Scale. </p>
<p><b>Reset</b>: Resets to Microsoft Monitor Settings, making the Zoom scale 100. If there are problems with zoom on a workstation, and the problems prevent access to the zoom settings or ability to reset from this workstation, reset the zoom in <a href="computer.html">Computers</a> from another workstation.</p>
<p><b>Fit</b>: Automatically calculates a scale that makes Open Dental fit to the working area. </p>
<p class="MarginBottomZero">Zoom Settings:  </p>
<ul class="MarginBottomGap">
<li><b>Total Scale</b>: Combined scale percentage from Microsoft and Zoom. </li>
<li><b>Design Specs</b>: Maximum size of window that our engineers design. </li>
<li><b>Maximum Size</b>: Maximum size of resolution after Zoom is applied. </li>
<li><b>Fit</b>: Displays YES or NO indicating if scale fits working area. Applies to normal window size, not added Patient Dashboard or docked Tasks Area. </li>
</ul>
<h2>Windows Scaling</h2>
<p><b><span style="color:red">If your fonts all look too big and cut off:</span></b></p>
<p>Windows 10 users can go to Windows Settings, Display, "Advanced scaling settings", which is found about halfway down in blue. Turn off the option for "Let Windows try to fix apps so they're not blurry". You may need to restart your computer for the setting to take effect. </p>
<p>The above option is not available in Windows 11 and it also doesn't fix the problem where your primary monitor is not 100%. One option is to set your scaling to 100% in Windows Settings. You may also need to restart your computer. If you would rather not use 100% Windows scaling, then see the section below to Turn Off DPI Awareness.</p>
<p>All monitors should always be at the same MS scale. If different monitors are at different scales, this will cause <a href="zoomartifacts.html">Zoom Artifacts</a> such as cut off text.</p>
<h2>Turn Off DPI Awareness</h2>
<p>You can turn off dpi awareness as a troubleshooting step or as a last resort to fix layout issues. The downside is that it will cause blurriness if your monitor is not set to 100% scaling in Windows. Many people have their monitors at 150%, which won't be a problem, but 125% could look annoyingly blurry. You will lose some of the crisp detail, especially on a 4k monitor. Turning off dpi awareness will not interfere with our Zoom feature. There are two ways to turn off dpi awareness on a workstation:</p>
<p>1. We offer a simple override that turns off dpi awareness for Open Dental. This is done one computer (or app server) at a time. Go to C:\Program Files (x86)\Open Dental\. Manually add an empty text file called "<b>NoDpi.txt</b>". If your computer does not show file extensions, then it will just look like "NoDpi". Now, when you start Open Dental, it will not be dpi aware. <div class="Note">Note: This should not be confused with the other similar file called NoD2D.txt, which is discussed in <a href="graphics.html">Graphics Preferences</a></div>
</p>
<p>2. (#1 is better because it will continue to work after each update, but you should be aware of this other option) Windows has a feature that allows you to turn off the dpi awareness for one application at a time. On the Open Dental executable or shortcut, right-click and select <b>Properties</b>, then <b>Compatibility</b>. Click <b>Change high DPI Settings</b>. Check <i>Override high DPI scaling behavior.</i> Change the <i>Scaling performed by</i> to <i>System</i>.</p>
<h2>Remote Apps</h2>
<p>If you are using Remote Apps, then you will probably want to add the NoDpi.txt file as described above.</p>
<p>There is also an intermittent issue if using Remote Apps on Server 2019. A maximized window can get shifted down and to the right by 8 pixels, but the mouse clicks still register at the old locations, resulting in frequent erroneous clicks. There is an override that turns off our custom borders and uses Microsoft borders instead. Go to C:\Program Files (x86)\Open Dental\. Manually add an empty text file called <b>"NoCustomBorders.txt"</b>. But if you use this option, you must also set Open Dental to be dpi unaware, usually by adding "NoDpi.txt" to the application folder.</p>
<p>4/12/2021-There is another issue that can happen with Remote Apps when you repeatedly drag to resize a window. It does not happen on all workstations. A thick black rectangle can appear at the size of the previous drag resize. The mouse then gets stuck temporarily on this erroneous rectangle. This is not a major issue because users rarely resize a window repeatedly. It also does not crash the program, and further attempts at resizing can be successful. We do not understand why it's doing that. It might not even be unique to Open Dental.</p>
<h2>Window Resizing</h2>
<p>It was technically difficult to implement the Zoom feature. We had to build our own layout system. This results in some artifacts when resizing any window:</p>
<ul>
<li>Resizing by dragging corners jumps as the painting struggles to keep up with the mouse. It looks jittery.</li>
<li>At the end of a resize, it can get "stuck" on your mouse for a moment and end up a different size than you intended. Just slow down a little. Pause your mouse for a moment after you release the button. This will give the software time to catch up.</li>
<li>If dragging the title away from maximize, the entire window will flicker away from the mouse to the "restore" size and position before jumping back to the mouse. Just hold the mouse button down and wait for it to catch up.</li>
<li>If you restore a minimized window from the task bar, it can be slightly bigger than when you minimized it. This is usually only noticeable with repeated minimize and restore.</li>
<li>A maximized window can still be resized by grabbing the edges. This can actually be an advantage in some situations. You can maximize and then drag an edge so that it only fills half the screen. The annoyance is that some users are used to slamming the mouse over to the left to use the <a href="modules.html">Module</a> buttons. You will need to retrain yourself to aim for the middle of the desired module button.</li>
<li>When you drag a window to a high dpi monitor, it can hang for a moment while it redraws the new size. Just keep the mouse down and move slowly while it catches up.</li>
<li>Snap to left or right by dragging does not work. Use the WindowKey-ArrowLorR key instead.</li>
<li>Snap to one of the four corners does not work.</li>
<li>If Open Dental is spanning two monitors, and you click Maximize, it will maximize to the monitor with the greatest percentage, as expected. But it will also leave a narrow 8px vertical ribbon on the other monitor. Avoid this by dragging to a single monitor before clicking Maximize.</li>
<li>To resize a window, you will need to grab the actual border. This is consistent with older versions of Windows, but is different than the current Windows behavior where there are no borders and you must grab <i>outside</i> the border to resize.</li>
<li>Previously, you could right click on the title bar of a window to get a drop down menu which contained Restore, Minimize, Close, etc. This no longer exists, and you must user the buttons at the upper right.</li>
</ul>
<br/><p>We are aware of all these issues. We are working on ways to improve performance and eliminate some of these artifacts, but it will not happen soon. The artifacts are tolerable. We feel that the advantages of having zoom far outweigh the resizing annoyances.</p>
<h2>Zoom Artifacts</h2>
<p>The zoom feature is not perfect, especially with high dpi monitors. This version of Open Dental (v 23.1) is much better, but still has imperfections that might not even interfere with usage. <a href="zoomartifacts.html">Zoom Artifacts</a> lists all known artifacts that we do not consider bugs: </p>
<p>&nbsp;</p>
<p>&nbsp;</p>
</div>
</div>
</body>
</html>```
