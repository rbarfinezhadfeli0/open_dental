# File: ./www.opendental.com/manual232/cemtsecurity.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - CEMT Security</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('cemtsecurity','central','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/cemtsecurity.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/cemtsecurity.html" >v24.2</option><option value="https://www.opendental.com/manual241/cemtsecurity.html" >v24.1</option><option value="https://www.opendental.com/manual233/cemtsecurity.html" >v23.3</option><option value="https://www.opendental.com/manual232/cemtsecurity.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/cemtsecurity.html" >v23.1</option><option value="https://www.opendental.com/manual224/cemtsecurity.html" >v22.4</option><option value="https://www.opendental.com/manual223/cemtsecurity.html" >v22.3</option><option value="https://www.opendental.com/manual222/cemtsecurity.html" >v22.2</option><option value="https://www.opendental.com/manual221/cemtsecurity.html" >v22.1</option><option value="https://www.opendental.com/manual214/cemtsecurity.html" >v21.4</option><option value="https://www.opendental.com/manual213/cemtsecurity.html" >v21.3</option><option value="https://www.opendental.com/manual212/cemtsecurity.html" >v21.2</option><option value="https://www.opendental.com/manual211/cemtsecurity.html" >v21.1</option><option value="https://www.opendental.com/manual205/cemtsecurity.html" >v20.5</option><option value="https://www.opendental.com/manual204/cemtsecurity.html" >v20.4</option><option value="https://www.opendental.com/manual203/cemtsecurity.html" >v20.3</option><option value="https://www.opendental.com/manual202/cemtsecurity.html" >v20.2</option><option value="https://www.opendental.com/manual201/cemtsecurity.html" >v20.1</option><option value="https://www.opendental.com/manual194/cemtsecurity.html" >v19.4</option><option value="https://www.opendental.com/manual193/cemtsecurity.html" >v19.3</option><option value="https://www.opendental.com/manual192/cemtsecurity.html" >v19.2</option><option value="https://www.opendental.com/manual191/cemtsecurity.html" >v19.1</option><option value="https://www.opendental.com/manual184/cemtsecurity.html" >v18.4</option><option value="https://www.opendental.com/manual183/cemtsecurity.html" >v18.3</option><option value="https://www.opendental.com/manual182/cemtsecurity.html" >v18.2</option><option value="https://www.opendental.com/manual181/cemtsecurity.html" >v18.1</option><option value="https://www.opendental.com/manual174/cemtsecurity.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>CEMT Security</p></div>
<div class="GeneralPageContent">
<p>In the <a href="central.html">Central Enterprise Management Tool ( CEMT )</a>, click <b>Setup, Security</b>.</p>
<img src="images/centralUsers.png" width="915" height="656"/><p>CEMT security settings control the security settings for database connections. Set up users, assign users to groups, assign permissions to user groups, and enter a lock date for procedures, payments, adjustments, and exam sheets.</p>
<div class="Note">Note: <ul>
<li>CEMT users are different from regular Open Dental users. CEMT users are created from within the CEMT tool and can access all connected databases using their CEMT credentials.</li>
<li>A CEMT user's Open Dental permissions are based on their CEMT permissions and can only be set from within the CEMT, not within the database connection.</li>
<li>For a CEMT user to show on a connected database at log in, the user must be associated with a user group that was manually created from the CEMT tool. CEMT users in the default user groups are not pushed to the database.</li>
<li>Because the Central Manager database (dbcentral) contains information about multiple connections, including encrypted passwords, we advise placing extra security around the MySQL installation. Edit the MySQL service and change the login information from local system to a specific user. The database files can then be encrypted by Windows while still allowing the MySQL service to run when the proper Windows user is logged in. See <a href="securitymysql.html">MySQL Security</a>.</li>
</ul>
</div>
<br/><br/><h2>Create or Edit User Groups</h2>
<p>Users are placed into a User Group then each User Group is granted a set of permissions.</p>
<ol>
<li>On the Central Manager User Edit window, click the User Groups tab. <br/><img src="images/centralUserGroups.png" width="915" height="656" class="ImageInParagraph"/></li>
<li>Click <b>Add Group</b>, or double-click a group to change its name or delete it. <br/><img src="images/centralUserGroupEdit.png" width="418" height="186" class="ImageInParagraph"/></li>
<li>Enter the user group description, then click OK to save.</li>
</ol>
<p></p>
<div class="Note">Note: To permanently delete a user group, click <b>Delete</b> (it cannot have any users).</div>
<br/><br/><h2>Add or Edit a User</h2>
<p>CEMT users have access to all connected databases. They are created in the CEMT tool and are able to log into a database by using their set credentials. </p>
<ol>
<li>On the Central Manager User Edit window, click <b>Add User</b> in the center to add a new user, or double-click an existing user to edit information. <br/><img src="images/centralUserEdit.png" width="612" height="583" class="ImageInParagraph"/></li>
<li>Click the <b>User</b> tab.</li>
<li>Enter the user's unique user name in the box.</li>
<li>Highlight the user group.</li>
</ol>
<div class="Note">Note: <ul>
<li>The CEMT user name must be unique and different from the names of regular users so that when CEMT users are pushed to a database, it does not cause confusion.</li>
<li>CEMT users can be associated to providers, employees, and a DoseSpot ID when accessed from the <a href="security.html">Security</a> window within Open Dental. These fields are not pushed to other databases within CEMT. </li>
</ul>
</div>
<br/><br/><h2>Create Passwords</h2>
<p>For security purposes, each user should have a secure password.</p>
<ol>
<li>On the User Edit window, click <b>Create Password</b> or <b>Change Password</b>, or from the main CEMT window go to File, Change Password. <br/><img src="images/centralUserPassword.gif" width="425" height="206" class="ImageInParagraph"/></li>
<li>If prompted, enter the user's current password (blank if it is new).</li>
<li>Enter the new password. By default, passwords display as asterisks (*). To show the New Password as text, check the <b>Show</b> box.</li>
<li>Click OK to save.</li>
</ol>
<br/><p>The password is contained in dbcentral as a hash. This means there is no way to decrypt the password by looking in the database, and there is no way to recover a lost password other than deleting it from the database directly.</p>
<p>Users can also change their own passwords while logged on. See <a href="cemtpasswords.html">CEMT Passwords</a>, Changing Passwords for the Logged On User.</p>
<h2>Unlock an Account</h2>
<p>After more than five consecutive failed attempts to log on to CEMT, a user is temporarily locked out for five minutes or until the account is manually unlocked.</p>
<ol>
<li>On the User Edit window, click <b>Unlock Account</b>. <br/><img src="images/securityUnlockAcct.gif" width="403" height="159" class="ImageInParagraph"/></li>
<li>Click OK. A confirmation shows. <br/><img src="images/securityUnlocked.gif" width="172" height="133" class="ImageInParagraph"/></li>
<li>Click OK.</li>
</ol>
<p>The user can attempt to log on again.</p>
<h2>Subscribe to Alerts</h2>
<p class="MarginBottomZero">When subscribed to <a href="alerts.html">Alerts</a>, a user receives alerts for all clinics. </p>
<ol class="MarginBottomGap">
<li>On the User Edit window, click the Alert Subs tab. <br/><img src="images/centralUserAlerts.gif" width="612" height="348" class="ImageInParagraph"/></li>
<li>Highlight the alerts to subscribe the user.</li>
<li>Click OK to save.</li>
</ol>
<h2>Remove a User</h2>
<p class="MarginBottomZero">Users can't be deleted. Instead, hide their user profile so they do not show when logging in to the CEMT. </p>
<ul class="MarginBottomGap">
<li>On the User Edit window, check <b>Is Hidden</b>.</li>
</ul>
<h2>Assign Permissions</h2>
<p class="MarginBottomZero">Permissions are assigned to user groups. See <a href="permissions.html">Permissions</a>. </p>
<ol class="MarginBottomGap">
<li>In the User Groups tab, select the group to change permissions for.</li>
<li>Check/uncheck the <b>Permission</b> boxes on the right. Checked means the permission is allowed; unchecked means the permission is blocked.  <ul>
<li><b>Set All</b>: Click to automatically check all permissions except <i>Security Admin</i>.</li>
<li><b>Set None</b>: Click to automatically uncheck all permissions. </li>
</ul>
</li>
</ol>
<p>CEMT users are required to have the <i>Setup</i> permission when attempting to set up connections, set up groups, set up reports, add a new connection, or edit an existing connection.</p>
<p>To run CEMT reports, users must have the <i>Reports</i> permission and the <i>Production and Income - View All Providers </i>permission. </p>
<h2>Set Lock Dates</h2>
<p class="MarginBottomZero"><a href="securitylockdates.html">Security Lock Dates</a> prevent users from editing of procedures, patient payments, insurance payments, adjustments, and exam sheets after a certain date. They also prevent backdating of new items. Lock information by a specific date, or in a certain amount of days: </p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Changes are only allowed if they occur before this date.</li>
<li><b>Days</b>: Changes are only allowed within this amount of days from the original entry date.</li>
</ul>
<p class="MarginBottomZero">Other options: </p>
<ul class="MarginBottomGap">
<li><b>Lock includes Admins</b>: Check this box to apply the lock date limitation to users in the Admin user group.</li>
<li><b>Central Manager Security Lock</b>: Check this box to block users from entering Global Lock Dates on local databases.</li>
</ul>
<p>Lock dates set in the CEMT tool can be applied to database connections, thus overwriting any local Global Lock Dates. See Sync Options below.</p>
<h2>Sync Options</h2>
<p>Syncing security settings apply the settings to database connections. The Sync Code of the CEMT database lists under the list of permissions. This unique code applies to this CEMT database only. All database connections which can be synced to the CEMT database have this same code listed under <b>Setup</b>, <b>Miscellaneous</b>, <b>Sync code for CEMT</b>.</p>
<p class="MarginBottomZero">There are three sync options: </p>
<ul>
<li><b>Push Users</b>: Pushes users, user groups, alert subscriptions, and permissions from CEMT to each database.</li>
<li><b>Push Locks</b>: Pushes lock dates. This overrides any local Global Lock Dates.</li>
<li><b>Push Both</b>: Pushes both user info and lock dates.</li>
</ul>
<p class="MarginBottomGap"><div class="Note">Note: <i>Admin</i> and <i>User</i> are default users. These users cannot be synced to other databases.</div>
</p>
<p>When a sync option is selected, a list of database connections shows.</p>
<img src="images/cemtSyncSecurity.png" width="740" height="514"/><p>Select the database connections to sync security settings with, then click <b>OK</b> to sync.</p>
<h2>Domain Login</h2>
<p>Allow users to login automatically via their Windows domain user. See <a href="singlesignon.html">Single Sign-On / Domain Login</a> for details.</p>
</div>
</div>
</body>
</html>```
