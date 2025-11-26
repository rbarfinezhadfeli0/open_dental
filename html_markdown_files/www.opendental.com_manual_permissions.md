# File: ./www.opendental.com/manual/permissions.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Permissions</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('permissions','securityusergroups','security','+setup','mainmenu','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/permissions.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/permissions.html" >v24.2</option><option value="https://www.opendental.com/manual241/permissions.html" >v24.1</option><option value="https://www.opendental.com/manual233/permissions.html" >v23.3</option><option value="https://www.opendental.com/manual232/permissions.html" >v23.2</option><option value="https://www.opendental.com/manual231/permissions.html" >v23.1</option><option value="https://www.opendental.com/manual224/permissions.html" >v22.4</option><option value="https://www.opendental.com/manual223/permissions.html" >v22.3</option><option value="https://www.opendental.com/manual222/permissions.html" >v22.2</option><option value="https://www.opendental.com/manual221/permissions.html" >v22.1</option><option value="https://www.opendental.com/manual214/permissions.html" >v21.4</option><option value="https://www.opendental.com/manual213/permissions.html" >v21.3</option><option value="https://www.opendental.com/manual212/permissions.html" >v21.2</option><option value="https://www.opendental.com/manual211/permissions.html" >v21.1</option><option value="https://www.opendental.com/manual205/permissions.html" >v20.5</option><option value="https://www.opendental.com/manual204/permissions.html" >v20.4</option><option value="https://www.opendental.com/manual203/permissions.html" >v20.3</option><option value="https://www.opendental.com/manual202/permissions.html" >v20.2</option><option value="https://www.opendental.com/manual201/permissions.html" >v20.1</option><option value="https://www.opendental.com/manual194/permissions.html" >v19.4</option><option value="https://www.opendental.com/manual193/permissions.html" >v19.3</option><option value="https://www.opendental.com/manual192/permissions.html" >v19.2</option><option value="https://www.opendental.com/manual191/permissions.html" >v19.1</option><option value="https://www.opendental.com/manual184/permissions.html" >v18.4</option><option value="https://www.opendental.com/manual183/permissions.html" >v18.3</option><option value="https://www.opendental.com/manual182/permissions.html" >v18.2</option><option value="https://www.opendental.com/manual181/permissions.html" >v18.1</option><option value="https://www.opendental.com/manual174/permissions.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Permissions</p></div>
<div class="GeneralPageContent">
<p>In <a href="securityusergroups.html">User Group</a>, there is a list of Permissions for each User Group.</p>
<p>Refer to the table below for details about each permission and its behavior. See <a href="audittrailpermissions.html">Audit Trail Permissions</a> for a list of permissions that appear in the audit trail.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Permission: The name of the permission as it appears in the Security window.</li>
<li>Internal Name: The name of the permission as defined in Open Dental code. This information is useful for programmers and when reading the audit trail.</li>
<li>Behavior: What the permission allows a user to do in Open Dental. Buttons a user doesn't have permission to use are frequently hidden or grayed out. There are different kinds of behavior: <ul>
<li>Allow or block access to an area.</li>
<li>Edit individual items. This almost always includes delete permission as well. Users without the permission can still see the item.</li>
<li>Create new items.</li>
</ul>
</li>
<li>Lock Dates: User Group Lock Dates and Global Lock Dates work independently of each other. See <a href="securitylockdates.html">Lock Dates</a>.  <ul>
<li>User Group Lock Date: Permissions that can have date or day limits set by user group. For example, only allows users in a user group to change insurance payments if they occur within a set amount of days or before a specific date.</li>
<li>Global Lock Date: Permissions affected when a Global Lock Date is set at the bottom of the Security window. The Global Lock Date prevents editing of old items or entry of new backdated items.</li>
</ul>
</li>
</ul>
<p><div class="Note">Note: When using ODTouch, actions may be grayed out when a user does not have the corresponding permission. </div>
</p>
<p><table class="simpletable">
<tr>
<th style="width:16%">Permissions</th>
<th style="width:16%">Internal Name</th>
<th style="width:16%">Behavior</th>
<th style="width:16%">User Group Lock Date</th>
<th style="width:16%">Global Lock Date</th>
<th style="width:16%">Date used to calculate</th>
</tr>
<tr>
<td><b>Main Menu</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>File</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Graphics Edit</td>
<td>GraphicsEdit</td>
<td>Access and change <a href="graphics.html">Graphics Preferences</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Choose Database</td>
<td>ChooseDatabase</td>
<td>Access the <a href="choosedatabase.html">Choose Database</a> window.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Printer Setup</td>
<td>PrinterSetup</td>
<td>Allow access to the Printer Setup window.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Setup - Covers a wide variety of setup functions</td>
<td>Setup</td>
<td>Many Setup functions. See <a href="permissionssetup.html">"Setup" Permission</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Chart - EHR</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>EHR Emergency Access</td>
<td>EHREmergencyAccess</td>
<td>Gives users with the Security Admin permission temporary access to the Family module if <a href="ehremergency.html">EHR Emergency</a> Access is turned on. Most users have this anyways.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>EHR Measure Event Edit</td>
<td>EHRMeasureEventEdit</td>
<td>Edit the date of an EHR measure event (action that affects an EHR numerator).</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Advanced Setup</b></td>
<td>Advertising</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Replication Setup</td>
<td>ReplicationSetup</td>
<td>Allow access <a href="replication.html">Replication</a> setup.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Show Features</td>
<td>ShowFeatures</td>
<td>Allow access to Show Features.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Auto/Quick Note Edit</td>
<td>AutoNoteQuickNoteEdit</td>
<td>Create or edit <a href="autonotesetup.html">Auto Note Setup</a> and <a href="quickpastenotessetup.html">Quick Paste Notes</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Definitions</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Definition Edit</td>
<td>DefEdit</td>
<td>Add or edit <a href="definitions.html">Definitions</a>. Logs as an entry in the Audit Trail when a definition is edited.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Dental School</b></td>
<td></td>
<td>Dental School permissions always display but are only active when Dental Schools is enabled in Show Features. </td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Instructor Edit</td>
<td>AdminDentalInstructors</td>
<td>Add or edit providers who are <a href="dsinstructors.html">Dental School Instructors</a>. Must also have Provider Add permission.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Student Edit</td>
<td>AdminDentalStudents</td>
<td>Add or edit providers who are <a href="dsstudents.html">Dental School Students</a>. Must also have Provider Add permission.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Admin Evaluation Edit</td>
<td>AdminDentalEvaluations</td>
<td><ul>
<li>Users with permission can access/edit <a href="dsfillevaluation.html">Student Evaluations</a>, but not add.</li>
<li>Users without the permission cannot access the area.</li>
<li>Instructors without the permission can access/edit/add but not filter by instructor </li>
<li>Instructors with the permission can access/edit/add and can filter by instructor</li>
</ul>
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Schedules - Practice and Provider</td>
<td>Schedules</td>
<td>Alter provider and employee <a href="schedule.html">Schedules</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Security</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Security Admin</td>
<td>SecurityAdmin</td>
<td>Allow access to administrator functions. See <a href="permissionssecurityadmin.html">"Security Admin" Permission</a>. At least one user must have this permission. Tracks changes to permission in Audit Trail. </td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Add New User</td>
<td>AddNewUser</td>
<td>Allow user to add new <a href="securityusers.html">User Edit</a> from the main menu, Setup, Add User.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Manage High Security Properties</td>
<td>ManageHighSecurityProgProperties</td>
<td>Allow user to add or edit a password required for program links.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Update Install</td>
<td>UpdateInstall</td>
<td>Allow user to check for and install updates. Users without this permission can still access the <a href="update.html">Update</a> window, but will not be able to check for or install updates. Logs audit trail entry when Update window is opened and when Open Dental is checked for updates.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>BadgeId Edit</td>
<td>BadgeIDEdit</td>
<td>Allow a user to edit Badge IDs for users from Setup, <a href="securitybadges.html">Security Badges</a>. Users with the Security Admin permission can edit Badge IDs from User Edit, regardless of this permission.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Lists</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Procedure Code Edit</td>
<td>ProcCodeEdit</td>
<td>Add or edit procedure codes from Lists, Procedure Codes. Logs as entry in Audit Trail when a procedure code is edited from Lists, Procedure Codes.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Fee Schedule Edit</td>
<td>FeeSchedEdit</td>
<td>Access <a href="feeschedules.html">Fee Schedules</a> list or edit fees in <a href="procedurecodes.html">Procedure Codes</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Allow Editing Fee Schedule While Receiving Claims</td>
<td>AllowFeeEditWhileReceivingClaim</td>
<td>Allow editing fee schedule in the Edit Procedure Code window when receiving claims. Users with this permission will be prompted if they want to update the allowed fee schedule when receiving claims. It is not possible for a user to have Fee Sched Edit permission but not Allow Editing Fee Schedule While Receiving Claims permission. Only prompts when Blue Book is set to<i> None</i> or <i>Legacy Blue Book</i>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Provider Fee Edit</td>
<td>ProviderFeeEdit</td>
<td>Enter and delete provider-specific fee schedule overrides.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Medication Definition Edit</td>
<td>MedicationDefEdit</td>
<td>Add, edit, or delete medications in the Medication List.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Allergy Definition Edit</td>
<td>AllergyDefEdit</td>
<td>Add, edit, or delete an allergy in the Allergies List.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Allergy Merge</td>
<td>AllergyMerge</td>
<td>Use the Merge tool in the Allergies List.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Problem Definition Edit</td>
<td>ProblemDefEdit</td>
<td>Add, edit, or delete a problem in the Problems List.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Providers</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Provider Add</td>
<td>ProviderAdd</td>
<td>Allow a user to add a new provider.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Provider Edit</td>
<td>ProviderEdit</td>
<td>Allow a user to edit an existing provider.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Providers - Alphabetize</td>
<td>ProviderAlphabetize</td>
<td>Enable the Alphabetize Provider button on the Provider Setup window.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Clinics</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Clinic Edit</td>
<td>ClinicEdit</td>
<td>Allow a user to access the Clinic List or make edits to a clinic.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Unrestricted Patient Search</td>
<td>UnrestrictedSearch</td>
<td>Allow clinic restricted users to search all patients in the database. Allow user to change patient's clinic within the Family module.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Referrals</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Referral Add</td>
<td>ReferralAdd</td>
<td>Add a referral to the main <a href="referrals.html">Referrals</a> List.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Referral Edit</td>
<td>ReferralEdit</td>
<td>Edit or delete a referral in the main Referral List.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Referral, Attach to Patient</td>
<td>RefAttachAdd</td>
<td>Attach Referrals to patients.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Referral, Delete from Patient</td>
<td>RefAttachDelete</td>
<td>Detach Referrals from patients.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Reports</b></td>
<td>Reports</td>
<td>Grant access to <a href="reportsstandard.html">Standard Reports</a>, To block or grant access to specific reports, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Production and Income, - View All Providers</td>
<td>ReportProdIncAllProviders</td>
<td>Access <a href="productionincome.html">Production and Income</a> reports for all providers. This applies to regular reports, and graphic reports. If a provider does not have this permission, they can still view their own reports, but only when they are logged on.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Daily Reports - View All Providers</td>
<td>ReportDailyAllProviders</td>
<td>Access <a href="reportdailyadj.html">Daily Adjustments</a>, <a href="reportdailypayments.html">Daily Payments</a>, <a href="reportdailyprocs.html">Daily Procedures</a>, and <a href="reportdailywriteoffs.html">Daily Write-offs</a> reports for all providers. If a provider does not have this permission, they can still view their own reports, but only when they are logged on.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Reports - Graphical Setup</td>
<td>GraphicalReportSetup</td>
<td>Set up and edit <a href="reportsgraphic.html">Graphic Reports</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Reports - Graphical</td>
<td>GraphicalReports</td>
<td>View graphic reports.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>User Query</td>
<td>UserQuery</td>
<td>Run and change variables in <i>released </i><a href="queryoverview.html">User Query</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>User Query Admin</td>
<td>UserQueryAdmin</td>
<td>Write, edit, and run user queries, save and delete <a href="queryfavorites.html">Query Favorites</a>, and mark queries as <i>released</i> or <i>not released</i>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> CommandQuery</td>
<td>CommandQuery</td>
<td>Run SQL commands (non-SELECT statements) on normal tables in the User Query window.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>New Claims from Procs Not Billed Report</td>
<td>NewClaimsProcNotBilled </td>
<td>Allows ability to use <a href="reportprocsnotbilledins.html">Procedures Not Billed to Insurance Report</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Tools</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Misc Tools</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Medication Merge</td>
<td>MedicationMerge</td>
<td>Access the <a href="mergemedications.html">Merge Medications</a> tool.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Patient Merge</td>
<td>PatientMerge</td>
<td>Access the <a href="mergepatients.html">Merge Patients</a> tool.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Provider Merge</td>
<td>ProviderMerge</td>
<td>Access the <a href="mergeproviders.html">Merge Providers</a> tool.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Referral Merge</td>
<td>ReferralMerge</td>
<td>Access the <a href="mergereferrals.html">Merge Referrals</a> tool.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Audit Trail</td>
<td>AuditTrailAccess</td>
<td>Access the <a href="audittrail.html">Audit Trail</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Certifications - Employee Completion</td>
<td>CertificationEmployee</td>
<td>Allow a user to add a Date Completed to a certification.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Certifications - Setup</td>
<td>CertificationSetup</td>
<td>Access Certification Setup.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Repeating Charge Tool</td>
<td>RepeatChargeTool</td>
<td>Allow a user to run <a href="repeatingcharges.html">Repeating Charges</a> and the <a href="databasemaintenance.html">Database Maintenance</a>, Multi Repeat Charge tool.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Setup Wizard</td>
<td>SetupWizard</td>
<td>Allow a user access to the Setup Wizard.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Wiki Admin</td>
<td>WikiAdmin</td>
<td>Allow a user to <i>lock</i> a <a href="wiki.html">Wiki</a> page and edit a <i>locked</i> page.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Wiki List Setup</td>
<td>WikiListSetup</td>
<td>Create or delete <a href="wikilists.html">Wiki List</a> and add list columns.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Web Forms Access</td>
<td>WebFormAccess</td>
<td>Allows access to web forms.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Zoom</td>
<td>Zoom</td>
<td>Allows access to Zoom window.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>eServices</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>EServices Setup</td>
<td>EServicesSetup</td>
<td>Edit settings in the <a href="eservicessetup.html">eServices Setup</a> window and <a href="mobilesettings.html">Mobile Settings</a> window. The <a href="econnector.html">eConnector</a> is only monitored when a user with this permission is logged on. Logs an entry in the Audit Trail when the eConnector is installed for the first time.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Help</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Query Monitor View</td>
<td>QueryMonitor</td>
<td>Allows access to the Query Monitor.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Main Toolbar</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Advertising - Postcards Send</td>
<td></td>
<td>Determines access to <a href="postcardssetup.html">Postcards Setup (Advertising)</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Commlog Create</td>
<td>CommlogCreate</td>
<td>Create <a href="commlog.html">Commlog</a> entries. </td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Commlog Edit</td>
<td>CommlogEdit</td>
<td>Edit <a href="commlog.html">Commlog</a> entries.</td>
<td>X</td>
<td>X</td>
<td>CommDateTime</td>
</tr>
<tr>
<td>Email Send</td>
<td>EmailSend</td>
<td><a href="emailmessage.html">Email Message Edit</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Text Message View</td>
<td>TextMessageView</td>
<td> Allows access to the <a href="textmsginbox.html">Text Messaging Mailbox</a> to view sent or received text messages.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Text Message Send</td>
<td>TextMessageSend</td>
<td> Allow users to send manual text messages from the <a href="textmsginbox.html">Text Messaging Mailbox</a>, <a href="asaplist.html">ASAP List</a>, <a href="confirmationlist.html">Confirmation List</a>, <i>Text</i> toolbar button, and right-click options in <a href="appointments.html">Appointments Module</a>. Does not affect automated texting.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Webmail Send</td>
<td>WebmailSend</td>
<td><a href="securewebmailsend.html">WebMail</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Sheet Edit</td>
<td>SheetEdit</td>
<td>Edit sheets attached to patients and change the patient a sheet is attached to. Also tracks when <a href="../site/webforms.html">Web Forms Feature</a> are retrieved and attached to patients.</td>
<td>X</td>
<td>X</td>
<td>DateEntryC</td>
</tr>
<tr>
<td> Sheet Delete</td>
<td>SheetDelete</td>
<td>Delete sheets attached to a patient (See <a href="sheetsfillout.html">Fill Sheet</a>).</td>
<td>X</td>
<td>X</td>
<td>DateTimeSheet</td>
</tr>
<tr>
<td>Task Edit</td>
<td>TaskEdit</td>
<td>Edit <a href="tasks.html">Task</a> descriptions or attachments. Track task additions and edits in the audit trail. Users without this permission will still be able to add new attachments to existing tasks and can edit their own task descriptions, but will not be able to edit existing attachments once the task is created or edit task descriptions of other users.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Task Note Edit</td>
<td>TaskNoteEdit</td>
<td>Edit task notes.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Task Delete</td>
<td>TaskDelete</td>
<td>Delete tasks and task notes.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Task List Create</td>
<td>TaskListCreate</td>
<td>Create a <a href="tasklists.html">Task List</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Popup Edit (other users)</td>
<td>PopupEdit</td>
<td>Edit or delete <a href="popups.html">Popups</a> created by a user other than the currently logged on user. Users without this permission can still edit and delete their own popups.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Appointments Module</b></td>
<td>AppointmentsModule</td>
<td>Access the <a href="appointments.html">Appointments Module</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Appointment Create</td>
<td>AppointmentCreate</td>
<td>Create new appointments.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Appointment Move</td>
<td>AppointmentMove</td>
<td>Drag scheduled or completed appointments to new operatories. Copy appointments to the <a href="apptpinboard.html"> Pinboard</a>. Move appointments to the <a href="unscheduled.html">Unscheduled List</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Appointment Resize</td>
<td>AppointmentResize</td>
<td>Edit a scheduled or completed appointment length.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Appointment Edit</td>
<td>AppointmentEdit</td>
<td>Edit scheduled appointments, <a href="apptbreak.html">Break Appointment</a>, and delete appointments from the Unscheduled List. Requires <i>Appointment Resize</i> permission to edit appointment length.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Appointment Delete</td>
<td>AppointmentDelete</td>
<td>Delete existing scheduled appointments.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Completed Appointment Edit</td>
<td>AppointmentCompleteEdit</td>
<td>Edit completed appointments. Requires <i>Appointment Resize</i> permission to edit appointment length.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>View Appointment Audit Trail</td>
<td>ViewAppointmentAuditTrail</td>
<td>View the Appointment Audit Trail.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>eCW Appointment Revise</td>
<td>EcwAppointmentRevise</td>
<td>Only used by <a href="bridgeeclinicalworks.html">eClinicalWorks</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Insurance Plan Verification Assign</td>
<td>InsPlanVerifyList</td>
<td>Determines if a user can be assigned to insurance verifications in the <a href="insverifylist.html">Insurance Verification List</a> (whether the user is listed as an option under <i>For User</i>).</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Appointment Confirmation Status Edit</td>
<td>ApptConfirmStatusEdit</td>
<td>Edit Appointment Confirmation Status. Logs changes to confirmation status in the audit trail.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Blockouts</td>
<td>Blockouts</td>
<td>Add, edit, copy/paste, or delete <a href="blockouts.html">Blockouts</a> of any type. Logs an audit trail entry when a blockout is added, edited, deleted, cut, copied, pasted, or cleared. Users without the permission, can only add, edit, or delete blockouts flagged as NS or DC.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Family Module</b></td>
<td>FamilyModule</td>
<td>Access the <a href="family.html">Family Module</a>. Logged as FamilyModuleViewed in the Audit Trail</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Insurance Plan Edit</td>
<td>InsPlanEdit</td>
<td> Edit <a href="insplan.html">Insurance Plan</a> information, <a href="benefitinfo.html">Benefit Information</a> and <a href="discountplans.html">Discount Plans</a> or use Change options in the <a href="feeschedulecheckfees.html">Check Insurance Plan Fees</a> tool. Logs an entry in the Audit Trail when insurance plan information is edited during import of an 834. Users without this permission will still be able to access the <a href="insplan.html">Insurance Plan</a> window in order to request <a href="ebenefits.html">Electronic Eligibility and Benefits</a> and view eBenefit history. </td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Change existing Ins Plan using Pick From List</td>
<td>InsPlanPickListExisting</td>
<td>In the <a href="insplan.html">Insurance Plan</a>, use the Pick From List button to select a new insurance plan before dropping the existing plan.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Insurance Verification</td>
<td>InsuranceVerification</td>
<td>Allows access to the <a href="insverifylist.html">Insurance Verification List</a>. </td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Insurance Plan Change Assignment of Benefits</td>
<td>InsPlanChangeAssign</td>
<td>Change the Assignment of Benefits setting on the Edit Insurance Plan window. Change Insurance plans default to show assignment of benefits setting in Preferences.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Insurance Plan Change Subscriber</td>
<td>InsPlanChangeSubsc</td>
<td>Change the subscriber on the Edit Insurance Plan window or use the <a href="subscribersmove.html">Move Subscribers</a> tool.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Insurance Plan Ortho Edit</td>
<td>InsPlanOrthoEdit</td>
<td>Edit information on the Edit Insurance Plan window, Ortho tab.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Carrier Create</td>
<td>CarrierCreate</td>
<td>Create <a href="carriers.html">Carriers</a>. Does not stop <a href="trojan.html">Trojan Bridge</a> or XML imports from creating new carriers. Users must also have <i>Carrier Edit</i> permission.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Carrier Edit</td>
<td>CarrierEdit</td>
<td>Edit existing <a href="carriers.html">Carriers</a>. Users without <i>Insurance Plan Edit</i> permission can only edit carriers from the Carriers List.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Patient Billing Type Edit</td>
<td>PatientBillingEdit</td>
<td>Change a patient's billing type or change <i>Included in Super Family Billing</i> in <a href="patientedit.html">Edit Patient Information</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Patient Primary Provider Edit</td>
<td>PatPriProvEdit</td>
<td>Allow or block user from changing a patient's primary provider on the Edit Patient Information window or via the Provider List. Logs entry in audit trail when primary provider is changed.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Patient Restriction Edit</td>
<td>PatientApptRestrict</td>
<td>Change the setting of the <i>Appointment scheduling is restricted</i> checkbox.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Archived Patient Select</td>
<td>ArchivedPatientSelect</td>
<td>Select a patient with a status of <i>Archived</i>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Archived Patient Edit</td>
<td>ArchivedPatientEdit</td>
<td>Edit archived patient information in the <a href="patientedit.html">Edit Patient Information</a> window.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Patient Social Security Number View</td>
<td>PatientSSNView</td>
<td>View full patient SSN number in the <a href="family.html">Family Module</a>, <a href="patientselect.html">Select Patient</a> window, and <a href="patientedit.html">Edit Patient Information</a> window. Only needed if the <i>Mask patient Social Security Numbers</i> preference is enabled. Users wilth <i>Insurance Verification</i> permission will be able to see full SSN in the <a href="insverifylist.html">Insurance Verification List</a> without this permission.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Patient Birthdate View</td>
<td>PatientDOBView</td>
<td>View full patient birthdate in the <a href="family.html">Family Module</a>, <a href="patientselect.html">Select Patient</a> window, and <a href="patientedit.html">Edit Patient Information</a> window. Users wilth <i>Insurance Verification</i> permission will be able to see full birthdates in the <a href="insverifylist.html">Insurance Verification List</a> without this permission. </td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Patient Edit</td>
<td>PatientEdit</td>
<td>Determines access to the Edit Patient Information window.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Super Family Disband</td>
<td>SuperFamilyDisband</td>
<td>Allow or block a user from using the Disband option for a Super Family.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Account Module</b></td>
<td>AccountModule</td>
<td>Access the <a href="account.html">Account Module</a>. Logged as AccountModuleViewed in the Audit Trail</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Claim</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Claim Send</td>
<td>ClaimSend</td>
<td>Send or print an <a href="claimsend.html">Insurance claim</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Claim Sent Edit</td>
<td>ClaimSentEdit</td>
<td>Edit claims that have already been sent.</td>
<td>X</td>
<td></td>
<td>DateSent</td>
</tr>
<tr>
<td> Claim Delete</td>
<td>ClaimDelete</td>
<td>Delete a claim.</td>
<td>X</td>
<td></td>
<td>SecDateEntry</td>
</tr>
<tr>
<td>Claim History Edit</td>
<td>ClaimHistoryEdit</td>
<td>Edit the <a href="claimtabstatus.html">Claim, Status History</a>.</td>
<td>X</td>
<td></td>
<td>DateTimeEntry</td>
</tr>
<tr>
<td>Claim View</td>
<td>ClaimView</td>
<td>(rarely used) Allow user to view a claim. Users who do not have this permission also cannot create a claim.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Claim Procedure Provider Edit When Attached to Claim</td>
<td>ClaimProcClaimAttachedProvEdit</td>
<td>Edit providers on Claim Procedures that are attached to a claim.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Claim Procedure Fee Billed to Ins Edit</td>
<td>ClaimProcFeeBilledToInsEdit </td>
<td>Edit the Fee Billed to Ins on Claim Procedures</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Claim Procedure Received Edit</td>
<td>ClaimProcReceivedEdit</td>
<td>Edit Claim Procedures with a <i>Received</i> or <i>Supplemental</i> status. Date limitations are ignored when date is invalid.</td>
<td>X</td>
<td></td>
<td>DateEntry</td>
</tr>
<tr>
<td>Update Custom Tracking</td>
<td>UpdateCustomTracking</td>
<td>Enable the Update Claim Tracking button in the <a href="reportoutins.html">Outstanding Insurance Claims Report</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>PreAuth Sent Edit</td>
<td>PreAuthSentEdit</td>
<td>Edit <a href="preauth.html">Preauthorization</a> that have already been sent.</td>
<td>X</td>
<td></td>
<td>SecDateEntry</td>
</tr>
<tr>
<td>Account Procs Quick Add</td>
<td>AccountProcsQuickAdd</td>
<td>Allow user to add procedures to the account via <a href="quickprocs.html">Quick Procs</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Insurance Payment</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Insurance Payment Create</td>
<td>InsPayCreate</td>
<td><p>Receive a Claim, <a href="claimpayfinalize.html">Finalize Insurance Payment</a>, create a <a href="claimpaymentbatch.html">Batch Insurance Payment</a>, or Access <a href="claimsERA835.html">ERA</a> window. Users without this permission can still enter insurance pay estimates on <a href="preauth.html">Preauthorizations</a>.</p>
</td>
<td></td>
<td>X</td>
<td>PaymentDate</td>
</tr>
<tr>
<td> Insurance Payment Edit</td>
<td>InsPayEdit</td>
<td>Edit received procedures, finalized payments, and payment details on a batch insurance payment.</td>
<td>X</td>
<td>X</td>
<td>DateCP</td>
</tr>
<tr>
<td> Insurance Write-off Edit</td>
<td>InsWriteOffEdit</td>
<td>Edit write-offs and write-off estimates, mark procedure Do Not Bill to Ins.</td>
<td>X</td>
<td></td>
<td>DateEntryC</td>
</tr>
<tr>
<td>Payment</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Payment Create</td>
<td>PaymentCreate</td>
<td> Enter a <a href="payment.html">Payment</a>. Also needed to create an <a href="incometransfer.html">Income Transfer</a>.</td>
<td>X</td>
<td>X</td>
<td>PaymentDate</td>
</tr>
<tr>
<td> Payment Edit</td>
<td>PaymentEdit</td>
<td>Edit existing patient payments or income transfers.</td>
<td>X</td>
<td>X</td>
<td>PaymentDate</td>
</tr>
<tr>
<td> Pay Split Create after Global Lock Date</td>
<td>SplitCreatePastLockDate</td>
<td>Add new positive or negative <a href="paysplit.html">Pay Splits</a> for payments created before the Global Lock Date. Does not allow editing or deleting existing pay splits, editing other payment details, or deleting payments. The sum of all splits must equal the payment amount.</td>
<td></td>
<td>X</td>
<td></td>
</tr>
<tr>
<td>Payment Plan</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Pay Plan Edit</td>
<td>PayPlanEdit</td>
<td>Create, edit, close, or delete a <a href="paymentplandynamic.html">Payment Plan</a>, <a href="paymentplanins.html">Insurance Payment Plan</a>, or <a href="paymentplanpatient.html">Old Payment Plan</a>. Logs an entry in the Audit Trail when a plan is created, reopened, signed, or closed, when a signature is invalidated, or when the guarantor, amount, insurance plan, or note is changed. Global Lock Date does not apply when closing a payment plan.</td>
<td></td>
<td>X</td>
<td>PayPlanDate</td>
</tr>
<tr>
<td>Pay Plan Charge Date Edit</td>
<td>PayPlanChargeDateEdit</td>
<td>Edit the date of a payment plan charge on payment plans with APR.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Adjustment</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Adjustment Create</td>
<td>AdjustmentCreate</td>
<td>Create <a href="adjustments.html">Adjustments</a> and <a href="procedurefinancial.html">TP Procedure Discounts</a>.</td>
<td></td>
<td>X</td>
<td>AdjDate</td>
</tr>
<tr>
<td> Adjustment Edit</td>
<td>AdjustmentEdit</td>
<td>Edit adjustments.</td>
<td>X</td>
<td>X</td>
<td>AdjDate</td>
</tr>
<tr>
<td> Adjustment Edit Zero Amount</td>
<td>AdjustmentEditZero</td>
<td>If user does not have Adjustment Edit permission, allow user to create or delete adjustments with a zero amount and today's date as the <i>Entry Date</i>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Adjustment Type Deny</td>
<td>AdjustmentTypeDeny</td>
<td>Deny access to specific adjustments in the <a href="account.html">Account Module</a>. When checked, the Adjustment Definition Picker window will open. See <a href="adjustments.html">Adjustment</a> for more information.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Statement</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Export CSV</td>
<td>StatementCSV</td>
<td>Allow user to export statements .csv files.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>TreatmentPlan Module</b></td>
<td>TPModule</td>
<td>Access the <a href="treatmentplan.html">Treatment Plan Module</a>. Logged as TreatmentPlanModuleViewed in the Audit Trail</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Edit Treatment Plan</td>
<td>TreatPlanEdit</td>
<td>Edit a saved Treatment Plan.</td>
<td>X</td>
<td></td>
<td>DateTP</td>
</tr>
<tr>
<td>Edit Treatment Plan Presenter</td>
<td>TreatPlanPresenterEdit</td>
<td>Change the presenter when Editing a Saved Treatment Plan.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Sign Treatment Plan</td>
<td>TreatPlanSign</td>
<td>Allow a user to sign a saved Treatment Plan.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Chart Module</b></td>
<td>ChartModuleViewed</td>
<td>Access the <a href="chart.html">Chart Module</a>. Logged as ChartModuleViewed in the Audit Trail.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Procedure</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Edit EO or EC Procedures</td>
<td>ProcExistingEdit</td>
<td>Allow a user to edit a procedure with a status of Existing Other (EO) or Existing Current (EC).</td>
<td>X</td>
<td></td>
<td>DateEntryC</td>
</tr>
<tr>
<td>Show Procedure Fee</td>
<td>ProcEditShowFee</td>
<td>Show (check) or hide (uncheck) the Amount textbox in the Procedure Info window only. It does not affect the Chart View. This permission might not be very useful, and was added for a specific customer for a unique situation.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>TP Procedure Delete</td>
<td>ProcDelete</td>
<td>Delete non-completed procedures. </td>
<td>X</td>
<td></td>
<td>DateEntryC</td>
</tr>
<tr>
<td>Procedure Note (full)</td>
<td>ProcedureNoteFull</td>
<td>Make changes to any procedure note or signature.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Procedure Note (same user)</td>
<td>ProcedureNoteUser</td>
<td>Only allow user to make changes to procedure notes that are unsigned or they have signed. Block user from changing procedure notes signed by others.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Group Note Edit (other users, signed)</td>
<td>GroupNoteEditSigned</td>
<td>Allow user to edit group notes signed by other users.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Completed Procedure</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Create Completed Procedure (or set complete)</td>
<td>ProcComplCreate</td>
<td>Set appointments or individual procedures complete. <a href="apptcomplete.html">Set Appointment Complete</a>.</td>
<td></td>
<td>X</td>
<td>ProcDate</td>
</tr>
<tr>
<td>Edit Completed Procedure</td>
<td>ProcCompleteEdit</td>
<td>Edit a completed procedure (e.g. date, procedure, time, description, tooth number, surface, amount, and date of treatment plan).</td>
<td>X</td>
<td>X</td>
<td></td>
</tr>
<tr>
<td>Change Status or Delete a Completed Procedure</td>
<td>ProcCompleteStatusEdit</td>
<td>Change the status of a completed procedure, or delete a completed procedure.</td>
<td>X</td>
<td>X</td>
<td></td>
</tr>
<tr>
<td>Edit Note on Completed Procedure</td>
<td>ProcCompleteNote</td>
<td>Edit a note or signature on a completed procedure.<br/><br/>  Unchecking this permission also unchecks 'Edit EO or EC Procedures'. </td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Add Adjustment to Completed Procedure</td>
<td>ProcCompleteAddAdj</td>
<td>Add or link an adjustment to a completed procedure. <br/><br/> Unchecking this permission also unchecks 'Edit EO or EC Procedures'. </td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Miscellaneous Edit on Completed Procedure</td>
<td>ProcedureCompleteEditMisc</td>
<td>Make miscellaneous changes to a completed procedure (e.g. Hide graphics, edit Medical and Misc tab data, etc).<br/><br/>  Unchecking this permission also unchecks 'Edit EO or EC Procedures'. </td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Rx</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Rx Create</td>
<td>RxCreate</td>
<td>Create prescriptions. For practices using <a href="../site/electronicrx.html">eRx</a>, also allows users access to eRx interface.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Rx Edit</td>
<td>RxEdit</td>
<td>Edit or delete existing prescriptions.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Ortho Chart Edit (full)</td>
<td>OrthoChartEditFull</td>
<td>Create, sign, or edit any <a href="orthochart.html">Ortho Chart</a> dated entry.</td>
<td>X</td>
<td></td>
<td>OrthoDate</td>
</tr>
<tr>
<td>Ortho Chart Edit (same user, signed)</td>
<td>OrthoChartEditUser</td>
<td>Only allow user to edit or sign ortho chart entries that are unsigned, or that they created or signed. Block user from editing or signing entries created by others.</td>
<td>X</td>
<td></td>
<td>OrthoDate</td>
</tr>
<tr>
<td>Perio Chart Edit</td>
<td>PerioEdit</td>
<td>Edit a dated Perio exam.</td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Perio Chart Copy</td>
<td>PerioEditCopy</td>
<td>Make a copy of an existing Perio exam. Also requires the <i>Perio Chart Edit</i> permission.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Anesthesia</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Intake Anesthetic Medications into Inventory</td>
<td>AnesthesiaIntakeMeds</td>
<td>Only used by the <a href="anesthesia.html">Anesthesia</a> plugin.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Edit Anesthetic Records; Edit Adjust Inventory Counts</td>
<td>AnesthesiaControlMeds</td>
<td>Only used by the Anesthesia plugin.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Pat Medication List Edit</td>
<td>MedicationEdit</td>
<td>Add or edit medications for a patient.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Pat Allergy List Edit</td>
<td>PatAllergyListEdit</td>
<td>Add or edit allergies for a patient.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Pat Problem List Edit</td>
<td>ProblemDefEdit </td>
<td>Add or edit problems for a patient.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Chart View Edit</td>
<td>ChartViewsEdit</td>
<td>Add, edit, or re-order <a href="showtabchart.html">Chart Views</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Imaging Module</b></td>
<td>ImagesModule</td>
<td>Access the <a href="images.html">Imaging Module</a>. Logged as ImagesModuleViewed in the Audit Trail.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Image Create</td>
<td>ImageCreate</td>
<td>Add images (Acquire, Video, Import, or Paste buttons).</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Image Delete</td>
<td>ImageDelete</td>
<td>Delete Images.</td>
<td>X</td>
<td></td>
<td>DateCreated</td>
</tr>
<tr>
<td>Image Edit</td>
<td>ImageEdit</td>
<td>Edit an image (Crop, size, flip, etc).</td>
<td>X</td>
<td></td>
<td>DateCreated</td>
</tr>
<tr>
<td>Image Export</td>
<td>ImageExport</td>
<td>Export an image.</td>
<td>X</td>
<td></td>
<td>DateCreated</td>
</tr>
<tr>
<td><b>Manage Module</b></td>
<td>ManageModule</td>
<td>Access the <a href="manage.html">Manage Module</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Accounting</td>
<td>Accounting</td>
<td>Access <a href="accounting.html">Accounting</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Accounting Create Entry</td>
<td>AccountingCreate</td>
<td>Create accounting entries.</td>
<td>X</td>
<td></td>
<td>DateDisplayed</td>
</tr>
<tr>
<td>Accounting Edit Entry</td>
<td>AccountingEdit</td>
<td>Edit accounting entries.</td>
<td>X</td>
<td></td>
<td>DateDisplayed</td>
</tr>
<tr>
<td>Billing</td>
<td>Billing</td>
<td>Access <a href="billing.html">Billing</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Deposit Slips</td>
<td>DepositSlips</td>
<td>Edit <a href="depositslip.html">DepositSlips</a>.</td>
<td>X</td>
<td></td>
<td>DepositDate</td>
</tr>
<tr>
<td>Backup</td>
<td>Backup</td>
<td>Access <a href="backups.html">Backups</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Time Card</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> Edit All Time Cards</td>
<td>TimeCardsEditAll</td>
<td>Edit any person's time card and have access to the <a href="timecardmanage.html">Time Card Manage</a> window in the <a href="timeclock.html">Time Clock</a> section. The Global Security Setting for <i>Users cannot edit their own time card</i> will override this permission.</td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr>
<td> Time Card Delete Entry</td>
<td>TimeCardDeleteEntry</td>
<td>Delete a time card entry. We recommend not using this permission because time card changes are tracked anyway.</td>
<td>X</td>
<td></td>
<td>TimeEntered</td>
</tr>
<tr>
<td>Edit Protected Leave Time Card Adjustments</td>
<td>ProtectedLeaveAdjustmentEdit </td>
<td>Create, edit, and delete time card adjustments that are marked as protected leave for another employee.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Supply Inventory</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Equipment</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Equipment Setup</td>
<td>EquipmentSetup</td>
<td>Access <a href="equipment.html">Equipment</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Equipment Delete</td>
<td>EquipmentDelete</td>
<td>Delete Equipment.</td>
<td>X</td>
<td></td>
<td>DateEntry</td>
</tr>
<tr>
<td>Supplier Edit</td>
<td>SupplierEdit</td>
<td>Access <a href="suppliersetup.html">Suppliers</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Merge Tools</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Insurance Carrier Combine</td>
<td>InsuranceCarrierCombine</td>
<td><a href="carrierscombine.html">Combine Carriers</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Insurance Plan Combine</td>
<td>InsurancePlanCombine</td>
<td><a href="insplancombine.html">Combine Insurance Plans</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Rx Combine</td>
<td>RxCombine</td>
<td><a href="prescriptionscombine.html">Combine Prescriptions</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Web Applications</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>ODTouch/ODMobile</td>
<td>MobileWeb</td>
<td>Allow or block a user from accessing <a href="../site/odtouch.html">ODTouch</a>, <a href="opendentalmobile.html">ODMobile</a>, or <a href="../site/mobileweb.html">Mobile Web</a>.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Cloud</b></td>
<td>Note: Only visible when using Open Dental Cloud.</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>Allow Login From Any Location</td>
<td>Allow user to log into Open Dental Cloud from any location. When not allowed, user must have their IP address added to Allowed Addresses in Cloud Management.</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
</p>
</div>
</div>
</body>
</html>```
