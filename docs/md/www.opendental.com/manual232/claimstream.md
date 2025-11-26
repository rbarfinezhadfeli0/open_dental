Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Claimstream

For [Canada](canada.html) users, claims can be submitted directly to the TELUS and Instream networks using Claimstream.

Note:

* Open Dental support is required to install the CCDWS service that Claimstream runs on.
* Open Dental is CCDWS certified software.
* Quebec users should not install Claimstream.

## Install Claimstream / CCDWS

Claimstream uses the CCDWS service to send claims. See [CCDWS Service](ccdws.html) for installation instructions.

## Setup the Claimstream Clearinghouse

In the [Main Menu](mainmenu.html), click Family/Insurance, [Clearinghouses](clearinghouses.html). Double-click Claimstream to edit.

![](images/clearinghouseClaimstream.png)

1. Set the Claim Export Path to **\\ServerName\ccd\**.
2. Set the Report Path to **\\ServerName\ccd\**.
3. Ensure **Use Claim Export Path** is checked.
4. Set the preferred Explanation of Benefits (EOB) option:
   * **Do Not Download EOBs:** EOBs display, but amounts from EOBs are not downloaded into claims/predeterminations.
   * **Download EOBs, Do Not Auto Receive:** EOBs display and amounts from EOBs are automatically downloaded as insurance estimate overrides (claims and predeterminations) and preauth estimates (predeterminations only), but the claim/predetermination is not marked as received.
   * **Download EOBs and Auto Receive:** EOBs display and amounts from EOBs are automatically downloaded as insurance estimate overrides (claims and predeterminations) and as preauth estimates (predeterminations only), and claim procedures are received using the same amounts. Claim payment need to be finalized after receiving payment from the carrier.
5. Click OK to save.

Note: Some fields may automatically fill that are not needed. They can be removed.

* Launch Client Program
* Payors (rarely used).

## Technical Details of Upload

Open Dental checks the claim export path (usually **C:\ccd** on the claim server) for the existence of OPENDENTAL.pem and automatically creates the OPENDENTAL.pem file if it does not already exist.

Files being sent from Open Dental to Claimstream are named input.### (i.e., input.000, input.001, etc...) and are placed in the **C:\ccd** folder on the server by default.

To prevent the CCDWS service from processing input before the input file is finished writing, a temp file is first written in format tempinput.###, then the file is renamed to input.###. File names are cycled through until they reach 999 and then start over at 000.

The purpose of the file name incrementing is to prevent transactions of different client machines from colliding while they are being adjudicated. The CCDWS service first renames the input.### file to \_nput.### to prevent the file from being processed more than once. The CCDWS service then sends the \_nput.### file data via a secure SSL connection to Claimstream. The reply comes back in under two minutes as output.### or utput.### in the same folder. The output.### file is immediately imported into Open Dental, then the output.### and \_nput.### files are deleted by Open Dental.