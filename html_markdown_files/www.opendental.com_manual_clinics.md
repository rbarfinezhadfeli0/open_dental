# File: ./www.opendental.com/manual/clinics.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Clinics</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('clinics','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/clinics.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/clinics.html" >v24.2</option><option value="https://www.opendental.com/manual241/clinics.html" >v24.1</option><option value="https://www.opendental.com/manual233/clinics.html" >v23.3</option><option value="https://www.opendental.com/manual232/clinics.html" >v23.2</option><option value="https://www.opendental.com/manual231/clinics.html" >v23.1</option><option value="https://www.opendental.com/manual224/clinics.html" >v22.4</option><option value="https://www.opendental.com/manual223/clinics.html" >v22.3</option><option value="https://www.opendental.com/manual222/clinics.html" >v22.2</option><option value="https://www.opendental.com/manual221/clinics.html" >v22.1</option><option value="https://www.opendental.com/manual214/clinics.html" >v21.4</option><option value="https://www.opendental.com/manual213/clinics.html" >v21.3</option><option value="https://www.opendental.com/manual212/clinics.html" >v21.2</option><option value="https://www.opendental.com/manual211/clinics.html" >v21.1</option><option value="https://www.opendental.com/manual205/clinics.html" >v20.5</option><option value="https://www.opendental.com/manual204/clinics.html" >v20.4</option><option value="https://www.opendental.com/manual203/clinics.html" >v20.3</option><option value="https://www.opendental.com/manual202/clinics.html" >v20.2</option><option value="https://www.opendental.com/manual201/clinics.html" >v20.1</option><option value="https://www.opendental.com/manual194/clinics.html" >v19.4</option><option value="https://www.opendental.com/manual193/clinics.html" >v19.3</option><option value="https://www.opendental.com/manual192/clinics.html" >v19.2</option><option value="https://www.opendental.com/manual191/clinics.html" >v19.1</option><option value="https://www.opendental.com/manual184/clinics.html" >v18.4</option><option value="https://www.opendental.com/manual183/clinics.html" >v18.3</option><option value="https://www.opendental.com/manual182/clinics.html" >v18.2</option><option value="https://www.opendental.com/manual181/clinics.html" >v18.1</option><option value="https://www.opendental.com/manual174/clinics.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Clinics</p></div>
<div class="GeneralPageContent">
<p>The Clinics feature is useful when there are multiple locations and one database. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Clinics. </p>
<img src="images/clinicsMainMenu.png" width="521" height="139"/><p>The Clinics feature allows multiple locations to be run from one database while keeping locations separate for reporting. </p>
<p>Use this menu to select the clinic. Only clinics the logged-on user has access to are listed as options. To set the default clinic selected in the Main Menu when logging on, see <i>Track Last Clinic by</i> in <a href="preferences.html">Preferences</a>.</p>
<p class="MarginBottomZero">The clinic selection determines the following: </p>
<ul class="MarginBottomGap">
<li>The look of the <a href="appointments.html">Appointments Module</a>.</li>
<li>The default clinic when adding new patients. When Headquarters is selected, <i>Unassigned</i> is the default. If adding a patient to an existing family, the clinic of the family is the default.</li>
<li>The clinic for new appointments.</li>
<li>The Lab Case status indicated in the Appointments Module. If <i>Headquarters</i> is the selected clinic, the status reflects all Lab Cases attached to scheduled appointments in any operatory, including those with no clinic assigned.</li>
<li>The employees that list in the time clock and the clinic associated with clock-in events.</li>
<li>Which <a href="alerts.html">Alerts</a> show.</li>
</ul>
<h2>Clinic Setup</h2>
<p class="MarginBottomZero">When setting up clinics, do the following: </p>
<ul class="MarginBottomGap">
<li>If using eServices, contact <a href="../contact.html">Open Dental support</a> before enabling Clinics.</li>
<li>Enable the clinics feature <a href="showfeatures.html">Show Features</a>.</li>
<li>Create each clinic in the <a href="clinicsetup.html">Clinic List</a>.</li>
<li>Assign and restrict users to clinics in <a href="securityusers.html">User Edit</a>.</li>
<li>Assign each patient a default clinic in the <a href="patientedit.html">Edit Patient Information</a> window.</li>
<li>Review other clinic specific settings: <ul>
<li><a href="operatories.html">Operatories</a></li>
<li><a href="appointmentviews.html">Appointment Views</a></li>
<li><a href="clearinghousesclinics.html">Clearinghouse Clinic Setup</a></li>
<li><a href="procedurefeeoverrides.html">Fee Override for Provider or Clinic</a></li>
<li><a href="xchargeclinic.html">XCharge Setup for Clinics</a> or <a href="payconnectclinics.html">PayConnect Setup for Clinics</a></li>
<li><a href="emailsetup.html">Email Setup</a></li>
<li><a href="billingdefaults.html">Billing Defaults</a> (clinic overrides).</li>
<li><a href="definitionsclinicspecialties.html">Definitions: Clinic Specialties</a> (useful for <a href="patientclone.html">Clone</a> patients).</li>
</ul>
</li>
</ul>
<h2>Logic</h2>
<p class="MarginBottomZero">Clinic selection: Below are some helpful guidelines about the clinic options available for selection in various areas of Open Dental. </p>
<ul class="MarginBottomGap">
<li>Typically only clinics associated with the logged-on user are options (User Security Profiles, Assign Clinics).</li>
<li><i>Unassigned</i> means there is no clinic assigned to a patient, or, if used as a filter option (e.g., for reports) includes all patients who have not been assigned to a specific clinic.</li>
<li><i>none</i> means there is no clinic assigned (e.g., to payments, procedures, adjustments).</li>
<li><i>All</i> means all clinics the user has access to.</li>
<li>Headquarters is the default interface option (accessible via the Main Menu, Clinics) for users with no default clinic. In <a href="schedule.html">Schedule</a> setup and <a href="timecardmanage.html">Manage Time Cards</a>, selecting Headquarters filters the results to employees not assigned a clinic.</li>
</ul>
<p>Operatories: If an operatory has a clinic set, all appointments scheduled in that operatory are automatically assigned that clinic. If an operatory has no clinic, the appointments are assigned the patient's clinic. <a href="operatories.html">Operatories</a></p>
<p class="MarginBottomZero">Claims: To ensure claims are always credited to the correct clinic, follow these guidelines. </p>
<ul class="MarginBottomGap">
<li>Make sure each procedure is assigned to the correct clinic when it is completed. To make it easier, assign clinics to specific operatories, and place appointments in those operatories so the correct clinic is assigned by default.</li>
<li>When the claim is created, it is automatically assigned a clinic based on the attached procedures, and this cannot be changed. If the wrong clinic gets attached to a claim, delete the claim, change all the procedures, then recreate the claim.</li>
</ul>
<p>Patient Payments: The default clinic for patient payments is determined by <i>Default Clinic for patient payments</i> set in <a href="preferences.html">Preferences</a>.</p>
<p>Claim Payments and Adjustments: Claim payments and adjustments default to the patient's clinic. If <i>Unassigned</i>, the default is <i>None</i>.</p>
<p>Time Clock: Each time clock event is associated to a clinic. When clocking in, the clinic selected in the Main Menu is assigned to the event. Subsequent clock out events use the same clinic.</p>
<h2>Troubleshooting</h2>
<p>Also see: <a href="multiplelocations.html">Multiple Locations</a></p>
<p class="MarginBottomZero"><b>General Information</b>: </p>
<ul class="MarginBottomGap">
<li>During HL7 import from eCW, clinics are not set for new patients.</li>
<li>If Open Dental was used initially without the Clinic feature turned on, all patients that existed before enabling clinics have no clinic (ClinicNum of 0). A Clinic must be manually assigned to them. All new patients use the defaults.</li>
<li>If Open Dental was used initially without the Clinic feature turned on, any previously scheduled appointments do not update to include a clinic. A clinic must be manually assigned to each appointment or the <i>Update Provs on Future Appointments</i> tool can be used to automatically assign Clinics (see <a href="operatoryedit.html">Operatory Edit</a>). </li>
</ul>
<p><b>Patients with No Assigned Clinic</b>: <br/> To find patients with no assigned clinic, run the <a href="databasemaintenance.html">Database Maintenance</a> tool and check results for PatientsNoClinicSet. If patients are found, then manually assign default clinics. If needed, contact Open Dental Support for a conversion service to associate clinics</p>
<p><b>Turning off Clinics</b>:<br/> Turning off Clinics (disabling the Clinics feature from Show Features), essentially ignores the clinics preferences that have been assigned throughout Open Dental and hides clinic information. Clinic information and preferences are not deleted. If the Clinics feature is re-enabled, the previous Clinic settings and information is visible or enabled once more. </p>
<p>This may affect third-party integrations. Before disabling clinics, practices may need to enable users access to all clinics. </p>
</div>
</div>
</body>
</html>```
