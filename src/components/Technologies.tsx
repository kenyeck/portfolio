interface TechnologiesProps {
  name: string;
  tech: string[];
}

export const Technologies = ({ name, tech }: TechnologiesProps) => {
  return (
    <div className="mb-4">
      <b className="mr-3">{`${name}:`}</b>
      <div className="mt-2 text-sm flex flex-wrap justify-center gap-2 ">
        {tech.map((x) => (
          <div key={x} className="mb-1">
            <span className="inline-block dark:text-gray-300 dark:bg-gray-300/20 bg-gray-800/20 border order-gray-800/30 dark:border-gray-300/30 px-2 py-1 rounded-full ">
              {x}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
