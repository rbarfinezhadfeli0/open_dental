Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

eCW Troubleshooting

Below are some common problems and solutions when using Open Dental and [eClinicalWorks](bridgeeclinicalworks.html). Also see [eCW Technical](ecwtechnical.html).

New features and bug fixes are constantly being added to the bridge. Frequently, problems can be fixed by updating to the most recent stable version of Open Dental. If your current version of Open Dental is compatible with the eCW version you are using, newer versions of Open Dental will also be compatible. If you are going to update your eCW version, it is a good idea to update your Open Dental version well ahead of time in case an eCW fix required changes to Open Dental.

Cases fixed by updating to most recent stable version of Open Dental:

* Provider Abbreviation issue: Enhanced on 7/8/2011 in Open Dental v.11.0 and eCW v. 9.0.33. provider.EcwID was added so that users could change their provider.Abbr abbreviations without breaking the eCW-Open Dental interface.
* Load Balancer Issue: Fixed on 3/21/2013 in Open Dental v. 12.4.52 and 13.1.16, and eCW v. 9.0.49.
* Tomcat Authentication Issue: Fixed on 2/23/2012, in Open Dental v. 12.0.18 or 12.1.5, and eCW v. 9.0.35. This resolves this issue in regular tomcat environments.

For a few clients, eCW upgrades may not be an option, and they may need to go through eCW Release Management for approval of a customized fix without an eCW upgrade.

## Other Problems/Solutions

**Problem: Medical panel will not load and an error message shows about a script failing.**

Solution: This may be an issue on Load Balancing Servers during heavy use hours of production, when many computers are accessing the eCW database at once.Update to version 14.1.9 or greater. In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html), eClinicalWorks, then check the **Exclude LBSESSIONID** box.

**Problem: UserName already in use when trying to change a user's password within Open Dental.**

Solution: If using a version of Open Dental prior to 12.2.29, the duplicate user names will need to be renamed so that they are unique, then they must be hidden. If using Open Dental v. 12.2.29 or later, the duplicate user names only need to be hidden.

1. In the [Security](security.html), double click on a duplicate user to edit.
2. Alter the user name so it is unique, then check the Is Hidden box.
3. Repeat for all duplicated users.

   After names are unique and hidden, the password for the user you are logged in as can be changed.

**Problem: HL7 SIU messages are not created by eClinicalWorks if you Cut and Paste an appointment.**

Solution: After pasting, open the appointment in eCW and change the status for the appointment information from eCW to show up in Open Dental.

**Problem: The Finish & Send button not enabled inside the appointment.**

Solution: The Finish & Send button inside the appointment will only be enabled if the appointment was originally created in eCW and transferred to Open Dental (that is, only if the visitID matches the aptNum). If this is an issue please call Open Dental to troubleshoot.