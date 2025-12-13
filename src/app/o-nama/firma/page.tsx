"use client";

import { motion } from "framer-motion";

export default function FirmaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Firma / Company
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Traffic Safety Group (TSG) */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500">
              Traffic Safety Group (TSG)
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Traffic Safety Group (TSG) is the leading consulting company in
              the field of traffic safety and transport in the Southeastern
              Europe. The company was founded in 2008.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team consists of experts with long-term practical experience.
              Experienced team of traffic experts worked on more than 5000 cases
              of traffic accidents.
            </p>
          </section>

          {/* TRAFFIC ACCIDENT EXPERTISE */}
          <section className="mt-12">
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500 uppercase">
              Traffic Accident Expertise
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Results of the traffic accident expertise, represent the part of
                the evidence material that is used for reaching the Court
                decision. Therefore traffic accident expertise has to be done
                correctly in order for the Court decision to be based on the
                results of the expertise.
              </p>
              <p>
                Traffic accident expertise can be done according to the Court
                order, order of the defense counsel or the prosecutor, order of
                the other legal entity for determining facts that are important
                for the further Court process, the parties involved in the Court
                process or any other legal entity for further business.
              </p>
              <p>
                Traffic accident expertise can be done in order to determine
                mistakes of the traffic accident participants, but as well for
                determining credibility of the traffic accident occurrence, in
                other words - for detecting and proving fraud in insurance.
              </p>
              <p>
                As it is written in the Law: &ldquo;...Expertise represent
                expert activities that together with the scientific, technical
                and other achievements, give to the Court or the other entity in
                charge for the procedure, necessary expert knowledge that is used
                during determining, evaluating or clarifying legally relevant
                facts...&rdquo;.
              </p>
            </div>
          </section>

          {/* SYMPOSIUMS */}
          <section className="mt-12">
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500 uppercase">
              Symposiums
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Beside traffic accident expertise, Traffic Safety Group (TSG)
                organizes International Symposiums: &ldquo;Traffic Accident
                Expertise and Fraud in Insurance&rdquo; since 2009.
              </p>
              <p>
                There is a rising number of litigations and procedures due to
                frauds in insurance. Among the accused, there were people from
                the police, traffic experts, claim accountants, liquidators,
                leaders of the insurance companies etc. Faculty for Transport and
                Traffic Engineering and TSG developed the models for finding out
                fraud in insurance and doing traffic accident expertise. Special
                attention is given to insurance companies, lawyers, judges and
                prosecutors, and everyone who is interested in the field of fraud
                in insurance.
              </p>
              <p>
                The usage of the Law on Road Traffic Safety is specific, thus the
                knowledge from this field is systematized and made to make the
                work easier for the judges, prosecutors, lawyers and the other
                parties interested in correct usage of the Law in the procedures.
              </p>
              <p>
                Beside the differences in the way of expert expressing, the
                differences have been noticed in estimations and analysis of
                dangerous situations. In order to achieve clear expressing of the
                experts about causes and contributions concerning the occurrence
                and the analysis of the dangerous situation, at the Symposiums we
                organize, we recommend the unified way of expressing the opinions
                and analyzing dangerous situations. That is important in the
                process for the prosecutors, judges, lawyers and parties
                involved, so it could be clearly and easily understandable what
                experts could determine, and, on the other hand, what the experts
                determined.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
