Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Network Users

For [HIPAA](../site/hipaa.html) compliance, practices must have user passwords on every computer. These passwords are a part of [Computer Security](securitycomputers.html), not Open Dental security. If a computer is not in use for a while, then it should be set to automatically log out so that a user needs to use a password to log back in.

## Small Office

(10 computers or less)

A small office will usually designate one of their workstations as the server. If possible, it should only be used as the office server and not for day-to-day use.

* Each workstation can have individual Windows users or use the same user account. Those user accounts should not have administrative access to protect against accidental installation of viruses or ransomware.
* For each workstation to access the shared data folder on the server computer, the credential manager needs to have the admin account credentials added to each workstation. Usually, it is added the first time a computer accesses the server's shared folder and the *Save My Credentials* box is checked after entering the proper username and password.

To create separate users and logins for Open Dental, see [Security](security.html).

To update Open Dental, a user with the *Update Install* security permission is required.

## Large Office

(more than 10 computers)

A large office will typically use a Windows Server operating system. Set up an active domain and security policies according to your office policies.