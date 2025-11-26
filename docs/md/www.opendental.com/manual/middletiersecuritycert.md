Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Middle Tier Security Certificate

See [Middle Tier](middletier.html).

To securely access the Middle Tier from outside your network (e.g. from home), additional steps are required.

* You must purchase an SSL certificate from a certificate authority, import the certificate to your server, then set up https.
* You need to forward port 443 on your router to your Middle Tier server.
* You need to be very careful about security.
  + All Open Dental passwords should be reviewed to make sure they are strong enough.
  + The [A to Z Folder](atozfolder.html) needs to be stored via SFTP (as set in [Paths](paths.html)) so they are accessible outside your local network.
  + See [Encryption of Data at Rest and in Transit](encryption.html) for information about how data would be protected.

Note: If only accessing your Middle Tier service within your office or within your VPN, these steps are not needed.

## Set Up Security Certificates

1. Purchase and download a security certificate from a certificate authority such as GoDaddy. The certificate must be in pfx format and must be created with the following purpose: "ensure the identity of a remote computer over HTTPS".
2. Go to Control Panel, Administrator Tools, IIS Manager.
3. In the left-hand pane, left-click the top-most item in the tree view.
   ![](images/middletierIISMgr.gif)
4. In the middle-pane, select Server Certificates.
   ![](images/middletierSvcMgr2.gif)
5. In the right-hand pane, click Import.
   ![](images/middletierImportCert.gif)
6. Browse for the pfx file. Type in your password for the pfx file. Ensure that *Allow this certificate to be exported* is checked. Click OK.
   ![](images/middletierSelfCert2.gif)

   Make note of the exact Issued To name. You will use this name in the URL when attempting to connect to the Middle Tier.
7. Go back to the IIS Manager main screen. In the left-pane, left-click on the web site, usually called Default Web Site.
   ![](images/middletierDefaultWebSite.gif)
8. In the right-hand pane, click Bindings...
   ![](images/middletierBindings.gif)
9. Click Add...
   ![](images/middletierBindingAdd.gif)
10. Set Type to *https*, then select the SSL certificate imported in step 6. Click OK, then click Close.

IMPORTANT: When attempting to connect the Middle Tier, you must use the name the certificate was Issued To, and the URL must begin with 'https'. For example, if the certificate was issued to derek.abc.com, the Choose Database window should look like this when attempting to connect to the Middle Tier:

![](images/middletierChooseDatabase.gif)