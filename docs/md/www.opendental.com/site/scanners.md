Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Scanners

See [Network and Computer Setup](computernetworksetup.html).

For ordinary scanning that does not require transparencies, nearly any scanner with an installed TWAIN driver works with the [Imaging Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7images.html). This page discusses known successes and problems with various scanners.

## Successful Scanners

The following scanners are known to work well with Open Dental.

**Known to work for duplex (multi-page) scanning**:

* Fi-8170
* Fi-8270
* Fi-8040
* Epson DS-320
* Epson Workforce DS-510

## Unsuccessful Scanners

The following scanners have reported problems when scanning in Open Dental.

**Known to have problems**:

* DocketPORT 488: Multi-page scanning doesn't work.
* Fujitsu ScanSnap: It does not have a flatbed for radiographs. It uses OCR (Optical Character Recognition) and advanced software to scan directly to PDF instead of JPG.

## Transparency Scanners

To use a transparency scanner, scan using the scanner software and then import the image into Open Dental.

## Troubleshooting Scanners

* Check to make sure the scanner can be used outside of Open Dental (e.g., Windows Fax and Scan). If the scanner doesn't work outside of Open Dental, it will not work inside of Open Dental.
* Check to see if the scanner came with a TWAIN or WIA driver. If not, install a generic TWAIN driver.
* Try to update the driver from the manufacturer's website. If driver update fails, try using Microsoft Update.
* Sometimes, newer drivers are not well tested by the manufacturer and can cause unpredictable scanning results (Open Dental hanging after one scan, or Open Dental taking up 50% of the CPU waiting for the scanner, etc.). In this case, installing an older more stable driver can sometimes fix the issue. For example, the Epson GT-S50 issue was resolved by installing drivers from the CD.