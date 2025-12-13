const Hero = () => {
  return (
    <div className="flex items-center justify-center h-full">
      {/* App Mockup Image - Full Screen */}
      <div className="w-full">
        <img
          src="/app-mockup.png"
          alt="RyzaFit App Interface"
          className="w-full h-auto max-h-[85vh] object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
