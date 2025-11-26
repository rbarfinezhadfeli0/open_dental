Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Appointment Rules

Appointment rules prevent double booking of a provider's time for certain procedures.

In the [Main Menu](mainmenu.html), click Setup, Appointments, Appointment Rules.

![](images/appointmentRules.png)

Rules can be created for a single procedure code or a range of procedures codes.

Click **Add** to create a new appointment rule, or double-click a rule to edit.

![](images/appointmentRulesEdit.png)

* **Description**: Enter the identifying name.
* **Code Start/End**: Enter the procedure code(s) this rule applies to. For one procedure code, enter the same code in each field. For a range of procedure codes, enter the start and end procedure code.
* **Is Enabled**: Check to enforce the appointment rule. Uncheck to disable the rule.

**Delete**: Click to permanently remove a rule.

Click **OK** to save.

## Logic

* When an Appointment Rule exists, any provider scheduled for an appointment with these procedures can only be scheduled for that appointment during the appointment time in the current [Appointment View](appointmentviews.html). Any other appointments overlapping their provider time on the appointment view are restricted .
  + When attempting to schedule or reschedule an appointment from the [Pinboard](apptpinboard.html) or move an existing appointment for the same provider that overlaps provider time and contains at least one code from the same Appointment Rule as an already scheduled appointment, users receive a warning: *Not allowed to double book*
    ![](images/appointmentRulesWarn.png)
* Only provider appointment time is considered when blocking,. Non-provider time is allowed to overlap.
* If double booking of procedures is allowed (i.e., no appointment rules for a procedure), conflicts show in the Provider [Time Bars](timebars.html) on the appointment schedule.

## WebSched Double Booking

To allow double booking of providers through Web Sched, disable the setting  *Prevent double booking* in [Web Sched New Patient](webschednewpatsetup.html) and [Web Sched Recall](webschedrecallsetup.html). When disabled double booking is allowed, unless otherwise prevented by Appointment Rules.

To prevent double booking for certain Web Sched Appointment Types, create an Appointment Rule that contains procedure(s) corresponding to the Web Sched Appointment Type.