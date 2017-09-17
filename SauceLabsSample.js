var webdriver = require('selenium-webdriver'),
    username = "mzalew",
    accessKey = "6af6f5db-c2be-4271-885f-23a9e013fc54",
    driver;

driver = new webdriver.Builder().
withCapabilities({
    'browserName': 'chrome',
    'platform': 'Linux',
    'version': '43.0',
    'username': username,
    'accessKey': accessKey,
     'name': ' Selenium sample test'
}).
usingServer("http://" + username + ":" + accessKey +
    "@ondemand.saucelabs.com:80/wd/hub").
build();

driver.get("http://saucelabs.com/test/guinea-pig");

driver.getTitle().then(function (title) {
    console.log("title is: " + title);
});

driver.quit();
