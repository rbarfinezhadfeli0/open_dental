Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Operatory Edit

Operatories can be added and edited to meet the needs of the practice.

In [Operatories](operatories.html), click **Add**, or double-click an existing operatory to edit.

![](images/operatoriesEdit.png)

**Op Name**: Enter the label for the operatory in the [Appointments Module](appointments.html). We recommend keeping it short. Two line titles will wrap, but longer titles will be cut off.

**Abbrev (max 5 char)**: Enter the abbreviation (up to 5 characters) to identify this operatory in various lists throughout the program.

**Is Hidden**: Check to mark the operatory as hidden when it is no longer in use.

**Clinic**: Select the clinic associated with this operatory. Defaults to the clinic selected on the Operatories window. When setting up Appointment Views, operatory clinic assignment affects which operatories can be assigned to the appointment view. For example only Clinic A operatories can be assigned to Clinic A appointment views.

**Provider**: Select the default provider assigned to appointments scheduled in the operatory. The provider determines the operatory's color in the Appointments Module (based on the provider's appointment color).

* If providers are restricted to clinics in [User Edit](securityusers.html), only providers available for the selected clinic are options.
* If operatories are assigned to provider time blocks in [Schedule Setup](schedule.html), it overrides the operatory provider.

**Hygienist**: Select the default hygienist assigned to appointments scheduled in the operatory.

**Is Hygiene**: Check to assign the hygienist as the default provider when appointments are scheduled in this operatory.

Note: For Provider Only operatories with Hygienist set to *None*:

* If *Force op's hygiene provider as secondary provider* is disabled in [Preferences](preferences.html) and the patient is assigned a Secondary Provider (i.e., hygienist) in [Edit Patient Information](patientedit.html) the secondary provider is assigned to the appointment (and all hygiene procedures). To prevent this, assign the dentist as both the Provider and Hygienist in the Operatory.
* If *Force op's hygiene provider as secondary provider* is enabled, the Hygienist on the appointment is set to *None* and the Provider is assigned to all hygiene procedures.

.

**Set Prospective**: Mark the operatory for prospective patients only. Users will be prompted to change the status of any patient scheduled in this operatory to *Prospective* ([Edit Patient Information](patientedit.html)). If the appointment is moved to a non-prospective operatory, users will be prompted to change the status to *Patient*. This is useful in large clinics that frequently set tentative appointments for patients that may not show up.

Note: If a patient has an active recall, it will be disabled when their status is changed to *Prospective*.

**Web Sched Settings**: These settings only affect Web Sched eServices.

* **Is Recall**: Consider this operatory when determining available time slots for [Web Sched Recall](webschedrecallsetup.html) appointments.
* **New Pat Appt Types**: Indicates [Web Sched New Patient](webschednewpatsetup.html) Appointment Types associated with this operatory. Only these Appointment Types can be scheduled in this operatory, using Web Sched New Patient.
  + Click **[...]** to select appointment types.
  + Highlight the Appointment Type(s) then click **OK**. Add new types in [Definitions: Web Sched New Patient Appt Types](definitionswebschednewpatappttypes.html).
* **Existing Pat Appt Types**: Indicates [Web Sched Existing Patient](webschedexistingpatsetup.html) Appointment Types associated with this operatory. Only these Appointment Types can be scheduled in this operatory, using Web Sched Existing Patient.
  + Click **[...]** to select appointment types.
  + Highlight the Appointment Type(s) then click **OK**. Add new types in [Definitions: Web Sched Existing Appt Types](definitionswebschedexistingpatappttypes.html).

**Update provs on future appts**: See [Update Provs on Future Appts](updateprovsfutureappts.html) for details.

**Op Type**: Informational only. Select the Operatory Type. Add types in [Definitions: Operatory Types](definitionsoperatorytypes.html).