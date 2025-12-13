# Google Sheets Integration Setup

## Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "RyzaFit Waitlist"
4. In the first row, add headers:
   - A1: `Email`
   - B1: `Timestamp`
   - C1: `Source`

## Step 2: Add Google Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);

    // Extract email and timestamp
    var email = data.email;
    var timestamp = data.timestamp;
    var source = 'Landing Page';

    // Check for duplicate emails
    var dataRange = sheet.getDataRange();
    var values = dataRange.getValues();

    for (var i = 1; i < values.length; i++) {
      if (values[i][0] === email) {
        // Email already exists
        return ContentService
          .createTextOutput(JSON.stringify({ status: 'duplicate' }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }

    // Append new row with email and timestamp
    sheet.appendRow([email, timestamp, source]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function doGet(e) {
  return ContentService
    .createTextOutput('RyzaFit Waitlist API is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

4. Click **Save** (disk icon) and name the project "RyzaFit Waitlist API"

## Step 3: Deploy as Web App

1. Click the **Deploy** button > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure settings:
   - **Description**: RyzaFit Waitlist Webhook
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Review permissions and click **Authorize access**
7. Sign in with your Google account
8. Click **Advanced** > **Go to RyzaFit Waitlist API (unsafe)**
9. Click **Allow**
10. **IMPORTANT**: Copy the **Web app URL** - it will look like:
    ```
    https://script.google.com/macros/s/ABC123.../exec
    ```

## Step 4: Update Your Landing Page Code

1. Open `src/components/WaitlistForm.jsx`
2. Find this line (around line 23):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace it with your actual URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/ABC123.../exec';
   ```
4. Save the file

## Step 5: Test It!

1. Rebuild your site: `npm run build`
2. Deploy to Namecheap
3. Try submitting an email on your landing page
4. Check your Google Sheet - the email should appear!

## Security Notes

- ✅ The script only accepts POST requests with email data
- ✅ Duplicate emails are automatically rejected
- ✅ All data is stored securely in your private Google Sheet
- ✅ Only you can access and download the data
- ✅ The script URL is public but harmless (can only add emails to YOUR sheet)

## Accessing Your Data

- View in Google Sheets anytime
- Download as CSV: **File** > **Download** > **Comma Separated Values (.csv)**
- Download as Excel: **File** > **Download** > **Microsoft Excel (.xlsx)**
- Use Google Sheets API for automation

## Troubleshooting

**Problem**: Emails not appearing in sheet
- Make sure you deployed as "Anyone" can access
- Check the Web App URL is correct in WaitlistForm.jsx
- Look at Apps Script logs: **Executions** tab in Apps Script editor

**Problem**: "Authorization required" error
- Re-deploy the script
- Make sure you authorized access during deployment

**Problem**: Duplicate emails still being added
- The duplicate check is case-sensitive
- Emails are converted to lowercase in the form before sending
