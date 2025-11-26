Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Source Code

See [Advanced Topics](advancedtopics.html)

The source code is sometimes made available to certain large customers under a signed Non Disclosure Agreement.

**REQUIREMENT**: You must first install the [Trial Version](trial.html) so you can see the files involved in the installation process. This is the ONLY way to get the initial database tables installed. Then you can later attempt to compile the source code files.

* See [Programming Resources](programmingresources.html) for database documentation.
* See [Previous Versions](https://opendentalsoft.com:1943/ODBugTracker/PreviousVersions.aspx) for changes have been made since the last version.

### Getting Started

<https://github.com/OpenDental>
 There is a separate branch for each Major/Minor version. Check out the branch you are interested in. We no longer post the Main (head) because it's not stable and we don't want someone to use it in a patient setting.

### Build

It will take a few hours to set up the proper environment and to understand the issues below. But it only needs to be done once.

**IDE** - Use Visual Studio 2019 on MS Windows computers.

* (there are some versions around 17 and 18 that use VS 2017)
* Open Dental versions 15.3 and greater, use Visual Studio 2012 or 2015.
* Open Dental versions 12.4 to 15.2, use Visual Studio 2012.
* Open Dental versions 7.4 to 12.3, use Visual Studio 2010.
* Open Dental versions 7.3 and earlier, use Visual Studio 2008.

**ResGen.exe Error** - You do not need to understand this error. Just know that Open Dental will not compile unless you follow these steps:

1. Go to Start Menu, All Programs, Accessories, and right click on Command Prompt. Run as Admin.
2. If C:\Program Files (x86) exists (if you are using a 64 bit OS), copy and paste:
   Cd "C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\Bin"
    then Enter. If, instead, you are using a 32 bit OS, copy and paste:
   Cd "C:\Program Files\Microsoft SDKs\Windows\v7.0A\Bin"
    then Enter.
3. Copy and paste:
   Corflags /32Bit+ /Force ResGen.exe
    then Enter. If successful, you will see about 5 lines of text, including "warning CF011: The specified file is strong name signed".
4. If you are using C# Express and can't get past step 3 due to a missing Corflags.exe, also look the the subfolder "NETFX 4.0 Tools". If you can't find Corflags.exe on your computer, here's a copy: [CorFlags.txt](../resources/CorFlags.txt). After downloading it to the folder location described in step 2, rename it to CorFlags.exe, then try step 3 again. Let us know on the forum if that works or not.
5. Try to build Open Dental. If it fails with ResGen.exe errors, then confirm in your configuration manager that your build platform is x86, not AnyCPU. If it still fails, you may need to delete your .suo file and then reset your configuration.
    For more details on the entire ResGen.exe error issue, see <https://devblogs.microsoft.com/visualstudio/resgen-exe-error-an-attempt-was-made-to-load-a-program-with-an-incorrect-format/>.

**DirectX** - Open Dental won't compile unless the DirectX SDK is installed. There is a link to the SDK on the [Graphics](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7graphics.html) page.

**Configuration Manager** - Right click on the solution, and pick Configuration Manager. Solution configuration can be either Debug or Release, but Debug should not be used in a live setting because instead of printing, it will show print jobs on the screen. Solution platform should be x86. If you accidentally try to use the Any CPU configuration platform, it will crash when closing any window. For whichever configuration you choose to run, make sure that all (or most) projects are set to build by checking all the boxes.

**Loader Lock -** Visual Studio has a bug when working with DirectX. The symptoms are that the program will compile, but will then crash when loading the 3D chart with an error about a LoaderLock detected. The solution is to disable the MDA debugger like this: Main menu, Debug, Windows, Exception Settings, Managed Debugging Assistants, Loader Lock, uncheck. For older versions of VS, disable it like this: Main menu, Debug, Exceptions, Managed Debugging Assistants, Loader Lock, uncheck.

**MySQL Connector** - Installing this on your development machine will prevent compile errors in the Web Forms project. Even if this is not installed, the solution will compile and the other projects will run fine, but the error messages during compile are annoying. [mysql-connector-net-6.3.7.msi](../resources/mysql-connector-net-6.3.7.msi) Install using the Complete option. If you still get the annoying errors, restart your machine, and possibly uninstall and reinstall the MySQL Connector; it can be flakey. A typical WebForm compile error that this will fix has to do with a "provider store" problem with the **ODWebServiceModel.edmx** file.

**MS Enterprise Library** - Not needed. Here for reference. The Web Forms project depends on this library, but you should not need to install this library because we've included the dll's in the project. For reference, the library came from
<https://marketplace.visualstudio.com/items?itemName=akMSFT.MicrosoftEnterpriseLibrary>
 If you do install it for some reason, towards the end of the installation, you can uncheck the box for the Source Installer.

**Error: Mixed mode assembly** etc. We have already altered the app.config file for the Open Dental project to handle one of these errors. If you look closely at the remaining error, the filename is SGEN, which is an MS exe that generates a serialization assembly. The quick fix for this error is to right click the OD project, properties, build tab, and at the bottom, change 'generate serialization assembly' to off. This will, however, result in Open Dental running a little slower. A better fix is to find the sgen.exe, for example at "C:\Program Files\Microsoft SDKs\Windows\v7.0A\bin\NETFX 4.0 Tools\sgen.exe. Once you find it, create (or possibly alter) an sgen.exe.config to look like this:

```
<?xml version ="1.0"?>
<configuration>
    <startup useLegacyV2RuntimeActivationPolicy="true">
       <supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.0"/>
    </startup>
</configuration>
```

Visual Studio Professional 2012: This error can occur when you compile in Release mode with the 'Generate serialization assembly' flag turned on. To fix this error, create an sgen.exe.config file and place it in every folder where there is an sgen.exe file.

Possible sgen.exe locations (note the x86 paths that contain x64 folders):
 C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0A\bin\NETFX 4.0 Tools\x64
 C:\Program Files (x86)\Microsoft SDKs\Windows\v8.0A\bin\NETFX 4.0 Tools
 C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\Bin\NETFX 4.0 Tools\x64
 C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\Bin\NETFX 4.0 Tools
 C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\Bin\x64
 C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\Bin
 C:\Program Files\Microsoft SDKs\Windows\v6.0A\Bin\x64
 C:\Program Files\Microsoft SDKs\Windows\v6.0A\Bin
 C:\Program Files\Microsoft SDKs\Windows\v7.1\Bin\NETFX 4.0 Tools\x64
 C:\Program Files\Microsoft SDKs\Windows\v7.1\Bin\NETFX 4.0 Tools
 C:\Program Files\Microsoft SDKs\Windows\v7.1\Bin\x64
 C:\Program Files\Microsoft SDKs\Windows\v7.1\Bin

**Hunspell dll** - As of v13.1, Open Dental now has spell check functionality. Spell checking is handled by NHunspell. There are three dll files added to the Required dlls folder: NHunspell.dll, Hunspellx86.dll, Hunspellx64.dll. The Hunspellx86.dll and Hunspellx64.dll files must be manually copied into the "...head\OpenDental\bin\Debug" and "...head\OpenDental\bin\Release" folders.

**Error: The name 'OpenDentalHelp' does not exist in the current context** - In the OpenDental project, remove the OpenDentalHelp reference. Then right-click on "References" -&gt; "Add Reference". Select the Browse dropdown and the Browse button. Locate the OpenDentalHelp.dll within the "Required dlls" folder and click Add.

**Error: The name 'OpenDental.Thinfinity' does not exist in the current context** - In the OpenDental project, remove the VirtualWeb reference. Then right-click on "References" -&gt; "Add Reference". Select the Browse dropdown and the Browse button. Locate the VirtualWeb.dll within the "Required dlls" folder and click Add."

**Button graphics missing. -** As of 20.4 we have a project called Direct2dWrapper. This has a C++ dependency that needs to be installed in order for some graphics in Open Dental to display properly. The user may also need to make sure that the project builds properly and that the DLL is in the appropriate bin location.

See the [Programming Resources](programmingresources.html) page, Source Code section for information on installation, distribution, versions, dll's, etc.

### Programming

Here are some useful links related to programming.

[Plug-in](plugins.html).

**Bug Tracker** - We have our own bug tracking software that we built. See [Previous Versions](https://opendentalsoft.com:1943/ODBugTracker/PreviousVersions.aspx). The bug tracker is for our own internal use, although everyone can view it. We heavily manage the bug database to keep it very current.

Consider using such features as [Display Fields](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7displayfields.html) and [Custom Patient Fields](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7custompatientfields.html) instead of doing customized programming.