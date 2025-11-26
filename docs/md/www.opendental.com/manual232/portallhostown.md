Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Host your own Patient Portal

[Patient Portal](portalhostedbyod.html) can be hosted by the practice if preferred.

Note: Open Dental does not provide support on self-hosted setup. We recommend you work with an IT professional.

The self-hosted web service validates that the customer is on active support at start up and does not validate the registration key again until the web service is restarted.

## Self-Hosted Setup

1. Update to the most current stable version of Open Dental.
2. Purchase and install a certificate from any certificate authority. Existing certificates can be reused if needed.
3. Configure the *OpenDentalWebConfig.xml* file.
4. Change the router settings and forward port 443 (https) to the computer where IIS is installed.
5. Allow all incoming traffic on port 443 through any applicable Firewalls.
6. Set up an IIS web service pointing to the Open Dental folder:
   1. Open the IIS Manager and right click on Default Web Site, then click Add Application.
   2. Set Alias to *OpenDental*.
   3. Set Physical Path to the folder where Open Dental is installed.
   4. Click OK.
7. Set up the Patient Portal URL in the eServices Patient Portal window. Only needs done once.
8. Allow [Patient Portal Access](portalaccess.html) for each patient as needed.

## Self-Hosted Patient Portal Diagram

![](images/patientportalCHPP.jpg)