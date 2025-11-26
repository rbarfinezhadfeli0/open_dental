# File: ./www.opendental.com/manual/notes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Notes</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('notes','procedureedit','entertreatment','+chartTabs','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/notes.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/notes.html" >v24.2</option><option value="https://www.opendental.com/manual241/notes.html" >v24.1</option><option value="https://www.opendental.com/manual233/notes.html" >v23.3</option><option value="https://www.opendental.com/manual232/notes.html" >v23.2</option><option value="https://www.opendental.com/manual231/notes.html" >v23.1</option><option value="https://www.opendental.com/manual224/notes.html" >v22.4</option><option value="https://www.opendental.com/manual223/notes.html" >v22.3</option><option value="https://www.opendental.com/manual222/notes.html" >v22.2</option><option value="https://www.opendental.com/manual221/notes.html" >v22.1</option><option value="https://www.opendental.com/manual214/notes.html" >v21.4</option><option value="https://www.opendental.com/manual213/notes.html" >v21.3</option><option value="https://www.opendental.com/manual212/notes.html" >v21.2</option><option value="https://www.opendental.com/manual211/notes.html" >v21.1</option><option value="https://www.opendental.com/manual205/notes.html" >v20.5</option><option value="https://www.opendental.com/manual204/notes.html" >v20.4</option><option value="https://www.opendental.com/manual203/notes.html" >v20.3</option><option value="https://www.opendental.com/manual202/notes.html" >v20.2</option><option value="https://www.opendental.com/manual201/notes.html" >v20.1</option><option value="https://www.opendental.com/manual194/notes.html" >v19.4</option><option value="https://www.opendental.com/manual193/notes.html" >v19.3</option><option value="https://www.opendental.com/manual192/notes.html" >v19.2</option><option value="https://www.opendental.com/manual191/notes.html" >v19.1</option><option value="https://www.opendental.com/manual184/notes.html" >v18.4</option><option value="https://www.opendental.com/manual183/notes.html" >v18.3</option><option value="https://www.opendental.com/manual182/notes.html" >v18.2</option><option value="https://www.opendental.com/manual181/notes.html" >v18.1</option><option value="https://www.opendental.com/manual174/notes.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Notes</p></div>
<div class="GeneralPageContent">
<p>There are many different places for notes in Open Dental. This page describes which notes should be used for which purposes and protocols your office should use in organizing your notes.</p>
<p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://youtu.be/J6f_nED9epo">Clinical Charting II: Clinical Notes Webinar</a>.</p>
<h2>Notes used with Procedures</h2>
<ul>
<li><a href="procedurenotes.html">Procedure Notes</a>: Use <a href="procedureedit.html">Procedure</a> notes in the <a href="chart.html">Chart Module</a> to document anything that normally goes into your chart notes, such as materials used, procedures followed, treatment performed, anesthetic, informed consent, etc. You can optionally set up default Procedure notes (<a href="procedurecodeedit.html">Procedure Code</a>) that copy automatically into a procedure every time a procedure is treatment planned or set complete. Then only very minor changes usually need to be made. Once a procedure note is saved, if changes are made and saved, previous versions of the note are archived and can be viewed from the Chart Module, <a href="showtabchart.html">Show tab</a>, check<i> Audit</i>.</li>
<li><b>Chart Module Progress Notes</b>: The Chart Module's lower right grid shows the current chart view which filters which notes are displayed. Right-clicking into the Chart Module's lower right grid allows printing the current displayed notes. Create additional chart views to display different progress notes filters from <a href="showtabchart.html">Show Chart Views</a>.</li>
<li><b>Clinical Note</b>: Some other dental software products have a clinical note, a daily note, or a procedure note. In Open Dental, those are all just ordinary procedures that use a dummy procedure code. We include clinical note and procedure note as pre-configured procedure codes for you to pick from. These are typically set up as <a href="procedurebuttons.html">Procedure Buttons</a> for faster entry.</li>
<li><a href="procgroupnote.html">Procedure Group Note</a>: A single clinical note attached to multiple procedures by the same provider.</li>
<li><a href="autonotes.html">Auto Notes</a>: Templates used to insert frequently entered, large notes (e.g. for hygiene, root canals, materials, anesthetic, post op instructions). They can contain prompts and pre-filled text.</li>
</ul>
<br/><h2>General Purpose Notes</h2>
<ul>
<li><a href="quickpastenotessetup.html">Quick Paste Notes Setup</a>: Used to organize and enter frequently used notes by using templates. It is similar to Procedure Notes, but covers many different kinds of notes. Also lets you insert dates.</li>
<li><a href="commlog.html">Commlog</a>: Commlogs are for non-clinical patient communication. This includes email, patient and referral letters, phone calls, insurance calls, etc.</li>
<li><b>Medical/Service Notes:</b> The <a href="medical.html">Medical</a> has a place for Med Urgent, Medical Summary, and Service Notes. The Med Urgent note can be set to show on appointments. See <a href="appointmentviews.html">Appointment Views</a>.</li>
<li><b>Tooth Chart Notes:</b> In the Chart module under the tooth chart, there is a text box for notes.</li>
</ul>
<br/><h2>Financial Notes</h2>
<ul>
<li><b>Family Urgent Fin Note</b>: Important financial notes can be entered as a Family Urgent Fin Note at the top of the <a href="account.html">Account Module</a>. This note shows in red and applies to all family members. Any changes affect all family members. The note displays when you hover over an appointment and on the <a href="apptspatient.html">Patient Appointments</a> window.</li>
<li><b>Family Financial notes</b></li>
</ul>
<br/><h2>Appointment Module Notes</h2>
<p>Sometimes you want notes to show in the <a href="appointments.html">Appointments Module</a> schedule that are not part of appointments or procedures.</p>
<p class="MarginBottomZero"><b>Patient-specific notes:</b> Patient notes can act as reminders to call a patient at a specific time, to run recurring credit card payments, to follow up on phone calls, or to call patients who request to be called if a patient cancels. Simply create an appointment with a note and no procedures. </p>
<ol class="MarginBottomGap">
<li>In the Appointments module, click View Pat Appts.</li>
<li>Click <b>NOTE for Patient</b>.</li>
<li>Enter the note in the Patient NOTE field on the left.</li>
<li>Click <b>OK</b> to send the note to the pinboard. Drag the note to the schedule.</li>
<ul><li>The preference, <i>Appointment without procedures default length in minutes</i>, determines the default length of the NOTE for Patient.</li></ul>
<li>Once the note has been handled, set it complete, or delete it.</li>
</ol>
<p>Set patient note color in <a href="definitionsappointmentcolors.html">Definitions: Appointment Colors</a>. This overrides provider and appointment type color and will change when the note is set complete. </p>
<p class="MarginBottomZero"><b>General Notes:</b> General notes that are not attached to a patient can also show in the Appointments module. For example, add notes about office schedule changes, staff out, holidays, meetings, notes to staff, etc.  </p>
<ol class="MarginBottomGap">
<li>Create a new patient called Miscellaneous, Notes or something similar. Remember that the displayed format will be Last Name, First Name.</li>
<li>Select the note patient and schedule an appointment or create a NOTE for Patient. On the <a href="aptedit.html">Edit Appointment</a> window, enter the note in the Appointment Note field.</li>
</ol>
<p>If adding the general note as an appointment, customize the color by creating an alternate provider for the note (e.g. NOTE). Select the NOTE provider on the Edit Appointment window to use the color.</p>
<p><a href="blockouts.html">Blockouts</a>: Blocks of time on the appointment schedule that designate specific purposes.</p>
<h2>Address and Phone Notes</h2>
<p>Enter these notes on the <a href="patientedit.html">Edit Patient Information</a>. Make notes about when to call a patient, which number the patient prefers, extra phone numbers, extensions, bad phone numbers, bad addresses, alternate addresses, etc. Text will show in bold red in the Patient Information area of the Family module. These notes also show in the Unscheduled list, Recall list, and appointment.</p>
<h2>Schedules</h2>
<p>Notes that show on printed schedules (e.g. holidays, practice notes) can be entered in <a href="schedule.html">Schedule Setup</a>.</p>
<h2>Treatment Plan</h2>
<p>Customize the note that shows on printed Treatment Plans. </p>
</div>
</div>
</body>
</html>```
