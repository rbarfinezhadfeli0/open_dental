# File: ./www.opendental.com/manual232/securityusergroups.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - User Group</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('securityusergroups','security','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/securityusergroups.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/securityusergroups.html" >v24.2</option><option value="https://www.opendental.com/manual241/securityusergroups.html" >v24.1</option><option value="https://www.opendental.com/manual233/securityusergroups.html" >v23.3</option><option value="https://www.opendental.com/manual232/securityusergroups.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/securityusergroups.html" >v23.1</option><option value="https://www.opendental.com/manual224/securityusergroups.html" >v22.4</option><option value="https://www.opendental.com/manual223/securityusergroups.html" >v22.3</option><option value="https://www.opendental.com/manual222/securityusergroups.html" >v22.2</option><option value="https://www.opendental.com/manual221/securityusergroups.html" >v22.1</option><option value="https://www.opendental.com/manual214/securityusergroups.html" >v21.4</option><option value="https://www.opendental.com/manual213/securityusergroups.html" >v21.3</option><option value="https://www.opendental.com/manual212/securityusergroups.html" >v21.2</option><option value="https://www.opendental.com/manual211/securityusergroups.html" >v21.1</option><option value="https://www.opendental.com/manual205/securityusergroups.html" >v20.5</option><option value="https://www.opendental.com/manual204/securityusergroups.html" >v20.4</option><option value="https://www.opendental.com/manual203/securityusergroups.html" >v20.3</option><option value="https://www.opendental.com/manual202/securityusergroups.html" >v20.2</option><option value="https://www.opendental.com/manual201/securityusergroups.html" >v20.1</option><option value="https://www.opendental.com/manual194/securityusergroups.html" >v19.4</option><option value="https://www.opendental.com/manual193/securityusergroups.html" >v19.3</option><option value="https://www.opendental.com/manual192/securityusergroups.html" >v19.2</option><option value="https://www.opendental.com/manual191/securityusergroups.html" >v19.1</option><option value="https://www.opendental.com/manual184/securityusergroups.html" >v18.4</option><option value="https://www.opendental.com/manual183/securityusergroups.html" >v18.3</option><option value="https://www.opendental.com/manual182/securityusergroups.html" >v18.2</option><option value="https://www.opendental.com/manual181/securityusergroups.html" >v18.1</option><option value="https://www.opendental.com/manual174/securityusergroups.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>User Group</p></div>
<div class="GeneralPageContent">
<p>User groups are used to assign the same set of permissions to a group of users.</p>
<p>In the <a href="security.html">Security</a> window, click the User Groups tab.</p>
<img src="images/securityUserGroups.png" width="915" height="547"/><p class="MarginBottomZero">Also see:  </p>
<ul class="MarginBottomGap">
<li><a href="securitysettings.html">Global Security Settings</a></li>
<li><a href="securityusers.html">User Edit</a></li>
<li><a href="audittrail.html">Audit Trail</a></li>
</ul>
<p class="MarginBottomZero"><b>User Group</b>: Lists the available user groups to assign permissions to. Highlight a group to view selected permissions.  </p>
<ul class="MarginBottomGap">
<li><b>Add Group</b>: Click to create a new group. </li>
<li><b>Edit Group</b>: Click to edit the name of the currently selected group. Alternatively, double-click the group from the list.<br/><img src="images/securityGroupEdit.png" width="470" height="179" class="ImageInParagraph"/></li>
<ul>
<li><b>Delete</b>: Click to remove the selected group. Before a user group can be deleted, all users must be unassigned from the group or moved to another user group.</li>
<li><b>Save</b>: Save changes.</li>
</ul>
</ul>
<p class="MarginBottomZero"><b>Permissions for group</b>: Displays the permissions for the selected user group. Permissions allow or restrict access to a specific action or Open Dental feature. Check or uncheck permissions as needed for the group. For information on what each permission controls, see <a href="permissions.html">Permissions</a>. </p>
<ul class="MarginBottomGap">
<li><b>Set All</b>: Click to assign all permissions, except the <a href="permissionssecurityadmin.html">"Security Admin" Permission</a>, to the selected user group. </li>
<li><b>Set None</b>: Click to unassign all permissions to the selected user group. </li>
<li><b>Collapse All</b>: Collapse the permissions list to only view headings. </li>
<li><b>Expand All</b>: Expand the permissions list to show all. </li>
</ul>
<p>If a user checks a box for a permission with a <a href="securitylockdates.html">User Group Lock Date</a>, the following window appears. This allows users to prevent alternation of historical data. To set a date limitation, enter a value in the Date or Days field, then click <b>OK</b> to save. If left blank, there will be no lock date.</p>
<img src="images/securityDateLimits.png" width="602" height="277"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Enter a date to prevent users from making changes on or after the date entered (e.g., 03/31/2022). Changes are only allowed if they are newer than the date entered. Can be used to close out the month.</li>
<li><b>Days</b>: Enter a number to lock items after a set number of days. Changes are only allowed before the set amount of days. Entering 1 allows changes for the current day only.</li>
<div class="Note">Note: See <a href="securitylockdates.html">Global Lock Date</a> to prevent backdating of new items, or to lock for multiple permissions and groups at one time.</div>
</ul>
<p><b>Users currently associated</b>: Displays the users currently associated with the selected user group. </p>
</div>
</div>
</body>
</html>```
