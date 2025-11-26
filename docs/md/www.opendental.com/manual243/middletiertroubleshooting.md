Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

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

**Enabling Verbose Logging**

Verbose logging may be enabled to monitor incoming Middle Tier requests and how long it takes for the server to reply. When enabled, a new Logging folder is created in the OpenDentalServer.exe file path (i.e., C:\Program Files (x86)\Open Dental\Logging). The logger checks to make sure a given amount of space is present on the drive before logging the Middle Tier traffic in the Verbose subfolder.

The following data is logged when verbose logging is enabled:

* Date and time of Middle Tier request
* Time in milliseconds to process the request
* Size of request received in Bytes
* Size of request received in a human-readable format, eg "5.1 MB", "2.93 KB", "700 B", etc.
* Size of response sent in Bytes
* Size of response sent in human-readable format, see above.
* IP Address of client sending request
* Username of Open Dental User sending request
* Name of computer that request was sent from
* Name of method that was called to send Middle Tier request

To enable verbose logging:

1. Add the following nodes to the OpenDentalServerConfig.xml file as shown in the screenshot below.

   <VerboseLogging>true</VerboseLogging>
    <LogDirectory></LogDirectory>

   * Set VerboseLogging to *true* to enable logging. Set to *false* to disable logging.
   * Enter the path of the desired log location. Leave blank to save logging files in the folder where the Open Dental executable is located (by default: C:\Program Files (x86)\Open Dental).
   ![](images/middleTierVerboseLogging.png)
2. To read/write to the log directory, the *Default Application Pool Identity* must be set to a user on the Middle Tier server with admin privileges.
   1. Open the IIS Management Console.
   2. Expand the Web Servicer name and click **Application Pools**.
   3. Right-click the **DefaultAppPool** and select *Advanced Settings*.
   4. Change the **ApplicationPoolIdentity** to *Custom account*.
   5. Then, click **Set** and enter the credentials for a domain user with admin privileges.
3. Restart the IIS server in the IIS Manager. The Logging folder is added to the specified log directory (e.g., C:\Program Files (x86)\Open Dental\Logging)
   1. Click the main connection/server from the Connections list.
   2. Click Restart from the Actions Menu.