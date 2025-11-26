Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Log On

When Open Dental starts, if the user [Security](security.html) is properly set up, the Log On window should open.

![](images/securityLogOn.png)

To protect data and prevent misuse, every user should be required to log on with a unique username and password, then log off when they leave the workstation. See [Security](security.html) to set up user profiles and assign permissions.

* **Filter**: Type to filter the user list by username.
* **User**: Select a username to log into.
* **Password**: Enter the password for the selected user.

Alternatively, if the [Global Security Setting](securitysettings.html), *Manually Enter Log On Credentials* is enabled, the Log On window will appear as shown below. Users must manually enter their username to log in. The user list and filter will not be shown.

![](images/securityLogOnManual.png)

Note:

* If a badge scanner is connected to the workstation, users can also scan or swipe their badge to log on. See [Security Badges](securitybadges.html) for details.
* If the users are not prompted to log on when they start the program, an Admin user does not have a password setup. This user will automatically be logged in.
* If a user's current password does not meet password criteria, they may be required to create a new password that does.
* To force a user to change their password the first time they use it to log on, check *Require Password Reset* when setting up the [User Edit](securityusers.html).
* After five consecutive failed attempts to log on, a user will temporarily be locked out of the account for five minutes or until a user with Security Admin privileges manually unlocks the account. See [User Edit](securityusers.html) for details.
* The screen differs based on whether the setting for *Manually enter logon credentials* is on or off. If on, the user will need to manually type their username and password.
* To set up single sign on (LDAP), see [Single Sign-On / Domain Login](singlesignon.html).

## Logging Off

To log off manually, in the Main Menu, click **Log Off**. A message will appear, warning the user they are about to be logged off of Open Dental.

![](images/securityLogOff.png)

* Alternatively, click the close button (X) in the upper right of the program.

**Do not show me this message again**. Check to disable the log off prompt. This setting is independent for each user. To reinstate the Log Off message for a user, see [User Settings](usersettings.html).

Note:

* Set automatic log off options in [Global Security Settings](securitysettings.html).
* If the user logs off and there are unsaved changes, a warning message will show. If automatic log off is turned on, and the user manually clicks Log Off, any unsaved changes will be lost, and no warning message will show.

## Multi-Factor Authentication

Multi-Factor Authentication is not available when logging onto Open Dental. Consider a third-party to add additional security to the computer system as a whole instead. Often times, Multi-Factor Authentication will require employees to carry an additional item with them as they move through the office (e.g., a cell phone or keycard).