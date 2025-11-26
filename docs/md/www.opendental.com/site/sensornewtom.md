Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

NewTom Pano

See [Sensor Compatibility](sensorcompatibility.html).

NewTom machines have a Twain driver which should make them compatible with Open Dental.

For assistance with setup of a NewTom machine, contact NewTom/Cefla: <https://ceflamedicalna.com/contact-us/>.

## Troubleshooting

If a NewTom machine is not working in Open Dental, there are several troubleshooting steps to resolve.

**Device Setup**

We have found the driver combination that works best is using NewTom's iCapture\_NT\_4.31 or higher driver set.

In [Imaging Devices](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7imagingdevices.html), double-click the device.

* Check *Show Twain UI*.
* Toggle the *Device Type* to Twain Radiograph. The other option, Twain Multi, is not appropriate.
* Choose the *iCapture Standard interface* driver.

**Antivirus**

Antivirus programs (e.g., Windows Defender, Endpoint Security, etc.) may prevent image transfer. Work with your IT to troubleshoot or configure your antivirus software.

**Disable Multi-image**

In the NewTom iCapture Monitor program, uncheck *Enable multi image transfer*.

**Save to Folder**

In the NewTom TwainToDisk program, choose a destination folder in Settings. In Open Dental, from the Imaging Module, Import dropdown, select Import Automatically. Enter the same file path there as you entered into the NewTom settings.

**Error: There are 1 images not transferred yet to any imaging application.**

Contact NewTom to run a fix to their driver to resolve the issue.