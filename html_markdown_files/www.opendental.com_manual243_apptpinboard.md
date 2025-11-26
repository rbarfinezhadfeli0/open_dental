# File: ./www.opendental.com/manual243/apptpinboard.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Pinboard</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('apptpinboard','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/apptpinboard.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/apptpinboard.html" >v24.2</option><option value="https://www.opendental.com/manual241/apptpinboard.html" >v24.1</option><option value="https://www.opendental.com/manual233/apptpinboard.html" >v23.3</option><option value="https://www.opendental.com/manual232/apptpinboard.html" >v23.2</option><option value="https://www.opendental.com/manual231/apptpinboard.html" >v23.1</option><option value="https://www.opendental.com/manual224/apptpinboard.html" >v22.4</option><option value="https://www.opendental.com/manual223/apptpinboard.html" >v22.3</option><option value="https://www.opendental.com/manual222/apptpinboard.html" >v22.2</option><option value="https://www.opendental.com/manual221/apptpinboard.html" >v22.1</option><option value="https://www.opendental.com/manual214/apptpinboard.html" >v21.4</option><option value="https://www.opendental.com/manual213/apptpinboard.html" >v21.3</option><option value="https://www.opendental.com/manual212/apptpinboard.html" >v21.2</option><option value="https://www.opendental.com/manual211/apptpinboard.html" >v21.1</option><option value="https://www.opendental.com/manual205/apptpinboard.html" >v20.5</option><option value="https://www.opendental.com/manual204/apptpinboard.html" >v20.4</option><option value="https://www.opendental.com/manual203/apptpinboard.html" >v20.3</option><option value="https://www.opendental.com/manual202/apptpinboard.html" >v20.2</option><option value="https://www.opendental.com/manual201/apptpinboard.html" >v20.1</option><option value="https://www.opendental.com/manual194/apptpinboard.html" >v19.4</option><option value="https://www.opendental.com/manual193/apptpinboard.html" >v19.3</option><option value="https://www.opendental.com/manual192/apptpinboard.html" >v19.2</option><option value="https://www.opendental.com/manual191/apptpinboard.html" >v19.1</option><option value="https://www.opendental.com/manual184/apptpinboard.html" >v18.4</option><option value="https://www.opendental.com/manual183/apptpinboard.html" >v18.3</option><option value="https://www.opendental.com/manual182/apptpinboard.html" >v18.2</option><option value="https://www.opendental.com/manual181/apptpinboard.html" >v18.1</option><option value="https://www.opendental.com/manual174/apptpinboard.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Pinboard</p></div>
<div class="GeneralPageContent">
<p>The pinboard is a useful tool for moving or scheduling appointments.</p>
<p>In the <a href="appointments.html">Appointments Module</a>, on the right under the calendar, is the Pinboard area.</p>
<img src="images/apptPinboard.png" width="223" height="104"/><p class="MarginBottomZero">To schedule an appointment, simply send appointments to the Pinboard, select a different day or week, then drag the appointment to the new date/time. There are several ways to send appointments to the Pinboard: </p>
<ul class="MarginBottomGap">
<li>Drag an existing appointment from the appointment schedule to the Pinboard.</li>
<li>When viewing <a href="apptspatient.html">Patient Appointments</a>, click <b>Copy to Pinboard</b>. Or, double-click a Planned Appointment in the Appointments for Patient grid and click <b>Pinboard</b>.</li>
<li>From the <a href="recalllist.html">Recall List</a>, click <b>Sched Family</b> or Sched Patient.</li>
<li>From a <a href="apptplanned.html">Planned Appointment</a>, click Copy To Pinboard.</li>
</ul>
<p>Multiple appointments can be on the Pinboard at one time. Appointments are displayed on the Pinboard for the instance of Open Dental they were added only. If a user logs off and a new user logs on, appointments remain on the Pinboard. Appointments are cleared from the Pinboard when Open Dental is closed.</p>
<p><b>Clear</b>: Click to empty the Pinboard and return any existing appointments to their originally scheduled time.</p>
<p><b>Advanced</b>: Open the Advanced Appointment Search window. See Advanced Search section below for more information.</p>
<p><b>Search</b>: Click to open the Openings in View search dialogue. See Openings in View section below for more information.</p>
<h2>Openings in View</h2>
<p>If the schedule is booked out for more than a few days, manually searching for a slot can be time-consuming. Instead, easily search for available openings.</p>
<p>Schedules must be set up for the search to work, as search results show openings for scheduled providers in the selected Appointment View. </p>
 Place the appointment on the Pinboard and click <b>Search</b>. <br/><img src="images/apptSearch.gif" width="227" height="375" class="ImageInParagraph"/><p><b>Openings in View</b>: The first available time slots are listed for each of the next ten available dates. Click a date to quickly display the selected date on the schedule. See Search Behavior at the bottom of this page for additional information on which openings are considered. </p>
<p><b>More</b>: Click to see the next ten results. Click on any date to jump to it in the schedule.</p>
<p class="MarginBottomZero">Date / Time Restrictions: Enter criteria to limit the available openings considered. </p>
<ul class="MarginBottomGap">
<li><b>After </b>(Date): Click the dropdown to select a date from a calendar.</li>
<li><b>Before / After </b>(Time): Enter the time restriction to search. Entering both a before time and an after time searches for openings between the two times. For example, enter Before 4:00 pm and After 12:00 pm to return openings from 1:00 pm to 3:00 pm, if available.</li>
</ul>
<p><b>Providers</b> (List): Providers currently considered in search results. By default, lists the provider currently assigned to the appointment. If scheduling a Recall appointment, the provider listed by default is the patient's preferred provider in the <a href="patientedit.html">Edit Patient Information</a> window. If a secondary provider is assigned, they are listed. If no secondary provider is assigned, the primary provider is listed.</p>
<p><b>Providers...</b>: Click to select specific providers to include in search. Ctrl + click to select multiple providers.</p>
<p class="MarginBottomZero">Search by: Click a button to update the Providers list.  </p>
<ul class="MarginBottomGap">
<li><b>Providers</b>: Click to update Providers list to all providers not marked secondary (i.e., Dentists) with Time Bars in the selected <a href="appointmentvieweditwindow.html">Appointment View</a>.</li>
<li><b>Hygienists</b>: Click to update Providers list to all providers marked secondary (i.e., Hygienists) with Time Bars in the selected <a href="appointmentvieweditwindow.html">Appointment View</a>.</li>
</ul>
<p class="MarginBottomZero"><b>Search</b>: Click to update <i>Openings in View</i> based on the selected search criteria.  </p>
<ul class="MarginBottomGap">
<li>If the selected appointment is attached to an <a href="appointmenttypes.html">Appointment Type</a> that is only allowed on certain Blockout Types, the search is restricted by Blockout automatically.</li>
<li>Blockout types with the usage type <i>Block appointments scheduling</i> are not considered.</li>
</ul>
<p>Once a suitable date is found, drag the appointment off the Pinboard and to the preferred appointment time slot.</p>
<p><b>Close</b>: Click to close the <i>Openings in View</i> dialogue.</p>
<h2>Advanced Appointment Search</h2>
<p>To search for an available appointment based on additional qualifiers, place an appointment on the Pinboard and click <b>Advanced</b>.</p>
<img src="images/apptAdvancedSearch.png" width="579" height="361"/><p><b>Search Results</b>: Lists up to 15 available appointment dates meeting the search filters. There may be additional openings on a specific date; only the first available time slot is listed for each date. Click a row to move the appointment schedule to the selected date. </p>
<p class="MarginBottomZero">Filters: Set criteria to search for available appointment dates. </p>
<ul class="MarginBottomGap">
<li><b>From / To</b> (Date): Click the dropdown to select a date from the calendar or type a date to search.</li>
<li><b>Starting before</b>: Enter a time restriction to search for openings before the entered time.</li>
<li><b>Starting after</b>: Enter a time restriction to search for openings after the entered time.</li>
 To search for openings within a time range: <ol>
<li>Enter the preferred <b>Starting after</b> time. This should be the earliest time the patient wants the appointment to begin (e.g., 7 am). </li>
<li>Enter the preferred <b>Starting before</b> time. This should be the latest time the patient wants the appointment to begin (e.g., 3 pm). </li>
<li>Select a date range to search.</li>
<li>Set additional search filters and click <b>Search</b> to get results.</li>
</ol>
<li><b>Providers</b>: Click the dropdown or <b>[...]</b> to select providers to include in search.</li>
<li><b>Blockout</b>: Select the <a href="definitionsblockouts.html">Blockout Types</a> to search. Blockout types with the usage <i>Block appointments scheduling</i> are not in the dropdown list. If Blockouts are selected, search results are limited to only availability within the selected Blockouts.</li>
<li><b>Clinic</b>: Select the clinic to search. Selectable clinics are restricted based on the current user restrictions, if any.</li>
<li><b>Appt View</b>: Only available when the clinic is set to <i>Unassigned</i>. Select an Appointment View to search.</li>
</ul>
<p class="MarginBottomZero">Quick Search: Click a button to quickly select providers. </p>
<ul class="MarginBottomGap">
<li><b>Providers</b>: Click to select all <a href="providers.html">Providers</a> not marked <i>Secondary Provider</i>. </li>
<li><b>Hygienists</b>: Click to select all Hygienists (i.e., providers marked <i>Secondary Provider (Hyg)</i> in <a href="providerseditwindow.html">Edit Provider</a>).</li>
</ul>
<p><b>More</b>: Click to see the next 15 available dates.</p>
<p><b>Search</b>: Click to update search results after changing filters. At least one provider or Blockout Type must be selected to search.</p>
<p>Once a date is selected, exit the Advanced Appointment Search and click and drag an appointment from the Pinboard to schedule it.</p>
<h2>Search Behavior</h2>
<p class="MarginBottomZero">The <i>Search Behavior </i>set in <a href="preferences.html">Preferences</a> affects which openings appear in the list. </p>
<ul class="MarginBottomGap">
<li>If set to ProviderTime: The search considers the provider's scheduled availability (<a href="schedule.html">Schedule Setup</a>) and available provider time (indicated by the time bar at the left of the appointment schedule). Blockouts are not considered.</li>
<li>If set to ProviderTimeOperatory: The search considers the provider's scheduled availability, available provider time, already scheduled appointments, and <i>Block appointments scheduling</i> blockouts in the provider's scheduled operatory.</li>
</ul>
<p>The way a schedule is set up may affect Search behavior. See <a href="schedulesetupexamples.html">Schedule Setup Examples</a> for details.</p>
<p>If a user is restricted to a clinic, search results only include openings for clinics the user has access to.</p>
</div>
</div>
</body>
</html>```
