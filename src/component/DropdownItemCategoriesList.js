import {DropdownItem} from "reactstrap";

const categoriesList = [
    {
        name: "Animals",
        url: "/animals"
    },
    {
        name: "Brain Teasers",
        url: "/brain_teasers"
    },
    {
        name: "General",
        url: "/general"
    }
]

const DropdownItemCategoriesList = () => {
    const dropdownItemCategoriesList = categoriesList.map((category)=> (
        <DropdownItem href={category.url}> {category.name} </DropdownItem>
    ))

    return (
        <>
            {dropdownItemCategoriesList}
        </>
    )
}

export default DropdownItemCategoriesList