Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Permissions

See [API Specification](apispecification.html)

## Security Permissions

The security permissions for the API are organized differently from those in Open Dental.

| Permission | Methods | Details |
| --- | --- | --- |
| Read All | AccountModules GET Aging  AccountModules GET PatientBalances  AccountModules GET ServiceDateView  Adjustments GET  Allergies GET  AllergyDefs GET  Appointments GET (single/multiple)  Appointments GET SlotsWebSched  Appointments GET Slots  Appointments GET ASAP  Appointments GET WebSched  AppointmentTypes GET  ApptFields GET  ApptFieldDefs GET  AsapComms GET (single/multiple)  AutoNoteControls GET  AutoNotes GET  Benefits GET (single/multiple)  Carriers GET (single/multiple)  ChartModules GET ProgNotes  ChartModules GET PatientInfo  ChartModules GET PlannedAppts  ClaimForms GET (single/multiple)  ClaimProcs GET (single/multiple)  ClaimPayments GET (single/multiple)  Claims GET (single/multiple)  ClaimTrackings GET  Clinics GET  ClockEvents GET (single/multiple)  CodeGroups GET (single/multiple)  Commlogs GET (single/multiple)  Computers GET  CovCats GET (single/multiple)  CovSpans GET (single/multiple)  Definitions GET  DiscountPlans GET  DiscountPlanSubs GET  Diseases GET (single/multiple)  DiseaseDefs GET (single/multiple)  Documents GET (single/multiple)  EhrPatients GET  EobAttaches GET   Employees GET (single/multiple)  Employers GET (single/multiple)  EtransMessageTexts GET   Etranss GET   FamilyModules GET Insurance  Fees GET (single/multiple)  FeeScheds GET  HistAppointments GET  InsPlans GET (single/multiple)  LabCases GET (single/multiple)  Laboratories GET (single/multiple)  LabTurnarounds GET (single/multiple)  Medications GET  MedicationPats GET  Operatories GET (single/multiple)  PatFieldDefs GET  PatFields GET  PatientNotes GET  PatientRaces GET  Patients GET (single/multiple)  Patients GET Simple  PatPlans GET  Payments GET  PayPlanCharges GET  PayPlanLinks GET (single/multiple)  PayPlans GET (single/multiple)  PaySplits GET  PerioExams GET  PerioMeasures GET  Pharmacies GET (single/multiple)  Popups GET  Preferences GET  ProcedureCodes GET (single/multiple)  ProcedureLogs GET  ProcedureLogs GET InsuranceHistory  ProcNotes GET  ProcTPs GET  Providers GET  QuickPasteCats GET (single/multiple)  QuickPasteNotes GET (single/multiple)  Recalls GET  Recalls GET List  RecallTypes GET (single/multiple)  RefAttaches GET  Referrals GET (single/multiple)  Reports GET Aging  Reports GET FinanceCharges  RxPats GET (single/multiple)  SecurityLogs GET  SecurityPerms GET  ScheduleOps GET  Schedules GET (single/multiple)  SheetDefs GET  Sheets GET  SheetFieldDefs GET (single/multiple)  SheetFields GET  Signalods GET  Statements GET (single/multiple)  Subscriptions GET  Subscriptions POST  Subscriptions PUT  SubstitutionLinks GET  TaskLists GET  TaskNotes GET (single/multiple)  Tasks GET (single/multiple)  ToothInitials GET  TreatPlanAttaches GET  TreatPlans GET  UserGroupAttaches GET  UserGroups GET  Userods GET | All GET methods. These are throttled at different rates for different users. |
| AllOthers | Adjustments POST  Adjustments PUT  Allergies DELETE  Allergies POST  Allergies PUT  AutoNoteControls POST  AutoNoteControls PUT  AutoNotes POST  AutoNotes PUT  Carriers POST   Carriers PUT   DiscountPlans POST   DiscountPlans PUT   DiscountPlanSubs DELETE  DiscountPlanSubs POST  DiscountPlanSubs PUT  Diseases DELETE  Diseases POST  Diseases PUT  Documents DELETE  Documents POST DownloadMount  Documents POST DownloadSftp  Documents POST SetByUrl  Documents POST Thumbnails  Documents POST UploadSftp  Documents PUT  EhrPatients PUT  EobAttaches DELETE  EobAttaches POST DownloadSftp  EobAttaches POST UploadSftp  Employers DELETE  Employers POST  Employers PUT  Fees DELETE  Fees POST  Fees PUT  FeeScheds POST  FeeScheds PUT  LabCases POST  LabCases PUT  LabCases DELETE  Laboratories POST  Laboratories PUT  LabTurnarounds POST  LabTurnarounds PUT  MedicationPats DELETE   MedicationPats POST   PatFieldDefs DELETE  PatFieldDefs POST  PatFieldDefs PUT  PatFields PUT  PatientNotes PUT  PerioExams DELETE  PerioExams POST  PerioExams PUT  PerioMeasures DELETE  PerioMeasures POST  PerioMeasures PUT  ProcedureCodes POST  ProcedureCodes PUT  ProcedureLogs POST GroupNote  ProcedureLogs DELETE GroupNote  ProcedureLogs PUT GroupNote  ProcNotes POST  ProcTPs PUT  ProcTPs DELETE  Recalls POST  Recalls PUT  Recalls PUT SwitchType  RefAttaches DELETE  RefAttaches POST  RefAttaches PUT  Referrals POST  Referrals PUT  Sheets POST  Sheets POST DownloadSftp  Statements POST  SubstitutionLinks DELETE  SubstitutionLinks POST  SubstitutionLinks PUT  TaskNotes POST  TaskNotes PUT  Tasks POST  Tasks PUT  ToothInitials DELETE  ToothInitials POST  TreatPlans DELETE  TreatPlans POST  TreatPlans POST Saved  TreatPlans PUT | Any method not listed under a different permission. |
| Comm | Appointments PUT Break  Appointments PUT Confirm  Appointments PUT Note  ApptFields PUT  Commlogs POST  Popups POST  Popups PUT  Recalls PUT Status |  |
| Documents | Documents POST Upload  (not any other Documents methods) | Because each upload consumes bandwidth. |
| Queries | Queries POST  Queries PUT ShortQuery |  |
| Appointments | Appointments POST  Appointments POST Planned  Appointments POST SchedulePlanned  Appointments POST WebSched  Appointments PUT |  |
| InsuranceSimple | ClaimProcs POST InsAdjust  ClaimProcs PUT InsAdjust  InsSubs DELETE  InsSubs POST  InsSubs PUT  PatPlans DELETE  PatPlans POST  PatPlans PUT  InsVerifies PUT | Added in version 25.1 |
| Insurance | Benefits DELETE  Benefits POST  Benefits PUT  ClaimPayments DELETE  ClaimPayments POST  ClaimPayments POST Batch  ClaimPayments PUT  ClaimProcs POST Supplemental  ClaimProcs PUT  Claims DELETE  Claims POST  Claims PUT  Claims PUT Split  Claims PUT Status  ClaimTrackings POST  ClaimTrackings PUT  InsPlans POST  InsPlans PUT | These are complex and rarely used. |
| Patients | Patients POST  Patients PUT |  |
| Payments | Payments POST  Payments POST Refund  Payments PUT  Payments PUT Partial  PaySplits PUT | Added in version 21.3. |
| PayPlans | PayPlanLinks DELETE  PayPlanLinks POST  PayPlanLinks PUT  PayPlans POST (Deprecated in version 23.3)  PayPlans POST Dynamic  PayPlans PUT Dynamic | Added in version 21.3. |
| ProcedureLogs | ProcedureLogs DELETE  ProcedureLogs POST  ProcedureLogs POST InsuranceHistory  ProcedureLogs PUT | Added in version 21.4. |
| Setup | AllergyDefs POST  ApptFieldDefs POST  Clinics PUT  CovCats POST   CoCats PUT   CovSpans DELETE   CovSpans POST   CovSpans PUT   Definitions POST  DiseaseDefs POST  Medications POST   Providers POST  Providers PUT  Userods POST  Userods PUT | Added in version 23.1. |
| TextingASAP\* | AsapComms POST | Added in version 23.3. |
| Enterprise\* | Applies to all methods. | Added in version 23.3. Increases Limit for Remote mode to 1000 elements, and Local/Service mode to 10,000 elements. Also reduces throttle to 500ms, for Remote mode. |

The normal Open Dental permissions are used for logging API actions, but they do not restrict the API from making changes. For example, date restrictions do not apply.

## Pricing

General monthly pricing for API is:

* Free - Read All (1 request per 5 seconds throttle)
* $15 - Comm, Documents, InsuranceSimple, Setup, and Queries (1 request per 1 second throttle)
* $30 - All except Payments, PayPlans, and Special (Special permissions are indicated with \* in the Permissions table above)
* $35 - All except Special

Pricing is per location. A key must be assigned and enabled before charges apply, and billing stops automatically if the key is disabled. If your organization develops for a large number of practices, contact [Open Dental Support](contact.html) to discuss pricing.