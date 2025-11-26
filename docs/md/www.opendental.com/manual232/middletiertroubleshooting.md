Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Middle Tier Troubleshooting

See [Middle Tier](middletier.html).

Below are some common problems with the installation and maintenance of Middle Tier.

**What is my URI?**

The URI is composed of four parts:

* Protocol: You will use **http://** if you're using a VPN or local network connection to secure your transmissions. If you're using Middle Tier across the internet, you will need to set up security certificates and your URI will begin with **https://**.
* Server: The next section will be the name or IP address of the computer that is acting as your Middle Tier server.
* Alias: After the computer name you will use the Alias you set for the service.
* File: The last section does not change. It is ServiceMain.asmx.

  For example: **http://MyMiddleTierServer/AliasName/ServiceMain.asmx**.

**Error Messages**

* System.BadImageFormatException
* Could not load file
* Could not create type

These errors are an indicator that Enable 32-Bit Applications is turned off. Refer to step 3e on [Middle Tier Installation](middletierinstallation.html).

Some issues can arise when using a Middle Tier server between different time zones. See [Time Zones](timezones.html).