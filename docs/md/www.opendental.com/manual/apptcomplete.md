Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Set Appointment Complete

When a patient is finished with their appointment, set the appointment complete to change the appointment color and complete the attached procedures.

In the [Appointments Module](appointments.html), select the appointment. In the toolbar, click **Complete**

![](images/apptsetcomp.gif)

Alternatively:

* Right-click on the appointment. Select *Set Complete*.
* In the [Chart Module](chart.html) Progress Notes, right-click the appointment. Click *Set Complete*.
* In the [Edit Appointment](aptedit.html) window, change the status to *Complete*, then click **OK**.

Several [Preferences](preferences.html) affect behavior when setting an appointment complete.

* *Allow setting future appointments complete*
* *Allow setting appointments without procedures complete*
* *Allow setting procedures complete*
* *Procedures Prompt for Auto Note*
* *Allow future dated transactions*

When an appointment is set complete, the following changes occur:

* The appointment status changes to complete.
* The status of each attached [Procedure](procedureedit.html) is changed from treatment planned (TP) to complete (C).
* The provider for each procedure is assigned automatically based on the [Appointment](aptedit.html) settings.
* Default [Procedure Notes](procedurenotes.html) are copied into each procedure.
* The procedure date is set to today's date.
* For advanced users:
  + Sets the **SiteNum** for each procedure to be the same as **patient.SiteNum**.
  + Sets appointment **InsPlan1** and **InsPlan2** according to the current coverage.
  + Syncs recall.

Note:

* If the appointment provider does not match the provider on at least one attached procedure, there is a prompt.
* Manually changing a procedure's status to complete on the Procedure Info window only changes the status. It does not change the procedure date or copy default procedure notes.

## Appointment Texts

If [Appointment Texts](appointmenttexts.html) are enabled, and *Opt in Prompt on Appt Complete* is checked, a prompt appears when an appointment is set complete and the patient has not yet opted in or out of Appointment Texts. Staff must read the prompt to the patient and obtain verbal consent to allow Appointment Texts.
![](images/apptTextOptIn.png)
 If the patient does not consent to appointment texts, uncheck the box and click Close.