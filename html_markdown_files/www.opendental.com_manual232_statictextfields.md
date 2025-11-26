# File: ./www.opendental.com/manual232/statictextfields.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Static Text Field Names</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('statictextfields','sheetsstatictext','sheetsetup','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/statictextfields.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/statictextfields.html" >v24.2</option><option value="https://www.opendental.com/manual241/statictextfields.html" >v24.1</option><option value="https://www.opendental.com/manual233/statictextfields.html" >v23.3</option><option value="https://www.opendental.com/manual232/statictextfields.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/statictextfields.html" >v23.1</option><option value="https://www.opendental.com/manual224/statictextfields.html" >v22.4</option><option value="https://www.opendental.com/manual223/statictextfields.html" >v22.3</option><option value="https://www.opendental.com/manual222/statictextfields.html" >v22.2</option><option value="https://www.opendental.com/manual221/statictextfields.html" >v22.1</option><option value="https://www.opendental.com/manual214/statictextfields.html" >v21.4</option><option value="https://www.opendental.com/manual213/statictextfields.html" >v21.3</option><option value="https://www.opendental.com/manual212/statictextfields.html" >v21.2</option><option value="https://www.opendental.com/manual211/statictextfields.html" >v21.1</option><option value="https://www.opendental.com/manual205/statictextfields.html" >v20.5</option><option value="https://www.opendental.com/manual204/statictextfields.html" >v20.4</option><option value="https://www.opendental.com/manual203/statictextfields.html" >v20.3</option><option value="https://www.opendental.com/manual202/statictextfields.html" >v20.2</option><option value="https://www.opendental.com/manual201/statictextfields.html" >v20.1</option><option value="https://www.opendental.com/manual194/statictextfields.html" >v19.4</option><option value="https://www.opendental.com/manual193/statictextfields.html" >v19.3</option><option value="https://www.opendental.com/manual192/statictextfields.html" >v19.2</option><option value="https://www.opendental.com/manual191/statictextfields.html" >v19.1</option><option value="https://www.opendental.com/manual184/statictextfields.html" >v18.4</option><option value="https://www.opendental.com/manual183/statictextfields.html" >v18.3</option><option value="https://www.opendental.com/manual182/statictextfields.html" >v18.2</option><option value="https://www.opendental.com/manual181/statictextfields.html" >v18.1</option><option value="https://www.opendental.com/manual174/statictextfields.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Static Text Field Names</p></div>
<div class="GeneralPageContent">
<p>See <a href="sheetsstatictext.html">Sheet Static Text Field</a>.</p>
<p>Static text fields are a type of <a href="sheetsaddelements.html">Sheet Field</a> used for fixed text. This list is in progress. Each field may not have a description.</p>
<table class="simpletable">
<tr>
<th style="width:50%">Static Text Field Name</th>
<th style="width:50%">Description</th>
</tr>
<tr>
<td>activeAllergies</td>
<td>active Allergies</td>
</tr>
<tr>
<td>activeProblems</td>
<td>active Problems</td>
</tr>
<tr>
<td>address</td>
<td>patient address</td>
</tr>
<tr>
<td>age</td>
<td>patient age (based on birthdate)</td>
</tr>
<tr>
<td>apptsAllFuture</td>
<td>future appointments</td>
</tr>
<tr>
<td>apptModNote</td>
<td>appointment module note (Appointment History window)</td>
</tr>
<tr>
<td>apptDateMonthSpelled</td>
<td>Displays the date of the selected appointment as: Month, Day, Year (e.g. March 17, 2021) <ul>
<li>only available for Patient Letters and Referral Letters</li>
<li>when this field is in use on a letter, and that letter is selected, the <a href="apptspatient.html">Appointments For</a> window will appear. Select the appointment the letter refers to. If the patient only has one appointment, or no appointments, this window is skipped.</li>
<li>when this field is in use on a letter, and that letter is selected from the <a href="reporttreatfinder.html">Treatment Finder Report</a> or <a href="automation.html">Automation</a>, the fields will be blank as no appointment can be selected.</li>
</ul>
</td>
</tr>
<tr>
<td>apptProcs</td>
<td>Displays the procedures associated with the selected appointment along with the description and surfaces. <ul>
<li>only available for Patient Letters and Referral Letters</li>
<li>when this field is in use on a letter, and that letter is selected, the <a href="apptspatient.html">Appointments For</a> window appears. Select an appointment to attach procedures to the letter. If the patient only has one appointment, or no appointments, this window is skipped.</li>
<li>when this field is in use on a letter, and that letter is selected from the <a href="reporttreatfinder.html">Treatment Finder Report</a>, the fields are blank as no appointment can be selected.</li>
<li>Letters generated through <a href="automation.html">Automation</a> (e.g., PrintPatientLetter) do not prompt with the Appointments For window, so this field will be blank.</li>
</ul>
</td>
</tr>
<tr>
<td>apptProvNameFormal</td>
<td>Displays the formal name of the provider associated with the selected appointment. <ul>
<li>only available for Patient Letters and Referral Letters</li>
<li>when this field is in use on a letter, and that letter is selected, the <a href="apptspatient.html">Appointments For</a> window will appear. Select the appointment the letter refers to. If the patient only has one appointment, or no appointments, this window is skipped.</li>
<li>when this field is in use on a letter, and that letter is selected from the <a href="reporttreatfinder.html">Treatment Finder Report</a> or <a href="automation.html">Automation</a>, the fields will be blank as no appointment can be selected.</li>
</ul>
</td>
</tr>
<tr>
<td>balTotal</td>
<td>total account balance for all family members</td>
</tr>
<tr>
<td>bal_0_30</td>
<td>balance that is 0 - 30 days old</td>
</tr>
<tr>
<td>bal_31_60</td>
<td>balance that is 31 - 60 days old</td>
</tr>
<tr>
<td>bal_61_90</td>
<td>balance that is 61 - 90 days old</td>
</tr>
<tr>
<td>balOver90</td>
<td>balance that is over 90 days old</td>
</tr>
<tr>
<td>balInsEst</td>
<td>The total insurance pending amount for all family members.</td>
</tr>
<tr>
<td>balTotalMinusInsEst</td>
<td>The patient portion (total account balance minus insurance pending amounts)</td>
</tr>
<tr>
<td>BillingType</td>
<td>Billing Type</td>
</tr>
<tr>
<td>Birthdate</td>
<td>patient birth date</td>
</tr>
<tr>
<td>carrierName</td>
<td>primary insurance carrier name</td>
</tr>
<tr>
<td>carrier2Name</td>
<td>secondary insurance carrier name</td>
</tr>
<tr>
<td>carrierAddress</td>
<td>primary insurance carrier address</td>
</tr>
<tr>
<td>carrier2Address</td>
<td>secondary insurance carrier address</td>
</tr>
<tr>
<td>carrierCityStZip</td>
<td>primary insurance carrier city, state, and zip</td>
</tr>
<tr>
<td>carrier2CityStZip</td>
<td>secondary insurance carrier city, state, and zip</td>
</tr>
<tr>
<td>ChartNumber</td>
<td>chart number</td>
</tr>
<tr>
<td>cityStateZip</td>
<td>patient's city, state, zip code</td>
</tr>
<tr>
<td>clinicPatDescription</td>
<td>description of the patient's Clinic</td>
</tr>
<tr>
<td>clinicPatAddress</td>
<td>address of the patient's clinic</td>
</tr>
<tr>
<td>clinicPatCityStZip</td>
<td>city, state, zip code of the patient's clinic</td>
</tr>
<tr>
<td>clinicPhone</td>
<td>phone number of the patient's clinic</td>
</tr>
<tr>
<td>clinicCurDescription</td>
<td>description of the selected clinic</td>
</tr>
<tr>
<td>clinicCurAddress</td>
<td>address of the selected clinic</td>
</tr>
<tr>
<td>clinicCurCityStateZip</td>
<td>city, state, zip of the selected clinic</td>
</tr>
<tr>
<td>clinicCurPhone</td>
<td>phone number of the selected clinic</td>
</tr>
<tr>
<td>currentMedications</td>
<td>current Medications</td>
</tr>
<tr>
<td>DateFirstVisit</td>
<td>patient's date of first visit</td>
</tr>
<tr>
<td>dateLastAppt</td>
<td>date of the patient's last appointment</td>
</tr>
<tr>
<td>dateLastBW</td>
<td>date of the patient's last bitewing procedure (based on the procedures set in <a href="codegroups.html">Code Groups</a></td>
</tr>
<tr>
<td>dateLastExam</td>
<td>date of the patient's last exam (based on the procedures set in Code Groups)</td>
</tr>
<tr>
<td>dateLastPanoFMX</td>
<td>date of the patient's last pano fmx (based on the procedures set in Code Groups)</td>
</tr>
<tr>
<td>dateLastPerio</td>
<td>date of the patient's last perio (based on the procedures set in Code Groups)</td>
</tr>
<tr>
<td>dateLastProphy</td>
<td>date of the patient's last prophy (based on the procedures set in Code Groups</td>
</tr>
<tr>
<td>dateLastSRP</td>
<td>date of the patient's last SRP (based on the procedures set in Code Groups)</td>
</tr>
<tr>
<td>dateOfLastSavedTP</td>
<td>date the last treatment plan was saved</td>
</tr>
<tr>
<td>dateRecallDue</td>
<td>recall due date</td>
</tr>
<tr>
<td>dateTimeLastAppt</td>
<td>date and time of the last appointment</td>
</tr>
<tr>
<td>dateTodayLong</td>
<td>long format of today's date (e.g. Wednesday, April 16, 2017)</td>
</tr>
<tr>
<td>dateToday</td>
<td>short format of today's date (e.g. 4/16/2017)</td>
</tr>
<tr>
<td>dueForBWYN</td>
<td>Shows Yes/No if the patient is due for bitewings. Text takes disabled recall types into account based on date and family balance.</td>
</tr>
<tr>
<td>dueForPanoYN</td>
<td>Shows Yes/No if the patient is due for panoramic x-ray. Text takes disabled recall types into account based on date and family balance.</td>
</tr>
<tr>
<td>Email</td>
<td>patient's email address</td>
</tr>
<tr>
<td>famFinNote</td>
<td>family financial note (Account module) - one note per family stored with guarantor</td>
</tr>
<tr>
<td>famFinUrgNote</td>
<td>family urgent fin note (Account module) - stored with guarantor</td>
</tr>
<tr>
<td>famPopups</td>
<td>current Popups</td>
</tr>
<tr>
<td>famRecallDue</td>
<td>all members of a family that are overdue for a recall appointment if they are not already scheduled for recall. Shows special recall type (i.e., Perio or Prophy) and due date. </td>
</tr>
<tr>
<td>gender</td>
<td>gender (Male, Female, Other, Unknown)</td>
</tr>
<tr>
<td>genderHeShe</td>
<td>He, She, They, The patient (capitalized). Selected based on patient's gender if there are no preferred pronouns. </td>
</tr>
<tr>
<td>genderheshe</td>
<td>he, she, they, or the patient (lower-case). Selected based on patient's gender if there are no preferred pronouns. </td>
</tr>
<tr>
<td>genderHimHer</td>
<td>Him, Her, Them, or The patient (capitalized). Selected based on patient's gender if there are no preferred pronouns. </td>
</tr>
<tr>
<td>genderhimher</td>
<td>him, her, them, or the patient (lower-case). Selected based on patient's gender if there are no preferred pronouns. </td>
</tr>
<tr>
<td>genderHimselfHerself</td>
<td>Himself, Herself, Themself, or The patient (capitalized). Selected based on patient's gender if there are no preferred pronouns. </td>
</tr>
<tr>
<td>genderhimselfherself</td>
<td>himself, herself, themself, or the patient (lower-case). Selected based on patient's gender if there are no preferred pronouns. </td>
</tr>
<tr>
<td>genderHisHer</td>
<td>His, Her, Their, The patient's (capitalized). Selected based on patient's gender if there are no preferred pronouns</td>
</tr>
<tr>
<td>genderhisher</td>
<td>his, her, their, the patient's (lower-case). Selected based on patient's gender if there are no preferred pronouns. </td>
</tr>
<tr>
<td>genderHisHers</td>
<td>His, Hers, Theirs, The patient's (capitalized). Selected based on patient's gender if there are no preferred pronouns. </td>
</tr>
<tr>
<td>genderhishers</td>
<td>his, hers, theirs, the patient's (lower-case). Selected based on patient's gender if there are no preferred pronouns. </td>
</tr>
<tr>
<td>guarantorHmPhone</td>
<td>guarantor's home phone number</td>
</tr>
<tr>
<td>guarantorNameF</td>
<td>guarantor's first name</td>
</tr>
<tr>
<td>guarantorNameFL</td>
<td>guarantor's first name, last name (e.g. Jim Jones)</td>
</tr>
<tr>
<td>guarantorNameL</td>
<td>guarantor's last name</td>
</tr>
<tr>
<td>guarantorNamePref</td>
<td>guarantor's preferred name</td>
</tr>
<tr>
<td>guarantorNameLF</td>
<td>guarantor's last name, first name (e.g. Jones, Jim)</td>
</tr>
<tr>
<td>guarantorWirelessPhone</td>
<td>guarantor's wireless phone number</td>
</tr>
<tr>
<td>guarantorWkPhone</td>
<td>guarantor's work phone number</td>
</tr>
<tr>
<td>HmPhone</td>
<td>home phone number</td>
</tr>
<tr>
<td>insAnnualMax</td>
<td>primary insurance plan's annual max</td>
</tr>
<tr>
<td>insDeductible</td>
<td>primary insurance plan's deductible</td>
</tr>
<tr>
<td>insDeductibleUsed</td>
<td>primary insurance plan's deductible that has been used</td>
</tr>
<tr>
<td>insEmployer</td>
<td>primary insurance plan's employer</td>
</tr>
<tr>
<td>insFeeSchedule</td>
<td>primary insurance plan's fee schedule</td>
</tr>
<tr>
<td>insFreqBW</td>
<td>primary insurance plan's frequency for bitewings</td>
</tr>
<tr>
<td>insFreqExams</td>
<td>primary insurance plan's frequency for exams</td>
</tr>
<tr>
<td>insFreqPanoFMX</td>
<td>primary insurance plan's frequency for pano fmx</td>
</tr>
<tr>
<td>insPending</td>
<td></td>
</tr>
<tr>
<td>insPercentages</td>
<td></td>
</tr>
<tr>
<td>insPlanGroupName</td>
<td>primary insurance plan's group name</td>
</tr>
<tr>
<td>insPlanGroupNumber</td>
<td>primary insurance plan's group number</td>
</tr>
<tr>
<td>insPlanNote</td>
<td>primary insurance plan's note</td>
</tr>
<tr>
<td>insRemaining</td>
<td></td>
</tr>
<tr>
<td>insSubBirthDate</td>
<td>primary insurance plan subscriber's birth date</td>
</tr>
<tr>
<td>insSubNote</td>
<td>primary insurance plan subscriber note</td>
</tr>
<tr>
<td>insType</td>
<td>primary insurance plan type</td>
</tr>
<tr>
<td>insUsed</td>
<td></td>
</tr>
<tr>
<td>ins2AnnualMax</td>
<td>secondary insurance plan's annual max</td>
</tr>
<tr>
<td>ins2Deductible</td>
<td>secondary insurance plan's deductible</td>
</tr>
<tr>
<td>ins2DeductibleUsed</td>
<td>secondary insurance plan's deductible that has been used</td>
</tr>
<tr>
<td>ins2Employer</td>
<td>secondary insurance plan's employer</td>
</tr>
<tr>
<td>ins2FreqBW</td>
<td>secondary insurance plan's frequency for bitewings</td>
</tr>
<tr>
<td>ins2FreqExams</td>
<td>secondary insurance plan's frequency for exams</td>
</tr>
<tr>
<td>ins2FreqPanoFMX</td>
<td>secondary insurance plan's frequency for pano fmx</td>
</tr>
<tr>
<td>ins2Pending</td>
<td></td>
</tr>
<tr>
<td>ins2Percentages</td>
<td></td>
</tr>
<tr>
<td>ins2PlanGroupName</td>
<td>secondary insurance plan's group name</td>
</tr>
<tr>
<td>ins2PlanGroupNumber</td>
<td>secondary insurance plan's group number</td>
</tr>
<tr>
<td>ins2Remaining</td>
<td></td>
</tr>
<tr>
<td>ins2Used</td>
<td></td>
</tr>
<tr>
<td>medicalSummary</td>
<td>medical summary (Medical window)</td>
</tr>
<tr>
<td>MedUrgNote</td>
<td>medical urgent note (Medical window)</td>
</tr>
<tr>
<td>nameF</td>
<td>first name</td>
</tr>
<tr>
<td>nameFL</td>
<td>first name, preferred name, last name</td>
</tr>
<tr>
<td>nameFLFormal</td>
<td>first name, middle initial, last name</td>
</tr>
<tr>
<td>nameL</td>
<td>last name</td>
</tr>
<tr>
<td>nameLF</td>
<td>last name, preferred name, first name</td>
</tr>
<tr>
<td>nameMI</td>
<td>middle initial</td>
</tr>
<tr>
<td>namePref</td>
<td>preferred name</td>
</tr>
<tr>
<td>namePreferredOrFirst</td>
<td>uses preferred name. If no preferred name is entered, defaults to patient's first name.</td>
</tr>
<tr>
<td>nextSchedApptDate</td>
<td>date of the next scheduled appointment</td>
</tr>
<tr>
<td>nextSchedApptDateT</td>
<td></td>
</tr>
<tr>
<td>nextSchedApptsFam</td>
<td></td>
</tr>
<tr>
<td>patientPortalCredentials</td>
<td>Generates and displays a one-time use <a href="../site/patientportal.html">Patient Portal Feature</a> user name and password for patients who have not accessed the portal yet and have an entered name, address, email, phone number, and date of birth. See <a href="portalaccess.html">Patient Portal Access</a>.<p class="codeblock">UserName: Ann123</p><p class="codeblock">Password: xxxxxx</p><br/> Cannot be used in <a href="patientdashboard.html">Patient Dashboard</a>.</td>
</tr>
<tr>
<td>PatNum</td>
<td>patient number</td>
</tr>
<tr>
<td>plannedAppointmentInfo</td>
<td>Displays information from oldest planned appointment.</td>
</tr>
<tr>
<td>practiceTitle</td>
<td>practice title</td>
</tr>
<tr>
<td>premedicateYN</td>
<td></td>
</tr>
<tr>
<td>priProvNameFormal</td>
<td>primary provider first name, middle initial, last name, suffix</td>
</tr>
<tr>
<td>recallInterval</td>
<td>recall interval</td>
</tr>
<tr>
<td>recallScheduledYN</td>
<td></td>
</tr>
<tr>
<td>referredFrom</td>
<td>When the referred from is a doctor, output will be formatted as follows:First name last name title: specialty (e.g. John Doe DDS: Perio)</td>
</tr>
<tr>
<td>referredTo</td>
<td>When the referred to is a doctor, output will be formatted as follows: First name last name title: specialty date referred (e.g., John Doe DDS: Perio 06/24/2020)</td>
</tr>
<tr>
<td>salutation</td>
<td>If a salutation is entered (Edit Patient Information window), it uses that. If not, it uses preferred name or first name.</td>
</tr>
<tr>
<td>serviceNote</td>
<td>service note (Medical window)</td>
</tr>
<tr>
<td>siteDescription</td>
<td>Site description</td>
</tr>
<tr>
<td>SSN</td>
<td>social security number</td>
</tr>
<tr>
<td>subscriberID</td>
<td>primary insurance plan subscriber ID</td>
</tr>
<tr>
<td>subscriberNameFL</td>
<td>primary insurance plan subscriber first name, last name</td>
</tr>
<tr>
<td>subscriber2NameFL</td>
<td>secondary insurance plan subscriber first name, last name</td>
</tr>
<tr>
<td>timeNow</td>
<td>current time</td>
</tr>
<tr>
<td>tpResponsPartyAddress</td>
<td>address of the treatment plan's responsible party</td>
</tr>
<tr>
<td>tpResponsPartyCityStZip</td>
<td>city, state, zip of the treatment plan's responsible party</td>
</tr>
<tr>
<td>tpResponsPartyNameFL</td>
<td>first name, last name of the treatment plan's responsibility party</td>
</tr>
<tr>
<td>treatmentNote</td>
<td>notes found under tooth chart</td>
</tr>
<tr>
<td>treatmentPlanProcs</td>
<td>treatment plan procedures</td>
</tr>
<tr>
<td>treatmentPlanProcsPriority</td>
<td>priority of the procedures on the treatment plan</td>
</tr>
<tr>
<td>WirelessPhone</td>
<td>patient's wireless phone number</td>
</tr>
<tr>
<td>WkPhone</td>
<td>patient's work phone</td>
</tr>
</table>
</div>
</div>
</body>
</html>```
