// Insurance providers the practice is registered with — from the client's email (October 2026).
// `network` is the billing network she is registered through; visitors look for their insurer by name,
// so the page lists everyone A to Z and does not show the networks.
// `logo` is a file in public/images/insurers. Most came from the client's Insurance-Logos.pdf.
// No logo: the three federal programs (shown as text on purpose) and two we could not find a clean logo for.
export interface Insurer {
  name: string;
  network: "GreenShield" | "Blue Cross" | "TELUS";
  logo?: string;
  /** Short form shown large in the tile when there is no logo. */
  abbr?: string;
}

const entries: Insurer[] = [
  { name: "GreenShield", network: "GreenShield", logo: "greenshield.svg" },
  // SSQ has merged into Beneva (also listed). TODO: ask the client whether SSQ should stay.
  { name: "SSQ Insurance", network: "GreenShield", logo: "ssq-insurance.png" },
  // TODO: add a logo if the client can supply one.
  { name: "MÉDIC Construction", network: "GreenShield", abbr: "MÉDIC" },

  { name: "Canadian Armed Forces (CAF)", network: "Blue Cross", abbr: "CAF" },
  { name: "Interim Federal Health Program (IFHP)", network: "Blue Cross", abbr: "IFHP" },
  { name: "Medavie Blue Cross", network: "Blue Cross", logo: "medavie-blue-cross.svg" },
  { name: "Veterans Affairs Canada (VAC)", network: "Blue Cross", abbr: "VAC" },

  { name: "AGA Financial Group", network: "TELUS", logo: "aga-financial-group.png" },
  { name: "Alberta Blue Cross", network: "TELUS", logo: "alberta-blue-cross.png" },
  { name: "Beneva", network: "TELUS", logo: "beneva.png" },
  { name: "BPA – Benefit Plan Administrators", network: "TELUS", logo: "bpa.png" },
  { name: "Canada Life", network: "TELUS", logo: "canada-life.png" },
  { name: "Public Service Health Care Plan (PSHCP)", network: "TELUS", logo: "pshcp.png" },
  { name: "Canadian Construction Workers Union (CCWU)", network: "TELUS", logo: "ccwu.png" },
  { name: "Chambers of Commerce Group Insurance", network: "TELUS", logo: "chambers-of-commerce.png" },
  { name: "CINUP", network: "TELUS", logo: "cinup.png" },
  { name: "ClaimSecure", network: "TELUS", logo: "claimsecure.png" },
  { name: "Coughlin & Associates", network: "TELUS", logo: "coughlin.png" },
  { name: "Cowan", network: "TELUS", logo: "cowan.png" },
  { name: "Desjardins Insurance", network: "TELUS", logo: "desjardins.png" },
  { name: "Equitable", network: "TELUS", logo: "equitable.png" },
  { name: "First Canadian", network: "TELUS", logo: "first-canadian.png" },
  // The client lists GMS Carrier 49 and GMS Carrier 50 separately; they share one name and logo.
  { name: "GMS (Carrier 49 and Carrier 50)", network: "TELUS", logo: "gms.png" },
  { name: "GPM Group Benefits", network: "TELUS", logo: "gpm.png" },
  { name: "GroupHealth", network: "TELUS", logo: "grouphealth.png" },
  { name: "GroupSource", network: "TELUS", logo: "groupsource.png" },
  { name: "Industrial Alliance (iA Financial Group)", network: "TELUS", logo: "ia-financial-group.png" },
  { name: "Johnston Group", network: "TELUS", logo: "johnston-group.png" },
  { name: "LiUNA Local 183", network: "TELUS", logo: "liuna-183.png" },
  { name: "LiUNA Local 506", network: "TELUS", logo: "liuna-506.png" },
  { name: "Manion", network: "TELUS", logo: "manion.png" },
  { name: "Manulife", network: "TELUS", logo: "manulife.png" },
  { name: "Maximum Benefit", network: "TELUS", logo: "maximum-benefit.png" },
  { name: "MDM Insurance Services", network: "TELUS", logo: "mdm.png" },
  { name: "PBAS / Drawbridge", network: "TELUS", logo: "drawbridge.png" },
  { name: "People Corporation", network: "TELUS", logo: "people-corporation.png" },
  // TODO: add a logo if the client can supply one.
  { name: "Quikcard", network: "TELUS", abbr: "Quikcard" },
  { name: "RWAM Insurance Administrators", network: "TELUS", logo: "rwam.png" },
  { name: "Simply Benefits", network: "TELUS", logo: "simply-benefits.png" },
  { name: "TELUS AdjudiCare", network: "TELUS", logo: "telus-health.svg" },
  { name: "Union Benefits", network: "TELUS", logo: "union-benefits.png" },
  { name: "UV Insurance", network: "TELUS", logo: "uv-insurance.png" },
];

export const insurers = entries.toSorted((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
