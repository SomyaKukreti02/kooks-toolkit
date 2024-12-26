import ToolCard from "../components/ToolCard";
function Home() {
  const cards = [
    {
      title: "Temperature Converter",
      description: "Convert between Celsius, Fahrenheit, and Kelvin.",
      link: "/temperature-converter",
      image:
        "https://images.pexels.com/photos/3873174/pexels-photo-3873174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Energy Converter",
      description: "Convert between Joules, Calories, and Electronvolts.",
      link: "/energy-converter",
      image: "https://images.pexels.com/photos/414943/pexels-photo-414943.jpeg",
    },
    {
      title: "Frequency Converter",
      description: "Convert between Hertz, Kilohertz, and Megahertz.",
      link: "/frequency-converter",
      image:
        "https://images.pexels.com/photos/1093161/pexels-photo-1093161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Password Generator",
      description: "Generate random passwords.",
      link: "/password-generator",
      image:
        "https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl text-white font-semibold">Hola! Welcome 👋</h2>
      <p className="text-white">
        This is a simple toolkit to convert temperature, energy, and frequency
        units. You can also generate random passwords and more.
      </p>
      <div className="cards grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {cards.map((card, index) => (
          <ToolCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Home;
