Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Proc Appt Colors

When the *ProcsColored* field is added to Appointment Views, procedures within a defined code range can show in a different text color.

In [Appointment View Setup](appointmentviewsetup.html), click **Proc Colors**.

![](images/procApptColors.png)

Click **Add** to create a new Proc Code Range or double-click an existing code range to edit.

![](images/procApptColorEdit.png)

* **Code Range**: Enter the procedure code range the text color to apply the text color.
* **Text Color / Change**: Select the color to apply.
* **Show previous date** (optional): Check to show the last date one of the procedures within the range was completed. The date (mm/yy) is always the most recent of any code in that range. To list the most recent date of a specific procedure code, add another range for a single procedure code.

**Delete**: Remove the Proc Code Range.

Click **Save** to finish creating a new Proc Code Range or keep changes to an existing Proc Code Range.

Note:

* Changes are reflected immediately when creating new appointments. For existing appointments, changes are reflected on an individual appointment when saving changes. The Appt Procs tool in [Database Maintenance](databasemaintenance.html), Tools tab can be run to sync Proc Appt Colors for all existing appointments.
* Proc Colors can only be used in the Main List of an appointment and cannot display in the Upper-Right or Lower-Right areas.