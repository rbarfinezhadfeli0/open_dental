Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Specification

## About

The Open Dental API allows developers to safely interact with an Open Dental database. This page describes the Open Dental RESTful API (commonly "The API") service. This is different from the FHIR API, which is targeted toward interfacing with medical systems. The Open Dental API and the FHIR API share some of the same codebase, especially security, but the target audience is different. This API is generally recommended for most interfaces, unless you are connecting to an existing FHIR interface.

API developers should have a Business Associate Agreement (BAA) in place with their clients.

The following http method types are supported:
 GET: Retrieves either one or multiple items.
 POST: Creates a new item. Typically returns a "location" header and the object.
 PUT: Updates an item. Returns 200 OK.
 DELETE: Removes an entry from the database. Returns 200 OK.

These methods act on Resources, such as Patient or Appointment, which generally have a 1:1 relationship with Open Dental database tables. These methods frequently correspond to CRUD commands that get sent to the database such as Select, Insert, or Update. Many methods will result in multiple database commands. A failure should return an explanation of why it failed. If a field is not included in a PUT (update), then it will not change the original field in the database.

Visit our [API Forum](https://www.opendentalsoft.com:8085/forum/) for questions & answers or to request new features. Phone support for developers is very limited. If answers are not found via our documentation, the API forum is the next best resource.

[API Developer Setup](apisetup.html)

[API Implementation](apiimplementation.html)

[API Permissions](apipermissions.html), Pricing tiers for API developers are available on this page.

[API Modes - Local, Service, and Remote](apilocal.html)

[API Events](apievents.html)

## Resources

[API AccountModules](apiaccountmodules.html)

[API Adjustments](apiadjustments.html)

[API Allergies](apiallergies.html)

[API AllergyDefs](apiallergydefs.html)

[API Appointments](apiappointments.html)

[API AppointmentTypes](apiappointmenttypes.html)

[API ApptFields](apiapptfields.html)

[API ApptFieldDefs](apiapptfielddefs.html)

[API AsapComms](apiasapcomms.html)

[API AutoNoteControls](apiautonotecontrols.html)

[API AutoNotes](apiautonotes.html)

[API Benefits](apibenefits.html)

[API Carriers](apicarriers.html)

[API ChartModules](apichartmodules.html)

[API ClaimPayments](apiclaimpayments.html)

[API ClaimProcs](apiclaimprocs.html)

[API Claims](apiclaims.html)

[API ClaimTrackings](apiclaimtrackings.html)

[API Clinics](apiclinics.html)

[API ClockEvents](apiclockevents.html)

[API CodeGroups](apicodegroups.html)

[API Commlogs](apicommlogs.html)

[API Computers](apicomputers.html)

[API CovCats](apicovcats.html)

[API CovSpans](apicovspans.html)

[API Definitions](apidefinitions.html)

[API DiscountPlans](apidiscountplans.html)

[API DiscountPlanSubs](apidiscountplansubs.html)

[API DiseaseDefs](apidiseasedefs.html)

[API Diseases](apidiseases.html)

[API Documents](apidocuments.html)

[API EhrPatients](apiehrpatients.html)

[API EobAttaches](apieobattaches.html)

[API Employees](apiemployees.html)

[API Employers](apiemployers.html)

[API EtransMessageTexts](apietransmessagetexts.html)

[API Etranss](apietranss.html)

[API FamilyModules](apifamilymodules.html)

[API Fees](apifees.html)

[API FeeScheds](apifeescheds.html)

[API HistAppointments](apihistappointments.html)

[API InsPlans](apiinsplans.html)

[API InsSubs](apiinssubs.html)

[API InsVerifies](apiinsverifies.html)

[API LabCases](apilabcases.html)

[API Laboratories](apilaboratories.html)

[API LabTurnarounds](apilabturnarounds.html)

[API MedicationPats](apimedicationpats.html)

[API Medications](apimedications.html)

[API Operatories](apioperatories.html)

[API PatFieldDefs](apipatfielddefs.html)

[API PatFields](apipatfields.html)

[API PatientNotes](apipatientnotes.html)

[API PatientRaces](apipatientraces.html)

[API Patients](apipatients.html)

[API PatPlans](apipatplans.html)

[API Payments](apipayments.html)

[API PayPlanCharges](apipayplancharges.html)

[API PayPlanLinks](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7apipayplanlinks.html)

[API PayPlans](apipayplans.html)

[API PaySplits](apipaysplits.html)

[API PerioExams](apiperioexams.html)

[API PerioMeasures](apiperiomeasures.html)

[API Pharmacies](apipharmacies.html)

[API Popups](apipopups.html)

[API Preferences](apipreferences.html)

[API ProcedureCodes](apiprocedurecodes.html)

[API ProcedureLogs](apiprocedurelogs.html)

[API ProcNotes](apiprocnotes.html)

[API ProcTPs](apiproctps.html)

[API Providers](apiproviders.html)

[API Queries](apiqueries.html)

[API QuickPasteCats](apiquickpastecats.html)

[API QuickPasteNotes](apiquickpastenotes.html)

[API Recalls](apirecalls.html)

[API RecallTypes](apirecalltypes.html)

[API RefAttaches](apirefattaches.html)

[API Referrals](apireferrals.html)

[API Reports](apireports.html)

[API RxPats](apirxpats.html)

[API ScheduleOps](apischeduleops.html)

[API Schedules](apischedules.html)

[API SecurityLogs](apisecuritylogs.html)

[API SecurityPerms](apisecurity.html)

[API Sheets](apisheets.html)

[API SheetFields](apisheetfields.html)

[API Signalods](apisignalods.html)

[API Statements](apistatements.html)

[API Subscriptions](apisubscriptions.html)

[API SubstitutionLinks](apisubstitutionlinks.html)

[API TaskLists](apitasklists.html)

[API TaskNotes](apitasknotes.html)

[API Tasks](apitasks.html)

[API ToothInitials](apitoothinitials.html)

[API TreatPlanAttaches](apitreatplanattaches.html)

[API TreatPlans](apitreatplans.html)

[API UserGroupAttaches](apiusergroupattaches.html)

[API UserGroups](apiusergroups.html)

[API Userods](apiuserods.html)