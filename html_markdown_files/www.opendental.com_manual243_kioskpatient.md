# File: ./www.opendental.com/manual243/kioskpatient.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Kiosk</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('kioskpatient','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/kioskpatient.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/kioskpatient.html" >v24.2</option><option value="https://www.opendental.com/manual241/kioskpatient.html" >v24.1</option><option value="https://www.opendental.com/manual233/kioskpatient.html" >v23.3</option><option value="https://www.opendental.com/manual232/kioskpatient.html" >v23.2</option><option value="https://www.opendental.com/manual231/kioskpatient.html" >v23.1</option><option value="https://www.opendental.com/manual224/kioskpatient.html" >v22.4</option><option value="https://www.opendental.com/manual223/kioskpatient.html" >v22.3</option><option value="https://www.opendental.com/manual222/kioskpatient.html" >v22.2</option><option value="https://www.opendental.com/manual221/kioskpatient.html" >v22.1</option><option value="https://www.opendental.com/manual214/kioskpatient.html" >v21.4</option><option value="https://www.opendental.com/manual213/kioskpatient.html" >v21.3</option><option value="https://www.opendental.com/manual212/kioskpatient.html" >v21.2</option><option value="https://www.opendental.com/manual211/kioskpatient.html" >v21.1</option><option value="https://www.opendental.com/manual205/kioskpatient.html" >v20.5</option><option value="https://www.opendental.com/manual204/kioskpatient.html" >v20.4</option><option value="https://www.opendental.com/manual203/kioskpatient.html" >v20.3</option><option value="https://www.opendental.com/manual202/kioskpatient.html" >v20.2</option><option value="https://www.opendental.com/manual201/kioskpatient.html" >v20.1</option><option value="https://www.opendental.com/manual194/kioskpatient.html" >v19.4</option><option value="https://www.opendental.com/manual193/kioskpatient.html" >v19.3</option><option value="https://www.opendental.com/manual192/kioskpatient.html" >v19.2</option><option value="https://www.opendental.com/manual191/kioskpatient.html" >v19.1</option><option value="https://www.opendental.com/manual184/kioskpatient.html" >v18.4</option><option value="https://www.opendental.com/manual183/kioskpatient.html" >v18.3</option><option value="https://www.opendental.com/manual182/kioskpatient.html" >v18.2</option><option value="https://www.opendental.com/manual181/kioskpatient.html" >v18.1</option><option value="https://www.opendental.com/manual174/kioskpatient.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Kiosk</p></div>
<div class="GeneralPageContent">
<p>The kiosk is a secure method for patients to fill out forms on a Windows device.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools,<b> Kiosk</b>.</p>
<img src="images/kioskPatient.png" width="915" height="708"/><p>Alternatively, in <a href="patientform.html">Patient Forms</a>, click Kiosk.</p>
<p> If the Kiosk was launched from the Main Menu, then this is a dedicated Kiosk computer. The patient forms are loaded into the Kiosk from the <a href="kiosk.html">Kiosk Manager</a>.</p>
<p>When the Kiosk is launched, the first form (Kiosk order of 1) shows. The kiosk takes up the entire screen, so patients have no access to any other programs on the computer, including Windows features such as task bars.</p>
<p>Pale yellow areas indicate where the patient should enter information. Free form drawing is possible. The Eraser tool can be used to erase drawn items. Patients can sign in signature boxes using a mouse or a touch screen with stylus.</p>
<p>To close one form and move to the next, patient clicks <b>OK</b>. When the last form is completed or user clicks <b>Cancel</b>, the Forms selection screen is displayed.</p>
<img src="images/kiosk.png" width="596" height="427"/><p>Double-click a form to edit or revise.</p>
<p class="MarginBottomZero">When forms are complete, patient clicks <b>Done</b>. </p>
<ul class="MarginBottomGap">
<li>If the Kiosk was launched from the <a href="kiosk.html">Kiosk Manager</a>, the forms list disappears, and a <i>Welcome</i> message is displayed. The device is still active as a kiosk in the Kiosk Manager, and a new patient can be loaded to the kiosk.</li>
<li>If the Kiosk was launched from the <a href="patientform.html">Patient Forms</a>, the forms list disappears, and <i>Thank You</i> displays on the screen. The device is not an active Kiosk. Close the Kiosk window to return to Patient Forms.</li>
</ul>
<h2>eClipboard</h2>
<p><a href="../site/eclipboard.html">eClipboard</a> is a more up-to-date method of completing patient forms. eClipboard is available on iOS and Android devices.</p>
<p>eClipboard can populate forms by default (see <a href="eclipboardsetup.html">eClipboard Setup</a>), however additional forms can be added for the patient. When additional forms are added, they are placed at the end of the queue, so they populate after the default forms have been completed. </p>
<h2>Patient Image</h2>
<p>If a form the patient is filling out on the Kiosk includes a <a href="sheetspatimage.html">Pat Image</a> field and no images exist in the selected Image Category, a blank box is displayed. </p>
<p>An image can be manually associated with the field before it is sent to the Kiosk. Go to <a href="patientform.html">Patient Forms</a>, double-click the form, and double-click the image box to select an image from another category. </p>
</div>
</div>
</body>
</html>```
