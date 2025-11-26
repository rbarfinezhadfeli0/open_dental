Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Security Badges

Enter Badge IDs for users to allow them to log on to Open Dental using a badge scanner.

In the [Main Menu](mainmenu.html), click Setup, Security Badges.

![](images/securityBadgesUser.png)

Select a username from the dropdown and click **OK**.

Usernames can be added to the dropdown from the [Security](security.html) window. Users marked as *Is Hidden* do not show.

Edit Badge ID is opened.

![](images/securityBadgesEdit.png)

* **Username**: Displays the user selected in the previous window for reference.
* **Badge ID**: Displays any Badge ID associated to the [User](securityusers.html). If there is no Badge ID for the user, this is blank. Enter an eight-digit ID associated with the employee's badge.

Badge IDs can also be entered from [User Edit](securityusers.html).

## Logging On With a Badge

With Badge IDs entered, users can [Log On](securitylogin.html) to Open Dental by scanning or swiping their badge. There are some requirements:

* Badge IDs must be exactly eight digits.
* The badge scanner being used must simulate keyboard input.

Logging in with a badge is considered lower security than utilizing a username and password. The badge can be used to immediately log a user on or select the user but still require a password.

* To immediately log users on with badge input, disable *When logging in with a badge, require a password* in [Global Security Settings](securitysettings.html)
* To only select a user with badge input, enable *When logging in with a badge, require a password* in Global Security Settings.