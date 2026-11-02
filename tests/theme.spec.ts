import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("uses the system dark preference and removes the old wordmarks", async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(
    page.getByRole("button", { name: "Switch to light mode", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".wordmark")).toHaveCount(0);
  await expect(page.getByText(/^vkv\.?$/i)).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("keeps an explicit theme choice across reloads and system changes", async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await page
    .getByRole("button", { name: "Switch to light mode", exact: true })
    .click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  expect(
    await page.evaluate(() => localStorage.getItem("portfolio-theme")),
  ).toBe("light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(
    page.getByRole("button", { name: "Switch to dark mode", exact: true }),
  ).toBeVisible();

  await page
    .getByRole("button", { name: "Switch to dark mode", exact: true })
    .click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  expect(
    await page.evaluate(() => localStorage.getItem("portfolio-theme")),
  ).toBe("dark");
  await page.emulateMedia({ colorScheme: "light" });
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(
    page.getByRole("button", { name: "Switch to light mode", exact: true }),
  ).toBeVisible();
});

test("uses the system light preference and supports a keyboard theme switch", async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  const toggle = page.getByRole("button", {
    name: "Switch to dark mode",
    exact: true,
  });
  await toggle.focus();
  await page.keyboard.press("Space");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(
    page.getByRole("button", { name: "Switch to light mode", exact: true }),
  ).toBeFocused();
});

test("has accessible dark colors in the page, full collection, and dialog", async ({
  page,
}, testInfo) => {
  test.setTimeout(60_000);
  await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  async function audit(state: string) {
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    await testInfo.attach(`dark-${state}-accessibility`, {
      body: JSON.stringify(results),
      contentType: "application/json",
    });
    expect(
      results.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        elements: violation.nodes.map((node) => ({
          target: node.target,
          reason: node.failureSummary,
        })),
      })),
      `Dark ${state} accessibility violations`,
    ).toEqual([]);
  }

  await audit("page");
  await page.getByRole("button", { name: "Show all 18 projects" }).click();
  await expect(page.locator(".archive-project")).toHaveCount(18);
  await audit("expanded-collection");
  await page.getByRole("button", { name: /^Passage\b/ }).click();
  await expect(page.getByRole("dialog", { name: "Passage" })).toBeVisible();
  await audit("dialog");
});
