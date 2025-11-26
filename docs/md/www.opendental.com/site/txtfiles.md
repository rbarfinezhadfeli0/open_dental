Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

txt Files

[Network and Computer Setup](computernetworksetup.html)

Occasionally, users may experience visual annoyances on a workstation when using Open Dental. To address these issues, users can create one or more of the following text files to cause the workstations to behave differently.

To add any of these files, go to the Open Dental installation directory, typically **C:\Program Files (x86)\Open Dental\**. Right click, New, Text Document. If you see "New Text Document.txt", rename it to one of the choices below. Most users will just see "New Text Document", which means you should rename it, but exclude the hidden ".txt".

## NoGraphicsHardware.txt

If windows in Open Dental are displaying as blank, use this to turn off graphics hardware acceleration and instead use software rendering. Added in version 25.2.4 and 25.1.34. This utilizes the computer's CPU rather than graphics hardware. This can be necessary on certain computers like laptops that use integrated graphics chips. While hardware acceleration can be finicky, software rendering always works. The downside, and the reason we don't just use software rendering for all customers, is that certain text boxes may have text appear bouncy or blurry when typing.

## NoDpi.txt

If the font appears too large, cut off, or squished together, turn off DPI Awareness. There are two different ways to do this. One is to add the NoDpi.txt described here. The other is described in [Zoom](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7zoom.html) under the Windows Scaling section. Turning off DPI Awareness may cause the workstation to lose access to features using WebView2.

## NoCustomBorders.txt

If mouse clicks are registering in the wrong place, turn off custom borders. This is an intermittent issue if using Remote Apps on Server 2019. A maximized window can get shifted down and to the right by 8 pixels, but the mouse clicks still register at the old locations. Turning off custom borders removes the Help icon from the Open Dental title bar. To access the Help feature, in the main menu, click Help, then select an Online Help option.

## NoD2D.txt

If Open Dental is crashing on startup (with Event Viewer error referring to Direct2DWrapper), missing module buttons, or is at an unacceptable 5% background CPU usage, turn off DirectX. When using this solution, icons may appear a little fuzzy when using Zoom.