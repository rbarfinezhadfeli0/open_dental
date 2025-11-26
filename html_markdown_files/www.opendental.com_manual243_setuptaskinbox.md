# File: ./www.opendental.com/manual243/setuptaskinbox.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Task Inbox Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('setuptaskinbox','tasksetup','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/setuptaskinbox.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/setuptaskinbox.html" >v24.2</option><option value="https://www.opendental.com/manual241/setuptaskinbox.html" >v24.1</option><option value="https://www.opendental.com/manual233/setuptaskinbox.html" >v23.3</option><option value="https://www.opendental.com/manual232/setuptaskinbox.html" >v23.2</option><option value="https://www.opendental.com/manual231/setuptaskinbox.html" >v23.1</option><option value="https://www.opendental.com/manual224/setuptaskinbox.html" >v22.4</option><option value="https://www.opendental.com/manual223/setuptaskinbox.html" >v22.3</option><option value="https://www.opendental.com/manual222/setuptaskinbox.html" >v22.2</option><option value="https://www.opendental.com/manual221/setuptaskinbox.html" >v22.1</option><option value="https://www.opendental.com/manual214/setuptaskinbox.html" >v21.4</option><option value="https://www.opendental.com/manual213/setuptaskinbox.html" >v21.3</option><option value="https://www.opendental.com/manual212/setuptaskinbox.html" >v21.2</option><option value="https://www.opendental.com/manual211/setuptaskinbox.html" >v21.1</option><option value="https://www.opendental.com/manual205/setuptaskinbox.html" >v20.5</option><option value="https://www.opendental.com/manual204/setuptaskinbox.html" >v20.4</option><option value="https://www.opendental.com/manual203/setuptaskinbox.html" >v20.3</option><option value="https://www.opendental.com/manual202/setuptaskinbox.html" >v20.2</option><option value="https://www.opendental.com/manual201/setuptaskinbox.html" >v20.1</option><option value="https://www.opendental.com/manual194/setuptaskinbox.html" >v19.4</option><option value="https://www.opendental.com/manual193/setuptaskinbox.html" >v19.3</option><option value="https://www.opendental.com/manual192/setuptaskinbox.html" >v19.2</option><option value="https://www.opendental.com/manual191/setuptaskinbox.html" >v19.1</option><option value="https://www.opendental.com/manual184/setuptaskinbox.html" >v18.4</option><option value="https://www.opendental.com/manual183/setuptaskinbox.html" >v18.3</option><option value="https://www.opendental.com/manual182/setuptaskinbox.html" >v18.2</option><option value="https://www.opendental.com/manual181/setuptaskinbox.html" >v18.1</option><option value="https://www.opendental.com/manual174/setuptaskinbox.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Task Inbox Setup</p></div>
<div class="GeneralPageContent">
<p>Assign Task Lists to users as inboxes.</p>
<p>In <a href="tasksetup.html">Tasks Preferences</a>, click <b>Inbox Setup</b>.</p>
<img src="images/taskInboxSetup.png" width="727" height="561"/><p>Inboxes determine which Task Lists are listed by default when clicking <i>Send To...</i> on a <a href="taskswindow.html">Task</a> and which Task List a task is sent to when clicking <i>Reply</i> on a task.</p>
<p><a href="securityusers.html">Users</a> and <a href="tasklists.html">Task Lists</a> must be created before assigning Task Inboxes.</p>
<p><b>User / Inbox grid</b>: Displays users and the Task List that is currently assigned as an inbox.</p>
<p><b>Task Lists</b>: Displays all Task Lists that are not archived.</p>
<p class="MarginBottomZero">To assign an inbox to a user: </p>
<ol>
<li>Highlight the user in the User / Inbox grid (on the left).</li>
<li>Highlight the Task List to be assigned as an inbox from the Task Lists (on the right). <ul>
<li>To unassign a user from any inbox, highlight <i>none</i>.</li>
</ul>
</li>
<li>Click <b>Set</b>.</li>
</ol>
<p class="MarginBottomGap">The selected Task List is now assigned as the selected user's inbox. If the user was already assigned a different inbox, it is replaced with the new Task List. </p>
<p></p>
<p>Once an inbox is assigned, users should subscribe to the Task List from the <a href="tasksarea.html">Tasks Area</a> to get task popups or show tasks in the New for User and For User tabs. </p>
</div>
</div>
</body>
</html>```
