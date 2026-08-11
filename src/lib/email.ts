export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function detailRow(label: string, value: unknown) {
  const escaped = escapeHtml(value);
  if (!escaped) return "";
  return `
    <tr>
      <td style="padding: 8px 0; width: 40%; color: #6b7280; font-size: 13px; vertical-align: top; text-transform: uppercase; letter-spacing: 0.5px;">${label}</td>
      <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600; vertical-align: top;">${escaped}</td>
    </tr>`;
}

export function escapeNewlines(value: unknown): string {
  return escapeHtml(value).replace(/\n/g, "<br/>");
}

export function emailLayout(opts: {
  preheader: string;
  content: string;
  footerNote?: string;
}) {
  const { preheader, content, footerNote = "" } = opts;
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>We Are Globex</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: Arial, Helvetica, sans-serif; -webkit-font-smoothing: antialiased;">
    <span style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">${escapeHtml(preheader)}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f3f4f6; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 560px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            <tr>
              <td style="background-color: #0d0f14; padding: 28px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="color: #f0ede8; font-size: 24px; font-weight: 700; letter-spacing: 1px;">GLOBEX</td>
                    <td align="right" style="color: #e8a020; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Trade · Distribution · Export</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 36px 32px 24px 32px; color: #111827; font-size: 15px; line-height: 1.6;">
                ${content}
              </td>
            </tr>
            <tr>
              <td style="padding: 24px 32px 32px 32px; border-top: 1px solid #eef2f6; background-color: #fafbfc;">
                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; line-height: 1.5;">
                  We Are Globex · www.weareglobex.com · info@weareglobex.com
                </p>
                <p style="margin: 0; color: #9ca3af; font-size: 11px; line-height: 1.5;">
                  © ${new Date().getFullYear()} Globex. All rights reserved. ${footerNote}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function detailTable(rows: Array<[string, unknown]>) {
  const body = rows
    .map(([label, value]) => detailRow(label, value))
    .filter(Boolean)
    .join("");
  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 4px 20px; margin: 20px 0;">
    ${body}
  </table>`;
}


