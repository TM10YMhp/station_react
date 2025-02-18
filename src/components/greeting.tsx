export const Greeting = () => {
  const getGreeting = (currentHour: number) => {
    if (currentHour >= 5 && currentHour < 12) {
      return "Buenos dias";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Buenas tardes";
    } else {
      return "Buenas noches";
    }
  };

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const greeting = getGreeting(currentHour);

  return <p className="text-3xl font-bold">{greeting}</p>;
};
