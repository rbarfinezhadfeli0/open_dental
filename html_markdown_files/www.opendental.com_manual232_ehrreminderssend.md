# File: ./www.opendental.com/manual232/ehrreminderssend.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Document Reminders Sent to Patients</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrreminderssend','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/ehrreminderssend.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/ehrreminderssend.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrreminderssend.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrreminderssend.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrreminderssend.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/ehrreminderssend.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrreminderssend.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrreminderssend.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrreminderssend.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrreminderssend.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrreminderssend.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrreminderssend.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrreminderssend.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrreminderssend.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrreminderssend.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrreminderssend.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrreminderssend.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrreminderssend.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrreminderssend.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrreminderssend.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrreminderssend.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrreminderssend.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrreminderssend.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrreminderssend.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrreminderssend.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrreminderssend.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrreminderssend.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrreminderssend.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Document Reminders Sent to Patients</p></div>
<div class="GeneralPageContent">
<p>In <a href="../site/ehrmodified2.html">EHR Modified Stage 2</a>, there is no reporting requirement for reminders. </p>
<p>Reminders are notices sent to patients to remind them of preventive or follow-up care. Reminders are counted in the numerator for the EHR Reminders measure in two ways:</p>
<ol>
<li>When you mark a reminder as <i>Sent</i> on the Reminders window (see below). </li>
<li>In version 15.1.21 and greater: When you send a recall reminder via the <a href="recalllist.html">Recall List</a> that has a Commlog type of <i>Recall</i>.</li>
</ol>
<br/><p>To determine which patients meet the stage 1 criteria for a reminder, generate a Patient List based on Birthdate. See <a href="ehrpatientlistgenerate.html">EHR Generate Patient List</a>. To also determine which patients meet criteria and had a completed procedure within a date range, use query #868 in <a href="https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx">Query Examples</a>, specifying a birthdate, provider, and date range. </p>
<h2>Mark a reminder as <i>sent</i> on the reminders window</h2>
<ol>
<li>On the <a href="ehrdashboard1.html">EHR Dashboard</a>, click <b>Send reminders</b>. <br/><img src="images/ehrReminders.gif" width="586" height="461" class="ImageInParagraph"/><p>The Reminders grid lists any reminders that have been triggered for the patient, based on Reminder Rules. Reminder rules are optional and set patient criteria for a reminder (e.g. age, conditions). See <a href="ehrsetupreminderrules.html">EHR Reminder Rules</a>. In the example above, the patient meets the criteria for being 5 years of age or younger.</p>
</li>
<li>Select the patient's preferred communication preference. Click <b>Edit</b>, select a confidential contact option, then click OK. This preference can be a filter in Patient Lists.</li>
<li>Select the reminder, then click <b>Send</b> to document that a reminder has been sent. A dated log entry will show in the Reminders Sent grid, and the numerator will increase in Measure Reports. See <a href="ehrmeasures.html">EHR Measure Reports</a>.</li>
</ol>
</div>
</div>
</body>
</html>```
