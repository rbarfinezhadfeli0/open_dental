Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Label Layout

Printable labels can be customized to meet the practice's needs.

In [Sheets](sheets.html), double-click on a custom sheet with the type of Label.

![](images/sheetLabel.gif)

Alternatively, in Sheets:

* Click **New** and choose *Label* as the Sheet Type to create a new label from blank.
* Select an existing Custom *Label* sheet and click **Duplicate** to create a copy of an existing label.
* Select the existing Internal *Label* sheet and click **Copy** to create a copy of a default label that can be edited.

There are four Label sheet types:

* LabelAppointment: Prints appointment information.
* LabelPatient: Prints patient information.
* LabelCarrier: Prints insurance carrier information.
* LabelReferral: Prints referral information.

Also see: [Sheet Def Properties](sheetproperties.html) and [Sheet Field Types](sheetsaddelements.html).

To customize a Label sheet type, see [Edit Sheet Def](sheetsetup.html).

Open Dental has 9 internal label sheets. Labels can be customized by duplicating an internal sheet or creating a new custom label. To print a single label, see [Labels](labels.html).

| Internal Sheet Description | Type | What prints |
| --- | --- | --- |
| Label Patient Mail | LabelPatient | patient's first name, last name, address |
| Label PatientLFAddress | LabelPatient | patient's last name, first name, address |
| Label PatientLFChartNumber | LabelPatient | patient's last name, first name, chart number |
| Label PatientLFPatNum | LabelPatient | patient's last name, first name, patient number |
| Label Patient Radiograph | LabelPatient | patient's Last Name, First Name, birthdate, primary provider name and today's date and time |
| Label Carrier | LabelCarrier | insurance carrier name, address |
| Label Referral | LabelReferral | referral name, address |
| Label Appointment | LabelAppointment | patient's first and last name, appointment date and time, length |

By default, when **Label** is clicked in the [Main Toolbar](toolbar.html), the internal Label Patient Mail prints. To change the label that is printed, assign a different label in [Sheet Def Defaults](sheetdefaults.html) *Label assigned to patient button*.

![](images/sheetLabelButton.png)