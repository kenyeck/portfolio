interface TechnologiesProps {
  name: string;
  tech: string[];
}

export const Technologies = ({ name, tech }: TechnologiesProps) => {
  return (
    <div className="mb-4">
      <b className="mr-3">{`${name}:`}</b>
      {tech.map((x) => {
        return (
          <span
            key={x}
            className="text-gray-800 bg-gray-800/20 dark:text-gray-300 dark:bg-gray-300/20 border border-gray-800/30 dark:border-gray-300/30 mr-2 px-2 py-1 rounded-full"
          >
            {x}
          </span>
        );
      })}
    </div>
  );
};
