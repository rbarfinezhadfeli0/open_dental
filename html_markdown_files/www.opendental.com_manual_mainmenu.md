# File: ./www.opendental.com/manual/mainmenu.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Main Menu</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/mainmenu.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/mainmenu.html" >v24.2</option><option value="https://www.opendental.com/manual241/mainmenu.html" >v24.1</option><option value="https://www.opendental.com/manual233/mainmenu.html" >v23.3</option><option value="https://www.opendental.com/manual232/mainmenu.html" >v23.2</option><option value="https://www.opendental.com/manual231/mainmenu.html" >v23.1</option><option value="https://www.opendental.com/manual224/mainmenu.html" >v22.4</option><option value="https://www.opendental.com/manual223/mainmenu.html" >v22.3</option><option value="https://www.opendental.com/manual222/mainmenu.html" >v22.2</option><option value="https://www.opendental.com/manual221/mainmenu.html" >v22.1</option><option value="https://www.opendental.com/manual214/mainmenu.html" >v21.4</option><option value="https://www.opendental.com/manual213/mainmenu.html" >v21.3</option><option value="https://www.opendental.com/manual212/mainmenu.html" >v21.2</option><option value="https://www.opendental.com/manual211/mainmenu.html" >v21.1</option><option value="https://www.opendental.com/manual205/mainmenu.html" >v20.5</option><option value="https://www.opendental.com/manual204/mainmenu.html" >v20.4</option><option value="https://www.opendental.com/manual203/mainmenu.html" >v20.3</option><option value="https://www.opendental.com/manual202/mainmenu.html" >v20.2</option><option value="https://www.opendental.com/manual201/mainmenu.html" >v20.1</option><option value="https://www.opendental.com/manual194/mainmenu.html" >v19.4</option><option value="https://www.opendental.com/manual193/mainmenu.html" >v19.3</option><option value="https://www.opendental.com/manual192/mainmenu.html" >v19.2</option><option value="https://www.opendental.com/manual191/mainmenu.html" >v19.1</option><option value="https://www.opendental.com/manual184/mainmenu.html" >v18.4</option><option value="https://www.opendental.com/manual183/mainmenu.html" >v18.3</option><option value="https://www.opendental.com/manual182/mainmenu.html" >v18.2</option><option value="https://www.opendental.com/manual181/mainmenu.html" >v18.1</option><option value="https://www.opendental.com/manual174/mainmenu.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Main Menu</p></div>
<div class="GeneralPageContent">
<p>The Main Menu runs across the top of the main window and is always visible. </p>
<img src="images/mainMenu.png" width="539" height="28"/><p>Each menu item has submenu items. You must click onto a menu item because Windows F10 functionality is disabled in Open Dental.</p>
<h2>Log Off:</h2>
<p>Log the current user off of Open Dental. See <a href="security.html">Security</a> to set up user groups, users, passwords, and permissions.</p>
<h2>File</h2>
<p><a href="changepassword.html">User Password</a>, <a href="emailaddressedit.html">User Email Address</a>, <a href="usersettings.html">User Settings</a>, <a href="printersetup.html">Printers</a>, <a href="graphics.html">Graphics</a>, <a href="choosedatabase.html">Choose Database</a>. <i>Exit</i> closes Open Dental.</p>
<img src="images/mainMenuFile.png" width="518" height="188"/><h2>Setup</h2>
<p>Most setup options require the <i>Setup</i> Permission to access. Some submenu items are divided into categories.</p>
<img src="images/mainmenuSetupOthers.png" width="513" height="744"/><p><b>Appointments</b>: <a href="appointmentfields.html">Appointment Field Defs</a>, <a href="appointmentrules.html">Appointment Rules</a>, <a href="appointmenttypes.html">Appointment Types</a>, <a href="appointmentviews.html">Appointment Views</a>, <a href="asapmsgs.html">ASAP List</a>, <a href="confirmationsetup.html">Confirmations</a>, <a href="insverifylistsetup.html">Insurance Verification</a>, <a href="operatories.html">Operatories</a>, <a href="reactivationsetup.html">Reactivation</a>, <a href="recall.html">Recall</a>, <a href="recalltypes.html">Recall Types</a>, <a href="reactivationsetup.html">Setup Reactivation</a>.</p>
<img src="images/mainMenuAppts.png" width="413" height="232"/><p><b>Family/Insurance</b>: <a href="claimforms.html">Claim Forms</a>, <a href="clearinghouses.html">Clearinghouses</a>, <a href="bluebooksetup.html">Insurance Blue Book Setup</a>, <a href="inscatssetup.html">Insurance Categories</a>, <a href="insfilingcodes.html">Insurance Filing Codes</a>, <a href="custompatientfields.html">Patient Field Defs</a>, <a href="payerids.html">Payer IDs</a>.</p>
<img src="images/mainmenuFamily.gif" width="410" height="148"/><p><b>Account</b>: <a href="allocationssetup.html">Allocations Setup</a>, <a href="payplantemplates.html">Payment Plan Templates</a><br/><img src="images/mainmenuAccount.png" width="405" height="45" class="ImageInParagraph"/></p>
<p><b>Chart</b>: <a href="ehrsetupwindow.html">EHR</a>, <a href="procedurebuttons.html">Procedure Buttons</a></p>
<img src="images/mainMenuChart.png" width="384" height="46"/><p><b>Images</b>: <a href="imagingdevices.html">Imaging Devices</a>, <a href="imagingsetup.html">Scanning</a>, <a href="mountdefinitions.html">Mounts</a>.</p>
<img src="images/mainMenuImages.png" width="338" height="68"/><p><b>Manage</b>: <a href="emailsetup.html">E-mail</a>, <a href="messaging.html">Messaging</a>, <a href="messagingbuttons.html">Messaging Buttons</a>, <a href="timecardsetup.html">Time Cards</a>.</p>
<img src="images/mainMenuManage.png" width="387" height="87"/><p><b>Advanced Setup</b>: <a href="../site/apisetup.html">API</a>, <a href="computer.html">Computers</a>, <a href="fhir.html">FHIR</a>, <a href="hiesetup.html">HIE</a>, <a href="hl7.html">HL7</a>, <a href="fhir.html">FHIR</a>, <a href="replication.html">Replication</a>, <a href="showfeatures.html">Show Features</a>, <a href="scheduledprocesses.html">Scheduled Processes</a>.</p>
<img src="images/mainMenuAdvanced.png" width="401" height="147"/><p><b>Others</b>: <a href="preferences.html">Preferences</a>, <a href="alerts.html">Alert Categories</a>, <a href="autocode.html">Auto Codes</a>, <a href="automation.html">Automation</a>, <a href="autonotes.html">Auto Notes</a>, <a href="codegroups.html">Code Groups</a>, <a href="paths.html">Data Paths</a>, <a href="definitions.html">Definitions</a>, <a href="dentalschools.html">Dental Schools</a>, <a href="displayfields.html">Display Fields</a>, <a href="feeschedules.html">Fee Schedules</a>, <a href="feeschedulegroups.html">Fee Schedule Groups</a>, <a href="laboratories.html">Laboratories</a>, <a href="practice.html">Practice</a>, <a href="programlinks.html">Program Links</a>, <a href="quickpastenotessetup.html">Quick Paste Notes</a>, <a href="reports.html">Reports</a>, <a href="requiredfields.html">Required Fields</a>, <a href="requirements.html">Requirements Needed</a>, <a href="schedule.html">Schedules</a>, <a href="security.html">Security</a>, <a href="securityusers.html"> Security Add User</a>, <a href="securitybadges.html">Security Badges</a>, <a href="sheets.html">Sheets</a>, <a href="spellcheck.html">Spell Check</a>, <a href="tasks.html">Tasks</a>, <a href="webformsupload.html">Web Forms</a>.</p>
<p><b>Obsolete</b>: <a href="lettersquick.html">Letters</a>, <a href="questionnaire.html">Questionnaire</a>.</p>
<h2>Lists</h2>
<p>A central location to manage master lists.</p>
<p><a href="procedurecodes.html">Procedure Codes</a>, <a href="allergiesmaster.html">Allergies</a>, <a href="clinics.html">Clinics</a>, <a href="contacts.html">Contacts</a>, <a href="counties.html">Counties</a>, <a href="dsclasses.html">Dental School Classes</a>, <a href="dscourses.html">Dental School Courses</a>, <a href="discountplans.html">Discount Plans</a>, <a href="employees.html">Employees</a>, <a href="employers.html">Employers</a>, <a href="carriers.html">Insurance Carriers</a>, <a href="insplanlist.html">Insurance Plans</a>, <a href="labcasemanage.html">Lab Cases</a>, <a href="medicationmaster.html">Medications</a>, <a href="pharmacies.html">Pharmacies</a>, <a href="rxsetup.html">Prescriptions</a>, <a href="problemmaster.html">Problems</a>, <a href="providers.html">Providers</a>, <a href="referralsetup.html">Referrals</a>, <a href="sites.html">Sites</a>, <a href="stateabbreviations.html">State Abbreviations</a>, <a href="zipcodes.html">Zip Codes</a>.</p>
<img src="images/mainMenuLists.png" width="527" height="433"/><h2>Reports</h2>
<p><a href="reports.html">Standard</a>, Standard Favorites, <a href="reportsgraphic.html">Graphic</a>, <a href="queryoverview.html">User Query</a>, <a href="queryfavorites.html">User Query Favorites</a>, <a href="eserviceactivitylog.html">eService Activity Log</a>, <a href="reportunfinalizedinsurancepayments.html">Unfinalized Payments</a>. </p>
<img src="images/mainmenuReports.png" width="524" height="173"/>. <h2>Tools</h2>
<p>Most tools require the <a href="permissionssetup.html">"Setup" Permission</a> to access.</p>
<p>Screen Snipping Tool (opens Windows Snip &amp; Sketch), <a href="printscreentool.html">Print Screen Tool</a>, Misc Tools (see below), Advertising (see below), <a href="aging.html">Aging</a>, <a href="audittrail.html">Audit Trail</a>, <a href="carecredittransactions.html">CareCredit Transactions</a> (only displays when CareCredit is enabled), <a href="financecharges.html">Billing/Finance Charges</a> (only displays when Billing/Finance Charges are enabled), <a href="recurringcharges.html">CC Recurring Charges</a>, <a href="certifications.html">Certifications</a>, <a href="databasemaintenance.html">Database Maintenance</a>, <a href="dsevaluations.html">Evaluations</a>, <a href="kiosk.html">Kiosk</a>, <a href="kiosk.html">Kiosk Manager</a>, <a href="latecharges.html">Late Charges</a> (only displays when Late Charges are enabled), <a href="https://www.opendental.com/manual/mobilesynchupload.html">Mobile Sync</a>, <a href="orthoautoclaim.html">Ortho Auto Claims</a>, <a href="patientdashboard.html">Patient Dashboard</a>, <a href="erouting.html">eRouting</a>, <a href="portalonlinepayments.html">Patient Portal Transactions</a>, <a href="portalonlinepayments.html">Pending Online Payments</a>, <a href="publichealthscreenings.html">Public Health Screening</a>, <a href="repeatingcharges.html">Repeating Charges</a> (only shows when Repeating Charges are enabled), <a href="setupwizard.html">Setup Wizard</a>, <a href="requirements.html">Dental School Requirements Needed</a>, <a href="../site/webforms.html">Web Forms</a>, <a href="wiki.html">Wiki</a>, <a href="zoom.html">Zoom</a>.</p>
<img src="images/mainMenuTools.png" width="505" height="471"/><p>Misc Tools: <a href="paymentplanclose.html">Close Payment Plans</a>, <a href="blockouts.html">Clear Duplicate Blockouts</a>, <a href="atozcreate.html">Create A to Z Folder</a>, <a href="databasemaintenancepat.html">Database Maintenance Pat</a>, <a href="mergebillingtypes.html">Merge Billing Types</a>, <a href="mergediscountplans.html">Merge Discount Plans</a>, <a href="mergeimagecategories.html">Merge Image Categories</a>, <a href="mergemedications.html">Merge Medications</a>, <a href="mergepatients.html">Merge Patients</a>, <a href="mergeproviders.html">Merge Providers</a>, <a href="mergereferrals.html">Merge Referrals</a>, <a href="subscribersmove.html">Move Subscribers</a>, <a href="patientstatussetter.html">Patient Status Setter</a>, <a href="servicemanager.html">Service Manager</a>, <a href="shutdown.html">Shutdown All Workstations</a>, <a href="telephonenumbers.html">Telephone Numbers</a>, and <a href="testlatency.html">Test Latency</a>.</p>
<img src="images/mainmenuToolsMisc.png" width="450" height="345"/><p>Advertising: <a href="postcardssetup.html">Advertising: Postcards</a></p>
<img src="images/mainMenuToolsAdvertising.png" width="365" height="27"/><h2>Clinics</h2>
<p>Only shows if <a href="clinics.html">Clinics</a> is turned on in Show Features. Use the menu to select the default clinic interface. Options available depend on security settings and the logged-on user.</p>
<img src="images/mainMenuClinics.png" width="530" height="153"/><h2>eServices</h2>
<p><a href="eservicessetup.html">eServices Setup</a></p>
<img src="images/mainMenueServices.png" width="525" height="24"/><h2>Alerts</h2>
<p><a href="alerts.html">Alerts</a></p>
<img src="images/mainmenuAlerts.png" width="526" height="25"/><h2>Help</h2>
<img src="images/mainmenuHelp.png" width="685" height="212"/><p>Online Support: Go to Open Dental's <a href="http://opendental.com/contact.html">Contact</a> page where you can connect to a support technician for assistance and troubleshooting.</p>
<p>Online Help - Contents: Open the User Manual Table of Contents.</p>
<p>Online Help - Index: Opens the User Manual <a href="http://opendental.com/manual/search.html">Search</a> page.</p>
<p>Training Videos: Opens the <a href="http://opendental.com/webinars/webinars.html">Webinars and Tutorials</a> web page.</p>
<p>Query Monitor: Opens the <a href="querymonitor.html">Query Monitor</a> window to allow real-time monitoring of queries to the MySQL database.</p>
<p>Payload Monitor: Open the <a href="payloadmonitor.html">Payload Monitor</a> window. Only available for Middle Tier users.</p>
<p><div class="Note">Note: Only the Payload Monitor or Query Monitor will show, depending on whether Middle Tier is enabled.</div>
</p>
<p>Request Features: Open the <a href="featurerequests.html">Feature Requests</a> system.</p>
<p>Support Status: Opens the Support Status window to see if your office is currently signed up for <a href="fees.html">Monthly Support</a>.</p>
<p>Update: Check for and download new versions of Open Dental. See <a href="update.html">Update</a>.</p>
<p>About: Open the <a href="aboutwindow.html">About</a> window.</p>
</div>
</div>
</body>
</html>```
