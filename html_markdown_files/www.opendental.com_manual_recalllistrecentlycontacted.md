# File: ./www.opendental.com/manual/recalllistrecentlycontacted.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Recall List - Reminders</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('recalllistrecentlycontacted','recalllist','appointmentlists','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/recalllistrecentlycontacted.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/recalllistrecentlycontacted.html" >v24.2</option><option value="https://www.opendental.com/manual241/recalllistrecentlycontacted.html" >v24.1</option><option value="https://www.opendental.com/manual233/recalllistrecentlycontacted.html" >v23.3</option><option value="https://www.opendental.com/manual232/recalllistrecentlycontacted.html" >v23.2</option><option value="https://www.opendental.com/manual231/recalllistrecentlycontacted.html" >v23.1</option><option value="https://www.opendental.com/manual224/recalllistrecentlycontacted.html" >v22.4</option><option value="https://www.opendental.com/manual223/recalllistrecentlycontacted.html" >v22.3</option><option value="https://www.opendental.com/manual222/recalllistrecentlycontacted.html" >v22.2</option><option value="https://www.opendental.com/manual221/recalllistrecentlycontacted.html" >v22.1</option><option value="https://www.opendental.com/manual214/recalllistrecentlycontacted.html" >v21.4</option><option value="https://www.opendental.com/manual213/recalllistrecentlycontacted.html" >v21.3</option><option value="https://www.opendental.com/manual212/recalllistrecentlycontacted.html" >v21.2</option><option value="https://www.opendental.com/manual211/recalllistrecentlycontacted.html" >v21.1</option><option value="https://www.opendental.com/manual205/recalllistrecentlycontacted.html" >v20.5</option><option value="https://www.opendental.com/manual204/recalllistrecentlycontacted.html" >v20.4</option><option value="https://www.opendental.com/manual203/recalllistrecentlycontacted.html" >v20.3</option><option value="https://www.opendental.com/manual202/recalllistrecentlycontacted.html" >v20.2</option><option value="https://www.opendental.com/manual201/recalllistrecentlycontacted.html" >v20.1</option><option value="https://www.opendental.com/manual194/recalllistrecentlycontacted.html" >v19.4</option><option value="https://www.opendental.com/manual193/recalllistrecentlycontacted.html" >v19.3</option><option value="https://www.opendental.com/manual192/recalllistrecentlycontacted.html" >v19.2</option><option value="https://www.opendental.com/manual191/recalllistrecentlycontacted.html" >v19.1</option><option value="https://www.opendental.com/manual184/recalllistrecentlycontacted.html" >v18.4</option><option value="https://www.opendental.com/manual183/recalllistrecentlycontacted.html" >v18.3</option><option value="https://www.opendental.com/manual182/recalllistrecentlycontacted.html" >v18.2</option><option value="https://www.opendental.com/manual181/recalllistrecentlycontacted.html" >v18.1</option><option value="https://www.opendental.com/manual174/recalllistrecentlycontacted.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Recall List - Reminders</p></div>
<div class="GeneralPageContent">
<p>The Reminder List in Recall is a list of patients that have been recently contacted.</p>
<p>In the <a href="recalllist.html">Recall List</a>, select the <b>Reminders</b> tab.</p>
<img src="images/recallReminders.png" width="915" height="428"/><p class="MarginBottomZero">Change the list <b>View</b> criteria then click <b>Refresh List</b> to expand or limit the list results. </p>
<ul class="MarginBottomGap">
<li><b>From/To</b>: Select a date range to view patients who were sent a recall reminder between these dates.</li>
<li><b>Clinic</b>: Select the clinic(s) to view patients from these clinics that were sent a recall reminder.</li>
</ul>
<p class="MarginBottomZero">The <b>Reminder List</b> grid lists the patients recently contacted and information about their recall. </p>
<ul class="MarginBottomGap">
<li><b>Date Time Sent</b>: The date and time the recall reminder was sent.</li>
<li><b>Patient</b>: The last name, first name of the patient the reminder was sent to.</li>
<li><b>Reminder Type</b>: The reminder <a href="commlog.html">Commlog</a> mode (e.g., email, mail, phone).</li>
<li><b>Age</b>: Age of the patient.</li>
</ul>
<p class="MarginBottomZero">The following fields are only updated when a Web Sched reminder is sent. </p>
<ul class="MarginBottomGap">
<li><b>Due Date</b>: Date the patient's recall is due.</li>
<li><b>Recall Type</b>: The recall type the patient is due for.</li>
<li><b>Recall Status</b>: Recall status set when a Web Sched Recall reminder is sent.</li>
</ul>
<p>Right-click on a patient in the grid to quicky view them in the Account or Family modules.</p>
</div>
</div>
</body>
</html>```
