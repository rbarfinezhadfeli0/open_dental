[![Open Dental Software](resources/logo.png)](../index.html)

503-363-5432

☰

* [Home](../index.html)
* [Trial Version](trial.html)
* [Order](order.html)
* [Documentation](documentation.html)
* [Forum](http://opendentalsoft.com/forum/)
* [Contact Us](contact.html)
* [![](resources/iconSearch.gif)](searchSite.html)

# Version 2.9

See [Versions](versions.html)

## Version 2.9

This minor version was released on 8/17/04 and was only sent to offices that requested it.

**Periodontal Charting:** Basic functionality with fields for pocket depths, recession, MGJ, mobility, furcations, and bleeding. Focuses on speed of entry and editing. By using a very large window to display the information, you can see a lot of information at once. Does not feature any drawings of teeth or graphical viewing of data. See the [Periodontal Charting](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7perio.html) page for more details.

**Public Health :** Race, county, school, grade, and place of service fields added or enhanced along with some utilities and reports. (Thank you to the generosity of the Georgia public health dept for making this possible).

**Comm Log:** More types added. Main interface is now in lower half of Account module. Auto comm log entries in recall.

**Letters:** Generate letters for individual patients directly from their Account screen.

**International:** Canadian procedure codes and claim form. UK procedure codes. Allow unformatted phone entry for providers.

**MySQL Configuration:** The [MySQL Configuration](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7choosedatabase.html) window has been significantly enhanced with drop down lists and indicators, and the ability to install, start, and stop the MySQL service very quickly from within that window. You can also now do fast database switching without closing the program.

**Miscellaneous:**
 Treatment notes section added below graphical tooth chart.
 Added patient.FirstVisitDate.
 If chart number already in use, it now tells you the name of the patient using it.
 Allows unformatted practice phone number for foreign countries.
 Allows non-standard SSN's
 No longer allowed to delete patient unless all account and procedure entries have been deleted first.
 Chart number cleared when setting a patient to status 'deleted', freeing the chart number up for reuse.
 When attaching referrals, it now works as expected for new patients.
 'Set complete' button added within procedure edit window so you won't accidently change the date if you change the status to C.
 If changing an existing procedure, it now deletes the tooth number and/or surfaces if applicable.
 Updates to patient, appointment, and procedure tables now only update changed fields, improving [multiuser issues](refreshing.html) on the network.
 Ins Pending checkboxes added in Family module for Insurance plans.
 If an appointment operatory is moved, but not the time, then it no longer shows, "Move Appointment?". This is so you can quickly change ops.
 Added assistant field to appointments and assistant indicator on each appointment.
 Lab summary for the day added to Appointments module
 Daily production added to Appointments module.
 Allow setting treatment priorities in Chart module without switching to Treatment Plan module.
 Daily Procedure report enhanced to allow grouping by procedure code.
 Provider window automatically enlarges if there are more than 20 providers (for dental schools)
 Place of service field enhanced on HCFA-1500
 Added 2 Provider ID fields to ADA2002 claim form.
 Added Employer field and 3 radiograph fields to ADA2000 claim form.