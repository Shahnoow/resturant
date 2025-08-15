import selectresturant from "../img/selectrestaurant.png";
import selectmenu from "../img/selectmenu.png";
import waitdelivery from "../img/waitdelivery.png";

const HowItWorks = () => {
  return (
    <section className="flex flex-col h-auto mb-44 items-center px-4 sm:px-6">
      <h2 className="mb-4 text-2xl sm:text-3xl md:text-3xl font-bold text-center">
        How it works
      </h2>
      <p className="mb-8 text-gray-700 text-center max-w-[90%] sm:max-w-[600px] text-sm sm:text-base">
        Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
        tellus in metus vulputate eu scelerisque felis.
      </p>

      <div className="grid gap-12 sm:gap-16 md:grid-cols-3 w-full">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={selectresturant}
            alt="Select Restaurant"
            className="max-h-48 sm:max-h-50 mb-4"
          />
          <h3 className="mb-4 text-lg sm:text-xl font-semibold">
            01) Select Restaurant
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Non enim praesent elementum facilisis leo vel fringilla. Lectus
            proin nibh nisl condimentum id. Quis varius quam quisque id diam
            vel.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={selectmenu}
            alt="Select Menu"
            className="max-h-48 sm:max-h-50 mb-4"
          />
          <h3 className="mb-4 text-lg sm:text-xl font-semibold">
            02) Select Menu
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi
            tempus iaculis urna id volutpat lacus. Odio ut sem nulla pharetra
            diam sit amet.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={waitdelivery}
            alt="Wait for Delivery"
            className="max-h-48 sm:max-h-50 mb-4"
          />
          <h3 className="mb-4 text-lg sm:text-xl font-semibold">
            03) Wait for Delivery
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel
            pretium lectus quam id leo. A scelerisque purus semper eget.
            Tincidunt arcu non.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
