Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

eServices Troubleshooting

See [eConnector](econnector.html).

Below are some general troubleshooting steps when experiencing issues with the eConnector or eServices in general.

For steps that relate to a specific eService, refer to the service's troubleshooting page:

* [eReminder and eConfirmation Troubleshooting](eremindertroubleshooting.html)
* [eClipboard Troubleshooting](eclipboardtroubleshooting.html)
* [Integrated Texting Troubleshooting](textintegratedtroubleshooting.html)
* [Mobile Web Troubleshooting](mobilewebtroubleshooting.html)
* [Patient Portal Troubleshooting](portaltroubleshooting.html)
* [Web Sched Troubleshooting](webschedtroubleshooting.html)
* [Ports and IP Addresses for eServices](../site/eserviceports.html)

## eConnector Requirements

The server that hosts the eConnector must remain on at all times for eServices to work. The eConnector is how the practice securely communicates with Open Dental HQ. If the server hosting the eConnector is off, or the eConnector service is not running, eServices cannot operate.

Ensure all machines are synced to the same time. Time differences between workstations and the eConnector server cause eServices to appear down even when they are not.

WebView2 must be installed on the server hosting the eConnector.

## General Troubleshooting

When eServices go down, the following may occur:

* An *eConnector Down* [Alert](alerts.html) displays.
* Unable to load a page or feature (e.g., Patient Portal, Web Sched, eClipboard, etc.).
* Unable to send or receive text messages.
* The eConnector status is *Error*.
* In the [Service Manager](servicemanager.html), the service has a status of *installed, stopped*.

To fix, follow these steps in this order. If one step doesn't fix the issue, proceed to the next.

1. Check the internet connection and ensure the eConnector server is on.
2. Check to ensure the eConnector is running. If not, restart it.
3. Manually uninstall and reinstall the eConnector.
4. Uninstall and reinstall Open Dental on the eConnector server.
5. Check the [eConnector Firewall](allowapplication.html) settings.
6. Check for errors in the eConnector log (**C:\Program Files (x86)\Open Dental\OpenDentalEConnector\Logger**).

## General Service Error Messages

**Could not reach HQ. Please make sure you have an internet connection and try again or call support. Unable to connect to the remote server.**

See [Ports and IP Addresses for eServices](../site/eserviceports.html).

**error code 200**

This can occur when trying to access a web page in the Patient Portal, Mobile Web, or Web Sched, but the link has been edited in the browser. Retype the URL in the browser address bar using the exact URL provided for the eService in eServices Setup. If the issue persists, contact us.

**Failed to access registry**

This can occur during installation of eConnector. Log into Windows as a user with higher privileges (e.g., administrator) or manually install the eConnector.

**Failed upgrading to the eConnector service: Unable to install the service.**

Run the Open Dental setup file on the eConnector host computer and try the installation process again.

**Listener Version does not match Program Version**

The service was not stopped prior to updating Open Dental. In the Service Manager, stop the eConnector, then reinstall Open Dental.

**Message from: server - Unable to connect to any of the specified MySQL hosts**

Try to start the eConnector manually.

**Internet Explorer can't display this page**

Use a different browser.

**This is not an error...**

Ignore this error.

**Inner Thread Loop Failed**

Ignore this error.

**ValidatePatientPortal registraton failed**

This indicates that registration failed due to the previous error in the Event Viewer list. Check the previous error to troubleshoot.

**(in a logger folder) Object reference not set to an instance of an object**

Update to the latest stable version.

**No immortal socket connection found for RegistrationKeyNum...**

Open Dental headquarters cannot communicate with your eConnector. Follow the eServices are not working steps at the top of this page.

**Error: MethodWebSchedRSs, unknown method: GetHeaderInfo.**

Re-run setup file for current OpenDental version on server. There are likely missing .dll files for the eConnector that were missed on the initial update.

## Mobile App Images

**Images not generating on mobile devices.**

Before images like the Tooth Chart can be retrieved from Open Dental, make sure that the server hosting the office's eConnector has Microsoft Visual C++ 2015 Redistributable Update 3 installed.

## Signup Portal

To view the Signup Portal, WebView2 must be installed. If WebView2 is not installed, a popup displays asking to download the installation. This only needs to be done once on each workstation.