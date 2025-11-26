Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Change Healthcare E-Claims

Change Healthcare (formerly Emdeon) is an e-claims clearinghouse.

In [Clearinghouses](clearinghouses.html), double-click Emdeon (may also display as WebMD).

![](images/eClaimsWebMD.png)

Change Healthcare is not a recommended clearinghouse solution. It appears Change Healthcare has stopped providing clearinghouse services after a cyber attack that took place in early 2024.

## New Change Healthcare Registrations

Offices wishing to use Change Healthcare can register using the steps below.

Note: If a second office is signing up but using a different database, a separate username and password must be acquired from Open Dental. If the second office is using the same database, refer to [Clearinghouse Clinic Setup](clearinghousesclinics.html).

1. Call Open Dental Support. We will provide a Change Healthcare Login ID and a Password.
2. Fill out a registration form and email it to *dentalenrollment@changehealthcare.com* or fax it to 615-340-6107.
   * Batch claim registration forms:
     + [Registration $39.95 a month](http://opendental.com/resources/Open%20Dental%20%2439.95%20Registration%20Form%2001292016.pdf) (PDF)
     + [Registration $0.37 per claim](http://opendental.com/resources/Open%20Dental%20%240.37%20Registration%20Form%2001222016.pdf) (PDF)
   * Electronic Eligibility registration form: [Registration $17.95 per provider per month](http://opendental.com/resources/Open%20Dental%20RTE%20Registration%20Form%2001222016.pdf) (PDF)

     Note: If already signed up for batch claims and electronic eligibility is desired, fill out the Electronic Eligibility form and send to Change Healthcare to complete the enrollment. If not signed up for claims, sign up for both simultaneously.
3. Download and run [WebMD Eclaims Setup.exe](../resources/WebMD%20Eclaims%20Setup.exe) on the workstations where claims will be sent from.
   * Set the Change Healthcare client program to always run as administrator. The program location is indicated in the Launch Client Program field on the Edit Clearinghouse window.
4. Download and save [WebMd\_FileTransfer\_ConClient.zip](../resources/WebMd_FileTransfer_ConClient.zip).
5. Right-click the zip file and select *Open with...*, then select File Explorer.
6. Copy the three files, then paste them into **C:\Program Files (x86)\WebMD**.
7. A Replace or Skip files window appears. Select *Replace the files in this destination*. This updates the necessary files for claim submission.
8. In Open Dental, set up the Emdeon (Change Healthcare) clearinghouse using screenshot above as a reference.

**Payer Enrollment Forms**:

* Batch Claims: <https://support.changehealthcare.com/customer-resources/enrollment-services/dental-claims-enrollment-forms>
* Real Time: <https://support.changehealthcare.com/customer-resources/enrollment-services/dental-real-time-enrollment-forms>
* ERA: <https://support.changehealthcare.com/customer-resources/enrollment-services/dental-era-enrollment-forms>
  + Dental ERAs cannot be automatically downloaded from Change Healthcare/Emdeon. See [ERA Troubleshooting](claimsera835troubleshooting.html) for information on manually downloading to Open Dental.
* NPI: <https://www.changehealthcare.com/content/dam/change-healthcare/support/enrollment-forms/dental-enrollment-forms/Claims/npi_all.pdf>

**Dental Payer Lists**: <https://support.changehealthcare.com/customer-resources/payer-lists>

## Claims

After sending claims to Change Healthcare from Open Dental, the Change Healthcare Claims Manager launches automatically. Click **Confirm** to complete claim submission.

## Electronic Eligibility

For [Denti-Cal](dentical.html) carriers, also enter the Denti-Cal password on the Denti-Cal Clearinghouse Setup window.

1. In Clearinghouses, double-click *Denti-Cal.*
2. For Clearinghouse ID (ISA08) enter DENTICAL.
3. Enter the Denti-Cal password.
4. Click OK.

   ![](images/eclaimsemdeonDentiCalPW.gif)

## Updating to TLS 1.2

07/24/2018: Offices already using Change Healthcare to submit electronic claims must update their installation to TLS 1.2 by November 2018. TLS 1.2 is a more secure method of sending claims. The update must happen on all workstations set up to send e-claims.

To update the Change Healthcare installation, follow steps 4 through 8 under New Change Healthcare Registrations above.