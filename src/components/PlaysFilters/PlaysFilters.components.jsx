import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

const PlaysFilter = (props) => {
    const dataRange = () => {
        return (
            <>
                <div className='flex items-center gap-4 px-1'>
                    <input type="checkbox" />
                    <h5 className='text-sm'>Date Range</h5>
                </div>
            </>
        )
    }
    return (
        <Disclosure >
            {
                ({ open }) => (
                    <>
                        <Disclosure.Button className="py-2 flex items-center gap-3 ">
                            {open ? <BiChevronUp /> : <BiChevronDown />}
                            <div>
                                <span className={open ? "text-red-600" : "text-gray-700"}>
                                    <p className='text-sm font-medium'>{props.title}</p>
                                </span>
                            </div>

                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 px-1 py-3">
                            <div className='flex flex-wrap gap-2'>
                                {props.tags.map((tag) => (
                                    <>
                                        <div className='border-2 border-gray-100 px-3 py-1'>
                                            <span className='text-red-600 text-sm'>{tag}</span>
                                        </div>
                                    </>
                                ))}

                            </div>
                            
                        </Disclosure.Panel>
                    </>
                )
            }
        </Disclosure>
    )
}

export default PlaysFilter;