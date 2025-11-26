Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

BitLocker Encryption

Open Dental does not provide technical support for [Encryption](encryption.html). For assistance, consult your IT professional. The information below is provided as a resource for your IT professional to help make encryption decisions. It is not for regular users.

BitLocker is a simple, powerful, encryption solution that will protect an entire hard drive. Users will not notice it because you do not specify protection by file or folder, but the entire drive. BitLocker Drive Encryption is only available for certain Microsoft Operating Systems. See [Encryption of Data at Rest and in Transit](encryption.html) for information on why encryption is important for health care organizations.

Before implementing BitLocker, see Microsoft's website for authorized information and instructions about BitLocker for your operating system. Each operating system may have different instructions.

At Open Dental, we have implemented BitLocker for data encryption. This page provides unofficial instructions to encrypt Open Dental data, and is also general enough to be useful for systems where Open Dental is not used. After installation, interaction is not required unless you are making hardware changes to your system.

## Operating Systems that include BitLocker

Any Windows version that Open Dental supports includes BitLocker. See [Computer Requirements](https://opendental.com/site/computerrequirements.html) for supported operating systems.

For details, see [Microsoft BitLocker Overview](https://docs.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview).

## Mandatory BitLocker Prerequisites

Clarification on these requirements should be obtained from Microsoft.

* Supported operating system.
* Minimum of 1.5GB of available disk space (may be unallocated or available for reallocation from an existing partition).
* A BIOS which supports clearing of system RAM on reboot.
* Disk partition requirements (this can be handled with the BitLocker Preparation Tool from Microsoft (see below)). We mention this here because in practical terms it meant that we used a new machine, not our current primary server which already had multiple partitions that did not meet the requirement).

## Optional BitLocker Requirements

If you do not have Trusted Platform Module (TPM), you will need to use a portable USB drive (like a thumb drive) in order to power cycle your computer. We do not recommend or cover that option. See Trusted Platform Module below for directions on how to check for and activate TPM on your computer.

* Trusted Platform Module (TPM) Chip (hardware)
* Trusted Computing Group BIOS

## Implementing BitLocker

1. First create a backup of all data on the machine. Make sure you can reinstall the operating system, if needed.
2. Enable BitLocker feature of Windows, if needed. The steps to enable BitLocker may differ by operating system. For example:
   * If you do not see the feature, re-check your operating system version or contact Microsoft for support. If prompted, reboot your system.
3. Download and run [BitLocker Preparation Tool](https://www.microsoft.com/en-us/download/details.aspx?id=7806), available on the Microsoft website. You will need to reboot your system. For Windows servers, while in test or pre-production you may need to turn off Internet Explorer Enhanced Security from the desktop. This security feature is usually turned on, but can make it difficult to use internet browsers and prevent some Microsoft downloads.

   Note:

   Details about why you need the BitLocker Preparation Tool: BitLocker requires two partitions or volumes on the hard disk drive, and not partitions that you likely have. One is called the system volume and contains unencrypted system boot data. The other partition is the operating system volume. This is the partition which is encrypted and contains the operating system, user data and your patient data. Your system volume has to be at least 1.5GB in size and must be created before proceeding with the BitLocker Drive Encryption. This volume can be created one of three ways:

   1. use unallocated space on a hard drive,
   2. take space from an existing volume, or
   3. merge the boot files onto an another existing volume other than the operating system volume.

   If you have multiple partitions on a single physical hard drive already, you may need to reinstall your operating system. Luckily, you do not need to understand the above completely because in order to ease the process of creating the system volume, Microsoft provides the BitLocker Driver Preparation Tool.
4. Turn On BitLocker.

   BitLocker status on your system may be viewed and controlled from the BitLocker Control Panel which is accessed from your system Control Panel.

   1. You will see a very simple interface where your only option is to Turn on BitLocker Encryption. If you see something else like "A TPM was not found. A TPM is required to turn on BitLocker. If your computer has a TPM, then contact the computer manufacturer for a BitLocker-compatible BIOS" then see Mandatory BitLocker Prerequisites above and Trusted Platform Module (TPM) below. If you see the message "This device can't use a Trusted Platform Module...", you also need to turn TPM on.
   2. Select **Turn on BitLocker Encryption**. A dialog will warn you that BitLocker Encryption decreases performance and allow you to cancel.
   3. Select **Continue with BitLocker Drive Encryption**.
   4. Set BitLocker startup preferences as desired. If you are prompted to enter a memory stick, then you did not have TPM enabled or chose the option of using a USB startup key. We do not recommend this because it is a pain, but you may continue: insert a removable USB memory device into a USB port when prompted, then Save to save the Startup key to the device.
   5. You will be prompted to save a recovery key. You will need this to unlock the system if you have to move the hard drive to another system, or if BitLocker detects a problem with the integrity of the system. If you used a memory stick for your startup key, do not save the recovery password on the same USB device as the startup key, but instead insert a different device. It is recommended that multiple copies of the password be kept. It is also advised that the password be printed out and kept safely on file. We only printed it; if you choose to just write it down, you should have someone check what you wrote.
   6. After saving the recovery password, click Next.
   7. Make sure that **Run BitLocker system check** is set and click Continue.
   8. Your system will restart and encrypt the drive. There is a dialog with a progress bar.
   9. You will be required to enter startup key or PIN (depending on configuration settings) on next boot.

Group Policy Settings for BitLocker: These policy settings allow BitLocker to be used without a TPM or to change BitLocker configuration if your system does have TPM. We do not cover this here and we did not use Group Policy Settings for BitLocker in our implementation.

Disabling BitLocker: Use BitLocker Control Panel from your system Control Panel to temporarily or permanently disable encryption.

## Activate Trusted Platform Module (TPM)

You only need this section if you need to find out if your computer has TPM, or you wish activate TPM.

1. Open BitLocker Drive Encryption by clicking Start, Control Panel, Security, BitLocker Drive Encryption. If you are prompted, type an administrator password or provide confirmation.
2. If the TPM administration link appears in the left pane, your computer has the TPM security hardware. If this link is not present, you will need a removable USB memory device to turn on BitLocker and store the BitLocker startup key that you'll need whenever you restart your computer.

Alternate method of checking if you have TPM hardware: BitLocker may not be turned on. To check, enter tpm.msc in Run window.

![](images/tpm1.png)

Note:

Activate TPM in the BIOS: If TPM is not turned on in the BIOS, you may have to activate from BIOS. The BIOS interface may differ from the screen shot examples below depending on your computer.

![](images/tpmAlt.jpg)

Then go to Control Panel, Device Manager, Security Devices (newer Windows OS) or System Devices (older Windows OS) and look for it. It may look something like this:

![](images/tpm3.png)

Note: With some BIOS, you may need to turn on TPM feature in BIOS but NOT activate it. Leave it disabled and you will still see it when you go back into windows and run tpm.msc. Then you can activate it from there and restart. If you activated in BIOS and Windows was not be able to start, then reboot, go into BIOS to set it back to off, reboot, then go back into BIOS and turn on, but do not activate it.

Activate TPM in Dell Server's BIOS For Dell Server's BIOS, go to System BIOS, System Security.

![](images/bitlockerDellBios.gif)

For TPM Security, select On without Pre-Boot Measurements. For TPM Activation, select Activate. Click Save and restart Windows.

Activate TPM in Windows To activate TPM in Windows, or to just run the BitLocker wizard, enter tpm.msc in the Run window.

![](images/TPM2b.png)

Click **Initialize TPM** in the Actions panel.

![](images/tpm3b.png)

Enter your password and confirm. If you used a memory stick for your startup key, do not save the password on the same USB device as the startup key, but instead insert a different device. It is recommended that the password be printed out and kept safely on file. If you choose to just write it down, have someone check what you wrote.

Click **Initialize** to complete the initialization.

![](images/tpm4.png)