import React from 'react'
import Center from '../Center/Center'
import Preloader from '../../Common/Preloader/Preloader'

const Loading = ({children, isLoading}) => {
  return (
        isLoading
        ?
        <Center>
            <Preloader/>
        </Center>
        : 
        children
  )
}

export default Loading