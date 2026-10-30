// deepcodelabs.io/privacy — DeepCode Labs Privacy Policy (approved 29 Oct 2026)
//
// JavaScript App Router version for src/app/privacy/page.jsx.
// No extra packages needed. Styles are inline so it works with or without Tailwind;
// the page uses the site's own font and colours where they are set on <body>.
// Section 11 has id="data-deletion" — Meta's "data deletion instructions" link is
// https://www.deepcodelabs.io/privacy#data-deletion  (keep that id).

export const metadata = {
  title: "Privacy Policy | DeepCode Labs",
  description:
    "How DeepCode Labs Private Limited collects, uses and protects personal data across deepcodelabs.io, DeepQlik and DeepQ.",
};

const ADDRESS =
  "3rd Floor, 4-14-142, Plot No. 25, Samrat Colony, West Maredpally, Secunderabad, Telangana 500026, India";
const EMAIL = "kunal@deepcodelabs.io";

const s = {
  main: { maxWidth: 780, margin: "0 auto", padding: "48px 20px 80px", lineHeight: 1.7, fontSize: 16 },
  h1: { fontSize: 34, lineHeight: 1.2, margin: "0 0 8px" },
  meta: { opacity: 0.7, margin: "0 0 28px" },
  h2: { fontSize: 22, lineHeight: 1.3, margin: "40px 0 12px", scrollMarginTop: 96 },
  h3: { fontSize: 17, margin: "24px 0 8px" },
  ul: { paddingLeft: 22, margin: "8px 0 16px" },
  li: { margin: "6px 0" },
  tableWrap: { overflowX: "auto", margin: "16px 0" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 15 },
  th: { textAlign: "left", padding: "10px 12px", borderBottom: "2px solid rgba(128,128,128,0.4)" },
  td: { padding: "10px 12px", borderBottom: "1px solid rgba(128,128,128,0.25)", verticalAlign: "top" },
  a: { color: "inherit", textDecoration: "underline" },
};

const Mail = () => (
  <a style={s.a} href={`mailto:${EMAIL}`}>
    {EMAIL}
  </a>
);

const providers = [
  ["Meta Platforms (WhatsApp Business Platform)", "Carries WhatsApp messages between businesses and their customers", "Meta's global infrastructure"],
  ["Supabase", "DeepQlik database, sign-in and file storage", "Mumbai, India"],
  ["Render", "Runs DeepQlik's application servers", "Singapore"],
  ["Microsoft Azure", "Runs DeepQ's servers and database", "Central India (Pune)"],
  ["Vercel", "Hosts our website", "Global"],
  ["Microsoft (Microsoft 365)", "Business email", "Microsoft data centres"],
  ["Our AI model provider", "AI-assisted replies and checks, when a business turns them on", "Outside India"],
  ["Our payment provider", "Payments, when paid plans start", "India"],
];

export default function PrivacyPolicyPage() {
  return (
    <main style={s.main}>
      <h1 style={s.h1}>Privacy Policy</h1>
      <p style={s.meta}>
        <strong>DeepCode Labs Private Limited</strong> · Last updated: 29 October 2026
      </p>

      <p>
        This policy explains what personal data DeepCode Labs Private Limited (&quot;DeepCode Labs&quot;, &quot;we&quot;,
        &quot;us&quot;) collects, why, how we protect it, and the choices and rights you have. It applies to our website
        deepcodelabs.io and to our products <strong>DeepQlik</strong> (a WhatsApp Business messaging platform for brands)
        and <strong>DeepQ</strong> (a queue management platform for service businesses).
      </p>

      <h2 id="who-we-are" style={s.h2}>1. Who we are</h2>
      <p>DeepCode Labs Private Limited, a company incorporated in India.</p>
      <p>Registered office: {ADDRESS}.</p>
      <p>
        Contact for privacy matters: <Mail /> (see section 13, Grievance Officer).
      </p>

      <h2 id="our-roles" style={s.h2}>2. Our two roles</h2>
      <ul style={s.ul}>
        <li style={s.li}>
          <strong>When you use our website or sign in to our products</strong> (for example as a brand owner, manager or
          agent), we decide how your data is used. Under India&apos;s Digital Personal Data Protection Act, 2023
          (&quot;DPDP Act&quot;) we are the <strong>Data Fiduciary</strong> for that data.
        </li>
        <li style={s.li}>
          <strong>When a business uses our products to talk to its own customers</strong> (for example a brand replying to
          you on WhatsApp through DeepQlik, or a clinic adding you to a queue through DeepQ), that business decides how your
          data is used and is the Data Fiduciary. We process the data <strong>on the business&apos;s behalf</strong>, as its{" "}
          <strong>Data Processor</strong>, under our agreement with it. If you are such a customer, please contact the
          business first; we will help it respond to you, and you may also write to us.
        </li>
      </ul>

      <h2 id="data-we-collect" style={s.h2}>3. Data we collect</h2>
      <h3 style={s.h3}>From website visitors</h3>
      <ul style={s.ul}>
        <li style={s.li}>What you send us through contact forms or email: name, email, phone number, company and your message.</li>
        <li style={s.li}>Basic technical data our hosting providers record: IP address, browser and device type, pages visited and time of visit.</li>
      </ul>
      <h3 style={s.h3}>From business users of DeepQlik and DeepQ</h3>
      <ul style={s.ul}>
        <li style={s.li}>Account details: name, work email, phone number, the business you belong to and your role (owner, admin, agent or viewer).</li>
        <li style={s.li}>Sign-in and activity records: login times, invitations and an audit log of important actions (for example connecting a WhatsApp number or changing a team member&apos;s role).</li>
        <li style={s.li}>Billing details when paid plans start. Card or UPI payments are handled by our payment provider; we do not store full card numbers.</li>
      </ul>
      <h3 style={s.h3}>When a business connects its WhatsApp number (Facebook Login for Business)</h3>
      <p>
        When a business connects a WhatsApp Business Account to DeepQlik through Meta&apos;s sign-up flow, Meta shares with
        us the WhatsApp Business Account ID, phone number ID, business portfolio ID, the number&apos;s display name and
        quality rating, and an access token that lets DeepQlik send and receive WhatsApp messages for that business. We
        never receive your Facebook password.
      </p>
      <h3 style={s.h3}>About customers of businesses using DeepQlik (WhatsApp)</h3>
      <ul style={s.ul}>
        <li style={s.li}>WhatsApp phone number, or the WhatsApp user ID or username Meta provides when a phone number is not shared.</li>
        <li style={s.li}>WhatsApp profile name.</li>
        <li style={s.li}>Messages exchanged with the business, including text, images and documents, and their delivery status (sent, delivered, read, failed) and timestamps.</li>
        <li style={s.li}>Consent choices: when you first messaged the business, whether you agreed to promotional messages, and any STOP request.</li>
        <li style={s.li}>Order, delivery or product details that the business chooses to share with DeepQlik to send you updates.</li>
      </ul>
      <h3 style={s.h3}>About customers of businesses using DeepQ</h3>
      <ul style={s.ul}>
        <li style={s.li}>Name, phone number and visit details needed to place you in a queue, estimate waiting time and notify you when it is your turn.</li>
      </ul>

      <h2 id="why-we-use-it" style={s.h2}>4. Why we use it</h2>
      <ul style={s.ul}>
        <li style={s.li}>To provide our products: show conversations and queues to the right business, send and receive messages, and deliver notifications.</li>
        <li style={s.li}>To respect your choices: a STOP request stops promotional messages from that business. Promotional messages are only sent to people who have said yes to them.</li>
        <li style={s.li}>To keep accounts and data secure, keep each business&apos;s data separate from every other business&apos;s, and prevent misuse and fraud.</li>
        <li style={s.li}>To provide support and to tell business users about changes to the service.</li>
        <li style={s.li}>To meet legal obligations and respond to lawful requests.</li>
        <li style={s.li}>To improve our products using aggregated or de-identified information.</li>
      </ul>
      <p>
        <strong>AI features.</strong> When a business turns on AI-assisted replies or checks, the relevant message text is
        processed by our AI model provider to draft or check a reply. We limit what is shared, remove names and phone
        numbers where possible, and use providers that do not use this data to train their models.
      </p>
      <p>We do not sell personal data, and we do not use customers&apos; messages for our own advertising.</p>

      <h2 id="basis" style={s.h2}>5. Our basis for using data</h2>
      <p>
        We rely on your consent where the law requires it (for example promotional WhatsApp messages), on the purposes the
        DPDP Act allows without fresh consent (for example where you have voluntarily given data for a specific purpose, or
        to comply with law), and on our contracts with businesses that use our products.
      </p>

      <h2 id="sharing" style={s.h2}>6. Who we share data with</h2>
      <p>
        We share personal data only with service providers that help us run our products, under contracts that limit their
        use of it, and only as needed:
      </p>
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Provider</th>
              <th style={s.th}>What they do for us</th>
              <th style={s.th}>Where data is processed</th>
            </tr>
          </thead>
          <tbody>
            {providers.map(([name, role, where]) => (
              <tr key={name}>
                <td style={s.td}>{name}</td>
                <td style={s.td}>{role}</td>
                <td style={s.td}>{where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        We may also disclose data where required by law, court order or a government authority, or to protect the rights
        and safety of our users or the public. If DeepCode Labs is merged or acquired, data may move to the new owner under
        this policy.
      </p>

      <h2 id="outside-india" style={s.h2}>7. Data processed outside India</h2>
      <p>
        Some of our providers process data outside India (for example in Singapore). Transfers are made as permitted under
        the DPDP Act and any restrictions notified by the Government of India.
      </p>

      <h2 id="retention" style={s.h2}>8. How long we keep data</h2>
      <ul style={s.ul}>
        <li style={s.li}>Business user accounts: while the account is active, and then for as long as needed for legal, tax and dispute purposes.</li>
        <li style={s.li}>Messages, contacts and queue records: while the business uses our product, unless the business deletes them earlier or asks us to.</li>
        <li style={s.li}>Raw delivery notifications received from Meta: deleted after 30 days.</li>
        <li style={s.li}>Security and processing logs: at least one year, as Indian law requires.</li>
      </ul>
      <p>When data is no longer needed, we delete or anonymise it.</p>

      <h2 id="security" style={s.h2}>9. How we protect data</h2>
      <ul style={s.ul}>
        <li style={s.li}>Encryption in transit (HTTPS) for all connections.</li>
        <li style={s.li}>WhatsApp access tokens are stored encrypted and can only be read by our servers.</li>
        <li style={s.li}>Database rules ensure each business can only see its own data, and team roles limit what each person can do.</li>
        <li style={s.li}>Audit logs of important actions, and regular automated tests of these protections.</li>
      </ul>
      <p>
        If a personal data breach occurs, we will inform the affected businesses and people, and the Data Protection Board
        of India, as the law requires.
      </p>

      <h2 id="your-rights" style={s.h2}>10. Your rights</h2>
      <p>Under the DPDP Act you can:</p>
      <ul style={s.ul}>
        <li style={s.li}>ask what personal data we hold about you and how it is used;</li>
        <li style={s.li}>ask us to correct, complete or update it;</li>
        <li style={s.li}>ask us to erase it, unless we must keep it by law;</li>
        <li style={s.li}>withdraw consent at any time (as easily as you gave it);</li>
        <li style={s.li}>nominate another person to exercise your rights if you die or become unable to; and</li>
        <li style={s.li}>raise a grievance with us, and then with the Data Protection Board of India.</li>
      </ul>
      <p>
        To stop promotional WhatsApp messages from a business, reply <strong>STOP</strong> in that chat. For anything else,
        write to the Grievance Officer (section 13). We respond as soon as we can, and in any case within the time the law
        allows (currently up to 90 days).
      </p>

      <h2 id="data-deletion" style={s.h2}>11. How to request deletion of your data</h2>
      <ul style={s.ul}>
        <li style={s.li}>
          <strong>Anyone:</strong> email <Mail /> with the subject &quot;Delete my data&quot; and the phone number or email
          address the data is linked to. We may ask you to confirm it is you. We will confirm when the deletion is done,
          normally within 30 days.
        </li>
        <li style={s.li}>
          <strong>Customers of a business using DeepQlik or DeepQ:</strong> you can also ask the business directly; we will
          carry out its instructions.
        </li>
        <li style={s.li}>
          <strong>Business users:</strong> an owner can disconnect the WhatsApp number in DeepQlik settings and ask us to
          close the account and delete its data by writing to the same email.
        </li>
        <li style={s.li}>
          <strong>Facebook Login for Business:</strong> you can also remove DeepQlik&apos;s access in your Facebook or Meta
          Business settings under Business Integrations. This stops new data reaching us; to delete data we already hold,
          email us as above.
        </li>
      </ul>

      <h2 id="children" style={s.h2}>12. Children</h2>
      <p>
        Our products are meant for businesses and are not directed at children. We do not knowingly collect children&apos;s
        personal data for our own purposes. Businesses using our products must not use them to send promotional messages to
        children.
      </p>

      <h2 id="grievance-officer" style={s.h2}>13. Grievance Officer</h2>
      <p>
        Kunal Donthireddy
        <br />
        DeepCode Labs Private Limited, {ADDRESS}
        <br />
        Email: <Mail />
      </p>

      <h2 id="cookies" style={s.h2}>14. Cookies</h2>
      <p>
        Our website and product dashboards use cookies that are needed to work, such as keeping you signed in. We may use
        basic, privacy-friendly analytics to understand how the website is used. We do not use advertising cookies.
      </p>

      <h2 id="changes" style={s.h2}>15. Changes to this policy</h2>
      <p>
        We may update this policy as our products and the law change. We will change the &quot;Last updated&quot; date
        above, and tell business users about important changes by email or in the product.
      </p>

      <h2 id="contact" style={s.h2}>16. Contact</h2>
      <p>
        Questions about this policy: <Mail />
      </p>
    </main>
  );
}
