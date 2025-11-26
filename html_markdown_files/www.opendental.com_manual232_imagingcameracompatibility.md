# File: ./www.opendental.com/manual232/imagingcameracompatibility.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Imaging Camera Compatibility</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('imagingcameracompatibility','images','modules','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/manual243/imagingcameracompatibility.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/imagingcameracompatibility.html" >v24.2</option><option value="https://www.opendental.com/manual241/imagingcameracompatibility.html" >v24.1</option><option value="https://www.opendental.com/manual233/imagingcameracompatibility.html" >v23.3</option><option value="https://www.opendental.com/manual232/imagingcameracompatibility.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/imagingcameracompatibility.html" >v23.1</option><option value="https://www.opendental.com/manual224/imagingcameracompatibility.html" >v22.4</option><option value="https://www.opendental.com/manual223/imagingcameracompatibility.html" >v22.3</option><option value="https://www.opendental.com/manual222/imagingcameracompatibility.html" >v22.2</option><option value="https://www.opendental.com/manual221/imagingcameracompatibility.html" >v22.1</option><option value="https://www.opendental.com/manual214/imagingcameracompatibility.html" >v21.4</option><option value="https://www.opendental.com/manual213/imagingcameracompatibility.html" >v21.3</option><option value="https://www.opendental.com/manual212/imagingcameracompatibility.html" >v21.2</option><option value="https://www.opendental.com/manual211/imagingcameracompatibility.html" >v21.1</option><option value="https://www.opendental.com/manual205/imagingcameracompatibility.html" >v20.5</option><option value="https://www.opendental.com/manual204/imagingcameracompatibility.html" >v20.4</option><option value="https://www.opendental.com/manual203/imagingcameracompatibility.html" >v20.3</option><option value="https://www.opendental.com/manual202/imagingcameracompatibility.html" >v20.2</option><option value="https://www.opendental.com/manual201/imagingcameracompatibility.html" >v20.1</option><option value="https://www.opendental.com/manual194/imagingcameracompatibility.html" >v19.4</option><option value="https://www.opendental.com/manual193/imagingcameracompatibility.html" >v19.3</option><option value="https://www.opendental.com/manual192/imagingcameracompatibility.html" >v19.2</option><option value="https://www.opendental.com/manual191/imagingcameracompatibility.html" >v19.1</option><option value="https://www.opendental.com/manual184/imagingcameracompatibility.html" >v18.4</option><option value="https://www.opendental.com/manual183/imagingcameracompatibility.html" >v18.3</option><option value="https://www.opendental.com/manual182/imagingcameracompatibility.html" >v18.2</option><option value="https://www.opendental.com/manual181/imagingcameracompatibility.html" >v18.1</option><option value="https://www.opendental.com/manual174/imagingcameracompatibility.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Imaging Camera Compatibility</p></div>
<div class="GeneralPageContent">
<p>In the <a href="images.html">Imaging Module</a>, in the Toolbar, click Video.</p>
<p>Any webcam or intraoral camera should be compatible but we have only tested a few. </p>
<h2>Capture Button</h2>
<p>Intraoral cameras have a button on them for image capture. Most cameras come with driver software that will generate a keyboard button press when the Capture button is pressed. Different dental imaging software products can use different default key inputs. Open Dental uses the "space" key, which is also used by Apixia, Apteryx, Dentimax, EvaSoft, OneView, Sigma, Suni, Vatech ezdent, XDR, and XLDent. There might be a rare camera where it is not possible to map to the space key, so we list specific tested cameras below.</p>
<h2>Tested</h2>
<p><b>WebCams:</b> Any webcam should work. The one we happened to use for testing was a Microsoft LifeCam HD-3000, but there's nothing special about that model.</p>
<p><b>ProDent PD740: </b>This is a cheap intraoral camera manufactured in China and available online. There are many different brands and models that would all be expected to work, including Daryou. To make the capture button work, install their ProDent Capture software from <a href="https://www.prodentshop.com/pages/prodent-capture">https://www.prodentshop.com/pages/prodent-capture</a>. </p>
<p><b>CariVu:</b> caries detector camera.</p>
<h2>Issues</h2>
<p><b>MD740:</b> There is a complaint from one customer that the live video has a 3 second lag.</p>
<h2>Known Incompatible</h2>
<p>None</p>
</div>
</div>
</body>
</html>```
