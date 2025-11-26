# File: ./www.opendental.com/manual232/encryptionbitlocker.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - BitLocker Encryption</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('encryptionbitlocker','encryption','securitycomputers','computernetworksetup','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/encryptionbitlocker.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/encryptionbitlocker.html" >v24.2</option><option value="https://www.opendental.com/manual241/encryptionbitlocker.html" >v24.1</option><option value="https://www.opendental.com/manual233/encryptionbitlocker.html" >v23.3</option><option value="https://www.opendental.com/manual232/encryptionbitlocker.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/encryptionbitlocker.html" >v23.1</option><option value="https://www.opendental.com/manual224/encryptionbitlocker.html" >v22.4</option><option value="https://www.opendental.com/manual223/encryptionbitlocker.html" >v22.3</option><option value="https://www.opendental.com/manual222/encryptionbitlocker.html" >v22.2</option><option value="https://www.opendental.com/manual221/encryptionbitlocker.html" >v22.1</option><option value="https://www.opendental.com/manual214/encryptionbitlocker.html" >v21.4</option><option value="https://www.opendental.com/manual213/encryptionbitlocker.html" >v21.3</option><option value="https://www.opendental.com/manual212/encryptionbitlocker.html" >v21.2</option><option value="https://www.opendental.com/manual211/encryptionbitlocker.html" >v21.1</option><option value="https://www.opendental.com/manual205/encryptionbitlocker.html" >v20.5</option><option value="https://www.opendental.com/manual204/encryptionbitlocker.html" >v20.4</option><option value="https://www.opendental.com/manual203/encryptionbitlocker.html" >v20.3</option><option value="https://www.opendental.com/manual202/encryptionbitlocker.html" >v20.2</option><option value="https://www.opendental.com/manual201/encryptionbitlocker.html" >v20.1</option><option value="https://www.opendental.com/manual194/encryptionbitlocker.html" >v19.4</option><option value="https://www.opendental.com/manual193/encryptionbitlocker.html" >v19.3</option><option value="https://www.opendental.com/manual192/encryptionbitlocker.html" >v19.2</option><option value="https://www.opendental.com/manual191/encryptionbitlocker.html" >v19.1</option><option value="https://www.opendental.com/manual184/encryptionbitlocker.html" >v18.4</option><option value="https://www.opendental.com/manual183/encryptionbitlocker.html" >v18.3</option><option value="https://www.opendental.com/manual182/encryptionbitlocker.html" >v18.2</option><option value="https://www.opendental.com/manual181/encryptionbitlocker.html" >v18.1</option><option value="https://www.opendental.com/manual174/encryptionbitlocker.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>BitLocker Encryption</p></div>
<div class="GeneralPageContent">
<p>Open Dental does not provide technical support for <a href="encryption.html">Encryption</a>. For assistance, consult your IT professional. The information below is provided as a resource for your IT professional to help make encryption decisions. It is not for regular users.</p>
<p>BitLocker is a simple, powerful, encryption solution that will protect an entire hard drive. Users will not notice it because you do not specify protection by file or folder, but the entire drive. BitLocker Drive Encryption is only available for certain Microsoft Operating Systems. See <a href="encryption.html">Encryption of Data at Rest and in Transit</a> for information on why encryption is important for health care organizations.</p>
<p>Before implementing BitLocker, see Microsoft's website for authorized information and instructions about BitLocker for your operating system. Each operating system may have different instructions.</p>
<p>At Open Dental, we have implemented BitLocker for data encryption. This page provides unofficial instructions to encrypt Open Dental data, and is also general enough to be useful for systems where Open Dental is not used. After installation, interaction is not required unless you are making hardware changes to your system.</p>
<h2>Operating Systems that include BitLocker</h2>
<p> Any Windows version that Open Dental supports includes BitLocker. See <a href="https://opendental.com/site/computerrequirements.html">Computer Requirements</a> for supported operating systems.</p>
<p>For details, see <a href="https://docs.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview">Microsoft BitLocker Overview</a>.</p>
<h2>Mandatory BitLocker Prerequisites</h2>
<p>Clarification on these requirements should be obtained from Microsoft.</p>
<ul>
<li>Supported operating system.</li>
<li>Minimum of 1.5GB of available disk space (may be unallocated or available for reallocation from an existing partition).</li>
<li>A BIOS which supports clearing of system RAM on reboot.</li>
<li>Disk partition requirements (this can be handled with the BitLocker Preparation Tool from Microsoft (see below)). We mention this here because in practical terms it meant that we used a new machine, not our current primary server which already had multiple partitions that did not meet the requirement).</li>
</ul>
<br/><h2>Optional BitLocker Requirements</h2>
<p>If you do not have Trusted Platform Module (TPM), you will need to use a portable USB drive (like a thumb drive) in order to power cycle your computer. We do not recommend or cover that option. See Trusted Platform Module below for directions on how to check for and activate TPM on your computer.</p>
<ul>
<li>Trusted Platform Module (TPM) Chip (hardware)</li>
<li>Trusted Computing Group BIOS</li>
</ul>
<br/><h2>Implementing BitLocker</h2>
<ol>
<li>First create a backup of all data on the machine. Make sure you can reinstall the operating system, if needed.</li>
<li>Enable BitLocker feature of Windows, if needed. The steps to enable BitLocker may differ by operating system. For example: <ul>
<li>If you do not see the feature, re-check your operating system version or contact Microsoft for support. If prompted, reboot your system.</li>
</ul>
</li>
<li>Download and run <a href="https://www.microsoft.com/en-us/download/details.aspx?id=7806">BitLocker Preparation Tool</a>, available on the Microsoft website. You will need to reboot your system. For Windows servers, while in test or pre-production you may need to turn off Internet Explorer Enhanced Security from the desktop. This security feature is usually turned on, but can make it difficult to use internet browsers and prevent some Microsoft downloads. <div class="Note">Note: <p class="MarginBottomZero">Details about why you need the BitLocker Preparation Tool: BitLocker requires two partitions or volumes on the hard disk drive, and not partitions that you likely have. One is called the system volume and contains unencrypted system boot data. The other partition is the operating system volume. This is the partition which is encrypted and contains the operating system, user data and your patient data. Your system volume has to be at least 1.5GB in size and must be created before proceeding with the BitLocker Drive Encryption. This volume can be created one of three ways:  </p>
<ol class="MarginBottomGap">
<li>use unallocated space on a hard drive,</li>
<li>take space from an existing volume, or</li>
<li>merge the boot files onto an another existing volume other than the operating system volume.</li>
</ol>
</div>
<p>If you have multiple partitions on a single physical hard drive already, you may need to reinstall your operating system. Luckily, you do not need to understand the above completely because in order to ease the process of creating the system volume, Microsoft provides the BitLocker Driver Preparation Tool.</p>
</li>
<li>Turn On BitLocker. <p class="MarginBottomZero">BitLocker status on your system may be viewed and controlled from the BitLocker Control Panel which is accessed from your system Control Panel. </p>
<ol class="MarginBottomGap">
<li>You will see a very simple interface where your only option is to Turn on BitLocker Encryption. If you see something else like "A TPM was not found. A TPM is required to turn on BitLocker. If your computer has a TPM, then contact the computer manufacturer for a BitLocker-compatible BIOS" then see Mandatory BitLocker Prerequisites above and Trusted Platform Module (TPM) below. If you see the message "This device can't use a Trusted Platform Module...", you also need to turn TPM on.</li>
<li>Select <b>Turn on BitLocker Encryption</b>. A dialog will warn you that BitLocker Encryption decreases performance and allow you to cancel.</li>
<li>Select <b>Continue with BitLocker Drive Encryption</b>.</li>
<li>Set BitLocker startup preferences as desired. If you are prompted to enter a memory stick, then you did not have TPM enabled or chose the option of using a USB startup key. We do not recommend because it is a pain, but you may continue: insert a removable USB memory device into a USB port when prompted, then Save to save the Startup key to the device.</li>
<li>You will be prompted to save a recovery key. You will need this to unlock the system if you have to move the hard drive to another system, or if BitLocker detects a problem with the integrity of the system. If you used a memory stick for your startup key, do not save the recovery password on the same USB device as the startup key, but instead insert a different device. It is recommended that multiple copies of the password be kept. It is also advised that the password be printed out and kept safely on file. We only printed it; if you choose to just write it down, you should have someone check what you wrote.</li>
<li>After saving the recovery password, click Next.</li>
<li>Make sure that <b>Run BitLocker system check</b> is set and click Continue.</li>
<li>Your system will restart and encrypt the drive. There is a dialog with a progress bar.</li>
<li>You will be required to enter startup key or PIN (depending on configuration settings) on next boot.</li>
</ol>
</li>
</ol>
<p>Group Policy Settings for BitLocker: These policy settings allow BitLocker to be used without a TPM or to change BitLocker configuration if your system does have TPM. We do not cover this here and we did not use Group Policy Settings for BitLocker in our implementation.</p>
<p>Disabling BitLocker: Use BitLocker Control Panel from your system Control Panel to temporarily or permanently disable encryption.</p>
<h2>Activate Trusted Platform Module (TPM)</h2>
<p>You only need this section if you need to find out if your computer has TPM, or you wish activate TPM.</p>
<ol>
<li>Open BitLocker Drive Encryption by clicking Start, Control Panel, Security, BitLocker Drive Encryption. If you are prompted, type an administrator password or provide confirmation.</li>
<li>If the TPM administration link appears in the left pane, your computer has the TPM security hardware. If this link is not present, you will need a removable USB memory device to turn on BitLocker and store the BitLocker startup key that you'll need whenever you restart your computer.</li>
</ol>
<br/><p>Alternate method of checking if you have TPM hardware: BitLocker may not be turned on. To check, enter tpm.msc in Run window.</p>
<img src="images/tpm1.png" width="774" height="529"/><div class="Note">Note: <p>Activate TPM in the BIOS: If TPM is not turned on in the BIOS, you may have to activate from BIOS. The BIOS interface may differ from the screen shot examples below depending on your computer.</p>
<img src="images/tpmAlt.jpg" width="448" height="336"/></div>
<p>Then go to Control Panel, Device Manager, Security Devices (newer Windows OS) or System Devices (older Windows OS) and look for it. It may look something like this:</p>
<img src="images/tpm3.png" width="330" height="79"/><div class="Note">Note: With some BIOS, you may need to turn on TPM feature in BIOS but NOT activate it. Leave it disabled and you will still see it when you go back into windows and run tpm.msc. Then you can activate it from there and restart. If you activated in BIOS and Windows was not be able to start, then reboot, go into BIOS to set it back to off, reboot, then go back into BIOS and turn on, but do not activate it.</div>
<p>Activate TPM in Dell Server's BIOS For Dell Server's BIOS, go to System BIOS, System Security.</p>
<img src="images/bitlockerDellBios.gif" width="700" height="257"/><p>For TPM Security, select On without Pre-Boot Measurements. For TPM Activation, select Activate. Click Save and restart Windows.</p>
<p>Activate TPM in Windows To activate TPM in Windows, or to just run the BitLocker wizard, enter tpm.msc in the Run window.</p>
<img src="images/TPM2b.png" width="915" height="668"/><p>Click <b>Initialize TPM</b> in the Actions panel.</p>
<img src="images/tpm3b.png" width="549" height="424"/><p>Enter your password and confirm. If you used a memory stick for your startup key, do not save the password on the same USB device as the startup key, but instead insert a different device. It is recommended that the password be printed out and kept safely on file. If you choose to just write it down, have someone check what you wrote.</p>
<p>Click <b>Initialize</b> to complete the initialization.</p>
<img src="images/tpm4.png" width="549" height="424"/></div>
</div>
</body>
</html>```
