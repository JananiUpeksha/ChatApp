const AuthImagePattern = ({ title, subtitle }) => {
  const images = [
    '/logo2.jpg',
    '/logo1.jpg',
    '/logo3.jpg',
    '/logo4.jpg',
    '/logo5.jpg',
    '/logo7.jpg',
    '/logo8.jpg',
    '/logo9.jpg',
    '/logo6.jpg',
  ];

  return (
    <div className="flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`aspect-square rounded-2xl bg-cover bg-center ${
                index % 2 === 0 ? "animate-pulse" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;