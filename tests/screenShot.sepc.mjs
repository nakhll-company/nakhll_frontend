import {
    flowRight
} from "lodash";
import {
    chromium,
    webkit,
    firefox
} from "playwright";

// for (const browserType of[chromium]) {
//     console.log("runnig", browserType.name());
//     const browser = await browserType.launch();
//     const page = await browser.newPage();
//     await page.goto(
//         "https://login.yahoo.com/?.src=ym&lang=en-US&done=https%3A%2F%2Fmail.yahoo.com%2F%3Fguce_referrer%3DaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%26guce_referrer_sig%3DAQAAANdqD4JowIxwidO-M3r_-WNWMquXC62kAT2jQppsYCRAAZ5wTlDoe_VTCXjLz-KWYbajQ1MsXzR7h_IQc9o-eZ9_H9vCSN5cXZ7CMc5bJaHt47HEiG_BmYfMUGfnYHzXpyVFvzU-u_89sKUARQdRLcm16BAKC-4x0ifQYWH7WJft"
//     );
//     await page.screenshot({
//         path: `image-${browserType.name()}.png`,
//     });
//     await browser.close();
// }

// twoooooooooooo
// const browser = await chromium.launch();

// for (let i = 0; i < 10; ++i) {
//     // Fast ,simple,configurable!
//     const context = await browser.newContext()
//     const page = await context.newPage();
//     await page.goto('')

// }