Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

User Group

User groups are used to assign the same set of permissions to a group of users.

In the [Security](security.html) window, click the User Groups tab.

![](images/securityUserGroups.png)

Also see:

* [Global Security Settings](securitysettings.html)
* [User Edit](securityusers.html)
* [Audit Trail](audittrail.html)

**User Group**: Lists the available user groups to assign permissions to. Highlight a group to view selected permissions.

* **Add Group**: Click to create a new group.
* **Edit Group**: Click to edit the name of the currently selected group. Alternatively, double-click the group from the list.
  ![](images/securityGroupEdit.png)

+ **Delete**: Click to remove the selected group. Before a user group can be deleted, all users must be unassigned from the group or moved to another user group.
+ **Save**: Save changes.

**Permissions for group**: Displays the permissions for the selected user group. Permissions allow or restrict access to a specific action or Open Dental feature. Check or uncheck permissions as needed for the group. For information on what each permission controls, see [Permissions](permissions.html).

* **Set All**: Click to assign all permissions, except the ["Security Admin" Permission](permissionssecurityadmin.html), to the selected user group.
* **Set None**: Click to unassign all permissions to the selected user group.
* **Collapse All**: Collapse the permissions list to only view headings.
* **Expand All**: Expand the permissions list to show all.

If a box is checked for a permission with a [User Group Lock Date](securitylockdates.html), the following window appears. This allows users to prevent alteration of historical data. To set a date limitation, enter a value in the Date or Days field, then click **Save** to keep changes. If left blank, there is no lock date.

![](images/securityDateLimits.png)

* **Date**: Enter a date to prevent users from making changes on or after the date entered (e.g., 03/31/2022). Changes are only allowed if they are newer than the date entered. Can be used to close out the month.
* **Days**: Enter a number to lock items after a set number of days. Changes are only allowed before the set amount of days. Entering 1 allows changes for the current day only.

Note: See [Global Lock Date](securitylockdates.html) to prevent backdating of new items, or to lock for multiple permissions and groups at one time.

**Users currently associated**: Displays the users currently associated with the selected user group.