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

# Version 15.2

See [Versions](versions.html).

Version 15.2 was released on 7/20/2015.

**Pay Split Manager:** New tool to manage and allocate payment income to providers and procedures. Improved automatic payment split logic that is based on FIFO. [Income Transfer Manager](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7incometransfermanager.html)

**Payment Plan Improvements:**[Old Payment Plan](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paymentplanpatient.html), [Payment Plan Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportpaymentplan.html)

* Payment plan amortization schedule shows provider, interest, and total amounts.
* Payment schedule, down payment, and number of payments or monthly payment amount are stored in database.
* Payment plan changes are not saved until user clicks OK.
* Payment plan report has options to filter by date range, provider, and clinic, show family balance, and show insurance payment plans and/or patient payment plans. Generated report calculates total amounts by column, sorts by provider, and groups by clinic. Uses [Complex Report System](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportcomplex.html).

**Waiting Room:** [Waiting Room](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7waitingroom.html), [Appointment Module Preferences](https://www.opendental.com/manual174/modulesetupappts.html)

* Use text color to flag patients whose wait time has exceeded a certain value.
* Only show patients in the waiting room if their appointment is scheduled in an operatory that shows in the current appointment view.

**Broken Appointments:**

* Automation for missed appointments now uses the new ADA procedure code D9986. [Break an Appointment](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7apptbreak.html)
* Preference to automatically show the Commlog window when an appointment is broken using procedure code D9986. [Appointment Module Preferences](https://www.opendental.com/manual174/modulesetupappts.html)
* New broken appointment report. [Broken Appointment Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportbrokenappt.html)

**eServices:** Easier identification and management of Listener Service status.

* Listener Service status is monitored regularly and tracked.
* If the Listener Service goes down, user is notified in the interface that eServices are down.
* Restart the Listener Service from the eServices Setup window, Listener Service tab.
* New eServices option in the main menu. [Main Menu](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7mainmenu.html)
* eServicesSetup permission. [Permission](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7permissions.html)

**Central Enterprise Management Tool:** [Central Enterprise Management Tool Setup](cemtsetup.html)

* Create CEMT specific users with their own user groups and permissions and sync to other databases.
* Modify the global lock date. New global lock date preference. [CEMT Security](cemtsecurity.html)
* CEMT user data only visible on audit trail entries and log on window.
* Create custom connection groups. [CEMT Database Connections](cemtconnections.html)

**Minor Changes:**Orthodontic total months for 5010 e-claims.  [Claim - General Tab](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7claimtabgeneral.html)
 Finance Charge Report allows entering a date range. [Finance Charge Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportfinancecharge.html)
 Email Inbox: Preview new e-mails, interface enhancements.
 OpenDentalWebConfig.xml file is auto-generated.
 Open Dental services are automatically stopped when updating versions, then restarted once update is complete. [Update Open Dental Versions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7update.html)
 Set the default provider for a clinic. [Clinic Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7clinicsetup.html)
 Attempts to clock in trigger an alert if the pay period doesn't exist. [Time Clock](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7timeclock.html)
 Unscheduled List is non-modal (e.g. access other windows while Unscheduled List is open). [Unscheduled List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7unscheduled.html)
 Send an unscheduled appointment from the Unscheduled List to the PinBoard. [Unscheduled List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7unscheduled.html)
 Jump to the Chart module from the Unscheduled List. [Unscheduled List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7unscheduled.html)
 Planned Appointment Tracker is non-modal (e.g. access other windows while Planned Appointment Tracker is open). [Planned Appointment Tracker](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appttracker.html)
 Send an unscheduled planned appointment from the Planned Appointment Tracker to the PinBoard. [Planned Appointment Tracker](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appttracker.html)
 Jump to the Chart module from the Planned Appointment Tracker. [Planned Appointment Tracker](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appttracker.html)
 Backup tool checks for sufficient disk space on backup device. [Backup/Restore Tool](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7backuptool.html)
 Ability to change the date of EHR measure events. [Edit Measure Event Dates](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrmeasureeventedit.html)
 EHR measure event audit trail shows any date changes. [Edit Measure Event Dates](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrmeasureeventedit.html)
 EHRMeasureEventEdit permission. [Permission](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7permissions.html)Disable the process signal interval during periods of inactivity. [Miscellaneous Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7miscsetup.html)
 Reset all tooth movement values to zero. [Tooth Movement](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7movements.html)
 Search for deposit entries by payment amount or check number. [Deposits and Deposit Slips](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7depositslip.html)
 View total count of selected deposit line items. [Deposits and Deposit Slips](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7depositslip.html)
 Same for entire family checkbox for wireless phone, work phone, and email. [Patient Edit](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7patientedit.html)
 Invoice note allows multiple lines. [Billing Defaults](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7billingdefaults.html)
 LabCorp HL7 interface for inbound messages. [LabCorp HL7](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7hl7labcorp.html)
 Genoray's Triana bridge. [Genoray Triana](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7bridgegenoraytriana.html)
 Preference determines when e-claims on the Send Claims window are validated. [Manage Module Preferences](https://www.opendental.com/manual174/modulesetupmanage.html)
 Use Database Maintenance to correct invalid default provider numbers on procedure codes. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
 Use Database Maintenance to find insurance payments that are not marked as partial and have no attached claims. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
 Remote connect to Open Dental using Remote Support with Code in Main Menu, Help. [Main Menu](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7mainmenu.html)