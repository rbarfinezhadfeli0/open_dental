Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Public Health Screening

Practices utilizing Public Health can complete public health screenings.

In the [Main Menu](mainmenu.html), click Tools, **Public Health Screening**.

![](images/screeningGroups.gif)

Use the public health screening tool to add screening groups, set permissions, and enter screening information. [Public Health](publichealth.html) must be turned on.

Setup:

* In [Preferences](preferences.html), determine whether screenings use custom screening forms (sheets) or the classic form.
  + Disable the preference, *Screenings use Sheets*, to use the [Public Health Classic Screening](publichealthscreeningclassic.html).
  + Enable the preference, *Screenings use Sheets*, to use a [Public Health Custom Screening](publichealthscreeningcustom.html).
* Add Screening Groups.
* Set Screening Permissions.

Screening groups already set up for the selected date range will list. If you change the date range, click **Refresh** to update the list:

* Click **Today** to insert today's date.
* Click **left or right arrow** to move back or forward one day.
* Enter a custom date range in the **From/To** fields.

## Add screening groups

Typically a screening group is a classroom of children, but it can be as large as an entire school. Each group has the same date, screener, and location. If you revisit the same school later, it is considered a separate group because it will have a different date.

1. On the Edit Screening Group window, click **Add** to add a group, or double click an existing group to edit.
   ![](images/publicScreeningGroup.gif)
2. Enter general information about the screening group.
   * **Date**: The date the screening is taking place.
   * **Description**: A description of the screening group.
   * **Screener**: The screener name. If a provider is selected, this field will automatically populate.
   * **Or Prov**: If a Provider is doing the screening, select their name.
   * **County**: The County where the screening is occurring.
   * **School**: The Site of the screening.
   * **Location**: The place of service.
3. Add the patients to be screened.
   1. Click **Add** to open [Select Patient](patientselect.html).
   2. Select the patient and click **OK**.
       As patients are added, their name will show in the *Patients for Screening* grid with a permission status of unknown.
4. (optional) If using a custom screening form, click the **Sheet** dropdown to select the form for this screening. The default is the internal sheet. The form can also be selected at the time of the screening. Once selected, the setting is saved with the screening group.

Note:

* Double click a patient to open the [Edit Patient Information](patientedit.html).
* If needed, patients can be added via the Select Patient window.
* To remove a patient, highlight then click **Remove**.
* Anonymous Screenings: Usually each person screened will have a patient record in Open Dental and permission to be screened. If there is no patient record, or a patient doesn't have permission, you can enter an anonymous screening. Simply click **Add Anonymous** at the bottom of the Edit Screening Group window.

## Set screening permissions

Only patients with a screening permission of *Allowed* will be screened. Right-click on a patient then select their permission level.

![](images/publicScreeningPermission.gif)

The options are **Unknown**, **Allowed**, **No Permission**, **Refused**, **Absent**, **Behavior**, and **Other**.