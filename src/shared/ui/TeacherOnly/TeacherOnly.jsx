import { isTeacher } from 'app/providers/router/lib/checkRole';
import { selectUserRole } from 'app/store/slices/user/selectors/userRoleSelector'
import React from 'react'
import { useSelector } from 'react-redux'

const TeacherOnly = ({children}) => {
    const role = useSelector(selectUserRole);
  return (
    role && isTeacher(role.name) 
    ? 
        children
    : 
        null
  )
}

export default TeacherOnly