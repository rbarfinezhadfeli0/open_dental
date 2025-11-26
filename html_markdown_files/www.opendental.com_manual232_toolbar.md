# File: ./www.opendental.com/manual232/toolbar.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Main Toolbar</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('toolbar','manual')">
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
						}"><option value="https://www.opendental.com/manual243/toolbar.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/toolbar.html" >v24.2</option><option value="https://www.opendental.com/manual241/toolbar.html" >v24.1</option><option value="https://www.opendental.com/manual233/toolbar.html" >v23.3</option><option value="https://www.opendental.com/manual232/toolbar.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/toolbar.html" >v23.1</option><option value="https://www.opendental.com/manual224/toolbar.html" >v22.4</option><option value="https://www.opendental.com/manual223/toolbar.html" >v22.3</option><option value="https://www.opendental.com/manual222/toolbar.html" >v22.2</option><option value="https://www.opendental.com/manual221/toolbar.html" >v22.1</option><option value="https://www.opendental.com/manual214/toolbar.html" >v21.4</option><option value="https://www.opendental.com/manual213/toolbar.html" >v21.3</option><option value="https://www.opendental.com/manual212/toolbar.html" >v21.2</option><option value="https://www.opendental.com/manual211/toolbar.html" >v21.1</option><option value="https://www.opendental.com/manual205/toolbar.html" >v20.5</option><option value="https://www.opendental.com/manual204/toolbar.html" >v20.4</option><option value="https://www.opendental.com/manual203/toolbar.html" >v20.3</option><option value="https://www.opendental.com/manual202/toolbar.html" >v20.2</option><option value="https://www.opendental.com/manual201/toolbar.html" >v20.1</option><option value="https://www.opendental.com/manual194/toolbar.html" >v19.4</option><option value="https://www.opendental.com/manual193/toolbar.html" >v19.3</option><option value="https://www.opendental.com/manual192/toolbar.html" >v19.2</option><option value="https://www.opendental.com/manual191/toolbar.html" >v19.1</option><option value="https://www.opendental.com/manual184/toolbar.html" >v18.4</option><option value="https://www.opendental.com/manual183/toolbar.html" >v18.3</option><option value="https://www.opendental.com/manual182/toolbar.html" >v18.2</option><option value="https://www.opendental.com/manual181/toolbar.html" >v18.1</option><option value="https://www.opendental.com/manual174/toolbar.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Main Toolbar</p></div>
<div class="GeneralPageContent">
<p>There is a common toolbar at the top of the Open Dental regardless of which <a href="modules.html">Module</a> you are in. </p>
<img src="images/toolbar.gif" width="730" height="32"/><p><a href="patientselect.html">Select Patient</a>: Select patients or create new patient records.</p>
<p><a href="commlog.html">Commlog</a>: A general purpose log of all patient communications.</p>
<p><a href="emailmessage.html">Email</a>: Click the main button to send an email to the patient. Click the dropdown to select a referral attached to the current patient to send an email to.</p>
<p><a href="securewebmailsend.html">Webmail</a>: Send secure WebMails.</p>
<p><a href="textmessages.html">Text Message</a>: Click the main button to send a text message to the selected patient. If using Integrated Texting, click the dropdown to open the Text Messaging inbox and view received and/or sent messages. This button is only enabled if text messaging is enabled.</p>
<p><a href="letterspatient.html">Letter</a>: Click the main button to create a patient letter. Click the dropdown to create a referral letter or to merge letters.</p>
<p><a href="patientform.html">Forms</a>: View, add, or edit electronic patient forms.</p>
<p><a href="tasks.html">Tasks</a>: Send a task about the current patient to a specific task list. Total number of new tasks show as a notification in orange. Click the dropdown to view new tasks for the logged-on user, including task lists the user is subscribed to and task reminders. <div class="Note">Note: The task count includes <a href="taskreminders.html">Reminder Tasks</a> only when <a href="tasklistrepeating.html">Repeating Task Lists (Legacy)</a> is disabled.</div>
</p>
<p><a href="labels.html">Label</a>: Click the main button to create a patient mailing label. Click the dropdown to select other label formats, labels for insurance carriers, and labels for referrals.</p>
<p><a href="popups.html">Popups</a>: Set up automatic messages that pop up every time you open a patient's record.</p>
</div>
</div>
</body>
</html>```
