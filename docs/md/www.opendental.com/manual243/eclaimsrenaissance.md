Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Renaissance E-Claims

Renaissance is an e-claims clearinghouse solution that uses the Remote Lite software.

In [Clearinghouses](clearinghouses.html), double-click Renaissance.

![](images/eClaimsRenaissance.png)

## Open Dental Setup

Contact Renaissance to set up an account and install the RemoteLite program.

Default settings are preset in this window. Verify settings before sending claims.

* If using Renaissance Version 5 or greater the Claim Export Path should be changed to **C:\Users\Public\RES\DOTR\upload\**.
* Update the Launch Client Program file path if needed. It should point to the location of the RemoteLite.exe.

## Claims

When sending a claim to Renaissance from Open Dental, the Remote Lite program displays with a list of claims that have been created. Click the Send Claims Button at the bottom of the Remote Lite window.

If there is a claim that should not be sent, highlight it and click the red X delete button in RemoteLite. Then go back to Open Dental and change the status of the claim back to *Waiting to Send*.

Note:

* If there are more than 8 procedures on a claim, the claim will be rejected. Make sure to send two separate claims in that case, with some procedures on each claim.
* Practice address must be on one line. If address includes a suite or unit number, do not use the field for Address 2 in Practice Setup.

## Technical Details

Renaissance only supports four places of service in their custom electronic claims format. Below are the Open Dental settings for place of service, and how they output to Renaissance.

| Open Dental Places of Service | Renaissance Output |
| --- | --- |
| Office | Office |
| InpatHospital, OutpatHospital | Hospital |
| SkilledNurseFac, CustodialCareFacility | ECF |
| PatientsHome, OtherLocation | Other |

All other Place of Service codes in Open Dental are not supported by Renaissance and will not output anything to the Renaissance claim.

Note: Renaissance uses its own unique format for claims (not X-12). We do not recommend using a format that is not X-12 format. No validation is done on claims and not as much information can be sent. For example, Renaissance's unique format only allows sending information that can be printed on a claim form. X-12 format allows for 15 different places of service, but Renaissance only allows 4 particular places of service. Some insurance companies reject claims if the place of service is not properly set for specific procedure codes. Some offices choose to use Renaissance anyway. Please bear in mind that our support for Renaissance issues is minimal.