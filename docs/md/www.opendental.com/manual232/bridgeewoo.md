Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Ewoo Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **EwooEZDent**.

![](images/bridgeEwoo.png)

This bridge was originally designed for EasyDent, an imaging product from ewoousa.com. That website is now defunct, and Ewoo was renamed to Vatech. Website: <https://vatechamerica.com/products/ezdent-i>.

This bridge can also be used for GoodDrs (DrsViewer Pro). <https://gooddrs.us/>.

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
   * EZDent-i, 2.3.6 -or- Older version: replace the Path to open with:**C:\Program Files (x86)\VATECH\EzDent-i\Bin\VTEzDent-iLoader32.exe**
   * EZDent-i, 3.0.0 -or- Newer version: replace the Path to open with:**C:\Program Files (x86)\VATECH\EzDent-i\Bin\VTE2Loader32.exe**
   * Alternatively - VTEzBridge.exe can also be used for either version
3. Double-click on **Additional Properties** to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Details

The bridge sends patient data from Open Dental to an XML text file. Example file:

<LinkageParameter>

<Patient LastName="Smith" FirstName="John" ChartNumber="123">

<Birthday>18/12/1972</Birthday>

<Address>123 Main St, Salem, OR</Address>

<ZipCode>97302</ZipCode>

<Phone>(503)363-5432</Phone>

<Mobile>(503)215-3215</Mobile>

<SocialID>123456789</SocialID>

<Gender>Male</Gender>

</Patient>

</LinkageParameter>

The text file is called linkage.xml, and is created in the same folder on the local computer as the EasyDent program is located.

Open Dental then launches EasyDent, which picks up the information in the linkage.xml file.

If no file is present, EasyDent will open with no patient selected.

If the patient is not recognized by EasyDent, a new patient will be created in EasyDent.

If you receive an error while launching, verify patient information is entered accurately (e.g., address, phone notes, etc.)