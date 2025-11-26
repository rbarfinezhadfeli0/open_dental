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

# Version 4.3

See [Versions](versions.html)

Released on 7/27/06

**Treatment Plan:** Print 3D tooth chart. Option to show a column for standard fees. Subtotal option which gives the totals for each column at the bottom of each group of prioritites. Grand totals now show at the bottom of the grid. Sorting changed to show items with priorities first. Insurance columns don't show if patient doesn't have insurance. Layman's terms added to procedure codes. Option to use insurance maximums and deductibles when displaying patient portions. Grid now prints the same as on the screen, including cell wrap and totals.

**Custom patient fields:** The ability to add extra fields to patients for special situations. For instance you could add fields for HIPAA signed, second email, patient's web site, pager number, driver's license, hospital ward, or anything else.

**Diseases:** A checklist for each patient. Used for medical conditions as well as allergies.

**Pt Info Terminal:** A way for a new patient to enter their own information from the waiting room. The receptionist controls the terminal from another computer. Can also be used to let patient update their info if it has changed. New patients can check off items in list of diseases.

**Medical History Questionnaire:** Customized list of questions and answers added to pt info terminal. Only used for new patients.

**DatabaseIntegrityCheck.exe:** A new standalone tool was added so that the tables can be checked without opening up the program.

**Rx Alerts:** Crosslink Diseases to Rx definitions so that an alert is triggered for allergies, etc when writing an Rx.

Improved bridge to NewPatientForm.com
 Ability to choose color for background of tooth chart. Defaults to gray instead of blue.
 X12 disallow XX on 2010AA NM108 unless medical claim
 Provider edit window no longer allows dash in SSN/TIN.
 Premed flag added. Also shows on appointments
 Grid style updated in Rx, Rx Setup,
 Added RDL function Query.GetParameterValue().
 Progress notes now sort better, taking priority, tooth number, and code into account.
 Premed flag can now show on appointments.
 Ins Plan synchronization refined and simplified slightly. Added Search by GroupName and GroupNum.
 Fixed a number of small bugs in plan synchronization. Version 4.2 and earlier should not be used by offices that do synchronization.
 Combine Ins Plans
 Rdl reports able to be launched directly from within the program.
 Program links: Option to pass patnum as a parameter in the name of the file to launch.
 When adding an InsPlan, use the MedicaidID as subscriber number if present rather than the SSN.
 Schick bridge rewritten.
 DateFirstVisit update logic changed a little bit to try to preserve first visit dates after conversions.