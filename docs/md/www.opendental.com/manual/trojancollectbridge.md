Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Trojan Express Collect Bridge

Trojan Express Collect is used to send collection transactions, even if the office does not use Trojan's benefit feature.

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on Trojan Express Collect.

![](images/trojanCollectSetup.gif)

Also see: [Trojan Express Collect](trojancollect.html)

## Setup

First, enable the Trojan Express Collect bridge.

* **Enabled**: Check to enable the Trojan Express Collect program in Open Dental.
* **Export Folder**: Enter the path to the shared Trojan Folder.
* **Billing type for patients sent to collections**: Select the billing type for patients sent to Trojan.
* **Trojan Collection Services password**: Enter the password for your Trojan Collection account.

## Additional Details

Trojan supplies a small program titled The Trojan Communicator. This program runs in the system tray of one computer in the dental office. The program can send collection transactions, benefit requests, and download Trojan benefit updates.

Any computer in the office running Open Dental can create a Trojan Collections Transaction. The Trojan Communicator is installed on only one machine in the office, and it sends all of those transactions. If you also wish to download Trojan benefit updates, install the Trojan Communicator on the station that will be doing those updates.

The Trojan Communicator will be configured to watch the shared folder for new transaction files created by Open Dental. The transactions will be automatically transmitted to Trojan and deleted from that folder. These transactions could happen at any time during the day, so a continuous connection to the internet is required.

The Trojan Communicator connects through a secure internet link. It logs in and verifies that the office is signed up for Collection Services before sending a transaction.

The Trojan Communicator (at least version 2.00) should be installed and running. It should be shown on the system tray of only one computer in the dental office.

![](images/trojanTray.gif)

Double-click on the icon and it will expand to show the Trojan Communicator Main Page.

![](images/trojanCollectCommunicator.gif)

Click **Set Folders for Benefit Files and Request Files**. You will see the next screen.

![](images/trojanCollectFolders.gif)

The second box is where Trojan Communicator will look for files coming from Open Dental. The folder should be shared.

Next, you will be taken to the communication settings page. You can usually just click [Test Communications]. Click Hide this Program on the Trojan Communicator main page. The program is now ready to send transactions. To see what transactions have been submitted, you can launch the Express Collect.