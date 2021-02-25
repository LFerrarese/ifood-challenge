import { createContext, useState, ReactNode, useContext } from 'react';

interface StateProviderProps {
	children: ReactNode;
};

interface GenericObjectData {
	id: number;
	name: string;
};

interface FlavorData extends GenericObjectData {
	icon: string;
	highlight?: boolean;
	points?: number;
};

interface SizeData extends GenericObjectData {
	pieces: number;
}

interface StateContextData {
	chosenFlavor: FlavorData;
	highlightFlavor: FlavorData;
	chosenSize: SizeData;
	chosenDoughType: GenericObjectData;
	chosenEdge: GenericObjectData;
	chooseFlavor: (data: FlavorData) => void;
	chooseSize: (data: SizeData) => void;
	chooseDoughType: (data: GenericObjectData) => void;
	chooseEdge: (data: GenericObjectData) => void;
	hasHighlightFlavor: (data: FlavorData) => void;
};

export const StateContext = createContext({} as StateContextData);

export function StateContextProvider({ children }: StateProviderProps) {
	const [chosenFlavor, setChosenFlavor] = useState(null);
	const [highlightFlavor, setHighlightFlavor] = useState(null);
	const [chosenSize, setChosenSize] = useState(null);
	const [chosenDoughType, setChosenDoughType] = useState(null);
	const [chosenEdge, setChosenEdge] = useState(null);

	function chooseFlavor(data: FlavorData) {
		setChosenFlavor(data);
	}

	function chooseSize(data: GenericObjectData) {
		setChosenSize(data);
	}

	function chooseDoughType(data: GenericObjectData) {
		setChosenDoughType(data);
	}

	function chooseEdge(data: GenericObjectData) {
		setChosenEdge(data);
	}

	function hasHighlightFlavor(data: FlavorData) {
		setHighlightFlavor(data);
	}

	return (
		<StateContext.Provider value={{
			chosenFlavor,
			highlightFlavor,
			chosenSize,
			chosenDoughType,
			chosenEdge,
			chooseFlavor,
			chooseSize,
			chooseDoughType,
			chooseEdge,
			hasHighlightFlavor
		}}>
			{ children }
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext);
