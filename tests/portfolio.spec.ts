import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const firstProjects = [
  "Browser Loot",
  "Lazysnake",
  "Brume",
  "Sift Agent",
  "Clipit",
  "Passage",
];

async function expectNoOverflow(page: Page) {
  const size = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    page: document.documentElement.scrollWidth,
  }));
  expect(
    size.page,
    `Document is ${size.page}px wide in a ${size.viewport}px viewport`,
  ).toBeLessThanOrEqual(size.viewport);
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("introduces the developer and connects every navigation link to a real section", async ({
  page,
}) => {
  await expect(page).toHaveTitle(/V Keerthi Vikram/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Curiosity in.Useful softwareout.",
  );
  const navigation = page.getByRole("navigation", { name: "Main navigation" });
  await navigation
    .getByRole("link", { name: "All projects", exact: true })
    .click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.locator("#projects")).toBeInViewport();
  for (const href of await navigation
    .locator("a")
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")))) {
    expect(href).toMatch(/^#/);
    await expect(page.locator(href!)).toHaveCount(1);
  }
  await expect(
    page.getByRole("link", { name: "Connect on LinkedIn" }),
  ).toHaveAttribute("href", "https://www.linkedin.com/in/v-keerthi-vikram/");
});

test("shows six curated projects and expands to all eighteen distinct repositories", async ({
  page,
}) => {
  const rows = page.locator(".archive-project");
  await expect(rows).toHaveCount(6);
  await expect(page.locator(".archive-project-name")).toHaveText(firstProjects);
  await page.getByRole("button", { name: "Show all 18 projects" }).click();
  await expect(rows).toHaveCount(18);
  const names = await page.locator(".archive-project-name").allTextContents();
  expect(new Set(names).size).toBe(18);
  for (const name of [
    "Ballnote",
    "Taskly",
    "Kilo Models",
    "Jujutsu Skills",
    "Dracula for Fedilab",
    "Dracula for Libreddit",
  ]) {
    await expect(
      page.getByRole("button", { name: new RegExp(`^${name}\\b`) }),
    ).toBeVisible();
  }
  await expect(page.getByRole("status")).toHaveText(
    "Showing 18 of 18 projects",
  );
  await page.getByRole("button", { name: "Show fewer projects" }).click();
  await expect(rows).toHaveCount(6);
  await expect(
    page.getByRole("button", { name: "Show all 18 projects" }),
  ).toHaveAttribute("aria-expanded", "false");
});

test("filters by project type, searches technology, and recovers from an empty result", async ({
  page,
}) => {
  const filters = page.getByRole("group", {
    name: "Filter projects by category",
  });
  const search = page.getByRole("searchbox", { name: "Find a project" });

  await filters.getByRole("button", { name: "Apps", exact: true }).click();
  await expect(page.locator(".archive-project")).toHaveCount(5);
  await expect(
    filters.getByRole("button", { name: "Apps", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await search.fill("Rust");
  await expect(page.locator(".archive-project-name")).toHaveText(["Clipit"]);
  await expect(page.getByRole("status")).toHaveText(
    "Showing 1 of 1 project matching your filters",
  );

  await search.fill("no-such-project-9317");
  await expect(page.locator(".archive-project")).toHaveCount(0);
  await expect(
    page.getByText("No projects found.", { exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(search).toHaveValue("");
  await expect(
    filters.getByRole("button", { name: "All", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".archive-project")).toHaveCount(6);

  await filters.getByRole("button", { name: "Themes", exact: true }).click();
  await page.getByRole("button", { name: "Show all 7 projects" }).click();
  await expect(page.locator(".archive-project")).toHaveCount(7);
  await search.fill("Dracula");
  await expect(page.locator(".archive-project")).toHaveCount(5);
  await search.fill("");
  await expect(page.locator(".archive-project")).toHaveCount(6);
  await expect(
    page.getByRole("button", { name: "Show all 7 projects" }),
  ).toHaveAttribute("aria-expanded", "false");
  await filters
    .getByRole("button", { name: "Developer tools", exact: true })
    .click();
  await expect(page.locator(".archive-project")).toHaveCount(5);
  await filters
    .getByRole("button", { name: "Experiments", exact: true })
    .click();
  await expect(page.locator(".archive-project-name")).toHaveText(["Passage"]);
});

test("explains unfinished work honestly and supports keyboard dialog dismissal and focus recovery", async ({
  page,
}) => {
  const trigger = page.getByRole("button", { name: /^Passage\b/ });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Passage" });
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByText("Paused development checkpoint", { exact: true }),
  ).toBeVisible();
  await expect(
    dialog.getByText(/unfinished source code, not a tested release/),
  ).toBeVisible();
  await expect(
    dialog.getByRole("link", { name: "View on GitHub" }),
  ).toHaveAttribute("href", "https://github.com/vkeerthivikram/passage");
  const close = dialog.getByRole("button", { name: "Close project details" });
  await expect(close).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    dialog.getByRole("link", { name: "View on GitHub" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(close).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");

  await trigger.click();
  await close.click();
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();

  await trigger.click();
  await page.mouse.click(2, 2);
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test("loads every visual without runtime errors and captures the complete page", async ({
  page,
}, testInfo) => {
  const runtimeErrors: string[] = [];
  page.on("pageerror", (error) => runtimeErrors.push(error.message));
  await page.reload();
  const images = page.locator("img");
  await expect(images).toHaveCount(5);
  for (const image of await images.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty("complete", true);
    const dimensions = await image.evaluate((element) => ({
      width: element.naturalWidth,
      height: element.naturalHeight,
    }));
    expect(dimensions.width).toBeGreaterThan(0);
    expect(dimensions.height).toBeGreaterThan(0);
    await expect(image).not.toHaveAttribute("alt", "");
  }
  expect(runtimeErrors).toEqual([]);
  await expectNoOverflow(page);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.evaluate(() => document.fonts.ready);
  await mkdir(path.join("docs", "qa"), { recursive: true });
  await page.screenshot({
    path: path.join("docs", "qa", `${testInfo.project.name}-full.png`),
    fullPage: true,
    animations: "disabled",
  });
});

test("keeps the page and expanded collection within 320, 390, 768, and 1536 pixel layouts", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name === "mobile-chromium",
    "The desktop browser runs each explicit viewport width.",
  );
  await page.getByRole("button", { name: "Show all 18 projects" }).click();
  for (const width of [320, 390, 768, 1536]) {
    await test.step(`${width}px viewport`, async () => {
      await page.setViewportSize({ width, height: 900 });
      await expectNoOverflow(page);
      await page.getByRole("button", { name: /^Passage\b/ }).click();
      await expectNoOverflow(page);
      const dialogBounds = await page.getByRole("dialog").boundingBox();
      expect(dialogBounds).not.toBeNull();
      expect(dialogBounds!.x).toBeGreaterThanOrEqual(0);
      expect(dialogBounds!.x + dialogBounds!.width).toBeLessThanOrEqual(width);
      await page.keyboard.press("Escape");
    });
  }
});

test("honors reduced motion preferences", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  await expect(page.locator(".hero-copy")).toHaveCSS("animation-name", "none");
  await expect(page.locator(".hero-figure")).toHaveCSS(
    "animation-name",
    "none",
  );
  await expect(page.locator(".archive-project-arrow").first()).toHaveCSS(
    "transition-duration",
    "0s",
  );
});

test("passes automated accessibility checks on the page and project details", async ({
  page,
}) => {
  // Three complete axe scans can exceed the normal interaction-test budget
  // on a busy developer machine.
  test.setTimeout(60_000);
  const scan = () =>
    new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
  let report = await scan();
  expect(report.violations).toEqual([]);
  await page.getByRole("button", { name: "Show all 18 projects" }).click();
  report = await scan();
  expect(report.violations).toEqual([]);
  await page.getByRole("button", { name: /^Passage\b/ }).click();
  report = await scan();
  expect(report.violations).toEqual([]);
});
