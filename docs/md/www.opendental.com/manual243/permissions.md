Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Permissions

In [User Group](securityusergroups.html), there is a list of Permissions for each User Group.

Refer to the table below for details about each permission and its behavior. See [Audit Trail Permissions](audittrailpermissions.html) for a list of permissions that appear in the audit trail.

* Permission: The name of the permission as it appears in the Security window.
* Internal Name: The name of the permission as defined in Open Dental code. This information is useful for programmers and when reading the audit trail.
* Behavior: What the permission allows a user to do in Open Dental. Buttons a user doesn't have permission to use are frequently hidden or grayed out. There are different kinds of behavior:
  + Allow or block access to an area.
  + Edit individual items. This almost always includes delete permission as well. Users without the permission can still see the item.
  + Create new items.
* Lock Dates: User Group Lock Dates and Global Lock Dates work independently of each other. See [Lock Dates](securitylockdates.html).
  + User Group Lock Date: Permissions that can have date or day limits set by user group. For example, only allows users in a user group to change insurance payments if they occur within a set amount of days or before a specific date.
  + Global Lock Date: Permissions affected when a Global Lock Date is set at the bottom of the Security window. The Global Lock Date prevents editing of old items or entry of new backdated items.

Note: When using ODTouch, actions may be grayed out when a user does not have the corresponding permission.

| Permissions | Internal Name | Behavior | User Group Lock Date | Global Lock Date | Date used to calculate |
| --- | --- | --- | --- | --- | --- |
| **Main Menu** |  |  |  |  |  |
| **File** |  |  |  |  |  |
| Graphics Edit | GraphicsEdit | Access and change [Graphics Preferences](graphics.html). |  |  |  |
| Choose Database | ChooseDatabase | Access the [Choose Database](choosedatabase.html) window. |  |  |  |
| Printer Setup | PrinterSetup | Allow access to the Printer Setup window. |  |  |  |
| Setup - Covers a wide variety of setup functions | Setup | Many Setup functions. See ["Setup" Permission](permissionssetup.html). |  |  |  |
| **Chart - EHR** |  |  |  |  |  |
| EHR Emergency Access | EHREmergencyAccess | Gives users with the Security Admin permission temporary access to the Family module if [EHR Emergency](ehremergency.html) Access is turned on. Most users have this anyways. |  |  |  |
| EHR Measure Event Edit | EHRMeasureEventEdit | Edit the date of an EHR measure event (action that affects an EHR numerator). |  |  |  |
| **Advanced Setup** | Advertising |  |  |  |  |
| Replication Setup | ReplicationSetup | Allow access [Replication](replication.html) setup. |  |  |  |
| Show Features | ShowFeatures | Allow access to Show Features. |  |  |  |
| Auto/Quick Note Edit | AutoNoteQuickNoteEdit | Create or edit [Auto Note Setup](autonotesetup.html) and [Quick Paste Notes](quickpastenotessetup.html). |  |  |  |
| **Definitions** |  |  |  |  |  |
| Definition Edit | DefEdit | Add or edit [Definitions](definitions.html). Logs as an entry in the Audit Trail when a definition is edited. |  |  |  |
| **Dental School** |  | Dental School permissions always display but are only active when Dental Schools is enabled in Show Features. |  |  |  |
| Instructor Edit | AdminDentalInstructors | Add or edit providers who are [Dental School Instructors](dsinstructors.html). Must also have Provider Add permission. |  |  |  |
| Student Edit | AdminDentalStudents | Add or edit providers who are [Dental School Students](dsstudents.html). Must also have Provider Add permission. |  |  |  |
| Admin Evaluation Edit | AdminDentalEvaluations | * Users with permission can access/edit [Student Evaluations](dsfillevaluation.html), but not add. * Users without the permission cannot access the area. * Instructors without the permission can access/edit/add but not filter by instructor * Instructors with the permission can access/edit/add and can filter by instructor |  |  |  |
| Schedules - Practice and Provider | Schedules | Alter provider and employee [Schedules](schedule.html). |  |  |  |
| **Security** |  |  |  |  |  |
| Security Admin | SecurityAdmin | Allow access to administrator functions. See ["Security Admin" Permission](permissionssecurityadmin.html). At least one user must have this permission. Tracks changes to permission in Audit Trail. |  |  |  |
| Add New User | AddNewUser | Allow user to add new [User Edit](securityusers.html) from the main menu, Setup, Add User. |  |  |  |
| Manage High Security Properties | ManageHighSecurityProgProperties | Allow user to add or edit a password required for program links. |  |  |  |
| Update Install | UpdateInstall | Allow user to check for and install updates. Users without this permission can still access the [Update](update.html) window, but will not be able to check for or install updates. Logs audit trail entry when Update window is opened and when Open Dental is checked for updates. |  |  |  |
| BadgeId Edit | BadgeIDEdit | Allow a user to edit Badge IDs for users from Setup, [Security Badges](securitybadges.html). Users with the Security Admin permission can edit Badge IDs from User Edit, regardless of this permission. |  |  |  |
| **Lists** |  |  |  |  |  |
| Procedure Code Edit | ProcCodeEdit | Add or edit procedure codes from Lists, Procedure Codes. Logs as entry in Audit Trail when a procedure code is edited from Lists, Procedure Codes. |  |  |  |
| Fee Schedule Edit | FeeSchedEdit | Access [Fee Schedules](feeschedules.html) list or edit fees in [Procedure Codes](procedurecodes.html). |  |  |  |
| Allow Editing Fee Schedule While Receiving Claims | AllowFeeEditWhileReceivingClaim | Allow editing fee schedule in the Edit Procedure Code window when receiving claims. Users with this permission will be prompted if they want to update the allowed fee schedule when receiving claims. It is not possible for a user to have Fee Sched Edit permission but not Allow Editing Fee Schedule While Receiving Claims permission. Only prompts when Blue Book is set to *None* or *Legacy Blue Book*. |  |  |  |
| Provider Fee Edit | ProviderFeeEdit | Enter and delete provider-specific fee schedule overrides. |  |  |  |
| Medication Definition Edit | MedicationDefEdit | Add, edit, or delete medications in the Medication List. |  |  |  |
| Allergy Definition Edit | AllergyDefEdit | Add, edit, or delete an allergy in the Allergies List. |  |  |  |
| Allergy Merge | AllergyMerge | Use the Merge tool in the Allergies List. |  |  |  |
| Problem Definition Edit | ProblemDefEdit | Add, edit, or delete a problem in the Problems List. |  |  |  |
| **Providers** |  |  |  |  |  |
| Provider Add | ProviderAdd | Allow a user to add a new provider. |  |  |  |
| Provider Edit | ProviderEdit | Allow a user to edit an existing provider. |  |  |  |
| Providers - Alphabetize | ProviderAlphabetize | Enable the Alphabetize Provider button on the Provider Setup window. |  |  |  |
| **Clinics** |  |  |  |  |  |
| Clinic Edit | ClinicEdit | Allow a user to access the Clinic List or make edits to a clinic. |  |  |  |
| Unrestricted Patient Search | UnrestrictedSearch | Allow clinic restricted users to search all patients in the database. Allow user to change patient's clinic within the Family module. |  |  |  |
| **Referrals** |  |  |  |  |  |
| Referral Add | ReferralAdd | Add a referral to the main [Referrals](referrals.html) List. |  |  |  |
| Referral Edit | ReferralEdit | Edit or delete a referral in the main Referral List. |  |  |  |
| Referral, Attach to Patient | RefAttachAdd | Attach Referrals to patients. |  |  |  |
| Referral, Delete from Patient | RefAttachDelete | Detach Referrals from patients. |  |  |  |
| **Reports** | Reports | Grant access to [Standard Reports](reportsstandard.html), To block or grant access to specific reports, see [Report Setup: Security Permissions](reportsecurity.html). |  |  |  |
| Production and Income, - View All Providers | ReportProdIncAllProviders | Access [Production and Income](productionincome.html) reports for all providers. This applies to regular reports, and graphic reports. If a provider does not have this permission, they can still view their own reports, but only when they are logged on. |  |  |  |
| Daily Reports - View All Providers | ReportDailyAllProviders | Access [Daily Adjustments](reportdailyadj.html), [Daily Payments](reportdailypayments.html), [Daily Procedures](reportdailyprocs.html), and [Daily Write-offs](reportdailywriteoffs.html) reports for all providers. If a provider does not have this permission, they can still view their own reports, but only when they are logged on. |  |  |  |
| Reports - Graphical Setup | GraphicalReportSetup | Set up and edit [Graphic Reports](reportsgraphic.html). |  |  |  |
| Reports - Graphical | GraphicalReports | View graphic reports. |  |  |  |
| User Query | UserQuery | Run and change variables in *released* [User Query](queryoverview.html). |  |  |  |
| User Query Admin | UserQueryAdmin | Write, edit, and run user queries, save and delete [Query Favorites](queryfavorites.html), and mark queries as *released* or *not released*. |  |  |  |
| CommandQuery | CommandQuery | Run SQL commands (non-SELECT statements) on normal tables in the User Query window. |  |  |  |
| New Claims from Procs Not Billed Report | NewClaimsProcNotBilled | Allows ability to use [Procedures Not Billed to Insurance Report](reportprocsnotbilledins.html). |  |  |  |
| **Tools** |  |  |  |  |  |
| Misc Tools |  |  |  |  |  |
| Medication Merge | MedicationMerge | Access the [Merge Medications](mergemedications.html) tool. |  |  |  |
| Patient Merge | PatientMerge | Access the [Merge Patients](mergepatients.html) tool. |  |  |  |
| Provider Merge | ProviderMerge | Access the [Merge Providers](mergeproviders.html) tool. |  |  |  |
| Referral Merge | ReferralMerge | Access the [Merge Referrals](mergereferrals.html) tool. |  |  |  |
| Audit Trail | AuditTrailAccess | Access the [Audit Trail](audittrail.html). |  |  |  |
| Certifications - Employee Completion | CertificationEmployee | Allow a user to add a Date Completed to a certification. |  |  |  |
| Certifications - Setup | CertificationSetup | Access Certification Setup. |  |  |  |
| Repeating Charge Tool | RepeatChargeTool | Allow a user to run [Repeating Charges](repeatingcharges.html) and the [Database Maintenance](databasemaintenance.html), Multi Repeat Charge tool. |  |  |  |
| Setup Wizard | SetupWizard | Allow a user access to the Setup Wizard. |  |  |  |
| Wiki Admin | WikiAdmin | Allow a user to *lock* a [Wiki](wiki.html) page and edit a *locked* page. |  |  |  |
| Wiki List Setup | WikiListSetup | Create or delete [Wiki List](wikilists.html) and add list columns. |  |  |  |
| Web Forms Access | WebFormAccess | Allows access to web forms. |  |  |  |
| Zoom | Zoom | Allows access to Zoom window. |  |  |  |
| **eServices** |  |  |  |  |  |
| EServices Setup | EServicesSetup | Edit settings in the [eServices Setup](eservicessetup.html) window and [Mobile Settings](mobilesettings.html) window. The [eConnector](econnector.html) is only monitored when a user with this permission is logged on. Logs an entry in the Audit Trail when the eConnector is installed for the first time. |  |  |  |
| **Help** |  |  |  |  |  |
| Query Monitor View | QueryMonitor | Allows access to the Query Monitor. |  |  |  |
| **Main Toolbar** |  |  |  |  |  |
| Advertising - Postcards Send |  | Determines access to [Postcards Setup (Advertising)](postcardssetup.html). |  |  |  |
| Commlog Create | CommlogCreate | Create [Commlog](commlog.html) entries. |  |  |  |
| Commlog Edit | CommlogEdit | Edit [Commlog](commlog.html) entries. | X | X | CommDateTime |
| Email Send | EmailSend | [Email Message Edit](emailmessage.html). |  |  |  |
| Text Message View | TextMessageView | Allows access to the [Text Messaging Mailbox](textmsginbox.html) to view sent or received text messages. |  |  |  |
| Text Message Send | TextMessageSend | Allow users to send manual text messages from the [Text Messaging Mailbox](textmsginbox.html), [ASAP List](asaplist.html), [Confirmation List](confirmationlist.html), *Text* toolbar button, and right-click options in [Appointments Module](appointments.html). Does not affect automated texting. |  |  |  |
| Webmail Send | WebmailSend | [WebMail](securewebmailsend.html). |  |  |  |
| Sheet Edit | SheetEdit | Edit sheets attached to patients and change the patient a sheet is attached to. Also tracks when [Web Forms Feature](../site/webforms.html) are retrieved and attached to patients. | X | X | DateEntryC |
| Sheet Delete | SheetDelete | Delete sheets attached to a patient (See [Fill Sheet](sheetsfillout.html)). | X | X | DateTimeSheet |
| Task Edit | TaskEdit | Edit [Task](tasks.html) descriptions or attachments. Track task additions and edits in the audit trail. Users without this permission will still be able to add new attachments to existing tasks and can edit their own task descriptions, but will not be able to edit existing attachments once the task is created or edit task descriptions of other users. |  |  |  |
| Task Note Edit | TaskNoteEdit | Edit task notes. |  |  |  |
| Task Delete | TaskDelete | Delete tasks and task notes. |  |  |  |
| Task List Create | TaskListCreate | Create a [Task List](tasklists.html). |  |  |  |
| Popup Edit (other users) | PopupEdit | Edit or delete [Popups](popups.html) created by a user other than the currently logged on user. Users without this permission can still edit and delete their own popups. |  |  |  |
| **Appointments Module** | AppointmentsModule | Access the [Appointments Module](appointments.html). |  |  |  |
| Appointment Create | AppointmentCreate | Create new appointments. |  |  |  |
| Appointment Move | AppointmentMove | Drag scheduled or completed appointments to new operatories. Copy appointments to the  [Pinboard](apptpinboard.html). Move appointments to the [Unscheduled List](unscheduled.html). |  |  |  |
| Appointment Resize | AppointmentResize | Edit a scheduled or completed appointment length. |  |  |  |
| Appointment Edit | AppointmentEdit | Edit scheduled appointments, [Break Appointment](apptbreak.html), and delete appointments from the Unscheduled List. Requires *Appointment Resize* permission to edit appointment length. |  |  |  |
| Appointment Delete | AppointmentDelete | Delete existing scheduled appointments. |  |  |  |
| Completed Appointment Edit | AppointmentCompleteEdit | Edit completed appointments. Requires *Appointment Resize* permission to edit appointment length. |  |  |  |
| View Appointment Audit Trail | ViewAppointmentAuditTrail | View the Appointment Audit Trail. |  |  |  |
| eCW Appointment Revise | EcwAppointmentRevise | Only used by [eClinicalWorks](bridgeeclinicalworks.html). |  |  |  |
| Insurance Plan Verification Assign | InsPlanVerifyList | Determines if a user can be assigned to insurance verifications in the [Insurance Verification List](insverifylist.html) (whether the user is listed as an option under *For User*). |  |  |  |
| Appointment Confirmation Status Edit | ApptConfirmStatusEdit | Edit Appointment Confirmation Status. Logs changes to confirmation status in the audit trail. |  |  |  |
| Blockouts | Blockouts | Add, edit, copy/paste, or delete [Blockouts](blockouts.html) of any type. Logs an audit trail entry when a blockout is added, edited, deleted, cut, copied, pasted, or cleared. Users without the permission, can only add, edit, or delete blockouts flagged as NS or DC. |  |  |  |
| **Family Module** | FamilyModule | Access the [Family Module](family.html). Logged as FamilyModuleViewed in the Audit Trail |  |  |  |
| Insurance Plan Edit | InsPlanEdit | Edit [Insurance Plan](insplan.html) information, [Benefit Information](benefitinfo.html) and [Discount Plans](discountplans.html) or use Change options in the [Check Insurance Plan Fees](feeschedulecheckfees.html) tool. Logs an entry in the Audit Trail when insurance plan information is edited during import of an 834. Users without this permission will still be able to access the [Insurance Plan](insplan.html) window in order to request [Electronic Eligibility and Benefits](ebenefits.html) and view eBenefit history. |  |  |  |
| Change existing Ins Plan using Pick From List | InsPlanPickListExisting | In the [Insurance Plan](insplan.html), use the Pick From List button to select a new insurance plan before dropping the existing plan. |  |  |  |
| Insurance Verification | InsuranceVerification | Allows access to the [Insurance Verification List](insverifylist.html). |  |  |  |
| Insurance Plan Change Assignment of Benefits | InsPlanChangeAssign | Change the Assignment of Benefits setting on the Edit Insurance Plan window. Change Insurance plans default to show assignment of benefits setting in Preferences. |  |  |  |
| Insurance Plan Change Subscriber | InsPlanChangeSubsc | Change the subscriber on the Edit Insurance Plan window or use the [Move Subscribers](subscribersmove.html) tool. |  |  |  |
| Insurance Plan Ortho Edit | InsPlanOrthoEdit | Edit information on the Edit Insurance Plan window, Ortho tab. |  |  |  |
| Carrier Create | CarrierCreate | Create [Carriers](carriers.html). Does not stop [Trojan Bridge](trojan.html) or XML imports from creating new carriers. Users must also have *Carrier Edit* permission. |  |  |  |
| Carrier Edit | CarrierEdit | Edit existing [Carriers](carriers.html). Users without *Insurance Plan Edit* permission can only edit carriers from the Carriers List. |  |  |  |
| Patient Billing Type Edit | PatientBillingEdit | Change a patient's billing type or change *Included in Super Family Billing* in [Edit Patient Information](patientedit.html). |  |  |  |
| Patient Primary Provider Edit | PatPriProvEdit | Allow or block user from changing a patient's primary provider on the Edit Patient Information window or via the Provider List. Logs entry in audit trail when primary provider is changed. |  |  |  |
| Patient Restriction Edit | PatientApptRestrict | Change the setting of the *Appointment scheduling is restricted* checkbox. |  |  |  |
| Archived Patient Select | ArchivedPatientSelect | Select a patient with a status of *Archived*. |  |  |  |
| Archived Patient Edit | ArchivedPatientEdit | Edit archived patient information in the [Edit Patient Information](patientedit.html) window. |  |  |  |
| Patient Social Security Number View | PatientSSNView | View full patient SSN number in the [Family Module](family.html), [Select Patient](patientselect.html) window, and [Edit Patient Information](patientedit.html) window. Only needed if the *Mask patient Social Security Numbers* preference is enabled. Users wilth *Insurance Verification* permission will be able to see full SSN in the [Insurance Verification List](insverifylist.html) without this permission. |  |  |  |
| Patient Birthdate View | PatientDOBView | View full patient birthdate in the [Family Module](family.html), [Select Patient](patientselect.html) window, and [Edit Patient Information](patientedit.html) window. Users wilth *Insurance Verification* permission will be able to see full birthdates in the [Insurance Verification List](insverifylist.html) without this permission. |  |  |  |
| Patient Edit | PatientEdit | Determines access to the Edit Patient Information window. |  |  |  |
| Super Family Disband | SuperFamilyDisband | Allow or block a user from using the Disband option for a Super Family. |  |  |  |
| **Account Module** | AccountModule | Access the [Account Module](account.html). Logged as AccountModuleViewed in the Audit Trail |  |  |  |
| Claim |  |  |  |  |  |
| Claim Send | ClaimSend | Send or print an [Insurance claim](claimsend.html). |  |  |  |
| Claim Sent Edit | ClaimSentEdit | Edit claims that have already been sent. | X |  | DateSent |
| Claim Delete | ClaimDelete | Delete a claim. | X |  | SecDateEntry |
| Claim History Edit | ClaimHistoryEdit | Edit the [Claim, Status History](claimtabstatus.html). | X |  | DateTimeEntry |
| Claim View | ClaimView | (rarely used) Allow user to view a claim. Users who do not have this permission also cannot create a claim. |  |  |  |
| Claim Procedure Provider Edit When Attached to Claim | ClaimProcClaimAttachedProvEdit | Edit providers on Claim Procedures that are attached to a claim. |  |  |  |
| Claim Procedure Fee Billed to Ins Edit | ClaimProcFeeBilledToInsEdit | Edit the Fee Billed to Ins on Claim Procedures |  |  |  |
| Claim Procedure Received Edit | ClaimProcReceivedEdit | Edit Claim Procedures with a *Received* or *Supplemental* status. Date limitations are ignored when date is invalid. | X |  | DateEntry |
| Update Custom Tracking | UpdateCustomTracking | Enable the Update Claim Tracking button in the [Outstanding Insurance Claims Report](reportoutins.html). |  |  |  |
| PreAuth Sent Edit | PreAuthSentEdit | Edit [Preauthorization](preauth.html) that have already been sent. | X |  | SecDateEntry |
| Account Procs Quick Add | AccountProcsQuickAdd | Allow user to add procedures to the account via [Quick Procs](quickprocs.html). |  |  |  |
| Insurance Payment |  |  |  |  |  |
| Insurance Payment Create | InsPayCreate | Receive a Claim, [Finalize Insurance Payment](claimpayfinalize.html), create a [Batch Insurance Payment](claimpaymentbatch.html), or Access [ERA](claimsera835.html) window. Users without this permission can still enter insurance pay estimates on [Preauthorizations](preauth.html). |  | X | PaymentDate |
| Insurance Payment Edit | InsPayEdit | Edit received procedures, finalized payments, and payment details on a batch insurance payment. | X | X | DateCP |
| Insurance Write-off Edit | InsWriteOffEdit | Edit write-offs and write-off estimates, mark procedure Do Not Bill to Ins. | X |  | DateEntryC |
| Payment |  |  |  |  |  |
| Payment Create | PaymentCreate | Enter a [Payment](payment.html). Also needed to create an [Income Transfer](incometransfer.html). | X | X | PaymentDate |
| Payment Edit | PaymentEdit | Edit existing patient payments or income transfers. | X | X | PaymentDate |
| Pay Split Create after Global Lock Date | SplitCreatePastLockDate | Add new positive or negative [Pay Splits](paysplit.html) for payments created before the Global Lock Date. Does not allow editing or deleting existing pay splits, editing other payment details, or deleting payments. The sum of all splits must equal the payment amount. |  | X |  |
| Payment Plan |  |  |  |  |  |
| Pay Plan Edit | PayPlanEdit | Create, edit, close, or delete a [Payment Plan](paymentplandynamic.html), [Insurance Payment Plan](paymentplanins.html), or [Old Payment Plan](paymentplanpatient.html). Logs an entry in the Audit Trail when a plan is created, reopened, signed, or closed, when a signature is invalidated, or when the guarantor, amount, insurance plan, or note is changed. Global Lock Date does not apply when closing a payment plan. |  | X | PayPlanDate |
| Pay Plan Charge Date Edit | PayPlanChargeDateEdit | Edit the date of a payment plan charge on payment plans with APR. |  |  |  |
| Adjustment |  |  |  |  |  |
| Adjustment Create | AdjustmentCreate | Create [Adjustments](adjustments.html) and [TP Procedure Discounts](procedurefinancial.html). |  | X | AdjDate |
| Adjustment Edit | AdjustmentEdit | Edit adjustments. | X | X | AdjDate |
| Adjustment Edit Zero Amount | AdjustmentEditZero | If user does not have Adjustment Edit permission, allow user to create or delete adjustments with a zero amount and today's date as the *Entry Date*. |  |  |  |
| Adjustment Type Deny | AdjustmentTypeDeny | Deny access to specific adjustments in the [Account Module](account.html). When checked, the Adjustment Definition Picker window will open. See [Adjustment](adjustments.html) for more information. |  |  |  |
| Statement |  |  |  |  |  |
| Export CSV | StatementCSV | Allow user to export statements .csv files. |  |  |  |
| **TreatmentPlan Module** | TPModule | Access the [Treatment Plan Module](treatmentplan.html). Logged as TreatmentPlanModuleViewed in the Audit Trail |  |  |  |
| Edit Treatment Plan | TreatPlanEdit | Edit a saved Treatment Plan. | X |  | DateTP |
| Edit Treatment Plan Presenter | TreatPlanPresenterEdit | Change the presenter when Editing a Saved Treatment Plan. |  |  |  |
| Sign Treatment Plan | TreatPlanSign | Allow a user to sign a saved Treatment Plan. |  |  |  |
| **Chart Module** | ChartModuleViewed | Access the [Chart Module](chart.html). Logged as ChartModuleViewed in the Audit Trail. |  |  |  |
| Procedure |  |  |  |  |  |
| Edit EO or EC Procedures | ProcExistingEdit | Allow a user to edit a procedure with a status of Existing Other (EO) or Existing Current (EC). | X |  | DateEntryC |
| Show Procedure Fee | ProcEditShowFee | Show (check) or hide (uncheck) the Amount textbox in the Procedure Info window only. It does not affect the Chart View. This permission might not be very useful, and was added for a specific customer for a unique situation. |  |  |  |
| TP Procedure Delete | ProcDelete | Delete non-completed procedures. | X |  | DateEntryC |
| Procedure Note (full) | ProcedureNoteFull | Make changes to any procedure note or signature. |  |  |  |
| Procedure Note (same user) | ProcedureNoteUser | Only allow user to make changes to procedure notes that are unsigned or they have signed. Block user from changing procedure notes signed by others. |  |  |  |
| Group Note Edit (other users, signed) | GroupNoteEditSigned | Allow user to edit group notes signed by other users. |  |  |  |
| Completed Procedure |  |  |  |  |  |
| Create Completed Procedure (or set complete) | ProcComplCreate | Set appointments or individual procedures complete. [Set Appointment Complete](apptcomplete.html). |  | X | ProcDate |
| Edit Completed Procedure | ProcCompleteEdit | Edit a completed procedure (e.g. date, procedure, time, description, tooth number, surface, amount, and date of treatment plan). | X | X |  |
| Change Status or Delete a Completed Procedure | ProcCompleteStatusEdit | Change the status of a completed procedure, or delete a completed procedure. | X | X |  |
| Edit Note on Completed Procedure | ProcCompleteNote | Edit a note or signature on a completed procedure.   Unchecking this permission also unchecks 'Edit EO or EC Procedures'. | X |  |  |
| Add Adjustment to Completed Procedure | ProcCompleteAddAdj | Add or link an adjustment to a completed procedure.    Unchecking this permission also unchecks 'Edit EO or EC Procedures'. | X |  |  |
| Miscellaneous Edit on Completed Procedure | ProcedureCompleteEditMisc | Make miscellaneous changes to a completed procedure (e.g. Hide graphics, edit Medical and Misc tab data, etc).   Unchecking this permission also unchecks 'Edit EO or EC Procedures'. | X |  |  |
| Rx |  |  |  |  |  |
| Rx Create | RxCreate | Create prescriptions. For practices using [eRx](../site/electronicrx.html), also allows users access to eRx interface. |  |  |  |
| Rx Edit | RxEdit | Edit or delete existing prescriptions. |  |  |  |
| Ortho Chart Edit (full) | OrthoChartEditFull | Create, sign, or edit any [Ortho Chart](orthochart.html) dated entry. | X |  | OrthoDate |
| Ortho Chart Edit (same user, signed) | OrthoChartEditUser | Only allow user to edit or sign ortho chart entries that are unsigned, or that they created or signed. Block user from editing or signing entries created by others. | X |  | OrthoDate |
| Perio Chart Edit | PerioEdit | Edit a dated Perio exam. | X |  |  |
| Perio Chart Copy | PerioEditCopy | Make a copy of an existing Perio exam. Also requires the *Perio Chart Edit* permission. |  |  |  |
| Anesthesia |  |  |  |  |  |
| Intake Anesthetic Medications into Inventory | AnesthesiaIntakeMeds | Only used by the [Anesthesia](anesthesia.html) plugin. |  |  |  |
| Edit Anesthetic Records; Edit Adjust Inventory Counts | AnesthesiaControlMeds | Only used by the Anesthesia plugin. |  |  |  |
| Pat Medication List Edit | MedicationEdit | Add or edit medications for a patient. |  |  |  |
| Pat Allergy List Edit | PatAllergyListEdit | Add or edit allergies for a patient. |  |  |  |
| Pat Problem List Edit | ProblemDefEdit | Add or edit problems for a patient. |  |  |  |
| Chart View Edit | ChartViewsEdit | Add, edit, or re-order [Chart Views](showtabchart.html) |  |  |  |
| **Imaging Module** | ImagesModule | Access the [Imaging Module](images.html). Logged as ImagesModuleViewed in the Audit Trail. |  |  |  |
| Image Create | ImageCreate | Add images (Acquire, Video, Import, or Paste buttons). |  |  |  |
| Image Delete | ImageDelete | Delete Images. | X |  | DateCreated |
| Image Edit | ImageEdit | Edit an image (Crop, size, flip, etc). | X |  | DateCreated |
| Image Export | ImageExport | Export an image. | X |  | DateCreated |
| **Manage Module** | ManageModule | Access the [Manage Module](manage.html). |  |  |  |
| Accounting | Accounting | Access [Accounting](accounting.html). |  |  |  |
| Accounting Create Entry | AccountingCreate | Create accounting entries. | X |  | DateDisplayed |
| Accounting Edit Entry | AccountingEdit | Edit accounting entries. | X |  | DateDisplayed |
| Billing | Billing | Access [Billing](billing.html). |  |  |  |
| Deposit Slips | DepositSlips | Edit [DepositSlips](depositslip.html). | X |  | DepositDate |
| Backup | Backup | Access [Backups](backups.html). |  |  |  |
| **Time Card** |  |  |  |  |  |
| Edit All Time Cards | TimeCardsEditAll | Edit any person's time card and have access to the [Time Card Manage](timecardmanage.html) window in the [Time Clock](timeclock.html) section. The Global Security Setting for *Users cannot edit their own time card* will override this permission. | X |  |  |
| Time Card Delete Entry | TimeCardDeleteEntry | Delete a time card entry. We recommend not using this permission because time card changes are tracked anyway. | X |  | TimeEntered |
| Edit Protected Leave Time Card Adjustments | ProtectedLeaveAdjustmentEdit | Create, edit, and delete time card adjustments that are marked as protected leave for another employee. |  |  |  |
| **Supply Inventory** |  |  |  |  |  |
| Equipment |  |  |  |  |  |
| Equipment Setup | EquipmentSetup | Access [Equipment](equipment.html). |  |  |  |
| Equipment Delete | EquipmentDelete | Delete Equipment. | X |  | DateEntry |
| Supplier Edit | SupplierEdit | Access [Suppliers](suppliersetup.html). |  |  |  |
| **Merge Tools** |  |  |  |  |  |
| Insurance Carrier Combine | InsuranceCarrierCombine | [Combine Carriers](carrierscombine.html). |  |  |  |
| Insurance Plan Combine | InsurancePlanCombine | [Combine Insurance Plans](insplancombine.html) |  |  |  |
| Rx Combine | RxCombine | [Combine Prescriptions](prescriptionscombine.html) |  |  |  |
| **Web Applications** |  |  |  |  |  |
| ODTouch/ODMobile | MobileWeb | Allow or block a user from accessing [ODTouch](../site/odtouch.html), [ODMobile](opendentalmobile.html), or [Mobile Web](../site/mobileweb.html). |  |  |  |
| **Cloud** | Note: Only visible when using Open Dental Cloud. |  |  |  |  |
|  | Allow Login From Any Location | Allow user to log into Open Dental Cloud from any location. When not allowed, user must have their IP address added to Allowed Addresses in Cloud Management. |  |  |  |