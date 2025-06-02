interface TechnologiesProps {
  name: string;
  tech: string[];
}

export const Technologies = ({ name, tech }: TechnologiesProps) => {
  return (
    <div className="mb-2">
      <b className="mr-3">{`${name}:`}</b>
      {tech.map((x) => {
        return (
          <span
            key={x}
            className="inline-block border-solid border-1 bg-gray-100 dark:bg-gray-800 text-black-800 dark:text-black-200 rounded-full px-3 py-1 text-sm font-semibold mr-2"
          >
            {x}
          </span>
        );
      })}
    </div>
  );
};
