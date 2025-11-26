Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Ez3Di Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Ez3Di**.

![](images/bridgeEz3Di.png)

Ez3Di is an imaging product from Vatech. Website: <https://vatechamerica.com/products/ez3d-i>

If using EzDenti for 2-D imaging, set up the [EzDenti Bridge](bridgeewoo.html).

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on **Additional Properties** to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click Save

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

Open Dental then launches Ez3Di, which picks up the information in the linkage.xml file.

If no file is present, Ez3Di opens with no patient selected.

If the patient is not recognized by Ez3Di, a new patient is created in Ez3Di.