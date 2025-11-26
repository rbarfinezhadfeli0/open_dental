# File: ./www.opendental.com/manual/providerseditwindow.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Provider</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('providerseditwindow','providers','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/providerseditwindow.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/providerseditwindow.html" >v24.2</option><option value="https://www.opendental.com/manual241/providerseditwindow.html" >v24.1</option><option value="https://www.opendental.com/manual233/providerseditwindow.html" >v23.3</option><option value="https://www.opendental.com/manual232/providerseditwindow.html" >v23.2</option><option value="https://www.opendental.com/manual231/providerseditwindow.html" >v23.1</option><option value="https://www.opendental.com/manual224/providerseditwindow.html" >v22.4</option><option value="https://www.opendental.com/manual223/providerseditwindow.html" >v22.3</option><option value="https://www.opendental.com/manual222/providerseditwindow.html" >v22.2</option><option value="https://www.opendental.com/manual221/providerseditwindow.html" >v22.1</option><option value="https://www.opendental.com/manual214/providerseditwindow.html" >v21.4</option><option value="https://www.opendental.com/manual213/providerseditwindow.html" >v21.3</option><option value="https://www.opendental.com/manual212/providerseditwindow.html" >v21.2</option><option value="https://www.opendental.com/manual211/providerseditwindow.html" >v21.1</option><option value="https://www.opendental.com/manual205/providerseditwindow.html" >v20.5</option><option value="https://www.opendental.com/manual204/providerseditwindow.html" >v20.4</option><option value="https://www.opendental.com/manual203/providerseditwindow.html" >v20.3</option><option value="https://www.opendental.com/manual202/providerseditwindow.html" >v20.2</option><option value="https://www.opendental.com/manual201/providerseditwindow.html" >v20.1</option><option value="https://www.opendental.com/manual194/providerseditwindow.html" >v19.4</option><option value="https://www.opendental.com/manual193/providerseditwindow.html" >v19.3</option><option value="https://www.opendental.com/manual192/providerseditwindow.html" >v19.2</option><option value="https://www.opendental.com/manual191/providerseditwindow.html" >v19.1</option><option value="https://www.opendental.com/manual184/providerseditwindow.html" >v18.4</option><option value="https://www.opendental.com/manual183/providerseditwindow.html" >v18.3</option><option value="https://www.opendental.com/manual182/providerseditwindow.html" >v18.2</option><option value="https://www.opendental.com/manual181/providerseditwindow.html" >v18.1</option><option value="https://www.opendental.com/manual174/providerseditwindow.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Provider</p></div>
<div class="GeneralPageContent">
<p>Use the Edit Provider window to create providers and edit provider information.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Lists, <a href="providers.html">Providers</a>. Click <b>Add</b> or double-click an existing provider to edit.</p>
<img src="images/providerEdit.png" width="897" height="692"/><p>The window is divided into three tabs: General, Supplemental IDs, and Web Sched. A description of all options on this window is below.</p>
<p><div class="Note">Note: If viewing information for a provider that has been removed due to a merge (deleted), all fields are viewable only, not editable.</div>
</p>
<h2>General Tab</h2>
<p>Use the General tab to enter provider information for billing and other miscellaneous features.</p>
<img src="images/providerEditBasics.png" width="299" height="260"/><p><b>Provider ID</b>: A system generated unique identifier that is useful for third party reporting.</p>
<p><b>Abbreviation</b>: A short abbreviation that will identify the provider in various lists throughout the program. There is a 255 letter limit. May be changed at any time.</p>
<p><b>Last Name / First Name / MI</b>: Last name, First Name, and Middle Initial of provider. If billing as an entity, enter the billing entity name as the Last Name. </p>
<p><b>Suffix</b>: Informational only. </p>
<p><b>Preferred Name</b>: Enter the full preferred name for the provider. This name will show for patients checking in via <a href="../site/eclipboard.html">eClipboard</a>, for patients viewing their appointments in <a href="../site/patientportal.html">Patient Portal</a>, and for patients scheduling an appointment via <a href="../site/websched.html">Web Sched</a>.</p>
<p><b>Birthdate</b>: Provider's birthdate. Required when using DoseSpot eRx.</p>
<p><b>SSN or TIN:</b> Enter the number used for billing purposes. Most offices will enter their TIN.</p>
<img src="images/providerEditLicense.png" width="348" height="150"/><p><b>State License Number</b>: The Provider's practicing state license number.</p>
<p><b>State Where Licensed</b>: Enter the provider's licensing state.</p>
<p><b>DEA Number</b>: Enter the provider's DEA Number. Required when sending prescriptions. If the provider does not have a DEA Number, enter <i>None</i>.</p>
<p><b>State Rx ID:</b> The provider's state assigned Rx ID. Required when sending prescriptions.</p>
<p class="MarginBottomZero"><b>Edit</b>: Only displays when Clinics is enabled. Click to open Additional Provider Properties to view or edit clinic-level overrides for provider IDs.<br/><img src="images/providerEditClinicOverrides.png" width="789" height="253" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li><b>CareCredit Merch Num</b>: Only used when CareCredit users are using Merchant Number by provider. Enter the provider's 16-digit merchant number as provided by CareCredit. <ul>
<li>If an office has stopped using CareCredit, but has not disabled the bridge in <a href="carecreditsetup.html">CareCredit Setup</a>, an <i>x </i>will automatically display in front of the Merchant Number when Batch Quickscreen is attempted. This lets Open Dental know the account is closed and not to allow transactions.</li>
</ul>
</li>
</ul>
<p><b>Medicaid ID</b>: Required when billing to Medicaid. This is a provider specific ID issued by Medicaid. </p>
<p class="MarginBottomZero"><b>National Provider ID</b>: i.e., NPI. </p>
<ul class="MarginBottomGap">
<li>For electronic prescriptions, the individual provider NPI, not the organizational NPI must be used. </li>
<li>If an office has a separate Facility NPI, users can create a separate provider profile for the facility. Enter the facility name as the Last Name, and check the <i>Not a Person</i> box. To set the facility as the default practice or clinic billing provider (and use the facility NPI), select the facility as the default insurance billing provider in <a href="practice.html">Practice</a> or <a href="clinicsetup.html">Clinic Setup</a>.</li>
</ul>
<img src="images/providerEditMisc.png" width="298" height="136"/><p><b>Term Date</b>: The date when the provider will no longer be active. After the term date has ended, the provider will be unable to schedule or complete appointments, create prescriptions, or send new claims.</p>
<p><b>Appointment Color</b>: The background color on the schedule for the provider's appointments, time bar, and operatory. Click the box to select the color. Lighter colors help black text show more clearly. Click <b>None</b> to clear the selected color.</p>
<p><b>Highlight Outline Color</b>: The color of the outline that surrounds appointment information for this provider. The outline only shows when the appointment is selected. Click <b>None</b> to clear the selected color.</p>
<p class="MarginBottomZero"><b>EHR Meaningful Use</b>: EHR only. Determines which measures show in reports and on the dashboard when this provider is the primary provider. There are four options: </p>
<ul class="MarginBottomGap">
<li>Use Global: Use the global meaningful use stage set in <a href="ehrsettings.html">EHR Settings</a>.</li>
<li>Stage 1: Show stage 1 measures.</li>
<li>Stage 2: Show stage 2 measures.</li>
<li>Modified Stage 2: Show <a href="../site/ehrmodified2.html">EHR Modified Stage 2</a> measures. This is the recommended setting for 2017.</li>
</ul>
<p><b>Claim Billing Prov Override</b>: Optional. Select a non-person entity (set up as a non-person provider) that will be set as the default billing provider on claims when this provider is the treating provider. The claim billing provider will override the <i>Default Insurance Billing Provider</i> set in Clinic or Practice setup. </p>
<p><b>Hourly Production Goal</b>: Set an hourly production goal for the provider. This value will be used to calculate the daily production goal in the <a href="appointments.html">Appointments Module</a>. See <a href="productiontotals.html">Production Totals</a> for details.</p>
<img src="images/ProviderEditFee.png" width="341" height="209"/><p><b>Fee Schedule</b>: The provider's default fee schedule (e.g., the UCR fee schedule). See <a href="feeschedulelogic.html">Fee Schedule Logic</a> for details on fee schedule usage.</p>
<p><b>Specialty</b>: The provider's specialty. Customize options in <a href="definitionsproviderspecialty.html">Definitions: Provider Specialties</a>.</p>
<img src="images/providerEditSched.png" width="339" height="121"/><p><b>Scheduling Note</b>: When the user clicks on an operatory header in the appointment schedule on a day the provider is scheduled, text entered here will display in the operatory header dropdown next to the provider's scheduled time.</p>
<p><b>Custom ID</b>: A user-editable unique identifier that is useful for third party reporting.</p>
<p><b>Taxonomy Code Override</b>: Enter a Taxonomy Code to override Specialty.</p>
<img src="images/providerEditAnesth.png" width="355" height="91"/><p><b>Anesthesia Provider Groups (optional)</b>: Assign the provider to an anesthesia group. If assigned, this provider will populate the corresponding dropdowns in the <a href="anesthesia.html">Anesthesia</a> record.</p>
<img src="images/providerEditOptions.png" width="401" height="104"/><p><b>Secondary Provider (Hyg)</b>: Mark the provider as a non-billable provider (such as a hygienist). The provider can still be manually selected as the billing or treating provider on claims if needed. </p>
<p><b>Signature on File</b>: Indicate whether or not the provider has a signature on file. May affect what shows on the <a href="claimformADA2012.html">ADA Claim Forms</a> for treating provider signature.</p>
<p><b>Not a Person</b>: Check this box to mark the provider as an entity or organization instead of a person. Then enter business ID numbers instead of personal ID numbers. Useful when offices want to use practice or facility as the provider on claims.</p>
<p><b>Hidden</b>: Remove this provider as a selection option in various areas of the program (e.g., for providers who are no longer with the practice). Their <a href="schedule.html">Schedule</a> will be removed and an <i>X</i> will show in the Hidden column of the Providers List. The provider will still be a selection option in standard reports. Hidden providers cannot access eRx. This will not affect scheduled appointments. <div class="Note">Note: Providers associated with an Appointment View cannot be marked hidden. See <a href="appointmentviewsetup.html">Appointment View Setup</a> to remove them first.</div>
</p>
<p><b>Hidden on Reports</b>: Remove this provider as a selection option in <a href="reportsstandard.html">Standard Reports</a>. An <i>X </i>will show in the Hide on Reports column of the Providers List.</p>
<p><b>Use Electronic Prescriptions (eRx)</b>: Enable Electronic Prescriptions for this provider. There are per provider fees. Once enabled, a provider must still complete identity proofing before use. Contact support for assistance. Unchecking this box will disable eRx for this provider.</p>
<h2>Supplemental IDs Tab</h2>
<p>Click the Supplemental IDs tab to store provider IDs assigned by insurance companies, especially Blue Cross/Blue Shield. When billing an insurance company using this payor ID, the assigned ID will show on the claim.</p>
<img src="images/providerEditSupplemental.png" width="524" height="201"/><p class="MarginBottomZero">Click <b>Add</b> to create a new supplemental ID. Click <b>Delete</b> to remove an ID.<br/><img src="images/providersID.png" width="485" height="248" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li><b>Payor (Electronic) ID</b>: The payor ID of the carrier. This is case sensitive and must match the <a href="payerids.html">Electronic Payer ID</a> list exactly.</li>
<li><b>Type</b>: Type of supplemental ID. Informational only.</li>
<li><b>Assigned ID Number</b>: The supplemental ID number assigned.</li>
</ul>
<h2>Web Sched Tab</h2>
<p>Enter a provider description and photo that will show in the <a href="webschedrecallsetup.html">Web Sched Recall</a> and <a href="webschednewpatsetup.html">Web Sched New Patient</a> interface when patients are allowed to select their provider.</p>
<img src="images/providerEditWebSched.png" width="528" height="296"/><p><b>Description</b>: Enter the provider description.</p>
<p><b>Picture</b>: Click <b>[...]</b> to select a picture file on the computer. Click <b>None</b> to clear a picture selection.</p>
<h2>Clinics Tab</h2>
<p>Provider clinic associations set in this tab will determine which providers show in the provider selectors for those clinics. </p>
<img src="images/providerEditClinics.png" width="519" height="306"/><p>When set to <b>All</b>, the provider will be available for all clinics. If specific clinics are highlighted, the provider can only be selected at those clinics. </p>
<p>Providers can also be set to show or not show if they are associated to a clinic-restricted user in security setup. Even if the provider is associated to a clinic in the provider setup window, the provider's user must also have access to that clinic for any other user to select that provider, even if the other user is not restricted. For restricting users to specific clinics please see: <a href="securityusers.html">User Edit</a>.</p>
</div>
</div>
</body>
</html>```
