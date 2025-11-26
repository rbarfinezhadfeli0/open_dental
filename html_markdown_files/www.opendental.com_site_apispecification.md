# File: ./www.opendental.com/site/apispecification.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Specification</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apispecification','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>API Specification</p></div>
		<div class="GeneralPageContent">
<h2>About</h2>
<p>The Open Dental API allows developers to safely interact with an Open Dental database. This page describes the Open Dental RESTful API (commonly "The API") service. This is different from the FHIR API, which is targeted toward interfacing with medical systems. The Open Dental API and the FHIR API share some of the same codebase, especially security, but the target audience is different. This API is generally recommended for most interfaces, unless you are connecting to an existing FHIR interface.</p>
<p>API developers should have a Business Associate Agreement (BAA) in place with their clients.</p>
<p> The following http method types are supported:<br> GET: Retrieves either one or multiple items.<br> POST: Creates a new item. Typically returns a "location" header and the object.<br> PUT: Updates an item. Returns 200 OK.<br> DELETE: Removes an entry from the database. Returns 200 OK.</p>
<p> These methods act on Resources, such as Patient or Appointment, which generally have a 1:1 relationship with Open Dental database tables. These methods frequently correspond to CRUD commands that get sent to the database such as Select, Insert, or Update. Many methods will result in multiple database commands. A failure should return an explanation of why it failed. If a field is not included in a PUT (update), then it will not change the original field in the database. </p>
<p>Visit our <a href="https://www.opendentalsoft.com:8085/forum/">API Forum</a> for questions &amp; answers or to request new features. Phone support for developers is very limited. If answers are not found via our documentation, the API forum is the next best resource. </p>
<p><a href="apisetup.html">API Developer Setup</a></p>
<p><a href="apiimplementation.html">API Implementation</a></p>
<p><a href="apipermissions.html">API Permissions</a>, Pricing tiers for API developers are available on this page.</p>
<p><a href="apilocal.html">API Modes - Local, Service, and Remote</a></p>
<p><a href="apievents.html">API Events</a></p>
<h2>Resources</h2>
<p><a href="apiaccountmodules.html">API AccountModules</a></p>
<p><a href="apiadjustments.html">API Adjustments</a></p>
<p><a href="apiallergies.html">API Allergies</a></p>
<p><a href="apiallergydefs.html">API AllergyDefs</a></p>
<p><a href="apiappointments.html">API Appointments</a></p>
<p><a href="apiappointmenttypes.html">API AppointmentTypes</a></p>
<p><a href="apiapptfields.html">API ApptFields</a></p>
<p><a href="apiapptfielddefs.html">API ApptFieldDefs</a></p>
<p><a href="apiasapcomms.html">API AsapComms</a></p>
<p><a href="apiautonotecontrols.html">API AutoNoteControls</a></p>
<p><a href="apiautonotes.html">API AutoNotes</a></p>
<p><a href="apibenefits.html">API Benefits</a></p>
<p><a href="apicarriers.html">API Carriers</a></p>
<p><a href="apichartmodules.html">API ChartModules</a></p>
<p><a href="apiclaimpayments.html">API ClaimPayments</a></p>
<p><a href="apiclaimprocs.html">API ClaimProcs</a></p>
<p><a href="apiclaims.html">API Claims</a></p>
<p><a href="apiclaimtrackings.html">API ClaimTrackings</a></p>
<p><a href="apiclinics.html">API Clinics</a></p>
<p><a href="apiclockevents.html">API ClockEvents</a></p>
<p><a href="apicodegroups.html">API CodeGroups</a></p>
<p><a href="apicommlogs.html">API Commlogs</a></p>
<p><a href="apicomputers.html">API Computers</a></p>
<p><a href="apicovcats.html">API CovCats</a></p>
<p><a href="apicovspans.html">API CovSpans</a></p>
<p><a href="apidefinitions.html">API Definitions</a></p>
<p><a href="apidiscountplans.html">API DiscountPlans</a></p>
<p><a href="apidiscountplansubs.html">API DiscountPlanSubs</a></p>
<p><a href="apidiseasedefs.html">API DiseaseDefs</a></p>
<p><a href="apidiseases.html">API Diseases</a></p>
<p><a href="apidocuments.html">API Documents</a></p>
<p><a href="apiehrpatients.html">API EhrPatients</a></p>
<p><a href="apieobattaches.html">API EobAttaches</a></p>
<p><a href="apiemployees.html">API Employees</a></p>
<p><a href="apiemployers.html">API Employers</a></p>
<p><a href="apietransmessagetexts.html">API EtransMessageTexts</a></p>
<p><a href="apietranss.html">API Etranss</a></p>
<p><a href="apifamilymodules.html">API FamilyModules</a></p>
<p><a href="apifees.html">API Fees</a></p>
<p><a href="apifeescheds.html">API FeeScheds</a></p>
<p><a href="apihistappointments.html">API HistAppointments</a></p>
<p><a href="apiinsplans.html">API InsPlans</a></p>
<p><a href="apiinssubs.html">API InsSubs</a></p>
<p><a href="apiinsverifies.html">API InsVerifies</a></p>
<p><a href="apilabcases.html">API LabCases</a></p>
<p><a href="apilaboratories.html">API Laboratories</a></p>
<p><a href="apilabturnarounds.html">API LabTurnarounds</a></p>
<p><a href="apimedicationpats.html">API MedicationPats</a></p>
<p><a href="apimedications.html">API Medications</a></p>
<p><a href="apioperatories.html">API Operatories</a></p>
<p><a href="apipatfielddefs.html">API PatFieldDefs</a></p>
<p><a href="apipatfields.html">API PatFields</a></p>
<p><a href="apipatientnotes.html">API PatientNotes</a></p>
<p><a href="apipatientraces.html">API PatientRaces</a></p>
<p><a href="apipatients.html">API Patients</a></p>
<p><a href="apipatplans.html">API PatPlans</a></p>
<p><a href="apipayments.html">API Payments</a></p>
<p><a href="apipayplancharges.html">API PayPlanCharges</a></p>
<p><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7apipayplanlinks.html">API PayPlanLinks</a></p>
<p><a href="apipayplans.html">API PayPlans</a></p>
<p><a href="apipaysplits.html">API PaySplits</a></p>
<p><a href="apiperioexams.html">API PerioExams</a></p>
<p><a href="apiperiomeasures.html">API PerioMeasures</a></p>
<p><a href="apipharmacies.html">API Pharmacies</a></p>
<p><a href="apipopups.html">API Popups</a></p>
<p><a href="apipreferences.html">API Preferences</a></p>
<p><a href="apiprocedurecodes.html">API ProcedureCodes</a></p>
<p><a href="apiprocedurelogs.html">API ProcedureLogs</a></p>
<p><a href="apiprocnotes.html">API ProcNotes</a></p>
<p><a href="apiproctps.html">API ProcTPs</a></p>
<p><a href="apiproviders.html">API Providers</a></p>
<p><a href="apiqueries.html">API Queries</a></p>
<p><a href="apiquickpastecats.html">API QuickPasteCats</a></p>
<p><a href="apiquickpastenotes.html">API QuickPasteNotes</a></p>
<p><a href="apirecalls.html">API Recalls</a></p>
<p><a href="apirecalltypes.html">API RecallTypes</a></p>
<p><a href="apirefattaches.html">API RefAttaches</a></p>
<p><a href="apireferrals.html">API Referrals</a></p>
<p><a href="apireports.html">API Reports</a></p>
<p><a href="apirxpats.html">API RxPats</a></p>
<p><a href="apischeduleops.html">API ScheduleOps</a></p>
<p><a href="apischedules.html">API Schedules</a></p>
<p><a href="apisecuritylogs.html">API SecurityLogs</a></p>
<p><a href="apisecurity.html">API SecurityPerms</a></p>
<p><a href="apisheets.html">API Sheets</a></p>
<p><a href="apisheetfields.html">API SheetFields</a></p>
<p><a href="apisignalods.html">API Signalods</a></p>
<p><a href="apistatements.html">API Statements</a></p>
<p><a href="apisubscriptions.html">API Subscriptions</a></p>
<p><a href="apisubstitutionlinks.html">API SubstitutionLinks</a></p>
<p><a href="apitasklists.html">API TaskLists</a></p>
<p><a href="apitasknotes.html">API TaskNotes</a></p>
<p><a href="apitasks.html">API Tasks</a></p>
<p><a href="apitoothinitials.html">API ToothInitials</a></p>
<p><a href="apitreatplanattaches.html">API TreatPlanAttaches</a></p>
<p><a href="apitreatplans.html">API TreatPlans</a></p>
<p><a href="apiusergroupattaches.html">API UserGroupAttaches</a></p>
<p><a href="apiusergroups.html">API UserGroups</a></p>
<p><a href="apiuserods.html">API Userods</a></p>
		</div>
	</div>
</body>
</html>```
