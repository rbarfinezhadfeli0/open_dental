Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Encryption of Data at Rest and in Transit

The information below is provided as a resource when making encryption decisions related to [Computer Security](securitycomputers.html). Open Dental does not provide technical support for encryption. Instead consult your IT professional.

Encryption of data prevents unauthorized users from viewing data (PHI) when there is a data breach (e.g. hacking, theft, or loss of data). HIPAA does not require encryption of data, however it is recommended. If there is a data breach, practices that have encrypted their data can qualify for Safe Harbor (patient notification may not be necessary or as difficult, see Breach Notification Rule below). Practices that have not encrypted the data must inform every patient that medical records have been compromised, and in some circumstances, notify the media.

* Breach Notification Rule: <https://www.hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting/index.html>.
* A Breach Example: <http://www.databreaches.net/north-memorial-hospital-settles-hhs-charges-for-1-55m/>.

Your encryption plan needs to include data at rest and in transit, as well as any other PHI that you have on your systems. Documenting your data security policy is very important, as the burden of proof may rest upon you if there is a data breach.

## Encryption of Stored Data (at rest)

Your encryption plan needs to include the data that is stored by Open Dental.

* Database: A database, generally MySQL, stores your patient data. By default, it is located at **C:\MySQL\Data\OpenDental\**.
* Folder for Images and Documents ([A to Z Folder](atozfolder.html)): This folder stores files that you scan or import.
* Backups should also be encrypted.

Below are two options for encrypting stored patient data.

* [BitLocker Encryption](encryptionbitlocker.html). This is the recommended method for the database and A to Z Folders, if you have a compatible Operating System. BitLocker encrypts an entire drive in a manner that avoids the more complex EFS method of certificates associated with individual Windows users.
* [EFS Encryption](encryptionefs.html). Works well for the database because only the MySQL database service accesses the files, and this service always runs under one Windows user. It does not work well for the A to Z folders because it does not work well for files that are shared to multiple users.

## Encryption of Data in transit

Data in transit refers to data that is moved from one place to another and therefore could be intercepted by someone else. This includes data that is transported across a network or stored on a removable storage device.

Removable storage device: Use hardware encryption (e.g. encrypted hardware drives, encrypted USB drives) or software encryption (e.g. Bitlocker).

Data that is transported across a network: Open Dental does not move patient data off of your network in any automated fashion. However, there are optional features that involve sending patient data to, or from, your Open Dental database.

| Feature | Encrypted? | Encryption Method | Other Details |
| --- | --- | --- | --- |
| [E-Claims](clearinghouses.html) | Yes | Varies by clearinghouse | Communication of insurance claim information by Open Dental is always secure. Contact the clearinghouse to determine their method.  * Some clearinghouses have Open Dental send the data via a secure HTTPS connection or SFTP (Secure File Transfer Protocol). * Many clearinghouses have Open Dental create the claim data locally on the client machine, then proprietary client uploads software that moves the data securely to their servers. Contact the clearinghouse to address encryption in transit. |
| eRx | Yes | HTTPS over SSL |  |
| Open Dental Cloud | Yes | HTTP over SSL, LUKS drive encryption, SFTP, MFA |  |
| Email |  |  |  |
| Plain text [Email](emailmessage.html) | No |  | Do not send PHI using regular plain text email. Thus do not include PHI when emailing recalls or confirmations or manually composing emails. To securely email statements use Electronic Statements. |
| [Encrypted Email](emailencrypted.html) | Yes |  | It can be tedious to set up encrypted email and share public email keys with recipients ahead of time. We recommend using [Secure WebMail Feature](securewebmail.html) instead. |
| eServices |  |  |  |
| [eConnector](econnector.html) | Yes | AES (formerly known as Rijndael) | This applies to the communication between Open Dental's secure servers and your practice computers. Advanced Encryption Standard (AES) is a standardized encryption specification established by the U.S. National Institute of Standards and technology (NIST) that complies with the Federal Information Processing Standard (FIPS) as set forward by the federal government in regard to security of data in transit. We use a 24 byte (192 bit) key, which falls well within the guidelines set by the federal government.Used for all eServices that require the eConnector. |
| Browser interface for:    * [eConfirmations](../site/ereminders.html) * [Mobile Web Feature](../site/mobileweb.html) * [Patient Portal Feature](../site/patientportal.html) * [Web Sched Feature](../site/websched.html) (Recall, New Patient, ASAP) | Yes | HTTPS over SSL via TLS 1.2 | Mobile Web: Data is not stored on the mobile device so PHI is not lost if device is lost or stolen. |
| [Secure WebMail Feature](securewebmail.html) | Yes | HTTPS over SSL | Recommended as a two-way encrypted communication method with patients. You can even set up portal accounts for providers with whom you regularly communicate so you can exchange PHI with them. See [Secure WebMail](https://opendental.com/manual/securewebmail.html). |
| eClipboard / ODMobile | Yes | HTTPS over SSL via TLS 1.2 | ODMobile data is stored on the device via SqlLite, which uses SHA512 encryption. eClipboard data is not stored on device. |
| Mass Email (no longer offered) | No |  | Mass Emails should be treated like plain text email (e.g. should not include PHI). |
| Sending/Receiving Text Messages ([Integrated Texting Feature](../site/textintegrated.html)) | No |  | Do not send PHI using text messaging. Thus do not include PHI when texting confirmations or manually composing texts. |
| [Web Forms Feature](../site/webforms.html) | Yes | HTTPS over SSL |  |
| Secure Email | Yes | HTTPS over SSL via TLS 1.2 |  |
| Payment Portal | Yes | HTTPS over SSL via TLS 1.3 |  |

If using [Middle Tier](middletier.html), for external communication you must set up HTTPS over SSL.

## Sending PHI via Email or Text Messages

In general, PHI should not be sent via plain text email or text message, even if using Open Dental for those communications. By default, eReminders, eConfirmations, and Web Sched notifications do not send PHI, however you can manually compose messages that do include PHI. We do not recommend it.

To securely communicate with your patients, we recommend setting up Patient Portal accounts. Then you can use Secure WebMail for secure two-way communication. You can even set up portal accounts for providers with whom you regularly communicate so you can exchange PHI.

While you can set up [Standard Encrypted Email](encryptedstandard.html), it can be painful because you must manually set up the encryption with each recipient ahead of time (share a public key).

PHI in Emailed Statements: If sending statements by email from Open Dental, make sure the patient has given you permission to send the PHI and that you have documented it on a by-patient basis. To send statements via email without worrying about permission, use a secure service like ClaimConnect.

## Technical Details

Open Dental supports modern secure cryptographic protocols that provide communication security over computer networks. The browser interfaces for eServices utilize the Transport Layer Security (TLS) 1.2 protocol as defined by RFC 5246 and further refined by RFC 6176 to remove backward compatibility with Secure Sockets Layer (SSL) such that TLS sessions never negotiate the use of SSL version 2.0.

Secured data transmitted to and from customers and patients is and remains secure in transit. Open Dental has never used OpenSSL or any other vulnerable SSL implementation. Heartbleed ([heartbleed.com](http://heartbleed.com/)) is a much publicized security flaw in OpenSSL announced on April 7, 2014 that had been vulnerable for about two years. Open Dental services that transmit data do not and have never used OpenSSL and do not have this weakness. Open Dental uses Microsoft's Internet Information Services or IIS instead, which is not affected and remains secure.