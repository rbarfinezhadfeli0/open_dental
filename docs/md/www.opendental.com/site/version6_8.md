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

# Version 6.8

See [Versions](versions.html)

Version 6.8 was released on 12/22/2009.

**Appointment Module:** Day and week navigation buttons enhanced. Search box is more visible. In appointment views, added option to only show operatories for scheduled providers. [Appointments](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointments.html). [Appt Views](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointmentviews.html).

**Security:** Added permission for TreatPlanEdit, includes date limitation. Added permission for viewing Production and Income report. Added permission to prevent timecard entry deletion. [Security](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7security.html).

**Billing:** Added filter to exclude families with procedures not sent to insurance. This is important for larger organizations where billing is done in a separate department. Without this filter, the billing department could accidentally send statements before the claims were created. [Billing](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7billing.html).

**Graphical Chart:** Save a copy of the 3D graphical chart to the Images module. These snapshots are especially important for pedo offices. [Chart](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7chart.html) module.

**Replication:** All primary and foreign keys have been increased from 32 bit to 64 bit, both in the database and in the program. Users can now set key ranges for each server, and Open Dental is aware of which server it 's connected to. All remaining tables have been enabled for replication. Different AtoZ folders can be set for each server. [Replication](replication.html).

**Writeoffs:** The user now has full control over the estimated writeoffs that show in the "discount" column in the TP module. They can be overridden. [Claim Proc](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7claimprocedure.html).

**Unearned Income:** If using accrual basis accounting, paysplits can now be assigned an unearned income type such as prepayment or refund due. Total unearned income shows at the top of the Account module and in two new reports. [Accrual](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7accrual.html).

**Recall:** Added option for max number of reminders. Recall list can now be filtered by number of reminders. Recall list stays open and can be minimized. Commlog (reminder) entries can be made more easily from recall list. Recall for a patient can be disabled until their balance drops below a certain level, and it can also be disabled for a certain amount of time. Manual recalls which do not use triggers can now also be used. [Recall](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7recall.html). [Recall List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7recalllist.html).

**Tasks:** Notes can be appended to a task even if someone else in the office already changed the note. No more annoying message about not allowed to change. [Tasklist](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7tasklists.html).

**Confirmations List:** Confirmations can now be e-mailed. [Confirmation List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7confirmationlist.html).

**Bridges:** Added bridge to [Ewo](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7bridgeewoo.html).

**Minor Changes:**
 Added group name and group number to display in Family module.
 Email recall added variables for NameF and NameFL.
 Age added to letter merge.