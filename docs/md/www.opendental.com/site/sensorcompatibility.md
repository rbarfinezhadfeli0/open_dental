Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Sensor Compatibility

Digital radiography sensors are added in [Imaging Devices](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7imagingdevices.html) for use in the [Imaging Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7images.html).

Note: Instead of directly using sensors, you also have the option of using a [Program Link](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7programlinks.html) to 3rd party software.

## Tested

Any sensor with a 32-bit TWAIN driver should be compatible, but we have not tested them all. The following sensors have been reported by users to work well with Open Dental.

[XDR](sensorsxdr.html)

CareStream RVG

VaTech

Jazz

Quickray

Apex Sensor

[NewTom](sensornewtom.html)

[Schick](sensorschick.html)

As of 12/31/2024, Dentsply Sirona is discontinuing support for the drivers below. Contact us if you need assistance obtaining a driver.

[Digital Doc Blu](https://www.youtube.com/watch?v=KqLc16349C8)

Gendex - works, but Twain driver might be hard to get. Might need to pay a lot or get it from your local equipment dealer.

Woodpecker H1 and H2. Twain driver is available online. Support is out of China.

Tuxedo

Kavo panoramic

Belmont Bel-Cypher panoramic

Air Techniques [Scan X](scanx.html)

DentiMax

## Untested

[Sota Clio](sensorssotaclio.html)

## Known Issues

iRay sensor: 6/5/2023 We have two complaints about the software crashing. But when the sensors are tested with EZDent and Twacker, they do the same thing. This indicates that it's not a problem with our software, but with the TWAIN driver supplied by iRay. There's nothing we can do.

XVDental: 9/25/2024 Can close unexpectedly if the twain driver was set to Radiograph. So we recommend setting type to Multi. This will sort of work. It doesn't send the images back to Open Dental until the third image is taken. So it's sort of confusing where you are in the mount. If you accidentally take more images than needed, all the extra images are still sent back to Open Dental in the unmounted section so you can still rearrange as needed.

## Setup

If there isn't a setup page above for your sensor, here's the basic strategy. Install the TWAIN driver provided by the sensor manufacturer. Add the sensor in [Imaging Devices](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7imagingdevices.html). Make sure to check the box for "Show TWAIN UI".

![](images/imagingDeviceEdit.png)

If you attempted to take radiographs without this box checked, then you may need to check the box and restart Open Dental. Your TWAIN software might have a few different options. An important setting is the difference between a single capture and a series. Always set it to single capture. That way, control gets returned to Open Dental after each image. Then, Open Dental relaunches the TWAIN interface for the next single image. This gives you a chance to see each image in Open Dental and it also gives you a place to cancel the capture within the TWAIN software.