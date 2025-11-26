Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

BCBS Nebraska E-Claims

BCBS Nebraska is an E-Claims Direct Carrier.

In [Clearinghouses](clearinghouses.html), click **Add**.

![](images/eclaimsBCBSnebraska.png)

The BCBS Nebraska clearinghouse must be manually added to Open Dental. Website: <http://www.bcbsneprovider.com/NEBLUEconnect/contacts.asp>.

## Setup

Set up the clearinghouse as follows:

* **Description**: Enter *NEBLUECONNECT*.
* **Clearinghouse ID**: Enter *NEBLUECONNECT*.
* **GS03**: Enter *NEBLUECONNECT*.
* **Claim Export Path**: Typically **C:\NEBLUECONNECT**.
* **Format**: Select *x837D\_5010\_dental*.
* **Comm Bridge**: Set to *None*.
* **Payors:** Add payor 00760.

Providers must have a supplemental [Provider](providerseditwindow.html) ID added for BlueShield and Electronic ID 00760. Use the provider ID assigned by BCBS.

## Claims

Upload claims using the BCBS website.