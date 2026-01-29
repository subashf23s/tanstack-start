const Hero = () => {
  return (
    <section className="container mx-auto min-h-dvh">
      <div className="grid grid-cols-2 items-center justify-between gap-10">
        <div className="pl-20 col-span-1 space-y-8">
          <p className="text-3xl text-gray-500">Come Hungry. Leave Happy.</p>
          <h2 className="text-6xl text-gray-800">
            Out food is <b>Delicios!!</b>
            <br />
            <b>Grab</b> some napkins <b>and Eat up.</b>
          </h2>
        </div>
        <img
          src="./images/food/group2.png"
          className="ml-auto col-span-1 w-3/4"
        />
      </div>
    </section>
  );
};

export default Hero;
