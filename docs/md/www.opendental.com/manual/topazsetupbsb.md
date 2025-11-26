Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Topaz BSB Model Setup

This is the basic setup process of the Topaz T-S460-BSB-R for use with [Electronic Signatures](electronicsignatures.html). May apply to other models that are meant to work with Remote Desktop Connection (RDC). Unlike the Topaz HSB models, this BSB model works with Microsoft's Remote Desktop Services and RemoteApp with the Terminal Services role turned on (i.e., more than one remote client session on the same server). Terminal Services Users must use this model instead of the HSB models.

Topaz BSB model digital signature pads only work with Open Dental version 15.3 or greater.

To get started setting up a Topaz BSB signature pad for use on a Terminal Server:

1. Open the [Topaz Setup Instructions](https://www.topazsystems.com/software/bsb_remote.pdf) (PDF).
2. You will likely be following the instructions for terminal server. If so, skip step three.
3. Complete the steps laid out in the PDF.

   See Server Setup and Workstation Setup below.

## Server Setup

Set up the server once, then follow the workstation setup steps for each workstation. The steps below are required.

Log into the server, then download and save [SigPlus.exe](https://www.topazsystems.com/Software/sigplus.exe).

If using Server 2003

1. Open Add/Remove Programs, click Add New Programs.
2. Click Browse, and navigate to the SigPlus.exe.
3. Run the install through the Add/Remove Programs wizard.
4. Choose your tablet model during install and the COM1 connection type.

If using Server 2008/2012. Remote Desktop Session Host Configuration must be installed for this to work. See checking port settings below.

1. From a CMD line, type Change user/install to enter Install mode.
2. Install SigPlus.exe. Choose your tablet model during install and the COM1 connection type.
3. After installation, from CMD line, type Change user/execute or restart server to place server back into Execute mode before using the application.

Create a SigPlusRoot.ini file and change the TabletComPort.

1. Copy SigPlus.ini from **C:\Windows** and paste it into the root directory (e.g. **C:\**).
2. Rename it SigPlusRoot.ini.
3. Change the TabletComPort assignment to the desired COM port (see step 7 in Part 1 below).

## Workstation Setup

Below are the steps for Terminal Servers from the manual (08/20/2015).

Part 1: Client Side Installation

1. Download and save the [SigPlus BSB Pad Installer (.exe)](https://www.topazsystems.com/software/sigplusbsb.exe) to your local client computer/terminal.
2. Right-click the sigplusbsb.exe and choose Run as Administrator.
3. Follow the installer, choosing the appropriate tablet model.
4. Click Start, right-click Computer, click Properties.
5. Click Device Manager from the menu on the left.
6. Click the white arrow to expand the Ports section and locate the USB Serial Port.
   ![](images/topazUSBPort.png)
7. Note what COM port was assigned to this device. In this example, the port is COM9.

Part 2: Setting up Remote Desktop for Serial Port Redirection

1. Click Start, All Programs, Accessories, Remote Desktop Connection.
2. The Remote Desktop Connection opens. Click Options in the corner.
3. Click the Local Resources tab at the top of the window. Click More in the Local Devices and Resources section of the window.
   ![](images/topazRemoteLocal.PNG)
4. Click Ports to check the box.
   ![](images/topazRemotePorts.PNG)
5. Click OK. Ports needs to be checked when you log into a session for the signature pad to work in that session.

Part 3: Setting Up Signature Capture for Each User

1. Log into the server via an RDC session, and download and save the winloc.exe utility: www.topazsystems.com/Software/winloc.exe
2. Double-click the winloc.exe to run.
3. Click on WINDOWS from the list and note the Path reported.
4. Copy the SigPlus.ini file from C:\\Windows and paste it into the path reported by winloc.exe.
5. Double-click this new SigPlus.ini file to open.
6. Change the TabletComPort assignment to the COM port you noted from step 5 on page 6.
7. Once done, click File, Save.
8. You will need to repeat this process for each user that has a signature pad. Be sure to log in as the particular user you wish to set up each time.

Part 4: Test Your BSB Signature Pad

Before testing your application, you should test with DemoOCX.exe. This can be found in **C:\Windows\SigPlus** on the server. Open DemoOCX.exe, click Start, and sign on your pad. You should see your writing in the demo window.

## Installation Files

Client Side

http://www.topazsystems.com/software/sigplusbsb.exe (run as Admin)

Host Side (through RDC)

http://www.topazsystems.com/software/sigplus.exe (run as Admin)

## Notes/Things to Check

* If previous version of SigPlus is installed it is easier to just uninstall and start fresh the first time.
* Make sure you enable ports in the RDC options. To check, follow the steps below for Checking Port Settings.
* You may need to double check that ports are allowed on RDC sessions. To check, follow the steps below for Checking Port Settings.
* Make sure the SigPlus.ini files is in **C:\\Windows\**
* Make sure to edit the SigPlus.ini file and put in the correct port number.

## Checking Port Settings

Client Side

1. Open RDC.
2. Click Options, Local Resources tab, More.
3. Make sure Ports is checked.

Host Side (through RDC)

1. Click Start, type Remote Desktop Session Host Configuration into search, click to open.
2. Right-click the RDP-TCP Connection and go to its properties.
   ![](images/topazRDC-TCP.png)
3. Click Client Settings.
4. Make sure COM Port is not checked.

## Questions and Answers

**Topaz signature pad is not writing properly after setup.**

Sometimes the test application locks the signature pad. Unplug then re-plug the topaz signature pad to fix the issue.

**Unable to sign using a Topaz signature pad when running Open Dental as an administrator.**

Do not run Open Dental as an administrator.