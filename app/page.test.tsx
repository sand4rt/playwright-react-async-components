import Page from "./page";
import { expect, test } from "@playwright/experimental-ct-react";
import { Suspense } from "react";

// test('non suspense', async ({ page, mount }) => {
//     page.route('https://playwright.dev/api', async (route) => {
//         route.fulfill({ json: 'boop' });
//     });
//     const component = await mount(<Page />);
//     await expect(component).toContainText('boop');
// });

test('suspense', async ({ page, mount }) => {
    page.route('https://playwright.dev/api', async (route) => {
        route.fulfill({ json: 'boop' });
    });
    const component = await mount(<Suspense><Page /></Suspense>);
    await expect(component).toContainText('boop');
});
