Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Change Password

Each user should have a unique password only they know.

In the [Main Menu](mainmenu.html), click File, User Password.

![](images/changepassword.png)

The logged-on user can change their password at any time.

Note:

* Users with the *Security Admin* permission can assign initial passwords when setting up [User Security Profiles](securityusers.html).
* To force a user to change their password the first time they use it to login, check *Require Password Reset* in the user's security profile.
* Central Enterprise Management Tool (CEMT) user passwords cannot be changed from this window. To change these passwords, see: [CEMT Passwords](cemtpasswords.html) or [CEMT Security](cemtsecurity.html)

- **User**: Displays the currently logged-on user.
- **Current Password**: Enter the current password for the user.
- **New Password**: Create a new password for the user. See below for password requirements.
- **Show**: Check to show the new password.

Password requirements are determined by [Global Security Settings](securitysettings.html). Strong passwords must be at least 8 characters and have at least one number, one uppercase letter, and one lowercase letter. If strong passwords require special characters, it must also contain a symbol such as $, #, >. If passwords do not meet requirements, a notification displays.

## Temporary Passwords

Admin users can create a temporary password for a new user. When the user logs on, they can update their password in the window above.

To create an initial temporary password, go to [User Edit](securityusers.html) for the new user, then click *Create Password*. To require a password reset when the user first logs on, also check *Require Password Reset*.