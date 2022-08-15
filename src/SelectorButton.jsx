import { selectionNames } from "./selectionNames";

function SelectorButton(props) {
    const { buttonNames, onSelection, selectionType } = props;

    switch (selectionType) {
        case selectionNames.FilmTitle:
            return buttonNames.map(({ id, title }) => <button key={id} onClick={() => onSelection(title)}>{title}</button>)
        case selectionNames.Description:
            return buttonNames.map(({ id, description }) => <button key={id} onClick={() => onSelection(description)}>{description}</button>)
        case selectionNames.Director:
            return buttonNames.map(({ id, director }) => <button key={id} onClick={() => onSelection(director)}>{director}</button>)
        default:
            return buttonNames.map(({ id, title }) => <button key={id} onClick={() => onSelection(title)}>{title}</button>)
    }
}

export default SelectorButton;