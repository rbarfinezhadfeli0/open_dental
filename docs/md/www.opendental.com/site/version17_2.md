Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Version 17.2

See [Versions](versions.html).

Version 17.2 was released on 09/12/2017. EHR certified 2014 edition.

Major Changes
**Mobile Web**[Use Mobile Web](../manual/mobilewebuse.html)

* Add, delete, and move appointments in your appointment schedule.
* Set appointment and confirmation status, appointment type, and appointment notes.
* View and select operatories.
* Headquarters added to Clinic menu.

**Reports:**

* Restrict user access to specific reports. [Report Setup - Security Permissions](../manual/reportsecurity.html)
* Report setup divided into four tabs: [Display Settings](../manual/reportdisplaysettings.html), [Security Permissions](../manual/reportsecurity.html), [Report Server](../manual/reportserver.html), [Misc Settings](../manual/reportmiscsettings.html).
* Run the Production and Income Reports on a report server. [Report Setup - Report Server](../manual/reportserver.html)
* Option to re-run aging for all selected months in current A/R graphic reports. [Graphic Reports - Setup Mode](../manual/reportsgraphicsetup.html)

**Substitution Codes:** Control which procedures codes are downgraded by insurance plan. [Procedure Estimate Downgrades](../manual/downgrades.html)

**Task Reminders**

* Reminder tasks pop up when they are due. [Task Reminders](../manual/taskreminders.html)
* Change any task to a reminder task type, and vice versa. [Create Tasks](../manual/tasks.html)
* New option to set a one-time task reminder. [Task Reminders](../manual/taskreminders.html)

**Setup Wizard:** Run a setup wizard to help enter basic setup information. [Setup Wizard](../manual/setupwizard.html)

Changes by Category
**Account**

* Filter recurring charges by date. [Recurring Charges](../manual/recurringcharges.html)
* Option to consider writeoff estimates in aging. [Aging of A/R Report](../manual/reportaging.html)
* Force Duplication for PayConnect is available when using and EMV terminal. [PayConnect: Process a Credit Card Payment](https://www.opendental.com/manual/payconnectpayment.html)
* Ability to electronically sign PayConnect transactions when using an EMV terminal. [PayConnect](https://www.opendental.com/manual/payconnect.html)
* When adding an adjustment attached to a procedure, if the remaining balance is less than 0, user will receive warning message. [Adjustments](../manual/adjustments.html)
* For prepayments, view date and amount of allocations via the Payment window. [Prepayments](https://www.opendental.com/manual/prepaymentpatient.html)
* Date column label changed to Proc Date in Payment window, Payment Splits grid. [Payment window](../manual/payment.html)
* (procedure date) field removed from Pay Split window. [Pay Split window](../manual/paysplit.html)
* When attaching a procedure to a pay split, the Select Procedure window shows more details. [Pay Split window](../manual/paysplit.html)
* Account module preferences organized into three tabs. [Account Module Preferences](https://www.opendental.com/manual/modulesetupaccount.html)
* Preference for 'Invoices payments grid show writeoffs' determines if insurance writeoffs are included in the Payments grid on invoices. [Account Module Preferences](https://www.opendental.com/manual/modulesetupaccount.html)
* Preference for 'Patient Payments allow future dated debits' determines if users can enter future-dated payments. [Account Module Preferences](https://www.opendental.com/manual/modulesetupaccount.html)
* Preference for 'Patient Payments Use' determines which clinic is assigned by default to patient payments. [Account Module Preferences](https://www.opendental.com/manual/modulesetupaccount.html)
* If patient is assigned a billing type that has been 'hidden', (hidden) will show next to the billing type. [Edit Patient Information window](../manual/patientedit.html)
* Code Range and date filters added to Planned Appointment Tracker. [Planned Appointment Tracker](../manual/appttracker.html)

**Appointments**

* Preference to set a time, in seconds, to delay a click when loading the Edit Appointment window. Useful to prevent accidental clicks. [Appointment Module Preferences](https://www.opendental.com/manual/modulesetupappts.html)
* User option to only view data for the current exam in the Perio Chart vs entire history. [Perio Chart](../manual/perio.html)
* In the Unscheduled List, Status column renamed UnschedStatus and new AptStatus column. [Unscheduled List](../manual/unscheduled.html)
* New options for broken appointments. Includes logic for cancelled appointments (D9987). [Break an Appointment](../manual/apptbreak.html), [Appointment Module Preferences](https://www.opendental.com/manual/modulesetupappts.html).
* Date range filter added to the Unscheduled List. [Unscheduled List](../manual/unscheduled.html)

**eServices**

* Limit the amount of Web Sched Recall text messages sent per batch. [Web Sched Recall Setup](../manual/webschedrecallsetup.html)
* Change an appointment confirmation status' 'Don't Send' and 'Don't Change' setting from the eReminder and eConfirmation Setup window. [eReminder Setup](../manual/ereminderssetup.html), [eConfirmation Setup](../manual/econfirmationsetup.html)
* The lead time (in days) for eConfirmations and eReminders determines the time window messages can be sent (1 - X days). [eReminder Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ereminderssetup.html), [eConfirmation Setup](../manual/econfirmationsetup.html)
* Info button added to the Signup Portal. [eServices Sign Up Portal - Basic View](../manual/signupportalbasic.html), [eServices Sign Up Portal - Advanced View](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7signupportaladvanced.html)
* Add &amp;AFNAB=N to a Web Form URL to stop 'next forms' from automatically inheriting the first name, last name, and birthdate from the previous form. [Upload Web Forms](../manual/webformsupload.html)
* Option to allow parents or legal guardians to schedule a minor's Web Sched New Patient Appointment. [Web Sched New Patient Appointment Setup](../manual/webschednewpatsetup.html)

**Claims**

* On Insurance Claims window, History grid, added a user column and right click options. ClaimPrinted added as a status and filter option. [Managing Insurance Claims](../manual/claimsend.html)
* Enhancements to Claim Forms window. [Printed Claim Form Setup](../manual/claimforms.html)
* Printed ADA 2012 claim form uses Patient Number for box 23 (PatientID) instead of SSN. [ADA 2012 Claim Form](../manual/claimformADA2012.html)
* Enter Quick Paste Notes when recording claim status history. [Edit Claim window - Status History Tab](../manual/claimtabstatus.html)
* On Denti-Cal claim form, print up to 15 procedures (instead of 10). [Denti-Cal](../manual/dentical.html)
* When creating a preauthorization for a patient with only one active plan, user is no longer prompted to select insurance or relationship to patient. [Preauthorizations](../manual/preauth.html)
* For Canada, when an EOB claim response is created, insurance paid amounts can be automatically entered. For Preauthorizations, the amount paid is entered as an estimate. [ClaimStream](../manual/claimstream.html), [ITRANS](../manual/itrans.html).
* For Canada, preview claim acknowledgments before printing. [Canada: Send Claims and Retrieve Reports](../manual/canadaclaimsend.html)
* The OpenDentalService can process clearinghouse reports. [Clearinghouse Setup](../manual/clearinghouses.html)
* Clearinghouse passwords are masked. [Clearinghouse Setup](../manual/clearinghouses.html)
* Option to block saving 837 files to the claim export path when sending to claims to EDS.  [Electronic Dental Services (EDS)](../manual/eclaimseds.html)
* When matching ERA 835s to claims, the claim identifiers are no longer required to match. [Matching ERAs with Claims](../manual/claimsERAmatching.html)
* Right click on a claim in the ERA window to go to the account. [Process an ERA](../manual/eraprocess.html)
* When finalizing a ERA claim, manually detached claims are not considered. [Process an ERA](../manual/eraprocess.html)
* Print button added to Claim Explanation of Benefits window. [EOB Claim Details](../manual/claimsERAeobdetails.html)

**Clinics**

* Filter auto-ortho claims by clinic. [Auto Ortho Claim Generation](../manual/orthoautoclaim.html)
* Reorder operatories for specific clinics. [Operatory Setup](../manual/operatories.html)
* Filter the Global Fee Update tool by clinic and view progress with a progress bar. [Updating Fees for Treatment Planned Procedures](../manual/feesupdate.html)
* Option to display clinic abbreviation instead of the clinic description in the main title bar. [Miscellaneous Setup](../manual/miscsetup.html)
* Associate a speciality to a clinic. Useful for Patient Clones. [Clinic List](../manual/clinicsetup.html)

**Insurance**

* Set a default billing type for an insurance plan. [Edit Insurance Plan window](../manual/insplan.html)
* Preference to automatically change a patient's billing type when a new primary insurance plan is created and a billing type is set. [Family Module Preferences](https://www.opendental.com/manual/modulesetupfamily.html)
* Edit Insurance Payment window, "Prepaid Insurance Cards" changed to "Virtual Credit Cards". [Finalize the Insurance Payment](../manual/claimpayfinalize.html)
* Carrier Group Name field added to group insurance carrier for query purposes. [Insurance Carriers](../manual/carriers.html)
* Carrier2Address and Carrier2CityStZip added as static text fields. [Static Text Fields](../manual/statictextfields.html)
* Control which procedures codes are downgraded by insurance plan. [Procedure Estimate Downgrades](../manual/downgrades.html)
* For Canada, the 'Assignment of Benefits' checkbox affects whether or not payment amounts from EOBs are automatically imported. [Canada Insurance Plan](../manual/canadainsplan.html)

**Interface Changes**

* Report setup options divided into four tabs: [Display Settings](../manual/reportdisplaysettings.html), [Security Permissions](../manual/reportsecurity.html), [Report Server](../manual/reportserver.html), and [Misc Settings](../manual/reportmiscsettings.html).
* "Birth date" changed to "birthdate" in Web Sched New Patient Appointments and Patient Portal Care Summary. [Web Sched New Patient: What the Patient Sees](../manual/webschednewpatsees.html),  [Patient Portal: What the Patient Sees](../manual/portalpatientsees.html)
* Some one word labels changed to two words. [Tasks Area](../manual/tasksarea.html), [Manage Module](../manual/manage.html), and [Editing Procedures](../manual/procedureedit.html).
* PinBoard changed to Pinboard throughout program. [Pinboard](../manual/apptpinboard.html)
* Updated labels on blockout Cut-Copy-Paste tool to reflect accurate behavior. [Blockouts](../manual/blockouts.html)
* Message that displays when hiding a provider has been enhanced. [Edit Provider Window](../manual/providerseditwindow.html)
* Available field 'ADA Code' changed to 'Proc Code' in Progress Notes for foreign countries. [Customizing Chart Views](../manual/showtabchart.html)

**Patient Clone**

* Create multiple patient clones per patient. [Patient Clones](../manual/patientclone.html)
* Use specialties to differentiate patient clones. Clinics [Definitions - Clinic Specialties](../manual/definitionsclinicspecialties.html).
* Option to place new patient clones in a new family and link to original patient via super family. [Family Module Preferences, Super Family](https://www.opendental.com/manual/modulesetupfamily.html)
* Patient clone relationship information removed from Edit Patient Information, Other tab.
* Patient clone tool buttons added to Family tool bar when Patient Clone is turned on (Add, Synch, Break). [Patient Clones](../manual/patientclone.html)
* When a patient has a patient clone, a new Patient Clones grid shows in the Family module. [Family Module](../manual/family.html)

**Reports**

* Restrict user access to specific reports. [Report Setup - Security Permissions](../manual/reportsecurity.html)
* Run the Production and Income Reports on a report server. [Report Setup - Report Server](../manual/reportserver.html)
* Aging of A/R Report updated to complex report system. [Aging of A/R Report](../manual/reportaging.html)
* Report setup divided into four tabs: [Display Settings](../manual/reportdisplaysettings.html), [Security Permissions](../manual/reportsecurity.html), [Report Server](../manual/reportserver.html), [Misc Settings](../manual/reportmiscsettings.html).
* Sort the Appointments Report by date created or date scheduled. [Appointments Report](../manual/reportappts.html)

**Security**

* Edit Popup (other users) permission allows/blocks user from editing or deleting popups created by other users. [Permissions](../manual/permissions.html)
* InsuranceCarrierCombine permission allows/blocks a user from combining insurance carriers. [Permissions](../manual/permissions.html)
* InsurancePlanCombine permission allows/blocks a user from combining insurance plans. [Permissions](../manual/permissions.html)
* 'Change existing Ins Plan using Pick from List' permission allows user to pick a new plan before dropping a plan. [Permissions](../manual/permissions.html)
* Audit trail entry added for Create Adjustment For Discount Plan permission. [Audit Trail](../manual/audittrail.html)
* Set up automatic Open Dental log in when logged in to a Windows domain user. [Setting up Single Sign on / LDAP](../manual/singlesignon.html)
* When changing the user on a Task, user is prompted to enter their password. [Tasks](../manual/tasks.html)
* Run the Appointment Report by appointment date or date created. [Appointment Report](../manual/reportappts.html)

**Tasks**

* Reminder tasks pop up when they are due. [Task Reminders](../manual/taskreminders.html)
* Change any task to a task reminder and vice versa. [Tasks](../manual/tasks.html)
* New option to set a one-time task reminder. [Task Reminders](../manual/taskreminders.html)

**Miscellaneous**

* Images module defaults to using Internet Explorer's default PDF reader to open PDF images. [Images Module](../manual/images.html)
* Allow backdating and deleting of specific procedures (with a $0 fee) by bypassing global lock date. [Edit Procedure Codes](../manual/procedurecodeedit.html)
* Right click option to block incoming text messages from specific mobile numbers. [Text Messaging Inbox](../manual/textmsginbox.html)
* Set specific sheets (e.g. Exam Sheets) to bypass the Global Lock Date. [Sheet Properties](../manual/sheetproperties.html)
* DBM to fix invalid dates for all date columns. [Database Maintenance](../manual/databasemaintenance.html)
* DateTStamp column added to the LabCase table. [Programming Resources](programmingresources.html)
* OrthoCad bridge. [Bridge - OrthoCAD](../manual/bridgeorthocad.html)
* Static text fields dateLastBW, dateLastExam, dateLastPanoFMX, dateLastPerio, and dateLastProphy are based on the first five characters of the procedure code. [Static Text Fields](../manual/statictextfields.html)
* Ability to cancel out of an auto note, save responses and unanswered prompts, then return at a later time to complete it. [Auto Notes](../manual/autonotes.html)
* Column headers in wiki lists wrap. [Wiki Lists](../manual/wikilists.html)
* Lab Fee field added to Edit Lab Case window. [Creating a Dental Lab Case](../manual/labcaseedit.html)
* Key range columns and 'enable random primary keys' removed from Replication Setup window. Only will show when random primary keys are already enabled. [Replication: Add Servers and Designate a Slave Monitor](../manual/replicationservers.html)
* Option to add a default procedure note for treatment planned procedures. [Edit Procedure Codes](../manual/procedurecodeedit.html)
* On Fill Sheet window, separate buttons for Print and Email. [Filling Out Sheets](../manual/sheetsfillout.html)
* All treatment plan calculations are saved with a treatment plan, regardless of the 'show' options selected at time of save. [Treatment Plans](../manual/treatmentplan.html)
* Commlog button and fields for email address, SS#, Patient Status, and Billing Type added to the Add Family window. [Enter New Patients by Family](../manual/familyadd.html)
* Saved treatment plans will retain the insurance estimate information of the plan at the time of the save, even if it is later dropped and a discount plan is added instead. [Treatment Plan](../manual/treatmentplan.html)
* Additional property added to TigerView bridge to set the DOB year to a four digit format. [TigerView](../manual/bridgetigerview.html)
* Clinical Summ button added to EHR dashboard. [EHR Dashboard](../manual/ehrdashboard1.html)
* Patient List button added to EHR dashboard. [EHR Dashboard](../manual/ehrdashboard1.html)
* Discount plans can be dropped only. Delete option is removed. [Discount Plans](../manual/discountplans.html)
* Warning message displays when changing the name of a custom patient field. [Custom Patient Field](../manual/custompatientfields.html)
* When there is a version mismatch in a 'restored' database, Open Dental must be relaunched and updated before opening the restored database. [Backup/Restore Tool](../manual/backuptool.html)
* Unhandled Exception window has new Copy All, Print, and Quit buttons. Users can only quit Open Dental when a UE appears. [Unhandled Exceptions](../manual/unhandledexception.html)
* Database maintenance fix for missing ebill rows. [Database Maintenance](../manual/databasemaintenance.html)
* Progress bar shows when Database Maintenance closes. [Database Maintenance](../manual/databasemaintenance.html)
* New database maintenance tool to clear an update in progress. [Database Maintenance](../manual/databasemaintenance.html)
* Show Deleted checkbox added to the Provider Merge tool. [Provider Merge](../manual/mergeproviders.html)