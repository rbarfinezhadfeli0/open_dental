Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Excel

These steps are provided as a courtesy. Open Dental support technicians do not assist with Microsoft Excel spreadsheets.

There are two options for using Open Dental data in an Excel spreadsheet, generate a [User Query](queryoverview.html) and export the result or link directly to the database.

## Query Export

Users can generate a query from within Open Dental and export the resulting table. It will normally be saved as a text file in the OpenDentalExports folder on the local **C:\** drive. The first row of the text file will contain the names of the columns, and the fields are separated by tabs. This makes it very easy to open in Excel. In Excel, select Data, Import External Data, Import Data to bring up the Select Data Source dialog:

![](images/WordDataSource.gif)

Find the OpenDentalExports folder in the file list, and click the name of the text file exported from Open Dental. The Text Import Wizard has three windows that come up.

1. In window 1, select Delimited.
2. In window 2, select Tab.
3. In window 3, select General.
4. Then click Finish and select where to place the data.

The entire table is now loaded into the worksheet and can be manipulated as needed.

## Direct Link

This is not normally needed as the text import is simpler, however, instructions are still provided in case they are needed. First, set up the [ODBC](odbc.html) on the computer where the data will be accessed. Then, open Excel and open the Select Data Source dialog as shown above. Select New Source at the bottom.

![](images/WordDataConnect.gif)

Select Other/Advanced, and click Next.

![](images/WordDataLink.gif)

Select OpenDental from the data source list and enter the username and password. Click Test Connection to verify there is a good connection. Select a table from the list and select the new data source that has been created. The table will be loaded into the spreadsheet for further manipulation.