Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Imaging Devices

Add sensors to be used with the Capture button in the Imaging Module.

In the [Main Menu](mainmenu.html), click Setup, Imaging, Devices.

![](images/imagingDevices.png)

* **Add**: Click to add a new device.
* **Up / Down**: Highlight a device and click to move it up or down the list.

Click **Add** to add a new device, or double-click a device to edit.

![](images/imagingDeviceEdit.png)

* **Description**: Enter a description for the device. Displays in the [Imaging Module](images.html).
* **Computer Name**: Enter the computer name connected with this device. Leave blank to make available on all workstations.
  + **This**: Click to quickly enter the current computer for this device.
* **Device Type**: Select a device type.
  + Twain Radiograph: Individual sensors. These sensors can still capture a series of images, but each image is displayed before the next one is acquired.
  + Twain Multi: For use with sensors that cannot send individual images (e.g., phosphor plate systems, AT ScanX). As only groups of images are captured and displayed, a mount must be used for capture.
* **Twain Name**: Select the TWAIN device from the dropdown menu.
* **Show Twain UI**: Check to show the options window for the specified TWAIN driver.

Note: Only 32-bit TWAIN drivers are supported.

## Troubleshooting

If errors or issues occur with an imaging device, it is useful to narrow down where the issue is originating.

If issues occur, start by downloading the third-party application,  [Twacker](https://github.com/twain/twain-toolkit/releases/tag/v2.5.0) . Twacker allows users to test the TWAIN drivers on the workstation outside of Open Dental. If the same errors occur when utilizing the Twacker application, then the issue lies with the device or the device driver. When this happens, we recommend reinstalling the device driver. If the device driver is still problematic, reach out to an IT Professional or the device manufacturer to determine the cause.

If the issue does not occur within Twacker, but continues to occur in Open Dental, contact Open Dental Support for troubleshooting assistance.

Dexis sensors using GxTwain drivers require the *Description* field in the Edit Imaging Device window to include the word "Dexis", otherwise xray images are inserted into mounts in reverse order.