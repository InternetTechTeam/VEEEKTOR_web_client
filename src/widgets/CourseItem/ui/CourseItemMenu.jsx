import React from 'react'
import DropdownMenu from 'shared/ui/DropdownMenu/DropdownMenu';
import OptionButton from 'shared/ui/DropdownMenu/Options/OptionButton';

const CourseItemMenu = ({children, className, id}) => {

    const hideCourse = () => {
        const hidden = JSON.parse(localStorage.getItem("hidden")) || {}
        
        hidden[id] = true;

        localStorage.setItem("hidden", JSON.stringify(hidden));
    }

    return (
        <div className={className}>
            <DropdownMenu options={[
                <OptionButton>В избранное</OptionButton>,
                <OptionButton onClick={hideCourse}>Скрыть из вида</OptionButton>
            ]}>
                {children}
            </DropdownMenu>
        </div>
    )
}

export default CourseItemMenu;