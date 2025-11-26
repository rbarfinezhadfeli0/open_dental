Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Patterson Imaging Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Patterson Imaging from Patterson Dental Supply Inc**.

![](images/bridgePatterson.png)

Patterson is an imaging software. Website: [www.pattersondental.com](https://www.pattersondental.com/). This bridge only works with Patterson Imaging version 15 or newer.

Note: Patterson appears to have stopped selling their standalone imaging software (Patterson Imaging) as a product that can be used by dentists transitioning from Patterson Eaglesoft Digital Integration to other Practice Management software, like Open Dental.

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on **Additional Properties** to change settings. Enter the **System path to Patterson Imaging ini**.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Details

* The bridge matches patients based on SSN. If SSN is not present, then it matches on FirstName, LastName, BirthDate.
* If no patient is found matching those criteria, then it creates a new patient in Patterson Imaging.
* The Path of file to open can vary depending on where the exe is stored on your computer. It may be **C:\Patterson Imaging\Shared Files\Imaging.exe**

**Patterson Imaging**

We have posted information about Patterson Imaging availability because there may be fewer options for dentists moving from Patterson Eaglesoft with integrated imaging. We want our customers to know this before leaving Patterson Eaglesoft, as they may need to switch to another imaging solution if they do so.

As of 01/22/2018, we have been told that Apteryx and XDR are capable of converting the Patterson Eaglesoft Digital Integration x-rays to their digital software for a fee.

On 3/8/2017, a Patterson representative from the Patterson Technology Center told Open Dental that new Patterson Imaging licenses are no longer available for sale from Patterson and that this had been true since 2/17/2017. We contacted Patterson because multiple customers (Open Dental customers in common with Patterson) called us and told us Patterson was telling them that switching from Patterson Eaglesoft Practice Management software to Open Dental would mean they would not be able to access the images through a new Patterson Imaging installation. We were further told by Patterson that dentists may purchase an existing Patterson Imaging license from another dentist, but even then, Patterson will no longer assist in pointing Patterson Imaging at a database created with Patterson Eaglesoft Digital Integration.