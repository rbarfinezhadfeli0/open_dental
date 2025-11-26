Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Patient Fields

Custom patient fields are fields that can be added to various areas of the program.

In the [Main Menu](mainmenu.html), click Setup, Family/Insurance, **Patient Field Defs**.

![](images/patientFieldDefs.png)

Custom Patient Fields can show in several areas including:

* Patient Information area of the [Family Module](family.html).
* Patient information area of the [Account Module](account.html).
* Patient Information area of the [Chart Module](chart.html).
* Patient Fields area of [Ortho Chart](orthochart.html).
* [Appointment Views](appointmentviews.html).

Use the **Up** and **Down** arrows to reorder Patient Field Defs. Click **Add** to create a new field.

**Display patient fields that have been renamed or hidden**:

* Checked: When a Field Def is in use by a patient, renaming or marking the field as hidden, causes the old field and any entered data to show in gray text at the bottom of the Patient Information area.
* Unchecked: When a Field Def is in use by a patient, renaming or marking the field as hidden causes entered data to be hidden from the Patient Information area.

## Add or Edit Patient Fields

Click **Add** or double-click an existing field to edit.

![](images/patientFieldDefEdit.png)

**Field Name**: Enter the field label.

Note: Data entered in a patient field is tied to the field name. If editing a patient field name, any data already entered in the field is hidden, and essentially a new field is created. To view data tied to the original field name, revert to the original name, or create a new field with the same name.

**Field Type**: Select the type of field.

* Text: Users can enter any freeform text.
* PickList: Users select from a list of items. Enter one item on each line. Answers are attached to patients as plain text.
* Date: Only allow users to enter dates. These dates are attached to patients as plain text rather than as a formal date.
* Checkbox: Create a single checkbox that users can use to indicate yes or true.
* Currency: Only numeric values are allowed. Values are converted to currency (e.g., 1 is converted to $1.00).
* CareCreditStatus: This field is added by default. Users who do not have the CareCredit integration enabled can hide this field. For CareCredit users, this field updates automatically based on Quickscreen results. Once in use, this field cannot be renamed. The three available statuses are:
  + Pre-Approved
  + Unable to Pre-Approve - Refer Patient to Credit Application
  + Cardholder

**Hidden**: Patient field defs in use cannot be deleted. Check to hide them instead.

## Location of the Patient Field

Custom patient fields can be available to display in all patient information areas (Chart, Account, Family, Ortho Chart), or you can set patient fields to only be available for specific patient information areas.

To display patient fields in the Family, Account, and Chart Module patient information areas, add the PatFields to the corresponding [Display Fields](displayfields.html) category.

On the Patient Field Defs window, click **Setup** to open the Field Display window.

![](images/patientFieldDefSetupmenu.png)![](images/patientFieldSetup.png)

**Field Location**: Click the dropdown to select the location. Options include:

* Account: Fields available for the Display Field category AccountPatientInformation.
* AppointmentEdit: Fields available in the Edit Appointment window. Uses [Appointment Field Defs](appointmentfields.html).
* Chart: Fields available for the Display Field category ChartPatientInformation.
* Family: Fields available for the Display Field category PatientInformation.
* OrthoChart: Fields that display in the Patient Fields area of the Ortho Chart.
* GroupNote: Fields available in a Group Note. (Orion users only)

**Visible** vs **Hidden Fields**: Determine which fields should be visible and which should be hidden. To move a field to a different grid, highlight it, then click the right/left arrow.

* Visible Fields: Fields that show in the Ortho Chart, or when PatFields is added to the corresponding Display Field category.
* Hidden Fields: Fields that do not show.

Patient Field Defs that are not in use or fields in use (i.e., a value has been entered into the field) but not added to an appointment view can be hidden. Fields in use and added to an appointment view cannot be hidden; a warning displays when attempting to hide these fields.

## Using Patient Fields

To enter data into a patient field, double-click the field.

![](images/patientFieldsExample.png)

Options vary depending on the Field Type and setup.

![](images/patientFieldEdit.png)

**Auto Note**: This button is only available for *Text* Field Types in the Ortho Chart. Click to enter an [Auto Notes](autonotes.html).

Click **OK** after selecting or entering informating to save.