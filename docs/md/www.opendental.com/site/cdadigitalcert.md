Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

CDA Digital IDs

Digital IDs are certificates installed to the server that allow claim submission.

For [Canada](canada.html) users, both [ITRANS](itrans.html) and [ITRANS 2.0](itrans20.html) require digital IDs.

## Install Provider Certificates

Each dentist sending claims must have a CDA Digital ID (certificate) installed. These certificates should be installed to the server hosting ITRANS 2.0

* Certificates must be installed to the same Windows user that ITRANS 2.0 is linked to (i.e., the user listed in the ITRANS Claims Director service, Log On tab). When installing Certificates, ensure the Claims Server is logged into that user.
* If the password for the Windows user hosting the CDA Digital IDs is forcefully reset, the certificates are invalidated and must be reinstalled. Some Windows updates have also caused certificate corruption in the past.

## Dentists

Office owners, dentists, or administrators should first obtain a login and password from the CDA. ITRANS 2.0 (version 4 or higher) is required. CDA Digital ID installation:

1. Sign in to the CDA Practice Support Services website [services.cda-adc.ca](https://services.cda-adc.ca/Practice/Login?ReturnUrl=%2F).
   * If logged in to the Practice Support Services website as the owner of the practice, you may click the Administration tab at the top to download Digital IDs for all providers.
2. Click on MY CDA Digital ID.
3. If linked to multiple offices, find the row with the office in question. Click Download Digital ID.
4. Read the CDA Digital ID Subscriber Agreement and click the confirmation checkbox.
5. Click Install with CDA Digital ID Installer. The CDA Digital ID Installer application does not need to be downloaded or installed. The CDA Practice Support application is used instead.
6. Copy the Secure Code listed on the website or click **Copy**
7. Find and open the CDA Practice Support application (look for the program icon in the Windows taskbar).
8. Click Install CDA Digital ID With Secure Code.
9. Click **Paste**, and then **Submit**.
10. If there is a notice that root certificates need to be installed, allow it.

The provider's certificate is now installed.

## Hygienists

Digital IDs do not need to be installed for hygienists or denturists. CDHA member Independent Hygienists and DAC member Denturists can send claims for their work using the [Claimstream](claimstream.html) clearinghouse. Open Dental does not require or use paid Instream memberships.

## Certificate Verification

To verify a provider has certificates installed:

1. On the Claims Server, log into the Windows account used for ITRANS.
2. In Windows, open Internet Options.
3. Click **Content**, and then **Certificates**.
4. Each dentist in the office should have one current certificate installed per clinic.