import { createContext, useState, ReactNode, useContext, useEffect } from 'react';

interface StateProviderProps {
	children: ReactNode;
};

interface FlavorData {
	id: number;
	name: string;
	icon: string;
	highlight: boolean;
};

interface GenericObjectData {
	id: number;
	name: string;
};

interface StateContextData {
	chosenFlavor: FlavorData;
	chosenSize: GenericObjectData;
	chosenDoughType: GenericObjectData;
	chosenEdge: GenericObjectData;
	chooseFlavor: (data: FlavorData) => void;
};

export const StateContext = createContext({} as StateContextData);

export function StateContextProvider({ children }: StateProviderProps) {
	const [chosenFlavor, setChosenFlavor] = useState(null);
	const [chosenSize, setChosenSize] = useState(null);
	const [chosenDoughType, setChosenDoughType] = useState(null);
	const [chosenEdge, setChosenEdge] = useState(null);

	function chooseFlavor(data: FlavorData) {
		setChosenFlavor(data);
	}

	return (
		<StateContext.Provider value={{
			chosenFlavor,
			chosenSize,
			chosenDoughType,
			chosenEdge,
			chooseFlavor
		}}>
			{ children }
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext);
