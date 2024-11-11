interface ProfileProps {
  name: string;
  description: string[];
}

export function Profile({ name, description }: ProfileProps) {
  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-medium text-center">
        {name}
      </h1>
      <div className="text-center space-y-3 sm:space-y-4">
        {description.map((text, index) => (
          <p 
            key={index} 
            className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}