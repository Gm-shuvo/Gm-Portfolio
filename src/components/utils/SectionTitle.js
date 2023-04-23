import React from 'react'

export default function SectionTitle({ props }) {
  const { icon, title } = props;
  return (
    <div className="flex lg:pt-10 md:pt-12 pt-6 mb-16">
      <div className="border-[1px] border-accent py-2 lg:px-5 px-4 lg:text-sm md:text-sm text:xs flex items-center gap-2 rounded-full">
        <lord-icon
          target='div'
          src={icon}
          trigger='hover'
          colors='primary:#fff,secondary:#08a88a'
          style={{ width: '18px', height: '18px' }}
        >
        </lord-icon>
        <div className="md:text-sm text-xs">
          {title}
        </div>
      </div>
    </div>
  )
}
