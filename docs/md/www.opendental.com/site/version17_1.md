Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Version 17.1

See [Versions](versions.html).

Version 17.1 was released on 6/29/2017. EHR certified 2014 edition.

Note: Open Dental 17.1 requires a minimum 1280 x 768 resolution. Before updating, please evaluate your monitors and determine if you need to upgrade.

Appointments

* New tool changes providers on future appointments based on the providers assigned to the operatory. [Update Provs on Future Appts](../manual/updateprovsfutureappts.html)
* [famRecallDue] static text field in Sheets will only include family members that are due for a recall and are not scheduled. [Static Text Fields Descriptions](../manual/statictextfields.html)
* [dueForBWYN] and [dueForPanoYN] static text fields now take disabled recall into account based on date and family balance. [Static Text Fields Descriptions](../manual/statictextfields.html)
* Filter the Unscheduled List by procedure. [Unscheduled List](../manual/unscheduled.html)
* Updated labels on blockout Cut-Copy-Paste tool to reflect accurate behavior.

Billing

* Set a specific time of day to automatically run daily aging (e.g. non-peak hours). [Miscellaneous Setup](../manual/miscsetup.html)
* Update eStatement credentials without clearing the billing list. [Billing List](../manual/billinglist.html)
* Option to send a statement directly to the Patient Portal. [Statement Window](../manual/statementwindow.html)
* Scheduled date shows in Recurring Charges window. [Recurring Charges](../manual/recurringcharges.html)
* Preference to use the transaction date as the Payment date (instead of the scheduled recurring charge date) when running Recurring Charges. [Account Module Preferences](https://www.opendental.com/manual/modulesetupaccount.html)

Chart Module

* Use slider on the tooth chart to show procedure changes to the tooth chart over time. [Graphical Tooth Chart](../manual/graphicaltoothchart.html)
* When a medication is marked as 'discontinued' in eRx, the same medication will be marked 'discontinued' in Open Dental upon refresh of the Chart module. [eRx Medications](https://www.opendental.com/manual/erxMedications.html)
* New preference to prompt user on how to handle fees when a provider changes on a procedure. [Chart Module Preferences](https://www.opendental.com/manual/modulesetupchart.html)
* For Canada, lab fee procedures now show on claims and lab fee estimates are based on the coverage of the associated procedure. [Canada Lab Fees](../manual/canadalabfees.html)

Claims and Claim Payments

* Process claim payments via virtual credit cards using X-Charge or PayConnect. [Finalize Claim Payments](../manual/claimpayfinalize.html)
* Process ERA 835s from a central window. Options to filter ERAs by date, amount, clinic, carrier, trace or check #, and status. [Electronic EOBs (ERA 835s)](../manual/claimsERA835.html)
* Finalize Payment button added to the Electronic Remittance Advice (ERA) window. [Electronic EOBs (ERA 835s)](../manual/claimsERA835.html)
* Option to turn on/off automatic download of ERA 835s from Electronic Dental Services (EDS). [Electronic Dental Services (EDS)](../manual/eclaimseds.html)
* Supplemental payments can have negative writeoff amounts. [Supplemental Insurance Payments](../manual/claimpaymentsupplemental.html)
* Preference to force users to finalize insurance payments from the Batch Insurance window only. [Manage Module Preferences](https://www.opendental.com/manual/modulesetupmanage.html)
* Finalize zero dollar claim payments so you can scan and view EOBs. [Finalize Claim Payments](../manual/claimpayfinalize.html)
* Date Sent Orig field added to Edit Claim window to record original send date of claim. [Edit Claim Window](../manual/claimedit.html)
* Date Sent field auto-populated when claim is sent. If resent, label changes to Date Resent and date is updated. [Edit Claim Window](../manual/claimedit.html)
* Checkbox added to printed medical claim form 1500 to indicate 'Assignment of Benefits'. [1500 HCFA Claim Form'](../manual/claimform1500.html)
* Attach a Claim Error Code to the status history of a claim. [Edit Claim - Status History Tab](../manual/claimtabstatus.html)
* Preference determines which procedure description is used on printed claims when chart procedure code differs from a base procedure code description. [Family Module Preferences](https://www.opendental.com/manual/modulesetupfamily.html)
* Assign outstanding claims to specific users for follow-up. [Outstanding Insurance Claims Report](../manual/reportoutins.html)
* Logged on user and date/time received is captured on the procedure level when an insurance payment is received. [Receiving Insurance Payments](../manual/claimreceive.html)
* Claim Type: Other window now shows plan type in column. [Claim Types](../manual/claimtypes.html)
* Claim Identifier added as an optional item to add to Claim Forms. [Claim Form Setup](../manual/claimforms.html)

Clinics

* Mobile Web supports clinics. Filter information by clinic the user has access to. [Using the Mobile Web](../manual/mobilewebuse.html)
* External ID field added for mapping purposes. [Clinic Names, Contact Info, and Defaults](../manual/clinicsetup.html)
* Set clinic-specific billing filter options. [Billing Options](https://www.opendental.com/manual/billingfilter.html)
* Option to search for patients associated to clinics that are hidden. [Selecting Patients](../manual/patientselect.html)
* When using QuickBooks and clinics, select the 'class refs' which will be available when sending deposits to QuickBooks. [QuickBooks](../manual/quickbooks.html)
* Clinics can only be hidden, not deleted. [Clinic Names, Contact Info, and Defaults](../manual/clinicsetup.html)

Commlogs

* Add auto notes to commlogs. [Communications Log](../manual/commlog.html)
* Preference to auto save commlogs every 10 seconds if changes have been made. [Chart Module Setup](https://www.opendental.com/manual/modulesetupchart.html)

Dropbox enhancements

* Works with statements, email and claim attachments, summaries of care, wiki files and more. [Dropbox](../manual/dropbox.html)

eConfirmations

* Sign up for eConfirmations using the eServices Signup Portal. [eConfirmations Set up and Sign up](../manual/econfirmationsetup.html)
* Stop sending of eConfirmations for appointments with a specific confirmation status. [Appointment Confirmation Status](../manual/confirmationstatus.html)
* Stop the automatic update of the appointment confirmation status when the eConfirmation is sent. [Appointment Confirmation Status](../manual/confirmationstatus.html)
* Setup wizard removed. [eConfirmations Set up and Sign up](../manual/econfirmationsetup.html)

eReminders

* Stop sending of eReminders for appointments with a specific confirmation status. [Appointment Confirmation Status](../manual/confirmationstatus.html)
* Select the status to apply to emailed and texted eReminders in Confirmation List Setup. [Confirmation List Setup](../manual/confirmationsetup.html)
* Setup wizard removed. [eReminders Set up](../manual/ereminderssetup.html)

Email Inbox: [Email Inbox - Receive and Send Messages](../manual/emailinbox.html)

* Compose new messages and reply to received messages.
* View messages that you have sent.
* Search emails based on specific criteria.
* Email Inbox is non-modal (other windows can be open at the same time).

eServices

* Use the eServices Signup Portal to sign up for eServices. [eServices Signup Portal Help](../manual/signupportalhelp.html)
* Set patient portal features in the Signup Portal. [Patient Portal Setup](../manual/portalhostedbyod.html)

Integrated Texting

* Sign up for Integrated Texting using the eServices Signup Portal. [Integrated Texting Sign up](https://www.opendental.com/manual/textintegratedsignup.html)
* Monthly limit is a per-clinic limit that applies to every clinic. [Integrated Texting Sign up](https://www.opendental.com/manual/textintegratedsignup.html)
* Change monthly limits in the Signup Portal. [Change Monthly Limits](../manual/textintegratedmonthlylimit.html)
* View usage summaries on the Texting Services tab. [Usage Summary](../manual/textintegratedusage.html)
* Send Web Sched Recall reminders via integrated texting. [Web Sched Recall](https://www.opendental.com/manual/webschedrecall.html)

Orthodontics

* For each column in the Ortho Chart, option to enter an internal name and display name. [Ortho Chart Setup](../manual/orthochartsetup.html)
* Print button added to Ortho Chart. [Ortho Chart](../manual/orthochart.html)
* Header on Ortho Chart printout reflects chart name and selected tab. [Ortho Chart](../manual/orthochart.html)
* Add an electronic signature stamp in the Ortho Chart for the person currently logged in. [Ortho Chart](../manual/orthochart.html)
* Option to define procedures that can be considered orthodontic placement procedures (used to determine the Date Start for claims created using the Auto Ortho Claim tool). [Ortho Setup](../manual/orthosetup.html)
* Option to override the Date Start on the Ortho Case tab. [Ortho Case](../manual/orthocase.html)

Payment Plans

* Attached to Payment Plan checkbox removed from Payment window and replaced with label indicating the number of splits attached to a plan. [Payment Plan window](../manual/paymentplanpatient.html)
* When patient has a payment plan and a payment is entered, a prompt will ask the user whether the payments should be attached to a plan or not. [Entering Payments to a Payment Plan](../manual/paymentplanpayment.html)

Payments

* Procedure code columns added in Pay Split Manager. [Pay Split Manager](https://www.opendental.com/manual/paysplitmanager.html)
* Preference for 'Payments prompt for auto splits' includes option to force allocated payments to have pay splits attached to a procedure. [Account Module Preferences](https://www.opendental.com/manual/modulesetupaccount.html)
* Changing the provider on a completed procedure attached to a pay split will also change the provider on the pay split. [Editing Procedure](../manual/procedureedit.html)
* When allocating a prepayment, new credit filter options when selecting procedures (include all, only explicitly attached, exclude all). [Prepayments](https://www.opendental.com/manual/prepaymentpatient.html)

Reports

* Insurance Payment Plans Past Due Report lists insurance payment plans with balances that are overdue. [Insurance Payment Plans Past Due Report](../manual/reportinspayplanpastdue.html)
* Uniform Data Systems (UDS) report interface for the FQHC sealant measure. [Federally Qualified Health Centers](https://www.opendental.com/manual/federallyqualified.html)
* Option to cancel a query when it is running. [Run a Query](../manual/queryoverview.html)
* Option to print Graphic Reports or export as PDF. [Graphic Reports](../manual/reportsgraphic.html)
* Appointments Report header includes information about selected providers. [Appointments Report](../manual/reportappts.html)
* Unearned Income report uses complex reporting system. [Printing Reports - Complex Report System](../manual/reportcomplex.html)
* Option to include writeoff estimates and adjustments in the Production and Income report. [Production and Income Report](../manual/reportprodinc.html)
* Option to include writeoff estimates in the Aging of A/R report. [Aging of Accounts Receivable (A/R) Report](../manual/reportaging.html)
* Option to calculate aging by patient or guarantor in the Aging of A/R report. [Aging of Accounts Receivable (A/R) Report](../manual/reportaging.html)
* Option to include procedures with no insurance estimates in the Procedures not Billed to Insurance report.
* Filter the Treatment Finder Report by clinic. Users only see clinics they are restricted to. [Treatment Finder Report](../manual/reporttreatfinder.html)
* Treatment Finder Report "TP Date Since" now includes same-day treatment. [Treatment Finder Report](../manual/reporttreatfinder.html)
* In the Outstanding Insurance Claims report, new option determines whether the date a claim was last sent shows, or the date the claim was originally sent shows. [Outstanding Insurance Claims Report](../manual/reportoutins.html)

Security

* Option to force users to change their password at next login attempt when passwords are required to be 'strong' and their password does not meet the criteria. [Security](../manual/security.html)
* After five consecutive failed log-on attempts, a user will be temporarily locked out of Open Dental, the CEMT, and/or the Mobile Web for 5 minutes or until the account is manually unlocked. [Security User Profiles](../manual/securityusers.html), [CEMT Security](../manual/cemtsecurity.html)
* After a patient merge, history for both the merge 'from' and 'to' patient can be viewed in the Audit Trail. [Audit Trail](../manual/audittrail.html)
* Reports - Daily permission allows/blocks a user from running daily reports for adjustments, payments, procedures, and writeoffs. [Permissions](../manual/permissions.html)
* Daily - View All Providers permission allows/blocks a user from viewing other provider information in a daily report. [Permissions](../manual/permissions.html)
* Production and Income, View All Providers permission allows/blocks a user from viewing other provider information in the Production and Income report. [Permissions](../manual/permissions.html)
* Patient Restriction Edit permission allows/blocks user from changing the 'Appointment Scheduling is Restricted' checkbox. [Permissions](../manual/permissions.html)
* Patient Billing Type Edit permission only allows/blocks user from changing billing type. [Permissions](../manual/permissions.html)
* Graphics Edit permission allows/blocks user from changing graphic settings. [Permissions](../manual/permissions.html)
* Sheet Delete permissions allows/blocks user from deleting sheets associated with a patient. [Permissions](../manual/permissions.html)
* Update Custom Tracking permission allows/blocks user from updating tracking status from the Outstanding Insurance Report. [Permissions](../manual/permissions.html)
* Insurance Plan Ortho Edit permission allows/blocks user from editing insurance plan ortho information. [Permissions](../manual/permissions.html)
* Insurance Plan Edit permission is required to add or edit discount plans. [Permissions](../manual/permissions.html)

Tasks

* Option to collapse/expand large tasks. Determine default behavior in Task Options. [Tasks Area](../manual/tasksarea.html)
* Add auto notes to tasks. [Create Tasks](../manual/tasks.html)
* Right click on a URL in a task note to open it in a browser. [Create Tasks](../manual/tasks.html)

Time Clock / Time Cards [Time Card Setup](../manual/timecardsetup.html)

* Visual changes to Time Card Setup window.
* Ability to delete multiple pay periods at once.
* Not able to create pay periods that overlap existing pay periods.
* Preference to hide pay periods that are older than six months.

Treatment Plans

* Treatment plan layout is determined using sheets. Classic mode is discontinued. [Customizing Treatment Plans using Sheets](../manual/sheetstreatplan.html)

Web Forms

* When retrieving Web Forms, email address and phone number are also considered when matching forms to patients. [Retrieve Submitted Forms](../manual/webformsretrieve.html)
* When entering data in linked Web Forms, once first name, last name, and birth date are entered, they are inherited on each subsequent form. [Web Forms: What the Patient Sees](../manual/webformspatient.html)
* Default host server address redirects to https://patientviewer.com. [Upload Web Forms](../manual/webformsupload.html)
* URL arguments for Dental Office ID, Web Sheet ID and Next Form ID updated. [Upload Web Forms](../manual/webformsupload.html)

Web Sched New Patient: [Web Sched New Patient](https://www.opendental.com/manual/webschednewpat.html)

* Sign up for Web Sched New Patient using the eServices Signup Portal. [Web Sched New Patient: Sign up an Set up](../manual/webschednewpatsetup.html)
* Enhanced interface allows patient to choose appointment date/time using a calendar. [Web Sched New Patient: What the Patient Sees](../manual/webschednewpatsees.html)
* Embed Web Sched New Patient into your practice website. [Web Sched New Patient: Sign up an Set up](../manual/webschednewpatsetup.html)
* Change the interface color theme when embedding in your website. [Web Sched New Patient: Sign up an Set up](../manual/webschednewpatsetup.html)
* Set up Web Sched New Patient Appt Types as 'reasons for appointment'. [Definitions: Web Sched New Patient Appt Types](../manual/definitionswebschednewpatappttypes.html).
* Customize a help message that shows when a patient is selecting an appointment type. [Web Sched New Patient: Sign up an Set up](../manual/webschednewpatsetup.html)
* Create blockouts in the appointment schedule that allow Web Sched New Patient appointments. [Web Sched New Patient: Sign up an Set up](../manual/webschednewpatsetup.html)

Web Sched Recall: [Web Sched Recall](https://www.opendental.com/manual/webschedrecall.html)

* Sign up for Web Sched New Patient using the eServices Signup Portal. [Web Sched Recall: Sign up and Setup](../manual/webschedrecallsetup.html)
* Enhanced interface allows patient to choose appointment date/time using a calendar. [Web Sched Recall: What the Patient Sees](../manual/webschedrecallsees.html)
* Create blockouts in the appointment schedule that allow Web Sched Recall appointments. [Web Sched Recall: Sign up and Setup](../manual/webschedrecallsetup.html)
* Send Web Sched Recall notifications via Integrated Texting (automated or manual). [Web Sched Recall: Sign up and Setup](../manual/webschedrecallsetup.html), [Recall List](../manual/recalllist.html)
* Manual Web Sched Recall reminders sent from the Recall List are aggregated for multiple family members. [Recall List](../manual/recalllist.html)

[Wiki Lists](../manual/wikilists.html)

* Right click on a URL in a wiki list to open it in a browser.
* Search option in wiki lists filters results.
* Advanced search option added to wiki lists.

Recall List and Confirmation List Setup windows divided into separate windows. [Recall List Setup](../manual/recallsetup.html), [Confirmation List Setup](../manual/confirmationsetup.html)
 "Show Graphical Tooth Chart" has been removed from Treatment Plan Module preferences. [Treatment Plan Module Preferences](https://www.opendental.com/manual/modulesetuptreat.html)
 Secondary insurance with Carve Out COB type includes deductible in calculation. [Coordination of Benefits (COB)](../manual/cob.html)
 EHR Modified Stage 2 dashboard now shows correct description for Objective 9 - Secure Messaging. [EHR Dashboard](../manual/ehrdashboard1.html)
 Clicking "Add Estimate" on a procedure on an insurance plan will open only the currently existing estimate instead of creating another estimate. [Procedures - Financial Tab](../manual/procedurefinancial.html)
 "Action Needed" toolbar button moved to Alerts menu. [Enter and Approve CPOE Radiology Orders](../manual/ehrcpoeradapprove.html)
 Added a ClinicDesc display field to the Account module and the Chart module. [Customizing Chart Views](../manual/showtabchart.html)
 Add a custom referral type (in addition to referral from and referral to). [Referrals](../manual/referrals.html)
 One referral per provider shows in the Patient Information grid. [Referrals](../manual/referrals.html)
 Dropbox reenabled. [Dropbox](../manual/dropbox.html)
 Dropbox works with statements, email and claim attachments, summaries of care, wiki files and more. [Dropbox](../manual/dropbox.html)
 Create appointments and patients using FHIR RESTful API Service. [Open Dental FHIR - RESTful API Service](../manual/fhir.html)
 Ability to add more messaging buttons. [Messaging Buttons](../manual/messagingbuttons.html)
 User is no longer required to run Open Dental as Admin when using X-Charge. [X-Charge](../manual/xcharge.html)
 Include procedure status in PR1 segment of HL7 inbound ADT messages. [HL7 Generic Message Structure](../manual/hl7genericmsg.html)
 Email PDF button added to the Edit Deposit Slip window. [Deposits and Deposit Slips](../manual/depositslip.html)
 New FeeScheduleHiddenWithPatient DBM unhides fee schedules if they are associated with patients. [Database Maintenance](../manual/databasemaintenance.html)
 Galera enterprise users can manually disable the MySQL integrity check during database maintenance. [Database Maintenance](../manual/databasemaintenance.html)
 DPlan added as option in Display Fields, TreatmentPlanModule. [Display Fields](../manual/displayfields.html)
 Providers marked 'hidden' cannot access eRx. [Edit Provider Window](../manual/providerseditwindow.html)
 Practice by Numbers bridge. [Bridge - Practice by Numbers](../manual/bridgepracticebynumbers.html)
 Carestream bridge name changed to Carestream Ortho/OMS from carestreamdental.com. [Bridge - Carestream](../manual/bridgecarestream.html)
 i-Dixel bridge. [Bridge - i-Dixel](../manual/bridgeidixel.html)
 NewTom bridge. Bridge - [NewTom NNT](../manual/bridgenewtom.html)
 ADSTRA Imaging bridge. [Bridge - ADSTRA Imaging](../manual/bridgeadstra.html)