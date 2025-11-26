Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR NIST Time Synchronization

Open Dental has the ability to check and synch times with a NIST time server within 1 second. The check and synchronization is not automatic and we do not verify that it happens. This process checks local and database times for synchronization and verifies that all dates and times of [Audit Trail](audittrail.html) entries are exact and accurate. Time synchronization was a certification requirement for [EHR](ehrsetupwindow.html). If you do not use Open Dental for time synchronization, you should synchronize time another way.

We recommend you run Open Dental on the server (where the MySQL database is). Then Open Dental will check and synch times before you log on and every four hours thereafter. You do not need to log in to Open Dental for the synch to occur.

If you are running Open Dental on a different machine (not the server), you can manually check and synch times.

In the [Main Menu](mainmenu.html), click Setup, Chart, EHR, then click **Time Synchronization**.

![](images/ehrTimeSynch.gif)

The specific times for each server are listed. If Open Dental is unable to connect to the NIST time server, the operation may time out.

**Synch Time**: Check the NIST server time and synchronize all server times to match. You are limited to checking once every four seconds so the NIST server is not spammed with requests.

Sometimes a difference in server times is harmless. In order for your times in Open Dental to be accurate, it is best to have both your server and local time in sync with an NIST time server. If you have concerns, please contact us.

## Troubleshooting

**Error: Time out of synch**

Solution: Make sure Open Dental is running on the server.

**Error: No response received**

Solution: This is a timeout response from the time server. It may happen intermittently due to the nature of the message and sending a UDP packet over the internet. If this is happening fairly often, there may be something stopping the time request messages from getting to the destination (e.g. [Firewall](firewalls.html)).