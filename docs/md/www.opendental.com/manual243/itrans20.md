Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

ITRANS 2.0

For [Canada](canada.html) Dentist users, claims are submitted using the ITRANS 2.0 clearinghouse.

There are three parts to installing ITRANS 2.0.

1. Install ITRANS Claims Director service (see below).
2. Setup the ITRANS 2.0 clearinghouse in Open Dental (see below).
3. Install [CDA Digital IDs](cdadigitalcert.html).

Note:

* ITRANS 2.0 is for dentist providers. If an Independent Hygienist or Denturist is on staff who will be submitting claims, the [CCDWS Service](ccdws.html) is also required.
* ITRANS 2.0 users must use version 4 of the ITRANS Claims Director.
* For information on ITRANS 2.0, see [Question and Answers about ITRANS 2.0](https://www.cda-adc.ca/en/services/itrans/itrans2/) from the Canadian Dental Association.

## Install ITRANS Claims Director Service

ITRANS 2.0 includes the ITRANS Claims Director (ICD) service, which sends and receives claim and carrier information.

1. On the Windows administrator account of the server, download ICD for Windows from <https://www.cda-adc.ca/get/>.
2. Right-click the ICD executable and select *Run as administrator*.
   * If Microsoft Defender blocks the installation, click *More Info*, then *Run Anyway*.
3. When prompted, select *English (United States)*, then click **OK**.
   ![](images/itrans2LanguageSelect.png)
4. Click **Next**.
   ![](images/itransICDwelcome.png)
5. Click **Next**.
   ![](images/itransAgreement.png)
6. Ensure **ITRANS Claims Director** is checked, then click **Next**.
   ![](images/itransInstallClaimDirector.png)
7. Select **English** as the language, then click **Next**.
   ![](images/itransEnglishSelect.png)
8. Ensure the installation path is set to **C:\Program Files (x86)\CDA\ICD\**, then click **Next**.
   ![](images/itransICDpath.png)
9. Enter the Service User Account and password. This is the user that CDA Digital IDs (i.e., provider certificates) will be installed to. Then click **Next**.
   ![](images/itransServiceAcct.png)

   Note: Domain, user, and password must be entered correctly for the service to install. If not using a domain, enter the server name instead (e.g., server\user or .\user).
10. Ensure the ICD folder is set to **C:\ICD\**, then click **Next**.
    ![](images/itransICDfolder.png)
11. Set the *Time to Check for updates*. 03:00 is the default. Then click **Next**.
    ![](images/itransTime.png)
12. Keep the Networks folders in their default location. These do not need to change. Then click **Next**.
    ![](images/itransNetworkFolders.png)
13. Review the Input and Output file naming conventions. These do not need to change. Then click **Next**.
    ![](images/itransFileNames.png)
14. Click **Install**.
    ![](images/itransInstall.png)
15. Share out the **C:\ICD\** folder so all users have read and write permissions.
16. Restart the ITRANS Claims Director service.

## Set the ITRANS 2.0 Clearinghouse

Setup the ITRANS clearinghouse to enable ITRANS 2.0 claim submission.

In the Main Menu, click Setup, Family/Insurance, Clearinghouses. Double-click **ITRANS 2.0**.

![](images/itrans20.png)

1. Set the Claim Export Path to **\\ServerName\ICD\**.
2. Set the Report Path to **\\ServerName\ICD\**.
3. Ensure Use Claim Export Path is checked.
4. Set the Explanation of Benefits (EOB) Option.
   * **Do Not Download EOBs:** EOBs will display, but amounts from EOBs will not be downloaded into claims/predeterminations.
   * **Download EOBs, Do Not Auto Receive:** EOBs will display and amounts from EOBs will be automatically downloaded as insurance estimate overrides (claims and predeterminations) and preauth estimates (predeterminations only), but the claim/predetermination will not be marked as received.
   * **Download EOBs and Auto Receive:** EOBs will display and amounts from EOBs will be automatically downloaded as insurance estimate overrides (claims and predeterminations) and as preauth estimates (predeterminations only), and claim procedures will be received using the same amounts. Claim payment will need to be finalized after receiving payment from the carrier.
5. Set the Comm Bridge to ITRANS.

From the Clearinghouses window, ensure ITRANS 2.0 is set as the default clearinghouse.

## Troubleshooting

If the ICD does not install (might show error 1069, 1920, or 1923), there may be an issue with the credentials. Cancel the installation, re-run the installer as administrator, and when prompted for credentials (Step 9) leave them blank and click Next. When installation is complete, find the ITRANS Claim Director in Services and go to Properties. Re-enter the credentials under *This Account* in the Log On tab.