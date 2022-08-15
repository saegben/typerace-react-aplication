import { useState } from "react";
import { selectionNames } from "./selectionNames";
import SelectorButton from "./SelectorButton";

function SnippetSelector(props) {
    const { films, chooseSnippet } = props;
    const [whatToType, setWhatToType] = useState(null);

    const selections = [
        { id: 1, title: selectionNames.FilmTitle },
        { id: 2, title: selectionNames.Description },
        { id: 3, title: selectionNames.Director },
    ];

    function chooseWhatToType(selection) {
        setWhatToType(selection);
    }

    if (!whatToType) {
        return (
            <div>
                <h4>What would you like to type?</h4>
                <SelectorButton buttonNames={selections} onSelection={chooseWhatToType} />
            </div>
        );
    }

    if (films) {
        return (
            <div>
                <h4>Choose One</h4>
                <SelectorButton buttonNames={films} onSelection={chooseSnippet} selectionType={whatToType} />
            </div>
        );
    }

    return null
};

export default SnippetSelector;