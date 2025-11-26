Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Chart Module

The Chart [Module](modules.html) is where the clinical information is entered and organized for a patient.

![](images/chart.png)

![](images/YouTube_PlayButton_15px.png) See our [Chart Module playlist](https://www.youtube.com/playlist?list=PLyjZ9PCVynCkrtlgrAR0MSazd7Ez9-Z0R).

Other options:

* To view only clinical information, see [Show Features](showfeatures.html).
* Define colors in [Definitions: Chart Graphic Colors](definitionschartgraphiccolors.html).
* Customize the layout in [Chart Layout](layout.html).

## Chart Toolbar

![](images/chartToolbar.png)

* **Print**: Launch a print preview of Progress Notes. When the Hospitals feature is enabled in [Show Features](showfeatures.html), printout includes date and signature lines.
* **New Rx**: Create a single [Rx / Prescription](rx.html).
  + **Rx Manage**: Create and print multiple prescriptions at once. See [Rx Manage](rxmanage.html).
* **eRx:** Create an electronic prescription. If using DoseSpot, opens the [DoseSpot eRx / Prescription](dosespotuse.html) interface. If the logged-on user is a Proxy user, a prompt displays to select a provider before launching the DoseSpot interface. If using EnsoraeRx (formerly NewCrop eRx), opens the [Ensora eRX / Prescription](newcrop.html) interface. If eRx is not enabled for the practice, an error displays. Click the dropdown to view additional options.
  + **Refresh**: Manually copy new electronic prescriptions to the Progress Notes and Medication List.
  + **Pending Prescriptions**: View prescriptions that have been added for the patient but not yet sent to the pharmacy.
    - If using DoseSpot, the number of pending prescriptions displays. Click to view pending prescriptions in the DoseSpot interface.
    - If using Ensora eRx, the number of pending prescriptions does not display. Click to view pending prescriptions in the Ensora interface.
  + **Refill Requests**: View requests for a prescription refill sent by the patient's pharmacy.
    - If using DoseSpot, the number of refill requests displays. Click to view refill requests in the DoseSpot interface.
    - If using Ensora eRx, the number of refill requests does not display. Click to view refill requests in the Ensora interface.
  + **Transaction Errors**: View errors associated with a prescription that has failed to reach the pharmacy.
    - If using DoseSpot, the number of transaction errors displays. Click to view transaction errors in the DoseSpot interface.
    - If using Ensora eRx, the number of transaction errors does not display. Click to view transaction errors in the Ensora interface.
* **LabCase**: Create new [Lab Cases](labcaseedit.html).
* **Perio Chart**: Enter periodontal information in the [Perio Chart](perio.html).
* **Ortho Chart** :Only available when *Show Ortho button and tab in Chart Module* is enabled in [Preferences](preferences.html). Open the [Ortho Chart](orthochart.html), an alternate method of keeping track of visits. Ortho Chart entries can also be viewed from the Ortho tab. Click the dropdown to open a specific tab when multiple tabs are set up.
* **Consent:** See [Consent Form](consentforms.html).
* **Tooth Chart**: Click to open dropdown options. Choose *Show Big* to open the [Big Graphical Tooth Chart](chartbig.html). Choose *Save to Images* to save a copy of the tooth chart to the [Imaging Module](images.html).
* **Exam Sheet**: Create an [Exam Sheet](examsheets.html).
* **CCD**: Open the [Continuity of Care Document (CCD)](ehrccd.html) window.
* **EHR**: Launch the [EHR Dashboard](ehrdashboard1.html) (EHR users only).
* **Layout**: Allows switching between different versions of the [Chart Layout](layout.html). Click the drop down to select a custom layout. Click the button to create a new layout (stored as a custom [Sheet](sheets.html)). Layout selection affects the logged-on user only. To change the default chart layout see [Sheet Def Defaults](sheetdefaults.html).
* **Bridge buttons**: Additional bridge buttons display when enabled in [Program Links](programlinks.html).

## Graphical Chart

![](images/chartGraphical.png)

The [Graphical Tooth Chart](graphicaltoothchart.html) shows all restorative treatment that has been performed or is planned for the patient. Drag the slider bar under the tooth chart to view procedure changes to the tooth chart over time.

* Customize procedure status colors in Definitions: Chart Graphic Colors.
* Customize the type of graphic on the [Procedure Code](procedurecodeedit.html) (Paint Type).
* Select freehand drawing options on the Draw tab.
* Control which procedures are shown on the graphical chart on the Show tab.
* **Odontogram Notes**: The white text box below the tooth chart can be used for any notes that are not pertinent to the patient's treatment. The history of these notes is not saved or tracked. This text box supports [Right-Click Options](rightclicktextboxes.html).

## Tabs

![](images/chartTabs.png)

To show/hide tab details, click the currently selected tab.

* **Enter Treatment**: Enter and chart procedures. See [Enter Treatment](entertreatment.html).
* **Missing/Primary**: Record missing teeth, and mark primary/permanent teeth on the graphical tooth chart. See [Missing/Primary Teeth](missingteeth.html).
* **Movements**: Indicate tooth movement on the graphical tooth chart. See [Tooth Movements](movements.html).
* **Planned Appts**: If treatment is needed, set up the patient's next appointment. See [Planned Appointments](apptplanned.html).
* **Show**: Set up different views for the Progress Notes grid. See [Show Chart Views](showtabchart.html).
* **Draw**: Freehand draw on the graphical tooth chart. See [Draw on Tooth Chart](chartdrawing.html).
* **Ortho**: Only available when the preference, *Show Ortho button and tab in Chart Module*, is enabled. Displays the Chart in [Ortho](ortho.html) mode to view chart hardware and Ortho Chart notes.

## Patient Info

![](images/chartPatInfo.png)

Patient information is in the lower left. The fields that appear are defined in [Display Fields](displayfields.html). Double-click a white row to open [Edit Patient Information](patientedit.html).

Note: [Patient Fields](custompatientfields.html) only show if there are PatFields added to *Fields Showing* in Display Fields, ChartPatientInformation.

A summary of medical information appears in pink/light red by default. To change the color of the medical area, see [Definitions: Misc Colors](definitionsmisccolors.html). Double-click on a medical row to open the [Medical Chart](medical.html).

## Progress Notes

![](images/chartProgress.png)

The grid title and items that show in the Progress Notes area are determined by the options selected for the active Chart View under the Show tab.

* The color for specific types of entries can be customized in [Definitions: Prog Note Colors](definitionsprognotecolors.html).
* If the preference, *Use provider color in chart*, is enabled, rows for Completed and Existing Complete procedures are filled with the [Provider](providerseditwindow.html) color of the treating provider.
* Completed procedures may use the *Existing Other* color when the logged-on user has *Chart graphics color distinguishes current provider* enabled. See [User Settings](usersettings.html) for details.

To edit an item in the Progress Notes, double-click on it. Right-click to view additional options.

Items in the Progress Notes are sorted in the following order:

1. Date (oldest on top)
2. Type (task, procedure, sheet, etc.)

Procedures are sorted in the following order:

1. Date (oldest on top)
2. Status (treatment planned procedures show before completed procedures)
3. Priority (highest to lowest based on the order on priority options)
4. Tooth number (no tooth number first, then lowest to highest)
5. Procedure Code (lowest to highest)

See [Show Chart Views](showtabchart.html) for additional information on filtering the Progress Notes section.

**Right-Click Options:**  Right-click options change depending on items selected. Unavailable options are greyed out. Some right-click options may be hidden depending on a user's [Permissions](permissions.html)

* **Delete**: Delete the selected item. Completed procedures and group notes attached to at least one completed procedure cannot be deleted from here.

+ The warning *At least one procedure must be attached to the appointment* appears when a selected procedure is the last remaining on an appointment and the preference, *Appointments require procedures* is enabled. Click OK to close the warning. No procedures are deleted. De-select one or more procedures attached to an appointment to delete other procedures.

* **Set Complete**: Set appointments, procedures, and tasks complete. Procedure dates are updated based on the date set in the Enter Treatment tab, unless the procedures are attached to an appointment, in which case the appointment date is used.

  Note: Procedures can only be set complete when the preference, *Allow setting procedures complete*, is enabled.
* **Set Existing Current**: Set a procedure to a status of Existing Current. Procedure dates are updated based on the date set in the Enter Treatment tab.
* **Set Existing Other**: Set a procedure to a status of Existing Other. Procedure dates are updated based on the date set in the Enter Treatment tab.
* **Edit All**: Change the date, provider, or clinic (if enabled) for selected procedures.
  ![](images/editAllProcs.png)
* **Group Note**: Attach a single clinical [Procedure Group Note](procgroupnote.html) to multiple procedures that have been set complete and have the same procedure date.
* **Print Progress Notes**: Print the progress notes as they currently show on screen. Each page of the printed notes include the patient name, ChartNumber (if any), and page number. When Hospitals is enabled in Show Features, printout includes date and signature lines.
* **Print Day for Hospital**: In Show Features, Hospital must be checked. Print only completed procedures, a photo of the patient (if available), and a signature line at the bottom for the staff to sign.
* **Group for Multiple Visits**: Group together related procedures that are done during multiple visits (e.g., crowns). When a procedure is set complete the procedure status displays as *Complete (In Process)* until all other procedures in the group are set complete as well.
* **View Multivisit Group(s)**: View grouped procedures, and ungroup as needed. See [Procedure over Multiple Appointments](procsmultipleappts.html).
* **Print Routing Slip**: Print a single routing slip for the selected appointment.

Use the Show Tab, Search box to search through progress notes using a word or phrase.

Note: Forms designed using sheets can only be deleted by double-clicking the form, then deleting it from the Fill Sheet window. Deleted sheets are not permanently removed from the database. They can be viewed in Audit mode and also restored if needed.

**Paging (<<, <, >, >>)**: As progress notes become longer, use the arrows or numbers to navigate through progress note pages. Paging only appears if the patient has more than 500 items in their progress notes (commlogs, procedures, tasks, emails, etc). When the progress notes are sorted by a column, paging is disabled for the results until the Chart Module is refreshed."

## Image Tabs

![](images/chartImageTabs.png)

The tabs below Patient Info reflect Image categories that have been marked as *Show in Chart module* in [Definitions: Image Categories](definitionsimagecat.html). This is useful to view items like radiographs and photos directly in the Chart Module.

* Image files display a thumbnail preview.
* The height of the images section can be made taller or shorter by dragging the splitter.
* To quickly minimize/maximize the area, click on the current tab.
* Click the All tab to show all images for all tabs.
* Double-click an image to open the image full size in a new window. The new window can be dragged to another monitor if multiple monitors are used, and it can remain open while returning to the Chart. When an image is displayed, the following right-click options are available:
  + Copy: Copy the selected image.
  + Flip Horizontally: Flip the image orientation horizontally. Orientation saves when closed.
  + Rotate Left: Rotate the image to the left. Rotation saves when closed.
  + Rotate Right: Rotate the image to the right. Rotation saves when closed.
  + Rotate 180: Rotate the image 180 degrees. Rotation saves when closed.
  + Info: Open the Item Info window.
* Double-clicking a non-image file (e.g., xls, txt) opens that file in the default program for that file type.