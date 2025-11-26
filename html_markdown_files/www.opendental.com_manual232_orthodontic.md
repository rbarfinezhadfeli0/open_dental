# File: ./www.opendental.com/manual232/orthodontic.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Orthodontics</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('orthodontic','orthosetup','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/orthodontic.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/orthodontic.html" >v24.2</option><option value="https://www.opendental.com/manual241/orthodontic.html" >v24.1</option><option value="https://www.opendental.com/manual233/orthodontic.html" >v23.3</option><option value="https://www.opendental.com/manual232/orthodontic.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/orthodontic.html" >v23.1</option><option value="https://www.opendental.com/manual224/orthodontic.html" >v22.4</option><option value="https://www.opendental.com/manual223/orthodontic.html" >v22.3</option><option value="https://www.opendental.com/manual222/orthodontic.html" >v22.2</option><option value="https://www.opendental.com/manual221/orthodontic.html" >v22.1</option><option value="https://www.opendental.com/manual214/orthodontic.html" >v21.4</option><option value="https://www.opendental.com/manual213/orthodontic.html" >v21.3</option><option value="https://www.opendental.com/manual212/orthodontic.html" >v21.2</option><option value="https://www.opendental.com/manual211/orthodontic.html" >v21.1</option><option value="https://www.opendental.com/manual205/orthodontic.html" >v20.5</option><option value="https://www.opendental.com/manual204/orthodontic.html" >v20.4</option><option value="https://www.opendental.com/manual203/orthodontic.html" >v20.3</option><option value="https://www.opendental.com/manual202/orthodontic.html" >v20.2</option><option value="https://www.opendental.com/manual201/orthodontic.html" >v20.1</option><option value="https://www.opendental.com/manual194/orthodontic.html" >v19.4</option><option value="https://www.opendental.com/manual193/orthodontic.html" >v19.3</option><option value="https://www.opendental.com/manual192/orthodontic.html" >v19.2</option><option value="https://www.opendental.com/manual191/orthodontic.html" >v19.1</option><option value="https://www.opendental.com/manual184/orthodontic.html" >v18.4</option><option value="https://www.opendental.com/manual183/orthodontic.html" >v18.3</option><option value="https://www.opendental.com/manual182/orthodontic.html" >v18.2</option><option value="https://www.opendental.com/manual181/orthodontic.html" >v18.1</option><option value="https://www.opendental.com/manual174/orthodontic.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Orthodontics</p></div>
<div class="GeneralPageContent">
<p>Open Dental is customizable for orthodontic specialty practices. We continue to refine and expand features for this specialty.</p>
<p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynCkTGQT-plH4ftvLX0lUpurW">Orthodontic Webinar Playlist</a>.</p>
<h2>General Setup</h2>
<p><a href="preferences.html">Preferences</a>: For Orthodontic only practices, set the tooth nomenclature to <i>Palmer</i>.</p>
<p><a href="orthosetup.html">Ortho Setup</a>: Set default orthodontic preferences for display options, claims, and the ortho chart.</p>
<p><a href="orthochartsetup.html">Ortho Chart Setup</a>: Create tabs to organize ortho chart information and set which columns of information show on each tab.</p>
<p class="MarginBottomZero"><a href="procedurecodes.html">Procedure Codes</a>: Add and edit procedure codes and set default procedure fees and time patterns. Offices will generally have two types of procedure codes. </p>
<ul class="MarginBottomGap">
<li>Procedure codes for charging fees/billing insurance (typically standard ADA codes). Add suffixes to the ADA codes to differentiate multiple fees for the same procedure. Create procedure codes for common treatment lengths where the fee changes (e.g., D8080.18, D8080.24, etc.). Only the first 5 digits of the code are sent in claims; extra characters are dropped when billing. See examples below.</li>
</ul>
<img src="images/orthoProcs.png" width="597" height="229"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Procedure codes for scheduling patients (N codes). These procedures would not be billed to insurance. For example, N0001 could be Take records, and N0002 could be Cement bands. See <a href="procedurecodenew.html">Add Procedure Code</a>. When creating an N code, check <b>Do not usually bill to insurance</b>.</li>
</ul>
<h2>Patient Management</h2>
<p><a href="patientclone.html">Clone</a> creates a clone of the original patient (in ALL CAPS). Specific demographic information and insurance plan data can be synced from original to clone patient. Offices that offer general dentistry and orthodontics use patient clones to keep accounting separate. For example, track production and income for each provider that treats the same patient, such as dentist versus orthodontist work.</p>
<h2>Charting</h2>
<p class="MarginBottomZero">Enter procedures in the Chart module and organize them in Treatment Plans. </p>
<ul class="MarginBottomGap">
<li>Use the <a href="orthochart.html">Ortho Chart</a> to keep track of ortho visits and chart ortho notes.</li>
<li>Users with appropriate <a href="permissions.html">Permissions</a> can double-click a procedure to change the fee for any procedure from the <a href="procedureedit.html">Procedure Info</a> window.</li>
<li>Exam Sheets can replace any paper exam forms. See <a href="examsheets.html">Exam Sheet</a> used for ortho treatment.</li>
<li>Customize treatment priority names to sequence treatment as needed. See <a href="definitionstreatplanpriorities.html">Definitions: Treat' Plan Priorities</a>.</li>
<li><a href="ortho.html">Ortho Tab</a>: Utilize the Ortho Tab to chart <a href="orthohardwaresetup.html">Hardware</a> and <a href="orthoprescriptionssetup.html">Prescriptions</a>, view the Ortho Chart, see patient progress, and see a visual of ortho hardware. The Ortho Tab will always show teeth with Palmer numbering, regardless of the default preference. This is helpful for offices who may be practicing multiple specialites. The Ortho Tab is enabled in Ortho Setup by checking <i>Show Ortho button and tab in Chart module</i>. </li>
</ul>
<h2>Insurance and Billing</h2>
<ul>
<li><a href="orthocase.html">Ortho Case</a>: Determine the schedule of treatment and fee estimates.</li>
<li>Enter an insurance plan's orthodontic lifetime max and percentage on the Edit Benefits window.</li>
<li>Define the insurance plan's orthodontic claim preferences from the <a href="insplan.html">Insurance Plan</a> - Ortho tab.</li>
<li>Quickly view a patient's orthodontic case information in the Account Module, Auto Ortho tab or in the Ortho Chart.</li>
<li>Add procedures for billing purposes only using Quick Procs or by simply setting a procedure complete.</li>
<li><a href="paymentplanpatient.html">Payment Plan</a>: Set up an unlimited amount of payment plans per patient. The guarantor does not have to be in the same family as the patient. The office has total control over the date, principal, and interest of every single payment on the amortization schedule.</li>
<li><a href="paymentplanins.html">Insurance Payment Plans</a>: Create to track insurance's expected ortho payments. The total expected insurance payment will be removed from the patient's overall balance. </li>
<li><a href="orthoautoclaim.html">Auto Ortho Tool</a>: When a plan requires that the office submit an initial claim, then submit periodic claims at a certain frequency and fee, they can use Auto Ortho Claim Generation to quickly generate periodic claims.</li>
<li>Quickly view auto ortho information, change the fee or next claim date from the Edit Insurance Plan window by clicking the Ortho button.</li>
</ul>
<br/><h2>Miscellaneous</h2>
<p><a href="referrals.html">Referrals</a>: Track and report on referrals to see at a glance who referred each patient to the office. Users can merge letters for the referral sources as well.</p>
<p>Patient Letters: <a href="letterspatient.html">Letter</a> to create school excuse slips or other patient communication.</p>
</div>
</div>
</body>
</html>```
