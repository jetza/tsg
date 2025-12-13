"use client";

import { motion } from "framer-motion";

export default function SavetiPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Saveti / Advice
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* Main Question */}
          <section>
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-400">
              Kako se pripremiti za vožnju na odmor? / How to prepare for
              driving on vacation?
            </h2>
          </section>

          {/* Section 1 */}
          <section>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500 uppercase">
              Saznajte uputstvo za vozače koji odlaze na odmor tokom leta / Find
              out the instruction for drivers who are going for their vacation
              during summer
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Many choose their car so they could drive it to their vacation,
              i.e. across borders or to the sea. Due to frequent traffic jams and
              high temperatures, it is important that your vehicle is in a good
              condition, so you could travel safely. Preparation of the vehicle
              for winter drive is somewhat more complicated, because you need to
              have winter tires, chains for the tires and similar equipment.
              However, there are some rules for summer drive as well.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500 uppercase">
              Proverite nivo ulja u motoru i stanje klima uređaja / Check the
              level of the oil in the engine and air condition
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Around 20% of drivers have either too small or too big amount of
              oil in the vehicle. Checking the oil is not complicated, so it is
              recommended to do it correctly. Checking the air condition of the
              vehicle is also necessary, and it should be done before the season.
              Air condition is easily checked by checking if it cools down the
              vehicle and if it works in all gears. If it is not cooling the air
              well enough, it means there is not enough fluids in the system. The
              gas in the device should be refilled every 2-3 years (in other
              words, 4 years after car has been produced). The lack of fluids is
              often the consequence of leaking through the damaged pipes. These
              problems are solved in specialized services. One more thing that is
              necessary for the air condition to work properly, is changing
              filters. Filter gathers bacteria and stops it from reaching vehicle
              cabin. Car producers usually recommend changing filters every
              10000-15000 km.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500 uppercase">
              Ne preterivati sa hlađenjem kabine / Do not exaggerate with
              cooling the cabin
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Temperature that is not adjusted correctly could be very dangerous.
              It is recommended that the difference in temperature in the cabin
              and outside the vehicle should not be more than 5-6°C. It is
              recommended that, if we want to make difference in temperatures
              more than 10°C, we turn off the air condition 15 minutes before we
              leave the vehicle, so the difference in temperatures would decrease.
              Another advice is to try to park your vehicle in the shadow and to
              use sun protectors for the vehicle.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500 uppercase">
              Bezbednost na putevima tokom letnje sezone putovanja / Road safety
              during traveling seasons
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Feeling tired during driving is the cause of many traffic accidents.
              The main thing is not to start the journey if you haven&apos;t had
              rest. It would be ideal if you could make 30 min break after every
              two hours of driving. Of course, it is of biggest importance to
              know the regulations of the country. Never try risky overtaking.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
