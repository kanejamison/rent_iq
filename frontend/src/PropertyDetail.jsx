import { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { fetchProperty } from './services/api'

export default function PropertyDetail({ propertyId, onBack }) {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    // Update URL when this component loads
    window.history.pushState({}, '', `/properties/${propertyId}`)

    fetchProperty(propertyId)
      .then(response => setProperty(response.data))
      .catch(error => console.error('Failed to load property:', error))
  }, [propertyId])

  if (!property) {
        return <div>Loading...</div>
      }

  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      <button onClick={onBack} className="w-full text-left mb-8 text-sm text-gray-600 hover:underline">
        ← Back to Properties
      </button>

      <div className="flex items-center gap-x-4">
        <img
          alt={property.name}
          src={
            property.imageUrl || 'https://picsum.photos/id/57/128/128'
          }
          className="size-32 flex-none rounded-lg bg-gray-800 object-cover ring-1 ring-white/10"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl/6 font-medium text-gray-800">
            {property.name}
          </h1>
          <div className="text-base/6 font-normal text-gray-700">
            {property.address}
          </div>
          <div className="text-sm/6 font-normal text-gray-700">
            <span className="font-semibold">Built:</span> {property.year_built} • <a
              href={property.website_url}
              rel="noreferrer noopener"
              target="_blank"
              className="text-sm/6 text-gray-800 hover:underline"
            >Visit Website</a>
          </div>
        </div>
      </div>

      <h2 className="text-xl/6 font-medium text-gray-800 pb-4 border-b border-gray-100">Unit Overview:</h2>

      <div className="">
        <div id="header" className="grid grid-cols-12 font-semibold border-b border-gray-100">
          <div id="photo" className="col-span-1 pr-2 py-4">Unit</div>
          <div id="name" className="col-span-7 p-2 py-4">&nbsp;</div>
          <div id="bedrooms" className="col-span-1 p-2 py-4">Bedrooms</div>
          <div id="bathrooms" className="col-span-1 p-2 py-4">Bathrooms</div>
          <div id="sqft" className="col-span-1 p-2 py-4">Sqft</div>
          <div id="menu" className="col-span-1 pl-2 py-4 text-right">&nbsp;</div>
        </div>
        <div id="table-content">
          {property.units?.map((unit) => (
            <div className="grid grid-cols-12 items-center border-b border-gray-100">
              <div id="photo" className="col-span-1 pr-2">
                <img
                  alt={unit.name}
                  src={
                    unit.imageUrl || 'https://picsum.photos/id/42/48/48'
                  }
                  className="size-12 flex-none rounded-lg bg-gray-800 object-cover ring-1 ring-white/10"
                />
              </div>
              <div id="name" className="col-span-7 p-2 py-4">
                {unit.name}<br/>
                <span className="text-sm text-gray-700">Unit description is going to go here once we have those.</span>
              </div>
              <div id="bedrooms" className="col-span-1 p-2 py-4">{unit.bedroom_count}</div>
              <div id="bathrooms" className="col-span-1 p-2 py-4">{unit.bathroom_count}</div>
              <div id="sqft" className="col-span-1 p-2 py-4">{unit.unit_size}</div>
              <div id="menu" className="col-span-1 pl-2 py-4 flex justify-end">
                <Menu as="div" className="relative ml-auto">
                  <MenuButton className="relative block text-gray-400 hover:text-gray-800">
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Open options</span>
                    <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="#"
                        rel="noreferrer noopener"
                        target="_blank"
                        className="block px-3 py-1 text-sm/6 text-gray-800 data-focus:bg-white/5 data-focus:outline-hidden"
                      >
                        Analyze
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          ))}
        </div>
      </div>



            <h2 className="text-xl/6 font-medium text-gray-800 pb-4 border-b border-gray-100">Unit Cards:</h2>




      <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 2xl:grid-cols-3 2xl:gap-x-8">
        {property.units?.map((unit) => (
          <li key={unit.id} className="shadow-sm overflow-hidden rounded-lg outline -outline-offset-1 outline-white/10">
            <div className="flex items-center gap-x-4 border-b border-white/10 bg-gray-50 p-6">
              <img
                alt={unit.name}
                src={
                  unit.imageUrl || 'https://picsum.photos/id/42/48/48'
                }
                className="size-12 flex-none rounded-lg bg-gray-800 object-cover ring-1 ring-white/10"
              />
              <div className="flex flex-col">
                <div className="text-base/6 font-medium text-gray-800 hover:underline">
                  <button onClick={(e) => {
                              onSelect(unit.id)
                            }}>
                    {unit.name}
                  </button>
                </div>
              </div>
              <Menu as="div" className="relative ml-auto">
                <MenuButton className="relative block text-gray-400 hover:text-gray-800">
                  <span className="absolute -inset-2.5" />
                  <span className="sr-only">Open options</span>
                  <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      rel="noreferrer noopener"
                      target="_blank"
                      className="block px-3 py-1 text-sm/6 text-gray-800 data-focus:bg-white/5 data-focus:outline-hidden"
                    >
                      Analyze
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
            <dl className="-my-3 divide-y divide-white/10 px-6 py-4 text-sm/6">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-600">Bedrooms</dt>
                <dd className="text-gray-500 text-right">
                  {unit.bedroom_count}
                </dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-600">Bathroom</dt>
                <dd className="text-gray-500 text-right">
                  {unit.bathroom_count}
                </dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-600">Square Footage</dt>
                <dd className="text-gray-500 text-right">
                  {unit.unit_size}
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}
