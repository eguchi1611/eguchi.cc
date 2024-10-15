import { CardBase } from "./card-base";

interface ActivitiesCardProps {
  activities?: { date: string; title: string; description: string }[];
}

function ActivitiesCard({ activities = [] }: ActivitiesCardProps) {
  return (
    <CardBase title="Activities">
      <ul className="relative space-y-4 before:absolute before:left-24 before:h-full before:border-l-8 before:border-slate-100">
        {activities.map((item) => (
          <li key={item.title} className="flex items-start">
            <div className="relative w-28 flex-shrink-0 before:absolute before:left-24 before:h-full before:border-l-8 before:border-teal-200">
              {item.date}
            </div>
            <div>
              <div>{item.title}</div>
              <div className="mt-1 text-sm">{item.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </CardBase>
  );
}

export { ActivitiesCard };
