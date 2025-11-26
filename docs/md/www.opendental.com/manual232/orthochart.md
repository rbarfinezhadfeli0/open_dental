Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Ortho Chart

The Ortho Chart can be used to keep track of orthodontic visits in a grid format.

In the [Chart Module](chart.html) toolbar, click **Ortho Chart**.

![](images/orthoChart.png)

Alternatively, double-click the Ortho Chart area from the [Ortho Tab](ortho.html).

The information in this window is completely separate from information in the regular patient chart. The Ortho Chart can also be adapted for other purposes unrelated to orthodontics.

![](images/youtubeLogo.png) See our webinar: [Ortho Chart](https://youtu.be/7k__ks94Pu4)

## Initial Setup

In [Ortho Setup](orthosetup.html), enable *Show Ortho button and tab in Chart module* to use this feature.

Users must have the *Ortho Chart Edit (full)* or *Ortho Chart Edit (same user, signed)* [Permission](permissions.html) to make changes or additions to the Ortho Chart. Users without permission will see some buttons in the Ortho Chart disabled.

For information on setting up the ortho chart, see [Ortho Chart Setup](orthochartsetup.html).

## Patient Fields

The information that displays in the Patient Fields grid is determined by [Patient Fields](custompatientfields.html) created by the office. Double-click a field to enter a value.

![](images/orthoChartPatFields.png)

## Ortho Info

The Ortho Info grid displays patient [Auto Ortho](orthoauto.html) information. Only shows if *Show Auto Ortho information in the ortho chart* is enabled Ortho Setup.

![](images/orthoChartOrthoInfo.png)

## User / Signature

The User and Signature information displays if a signature column has been added to a tab.

![](images/orthoChartUser.png)

* **User**: Displays the user that signed a note, if any. Highlight the signature box in a row to display the user.
* **Change User**: Click to change the user who signed the note. Click the signature box to update, select the new provider, enter a signature, then click the signature box again.
* **Signature**: Enter the provider [Electronic Signature](electronicsignatures.html). Validity of electronic signatures is determined by Open Dental. Entries with a valid signature are highlighted green and **Valid** shows in the signature column. Invalid signatures turn the row red and the signature column displays **Invalid**. Signatures may be invalidated by:
  + Changing the patient name.
  + Changing any data in the signed row.
  + Removing the signature box in Display Fields, making changes to ortho chart fields, then adding the signature box.
  + Editing the database outside of Open Dental.

## Ortho Chart

The Ortho chart is customizable based on Ortho Chart Setup. When opening the Ortho Chart, a new row is automatically created for the current date if one does not already exist. The patient's primary provider is associated with this row.

![](images/orthoChartOrthoGrid.png)

* **Date Range**: Display notes for a date range. Click **[...]** to open the Date Range Filter and select options. This date range also affects the date range selected in the Ortho Chart Audit Trail.
* **Tabs**: By default, the Ortho Chart tab displays. Additional tabs can be added in Ortho Chart Setup.
* **Columns**: The columns that display on a tab are customized in Ortho Chart Setup. Click into a cell to enter data.
  + Date and Provider are read only and cannot be edited. To create a row with a different date or provider, click **Add Row**.
* **Add Row**: Click to add a new row to the currently selected tab. Ortho Chart entries are sorted by date (oldest to newest). When a tab is opened, only date entries with data in them show. Entering data on one tab populates all tabs with that date and data if columns are the same.
  ![](images/OrthoChartDate.png)
  + **Date**: Enter the date manually. Alternatively, click **Today** to quickly insert today's date or **Now** to quickly insert today's date and current time.
  + **Provider**: Optional. Select the provider from the dropdown.
  + **OK**: Click to add the new row, then make edits to the columns as needed.
* **Auto Note**: Optional. Click into a cell, then click to use Auto Notes to enter information.
* **Delete**: Highlight a row and click to delete it.
* **Audit Trail**: View historical changes made on a dated entry. Both patient field and ortho chart changes are tracked.
  ![](images/orthochartAudit.png)
  + To see changes for a specific date, highlight the date under **Date Service**. By default, dates selected match the date range selected in the Ortho Chart.
* **Print**: Print the ortho chart grid exactly as it shows when print is clicked. Print in landscape if necessary to fit all columns. In the printout header, the title of the Ortho Chart displays first. The first tab in the list determines the title. The selected tab's title display beneath that. Printing is limited to columns that fit in the first 915 pixels. See [Ortho Chart Setup](orthochartsetup.html).

## Ortho Chart Locking

Ortho Charts can only be edited by one user at a time. By default, the *Locked by* note displays at the bottom with the current user allowed to make edits.

![](images/orthoChartLock.gif)

**Take Control**: Only displays for users with *Ortho Chart Edit* permission. If the Ortho Chart is locked by another user, the Take Control button displays and other buttons is hidden. The user cannot make edits until they click this button to take over editing.

When a user takes control from another user, the current controller's work is saved and can be seen by the new controller.