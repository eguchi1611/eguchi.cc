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
    title: "その他",
    category: "language",
    subtitle: "C#, Ruby, C",
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
  { key: "frontend", title: "フロントエンド" },
  { key: "api", title: "API" },
  { key: "language", title: "言語系" },
  { key: "others", title: "その他" },
].map((row) => ({
  ...row,
  items: items.filter(({ category }) => category === row.key),
}));

const row1 = sections.slice(0, 2);
const row2 = sections.slice(2, 6);

export function Skills() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-2 text-center text-xl font-bold text-gray-900">
        <a href="#skills" className="block">
          Skills
        </a>
      </h2>
      <ul className="grid flex-1 grid-cols-2 gap-4">
        {[row1, row2].map((row, index) => (
          <div key={index} className="flex flex-col gap-4">
            {row.map(({ items, key, title }) => (
              <li key={key} className="">
                <div className="bg-gray-50 text-xl">{title}</div>
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
          </div>
        ))}
      </ul>
    </div>
  );
}
