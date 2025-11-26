Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

CCDWS Service

For [Canada](canada.html) the CCDWS service can be used to submit claims to Insurance Carriers.

Open Dental is a CCDWS certified software. The CCDWS service should only be installed for users sending claims through [Claimstream](claimstream.html) and non-dentist providers sending claims through [ITRANS 2.0](itrans20.html).

1. Using a Windows administrator account on the server, download CCDWS from <https://ccdws.hardersoft.com/>.
2. Click *ccdws-latest-win-install.exe* to download it.
3. Open the downloaded file location, right-click the CCDWS installer and select *Run as administrator*.
   * If Microsoft Defender blocks the installation, click More Info, then Run Anyway.
4. Click **Next**.
   ![](images/ccdws1.gif)
5. Check *I accept the terms of the license agreement*, then click **Next**.
   ![](images/ccdws2.gif)
6. Click **Next**.
   ![](images/ccdws3.gif)
7. Keep the install path at **c:\ccd**, then click **Next**.
   ![](images/ccdws4.gif)
8. Ensure *Complete* is checked, then click **Next**.
   ![](images/ccdws5.gif)
9. Enter the Service User Account and password. For most users, this can be any user account. For users with CDA Digital IDs (i.e., provider certificates), this is the user that the certificates are installed to. Then click **Next**.
![](images/ccdws6.gif)

Note: Domain, user, and password must be entered correctly for the service to install. If not using a domain, enter the server name instead (e.g., server\user or .\user).

10. Leave the REST Listener port entered as 9000, then click **Next**.
    ![](images/ccdws11.gif)
11. Click **Next**.
    ![](images/ccdws7.gif)
12. When prompted to view the CCDWS configuration file, click **No**.
    ![](images/ccdws9.gif)
13. Ensure *Run CCDWS now* is checked, then click **Finish**.
    ![](images/ccdws10.gif)
14. Share the CCD folder.
15. *For Claimstream users*: Create and send a test claim.
    *For ITRANS users*: Contact [Open Dental Support](../contact.html) for an updated CCDWS.ini configuration file and Telus vendor certificate.
16. Restart the CCDWS service for changes to take affect.

## Troubleshooting

If the prompt in Step 12 does not appear, there may be an issue with the credentials. Re-run the installer as administrator, and when prompted for credentials (step 9), leave them blank and click Next. When the installation is complete, find CCDWS in Services and go to Properties. Re-enter the credentials under *This Account* in the Log On tab.