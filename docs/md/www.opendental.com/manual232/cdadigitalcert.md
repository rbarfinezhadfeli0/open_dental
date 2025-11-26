Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

CDA Digital IDs

Digital ID's are certificates installed to the server that allow claim submission.

For [Canada](canada.html) users, both [ITRANS](itrans.html) and [ITRANS 2.0](itrans20.html) require digital IDs.

## Install Provider Certificates

Each dentist sending claims must have a CDA Digital ID (certificate) installed. These certificates should be installed to the server hosting ITRANS 2.0

* Certificates must be installed to the same Windows user that ITRANS 2.0 is linked to. When installing Certificates, ensure you are logged into that user.
* If the password of the Administrator Windows user changes, the certificates may become corrupt, and must be reinstalled. Some Windows updates have also caused certificate corruption in the past.
* If a password is changed, the ITRANS Claim Director and CCDWS services must also have the password updated.
* Ensure the server date and time are set correctly prior to installing certificates. Incorrect dates or times may deem the certificates to be invalid.
* If replacing a current certificate, remove the old certificate first before proceeding.

## Dentists

Obtain your login and password from the CDA.

Below are CDA Digital ID installation instructions that we received via a CDANet letter to providers.

1. Sign in to the CDA Practices Supports Services website [services.cda-adc.ca](https://services.cda-adc.ca/Practice/Login?ReturnUrl=%2F).
2. Click on *MY CDA Digital ID*.
3. If linked to multiple offices, find the row with the office in question. Click *Download Digital ID*.
4. Confirm the listed CDA Digital ID. Read the CDA Digital ID Subscriber Agreement and click the confirmation checkbox.
5. Click *Install with CDA Digital ID Installer*.
6. If not already installed, install the CDA Digital ID Installer. Follow the instructions.
7. Copy the secure code listed on the website.
8. Start the CDA Digital ID Installer software. Click *Paste* to paste the secure code in the window. The CDA Digital ID installer software should not be run as administrator.
9. Click *Submit* to install the CDA Digital ID and other required items.

Note: If logged in as the owner of the practice, click the Administration tab at the top to download Digital IDs for all providers.

## Hygienists

Hygiene offices no longer need provider certificates to send claims.

Hygiene only offices can send claims directly to TELUS using the [Claimstream](claimstream.html) clearinghouse.

## Certificate Verification

To verify a provider has certificates installed:

1. On the Claims Server, log into the Windows account where certificates are installed.
2. In Windows, open Internet Options.
3. Click Content, Certificates.
4. Each provider lists with their expiration date.