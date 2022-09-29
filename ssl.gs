const getUrlStatus = (url) => {  
  try{
    var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true, validateHttpsCertificates: true});
    
    if (response.getResponseCode() !== 200){
      Logger.log("URL Error: %s \n %s",response.getResponseCode(), response);
    }
    return response.getResponseCode();
  } catch(e){
    Logger.log("URL Error: %s \n %s",url, e);
    return e;
  }
}

const isValidSSL = (url) => {
  return getUrlStatus(url) === 200;
};
