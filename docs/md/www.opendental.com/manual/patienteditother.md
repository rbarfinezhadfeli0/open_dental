Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Edit Patient Information: Other Tab

The Edit Patient Information, Other tab displays miscellaneous patient information.

In the [Edit Patient Information](patientedit.html) window click the Other tab.

![](images/patientEditOther.gif)

**SS#**: Social Security Number. Dashes are automatically added.

* If the *Mask patient Social Security Numbers* preference is enabled, the social security number masks the first 5 digits.
* Users with the *Patient Social Security Number View*  permission can click **View** to see the full number.
* Users without the *Patient Social Security Number View*  permission can only see the last four digits.

**Date of First Visit**: This field is usually updated automatically based on the first appointment or procedure status. See below for *Date of First Visit* logic.

**Student Status if Dependent Over 19 (for Ins)**: Choose a student status for the patient. Used for insurance claims.

**College Name**: Enter the name of the college for the patient. Used for insurance claims.

**Signed Truth in Lending**: Check if patient has signed a Truth in Lending document.

**DoseSpot Access Medication History Consent**: Only visible if DoseSpot is enabled. When checked, consent is given to DoseSpot to access the patient's medication history via SureScripts. Only check this box if the patient has given consent. Consent information is passed to Dosespot from SureScripts when OK is clicked in the Edit Patient Information window. Once consent is given, it cannot be revoked, so the box cannot be unchecked.

## Date of First Visit Logic

This logic assumes that procedures are attached to appointments.

1. When a procedure is charted, regardless of status, and there are no other completed procedures and the *Date of First Visit* is blank, then the *Date of First Visit* is updated to match the appointment date, or procedure date if not attached to an appointment.
2. When charting a procedure and the procedure status becomes Completed, the *Date of First Visit* is populated by the date of the completed procedure if the *Date of First Visit* is blank or less than seven days old.
3. If there is an appointment the *Date of First Visit* is populated by the day but if the appointment is deleted and there are no completed procedures then the *Date of First Visit* is cleared.
4. If an appointment is flagged as a New Patient Appointment and there are no completed procedures, the *Date of First Visit* is changed when the appointment moves to match the new appointment date.

Typically, the *Date of First Visit* is today's date but the following are times in which the date can be a date other than today:

1. Adding a Repeating Charge for a future charge date changes the *Date of First Visit* to the first Repeating Charge date.
2. Scheduling an appointment for a future or past day changes the *Date of First Visit* to match the day selected in the Appointment Module.
3. Setting a procedure complete in the Chart Module uses the oldest procedure date.
4. Adding procedures through Appointment Types sets the *Date of First Visit* to the date of the appointment the procedures are attached to.
5. Adding a procedure using Quick Add buttons sets the *Date of First Visit* to the date of the appointment the procedures are attached to.
6. For customers using an HL7 interface and creating procedures via HL7, the *Date of First Visit* is set to the procedurelog.ProcDate of the first received procedure in the HL7 interface.