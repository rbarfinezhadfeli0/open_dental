Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Electronic Signatures

An electronic signature can be used much like a pen and paper signature. Each signature is electronically linked to the data it applies to and, if the data changes, the signature is invalidated or cleared.

In the [Procedure](procedureedit.html) Edit window, on the right, is a signature box.

![](images/signatureBox.png)

Electronic signatures are also available in various parts of Open Dental where there is a signature field or when added to supported [Sheets](sheets.html) .

## Options

When electronic signatures are available, a signature box shows with available options:

* ![](images/digitalSignature.png) Add a Digital Signature stamp for the logged-on user. Includes the text: *Digitally Signed by [logged-on user] Date Signed: [today's date and time]*.
  + Only visible for procedure notes if *Allow digital signatures* is turned on in [Preferences](preferences.html).
  + Only visible for Sheets if *Allow Electronic Signatures* is enabled for the Signature Box field.
  + If the logged-on user is attached to a provider, the provider name is shown. If the logged-on user is not attached to a provider, the username is shown.
  + Not available for Commlogs.
* ![](images/signatureTopaz.png) Sign with a Topaz signature pad. We recommend using a Topaz signature pad for electronic signatures. See below for additional information.
* ![](images/signatureX.png) Clear a signature.
* To sign without the Digital Signature stamp or Topaz pad, click into the signature box to sign using the mouse.
* If using a tablet or touch screen PC, users can also sign using the touch screen or a stylus. When signing with a stylus, information about the plotted points is recorded.

To only allow Procedure Note, Group Note, and Ortho Note signatures by [Providers](providers.html) enable the preference, *Notes can only be signed by providers.*

To only allow signatures by provider on a Sheet, enable *Restrict Signatures to Providers* in [Edit Signature Box Field](sheetssignature.html) window in [Edit Sheet Def](sheetsetup.html).

## Technical Details

* The electronic signature is cleared if a signed note is edited or the attached user is changed.
* In some areas (e.g., Commlog) only the logged-on user is linked to the signature. In other areas (e.g., Procedure Notes), the logged-on user can be overridden before signing.
* If electronically signing a [Patient Forms](patientform.html), the date and time of the signature is saved in the signature box.
* If data tied to a signature is changed behind the scenes (e.g., MySQL query), signatures are marked invalid instead of being cleared.
* Signatures created using a mouse or clicking the signature box are still valid electronic signatures, but with a mouse signature or click alone, it is not possible to verify the person signing.

## Topaz Signature Pads

Open Dental does not sell the Topaz signature devices. However to ensure compatibility, please make sure the model number ordered exactly matches a signature pad we recommend. We recommend purchasing new models only and verifying the warranty.

Topaz pads are not compatible with [Open Dental Cloud](https://opendental.com/site/opendentalcloud.html).

Purchase in the United States and Canada: [Topaz Website](https://www.topazsystems.com/wheretobuy-resellers.html)

Requirements: The pad purchased must be a 1 x 5 pad and it must have a model number ending in HSB or BSB. Those models are all USB types that use the human interface driver.

HSB model setup: See [Topaz HSB Model Setup](topazsetuphsb.html). This is our recommended signature pad model.

BSB model setup: See [Topaz BSB Model Setup](topazsetupbsb.html) .

Topaz Pad Recommendations: At this time, we strongly recommend a wired pad as we have not found a wireless pad that is functional.

| Recommended Pads | Model # | URL | $ |
| --- | --- | --- | --- |
| SigLite 1 x 5 This is a low cost pad that users sign blind, as it does not show ink on the screen as they sign. Because of this awkwardness, it is probably not suitable for patients, but it works fine for staff members who are signing procedure notes. The background is a dark blue rather than the medium blue pictured. | T-S460-HSB-R | ![](images/siglite.gif)[Topaz SigLite](https://www.topazsystems.com/siglite1x5.html) | ~ $100 |
| SigLite LCD 1 x 5 This pad has an LCD screen, so users can see the signature as they sign, just like on paper. It works very well, but is more expensive. The screen background is actually gray rather than backlit. | T-L460-HSB-R | ![](images/siglitelcd.gif)[Topaz SigLite LCD](https://www.topazsystems.com/siglite1x5.html) | ~ $200 |

Other pads may have extra features, such as backlighting or more durable surfaces. These pads work as long as they meet the Requirements listed above.

| Other Compatible Pads | Model # |
| --- | --- |
| [SignatureGem 1x5](http://www.topazsystems.com/products/siggem1x5.asp) | T-S261-HSB-R |
| [DeskGem1x5](http://www.topazsystems.com/products/deskgem.asp) | T-S981-HSB-R |
| [SignatureGem LCD 1x5](http://www.topazsystems.com/products/siggemlcd1x5.asp) | T-L462-HSB-R |
| [SignatureGem Backlit LCD 1x5](http://www.topazsystems.com/products/siggemlcd1x5.asp) | T-LBK462-HSB-R |
| [SigLite Slim 1x5](http://www.topazsystems.com/products/siglitesl.asp) | T-S461-HSB-R |
| [SigLite Backlit LCD 1x5](http://www.topazsystems.com/products/siglitelcd.asp) | T-LBK460-HSB-R |
| [SigLite 1x5](http://www.topazsystems.com/siglite1x5.html) | T-S460-BSB-R |
| Any of the IDGem series that are 1x5 and HSB. |  |