import React from 'react'
import DropdownMenu from 'shared/ui/DropdownMenu/DropdownMenu';
import OptionButton from 'shared/ui/DropdownMenu/Options/OptionButton';

const CourseItemMenu = ({children, className}) => {
    return (
        <div className={className}>
            <DropdownMenu options={[
                <OptionButton>В избранное</OptionButton>,
                <OptionButton>Скрыть из вида</OptionButton>
            ]}>
                {children}
            </DropdownMenu>
        </div>
      )
}

export default CourseItemMenu;