function doGet() {
  return HtmlService.createHtmlOutputFromFile('campaignTracker');
}

function getCampaigns() {
  var ss = SpreadsheetApp.openByUrl('YOUR_SPREADSHEET_URL');
  var ws = ss.getSheetByName('Campaigns');
  var data = ws.getDataRange().getValues();
  return data;
}
