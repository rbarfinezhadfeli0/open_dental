Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Lab Case

Track and manage Lab Cases and create Lab Slips from the Edit Lab Case window.

In the [Chart Module](chart.html) toolbar, click **LabCase**.

![](images/labCaseEdit.png)

Alternatively:

* In the [Edit Appointment](aptedit.html) or Edit Planned Appointment Window, click **Lab** in the left panel, then **New**.
* In the [Treatment Plan Module](treatmentplan.html) toolbar, click **LabCase**.

![](images/YouTube_PlayButton_15px.png) See our video: [Lab Cases](https://youtu.be/OG6ThB2xlAw).

Before creating a Lab Case, set up dental [Laboratories](laboratories.html).

* **Patient**: Patient associated with Lab Case.
* **Appointment:** The scheduled appointment this Lab Case is attached to. Click **Detach** to remove the association with the appointment without deleting the Lab Case.
* **Planned Appt:** The [Planned Appointment](apptplanned.html) this Lab Case is attached to. Click **Detach** to remove the association with the appointment without deleting the Lab Case.
* **Provider**: Provider associated to Lab Case.
* **Fee**: For tracking and informational purposes only. The fee is not used in any calculation.
* **Invoice Number**: Add an optional invoice number. For tracking and informational purposes only.
* **Lab**: A list of labs added in Laboratory Setup. Select a lab to see available services and turnaround times.
* **Set Due Date**: A list of services and turnaround times defined in Laboratory Setup for the selected lab. The turnaround time is used to calculate a *Date Time Due*.
  + Click on a service/turnaround time to automatically calculate a *Date Time Due*, skipping weekends and holidays (as set in Schedules). Items do not stay highlighted once clicked.
  + Provider schedule is not taken into account.
  + Selecting a service does not track the kind of Lab Case, it only generates the due date.
* **Date Time Due**: Clicking a service/turnaround time listed under *Set Due Date*, automatically calculates a *Date Time Due* or can be entered manually. If left blank, the date time due of 01/01/0001 12:00 AM is automatically inserted when Lab Slips or sheets are generated.
* **Instructions**: Instructions to display on the generated [Lab Slip](labslips.html). Right-click to insert a [Quick Paste Note](quickpastenoteedit.html) or [Auto Note](autonotes.html).
* **Tracking Dates:** Used to track the progress of the Lab Case. Click **Now** to insert the current date and time. This is useful for managing [Lab Cases](labcasemanage.html).

+ Created: When the Lab Case was created.
+ Sent: When the case was finished being packaged and set out to be picked up. It may not actually be picked up until hours later.
+ Received: When the Lab Case was processed by the office staff as having come back from the lab. The box does not need to be opened.
+ Quality Checked: The box has been opened. The case appears to be ready to deliver to the patient. The staff has performed whatever quality checks are needed, including checking contacts, appearance, etc.

**New Slip / Edit Slip**: Generate a new [Lab Slip](labslips.html) or edit/view the existing Lab Slip. Set default Lab Slips for each lab in Laboratory Setup.

* If an [Image Category](definitionsimagecat.html) has been assigned to *LabCases*, a PDF copy of a Lab Slip is saved to the Imaging Module when printed, emailed, or created as a PDF.

**Delete**: Click to delete the Lab Case.

* To instead detach the Lab Case from the current appointment, see Appointment and Planned Appt above.
* If a Lab Slip is attached to the Lab Case, the Lab Case cannot be deleted until the Lab Slip is deleted. Click **Edit Slip** to delete the attached Lab Slip.

Once a Lab Case is created, an entry is added to the [Chart](chart.html), Progress Notes. If it was created within the Edit Appointment or Edit Planned Appointment window, the Lab Case is automatically already attached to the appointment and is ready to be scheduled. If created outside of an appointment, see Attaching a Lab Case to an Appointment below.

## Attaching a Lab Case to an Appointment

Lab Cases should always be attached to an appointment. If an appointment is not yet scheduled, attach the Lab Case to a Planned Appointment. Generally, labs are attached to the delivery appointment (e.g., seat). If a Lab Case is not attached to a planned or scheduled appointment, it is listed as unattached in the Lab Cases list.

To attach the Lab Case to a Planned Appointment, double-click the appointment in the *Planned Appts* tab to open the *Edit Planned Appointment Window*.

To attach to an already scheduled appointment, double-click the appointment itself in the [Appointments Module](appointments.html) to open the *Edit Appointment Window*.

Alternatively, from the Appointments Module, click [Pat Appts](apptspatient.html), and double-click a scheduled or Planned Appointment to open the *Edit Appointment* window.

![](images/labCaseSelect.png)

Click **Lab** in the left panel. A list of Lab Cases already created for this patient, but not attached to an appointment, are listed. Highlight the Lab Case(s) to attach to this appointment and click **OK**.

Alternatively, if the Lab Case has not yet been created, click **New** to create it and attach to the appointment.

The attached Lab Case information is shown in the Lab field.

![](images/labcaseAttached.png)

It is also shown in the appointment itself if the *Lab* field is added to the [Appointment View](appointmentvieweditwindow.html).

![](images/labCaseAppt.png)

Related Link: [Procedure over Multiple Appointments](procsmultipleappts.html).