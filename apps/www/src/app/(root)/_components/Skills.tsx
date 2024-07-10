const items = [
  {
    title: "Firebase",
    category: "cloud",
    subtitle: "Realtime Database, Firestore, Authentication, Functions",
  },
  {
    title: "AWS",
    category: "cloud",
    subtitle: "S3, EC2, Lambda, RDS, DynamoDB, API Gateway, Amplify",
  },
  {
    title: "Cloudflare",
    category: "cloud",
    subtitle: "Workers, KV, Durable Objects",
  },
  {
    title: "LINE",
    category: "api",
    subtitle: "Login, Messaging, Payments",
  },
  {
    title: "Discord",
    category: "api",
    subtitle: "OAuth, Webhooks",
  },
  {
    title: "React",
    category: "frontend",
    subtitle: "Hooks, Context, Router, Material-UI",
  },
  {
    title: "Vue",
    category: "frontend",
    subtitle: "Vuex, Router, Vuetify",
  },
  {
    title: "CSS系",
    category: "frontend",
    subtitle: "Sass, Less, Bootstrap, Tailwind CSS",
  },
  {
    title: "JavaScript",
    category: "language",
    subtitle: "ES6, TypeScript",
  },
  {
    title: "Java",
    category: "language",
    subtitle: "Spring Boot, Bukkit, Forge",
  },
  {
    title: "C#",
    category: "language",
    subtitle: ".NET, WPF",
  },
  {
    title: "Ruby",
    category: "language",
    subtitle: "",
  },
  {
    title: "C",
    category: "language",
    subtitle: "",
  },
  {
    title: "データベース系",
    category: "others",
    subtitle: "MySQL, PostgreSQL, SQLite, MongoDB, Redis",
  },
  {
    title: "その他",
    category: "others",
    subtitle: "Git, Docker, Nginx, Apache, Linux, Windows",
  },
];

const sections: {
  key: string;
  title: string;
  items: { title: string; category: string; subtitle: string }[];
}[] = [
  { key: "cloud", title: "クラウドサービス" },
  { key: "api", title: "API" },
  { key: "frontend", title: "フロントエンド" },
  { key: "language", title: "言語系" },
  { key: "others", title: "その他" },
].map((row) => ({
  ...row,
  items: items.filter(({ category }) => category === row.key),
}));

export function Skills() {
  return (
    <div>
      <ul>
        {sections.map(({ items, key, title }) => (
          <li key={key}>
            <div className="text-xl">{title}</div>
            <ul>
              {items.map(({ title, subtitle }) => (
                <li key={title}>
                  <div className="">{title}</div>
                  <div className="text-sm">{subtitle}</div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
