Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Audit Trail Permissions

In the [Audit Trail](audittrail.html), there is a list of Permissions.

Refer to the table below for details about each permission and its behavior.

* **Permission**: The name of the permission as it appears in the permissions drop down.
* **Event**: The behavior or event that is recorded in the Audit Trail.

| Permission | Event |
| --- | --- |
| Accounting | Accessed [Accounting](accounting.html). |
| AccountingCreate | Accounting entry was created. |
| AccountingEdit | Accounting entry was edited. |
| AccountModule | Accessed the [Account Module](account.html). Logged as AccountModuleViewed in the Audit Trail. |
| AccountProcsQuickAdd | Procedures were added via Account Procs Quick Add. |
| AddNewUser | New user added in [User Edit](securityusers.html). |
| AdjustmentCreate | Created an [Adjustment](adjustments.html). |
| AdjustmentEdit | Adjustment was edited. |
| Advertising | A patient list was generated and uploaded to Advertising Postcards. |
| AgingRan | Aging was run. |
| AllowFeeEditWhileReceivingClaim |  |
| AllowLoginFromAnyLocation |  |
| ApiSubscription | [Subscriptions](../site/apisubscriptions.html) were created, updated, or deleted via the API. |
| AppointmentCompleteDelete | Completed appointment was deleted. |
| AppointmentCompleteEdit | Completed appointment was edited. |
| AppointmentCreate | New appointment was created. |
| AppointmentDelete | Scheduled appointment was deleted. |
| AppointmentEdit | Scheduled appointment was edited or [Broken](apptbreak.html). |
| AppointmentMove | Scheduled or completed appointment was moved to new operatories or to the [Unscheduled List](unscheduled.html). |
| AppointmentTypeEdit | Existing or [Appointment Type](appointmenttypes.html) was edited. |
| ApptConfirmStatusEdit | Appointment Confirmation Status was edited. |
| AuditTrail | Accessed the [Audit Trail](audittrail.html). |
| AutoNoteQuickNoteEdit | Created, edited, or deleted [Auto Notes](autonotes.html) or [QuickPaste Notes](quickpastenotessetup.html). |
| Backup | Accessed [Backups](backups.html). |
| BadgeIdEdit | Edited a user's Badge ID from [Security Badges](securitybadges.html). |
| Billing | Accessed [Billing](billing.html). |
| Blockouts | Blockout was added, edited, deleted, cut, copied, pasted, or cleared. |
| CarrierCreate | Created [Carriers](carriers.html). |
| CarrierEdit | Carrier was edited. |
| ChartModule | Accessed the [Chart Module](chart.html). Logged as ChartModuleViewed in the Audit Trail. |
| ChooseDatabase | Accessed the [Choose Database](choosedatabase.html) window. |
| ClaimDelete | Deleted a [Claim](claimedit.html) or [Preauthorization](preauth.html). |
| ClaimEdit | Claim or preauthorization was created, cancelled, or saved. |
| ClaimProcClaimAttachedProvEdit | Edited providers on Claim Procedures that are attached to a claim. |
| ClaimSend | Printed or sent a claim or preauthorization. |
| ClaimSentEdit | Edited claim or preauthorization that has already been sent. |
| ClinicEdit | Clinic details were edited or a clinic was added to the [Clinic List](clinicsetup.html). |
| CloseOtherSessions |  |
| CommandQuery | Ran SQL commands (non-SELECT statements) on normal tables in the User Query window. |
| CommlogCreate | Commlog was created. |
| CommlogEdit | Commlog was edited. |
| CreditCardEdit | Any field was changed for an existing card in the Credit Card Edit window. In [Credit Card Manage](creditcardsmanage.html), a new credit card was added, or an existing credit card was deleted. A new card was added from the Payment window. |
| CreditCardMove | Credit card was moved from one patient to another. Makes a log for both patients. |
| CreditCardTerminal | A credit card transaction was started on a credit card terminal but failed to process due to an error. |
| DashboardWidget |  |
| DefEdit | Edited [Definitions](definitions.html). |
| DepositSlips | Edited [Deposit Slips](depositslip.html). |
| DiscountPlanAdd | Discount plan was created. |
| DiscountPlanAddDrop | Discount plan was added to or dropped from a patient's account. |
| DiscountPlanEdit | Discount plan information was edited (adjustment type, fee schedule, description, plan note, annual max, frequency limitations). |
| DiscountPlanMerge | Discount plans were merged together. |
| EHRMeasureEventEdit | Edited the date of an EHR measure event (action that affects an EHR numerator). |
| EmailSend | [Email Message Edit](emailmessage.html) was sent. |
| EmployerCreate | Employer was created. |
| EServicesSetup | Logs an entry when the eConnector is installed for the first time. Logs changes to eServices made by HQ. |
| FamAgingTruncate | Occurs when the family aging table was truncated. |
| FamilyModule | Accessed the [Family Module](family.html). Logged as FamilyModuleViewed in the Audit Trail. |
| FeeSchedEdit | Edited details of existing [Fee Schedules](feeschedules.html) or created a new fee schedule. |
| FormAdded |  |
| GraphicalReportSetup | Setup or edited [Graphic Reports](reportsgraphic.html). |
| GraphicsEdit | Accessed and changed [Graphics Preferences](graphics.html). |
| GraphicsRemoteEdit | User changed graphical settings for another workstation. |
| ImageCreate | Image or Mount was created. |
| ImageDelete | Image or Mount was deleted. |
| ImageEdit | Document was created, moved, or edited. |
| ImageExport | Exported an image. |
| ImagingModule | Accessed the [Imaging Module](images.html). Logged as ImagingModuleViewed in the Audit Trail. |
| InsCarrierCombine | The [Combine Carriers](carrierscombine.html) tool was used. |
| InsPayCreate | Received a Claim, [Finalize Insurance Payment](claimpayfinalize.html), created a [Batch Insurance Payment](claimpaymentbatch.html), accessed [ERAs](claimsera835.html) window, received [ERA](era.html), or ERA window closed. |
| InsPayEdit | Edited received procedures, finalized payments, and payment details on a batch insurance payment. |
| InsPlanAddPat | Patient was added to an insurance plan. |
| InsPlanChangeAssign | Changed the Assignment of Benefits setting on the Edit Insurance Plan window. Changed *Insurance plans default to assignment of benefits* preference. |
| InsPlanChangeCarrierName | Changed insurance carrier name via the Edit Insurance Plan window. |
| InsPlanChangeSubsc | Changed the subscriber on the Edit Insurance Plan window or used the [Move Subscribers](subscribersmove.html) tool. |
| InsPlanCreate | Insurance plan was created during import of an 834. |
| InsPlanCreateSub | Insurance plan subscriber was created during import of an 834. |
| InsPlanDropPat | Patient was dropped from an insurance plan during import of an 834. |
| InsPlanEdit | Edited [Insurance Plan](insplan.html) information, [Benefit Information](benefitinfo.html), and [Discount Plans](discountplans.html). Logs an entry when insurance plan information is edited during import of an 834. Logs an entry when insurance is dropped. |
| InsPlanEditSub | Insurance plan subscriber was edited during import of an 834. |
| InsPlanMerge | [Combine Insurance Plans](insplancombine.html) |
| InsWriteOffEdit |  |
| LicenseAccept | User accepted a license agreement. |
| LogDoseSpotMedicationNoteEdit | Medication notes for a patient were automatically reduced in order to send the note to DoseSpot eRx. |
| LogFeeEdit | Fees edited. |
| LogSubscriberEdit |  |
| ManageHighSecurityProgProp |  |
| MedicalInfoViewed | [Medical Window](medical.html) was viewed. |
| MedicationMerge | Accessed the [Merge Medications](mergemedications.html) tool. |
| MobileNotification | Action was taken in the Kiosk for a patient using an eClipboard device. |
| MobileWeb |  |
| OrthoChartEditFull | Edited any [Ortho Chart](orthochart.html) dated entry. |
| PatAllergyListEdit | [Allergies](allergiespatient.html) were added, changed or removed. |
| PatientApptRestrict | * Changed the setting of the *Appointment scheduling is restricted* checkbox. * *Appointment scheduling is restricted* was altered by Automation. * *Appointment scheduling is restricted* was altered when sending a patient to collections via TSI. |
| PatientBillingEdit | Changed a patient's Billing Type on the [Edit Patient Information](patientedit.html). |
| PatientCreate | New patient was added. |
| PatientDOBView | Viewed full patient birthdate in the [Family Module](family.html), [Select Patient](patientselect.html) window, and [Edit Patient Information](patientedit.html) window. Only logged when the *Mask patient date of birth* preference is enabled. |
| PatientEdit | Patient information was edited during import of an [834](importinsplans834.html), when patient was moved to a different family, when a patient is moved to or from a Super Family, when a patient opts in or out of text messaging, or when patient information (patient name, status, address, or state) was changed and saved. See also [ERAs](claimsera835.html). |
| PatientFieldEdit | [Patient Fields](custompatientfields.html) were edited. |
| PatientMerge | Accessed the [Merge Patients](mergepatients.html) tool. |
| PatientPortalLogin |  |
| PatientSSNView | Viewed full patient SSN number in the [Family Module](family.html), [Select Patient](patientselect.html) window, and [Edit Patient Information](patientedit.html) window. Only logged when the *Mask Patient Social Security Numbers* preference is enabled. |
| PatMedicationListEdit | [Medications](medicationspatient.html) are added, changed, or removed. |
| PatPlanCreate | Patient insurance plan was created. |
| PatPriProvEdit | Changed a patient's primary provider on the Edit Patient Information window or via the Provider List. |
| PatProblemListEdit | [Problems](problempatient.html) are added, changed, or removed. |
| PaymentCreate | Entered patient payment, created an [Income Transfer](incometransfer.html), a Payment Portal payment was processed, or Payment Plan Balancer was automatically run when creating a payment plan overpayment. |
| PaymentEdit | Edited patient payment. |
| PayPlanChargeDateEdit | Viewed a [Payment Plan](paymentplandynamic.html), [Insurance Payment Plan](paymentplanins.html), or an [Old Payment Plan](paymentplanpatient.html) charge on plans with APR. Logs an entry if the user has the *Pay Plan Charge Date Edit* security permission. |
| PayPlanChargeEdit | Edited or deleted a Payment Plan or Old Payment Plan charge |
| PayPlanEdit | Created, edited, closed, or deleted a Payment Plan, Insurance Payment Plan, or Old Payment Plan. |
| PerioEdit | Perio Exam was added, deleted, or copied. |
| Printer Setup |  |
| Printing | Report, Progress Notes, Sheet, List, etc. was printed. |
| ProblemDefEdit | Added, edited, or deleted a problem in the [Problem List](problemmaster.html). |
| ProcCodeEdit | Added or edited procedure codes from Lists, Procedure Codes. |
| ProcComplCreate | Appointments or individual procedures complete set complete. [Set Appointment Complete](apptcomplete.html). |
| ProcComplEdit | Prior to Version 20.1 - Edited procedures with a status of complete (C), existing - other provider (EO), or existing - current provider (EC). |
| ProcComplEditLimited | Prior to Version 20.1 - Edited notes, signature, or information in the Procedure - Misc tab, or changed Hide Graphics or Do Not Bill Ins checkbox on a procedure with a status of complete (C), existing - other provider (EO), or existing - current provider (EC). |
| ProcCompleteAddAdj | Not used. |
| ProcCompleteEdit | Edited procedures with a status of complete (C), existing - other provider (EO), or existing - current provider (EC). |
| ProcCompleteEditMisc | Not used. |
| ProcCompleteNote | Not used. |
| ProcCompleteStatusEdit | Deleted or changed the status of a procedure with the status of complete (C), existing - other provider (EO), or existing - current provider (EC). |
| ProcDelete | Deleted non-completed procedures and edit attached [Procedure Notes](procedurenotes.html) and [Procedure Group Note](procgroupnote.html). |
| ProcEdit | Procedure was flagged as CPOE. |
| ProcExistingEdit | Edited a procedure with a status of Existing Other (EO) or Existing Current (EC). |
| ProcFeeEdit | Changes made to [Procedure Code](procedurecodeedit.html) fees. |
| ProtectedLeaveAdjustmentEdit | A timecard adjustment marked as Protected Leave was created, edited, or deleted. |
| ProviderAdd | A provider was added. |
| ProviderEdit | The Provider Setup window was opened or provider information was edited. |
| ProviderMerge | Accessed the [Merge Providers](mergeproviders.html) tool. |
| QueryMonitor | The Query Monitor was opened. |
| RecallEdit | Recall type was created, edited, or deleted. Tracks when Undo tool is used in the Recall List. |
| RefAttachAdd | Attached Referrals to patients. |
| RefAttachDelete | Detached Referrals from patients. |
| ReferralAdd | Added a referral to the main [Referrals](referrals.html) List. |
| ReferralEdit | Edited or deleted a referral in the main Referral List. |
| ReferralMerge | Accessed the [Merge Referrals](mergereferrals.html) tool. |
| RegistrationKeyCreate | Used by Open Dental HQ Only. |
| RegistrationKeyEdit | Used by Open Dental HQ Only. |
| RepeatChargeCreate | A Repeating Charge was created. |
| RepeatChargeDelete | A Repeating Charge was deleted. |
| RepeatChargeTool | [Repeating Charges](repeatingcharges.html) was run. |
| RepeatChargeUpdate | A Repeating Charge was updated. |
| ReplicationSetup | Accessed [Replication](replication.html) setup. |
| ReportDaily |  |
| ReportProdInc |  |
| Reports | Accessed [Standard Reports](reportsstandard.html). |
| RequiredFields | Information was not completed in a Required Field and the user clicks OK. |
| RxCreate | Created prescriptions. |
| RxEdit | Edited or deleted prescriptions, synced changes with eRx, or printed prescriptions from Chart Module. |
| RxMerge | Merge duplicate prescriptions. |
| SalesTaxAdjEdit | Sales Tax Adjustment edited. |
| Schedules | Provider and employee [Schedules](schedule.html) edited. |
| SecurityAdmin | Changes made to security permissions. |
| SecurityGlobal | Changes made to the Global Lock Dates in Global Security Settings. |
| Setup | ["Setup" Permission](permissionssetup.html). |
| SheetEdit | * Edited sheets attached to patients and changed the patient a sheet is attached to. * Tracks when web forms are retrieved and attached to patients ([Web Forms Retrieve](webformsretrieve.html)). * Lists information imported from a sheet ([Import Patient Forms and Medical Histories](patientformsimport.html)). |
| ShowFeatures | [Show Features](showfeatures.html). |
| SplitCreatePastLockDate | Added new [Pay Splits](paysplit.html) for payments created before the Global Lock Date. Does not allow editing or deleting of existing payments. The sum of all splits must equal the payment amount. |
| StatementCSV |  |
| StatementPatNumMismatch |  |
| SuperFamilyDisband | Disbanded a Super Family from the Family Module. |
| SupplementalBackup | A supplemental backup was created. |
| SupplyPurchases | A [Supply Order](supplyorders.html) was added, placed, or deleted. |
| TaskDelete | Deleted a task or task note. |
| TaskEdit | Edited [Task](tasks.html) description. |
| TaskListCreate | Created a [Task List](tasklists.html). |
| TaskNoteEdit | Edited or deleted task notes. |
| TaskReminderPopup | A reminder task popped up for a user. |
| TimeAdjustEdit | A time card adjustment was added, edited, or deleted. |
| TimeCardDeleteEntry | Deleted a time card entry. |
| TPModule | Accessed the [Treatment Plan Module](treatmentplan.html). Logged as TreatmentPlanModuleViewed in the Audit Trail. |
| TreatPlanDiscountEdit | Created or changed a procedure Discount in the Treatment Plan module or [Procedure](procedureedit.html). |
| TreatPlanEdit | Edited a saved Treatment Plan. |
| TreatPlanPresenterEdit | Changed the presenter when Editing a Saved Treatment Plan. |
| UpdateInstall | User checked for software updates from the [Update](update.html) window. |
| UserLogOnOff | Users log on, log off, clock in, clock out, or close Open Dental or log on or log off the ODTouch or ODMobile apps. |
| UserQuery | Run and change variables in *released* [User Query](queryoverview.html). |
| WebChatEdit | Used by Open Dental HQ Only. |
| WebMailDelete | WebMail message deleted. |
| WebMailSend | [WebMail](securewebmailsend.html). |
| WebSchedRecallManualSend | WebSchedRecall sent manually. |