Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Share A to Z Folder

See [Paths](paths.html).

If you are using Open Dental on multiple computers, you will need to share the [A to Z Folder](atozfolder.html). The following instructions are for Windows 10 operating system. If your operating system is different, the steps may differ.

Note: These are steps for a SMB share. You can run it on a Linux box but it will add a level of complexity to network setup that may complicate future troubleshooting.

1. On the server, right-click on the OpenDentImages folder, then select Properties, Sharing tab.
   ![](images/pathsShare.gif)
2. Click Share.
3. Click the dropdown, select Everyone, then click Add.
4. Click the Read dropdown and select Read/Write.
5. Click Share.
6. Click Done.

The Network path on the OpenDentImages Properties window will read **\\SERVER\OpenDentImages**.

It is a good idea to give permissions to *Everyone* in the Security tab as well.

1. Click the Security tab.
2. Click Edit.
3. Click Add.
4. Enter *Everyone* and click OK.
5. Check the Full control box.
6. Click OK.

## Troubleshooting

**Problem: I upgraded to Windows 10 and can no longer access the shared OpenDentImages folder.**

Solution:

1. Confirm there is a password for the Windows server user name.
2. Reboot the server.
3. On each workstation, go to the File Explorer, then enter the server name as the path.
   ![](images/atozServerName.gif)

   It should prompt you for a Windows server user name and password.

   ![](images/atozWindowsPass.gif)
4. Enter the Windows server user name and password, check **Remember my credentials**, then click OK.