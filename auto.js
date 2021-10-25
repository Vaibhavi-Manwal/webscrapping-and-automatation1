let fs = require("fs");
let puppeteer = require('puppeteer');


let outputJSON=fs.readFileSync("output.json","utf-8");
let outputJSO=JSON.parse(outputJSON);
//console.log(outputJSO);

async function run(){
    let browser=await puppeteer.launch({
        headless:false, //show browser opening
        args:[
            '--start-maximized'
        ],
        defaultViewport:null
    });

 

    let pages=await browser.pages(); //give all pages(tabs) available or already opened
    let page =pages[0];
    await page.goto("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1635056153&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f0%2f%3fstate%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC8%26RpsCsrfState%3d225b28dd-1f58-b779-3bc4-d0a88353d269&id=292841&aadredir=1&whr=gmail.com&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015");
    
    await page.waitForSelector("div.placeholderContainer");//email
    await page.type("div.placeholderContainer","PutYourEmailHere",{delay:200});

    await page.waitForSelector("input[type='submit']");//click next
    await page.click("input[type='submit']");

    await page.waitFor(3000);

    await page.waitForSelector("div.placeholderContainer");//pasword
    await page.type("div.placeholderContainer","PutYourPassword",{delay:200});

    await page.waitForSelector("input#idSIButton9");//click next
    await page.click("input#idSIButton9");

    await page.waitForSelector("input[type='submit']");//yes,keep login
    await page.click("input[type='submit']");

for(let i=0;i<outputJSO.length;i++)
{
    await page.waitFor(7000);

        await page.waitForSelector("div._2nxYvsT9VmpG24V7lwcfcu");//newmsgtab
        await page.click("div._2nxYvsT9VmpG24V7lwcfcu");

       await page.waitFor(5000);

        await page.waitForSelector("div.V9Dd4ZXHsSV4wVwx4CLeh");//email of other
      await page.type("div.V9Dd4ZXHsSV4wVwx4CLeh",outputJSO[i].Email,{delay:100});
      await page.waitFor(3000);
      await page.keyboard.press('Enter');
      await page.waitFor(2000);

      await page.waitForSelector("div._17TXFBLwNSbFtzG-omWTmr");//subject
    await page.click("div._17TXFBLwNSbFtzG-omWTmr");
    await page.type("div._17TXFBLwNSbFtzG-omWTmr","Your Project",{delay:100});

     
    
    
    await page.waitForSelector("div._16VySYOFix816mo3KsgOhw._1m89yrwkVHJAoAZ_JC8cw3._3VMDfFa1O01ntQj14k1rpD._2h8akM49fdZRv6KHq8jy75._3VQzn9yg47NIR2H1tIIeag");
    await page.click("div._16VySYOFix816mo3KsgOhw._1m89yrwkVHJAoAZ_JC8cw3._3VMDfFa1O01ntQj14k1rpD._2h8akM49fdZRv6KHq8jy75._3VQzn9yg47NIR2H1tIIeag");
    await page.type("div._16VySYOFix816mo3KsgOhw._1m89yrwkVHJAoAZ_JC8cw3._3VMDfFa1O01ntQj14k1rpD._2h8akM49fdZRv6KHq8jy75._3VQzn9yg47NIR2H1tIIeag",outputJSO[i].Name+" ,your project is on "+ outputJSO[i].Project,{delay:100});

    await page.waitFor(1000);

    await page.waitForSelector("button[title='Send (⌘+Enter)']");//newmsg
    await page.click("button[title='Send (⌘+Enter)']");

    

    

    
  
        
    

       
}
        /*await page.waitFor(7000);

        await page.waitForSelector("div._2nxYvsT9VmpG24V7lwcfcu");//newmsgtab
        await page.click("div._2nxYvsT9VmpG24V7lwcfcu");

       await page.waitFor(5000);

        await page.waitForSelector("div.V9Dd4ZXHsSV4wVwx4CLeh");//email of other
      await page.type("div.V9Dd4ZXHsSV4wVwx4CLeh",outputJSO[0].Email,{delay:300});
      await page.waitFor(3000);
      await page.keyboard.press('Enter');

      await page.waitForSelector("div._17TXFBLwNSbFtzG-omWTmr");//subject
    await page.click("div._17TXFBLwNSbFtzG-omWTmr");
    await page.type("div._17TXFBLwNSbFtzG-omWTmr","Your Project",{delay:300});

     
    
    
    await page.waitForSelector("div._16VySYOFix816mo3KsgOhw._1m89yrwkVHJAoAZ_JC8cw3._3VMDfFa1O01ntQj14k1rpD._2h8akM49fdZRv6KHq8jy75._3VQzn9yg47NIR2H1tIIeag");
    await page.click("div._16VySYOFix816mo3KsgOhw._1m89yrwkVHJAoAZ_JC8cw3._3VMDfFa1O01ntQj14k1rpD._2h8akM49fdZRv6KHq8jy75._3VQzn9yg47NIR2H1tIIeag");
    await page.type("div._16VySYOFix816mo3KsgOhw._1m89yrwkVHJAoAZ_JC8cw3._3VMDfFa1O01ntQj14k1rpD._2h8akM49fdZRv6KHq8jy75._3VQzn9yg47NIR2H1tIIeag",outputJSO[0].Name+",your project is on "+ outputJSO[0].Project,{delay:200});

    await page.waitFor(1000);

    await page.waitForSelector("button[title='Send (⌘+Enter)']");//newmsg
    await page.click("button[title='Send (⌘+Enter)']");*/

    

    

    
  
        
    

       

       
        
    }

run();
