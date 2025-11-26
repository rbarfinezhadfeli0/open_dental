Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

CCDWS Service

For [Canada](canada.html) the CCDWS service can be used to submit claims to Insurance Carriers.

Open Dental is a CCDWS certified software. The CCDWS service should only be installed for users sending claims through [Claimstream](claimstream.html) and non-dentist providers sending claims through [ITRANS 2.0](itrans20.html).

1. Using a Windows administrator account on the server, download CCDWS from <https://ccdws.hardersoft.com/>.
2. Click *ccdws-latest-win-install.exe* to download it.
3. Open the downloaded file location, right-click the CCDWS installer and select *Run as administrator*.
   * If Microsoft Defender blocks the installation, click More Info, then Run Anyway.
4. Click **Next**.
   ![](images/ccdws1.png)
5. Check *I accept the terms of the license agreement*, then click **Next**.
   ![](images/ccdws2.png)
6. Click **Next**.
   ![](images/ccdws3.png)
7. Keep the install path at **c:\ccd**, then click **Next**.
   ![](images/ccdws4.png)
8. Ensure *Complete* is checked, then click **Next**.
   ![](images/ccdws5.png)
9. Enter the Service User Account and password. For most users, this can be any user account. For users with CDA Digital IDs (i.e., provider certificates), this is the user that the certificates are installed to. Then click **Next**.
![](images/ccdws6.png)

Note: Domain, user, and password must be entered correctly for the service to install. If not using a domain, enter the server name instead (e.g., server\user or .\user).

10. Leave the REST Listener port entered as 9000, then click **Next**.
    ![](images/ccdws11.png)
11. Click **Next**.
    ![](images/ccdws7.png)
12. When prompted to view the CCDWS configuration file, click **No**.
    ![](images/ccdws9.png)
13. Ensure *Run CCDWS now* is checked, then click **Finish**.
    ![](images/ccdws10.png)
14. Share the CCD folder.
15. *For Claimstream users*: Create and send a test claim.
    *For ITRANS users*: Contact [Open Dental Support](contact.html) for an updated CCDWS.ini configuration file and Telus vendor certificate.
16. Restart the CCDWS service for changes to take affect.

## Troubleshooting

If the prompt in Step 12 does not appear, there may be an issue with the credentials. Re-run the installer as administrator, and when prompted for credentials (step 9), leave them blank and click Next. When the installation is complete, find CCDWS in Services and go to Properties. Re-enter the credentials under *This Account* in the Log On tab.

### Troubleshooting Slowness

A default installation of CCDWS includes a config file [C:\ccd\ccdws.ini] that contains a Main controller option called 'LogLevel' that defaults to '5' (verbose) but should be set to '3' (warning). When left as verbose, the service attempts to log too many details and can crash (especially when sending attachments). The error would show in Open Dental after attempting to send attachments "No response from the CCDWS/ICA/ICD] service..." Even without errors, making this change should improve the performance of the CCDWS service. Please contact Open Dental for a new config file or make the change as needed. Restart the service after making a change to the config file.