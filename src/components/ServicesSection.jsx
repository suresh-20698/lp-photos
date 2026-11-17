import React from 'react'
import { ServiceCard } from './ServiceCard'

export function ServicesSection({ services }) {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Section Header */}
      <h2 className="text-lg sm:text-xl font-semibold text-[#063423] tracking-tight mb-1">
        Our Services
      </h2>
      <p className="text-xs text-[#414943]/80 font-normal mb-3.5">
        Wedding &amp; Traditional Celebrations
      </p>

      {/* Services List Panel */}
      <div className="w-full bg-[#fbf8ed]/75 rounded-xl p-1 sm:p-1.5 border border-[#214b38]/12 shadow-[inset_0_1px_3px_rgba(6,52,35,0.03)]">
        <div className="flex flex-col w-full">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      <p className="text-xs text-[#414943]/70 italic tracking-wider mt-3.5 font-normal">
        And Much More...
      </p>
    </section>
  )
}
