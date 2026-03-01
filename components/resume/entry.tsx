interface ResumeEntryProps {
  title: string;
  organization?: string;
  location?: string;
  dateRange?: string;
  description?: string;
  bullets?: string[];
}

export function ResumeEntry({
  title,
  organization,
  location,
  dateRange,
  description,
  bullets,
}: ResumeEntryProps) {
  return (
    <div className="mb-6 print:mb-4 last:mb-0">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold print:text-base">{title}</h3>
          {organization && (
            <p className="text-muted-foreground print:text-gray-700">
              {organization}
              {location && ` • ${location}`}
            </p>
          )}
        </div>
        {dateRange && (
          <p className="text-sm text-muted-foreground print:text-gray-600 whitespace-nowrap ml-4">
            {dateRange}
          </p>
        )}
      </div>
      {description && (
        <p className="text-sm text-muted-foreground print:text-gray-700 mb-2">
          {description}
        </p>
      )}
      {bullets && bullets.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground print:text-gray-700">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
