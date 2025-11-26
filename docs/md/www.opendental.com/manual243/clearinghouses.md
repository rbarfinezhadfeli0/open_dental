Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Clearinghouses

If sending e-claims to a clearinghouse, first set up the clearinghouse in Open Dental.

In the [Main Menu](mainmenu.html), click Setup, Family/Insurance, Clearinghouses.

![](images/clearinghouses.png)

Clearinghouses are listed alphabetically. Click **Add** to create a clearinghouse that isn't listed. Double-click an existing clearinghouse to enter settings.

**Clinic**: Change the clinic to view clinic overrides for the Export Path overrides for all clearinghouses. When clinics is enabled, some information can be overridden by clinic (e.g., login credentials, export path). See [Clearinghouse Clinic Setup](clearinghousesclinics.html) for clinic specific information.

## Set Default

Determine the default clearinghouse for Dental, Medical, and Eligibility. A default must be set for each option, even if the practice is not using each option (e.g., sending medical claims or processing eligibility).

![](images/clearinghouseSetDefault.png)

* **Dental**: Single click on a clearinghouse, then click to set a default dental clearinghouse.
* **Medical**: Single click on a clearinghouse, then click to set a default medical clearinghouse.
* **Eligibility**: Single click on a clearinghouse, then click to set a default clearinghouse for Eligibility requests.

Note: If no Eligibility default is set, the default for Eligibility is the chosen Dental default. If no Eligibility default is set and there is no Dental default, the Eligibility default is the chosen Medical default.

## Automatic Report Settings

The settings below affect the automatic download of clearinghouse reports (e.g., [ERAs](claimsera835.html), acknowledgment reports, text reports). Once a report is downloaded and processed, the information becomes part of the database and is accessible from any computer.

![](images/clearinghouseAutomaticReportSettings.png)

**Receive Reports by Service:** Determines the method used to receive reports.

* Unchecked: The computer specified receives the reports. This is the original method used by Open Dental.
* Checked (recommended): Receive reports using the OpenDentalService.
  + On the server (or the computer that *OpenDentalService* is installed), check [Service Manager](servicemanager.html) to make sure the OpenDentalService is installed and running.
  + On the server (or the computer that *OpenDentalService* is installed), verify a valid Report Path is specified and *Download ERAs* is selected on the [Edit Clearinghouse](eclaimsclaimconnect.html) window.

**Computer to Receive Reports Automatically:** Specify one computer which downloads reports automatically from the clearinghouse server to the Report Path. Enter the IP address or computer/server name or click **This Computer** to use the current computer. If a server name is entered and Open Dental is left open on the server, the computer automatically checks the server for new reports according to the interval. If this field is blank, this feature is disabled. Only some clearinghouses currently support automatic download of reports.

**Receive at an Interval:** Set a time interval, in minutes, to automatically check the clearinghouse server and download new reports. Only values between 5 and 60 are allowed. 30 is the default.

**Receive at a set time**: Set a specific time to check the clearinghouse server and download new reports. Time auto corrects itself to valid format (e.g., 1:00 AM).

## Individual Clearinghouses

There are a number of Clearinghouses integrated with Open Dental to send Claims electronically. Users should first sign up with their selected clearinghouse, then set up the clearinghouse in Open Dental.

Clearinghouses differ greatly in size, infrastructure, and business model. Some are small and tend to serve a local geographic area or focus on customer service. Some are actively pursuing more direct connections with payers. Some clearinghouses are more accurately described as aggregators, having a direct connection to only a few payers and sending the bulk of their claims to another clearinghouse.

Note: If you have a negative experience with a clearinghouse, please send a detailed email about your experience to *service@opendental.com* so that we may look into the issue.

**Recommended Dental Clearinghouses**: These clearinghouses are recommended and also offer electronic attachments, electronic eligibility, and electronic billing (statements).

* [DentalXChange / ClaimConnect E-Claims](eclaimsclaimconnect.html)
* [Electronic Dental Services](eclaimseds.html)

**Additional Clearinghouses and Aggregators**: These companies are known to work well with Open Dental:

* [Apex](eclaimsapex.html)
* [Etactics](eclaimsetactics.html)
* [Office Ally E-Claims](eclaimsofficeally.html)
* [Post-n-Track E-Claims](eclaimspostntrack.html)
* [Vyne Dental E-Claims](eclaimsvyne.html)

**Medical Clearinghouses**:

* [Electronic Dental Services - Medical](eclaimsedsmedical.html) - Must also be using Electronic Dental Services - Dental.

**Canada**:

* [ITRANS 2.0](../site/itrans20.html) - Dentists only.
* [Claimstream](../site/claimstream.html) (TELUS / CCDWS) - Hygienists only.
* [RAMQ E-Claims](eclaimsramq.html)  - Incomplete. Do not use.

**Puerto Rico**:

* [Inmediata E-Claims](eclaimsinmediata.html)
* [Lantek](lantek.html)

**No Longer Used / Not Recommended**
 These clearinghouses are preconfigured in Open Dental but are not recommended.

* Change Healthcare (formerly Emdeon, WebMD, Envoy)
  + It appears Change Healthcare has stopped providing clearinghouse services after a cyber attack that took place in early 2024.

## Direct Connections to Payers

Most payers prefer to use clearinghouses so they do not have to maintain direct connections with thousands of dental offices. However, some do offer direct connections. To use Open Dental for direct submission, there is work involved including: contact the payor, get their implementation guide, set up a partnership agreement, test, and finally upload claims. We do not provide implementation details and leave it up to individual offices. But it can still be useful for very large volume offices. The X-12 files typically need to be manually uploaded to the carrier because there is no standard for transport.

* [BCBS Georgia E-Claims](eclaimsbcbsga.html)
* [BCBS Nebraska E-Claims](eclaimsbcbsnebraska.html)
* [Colorado Medicaid E-Claims](eclaimscoloradomedicaid.html)
* [Denti-Cal](dentical.html)
* [Washington Medicaid E-Claims](eclaimswashmedicaid.html)

## Troubleshooting

For troubleshooting, see [E-Claims Errors](eclaimserrors.html).

For more technical information about what is sent in e-claims, see [E-Claims Complexities](eclaimscomplexities.html).

Some clearinghouses not listed above are not recommended. See [Third-Party Warnings](../site/thirdpartywarnings.html) for more information.