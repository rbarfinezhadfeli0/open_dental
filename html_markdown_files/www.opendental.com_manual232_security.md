# File: ./www.opendental.com/manual232/security.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Security</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('security','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/security.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/security.html" >v24.2</option><option value="https://www.opendental.com/manual241/security.html" >v24.1</option><option value="https://www.opendental.com/manual233/security.html" >v23.3</option><option value="https://www.opendental.com/manual232/security.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/security.html" >v23.1</option><option value="https://www.opendental.com/manual224/security.html" >v22.4</option><option value="https://www.opendental.com/manual223/security.html" >v22.3</option><option value="https://www.opendental.com/manual222/security.html" >v22.2</option><option value="https://www.opendental.com/manual221/security.html" >v22.1</option><option value="https://www.opendental.com/manual214/security.html" >v21.4</option><option value="https://www.opendental.com/manual213/security.html" >v21.3</option><option value="https://www.opendental.com/manual212/security.html" >v21.2</option><option value="https://www.opendental.com/manual211/security.html" >v21.1</option><option value="https://www.opendental.com/manual205/security.html" >v20.5</option><option value="https://www.opendental.com/manual204/security.html" >v20.4</option><option value="https://www.opendental.com/manual203/security.html" >v20.3</option><option value="https://www.opendental.com/manual202/security.html" >v20.2</option><option value="https://www.opendental.com/manual201/security.html" >v20.1</option><option value="https://www.opendental.com/manual194/security.html" >v19.4</option><option value="https://www.opendental.com/manual193/security.html" >v19.3</option><option value="https://www.opendental.com/manual192/security.html" >v19.2</option><option value="https://www.opendental.com/manual191/security.html" >v19.1</option><option value="https://www.opendental.com/manual184/security.html" >v18.4</option><option value="https://www.opendental.com/manual183/security.html" >v18.3</option><option value="https://www.opendental.com/manual182/security.html" >v18.2</option><option value="https://www.opendental.com/manual181/security.html" >v18.1</option><option value="https://www.opendental.com/manual174/security.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Security</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <b>Security</b>.</p>
<img src="images/securityWindow.png" width="915" height="705"/><p class="MarginBottomZero">Setting up security for the Open Dental program will help protect patient data and track user access. This is an important component of a security plan as well as a requirement for <a href="../site/hipaa.html">HIPAA</a> compliance. </p>
<ul class="MarginBottomGap">
<li>Only users with the <i>Security Admin</i> security permission can access the Security area.</li>
<li>Every person who uses Open Dental should have a unique user name and password for logging on.</li>
<li>Other options, such as automatic log-off and lock dates, can also be set.</li>
</ul>
<p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://youtu.be/muargCx3wrE">Security and User Permissions Webinar</a>.</p>
<p>Also see: <a href="permissions.html">Permissions</a>.</p>
<p>Tracking authorized use of Open Dental: Every time a user logs in, logs off or closes Open Dental, an entry is created in the <a href="audittrail.html">Audit Trail</a>. Another option is to use the Windows audit feature. Set up Windows so that each user is required to log in separately, then use the Security Log to view valid and invalid log attempts. To view the Windows audit log go to This PC, right-click and choose Manage, expand Event Viewer, expand Windows Logs, and click Security.</p>
<h2>Toolbar Options</h2>
<p><b>Global Security Settings</b>: Click to open <a href="securitysettings.html">Global Security Settings</a>.</p>
<p><b>CEMT Users</b>: Only shows when CEMT users are enabled for the database. Opens the Central User Edit window. <br/> Double-click a user, or highlight a user then click <b>Edit</b>, to open the <a href="securityusers.html">User Edit</a> window. When accessed, CEMT Users can have an employee, provider, or DoseSpot ID associated. <br/><img src="images/securityCEMTUsers.png" width="447" height="288" class="ImageInParagraph"/></p>
<h2>Users</h2>
<p class="MarginBottomZero"><b>User Filters</b>: Adjust filters to show only users matching the criteria in the Users list below. </p>
<ul class="MarginBottomGap">
<li><b>Show Only</b>: Select an option from the dropdown to only show certain users. <ul>
<li>All Users: Select to show all users regardless of employee/provider association.</li>
<li>Providers: Select to only show users associated to a provider.</li>
<li>Employees: Select to only show users associated to an employee.</li>
<li>Other: Select to only show users with no employee or provider association.</li>
</ul>
</li>
<li><b>Group</b>: Select the user group to filter by. Only users associated with the selected group with be listed. Select <i>All Groups</i> to include users regardless of user group.</li>
<li><b>Clinic</b>: Select the clinic to filter by. Filters by user's default clinic. Select <i>All Clinics</i> to include users regardless of default clinic.</li>
<li><b>Username</b>: Type a username to search for a specific user.</li>
<li><b>Show hidden users</b>: Check to include users marked hidden in the Users list.</li>
</ul>
<img src="images/securityUserFilters.png" width="418" height="102"/><p class="MarginBottomZero"><b>Users</b>: A list of all users that meet the User Filter criteria. Double-click to <a href="securityusers.html">Edit a User</a>. Below is additional information on the Users grid: </p>
<ul class="MarginBottomGap">
<li>Username: Name the user will use to log into Open Dental.</li>
<li>Employee: First and last name of employee associated with the user. Used for the <a href="timeclock.html">Time Clock</a>.</li>
<li>Provider: <a href="providers.html">Provider</a> associated with the user.</li>
<li>Clinic: User's default clinic.</li>
<li>Clinic Restr: X indicates the user is restricted to specific clinics.</li>
<li>Strong Pwd: X indicates the user has a strong password.</li>
</ul>
<img src="images/securityUserList.png" width="462" height="168"/><p><b>Add User</b>: Click to create a new user.</p>
<p><b>Copy User</b>: Highlight a user, then click to make a copy. Information copied includes user group, permissions, clinic restrictions, and alert subscriptions. This is useful when adding a new user with similar permissions and setup to an existing user. When copied, you will be prompted to create a password. Create a password or click OK to skip. Once created, edit the copied user as needed.</p>
<p><b>User Groups for</b>: Displays users groups associated with the selected user.</p>
<p><b>Effective permissions for user</b>: A read-only list of the user group's assigned permissions (Checked = allowed, Unchecked = not allowed). To change a user group's assigned permissions, click the <a href="securityusergroups.html">User Groups</a> tab.</p>
</div>
</div>
</body>
</html>```
