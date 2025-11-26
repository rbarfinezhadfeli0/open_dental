Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Single Sign-On / Domain Login

Setting up Domain Login (also known an single sign-on) will allow users to automatically log into Open Dental using their associated Windows domain user.

In [Global Security Settings](securitysettings.html), locate the Domain Login area.

![](images/singlesignonDomainLogin.gif)

Alternatively, [CEMT Security](cemtsecurity.html) also allows for Domain Login.

Each time the user is logged on automatically, there will be an entry in the audit trail. This feature is useful for large enterprise offices.

Note:

* Your network must be on an Active Directory domain controller.
* Each workstation must be connected to the same network as the domain controller.
* A direct connection is required. To use single sign-on with Middle Tier, see [Middle Tier Installation](middletierinstallation.html).
* If the Admin user has a blank password in Open Dental, the associated domain user will be ignored and the Admin will be logged on.
* When the domain path is entered, to help ensure the identity of the domain, we will store the ObjectGuid of the Active Directory domain object. Upon login we will check to make sure the user's current domain matches.

## Enable Domain Login

Check **Domain Login Enabled**.

Enter the LDAP URI as the Domain Path (e.g. **LDAP://DC=[DomainName],DC=[TopLevelDomain]** or **LDAP://[DomainName]**).

Click **OK** to close the Global Security Settings window.

## Add Domain User to Open Dental User

On the [Security](security.html), Users tab, double-click on a user.

On the [User Edit Window](securityusers.html), click [...] next to Domain User and select the domain user.

![](images/singlesignonUserEdit.gif)

Click **OK** to save.

## Technical Details

Logging on remotely (e.g. from a laptop): When a user is logging on remotely, they will need to set up a VPN connection to the same network as the domain controller.

Single sign-on works in a Terminal Server environment.

1. Remote App: Single sign-on will log on as normal. The user logged onto the workstation will be used to log on for single sign-on.
2. Remote Desktop Protocol: Single sign-on will log on using the user logged into Remote Desktop Protocol.