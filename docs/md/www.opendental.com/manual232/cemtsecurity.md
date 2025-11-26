Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

CEMT Security

In the [Central Enterprise Management Tool ( CEMT )](central.html), click **Setup, Security**.

![](images/centralUsers.png)

CEMT security settings control the security settings for database connections. Set up users, assign users to groups, assign permissions to user groups, and enter a lock date for procedures, payments, adjustments, and exam sheets.

Note:

* CEMT users are different from regular Open Dental users. CEMT users are created from within the CEMT tool and can access all connected databases using their CEMT credentials.
* A CEMT user's Open Dental permissions are based on their CEMT permissions and can only be set from within the CEMT, not within the database connection.
* For a CEMT user to show on a connected database at log in, the user must be associated with a user group that was manually created from the CEMT tool. CEMT users in the default user groups are not pushed to the database.
* Because the Central Manager database (dbcentral) contains information about multiple connections, including encrypted passwords, we advise placing extra security around the MySQL installation. Edit the MySQL service and change the login information from local system to a specific user. The database files can then be encrypted by Windows while still allowing the MySQL service to run when the proper Windows user is logged in. See [MySQL Security](securitymysql.html).

## Create or Edit User Groups

Users are placed into a User Group then each User Group is granted a set of permissions.

1. On the Central Manager User Edit window, click the User Groups tab.
   ![](images/centralUserGroups.png)
2. Click **Add Group**, or double-click a group to change its name or delete it.
   ![](images/centralUserGroupEdit.png)
3. Enter the user group description, then click OK to save.

Note: To permanently delete a user group, click **Delete** (it cannot have any users).

## Add or Edit a User

CEMT users have access to all connected databases. They are created in the CEMT tool and are able to log into a database by using their set credentials.

1. On the Central Manager User Edit window, click **Add User** in the center to add a new user, or double-click an existing user to edit information.
   ![](images/centralUserEdit.png)
2. Click the **User** tab.
3. Enter the user's unique user name in the box.
4. Highlight the user group.

Note:

* The CEMT user name must be unique and different from the names of regular users so that when CEMT users are pushed to a database, it does not cause confusion.
* CEMT users can be associated to providers, employees, and a DoseSpot ID when accessed from the [Security](security.html) window within Open Dental. These fields are not pushed to other databases within CEMT.

## Create Passwords

For security purposes, each user should have a secure password.

1. On the User Edit window, click **Create Password** or **Change Password**, or from the main CEMT window go to File, Change Password.
   ![](images/centralUserPassword.gif)
2. If prompted, enter the user's current password (blank if it is new).
3. Enter the new password. By default, passwords display as asterisks (\*). To show the New Password as text, check the **Show** box.
4. Click OK to save.

The password is contained in dbcentral as a hash. This means there is no way to decrypt the password by looking in the database, and there is no way to recover a lost password other than deleting it from the database directly.

Users can also change their own passwords while logged on. See [CEMT Passwords](cemtpasswords.html), Changing Passwords for the Logged On User.

## Unlock an Account

After more than five consecutive failed attempts to log on to CEMT, a user is temporarily locked out for five minutes or until the account is manually unlocked.

1. On the User Edit window, click **Unlock Account**.
   ![](images/securityUnlockAcct.gif)
2. Click OK. A confirmation shows.
   ![](images/securityUnlocked.gif)
3. Click OK.

The user can attempt to log on again.

## Subscribe to Alerts

When subscribed to [Alerts](alerts.html), a user receives alerts for all clinics.

1. On the User Edit window, click the Alert Subs tab.
   ![](images/centralUserAlerts.gif)
2. Highlight the alerts to subscribe the user.
3. Click OK to save.

## Remove a User

Users can't be deleted. Instead, hide their user profile so they do not show when logging in to the CEMT.

* On the User Edit window, check **Is Hidden**.

## Assign Permissions

Permissions are assigned to user groups. See [Permissions](permissions.html).

1. In the User Groups tab, select the group to change permissions for.
2. Check/uncheck the **Permission** boxes on the right. Checked means the permission is allowed; unchecked means the permission is blocked.
   * **Set All**: Click to automatically check all permissions except *Security Admin*.
   * **Set None**: Click to automatically uncheck all permissions.

CEMT users are required to have the *Setup* permission when attempting to set up connections, set up groups, set up reports, add a new connection, or edit an existing connection.

To run CEMT reports, users must have the *Reports* permission and the *Production and Income - View All Providers* permission.

## Set Lock Dates

[Security Lock Dates](securitylockdates.html) prevent users from editing of procedures, patient payments, insurance payments, adjustments, and exam sheets after a certain date. They also prevent backdating of new items. Lock information by a specific date, or in a certain amount of days:

* **Date**: Changes are only allowed if they occur before this date.
* **Days**: Changes are only allowed within this amount of days from the original entry date.

Other options:

* **Lock includes Admins**: Check this box to apply the lock date limitation to users in the Admin user group.
* **Central Manager Security Lock**: Check this box to block users from entering Global Lock Dates on local databases.

Lock dates set in the CEMT tool can be applied to database connections, thus overwriting any local Global Lock Dates. See Sync Options below.

## Sync Options

Syncing security settings apply the settings to database connections. The Sync Code of the CEMT database lists under the list of permissions. This unique code applies to this CEMT database only. All database connections which can be synced to the CEMT database have this same code listed under **Setup**, **Miscellaneous**, **Sync code for CEMT**.

There are three sync options:

* **Push Users**: Pushes users, user groups, alert subscriptions, and permissions from CEMT to each database.
* **Push Locks**: Pushes lock dates. This overrides any local Global Lock Dates.
* **Push Both**: Pushes both user info and lock dates.

Note: *Admin* and *User* are default users. These users cannot be synced to other databases.

When a sync option is selected, a list of database connections shows.

![](images/cemtSyncSecurity.png)

Select the database connections to sync security settings with, then click **OK** to sync.

## Domain Login

Allow users to login automatically via their Windows domain user. See [Single Sign-On / Domain Login](singlesignon.html) for details.