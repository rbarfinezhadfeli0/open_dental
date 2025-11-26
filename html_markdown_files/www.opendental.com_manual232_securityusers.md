# File: ./www.opendental.com/manual232/securityusers.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - User Edit</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('securityusers','security','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/securityusers.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/securityusers.html" >v24.2</option><option value="https://www.opendental.com/manual241/securityusers.html" >v24.1</option><option value="https://www.opendental.com/manual233/securityusers.html" >v23.3</option><option value="https://www.opendental.com/manual232/securityusers.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/securityusers.html" >v23.1</option><option value="https://www.opendental.com/manual224/securityusers.html" >v22.4</option><option value="https://www.opendental.com/manual223/securityusers.html" >v22.3</option><option value="https://www.opendental.com/manual222/securityusers.html" >v22.2</option><option value="https://www.opendental.com/manual221/securityusers.html" >v22.1</option><option value="https://www.opendental.com/manual214/securityusers.html" >v21.4</option><option value="https://www.opendental.com/manual213/securityusers.html" >v21.3</option><option value="https://www.opendental.com/manual212/securityusers.html" >v21.2</option><option value="https://www.opendental.com/manual211/securityusers.html" >v21.1</option><option value="https://www.opendental.com/manual205/securityusers.html" >v20.5</option><option value="https://www.opendental.com/manual204/securityusers.html" >v20.4</option><option value="https://www.opendental.com/manual203/securityusers.html" >v20.3</option><option value="https://www.opendental.com/manual202/securityusers.html" >v20.2</option><option value="https://www.opendental.com/manual201/securityusers.html" >v20.1</option><option value="https://www.opendental.com/manual194/securityusers.html" >v19.4</option><option value="https://www.opendental.com/manual193/securityusers.html" >v19.3</option><option value="https://www.opendental.com/manual192/securityusers.html" >v19.2</option><option value="https://www.opendental.com/manual191/securityusers.html" >v19.1</option><option value="https://www.opendental.com/manual184/securityusers.html" >v18.4</option><option value="https://www.opendental.com/manual183/securityusers.html" >v18.3</option><option value="https://www.opendental.com/manual182/securityusers.html" >v18.2</option><option value="https://www.opendental.com/manual181/securityusers.html" >v18.1</option><option value="https://www.opendental.com/manual174/securityusers.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>User Edit</p></div>
<div class="GeneralPageContent">
<p>Set user passwords, associate users with providers and employees, and set additional options from the User Edit window.</p>
<p>In the <a href="security.html">Security</a> window, click <b>Add User</b>.</p>
<img src="images/securityUserEdit.png" width="891" height="565"/><p class="MarginBottomZero">Alternatively,  </p>
<ul class="MarginBottomGap">
<li>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <b>Security Add User</b>.</li>
<li>In the Security window, double-click an existing user from the grid to edit.</li>
</ul>
<p class="MarginBottomZero"> To add a User: </p>
<ul class="MarginBottomGap">
<li>The User must have the <a href="permissionssecurityadmin.html">"Security Admin" Permission</a> or <i>Add User</i>&nbsp;<a href="permissions.html">Permission</a>.</li>
<li>A default user group must be set in <a href="securitysettings.html">Global Security Settings</a>.</li>
</ul>
<p><div class="Note">Note: For HIPAA compliance, each user should have a unique, protected password that only they know. This is especially important for providers because some actions performed when the provider is logged-on are equivalent to <i>signatures</i>, such as writing procedure notes or electronic prescriptions.</div>
</p>
<h2>User Tab</h2>
<p>Use the User tab to set up or edit a User for an employee.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>User ID</b>: This is an internal unique identifier that is useful for third party reporting.</li>
<li><b>Domain User</b>: Only visible if <a href="singlesignon.html">Single Sign-On / Domain Login</a> is turned on. Click <b>[...]</b> and select the domain user.</li>
<li><b>Name</b>: Enter the employee's username for logging on to Open Dental.</li>
<li><b>DoseSpot User ID</b>: If this is a user using DoseSpot eRx, enter the User ID assigned by DoseSpot. For users with multiple DoseSpot User ID numbers, click<b> [...]</b> to add the corresponding DoseSpot User ID for each clinic. See <a href="dosespotsetup.html">DoseSpot Setup</a>.</li>
<li><b>Require Password Reset</b>: Check to prompt the user to reset their password upon logging in.</li>
<li><b>Is Hidden</b>: Check to hide this user from the Log On window. Useful when an employee leaves the office. Users cannot be deleted.</li>
<li><b>Automatic logoff time in minutes (0 is disabled, blank is global value)</b>: Set a time when, after a certain period of inactivity, for Open Dental to automatically log off the user. <i>Allow user override for automatic log off</i> must be checked in <a href="securitysettings.html">Global Security Settings</a>.</li>
<li><b>Employee (for timecards)</b>: Select the <a href="employees.html">Employee</a> associated with the user. Required for offices using <a href="timeclock.html">Time Clock</a>.</li>
<li><b>Provider</b>: Select the <a href="providers.html">Provider</a> associated with the user.</li>
<li><b>User Group</b>: Select the <a href="securityusergroups.html">User Group(s)</a> the user should be assigned to. Users can be assigned to more than one group. User groups control which permissions a user has. Users assigned to multiple groups have all of the permissions given to each group.</li>
<li><b>Create Password</b>: Click to create the password for the user to use when logging on to Open Dental. If a password exists, the label is changed to <a href="changepassword.html">Change Password</a>.<br/><img src="images/securityPassword.png" width="494" height="240" class="ImageInParagraph"/><ul>
<li>Enter the password, then click <b>OK</b>. By default the password shows as asterisks. To instead see the password in readable text, check <b>Show</b>. </li>
</ul>
</li>
<li><b>Unlock Account</b>: See below for details. Accounts are temporarily locked for five minutes after more than five consecutive failed attempts to log on to Open Dental or ODMobile. This button only shows when editing an existing user.</li>
<li><b>Permissions</b>: Users allowed permissions display on the right. Permissions must be edited from the User Groups tab in the Security window.</li>
</ul>
<h2>Clinics Tab</h2>
<p>Only visible if using <a href="clinics.html">Clinics</a>.</p>
<img src="images/securityUserEditClinic.png" width="888" height="366"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>User Default Clinic</b>: Select the user's default clinic. Only one option can be selected. If <i>All</i> is selected, Headquarters is the default. Usually, this clinic is selected automatically when the user logs on.</li>
<li><b>User Restricted Clinics</b>: Restrict a user to one or more clinics (optional). See below for a list of items that are affected by clinic restrictions. Clinic restrictions apply to Open Dental and ODTouch.</li>
</ul>
<p><div class="Note">Note: To allow a provider access to all clinics, but still filter various provider lists throughout the program, set preferred clinics in <a href="providerseditwindow.html">Provider Setup</a>, Clinics Tab.</div>
</p>
<p class="MarginBottomZero">When a user is restricted to specific clinics, they face limitations in the following areas:  </p>
<ul class="MarginBottomGap">
<li>Only clinics the user has access list in the Main Menu, Clinics.</li>
<li>Only patients in clinics the user has access to show when selecting patients.  <ul>
<li>Patients are associated to clinics when the clinic is their default or if they have any appointments in the clinic.</li>
<li>Users can be granted the <i>Unrestricted Search</i> permission to access all clinics when selecting patients.</li>
</ul>
</li>
<li>User can only see alerts for clinics they have access to (when the clinic is selected in the Main Menu).</li>
<li>Billing</li>
<li>Recurring Charges</li>
<li>Charges</li>
<li>Reports</li>
<li>Sending Claims</li>
<li>Time Card Management (if also have the time card manage permission)</li>
<li>Time Clock (only show employees for their allowed clinic)</li>
<li>Scheduling</li>
<li>Fee Schedules </li>
</ul>
<p class="MarginBottomZero">When providers are restricted to clinics, it may affect the available provider options in some areas (e.g., the only providers showing in lists are those who have access to a clinic). These areas include: </p>
<ul class="MarginBottomGap">
<li>Operatory Setup</li>
<li>Edit Appointment window</li>
<li>Edit Patient Information</li>
<li>Adjustments</li>
<li>Edit Claim Window</li>
<li>Payment Plan</li>
<li>Pay Splits</li>
<li>Broken Appointment Procedure window</li>
<li>Edit Procedure window</li>
<li>Schedule Setup</li>
</ul>
<h2>Alert Subs Tab</h2>
<p>Subscribe the user to specific alerts. See <a href="alertsubscribe.html">Alert Subscription</a>. Alerts show in the <a href="mainmenu.html">Main Menu</a> to notify the user about important information.</p>
<img src="images/securityUserAlertSubs.png" width="888" height="366"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>User Alert Subscriptions</b>: Select one or more alert types for this user to receive. </li>
<li><b>Clinics Subscribed</b>: Select one or more clinics for which the user should receive alerts. </li>
</ul>
<h2>Unlock an Account</h2>
<p>When a user has locked their account due to consecutive log on attempts, a user with the Security Admin permission can unlock the account. </p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Click <b>Unlock Account</b>.<br/><img src="images/securityUnlockAcct.gif" width="403" height="159" class="ImageInParagraph"/></li>
<li>Click <b>OK</b>. A confirmation displays.<br/><img src="images/securityUnlocked.gif" width="172" height="133" class="ImageInParagraph"/></li>
<li>Click <b>OK</b>.  <ul>
<li>If the user remembered their password, they can attempt to log on again.</li>
<li>If the user must reset their password, click <b>Change Password</b> and leave the password field blank. The user can then log on without a password and create a new password for their user.</li>
</ul>
</li>
</ol>
</div>
</div>
</body>
</html>```
