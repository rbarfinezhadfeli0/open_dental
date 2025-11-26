Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

API Setup

If you are an Open Dental customer, a third-party developer might want to work with you to enable your database for 2-way communication. Those instructions are documented below. If you are a third-party developer, you should first see the [API Specification](../site/apispecification.html).

We recommend having a Business Associate Agreement (BAA) in place with a third-party developer before entering the API key. Many third-party programs gather and retain Protected Health Information (PHI), so a BAA will assist with [HIPAA](https://opendental.com/site/hipaa.html) compliance.

## Customer Setup

In the [Main Menu](mainmenu.html), click Setup, Advanced Setup, **API**.

![](images/apisetup.png)

* **Enabled**: Check to enable 2-way communication from this customer database.
* **Process subscription interval**: Only for FHIR subscriptions.
* **Payment type for created payments**: The payment type associated with payments made from the API. See [Definitions: Payment Types](definitionspaymenttypes.html).

**Add Key**: Click to add a new API key.
![](images/apiKeyAssign.png)

When adding a new key, a license agreement displays. Accept the agreement to continue. Accepting a license is logged in the Audit Trail.

![](images/apiKeyAccept.png)

Double-click an existing key to edit.

![](images/apiKeyEdit.png)

## FHIR

FHIR is an older alternative to our API. It's designed for interfacing with certain medical software, but is not otherwise useful. The latest version is FHIR Version 19.4, also known as our FHIR Version 2. This version remains compatible with all future versions of Open Dental. Development has stopped on this interface, although we have no plans to remove it.
[Open Dental FHIR Interface Specifications for 19.4 (pdf)](../resources/OpenDentalFHIR19-4Spec.pdf)