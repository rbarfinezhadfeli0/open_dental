Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

CEMT Passwords

In the [CEMT](central.html), a password is required to log on.

![](images/cemtLogOn.png)

The log on window that opens depends on whether the central manager database is hosted locally or on a Middle Tier server.

If hosted locally, or if no middle tier URI is entered, the Log On window above opens. Select the Open Dental User, enter the password, then click OK to log on.

## Middle Tier

If hosted on a middle tier server, and a URI is entered for the middle tier address in the CentralManagerConfig.xml file, the Choose Database window opens.

![](images/cemtMiddleTierLogin.png)

* **URI**: The default URI is the one entered in the CentralManagerConfig.xml file, but it can be modified. Enter the Open Dental user and password, then click OK to log on.
* **Open Dental User / Password**: Enter the Open Dental username and password.
* **Log me in automatically**: Check to automatically log in next time CEMT is launched. This setting can be changed later in [CEMT User Settings](cemtusersettings.html).

Note:

* Initially the Admin user has a blank password. To log into CEMT via Middle Tier, first set up a password for the user.
* After five failed log-on attempts in a row, a user will temporarily be locked out of the account for five minutes or until a user with *Security Admin* privileges manually unlocks the account.
* To add users, set permissions, and create or change passwords, see [CEMT Security](cemtsecurity.html).
* Users can also change their own password while logged onto the CEMT. See Changing Passwords for the Logged-On User below.
* CEMT user passwords can only be changed from the CEMT.

## Change Password for the Logged-On User

In the main Central Manager Window, click File, Change Password.
![](images/cemtPassword.png)

Enter the **Current Password** and the **New Password**.

Passwords are masked. To show text, check **Show**.

Click OK.

Note: If using a Middle Tier connection, another user must Push Users from CEMT after the logged-on user's password is changed. See [CEMT Security](cemtsecurity.html).