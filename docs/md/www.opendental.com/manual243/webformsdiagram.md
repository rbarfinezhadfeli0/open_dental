Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Web Forms Technical Diagram

See [Web Form Setup](webformsupload.html).

This diagram explains the background process / workflow when handling Web Forms.

![](images/webFormsDiagram.png)

**Dental Office Web Form Process**
 All steps are performed from within an instance of Open Dental.

1. The dental office manages Web Forms within the [Web Form Setup](webformsupload.html) window where Open Dental will directly communicate with the Host Server Address specified.
2. The dental office can use the Web Form Setup window to help construct URLs that patients will use to visit the WebForms.html page hosted by Open Dental Software.
3. The dental office provides a means to access these constructed URLs however they deem fit (redirects from their own websites, emails, etc).
4. The dental office will periodically check for web forms that have been filled out by patients via the Web Forms window.
5. Clicking the *Retrieve New Forms* button will directly communicate with the Host Server Address specified in step 1.
   * Retrieved web forms will be deleted from the HQ database.
   * See [Web Forms Retrieve](webformsretrieve.html)

**Browser Web Form Process**

1. Patient visits *https://patientviewer.com/...WebForms.html* provided by the dental office.
   * See [Web Forms: What Patient Sees](webformspatient.html).
2. The browser downloads the JavaScript necessary to interact with WebForms.html.
3. Patient interacts with WebForms.html in order to fill out the Web Forms.
4. Patient clicks the *Submit* button which calls a web service dedicated to the web app that is hosted by the same server that served the HTML host page as to not violate same origin policy (SOP).
   * See <https://en.wikipedia.org/wiki/Same-origin_policy> for more information.
5. All web forms are then stored within the HQ database until downloaded by the dental office, at which point they are deleted.