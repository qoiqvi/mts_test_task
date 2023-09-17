import { Fragment, memo, useEffect, useState } from "react"
import cls from "./SearchSelect.module.scss"
import { Text } from "shared/ui/Text"
import { classNames } from "shared/lib/classNames/classNames"

export interface SearchSelectOption<T extends string> {
	value: T
	content: string
	disabled?: boolean
}

export type SearchSelectWidth = "small" | "medium" | "large"

export interface SearchSelectProps<T extends string> {
	options: SearchSelectOption<T>[]
	notFound: string
	readonly?: boolean
	onChange?: (value: string) => void
	value?: T
	width?: SearchSelectWidth
	placeholder?: string
}

import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"

const people = [
	{ name: "Wade Cooper" },
	{ name: "Arlene Mccoy" },
	{ name: "Devon Webb" },
	{ name: "Tom Cook" },
	{ name: "Tanya Fox" },
	{ name: "Hellen Schmidt" },
]

export const Select = () => {
	const [selected, setSelected] = useState(people[0])

	return (
		<div className={cls.selectContainer}>
			<Listbox
				value={selected}
				onChange={setSelected}
			>
				<div className="relative mt-1">
					<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
						<span className="block truncate">{selected.name}</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<ChevronUpDownIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</span>
					</Listbox.Button>
					<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{people.map((person, personIdx) => (
							<Listbox.Option
								key={personIdx}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-10 pr-4 ${
										active ? "bg-amber-100 text-amber-900" : "text-gray-900"
									}`
								}
								value={person}
							>
								{({ selected }) => (
									<>
										<span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
											{person.name}
										</span>
										{selected ? (
											<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
												<CheckIcon
													className="h-5 w-5"
													aria-hidden="true"
												/>
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</div>
			</Listbox>
		</div>
	)
}
