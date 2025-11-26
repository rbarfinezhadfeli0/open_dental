Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Screening Patient Temperature

Patient temperatures can be tracked using an Appointment Field Def.

Create an [Appointment Field Def](appointmentfields.html) to record and view patient temperatures.

![](images/apptFieldDefTemperature.png)

Tracking temperatures in an Appointment Field Def, allows staff to record the temperature before a patient is seen for treatment.

The temperature can be viewed within the Edit Appointment window, or can be added to the [Appointment View](appointmentviews.html) to view from the [Appointments Module](appointments.html) at a glance.

![](images/apptFieldDefApptView.png)

## Create the Appointment Field Def

To create the appointment field, go to Setup, Appointments, Appointment Field Defs. Click **Add** to create the field.

There are two methods for tracking temperature:

**Record Exact Temperature**
 Set the **Field Type** to *Text*.
![](images/apptFieldDefTemperatureText.png)
 This allows the user to type in the temperature for each patient.

**Select a Temperature Status**
 Set the **Field Type** to *PickList*. Then enter options.
![](images/apptFieldDefTemperaturePickList.png)
 This allows the user to select the status from the pick list. Enter each status on its own line.

## Add the Temperature Field to the Appointment View

To add the temperature to an Appointment View, go to Setup, Appointments, Appointment Views. Double-click on the Appointment View to open [Appointment View Edit](appointmentvieweditwindow.html).

The Temperature field is listed under *Appt Field Defs*. Select *Temperature*, then click the **Right** arrow to move the field to the *Main List*.

![](images/apptViewAddTemperature.png)

Use the **Up** and **Down** arrows to move the field up or down in the Main List. Double-click the field to move it to the upper-right or upper-left corner.

![](images/apptViewAddTemperatureMove.png)

Once the temperature is entered for a patient, it displays on the appointment.