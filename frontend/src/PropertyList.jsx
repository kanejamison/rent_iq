import { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { fetchProperties } from './services/api'

export default function PropertyList({ onSelect }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Update URL when this component loads
    window.history.pushState({}, '', '/')

    fetchProperties()
      .then(response => setProperties(response.data))
      .catch(error => console.error('Failed to load properties:', error))
  }, [])

  return (
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 2xl:grid-cols-3 max-w-7xl 2xl:gap-x-8 mx-auto">
      {properties.map((property) => (
        <li key={property.id} className="shadow-sm overflow-hidden rounded-lg outline -outline-offset-1 outline-white/10">
          <div className="flex items-center gap-x-4 border-b border-white/10 bg-gray-50 p-6">
            <button onClick={(e) => {
                        onSelect(property.id)
                      }} className="group contents cursor-pointer">
              <img
                alt={property.name}
                src={
                  property.imageUrl || 'https://picsum.photos/id/57/48/48'
                }
                className="size-12 flex-none rounded-lg bg-gray-800 object-cover ring-1 ring-white/10"
              />
              <div className="flex flex-col">
                <div className="text-base/6 font-medium text-gray-800 group-hover:underline">

                    {property.name}

                </div>
              </div>
            </button>
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
                    onClick={(e) => {
                            e.preventDefault()
                            onSelect(property.id)
                          }}
                    className="block px-3 py-1 text-sm/6 text-gray-800 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    View<span className="sr-only">, {property.name}</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href={property.website_url}
                    rel="noreferrer noopener"
                    target="_blank"
                    className="block px-3 py-1 text-sm/6 text-gray-800 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Visit Website
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <dl className="-my-3 divide-y divide-white/10 px-6 py-4 text-sm/6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-600 hidden">Address</dt>
              <dd className="text-gray-500 text-right">
                {property.address}
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-600">Year Built</dt>
              <dd className="text-gray-500 text-right">
                {property.year_built}
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-600">Units</dt>
              <dd className="text-gray-500 text-right">
                XX
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  )
}
